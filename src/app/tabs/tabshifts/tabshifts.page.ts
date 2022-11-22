import { AppUserSettings } from './../../services/appTypes';
import { Keyboard } from '@capacitor/keyboard';
import { Platform, IonInfiniteScroll, IonVirtualScroll, IonSlides, IonContent, IonRefresher, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SyncService } from './../../services/sync.service';
import { DateTimeService } from './../../services/datetime.service';
import { DetailService } from './../../services/detail.service';
import { SQLiteService } from './../../services/sqlite.service';
import { FairworkService } from 'src/app/services/fairwork.service';
import { StorageService } from './../../services/storage.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { EventsService } from './../../services/events.service';
import { DeputyService } from './../../services/deputy.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { StatusBar } from '@capacitor/status-bar';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Dialog } from '@capacitor/dialog';
import { SwiperOptions } from 'swiper';
import { NGXLogger } from 'ngx-logger';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-tabshifts',templateUrl:'./tabshifts.page.html',styleUrls:['./tabshifts.page.scss']})
////////////////////////////////////////////////////////////////////////////////////////
export class TabShiftsPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  @ViewChild(IonInfiniteScroll) iScrollShifts:IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) vScrollShifts:IonVirtualScroll;
  @ViewChild('historyContent',{static:false}) historyContent: IonContent;
  @ViewChild('shiftsSlider',{static:false}) shiftsSlider:IonSlides;
  @ViewChild('shiftsRefresher') shiftsRefresher:IonRefresher;
////////////////////////////////////////////////////////////////////////////////////////
  hasLoaded:boolean=false;
  initDidFinish=false;
  sSChecking:boolean=false;
  doneShiftsIcoSrc:string='./../../assets/img/sheriff-shifts-donelist-ico.png';
  myObj:any=this.dS.myObj;meObj:any=this.dS.meObj;workAreas:any=this.dS.workAreas;workAvatar:string=this.dS.workAva;meAvatar:string=this.dS.meAva;workCode:string=this.dS.workCode;workName:string=this.dS.workName;workColor:string=this.dS.workColor;workPeople:any[]=this.dS.pplArr;incBright:boolean=this.dS.incBright;
  // Refresh
  progCirc:any={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  refresher:any;isRefreshing:boolean=false;refreshProgPerc:number=0;getAllDataPerc:number=0;
  preventRefreshPull:boolean=false;
  // History Scroll
  showTTopBtn:boolean=false;
  scrollingTT:boolean=false;
  // Tokens/Tab/Page 
  dpToken:string;dpRefresh:string;dpDomain:string;dpExpires:string;
  currentPageObj:any;tabKey:string='init';leftAnimBarW:any;sbOverlay:boolean=true;
  dbDataTbl:string='rosters';
  dbHasTable:boolean=this.dS.getUDBTables().includes(this.dbDataTbl);
  // Alerts Status
  alertMethods:any={phone:null,calendar:null,email:null};
  alertEvents:any={shift:null,task:null,tsheets:null};
  // Show Income
  showIncome:boolean=true;
  // Shift DB Items/List
  initRes:any[]=[];
  initList:any[]=[];
  shiftItems:any[]=[];
  shiftListsReady:boolean=false;
  ttlShiftItems:number;
  noShiftItems:boolean;
  batchLimit:number=28;
  batchOffset:number=0;
  batchStart:number=0;
  batchEnd:number=28;
  endOfList:boolean=false;
  orderBy:string='StartTime';orderDir:string='desc';
  // Goto TS Item
  gotoTSId:number=0;
  // Show Done Shift
  doneSId:number=0;
  doneS:any;
  doneSHasTSData:boolean=false;
  doneSTSData:any;
  doneSIsShowing:boolean=false;
  doneSAgoTime:any;
  doneSShowComments:boolean=false;
  doneSShowWarnings:boolean=false;
  // SS CDown
  CDReady:boolean=false;
  sSCD:any=null;
  // Pay Rate
  // Xtra Shifts
  hasXtraShifts:boolean=false;
  xtraShifts:any[]=[];
  xtraIncomeTotal:number;
  // Shift Slider
  apiPeerView:boolean=false;
  sSColleagues:any={sameArea:[],otherArea:[]};
  sSColleagueDayIndex:number=null;
  sSMultiColleagues:any[]=[];
  showingColleague:boolean=false;
  viewColleague:any;
  sSInitComplete:boolean=false;
  sSWeek:any[]=[];
  sSDoneShifts:number=0;
  sSTotalItems:number=0;
  sSDoneHrs:number=0;
  sSRosterHrs:number=0;
  sSRosterIncome:number=0;
  sSDoneIncome:number=0;
  sSExtraShiftCount:number=0;
  sSMissedShiftCount:number=0;
  sSShiftPerformVal:number=this.sSExtraShiftCount-this.sSMissedShiftCount;
  sSHrsPerformVal:number=this.sSDoneHrs-this.sSRosterHrs;
  sSIncomePerformVal:number=this.sSDoneIncome-this.sSRosterIncome;
  indicMatch:any[]=[];
  sSlider:any={sliderHasLoaded:false,slidesItems:[],slidesControls:[],isBeginningSlide:null,isEndSlide:null};
  sSCurrent:number=null;
  sSCurrentIndex:number=null;
  myWeekPagReady:boolean=false;
  sSOptions:SwiperOptions={
    allowSlideNext:true,
    allowSlidePrev:true,
    grabCursor:false,
    loop:false,
    speed:250,
    pagination: false,
    cubeEffect:{shadow:true,slideShadows:true,shadowOffset:18,shadowScale:0.90},
    on:{
      beforeInit:function(){
        const sSwipe=this;
        sSwipe.classNames.push(`${sSwipe.params.containerModifierClass}cube`);
        sSwipe.classNames.push(`${sSwipe.params.containerModifierClass}3d`);
        const overwriteParams={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,resistanceRatio:0,spaceBetween:0,centeredSlides:false,virtualTranslate:true};
        this.params=Object.assign(this.params,overwriteParams);
        this.originalParams=Object.assign(this.originalParams,overwriteParams);
      },
      setTranslate:function(){
        const sSwipe=this;const{$el,$wrapperEl,slides,width:swiperWidth,height:swiperHeight,rtlTranslate:rtl,size:swiperSize}=sSwipe;
        const params=sSwipe.params.cubeEffect;const isHorizontal=sSwipe.isHorizontal();const isVirtual=sSwipe.virtual&&sSwipe.params.virtual.enabled;
        let wrapperRotate=0;let $cubeShadowEl;
        if(params.shadow){
          if(isHorizontal){$cubeShadowEl=$wrapperEl.find('.swiper-cube-shadow');
          if($cubeShadowEl.length===0){$cubeShadowEl=sSwipe.$('<div class="swiper-cube-shadow"></div>');$wrapperEl.append($cubeShadowEl)};$cubeShadowEl.css({height:`${swiperWidth}px`})}
          else{$cubeShadowEl=$el.find('.swiper-cube-shadow');if($cubeShadowEl.length===0){$cubeShadowEl=sSwipe.$('<div class="swiper-cube-shadow"></div>');$el.append($cubeShadowEl)}}
        };
        for(let i=0;i<slides.length;i+=1){
          const $slideEl=slides.eq(i);let slideIndex=i;if(isVirtual){slideIndex=parseInt($slideEl.attr('data-swiper-slide-index'),10)};let slideAngle=slideIndex*90;let round=Math.floor(slideAngle/360);if(rtl){slideAngle=-slideAngle;round=Math.floor(-slideAngle/360)};const progress=Math.max(Math.min($slideEl[0].progress,1),-1);
          let tx=0;let ty=0;let tz=0;
          if(slideIndex%4===0){tx=-round*4*swiperSize;tz=0}
          else if((slideIndex-1)%4===0){tx=0;tz=-round*4*swiperSize}
          else if((slideIndex-2)%4===0){tx=swiperSize+(round*4*swiperSize);tz=swiperSize}
          else if((slideIndex-3)%4===0){tx=-swiperSize;tz=(3*swiperSize)+(swiperSize*4*round)};
          if(rtl){tx=-tx};if(!isHorizontal){ty=tx;tx=0};
          const transform$$1=`rotateX(${isHorizontal?0:-slideAngle}deg) rotateY(${isHorizontal?slideAngle:0}deg) translate3d(${tx}px,${ty}px,${tz}px)`;
          if(progress<=1&&progress>-1){wrapperRotate=(slideIndex*90)+(progress*90);if(rtl)wrapperRotate=(-slideIndex*90)-(progress*90)};
          $slideEl.transform(transform$$1);
          if(params.slideShadows){
            let shadowBefore=isHorizontal?$slideEl.find('.swiper-slide-shadow-left'):$slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter=isHorizontal?$slideEl.find('.swiper-slide-shadow-right'):$slideEl.find('.swiper-slide-shadow-bottom');
            if(shadowBefore.length===0){shadowBefore=sSwipe.$(`<div class="swiper-slide-shadow-${isHorizontal?'left':'top'}"></div>`);$slideEl.append(shadowBefore)};
            if(shadowAfter.length===0){shadowAfter=sSwipe.$(`<div class="swiper-slide-shadow-${isHorizontal?'right':'bottom'}"></div>`);$slideEl.append(shadowAfter)};
            if(shadowBefore.length)shadowBefore[0].style.opacity=Math.max(-progress,0);if(shadowAfter.length) shadowAfter[0].style.opacity=Math.max(progress,0)}
        };
        $wrapperEl.css({'-webkit-transform-origin':`50% 50% -${swiperSize/2}px`,'-moz-transform-origin':`50% 50% -${swiperSize/2}px`,'-ms-transform-origin': `50% 50% -${swiperSize/2}px`,'transform-origin':`50% 50% -${swiperSize/2}px`});
        if(params.shadow){
          if(isHorizontal){$cubeShadowEl.transform(`translate3d(0px,${(swiperWidth/2)+params.shadowOffset}px, ${-swiperWidth/2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`)}
          else{const shadowAngle=Math.abs(wrapperRotate)-(Math.floor(Math.abs(wrapperRotate)/90)*90);const multiplier=1.5-((Math.sin((shadowAngle*2*Math.PI)/360)/2)+(Math.cos((shadowAngle*2*Math.PI)/360)/2));const scale1=params.shadowScale;const scale2=params.shadowScale/multiplier;const offset$$1=params.shadowOffset;$cubeShadowEl.transform(`scale3d(${scale1},1,${scale2}) translate3d(0px,${(swiperHeight/2)+offset$$1}px,${-swiperHeight/2/scale2}px) rotateX(-90deg)`)}
        };
        const zFactor=(sSwipe.browser.isSafari||sSwipe.browser.isUiWebView)?(-swiperSize/2):0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${sSwipe.isHorizontal()?0:wrapperRotate}deg) rotateY(${sSwipe.isHorizontal()?-wrapperRotate:0}deg)`);
      },
      setTransition:function(duration){const sSwipe=this;const{$el,slides}=sSwipe;slides.transition(duration).find('.swiper-slide-shadow-top,.swiper-slide-shadow-right,.swiper-slide-shadow-bottom,.swiper-slide-shadow-left').transition(duration);if(sSwipe.params.cubeEffect.shadow&&!sSwipe.isHorizontal()){$el.find('.swiper-cube-shadow').transition(duration)}
      }
    }
  };
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private plt:Platform,
    private logger:NGXLogger,
    private evServ:EventsService, 
    private storeServ:StorageService,
    private deputy:DeputyService,
    private sqlServ:SQLiteService,
    private syncServ:SyncService,
    private fwServ:FairworkService,
    private dS:DetailService,
    private dT:DateTimeService,
    private router:Router,
    private noteServ:NotificationsService,
    private calServ:CalendarService,
    private navCtrl:NavController,
    private fireServ:FirebaseService
    ){ }  
////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.logger.info('[TabShifts|ngOnInit] ()...'); 
    this.plt.ready().then(async()=>{
      this.evServ.subscribe('alertsStatus',()=>{this.setAlertAndIncomeSettings()});
      this.doInitRefresh('init');
      this.pageEnterAnim();
      this.slideToNextLastShift();
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doInitRefresh(mode) {
    this.logger.info('[TabShifts|doReInitFresh] ('+mode+')...'); 
    this.initFetchData();
    if(mode==='refresh'){
      const uC=(p:number)=>{this.headerProgress('manual','change',p)};
      this.evServ.subscribe('refreshShiftsProg',()=>{this.refreshProgPerc+=20;uC(this.refreshProgPerc)});
      this.doSync(mode);
    }else{this.doSync(mode)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async ionViewWillEnter() {
    this.logger.info('[TabShifts|ionViewWillEnter] ()...');
    StatusBar.setOverlaysWebView({overlay:true});StatusBar.setBackgroundColor({color:'#00000000'});
    this.setAlertAndIncomeSettings();
  }
////////////////////////////////////////////////////////////////////////////////////////
  async ionViewDidEnter() {
    this.logger.info('[TabShifts|ionViewDidEnter] ()...');
    setTimeout(()=>{this.evServ.publish('doPageEnterAnim',null);if($('#sheriff-custom-splash-wrapper').css('display')!=='none'){this.hideSplash()};this.currentPageObj=this.evServ.cPage},300);
    if(this.tabKey!=='init'){this.tabChangeAni(this.tabKey)}
    this.gotoTSId=0;
    const newInsDB:any=await this.storeServ.getObject('newDBInstall');
    if(newInsDB){
      setTimeout(async()=>{
        const{value}=await Dialog.confirm({title:'Confirm New Database',message:'Sheriff installed a backup database. Is everything OK? If NOT, hit the REVERT button below. Otherwise, hit OK to continue using this DB.',okButtonTitle:'👍OK',cancelButtonTitle:'🔙Revert'});
        if(value){this.evServ.showToast('smiley','All G, Just Checking!');this.storeServ.removeItem('newDBInstall')}
        else{this.sqlServ.revertDB()}
      },5000);
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////
  replayLPN() {
    this.logger.info('[TabShifts|replayLPN] ()...');
    this.evServ.publish('iapBubble','replay');
  }
/////////////////////////////////////////////////////////////////////////////////////////
  async doSync(mode) {
    if(mode==='refresh'){this.evServ.destroy('refreshShiftsProg');this.headerProgress('manual','finish',null)};
    const syncResult:any=await this.syncServ.doShiftsSync(mode);
    if(syncResult.xtras.length>0){this.hasXtraShifts=true;this.xtraShifts=syncResult.xtras};
    if(syncResult.changed===true){this.logger.info('[TabShifts|doReInitRefresh] (Sync|Rosters): UPDATED/ADDED ['+syncResult.ids.length+'] Roster/Shift Items.');
    const iArrs:any[]=['initRes','initList','shiftItems'];for(let i=0;i<iArrs.length;i++){this[iArrs[i]]=[]};this.batchOffset=0;this.sSlider.slideItems=[];this.evServ.publish('doInitFetchShiftData',true)}else{this.logger.info('[TabShifts|doReInitRefresh] (Sync|Rosters): NO CHANGES [0]');if(mode==='init'){this.evServ.publish('doInitFetchShiftData',true)}}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async setAlertAndIncomeSettings() { this.logger.info('[TabShifts|setAlertAndIncomeSettings] ()...');
    const getDSSett:AppUserSettings|null=await this.dS.getSettings();
    if(getDSSett!==null){
      const aMs:any=getDSSett.alerts.options.alertMethods.value;
      const aEs:any=getDSSett.alerts.options.alertEvents.value;
      this.alertMethods.phone=aMs.phone;
      this.alertMethods.calendar=aMs.calendar;
      this.alertMethods.email=aMs.email;
      this.alertEvents.shift=aEs.shift;
      this.alertEvents.tsheet=aEs.tsheet;
      this.showIncome=getDSSett.payrates.options.show.value;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async getPay(rosterObj:any):Promise<any> {
    const payRes:any=await this.fwServ.getShiftPay(rosterObj);
    return Promise.resolve(payRes);
  }
////////////////////////////////////////////////////////////////////////////////////////
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
    let lCommCount:number=0;let lWarnCount:number=0;
    if(rawNS.Comment!==''&&rawNS.Comment!==null&&rawNS.Comment!==undefined){niceNS['nComment']=rawNS.Comment;lCommCount++};
    if(rawNS.ConfirmComment!==''&&rawNS.ConfirmComment!==null&&rawNS.ConfirmComment!==undefined){niceNS['nConfirmComment']=rawNS.ConfirmComment;lCommCount++};
    if(rawNS.Warning!==''&&rawNS.Warning!==null&&rawNS.Warning!==undefined){
      if(rawNS.Warning.includes('|')){const warnArr:any[]=rawNS.Warning.split('|');niceNS['nWarning']=warnArr[0];lWarnCount++}
      else{niceNS['nWarning']=rawNS.Warning}
    };
    if(rawNS.WarningOverrideComment!==''&&rawNS.WarningOverrideComment!==null&&rawNS.WarningOverrideComment!==undefined){niceNS['nWarningOR']=rawNS.WarningOverrideComment;lWarnCount++};
    niceNS['nCommCount']=lCommCount;niceNS['nWarnCount']=lWarnCount;
    niceNS['nPublished']=rawNS.Published===-1?null:rawNS.Published===1?true:false;
    niceNS['nOpen']=rawNS.Open===-1?null:rawNS.Open===1?true:false;
    niceNS['nApprovalRequired']=rawNS.ApprovalRequired===-1?null:rawNS.ApprovalRequired===1?true:false;
    niceNS['nConfirmStatus']=rawNS.ConfirmStatus;
    let lnConfirmBy:any;rawNS.ConfirmBy===0?lnConfirmBy=false:lnConfirmBy=this.dT.Dut(rawNS.ConfirmBy);niceNS['nConfirmBy']=lnConfirmBy;
    let lnConfirmTime:any;rawNS.ConfirmTime===0?lnConfirmTime=false:lnConfirmTime=this.dT.Dut(rawNS.ConfirmTime);niceNS['nConfirmTime']=lnConfirmTime;
    niceNS['nSwapStatus']=rawNS.SwapStatus;
    let isPastS:boolean;this.dT.gUT()>rawNS.EndTime?isPastS=true:isPastS=false;
    isPastS?niceNS['nIsFinished']=true:niceNS['nIsFinished']=false;
    if(this.dT.isTW(new Date(rawNS.Date))){
      niceNS['nThisWeek']=true;
      if(rawNS.MatchedByTimesheet>0){
        let gotTS:boolean=null;let doneTSObj:any;const tsId:number=rawNS.MatchedByTimesheet;
        const gotTSRes:any=await this.sqlServ.checkGetSingleTS(tsId);
        if(gotTSRes.result){this.logger.info('[TabShifts|formatShifts] (Get Shift TS < DB) - SUCCESS.');
          gotTS=true;doneTSObj=gotTSRes.data;
        }else{
          this.logger.info('[TabShifts|formatShifts] (Get Shift TS < DB) - FAIL... Trying API...');
          const getTSRes:any=await this.deputy.getSingleTS(tsId);
          if(getTSRes.result){this.logger.info('[TabShifts|formatShifts] (Get New TS < API) - SUCCESS.');
            const newTSOb:any=getTSRes.data[0];gotTS=true;doneTSObj=newTSOb;
            const addObDbRes:any=await this.sqlServ.insertSingleItem('timesheets',newTSOb);
            if(addObDbRes){this.logger.info('[TabShifts|formatShifts] (Add New TS > DB) - SUCCESS.');
              const setSyncRes:boolean=await this.sqlServ.setSync('timesheets');
              if(setSyncRes){this.logger.info('[TabShifts|formatShifts] (Updated TS Sync Date) - SUCCESS.')}
              else{this.logger.info('[TabShifts|formatShifts] (Updated TS Sync Date) - FAIL.')}
            }else{this.logger.info('[TabShifts|formatShifts] (Add New TS > DB) - FAIL.')}
          }else{gotTS=false;this.logger.info('[TabShifts|formatShifts] (Get New TS < API) - FAIL.')}
        };
        if(gotTS){const calcDonePay:any=await this.getPay(doneTSObj);niceNS['nDoneIncomeObj']=calcDonePay;niceNS['nDoneIncome']=calcDonePay.t.toFixed(0)}
        else{niceNS['nDoneIncomeObj']=calcPay;niceNS['nDoneIncome']=calcPay.t.toFixed(0)}
      }else{niceNS['nDoneIncomeObj']={b:0,p:0,t:0};niceNS['nDoneIncome']=0};
      if(isPastS&&rawNS.Published===0){niceNS['nExtraShift']=true;this.sSExtraShiftCount++}else{niceNS['nExtraShift']=false};
      if(isPastS&&rawNS.MatchedByTimesheet===0){niceNS['nMissedShift']=true;this.sSMissedShiftCount++}else{niceNS['nMissedShift']=false};
    }else{niceNS['nThisWeek']=false};
    if(this.workPeople.length>0){
      const pArr:any[]=this.workPeople.filter(p=>p.EmpId===rawNS.Creator);
      if(pArr.length>0){niceNS['nCreatorName']=pArr[0].DisplayName;niceNS['nCreatorAva']=pArr[0].Photo;niceNS['nPublisher']=pArr[0]['FirstName'].charAt(0).toUpperCase()+pArr[0]['LastName'].charAt(0).toUpperCase();niceNS['sFName']=pArr[0]['FirstName']}else{niceNS['nCreatorName']='NK';niceNS['nCreatorAva']='../../../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';niceNS['nPublisher']='-';niceNS['sFName']='-'}
    }else{niceNS['nCreatorName']='NK';niceNS['nCreatorAva']='../../../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';niceNS['nPublisher']='-';niceNS['sFName']='-'}
    niceNS['nCreated']=new Date(rawNS.Created);niceNS['sCreated']=this.dT.format(new Date(rawNS.Created),'d/M H:mm');
    niceNS['nModified']=new Date(rawNS.Modified);niceNS['sModified']=this.dT.format(new Date(rawNS.Modified),'d/M H:mm');
    return Promise.resolve(niceNS);
  }
////////////////////////////////////////////////////////////////////////////////////////
  calHeaderGroups = (record:any,recordIndex:number,records:any[]) => {
    let headData={week:null,month:null};
    if (recordIndex===0) { headData.week=this.dT.format(this.dT.sOW(new Date(record.Date)),'d MMMM')+' - '+this.dT.format(this.dT.eOW(new Date(record.Date)),'d MMMM yyyy');return headData }
    else if (recordIndex>0) {
      const prevD:Date=new Date(records[recordIndex-1].Date);const thisD:Date=new Date(record.Date);
      if(!this.dT.isSW(prevD,thisD)){headData.week=this.dT.format(this.dT.sOW(thisD),'d MMMM')+' - '+this.dT.format(this.dT.eOW(thisD),'d MMMM yyyy')};
      if(!this.dT.isSM(prevD,thisD)){headData.month=this.dT.gM(thisD)};
      return headData }
    else { return null }
  }
////////////////////////////////////////////////////////////////////////////////////////
  initFetchData() {
    this.logger.info('[TabShifts|initFetchData] (Event) Channel: doInitFetchData [Listening...]');
    this.evServ.subscribe('doInitFetchShiftData',async()=>{
      this.evServ.destroy('doInitFetchShiftData');
      this.logger.info('[TabShifts|initFetchData] (Event) Channel: doInitFetchShiftData [TIGGERED!]');
      this.sSWeek=await this.dT.getShiftWeek();
      this.ttlShiftItems=await this.sqlServ.getItemCount(this.dbDataTbl);
      if (this.ttlShiftItems>0) {
        const initResData:any[]=await this.sqlServ.getXRosterItems(null,{by:this.orderBy,dir:this.orderDir},this.batchLimit,this.batchOffset);
        this.initRenderList(initResData);
      }
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initRenderList(initResData) {
    this.logger.info('[TabShifts|initRenderList] ()...');
    // FORMAT & SORT ALL SHIFTS
    let lShifts:any[]=[];let sShifts:any[]=[];
    for(let i=0;i<initResData.length;i++){
      const niceInitOb:any=await this.formatShift(initResData[i]);
      if(niceInitOb.nThisWeek){sShifts.push(niceInitOb)};
      if(niceInitOb.nIsFinished){lShifts.push(niceInitOb)}
    };
    // PUSH/DISPLAY MAIN ROSTER LIST
    this.shiftItems=lShifts;
    // CHECK TOTAL SSLIDER LIST !=0
    this.sSlider.slidesItems=sShifts.reverse();
    this.sSTotalItems=this.sSlider.slidesItems.length;
    let noS:boolean;this.sSTotalItems===0?noS=true:noS=false;
    this.hasLoaded=true;
    // CALC RELEVANT TOTALS (IF REQUIRED)
    if(!noS) {
      for(let i=0;i<this.sSlider.slidesItems.length;i++){this.sSlider.slidesControls.push({sliderIndex:i,rosterId:this.sSlider.slidesItems[i].Id,show:false,inProg:false,isPaused:false,progType:'indeterminate',progPerc:0})};
      this.sSDoneShifts=this.sSlider.slidesItems.filter(s=>s.nIsFinished).length+this.xtraShifts.length;
      this.sSShiftPerformVal=-this.sSMissedShiftCount+this.sSExtraShiftCount+this.xtraShifts.length;
      const weekSEOb:any={s:this.dT.sOfW('uts'),e:this.dT.eOfW('uts')};
      this.sSDoneHrs=Math.round((await this.sqlServ.getWeekDoneHrs(weekSEOb)+Number.EPSILON)*100)/100;
      this.sSRosterHrs=Math.round(((this.sSlider.slidesItems.reduce((a,b)=>{return a+b.TotalTime},0))+Number.EPSILON)*100)/100;
      const pastRHrs=Math.round(((this.sSlider.slidesItems.filter(pS=>pS.StartTime<this.dT.getUT(new Date())).reduce((a,b)=>{return a+b.TotalTime},0))+Number.EPSILON)*100)/100;
      this.sSHrsPerformVal=Math.round(((this.sSDoneHrs-pastRHrs)+Number.EPSILON)*100)/100;
      this.sSRosterIncome=Math.round(((this.sSlider.slidesItems.reduce((a,b)=>{return a+Number(b.nIncome)},0))+Number.EPSILON)*100)/100;
      const rawDone:number=Math.round(((this.sSlider.slidesItems.reduce((a,b)=>{return a+Number(b.nDoneIncome)},0))+Number.EPSILON)*100)/100;
      let xtraIncome:number=0;
      if(this.xtraShifts.length>0){
        for(let i=0;i<this.xtraShifts.length;i++){const xtraO:any=this.xtraShifts[i];const xtraPay:any=Math.round((await this.getPay(xtraO)).t);xtraIncome=xtraIncome+xtraPay}
      };
      this.xtraIncomeTotal=xtraIncome;
      this.sSDoneIncome=rawDone+xtraIncome
      const pastRIncome=Math.round(((this.sSlider.slidesItems.filter(pS=>pS.StartTime<this.dT.getUT(new Date())).reduce((a,b)=>{return a+Number(b.nIncome)},0))+Number.EPSILON)*100)/100;
      this.sSIncomePerformVal=Math.round((this.sSDoneIncome)-pastRIncome);
      // BULLET DAYS
      for(let i=0;i<this.sSlider.slidesItems.length;i++){ const sItem=this.sSlider.slidesItems[i];
        const slideDate:Date=new Date(sItem.Date);
        const bulletDayIndex:number=this.sSWeek.findIndex(bd=>this.dT.isSD(bd.d,slideDate));
        this.sSWeek[bulletDayIndex].isshift=true;
        if(this.sSWeek[bulletDayIndex].tonow==='B'&&sItem.MatchedByTimesheet===0){this.sSWeek[bulletDayIndex]['nots']=true}else{this.sSWeek[bulletDayIndex]['nots']=false};
        this.sSWeek[bulletDayIndex]['si']=i;
        this.sSWeek[bulletDayIndex]['rid']=sItem.Id;
        if(bulletDayIndex!==-1){const bdSN:string=this.sSWeek[0].sn;this.indicMatch.push({sn:bdSN,si:i})};
      }
      for(let i=0;i<this.xtraShifts.length;i++){const xtra:any=this.xtraShifts[i];
        const xtraShiftDate:Date=new Date(xtra.Date);
        const bulletDayIndex:number=this.sSWeek.findIndex(bd=>this.dT.isSD(bd.d,xtraShiftDate));
        this.sSWeek[bulletDayIndex].isshift=true;
        this.sSWeek[bulletDayIndex].tonow==='B';
        this.sSWeek[bulletDayIndex]['nots']=false;
        this.sSWeek[bulletDayIndex]['xtra']=true
      }
      // FINALLY
      this.myWeekPagReady=true;
      if(this.initRes.length===this.ttlShiftItems){this.iScrollShifts.disabled=true;this.endOfList=true}else{this.iScrollShifts.disabled=false;this.endOfList=false};
      this.evServ.publish('slidesLoaded','List Data Loaded');
      setTimeout(()=>{$('.sheriff-iscroll').css('opacity','1')},2000);
    }else{
      const perfVs:any[]=['sSDoneShifts','sSShiftPerformVal','sSDoneHrs','sSRosterHrs','sSHrsPerformVal','sSRosterIncome','sSDoneIncome','sSIncomePerformVal'];
      for(let i=0;i<perfVs.length;i++){this[perfVs[i]]=0};
      // FINALLY
      this.myWeekPagReady=true;
      if(this.initRes.length===this.ttlShiftItems){this.iScrollShifts.disabled=true;this.endOfList=true}else{this.iScrollShifts.disabled=false;this.endOfList=false};
      this.evServ.publish('slidesLoaded','List Data Loaded');
      setTimeout(()=>{$('.sheriff-iscroll').css('opacity','1')},2000);
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  slideToNextLastShift() {
    let initCount:number=0;
    this.evServ.subscribe('slidesLoaded',async stageStr=>{
      initCount++;
      if (initCount===1) { this.logger.info('[slideToNextLastShift] (SlidesLoaded) - STAGE #'+initCount+' - '+stageStr) }
      else { this.logger.info('[slideToNextLastShift] (SlidesLoaded) - STAGE #'+initCount+' - '+stageStr);
        this.evServ.destroy('slidesLoaded');
        if (this.sSTotalItems===0) { this.sSCD=0;this.CDReady=true }
        else {
          let nowTS:number=this.dT.getUT(new Date());
          const nSI:number=this.sSlider.slidesItems.findIndex(sT=>sT.StartTime>nowTS);
          let sI:number;nSI===-1?sI=this.sSlider.slidesItems.length-1:sI=nSI;
          this.startNextShiftCD(sI);
          const cSI:number=await this.shiftsSlider.getActiveIndex();
          if(sI===cSI){
            this.sSChecks('init');
          }else{
            const doNextSlide=(nextSI:number):Promise<boolean>=>{this.shiftsSlider.slideTo(nextSI,250,false);return Promise.resolve(true)};
            await doNextSlide(sI);
            setTimeout(() => {
              this.sSChecks('init');
            },300);
          }
        }
      }
    })
  }
////////////////////////////////////////////////////////////////////////////////////////
  startNextShiftCD(nextShiftIndex:number) {
    this.logger.info('[TabShifts|startNextShiftCD] ()...');
    let sSTimer:any;this.sSCD={d:0,h:0,m:0,s:0};
    const nextSSUTS:number=this.sSlider.slidesItems[nextShiftIndex]['StartTime'];
    const nextSSD:Date=this.dT.Dut(nextSSUTS);
    sSTimer=setInterval(()=>{timeBetweenDates(nextSSD)},1000);
    const timeBetweenDates=(toDate:Date)=>{let dateEntered=toDate;let now=new Date();const difference=dateEntered.getTime()-now.getTime();if(difference<=0){clearInterval(sSTimer)}else{this.sSCD.s=Math.floor(difference/1000);this.sSCD.m=Math.floor(this.sSCD.s/60);this.sSCD.h=Math.floor(this.sSCD.m/60);this.sSCD.d=Math.floor(this.sSCD.h/24);this.sSCD.h%=24;this.sSCD.m%=60;this.sSCD.s%=60}}
    setTimeout(()=>{this.CDReady=true},1500);
    
  }
////////////////////////////////////////////////////////////////////////////////////////
  async feedItems(event) {
    this.batchOffset+=this.batchLimit;
    this.batchStart=this.shiftItems.length;
    this.batchEnd=this.batchStart+this.batchLimit;
    await this.getShifts(this.batchOffset);
    if(this.shiftItems.length===this.ttlShiftItems){this.iScrollShifts.disabled=true;this.endOfList=true}
    else{this.iScrollShifts.disabled=false;this.endOfList=false};
    event.target.complete();
    this.vScrollShifts.checkEnd()
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getShifts(offset:number):Promise<any> {
    this.logger.info('[TabShifts|getShifts] ('+offset+')...');
    try {
      const thisBatch = await this.sqlServ.getXRosterItems(null,{by:this.orderBy,dir:this.orderDir},this.batchLimit,this.batchOffset);
      for (let i=0;i<thisBatch.length;i++) { const niceTSOb = await this.formatShift(thisBatch[i]);this.shiftItems.push(niceTSOb) }
      return Promise.resolve(true);
    } catch (getSErr) { this.logger.info('[TabShifts|getShifts] (Error): '+getSErr) }
  }
////////////////////////////////////////////////////////////////////////////////////////
  gotoTimesheet(rosId:number,tsId:number) {
    this.logger.info('[TabShifts|gotoTimesheet] ('+rosId+','+tsId+')...');
    this.gotoTSId=tsId;
    let navXtras:NavigationExtras={state:{origin:'shifts',id:this.gotoTSId}};
    this.router.navigate(['/tabs/tabtsheets'],navXtras);
  }
////////////////////////////////////////////////////////////////////////////////////////
  gotoSettings() {
    this.navCtrl.navigateRoot('/settings');
  }
////////////////////////////////////////////////////////////////////////////////////////
  async showShiftDetail(rosId:number,hIndex:number) {
    this.logger.info('[TabShifts|showShiftDetail] ('+rosId+','+hIndex+')...');
    this.doneSId=rosId;
    this.doneS=this.shiftItems.filter(rId=>rId.Id===rosId)[0];
    if(this.doneS.MatchedByTimesheet>0){
      this.doneSHasTSData=true;
      this.doneSTSData=await this.sqlServ.getSingleTimesheet(this.doneS.MatchedByTimesheet);
      const tsStartEndObj:any=this.dT.rosterSETimes(this.doneSTSData.StartTime,this.doneSTSData.EndTime);
      this.doneS['tsStart']=tsStartEndObj.s;this.doneS['tsEnd']=tsStartEndObj.e;
      const rosterStartEndObj:any=this.dT.rosterSEDoneTimes(this.doneS.StartTime,this.doneS.EndTime);
      this.doneS['rosStart']=rosterStartEndObj.s;this.doneS['rosEnd']=rosterStartEndObj.e;
      this.doneS['tsTotalTime']=this.dT.shiftTTToDur(this.doneSTSData.TotalTime);
      this.doneS['tsTTDiff']=this.dT.rosVsTSTTDiff(this.doneS.TotalTime,this.doneSTSData.TotalTime);
      const calcRosPay:any=await this.getPay(this.doneS);
      const calcTSPay:any=await this.getPay(this.doneSTSData);
      this.doneS['rosIncomeObj']=calcRosPay;
      this.doneS['tsIncomeObj']=calcTSPay;
      this.doneS['rosIncome']=calcRosPay.t.toFixed(0);
      this.doneS['tsIncome']=calcTSPay.t.toFixed(0);
      this.doneS['tsIncomePerf']=Math.round(calcTSPay.t-calcRosPay.t);
      this.doneSAgoTime=this.dT.DurAsObj(new Date(),new Date(this.doneS.Date));
      this.doneSIsShowing=true;
    }else{
      this.logger.info('[TabShifts|showShiftDetail] (ERROR): Missing Timesheet');
      this.doneSTSData=false;
      this.doneSIsShowing=true;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  doneShiftShowComments() {
    this.logger.info('[TabShifts|doneShiftShowComments] ()...');
    this.doneSShowComments?this.doneSShowComments=false:this.doneSShowComments=true;
  }
////////////////////////////////////////////////////////////////////////////////////////
  doneShiftShowWarnings() {
    this.logger.info('[TabShifts|doneShiftShowComments] ()...');
    this.doneSShowWarnings?this.doneSShowWarnings=false:this.doneSShowWarnings=true;
  }
////////////////////////////////////////////////////////////////////////////////////////
  closeShiftDetail() {
    this.logger.info('[TabShifts|closeShiftDetail] ()...');
    this.doneSId=0;this.doneSHasTSData=false;this.doneSTSData=null;this.doneS=null;this.doneSAgoTime=null;this.doneSIsShowing=false;
  }
////////////////////////////////////////////////////////////////////////////////////////
  toggleInfiniteScroll() {
    this.iScrollShifts.disabled=!this.iScrollShifts.disabled;
  }
////////////////////////////////////////////////////////////////////////////////////////
  sSControl(rosterId:number,action:string) {
    this.logger.info('[TabShifts|sSShowControlsToggle] ('+rosterId+','+action+')...');//{sliderIndex:i,rosterId:this.sSlider.slidesItems[i].Id,show:false,inProg:false,isPaused:false,progPerc:0}
    const sC:any=this.sSlider.slidesControls[this.sSCurrentIndex];
    if (action==='show') { sC;sC.show=!sC.show;}
    if (action==='start') { if (!sC.inProg) { sC.inProg=true } else if (sC.isPaused) { sC.isPaused=false } 
      else if (!sC.inProg && !sC.isPaused) { this.logger.info('Shift Item (slideIndex:'+this.sSCurrentIndex+',rosterId:'+rosterId+') is [ALREADY STARTED]') } 
    }
    if (action==='stop') { if (sC.inProg) { sC.inProg=false; if (sC.isPaused) {sC.isPaused=false } 
      } else { this.logger.info('Shift Item (slideIndex:'+this.sSCurrentIndex+',rosterId:'+rosterId+') is [NOT IN-PROGRESS]') }
    }
    if (action==='pause') { if (!sC.isPaused) { sC.isPaused=true } else { sC.isPaused=false } }
  }
////////////////////////////////////////////////////////////////////////////////////////
  disableRefresher(togV:boolean) { this.preventRefreshPull=togV }
////////////////////////////////////////////////////////////////////////////////////////
  sSNext() {
    this.logger.info('[TabShifts|sSNext] (sSNext)');
    $('.sheriff-shiftsslider-nav-arrow-ico.forward').addClass('ss-nav-arrow-activated');
    this.shiftsSlider.slideNext(250,false).then(()=>{this.sSChecks(null);
      $('.sheriff-shiftsslider-nav-arrow-ico.forward').css('transition','color 1.5s ease-in').removeClass('ss-nav-arrow-activated');setTimeout(()=>{$('.sheriff-shiftsslider-nav-arrow-ico.forward').css('transition','unset')},1500);
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  sSPrev(){
    this.logger.info('[TabShifts|sSPrev] (sSPrev)');
    $('.sheriff-shiftsslider-nav-arrow-ico.back').addClass('ss-nav-arrow-activated');
    this.shiftsSlider.slidePrev(250,false).then(()=>{this.sSChecks(null);
      $('.sheriff-shiftsslider-nav-arrow-ico.back').css('transition','color 1.5s ease-in').removeClass('ss-nav-arrow-activated');setTimeout(()=>{$('.sheriff-shiftsslider-nav-arrow-ico.back').css('transition','unset')},1500);
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  sSGotoShift(isShift:boolean,sIndex:number) {
    this.logger.info('[TabShifts|sSGotoShift] ('+isShift+','+sIndex+')...');
    if(isShift){
      if(this.doneSIsShowing){this.closeShiftDetail()};
      this.shiftsSlider.slideTo(sIndex,250,false).then(()=>{this.sSChecks(null)}).catch(err=>{this.logger.info('[TabShifts|sSGotoShift] (Error): '+err)})}
    else{this.logger.info('[TabShifts|sSGotoShift] (No Shift) Aborted.')}
  }
//////////////////////////////////////////////////////////////////////////////////////
  sSDidLoad(){
    this.logger.info('[TabShifts|sSDidLoad] (ionSlidesDidLoad)');
    this.sSlider.sliderHasLoaded=true;
    this.evServ.publish('slidesLoaded','Slides DOM Element Loaded');
    this.extraSE();
  }
//////////////////////////////////////////////////////////////////////////////////////
  sSIsStart(){this.logger.info('[TabShifts|sSIsStart] (ionSlideReachStart).')}
//////////////////////////////////////////////////////////////////////////////////////
  sSIsEnd(){this.logger.info('[TabShifts|sSIsEnd] (ionSlideReachEnd).')}
//////////////////////////////////////////////////////////////////////////////////////
  sSWillChange(){this.logger.info('[TabShifts|sSWillChange] (sSWillChange)...')}
//////////////////////////////////////////////////////////////////////////////////////
  sSDidChange(){this.logger.info('[TabShifts|sSDidChange] (sSDidChange)');this.sSChecks(null)}
//////////////////////////////////////////////////////////////////////////////////////
  async extraSE() {
    const mySw:any=await this.shiftsSlider.getSwiper();
    this.evServ.subscribe('doExtraCheck',()=>{if(!this.sSChecking){this.sSChecks(null)}});
    mySw.on('slideChange',()=>{this.evServ.publish('doExtraCheck',true)});
  }
////////////////////////////////////////////////////////////////////////////////////////
  async sSChecks(mode) {
    this.logger.info('[TabShifts|sSChecks] ()...');
    if(!this.sSChecking){
      this.sSChecking=true;
      const isFirstSlide=()=>{this.logger.info('(Slider) [FIRST SLIDE!] <<< PREV - [LOCKED]');this.shiftsSlider.lockSwipeToPrev(true);this.shiftsSlider.lockSwipeToNext(false);this.sSlider['isBeginningSlide']=true;this.sSlider['isEndSlide']=false};
      const isLastSlide=()=>{this.logger.info('(Slider) [LAST SLIDE!] >>> NEXT - [LOCKED]');this.shiftsSlider.lockSwipeToPrev(false);this.shiftsSlider.lockSwipeToNext(true);this.sSlider['isBeginningSlide']=false;this.sSlider['isEndSlide']=true};
      const isFirstLastSlide=()=>{this.logger.info('(Slider) [FIRST & LAST SLIDE!] <<< PREV & NEXT >>> - [BOTH LOCKED]');this.shiftsSlider.lockSwipeToPrev(true);this.shiftsSlider.lockSwipeToNext(true);this.sSlider['isBeginningSlide']=true;this.sSlider['isEndSlide']=true};
      const isOtherSlide=()=>{this.logger.info('(Slider) [OTHER SLIDE] <<< PREV & NEXT >>> - [BOTH UNLOCKED]');this.shiftsSlider.lockSwipeToPrev(false);this.shiftsSlider.lockSwipeToNext(false);this.sSlider['isBeginningSlide']=false;this.sSlider['isEndSlide']=false}; 
      const nowSlideIndex:number=await this.shiftsSlider.getActiveIndex();
      const nowSlideNumber:number=(await this.shiftsSlider.getActiveIndex())+1;
      const checkIfFirst:boolean=await this.shiftsSlider.isBeginning();
      const checkIfLast:boolean=await this.shiftsSlider.isEnd();
      const ttlSlides:number=this.sSlider.slidesItems.length;
      this.sSCurrent=nowSlideNumber;
      this.sSCurrentIndex=nowSlideIndex;
      if(ttlSlides===1){isFirstLastSlide()};
      if(ttlSlides>1){
        if(checkIfFirst){isFirstSlide()};
        if(checkIfLast){isLastSlide()};
        if(!checkIfFirst&&!checkIfLast){isOtherSlide()};
      }
      if(mode==='init') {
        this.sSInitComplete=true;
        if(this.myObj.WorkplaceConfig[1].ROSTER_ALLOW_PEER_VIEW===1){this.apiPeerView=true}else{this.apiPeerView=false};
        if(this.workPeople.length>0){
          if(this.apiPeerView){
            for(let i=0;i<this.sSlider.slidesItems.length;i++){
              let tSSColObj:any={sameArea:[],otherArea:[]};
              const mTS:any=this.sSlider.slidesItems[i];
              const mTSD:Date=new Date(mTS.Date);
              const mTSA:number=mTS.OperationalUnit;
              this.deputy.getThisShiftColleagues(mTSD).then(tPRes=>{
                let thisDayPpl:any[]=tPRes;
                for(let i=0;i<thisDayPpl.length;i++){
                  const pS:any=thisDayPpl[i];
                  if(pS.Employee!==mTS.Employee){
                    if(pS.EndTime>mTS.StartTime||pS.StartTime<mTS.EndTime){
                      let thisPObj:any=this.workPeople.filter(wP=>wP.EmpId===pS.Employee)[0];
                      if(pS.OperationalUnit===mTSA){tSSColObj.sameArea.push(thisPObj)}
                      else{tSSColObj.otherArea.push(thisPObj)};
                    }
                  }
                }
                this.sSMultiColleagues.push(tSSColObj);
              }).catch(tPErr=>{
                this.logger.info('[TabShifts|sSChecks|Init|WorkPpl] (Error): '+tPErr);this.initDidFinish=true
              })
            }
            this.initDidFinish=true;
          }else{
            let todayHasShift:boolean=false;
            let myTodaySSIndex:number;
            let myTodayShift:any;
            for(let i=0;i<this.sSlider.slidesItems.length;i++){
              const tSS:any=this.sSlider.slidesItems[i];
              if(this.dT.isSD(new Date(),new Date(tSS.Date))){myTodaySSIndex=i;todayHasShift=true;myTodayShift=tSS}
            };
            if(todayHasShift){
              this.sSColleagueDayIndex=myTodaySSIndex;
              const myS:any=myTodayShift;
              const myA:number=myTodayShift.OperationalUnit;
              this.deputy.getTodayShiftColleagues().then(tPRes=>{
                let todayPpl:any[]=tPRes;
                for(let i=0;i<todayPpl.length;i++){
                  const pS:any=todayPpl[i];
                  if(pS.Employee!==myTodayShift.Employee){
                    if(pS.EndTime>myS.StartTime||pS.StartTime<myS.EndTime){
                      let thisPObj:any=this.workPeople.filter(wP=>wP.EmpId===pS.Employee)[0];
                      if(pS.OperationalUnit===myA){this.sSColleagues.sameArea.push(thisPObj)}
                      else{this.sSColleagues.otherArea.push(thisPObj)};
                    }
                  }
                }
                this.initDidFinish=true 
              }).catch(tPErr=>{this.logger.info('[TabShifts|sSChecks|Init|WorkPpl] (Error): '+tPErr);this.initDidFinish=true})
            }else{this.initDidFinish=true}
          }
        }else{this.initDidFinish=true}
      }
      setTimeout(()=>{this.sSChecking=false},250);
    }else{this.logger.info('[TabShifts|sSChecks] (CHECKING ALREADY IN PROGRESS!) - Skipped!')}
  }
//////////////////////////////////////////////////////////////////////////////////////
  stopShowColleague() { this.logger.info('[TabShifts|stopShowColleague] ()...');
    this.viewColleague=null;this.showingColleague=false;
  }
//////////////////////////////////////////////////////////////////////////////////////
  showColleague(colleagueObj:any) { this.logger.info('[TabShifts|showColleague] ()...');
    this.viewColleague=colleagueObj;this.showingColleague=true;
  }
//////////////////////////////////////////////////////////////////////////////////////
  async sSEvent(eV) {
    if(eV==='tap'){const tappedSlideNo=(await this.shiftsSlider.getActiveIndex())+1;this.logger.info('[TabShifts|ionSlideEvent] Slide '+tappedSlideNo+' was tapped.')};
    if(eV==='firstSlide'){this.logger.info('[TabShifts|ionSlideEvent] Reached [FIRST] Slide (1)')};
    if(eV==='lastSlide'){this.logger.info('[TabShifts|ionSlideEvent] Reached [LAST] Slide ('+this.sSlider.slidesItems.length+')')}; 
  }
////////////////////////////////////////////////////////////////////////////////////////
  headerProgress(mode:string,action:string,data:number) {
    this.logger.info('[TabShifts|headerProgress] ('+mode+','+action+','+data+')...');
    const circProgEle=$('.hcl-progcirc.'+this.tabKey);
    const starEle=$('.hcl-star.'+this.tabKey);
    const sLogoEle=$('.hcl-slogo.'+this.tabKey);
    const startRoutine=()=>{
      this.progCirc.outerStrokeColor='#FF9800';
      $(sLogoEle).css('transform','scale(.9)');
      $(starEle).css('transform','rotate(0deg)');
      this.progCirc.percent=0;
      if($(circProgEle).css('display','none')){$(circProgEle).css('display','unset')}
    }
    const finishRoutine=()=>{
      $(sLogoEle).css('transform','unset');
      $(starEle).css('transform','rotate(0deg)');
      this.progCirc.outerStrokeColor='#4caf50';
      this.progCirc.percent=100;
      this.myAniCSS('.hcl-progcirc.'+this.tabKey,'fadeOut',0,1000,'remove','hide');
      this.refresher.complete();
      this.isRefreshing=false;
    }
    if(mode==='manual'){
      if(action==='start'){this.progCirc.animation=false;startRoutine()}
      else if(action==='change'){this.progCirc.percent=data;$(starEle).css('transform','rotate('+(360*data)/100+')deg')}
      else if(action==='finish'){finishRoutine()}
    }else{
      this.progCirc.animation=true;
      startRoutine();
      let starRotCount=0; 
      const incPercEaLoop=(20/data)*1000;
      const rotStarEaLoop=(72/data)*1000;
      const timedProgLoop=setInterval(()=>{
        this.progCirc.percent+=incPercEaLoop;
        starRotCount+=rotStarEaLoop;
        $(starEle).css('transform','rotate('+starRotCount+'deg)');
        if(this.progCirc.percent>=100){
          clearInterval(timedProgLoop);
          finishRoutine()}
      },200);
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doRefresh(event) {
    this.logger.info('[TabShifts|doRefresh] (event)...');
    this.isRefreshing = true;this.refresher = event.target;
    this.headerProgress('manual','start',null);
    this.doInitRefresh('refresh');
  }
////////////////////////////////////////////////////////////////////////////////////////
  historyScroll(event:any) {
    const sD:number=event.detail.scrollTop;const shT:number=event.target.offsetHeight-56;
    if(sD>shT){this.showTTopBtn=true;$('.shifts-history-btn').removeClass('animate__slideOutDown').addClass('animate__slideInUp')}else{$('.shifts-history-btn').removeClass('animate__slideInUp').addClass('animate__slideOutDown');setTimeout(()=>{this.showTTopBtn=false},300)};
  }
////////////////////////////////////////////////////////////////////////////////////////
  scrollHistoryTop() {
    this.logger.info('[TabShifts|scrollHistoryTop] ()...');
    this.scrollingTT=true;this.historyContent.scrollToTop(500).then(()=>{this.scrollingTT=false});
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave(){ this.logger.info('[TabShifts|ionViewWillLeave] ()...');
    Keyboard.removeAllListeners();Keyboard.removeAllListeners();Keyboard.removeAllListeners();
    const titleBar = $('.hcl-leftbar.' + this.tabKey); const animBarEnd = $('.sheriff-title-leftanimbar-inner.' + this.tabKey); const titleText = $('.sheriff-title.tight-wrap.' + this.tabKey);
    $(titleBar).css('width', '0px');
    $(animBarEnd).removeClass('showing');
    $(titleText).removeClass('scrolledin');
    $(titleBar).removeClass('dimmed');
  }
////////////////////////////////////////////////////////////////////////////////////////
  tabChangeAni(thisTabKey) {
    this.logger.info('[TabShifts|tabChangeAnim] (' + thisTabKey + ')...');
    const sLogoEle = $('.hcl-slogo.' + thisTabKey); const starEle = $('.hcl-star.' + thisTabKey); const titleBar = $('.hcl-leftbar.' + thisTabKey); const animBarEnd = $('.sheriff-title-leftanimbar-inner.' + thisTabKey); const titleText = $('.sheriff-title.tight-wrap.' + thisTabKey);
    $(sLogoEle).addClass('tabtilt'); $(starEle).addClass('tabchangestarback'); $(titleBar).css('width', this.leftAnimBarW);
    setTimeout(() => {
      $(animBarEnd).addClass('showing'); $(titleText).addClass('scrolledin');
      setTimeout(() => {
        $(sLogoEle).removeClass('tabtilt'); $(titleBar).addClass('dimmed'); $(starEle).removeClass('tabchangestarback');
      }, 200);
    }, 200);
  }
////////////////////////////////////////////////////////////////////////////////////////
  pageEnterAnim() {
    this.logger.info('[TabShifts|pageEnterAnim] ()...');
    this.evServ.subscribe('doPageEnterAnim', () => {
      this.tabKey='tabshifts';const pageKey='tabshifts';const sLogoEle=$('.hcl-slogo.'+pageKey);const preImg='../../assets/img/slogo-';const cProgEle=$('.hcl-progcirc.'+pageKey);const patchEles=$('.hcl-opatch.'+pageKey+' .hcl-ipatch.'+pageKey);const starEle=$('.hcl-star.'+pageKey);const pageTitle=$('.hcl-title.'+pageKey);const titleBar=$('.hcl-leftbar.'+pageKey);const leftCol=$('.sheriff-page-header-col.left-col.'+pageKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+pageKey);const titleText=$('.sheriff-title.tight-wrap.'+pageKey);const calcBarW=Math.round(($(leftCol).outerWidth()+6)-($(pageTitle).offset().left+$(pageTitle).outerWidth()))+'px';this.leftAnimBarW=calcBarW;$(patchEles).addClass('hidden');
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
    })
  }
//////////'.myElement','tada',0-1500,0-1500,'keep|remove','show|hide|remove'
  myAniCSS(theEle:string,aniName:string,aniDel:number,aniDur:number,aniEnd:string,eleEnd:string) { 
    this.logger.info('[TabShifts|myAniCSS] ('+theEle+','+aniName+','+aniDel+','+aniDur+','+aniEnd+','+eleEnd+')...');
    let didResolve:boolean=false;
    const doAni=()=>new Promise((resolve)=>{
      const aniStr='animate__animated animate__'+aniName;const delStr='animDel-'+aniDel;const durStr='animDur-'+aniDur;
      $(theEle).on('animationend',()=> {
        setTimeout(()=>{if(!didResolve){resolve(true)}},2000);
        if(aniEnd==='remove'){$(theEle).removeClass(aniStr);if($(theEle).hasClass(delStr)){$(theEle).removeClass(delStr)};if($(theEle).hasClass(durStr)){$(theEle).removeClass(durStr)}};
        if(eleEnd==='remove'){$(theEle).remove()};
        if(eleEnd==='hide'){$(theEle).css('display','none')};
        resolve(true);
        didResolve=true;
      });
      if(aniDel>0){$(theEle).addClass(delStr)};
      if(aniDur>0){$(theEle).addClass(durStr)};
      $(theEle).addClass(aniStr);
    })
    doAni()
  }
///////////////////////////////////////////////////////////////////////////
  hideSplash() {
    this.logger.info('[Tabs|hideSplash] ()...');
    StatusBar.setOverlaysWebView({overlay: true}); StatusBar.setBackgroundColor({color: '#00000000'});
    $('#sheriff-auth-networkstatus-wrapper').addClass('adjust-for-auth-toolbar-overlay');
    const myAniCSS = (jqEle, animName) => new Promise((resolve) => { const animClassStr = 'animate__animated animate__' + animName + ' animate__fast'; $(jqEle).addClass(animClassStr); $(jqEle).on('animationend', () => { $(jqEle).removeClass(animClassStr); resolve('done'); }); });
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
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
}
