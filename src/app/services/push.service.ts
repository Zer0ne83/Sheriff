import { InAppPushNoteModal } from './../modals/inapp-pushnote/inapp-pushnote.page';
import { ListChannelsResult } from '@capacitor/local-notifications';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NGXLogger } from 'ngx-logger';
import { EventsService } from './events.service';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token, DeliveredNotifications, PermissionStatus, Channel } from '@capacitor/push-notifications';
import { Dialog } from '@capacitor/dialog';
import { StorageService } from './storage.service';
import { AppService } from './app.service';
import { FirebaseService } from './firebase.service';
import { AppUserSettings } from './appTypes';
import { DetailService } from './detail.service';
import { ModalController } from '@ionic/angular';
import { DeputyService } from './deputy.service';
/////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
/////////////////////////////////////////////////////
export class PushService {
/////////////////////////////////////////////////////
  pSIcos:string='\uD83D\uDCAC';
  FCMToken:any=null;
  pNReady:boolean=false;
  pNLastMessage:PushNotificationSchema={
    title:<string>null,
    subtitle:<string>null,
    body:<string>null,
    id:<string>null,
    badge:<number>null,
    notification:<any>null,
    data:<any>null,
    click_action:<string>null,
    link:<string>null,
    group:<string>null,
    groupSummary:<boolean>null
  };
  pNLastAction:ActionPerformed={
    actionId:<string>null,
    inputValue:<string>null,
    notification:<PushNotificationSchema>null
  };
  userSettings:AppUserSettings|null=null;
  pushTopics:any={
    tsheet:{enabled:null,time:0},
    snoop:{enabled:null}
  };
  iamIsOpen:boolean=false;
/////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private evServ:EventsService,
    private appServ:AppService,
    private platform:Platform,
    private storeServ:StorageService,
    private fireServ:FirebaseService,
    private dS:DetailService,
    private modalCtrl:ModalController,
    private deputy:DeputyService
  ) {}
/////////////////////////////////////////////////////
  doPushNoteInit() {
    this.platform.ready().then(()=>{
      this.evServ.subscribe('pushNoteInit',async stageRes=>{
        if(stageRes.stage==='permissions'){this.logger.info('[pushServ|doPushNoteInit] '+this.pSIcos+' (Stage): Permissions | Result: '+stageRes.result);
          if(stageRes.result){this.initPushNoteListeners()}else{this.evServ.destroy('pushNoteInit')}
        }else if(stageRes.stage==='listeners'){
          if(stageRes.result){
            this.storeServ.setItem('fireMsgToken',String(stageRes.token));
            this.FCMToken=stageRes.token;
            this.fireServ.onFCMTokenChange(stageRes.token);
            this.initPNChannels();
            this.logger.info('[pushServ|doPushServInit] '+this.pSIcos+' (Stage): Listeners/Registration | SUCCESS | Token: '+stageRes.token.substring(0,10));
          }else{
            this.evServ.destroy('pushNoteInit');
            this.FCMToken=null;
            this.storeServ.removeItem('fireMsgToken');
            this.evServ.publish('setFCMToken',{result:false,data:null});
            this.logger.info('[pushServ|doPushServInit] '+this.pSIcos+' (Stage): Listeners/Registration | FAIL | Error: '+stageRes.error);
          }
        }else if(stageRes.stage==='channels'){this.logger.info('[pushServ|doPushNoteInit] '+this.pSIcos+' (Stage): Channels | Result: '+stageRes.result);
          if(stageRes.result){this.pNReady=true;this.logger.info('[pushServ|doPushNoteInit] '+this.pSIcos+' (INITIALIZATION COMPLETE): SUCCESS! pNReady=TRUE')}
          else{this.pNReady=false;this.logger.info('[pushServ|doPushNoteInit] '+this.pSIcos+' (INITIALIZATION FAILED): pNReady=FALSE')};
          this.evServ.destroy('pushNoteInit');
        }else if(stageRes.stage==='topics'){this.logger.info('[pushServ|doPushNoteInit] '+this.pSIcos+' (Stage): Topics | Result: '+stageRes.result)}
      });
      this.initPushNotePerms()
    });
  }
////////////////////////////////////////////////////////////////
  changeTopicSettings(topic:string,key:string,value:any) {
    this.pushTopics[topic][key]=value;
    this.logger.info('\uD83D\uDCAC [pushServ|changeTopicSettings] (CHANGED) - pushTopics.'+topic+'.'+key+' >>> TO = '+JSON.stringify(value));
  }
////////////////////////////////////////////////////////////////
  async initPushTopics() { this.logger.info('\uD83D\uDCAC [pushServ|initSettings] ()...');
    this.userSettings=await this.dS.getSettings();
    this.pushTopics.tsheet.enabled=this.userSettings.alerts.options.alertEvents.value.tsheet;
    this.pushTopics.tsheet.time=this.userSettings.alerts.options.alertBefore.value.tsheet;
    this.pushTopics.snoop.enabled=this.userSettings.snoop.options.activated;
    this.evServ.publish('pushNoteInit',{stage:'topics',result:true});
  }
/////////////////////////////////////////////////////
  async initPushNotePerms(){ this.logger.info('[pushServ|doPushNotePerms] '+this.pSIcos+' ()...');
    const checkPRes:PermissionStatus=await PushNotifications.checkPermissions();
    if(checkPRes&&checkPRes.receive==='granted'){this.evServ.publish('pushNoteInit',{stage:'permissions',result:true})}
    else{const getPRes:PermissionStatus=await PushNotifications.requestPermissions();
      if(getPRes&&getPRes.receive==='granted'){this.evServ.publish('pushNoteInit',{stage:'permissions',result:true})}
      else{this.evServ.publish('pushNoteInit',{stage:'permissions',result:false})}
    }
  }
/////////////////////////////////////////////////////
  initPushNoteListeners(){ this.logger.info('[pushServ|doPushNoteListeners] '+this.pSIcos+' ()...');
    const addPushListeners=()=>{
      PushNotifications.addListener('registration',async(token:Token)=>{
        this.evServ.publish('pushNoteInit',{stage:'listeners',result:true,token:token.value});
        await this.deputy.setSServerFCM(token.value);
      });
      PushNotifications.addListener('registrationError',(error:any)=>{this.evServ.publish('pushNoteInit',{stage:'listeners',result:false,error:error})});
      PushNotifications.addListener('pushNotificationReceived',(pNote:PushNotificationSchema)=>{
        this.pNLastMessage=pNote;
        const showInApp:boolean=this.appServ.aIsActive;
        if(showInApp){this.showInAppPushNote(pNote)};
        this.logger.info('[pushServ|Event] '+this.pSIcos+' (EVENT): "pushNotificationReceived" - ShowInApp?: '+showInApp.toString().toUpperCase())
      });
      PushNotifications.addListener('pushNotificationActionPerformed',(pNoteAction:ActionPerformed)=>{
        const showInApp:boolean=this.appServ.aIsActive;
        if(showInApp){this.showInAppAction(pNoteAction)};
        this.logger.info('[pushServ|Event] '+this.pSIcos+' (EVENT): "pushNotificationActionPerformed" - ShowInApp?: '+showInApp.toString().toUpperCase())
      });
      setTimeout(()=>{PushNotifications.register()},1000);
    };
    PushNotifications.removeAllListeners();
    setTimeout(()=>{addPushListeners()},1000);
  }
///////////////////////////////////////////////////// 
  async initPNChannels() { this.logger.info('[pushServ|initPNChannels] '+this.pSIcos+' ()...');
    const listChanRes:ListChannelsResult=await PushNotifications.listChannels();
    if(listChanRes.channels.length>0){let hasMyChan:boolean=false;
      for(let i=0;i<listChanRes.channels.length;i++){const chanO:any=listChanRes.channels[i];if(chanO.id.toString()==='sheriff-alerts'){hasMyChan=true}};
      if(!hasMyChan){this.createPNChannel()}else{this.evServ.publish('pushNoteInit',{stage:'channels',result:true})}
    }else{this.createPNChannel()}
  }
/////////////////////////////////////////////////////
  async createPNChannel() { this.logger.info('[pushServ|createPNChannel] '+this.pSIcos+' ()...');
    let appOpts:Channel={id:'sheriff-alerts',name:'Sheriff Alerts',description:'Alert Channel for Sheriff App',sound:'sheriffnote.wav',importance:5,visibility:1,lights:true,lightColor:'#FF9800',vibration:true};
    let depOpts:Channel={id:'deputy-alerts',name:'Deputy Alerts',description:'Alerts re Deputy API',sound:'sheriffother.wav',importance:5,visibility:1,lights:true,lightColor:'#F26A60',vibration:true};
    let snoopOpts:Channel={id:'snoop-alerts',name:'Snoop Alerts',description:'Alerts Channel for Snooping',sound:'sheriffpst.wav',importance:5,visibility:1,lights:false,lightColor:'#AAAAAA',vibration:false};
    await PushNotifications.createChannel(depOpts);
    await PushNotifications.createChannel(snoopOpts);
    PushNotifications.createChannel(appOpts).then(async()=>{
      const nowChanRes:ListChannelsResult=await PushNotifications.listChannels();
      if(nowChanRes.channels.length>0){let nowHasMyChan:boolean=false;
        for(let i=0;i<nowChanRes.channels.length;i++){const nowChanO:any=nowChanRes.channels[i];if(nowChanO.id.toString()==='sheriff-alerts'){nowHasMyChan=true}};
        if(!nowHasMyChan){this.evServ.publish('pushNoteInit',{stage:'channels',result:false})}else{this.evServ.publish('pushNoteInit',{stage:'channels',result:true})}
      }else{this.evServ.publish('pushNoteInit',{stage:'channels',result:false})}
    });
  }
/////////////////////////////////////////////////////
  async showInAppPushNote(pNote:PushNotificationSchema){ this.logger.info('[pushServ|showInAppPushNote] '+this.pSIcos+' ()');
    let localTitle:string;pNote.hasOwnProperty('title')?localTitle=pNote.title:localTitle='';
    let localBody:string;pNote.hasOwnProperty('body')?localBody=pNote.body:localBody=''; 
    let hasData:boolean;pNote.hasOwnProperty('data')?hasData=true:hasData=false;
    let localPNData:any=pNote.data;
    let displayMethod:string;
    if(hasData&&pNote.data.hasOwnProperty('inAppDisplay')){
      displayMethod=pNote.data.inAppDisplay;
      delete localPNData.inAppDisplay
    }else{displayMethod='toast'};
    let fnType:string;
    if(hasData&&pNote.data.hasOwnProperty('fnType')){
      fnType=pNote.data.fnType;
      delete localPNData.fnType
    }else{fnType=null};
    // In-App DPAuth Refreshed -----------------------------
    if(hasData&&fnType==='newauth'&&localPNData.hasOwnProperty('access_token')){this.deputy.setAuthGVars(localPNData)}
    else{
      // In-App Notif Bubbles --------------------------------
      const notifTitleKs:string[]=['Work Event','Sheriff Server','Deputy Access','Shift Reminder','Timesheet Warning','Task Reminder'];
      const notifIcos:string[]=['notifications','server','key','balloon','balloon','balloon'];
      let iapNBObj:any={ico:<string>'',mTitle:<string>'',sTitle:<string>'',bodyLines:<string[]>[]};
      const matchI:number=notifTitleKs.findIndex(t=>pNote.title.includes(t));
      if(matchI!==-1){iapNBObj.ico=notifIcos[matchI]}else{iapNBObj.ico=notifIcos[0]};
      const titleArr:string[]=pNote.title.split('|');
      iapNBObj.mTitle=titleArr[0];iapNBObj.sTitle=titleArr[1];
      const bodyArr:string[]=pNote.body.split('\n');
      for(let i=0;i<bodyArr.length;i++){const bL:string=bodyArr[i];iapNBObj.bodyLines.push(bL)};
      console.log(iapNBObj);
      this.evServ.publish('iapBubble',iapNBObj);
    }
    /* switch(displayMethod){
        case 'toast':this.evServ.showPushToast(null,localTitle,localBody,null,null);break;
        case 'alert':await Dialog.alert({title:localTitle,message:localBody});break;
        case 'modal':let iaModalOpts:any={component:InAppPushNoteModal,componentProps:{pNote:pNote},showBackdrop:true,backdropDismiss:true,cssClass:'inapp-pushnote-modal-class',animated:true,mode:'md',keyboardClose:true,id:'inapp-pushnote-modal'};
        const aSchedModal:any=await this.modalCtrl.create(iaModalOpts);
        document.addEventListener('ionModalDidPresent',()=>{this.logger.info('[EVENT]: IonModalDidPresent...');this.iamIsOpen=true});
        await aSchedModal.present();
        aSchedModal.onDidDismiss().then(()=>{this.iamIsOpen=false});
        break;
        case 'none':this.logger.info('[pushServ|showInAppPushNote] pNote.data.inAppDisplay==="none": Title/Body to Console & Processing Data Only...');this.logger.info('[pushServ|showInAppPushNote] 👀 [HIDDEN PUSH NOTE] >>> Title: '+localTitle+', Body: '+localBody+', Data: ');this.logger.info(pNote.data);
      }; */
  }
/////////////////////////////////////////////////////
  async showInAppAction(pNoteAction:ActionPerformed){ this.logger.info('[pushServ|showInAppAction] '+this.pSIcos+' ()');
    this.evServ.showToast('msg','Action Id: '+pNoteAction.actionId)
  }
/////////////////////////////////////////////////////
  async getDeliveredPNList():Promise<any[]> { this.logger.info('[pushServ|getDeliveredList] '+this.pSIcos+' ()...');
    const gDLRes:DeliveredNotifications=await PushNotifications.getDeliveredNotifications();
    if(gDLRes&&gDLRes.notifications.length>0){return Promise.resolve(gDLRes.notifications)}else{return Promise.resolve([])}
  }
/////////////////////////////////////////////////////
  removeDeliveredPN(mode:string,list:DeliveredNotifications){ this.logger.info('[pushServ|removeDeliveredPN] (mode:'+mode+',list)...');
    if(mode==='all'){PushNotifications.removeAllDeliveredNotifications()}
    else{PushNotifications.removeDeliveredNotifications(list)};
  }
/////////////////////////////////////////////////////
  getPNTemplate() {
    return {
        title:<string>null,
        subtitle:<string>null,
        body:<string>null,
        id:<string>null,
        badge:<number>null,
        notification:<any>null,
        data:<any>null,
        click_action:<string>null,
        link:<string>null,
        group:<string>null,
        groupSummary:<boolean>null
    }
  }
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
}
