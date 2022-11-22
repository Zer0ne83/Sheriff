import { SyncService } from './../../services/sync.service';
import { TSheetAddPage } from './../../modals/detail/tsheet-detail/tsheet-add/tsheet-add.page';
import { DateTimeService } from './../../services/datetime.service';
import { DeputyService } from './../../services/deputy.service';
import { StorageService } from './../../services/storage.service';
import { DetailService } from './../../services/detail.service';
import { SQLiteService } from './../../services/sqlite.service';
import { Router, ActivatedRoute } from '@angular/router';
import { List2DBTblMap } from '../../services/baseDB';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll, ModalController, PopoverController, Platform, DomController, IonContent, IonRefresher } from '@ionic/angular';
import { DatePresetsComponent } from './../../popovers/datepresets/datepresets.component';
import { EventsService } from './../../services/events.service';
import { DateRangePage } from './../../modals/daterange/daterange.page';
import { NGXLogger } from 'ngx-logger';
import { TSheetDetailPage } from './../../modals/detail/tsheet-detail/tsheet-detail.page';
import { Dialog } from '@capacitor/dialog';
import { format, fromUnixTime, parseISO, parse, isBefore, isAfter, formatISO, differenceInDays, isSameDay, getUnixTime, subDays } from 'date-fns';
import { FairworkService } from 'src/app/services/fairwork.service';
import * as _ from 'lodash';
import * as $ from 'jquery';
const myls = localStorage;
////////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-tabtsheets', templateUrl: './tabtsheets.page.html', styleUrls: ['./tabtsheets.page.scss'] })
////////////////////////////////////////////////////////////////////////////////////////
export class TabTSheetsPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
@ViewChild(IonInfiniteScroll) iScrollTSheets: IonInfiniteScroll;
@ViewChild(IonVirtualScroll) vScrollTSheets: IonVirtualScroll;
//@ViewChild(IonContent, { static: false }) content: IonContent;
@ViewChild('tsheetsContent',{ static: false }) tsheetsContent:IonContent;
@ViewChild('tsheetsRefresher') tsheetsRefresher:IonRefresher;
////////////////////////////////////////////////////////////////////////////////////////
  // Passed Nav Data
  hasNavData:boolean = false;
  navDataId:number = 0;
  navDataOrigin:string;
  tsForOpen:number=0;
  // Tab/Page gVs
  hasLoaded:boolean = false;
  tabKey:string='tsheets';
  drModalOpts:any = {animated:false,showBackdrop:true,backdropDismiss:true,cssClass:'daterange-modal-class',component:DateRangePage,keyboardClose:true};
  tsDetailModalOpts:any = {animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'tsheet-detail-modal-class',component:TSheetDetailPage,keyboardClose:true};
  tsDetailModalOpen:boolean = false;
  addNewTSModalOpts:any = {animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'tsheet-detail-modal-class',component:TSheetAddPage,keyboardClose:true};
  addNewTSModalOpen:boolean = false;
  datePresetsPopOpts:any = {animated:false,cssClass:'sheriff-datepresets-popover',component:'div'};
  workAvatar:string = myls.getItem('workAvatar');
  workCode:string;
  workColor:string;
  incBright:boolean;
  meObj:any;
  meAvatar:string;
  workPeople:any[];
  // Show Income 
  showIncome:boolean=true;
  // Edit Mode
  editMode:boolean = false;
  eMConfirmOpen:boolean = false;
  eMIsDeleting:boolean = false;
  eMId:number;
  // Refresher/Header Anim
  isRefreshing:boolean;
  refresher:any;
  preventRefreshPull:boolean=false;
  progCirc = { responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:250,};
  getAllDataPerc:any;
  refreshProgPerc:number = 0;
  // Summary Bar -------------------
  showSearchBar:boolean = false;
  drModalOpen:boolean = false;
  dpPopOpen:boolean = false;
  datePreset:string;
  datePresetValue:string;
  myObj:any;
  workName:string;
  workAreas:any[] = [];
  listOpts:any=null;
  toDateIsToday:boolean = true;
  isCustomRange:boolean = false;
  customRange:any;
  // DB Items ----------------------
  dbTblName:string = List2DBTblMap[(this.router.url.split('/')[this.router.url.split('/').length-1])];
  dbHasTbl:boolean = this.dS.getUDBTables().includes(this.dbTblName);
  minStartTimeUTS:number;minStartTimeDate:Date;
  maxStartTimeUTS:number;maxStartTimeDate:Date;
  // Whole List Items --------------
  initRes:any[] = [];
  initList:any[] = [];
  listTtlItms:number;
  foundFromDate:Date
  foundFromNice:string;
  summaryFromDate:string;
  foundToDate:Date;
  foundToNice:string;
  summaryToDate:string;
  endOfList:boolean = false;
  totalItemCount:number;
  // Batch List Items ---------------
  btDateEndUTS:number;
  btDateStartUTS:number;
  batchLimit:number = 20;
  batchOffset:number = 0;
  batchStart:number = 0;
  batchEnd:number = 20;
  showItemCount:number;
  dbRangeCount:number;
  dbRangeMinMax:any;
  // List Order
  orderBy:string = 'StartTime';
  didSwapOrder:boolean=false;
  orderDir:string;
  listItms:any[] = [];
  prevTSDate:Date;
  sGroupIndex:number = 0;
  allHrsTotal:number = 0;
  allIncomeTotal:number = 0;
  allGroupedHrsTotal:number = 0;
  allGroupedIncTotal:number = 0;
  // Refresh Items
  newItems:any[]=[];
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private sqlServ: SQLiteService,
    private dS: DetailService,
    private dT: DateTimeService,
    private router: Router,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private evServ: EventsService,
    private storeServ: StorageService,
    private deputy: DeputyService,
    private platform: Platform,
    private syncServ: SyncService,
    private fwServ: FairworkService
    ) { this.route.queryParams.subscribe(pData=>{
      if(Object.keys(this.router.getCurrentNavigation().extras).includes('state')){
        this.hasNavData=true;
        this.navDataOrigin=this.router.getCurrentNavigation().extras.state.origin;
        this.navDataId=this.router.getCurrentNavigation().extras.state.id;
      }else{this.hasNavData=false}})
    }
////////////////////////////////////////////////////////////////////////////////////////
  async openTSFromNavData(tsId:number) { this.logger.info('[TabTSheets|openTSFromNavData] ('+tsId+')...');
    this.tsForOpen=0;let inList:boolean=false;let tsO:any;const initLObIndex:number=this.listItms.findIndex(ts=>ts.Id===tsId);
    if(initLObIndex>0){inList=true;tsO=this.listItms[initLObIndex];this.tsForOpen=tsId}
    else{inList=false;const tsORaw:any=await this.sqlServ.getSingleTimesheet(tsId);tsO=await this.formatTSheet(tsORaw)};
    setTimeout(()=>{
      if(inList){this.vScrollTSheets.positionForItem(initLObIndex).then(tsPos=>{const adjustPos:number=tsPos-72;console.log(adjustPos);this.tsheetsContent.scrollToPoint(0,adjustPos,500)})};
      setTimeout(()=>{this.openDetail(tsO)},750)
    },1000);
  }
////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() { this.logger.info('[TabTSheets|ngOnInit] ()...');
    this.platform.ready().then(()=>{setTimeout(()=>this.hasLoaded=true);this.doInitRefresh('init')});
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doInitRefresh(mode) {
    this.logger.info('[TabTasks|doReInitFresh] ('+mode+')...'); 
    this.initFetchData();
    if(mode==='refresh'||mode==='init'){
      if(this.isRefreshing){
        this.refreshProgPerc=0;this.refreshProgPerc+=10;this.headerProgress('manual','change',this.refreshProgPerc);
        this.evServ.subscribe('refreshTSProg',stage=>{ //Stages: (1) getFromAPI(DeputyServ), (2) diffCheck(SyncServ), (3) insertMissing(SQLServ), (4) rerender(Below)
          if(stage==='getapi'){this.refreshProgPerc+=20;this.headerProgress('manual','change',this.refreshProgPerc)};
          if(stage==='diffcheck'){this.refreshProgPerc+=20;this.headerProgress('manual','change',this.refreshProgPerc)};
          if(stage==='insertupload'){this.refreshProgPerc+=20;this.headerProgress('manual','change',this.refreshProgPerc)};
          if(stage==='render'){this.refreshProgPerc+=20;this.headerProgress('manual','change',this.refreshProgPerc)};
        })
      };
      const newIRes:any[]=await this.syncServ.doTSheetsSync(mode);
      if(newIRes.length>0){
        this.newItems=newIRes;
        const iArrs:any[]=['initRes','initList','listItms'];  
        for(let i=0;i<iArrs.length;i++){this[iArrs[i]]=[]};
        this.batchOffset=0;this.sGroupIndex=0;this.allHrsTotal=0;this.allIncomeTotal=0;this.allGroupedHrsTotal=0;this.allGroupedIncTotal=0;this.prevTSDate=null;
        this.logger.info('[TabTSheets|doReInitRefresh] (Refresh): Updated/Added '+newIRes.length+ ' TSheet Items!');
        this.evServ.publish('refreshTSProg','render');
        this.evServ.publish('doInitFetchData',true);
      }else{
        this.logger.info('[TabTSheets|doReInitRefresh] (Refresh): No New TSheet Items Found');
        if(this.isRefreshing){
          this.evServ.destroy('refreshTSProg');
          this.refreshProgPerc+=80;this.headerProgress('manual','change',this.refreshProgPerc);
          setTimeout(()=>{this.headerProgress('manual','finish',null)},250);
        }
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  disableRefresher(togV:boolean) { this.preventRefreshPull=togV }
////////////////////////////////////////////////////////////////////////////////////////
  async doInitSync(){this.logger.info('[TabTSheets|doInitSync] ()...');this.syncServ.doTSheetsSync('init')}
////////////////////////////////////////////////////////////////////////////////////////
  async ionViewWillEnter(){this.logger.info('[TabTSheets|ionViewWillEnter] ()...');
    const savedShowIncomeOpt:any=await this.storeServ.getObject('settingsPayratesOpts');
    if(savedShowIncomeOpt!==null){this.showIncome=savedShowIncomeOpt.show.value}else{this.showIncome=true};
  } 
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter(){this.logger.info('[TabTSheets|ionViewDidEnter] ()...');this.loadListPrefs()}
////////////////////////////////////////////////////////////////////////////////////////
  toUCase(s:string){return s.charAt(0).toUpperCase()+s.slice(1)}
////////////////////////////////////////////////////////////////////////////////////////
  async loadListPrefs() { this.logger.info('[TabTSheets|loadListPrefs] ()...');
    this.myObj=this.dS.myObj;this.meObj=this.dS.meObj;this.workAreas=this.dS.workAreas;this.workAvatar=this.dS.workAva;this.meAvatar=this.dS.meAva;this.workCode=this.dS.workCode;this.workName=this.dS.workName;this.workColor=this.dS.workColor;this.workPeople=this.dS.pplArr;this.incBright=this.dS.incBright;
    const setListProps=async()=>{let doStoreSave:boolean=false;const isOK=(p:string)=>{if(p!==null&&p!==undefined&&p!==''&&p.length>0){return true}else{doStoreSave=true;return false}};
      if(isOK(this.listOpts.orderDir)){this.orderDir=this.listOpts.orderDir}else{this.listOpts.orderDir='desc';this.orderDir='desc'};
      if(isOK(this.listOpts.datePreset)){this.datePreset=this.listOpts.datePreset}else{this.listOpts.datePreset='month';this.datePreset='month'};
      if(isOK(this.listOpts.datePresetValue)){this.datePresetValue=this.listOpts.datePresetValue}else{this.listOpts.datePresetValue='Month';this.datePresetValue='Month'};
      if(doStoreSave){let newListP:any=await this.storeServ.getObject(this.deputy.uUK+'ListPrefs');if(newListP.hasOwnProperty('tsheets')){newListP.tsheets=this.listOpts}else{newListP['tsheets']=this.listOpts};this.storeServ.setObject(this.deputy.uUK+'ListPrefs',newListP)}
    };
    const stdTSListOpts:any={datePreset:'month',datePresetValue:'Month',orderDir:'desc'};
    if(this.listOpts!==null){setListProps()}
    else{const storedListOpts:any=await this.storeServ.getObject(this.deputy.uUK+'ListPrefs');
      if(storedListOpts!==null){
        if(storedListOpts.hasOwnProperty('tsheets')){this.listOpts=storedListOpts.tsheets;setListProps()}
        else{this.listOpts=stdTSListOpts;setListProps();let newSLO:any=storedListOpts;newSLO['tsheets']=stdTSListOpts;this.storeServ.setObject(this.deputy.uUK+'ListPrefs',newSLO)}
      }else{this.listOpts=stdTSListOpts;setListProps();this.storeServ.setObject(this.deputy.uUK+'ListPrefs',{shifts:null,tsheets:stdTSListOpts})}
    }
    const isListen=this.evServ.channels['doInitFetchData'];
    if(isListen){this.evServ.publish('doInitFetchData',true)};
    if(this.hasNavData){this.openTSFromNavData(this.navDataId)};
  }
////////////////////////////////////////////////////////////////////////////////////////  
  initFetchData() {
    this.logger.info('[TabTSheets|initFetchData] (Event) Channel: doInitFetchData [Listening...]');
    this.evServ.subscribe('doInitFetchData', async() => {
      this.evServ.destroy('doInitFetchData');
      this.batchOffset=0;this.sGroupIndex=0;this.allHrsTotal=0;this.allIncomeTotal=0;this.allGroupedHrsTotal=0;this.allGroupedIncTotal=0;this.prevTSDate=null;
      this.logger.info('[TabTSheets|initFetchData] (Event) Channel: doInitFetchData [TIGGERED!]');
      if (this.dbHasTbl) {
        this.listTtlItms = await this.sqlServ.getItemCount(this.dbTblName);
        if (this.listTtlItms>0) {
          const mmObj:any = await this.sqlServ.getTSheetsDateRange();
          this.minStartTimeUTS = mmObj.min;
          this.maxStartTimeUTS = mmObj.max;
          this.minStartTimeDate = this.dT.Dut(this.minStartTimeUTS);
          this.maxStartTimeDate = this.dT.Dut(this.maxStartTimeUTS);
          let summaryF:Date; let summaryT:Date;
          if(this.isCustomRange){
            this.btDateStartUTS = getUnixTime(this.customRange.start);
            this.btDateEndUTS = getUnixTime(this.customRange.end);
          } else {
            const allDays:number = this.dT.DiffInDays(new Date(),this.minStartTimeDate);
            const listRDays:any = {week:7,fnight:14,month:28,qtr:84,half:182,year:365,all:allDays};
            const presetDays:number = listRDays[this.datePreset];
            const nowDT:Date=new Date();
            this.btDateEndUTS = getUnixTime(nowDT);
            this.btDateStartUTS = this.btDateEndUTS-(86400*presetDays);
            const summaryEnd:Date = this.dT.Dut(this.btDateStartUTS);
            summaryF=summaryEnd;
            summaryT=nowDT;
          };
          this.dbRangeCount = await this.sqlServ.getTSheetRangeCount(this.btDateStartUTS,this.btDateEndUTS);
          this.dbRangeMinMax = await this.sqlServ.getTSheetsRangeMinMax({start:this.btDateStartUTS,end:this.btDateEndUTS});
          const initResData = await this.sqlServ.getXTSheetItems({start:this.btDateStartUTS,end:this.btDateEndUTS},{by:this.orderBy,dir:this.orderDir},this.batchLimit,this.batchOffset);
          this.updateSummary(summaryF,summaryT,initResData);
          this.initRenderList(initResData);
        }
      }
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initRenderList(initResData) {
    this.logger.info('[TabTSheets|initRenderList] ()...');
    this.initList=[];this.listItms=[];
    this.initRes = initResData;
    for (let i=0;i<initResData.length;i++) {
      const niceInitOb = await this.formatTSheet(initResData[i]);
      this.initList.push(niceInitOb)
    }
    this.listItms = this.initList;
    if (this.initRes.length===this.dbRangeCount) { this.iScrollTSheets.disabled=true;this.endOfList=true
    } else { this.iScrollTSheets.disabled=false;this.endOfList=false }
    if(this.isRefreshing){
      this.refreshProgPerc+=10;this.headerProgress('manual','update',this.refreshProgPerc);setTimeout(()=>{this.headerProgress('manual','finish',null)},250);
      if(this.newItems.length>0){
        const waitNewLoop=setInterval(()=>{
          if($('.tsheet-item-isnew-wrapper.isnew-'+this.newItems[0]).length>0){
            clearInterval(waitNewLoop);
            setTimeout(() => {
              let aD:number=0.30;for(const newIId of this.newItems){
                aD+=0.25;const tE=$('.tsheet-item-isnew-wrapper.isnew-'+newIId);
                $(tE).css('--animate-delay',aD.toString()+'s');
                $(tE).addClass('showisnew');
                setTimeout(()=>{$(tE).removeClass('showisnew')},1000+(aD*1000))
              }
            },200);
          }
        },100)
      }
    }
    if(this.hasNavData){this.openTSFromNavData(this.navDataId)};
  }
////////////////////////////////////////////////////////////////////////////////////////
  updateSummary(summaryFrom:Date,summaryTo:Date,rawLD:any[]) {
    this.logger.info('[TabTSheets|updateSummary] ()...');
    if(!this.isCustomRange){
      this.summaryFromDate=this.dT.Nd(summaryFrom);
      this.summaryToDate=this.dT.Nd(summaryTo);
    }
    this.showItemCount=this.dbRangeCount;
    let startUTSIndex:any;let endUTSIndex:any; let startUTSDate:Date; let endUTSDate:Date;
    if(this.orderDir==='desc'){
      startUTSIndex=rawLD[rawLD.length-1].StartTime;
      endUTSIndex=rawLD[0].StartTime
    }else{
      startUTSIndex=rawLD[0].StartTime;
      endUTSIndex=rawLD[rawLD.length-1].StartTime
    };
    startUTSDate=this.dT.Dut(startUTSIndex);
    endUTSDate=this.dT.Dut(endUTSIndex);
    this.foundFromDate = this.dT.Dut(this.dbRangeMinMax.min);
    this.foundFromNice = this.dT.LNd(this.foundFromDate);
    this.foundToDate = this.dT.Dut(this.dbRangeMinMax.max);
    this.foundToNice = this.dT.LNd(this.foundToDate);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async getPay(tsheetObj:any):Promise<any> {
    const payRes:any=await this.fwServ.getShiftPay(tsheetObj);
    return Promise.resolve(payRes);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async formatTSheet(rtsOb:any):Promise<any> {
    let ntsOb:any=rtsOb;
    const wNames=(oUId:number):any=>{let oUArr=this.workAreas.filter(oU=>(oU.Id===oUId));return {cname:oUArr[0]['CompanyName'],warea:oUArr[0]['OperationalUnitName']}};
    const statProps:any[]=['IsInProgress','Disputed','TimeApproved','Discarded'];
    ntsOb.nDate = this.dT.LNd(new Date(rtsOb.Date));
    ntsOb.nStartTime = this.dT.NTut(rtsOb.StartTime);
    ntsOb.nEndTime = this.dT.NTut(rtsOb.EndTime);
    if(rtsOb.TotalTime.toString().includes('.')){
      const ttArr:any[]=rtsOb.TotalTime.toString().split('.');let nDurH:string=ttArr[0].toString();let nDurM:string;
      const nDurMins:number=Math.round(Number('0.'+ttArr[1])*60);nDurMins<10?nDurM='0'+nDurMins.toString():nDurM=nDurMins.toString();
      ntsOb['nDur']=nDurH+':'+nDurM;
    }else{ntsOb['nDur']=rtsOb.TotalTime+':00'}
    const nNames = wNames(rtsOb.OperationalUnit);
    nNames.warea?ntsOb.nOperationalUnit=nNames.warea:ntsOb.nOperationalUnit='NK';
    if(nNames.cname){if(nNames.cname===this.workName){ntsOb.nCompanyName=this.workCode}else{ntsOb.nCompanyName=nNames.cname}}
    else{ntsOb.nOperationalUnit=this.workName};
    for(let i=0;i<statProps.length;i++){rtsOb[statProps[i]]===-1?ntsOb['n'+statProps[i]]=null:ntsOb['n'+statProps[i]]=!!rtsOb[statProps[i]]};
    ntsOb['nIncome']=await this.getPay(rtsOb);
    return Promise.resolve(ntsOb);
  }
////////////////////////////////////////////////////////////////////////////////////////
  calHeaderGroups=(record:any,recordIndex:number,records:any[])=>{
    let headData={week:null,month:null};
    if(recordIndex===0){headData.week=this.dT.format(this.dT.sOW(new Date(record.Date)),'d MMMM')+' - '+this.dT.format(this.dT.eOW(new Date(record.Date)),'d MMMM yyyy');return headData}
    else if(recordIndex>0){const prevD:Date=new Date(records[recordIndex-1].Date);const thisD:Date=new Date(record.Date);
      if(!this.dT.isSW(prevD,thisD)){headData.week=this.dT.format(this.dT.sOW(thisD),'d MMMM')+' - '+this.dT.format(this.dT.eOW(thisD),'d MMMM yyyy')};
      if(!this.dT.isSM(prevD,thisD)){headData.month=this.dT.gM(thisD)};
      return headData}
    else{return null}
  }
////////////////////////////////////////////////////////////////////////////////////////
  groupTotals=(record:any,recordIndex:number,records:any[])=>{
    if(recordIndex+1!==records.length){
      const nextD:Date=new Date(records[recordIndex+1].Date);const thisD:Date=new Date(record.Date);
      this.allHrsTotal+=records[recordIndex].TotalTime;this.allIncomeTotal+=records[recordIndex].nIncome.t;
      if(!this.dT.isSW(nextD,thisD)){let weekTtlCount=0;let weekTtlIncCount=0;const gSI=this.sGroupIndex;const gEI=recordIndex+1;
        for(let i=gSI;i<gEI;i++){this.allGroupedHrsTotal+=records[i].TotalTime;this.allGroupedIncTotal+=records[i].nIncome.t;weekTtlCount+=records[i].TotalTime;weekTtlIncCount+=records[i].nIncome.t};this.sGroupIndex=recordIndex+1;
        const weekTtlMins:number=weekTtlCount*60;
        const weekWholeHrs:number=Math.floor(weekTtlMins/60);
        const weekRemainMins:number=Math.round(weekTtlMins-(weekWholeHrs*60));
        return {t:{h:weekWholeHrs.toFixed(0),m:weekRemainMins.toFixed(0)},i:weekTtlIncCount.toFixed(0)}
      }
    }else{
      const thisRecHrs:number=records[recordIndex].TotalTime;const thisRecInc:number=records[recordIndex].nIncome.t;
      const balLWeekHrs:number=(this.allHrsTotal-this.allGroupedHrsTotal)+thisRecHrs;const balLWeekInc:number=(this.allIncomeTotal-this.allGroupedIncTotal)+thisRecInc;
      this.allHrsTotal=0;this.allGroupedHrsTotal=0;this.allIncomeTotal=0;this.allGroupedIncTotal=0;
      const weekTtlMins:number=balLWeekHrs*60;
      const weekWholeHrs:number=Math.floor(weekTtlMins/60);
      const weekRemainMins:number=Math.round(weekTtlMins-(weekWholeHrs*60));
      return {t:{h:weekWholeHrs.toFixed(0),m:weekRemainMins.toFixed(0)},i:balLWeekInc.toFixed(0)};
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async getTSheets(offset:number):Promise<any> { this.logger.info('[TabTSheets|getTSheets] ('+offset+')...');
    try {
      const thisBatch=await this.sqlServ.getXTSheetItems({start:this.btDateStartUTS,end:this.btDateEndUTS},{by:this.orderBy,dir:this.orderDir},this.batchLimit,this.batchOffset);
      for (let i=0;i<thisBatch.length;i++) { const niceTSOb = await this.formatTSheet(thisBatch[i]);this.listItms.push(niceTSOb) }
      return Promise.resolve(true);
    } catch (getTSErr) { this.logger.info('[TabTSheets|getTSheets] (Error): '+getTSErr) }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async feedItems(event) {
    this.batchOffset += this.batchLimit;
    this.batchStart = this.listItms.length;
    this.batchEnd = this.batchStart+this.batchLimit;
    await this.getTSheets(this.batchOffset);
    if (this.listItms.length===this.dbRangeCount) {
      this.iScrollTSheets.disabled=true;
      this.endOfList=true
    } else {
      this.iScrollTSheets.disabled=false;
      this.endOfList=false
    }
    event.target.complete();
    this.vScrollTSheets.checkEnd()
  }
////////////////////////////////////////////////////////////////////////////////////////
  async openDetail(tsheetObj:any){
    if(!this.editMode){ this.logger.info('[TabTSheets|openDetail] (tsheetObj)...');
      if(tsheetObj.Id!==this.tsForOpen){this.tsForOpen=0};
      let thisTSDModalOpts=this.tsDetailModalOpts;
      thisTSDModalOpts['componentProps']={ts:tsheetObj,wareas:this.workAreas,showincome:this.showIncome};
      const tsDetailModal = await this.modalCtrl.create(thisTSDModalOpts);
      document.addEventListener('ionModalDidPresent',()=>{this.tsDetailModalOpen=true;this.logger.info('[TabTSheets|DetailModal] (ionModalDidPresent)')});
      tsDetailModal.onWillDismiss().then(()=>{this.tsDetailModalOpen=false;this.logger.info('[TabTSheets|DetailModal] (ionModalWillDismiss)')});
      tsDetailModal.onDidDismiss().then(({data,role})=>{
        this.logger.info('[TabTSheets|DetailModal] (ionModalDidDismiss) >>> (Data): '+data+' >>> (Role): '+role);
      });
      return await tsDetailModal.present()
    }else{
      this.logger.info('[TabTSheets|deleteTSItem] (tsheetObj)...');
      const tsId=tsheetObj.Id;this.eMId=tsId;this.eMConfirmOpen=true;
      const {value}=await Dialog.confirm({title:'Confirm',message:'Are you sure you want to delete Timesheet #'+tsId+'?'});
      if(value){
        this.logger.info('[TabTSheets|EditMode|ConfirmDelete] (CONFIRMED) - OK - Deleting TS #'+tsId);
        this.eMConfirmOpen=false;this.eMIsDeleting=true;
        this.logger.info('[TabTSheets|EditMode|Deleting] (Deleting) TS #'+tsId+'...');
        const dbDel = await this.sqlServ.deleteItem('timesheets','Id',tsId);
        if(dbDel){
          this.evServ.showToast('success','Timesheet #'+tsId+' Deleted');
          this.logger.info('[TabTSheets|deleteTSItem] (DB Delete): SUCCESS! - Deleted TS Id:'+tsId);
          this.listItms=this.listItms.filter(ts=>ts.Id!==tsId);
          this.eMIsDeleting=false;
          this.eMId=null;
        }else{
          this.eMIsDeleting=false;
          this.evServ.showToast('error','Error: Not Deleted');
          this.logger.info('[TabTSheets|deleteTSItem] (DB Delete): FAIL! - Error Deleting TS Id:'+tsId);
          this.eMId=null;
        }
      }else{
        this.logger.info('[TabTSheets|EditMode|ConfirmDelete] (CANCEL) - CANCELLED - Not Deleting TS #'+tsId);
        this.eMConfirmOpen=false;this.eMIsDeleting=false;this.eMId=null
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  swapOrder() { this.logger.info('[TabsTSheets|swapOrder] ()...');
    this.didSwapOrder=true;this.sGroupIndex=0;this.orderDir==='desc'?this.listOpts[this.tabKey].orderDir='asc':this.listOpts[this.tabKey].orderDir='desc';
    this.storeServ.setObject(this.deputy.uUK+'ListPrefs',this.listOpts);
    this.doInitRefresh('init');
    this.loadListPrefs();
  }
////////////////////////////////////////////////////////////////////////////////////////
  toggleInfiniteScroll(){this.iScrollTSheets.disabled=!this.iScrollTSheets.disabled}
////////////////////////////////////////////////////////////////////////////////////////
  animateInSummaryVal(vN:string) {
    const vS='.'+vN+'-val.'+this.tabKey;const vA='update-summaryval-ani';
    const dA=()=>new Promise((resolve)=>{$(vS).on('animationend',()=>{resolve(true)});
    const w=setInterval(()=>{if($(vS).length>0){clearInterval(w);$(vS).addClass(vA)}},50)});
    dA().then(()=>{$(vS).removeClass(vA)});
  }
////////////////////////////////////////////////////////////////////////////////////////
  toggleEditMode(startStop:string) {
    this.logger.info('[TabTSheets|doEditMode] ('+startStop+')...');
    if(startStop==='start'){$('.start-edit-mode-ico').css('color','#ff9800')};
    $('.start-edit-mode-ico').css('color','#727272');let togVal:boolean;startStop==='start'?togVal=true:togVal=false;this.editMode=togVal;
  }
////////////////////////////////////////////////////////////////////////////////////////
  async showDPPopover(event) { this.logger.info('[TabTSheets|showDPPopover] (event)...');
    const dpPop=await this.popCtrl.create({event:event,component:DatePresetsComponent,componentProps:{listName:this.tabKey,selectedName:this.datePreset},cssClass:'sheriff-pop-datepresets-class',animated:false,showBackdrop:true,backdropDismiss:true});
    document.addEventListener('ionPopoverWillPresent',()=>{this.dpPopOpen=true});
    document.addEventListener('ionPopoverWillDismiss',()=>{this.dpPopOpen=false});
    await dpPop.present();
    const {data,role}=await dpPop.onDidDismiss();
    if(role==='new'){
      console.log(data);
      console.log(role);
      if(this.isCustomRange){this.isCustomRange=false;this.customRange={}};
      this.datePreset=data;this.datePresetValue=this.toUCase(data);this.listOpts.datePreset=data;this.listOpts.datePresetValue=this.toUCase(data);
      let newListPrefObj:any=await this.storeServ.getObject(this.deputy.uUK+'ListPrefs');
      if(newListPrefObj.hasOwnProperty('tsheets')){newListPrefObj.tsheets=this.listOpts}else{newListPrefObj['tsheets']=this.listOpts};
      this.storeServ.setObject(this.deputy.uUK+'ListPrefs',newListPrefObj);
      this.doInitRefresh('init');this.loadListPrefs()
    }else{
      if(role==='same'){this.logger.info('[TabTSheets|showDPPopover] (SAME) No Change.')}
      else if(role==='backdrop'){this.logger.info('[TabTSheets|showDPPopover] (BACKDROP) No Change.')}
      else{this.logger.info('[TabTSheets|showDPPopover] (ERROR) No Change.')}
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async openCustomRange() { this.logger.info('[TabsTSheets|openCustomRange] ()...');
    let thisMOpts=this.drModalOpts;const nSD:Date=this.dT.Dn(this.summaryFromDate);const nED:Date=this.dT.Dn(this.summaryToDate);
    thisMOpts['componentProps']={list:this.tabKey,dates:{start:nSD,end:nED},mms:{min:this.minStartTimeUTS,max:this.maxStartTimeUTS}};
    let drModal=await this.modalCtrl.create(thisMOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.drModalOpen=true});
    drModal.onWillDismiss().then(()=>{this.drModalOpen=false});
    drModal.onDidDismiss().then(({data,role})=>{
      let sU=false;let eU=false;
      if(role==='backdrop'){this.evServ.showToast('cross','Cancelled')}
      else{
        if(data==='nochange'){sU=false;eU=false}
        else{
          if(!isSameDay(nSD,data.start)){sU=true;this.summaryFromDate=this.dT.Nd(data.start);this.animateInSummaryVal('drstart')};
          if(!isSameDay(nED,data.end)){eU=true;this.summaryToDate=this.dT.Nd(data.end);this.animateInSummaryVal('drend')};
          this.isCustomRange=true;this.customRange={start:data.start,end:data.end};
          this.doInitRefresh('refresh');
          this.loadListPrefs()
        }
        let tI:string;let tM:string;
        if(!sU&&!eU){tI='warning';tM='Range Unchanged'}
        else{tI='success';sU&&eU?tM='Range Updated':tM=(sU?'Start':'End')+' Date Updated'};
        this.evServ.showToast(tI,tM);
      }
    })
    return drModal.present();
  }
////////////////////////////////////////////////////////////////////////////////////////
  headerProgress(mode, action, data) {
    this.logger.info('[TabTSheets|headerProgress] (' + mode + ', ' + action + ', ' + data + ')...');
    const circProgEle = $('.hcl-progcirc.' + this.tabKey); const starEle = $('.hcl-star.' + this.tabKey); const sLogoEle = $('.hcl-slogo.' + this.tabKey);
    const startRoutine = () => { $(sLogoEle).css('transform', 'scale(.9)'); this.progCirc.percent = 0; $(starEle).css('transform', 'rotate(0deg)'); if ($(circProgEle).css('display', 'none')) { $(circProgEle).css('display', 'unset') } this.progCirc.animation = false; this.progCirc.outerStrokeColor = '#FF9800'; }
    const finishRoutine = () => { $(sLogoEle).css('transform', 'unset'); this.progCirc.percent = 100; $(starEle).css('transform', 'rotate(0deg)'); this.progCirc.outerStrokeColor = '#4caf50'; this.myAniCSS('.hcl-progcirc.' + this.tabKey, 'fadeOut', 0, 1400, 'remove', 'hide'); this.refresher.complete(); this.isRefreshing = false; }
    if (mode === 'manual') {
      if (action === 'start') {startRoutine();this.progCirc.animation=true};
      if (action === 'change') {this.progCirc.percent=data;$(starEle).css('transform','rotate('+((360*data)/100)+')deg')};
      if (action === 'finish') { finishRoutine();this.progCirc.animation=false}
    }
    if (mode === 'timed') { startRoutine(); const incPercEaLoop = (20 / data) * 1000; const rotStarEaLoop = (72 / data) * 1000; let starRotCount = 0; const timedProgLoop = setInterval(() => { this.progCirc.percent += incPercEaLoop; starRotCount += rotStarEaLoop; $(starEle).css('transform', 'rotate(' + starRotCount + 'deg)'); if (this.progCirc.percent >= 100) { clearInterval(timedProgLoop); finishRoutine(); } }, 200); }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doRefresh(event) { this.logger.info('[TabTSheets|doRefresh] (event)...');
    if(this.tsForOpen>0){this.tsForOpen=0};
    this.isRefreshing = true;this.refresher = event.target;
    this.headerProgress('manual','start',null);
    this.doInitRefresh('refresh');
  }
////////////////////////////////////////////////////////////////////////////////////////
  async addTSheet() { this.logger.info('[TabTSheets|addTSheets] ()...');
    let lastTSArea:any;this.orderDir==='desc'?lastTSArea=this.listItms[0].OperationalUnit:lastTSArea=this.listItms[this.listItms.length-1].OperationalUnit;
    let thisAddTSModalOpts=this.addNewTSModalOpts;thisAddTSModalOpts['componentProps']={wareas:{list:this.workAreas,lastId:lastTSArea}};
    const addNewTSModal=await this.modalCtrl.create(thisAddTSModalOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.addNewTSModalOpen=true});
    addNewTSModal.onWillDismiss().then(()=>{this.addNewTSModalOpen=false});
    addNewTSModal.onDidDismiss().then(({data,role})=>{
      /// ADD API & DB TIMESHEET INSERT FNS
    })
    return await addNewTSModal.present()
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidLeave() { this.logger.info('[TabTSheets|ionViewDidLeave] ()...');
    if(this.tsForOpen>0){this.tsForOpen=0};
    const titleBar=$('.hcl-leftbar.'+this.tabKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+this.tabKey);const titleText=$('.sheriff-title.tight-wrap.'+this.tabKey);
    $(titleBar).css('width','0');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin');$(titleBar).removeClass('dimmed')
  }
////////////////////////////////////////////////////////////////////////////////////////
  myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) { // #myElement, tada, 0-1500, 0-1500, keep/remove, show/hide/remove
    this.logger.info('[TabTSheets|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
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