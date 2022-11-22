import { Component } from '@angular/core';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { DeputyService } from './services/deputy.service';
import { EventsService } from './services/events.service';
import { DetailService } from './services/detail.service';
import { StorageService } from './services/storage.service';
import { SQLiteService } from './services/sqlite.service';
import { DateTimeService } from './services/datetime.service';
import { AppService } from './services/app.service';
import { CalendarService } from './services/calendar.service';
import { NotificationsService } from './services/notifications.service';
import { PushService } from './services/push.service';
import { FirebaseService } from './services/firebase.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Network } from '@capacitor/network';
import { NGXLogger } from 'ngx-logger';
import { StatusBar } from '@capacitor/status-bar'
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';
import { Dialog } from '@capacitor/dialog';
import * as $ from 'jquery';
import * as _ from 'lodash';
//////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-root', templateUrl: 'app.component.html', styleUrls: ['app.component.scss'] })
//////////////////////////////////////////////////////////////////////////////////////
export class AppComponent {
  hasConn:boolean;
  startNavPipe:any;
  endNavPipe:any;
  currentPage:any;
  fGroundMonOnOff:any;
  tabLinksShowing = false;
  currentPageKey:string;
  access_token:string;
  refresh_token:string;
  expires_time:string;
  meAva:string;
  meName:string;
  meEmail:string;
  mePhone:string;
  workAva:string;
  workCode:string;
  menuBioInfoDone:boolean=false;
  shouldSaveShield:boolean=false;
  appInitDone:boolean=false;
  fb_login_method:string|null=null;
  fct_token:string|null=null;
  fe_token:string|null=null;
  fct_expires:string|null=null;
  deputyRefresh:string|null=null;
  sserverRefresh:string|null=null;
  doShowIAPBubble:boolean=false;
  iapBubbleData:any|null=null;
  //////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private platform: Platform,
    private menu: MenuController,
    private navController: NavController,
    private evServ: EventsService,
    private router: Router,
    private logger: NGXLogger,
    private deputy: DeputyService,
    private detailServ: DetailService,
    private sqlServ: SQLiteService,
    private storeServ: StorageService,
    private dT: DateTimeService,
    private noteServ: NotificationsService, 
    private appServ: AppService,
    private calServ: CalendarService,
    private fireServ:FirebaseService,
    private pushServ:PushService
  ) {
    if(localStorage.getItem('myDoReload')!==null){localStorage.removeItem('myDoReload')};
    this.initApp();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initApp() { this.logger.info('[App|initApp] ()...');
    this.platform.ready().then(async()=>{ 
      SplashScreen.hide({fadeOutDuration:250});
      StatusBar.setOverlaysWebView({overlay:true});
      StatusBar.setBackgroundColor({color:'#00000000'});
      await this.detailServ.getHasNetConn();
      this.initNavMon();
      this.initAppPluginListeners();
      this.FCTFns('init');
      this.initIAPBubbleListen();
      this.logger.info('[App|initApp|eventServ] ➕👂 [LISTEN] for "setAuthGVarsDone"...');
      const initSub=this.evServ.subscribe('setAuthGVarsDone',async dpAuthSetRes=>{
        this.logger.info('[App|initApp|eventServ] 📥👂 (IN) [EVENT] for "setAuthGVarsDone".');
        if(dpAuthSetRes.result){this.initSyncAuth(dpAuthSetRes.data)};
        const doAInits=()=>{
          this.logger.info('[App|initApp|eventServ) ➕👂 [LISTEN] for "doPushNoteInit"...');
          this.evServ.subscribe('doPushNoteInit',tf=>{
            this.logger.info('[App|initApp|eventServ] 📥👂 (IN) [EVENT] for "doPushNoteInit".');
            if(tf){this.pushServ.doPushNoteInit()};
            this.logger.info('[App|initApp|eventServ) 🧨👂 [DESTROY] for "doPushNoteInit".');
            this.evServ.destroy('doPushNoteInit');
          });
          this.noteServ.doNoteInit();
          this.calServ.doInitCal();
          this.logger.info('[App|initApp] (EventServ) ➖👂 [LISTEN] for "setAuthGVarsDone".');
          initSub.unsubscribe();
          this.postInitTokenListen();
        };
        // IF FR-SETUP DONE INIT
        if((await this.detailServ.getFRSetupDone())){
          this.logger.info('[App|initApp|eventServ) ➕👂 [LISTEN] for "EnteringApp"...');
          const entAppSub=this.evServ.subscribe('EnteringApp',()=>{
            this.logger.info('[App|initApp|eventServ] 📥👂 (IN) [EVENT] for "EnteringApp".');
            this.logger.info('[App|doAInits] 🟩 INIT = IMMEDIATE...');
            doAInits();
            this.logger.info('[App|initApp] (EventServ) ➖👂 [LISTEN] for "EntertingApp".');
            entAppSub.unsubscribe();
          });
        // IF FIRST-RUN INIT
        }else{
          this.logger.info('[App|initApp|eventServ) ➕👂 [LISTEN] for "doDelayedAppInits"...');
          this.evServ.subscribe('doDelayedAppInits',dbWasImported=>{
            this.logger.info('[App|initApp|eventServ] 📥👂 (IN) [EVENT] for "doDelayedAppInits".');
            if(!dbWasImported){
              this.logger.info('[App|initApp|eventServ) ➕👂 [LISTEN] for "EnteringApp"...');
              const entAppSub=this.evServ.subscribe('EnteringApp',()=>{
                this.logger.info('[App|initApp|eventServ] 📥👂 (IN) [EVENT] for "EnteringApp".');
                this.logger.info('[App|doAInits] 🟧 INIT > FIRSTRUN (DB!=Import)...');
                doAInits();
                this.logger.info('[App|initApp] (EventServ) ➖👂 [LISTEN] for "EntertingApp".');
                entAppSub.unsubscribe();
              });
              this.logger.info('[App|initApp|eventServ) 🧨👂 [DESTROY] for "doDelayedAppInits".');
              this.evServ.destroy('doDelayedAppInits');
            }else if(dbWasImported){
              this.logger.info('[App|initApp|eventServ) ➕👂 [LISTEN] for "delayedSyncDone"...');
              this.evServ.subscribe('delayedSyncDone',()=>{
                this.logger.info('[App|initApp|eventServ] 📥👂 (IN) [EVENT] for "delayedSyncDone".');
                this.logger.info('[App|doAInits] 🟨 INIT > SYNC (DB=Import)...');
                doAInits();
                this.logger.info('[App|initApp|eventServ) 🧨👂 [DESTROY] for "delayedSyncDone".');
                this.evServ.destroy('delayedSyncDone');
              });
              this.logger.info('[App|initApp|eventServ) 🧨👂 [DESTROY] for "doDelayedAppInits".');
              this.evServ.destroy('doDelayedAppInits');
            }
          });
        };
      });
      window.addEventListener('readyLR',async()=>{
        this.logger.info('[App|initApp] (\u26A1LiveReload\u267B) >>>>> QUICK CLOSE SQLite DB <<<<<');
        const closeDBRes:boolean=await this.sqlServ.lrQC();
        if(closeDBRes){localStorage.setItem('myDoReload','true')}
      });
      this.logger.info('[App|initApp|eventServ) ➕👂 [LISTEN] for "EnteringApp"...');
      const menuEASub=this.evServ.subscribe('EnteringApp',()=>{this.logger.info('[App|initApp|eventServ] 📥👂 (IN) [EVENT] for "EnteringApp".');
        this.menuBioInfo();
        this.logger.info('[App|initApp] (EventServ) ➖👂 [LISTEN] for "EntertingApp".');
        menuEASub.unsubscribe();
      });
    });
  }
//////////////////////////////////////////////////////////////////////////////////////
  async FCTFns(mode:string) {
    const doSuccess=()=>{this.sserverRefresh='success';setTimeout(()=>{this.sserverRefresh=null},1500)};
    const doFail=()=>{this.sserverRefresh='fail';setTimeout(()=>{this.sserverRefresh=null},1500)};
    if(mode==='init'){
      this.logger.info('[App|newFCTListener|eventServ] ➕👂 [LISTEN] for "fbUserAccount"...');
      this.evServ.subscribe('fbUserAccount',()=>{this.logger.info('[App|newFCTListener|eventServ] 📥👂 (IN) [EVENT] for "fbUserAccount".');this.checkSServerInfo()});
    }else{
      this.sserverRefresh='inprog';
      this.fb_login_method='...';this.fct_token='...';this.fe_token='...';this.fct_expires='...';
      const loutRes:boolean=await this.fireServ.logoutUser();
      if(loutRes){
        const lCTRes:boolean=await this.fireServ.loginCustomToken();
        if(lCTRes){doSuccess()}
        else{
          const upRes:any=await this.sqlServ.getADBItem('up');
          if(upRes.result){
            const upLogRes:boolean=await this.fireServ.loginUserEmail(upRes.data);
            if(upLogRes){doSuccess()}else{doFail()}
          }else{doFail()}
        }
      }else{doSuccess()}
    };
    this.checkSServerInfo();
  }
//////////////////////////////////////////////////////////////////////////////////////
  postInitTokenListen() { this.logger.info('[App|postInitTokenListen] ()...');
    this.logger.info('[App|postInitTokenListen|eventServ] ➕👂 [LISTEN] for "setAuthGVarsDone"...');
    this.evServ.subscribe('setAuthGVarsDone',async newDPAuthRes=>{this.logger.info('[App|postInitTokenListen|eventServ] 📥👂 (IN) [EVENT] for "setAuthGVarsDone".');
      if(newDPAuthRes.result){this.initSyncAuth(newDPAuthRes.data)}
      else{this.logger.info('[App|postInitTokenListen->setAuthGVars] (❌ERROR) - !setAuthGVars.result')};
    });  
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initSyncAuth(dpAuth:any) {
    async function myDiff(object:any,base:any){function changes(object:any,base:any){return _.transform(object,function(result:any,value:any,key:any){if(!_.isEqual(value,base[key])){result[key]=(_.isObject(value)&&_.isObject(base[key]))?changes(value,base[key]):value}})};return changes(object,base)};
    let sqlAuth:any;
    if((await this.detailServ.getADBSetupDone())){
      if(!this.detailServ.getADBIsOpen()){await this.sqlServ.openAuth()};
      sqlAuth=await this.sqlServ.getADBItem('auth')
    }else{sqlAuth={result:false};this.logger.info('[App|initUpdateAuthDB] - initSyncAuth() - sqlAuth ERROR = dS.getADBSetupDone() = false')};
    let fireAuth:any;
    if((await this.detailServ.getHasNetConn())){
      if(this.fireServ.fbLoggedIn){
        fireAuth=await this.fireServ.getFireUserAuth();
      }else{fireAuth={result:false};this.logger.info('[App|initUpdateAuthDB] - initSyncAuth() - FireAuth ERROR = fireServ.fbLoggedIn = false')}
    }else{fireAuth={result:false};this.logger.info('[App|initUpdateAuthDB] - initSyncAuth() - FireAuth ERROR = dS.getHasNetConn = false')};
    // -----------------------------------
    if(sqlAuth.result){
      if(!_.isEqual(sqlAuth.data,dpAuth)){
        this.logger.info('[App|initUpdateAuthDB] (🟡UPDATING): DB!==DP Auth Values - Updating ADBItem for Fields:');const diffObj:any=await myDiff(dpAuth,sqlAuth.data);this.logger.info(diffObj);
        const updateDPAuthDB:boolean=await this.sqlServ.setADBItem(null,dpAuth);
        this.sqlServ.closeAuth();
        updateDPAuthDB?this.logger.info('[App|initUpdateAuthDB] (✅SUCCESS) - Auth Database Updated'):this.logger.info('[App|initUpdateAuthDB] (❌ERROR) - Auth Database NOT Updated');
      }else{this.logger.info('[App|initUpdateAuthDB] (🟢SKIP): DB===DP Auth Values - No Update Required');this.sqlServ.closeAuth()}
    }else{this.logger.info('[App|initSyncAuth] (❌ERROR) - Failed to Retrieve AuthObj from SQL');this.sqlServ.closeAuth()};
    // -----------------------------------
    if(fireAuth.result){
      if(!_.isEqual(fireAuth.data,dpAuth)){
        this.logger.info('[App|initUpdateAuthDB] (🟡UPDATING): FIRE!==DP Auth Values - Updating fireUserDoc for Fields: ');const diffObj:any=await myDiff(dpAuth,fireAuth.data);this.logger.info(diffObj);
        const updateDPAuthFire:boolean=await this.fireServ.setFireUserDoc(this.deputy.userEmail,dpAuth);
        if(updateDPAuthFire){this.logger.info('[App|initUpdateAuthDB] (✅SUCCESS) - Firebase AuthDoc Updated')}
        else{this.logger.info('[App|initUpdateAuthDB] (❌ERROR) - Firebase AuthDoc NOT Updated')}
      }else{this.logger.info('[App|initUpdateAuthDB] (🟢SKIP): FIRE===DP Auth Values - No Update Required')}
    }else{this.logger.info('[App|initUpdateAuthDB] (❌ERROR) - Firebase AuthDoc NOT FOUND/UPDATED')}
  }
//////////////////////////////////////////////////////////////////////////////////////
  initAppPluginListeners() { this.logger.info('[App|initAppPluginListeners] ()...');
    if(this.appInitDone===false){this.appInitDone=true;
      this.evServ.subscribe('myAppStateActive',tf=>{this.logger.info('[App|AppPlugin|AppState] \u269C (isActive?): '+tf.toString().toUpperCase())});
      this.evServ.subscribe('myAppRestoredResult',data=>{
        if(data){this.logger.info('[App|AppPlugin|AppRestored] - Data:');
          this.logger.info('[App|AppPlugin|RestoredResult] \u269C (Result): ');
          this.logger.info('\u269C pluginId:   '+data.pluginId);
          this.logger.info('\u269C methodName: '+data.methodName);
          this.logger.info('\u269C data:       '+data.data);
        }else{this.logger.info('[App|AppPlugin|AppRestored] - No Data Returned')}
      });
      this.evServ.subscribe('myAppCanGoBack',tf=>{this.logger.info('[App|AppPlugin|AppCanGoBack] \u269C (appCanGoBack?): '+tf.toString().toUpperCase())});
      this.appServ.doAppInit();
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  initNavMon() { this.logger.info('[App|initNavMon] ()...');
    this.startNavPipe=this.router.events.pipe(filter(evt=>evt instanceof NavigationStart)) as Observable<NavigationStart>;
    this.endNavPipe=this.router.events.pipe(filter(evt=>evt instanceof NavigationEnd)) as Observable<NavigationEnd>;
    const eV=this.evServ;
    this.startNavPipe.subscribe(()=>{
      const oldURLStr=this.router.url;
      const oldURLArr=oldURLStr.split('/');
      const oldURLArrNo=oldURLArr.length;
      const oldPageIndex=oldURLArrNo-1;
      const oldPage=oldURLArr[oldPageIndex];
      eV.subscribe('gotNewPage',newPage=>{
        if(oldPage!==newPage){
          $('.sheriff-mainmenu-topitem').removeClass('isactivemenulink');
          $('#mainmenu-' + newPage).addClass('isactivemenulink')
        };
        eV.destroy('gotNewPage')
      });
    });
    this.endNavPipe.subscribe(()=>{
      const newURLStr=this.router.url;
      const newURLArr=newURLStr.split('/');
      const newURLArrNo=newURLArr.length;
      const newPageIndex=newURLArrNo-1;
      const newPage=newURLArr[newPageIndex];
      if(newPage){
        const cPageObj={url:newURLStr,lName:newPage,cName:`${newPage[0].toUpperCase()}${newPage.slice(1)}`};
        this.evServ.currentPageName(cPageObj);
        eV.publish('gotNewPage',newPage)
      }
    });
  } 
///////////////////////////////////////////////////////////////////////
  async checkSServerInfo(){ this.logger.info('[App|checkSServerInfo] ()...');
    const gPKeys:string[]=['fct_token','fe_token','fct_expires'];
    const nEAt=(exAtUTS:number):string=>{const expD:Date=this.dT.Dut(exAtUTS);return this.dT.format(expD,'d MMM h:mma')};
    const loginMethodTxt:any={notsignedin:'Not Signed In',uplogin:'Username/Password (Login)',upregister:'Username/Password (Register)',fctokenfet:'Custom Token (FET)',fctokendpt:'Custom Token (DPT)'};
    const fbLIMethodKey:string=this.fireServ.loginMethodKey;
    this.fb_login_method=loginMethodTxt[fbLIMethodKey];
    if(fbLIMethodKey==='notsignedin'){for(let i=0;i<gPKeys.length;i++){this[gPKeys[i]]='-'}}
    else if(fbLIMethodKey==='uplogin'||fbLIMethodKey==='upregister'){for(let i=0;i<gPKeys.length;i++){this[gPKeys[i]]='N/A'}}
    else if(fbLIMethodKey==='fctokenfet'||fbLIMethodKey==='fctokendpt'){
      this.fct_token=this.deputy.SServer.FCT.custom_token.substring(0,16)+'...';
      this.fe_token=this.deputy.SServer.FCT.fe_token.substring(0,16)+'...';
      this.fct_expires=nEAt(Number(this.deputy.SServer.FCT.expires_at));
    };
  }
///////////////////////////////////////////////////////////////////////
  initIAPBubbleListen(){ this.logger.info('[App|toggleIAPBubble] ()...');
    this.evServ.subscribe('iapBubble',iapB=>{
      if(this.doShowIAPBubble){this.doShowIAPBubble=false};
      if(typeof iapB==='object'){this.iapBubbleData=iapB};
      if(this.iapBubbleData!==null){
        if(!this.doShowIAPBubble){this.doShowIAPBubble=true};
        setTimeout(()=>{this.doShowIAPBubble=false},5000);
      }else{this.evServ.showToast('warning','No Prior Notification')}
    });
  }
///////////////////////////////////////////////////////////////////////
  mainMenu(action:string){ this.logger.info('[App|MenuCtrl] Main Menu '+action.toString().toUpperCase());
    if(action==='opened'){
      $('.sheriff-menu-button').addClass('sheriff-menu-open');
      const actLinkLabel=$('#mainmenu-'+this.currentPageKey+' > div.sheriff-mainmenu-topitem-label');
      const actLinkIco=$('#mainmenu-'+this.currentPageKey+' > div.sheriff-mainmenu-topitem-label > ion-icon');
      $('#mainmenu-'+this.currentPageKey).addClass('animate__animated animate__headShake animate__fast');
      $(actLinkLabel).addClass('isactivemenulink');
      $(actLinkIco).addClass('isactivemenulink');
    };
    if(action==='closed'){$('.sheriff-menu-button').removeClass('sheriff-menu-open')};
    if(action==='willopen'){
      this.checkSServerInfo();
      this.checkShouldSave();
      $('.sheriff-mainmenu-topitem').removeClass('animate__animated animate__headShake animate__fast');
      $('.sheriff-mainmenu-topitem-label').removeClass('isactivemenulink');
      $('.sheriff-mainmenu-linkico').removeClass('isactivemenulink');
      if(!this.router.url.includes('auth')){if(this.router.url.includes('tabs')){this.currentPageKey='tabs'}else{const localCurrentPageKey=this.router.url.replace('/','');this.currentPageKey=localCurrentPageKey}}
    }
  }
///////////////////////////////////////////////////////////////////////
  async checkShouldSave(){this.detailServ.shouldSave.value?this.shouldSaveShield=true:this.shouldSaveShield=false}
///////////////////////////////////////////////////////////////////////
  async promptShouldSave(navPath:string) { this.logger.info('[App|promptShouldSave] ('+navPath+')...');
    const {value}=await Dialog.confirm({title:'Save/Discard '+this.detailServ.shouldSave.data+' Details?',message:'𝗦𝗮𝘃𝗲 updated details to Deputy or 𝗗𝗶𝘀𝗰𝗮𝗿𝗱 changes?',okButtonTitle:'\uD83D\uDCBE Save',cancelButtonTitle:'\u274C Discard'});
    if(value){
      this.menu.close();
      this.logger.info('[App|promptShouldSave|eventServ] 📤👂 (OUT) [EVENT] for "menuShieldSave".');
      this.evServ.publish('menuShieldSave',navPath)
    }else{
      this.detailServ.setShouldSave(false,null);this.shouldSaveShield=false;
      if(navPath==='logout'){this.onLogout()}
      else if(navPath==='exit'){this.onExit('noprompt')}
      else{this.navController.navigateRoot(navPath)}
    }
  }
///////////////////////////////////////////////////////////////////////
  onLogout() {
    if(!this.shouldSaveShield){
      this.detailServ.setAuthLogout(true);
      $('#sheriff-auth-networkstatus-wrapper').removeClass('adjust-for-auth-toolbar-overlay');
      const myAniCSS=(jqEle,animName)=>new Promise((resolve)=>{const animClassStr='animate__animated animate__'+animName+' animate__faster';$(jqEle).addClass(animClassStr);$(jqEle).on('animationend',()=>{$(jqEle).removeClass(animClassStr);resolve('done')})});
      myAniCSS('#sheriff-custom-splash-wrapper','fadeIn').then( () => $('#sheriff-custom-splash-wrapper').show());
      $('#sheriff-custom-splash-logo-img').addClass('animate__animated animate__headShake animate__infinite');
      $('#sheriff-custom-splash-titletexttop-wrapper').removeClass('animate__animated animate__slideOutUp animate__faster');
      $('#sheriff-custom-splash-zer0ne-wrapper').removeClass('animate__animated animate__slideOutDown animate__faster');
      $('.bar-horizontal').removeClass('finished');
      $('#sheriff-custom-splash-logo-img').prop('src','../assets/img/lilheader-s.png');
      $('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideOutLeft').addClass('animate__slideInLeft');
      $('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideOutRight').addClass('animate__slideInRight');
      $('#sheriff-custom-splash-wrapper, .sheriff-col.custom-splash-col.middlelogocol').css('background','#121212');
      this.menu.close().then(()=>{this.navController.navigateRoot('/auth')});
    }else{this.promptShouldSave('logout')}
  }
///////////////////////////////////////////////////////////////////////
  onExit(mode:string|null) { this.logger.info('[App|onExit] ('+mode+')...');
    if(!this.shouldSaveShield){const exitPromptOpts={title:'Exiting Sheriff',message:'Are you sure?',okButtonTitle:'OK',cancelButtonTitle:'Cancel'};
      if(mode==='noprompt'){App.exitApp()}
      else{Dialog.confirm(exitPromptOpts).then(async wasConfirmed=>{if(wasConfirmed.value){App.exitApp()}else{this.menu.close()}})}
    }else{this.promptShouldSave('exit')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async menuBioInfo() { this.logger.info('[App|menuBioInfo] ()...');
    const mBIFields:any[]=['access_token','refresh_token','expires_at','meName','meEmail','mePhone','workCode','workAva','meAva'];
    for(let i=0;i<mBIFields.length;i++){
      if(i<2){this[mBIFields[i]]=this.deputy.Client.auth[mBIFields[i]]}
      else if(i===2){const eAtD:Date=this.dT.Dut(this.deputy.Client.auth[mBIFields[i]]);this.expires_time=this.dT.format(eAtD,'d MMM h:mma')}
      else{this[mBIFields[i]]=this.detailServ[mBIFields[i]]}
    };
    this.menuBioInfoDone=true;
  }
////////////////////////////////////////////////////////////////////////////////////////
  async menuDeputyRefresh() {
    this.logger.info('[TabsShifts|localDoRefresh] ()...');
    this.deputyRefresh='inprog';this.access_token='...';this.refresh_token='...';this.expires_time='...';
    this.evServ.subscribe('setAuthGVarsDone',refreshRes=>{
      if(refreshRes.result){
        this.deputyRefresh='success';
        setTimeout(async()=>{
          this.access_token=this.deputy.Client.auth.access_token;
          this.refresh_token=this.deputy.Client.auth.refresh_token;
          const eAtD:Date=this.dT.Dut(this.deputy.Client.auth.expires_at);this.expires_time=this.dT.format(eAtD,'d MMM h:mma');
          this.deputyRefresh=null;
          this.evServ.destroy('setAuthGVarsDone')
        },1500)
      }else{this.deputyRefresh='fail';setTimeout(()=>{this.deputyRefresh=null;this.evServ.destroy('setAuthGVarsDone')},1500)}
    });
    this.deputy.setAuthGVars(false);
  }
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
}

