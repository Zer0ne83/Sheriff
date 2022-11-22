import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ModalController, IonRadioGroup } from '@ionic/angular';
import { AlertSchedulePage } from '../modals/alertschedule/alertschedule.page';
import { DeputyService } from './../services/deputy.service';
import { EventsService } from './../services/events.service';
import { StorageService } from '../services/storage.service';
import { FileSystemService } from './../services/filesystem.service';
import { SQLiteService } from '../services/sqlite.service';
import { DateTimeService } from '../services/datetime.service';
import { NotificationsService } from '../services/notifications.service';
import { CalendarService } from '../services/calendar.service';
import { PushService } from '../services/push.service';
import { FirebaseService } from '../services/firebase.service';
import { NGXLogger } from 'ngx-logger';
import { Keyboard } from '@capacitor/keyboard';
import { ActionSheet } from '@capacitor/action-sheet';
import { Dialog } from '@capacitor/dialog';
import { App } from '@capacitor/app';
import { AppUserSettings, defaultAUSettings,AUSAlertRange2Value } from '../services/appTypes';
import * as $ from 'jquery';
import * as _ from 'lodash';
////////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-settings', templateUrl: './settings.page.html', styleUrls: ['./settings.page.scss'] })
////////////////////////////////////////////////////////////////////////////////////////
export class SettingsPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  // DOM/Page Vars
  @ViewChild('databaseAutobackupRG') databaseAutobackupRG: IonRadioGroup;
  progCirc:any={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  domDataReady:boolean=false;
  saveSettInProg:boolean=false;
  noofOpts:any={alerts:4,database:1,payrates:1,profile:1,snoop:1}
  appSettings:AppUserSettings|null=null;
  // Database Vars
  hasDBBU:boolean=null;
  dbBUItem:any=null;
  dbBUDLUrl:string=null;
  dbBUMeta:any=null;
  dbBUNewData:boolean=null;
  dbBUManAct:any=null;
  dbBUULPerc:number=0;
  dbBUULStatus:string=null;
  dbBUError:string=null;
  // Alert Vars
  notePerms:boolean=null;
  calPerms:boolean=null;
  calList:any[]=[];
  selectedCal:any;
  alertSchedShowing:boolean=false;
  isRescheduling:boolean=false;
  delayedRSCount:number=0;
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private platform: Platform,
    private router: Router,
    private evServ: EventsService,
    private storeServ: StorageService,
    private deputy: DeputyService,
    private fileServ: FileSystemService,
    private sqlServ: SQLiteService,
    private dT: DateTimeService,
    private noteServ: NotificationsService,
    private modalCtrl: ModalController,
    private calServ:CalendarService,
    private fireServ:FirebaseService,
    private pushServ:PushService
  ) { }
////////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit() { this.logger.info('[Settings|ngOnInit] ()...');
    this.platform.ready().then(()=>{
      this.pageEnterAnim();
      Keyboard.removeAllListeners();
      this.loadOptionStates();
    })
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillEnter() { this.logger.info('[Settings|ionViewWillEnter] ()...');setTimeout(()=>{this.evServ.publish('doPageEnterAnim',null)},300) }
////////////////////////////////////////////////////////////////////////////////////////
  async loadOptionStates() { this.logger.info('[Settings|loadOptionStates] ()...');
    let savedSettingsObj:AppUserSettings;
    const localRes:any=await this.sqlServ.getSettings();
    if(localRes.result){savedSettingsObj=localRes.data}
    else{const fireRes:any=await this.fireServ.getSettingsValue(null);if(fireRes.result&&fireRes.data!==null){savedSettingsObj=fireRes.data}
    else{savedSettingsObj=defaultAUSettings();this.evServ.showToast('warning','Using Default Settings')}};
    this.appSettings=savedSettingsObj;
    for(const[key,value]of Object.entries(this.appSettings)){
      const oK:string=key.toString();const oV:any=value;
      switch(oK){
        case 'alerts': const aOAMV:any=oV.options.alertMethods.value;
          if(aOAMV.phone){if(!(await this.checkNotePerms())){this.changeAlertMethods('phone',false);this.noteServ.noteGetPerms()}};
          if(aOAMV.calendar){if(!(await this.checkCalPerms())){this.changeAlertMethods('calendar',false);this.calServ.reqCalPerms()}};
          break;
        case 'database': if(oV.options.backupMode.value!=='none'){this.getDBBUInfo('init')};break;
      }
    };
    this.calList=this.calServ.calList;
    this.selectedCal=this.calServ.selectedCal;
    await this.saveSettObj();
    this.domDataReady=true;
  }
////////////////////////////////////////////////////////////////////////////////////////
  async saveSettObj():Promise<boolean>{
    if(!this.saveSettInProg){
      const sT:Date=new Date();let didDB:boolean=false,didFire:boolean=false;
      this.logger.info('[Settings|saveSettObj] (STARTED) >>> Saving Updated appSettings Object...');
      this.saveSettInProg=true;
      const consM=(r:string,dfs:string)=>{let rT:string,dfT:string;r==='s'?rT='SUCCESS':rT='ERROR';dfs==='d'?dfT='SQLite/Details/Storage':dfT='Firebase';const m:string='[Settings|saveSettObj] ('+rT+') Save Settings Obj to '+dfT;this.logger.info(m)};
      if((await this.sqlServ.setSettings(this.appSettings))){didDB=true;consM('s','d')}else{consM('e','d')};
      if((await this.fireServ.setFireSettingsDoc(null,this.appSettings))){didFire=true;consM('s','f')}else{consM('e','f')};
      this.saveSettInProg=false;
      this.logger.info('[Settings|saveSettObj] (FINISHED) after '+this.evServ.getDur(sT)+'ms - >>> Results: SQLite='+String(didDB)+', FireDoc='+String(didFire));
      return Promise.resolve(true);
    }else{this.logger.info('[Settings|sSObj] [WARNING] Already Running - Skipping.');return Promise.resolve(true)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async toggleOptInfo(optSec:string,optProp:string) { this.logger.info('[Settings|toggleOptInfo] ('+optSec+','+optProp+')...');
    const oldInfoV:boolean=Boolean(this.appSettings[String(optSec)].options[String(optProp)].info);
    let newInfoV:boolean;oldInfoV?newInfoV=false:newInfoV=true;
    if(oldInfoV!==newInfoV){
      this.appSettings[String(optSec)].options[String(optProp)].info=newInfoV;
      await this.saveSettObj();
    }
  }
//--------------------------------------------------------------------------------------
  async sectionVisToggle(sectionName:string,visValue:boolean) { this.logger.info('[Settings|sectionVisToggle] ('+sectionName+','+visValue+')...');
    const oldSVisVal:boolean=Boolean(visValue);
    let newSVisVal:boolean;oldSVisVal?newSVisVal=false:newSVisVal=true;
    if(oldSVisVal!==newSVisVal){
      this.appSettings[sectionName].showSection=newSVisVal;
      await this.saveSettObj();
    }
  }
//--------------------------------------------------------------------------------------
  async changeDatabaseOpts(optProp:string,optVal:any) { this.logger.info('[Settings|changeDatabaseOpts] ('+optProp+','+optVal+')...');
    if(optProp==='backupMode'&&optVal==='none'&&this.hasDBBU){
      const{value}=await Dialog.confirm({title:'Confirm No Backups',message:'WARNING: Existing backup will be DELETED. OK to proceed?',okButtonTitle:'Yes, Proceed'});
      if(value){this.logger.info('[Settings|changeDatabaseOpts] (autobackup > "none") User Confirmed - Deleting Backup...');
        this.dbBUAction('delete');
        this.appSettings.database.options[optProp].value=optVal;
        this.saveSettObj();
      }else{
        this.evServ.showToast('cross','Cancelled');
        this.databaseAutobackupRG.value=this.appSettings.database.options.backupMode.value
      }
    }else{this.appSettings.database.options[optProp].value=optVal;
      this.saveSettObj();
    }
  }
//--------------------------------------------------------------------------------------
  async changeAlertMethods(optName:string,optActive:any) { this.logger.info('[Settings|changeAlertMethods] ('+optName+','+optActive+')...');
    const oldAMethodV:boolean=Boolean(this.appSettings.alerts.options.alertMethods.value[String(optName)]);
    const newAMethodV:boolean=Boolean(optActive);
    const reqP=async():Promise<boolean>=>{if(String(optName)==='phone'){await this.noteServ.reqP();return Promise.resolve(true)}else{await this.calServ.reqCalPerms();return Promise.resolve(true)}};
    const checkP=async():Promise<boolean>=>{if(String(optName)==='phone'){if((await this.noteServ.permOK())){return Promise.resolve(true)}else{return Promise.resolve(false)}}else{if((await this.calServ.checkCalPerms())){return Promise.resolve(true)}else{return Promise.resolve(false)}}};
    if(oldAMethodV!==newAMethodV){
      if(String(optName)!=='email'){this.isRescheduling=true;const rsF=this.evServ.subscribe('reschedFinish',()=>{this.isRescheduling=false;rsF.unsubscribe()})};
      if(newAMethodV){const gotP:boolean=await checkP();if(!gotP){await reqP();this.changeAlertMethods(optName,newAMethodV);return}};
      this.appSettings.alerts.options.alertMethods.value[String(optName)]=newAMethodV;
      await this.saveSettObj();
      switch(optName){
        case'phone':await this.noteServ.updateNoteSetting();break;
        case'calendar':await this.calServ.updateCalSettings();break;
        case'email':this.evServ.publish('alertsStatus',true);break;
      }
    }
  }
//--------------------------------------------------------------------------------------
  async changeAlertEvents(optName:string,optActive:any) { this.logger.info('[Settings|changeAlertEvents] ('+optName+','+optActive+')...');
    const oldAEventV:boolean=Boolean(this.appSettings.alerts.options.alertEvents.value[String(optName)]);
    const newAEventV:boolean=Boolean(optActive);
    if(oldAEventV!==newAEventV){
      this.isRescheduling=true;
      this.appSettings.alerts.options.alertEvents.value[String(optName)]=newAEventV;
      await this.saveSettObj();
      if(String(optName)!=='tsheet'){
        let rsC:number=0;const rsF=this.evServ.subscribe('reschedFinish',()=>{rsC++;if(rsC>1){this.isRescheduling=false;rsF.unsubscribe()}});
        await this.noteServ.updateNoteSetting();
        await this.calServ.updateCalSettings();
      }else{this.isRescheduling=false};
      const aMEmailV:boolean=Boolean(this.appSettings.alerts.options.alertMethods.value.email);
      const aEvO:any=this.appSettings.alerts.options.alertEvents.value;
      this.evServ.publish('alertsStatus',true);
    }
  }
//--------------------------------------------------------------------------------------
  async changeAlertBefore(optName:string,newRange:any){ this.logger.info('[Settings|changeAlertBefore] ('+optName+','+newRange+')');
    const newValue:number=AUSAlertRange2Value(optName,Number(newRange));
    const newABeforeObj:any={range:Number(newRange),mins:newValue};
    const oldABeforeObj:any=this.appSettings.alerts.options.alertBefore.value[optName];
    if(!_.isEqual(oldABeforeObj,newABeforeObj)){
      this.isRescheduling=true;
      this.appSettings.alerts.options.alertBefore.value[optName]=newABeforeObj;
      await this.saveSettObj();
      if(String(optName)!=='tsheet'){
        let rsC:number=0;const rsF=this.evServ.subscribe('reschedFinish',()=>{rsC++;if(rsC>1){this.isRescheduling=false;rsF.unsubscribe()}});
        await this.noteServ.updateNoteSetting();
        await this.calServ.updateCalSettings();
      }else{this.isRescheduling=false};
    }
  }
//--------------------------------------------------------------------------------------
  async alertCalSelect(selCal:any) { this.logger.info('[Settings|alertCalSelect] ()...');
    let myCalOs:any[]=[];
    myCalOs.push({title:'\uD83D\uDFE2 '+selCal.name+' (𝘚𝘦𝘭𝘦𝘤𝘵𝘦𝘥)'});
    for(let i=0;i<this.calList.length;i++){if(this.calList[i].name!==selCal.name){myCalOs.push({title:'\uD83D\uDD18 '+this.calList[i].name})}};
    myCalOs.push({title:'\u274C CANCEL'});
    const sameI:number=0;const cancelI:number=myCalOs.length-1;
    const calSelRes=await ActionSheet.showActions({title:'Select Alert Calendar',options:myCalOs});
    if(calSelRes.index===cancelI){this.evServ.showToast('cross','Select Calendar Cancelled')}
    else if(calSelRes.index===sameI){this.evServ.showToast('warning','Same Calendar Selected')}
    else{
      const newCalSelName:string=myCalOs[calSelRes.index].title.replace('\uD83D\uDD18 ','');
      const newCalSelObj:any=this.calList.filter(c=>c.name===newCalSelName)[0];
      const oldCalId:string=String(this.appSettings.alerts.options.alertCal.value);
      const newCalId:string=String(newCalSelObj.id);
      if(oldCalId!==newCalId){
        this.evServ.showToast('success','Alert Calendar: '+this.selectedCal.name);
        this.isRescheduling=true;
        this.selectedCal=newCalSelObj;
        this.appSettings.alerts.options.alertCal.value=newCalId;
        await this.saveSettObj();
        const rsF=this.evServ.subscribe('reschedFinish',()=>{this.isRescheduling=false;rsF.unsubscribe()});
        await this.calServ.updateCalSettings();
      }
    }
  }
//--------------------------------------------------------------------------------------
  async toggleShowPR(optActive:any) { this.logger.info('[Settings|toggleShowPR] ('+optActive+')...');
    const oldSIncomeV:boolean=Boolean(this.appSettings.payrates.options.show.value);
    const newSIncomeV:boolean=Boolean(optActive);
    if(oldSIncomeV!==newSIncomeV){
      this.isRescheduling=true;
      let rsC:number=0;const rsF=this.evServ.subscribe('reschedFinish',()=>{rsC++;if(rsC>1){this.isRescheduling=false;rsF.unsubscribe()}});
      this.appSettings.payrates.options.show.value=newSIncomeV;
      await this.saveSettObj();
      await this.noteServ.updateNoteSetting();
      await this.calServ.updateCalSettings();
    }
  }
//--------------------------------------------------------------------------------------
  async toggleSyncProfile(optActive:any) { this.logger.info('[Settings|toggleSyncProfile] ('+optActive+')...');
    const oldASyncV:boolean=Boolean(this.appSettings.profile.options.alwaysSync.value);
    const newASyncV:boolean=Boolean(optActive);
    if(oldASyncV!==newASyncV){
      this.appSettings.profile.options.alwaysSync.value=newASyncV;
      await this.saveSettObj();
    }
  }
//--------------------------------------------------------------------------------------
  async toggleSnoop(optActive:any) { this.logger.info('[Settings|toggleSnoop] ('+optActive+')...');
    const oldSnoopV:boolean=Boolean(this.appSettings.snoop.options.activated.value);
    const newSnoopV:boolean=Boolean(optActive);
    if(oldSnoopV!==newSnoopV){
      this.appSettings.snoop.options.activated.value=newSnoopV;
      await this.saveSettObj();
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  getDBBUInfo(mode:string) { this.logger.info('[Settings|initFireDBBU] ()...');
    this.evServ.subscribe('checkFSDBBU',checkRes=>{
      if(checkRes.result){this.evServ.destroy('checkFSDBBU');
        this.updateDBBUMeta({meta:checkRes.data.meta,dlurl:checkRes.data.dlurl});
        this.hasDBBU=true;
        if(mode==='init'){this.evServ.publish('initStep','dbOpts')};
      }else{
        const errCode=checkRes.data;
        switch(errCode){
          case 'storage/object-not-found':this.dbBUError='No Backup Found';break;
          case 'storage/unauthorized':this.dbBUError='Error: Unauthorised';break;
          case 'storage/canceled':this.dbBUError='Fetch Cancelled';break;
          case 'storage/unknown':this.dbBUError='Unknown Error';break
        };
        if(this.dbBUItem!==null){this.dbBUItem=null};
        if(this.dbBUDLUrl!==null){this.dbBUDLUrl=null};
        if(this.dbBUMeta!==null){this.dbBUMeta=null};
        this.hasDBBU=false;
        if(mode==='init'){this.evServ.publish('initStep','dbOpts')}
      }
    });this.fireServ.checkFSDBBU();
  }
////////////////////////////////////////////////////////////////////////////////////////
  updateDBBUMeta(metaObj:any) { this.logger.info('[Settings|updateDBBUMeta] (metaObj)...');
    let isInit:boolean;let prevSize:string=null;let prevDate:string=null;
    if(this.dbBUItem!==null){isInit=false;prevSize=this.dbBUItem.size;prevDate=this.dbBUItem.date}else{isInit=true};
    const buMeta:any=metaObj.meta;
    this.dbBUMeta=metaObj.meta;
    this.dbBUDLUrl=metaObj.dlurl;
    const niceSize:string=this.niceBytes(buMeta.size,2);
    const niceDate:string=this.dT.format(new Date(buMeta.updated),'dd/MM/yy H:mm');
    this.dbBUItem={name:'Cloud Backup',date:niceDate,size:niceSize};
    if(!isInit){setTimeout(()=>{if(this.dbBUItem.size!==prevSize||this.dbBUItem.date!==prevDate){this.dbBUNewData=true;setTimeout(()=>{this.dbBUNewData=false},1500)}},1500)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  uploadDBBU() { this.logger.info('[Settings|uploadFireDBBU] ()...');
    let instOnce:number=0;
    this.evServ.subscribe('dbbuBlob',blob=>{this.evServ.destroy('dbbuBlob');
      this.evServ.subscribe('dbbuULProg',ulD=>{
        switch(ulD.event){
          case 'running':
            if(instOnce===0){instOnce++;
              this.dbBUULStatus='inprog';
            };
            this.dbBUULPerc=ulD.data.perc;
            break;
          case 'successData':
            this.dbBUManAct={action:'create',stage:'success'};
            this.dbBUULStatus='success';
            this.dbBUULPerc=100;
            this.hasDBBU=true;
            this.updateDBBUMeta({meta:ulD.data.meta,dlurl:ulD.data.dlurl});
            this.evServ.showToast('success','Backup Successful');
            setTimeout(()=>{
              this.dbBUManAct=null;
              this.dbBUULStatus=null;
              this.dbBUULPerc=0;
              this.evServ.destroy('dbbuULProg');
            },1500);
          break;
          case 'errorData':
            this.dbBUManAct={action:'create',stage:'error'};
            this.dbBUULStatus='error';
            this.hasDBBU=false;
            this.evServ.showToast('error','Backup Error');
            this.getDBBUInfo('refresh');
            setTimeout(()=>{
              this.dbBUManAct=null
              this.dbBUULStatus=null;
              this.dbBUULPerc=0;
              this.evServ.destroy('dbbuULProg');
            },1500);
          break;
        }
      });
      this.fireServ.uploadFSDBBU(blob);
    });
    this.fileServ.getFireDBBUFile(this.deputy.uUK);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async installDBBU() { this.logger.info('[Settings|installDBBU] ()...');
    let isOlder:boolean;let isSmaller:boolean;
    const dbStat:any=(await this.fileServ.getCurrentDBStat(this.deputy.uUK)).data;
    let dbUTS:number;dbStat.mtime>=dbStat.ctime?dbUTS=dbStat.mtime/1000:dbUTS=dbStat.ctime/1000;
    const dbSize:number=dbStat.size;
    const buUTS:number=this.dT.getUT(new Date(this.dbBUMeta.updated));
    const buSize:number=this.dbBUMeta.size;
    dbUTS>buUTS?isOlder=true:isOlder=false;dbSize>buSize?isSmaller=true:isSmaller=false;
    let warnMsg:string;
    if(!isOlder&&!isSmaller){warnMsg=''}else{
      warnMsg='𝗪𝗔𝗥𝗡𝗜𝗡𝗚: Backup DB is';
      if(isOlder){warnMsg=warnMsg+' OLDER'};
      if(isOlder&&isSmaller){warnMsg=warnMsg+' & '};
      if(isSmaller){warnMsg=warnMsg+' SMALLER'};
      warnMsg=warnMsg+' than Active DB.\n\n'
    };
    const{value}=await Dialog.confirm({title:'Confirm DB Install',message:''+warnMsg+'Installing a Backup will REPLACE your Active DB and RESTART the App.\n\nAre you SURE you want to proceed?',okButtonTitle:'Yes, Proceed'});
    if(value){this.logger.info('[Settings|dbBUAction|Install] (Install Warning) - User Confirmed - Installing & Reloading App...');
      this.sqlServ.lrQC();
      this.evServ.subscribe('cpRevertDBDone',rvD=>{this.evServ.destroy('cpRevertDBDone');
        this.logger.info('[Settings|dbBUAction|Install] (Create Revert DB) SUCCESS: '+rvD.uri);
        this.storeServ.setObject('newDBInstall',rvD);
        setTimeout(async()=>{
          this.evServ.subscribe('installBUDBDone',insD=>{this.evServ.destroy('installDBDBDone');
            if(insD){
              this.evServ.showToast('warning','DB Installed - Restart Sheriff!');
              this.dbBUManAct={action:'install',stage:'success'};
              setTimeout(()=>{this.dbBUManAct=null},1500);
              setTimeout(()=>{App.exitApp()},2000)
            }else{
              this.evServ.showToast('error','DB Install Failed');
              this.dbBUManAct={action:'install',stage:'fail'};
              setTimeout(()=>{this.dbBUManAct=null},1500);
            }
          });
          const dlInstallBURes:boolean=await this.fileServ.dlFireBUForInstall(this.dbBUDLUrl);
          if(dlInstallBURes){this.sqlServ.installFireBU()}else{this.evServ.showToast('error','Backup Download Failed');this.evServ.destroy('installDBDBDone');return}
        },500);
      });
      this.sqlServ.createRevertDB()
    }else{this.evServ.showToast('cross','Cancelled');this.dbBUManAct={action:'install',stage:'fail'};setTimeout(()=>{this.dbBUManAct=null},1500)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  deleteDBBU() { this.logger.info('[Settings|deleteDBBU] ()...');
    this.evServ.subscribe('delFSDBBU',tf=>{this.evServ.destroy('delFSDBBU');
      if(tf){this.dbBUManAct={action:'delete',stage:'success'};this.getDBBUInfo('refresh');setTimeout(()=>{this.dbBUManAct=null},1500)
      }else{this.dbBUManAct={action:'delete',stage:'fail'};setTimeout(()=>{this.dbBUManAct=null},1500)}
    })
    this.fireServ.deleteFSDBBU()
  }
////////////////////////////////////////////////////////////////////////////////////////
  async dbBUAction(action:string) {
    if(action==='upload'){this.dbBUManAct={action:'create',stage:'inprog'};this.uploadDBBU()};
    if(action==='install'){this.dbBUManAct={action:'install',stage:'inprog'};this.installDBBU()};
    if(action==='delete'){this.dbBUManAct={action:'delete',stage:'inprog'};this.deleteDBBU()}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async checkNotePerms():Promise<boolean> {
    if(this.notePerms!==null){return Promise.resolve(this.notePerms)}
    else{
      const cNPermsRes:boolean=(await this.noteServ.noteGetPerms()).result;
      this.notePerms=cNPermsRes;return Promise.resolve(this.notePerms)
    }
  }    
// -------------------------------------------------------------------------------------
  async openAlertSchedule() { this.logger.info('[Settings|openAlertSchedule] ()...');
    let aSchedOpts:any={component:AlertSchedulePage,componentProps:null,showBackdrop:true,backdropDismiss:true,cssClass:'alert-schedule-modal-class',animated:true,mode:'md',keyboardClose:true,id:'alert-schedule-modal'};
    let rawSchedData:any[]=[];
    const pCalEvs:any=this.calServ.schedEvs;
    const hasCalEv=(type:string,dId:any):boolean=>{let hasCalEv:boolean;for(let i=0;i<pCalEvs[type].length;i++){const pCO:any=pCalEvs[type][i];if(pCO.dId.toString()===dId.toString()){hasCalEv=true}};return hasCalEv};
    const valDate=(tD:any):Date=>{if(this.dT.isV(new Date(tD))){return new Date(tD)}else{return this.dT.pISO(tD)}};
    if(this.appSettings.alerts.options.alertMethods.value.phone){
      // If Note Alerts Enabled --------------------------------
      const pNotes:any=await this.noteServ.notePending();
      if(pNotes.result&&pNotes.data.length>0){
        const pNData:any[]=pNotes.data;
        for(let i=0;i<pNData.length;i++){
          const sNRaw:any=pNData[i];
          const sNId:number=sNRaw.id;
          const sNAlertAt:Date=valDate(sNRaw.schedule.at);
          const sNEventAt:Date=valDate(sNRaw.extra.evdate);
          const sNType:string=sNRaw.extra.type;
          const sNUCType:string=sNRaw.extra.uctype;
          const sNIsTest:boolean=sNRaw.extra.isTest;
          const sNObj:any={type:sNType,uctype:sNUCType,id:sNId,eventat:sNEventAt,alertat:sNAlertAt,methods:{phone:true},isTest:sNIsTest};
          if(hasCalEv(sNObj.type,sNObj.id)){sNObj.methods['calendar']=true}else{sNObj.methods['calendar']=false};
          rawSchedData.push(sNObj)
        };
        aSchedOpts.componentProps={rawAlertList:rawSchedData}
      }else{aSchedOpts.componentProps={rawAlertList:[]}}
    }else{
      // If Note Alerts NOT Enabled --------------------------
      let pCalEvsArr:any[]=[];
      // Shifts...
      if(pCalEvs.shift.length>0){
        const shiftB4Mins:number=this.appSettings.alerts.options.alertBefore.value.shift.mins;
        for(let i=0;i<pCalEvs.shift.length;i++){
          const pCalEvShiftDepId:number=Number(pCalEvs.shift[i].dId);
          const pCalEvShiftO:any=(await this.calServ.findCalEvent(pCalEvShiftDepId)).data[0];
          const pCalEvShiftEventAt:Date=this.dT.parseStr(pCalEvShiftO.startDate,'yyyy-MM-dd HH:mm:ss');
          const pCalEvShiftAlertAt:Date=this.dT.subMs(pCalEvShiftEventAt,shiftB4Mins);
          const pCalSchedShiftOb={type:'shift',uctype:'Shift',id:pCalEvShiftDepId,eventat:pCalEvShiftEventAt,alertat:pCalEvShiftAlertAt,methods:{phone:false,calendar:true},isTest:false};
          rawSchedData.push(pCalSchedShiftOb)
        }
      };
      // Tasks...
      if(pCalEvs.task.length>0){
        const taskB4Mins:number=this.appSettings.alerts.options.alertBefore.value.task.mins;
        for(let i=0;i<pCalEvs.task.length;i++){
          const pCalEvTaskDepId:number=Number(pCalEvs.task[i].dId);
          const pCalEvTaskO:any=(await this.calServ.findCalEvent(pCalEvTaskDepId)).data[0];
          const pCalEvTaskEventAt:Date=this.dT.parseStr(pCalEvTaskO.startDate,'yyyy-MM-dd HH:mm:ss');
          const pCalEvTaskAlertAt:Date=this.dT.subMs(pCalEvTaskEventAt,taskB4Mins);
          const pCalSchedShiftOb={type:'task',uctype:'Task',id:pCalEvTaskDepId,eventat:pCalEvTaskEventAt,alertat:pCalEvTaskAlertAt,methods:{phone:false,calendar:true},isTest:false};
          rawSchedData.push(pCalSchedShiftOb)
        }
      };
      aSchedOpts.componentProps={rawAlertList:rawSchedData}
    };
    const sortdArr:any[]=_.sortBy(aSchedOpts.componentProps.rawAlertList,'id');
    aSchedOpts.componentProps.rawAlertList=sortdArr;
    const aSchedModal:any=await this.modalCtrl.create(aSchedOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.logger.info('[EVENT]: IonModalDidPresent...');this.alertSchedShowing=true});
    await aSchedModal.present();
    const {data,role}=await aSchedModal.onDidDismiss();
    this.alertSchedShowing=false;
    this.logger.info('onDidDismiss resolved with data/role: '+data+'/'+role);
  }
////////////////////////////////////////////////////////////////////////////////////////
/// CALENDAR FNS  
////////////////////////////////////////////////////////////////////////////////////////
  async checkCalPerms():Promise<boolean> {
    if(this.calPerms!==null){return Promise.resolve(this.calPerms)}
    else{
      if(this.calServ.hasPerms!==null){return Promise.resolve(this.calServ.hasPerms)}
      else{return Promise.resolve((await this.calServ.checkCalPerms()))}
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
/// GENERAL PAGE FNS
////////////////////////////////////////////////////////////////////////////////////////
  pageEnterAnim() {
    this.logger.info('[Settings|pageEnterAnim] ()...');
    this.evServ.subscribe('doPageEnterAnim', () => {
    const urlArr = this.router.url.split('/'); const pageKey = urlArr[urlArr.length - 1]; const sLogoEle = $('.hcl-slogo.' + pageKey); const preImg = '../../assets/img/slogo-'; const cProgEle = $('.hcl-progcirc.' + pageKey); const patchEles = $('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey); const starEle = $('.hcl-star.' + pageKey); const pageTitle = $('.hcl-title.' + pageKey); const titleBar = $('.hcl-leftbar.' + pageKey); const leftCol = $('.sheriff-page-header-col.left-col.' + pageKey); const calcBarW = Math.round(($(leftCol).outerWidth() + 6) - ($(pageTitle).offset().left + $(pageTitle).outerWidth())) + 'px'; const animBarEnd = $('.sheriff-title-leftanimbar-inner.' + pageKey); const titleText = $('.sheriff-title.tight-wrap.' + pageKey);
    $(patchEles).addClass('hidden');
    setTimeout(() => {
      $(patchEles).remove();
      $(starEle).addClass('hcl-star-startanim');
      this.progCirc.outerStrokeColor = '#FF9800';
      this.progCirc.percent = 100;
      $(sLogoEle).attr('src', preImg + 'g.png');
      this.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');
      setTimeout(() => {
        $(sLogoEle).attr('src', preImg + 'w.png');
        this.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');
        $(titleBar).css('width', calcBarW);
        setTimeout(() => {
          $(animBarEnd).addClass('showing');
          setTimeout(() => {
            $(titleText).addClass('scrolledin');
            setTimeout(() => {
              $(titleBar).addClass('dimmed');
            }, 200);
          }, 200);
        }, 400);
        ///////////////////////////////////
        setTimeout(() => {
          this.progCirc.percent = 0;
          setTimeout(() => { $(cProgEle).css('display', 'unset'); }, 1000);
          $(starEle).removeClass('hcl-star-startanim');
          this.evServ.destroy('doPageEnterAnim');
        }, 600);
      }, 400);
    }, 600);
    });
  }
//////////////////////////////////////////////////////
  niceBytes(bytes:number,decimals=2) {
    if(bytes===0) return 'empty';const k=1024;const dm=decimals<0?0:decimals;const sizes=['Bytes','kB','MB','GB','TB','PB','EB','ZB','YB'];const i=Math.floor(Math.log(bytes)/Math.log(k));return parseFloat((bytes/Math.pow(k,i)).toFixed(dm))+' '+sizes[i];
  }
////////////////////////////////////////////////////////////////////////////////////////
  myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) { // #myElement, tada, 0-1500, 0-1500, keep/remove, show/hide/remove
    this.logger.info('[Settings|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
    const doAni = () => new Promise((resolve) => {
      const aniStr = 'animate__animated animate__' + aniName; const delStr = 'animDel-' + aniDel; const durStr = 'animDur-' + aniDur;
      $(theEle).on('animationend', () => { 
        if ( aniEnd === 'remove' ) { $(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr); }
        if ( eleEnd === 'remove' ) { $(theEle).remove(); }
        if ( eleEnd === 'hide' ) { $(theEle).css('display', 'none'); }
        resolve(true);
      });
      if ( aniDel > 0 ) { $(theEle).addClass(delStr); }
      if ( aniDur > 0 ) { $(theEle).addClass(durStr); }
      if ( $(theEle).length > 0 ) { $(theEle).addClass(aniStr); }
    });
    doAni();
  }
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
}

