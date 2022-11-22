import { Network } from '@capacitor/network';
import { Keyboard } from '@capacitor/keyboard';
import { StatusBar } from '@capacitor/status-bar';
import { App } from '@capacitor/app';
import { Dialog } from '@capacitor/dialog';
import { modalEnterAnimation, modalLeaveAnimation } from './../animations/index';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Platform, NavController, ModalController, IonInput } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { EventsService } from '../services/events.service';
import { DeputyService } from './../services/deputy.service';
import { StorageService } from './../services/storage.service';
import { FirebaseService } from '../services/firebase.service';
import { DetailService } from '../services/detail.service';
import { SQLiteService } from './../services/sqlite.service';
import { DateTimeService } from '../services/datetime.service';
import { FirstRunPage } from './../modals/firstrun/firstrun.page';
import { NGXLogger } from 'ngx-logger';
import { AppUserSettings, defaultAUSettings } from '../services/appTypes';
import * as $ from 'jquery';
import * as _ from 'lodash';
declare var cordova: any;
//////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-auth', templateUrl: './auth.page.html', styleUrls: ['./auth.page.scss'] })
//////////////////////////////////////////////////////////////////////////////////////
export class AuthPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  @ViewChild('loginInputUser') userInput: IonInput;
  @ViewChild('loginInputPass') passInput: IonInput;
//////////////////////////////////////////////////////////////////////////////////////
  stdModalOpts:any={
    animated:true,
    backdropDismiss:false,
    cssClass:'firstrun-modal-class',
    enterAnimation:modalEnterAnimation,
    keyboardClose:true,
    leaveAnimation:modalLeaveAnimation,
    showBackdrop:true,
    component:FirstRunPage
  };
  frSetup:boolean;
  kbHeightCalcRunOnce:number=0;myKbICEle:HTMLElement;myKbPTEle:HTMLElement;myKbHelpTxtEle:HTMLElement;myKbBtmLine:number;myKbOffsetNum:number;myKbTopNum:number;
  offsetPx:string;oldloginBoxTxt:string='';loginBoxTxtVal:string='';localScreenResObj:any;
  connectStage:string='connect';
  showFirstLoad:boolean=false;
  showIonContent:boolean=true;
  hasConnection:boolean;
  isConnSub:any;
  signingIn:boolean;
  gotStoreUUK:boolean=false;
  storeUUK:string=null; 
  gotStoreUEml:boolean=false;
  storeUEml:string=null;
  gotStoreUFET:boolean=false;
  storeUFET:string=null;
  gotUPCreds:boolean=false;
  upCredsObj:any=null;
  gotDPAuth:boolean=false;
  dpAuthIsValid:boolean=false;
  dpAuthObj:any=null;
  fbLoggedIn:boolean=false;
  FRDone:boolean=false;
  UDBDone:boolean=false;
  ADBDone:boolean=false;
  gotSavedDLData:boolean=false;
  dpAuthInProgress:boolean=false;
  dpAuthPBarPerc:number=0;
  selectedPath:any;
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private navController: NavController,
    private evServ: EventsService,
    private deputy: DeputyService,
    private storeServ: StorageService,
    private detailServ: DetailService,
    private sqlServ: SQLiteService,
    private dT: DateTimeService,
    private router: Router,
    private platform: Platform,
    private logger: NGXLogger,
    private zone: NgZone,
    private modalCtrl: ModalController,
    private fireServ:FirebaseService
  ){
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event&&event.url){this.selectedPath=event.url}
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() { this.logger.info('[Auth|ngOnInit] Fired!');
    this.platform.ready().then(async()=>{
      window.open=cordova.InAppBrowser.open;
      await this.sqlServ.doInitSQLServ();
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewWillEnter() { this.logger.info('[Auth|ionViewWillEnter] ()...');
    this.kbHeightCalcRunOnce=0;StatusBar.setBackgroundColor({color:'#121212'});StatusBar.setOverlaysWebView({overlay:false});
    this.startChecks() 
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave(){ this.logger.info('[Auth|ionViewWillLeave] ()...');
    Keyboard.removeAllListeners();
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[Auth|ionViewDidEnter] ()...');
    const waitForEle=setInterval(()=>{if($('#sheriff-authpage-loadprogtext').length){clearInterval(waitForEle);setTimeout(()=>{const sTitlePx=Math.round($('#sheriff-authpage-loadprogtext').outerWidth());$('ion-grid.sheriff-auth-sunicon-grid').css('min-width',sTitlePx+'px').css('max-width',sTitlePx+'px').css('width',sTitlePx+'px')},1000)}},200);
    Keyboard.addListener('keyboardWillShow',info=>{this.kbHeightCalcRunOnce++;
      if(this.kbHeightCalcRunOnce<2){this.myKbICEle=document.getElementById('auth-page-ion-content');this.myKbPTEle=document.getElementById('sheriff-authpage-title-txt');this.myKbHelpTxtEle=document.getElementById('sheriff-auth-loginbox-helpertext-wrapper');this.myKbBtmLine=Math.round(this.myKbHelpTxtEle.getBoundingClientRect().bottom);this.myKbOffsetNum=Math.round(info.keyboardHeight-(this.localScreenResObj.height-this.myKbBtmLine));this.myKbTopNum=Math.abs(Math.round(info.keyboardHeight-(this.localScreenResObj.height-this.myKbBtmLine)))-32}
    });
    Keyboard.addListener('keyboardDidShow',()=>{this.loginBoxKBAdjust('open')});
    Keyboard.addListener('keyboardDidHide',()=>{this.loginBoxKBAdjust('close')})
  }
//////////////////////////////////////////////////////////////////////////////////////
  hideSplash() { this.logger.info('[Auth|hideSplash] ()...');
    StatusBar.setOverlaysWebView({overlay:true});
    StatusBar.setBackgroundColor({color:'#00000000'});
    $('#sheriff-auth-networkstatus-wrapper').addClass('adjust-for-auth-toolbar-overlay');
    const myAniCSS=(jqEle,animName)=>new Promise((resolve)=>{const animClassStr='animate__animated animate__'+animName+' animate__fast';$(jqEle).addClass(animClassStr).on('animationend',()=>{$(jqEle).removeClass(animClassStr);resolve('done')})});
    $('#sheriff-custom-splash-logo-img').removeClass('animate__animated animate__headShake animate__infinite');
    $('#sheriff-custom-splash-titletexttop-wrapper').addClass('animate__animated animate__slideOutUp animate__faster');
    $('#sheriff-custom-splash-zer0ne-wrapper').addClass('animate__animated animate__slideOutDown animate__faster');
    $('.bar-horizontal').addClass('finished');
    $('#sheriff-custom-splash-logo-img').prop('src','../assets/img/slogo-g.png');
    $('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideInLeft').addClass('animate__slideOutLeft');
    $('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideInRight').addClass('animate__slideOutRight');
    $('#sheriff-custom-splash-wrapper,.sheriff-col.custom-splash-col.middlelogocol').css('background','transparent');
    myAniCSS('#sheriff-custom-splash-wrapper','fadeOut').then(()=>$('#sheriff-custom-splash-wrapper').hide());
  }
//////////////////////////////////////////////////////////////////////////////////////
  loginBoxKBAdjust(kbState) {
    this.logger.info('[Auth|loginBoxKBAdjust] ('+kbState+')');
    let openCDown; let closeCDown; const offsetPx = this.myKbOffsetNum+'px'; const topPx = this.myKbTopNum+'px'; const icEle = this.myKbICEle; const ptEle = this.myKbPTEle;
    const getOffVal=()=>{return icEle.style.getPropertyValue('--offset-top')};
    const setOffVal=()=>{icEle.style.setProperty('--offset-top',offsetPx)}
    const unsetOffVal=()=>{icEle.style.setProperty('--offset-top','unset')}
    const getTopVal=()=>{const cS=window.getComputedStyle(ptEle);return cS.top};
    const setTopVal=()=>{ptEle.style.setProperty('top',topPx)};
    const unsetTopVal=()=>{ptEle.style.setProperty('top','unset')};
    const addOffset=()=>{if(getOffVal()==='0px'||getOffVal()==='unset'){setOffVal()}};
    const remOffset=()=>{if(getOffVal()===offsetPx){unsetOffVal()}};
    const addTop=()=>{if(getTopVal()==='0px'||getTopVal()==='unset'){setTopVal()}};
    const remTop=()=>{if(getTopVal()===topPx){unsetTopVal()}};
    if(kbState==='open'){(()=>{openCDown=setTimeout(()=>{addOffset();addTop()},250)})();clearTimeout(closeCDown)}
    else{(()=>{closeCDown=setTimeout(()=>{remOffset();remTop()},250)})();clearTimeout(openCDown)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async checkNetworkScreen() { this.logger.info('[Auth|checkNetworkScreen] ()...');
    this.hasConnection=await this.detailServ.getHasNetConn();
    this.isConnSub=this.evServ.subscribe('globalHasNetConn',(newIsConn:boolean)=>{this.hasConnection=newIsConn});
    const sRW:any=await this.platform.width();const sRH:any=this.platform.height();
    const screenResObj={width:sRW,height:sRH};
    this.localScreenResObj=screenResObj;
    this.storeServ.setObject('screenRes',screenResObj);
    this.evServ.publish('startChecklist','networkCheckDone'); // CHECK 1
    this.checkStoreUUKEmail(); // Next - Do Check #2 (StoreUUKEmail)
  }
//////////////////////////////////////////////////////////////////////////////////////
  async checkStoreUUKEmail() { this.logger.info('[Auth|checkStoreUUKEmail] ()...');
    const sSUUK:string=await this.storeServ.getItem('currentUUK');
    const sSUEml:string=await this.storeServ.getItem('userEmail');
    const sSUFET:string=await this.storeServ.getItem('currentFEToken');
    if(sSUUK){
      this.gotStoreUUK=true;this.storeUUK=sSUUK;this.deputy.uUK=sSUUK;
      this.logger.info('[Auth|checkStoreUUKEmail] (SUCCESS) this.gotStoreUUK='+String(this.gotStoreUUK)+' | this.storeUUK='+this.storeUUK)
    }else{
      this.gotStoreUUK=false;this.storeUUK=null;this.deputy.uUK=null;
      this.logger.info('[Auth|checkStoreUUKEmail] (FAIL) this.gotStoreUUK='+String(this.gotStoreUUK))
    };
    if(sSUEml){
      this.gotStoreUEml=true;this.storeUEml=sSUEml;this.deputy.userEmail=sSUEml;
      this.logger.info('[Auth|checkStoreUUKEmail] (SUCCESS) this.gotStoreUEml='+String(this.gotStoreUEml)+' | this.storeUEml='+this.storeUEml);
      if(!this.gotStoreUUK){
        const tempUUK:string=this.storeUEml.replace('@','').replace('.','');
        this.storeUUK=tempUUK;this.gotStoreUUK=true;this.deputy.uUK=tempUUK;
        this.storeServ.setItem(this.deputy.uUK+'currentUUK',tempUUK);
      };
    }else{
      this.gotStoreUEml=false;this.storeUEml=null;this.deputy.userEmail=null;
      this.logger.info('[Auth|checkStoreUUKEmail] (FAIL) this.gotStoreUEml='+String(this.gotStoreUEml))
    };
    if(sSUFET){
      this.gotStoreUFET=true;this.storeUFET=sSUFET;this.deputy.SServer.FCT.fe_token=sSUFET;
      this.logger.info('[Auth|checkStoreFEToken] (SUCCESS) this.gotStoreUFET='+String(this.gotStoreUFET)+' | this.storeUEml='+this.storeUFET);
    }else{
      this.gotStoreUFET=false;this.storeUFET=null;this.deputy.SServer.FCT.fe_token=null;
      this.logger.info('[Auth|checkStoreFEToken] (FAIL) this.gotStoreUFET='+String(this.gotStoreUFET))
    };
    this.evServ.publish('startChecklist','storeUUKEmailCheckDone');  // CHECK 2
    this.checkDBSetup(); // Next - Do Check #3 (DBSetup)
  }
  //////////////////////////////////////////////////////////////////////////////////////
  async checkDBSetup() { this.logger.info('[Auth|checkDBSetup] ()...');
    if(this.deputy.uUK!==null){
      this.FRDone=await this.detailServ.getFRSetupDone();let CMfr:string;this.FRDone?CMfr='✔️':CMfr='❌';
      this.UDBDone=await this.detailServ.getUDBSetupDone();let CMud:string;this.UDBDone?CMud='✔️':CMud='❌';
      this.ADBDone=await this.detailServ.getADBSetupDone();let CMad:string;this.ADBDone?CMad='✔️':CMad='❌';
      this.logger.info('[Auth|checkDBSetup] FirstRunDone:'+CMfr+', UDBSetupDone?:'+CMud+', ADBSetupDone?:'+CMad);
      const checkUDB=()=>{
        if(this.FRDone&&this.UDBDone){
          this.logger.info('[Auth|checkDBSetup] Running createUserDBConn('+this.deputy.uUK+'db,true) @ SQLiteService.');
          this.evServ.subscribe('uDBReady',()=>{
            this.evServ.destroy('uDBReady');
            this.evServ.publish('startChecklist','DBSetupCheckDone');  // CHECK 3
            this.checkDPAuth();
          });
          this.sqlServ.createUserDBConn(this.deputy.uUK+'db',true);
        }else{ 
          this.evServ.publish('startChecklist','DBSetupCheckDone');  // CHECK 3
          this.checkDPAuth();
        }
      };
      if(this.ADBDone){
        this.logger.info('[Auth|checkDBSetup] Running createAuthDBConn('+this.deputy.uUK+'auth,true) @SQLiteService.');
        this.evServ.subscribe('aDBReady',async()=>{
          this.evServ.destroy('aDBReady');
          const doCTLRes:boolean=await this.fireServ.loginCustomToken();
          if(!doCTLRes){
            const upRes:any=await this.sqlServ.getADBItem('up');
            if(upRes.result){await this.fireServ.loginUserEmail(upRes.data)};
            checkUDB();
          }else{checkUDB()}
        });
        this.sqlServ.createAuthDBConn(this.deputy.uUK+'auth',true,null);
      }else{checkUDB()}
    }else{
      this.FRDone=false;this.UDBDone=false;this.ADBDone=false;
      this.logger.info('[Auth|checkDBSetup] SKIPPED: deputy.uUK===null');
      this.evServ.publish('startChecklist','DBSetupCheckDone');  // CHECK 3
      this.checkDPAuth();
    }
    // Next - Do Check #4 (DPAuth) 
  }
//////////////////////////////////////////////////////////////////////////////////////
  async checkDPAuth() { this.logger.info('[Auth|checkDPAuth] ()...');
    const doFail=(got:boolean,valid:boolean)=>{
      this.gotDPAuth=got;this.dpAuthIsValid=valid;this.dpAuthObj=null;
      this.evServ.publish('startChecklist','dpAuthTokensCheckDone'); // CHECK 4
    };
    const doSuccess=(aO:any)=>{
      this.gotDPAuth=true;this.dpAuthIsValid=true;this.dpAuthObj=aO;
      this.evServ.publish('startChecklist','dpAuthTokensCheckDone'); // CHECK 4
    };
    const isExp=(o:any):boolean=>{if(this.dT.uTokExpd(o)){return true}else{return false}};
    const doSetAuth=(o:any)=>{
      this.evServ.subscribe('setAuthGVarsDone',async authResult=>{
        if(authResult.result){this.logger.info('[Auth|checkDPAuth] - [GOOD] - Token Tested VALID');
          if(authResult.refresh){this.logger.info('[Auth|checkDPAuth] - [===REFRESHED] - Token was Refreshed');doSuccess(authResult.data)}
          else{this.logger.info('[Auth|checkDPAuth] - [!==REFRESHED] - Token VALID & NOT Refreshed');doSuccess(o)}
        }else{this.logger.info('[Auth|checkDPAuth] - [BAD] - Invalid/Unrefreshable Token - Deleting...');doFail(true,false)}
      });
      this.deputy.setAuthGVars(o);
    };
    // -------------------------------------------------------------------------------
    const fireO=async():Promise<any>=>{
      if(this.hasConnection){
        if(this.fireServ.tempUPO||this.gotStoreUFET||this.deputy.uUK){
          const{result,data}=await this.fireServ.getFireUserAuth();
          if(result){const fireAuthObj:any=data;return Promise.resolve({r:true,d:fireAuthObj})}
          else{return Promise.resolve({r:false})}
        }else{return Promise.resolve({r:false})}
      }else{return Promise.resolve({r:false})}
    };
    const storeO=async():Promise<any>=>{if(this.deputy.uUK!==null){const sO:any=await this.storeServ.getObject(this.deputy.uUK+'DPAuth');if(sO){return Promise.resolve({r:true,d:sO})}else{return Promise.resolve({r:false})}}else{return Promise.resolve({r:false})}};
    const dbO=async():Promise<any>=>{if(this.detailServ.getADBIsOpen()&&this.deputy.uUK!==null){const{result,data}=await this.sqlServ.getADBItem('auth');if(result){return Promise.resolve({r:true,d:data})}else{return Promise.resolve({r:false})}}else{return Promise.resolve({r:false})}};
    // -------------------------------------------------------------------------------
    let availAObs:any[]=[];
    const getF:any=await fireO();if(getF.r){availAObs.push(getF.d)};
    const getS:any=await storeO();if(getS.r){availAObs.push(getS.d)};
    const getD:any=await dbO();if(getD.r){availAObs.push(getD.d)};
    const latestAObj:any=_.maxBy(availAObs,'expires_at');
    if(latestAObj){
      if(!isExp(latestAObj)){doSetAuth(latestAObj)}
      else{doSetAuth(latestAObj)}
    }else{doFail(false,false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  startChecks() { this.logger.info('[Auth|startChecks] ()...');
    const totalStartChecks:number=4;let startCheckCount:number=0;
    this.evServ.subscribe('startChecklist',checkName=>{startCheckCount++;
      this.logger.info('[Auth|startChecks|Events] - Check '+startCheckCount+'/'+totalStartChecks+': '+checkName+' - \u2705');
      if(startCheckCount===totalStartChecks){
        this.logger.info('[Auth|startChecks] - [FINISHED] ('+startCheckCount+'/'+totalStartChecks+') - \uD83C\uDFC1');
        this.evServ.destroy('startChecklist');
        this.startApp();
      }
    });
    this.checkNetworkScreen(); // Start - Do Check #1
  }
//////////////////////////////////////////////////////////////////////////////////////
  async startApp() { this.logger.info('[Auth|StartApp] ()...');
    if(this.detailServ.getAuthLogout()){this.logoutFlow()}
    else{ 
      if(this.hasConnection){this.logger.info('[Auth|startApp] (hasConnection?) - TRUE');
        if(this.gotDPAuth){this.logger.info('[Auth|startApp] (gotDPAuth?) - TRUE');
          if(this.FRDone&&this.UDBDone){this.logger.info('[Auth|startApp] (FRSetupComplete?) - TRUE');
            let oLDCCount:number=0;  
            this.evServ.subscribe('onLoginDetailChecks',()=>{oLDCCount++;if(oLDCCount===2){this.evServ.destroy('onLoginDetailChecks');this.onLogin()}});  
            const dsSett:AppUserSettings|null=await this.detailServ.getSettings();
            if(dsSett!==null){this.evServ.publish('onLoginDetailChecks','preSETTINGS')}
            else{const dbSett:any=await this.sqlServ.getSettings();
              if(dbSett.result){
                const dbO:AppUserSettings=dbSett.data;
                await this.detailServ.setSettings(dbO);
                this.evServ.publish('onLoginDetailChecks','preSETTINGS');
              }else{const fireSett:any=await this.fireServ.getSettingsValue(null);
                if(fireSett.result){
                  const fireO:AppUserSettings=fireSett.data;
                  await this.sqlServ.setSettings(fireO);
                  await this.detailServ.setSettings(fireO);
                  this.evServ.publish('onLoginDetailChecks','preSETTINGS');
                }else{
                  const defSett:AppUserSettings=defaultAUSettings();
                  await this.sqlServ.setSettings(defSett);
                  await this.fireServ.setSettingsValue(defSett);
                  await this.detailServ.setSettings(defSett);
                  this.evServ.publish('onLoginDetailChecks','preSETTINGS');
                }
              }
            };
            this.evServ.subscribe('setLocalDeetsDone',()=>{this.evServ.publish('onLoginDetailChecks','preLOCALDEETS')});
            this.sqlServ.setLocalDeets();
          }else{this.logger.info('[Auth|startApp] (FRSetupComplete?) - FALSE');
            const sMe:boolean=await this.detailServ.setMe(null);
            const sMy:boolean=await this.detailServ.setMy(null);
            if(!sMe||!sMy){
              this.evServ.subscribe('getMeMyDataDone',async meMyRes=>{
                if(meMyRes.result){await this.detailServ.setMe(meMyRes.data.me);await this.detailServ.setMy(meMyRes.data.my);this.openFirstRunModal()}
                else{this.signingIn=false;this.hideSplash()}
              });
              this.deputy.getMeMyData();
            }else{this.openFirstRunModal()};
          }
        }else{this.logger.info('[Auth|startApp] (gotDPAuth?) - FALSE');
          if(this.gotStoreUUK&&this.deputy.uUK!==null){this.logger.info('[Auth|startApp] (gotStoreUUK?) - TRUE');
            this.signingIn=false;this.hideSplash();
            const authDBRes:any=await this.sqlServ.getADBItem('up');
            if(authDBRes.result){
              this.deputy.userEmail=authDBRes.data.u;
              this.userInput.disabled=false;this.userInput.value=authDBRes.data.u;
              this.passInput.disabled=false;this.passInput.value=authDBRes.data.p;
              $('#sheriff-auth-loginbox-loginbtn').prop('disabled',false);
              $('.username-row').css('opacity','0.24');$('.password-row').css('opacity', '0.24');
              const cDownHTML='<div id="sheriff-auth-loginbox-countdown-text" class="loginbox-heading-class">Auto-Login...<span id="sheriff-auto-login-cdown-digits">5</span><ion-button id="sheriff-cancelautosignin-btn"><ion-icon id="sheriff-cancel-autologin-btn-ico" name="close"></ion-icon></ion-button></div>';
              $('#sheriff-auth-loginbox-signin-text').html(cDownHTML);
              let cDownTimer;const countDown=(i,callback)=>{cDownTimer=setInterval(()=>{$('#sheriff-auto-login-cdown-digits').text(i);i--||(clearInterval(cDownTimer),callback())},1000)}
              countDown(5,()=>{this.loginBoxSignIn()});
              $('#sheriff-cancelautosignin-btn').click(()=>{
                clearInterval(cDownTimer);
                $('#sheriff-auth-loginbox-signin-text').html('<div class="animate__animated animate__flipInX" id="sheriff-autologin-cancelled-text">cancelled</div>');
                $('.username-row').css('opacity','1');$('.password-row').css('opacity','1');
                setTimeout(()=>{$('#sheriff-auth-loginbox-signin-text').hide();$('#sheriff-auth-loginbox-signin-text').text('One-time Sign In');$('#sheriff-auth-loginbox-signin-text').fadeIn()},3000); 
              })
            }else{this.logger.info('[Auth|startApp] (gotDBAuth) - FAIL');this.signingIn=false;this.hideSplash()}            
          }else{this.logger.info('[Auth|startApp] (gotUPCreds?) - FALSE');this.signingIn=false;this.hideSplash()}
        }
      }else{this.logger.info('[Auth|startApp] (hasConnection?) - FALSE');
        if(this.gotStoreUUK){this.logger.info('[Auth|startApp] (gotStoreUUK?) - TRUE');
          if(this.gotDPAuth){this.logger.info('[Auth|startApp] (gotDPAuth?) - TRUE');
            if(this.FRDone&&this.UDBDone){this.gotSavedDLData=true;this.hideSplash()}
            else{$('#sheriff-auth-loginbox-exitapp').css('width','100%');this.hideSplash()}
          }else{this.logger.info('[Auth|startApp] (gotDPAuth?) - FALSE');
            if(this.ADBDone){this.logger.info('[Auth|startApp] (AuthDBSetupDone?) - TRUE');
              const authDBRes:any=await this.sqlServ.getADBItem('up');
              if(authDBRes.result&&authDBRes.data.p.length>0){
                if(this.FRDone&&this.UDBDone){this.gotSavedDLData=true;this.hideSplash()}
                else{$('#sheriff-auth-loginbox-exitapp').css('width','100%');this.hideSplash()}
              }
            }
          }
        }else{$('#sheriff-auth-loginbox-exitapp').css('width','100%');this.hideSplash()}
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  cancelAutoSignIn() { this.logger.info('[App|CancelAutoSignIn] ()...'); }
//////////////////////////////////////////////////////////////////////////////////////
  async logoutFlow() { this.logger.info('[Auth|logoutFlow] ()...');
    if(this.signingIn){this.signingIn=false};
    this.userInput.value='';this.passInput.value='';
    this.storeServ.removeItem(this.deputy.uUK+'DPAuth');
    this.storeServ.removeItem('currentUUK');
    this.storeServ.removeItem('userEmail');
    this.gotUPCreds=false;this.upCredsObj=null;this.gotDPAuth=false;this.dpAuthObj=null;
    this.evServ.subscribe('clearAuthGVarsDone',()=>{this.evServ.destroy('clearAuthGVarsDone');this.router.navigateByUrl('/',{replaceUrl:true});this.hideSplash()});
    this.deputy.clearAuthGVars() 
  }
//////////////////////////////////////////////////////////////////////////////////////
  owenDev(){
    $('#sheriff-auth-login-password').prop('disabled',false);$('#sheriff-auth-login-username').prop('disabled',false);
    this.userInput.value='owenlenegan@gmail.com';this.passInput.value='lotto12';
    this.loginBoxSignIn()
  }
//////////////////////////////////////////////////////////////////////////////////////
  loginBoxInput(input:string,event:string) { this.logger.info('[Auth|loginBoxFocus] The - '+input.toUpperCase()+' - Input got ['+event.toUpperCase()+']...');
    const depLabel='<img src="../../assets/img/sheriff-deputy-logoname-white-small.png" class="lildeputylogoname">';
    const emailIsV=(emailText)=>{const validEmailFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(emailText.match(validEmailFormat)){return true}else{return false}};
    const updateHelper=(type:string,newHTML:string)=>{
      let msgIco;const htEle=$('#sheriff-auth-loginbox-helper-text');const anBaseStr='animate__animated';const anInStr=anBaseStr+' animate__fadeIn';const anOutStr=anBaseStr+' animate__fadeOut';
      type==='help'?msgIco='<ion-icon class="sheriff-auth-loginbox-info-ico help" name="information-circle"></ion-icon>':msgIco='<ion-icon class="sheriff-auth-loginbox-info-ico warn" name="warning"></ion-icon>';
      new Promise((resolvedOut)=>{$(htEle).addClass(anOutStr).on('animationend',()=>{$(htEle).hide().html(msgIco+newHTML).removeClass(anOutStr);resolvedOut('done');new Promise((resolvedIn)=>{$(htEle).addClass(anInStr).show().removeClass(anInStr);resolvedIn('done')})})})
    };
    if(event==='focus'){
      $('#sheriff-authpage-title-img').css('visibility','hidden');
      $('#sheriff-authpage-title-txt').css('visibility','visible');
      const thisInputIco=$('.'+input+'-ico');
      $(thisInputIco).removeClass('sheriff-auth-input-invalidated sheriff-auth-input-validated');
      $('#'+input).addClass('infocus-sheriff-auth-login-input');
      if(input.includes('username')){updateHelper('help', 'The <span class="asc">email</span> linked to your '+depLabel+' account')}
      else{updateHelper('help', 'The <span class="asc">password</span> to your '+depLabel+'account')}
    };
    if(event==='change'){const afterEvTxt=$('#'+input).prop('value');if(afterEvTxt.length===0){this.oldloginBoxTxt='';$('#sheriff-authpage-title-txt').text('')}};
    if(event==='input'){$('#sheriff-authpage-title-txt').show();const shortIn=input.replace('.sheriff-auth-loginbox-input-ico.','');
      if(shortIn==='user'){
        const existingTxt=this.oldloginBoxTxt;const inputTxt=$('#sheriff-auth-login-username').prop('value');
        if(existingTxt.length-1===inputTxt.length){$('#sheriff-authpage-title-txt').text('');this.oldloginBoxTxt=inputTxt}
        else{$('#sheriff-authpage-title-txt').text(inputTxt.charAt(inputTxt.length-1)).fadeOut(500);this.oldloginBoxTxt=inputTxt}
      }else{
        const existingTxt=this.oldloginBoxTxt;
        const inputTxt=$('#sheriff-auth-login-password').prop('value');
        if(existingTxt.length-1===inputTxt.length){$('#sheriff-authpage-title-txt').text('');this.oldloginBoxTxt=inputTxt}
        else{$('#sheriff-authpage-title-txt').text('?').fadeOut(500);this.oldloginBoxTxt=inputTxt;
          if($('.sheriff-auth-loginbox-input-ico.user').hasClass('sheriff-auth-input-validated')&&inputTxt.length>3){
            setTimeout(()=>{$('.sheriff-auth-loginbox-input-ico.pass').addClass('sheriff-auth-input-validated');$('#sheriff-auth-loginbox-loginbtn').prop('disabled',false)},2000)
          }else{$('#sheriff-auth-loginbox-loginbtn').prop('disabled',true)}
        }
      };
      $(input).toggleClass('flashico');
      setTimeout(()=>{$(input).toggleClass('flashico')},200)
    };
    if(event==='blur'){
      $('#sheriff-authpage-title-img').css('visibility','visible');
      $('#sheriff-authpage-title-txt').css('visibility','hidden');
      $('#'+input).removeClass('infocus-sheriff-auth-login-input');
      if(input==='sheriff-auth-login-username'){const thisEmailIco=$('.'+input+'-ico');const thisEmailTxt=$('#'+input).prop('value');
        if(emailIsV(thisEmailTxt)){$('#sheriff-auth-login-password').prop('disabled', false);$(thisEmailIco).removeClass('sheriff-auth-input-invalidated').addClass('sheriff-auth-input-validated');
          if(!$('#sheriff-auth-login-password').hasClass('sheriff-auth-input-validated')){updateHelper('help', 'Enter the <span class="asc">password</span> you use to access your '+depLabel+'account');setTimeout(()=>{$('#sheriff-auth-login-password > input').focus()},500)}}else{const thisEmailIco=$('.'+input+'-ico');$(thisEmailIco).removeClass('sheriff-auth-input-validated').addClass('sheriff-auth-input-invalidated').addClass('animate__animated animate__headShake animate__delay-2s').on('animationend',()=>{$(thisEmailIco).removeClass('animate__animated animate__headShake animate__delay-2s')});updateHelper('warn', 'Not a valid <span class="asc">email address</span> - please correct it');$('#sheriff-auth-login-password').prop('disabled',true)
        }
      };
      if(input==='sheriff-auth-login-password'){const thisPassTxt=$('#'+input).prop('value');const thisPassIco=$('.'+input+'-ico');
        if(thisPassTxt.length>0){if(thisPassTxt.length>3){$(thisPassIco).removeClass('sheriff-auth-input-invalidated').addClass('sheriff-auth-input-validated')}else{$(thisPassIco).removeClass('sheriff-auth-input-validated').addClass('sheriff-auth-input-invalidated').addClass('animate__animated animate__headShake animate__delay-2s').on('animationend',()=>{$(thisPassIco).removeClass('animate__animated animate__headShake animate__delay-2s')});updateHelper('warn', 'Not a valid <span class="asc">password</span> - please correct it')}}
      };
      if($('.sheriff-auth-loginbox-input-ico.user').hasClass('sheriff-auth-input-validated')&&$('.sheriff-auth-loginbox-input-ico.pass').hasClass('sheriff-auth-input-validated')){$('#sheriff-auth-loginbox-loginbtn').prop('disabled',false)}else{$('#sheriff-auth-loginbox-loginbtn').prop('disabled',true)}
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async onLogin() { this.logger.info('[Auth|onLogin] ()...');
    this.isConnSub.unsubscribe();
    this.evServ.publish('EnteringApp',null);
    this.navController.navigateRoot('/tabs/tabshifts');
  }
//////////////////////////////////////////////////////////////////////////////////////
  reRunFR() { this.logger.info('[Auth|reRunFR] (LISTENING)...');
    this.evServ.subscribe('ReRunFR',choiceObj=>{this.evServ.destroy('ReRunFR');
      if(choiceObj.choice){if(choiceObj.logout){this.logoutFlow()}else{this.openFirstRunModal()}}
      else{App.exitApp()}
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidLeave() { this.logger.info('[Auth|ionViewDidLeave] ()...');
    setTimeout(()=>{
      $('ion-content#auth-page-ion-content').css('display','block')
      $('.sheriff-custom-firstload-outter-wrapper').css('display','none');
    },3000);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async openFirstRunModal() { this.logger.info('[Auth|openFirstRunModal] ()...');
    const dS=this.detailServ;
    const frModal=await this.modalCtrl.create(this.stdModalOpts);
    frModal.onDidDismiss().then(async finalFRData=>{
      const tryFRAgain=async(withLogout:boolean)=>{
        await dS.setFRSetupDone(false);this.reRunFR();
        let dialogPopOpts:any;withLogout?dialogPopOpts={title:'Setup Failed',message:'Setup failed. Please check you have internet access, permissions granted and login with the correct Deputy email/password. Try again?',okButtonTitle:'Try Again',cancelButtonTitle:'Cancel/Exit'}:dialogPopOpts={title:'Logout/Switch',message:'Sheriff will logout and return to the login screen where you can input fresh/correct Deputy email/password.\nSetup will automatically resume thereafter. Proceed or Cancel/Exit?',okButtonTitle:'Proceed',cancelButtonTitle:'Cancel/Exit'};
        Dialog.prompt(dialogPopOpts).then(tf=>{this.evServ.publish('ReRunFR',{logout:withLogout,choice:tf})})
      };
      if(finalFRData===null||finalFRData===undefined||finalFRData.data===null||finalFRData.data===undefined||!finalFRData.data.dlDone){tryFRAgain(false)}
      else if(finalFRData.data==='logout'){tryFRAgain(true)}
      else{
        const impDB:boolean=finalFRData.data.dbImported;
        await dS.setFRSetupDone(true);
        await dS.setUDBWasImported(impDB);
        await dS.setWpId(finalFRData.data.wpId);
        let baseSettObj:any,finalSettObj:AppUserSettings;
        if(impDB){
          const newFCM:any=await this.storeServ.getItem('fireMsgToken');
          if(newFCM){await this.sqlServ.setFCMToken(newFCM)};
          const newFET:any=await this.storeServ.getItem('currentFEToken');
          if(newFET){await this.sqlServ.setFEToken(newFET)};
          const dbSettRes:any=await this.sqlServ.getSettings();
          dbSettRes.result?baseSettObj=dbSettRes.data:baseSettObj=defaultAUSettings()
        }else{baseSettObj=defaultAUSettings()};
        baseSettObj['alerts']['options']=finalFRData.data.alertOpts;
        finalSettObj=baseSettObj;
        const consM=(r,dfs)=>{
          let rT;let dfT;r==='s'?rT='SUCCESS':rT='ERROR';dfs==='d'?dfT='SQLite':dfs==='f'?dfT='Firebase':dfT='Storage';
          const m='[Auth|openFirstRunModal] ('+rT+') Save Settings Obj to '+dfT;
          return this.logger.info(m)
        };
        if((await this.detailServ.setSettings(finalSettObj))){consM('s','s')}else{consM('e','s')};
        if((await this.sqlServ.setSettings(finalSettObj))){consM('s','d')}else{consM('e','d')};
        if((await this.fireServ.setFireSettingsDoc(this.deputy.userEmail,finalSettObj))){consM('s','f')}else{consM('e','f')};
        this.evServ.subscribe('setLocalDeetsDone',()=>{this.evServ.destroy('setLocalDeetsDone');this.evServ.publish('doDelayedAppInits',impDB);this.onLogin()});
        this.sqlServ.setLocalDeets();
      }
    });
    return await frModal.present()
  }
//////////////////////////////////////////////////////////////////////////////////////
  async setFirstAuthProcess(authObj:any,upObj:any) { this.logger.info('[Auth|setFirstAuthProcess] ()...');
    //---------------------------------------------------
    this.evServ.subscribe('dpAuthProgressStatus',async statusUpdate=>{
      if(statusUpdate==='completed'){if(this.FRDone&&this.UDBDone){this.onLogin()}else{this.openFirstRunModal()}}
      else if(statusUpdate==='failed'){setTimeout(()=>{this.signingIn=false},1000)}
    });
    //---------------------------------------------------
    this.evServ.subscribe('setAuthGVarsDone',async validTokenRes=>{
      this.dpAuthProgressStager('tokens');
      this.evServ.destroy('setAuthGVarsDone');
      this.logger.info('[Auth-<Deputy|setAuthGVars] setAuthGVars [OK] -> validTokenTest: '+validTokenRes.result);
      if(validTokenRes.result){
        this.logger.info('[Auth|browseDPAuth->Deputy] Set New uUKey @ DeputyService.');
        //-----------------------
        this.evServ.subscribe('getMeMyDataDone',async meMyRes=>{
          this.evServ.destroy('getMeMyDataDone');
          if(meMyRes.result){
            await this.detailServ.setMe(meMyRes.data.me);
            await this.detailServ.setMy(meMyRes.data.my);
            this.logger.info('[Auth|DAS|getMeMyData] - [OK] - getMeMyData Complete.');
            if(this.FRDone&&this.UDBDone){this.onLogin()}else{this.openFirstRunModal()};
          }else{
            this.deputy.uUK=null;this.storeUUK=null;this.gotStoreUUK=false;
            this.logger.info('[DeputyService|GetMeMyData] ERROR!');this.logger.info('\uD83C\uDFEE'.repeat(10))
          }
        });
        //-----------------------
        this.dpAuthProgressStager('completed');
        const getFETViaDPTRes:any=await this.deputy.getFCT(validTokenRes.data.access_token);
        if(getFETViaDPTRes.result){
          await this.fireServ.logoutUser();
          const doCTLoginRes:boolean=await this.fireServ.loginCustomToken();
          if(!doCTLoginRes){await this.fireServ.getFireUserAuth()};
          this.deputy.getMeMyData();
        }else{this.deputy.getMeMyData()}
      }else{
        this.logger.info('[Auth->Deputy|setAuthGVars] - [ERROR] - setAuthGVars Failed validTokenTest: '+validTokenRes+' -> Triggering ERROR.');
        this.dpAuthProgressStager('failed');
      };
    });
    // Set/Store uUK --------------------------
    this.storeUUK=upObj.user.replace('@','').replace('.','');this.gotStoreUUK=true;
    this.storeServ.setItem('currentUUK',this.storeUUK);
    this.deputy.uUK=this.storeUUK;
    // Set/Store DPAuthObj --------------------
    this.dpAuthObj=authObj;this.gotDPAuth=true;
    this.storeServ.setObject(this.storeUUK+'DPAuth',this.dpAuthObj);
    // Set/Store userEmail --------------------
    this.storeUEml=upObj.user;this.gotStoreUEml=true;
    this.storeServ.setItem('userEmail',this.storeUEml);
    this.deputy.userEmail=this.storeUEml;
    // Init ADB -------------------------------
    if(!this.ADBDone){
      this.logger.info('[Auth|setFirstAuthProcess] Running createAuthDBConn('+this.deputy.uUK+'auth,false) to CREATE Encrypted DB + `deputy_auth` TABLE...');
      this.evServ.subscribe('aDBReady',async tf=>{
        this.evServ.destroy('aDBReady');
        this.ADBDone=tf;
        if(tf){this.evServ.showToast('locked','Password Encrypted')}else{this.evServ.showToast('fire','Password Destroyed')};
        this.logger.info('[Auth->DeputyApiService|browseDPAuth->setAuthGVars] - Running setAuthGVars...');
        if(!this.fireServ.fbLoggedIn){await this.fireServ.loginUserEmail({u:upObj.user,p:upObj.pass})};
        this.deputy.setAuthGVars(authObj);
      });
      this.sqlServ.createAuthDBConn(this.deputy.uUK+'auth',false,{up:upObj,dp:authObj});
    }else{
      this.logger.info('[Auth->DeputyApiService|browseDPAuth->checkDBSetup] AuthDB Already Created - Skipping...');
      this.deputy.setAuthGVars(authObj);
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async sserverDPLogin(upCreds:any):Promise<any> { this.logger.info('[Auth] (Login|Admin) [FUNCTION] sserverDPLogin()...');
    const dpLoginRes:any=await this.deputy.doSServerDPLogin(upCreds);
    if(dpLoginRes.result){return Promise.resolve(dpLoginRes)}else{return Promise.resolve({result:false})} 
  }
//////////////////////////////////////////////////////////////////////////////////////
  async authIsV(authO:any):Promise<boolean>{const isV:boolean=await this.deputy.tokenIsValid(authO);if(isV){return Promise.resolve(true)}else{return Promise.resolve(false)}};
//////////////////////////////////////////////////////////////////////////////////////
  async loginBoxSignIn() { this.logger.info('[Auth|loginBoxLogin] ()...');
    this.dpAuthProgressStager('connect');
    this.signingIn=true;
    const upCredsObj:any={user:String(this.userInput.value).trim(),pass:String(this.passInput.value).trim()};
    this.deputy.uUK=upCredsObj.user.replace('@','').replace('.','');
    this.deputy.userEmail=upCredsObj.user;
    this.fireServ.tempUPO={u:upCredsObj.user,p:upCredsObj.pass};
    let existFireURes:any=await this.fireServ.getFireUserAuth();
    if(existFireURes.result&&(await this.authIsV(existFireURes.data))){this.dpAuthProgressStager('authenticate');this.setFirstAuthProcess(existFireURes.data,upCredsObj)}
    else{
      setTimeout(()=>{this.dpAuthProgressStager('authenticate')},8000);
      const ssLoginRes:any=await this.sserverDPLogin(upCredsObj);
      if(ssLoginRes.result&&(await this.authIsV(ssLoginRes.data))){this.setFirstAuthProcess(ssLoginRes.data,upCredsObj)}
      else{this.dpAuthProgressStager('failed');setTimeout(()=>{this.signingIn=false},1000)}
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  offlineExitEnterApp(choice:string) { this.logger.info('[Auth|offlineExitEnterApp] ('+choice+')...');
    if(choice==='exit'){const exitPromptOpts={title:'Exiting Sheriff',message:'You sure now?',okButtonTitle:'Yes sir!',cancelButtonTitle:'Cancel'};Dialog.confirm(exitPromptOpts).then(wasConfirmed=>{if(wasConfirmed.value){this.logger.info('[App|onExit] Exit Request [CONFIRMED] - Closing App...');App.exitApp()}else{this.logger.info('[App|onExit] Exit Request [DENIED] - Closing Menu Only...')}})}
    else{this.onLogin()}
  }
////////////////////////////////////////////////////////////////////////////////////////
  dpAuthProgressStager(stage:string) { this.logger.info('[APP|dpAuthProgressStager] ('+stage+')...');
    const iconArr=['connect','authenticate','tokens','completed'];
    this.evServ.publish('dpAuthProgressStatus',stage);
    this.zone.run(()=>{
      const localPHFn=(thisStage:string)=>{
        this.connectStage=thisStage;
        const myAniCSS=(jqEle:any,animName:string)=>new Promise((resolve)=>{let animClassStr:string;jqEle.includes('sunicon')?animClassStr='animate__animated animate__'+animName+' animate__duration-2s':animClassStr='animate__animated animate__'+animName+' animate__faster';$(jqEle).addClass(animClassStr).on('animationend',()=>{$(jqEle).removeClass(animClassStr);resolve('done')})});
        myAniCSS('#sheriff-auth-loginbox-signingin-shield-overlay-wrapper','flipInX');
        $('#sheriff-auth-loginbox-signingin-shield-overlay-wrapper').removeClass().addClass('signing-in-'+thisStage);
        const lilTitleIcoEle='.sheriff-sunicon-ico.'+thisStage;
        myAniCSS(lilTitleIcoEle,'zoomIn');
        $(lilTitleIcoEle).addClass('opacityup');
        const nextColIndex=iconArr.indexOf(thisStage)+1;
        const nextColStage=iconArr[nextColIndex];
        const nextColEle=$('.sheriff-auth-sunicon-col.'+nextColStage);
        $(nextColEle).addClass('nexticocol');
        const prevIcoIndex=iconArr.indexOf(thisStage)-1;
        const prevIcoStage=iconArr[prevIcoIndex];
        $('.sheriff-sunicon-ico.'+prevIcoStage).addClass('icondone');
        setTimeout(()=>{
          if(iconArr.indexOf(thisStage)===4){
            $('.sheriff-auth-sunicon-col').removeClass('nexticocol');
            $('.sheriff-sunicon-ico.completed').addClass('icondone');
            $('#sheriff-authpage-loadprogtext').addClass('standard-filled');
          }
        }, 1000);
      }
      $('.sheriff-auth-sunicon-col').removeClass('nexticocol');
      if(stage==='connect'){
        $('.sheriff-sunicon-ico').removeClass('opacityup icondone');
        $('#sheriff-authpage-loadprogtext').removeClass('standard-filled').text('sheriff').css('transition','all 1s ease-in-out').css('background-size','33% 100%');
        $('#sheriff-auth-dpauthinprogress-bar').css('--progress-background','#ff9800d6');
        this.dpAuthPBarPerc=.25;
        localPHFn(stage);
      };
      if(stage==='authenticate'){$('#sheriff-authpage-loadprogtext').css('background-size','66% 100%');this.dpAuthPBarPerc=.5;localPHFn(stage)};
      if(stage==='tokens'){$('#sheriff-authpage-loadprogtext').css('background-size','100% 100%');this.dpAuthPBarPerc=.75;localPHFn(stage)};
      if(stage==='completed'){$('#sheriff-authpage-loadprogtext').css('background-size','100% 100%');this.dpAuthPBarPerc=1;$('#sheriff-auth-dpauthinprogress-bar').css('--progress-background', '#4caf50d6');localPHFn(stage)};
      if(stage==='failed'){this.dpAuthPBarPerc=1;$('#sheriff-authpage-loadprogtext').text('failed');$('#sheriff-auth-dpauthinprogress-bar').css('--progress-background','#ff0000d6');localPHFn(stage)}
    });
  }  
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
}
