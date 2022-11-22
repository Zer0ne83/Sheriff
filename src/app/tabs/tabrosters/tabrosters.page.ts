import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode, IEvent, Step } from 'ionic2-calendar/calendar';
import { SQLiteService } from './../../services/sqlite.service';
import { DateTimeService } from 'src/app/services/datetime.service';
import { EventsService } from 'src/app/services/events.service';
import { DetailService } from 'src/app/services/detail.service';
import { StorageService } from 'src/app/services/storage.service';
import { DeputyService } from 'src/app/services/deputy.service';
import { ActionSheet } from '@capacitor/action-sheet';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, IonSegment, IonRefresher, IonContent, IonSlides, IonSlide } from '@ionic/angular';
import { Swiper, SwiperOptions } from 'swiper';
import { formatDate } from '@angular/common';
import { Platform } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import * as $ from 'jquery';
import * as _ from 'lodash';
////////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-tabrosters', templateUrl: './tabrosters.page.html', styleUrls: ['./tabrosters.page.scss'], })
////////////////////////////////////////////////////////////////////////////////////////
export class TabRostersPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  @ViewChild(CalendarComponent,{static:false}) rCalComponent:CalendarComponent;
  @ViewChild('rostersRefresher') shiftRefresher:IonRefresher;
  @ViewChild('rosCalEventsContent',{static:false}) rosCalEventsContent: IonContent;
////////////////////////////////////////////////////////////////////////////////////////
  tabKey:string;
  dbDataTbl:string='rosters';
  dbHasTable:boolean=this.dS.getUDBTables().includes(this.dbDataTbl);
  preventRefreshPull:boolean;
  splashIsShowing:boolean;
  progCirc:any={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  isRefreshing:boolean;
  refresher:any;
  // Loads
  myObj:any=null;
  meObj:any=null;
  meAvatar:string=null;
  workAvatar:string=null;
  workColor:string=null;
  incBright:boolean;
  workName:string=null;
  workCode:string=null;
  myWorkArr:any[]=[];
  workAreas:any[]=[];
  workPeople:any[]=[];
  // Prefs
  currentWork:any=null;
  // Roster/Event Data
  rosItems:any[]=[];
  totalRosItems:number=0;
  noRosItems:boolean=false;
  noWeekRosItems:boolean=false;
  // Swiper
  rCalSwipe:any;
  swiperInit:boolean=false;
  swiperChanging:boolean=true;
  // Calendar
  rCalPrefsLoaded:boolean=false;
  rCalIsReady:boolean=false;
  updatingViewStyles:boolean=false;
  defaultRCEv:IEvent={allDay:<boolean>null,startTime:<Date>null,endTime:<Date>null,title:<string>null};
  todayDay:number;
  nowHour:number;
  weekShiftsCount:number=0;
  currentRosObjArr:any[]=[];
  rCalProps:any={
    rCalView:<CalendarMode>'week',
    rCalStep:<Step>30,
    rCalCurrentDate:<Date>new Date(),
    rCalCurrentDateShort:<string>this.dT.format(new Date(),'dd/MM/yy'),
    rCalCurrentRange:<any>{startTime:null,endTime:null},
    rCalSelectedTime:<any>{events:[],selectedTime:null,disabled:null},
    rCalSelectedDayHead:<any>{events:[],selectedTime:null,disabled:null},
    rCalSelectedEvent:<any>{allDay:false,endTime:null,startTime:null,title:null},
    rCalSelectedEventNice:<any>{niceStart:null,niceEnd:null,niceDur:{hours:0,minutes:0}},
    rCalSelectedEventId:<number>0,
    rCalTotalH:<number>0,
    rCalMinTRowH:<number>37,
    rCalStartHr:<number>0,
    rCalEndHr:<number>24,
    rCalEventSource:<any[]>[],
    rCalViewTitle:<string>'',
    rCalIsToday:<boolean>true,
    rCalScrollToHour:<number>0,
    rCalLockSwipes:<boolean>false,
    rCalLockSwipesToPrev:<boolean>false,
    rCalAllDayLabel:<string>'Day',
    rCalNoEventsLabel:<string>'No Rosters',
    rCalDateFormatter:{
      formatWeekViewDayHeader:(d:Date)=>{return this.dT.rCalWVDH(d)},
      formatWeekViewTitle:(d:Date)=>{return this.dT.rCalWVT(d)},
      formatWeekViewHourColumn:(d:Date)=>{return this.dT.rCalWVHC(d)},
      formatDayViewTitle:(d:Date)=>{return this.dT.rCalDVT(d)},
      formatDayViewHourColumn:(d:Date)=>{return this.dT.rCalWVHC(d)}
    },
    rCalSliderOpts:<SwiperOptions>{
      on:{
        init:()=>{this.swiperInit=true;this.logger.info('[TabRosters|rCalSwipeCtrl) (init)')},
        update:()=>{this.logger.info('[TabRosters|rCalSwipeCtrl) (update)')},
        touchStart:()=>{console.log('[TabRosters|rCalSwipeCtrl] (touchStart)')},
        touchEnd: ()=>{console.log('[TabRosters|rCalSwipeCtrl] (touchEnd)')},
        slideChange:()=>{this.onRCalWeekDayChange()}
      }
    }
  };
  rCNPickerIsOpen:boolean=false;
  rCWorkPickerIsOpen:boolean=false;
  wvTimeColW:number=0;
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private alertCtrl: AlertController,
    private logger: NGXLogger,
    private sqlServ: SQLiteService,
    private router: Router,
    private dT: DateTimeService,
    private dS: DetailService,
    private evServ: EventsService,
    private storeServ: StorageService,
    private deputy:DeputyService
  ) {
    const urlArr=this.router.url.split('/');this.tabKey=urlArr[urlArr.length-1];
    this.rCalProps.rCalCurrentDate=new Date();
    this.rCalProps.rCalCurrentDateShort=this.dT.format(this.rCalProps.rCalCurrentDate,'dd/MM/yy');
    this.todayDay=this.dT.gDate(new Date());
    this.nowHour=this.dT.gH(new Date());
  }
////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() { this.logger.info('[TabRosters|ngOnInit] ()...');
    this.initData();
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initData() { this.logger.info('[TabRosters|initRenderData] ()...');
    this.myObj=this.dS.myObj;this.meObj=this.dS.meObj;this.workAreas=this.dS.workAreas;this.currentWork=this.myObj.Workplace[0];this.workAvatar=this.dS.workAva;this.meAvatar=this.dS.meAva;this.workCode=this.dS.workCode;this.workName=this.dS.workName;this.workColor=this.dS.workColor;this.workPeople=this.dS.pplArr;this.incBright=this.dS.incBright;this.loadRosCalEvents('init',this.rCalProps.rCalCurrentDate)
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillEnter() { this.logger.info('[TabRosters|ionViewWillEnter] ()...') }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[TabRosters|ionViewDidEnter] ()...');
    const calCon:any=$('.roscal-eventscontent');const waitCalCon=setInterval(()=>{if($(calCon).length>-1){clearInterval(waitCalCon);this.rCalProps.rCalTotalH=($(calCon).innerHeight())-106;this.rCalProps.rCalMinNoRows=Math.floor(this.rCalProps.rCalTotalH/this.rCalProps.rCalMinTRowH)}},250)
  }
////////////////////////////////////////////////////////////////////////////////////////
  async loadRosCalEvents(mode:string,cDate:Date) { this.logger.info('[TabRosters|loadRosCalEvents] ('+mode+')...');
    const getWeekData=async():Promise<any[]>=>{const soWUTS:number=this.dT.getUT((this.dT.sOW(cDate)));const eoWUTS:number=this.dT.getUT((this.dT.eOW(cDate)));const weekEvsRes:any[]=await this.sqlServ.getRosterWeekItems(soWUTS,eoWUTS);return Promise.resolve(weekEvsRes)};
    if(mode==='init'){
      this.totalRosItems=await this.sqlServ.getItemCount(this.dbDataTbl);
      if(this.totalRosItems>0){
        const initWeekD:any[]=await getWeekData();
        if(initWeekD.length>0){
          this.noWeekRosItems=false;
          this.rCalProps.rCalLockSwipes=false;
          this.convertWeekRI2CE(initWeekD);
          this.setDayStartEndTimes(initWeekD);
        }else{
          this.swiperChanging=false;
          this.noWeekRosItems=true;
          this.rCalProps.rCalLockSwipes=false;
          this.setDayStartEndTimes([]);
        }
        this.weekShiftsCount=initWeekD.length;
      }else{
        this.swiperChanging=false;
        this.noRosItems=true;
        this.rCalProps.rCalLockSwipes=true;
        this.setDayStartEndTimes([]);
      }
    }else{
      this.rCalProps.rCalCurrentDate=cDate;
      this.rCalProps.rCalCurrentDateShort=this.dT.format(cDate,'dd/MM/yy');
      const thisWeekD:any[]=await getWeekData();
      if(thisWeekD.length>0){
        this.noWeekRosItems=false;
        this.rCalProps.rCalLockSwipes=false;
        this.setDayStartEndTimes(thisWeekD);
        this.convertWeekRI2CE(thisWeekD);
      }else{
        this.swiperChanging=false;
        this.noWeekRosItems=true;
        this.rCalProps.rCalLockSwipes=false;
        this.setDayStartEndTimes([]);
      }
      this.weekShiftsCount=thisWeekD.length;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  setDayStartEndTimes(eventsArr:any[]) { this.logger.info('[TabRosters|getDayStartEndTimes]');
    let earliestStart:number=23;let latestEnd:number=1;
    const isE=(sT:Date)=>{const sH:number=this.dT.gH(sT);if(sH<earliestStart){earliestStart=sH}};
    const isL=(eT:Date)=>{const eH:number=this.dT.gH(eT);if(eH>latestEnd){latestEnd=eH}};
    for(let i=0;i<eventsArr.length;i++){const rI:any=eventsArr[i];isE((this.dT.Dut(rI.StartTime)));isL((this.dT.Dut(rI.EndTime)))}
    if(eventsArr.length===0){
      this.logger.info('[TabRosters|getDayStartEndTimes] (No Events) - Scoping Start/End Hours To Include NOW TIME...');
      const nT:Date=new Date();const nowES:number=this.dT.gH(nT);
      earliestStart=nowES;latestEnd=nowES;
    }
    const padEStart:number=earliestStart;const padLEnd:number=latestEnd;
    let checkEStart:number;padEStart<0?checkEStart=earliestStart:checkEStart=padEStart;
    let checkLEnd:number;padLEnd>24?checkLEnd=latestEnd:checkLEnd=padLEnd;
    const stockRows:number=(checkLEnd-checkEStart)+1;
    const minRows:number=this.rCalProps.rCalMinNoRows;
    if(stockRows<minRows){
      const stockMinDiff:number=minRows-stockRows;let startOrEnd:string='checkEStart';
      for(let i=0;i<stockMinDiff;i++){if(startOrEnd==='checkEStart'){if(checkEStart-1>=0){checkEStart--;startOrEnd='checkLEnd'}else{startOrEnd='checkLEnd';i--}}else{if(checkLEnd+1<=24){checkLEnd++;startOrEnd='checkEStart'}else{startOrEnd='checkEStart';i--}}}
      if(this.rCalProps.rCalStartHr!==checkEStart){this.rCalProps.rCalStartHr=checkEStart};
      if(this.rCalProps.rCalEndHr!==checkLEnd){this.rCalProps.rCalEndHr=checkLEnd};
      this.setViewStyles();
      console.log('Added: '+this.rCalProps.rCalEndHr+' | '+this.rCalProps.rCalStartHr)
    }else{
      if(this.rCalProps.rCalStartHr!==checkEStart){this.rCalProps.rCalStartHr=checkEStart};
      if(this.rCalProps.rCalEndHr!==checkLEnd){this.rCalProps.rCalEndHr=checkLEnd};
      this.setViewStyles();
      console.log('Stock: '+this.rCalProps.rCalEndHr+' | '+this.rCalProps.rCalStartHr)
    };
  }
////////////////////////////////////////////////////////////////////////////////////////
  setViewStyles() {
    if(!this.updatingViewStyles){
      this.updatingViewStyles=true;
      this.logger.info('[TabRosters|setViewStyles] ('+this.rCalProps.rCalView+')...');
      $('.hl-current-hr-row').removeClass('hl-current-hr-row');
      $('.sdch-hl-line').removeClass('sdch-hl-line');
      setTimeout(() => {
        if(this.rCalProps.rCalView==='week'){this.setWeekViewStyles()}else{this.setDayViewStyles()}  
      },500);
    }else{this.logger.info('[TabRosters|setViewStyles] (Already Updating) - Skipping Request.')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  setWeekViewStyles() {
    this.logger.info('[TabRosters|setWeekViewStyles] ()...');
    // Selected Day Col Style
    const wVSelD:string=$('th.weekview-header.text-center.weekview-selected')[0].innerHTML.trim().slice(0,3).toLocaleLowerCase();
    const wVTDStr=(day:string):string=>{const dowCI:any={mon:'2',tue:'3',wed:'4',thu:'5',fri:'6',sat:'7',sun:'8'};const jqS:string='table tr td:nth-child('+dowCI[day]+')';return jqS};
    const wVTRStr=(hrI:number):string=>{const trNo:string=(hrI+1).toString();const jqS:string='table.weekview-normal-event-table tbody tr:nth-child('+trNo+')';return jqS}
    const wVJQDaySel:any=wVTDStr(wVSelD);
    const waitJQDayEle=setInterval(()=>{
      if($(wVJQDaySel).length>-1){
        clearInterval(waitJQDayEle);
        $(wVJQDaySel).addClass('hl-selected-day-col')
      }
    },250);
    // Current Time Line
    const cH:number=this.dT.gH(new Date());
    const cM:number=this.dT.gm(new Date());
    //const cH:number=11;const cM:number=30;
    const sDcH:string='tr.hl-current-hr-row>td.hl-selected-day-col>div';
    const sDcHStyle:string='sdch-hl-line';
    const sH:number=this.rCalProps.rCalStartHr;const eH:number=this.rCalProps.rCalEndHr;
    if(cH===sH||cH===eH||_.inRange(cH,sH,eH)){console.log(cH+' [IS] within Range of '+sH+' -> '+eH);
      const hrRows:any[]=_.range(sH,eH,1);
      const hrI:number=hrRows.findIndex(hr=>hr===cH);
      const wVJQHrSel:any=wVTRStr(hrI);
      const minAsPercH:number=Math.floor((cM/60)*100);
      const waitJQHrEle=setInterval(()=>{
        if($(wVJQHrSel).length>-1){clearInterval(waitJQHrEle);
          $(wVJQHrSel).addClass('hl-current-hr-row');
          if(this.dT.isTW(this.rCalProps.rCalCurrentDate)){$(sDcH).addClass(sDcHStyle).css('top',minAsPercH+'%')};
          this.rCalIsReady=true;this.swiperChanging=false;
          this.wvTimeColW=$('.calendar-hour-column').outerWidth();
          this.swiperChanging=false;
          this.updatingViewStyles=false;
        }
      },250)
    }else{
      console.log(cH+' [IS NOT] within Range of '+sH+' -> '+eH);
      this.rCalIsReady=true;this.swiperChanging=false;
      this.wvTimeColW=$('.calendar-hour-column').outerWidth();
      this.swiperChanging=false;
      this.updatingViewStyles=false;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  setDayViewStyles() {
    this.logger.info('[TabRosters|setDayViewStyles] ()...');
    const dVTRStr=(hrI:number):string=>{const trNo:string=(hrI+1).toString();const jqS:string='table.dayview-normal-event-table tbody tr:nth-child('+trNo+')';return jqS};
    const sDcH:string='tr.hl-current-hr-row>td.calendar-cell>div';
    const sDcHStyle:string='sdch-hl-line';
    const cH:number=this.dT.gH(new Date());const cM:number=this.dT.gm(new Date());
    const sH:number=this.rCalProps.rCalStartHr;const eH:number=this.rCalProps.rCalEndHr;
    if(cH===sH||cH===eH||_.inRange(cH,sH,eH)){console.log(cH+' [IS] within Range of '+sH+' -> '+eH);
      const hrRows:any[]=_.range(sH,eH,1);
      const hrI:number=hrRows.findIndex(hr=>hr===cH);
      const dVJQHrSel:any=dVTRStr(hrI);
      const minAsPercH:number=Math.floor((cM/60)*100);
      $(dVJQHrSel).addClass('hl-current-hr-row');
      if(this.rCalProps.rCalIsToday){$(sDcH).addClass(sDcHStyle).css('top',minAsPercH+'%')};
      this.swiperChanging=false;
      this.updatingViewStyles=false;
    }else{
      this.swiperChanging=false;
      this.updatingViewStyles=false;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  convertWeekRI2CE(rosItems:any) { this.logger.info('[TabRosters|convertRItems2CEvents] (rosItems[])...');
    const wpCode:string=this.currentWork.Code;
    const wpArea=(aId:number):string=>{let match:any[]=this.workAreas.filter(wa=>wa.Id===aId);if(match.length>0){return match[0].OperationalUnitName.slice(0,3).toUpperCase()}else{return 'NK'}};
    if(this.rCalProps.rCalEventSource.length>0){this.rCalProps.rCalEventSource=[]};
    this.currentRosObjArr=rosItems;
    for(let i=0;i<rosItems.length;i++){const rI:any=rosItems[i];
      let cE:any={allDay:false,startTime:null,endTime:null,title:'null'};
      cE.startTime=this.dT.Dut(rI.StartTime);
      cE.endTime=this.dT.Dut(rI.EndTime);
      const wA:string=wpArea(rI.OperationalUnit);
      cE.title='YOU @ '+wpCode+' ('+wA+')';
      this.rCalProps.rCalEventSource.push(cE)
    };
    this.rCalIsReady=true;
    this.rCalComponent.loadEvents();
    this.swiperChanging=false;
  }
////////////////////////////////////////////////////////////////////////////////////////
  rosCalGoToday() { this.logger.info('[TabRosters|today] ()...');
    if(!this.rCalProps.rCalIsToday){this.rCalProps.rCalCurrentDate=new Date();this.rCalProps.rCalCurrentDateShort=this.dT.format(this.rCalProps.rCalCurrentDate,'dd/MM/yyyy')}else{this.logger.info('[TabRosters|rosCalGoToday] - Already Showing TODAY.')};
  }
////////////////////////////////////////////////////////////////////////////////////////
  rosCalMarkDisabled=(date:Date)=>{let current=new Date();current.setHours(0,0,0);return date<current};
////////////////////////////////////////////////////////////////////////////////////////
  openRosCalNativeSearch() {
    this.logger.info('[TabRosters|openRosCalNativeSearch] ()...');
    this.rCNPickerIsOpen=true;
    const cDate:Date=this.rCalProps.rCalCurrentDate;const revD=(res:any)=>{let eR:any;res==='cancel'?eR=['warning','Date Select Cancelled']:eR=['error','Date Select Error'];this.evServ.showToast(eR[0],eR[1]);if(this.rCalProps.rCalCurrentDate!==cDate){this.rCalProps.rCalCurrentDate=cDate;this.rCalProps.rCalCurrentDateShort=this.dT.format(cDate,'dd/MM/yy')};this.rCNPickerIsOpen=false};
    this.dT.dpDateOnly(cDate)
    .then(nDRes=>{
      if(this.dT.isV(nDRes)){
        this.rCNPickerIsOpen=false;
        this.rCalProps.rCalCurrentDate=nDRes;
        this.rCalProps.rCalCurrentDateShort=this.dT.format(nDRes,'dd/MM/yy');
        this.evServ.showToast('success','Navigating to Date');
        this.loadRosCalEvents('new',nDRes);
        this.dT.isSD(nDRes,new Date())?this.rCalProps.rCalIsToday=true:this.rCalProps.rCalIsToday=false;
      }else{revD('invalid')}})
    .catch(nDErr=>{revD(nDErr)})
  }
////////////////////////////////////////////////////////////////////////////////////////
  async openWorkSelectASheet() {
    this.logger.info('[TabRosters|openWorkSelectASheet] ()...');
    this.rCWorkPickerIsOpen=true;
    const localNowWPId:number=this.currentWork.Id;let valIs:any[]=[];
    const revWP=()=>{if(this.currentWork.Id!==localNowWPId){this.currentWork=this.myWorkArr.filter(wp=>wp.Id===localNowWPId)[0]}};
    let wpASArr:any[]=[];for(let i=0;i<this.myWorkArr.length;i++){const rWPO:any=this.myWorkArr[i];valIs.push(i);if(rWPO.Id===this.currentWork.Id){wpASArr.push({title:'\uD83D\uDFE2 ('+rWPO.Code+') '+rWPO.CompanyName})}else{wpASArr.push({title:'\uD83D\uDD18 ('+rWPO.Code+') '+rWPO.CompanyName})};
    wpASArr.push({title:'\u274C CANCEL'});valIs.push(wpASArr.length-1);
    const wpASRes:any=await ActionSheet.showActions({title:'Workplace',message:'Select Employer/Workplace',options:wpASArr});
    this.rCWorkPickerIsOpen=false;
    if(!valIs.includes(wpASRes.index)){revWP();this.evServ.showToast('error','Change Work Error');}
    else if(wpASRes.index===wpASArr.length-1){revWP();this.evServ.showToast('warning','Cancelled - Using '+this.currentWork.Code)}
    else if(this.myWorkArr[wpASRes.index].Id===localNowWPId){this.evServ.showToast('warning',this.currentWork.Code+' Already Selected')}
    else{this.currentWork=this.myWorkArr[wpASRes.index];this.evServ.showToast('success','Showing Rosters for '+this.currentWork.Code)}}
  }
////////////////////////////////////////////////////////////////////////////////////////
  rosCalDoNextView() { this.logger.info('[TabRosters|rosCalNext] ()...');
    this.rCalComponent.slideNext();
    this.setViewStyles();
  }
////////////////////////////////////////////////////////////////////////////////////////
  rosCalDoLastView() { this.logger.info('[TabRosters|rosCalBack] ()...');
    this.rCalComponent.slidePrev();
    this.setViewStyles();
  }
////////////////////////////////////////////////////////////////////////////////////////
  onRCalWeekDayChange() {
    console.log('[TabShifts|onRCalWeekDayChange] (Week/Day Changed)...');
    this.setViewStyles();
  }
////////////////////////////////////////////////////////////////////////////////////////
  rosCalChangeViewMode() { this.logger.info('[TabRosters|changeMode] ()...');
    this.rCalProps.rCalView==='day'?this.rCalProps.rCalView='week':this.rCalProps.rCalView='day';
    this.setViewStyles();
  }
////////////////////////////////////////////////////////////////////////////////////////
  async onRosCalEventSelected(eventSelected:any) {
    if(!_.isEqual(eventSelected,this.rCalProps.rCalSelectedEvent)){
      this.logger.info('[TabRosters|onRosCalEventSelected] (Selected Event): [TITLE]: '+eventSelected.title+' - [START]: '+eventSelected.startTime+' >>> [END]: '+eventSelected.endTime);
      let tsOrRos:string;let nicePF:string;if(this.dT.isSD(new Date(),eventSelected.startTime)){nicePF='Today';tsOrRos='t/sheet'}else if(this.dT.isB(eventSelected.startTime,new Date())){nicePF='Completed';tsOrRos='t/sheet'}else{nicePF='Upcoming';tsOrRos='shift'};
      const unixST:number=this.dT.getUT(eventSelected.startTime);
      let selObj:any;const selRosObjArr:any[]=this.currentRosObjArr.filter(ro=>ro.StartTime===unixST);
      if(selRosObjArr.length>0){selObj=selRosObjArr[0]};
      let selId:number;tsOrRos==='t/sheet'?selId=selObj.MatchedByTimesheet:selId=selObj.Id;
      let niceD:string=this.dT.format(eventSelected.startTime,'EEE d MMM yyyy');
      let niceS:string=this.dT.format(eventSelected.startTime,'h:mmaaa');
      let niceE:string=this.dT.format(eventSelected.endTime,'h:mmaaa');
      let dur:Duration=this.dT.DurAsObj(eventSelected.startTime,eventSelected.endTime);
      let durStr:string;if(dur.hours>0){durStr=dur.hours+'h'};if(dur.minutes>0){durStr=durStr+dur.minutes+'m'};
      const rosCalEventAlert:any=await this.alertCtrl.create({
        header:eventSelected.title,
        subHeader:eventSelected.desc,
        message:'<div>'+niceD+' ('+nicePF+')</div><div>'+niceS+' - '+niceE+' ('+durStr+')</div>',
        buttons:[ {text:'View '+tsOrRos,handler:()=>{
          let navXtras:NavigationExtras={state:{origins:'rosters',id:selId}};
          if(tsOrRos==='t/sheet'){this.router.navigate(['/tabs/tabtsheets'],navXtras)}
          else{this.router.navigate(['/tabs/tabshifts'],navXtras)}
          }}, {text:'Close',handler:()=>{this.logger.info('[TabRosters|selectedEvent] (Closed/Dismissed)')}}
        ]
      });
      rosCalEventAlert.present()
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  closeEventDetail() {
    this.logger.info('[TabRosters|closeEventDetail] ()...');
    this.rCalProps.rCalSelectedEvent={allDay:false,endTime:null,startTime:null,title:null};
    this.rCalProps.rCalSelectedEventNice={niceStart:null,niceEnd:null,niceDur:{hours:0,minutes:0}};
  }
////////////////////////////////////////////////////////////////////////////////////////
  onRosCalViewTitleChanged(title:string) {
    if(title!==this.rCalProps.rCalViewTitle){this.rCalProps.rCalViewTitle=title;this.logger.info('[TabRosters|onViewTitleChanged] ('+title+')...')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  onRosCalCurrentDateChanged(newDate:Date){
    if(!this.dT.isSD(newDate,this.rCalProps.rCalCurrentDate)){
      this.swiperChanging=true;
      this.logger.info('[TabRosters|onCurrentDateChanged] (Date Changed): '+newDate);
      this.loadRosCalEvents('new',newDate);
      this.dT.isSD(newDate,new Date())?this.rCalProps.rCalIsToday=true:this.rCalProps.rCalIsToday=false;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  onRosCalRangeChanged(newRange:any) { this.logger.info('[TabRosters|onRosCalRangeChanged] (newRange) - No Fn Yet') }
////////////////////////////////////////////////////////////////////////////////////////
  onRosCalTimeSelected(timeSelected:any) { this.logger.info('[TabRosters|onRosCalTimeSelected] () - No Fn Yet') }
////////////////////////////////////////////////////////////////////////////////////////
  onRosCalDayHeaderSelected(dayheadSelected:any) { 
    if(!_.isEqual(dayheadSelected,this.rCalProps.rCalSelectedDayHead)){
      this.logger.info('[TabRosters|onDayHeadSelected] (Day Header Selected Changed) [FROM]: timeSelected:'+this.rCalProps.rCalSelectedDayHead.selectedTime+', events:['+this.rCalProps.rCalSelectedDayHead.events.join(',')+'], disabled:'+this.rCalProps.rCalSelectedDayHead.disabled+' ... [TO] ...timeSelected:'+dayheadSelected.selectedTime+', events:['+dayheadSelected.events.join(',')+'], disabled:'+dayheadSelected.disabled);
      this.rCalProps.rCalSelectedTime=dayheadSelected;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  onRosCalEventsContentScroll(event:any) { this.logger.info('[TabRosters|onRosCalEventsContentScroll] (onScroll-EVENT) '+event) }
////////////////////////////////////////////////////////////////////////////////////////
  disableRefresher(togV:boolean) { this.preventRefreshPull=togV }
////////////////////////////////////////////////////////////////////////////////////////
  async doRefresh(event) { this.logger.info('[TabRosters|doRefresh] (event)...');
    this.isRefreshing=true;this.refresher=event.target;this.headerProgress('timed',null,3000);this.refreshRostersData()
  }
////////////////////////////////////////////////////////////////////////////////////////
  async refreshRostersData() { this.logger.info('[TabRosters|refreshRostersData] ()...');setTimeout(()=>{this.refresher.complete()},3000) }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave() { this.logger.info('[TabRosters|ionViewWillLeave] ()...') }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidLeave() { this.logger.info('[TabRosters|ionViewDidLeave] ()...');
    const titleBar=$('.hcl-leftbar.'+this.tabKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+this.tabKey);const titleText=$('.sheriff-title.tight-wrap.'+this.tabKey);
    $(titleBar).css('width','0');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin');$(titleBar).removeClass('dimmed')
  }
////////////////////////////////////////////////////////////////////////////////////////
  headerProgress(mode:string,action:string,data:number) { this.logger.info('[TabRosters|headerProgress] ('+mode+','+action+','+data+')...');
    const circProgEle=$('.hcl-progcirc.'+this.tabKey);const starEle=$('.hcl-star.'+this.tabKey);const sLogoEle=$('.hcl-slogo.'+this.tabKey);
    const startRoutine=()=>{$(sLogoEle).css('transform','scale(.9)');this.progCirc.percent=0;$(starEle).css('transform','rotate(0deg)');if($(circProgEle).css('display','none')){$(circProgEle).css('display','unset')};this.progCirc.animation=false;this.progCirc.outerStrokeColor='#FF9800'};
    const finishRoutine=()=>{$(sLogoEle).css('transform','unset');this.progCirc.percent=100;$(starEle).css('transform','rotate(0deg)');this.progCirc.outerStrokeColor='#4caf50';this.myAniCSS('.hcl-progcirc.'+this.tabKey,'fadeOut',0,1400,'remove','hide');this.refresher.complete();this.isRefreshing=false};
    if(mode==='manual'){if(action==='start'){startRoutine();this.progCirc.animation=true}else if(action==='change'){this.progCirc.percent=data;$(starEle).css('transform','rotate('+((360*data)/100)+')deg');}else if(action==='finish'){finishRoutine();this.progCirc.animation=false}}else{startRoutine();const incPercEaLoop=(20/data)*1000;const rotStarEaLoop=(72/data)*1000;let starRotCount=0;const timedProgLoop=setInterval(()=>{this.progCirc.percent+=incPercEaLoop;starRotCount+=rotStarEaLoop;$(starEle).css('transform','rotate('+starRotCount+'deg)');if(this.progCirc.percent>=100){clearInterval(timedProgLoop);finishRoutine()}},200)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  myAniCSS(theEle:string,aniName:string,aniDel:number,aniDur:number,aniEnd:string,eleEnd:string) { // #myElement, tada, 0-1500, 0-1500, keep/remove, show/hide/remove
    this.logger.info('[TabRosters|myAniCSS] ('+theEle+','+aniName+','+aniDel+','+aniDur+','+aniEnd+','+eleEnd+')...');
    const doAni=()=>new Promise((resolve)=>{const aniStr='animate__animated animate__'+aniName;const delStr='animDel-'+aniDel;const durStr='animDur-'+aniDur;$(theEle).on('animationend',()=>{if(aniEnd==='remove'){$(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr)};if(eleEnd==='remove'){$(theEle).remove()};if(eleEnd==='hide'){$(theEle).css('display','none')};resolve(true)});if(aniDel>0){$(theEle).addClass(delStr)};if(aniDur>0){$(theEle).addClass(durStr)};if($(theEle).length>0){$(theEle).addClass(aniStr)}});doAni();
  }
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
}

