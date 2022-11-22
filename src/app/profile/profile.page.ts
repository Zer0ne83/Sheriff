import { AppService } from './../services/app.service';
import { Dialog, PromptOptions } from '@capacitor/dialog';
import { Platform, NavController, LoadingController, MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProfileCSSelectPage } from './../modals/profilecsselect/profilecsselect.page';
import { dbTypes,iabKeys} from '../services/profileData';
import { SQLiteService } from '../services/sqlite.service';
import { EventsService } from './../services/events.service';
import { Component, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { DetailService } from '../services/detail.service';
import { DeputyService } from '../services/deputy.service';
import { DateTimeService } from '../services/datetime.service';
import { FileSystemService } from '../services/filesystem.service';
import { CameraService } from '../services/camera.service';
import { Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { IABService } from '../services/iab.service';
import { Keyboard } from '@capacitor/keyboard';
import { StorageService } from '../services/storage.service';
import { ModalOptions } from '@ionic/core';
import * as _ from 'lodash';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-profile', templateUrl: './profile.page.html', styleUrls: ['./profile.page.scss'] })
////////////////////////////////////////////////////////////////////////////////////////
export class ProfilePage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  progCirc={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  leftAnimBarW:any;
  kbO:boolean=false;
  kbH:number=null;
  scH:number=null;
  scB:number=null;
  kbAdjust:string='unset';
  meObj:any;
  myObj:any;
  pplArr:any[]=[];
  meEmpId:number;
  gotPerms:boolean=false;
  ////////////////////////////////////////////////////////////////////////////////
  ulPhotoObj:any=null;
  profileData:any={ 
    photo:<any>{ // ??
      value:<any>{
        ulPath:<string>'',
        nativeUri:<string>'./../../assets/img/sheriff-profile-no-photo-ico.png',
        setDate:<string>'-',
        setBy:<string>'-',
        dims:<string>'-',
        size:<any>{s:<string>null,b:<string>''},
        type:<string>'-'
      },
      hasChanged:<boolean>false,
      isLock:<boolean>false
    },
    dname:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //iab
    fname:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //iab
    lname:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //iab
    email:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    phone:<any>{value:<number>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    dob:<any>{value:<string>null,date:<Date>null,hasChanged:<boolean>false,isLock:<boolean>true}, //iab
    pin:<any>{value:<number>null,hasChanged:<boolean>false,isLock:<boolean>true}, //iab
    gender:<any>{ //iab
      value:<string>null,
      label:<string>null,
      options:<any[]>[
        {value:<string>'0',label:<string>'Not specified'},
        {value:<string>'1',label:<string>'Male'},
        {value:<string>'2',label:<string>'Female'},
        {value:<string>'3',label:<string>'Non-binary'}
      ],
      hasChanged:<boolean>false,
      isLock:<boolean>true
    },
    pronoun:<any>{ //iab 
      value:<string>null,
      label:<string>null,
      options:<any[]>[
        {value:<string>'0',label:<string>'Not specified'},
        {value:<string>'1',label:<string>'He/Him'},
        {value:<string>'2',label:<string>'She/Her'},
        {value:<string>'3',label:<string>'They/Them'},
        {value:<string>'4',label:<string>'Custom'}
      ],
      hasChanged:<boolean>false,
      isLock:<boolean>true
    },
    custompn:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>true}, //iab
    street:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    city:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    country:<any>{value:<string>null,label:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    state:<any>{value:<string>null,label:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    pcode:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    ename:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false}, //contactaddress
    ephone:<any>{value:<string>null,hasChanged:<boolean>false,isLock:<boolean>false} //contactaddress
  };
  pCAObjects:any=null;
  upContactAddress:any[]=['email','phone','street','city','country','state','pcode','ename','ephone'];
  pLocked:any[]=['dob','gender','pronoun','pin'];
  pCompCats:any={
    photo:['photo'],
    general:['dname','fname','lname','email','phone','dob','pin','gender','pronoun'],
    address:['street','city','country','state','pcode'],
    emergency:['ename','ephone']
  };
  pComplete:any={
    all:{v:0,t:17,p:0},
    photo:{v:0,t:1,p:0},
    general:{v:0,t:9,p:0},
    address:{v:0,t:5,p:0},
    emergency:{v:0,t:2,p:0}
  };
  hasDBProfile:boolean=false;
  isFirstSync:boolean;
  initDataLoadDone:boolean=false;
  pIsLocked:boolean=true;
  tryingUnlock:boolean=false;
  pFieldFocus:string=null;
  dobDPOpen:boolean=false;
  genderPopOpts={id:'genderpop',backdropDismiss:true};
  pronounPopOpts={id:'pronounpop',backdropDismiss:true};
  genProCustOpen:any={gender:false,pronoun:false,custompn:false};
  cModalIsOpen:boolean=false;
  sModalIsOpen:boolean=false;
  csSelectModalOpts:ModalOptions={component:ProfileCSSelectPage,cssClass:'cs-selectlist',showBackdrop:true,backdropDismiss:true,animated:true,keyboardClose:true};
  shouldSave:boolean=false;
  errorSave:boolean=false;
  appFocusListening:boolean=false;
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private evServ:EventsService,
    private logger:NGXLogger,
    private platform:Platform,
    private detailServ:DetailService,
    private deputy:DeputyService,
    private dT:DateTimeService,
    private fileServ:FileSystemService,
    private camServ:CameraService,
    private navCtrl:NavController,
    private loadCtrl:LoadingController,
    private menuCtrl:MenuController,
    private modalCtrl:ModalController,
    private storeServ:StorageService,
    private sqlServ:SQLiteService,
    private appRef:ApplicationRef,
    private dChanges:ChangeDetectorRef,
    private iabServ:IABService,
    private appServ:AppService
  ) { }
////////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit() { this.logger.info('[Profile|ngOnInit] ()...');
    this.myObj=this.detailServ.myObj;this.meObj=this.detailServ.meObj;this.meEmpId=this.detailServ.meEmpId;this.pplArr=this.detailServ.pplArr;
    this.pageEnterAnim();
    Keyboard.removeAllListeners();
    if(!this.gotPerms){const getBPermsRes:boolean=await this.camServ.reqCamPerms();this.gotPerms=getBPermsRes};
    this.initKBPopListeners('all');
    this.appFocusListener();
    this.initSetup();
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[Profile|ionViewDidEnter] ()...');
    this.evServ.publish('doPageEnterAnim',null);
  }
////////////////////////////////////////////////////////////////////////////////////////
  initKBPopListeners(mode:string) { this.logger.info('[Profile|initKBPopListeners] ()...');
    this.platform.ready().then(()=>{
      const exclArr:any[]=['gender','pronoun','state','country'];
      if(this.scH===null){this.scH=this.platform.height()};
      Keyboard.removeAllListeners();
      Keyboard.addListener('keyboardDidShow',kbI=>{
        this.kbO=true;let localSCB:number;if(this.scB===null){this.kbH=kbI.keyboardHeight;this.scB=this.scH-this.kbH;localSCB=this.scB}else{localSCB=this.scB};
        if(this.pFieldFocus!==null&&!exclArr.includes(this.pFieldFocus)){this.logger.info('[Profile|kbDidShow] (Adjusting)...');
          const iEle=$('#'+this.pFieldFocus+'-input-id');this.logger.info('[Profile|kbDidShow] Input: #'+this.pFieldFocus+'-input-id');
          const iEleB:number=$(iEle).offset().top+$(iEle).outerHeight()+12;this.logger.info('[Profile|kbDidShow] Input Bottom: '+iEleB);
          if(iEleB>localSCB){this.kbAdjust=String(localSCB-iEleB)+'px';this.appRef.tick();this.logger.info('[Profile|kbDidShow] Adjust: '+this.kbAdjust)}
          else{this.kbAdjust='unset';this.appRef.tick();this.logger.info('[Profile|kbDidShow] Adjust: NIL - Not Covered.')}
        }else{if(this.pFieldFocus===null){this.logger.info('[Profile|kbDidShow] (Skipping): pFieldFocus===null)')}else{this.logger.info('[Profile|kbDidShow] (Skipping): excluded Field')}}
      });
      Keyboard.addListener('keyboardDidHide',()=>{this.kbO=false;if(this.kbAdjust!=='unset'){this.kbAdjust='unset';this.appRef.tick();this.logger.info('[Profile|kbDidHide] - Unset Adjust Done')}
      else{this.logger.info('[Profile|kbDidHide] (Skipping): Already UNSET')}});
      if(mode==='all'){
        document.addEventListener('ionPopoverDidPresent',()=>{this.logger.info('[Profile|EventListen] (ionPopDidPresent): '+this.pFieldFocus);this.genProCustOpen[this.pFieldFocus]=true});
        document.addEventListener('ionPopoverWillDismiss',()=>{let dismissK:string;for(const popK of Object.keys(this.genProCustOpen)){const pK:string=popK.toString();if(this.genProCustOpen[pK]){dismissK=pK;this.genProCustOpen[pK]=false}};this.logger.info('[Profile|EventListen] (ionPopDidDismiss): '+dismissK)})
      }
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  appFocusListener() { this.logger.info('[Profile|appFocusListener] ()...');
    if(!this.appFocusListening){this.evServ.subscribe('myAppStateActive',tf=>{if(tf){this.initKBPopListeners('kb');this.logger.info('[Profile|appFocusListener] App State [ACTIVE] - Doing Reinit of KB Listeners...')}else{this.logger.info('[Profile|appFocusListener] App State [NOT ACTIVE] - No Action.')}});this.appFocusListening=true}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initSetup() { this.logger.info('[Profile|initSetup] ()...');
    this.hasDBProfile=await this.sqlServ.hasProfile();
    this.logger.info('[Profile|initSetup] [DBPROFILE]='+this.hasDBProfile.toString().toUpperCase());
    if(this.hasDBProfile){let forceSync:boolean;let firstSync:boolean;let timeSync:boolean;
      const pOpts:any=await this.storeServ.getObject('settingsProfileOpts');
      pOpts!==null?forceSync=pOpts.alwaysSync.value:forceSync=false;
      const lsUTS:number=await this.detailServ.getProfileLastSync();
      if(lsUTS===0){firstSync=true;this.isFirstSync=true;timeSync=false}else{firstSync=false;const nowUTS:number=this.dT.gUT();const sSLS:number=nowUTS-lsUTS;sSLS>86400?timeSync=true:timeSync=false};
      if(forceSync||firstSync||timeSync){this.initRefreshProfile('refresh')}else{this.loadDBProfile()}
    }else{this.initRefreshProfile('init')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initRefreshProfile(mode:string) { this.logger.info('[Profile|initRefreshProfile] ()...');
    let initStages:any={photo:null,iab:null};
    let profileInitLoader:any=null;
    const rfPD=(data:number)=>{if(mode==='refresh'){this.evServ.publish('refreshProg',data)}};
    if(mode==='init'||(mode==='refresh'&&this.isFirstSync)){profileInitLoader=await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Fetching Profile Data'});await profileInitLoader.present()};
    const checkDismiss=setInterval(async()=>{
      if(initStages.photo!==null&&initStages.iab!==null){
        clearInterval(checkDismiss);
        if(mode==='init'){
          const dbCRes:boolean=await this.sqlServ.createProfile(this.profileData);
          this.calcComplete();
          profileInitLoader.dismiss();
          if(dbCRes){this.evServ.showToast('success','Profile Created')}else{this.evServ.showToast('error','Profile CreateSave Error')}
        }else{
          const dbSURes=await this.saveUpdateProfile(this.profileData);
          this.calcComplete();rfPD(10);
          if(this.isFirstSync){this.isFirstSync=null;profileInitLoader.dismiss()};
          if(dbSURes){this.evServ.showToast('success','Profile Updated')}else{this.evServ.showToast('error','Profile Update Error')}
        };
        let isUL:boolean;for(let i=0;i<this.pLocked.length;i++){if(this.profileData[this.pLocked[i]].value!==null){isUL=true}};
        isUL?this.pIsLocked=false:this.pIsLocked=true;this.initDataLoadDone=true
      }
    },1000);
    const iabTO=setTimeout(()=>{this.evServ.publish('fetchPDone',false)},30000);
    this.evServ.subscribe('initIAB',async initIABRes=>{clearTimeout(iabTO);initStages.iab=initIABRes;this.evServ.destroy('initIAB')});
    this.initGetIAB(mode);
    const initPhotoRes:boolean=await this.initGetPhoto();rfPD(20);if(initPhotoRes){initStages.photo=true}else{initStages.photo=false};
  }
////////////////////////////////////////////////////////////////////////////////////////
  async loadDBProfile() { this.logger.info('[Profile|loadDBProfile] ()...');
    const pD:any=(await this.sqlServ.getProfile()).data;
    for(const[key,value] of Object.entries(pD)){const pK:string=key.toString();const pV:any=value;
      if(this.profileData.hasOwnProperty(pK)){pK==='photo'?this.profileData[pK].value=JSON.parse(value.toString()):this.profileData[pK].value=pV};
      if(pK==='dob'){this.profileData.dob.date=this.dT.parseStr(pV.toString(),'MMM d, yyyy')};
      if(pK==='custompn'&&pV!=='Custom'){this.profileData.pronoun.options[4].label=pV;if(this.profileData.pronoun.value==='4'&&this.profileData.pronoun.label!==pV){this.profileData.pronoun.label=pV}};
      if(pK==='country'&&!this.profileData.country.label){const gSCRes:any=await this.sqlServ.getSingleCountry(pV);if(gSCRes.result){this.profileData.country.label=gSCRes.data.Country}};
      if(pK==='state'&&!this.profileData.state.label){const gSSRes:any=await this.sqlServ.getSingleState(pV);if(gSSRes.result){this.profileData.state.label=gSSRes.data.State}}
    };
    let isUL:boolean;for(let i=0;i<this.pLocked.length;i++){if(this.profileData[this.pLocked[i]].value!==null){isUL=true}};
    isUL?this.pIsLocked=false:this.pIsLocked=true;this.initDataLoadDone=true;this.calcComplete()
  }
////////////////////////////////////////////////////////////////////////////////////////
  async saveUpdateProfile(profileData:any):Promise<boolean>{ this.logger.info('[Profile|saveUpdateProfile] ()...');
    const upDProfRes:boolean=await this.sqlServ.updateProfile(profileData);
    if(upDProfRes){return Promise.resolve(true)}else{return Promise.resolve(false)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doProfileRefresh(event){ this.logger.info('[Profile|doProfileRefresh]');
    this.progCirc.animation=false;
    this.progCirc.percent=0;
    this.progCirc.outerStrokeColor='#ff9800';
    this.initDataLoadDone=false;this.pIsLocked=true;
    await this.resetAllPFields();
    await this.resetComplete();
    this.progCirc.percent+=10;
    this.evServ.subscribe('refreshProg',rPPerc=>{this.progCirc.percent+=rPPerc;
      if(this.progCirc.percent>=100){this.logger.info('[Profile|doProfileRefresh] (COMPLETED REFRESH!)...');
        this.progCirc.outerStrokeColor='#4caf50';
        event.target.complete();
        this.myAniCSS('.hcl-progcirc.profile','fadeOut',0,1400,'remove','hide');
        setTimeout(()=>{this.progCirc.percent=0;this.progCirc.outerStrokeColor='#FF9800';$('.hcl-progcirc.profile').css('display','unset')},2000);
        this.evServ.destroy('refreshProg');
      }else{console.log(this.progCirc.percent)}
    });
    this.initRefreshProfile('refresh');
  }
////////////////////////////////////////////////////////////////////////////////////////
  resetComplete():Promise<boolean>{this.logger.info('[Profile|resetComplete] ()...');
    let cFC:number=0;const ttlCFs:number=Object.keys(this.pComplete).length;
    for(const pCKey of Object.keys(this.pComplete)){cFC++;const pC:string=pCKey.toString();this.pComplete[pC].v=0;this.pComplete[pC].p=0;if(cFC===ttlCFs){return Promise.resolve(true)}}
  }
////////////////////////////////////////////////////////////////////////////////////////
  resetAllPFields():Promise<boolean>{this.logger.info('[Profile|resetAllPFields] ()...');
    for(const[key]of Object.entries(this.profileData)){
      const pK:string=key.toString();
      if(pK==='photo'){this.profileData.value={ulPath:'',nativeUri:'./../../assets/img/sheriff-profile-no-photo-ico.png',setDate:'-',setBy:'-',dims:'-',size:{s:null,b:''},type:'-'}}
      else{this.profileData[pK].value=null};
      this.profileData[pK].hasChanged=false;
      if(this.profileData[pK].hasOwnProperty('label')){this.profileData[pK].label=null}
    };
    this.profileData.dob.date=null;
    this.profileData.pronoun.options[4].label='Custom';
    console.log(this.profileData);
    return Promise.resolve(true)
  }
////////////////////////////////////////////////////////////////////////////////////////
  async calcComplete() { this.logger.info('[Profile|calcComlplete] ()...');
    await this.resetComplete();
    for(const pKey of Object.keys(this.profileData)){const pK:string=pKey.toString();
      if(pK!=='custompn'){let pCat:string=null;
        for(const pCKey of Object.keys(this.pCompCats)){const pC:string=pCKey.toString();if(this.pCompCats[pC].includes(pK)){pCat=pC}};
        if(this.profileData[pK].value!==null&&this.profileData[pK].value!==0&&pCat!==null){this.pComplete[pCat].v++;
          this.pComplete[pCat].p=Math.round((this.pComplete[pCat].v/this.pComplete[pCat].t)*100)
        }
      }
    };
    this.pComplete.all.v=this.pComplete.photo.v+this.pComplete.general.v+this.pComplete.address.v+this.pComplete.emergency.v;
    this.pComplete.all.p=Math.round((this.pComplete.all.v/this.pComplete.all.t)*100);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initGetPhoto():Promise<boolean> { this.logger.info('[Profile|initGetPhoto] ()...');
    const apiPhoto:any=await this.deputy.getThis('my/photo');
    if(apiPhoto.r){
      const p:any=apiPhoto.d;
      this.profileData.photo.value.nativeUri=await this.fileServ.dlFile(p.DownloadLink,'tempProfilePhoto');
      this.profileData.photo.value.setDate=this.dT.format(new Date(p.Created),'dd/MM/yy HH:mm');
      if(this.meEmpId===p.Creator){this.profileData.photo.value.setBy='You'}else{const pC:any[]=this.pplArr.filter(p=>p.EmpId===p.Creator);if(pC.length>0){this.profileData.photo.value.setBy=pC[0].FirstName+' '+pC[0].LastName.charAt(0)+'.'}else{this.profileData.photo.value.setBy=null}};
      this.profileData.photo.value.dims=p.Width.toString()+'x'+p.Height.toString();
      this.profileData.photo.value.size=this.niceBytes(p.Size);
      this.profileData.photo.value.type=p.Type.replace('image/','');
      return Promise.resolve(true)
    }else{return Promise.resolve(false)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initGetIAB(mode:string) { this.logger.info('[Profile|authProfileFetch] ()...');
    const rfPD=(data:number)=>{if(mode==='refresh'){this.evServ.publish('refreshProg',data)}};
    const emailIsV=(emailText)=>{const validEmailFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(emailText.match(validEmailFormat)){return true}else{return false}};
    const setDOMVal=async(name:string,val:any)=>{
      const oldVal:any=this.profileData[name].value;
      if(val!==oldVal){
        this.profileData[name].value=val;
        if(name==='gender'||name==='pronoun'){const oldLbl:string=this.profileData[name].label;const newLbl:string=this.profileData[name].options[Number(val)].label;if(oldLbl===null||oldLbl!==newLbl){this.profileData[name].label=newLbl}};
        if(name==='custompn'&&val!=='Custom'){this.profileData.pronoun.options[4].label=val;if(this.profileData.pronoun.value==='4'&&this.profileData.pronoun.label!==val){this.profileData.pronoun.label=val}};
        if(name==='dob'){this.profileData.dob.date=this.dT.parseStr(val,'MMM d, yyyy')};
        if(name==='country'){
          const oldLbl:string=this.profileData.country.label;
          let newLbl:string;const getNLRes:any=await this.sqlServ.getSingleCountry(val);
          getNLRes.result?newLbl=getNLRes.data.Country:newLbl=null;
          if(newLbl!==null){if(oldLbl===null||oldLbl!==newLbl){this.profileData.country.label=newLbl}}
        };
        if(name==='state'){
          const oldLbl:string=this.profileData.state.label;
          let newLbl:string;const getNLRes:any=await this.sqlServ.getSingleState(val);
          getNLRes.result?newLbl=getNLRes.data.State:newLbl=null;
          if(newLbl!==null){if(oldLbl===null||oldLbl!==newLbl){this.profileData.state.label=newLbl}}
        };
        this.profileData[name].hasChanged=false
      }
    };
    await this.sqlServ.openAuth();
    const gAR:any=await this.sqlServ.getADBItem('up');
    await this.sqlServ.closeAuth();
    if(gAR.result){const dUN:string=gAR.data.u;const dPW:string=gAR.data.p;
      if(emailIsV(dUN)&&dPW.length>3){this.tryingUnlock=true;
        this.evServ.subscribe('getProfileRes',iabData=>{
          if(iabData.result===true){
            const iabD:any[]=iabData.data;
            for(let i=0;i<iabKeys.length;i++){
              const pN:string=iabKeys[i];const iabVal:any=iabD[i];
              if(iabVal!==null&&iabVal!=='null'&&iabVal!==undefined&&iabVal!=='undefined'&&iabVal!==''){setDOMVal(pN,iabVal)}
            };
            this.tryingUnlock=false;this.pIsLocked=false;this.detailServ.setProfileLastSync();this.evServ.publish('initIAB',true);this.evServ.destroy('getProfileRes')
          }else if(iabData.result===false){this.evServ.publish('initIAB',false);this.evServ.destroy('getProfileRes')}
          else if(iabData.result==='prog'){rfPD(iabData.data)}
        });
        this.iabServ.getProfile(dUN,dPW);
      }else{this.evServ.publish('initIAB',false);this.logger.info('[Profile|initGVars] (checkDUP) (Error): U/P Appears INVALID - Skipping IAB Update.')}
    }else{this.evServ.publish('initIAB',false);this.logger.info('[Profile|initGVars] (getADBItem) (Error): Failed to Retrieve U/P - Skipping IAB Update.')}
  } 
////////////////////////////////////////////////////////////////////////////////////////
  getPDVal(fname:string){return this.profileData[fname].value};
////////////////////////////////////////////////////////////////////////////////////////
  niceBytes(bytes:number,decimals=0){if(bytes===0) return 'empty';const k=1024;const dm=decimals<0?0:decimals;const sizes=['B','KB','MB','GB','TB','PB','EB','ZB','YB'];const i=Math.floor(Math.log(bytes)/Math.log(k));return {s:parseFloat((bytes/Math.pow(k,i)).toFixed(dm)),b:sizes[i]}}
////////////////////////////////////////////////////////////////////////////////////////
  changeGender(nV:any) { this.logger.info('[Profile|changeGender] ('+nV+')...');
    if(this.initDataLoadDone){
      const newVal:number=Number(nV);
      if(newVal!==this.profileData.gender.value){
        this.profileData.gender.value=newVal;this.profileData.gender.label=this.profileData.gender.options[newVal].label;
        this.profileData.gender.hasChanged=true;this.checkPFieldChanges();
      }else{this.logger.info('[Profile|changeGender] [SKIP] - Value is Same.')};
    }else{this.logger.info('[Profile|changeGender] [SKIP] - initDataLoadDone!==TRUE')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  changePronoun(nV:any) { this.logger.info('[Profile|changePronoun] ('+nV+')...');
    if(this.initDataLoadDone){
      const newVal:string=nV.toString().trim();
      if(newVal!==this.profileData.pronoun.value){
        this.profileData.pronoun.value=newVal;
        this.profileData.pronoun.label=this.profileData.pronoun.options[Number(newVal)].label;
        this.profileData.pronoun.hasChanged=true;
        this.checkPFieldChanges();
      }else{this.logger.info('[Profile|changePronoun] [SKIP] - Value is Same.')};
    }else{this.logger.info('[Profile|changePronoun] [SKIP] - initDataLoadDone!==TRUE')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async editCustomPronoun(currentCustPN:string) { this.logger.info('[Profile|editCustomPronoun] ()...');
    this.genProCustOpen.custompn=true;
    let cPNPOpts:PromptOptions={title:'Custom Pronouns',okButtonTitle:'OK/Add',cancelButtonTitle:'Cancel',message:'Enter pronouns in Subject/Object format:'};
    if(currentCustPN!=='Custom'){cPNPOpts['inputText']=currentCustPN};
    const {value,cancelled}=await Dialog.prompt(cPNPOpts);
    if(!cancelled&&value!==null&&value!==undefined&&value!==''&&value!==this.profileData.custompn.value){
      this.profileData.custompn.value=value;
      if(this.profileData.pronoun.value==='4'){this.profileData.pronoun.label=value};
      this.profileData.pronoun.options[4].label=value;
      this.profileData.custompn.hasChanged=true;
      this.checkPFieldChanges();
      this.genProCustOpen.custompn=false;
    }else{this.genProCustOpen.custompn=false}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async changeCountry(currentVal:any) { this.logger.info('[Profile|changeCountry] ('+currentVal+')...');
    let baseLMOpts:ModalOptions=this.csSelectModalOpts;
    baseLMOpts['id']='country-csselectlist-modal';
    const domCVal:string=this.profileData.country.value;
    let selectedC:any;domCVal!==null?selectedC=Number(domCVal):selectedC=null;
    baseLMOpts['componentProps']={listType:'c',selected:selectedC};
    const cListModal:any=await this.modalCtrl.create(baseLMOpts);
    $('#country-csselectlist-modal').on('ionModalWillPresent',()=>{this.cModalIsOpen=true});
    $('#country-csselectlist-modal').on('ionModalWillDismiss',()=>{this.cModalIsOpen=false});
    await cListModal.present();
    const{data,role}=await cListModal.onDidDismiss();
    if(role==='new'){const newC:any=data;
      this.profileData.country.value=newC.v.toString().trim();
      this.profileData.country.label=newC.l.toString().trim();
      this.profileData.country.hasChanged=true;
      this.profileData.state.value=null;
      this.profileData.state.label=null;
      this.profileData.state.hasChanged=true;
      this.checkPFieldChanges();
      this.appRef.tick()
    }else{this.appRef.tick()}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async changeState(currentVal:any) { this.logger.info('[Profile|changeState] ('+currentVal+')...');
    const currentCVal:string=this.profileData.country.value;
    if(currentCVal!==null){
      let baseLMOpts:ModalOptions=this.csSelectModalOpts;
      baseLMOpts['id']='state-csselectlist-modal';
      let domSVal:string=this.profileData.state.value;
      let selectedS:any;if(domSVal!==null){selectedS=Number(domSVal)}else{selectedS=null};
      baseLMOpts['componentProps']={listType:'s',selected:selectedS,country:Number(currentCVal)};
      const sListModal:any=await this.modalCtrl.create(baseLMOpts);
      $('#state-csselectlist-modal').on('ionModalWillPresent',()=>{this.sModalIsOpen=true});
      $('#state-csselectlist-modal').on('ionModalWillDismiss',()=>{this.sModalIsOpen=false});
      await sListModal.present();
      const{data,role}=await sListModal.onDidDismiss();
      if(role==='new'){const newS=data;
        this.profileData.state.value=newS.v.toString().trim();
        this.profileData.state.label=newS.l.toString().trim();
        this.profileData.state.hasChanged=true;
        this.checkPFieldChanges();
        this.appRef.tick()
      }else{this.appRef.tick()}
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  forceBlur(fName:string) { this.logger.info('[Profile|forceBlur] ('+fName+')...');
    const inputEle=$('#'+fName+'-input-id');const itemEle=$('.'+fName+'-input-item');
    const remHLLoop=setInterval(()=>{
      if($(inputEle).length&&$(itemEle).length){
        clearInterval(remHLLoop);
        this.logger.info('[Profile|forceBlur] (Cleared!)');
        $(inputEle).blur().focusout();
        if($(inputEle).css('--show-full-highlight')==='1'){$(inputEle).css('--show-full-highlight')==='0'};
        if($(inputEle).hasClass('has-focus')){$(inputEle).removeClass('has-focus')};
        $(itemEle).blur().focusout();
        if($(itemEle).css('--show-full-highlight')==='1'){$(itemEle).css('--show-full-highlight')==='0'};
        if($(itemEle).hasClass('has-focus')){$(itemEle).removeClass('has-focus')};
        this.pFieldFocus=null;
        if(fName==='gender'||fName==='pronoun'){this.genProCustOpen[fName]=false};
        this.appRef.tick();
        setTimeout(() => {
          console.log('pFieldFocus='+this.pFieldFocus);
          console.log('genProCustOpen=');
          console.log(this.genProCustOpen);
        },2000);
      }
    },100)
  }
////////////////////////////////////////////////////////////////////////////////////////
  async openDOBDatePicker() { this.logger.info('[Profile|openDOBDatePicker] ()....');
    this.pFieldFocus='dob';this.dobDPOpen=true;let oldDate:Date=this.profileData.dob.date;
    try{const newDOBRes:Date=await this.dT.pickerProfileDOB(this.profileData.dob.date);this.dobDPOpen=false;this.pFieldFocus=null;
      if(!this.dT.isSD(oldDate,newDOBRes)){this.profileData.dob.date=newDOBRes;this.profileData.dob.value=this.dT.format(newDOBRes,'MMM d, yyyy');this.profileData.dob.hasChanged=true;this.checkPFieldChanges()};this.forceBlur('dob')
    }catch(dobErr){this.forceBlur('dob')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doSelectPhoto() { this.logger.info('[Profile|doSelectPhoto] ()...');
    if(this.gotPerms){
      const getFRes:any=await this.camServ.fileGetPhoto();
      if(getFRes){
        this.doReadyULPhoto(getFRes);
        const newFStat:any=await this.fileServ.stat(null,getFRes.path);
        let fS:any;if(newFStat.result){fS=this.niceBytes(newFStat.data.size)}else{fS={s:'NK',b:''}};
        let fDims:string;getFRes.exif.ImageWidth.toString()==='0'&&getFRes.exif.ImageLength.toString()==='0'?fDims='NK':fDims=getFRes.exif.ImageWidth+'x'+getFRes.exif.ImageLength;
        this.profileData.photo.value={ulPath:getFRes.path,nativeUri:getFRes.webPath,setDate:this.dT.format(new Date(),'dd/MM/yy HH:mm'),setBy:'You',dims:fDims,size:fS,type:getFRes.type};
        this.appRef.tick();this.profileData.photo.hasChanged=true;this.checkPFieldChanges();
      }else{this.evServ.showToast('error','Failed to Import Photo')} 
    }else{this.evServ.showToast('error','File/Photo Permission Denied')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doTakePhoto() { this.logger.info('[Profile|doChangePhoto] ()...');
    if(this.gotPerms){
      const takePRes:any=await this.camServ.camGetPhoto();
      if(takePRes){
        this.doReadyULPhoto(takePRes);
        const newPStat:any=await this.fileServ.stat(null,takePRes.path);
        let pS:any;if(newPStat.result){pS=this.niceBytes(newPStat.data.size)}else{pS={s:'NK',b:''}};
        this.profileData.photo.value={ulPath:takePRes.path,nativeUri:takePRes.webPath,setDate:this.dT.format(new Date(),'dd/MM/yy HH:mm'),setBy:'You',dims:takePRes.exif.ImageWidth+'x'+takePRes.exif.ImageLength,size:pS,type:takePRes.type};
        this.appRef.tick();this.profileData.photo.hasChanged=true;this.checkPFieldChanges();
      }else{this.evServ.showToast('error','Failed to Import Photo')} 
    }else{this.evServ.showToast('error','Camera/Photo Permission Denied')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doReadyULPhoto(photo:Photo) { this.logger.info('[Profile|doReadyULPhoto] ()...');
    const base64Data=await this.readAsBase64(photo);
    const fileName=new Date().getTime()+'.jpeg';
    await Filesystem.writeFile({path:'Sheriff/assets/'+fileName,data:base64Data,directory:Directory.External});
    const ulPPath:string='Sheriff/assets/'+fileName;
    const ulPRead=await Filesystem.readFile({path:ulPPath,directory:Directory.External});
    this.ulPhotoObj={name:fileName,path:ulPPath,data:'data:image/jpeg;base64,'+ulPRead.data};
    this.logger.info('[Profile|doReadyULPhoto] Upload Photo Object Ready (this.ulPhotoObj)!');
  }
////////////////////////////////////////////////////////////////////////////////////////
  convertBlobToBase64=(blob:Blob)=>new Promise((resolve,reject)=>{const reader=new FileReader;reader.onerror=reject;reader.onload=()=>{resolve(reader.result)};reader.readAsDataURL(blob)})  
  async readAsBase64(photo:Photo) { this.logger.info('[Profile|readAsBase64] (photo)...');
    if(this.platform.is('hybrid')){const file=await Filesystem.readFile({path:photo.path});return file.data}
    else{const response=await fetch(photo.webPath);const blob=await response.blob();return await this.convertBlobToBase64(blob) as string}
  }
////////////////////////////////////////////////////////////////////////////////////////
  checkPFieldChanges(){ this.logger.info('[Profile|countPFieldChanges] ()...');
    if(this.initDataLoadDone){
      let fieldChangeCount:number=0;
      for(const[key] of Object.entries(this.profileData)){if(this.profileData[key].hasChanged){fieldChangeCount++}};
      if(fieldChangeCount>0){this.dChanges.detectChanges();this.appRef.tick();this.setShouldSave(true)}
      else{this.setShouldSave(false)}
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doDeletePhoto() { this.logger.info('[Profile|doDeletePhoto] ()...');
    let deleteSuccess:boolean;
    if(this.profileData.photo.hasChanged){this.profileData.photo.hasChanged=false;this.checkPFieldChanges()}
    else{const deletePhotoLoader=await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Deleting Photo'});
      deletePhotoLoader.onDidDismiss().then(()=>{
        if(deleteSuccess){this.profileData.photo.value={ulPath:'',nativeUri:'./../../assets/img/sheriff-profile-no-photo-ico.png',setDate:'-',setBy:'-',dims:'-',size:{s:'-',b:''},type:'-'};this.evServ.showToast('success','Photo Deleted Successfully')}
        else{this.evServ.showToast('error','Photo Delete Error')};
      });
      await deletePhotoLoader.present();
      setTimeout(()=>{deleteSuccess=true;deletePhotoLoader.dismiss()},3000);
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async setShouldSave(tf:boolean){ this.logger.info('[Profile|setShouldSave] ()...');
    if(tf){this.shouldSave=true;this.detailServ.setShouldSave(true,'Profile');this.evServ.subscribe('menuShieldSave',thenNav=>{this.doSaveProfile(thenNav);this.evServ.destroy('menuShieldSave')})}
    else{this.shouldSave=false;this.detailServ.setShouldSave(false,null);const hasEvT:boolean=await this.evServ.check('menuShieldSave');if(hasEvT){this.evServ.destroy('menuShieldSave')}}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async promptSaveProfile() { this.logger.info('[Profile|promptSaveProfile] ()...');
    event.stopPropagation();
    const {value}=await Dialog.confirm({title:'Save/Discard New Details?',message:'𝗦𝗮𝘃𝗲 updated details to Deputy or 𝗗𝗶𝘀𝗰𝗮𝗿𝗱 changes?',okButtonTitle:'\uD83D\uDCBE Save',cancelButtonTitle:'\u274C Discard'});
    if(value){this.doSaveProfile('/tabs')}else{this.setShouldSave(false);this.navCtrl.navigateRoot('/tabs')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doSaveProfile(thenTask:string|null) { this.logger.info('[Profile|doSaveProfile] ()...');
    const emailIsV=(emailText)=>{const validEmailFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(emailText.match(validEmailFormat)){return true}else{return false}};
    const savePLoader=await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Saving Profile'});
    await savePLoader.present();
    const doDismiss=(d:any,r:string)=>{savePLoader.dismiss(d,r)};
    //------------------------------------------------
    let newFieldsArr:any[]=[];for(const[key,value]of Object.entries(this.profileData)){if(key.toString()!=='photo'&&value['hasChanged']&&value['value']!==null){const nK:string=key.toString();const nV:string=value['value'].toString().trim();newFieldsArr.push({n:nK,v:nV})}};
    if(newFieldsArr.length>0){this.logger.info('[Profile|doSaveProfile] (IAB Save) ['+newFieldsArr.length+'] NEW Field Values - Updating...');
      const gAR:any=await this.sqlServ.getADBItem('up');
      if(gAR.result){const upO:any={u:gAR.data.u,p:gAR.data.p};
        if(emailIsV(upO.u)&&upO.p.length>3){
          const iabTO=setTimeout(()=>{this.evServ.publish('iabTO',true);this.logger.info('[Profile|saveProfile] (IAB Timeout) Error > 30s')},30000);
          this.evServ.subscribe('saveProfileDone',async iabSaveRes=>{
            clearTimeout(iabTO);if(iabSaveRes){const dbSaveRes:boolean=await this.sqlServ.updateProfile(this.profileData);if(dbSaveRes){doDismiss('both','saved')}else{doDismiss('iab','saved')}}
            else{doDismiss('iab','error')};this.evServ.destroy('saveProfileDone')
          });
          this.iabServ.saveProfile(upO,newFieldsArr)
        }else{this.logger.info('[Profile|doSaveProfile] (Error) U/P Invalid');doDismiss('email','error')}
      }else{this.logger.info('[Profile|doSaveProfile] (Error) Failed to Retrieve U/P - Skipping IAB Update.');doDismiss('up','error')}
    }else{this.logger.info('[Profile|doSaveProfile] (Error) No New Field Values (ex. Photo!) - Skipping Update');doDismiss('nonew','error')}
    //------------------------------------------------
    const doAnyNav=()=>{if(thenTask==='logout'){this.doDelayedLogout()}else if(thenTask==='exit'){this.doDelayedExit()}else{if(thenTask!==null){this.navCtrl.navigateRoot(thenTask)}}};
    const{data,role}=await savePLoader.onDidDismiss();
    if(role==='saved'){
      for(const[key] of Object.entries(this.profileData)){this.profileData[key].hasChanged=false};this.checkPFieldChanges();
      this.evServ.showToast('success','Profile Saved OK');
      doAnyNav();
      this.logger.info('[Profile|saveProfile] (Success) Profile Saved via IAB & Profile DB Fields Updated.')
    }else{
      let errMsg:string;if(data==='iab'){errMsg='Deputy Failed'}else if(data==='email'){errMsg='Invalid Email'}else if(data==='up'){errMsg='User/Pass Missing'}else{errMsg='No New Data'};
      this.setShouldSave(false);
      this.evServ.showToast('error','Error: '+errMsg);
      doAnyNav();
      this.logger.info('[Profile|saveProfile] (Error): '+errMsg)
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  onInputFocus(fName:string){this.logger.info('[Profile|onInputFocus] ('+fName+')...');
    if(this.initDataLoadDone){this.pFieldFocus=fName}
  }
////////////////////////////////////////////////////////////////////////////////////////
  onSelectCancel(fName:string){this.logger.info('[Profile|onSelectCancel] ('+fName+')...');
    this.pFieldFocus=null;if(fName!=='gender'&&fName!=='pronoun'){this.forceBlur(fName)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  onInputBlur(fName:string,fVal:any){this.logger.info('[Profile|onInputBlur] ('+fName+')...');
    this.pFieldFocus=null;
    const exceptF:any[]=['gender','pronoun','country','state'];
    if(!exceptF.includes(fName)){if(fVal!==this.profileData[fName].value){this.profileData[fName].value=fVal;this.profileData[fName].hasChanged=true;this.checkPFieldChanges()}};
  }
////////////////////////////////////////////////////////////////////////////////////////
  doDelayedExit(){this.appServ.exitApp()}
////////////////////////////////////////////////////////////////////////////////////////
  doDelayedLogout() {
    this.detailServ.setAuthLogout(true);
    $('#sheriff-auth-networkstatus-wrapper').removeClass('adjust-for-auth-toolbar-overlay');
    const myAniCSS = (jqEle, animName) => new Promise((resolve) => { const animClassStr = 'animate__animated animate__' + animName + ' animate__faster'; $(jqEle).addClass(animClassStr); $(jqEle).on('animationend', () => { $(jqEle).removeClass(animClassStr); resolve('done'); }); });
    myAniCSS('#sheriff-custom-splash-wrapper', 'fadeIn').then( () => $('#sheriff-custom-splash-wrapper').show());
    $('#sheriff-custom-splash-logo-img').addClass('animate__animated animate__headShake animate__infinite');
    $('#sheriff-custom-splash-titletexttop-wrapper').removeClass('animate__animated animate__slideOutUp animate__faster');
    $('#sheriff-custom-splash-zer0ne-wrapper').removeClass('animate__animated animate__slideOutDown animate__faster');
    $('.bar-horizontal').removeClass('finished');
    $('#sheriff-custom-splash-logo-img').prop('src', '../assets/img/lilheader-s.png');
    $('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideOutLeft').addClass('animate__slideInLeft');
    $('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideOutRight').addClass('animate__slideInRight');
    $('#sheriff-custom-splash-wrapper, .sheriff-col.custom-splash-col.middlelogocol').css('background', '#121212');
    this.menuCtrl.close().then( () => { this.navCtrl.navigateRoot('/auth'); });
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave(){ this.logger.info('[Profile|ionViewWillLeave] ()...');
    Keyboard.removeAllListeners();
    const titleBar=$('.hcl-leftbar.profile');const animBarEnd=$('.sheriff-title-leftanimbar-inner.profile');const titleText=$('.sheriff-title.tight-wrap.profile');
    $(titleBar).css('width','0px').removeClass('dimmed');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin')
  }
////////////////////////////////////////////////////////////////////////////////////////
  pageEnterAnim() { this.logger.info('[Profile|pageEnterAnim] ()...');
    this.evServ.subscribe('doPageEnterAnim',()=>{
      const pageKey='profile';const sLogoEle=$('.hcl-slogo.'+pageKey);const preImg='../../assets/img/slogo-';const cProgEle=$('.hcl-progcirc.'+pageKey);const patchEles=$('.hcl-opatch.'+pageKey+' .hcl-ipatch.'+pageKey);const starEle=$('.hcl-star.'+pageKey);const pageTitle=$('.hcl-title.'+pageKey);const titleBar=$('.hcl-leftbar.'+pageKey);const leftCol=$('.sheriff-page-header-col.left-col.'+pageKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+pageKey);const titleText=$('.sheriff-title.tight-wrap.'+pageKey);const calcBarW=Math.round(($(leftCol).outerWidth()+6)-($(pageTitle).offset().left+$(pageTitle).outerWidth()))+'px';this.leftAnimBarW=calcBarW;$(patchEles).addClass('hidden');
      setTimeout(()=>{$(patchEles).remove();$(starEle).addClass('hcl-star-startanim');this.progCirc.outerStrokeColor='#FF9800';this.progCirc.percent=100;$(sLogoEle).attr('src',preImg+'g.png');this.myAniCSS('.hcl-slogo.'+pageKey,'tada',400,400,'remove','show');
        setTimeout(()=>{$(sLogoEle).attr('src',preImg+'w.png');this.myAniCSS('.hcl-progcirc.'+pageKey,'zoomOut',0,400,'remove','hide');$(sLogoEle).addClass('tabtilt');$(titleBar).css('width',calcBarW);
          setTimeout(()=>{$(animBarEnd).addClass('showing');$(titleText).addClass('scrolledin');
            setTimeout(()=>{$(titleBar).addClass('dimmed');$(sLogoEle).removeClass('tabtilt')}, 200);
          },200);
          setTimeout(()=>{this.progCirc.percent=0;
            setTimeout(()=>{$(cProgEle).css('display','unset')},1000);$(starEle).removeClass('hcl-star-startanim');this.evServ.destroy('doPageEnterAnim')
          },600)
        },400)
      },300)
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) { // #myElement, tada, 0-1500, 0-1500, keep/remove, show/hide/remove
    this.logger.info('[Profile|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
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
