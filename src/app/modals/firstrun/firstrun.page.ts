import { CalendarService } from './../../services/calendar.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup, ModalController, IonSlides, IonCheckbox, LoadingController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NGXLogger } from 'ngx-logger';
import { Dialog } from '@capacitor/dialog';
import { StatusBar } from '@capacitor/status-bar';
import { App } from '@capacitor/app';
import { AppService } from 'src/app/services/app.service';
import { frResMyCombo } from '../../services/baseDB';
import { EventsService } from './../../services/events.service';
import { SQLiteService } from './../../services/sqlite.service';
import { DateTimeService } from 'src/app/services/datetime.service';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { DeputyService } from './../../services/deputy.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { StorageService } from './../../services/storage.service';
import { DetailService } from 'src/app/services/detail.service';
import { Directory, Encoding, Filesystem, CopyOptions, GetUriResult, StatResult } from '@capacitor/filesystem';
import { FileSystemService } from './../../services/filesystem.service';
import { AppUserSettings, defaultAUSettings } from './../../services/appTypes';
import { sumBy, minBy } from 'lodash';
import * as $ from 'jquery';
//////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-firstrun', templateUrl: './firstrun.page.html', styleUrls: ['./firstrun.page.scss'] })
//////////////////////////////////////////////////////////////////////////////////////
export class FirstRunPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  @ViewChild('slideWithNav',{static:false})slideWithNav:IonSlides;
  @ViewChild('neverAskAgain')neverAskAgain:IonCheckbox;
  @ViewChild('restoreBUDBCB')restoreBUDBCB:IonCheckbox;
  @ViewChild('startFreshCB')startFreshCB:IonCheckbox; 
  @ViewChild('freshOptCBDefault')freshOptCBDefault:IonCheckbox;
  @ViewChild('freshOptCBMore')freshOptCBMore:IonCheckbox;
  @ViewChild('recDLOptsRadio')recDLRadio:IonRadioGroup;
  freshOptDefault:boolean=false;
  freshOptMore:boolean=false;
// Slider Vars
  slideOptions:any={initialSlide:0,slidesPerView:1,autoplay:false};
  doShowPager:boolean=true;
  sliderHasLoaded:boolean=false;
  thisSlideNo:number=1;
  lockNext:boolean=false;
  lockPrev:boolean=false;
  checkFSAndBUOnce:boolean=false;
  usingDefaults:boolean=false;
  defaultLastSlideCount:number=0;
// Modal/Page Vars
  userEmail:string;
  wpPortfolio:any;
  wpSearchAgain:any;
  wpSearchAgainStage:string='waiting';
  wpWorkplaces:any[]=[];
  wpOneIsChecked:boolean=false;
  screenResObj:any;
  modalProps:any;
  modalPropsMy:any;
  myDataObj:any=null;
  meDataObj:any=null;
  rawWPDataArr:any[]=[];
  isDownloading:boolean=true;
  awaitingChoice:boolean=true;
  neverAskAgainCB:boolean=true;
  wpNoOf:number=0;
  wpCheckDone:boolean=false;
  newWPNo:number=0;
// DB/Backup Vars
  backupCheckIsDone:boolean=false;
  noBackupWillFail:boolean=false;
  mustRestoreProg:number=0;
  mustRestoreStatus:string='loading';
  forceRestoreWP:any=null;
  forceRestoreWPArr:any[]=[];
  forceRestoreWPName:string;
  userDB:SQLiteDBConnection;
  hasBUDB:boolean=false;
  buDBChecked:boolean=false;
  startFreshChecked:boolean=false;
  buDBNiceFName:string;
  buDBRealFName:string;
  buDBFSize:string;
  buDBUri:string;
  buDBSize:string;
  buDBModDate:string;
  buDBModAgo:string;
  dbImportDone:boolean=false;
  importFileContent:any;
  importFileObj:any;
  reinitUDBCount:number=0;

// Download Scope/Data Vars
  epTestsDone:boolean=false;
  selectDataScope:string=null;
  showMoreOpts:boolean=false;
  allMyEPDataArr:any[]=[];
  recordsDefaultOpsArr:any[]=[];
  recordsUserOptsArr:any[]=[];
  recDLAllArr:any[]=[];
  recDLCustomArr:any[]=[];
  dloadSelectionMode:boolean=true;
// Download Prog Vars
  dlMyRunning:boolean=false;
  dloadInProgress:boolean=false;
  dlInProgText:string='downloading';
  dlBoxInProgress=true;
  dlBoxError=false;
  dlBoxSuccess:boolean=false;
  nowDataMode:string;
  nowDataTarget:string;
  thisDataValue:number=0;
  thisDataMax:number=0;
  getThisPBar:number=0;
  getAllPBar:number=0;
  getAllPerc:number=0;
  getAllCount:number=0;
  getAllTotal:number=0;
  dlDidComplete:boolean=false;
  dlErrorCount:number=0;
  dlConvImgMode:boolean=false;
  convImgs:any[]=[];
// Modal Return Data Vars
  frWorkplaceId:number=0;
  finalModalData:any={
    wpId:this.frWorkplaceId,
    dlDone:false,
    dbImported:null,
    didDefaults:false,
    alertOpts:{
      alertCal:{value:null,info:false},
      alertMethods:{value:{phone:true,calendar:true,email:false},info:false},
      alertEvents:{value:{shift:true,task:true,tsheet:true},info:false},
      alertBefore:{value:{task:{range:2,mins:60},shift:{range:1,mins:30},tsheet:{range:2,mins:10}},info:false}
    }
  };
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private modalController:ModalController,
    private evServ:EventsService,
    private sqlServ:SQLiteService,
    private deputy:DeputyService,
    private storeServ:StorageService,
    private fsServ:FileSystemService,
    private logger:NGXLogger,
    private loadCtrl:LoadingController,
    private shttp:HTTP,
    private dT:DateTimeService,
    private calServ:CalendarService,
    private fireServ:FirebaseService,
    private dS:DetailService,
    private appServ:AppService
  ) {}
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() { this.logger.info('[Modal|FirstRun|ngInit] ()...');
    this.doInitModalVars();
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewWillEnter() { this.logger.info('[Modal|FirstRun|ionViewWillEnter] ()...') }
//////////////////////////////////////////////////////////////////////////////////////
  async doInitModalVars() { this.logger.info('[Modal|FirstRun|doInitModalVars] ()...');
    this.meDataObj=await this.dS.getMe();this.myDataObj=await this.dS.getMy();this.userEmail=this.deputy.userEmail;
    let hasWPO:boolean|null=null;
    if(this.myDataObj.hasOwnProperty('Workplace')){hasWPO=true;this.rawWPDataArr=this.myDataObj.Workplace;this.wpNoOf=this.rawWPDataArr.length}
    else{hasWPO=false;this.wpNoOf=0};
    if(!hasWPO||this.wpNoOf<1){this.doShowPager=false;if(!this.wpCheckDone){this.wpCheckDone=true;this.evServ.publish('wpCheckDone',true)}else{await this.doPrevNextCheck()}}
    else{
      this.doShowPager=true;
      const pfN:string=this.myDataObj.Portfolio;const pfC:string=this.myDataObj.ColorThemeCode;
      for(let i=0;i<this.rawWPDataArr.length;i++){
        const rawWPO:any=this.rawWPDataArr[i];let wpoColor:string,wpoCLabel:string,wpoCode:string,wpoAddr:string,wpoCheck:boolean;
        if(i===0){if(this.wpNoOf>1){wpoCheck=false;this.wpOneIsChecked=false}else{wpoCheck=true;this.wpOneIsChecked=true}}else{wpoCheck=false};
        this.frWorkplaceId=rawWPO.Id;
        if(rawWPO.CompanyName===pfN){wpoColor=pfC;this.lightOrDark(pfC)==='dark'?wpoCLabel='#EEEEEE':wpoCLabel='#121212'}else{wpoColor='#363636';wpoCLabel='#EEEEEE'};
        rawWPO.Code?wpoCode=rawWPO.Code.substr(0,3):wpoCode=null;
        rawWPO._DPMetaData.AddressObject.Print?wpoAddr=rawWPO._DPMetaData.AddressObject.Print:wpoAddr=null;
        this.wpWorkplaces.push({id:rawWPO.Id,code:wpoCode,color:wpoColor,labelcolor:wpoCLabel,name:rawWPO.CompanyName,address:wpoAddr,ischecked:wpoCheck});
      };
      if(!this.wpCheckDone){this.wpCheckDone=true;this.evServ.publish('wpCheckDone',true)}else{await this.doPrevNextCheck()};
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[Modal|FirstRun|ionViewDidEnter] ()...');
    $('ion-content#auth-page-ion-content').css('display','none');
  };
//////////////////////////////////////////////////////////////////////////////////////
  lightOrDark(color:any) { this.logger.info('[Modal|FirstRun|lightOrDark] ('+String(color)+')...');
    let r:any,g:any,b:any,hsp:any;
    if(color.match(/^rgb/)){color=color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);r=color[1];g=color[2];b=color[3]}
    else{color=+("0x"+color.slice(1).replace(color.length<5&&/./g,'$&$&'));r=color>>16;g=color>>8&255;b=color&255};
    hsp=Math.sqrt(0.299*(r*r)+0.587*(g*g)+0.114*(b*b));
    if(hsp>127.5){return'light'}else{return'dark'}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async searchForMissingWP() { this.logger.info('[Modal|FirstRun|searchForMissingWP] ()...');
    const stopSA=(n:boolean)=>{let nT:string;n?nT='gotnew':nT='nonew';this.wpSearchAgainStage=nT;setTimeout(()=>{$('.dimable').css('opacity','1');this.wpSearchAgain=false;this.wpSearchAgainStage='waiting'},1000)};
    this.wpSearchAgain=true;$('.dimable').css('opacity','0.3');
    const sFMWPRes:any=await this.deputy.diffMyWorkplace(this.rawWPDataArr);
    if(!sFMWPRes.new){stopSA(false)}
    else{
      stopSA(true);this.wpWorkplaces=[];this.newWPNo=sFMWPRes.newno;
      await this.dS.setMy(sFMWPRes.data);
      this.doInitModalVars()
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async toggleWPCB(index:number,id:number) { this.logger.info('[Modal|FirstRun|toggleWPCB] ('+index+','+id+')...');
    if(this.wpWorkplaces[index].ischecked){this.wpWorkplaces[index].ischecked=false;
      if(this.frWorkplaceId===id){this.frWorkplaceId=null};
      let isOne:boolean=false;for(let i=0;i<this.wpWorkplaces.length;i++){if(this.wpWorkplaces[i].ischecked){isOne=true}};
      this.wpOneIsChecked=isOne;
      await this.doPrevNextCheck();
    }else{this.wpWorkplaces[index].ischecked=true;
      if(this.frWorkplaceId!==id){this.frWorkplaceId=id};
      for(let i=0;i<this.wpWorkplaces.length;i++){if(i!==index){this.wpWorkplaces[i].ischecked=false}};
      this.wpOneIsChecked=true;
      await this.doPrevNextCheck();
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async skipWorkplaceImport() { this.logger.info('[Modal|FirstRun|skipWorkplaceImport] ()...');
    this.noBackupWillFail=true;
    await this.doPrevNextCheck();
    this.slideWithNav.slideTo(1,500,true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getRecCatObj() { this.logger.info('[Modal|firstRun|DeputyApiService|getRecCatObj] ()...');
    const dbInitLoader=await this.loadCtrl.create({spinner:'dots',cssClass:['sheriff-loader-class','fr-workplace-data-loader'],message:'𝘓𝘰𝘢𝘥𝘪𝘯𝘨 🏢𝗪𝗢𝗥𝗞𝗣𝗟𝗔𝗖𝗘 𝖣𝖺𝗍𝖺'});
    await dbInitLoader.present();
    let doSkip:string[]=['country','state'];
    let doAll:string[]=['roster','timesheet','task','memo'];
    let doLimit:string[]=['systemusagebalance','systemusagetracking','geo'];
    let noAccess:string[]=[];let zeroRecs:string[]=[];let availRecs:any[]=[];let skipRec:any[]=[];let availEPs:string[]=[];
    let allRCs:any[];const storeRCs:any=await this.storeServ.getObject('tempAllRCs');
    let allMCs:any[];const storeMCs:any=await this.storeServ.getObject('tempAllMCs');
    if(storeRCs!==null){allRCs=storeRCs}else{allRCs=await this.deputy.firstRunRecordsCheck();this.storeServ.setObject('tempAllRCs',allRCs)};
    if(storeMCs!==null){allMCs=storeMCs}else{allMCs=await this.deputy.firstRunMyCheck();this.storeServ.setObject('tempAllMCs',allMCs)};
    for(let i=0;i<allRCs.length;i++){const rC:any=allRCs[i];
      if(!rC.access){noAccess.push(rC.name)}
      else if(doSkip.includes(rC.name.toLowerCase())){skipRec.push(rC.name)}
      else if(rC.count<1){zeroRecs.push(rC.name)}
      else{
        let tRC:any={ep:rC.name,disabled:null,checked:null,default:0,value:0,min:0,max:0};
        tRC.disabled=false;tRC.checked=true;rC.count===1?tRC.min=0:tRC.min=1;
        if(doAll.includes(rC.name.toLowerCase())){tRC.max=rC.count;if(rC.count<=3000){tRC.value=rC.count;tRC.default=rC.count}else{tRC.value=3000;tRC.default=3000}}
        else if(doLimit.includes(rC.name.toLowerCase())){tRC.max=730;tRC.value=365;tRC.default=365}
        else{
          if(rC.count<=1000){tRC.max=rC.count;tRC.value=rC.count;tRC.default=rC.count}
          else if(rC.count>1000&&rC.count<=2000){tRC.max=rC.count;tRC.value=730;tRC.default=730}
          else if(rC.count>2000){tRC.max=2000;tRC.value=730;tRC.default=730}
        };
        availRecs.push(tRC);
        availEPs.push(tRC.ep);
      }
    };
    let finalAvailRecs:any[]=[];
    let accessRes:any[];const storeARs:any=await this.storeServ.getObject('tempARs');
    if(storeARs!==null){accessRes=storeARs}else{accessRes=await this.deputy.gotEPAccess(availEPs);this.storeServ.setObject('tempARs',accessRes)};
    for(let i=0;i<availRecs.length;i++){const aRO:any=availRecs[i];if(accessRes[i].result){finalAvailRecs.push(aRO)}};
    let fauxRosCount:number;const tsArr:any[]=availRecs.filter(o=>o.ep==='Timesheet');tsArr.length>0?fauxRosCount=tsArr[0]['max']:fauxRosCount=500;
    finalAvailRecs.push({ep:'Roster',disabled:false,checked:true,default:fauxRosCount,value:fauxRosCount,min:fauxRosCount,max:fauxRosCount});
    this.loadCtrl.dismiss().then(()=>{this.epTestsDone=true;this.evServ.publish('epTestsDone',true)});
    this.logger.info('[Modal|firstRun|getRecCatObj] (FINISH): ['+allRCs.length+']-All, ['+noAccess.length+']-NoAccess, ['+zeroRecs.length+']-0Records, ['+skipRec.length+']-Skipped, ['+availRecs.length+']-Avail');
    this.allMyEPDataArr=allMCs;
    this.recordsDefaultOpsArr=finalAvailRecs;
    this.recordsUserOptsArr=finalAvailRecs;
  }
//////////////////////////////////////////////////////////////////////////////////////
  toggleBUDB(BUDBisC:boolean){ this.logger.info('[Modal|firstRun|toggleBUDB] ('+BUDBisC+')...');
    if(!BUDBisC){
      this.logger.info('[TOGGLE BUDB] -> ON/CHECKED...');
      if(!this.buDBChecked){this.buDBChecked=true};
      if(!this.restoreBUDBCB.checked){this.restoreBUDBCB.checked=true};
      if(this.startFreshChecked){this.startFreshChecked=false};
      if(this.startFreshCB.checked){this.startFreshCB.checked=false};
    }else if(BUDBisC){
      this.logger.info('[TOGGLE BUDB] -> OFF/UNCHECKED...');
      if(this.buDBChecked){this.buDBChecked=false};
      if(this.restoreBUDBCB.checked){this.restoreBUDBCB.checked=false};
    };
    this.doPrevNextCheck();
  };
//////////////////////////////////////////////////////////////////////////////////////
  toggleStartFresh(FreshisC:boolean){ this.logger.info('[Modal|firstRun|toggleStartFresh] ('+FreshisC+')...');
    if(!FreshisC){
      this.logger.info('[TOGGLE FreshStart] -> ON/CHECKED...');
      if(!this.startFreshChecked){this.startFreshChecked=true};
      if(!this.startFreshCB.checked){this.startFreshCB.checked=true};
      if(this.buDBChecked){this.buDBChecked=false};
      if(this.restoreBUDBCB.checked){this.restoreBUDBCB.checked=false};
    }else if(FreshisC){
      this.logger.info('[TOGGLE FreshStart] -> OFF/UNCHECKED...');
      if(this.startFreshChecked){this.startFreshChecked=false};
      if(this.startFreshCB.checked){this.startFreshCB.checked=false};
    };
    this.doPrevNextCheck();
  }
//////////////////////////////////////////////////////////////////////////////////////
  showMoreOptions(tf:boolean) { this.logger.info('[Modal|FirstRun|showMoreOptions] ('+tf.toString()+')...');
    this.showMoreOpts=tf;
    tf?this.selectDataScope='moreopts':this.selectDataScope='all';
  }
//////////////////////////////////////////////////////////////////////////////////////
  recordMOToggleChange(i:number,recEP:any) { this.logger.info('[Modal|FirstRun|recordMOToggleChange] ('+i+','+recEP+')...');
    this.recordsUserOptsArr[i].checked?this.recordsUserOptsArr[i].checked=false:this.recordsUserOptsArr[i].checked=true;
  }
//////////////////////////////////////////////////////////////////////////////////////
  recordMORangeChange(i:number,recEP:any) { this.logger.info('[Modal|FirstRun|recordMORangeChange] ('+i+','+recEP+')...');
    const newVal:number=parseInt($('.records-range.'+recEP).prop('value'));
    this.recordsUserOptsArr[i].value=newVal;
  }
//////////////////////////////////////////////////////////////////////////////////////
  toggleAlertM(event:any,mN:string) { this.logger.info('[Modal|FirstRun|toggleAlertM] ('+mN+')...');event.stopPropagation();
    this.finalModalData.alertOpts.alertMethods.value[mN]?this.finalModalData.alertOpts.alertMethods.value[mN]=false:this.finalModalData.alertOpts.alertMethods.value[mN]=true;
  }
  //////////////////////////////////////////////////////////////////////////////////////
  toggleAlertE(event:any,eN:string) { this.logger.info('[Modal|FirstRun|toggleAlertE] ('+eN+')...');event.stopPropagation();
    this.finalModalData.alertOpts.alertEvents.value[eN]?this.finalModalData.alertOpts.alertEvents.value[eN]=false:this.finalModalData.alertOpts.alertEvents.value[eN]=true;
  }
//////////////////////////////////////////////////////////////////////////////////////
  clearDLProgress() { this.logger.info('[Modal|FirstRun|clearDLProgress] ()...');
    this.nowDataTarget='';
    const dlProgNumArr:string[]=['thisDataValue','thisDataMax','getThisPBar','getAllPBar','getAllPerc','getAllCount','getAllTotal'];
    for(const thisProgVal of dlProgNumArr){this[thisProgVal]=0}
  }
//////////////////////////////////////////////////////////////////////////////////////
  rerunDLProcess() { this.logger.info('[Modal|FirstRun|rerunDLProcess] (Listening)...');
    const rrSub=this.evServ.subscribe('setAuthGVarsDone',()=>{
      this.logger.info('[Modal|FirstRun|rerunDLProcess|setAuthGVarsDone] (EVENT PUBLISHED) - Rerunning DL Process...');
      rrSub.unsubscribe();this.startDownloadProcess()
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  async startDownloadProcess() { this.logger.info('[Modal|FirstRun|startDownloadProcess] ()...');
    if(this.dlDidComplete){this.logger.info('[Modal|firstRun|startDownloadProcess] (STOP!) this.dlDidComplete=true | Preventing RERUN - return.');return};
    const myAniCSS=(jqEle:any,animName:string)=>new Promise((resolve)=>{const animClassStr='animate__animated animate__'+animName+' animate__faster';$(jqEle).addClass(animClassStr).on('animationend',()=>{$(jqEle).removeClass(animClassStr);resolve('done')})});
    let dlRecListArr:any[]=[];this.selectDataScope==='all'?dlRecListArr=this.recordsDefaultOpsArr:dlRecListArr=this.recordsUserOptsArr;
    dlRecListArr=dlRecListArr.filter(x=>!x['disabled']&&(x['checked']&&x['value']>0));
    let dlMyListArr:any[]=this.allMyEPDataArr;
    dlMyListArr=dlMyListArr.filter(x=>x['count']>0&&!frResMyCombo.includes(x['name'].charAt(0).toUpperCase()+x['name'].slice(1)));
    let dlRecTotalNoRecords:number=(sumBy(dlRecListArr,'value'))+(sumBy(dlMyListArr,'count'));
    this.getAllTotal=dlRecListArr.length+dlMyListArr.length;
    let dlRecCount:number=0;
    this.logger.info('[Modal|FirstRun|startDownloadProcess] ▶️ (RecordsDL) STARTED:');
    this.logger.info(' - Scope = "'+this.selectDataScope.toUpperCase()+'"');
    this.logger.info(' - EndPs = '+ dlRecListArr.length+' (Res) + '+dlMyListArr.length+' (My) = '+this.getAllTotal+' (Total)');
    myAniCSS('.dlprogress-subheader-wrapper','zoomIn');
// DOWNLOAD - Resources ------------------------------------------------------------
    const startDLResources=()=>{
      this.dloadInProgress=true;this.showMoreOpts=false;this.dlBoxInProgress=true;this.dlBoxError=false;this.dlBoxSuccess=false;
      let allTSArr:any[]=[];
      this.evServ.subscribe('frDLResItems',async thisRecRespData=>{
        switch(thisRecRespData.stage) {
          case 'error':
            this.dlErrorCount++;this.clearDLProgress();this.dlBoxInProgress=false;this.dlBoxError=true;this.dlBoxSuccess=false;
            let has401:boolean;thisRecRespData.error[0].statusCode===401?has401=true:has401=false;
            const stopDueErr=async()=>{this.evServ.destroy('frDLResItems'); this.evServ.destroy('frDLMyItems');const{value}=await Dialog.confirm({title:'Download Error',message:'Sheriff failed to download core data it needs to complete setup. Check your connection to the internet and device permissions and try again.'});if(value||!value){App.exitApp()}};
            if(has401){if(this.dlErrorCount<2){this.rerunDLProcess;setTimeout(()=>{this.deputy.doRefreshToken(this.deputy.Client.auth)},500)}
            else{stopDueErr()}}else{stopDueErr()};
            break;
          case 'update':this.thisDataValue=thisRecRespData.thisDataValue;this.getThisPBar=thisRecRespData.getThisPBar;break;
          case 'end':
            let baseRecRespData:any=thisRecRespData.data;
            if(frResMyCombo.includes(thisRecRespData.recEPName)){
              this.logger.info('[Modal|FR|Dl] - '+thisRecRespData.recEPName+' [FOUND] in "frResMyCombo" Array - Checking for Additional "My" Items...');
              const resDIds:any[]=baseRecRespData.map(o=>o.Id);let myDArr:any[]=[],myDIds:any[]=[];
              const mMAvail:any[]=this.allMyEPDataArr.filter(mO=>mO.name===String(thisRecRespData.recEPName.toLowerCase()));
              mMAvail.length>0&&mMAvail[0].count>0?myDArr=mMAvail[0].data:myDArr=[];
              if(myDArr.length>0){myDIds=myDArr.map(o=>o.Id);
                for(let i=0;i<myDIds.length;i++){
                  if(!resDIds.includes(myDIds[i])){baseRecRespData.push(myDArr[i]);
                  this.logger.info('[Modal|FR|DL] ➕ Added (My) Item #'+myDIds[i]+' to '+thisRecRespData.recEPName)}
                  else{this.logger.info('[Modal|FR|DL] Skipping Pre-existing (My) Item.')}
                };
              };
              if(thisRecRespData.recEPName==='Timesheet'){allTSArr=baseRecRespData};
            };
            let insDBDataRes:boolean=await this.sqlServ.insDPTblSet(thisRecRespData.recEPName,baseRecRespData);
            let insResSym:string;insDBDataRes?insResSym='🟢':insResSym='🔴';
            this.logger.info('[Modal|firstRun|startDownloadProcess] 📓 (Records) RESOURCE | 🔀INSERT >>> '+thisRecRespData.recEPName+' '+insResSym);
            dlRecCount++;dlRecTotalNoRecords-=thisRecRespData.records;
            if(dlRecCount<dlRecListArr.length){
              this.getAllPBar=(((dlRecCount/this.getAllTotal)+Number.EPSILON)*100)/100;this.getAllPerc=Math.round((dlRecCount/this.getAllTotal)*100);this.getAllCount=dlRecCount;
              this.nowDataTarget=dlRecListArr[dlRecCount].ep.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
              this.logger.info('[Modal|FirstRun|startDownloadProcess] 📓 (Records) RESOURCE | 🔽DOWNLOAD >>> '+dlRecListArr[dlRecCount].ep+'...');
              if(dlRecListArr[dlRecCount].ep!=='Roster'){
                this.thisDataValue=0;this.getThisPBar=0;this.thisDataMax=dlRecListArr[dlRecCount].value;
                this.deputy.frDLResItems(dlRecCount+1,this.getAllTotal,dlRecListArr[dlRecCount].ep,dlRecListArr[dlRecCount].max,dlRecListArr[dlRecCount].value);
              }else{
                let rosArr:any[]=[],ttlRosRecs:number=0;this.thisDataMax=0;this.thisDataValue=0;this.getThisPBar=0;ttlRosRecs=allTSArr.length;this.thisDataMax=ttlRosRecs;
                for(let i=0;i<allTSArr.length;i++){const tsRId:any=allTSArr[i]['Roster'];
                  if(tsRId!==null&&tsRId!==0){
                    try{const{status,data,error}=await this.shttp.sendRequest(this.deputy.Client.apiUrl+'supervise/roster/'+tsRId,{method:'get',responseType:'json'});
                    if(!error&&status===200){rosArr.push(data)}}catch(err){console.log(JSON.stringify(err))};
                  };
                  const calcThisPBar=(i/ttlRosRecs).toFixed(2);
                  this.evServ.publish('frDLResItems',{stage:'update',thisDataValue:i,getThisPBar:calcThisPBar});
                };
                this.evServ.publish('frDLResItems',{stage:'end',recEPName:'Roster',records:rosArr.length,data:rosArr});
                break;
              }
            }else{this.nowDataTarget='';this.getAllPBar=(((dlRecCount/this.getAllTotal)+Number.EPSILON)*100)/100;this.getAllPerc=Math.round((dlRecCount/this.getAllTotal)*100);this.getAllCount=dlRecCount;this.evServ.destroy('frDLResItems');startDLMy();break}
        }
      });
      this.nowDataTarget=dlRecListArr[dlRecCount].ep.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');this.thisDataValue=0;this.thisDataMax=dlRecListArr[dlRecCount].value;
      this.logger.info('[Modal|FirstRun|startDownloadProcess] 📓 (Records) RESOURCE | 🔽DOWNLOAD >>> '+dlRecListArr[dlRecCount].ep+'...');
      this.deputy.frDLResItems(dlRecCount+1,this.getAllTotal,dlRecListArr[dlRecCount].ep,dlRecListArr[dlRecCount].max,dlRecListArr[dlRecCount].value);
    }
// DOWNLOAD - My ------------------------------------------------------------------
    const startDLMy=async()=>{
      const finishMy=()=>{this.logger.info('[Modal|firstRun|DL] 📓 (Records) OTHER MY | ✅ DOWNLOAD >>> '+ttlOtherMyRecs+' Remaining | FINISHED.');this.nowDataTarget='Completed';this.thisDataMax=-1;this.thisDataValue=-1;this.getThisPBar=1;this.getAllPBar=1;this.getAllCount=dlRecCount;this.getAllPerc=100;this.dlMyRunning=false;doDLCompleted(false)};
      const ttlOtherMyRecs:number=dlMyListArr.length;let orsMyDoneCount:number=0;
      if(ttlOtherMyRecs>0){ // any of colleague,leave||notification||unavail
        this.logger.info('[Modal|firstRun|DL] 📓 (Records) OTHER MY | FOUND '+dlMyListArr.length+' >>> Processing...');
        for(let i=0;i<dlMyListArr.length;i++){
          const myEPO:any=dlMyListArr[i];const mName:string=myEPO.name;const mCount:number=myEPO.count;const mData:any=myEPO.data;
          this.logger.info('[Modal|firstRun|DL] 📓 (Records) OTHER MY | Starting "'+mName+'" ('+i+'/'+ttlOtherMyRecs+') >>> '+mCount+' Records...');
          if(mName==='colleague'){
            if(!myEPO.error&&myEPO.type==='array'){
              this.logger.info('[Modal|firstRun|DL] 📓 (Records) OTHER MY | colleague | FOUND ['+mCount+'] 🧑s');
              this.nowDataTarget='Colleague';this.thisDataValue=0;this.thisDataMax=mCount;this.getThisPBar=0;
              let pplLocalImgArr:any[]=[];
              for(let i=0;i<mData.length;i++){let rawColO:any=mData[i];
                if(rawColO.hasOwnProperty('Photo')&&rawColO.Photo.length>8){
                  let finalN:string;let rawN:string=rawColO.Photo.split('?')[0].split('/')[rawColO.Photo.split('?')[0].split('/').length-1];
                  if(rawN==='avatar'){finalN='avatar'+String(rawColO.EmpId)}else{finalN='avatar'+String(rawColO.EmpId)+'.'+rawN.split('.')[1]};
                  const{result,uri,size,mtime}=await this.fsServ.dlImage4SQLite(String(rawColO.Photo),finalN);
                  if(result){
                    const sLIRes:boolean=await this.sqlServ.setLocalImg(finalN,uri,size,mtime);
                    if(sLIRes){this.convImgs.push(uri);rawColO.Photo=uri;pplLocalImgArr.push(rawColO)}
                    else{this.convImgs.push(rawColO.Photo);pplLocalImgArr.push(rawColO)}
                  }else{rawColO.Photo;pplLocalImgArr.push(rawColO)}
                }else{rawColO.Photo;pplLocalImgArr.push(rawColO)};
                this.thisDataValue=Number(i+1);
                this.getThisPBar=(((this.thisDataValue/mCount)+Number.EPSILON)*100)/100;
              };
              let insDBDataRes:boolean=await this.sqlServ.insDPTblSet(mName,pplLocalImgArr);let insResSym:string;insDBDataRes?insResSym='🟢':insResSym='🔴';
              this.logger.info('[Modal|firstRun|DL] 📓 (Records) MY | 🔀INSERT🧑 >>> '+mName+' SET '+insResSym);
              orsMyDoneCount++;dlRecCount++;this.getThisPBar=1;dlRecTotalNoRecords-=mCount;
              this.getAllPerc=Math.round((dlRecCount/this.getAllTotal)*100);
              this.getAllPBar=(((dlRecCount/this.getAllTotal)+Number.EPSILON)*100)/100;
            }else{
              this.nowDataTarget='Skipped';this.thisDataValue=-1;this.thisDataMax=-1;this.getThisPBar=1;this.getAllTotal--;
              this.getAllPerc=Math.round((dlRecCount/this.getAllTotal)*100);
              this.getAllPBar=(((dlRecCount/this.getAllTotal)+Number.EPSILON)*100)/100;
              this.logger.info('[Modal|firstRun|DL] 📓 (Records) OTHER MY | ❌ '+mName+' Obj error=true||type!==Array');
            }
          }else if(mName==='leave'||'notification'||'unavail'){
            if(!myEPO.error&&myEPO.type==='array'){
              let myI:string;mName==='name'?myI='🤷':mName==='leave'?myI='🏝️':myI='🔔';this.logger.info('[Modal|firstRun|DL] 📓 (Records) OTHER MY | '+mName+' | FOUND ['+mCount+'] '+myI+'s');
              this.nowDataTarget=mName.charAt(0).toUpperCase()+mName.slice(1);this.thisDataValue=0;this.thisDataMax=mCount;this.getThisPBar=0;
              let insDBDataRes:boolean=await this.sqlServ.insDPTblSet(mName,mData);
              let insResSym:string;insDBDataRes?insResSym='🟢':insResSym='🔴';
              this.logger.info('[Modal|firstRun|DL] 📓 (Records) MY | 🔀INSERT'+myI+' >>> '+mName+' SET '+insResSym);
              this.thisDataValue=mCount;this.getThisPBar=1;
              orsMyDoneCount++;dlRecCount++;this.getThisPBar=1;dlRecTotalNoRecords-=mCount;
              this.getAllPerc=Math.round((dlRecCount/this.getAllTotal)*100);
              this.getAllPBar=(((dlRecCount/this.getAllTotal)+Number.EPSILON)*100)/100;
            }else{
              this.nowDataTarget='Skipped';this.thisDataValue=-1;this.thisDataMax=-1;this.getThisPBar=1;this.getAllTotal--;
              this.getAllPerc=Math.round((dlRecCount/this.getAllTotal)*100);
              this.getAllPBar=(((dlRecCount/this.getAllTotal)+Number.EPSILON)*100)/100;
              this.logger.info('[Modal|firstRun|DL] 📓 (Records) OTHER MY | ❌ '+mName+' Obj error=true||type!==Array');
            }
          }
        };
        finishMy();
      }else{finishMy()}
    };
// DOWNLOAD - Finished ---------------------------------------------------------------
    const doDLCompleted=async(impBU:boolean)=>{
      this.finalModalData.dlDone=true;this.dlDidComplete=true;this.dloadInProgress=false;this.dlBoxInProgress=false;this.dlBoxError=false;
      if(!impBU){
        this.nowDataTarget='';this.thisDataValue=0;this.thisDataMax=0;this.getAllPBar=1;this.getAllPerc=100;this.getAllCount=this.getAllTotal;this.dlBoxSuccess=true;this.dlMyRunning=false;
        this.dbImportDone=false;this.finalModalData.dbImported=false;
        $('#firstrun-download-progress-bar-perc-overlay').css('color','var(--ion-color-success)');
        $('.frpbar').css('--progress-background','var(--ion-color-success)');
        $('.xoy').css('color', 'var(--ion-color-success)');
        this.evServ.subscribe('dbbuBlob',blob=>{this.evServ.destroy('dbbuBlob');
          this.evServ.subscribe('dbbuULProg',ulD=>{
            if(ulD.event==='successData'){this.evServ.destroy('dbbuULProg');this.logger.info('[firstRun|uploadDBBU] (SUCCESS) - Uploaded DBBU file to FireStorage')};
            if(ulD.event==='errorData'){this.evServ.destroy('dbbuULProg');this.logger.info('[firstRun|uploadDBBU] (ERROR) - Failed to Upload DBBU file to FireStorage')};
          });
          this.fireServ.uploadFSDBBU(blob);
        });
        this.fsServ.getFireDBBUFile(this.deputy.uUK);
      }else{
        this.dbImportDone=true;this.finalModalData.dbImported=true;this.showMoreOpts=false;this.dlBoxSuccess=false;
        const dbHasSett:boolean=await this.sqlServ.hasSettings();
        if(dbHasSett){const getSettRes:any=await this.sqlServ.getSettings();
          if(getSettRes.result){const settObj:any=getSettRes.data;
            if(settObj.hasOwnProperty('alerts')&&settObj.alerts.hasOwnProperty('options')){
              this.logger.info('[firstRun|RestoreSettingsObj] (🟢SUCCESS) - Imported Settings Found in UDB');
              this.finalModalData.alertOpts=settObj.alerts.options;
            }
          }
        }
      };
      const dlDoneCalPermStatus:boolean=await this.calServ.checkCalPerms();
      this.slideWithNav.lockSwipes(false);
      setTimeout(()=>{
        this.slideWithNav.slideTo(2,500,true);
        if(!this.usingDefaults&&this.finalModalData.alertOpts.alertMethods.value.calendar&&!dlDoneCalPermStatus){setTimeout(async()=>{this.calServ.reqCalPerms()},1500)};
      },1000)
    };
  // DOWNLOAD - Start -----------------------------------------------------------------
    this.evServ.subscribe('preDLChecks',didImport=>{
      this.evServ.destroy('preDLChecks');
      this.logger.info('[Modal|firstRun|StartDl|preDLChecks] (didImport?): '+didImport);
      if(didImport){this.dbImportDone=true;doDLCompleted(true)}else{this.dbImportDone=false;startDLResources()};
      this.evServ.subscribe('dlConvAvasFinished',async avaDLRes=>{
        if(avaDLRes.result){
          let deetAvaO:any={me:'',work:''};
          const meAvaStatRes:any=await Filesystem.stat({path:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/meAvatar'});
          if(meAvaStatRes){
            const meUriRes:string=Capacitor.convertFileSrc(meAvaStatRes.uri);
            const meAvaLIRes:boolean=await this.sqlServ.setLocalImg('meAvatar',meUriRes,meAvaStatRes.size,meAvaStatRes.mtime);
            if(meAvaLIRes){this.convImgs.push(meUriRes);deetAvaO.me=meUriRes;this.dS.setAvas(deetAvaO);this.storeServ.setItem(this.deputy.uUK+'meAvatar',deetAvaO.me)}else{this.logger.info('[Modal|frModal|DL|AvaConv] Failed to Insert meAvatar >>> SQLite.')}
          }else{this.logger.info('[Modal|frModal|DL|AvaConv] Failed to Stat meAvatar File - Skipped SQLite Insert.')};
          const workAvaStatRes:any=await Filesystem.stat({path:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/workAvatar'});
          if(workAvaStatRes){
            const workUriRes:string=Capacitor.convertFileSrc(workAvaStatRes.uri);
            const workAvaLIRes:boolean=await this.sqlServ.setLocalImg('workAvatar',workUriRes,workAvaStatRes.size,workAvaStatRes.mtime);
            if(workAvaLIRes){this.convImgs.push(workUriRes);deetAvaO.work=workUriRes;this.dS.setAvas(deetAvaO);this.storeServ.setItem(this.deputy.uUK+'workAvatar',deetAvaO.work)}else{this.logger.info('[Modal|frModal|DL|AvaConv] Failed to Insert workAvatar >>> SQLite.')}
          }else{this.logger.info('[Modal|frModal|DL|AvaConv] Failed to Stat workAvatar File - Skipped SQLite Insert.')}
        }else{this.logger.info('[Modal|frModal|DL|AvaConv] Failed to DL/Convert Me/Work Avas - Skipping SQLite Inserts.')}
      });
      this.deputy.dlConvertMeWorkAvas();
    });
    this.slideWithNav.lockSwipes(true);
    if(this.noBackupWillFail&&this.mustRestoreStatus==='success'){
      this.evServ.publish('preDLChecks',true)
    }else{this.initDB(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  useDefaults() { this.logger.info('[Modal|firstRun|restoreBUStart] ()...');
    this.doShowPager=false;this.lockPrev=true;this.lockNext=true;this.usingDefaults=true;
    this.evServ.subscribe('backupCheckIsDone',()=>{
      if(this.hasBUDB){this.restoreBUStart()}else{this.freshStartDLStart('all')};
      this.evServ.subscribe('defaultAutoFinish',async()=>{
        if(this.finalModalData.alertOpts.alertMethods.value.calendar){
          const hasCalPerms:boolean=await this.calServ.checkCalPerms();
          if(!hasCalPerms){
            const calPResSub=this.evServ.subscribe('myAppStateActive',tf=>{if(tf){setTimeout(()=>{calPResSub.unsubscribe();this.firstRunCompleted()},500)}});
            setTimeout(()=>{this.calServ.reqCalPerms()},500);
          }else{this.firstRunCompleted()}
        }else{this.firstRunCompleted()}
      });  
    });
    this.slideWithNav.slideNext(250,true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  restoreBUStart() { this.logger.info('[Modal|firstRun|restoreBUStart] ()...');
    this.showMoreOpts=false;
    if(this.startFreshChecked){this.startFreshChecked=false};
    if(!this.hasBUDB){this.hasBUDB=true};
    if(!this.buDBChecked){this.buDBChecked=true};
    this.selectDataScope='all';
    this.startDownloadProcess();
  }
//////////////////////////////////////////////////////////////////////////////////////
  freshStartDLStart(fsMode:string) { this.logger.info('[Modal|firstRun|freshStartDLStart] ('+fsMode+')...');
    this.showMoreOpts=false;
    if(this.buDBChecked){this.buDBChecked=false};
    if(!this.startFreshChecked){this.startFreshChecked=true};
    this.selectDataScope=fsMode;
    this.startDownloadProcess();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initDB(mustImport:boolean) { this.logger.info('[Modal|firstRun|initDB] ()...');
    const udbName:string=this.deputy.uUK+'db';
    const doInit=async(buImport:boolean)=>{
      this.logger.info('[firstRun|initDB->SQLServ] Running createUserDBConn('+udbName+','+buImport+') @ SQLiteService.');
      this.evServ.subscribe('uDBReady',isReady=>{
        if(isReady===true){this.loadCtrl.dismiss();this.evServ.publish('preDLChecks',buImport)}
        else{Dialog.alert({title:'Database Error',message:'Check you have granted (ALLOW) Sheriff file-system permissions and try again.',buttonTitle:'OK'})}
      });
      let dbA:string;buImport?dbA='🔽𝗜𝗠𝗣𝗢𝗥':dbA='▶️𝗖𝗥𝗘𝗔';
      const dbInitLoader=await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:dbA+'𝗧𝗜𝗡𝗚 𝖣𝖺𝗍𝖺𝖻𝖺𝗌𝖾'});
      await dbInitLoader.present();
      this.sqlServ.createUserDBConn(udbName,buImport);
    };
    if(this.hasBUDB&&this.buDBChecked&&!this.startFreshChecked){
      this.evServ.subscribe('dbCopyCheck',cR=>{this.evServ.destroy('dbCopyCheck');
        if(mustImport){if(cR){this.sqlServ.createUserDBConn(udbName,true)}else{this.evServ.publish('uDBReady',false)}}
        else{doInit(cR)}
      });
      this.cpBuDb2App()
    }else if(!this.buDBChecked&&this.startFreshChecked){doInit(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async cpBuDb2App() { this.logger.info('[Modal|firstRun|copyCheckDBFile] ()...');
    const appDBDirPath:string='/data/data/dev.zer0ne.sheriff/databases';
    if(!(await this.fsServ.stat(null,appDBDirPath)).result){this.fsServ.mkdir(null,appDBDirPath)};
    this.fsServ.copyByPath(this.buDBUri,appDBDirPath+'/'+this.deputy.uUK+'dbSQLite.db');
    let toC=0;const sizeCheckLoop=setInterval(async()=>{toC++;
      const isCopiedRes=await this.fsServ.stat(null,appDBDirPath+'/'+this.deputy.uUK+'dbSQLite.db');
      if(isCopiedRes.result){if(isCopiedRes.data.size===this.buDBSize){clearInterval(sizeCheckLoop);this.evServ.publish('dbCopyCheck',true)}}
      else{clearInterval(sizeCheckLoop);this.evServ.publish('dbCopyCheck',false)};
      if(toC===20){clearInterval(sizeCheckLoop);this.evServ.publish('dbCopyCheck',false)}
    },250);
  }
//////////////////////////////////////////////////////////////////////////////////////
  doMustImport(){ this.logger.info('[Modal|firstRun|doMustImport] ()...');
    this.evServ.subscribe('uDBReady',async isReady=>{this.evServ.destroy('uDBReady');
      if(isReady){
        this.mustRestoreStatus='loaded';
        const getWPRes:any[]=await this.sqlServ.getAllCompanies();
        if(getWPRes.length>0){
          this.forceRestoreWPArr=getWPRes;
          const selByPortNo:any=minBy(getWPRes,'Portfolio');
          selByPortNo.Portfolio>0?this.forceRestoreWP=selByPortNo:this.forceRestoreWP=getWPRes[0];
          this.wpNoOf=1;this.frWorkplaceId=this.forceRestoreWP.Id;
          if(this.forceRestoreWP.TradingName&&!this.forceRestoreWP.CompanyName){this.forceRestoreWPName=this.forceRestoreWP.TradingName}
          else if(!this.forceRestoreWP.TradingName&&this.forceRestoreWP.CompanyName){this.forceRestoreWPName=this.forceRestoreWP.CompanyName}
          else if(this.forceRestoreWP.TradingName&&this.forceRestoreWP.CompanyName){this.forceRestoreWP.TradingName.length>=this.forceRestoreWP.CompanyName.length?this.forceRestoreWPName=this.forceRestoreWP.TradingName:this.forceRestoreWPName=this.forceRestoreWP.CompanyName}
          else{this.forceRestoreWPName='Unknown Company'};
          this.mustRestoreStatus='success';
          setTimeout(()=>{this.startDownloadProcess()},500);
        }else{this.mustRestoreStatus='failed'}
      }else{this.mustRestoreStatus='failed'}
    });
    this.initDB(true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  niceBytes(bytes:number,decimals=2){if(bytes===0) return 'empty';const k=1024;const dm=decimals<0?0:decimals;const sizes=['Bytes','kB','MB','GB','TB','PB','EB','ZB','YB'];const i=Math.floor(Math.log(bytes)/Math.log(k));return parseFloat((bytes/Math.pow(k,i)).toFixed(dm))+' '+sizes[i]}
//////////////////////////////////////////////////////////////////////////////////////
  async checkAppFS() { this.logger.info('[Modal|firstRun|checkAppFS] ()...');
    if(!this.checkFSAndBUOnce){
      const doDLBUDB=async()=>{
        const checkFireBULoader=await this.loadCtrl.create({spinner:'dots',cssClass:['sheriff-loader-class','fr-backupcheck-loader'],message:'𝘓𝘰𝘢𝘥𝘪𝘯𝘨 🗄️𝗥𝗘𝗖𝗢𝗥𝗗𝗦 𝖣𝖺𝗍𝖺'});
        await checkFireBULoader.present();
        this.evServ.subscribe('checkFSDBBU',async checkRes=>{this.evServ.destroy('checkFSDBBU');
          if(checkRes.result){
            const buMeta:any=checkRes.data.meta;
            this.evServ.subscribe('dlFSDBBU',async dlRes=>{this.evServ.destroy('dlFSDBBU');
              if(dlRes.result){this.hasBUDB=true;this.buDBUri=dlRes.uri;this.buDBNiceFName='CloudBackup.db';this.buDBSize=buMeta.size;this.buDBFSize=this.niceBytes(buMeta.size);
                const buDate:Date=new Date(buMeta.updated);
                this.buDBModDate=this.dT.format(buDate,'d MMM yyyy h:mmaaa');this.buDBModAgo=this.dT.fDtN(buDate).replace('about','≈');
                this.logger.info('[firstRun|checkAppFS] Fire BUDB [FOUND!] (Last Mod: '+this.buDBModDate+' - '+this.buDBModAgo+')...');
                checkFireBULoader.dismiss().then(()=>{
                  this.backupCheckIsDone=true;
                  this.evServ.publish('backupCheckIsDone',true);
                  if(this.noBackupWillFail){this.doMustImport()};
                });
              }else{this.logger.info('[firstRun|checkAppFS] Download Fire BUDB Failed.');
                this.hasBUDB=false;
                checkFireBULoader.dismiss().then(async()=>{
                  this.backupCheckIsDone=true;
                  this.evServ.publish('backupCheckIsDone',true);
                  if(this.noBackupWillFail){
                    const{value}=await Dialog.confirm({title:'No Backup Found',message:'- No Cloud Backup Found\n- No Workplaces Detected\nSheriff Setup cannot continue and will now EXIT'});
                    if(value||!value){App.exitApp()};  
                  };
                });
              }
            });
            this.fireServ.downloadFSDBBU(checkRes.data.dlurl);
          }else{this.logger.info('[firstRun|checkAppFS] No Fire BUDB Found.');
            this.hasBUDB=false;
            checkFireBULoader.dismiss().then(async()=>{
              this.backupCheckIsDone=true;
              this.evServ.publish('backupCheckIsDone',true);
              if(this.noBackupWillFail){
                const{value}=await Dialog.confirm({title:'No Backup Found',message:'- No Cloud Backup Found\n- No Workplaces Detected\nSheriff Setup cannot continue and will now EXIT'});
                if(value||!value){App.exitApp()};
              };
            });
          }
        });
        this.fireServ.checkFSDBBU();
      };
      const doDirCheck=async()=>{
        const hasBaseDataDir=await this.fsServ.stat(this.fsServ.appFS,'Sheriff');
        if(!hasBaseDataDir.result){let hasBUDir:boolean=false;
          this.logger.info('[firstRun|checkAppFS] Sheriff Base Dir Missing - Creating FS...');
          const assetsDone:any=await this.fsServ.mkdir(this.fsServ.appFS,'Sheriff/assets');
          if(assetsDone.result){this.logger.info('[firstRun|checkAppFS] Sheriff/assets - OK.')}
          else{this.logger.info('[firstRun|checkAppFS] Sheriff/assets - FAILED.')};
          const backupsDone:any=await this.fsServ.mkdir(this.fsServ.appFS,'Sheriff/backups');
          if(backupsDone.result){hasBUDir=true;this.logger.info('[firstRun|checkAppFS] Sheriff/backups - OK.')}
          else{hasBUDir=false;this.logger.info('[firstRun|checkAppFS] Sheriff/backups - FAILED.')};
          const dbDone:any=await this.fsServ.mkdir(this.fsServ.appFS,'Sheriff/db');
          if(dbDone.result){this.logger.info('[firstRun|checkAppFS] Sheriff/db - OK.')}
          else{this.logger.info('[firstRun|checkAppFS] Sheriff/db - FAILED.')};
          if(hasBUDir){this.logger.info('[firstRun|checkAppFS] SheriffFS BU Dir Created - Checking for BUDB...');doDLBUDB()}
        }else{this.logger.info('[firstRun|checkAppFS] SheriffFS Base Dir Found - Checking for BUDB...');doDLBUDB()}
      };
      this.checkFSAndBUOnce=true;
      if(this.fsServ.fsIsReady){doDirCheck()}
      else{
        this.evServ.subscribe('fsPermsGranted',result=>{if(result){doDirCheck()}});
        setTimeout(()=>{this.fsServ.initFS(this.deputy.uUK)},500)
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  logoutAndSwitch() { this.logger.info('[Modal|FirstRun|exitSheriff] ()...');
    const exitPromptOpts={title:'Logging out',message:'ALL details/data will be cleared - are you sure?',okButtonTitle:'Yes',cancelButtonTitle:'Cancel'};
    Dialog.confirm(exitPromptOpts).then(async wasConfirmed=>{if(wasConfirmed.value){await this.modalController.dismiss('logout')}});
  }
//////////////////////////////////////////////////////////////////////////////////////
  exitSheriff() { this.logger.info('[Modal|FirstRun|exitSheriff] ()...');
    const exitPromptOpts={title:'Exiting Sheriff',message:'You sure now?',okButtonTitle:'Yes',cancelButtonTitle:'Cancel'};
    Dialog.confirm(exitPromptOpts).then(wasConfirmed=>{if(wasConfirmed.value){App.exitApp()}});
  }
//////////////////////////////////////////////////////////////////////////////////////
  async firstRunCompleted() { this.logger.info('[Modal|FirstRun|firstRunCompleted] ()...');
    $('.sheriff-custom-firstload-outter-wrapper').css('display','flex');
    this.finalModalData.dbImported=this.dbImportDone;
    this.finalModalData.didDefaults=this.usingDefaults;
    if(this.finalModalData.alertOpts.alertMethods.value.calendar){
      const calPermsGtd:boolean=await this.calServ.checkCalPerms();
      if(!calPermsGtd){this.finalModalData.alertOpts.alertMethods.value.calendar=false};
      await this.modalController.dismiss(this.finalModalData);
    }else{await this.modalController.dismiss(this.finalModalData)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  slideNext(slideInst:any) { this.logger.info('[Modal|firstRun|slideNext] (⏩)...');
    slideInst.slideNext(500,true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  slidePrev(slideInst:any) { this.logger.info('[Modal|firstRun|slidePrev] (⏪)...');
    slideInst.slidePrev(500,true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async slideDidChange(slideInst:any) { this.logger.info('[Modal|firstRun|slideDidChange] [✔️DID]Change ()...');
    this.thisSlideNo=(await slideInst.getActiveIndex())+1;
    this.logger.info('[Modal|firstRun|slideDidChange] TO... this.thisSlideNo = 🔢'+this.thisSlideNo)+'🔢';
    this.checkSlideConditions();
    this.doPrevNextCheck();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async checkSlideConditions() { this.logger.info('[Modal|firstRun|checkSlideConditions] ()...');
    $('.fr-featimg-wrapper.slide'+String(this.thisSlideNo)).fadeIn(1000);
    let swInst=await this.slideWithNav.getSwiper();let swTStartEv:any,swTEndEv:any;
    if(this.thisSlideNo===3){let swipedir:any,startX:any,startY:any,distX:any,distY:any,threshold:any=150,restraint:any=100,allowedTime:any=300,elapsedTime:any,startTime:any;
      swTStartEv=swInst.on('touchStart',tStartData=>{let stObj:any=tStartData.changedTouches[0];swipedir='none';startX=stObj.pageX;startY=stObj.pageY;startTime=new Date().getTime()});
      swTEndEv=swInst.on('touchEnd',tEndData=>{let eTObj:any=tEndData.changedTouches[0];distX=eTObj.pageX-startX;distY=eTObj.pageY-startY;elapsedTime=new Date().getTime()-startTime;
        if(elapsedTime<=allowedTime){
          if(Math.abs(distX)>=threshold&&Math.abs(distY)<=restraint){swipedir=(distX<0)?'left':'right'}
          else if(Math.abs(distY)>=threshold&&Math.abs(distX)<=restraint){swipedir=(distY<0)?'up':'down'}
        };
        if(swipedir==='left'){this.firstRunCompleted()}
      });
    }else{swInst.off('touchStart',swTStartEv);swInst.off('touchEnd',swTEndEv)};
  }
//////////////////////////////////////////////////////////////////////////////////////
  async doPrevNextCheck():Promise<boolean> { this.logger.info('[Modal|firstRun|doPrevNextCheck] ()...');
    const lockPrev=(tf:boolean)=>{this.slideWithNav.lockSwipeToPrev(tf);this.lockPrev=tf;this.logger.info('[canPREV] - lockSwipeToPrev='+tf+' + this.lockPrev='+tf+'...')};
    const lockNext=(tf:boolean)=>{this.slideWithNav.lockSwipeToNext(tf);this.lockNext=tf;this.logger.info('[canNEXT] - lockSwipeToNext='+tf+' + this.lockNext='+tf+'...')};
    // ----- Slide 1 ---------------------------------
    if(this.thisSlideNo===1){
      lockPrev(true);
      if(this.wpNoOf<1){if(this.noBackupWillFail){lockNext(false)}else{lockNext(true)}}
      else if(this.wpNoOf>=1){if(this.wpOneIsChecked){lockNext(false)}else{lockNext(true)}};
      return Promise.resolve(true);
    // ----- Slide 2 ---------------------------------
    }else if(this.thisSlideNo===2){
      if(this.dlDidComplete){lockPrev(false);lockNext(false);return Promise.resolve(true)}
      else{
        if(this.noBackupWillFail){lockPrev(true);lockNext(true)}else{lockPrev(false);lockNext(true)};
        if(!this.checkFSAndBUOnce){this.checkAppFS()}
        return Promise.resolve(true);
      }
    // ----- Slide 3 ---------------------------------
    }else if(this.thisSlideNo===3){
      this.lockNext=true;
      lockPrev(false);
      if(this.usingDefaults){this.evServ.publish('defaultAutoFinish',true)};
      return Promise.resolve(true);
    }else{this.thisSlideNo=(await this.slideWithNav.getActiveIndex())+1;await this.doPrevNextCheck();return Promise.resolve(true)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async ionSlideEvent(event:any) { this.logger.info('[Modal|firstRun|ionSlideEvent] (event)...');
    if(event.type==='ionSlidesDidLoad'){ this.logger.info('[Modal|firstRun|ionSlideEvent] - [SLIDER LOADED!]');
      $('.fr-records-alreadydone-notice-wrapper').hide();$('.fr-featimg-wrapper').hide();$('.fr-featimg-wrapper.slide1').show();
      this.sliderHasLoaded=true;this.hideSplash();
      this.evServ.subscribe('epTestsDone',()=>{this.evServ.destroy('epTestsDone');
        if(this.wpCheckDone){this.doPrevNextCheck()}
        else{this.evServ.subscribe('wpCheckDone',()=>{this.evServ.destroy('wpCheckDone');this.doPrevNextCheck()})}
      });this.getRecCatObj();
    }else if(event.type==='ionSlideWillChange'){$('.fr-featimg-wrapper').fadeOut(1000);
      let thisOldSlideNo:number,thisNewSlideNo:number,thisSlideDir:string,dirArrow:string;
      thisOldSlideNo=(await this.slideWithNav.getPreviousIndex())+1;thisNewSlideNo=(await this.slideWithNav.getActiveIndex())+1;
      thisOldSlideNo<thisNewSlideNo?thisSlideDir='fwd':thisSlideDir='back';thisSlideDir==='fwd'?dirArrow='Slide '+thisOldSlideNo+' ⏩ Slide '+thisNewSlideNo:dirArrow='Slide '+thisNewSlideNo+' ⏪ Slide '+thisOldSlideNo;
      this.logger.info('[Modal|firstRun|ionSlideEvent] (ionSlideWillChange) [⏱️WILL]Change - '+dirArrow);
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  hideSplash() { this.logger.info('[Auth|hideSplash] ()...');
    StatusBar.setOverlaysWebView({overlay: true}); StatusBar.setBackgroundColor({color:'#00000000'});
    $('#sheriff-auth-networkstatus-wrapper').addClass('adjust-for-auth-toolbar-overlay');
    const myAniCSS = (jqEle, animName) => new Promise((resolve) => { const animClassStr = 'animate__animated animate__' + animName + ' animate__faster'; $(jqEle).addClass(animClassStr); $(jqEle).on('animationend', () => { $(jqEle).removeClass(animClassStr); resolve('done'); }); });
    $('#sheriff-custom-splash-logo-img').removeClass('animate__animated animate__headShake animate__infinite');
    $('#sheriff-custom-splash-titletexttop-wrapper').addClass('animate__animated animate__slideOutUp animate__faster');
    $('#sheriff-custom-splash-zer0ne-wrapper').addClass('animate__animated animate__slideOutDown animate__faster');
    $('.bar-horizontal').addClass('finished');
    $('#sheriff-custom-splash-logo-img').prop('src', '../assets/img/slogo-g.png');
    $('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideInLeft').addClass('animate__slideOutLeft');
    $('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideInRight').addClass('animate__slideOutRight');
    $('#sheriff-custom-splash-wrapper, .sheriff-col.custom-splash-col.middlelogocol').css('background', 'transparent');
    myAniCSS('#sheriff-custom-splash-wrapper', 'fadeOut').then( () => $('#sheriff-custom-splash-wrapper').hide());
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}

