import { subYears,addYears } from 'date-fns';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Calendar, NameOrOptions, CalendarOptions } from '@ionic-native/calendar/ngx';
import { Platform } from '@ionic/angular';
import { EventsService } from './events.service';
import { DateTimeService } from './datetime.service';
import { DetailService } from './detail.service';
import { FairworkService } from './fairwork.service';
import { SQLiteService } from './sqlite.service';
import { AppUserSettings } from './appTypes';
import { AppCalendar, AppCalendarList, testShift,defaultAUSettings } from './appTypes';
import { FirebaseService } from './firebase.service';
////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////
export class CalendarService {
////////////////////////////////////////////////////////////////
  initDone:boolean=false;
  hasPerms:boolean|null=null;
  calEnabled:boolean|null=null;
  calEvents:any={shift:null,task:null};
  userSettings:AppUserSettings;
  uAlertOpts:any;
  calList:AppCalendarList|null=null;
  allCalList:AppCalendarList|null=null;
  selectedCal:AppCalendar|null=null;
  calOpts:CalendarOptions={
    id:<string>null,
    firstReminderMinutes:<number>null,
    calendarName:<string>null,
    calendarId:<number>null
  };
  isReschedule:boolean=false;
  beforeTimes:any={shift:60,task:60};
  evIco:any={shift:'\uD83D\uDEE1',confirm:'\uD83D\uDC4C',task:'\uD83D\uDCCB'};
  evBName:any={shift:'𝗪𝗼𝗿𝗸 𝗦𝗵𝗶𝗳𝘁',confirm:'𝘊𝘰𝘯𝘧𝘪𝘳𝘮 𝘚𝘩𝘪𝘧𝘵',task:'𝗪𝗼𝗿𝗸 𝗧𝗮𝘀𝗸'};
  tasksInProg:boolean=false;
  shiftsInProg:boolean=false;
  schedEvs:any={shift:[],task:[]};
  showIncome:boolean=null;
  // GVars -----------------------------------------------------
  myObj:any=null;
  workAreas:any[]=null;
  workName:string=null;
  workCode:string=null;
  workPeople:any[]=[];
  workLocation:string=null;
////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private plt:Platform,
    private evServ:EventsService,
    private dT:DateTimeService,
    private fwServ:FairworkService,
    private sqlServ:SQLiteService,
    private cal:Calendar,
    private dS:DetailService,
    private fireServ:FirebaseService
  ) { }
////////////////////////////////////////////////////////////////
  doInitCal() { //this.logger.info('\uD83D\uDCC5 [calServ|doInitCal] ()...');
    this.plt.ready().then(async()=>{
      this.evServ.subscribe('calInit',async stage=>{this.logger.info('\uD83D\uDCC5 [calServ|doInitCal] (EVENT) [STAGE] = '+stage+' ... ');
        if(stage==='calenabled'){const checkSCalRes:any=await this.checkSheriffCal();await this.setSelectedCal(checkSCalRes.data);this.initGVars()}
        else{this.initDone=true;this.doScheduleEvents()}
      });
      this.initRefreshCalSettings();
    });
  }
////////////////////////////////////////////////////////////////
  async doScheduleEvents() {
    let schedTypeTtl:number=0;let schedTypeCount:number=0;let schedSTime:Date=new Date();
    let cM:string;this.isReschedule?cM='♻️[RE]Scheduling':cM='Init Scheduling';
    this.evServ.subscribe('calSched',()=>{schedTypeCount++;
      if(schedTypeCount===schedTypeTtl){const schedTT=(this.evServ.getDur(schedSTime)/1000).toFixed(2)+'s';
        const tShifts:number=this.schedEvs.shift.length;const tTasks:number=this.schedEvs.task.length;const tEvs:number=tShifts+tTasks;
        this.logger.info('\uD83D\uDCC5 - 🏁 FINISHED '+cM+': '+tEvs+' Total Events Added in '+schedTT+'s:');
        let sShiftsIds:string[]=[];for(let i=0;i<this.schedEvs.shift.length;i++){sShiftsIds.push(this.schedEvs.shift[i].dId+'|'+this.schedEvs.shift[i].cId)};
        this.logger.info('\uD83D\uDCC5 - 📑 Shifts: '+sShiftsIds.join(', ')+' ('+tShifts+')');
        let sTasksIds:string[]=[];for(let i=0;i<this.schedEvs.task.length;i++){sTasksIds.push(this.schedEvs.task[i].dId+'|'+this.schedEvs.task[i].cId)};
        this.logger.info('\uD83D\uDCC5 - 🤹🏼 Tasks: '+sTasksIds.join(', ')+' ('+tTasks+')');
        if(this.isReschedule){this.evServ.publish('reschedFinish','calendar');this.isReschedule=false};
        this.evServ.destroy('calSched');
      }
    });
    await this.deleteAllSheriffEvs();this.schedEvs.shift=[];this.schedEvs.task=[];
    this.evServ.publish('alertsStatus',true);
    if(this.calEnabled){this.logger.info('\uD83D\uDCC5 {alertMethods.calendar=TRUE}');
      for(const v of Object.values(this.calEvents)){if(v){schedTypeTtl++}};
      if(schedTypeTtl>0){
        if(this.calEvents.shift){this.logger.info('\uD83D\uDCC5 {alertEvents.shift=TRUE} - '+cM+' Shifts...');this.calCheckShifts(null)}
        else{this.logger.info('\uD83D\uDCC5 {alertEvents.shift=FALSE} - !SKIPPING! '+cM+' Shifts.')};
        if(this.calEvents.task){this.logger.info('\uD83D\uDCC5 {alertEvents.task=TRUE} - '+cM+' Tasks...');this.calCheckTasks(null)}
        else{this.logger.info('\uD83D\uDCC5 {alertEvents.task=FALSE} - !SKIPPING! '+cM+ 'Tasks.')}
      }else{
        if(this.isReschedule){this.evServ.publish('reschedFinish','calendar');this.isReschedule=false};
        this.logger.info('\uD83D\uDD14 {alertEvents.shift=FALSE} && {alertEvents.task=FALSE} - !SKIPPING! Notification '+cM)
      }
    }else{
      if(this.isReschedule){this.evServ.publish('reschedFinish','calendar');this.isReschedule=false};
      this.logger.info('\uD83D\uDCC5 {alertMethods.calendar=FALSE}')
    }
  }
////////////////////////////////////////////////////////////////
  async updateCalSettings():Promise<boolean> { this.logger.info('[calServ|updateCalSettings] ()...');
    this.isReschedule=true;
    await this.initRefreshCalSettings();
    this.doScheduleEvents();
    return Promise.resolve(true);
  }  
////////////////////////////////////////////////////////////////
  async createCal():Promise<boolean> { this.logger.info('\uD83D\uDCC5 [calServ|createCal] ()...');
    let newCalOpts:NameOrOptions={calendarName:'Sheriff Calendar',calendarColor:'#FF9800'};
    try{await this.cal.createCalendar(newCalOpts);return Promise.resolve(true)}
    catch(cCErr){return Promise.resolve(false)}
  }
////////////////////////////////////////////////////////////////
  async checkSheriffCal():Promise<any> { this.logger.info('\uD83D\uDCC5 [calSev|checkSheriffCal] ()...');
    try{
      const cLResAll:AppCalendarList=await this.cal.listCalendars();
      this.allCalList=cLResAll;
      const cLRes:AppCalendarList=cLResAll.filter(c=>c.isPrimary);
      this.calList=cLRes;
      const hasSCal:AppCalendar=cLRes.filter(c=>c.name.toString()==='Sheriff Calendar')[0];
      if(hasSCal){return Promise.resolve({result:true,data:hasSCal.id})}
      else{
        if((await this.createCal())){
          const newCLResAll:AppCalendarList=await this.cal.listCalendars();
          this.allCalList=newCLResAll;
          const newCLRes:AppCalendarList=newCLResAll.filter(c=>c.isPrimary);
          this.calList=newCLRes;
          const hasNewSCal:AppCalendar=newCLRes.filter(c=>c.name.toString()==='Sheriff Calendar')[0];
          return Promise.resolve({result:true,data:hasNewSCal.id})
        }else{return Promise.resolve({result:false,data:null})}
      }
    }catch(lCErr){this.logger.info('[checkSheriffCal] (ERROR): '+JSON.stringify(lCErr));return Promise.resolve({result:false,data:null})}
  }
////////////////////////////////////////////////////////////////
  async setSelectedCal(sheriffCalId:string|null):Promise<boolean> { this.logger.info('\uD83D\uDCC5 [calServ|setSelectedCal] (sheriffCalId[backupOnly]'+sheriffCalId+')... ');
    const saveSettCalId=async(id:string):Promise<boolean>=>{this.userSettings.alerts.options.alertCal.value=id;await this.sqlServ.setSettings(this.userSettings);await this.fireServ.updateSettingsObj(this.userSettings);return Promise.resolve(true)};
    let calChoice:AppCalendar=null;
    let sCalObj:AppCalendar;
    if(sheriffCalId!==null){sCalObj=this.calList.filter(c=>c.id.toString()===sheriffCalId)[0]};
    if(this.uAlertOpts.alertCal.value!==null){
      const selCalId:string=this.uAlertOpts.alertCal.value;
      const matchCal:AppCalendar|undefined=this.calList.filter(c=>c.id.toString()===selCalId.toString())[0];
      if(matchCal){calChoice=matchCal}
      else{if(sheriffCalId!==null){calChoice=sCalObj}else{if(this.calList.length>0){calChoice=this.calList[0]}}}
    }else{if(sheriffCalId!==null){calChoice=sCalObj}else{if(this.calList.length>0){calChoice=this.calList[0]}}};
    this.selectedCal=calChoice;this.calOpts.id=String(calChoice.id);this.calOpts.calendarName=String(calChoice.name);this.calOpts.calendarId=Number(calChoice.id);
    await saveSettCalId(calChoice.id);
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////
  async checkCalPerms():Promise<boolean> { //this.logger.info('\uD83D\uDCC5 [calServ|checkCalPerms] ()...');
    const hRWP:boolean=await this.cal.hasReadWritePermission();
    this.hasPerms=hRWP;
    return Promise.resolve(hRWP)
  }
////////////////////////////////////////////////////////////////
  reqCalPerms():Promise<boolean> { //this.logger.info('\uD83D\uDCC5 [calServ|reqCalPerms] ()...');
    this.cal.requestReadWritePermission();
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////
  async initGVars() { //this.logger.info('\uD83D\uDCC5 [calServ|initGVars] ()...');
    this.myObj=await this.dS.getMy();
    this.workAreas=this.dS.workAreas;
    this.workPeople=this.dS.pplArr;
    this.workName=this.dS.workName;
    this.workCode=this.dS.workCode;
    if(this.myObj!==null&&this.myObj.hasOwnProperty('Workplace')){
      if(this.myObj.Workplace.length>0){
        const loc:string=this.myObj.Workplace[0]._DPMetaData.AddressObject.Print;
        if(loc!==null&&loc!==undefined&&loc.length>0){this.workLocation=loc.replace('\n','')}else{this.workLocation=this.workName}
      }else{this.workLocation=this.workName};
    };
    this.evServ.publish('calInit','gvars');
  }
////////////////////////////////////////////////////////////////
  async initRefreshCalSettings():Promise<boolean> { //this.logger.info('\uD83D\uDCC5 [calServ|initCalEnabled] ()...');
    let savedUSettObj:AppUserSettings|null
    const dsRes:AppUserSettings|null=await this.dS.getSettings();
    if(dsRes!==null){savedUSettObj=dsRes}
    else{const dbRes:any=await this.sqlServ.getSettings();if(dbRes.result){savedUSettObj=dbRes.data}
    else{const fireRes:any=await this.fireServ.getSettingsValue(null);if(fireRes.result){savedUSettObj=fireRes.data}
    else{savedUSettObj=defaultAUSettings()}}};
    this.userSettings=savedUSettObj;
    this.uAlertOpts=this.userSettings.alerts.options;
    this.calEnabled=Boolean(this.uAlertOpts.alertMethods.value.calendar);
    this.calEvents.shift=Boolean(this.uAlertOpts.alertEvents.value.shift);
    this.calEvents.task=Boolean(this.uAlertOpts.alertEvents.value.task);
    this.beforeTimes.shift=Number(this.uAlertOpts.alertBefore.value.shift.mins);
    this.beforeTimes.task=Number(this.uAlertOpts.alertBefore.value.task.mins);
    this.showIncome=Boolean(this.userSettings.payrates.options.show.value);
    if(!this.initDone){this.evServ.publish('calInit','calenabled');return Promise.resolve(true)}
    else{
      const freshCL:any[]=(await this.cal.listCalendars()).filter((c:any)=>Boolean(c.isPrimary)===true);
      if(freshCL&&freshCL.length>0){this.calList=freshCL;
        if(String(this.calOpts.id)!==String(this.uAlertOpts.alertCal.value)){
          const matchCArr:any[]=this.calList.filter(c=>String(c.id)===String(this.uAlertOpts.alertCal.value));
          if(matchCArr&&matchCArr.length>0){
            const matchCal:AppCalendar|undefined=matchCArr[0];
            this.selectedCal=matchCal;
            this.calOpts.id=String(matchCal.id);
            this.calOpts.calendarName=String(matchCal.name);
            this.calOpts.calendarId=Number(matchCal.id)
            return Promise.resolve(true);
          }else{return Promise.resolve(true)}
        }else{return Promise.resolve(true)}
      }else{return Promise.resolve(true)}
    };
  }
////////////////////////////////////////////////////////////////
  updateBeforeTimes(event:string,mins:number) { this.logger.info('\uD83D\uDCC5 [calServ|updateBeforeTimes] ('+event+','+mins+')...');
    this.beforeTimes[event]=mins;
  }
////////////////////////////////////////////////////////////////
  capType(lowT:string):string{return lowT.charAt(0).toUpperCase()+lowT.slice(1)}
////////////////////////////////////////////////////////////////
  triggerTime(evD:Date,beforeT:number):Date{return this.dT.subMs(evD,beforeT)}
////////////////////////////////////////////////////////////////
  async deleteAllSched():Promise<any> { this.logger.info('\uD83D\uDCC5 [calServ|deleteAllSched] ()...');
    await this.deleteAllSheriffEvs();this.schedEvs.shift=[];this.schedEvs.task=[];return Promise.resolve(true)
  }
////////////////////////////////////////////////////////////////
  async reScheduleAll() { this.logger.info('\uD83D\uDCC5 [calServ|reScheduleAll] ()...');
    this.isReschedule=true;
    await this.deleteAllSched();
    this.doInitCal();
  }
////////////////////////////////////////////////////////////////
  getBeforeTime(event:string):number{return this.beforeTimes[event]};
////////////////////////////////////////////////////////////////
  getFName(empId:number):string{
  const isE=(name:string)=>{if(name===''||name===' '||name===null||name===undefined){return true}else{return false}};
  let fN:string;const pObArr:any[]=this.workPeople.filter(p=>p.EmpId===empId);
  if(pObArr.length>0){const rawFN:string=pObArr[0].FirstName;const rawLN:string=pObArr[0].LastName;const rawDN:string=pObArr[0].DisplayName;
    if(!isE(rawFN)&&!isE(rawLN)){fN=this.capType(rawFN)+' '+this.capType(rawLN.charAt(0))+'.'}
    else if(!isE(rawFN)){fN=this.capType(rawFN)}
    else if(!isE(rawDN)){
      const rDNArr:any[]=rawDN.split(' ');
      if(rDNArr.length>1){fN=this.capType(rDNArr[0])}
      else{fN=this.capType(rawDN)}
    }
  }else{fN='NK'};return fN};
////////////////////////////////////////////////////////////////
  async deleteCal(calName:string|null):Promise<any> { this.logger.info('\uD83D\uDCC5 [calServ|deleteCal] ('+calName+')...')
    let delName:string;calName!==null?delName=calName:delName='Sheriff Calendar';
    const dCalRes:any=await this.cal.deleteCalendar(delName);
    if(dCalRes){return Promise.resolve({result:true,data:dCalRes})}else{return Promise.resolve({result:false,data:dCalRes})}
  }
////////////////////////////////////////////////////////////////
  async getPay(rosterObj:any):Promise<any> { const payRes:any=await this.fwServ.getShiftPay(rosterObj);return Promise.resolve(payRes)}
/////////////////////////////////////////////////////////////////
  async formatShift(rawNS:any):Promise<any> {
    const wNames=(oUId:number):any=>{let oUArr=this.workAreas.filter(oU=>(oU.Id===oUId));return {cname:oUArr[0]['CompanyCode'],warea:oUArr[0]['OperationalUnitName']}};
    let niceNS:any=rawNS;
    const nN=wNames(rawNS.OperationalUnit);nN.warea?niceNS['nOpUnit']=nN.warea:niceNS['nOpUnit']='';nN.cname?niceNS['nCompanyName']=nN.cname:niceNS['nCompanyName']=this.workName;
    niceNS['nDate']=this.dT.format(new Date(rawNS.Date),'EEEE, d MMMM yyyy');
    const nStartEndObj=this.dT.rosterSETimes(rawNS.StartTime,rawNS.EndTime);niceNS['nStart']=nStartEndObj.s.trim();niceNS['nEnd']=nStartEndObj.e.trim();
    const calcPay:any=await this.getPay(rawNS);
    niceNS['nIncomeObj']=calcPay;
    niceNS['nIncome']=calcPay.t.toFixed(0);
    let tT:Duration={hours:0,minutes:0};
    if(rawNS.TotalTime.toString().includes('.')){const ttArr:any[]=rawNS.TotalTime.toString().split('.');tT.hours=parseInt(ttArr[0]);tT.minutes=Math.round(Number('0.'+ttArr[1])*60)}else{tT.hours=rawNS.TotalTime};
    niceNS['nTotalTime']=tT;
    niceNS['nConfirmStatus']=rawNS.ConfirmStatus;
    let lnConfirmBy:any;rawNS.ConfirmBy===0?lnConfirmBy=false:lnConfirmBy=this.dT.Dut(rawNS.ConfirmBy);niceNS['nConfirmBy']=lnConfirmBy;
    return Promise.resolve(niceNS);
  }
/////////////////////////////////////////////////////////////////
  async createCalEv(eventObj:any):Promise<any> { //this.logger.info('\uD83D\uDCC5 [calServ|createCalEv] ()...');
    let evType:string;
    let reqConf:boolean;
    let cCEvArr:any[]=[];
    let cCEvObj:any={title:<string>null,location:<string>null,notes:<string>null,startDate:<Date>null,endDate:<Date>null,options:<CalendarOptions>{}};
    // SHIFTS -------------------------------------------------
    if(eventObj.hasOwnProperty('MatchedByTimesheet')){
      evType='shift';const rawShiftO:any=eventObj;
      let shiftEvObj:any=cCEvObj;let shiftEvCalOpts:any=this.calOpts;
      shiftEvCalOpts.firstReminderMinutes=this.beforeTimes[evType];
      shiftEvObj.title=this.evIco.shift+this.evBName.shift+' @ '+this.workCode+' ('+rawShiftO.nOpUnit+')';
      shiftEvObj.location=this.workLocation;
      const aNDur:any=rawShiftO.nTotalTime;
      let nDurStr:string;if(aNDur.hours>0&&aNDur.minutes>0){nDurStr=aNDur.hours+':'+aNDur.minutes}else{if(aNDur.hours>0){nDurStr=aNDur.hours+'h'}else{nDurStr=aNDur.minutes+'m'}};
      let aNIncome:string;this.showIncome?aNIncome='\n\uD83D\uDCB2 '+rawShiftO.nIncome:aNIncome='';
      shiftEvObj.notes='Sheriff Event ID #'+rawShiftO.Id.toString()+'\n\u23F1 '+nDurStr+aNIncome;
      const sD:Date=this.dT.Dut(rawShiftO.StartTime);const eD:Date=this.dT.Dut(rawShiftO.EndTime);
      shiftEvObj.startDate=sD;shiftEvObj.endDate=eD;
      shiftEvObj.options=shiftEvCalOpts;
      cCEvArr.push(shiftEvObj)
      // Confirm Shift ----------------------------------------
      if(rawShiftO.ConfirmStatus===1&&rawShiftO.nConfirmBy!==false){
        reqConf=true;let confEvObj:any=cCEvObj;let confEvCalOpts:any=this.calOpts;
        confEvCalOpts.firstReminderMinutes=this.beforeTimes[evType];
        confEvObj.title=this.evIco.confirm+this.evBName.confirm+' Deadline: '+this.dT.format(new Date(rawShiftO.Date),'EEE, d MMM')+' @ '+this.workCode+' ('+rawShiftO.nOpUnit+')';
        confEvObj.location=null;
        confEvObj.notes='Sheriff Event ID #'+rawShiftO.Id.toString();
        confEvObj.startDate=rawShiftO.nConfirmBy;
        confEvObj.endDate=this.dT.addHrs(rawShiftO.nConfirmBy,1);
        confEvObj.options=confEvCalOpts;
        cCEvArr.push(confEvObj)
      }
    // TASKS --------------------------------------------------
    }else if(eventObj.hasOwnProperty('TaskSetupId')){
      evType='task';const rawTaskO:any=eventObj;
      let taskEvObj:any=cCEvObj;let taskEvCalOpts:any=this.calOpts;
      taskEvCalOpts.firstReminderMinutes=this.beforeTimes[evType];
      taskEvObj.title=this.evIco.task+this.evBName.task+'- Task #'+rawTaskO.Id+' from '+this.getFName(rawTaskO.UserEntry)+' @ '+this.workCode;
      taskEvObj.location=this.workLocation;
      taskEvObj.notes='Sheriff Event ID #'+rawTaskO.Id.toString();
      taskEvObj.startDate=new Date(rawTaskO.DueDate);
      taskEvObj.endDate=this.dT.addHrs(taskEvObj.startDate,1);
      taskEvObj.options=taskEvCalOpts;
      cCEvArr.push(taskEvObj)
    }else{this.logger.info('\uD83D\uDCC5 [calServ|createCalEv] (Error): Unknown eventObj Type?')};
    // FN ------------------------------------------------------
    for(let i=0;i<cCEvArr.length;i++){
      const cCEO:any=cCEvArr[i];
      try{
        const cCEvRes:any=await this.cal.createEventWithOptions(cCEO.title,cCEO.location,cCEO.notes,cCEO.startDate,cCEO.endDate,cCEO.options);
        this.schedEvs[evType].push({dId:eventObj.Id,cId:cCEvRes});
        return Promise.resolve({result:true,data:cCEvRes})
      }catch(cCEvErr){this.logger.info('\uD83D\uDCC5 [calServ|createCalEv] (Error): '+cCEvErr);return Promise.resolve({result:false,data:cCEvErr})}
    }
  }
////////////////////////////////////////////////////////////////
  async findCalEvent(eventId:number|null):Promise<any> { //this.logger.info('\uD83D\uDCC5 [calServ|findEvent] ('+eventId+')...');
    const sD:Date=this.dT.subDays(new Date(),28);
    const eD:Date=this.dT.addDays(new Date(),28);
    let searchStr:string;eventId!==null?searchStr='Sheriff Event ID #'+eventId.toString():searchStr='Sheriff Event ID #';
    const fCERes:any=await this.cal.findEvent(null,null,searchStr,sD,eD);
    if(fCERes){return Promise.resolve({result:true,data:fCERes})}else{return Promise.resolve({result:true,data:fCERes})}
  }
////////////////////////////////////////////////////////////////
  async listCalEvents(startDate:Date,endDate:Date):Promise<any> { //this.logger.info('\uD83D\uDCC5 [calServ|findEvents] ('+startDate+','+endDate+')...');
    return this.cal.listEventsInRange(startDate,endDate);
  }
////////////////////////////////////////////////////////////////
  async deleteAllSheriffEvs():Promise<boolean> { 
    const sT:Date=new Date();
    this.logger.info('\uD83D\uDCC5 >🗑️> [calServ|deleteAllSheriffEvs] (STARTED)...');
    const sD:Date=subYears(new Date(),5);const eD:Date=addYears(new Date(),5);
    const allCals:AppCalendarList=this.allCalList;
    for(let i=0;i<allCals.length;i++){
      let thisCalDelIdList:string[]=[];
      const sheriffEvs10Y:any[]=await this.cal.findEvent(null,null,'Sheriff Event ID #',sD,eD);
      if(sheriffEvs10Y.length>0){for(let i=0;i<sheriffEvs10Y.length;i++){thisCalDelIdList.push(String(sheriffEvs10Y[i].id))}};
      const deputyEvs10Y:any[]=await this.cal.findEvent(null,null,'Open in Deputy:',sD,eD);
      if(deputyEvs10Y.length>0){for(let i=0;i<deputyEvs10Y.length;i++){thisCalDelIdList.push(String(deputyEvs10Y[i].id))}};
      this.logger.info(' 🗑️ FOUND '+thisCalDelIdList.length+' in '+allCals[i].name+'('+allCals[i].id+') - Deleting...');
      let delGood:number=0;let delBad:number=0;
      for(let i=0;i<thisCalDelIdList.length;i++){try{await this.cal.deleteEventById(String(thisCalDelIdList[i]),sD);delGood++}catch{delBad++}};
      if(delGood===thisCalDelIdList.length){this.logger.info(' ✔️ REMOVED ALL ('+delGood+'/'+thisCalDelIdList.length+')')}
      else{this.logger.info(' ❌ REMOVED ONLY '+delGood+'/'+thisCalDelIdList.length+')')};
    };
    this.logger.info('\uD83D\uDCC5 <🗑️< [calServ|deleteAllSheriffEvs] (FINISHED!) - '+this.evServ.getDur(sT)+'ms');
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////
  async deleteCalEvent(eventId:number):Promise<any> { this.logger.info('\uD83D\uDCC5 [calServ|deleteEvent] ('+eventId+')...');
    const dCERes:any=await this.cal.deleteEvent(null,null,'Sheriff Event ID #'+eventId.toString(),null,null);
    if(dCERes){return Promise.resolve({result:true,data:dCERes})}else{return Promise.resolve({result:true,data:dCERes})}
  }
////////////////////////////////////////////////////////////////
  async deleteCalEventById(calEventId:string):Promise<any> { this.logger.info('\uD83D\uDCC5 [calServ|deleteCalEventById] ('+calEventId+')...');
    const nowLess28:Date=this.dT.subDays(new Date(),28);
    try{
      const dCEBIdRes:any=await this.cal.deleteEventById(calEventId,nowLess28);
      console.log(dCEBIdRes);
      return Promise.resolve(dCEBIdRes);
    }catch(err){this.logger.info('[calServ|deleteCalEventById] (ERROR): '+JSON.stringify(err))}
  }
////////////////////////////////////////////////////////////////
  async openCal(openDate:Date|null):Promise<any> { this.logger.info('\uD83D\uDCC5 [calServ|openCal] ('+openDate+')...');
    let oD:Date;openDate!==null?oD=openDate:oD=new Date();
    const oCRes:any=await this.cal.openCalendar(oD);
    if(oCRes){return Promise.resolve({result:true,data:oCRes})}else{return Promise.resolve({result:true,data:oCRes})}
  }
////////////////////////////////////////////////////////////////
  cShiftsDelay(shiftData:any[]) { this.logger.info('\uD83D\uDCC5 [calServ|cShiftsDelay] ()...');
    const cSDelayLoop=setInterval(()=>{
      if(!this.tasksInProg){this.logger.info('\uD83D\uDCC5 [calServ|cShiftsDelay] [TasksInProg='+this.tasksInProg+'] - Running checkShifts()...');
        clearInterval(cSDelayLoop);
        setTimeout(()=>{this.calCheckShifts(shiftData)},250)
      }else{this.logger.info('\uD83D\uDCC5 [calServ|cShiftsDelay] [TasksInProg='+this.tasksInProg+'] - Waiting...');}
    },500);
  }
////////////////////////////////////////////////////////////////
async calCheckShifts(shiftData:any[]|null) { //this.logger.info('\uD83D\uDCC5 [calServ|checkShifts] ()...');
  let allFSSs:any[]=[];
  if(shiftData!==null){allFSSs=shiftData}else{let dbSRes:any=await this.sqlServ.getFutureStartShifts();if(dbSRes.result){allFSSs=dbSRes.data}else{allFSSs=[]}};
  allFSSs.push(testShift);
  if(allFSSs.length>0){
    this.logger.info('\uD83D\uDCC5 [calServ|checkShifts] Found ['+allFSSs.length+'] Shifts to Schedule...');
    if(this.tasksInProg){this.logger.info('\uD83D\uDCC5 [calServ|checkShifts] (WARNING) tasksInProg='+this.tasksInProg.toString().toUpperCase()+' - Running cShiftsDelay()...');
      this.cShiftsDelay(allFSSs)
    }else{
      this.shiftsInProg=true;
      const sSArr:any[]=allFSSs;let schedGood:number=0;let schedBad:number=0;let schedSkip:number=0;
      for(let i=0;i<sSArr.length;i++){
        const rawTSO:any=sSArr[i];
        const tSO:any=await this.formatShift(rawTSO);
        const tSOStart:Date=this.dT.Dut(tSO.StartTime);
        if(this.dT.isA(tSOStart,new Date())){
          const findExist:any[]=await this.findCalEvent(tSO.Id);
          if(findExist.length>0){for(let i=0;i<findExist.length;i++){await this.deleteCalEventById(findExist[i].id)}};
          const doSchedRes:any=await this.createCalEv(tSO);
          if(doSchedRes.result){schedGood++}else{schedBad++}
        }else{schedSkip++}
      };
      this.logger.info('\uD83D\uDCC5 [calServ|checkShifts] (FINISHED) RESULTS: ✔️ '+schedGood+', ❌ '+schedBad+', ➖ '+schedSkip);
      this.shiftsInProg=false;
      this.evServ.publish('calSched',true)
    }
  }else{
    this.logger.info('\uD83D\uDCC5 [calServ|checkShifts] (NIL) No Future Start Shifts To Schedule.');
    this.shiftsInProg=false;
    this.evServ.publish('calSched',true)
  }
}
//////////////////////////////////////////////////////////////// 
cTasksDelay(taskData:any[]) { this.logger.info('\uD83D\uDCC5 [calServ|cTasksDelay] ()...');
  const cTDelayLoop=setInterval(()=>{
    if(!this.shiftsInProg){
      this.logger.info('\uD83D\uDCC5 [calServ|cTasksDelay] [ShiftsInProg='+this.shiftsInProg+'] - Running checkTasks()...');
      clearInterval(cTDelayLoop);
      setTimeout(()=>{this.calCheckTasks(taskData)},250)
    }else{this.logger.info('\uD83D\uDCC5 [calServ|cTasksDelay] [ShiftsInProg='+this.shiftsInProg+'] - Waiting...');}
  },500);
}
////////////////////////////////////////////////////////////////
async calCheckTasks(taskData:any[]|null) { //this.logger.info('\uD83D\uDCC5 [calServ|checkTasks] ()...');
  let allFDTs:any[]=[];
  if(taskData!==null){allFDTs=taskData}else{let dbTRes:any=await this.sqlServ.getFutureDueTasks();if(dbTRes.result){allFDTs=dbTRes.data}else{allFDTs=[]}};
  if(allFDTs.length>0){this.logger.info('\uD83D\uDCC5 [calServ|checkTasks] Found ['+allFDTs.length+'] Tasks to Schedule...');
    if(this.shiftsInProg){this.logger.info('\uD83D\uDCC5 [calServ|checkShifts] (WARNING) shiftsInProg='+this.shiftsInProg.toString().toUpperCase()+' - Running cTasksDelay()...');
      this.cTasksDelay(allFDTs)
    }else{
      this.tasksInProg=true;
      let schedGood:number=0;let schedBad:number=0;let schedSkip:number=0;
      for(let i=0;i<allFDTs.length;i++){const tT=allFDTs[i];
        if(this.dT.isA(new Date(tT.DueDate),new Date())){
          const findExist:any[]=await this.findCalEvent(tT.Id);
          if(findExist.length>0){for(let i=0;i<findExist.length;i++){await this.deleteCalEventById(findExist[i].id)}};
          const doSchedRes:any=await this.createCalEv(tT);
          if(doSchedRes.result){schedGood++}else{schedBad++}
        }else{schedSkip++}
      };
      this.logger.info('\uD83D\uDCC5 [calServ|checkTasks] (FINISHED) RESULTS: ✔️ '+schedGood+', ❌ '+schedBad+', ➖ '+schedSkip);
      this.tasksInProg=false;
      this.evServ.publish('calSched',true);
    }
  }else{
    this.logger.info('\uD83D\uDCC5 [calServ|checkTasks] (NIL) No Future Due Tasks Not Completed.');
    this.tasksInProg=false;
    this.evServ.publish('calSched',true);
  }
}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
}
 