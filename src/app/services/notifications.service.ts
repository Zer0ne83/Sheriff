import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { LocalNotifications,ScheduleResult,LocalNotificationDescriptor,ScheduleOptions,LocalNotificationSchema,Schedule,ScheduleOn,ScheduleEvery,Attachment,PermissionStatus, PendingLocalNotificationSchema, PendingResult, CancelOptions, Channel, ListChannelsResult, ActionType, Action } from '@capacitor/local-notifications';
import { DateTimeService } from './datetime.service';
import { SQLiteService } from './sqlite.service';
import { EventsService } from './events.service';
import { FirebaseService } from './firebase.service';
import { LoadingController } from '@ionic/angular';
import { FairworkService } from './fairwork.service';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { AppUserSettings,testShift,defaultAUSettings} from './appTypes';
import { DetailService } from './detail.service';
////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////
export class NotificationsService {
////////////////////////////////////////////////////////////////
  userSettings:AppUserSettings|null=null;
  uAlertOpts:any;
  notesEnabled:boolean=false;
  eventsEnabled:any={shift:<boolean>false,task:<boolean>false};
  beforeTimes:any={shift:<number>0,task:<number>0};
  showIncome:boolean=null;
  myObj:any=null;
  workAreas:any[]=null;
  workName:string=null;
  workCode:string=null;
  workPeople:any[]=[];
  hasMyChan:boolean=false;
  tasksInProg:boolean=false;
  shiftsInProg:boolean=false;
  tNoteId:number;
  isReschedule:boolean=false;
  schedEvs:any={shift:[],task:[]};
  initDone:boolean=false;
////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private dT:DateTimeService,
    private sqlServ:SQLiteService,
    private evServ:EventsService,
    private loadCtrl:LoadingController,
    private fwServ:FairworkService,
    private dS:DetailService,
    private fireServ:FirebaseService
  ) { }
////////////////////////////////////////////////////////////////
  async noteGetPerms():Promise<any>{this.logger.info('\uD83D\uDD14 [noteServ|noteGetPerms] ()...');
    try{const nCPRes:PermissionStatus=await LocalNotifications.checkPermissions();
      if(nCPRes.display!=='granted'){const nRPRes:PermissionStatus=await LocalNotifications.requestPermissions();
        if(nRPRes.display==='granted'){return Promise.resolve({result:true,data:nRPRes.display})}
        else{return Promise.resolve({result:false,data:nRPRes.display})}
      }else{return Promise.resolve({result:true,data:nCPRes.display})}
    }catch(nCPErr){this.logger.info('\uD83D\uDD14 [noteServ|noteCheckPerms] (Error): '+nCPErr);return Promise.reject(nCPErr)}
  }
////////////////////////////////////////////////////////////////
  async permOK():Promise<boolean>{if((await LocalNotifications.checkPermissions()).display==='granted'){return Promise.resolve(true)}else{return Promise.resolve(false)}};
  async reqP():Promise<boolean>{if((await LocalNotifications.requestPermissions()).display==='granted'){return Promise.resolve(true)}else{return Promise.resolve(false)}};
////////////////////////////////////////////////////////////////
  async doNoteInit() { 
    this.evServ.subscribe('noteInit',async initD=>{
      this.logger.info('\uD83D\uDD14 [noteServ|doNoteInit] (EVENT) [STAGE] = '+initD.stage+' ... ');
      if(initD.stage==='notesenabled'){this.initGVars()}
      else if(initD.stage==='gvars'){this.initMyChannel()}
      else if(initD.stage==='chan'){this.initActions()}
      else if(initD.stage==='actions'){this.evServ.publish('doPushNoteInit',true);this.initListen()}
      else if(initD.stage==='listen'){this.initDone=true;this.doScheduleNotes()}
    })
    this.initRefreshNoteSettings();
  }
////////////////////////////////////////////////////////////////
  async doScheduleNotes() {
    let schedTypeTtl:number=0;let schedTypeCount:number=0;let schedSTime:Date=new Date();
    let cM:string;this.isReschedule?cM='♻️[RE]Scheduling':cM='Init Scheduling';
    this.evServ.subscribe('noteSched',()=>{schedTypeCount++;
      if(schedTypeCount===schedTypeTtl){const schedTT=(this.evServ.getDur(schedSTime)/1000).toFixed(2)+'s';
        const tShifts:number=this.schedEvs.shift.length;const tTasks:number=this.schedEvs.task.length;const tEvs:number=tShifts+tTasks;
        this.logger.info('\uD83D\uDD14 - 🏁 FINISHED '+cM+': '+tEvs+' Total Phone Notes Added in '+schedTT+'s:');
        let sShiftsIds:string[]=[];for(let i=0;i<this.schedEvs.shift.length;i++){sShiftsIds.push(this.schedEvs.shift[i].dId+'|'+this.schedEvs.shift[i].nId)};
        this.logger.info('\uD83D\uDD14 - 📑 Shifts: '+sShiftsIds.join(', ')+' ('+tShifts+')');
        let sTasksIds:string[]=[];for(let i=0;i<this.schedEvs.task.length;i++){sTasksIds.push(this.schedEvs.task[i].dId+'|'+this.schedEvs.task[i].nId)};
        this.logger.info('\uD83D\uDD14 - 🤹🏼 Tasks: '+sTasksIds.join(', ')+' ('+tTasks+')');
        if(this.isReschedule){this.evServ.publish('reschedFinish','phone');this.isReschedule=false};
        this.evServ.destroy('noteSched');
      }
    });
    await this.deleteAllSched();
    this.evServ.publish('alertsStatus',true);
    if(this.notesEnabled){this.logger.info('\uD83D\uDD14 {alertMethods.phone=TRUE}');
      for(const v of Object.values(this.eventsEnabled)){if(v){schedTypeTtl++}};
      if(schedTypeTtl>0){
        if(this.eventsEnabled.shift){this.logger.info('\uD83D\uDD14 {alertEvents.shift=TRUE} - '+cM+' Shifts...');this.checkShifts(null)}
        else{this.logger.info('\uD83D\uDD14 {alertEvents.shift=FALSE} - !SKIPPING! '+cM+' Shifts...')};
        if(this.eventsEnabled.task){this.logger.info('\uD83D\uDD14 {alertEvents.task=TRUE} - '+cM+' Tasks...');this.checkTasks(null)}
        else{this.logger.info('\uD83D\uDD14 {alertEvents.task=FALSE} - !SKIPPING! '+cM+' Tasks.')}
      }else{
        if(this.isReschedule){this.evServ.publish('reschedFinish','phone');this.isReschedule=false};
        this.logger.info('\uD83D\uDD14 {alertEvents.shift=FALSE} && {alertEvents.task=FALSE} - !SKIPPING! Notification '+cM)}
    }else{
      if(this.isReschedule){this.evServ.publish('reschedFinish','phone');this.isReschedule=false};
      this.logger.info('\uD83D\uDD14 {alertMethods.phone=FALSE} - !SKIPPING! Notification '+cM)}
  }
////////////////////////////////////////////////////////////////
  async initRefreshNoteSettings():Promise<boolean> { //this.logger.info('\uD83D\uDD14 [noteServ|initNotesEnabled] ()...');
    let savedUSettObj:AppUserSettings|null
    const dsRes:AppUserSettings|null=await this.dS.getSettings();
    if(dsRes!==null){savedUSettObj=dsRes}
    else{const dbRes:any=await this.sqlServ.getSettings();if(dbRes.result){savedUSettObj=dbRes.data}
    else{const fireRes:any=await this.fireServ.getSettingsValue(null);if(fireRes.result){savedUSettObj=fireRes.data}
    else{savedUSettObj=defaultAUSettings()}}};
    this.userSettings=savedUSettObj;
    this.uAlertOpts=this.userSettings.alerts.options;
    this.notesEnabled=Boolean(this.uAlertOpts.alertMethods.value.phone);
    this.eventsEnabled.shift=Boolean(this.uAlertOpts.alertEvents.value.shift);
    this.eventsEnabled.task=Boolean(this.uAlertOpts.alertEvents.value.task);
    this.beforeTimes.shift=Number(this.uAlertOpts.alertBefore.value.shift.mins);
    this.beforeTimes.task=Number(this.uAlertOpts.alertBefore.value.task.mins);
    this.showIncome=Boolean(this.userSettings.payrates.options.show.value);
    if(!this.initDone){this.evServ.publish('noteInit',{stage:'notesenabled',data:null})};
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////
  async updateNoteSetting():Promise<boolean> { this.logger.info('[noteServ|updateNoteSettings] ()...');
    this.isReschedule=true;
    await this.initRefreshNoteSettings();
    this.doScheduleNotes();
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////
  initListen() { //this.logger.info('\uD83D\uDD14 [noteServ|initListen] ()...');
    this.noteListenRemoveAll();
    this.noteListenAddGotNote();
    this.noteListenAddGotAction();
    this.evServ.publish('noteInit',{stage:'listen',data:null});
  }
////////////////////////////////////////////////////////////////
  async initActions() { //this.logger.info('\uD83D\uDD14 [noteServ|initActions] ()...');
    this.noteRegisterActions();setTimeout(()=>{this.evServ.publish('noteInit',{stage:'actions',data:null})},250)
  }
////////////////////////////////////////////////////////////////
  async initMyChannel() { //this.logger.info('\uD83D\uDD14 [noteServ|initMyChannel] ()...');
    await this.noteDeleteChannel();
    const existChanList:any=await this.noteListChannels();
    const cList:any[]=existChanList.data;
    const myChanArr:any[]=cList.filter(c=>c.Id==='sheriff-alerts');
    if(myChanArr.length>0){this.hasMyChan=true;this.evServ.publish('noteInit',{stage:'chan',data:null})}
    else{const startChanRes:boolean=await this.noteCreateChannel();
      if(startChanRes){this.hasMyChan=true;this.evServ.publish('noteInit',{stage:'chan',data:null})}
      else{this.hasMyChan=false;this.evServ.publish('noteInit',{stage:'chan',data:null})}
    }
  }
////////////////////////////////////////////////////////////////
  async initGVars() { //this.logger.info('\uD83D\uDD14 [noteServ|initGVars] ()...');
    this.myObj=await this.dS.getMy();
    this.workAreas=this.dS.workAreas;
    this.workPeople=this.dS.pplArr;
    this.workName=this.dS.workName;
    this.workCode=this.dS.workCode;
    this.evServ.publish('noteInit',{stage:'gvars',data:null});
  }
////////////////////////////////////////////////////////////////
  capType(lowT:string):string{return lowT.charAt(0).toUpperCase()+lowT.slice(1)}
////////////////////////////////////////////////////////////////
  triggerTime(evD:Date,beforeT:number):Date{return this.dT.subMs(evD,beforeT)}
////////////////////////////////////////////////////////////////
  changeBeforeTime(event:string,mins:number):Promise<boolean>{this.beforeTimes[String(event)]=Number(mins);return Promise.resolve(true)}
////////////////////////////////////////////////////////////////
  async deleteAllSched():Promise<any> { this.logger.info('\uD83D\uDD14 [noteServ|deleteAllSched] ()...');
    let canAllOpts:CancelOptions={notifications:<LocalNotificationDescriptor[]>[]};
    const {notifications}=await LocalNotifications.getPending();
    if(notifications.length>0){
      for(let i=0;i<notifications.length;i++){canAllOpts.notifications.push({id:notifications[i].id})};
      LocalNotifications.cancel(canAllOpts);
      this.schedEvs.task=[];this.schedEvs.shift=[];
      return Promise.resolve(true)
    }else{this.schedEvs.task=[];this.schedEvs.shift=[];return Promise.resolve(true)}
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
/////////////////////////////////////////////////////////////////
  async getPay(rosterObj:any):Promise<any> {
    const payRes:any=await this.fwServ.getShiftPay(rosterObj);
    return Promise.resolve(payRes);
  }
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
////////////////////////////////////////////////////////////////
  async noteSchedule(eventObj:any):Promise<any>{
    let nSOpts:ScheduleOptions={notifications:<LocalNotificationSchema[]>[]};
    const aId:number=eventObj.Id;let aLCType:string;let aUCType:string;
    //------------------------------
    let evDate:Date;
    let alertDate:Date;
    let aTitle:string;
    let aBody:string;
    //------------------------------
    let aConfirmId:number=null;
    let aConfirmTitle:string=null;
    let aConfirmBody:string=null;
    let evConfirmDate:Date=null;
    let alertConfirmDate:Date=null;
    //------------------------------
    // Shifts/Rosters
    if(eventObj.hasOwnProperty('MatchedByTimesheet')){
      const shiftO:any=eventObj;
      const niceBTime=(rawBT:number):string=>{if(rawBT<=90){return rawBT.toString()+' Minutes'}else if(rawBT>90&&rawBT<=720){const rawHs:number=rawBT/60;return rawHs.toString()+' Hours'}else if(rawBT>720&&rawBT<=4320){const rawDs:number=((rawBT/24)/60);return rawDs.toString()+' Days'}else{return '1 Week'}};
      const b4T:number=this.getBeforeTime('shift');
      aLCType='shift';aUCType=this.capType(aLCType);
      const aNTimeStr:string=shiftO.nStart+'-'+shiftO.nEnd;
      const aNDur:any=shiftO.nTotalTime;
      let nDurStr:string;if(aNDur.hours>0&&aNDur.minutes>0){nDurStr=aNDur.hours+':'+aNDur.minutes}else{if(aNDur.hours>0){nDurStr=aNDur.hours+'h'}else{nDurStr=aNDur.minutes+'m'}};
      const aNIncome:string=shiftO.nIncome;
      // Add Confirm Note
      if(shiftO.ConfirmStatus===1&&shiftO.nConfirmBy!==false){
        const confId=(evId:number):number=>{const cIdStr:string=evId.toString()+'000';return Number(cIdStr)};
        aConfirmId=confId(aId);
        evConfirmDate=shiftO.nConfirmBy;
        alertConfirmDate=this.triggerTime(evConfirmDate,b4T);
        aConfirmTitle='Confirm Shift Deadline';
        const aNDateStr:string=this.dT.format(new Date(shiftO.Date),'EEE, d MMM');
        let confIncomeStr:string;this.showIncome?confIncomeStr='| $'+aNIncome+')':confIncomeStr=')';
        aConfirmBody='You must confirm Shift #'+aId+' within '+niceBTime(b4T)+'\n'+this.workCode+' Shift on '+this.dT.format(new Date(shiftO.Date),'dd/MM/yy')+' at '+aNDateStr+' - '+aNTimeStr+' ('+nDurStr+confIncomeStr;
        let confNote:LocalNotificationSchema={id:aConfirmId,title:aConfirmTitle,body:aConfirmBody,largeBody:aConfirmBody,schedule:{repeats:false,allowWhileIdle:true,at:alertConfirmDate},smallIcon:'ic_stat_sheriffnote',iconColor:'#FF9800',sound:'sheriffnote.wav',ongoing:false,autoCancel:false,actionTypeId:'shift-atype',extra:{type:aLCType,uctype:aUCType,evdate:evConfirmDate,isTest:false}};
        if(this.hasMyChan){confNote['channelId']='sheriff-alerts'};
        nSOpts.notifications.push(confNote)
      };
      // Standard Shift Note
      evDate=this.dT.Dut(eventObj.StartTime);
      alertDate=this.triggerTime(evDate,b4T);
      aTitle='Upcoming Shift Reminder';
      let shiftIncomeStr:string;this.showIncome?shiftIncomeStr=' | $'+aNIncome:shiftIncomeStr='';
      let isToday:boolean;this.dT.isSD(new Date(),new Date(shiftO.Date))?isToday=true:isToday=false;
      let shiftWhen:string;isToday?shiftWhen='Today':shiftWhen='On '+this.dT.format(new Date(shiftO.Date),'EEE, d MMM');
      aBody='Your Shift @ '+this.workCode+' ('+shiftO.nOpUnit+') starts in '+niceBTime(b4T)+'\n'+shiftWhen+' '+aNTimeStr+' ('+nDurStr+')'+shiftIncomeStr;
      let shiftNote:LocalNotificationSchema={id:aId,title:aTitle,body:aBody,largeBody:aBody,schedule:{repeats:false,allowWhileIdle:true,at:alertDate},smallIcon:'ic_stat_sheriffnote',iconColor:'#FF9800',sound:'sheriffnote.wav',ongoing:false,autoCancel:false,actionTypeId:'shift-atype',extra:{type:aLCType,uctype:aUCType,evdate:evDate,isTest:false}};
      if(this.hasMyChan){shiftNote['channelId']='sheriff-alerts'};
      nSOpts.notifications.push(shiftNote)
    }
    // Tasks
    else if(eventObj.hasOwnProperty('TaskSetupId')){
      const taskO:any=eventObj;
      const b4T:number=this.getBeforeTime('task');
      const niceBTime=(rawBT:number):string=>{if(rawBT<=90){return rawBT.toString()+' Minutes'}else if(rawBT>90&&rawBT<=720){const rawHs:number=rawBT/60;return rawHs.toString()+' Hours'}else if(rawBT>720&&rawBT<=4320){const rawDs:number=((rawBT/24)/60);return rawDs.toString()+' Days'}else{return '1 Week'}};
      const dDateNice:string=this.dT.format(new Date(taskO.DueDate),'EEE, d MMM');
      const dTimeNice:string=this.dT.format(new Date(taskO.DueDate),'h:mmaaa');
      aLCType='task';aUCType=this.capType(aLCType)
      evDate=new Date(taskO.DueDate);
      alertDate=this.triggerTime(evDate,b4T);
      aTitle='Pending Task Reminder';
      aBody='Task #'+taskO.Id+' from '+this.getFName(taskO.UserEntry)+' @ '+this.workCode+' is due in '+niceBTime(b4T)+'\nTask: '+taskO.Question+' | Due By: '+dDateNice+' at '+dTimeNice;
      let taskNote:LocalNotificationSchema={id:aId,title:aTitle,body:aBody,largeBody:aBody,schedule:{repeats:false,allowWhileIdle:true,at:alertDate},smallIcon:'ic_stat_sheriffnote',iconColor:'#FF9800',sound:'sheriffnote.wav',ongoing:false,autoCancel:false,actionTypeId:'task-atype',extra:{type:aLCType,uctype:aUCType,evdate:evDate,isTest:false}};
      if(this.hasMyChan){taskNote['channelId']='sheriff-alerts'};
      nSOpts.notifications.push(taskNote)
    };  
    try{
      const nSRes:ScheduleResult=await LocalNotifications.schedule(nSOpts);
      if(nSRes.notifications.length>0){
        this.schedEvs[aLCType].push({dId:aId,nId:nSRes.notifications[0].id});
        return Promise.resolve({result:true,data:nSRes.notifications})
      }else{return Promise.resolve({result:false,data:[]})}
    }catch(nSErr){this.logger.info('\uD83D\uDD14 [noteServ|noteSchedule] (Error): '+nSErr);return Promise.reject(nSErr)}
  }
////////////////////////////////////////////////////////////////
  async testNote(noteId:number) { this.logger.info('\uD83D\uDD14 [noteServ|testNote] ('+noteId+')...');
    let testSchedRes:any;
    const nListRes:any=await this.notePending();
    if(nListRes.result){
      const nListArr:any[]=nListRes.data;
      const nObjArr:any[]=nListArr.filter(n=>n.id===noteId);
      if(nObjArr.length>0){const nObj:any=nObjArr[0];let tObj:any=nObj;
        const tId:string=noteId.toString()+'000';
        tObj.schedule.at=this.dT.addS(new Date(),5);
        tObj.id=Number(tId);tObj.largeBody=nObj.body;
        tObj.extra.isTest=true;
        tObj.actionTypeId=nObj.extra.type+'-atype';
        this.tNoteId=Number(tId);
        this.evServ.subscribe('testNoteStage',tnsData=>{
          if(tnsData.stage==='schedtest'){
            testSchedRes=tnsData.data;
            this.logger.info('Test Note Scheduled [SUCCESS] for Test Id #'+testSchedRes.id);
            this.loadCtrl.dismiss()
          }else if(tnsData.stage==='gottest'){
            this.evServ.destroy('testNoteStage');
            this.tNoteId=null;
            this.evServ.publish('testRes',{stage:'gottest',data:null})
          }else{
            this.evServ.destroy('testNoteStage');
            this.tNoteId=null;
            this.evServ.publish('testRes',{stage:'error',data:null})
          }
        });
        this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Testing Alert #'+noteId,backdropDismiss:false,showBackdrop:true,}).then((loadRes)=>{
          loadRes.onDidDismiss().then(()=>{this.evServ.publish('testRes',{stage:'sched',data:testSchedRes})});
          document.addEventListener('ionLoadingDidPresent',async()=>{
            const testSchedR:any=await LocalNotifications.schedule({notifications:[tObj]});
            if(testSchedR.notifications.length>0){
              const tId:number=testSchedR.notifications[0].id;
              const getS:any=await this.notePending();
              const tNObj:any=getS.data.filter(n=>n.id===tId)[0];
              this.evServ.publish('testNoteStage',{stage:'schedtest',data:tNObj})
            }else{this.evServ.publish('testNoteStage',{stage:'error',data:null})}
          });
          setTimeout(() => {
            loadRes.present();
          },250); 
        });
      }else{this.logger.info('\uD83D\uDD14 [noteServ|testNote] (Error): Note is Not Scheduled?')}
    }else{this.logger.info('\uD83D\uDD14 [noteServ|testNote] (Error): Note is Not Scheduled?')}
  }
////////////////////////////////////////////////////////////////
  async notePending():Promise<any> { this.logger.info('\uD83D\uDD14 [noteServ|getPending] ()...');
    try{const nPendRes:any[]=(await LocalNotifications.getPending()).notifications;
      if(nPendRes.length>0){return Promise.resolve({result:true,data:nPendRes})}else{return Promise.resolve({result:true,data:[]})}
    }catch(nPendErr){this.logger.info('\uD83D\uDD14 [noteServ|notePending] (Error): '+nPendErr);return Promise.resolve({result:false,data:nPendErr})}
  }
////////////////////////////////////////////////////////////////
  cShiftsDelay(shiftData:any[]) { this.logger.info('\uD83D\uDD14 [noteServ|cShiftsDelay] ()...');
    const cSDelayLoop=setInterval(()=>{
      if(!this.tasksInProg){this.logger.info('\uD83D\uDD14 [noteServ|cShiftsDelay] [TasksInProg='+this.tasksInProg+'] - Running checkShifts()...');
        clearInterval(cSDelayLoop);
        setTimeout(()=>{this.checkShifts(shiftData)},250)
      }else{this.logger.info('\uD83D\uDD14 [noteServ|cShiftsDelay] [TasksInProg='+this.tasksInProg+'] - Waiting...');}
    },500);
  }
////////////////////////////////////////////////////////////////
  async checkShifts(shiftData:any[]|null) { //this.logger.info('\uD83D\uDD14 [noteServ|checkShifts] ()...');
    let allFSSs:any[]=[];
    if(shiftData!==null){allFSSs=shiftData}else{let dbSRes:any=await this.sqlServ.getFutureStartShifts();if(dbSRes.result){allFSSs=dbSRes.data}else{allFSSs=[]}};
    allFSSs.push(testShift);
    if(allFSSs.length>0){this.logger.info('\uD83D\uDD14 [noteServ|checkShifts] Found ['+allFSSs.length+'] Shifts to Schedule...');
      if(this.tasksInProg){this.logger.info('\uD83D\uDD14 [noteServ|checkShifts] (WARNING) tasksInProg='+this.tasksInProg.toString().toUpperCase()+' - Running cShiftsDelay()...');
        this.cShiftsDelay(allFSSs)
      }else{
        this.shiftsInProg=true;
        const sSArr:any[]=allFSSs;
        let schedGood:number=0;let schedBad:number=0;let schedSkip:number=0;
        for(let i=0;i<sSArr.length;i++){
          const rawTSO:any=sSArr[i];
          const tSO:any=await this.formatShift(rawTSO);
          const tSOStart:Date=this.dT.Dut(tSO.StartTime);
          const tSOTrigT:Date=this.triggerTime(tSOStart,this.beforeTimes.shift);
          if(this.dT.isA(tSOTrigT,new Date())){const doSchedRes:any=await this.noteSchedule(tSO);doSchedRes.result?schedGood++:schedBad++}
          else{schedSkip++};
        };
        this.logger.info('\uD83D\uDD14 [noteServ|checkShifts] (FINISHED) RESULTS: ✔️ '+schedGood+', ❌ '+schedBad+', ➖ '+schedSkip);
        this.shiftsInProg=false;
        this.evServ.publish('noteSched',true);
      }
    }else{this.shiftsInProg=false;this.evServ.publish('noteSched',true);this.logger.info('\uD83D\uDD14 [noteServ|checkShifts] (NIL) No Future Start Shifts To Schedule.')}
  }
////////////////////////////////////////////////////////////////
  cTasksDelay(taskData:any[]) { this.logger.info('\uD83D\uDD14 [noteServ|cTasksDelay] ()...');
    const cTDelayLoop=setInterval(()=>{
      if(!this.shiftsInProg){
        this.logger.info('\uD83D\uDD14 [noteServ|cTasksDelay] [ShiftsInProg='+this.shiftsInProg+'] - Running checkTasks()...');
        clearInterval(cTDelayLoop);
        setTimeout(()=>{this.checkTasks(taskData)},250)
      }else{this.logger.info('\uD83D\uDD14 [noteServ|cTasksDelay] [ShiftsInProg='+this.shiftsInProg+'] - Waiting...');}
    },500);
  }
////////////////////////////////////////////////////////////////
  async checkTasks(taskData:any[]|null) { //this.logger.info('\uD83D\uDD14 [noteServ|checkTasks] ()...');
    let allFDTs:any[];if(taskData!==null){allFDTs=taskData}else{let dbTRes:any=await this.sqlServ.getFutureDueTasks();if(dbTRes.result){allFDTs=dbTRes.data}else{allFDTs=[]}};
    if(allFDTs.length>0){this.logger.info('\uD83D\uDD14 [noteServ|checkTasks] Found ['+allFDTs.length+'] Tasks to Schedule...');
      if(this.shiftsInProg){this.logger.info('\uD83D\uDD14 [noteServ|checkShifts] (WARNING) shiftsInProg='+this.shiftsInProg.toString().toUpperCase()+' - Running cTasksDelay()...');
        this.cTasksDelay(allFDTs)
      }else{
        this.tasksInProg=true;
        let schedGood:number=0;let schedBad:number=0;let schedSkip:number=0;
        for(let i=0;i<allFDTs.length;i++){
          const tT:any=allFDTs[i];const trigT:Date=this.triggerTime(new Date(tT.DueDate),this.beforeTimes.task);
          if(this.dT.isA(trigT,new Date())){const schedT:any=await this.noteSchedule(tT);schedT.result?schedGood++:schedBad++}
          else{schedSkip++};
        };
        this.logger.info('\uD83D\uDD14 [noteServ|checkTasks] (FINISHED) RESULTS: ✔️ '+schedGood+', ❌ '+schedBad+', ➖ '+schedSkip);
        this.tasksInProg=false;
        this.evServ.publish('noteSched',true);
      }
    }else{this.tasksInProg=false;this.evServ.publish('noteSched',true);this.logger.info('\uD83D\uDD14 [noteServ|checkTasks] (NIL) No Future Due Tasks Not Completed.')}  
  }
////////////////////////////////////////////////////////////////
  noteRegisterActions() { //this.logger.info('\uD83D\uDD14 [noteServ|noteRegisterActions] ()...');
    let regATOpts:any={types:<ActionType[]>[]};
    let shiftAType:any={id:'shift-atype',actions:[{id:'shift-snooze',title:'Snooze'},{id:'shift-view',title:'View'}]};
    regATOpts.types.push(shiftAType);
    let taskAType:any={id:'task-atype',actions:[{id:'task-snooze',title:'Snooze'},{id:'task-view',title:'View'},{id:'task-do',title:'Mark As Done'}]};
    regATOpts.types.push(taskAType);
    LocalNotifications.registerActionTypes(regATOpts)
  }
////////////////////////////////////////////////////////////////
  async noteCancel(noteId:number|null):Promise<any> { this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] ()...');
    let schedCount:number=0;let schedIds:any[]=[];let cancelCount:number=0;let finishCount:number=0;
    const schedRes:any=await this.notePending();
    if(schedRes.result&&schedRes.data.length>0){schedCount=schedRes.data.length;for(let i=0;i<schedRes.data.length;i++){schedIds.push(schedRes.data[i].id)}};
    let cancelOpts:CancelOptions={notifications:[]};
    if(noteId!==null){
      if(schedCount>0&&schedIds.includes(noteId)){cancelCount=1;
        this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] (Single Cancel) Cancelling [1] Note ('+noteId+')...');
        cancelOpts.notifications.push({id:noteId});
        LocalNotifications.cancel(cancelOpts)
      }else{this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] (Single Cancel - NIL) Note ID #'+noteId+' is Not Scheduled')}
    }else{
      if(schedCount>0){cancelCount=schedCount;
        this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] (Cancel All) Cancelling ['+schedCount+'] Notes ('+schedIds.join(', ')+')...');
        for(let i=0;i<schedIds.length;i++){cancelOpts.notifications.push({id:schedIds[i]})};
        LocalNotifications.cancel(cancelOpts)
      }else{this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] (Cancel All - NIL) No Notes Are Scheduled.')}
    };
    if(cancelCount>0){
      setTimeout(async()=>{
        const nowSched:any=await this.notePending();
        finishCount=nowSched.data.length;
        const successNo:number=schedCount-cancelCount;
        if(successNo===finishCount){this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] (SUCCESS): Finished Cancelling ALL ['+cancelCount+'] Notes');
          this.evServ.publish('delDone',true);
          return Promise.resolve(true)
        }else{
          this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] (ERROR): Expected ['+successNo+'] Remaining Notes BUT Found ['+finishCount+']');
          this.evServ.publish('delDone',false);
          return Promise.resolve(false)
        }
      },1000);
    }else{this.logger.info('\uD83D\uDD14 [noteServ|noteCancel] (NIL) No Scheduled Notes to Cancel.');return Promise.resolve(true)}
  }
////////////////////////////////////////////////////////////////
  async noteCreateChannel():Promise<any> { //this.logger.info('\uD83D\uDD14 [noteServ|noteCreateChannel] ()...');
    let appOpts:Channel={id:'sheriff-alerts',name:'Sheriff Alerts',description:'Alerts for Sheriff App',sound:'sheriffnote.wav',importance:5,visibility:1,lights:true,lightColor:'#FF9800',vibration:true};
    let depOpts:Channel={id:'deputy-alerts',name:'Deputy Alerts',description:'Alerts re Deputy API',sound:'sheriffnother.wav',importance:5,visibility:1,lights:true,lightColor:'#F26A60',vibration:true};
    let snoopOpts:Channel={id:'snoop-alerts',name:'Snoop Alerts',description:'Alerts Channel for Snooping',sound:'sheriffpst.wav',importance:5,visibility:1,lights:false,lightColor:'#AAAAAA',vibration:false};
    LocalNotifications.createChannel(appOpts);
    LocalNotifications.createChannel(snoopOpts);
    LocalNotifications.createChannel(depOpts);
    return new Promise((resolve)=>{setTimeout(resolve,1000)})
    .then(async()=>{
      const nowChanRes:any=await this.noteListChannels();
      if(nowChanRes.result&&nowChanRes.data.length>0){
        const nCList:any[]=nowChanRes.data;
        const myListArr:any[]=nCList.filter(c=>c.id==='sheriff-alerts');
        if(myListArr.length>0){return Promise.resolve(true)}else{return Promise.resolve(false)}
      }else{return Promise.resolve(false)}
    }).catch(err=>{this.logger.info('\uD83D\uDD14 [noteServ|noteCreateChannel] (Error): '+JSON.stringify(err))});
  }
////////////////////////////////////////////////////////////////
  async noteDeleteChannel():Promise<any> { //this.logger.info('\uD83D\uDD14 [noteServ|noteDeleteChannel] ()...');
    let chanOpts:Channel={id:'sheriff-alerts',name:'Sheriff Alerts',description:'Alert Channel for Sheriff App',sound:'sheriffnote.wav',importance:5,visibility:1,lights:true,lightColor:'#FF9800',vibration:true};
    LocalNotifications.deleteChannel(chanOpts);
    return new Promise((resolve)=>{setTimeout(resolve,1000)})
    .then(async()=>{
      const nowChanRes:any=await this.noteListChannels();
      if(nowChanRes.result&&nowChanRes.data.length>0){
        const nCList:any[]=nowChanRes.data;
        const myListArr:any[]=nCList.filter(c=>c.id==='sheriff-alerts');
        if(myListArr.length===0){//this.logger.info('\uD83D\uDD14 [noteServ|noteDeleteChannel] (SUCCESS): Sheriff Channel NOT FOUND - OK');
          return Promise.resolve(true)
        }else{return Promise.resolve(false)}
      }else{//this.logger.info('\uD83D\uDD14 [noteServ|noteDeleteChannel] (SUCCESS): No Channels Found.');
      return Promise.resolve(true)}
    });
  }
////////////////////////////////////////////////////////////////
  async noteListChannels():Promise<any> { //this.logger.info('\uD83D\uDD14 [noteServ|noteListChannel] ()...');
    try{const listChanRes:ListChannelsResult=await LocalNotifications.listChannels();
      if(listChanRes.channels.length>0){return Promise.resolve({result:true,data:listChanRes.channels})}else{return Promise.resolve({result:true,data:[]})}
    }catch(listChanErr){this.logger.info('\uD83D\uDD14 [noteServ|noteListChannels] (Error): '+listChanErr)}
  }
////////////////////////////////////////////////////////////////
  noteListenAddGotNote() { //this.logger.info('\uD83D\uDD14 [noteServ|noteListenAddGotNote] ()...');
    LocalNotifications.addListener('localNotificationReceived',nOb=>{
      this.logger.info('\uD83D\uDD14 [noteServ|noteListen] (ALERT) Received Alert ID #'+nOb.id);
      const nO:any=nOb;
      if(nO.id===this.tNoteId){
        this.logger.info('\uD83D\uDD14 [noteServ|noteListen] (TEST ALERT) Alert is a [TEST]...');
        this.evServ.publish('testNoteStage',{stage:'gottest',data:nO})}
      else{this.logger.info('\uD83D\uDD14 [noteServ|noteListen] (ALERT) Alert is [NOT A TEST]...')}
    })
  }    
////////////////////////////////////////////////////////////////
  noteListenAddGotAction() { //this.logger.info('\uD83D\uDD14 [noteServ|noteListenAddGotNote] ()...');
    const trigTimeOptArr:any[]=[
      {mins:30,label:'\uD83D\uDFE0 in 30 Minutes'},
      {mins:60,label:'\uD83D\uDFE0 in an Hour'},
      {mins:120,label:'\uD83D\uDFE0 in 2 Hours'},
      {mins:360,label:'\uD83D\uDFE0 in 6 Hours'},
      {mins:720,label:'\uD83D\uDFE0 in 12 Hours'},
      {mins:1440,label:'\uD83D\uDFE0 Tomorrow'},
      {mins:2880,label:'\uD83D\uDFE0 in 2 Days'},
      {mins:4320,label:'\uD83D\uDFE0 in 3 Days'},
      {mins:10080,label:'\uD83D\uDFE0 Next Week'}
    ];
    const snoozeOpts=(noteO:any):Promise<any[]>=>{
      let viableOpts:any[]=[];const eventD:Date=new Date(noteO.extra.evdate);const nowD:Date=new Date();
      const ifB4=(plusM:number):any=>{const snoozeTrig:Date=this.dT.addMs(nowD,plusM);if(this.dT.isB(snoozeTrig,eventD)){return {result:true,trigger:snoozeTrig}}else{return {result:false,trigger:null}}};
      for(let i=0;i<trigTimeOptArr.length;i++){const testOptOb:any=trigTimeOptArr[i];const testB4Res:any=ifB4(testOptOb.mins);if(testB4Res.result){viableOpts.push({label:testOptOb.label,mins:testOptOb.mins,trigger:testB4Res.trigger})}};
      return Promise.resolve(viableOpts)
    }
    LocalNotifications.addListener('localNotificationActionPerformed',async aOb=>{
      const aO:any=aOb.notification;let isTest:boolean=aO.extra.isTest;
      if(aOb.actionId==='task-snooze'||aOb.actionId==='shift-snooze'){this.logger.info('\uD83D\uDD14 [noteServ|noteListen] (ACTION) Received Action ID #'+aOb.actionId);
        const vSnoozeOpts:any[]=await snoozeOpts(aO);let cancelI:number;
        if(vSnoozeOpts.length>0){
          let mySnoozeOs:any[]=[];for(let i=0;i<vSnoozeOpts.length;i++){mySnoozeOs.push({title:vSnoozeOpts[i].label})};mySnoozeOs.push({title:'\u274C CANCEL'});
          cancelI=mySnoozeOs.findIndex(o=>o.title==='\u274C CANCEL');
          const snoozeRes=await ActionSheet.showActions({title:'Remind Me Again',options:mySnoozeOs})
          if(snoozeRes.index===cancelI){this.evServ.showToast('warning','Snooze/Alert Cancelled')}
          else{
            const snoozeSelLabel=mySnoozeOs[snoozeRes.index].title;
            const snoozeSelTrig:any=vSnoozeOpts.filter(st=>st.label===snoozeSelLabel)[0];
            this.logger.info('\uD83D\uDD14 [noteServ|Action|Snooze] (SELECTED): [MINS]: '+snoozeSelTrig.mins+' | [LABEL]: '+snoozeSelTrig.label+' | [TRIGGER]: '+snoozeSelTrig.trigger);
            const untilDL:string=this.dT.DifDurStr(new Date(),new Date(aO.extra.evdate));
            let snoozeBody:string;
            if(aO.body.includes('Upcoming')){const bodyTxtArr:any[]=aO.body.split('starts in ');const b4DLTxt:string=bodyTxtArr[0];snoozeBody=b4DLTxt+'starts in '+untilDL}
            else if(aO.body.includes('Confirm')){const bodyTxtArr:any[]=aO.body.split('within ');const b4DLTxt:string=bodyTxtArr[0];snoozeBody=b4DLTxt+'in '+untilDL}
            else{const bodyTxtArr:any[]=aO.body.split('due in ');const b4DLTxt:string=bodyTxtArr[0];snoozeBody=b4DLTxt+'due in '+untilDL};
            let snoozeNote:LocalNotificationSchema={id:aO.id,title:aO.title+' (𝗦𝗻𝗼𝗼𝘇𝗲𝗱)',body:snoozeBody,largeBody:snoozeBody,schedule:{repeats:false,allowWhileIdle:true,at:snoozeSelTrig.trigger},smallIcon:'ic_stat_sheriffnote',iconColor:'#FF9800',sound:'sheriffnote.wav',ongoing:false,autoCancel:false,extra:{type:aO.extra.type,uctype:aO.extra.uctype,evdate:aO.extra.evdate}};
            const testSnoozeAt:Date=this.dT.addS(new Date(),5);
            if(isTest){snoozeNote.schedule.at=testSnoozeAt};
            if(this.hasMyChan){snoozeNote['channelId']='sheriff-alerts'};
            const snoozeNoteSchedRes:ScheduleResult=await LocalNotifications.schedule({notifications:[snoozeNote]});
            if(snoozeNoteSchedRes.notifications.length>0){this.logger.info('\uD83D\uDD14 [noteServ|Action|Snooze] (SUCCESS) Snoozed Note #'+snoozeNoteSchedRes.notifications[0].id)}
            else{this.logger.info('\uD83D\uDD14 [noteServ|Action|Snooze] (ERROR)')}
          }
        }else{this.logger.info('\uD83D\uDD14 [noteServ|Action|Snooze] - No Viable Snooze Times Available.')}
      }else{this.logger.info('\uD83D\uDD14 [noteServ|noteListen] (ACTION) Received Action ID #'+aO.actionId)}
    })
  }
////////////////////////////////////////////////////////////////
  noteListenRemoveAll() { //this.logger.info('\uD83D\uDD14 [noteServ|noteListenAddGotNote] ()...');
  LocalNotifications.removeAllListeners()}
////////////////////////////////////////////////////////////////
}
