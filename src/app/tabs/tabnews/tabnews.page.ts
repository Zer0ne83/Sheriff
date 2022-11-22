import { DateTimeService } from './../../services/datetime.service';
import { SQLiteService } from './../../services/sqlite.service';
import { DetailService } from './../../services/detail.service';
import { StorageService } from 'src/app/services/storage.service';
import { DeputyService } from 'src/app/services/deputy.service';
import { EventsService } from 'src/app/services/events.service';
import { SyncService } from 'src/app/services/sync.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, IonInfiniteScroll, ModalController, PopoverController, IonContent, IonRefresher } from '@ionic/angular';
import { PeopleDetailComponent } from 'src/app/popovers/peopledetail/peopledetail.component';
import { NewsDetailPage } from './../../modals/detail/news-detail/news-detail.page';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { NewsAddPage } from 'src/app/modals/detail/news-detail/news-add/news-add.page';
////////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-tabnews', templateUrl: './tabnews.page.html', styleUrls: ['./tabnews.page.scss'] })
////////////////////////////////////////////////////////////////////////////////////////
export class TabNewsPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild('newsContent',{static:false}) newsContent: IonContent;
  @ViewChild('newsRefresher') newsRefresher:IonRefresher;
  // Page/Tab
  tabKey:string;
  dbDataTbl:string='memos';
  splashIsShowing:boolean;
  // Pref Vars
  meObj:any;
  myObj:any;
  myPpl:any[]=[];
  myAreas:any[]=[];
  workAreas:any[]=[];
  workName:string;
  workColor:string;
  incBright:boolean=null;
  meAvatar:string;
  // Refresh/Circ
  progCirc={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  isRefreshing:boolean;
  preventRefreshPull:boolean=false;
  refresher:any;
  // Memos/Items
  allApiMemos:any[]=[];
  initMemoData:any[]=[];
  initMemoList:any[]=[];
  memos:any[]=[];
  memosTotal:number;
  noMemos:boolean=false;
  batchStart:number=0;
  batchEnd:number=20;
  batchLimit:number=20;
  batchOffset:number=0;
  endOfList:boolean=false;
  // Edit Mode
  editMode:boolean=false;
  // Memo Details
  memoDetailModalOpts:any={animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'memo-detail-modal-class',component:NewsDetailPage,keyboardClose:true};
  memoDetailModalOpen:boolean=false;
  // Add Memo
  addNewMemoModalOpts:any={animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'memo-add-modal-class',component:NewsAddPage,keyboardClose:true};
  addNewMemoModalOpen:boolean=false;
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private plt: Platform,
    private router: Router,
    private logger: NGXLogger,
    private sqlServ: SQLiteService,
    private dS: DetailService,
    private dT: DateTimeService,
    private syncServ:SyncService,
    private modalCtrl: ModalController,
    private storeServ: StorageService,
    private deputy: DeputyService,
    private evServ: EventsService,
    private popCtrl: PopoverController
  ) { }
////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() { this.logger.info('[TabNews|ngOnInit] ()...');
    const urlArr=this.router.url.split('/');this.tabKey=urlArr[urlArr.length-1];
    this.initPrefs();
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initPrefs() { this.logger.info('[TabNews|initPrefs] ()...');
    this.myObj=this.dS.myObj;this.meObj=this.dS.meObj;this.myPpl=this.dS.pplArr;this.meAvatar=this.dS.meAva;this.workAreas=this.dS.workAreas;this.workName=this.dS.workCode;this.workColor=this.dS.workColor;this.incBright=this.dS.incBright;this.syncMemos('init')
  }
////////////////////////////////////////////////////////////////////////////////////////
  async syncMemos(mode:string) { this.logger.info('[TabNews|syncMemos] ('+mode+')...');
    if(mode==='init'){
      this.plt.ready().then(async()=>{
        await this.syncServ.doMemosSync('init');
        setTimeout(()=>{this.initFetchMemoData()},250);
      })
    }else{
      this.memos=[];
      await this.syncServ.doMemosSync('refresh');
      setTimeout(()=>{this.initFetchMemoData()},250)
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  initFetchMemoData() {
    this.plt.ready().then(async()=>{
      this.memosTotal=await this.sqlServ.getItemCount('memos');
      if(this.memosTotal>0){
        const initMD:any[]=await this.sqlServ.getXMemoItems(this.batchLimit,this.batchOffset);
        if(initMD.length>0){this.initRenderMemoList(initMD)}else{this.noMemos=true;this.logger.info('[TabNews|initRenderData] (!) No Memo Items in DB.')}
      }else{this.noMemos=true;this.logger.info('[TabNews|initRenderData] (!) No Memo Items in DB.')}
    })
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initRenderMemoList(initMD:any[]) { this.logger.info('[TabNews|initRenderMemoList] (initData)...');
    this.initMemoData=initMD;
    for(let i=0;i<initMD.length;i++){const niceInitOb=await this.formatMemo(initMD[i]);this.initMemoList.push(niceInitOb)};
    this.memos=this.initMemoList;
    if(this.memos.length===this.memosTotal){this.infiniteScroll.disabled=true;this.endOfList=true}else{this.infiniteScroll.disabled=false;this.endOfList=false}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async formatMemo(rawMemoObj):Promise<any> { this.logger.info('[TabNews|formatMemo] (rawMemoObj)...');
    let niceMObj:any=rawMemoObj;const rM:any=rawMemoObj;
    niceMObj._DPMetaData=JSON.parse(rM._DPMetaData);
    let creatorArr:any[]=this.myPpl.filter(wp=>wp.EmpId===rM.Creator);
    if(creatorArr.length>0){niceMObj['nCreatorName']=creatorArr[0].DisplayName;niceMObj['nCreatorAva']=creatorArr[0].Photo}else{niceMObj['nCreatorName']='Unknown';niceMObj['nCreatorAva']='./../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png'};
    niceMObj['nCreated']=this.dT.format(new Date(rM.Created),'d MMM yyyy h:mmaaa');
    niceMObj['nModified']=this.dT.format(new Date(rM.Modified),'d MMM yyyy h:mmaaa');
    if(this.dT.isV(this.dT.pISO(rM.ShowFrom))&&this.dT.isV(this.dT.pISO(rM.ShowTill))){const sF:string=this.dT.format(new Date(rM.ShowFrom),'dd/MM/yyyy');const sT:string=this.dT.format(new Date(rM.ShowTill),'dd/MM/yyyy');niceMObj['nShowFT']={f:sF,t:sT}}else{niceMObj['nShowFT']=null};
    let localnContent:string;const msgWordArr:any[]=rM.Content.split(' ');
    if(msgWordArr.length>32){localnContent=msgWordArr.slice(0,32).join(' ');niceMObj['nContentTrim']=true}else{localnContent=rM.Content;niceMObj['nContentTrim']=false};
    niceMObj['nContent']=localnContent;
    console.log(niceMObj);
    return Promise.resolve(niceMObj);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async showPeoplePop(event,memo:any) { this.logger.info('[TabNews|showPeoplePop] ('+memo.Id+')...');
    event.stopPropagation();
    let pdPopOpts:any={component:PeopleDetailComponent,componentProps:{people:[],logs:[],confReq:null,me:{}},showBackdrop:false,backdropDismiss:true,cssClass:'pop-peopledetail',event:event,animated:true,mode:'md',keyboardClose:true};
    pdPopOpts.componentProps.people=memo._DPMetaData.AssignedUsers;
    pdPopOpts.componentProps.logs=memo._DPMetaData.MemoLogs;
    pdPopOpts.componentProps.confReq=memo._DPMetaData.RequireConfirmation;
    pdPopOpts.componentProps.meConf=memo._DPMetaData.RequireMyConfirm?false:true;
    pdPopOpts.componentProps.me={ava:this.meAvatar,obj:this.meObj};
    const pdPop:any=await this.popCtrl.create(pdPopOpts);
    await pdPop.present();
    const {role}=await pdPop.onDidDismiss();
    this.logger.info('[TabNews|showPeoplePop] (DISMISSED): With Role: '+role);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async getMemos(offset:number):Promise<any> {
    this.logger.info('[TabNews|getMemos] ('+offset+')...');
    try{
      const thisBatch:any[]=await this.sqlServ.getXMemoItems(this.batchLimit,this.batchOffset);
      for(let i=0;i<thisBatch.length;i++){
        const niceMemoOb=await this.formatMemo(thisBatch[i]);
        this.memos.push(niceMemoOb)
      };
      return Promise.resolve(true);
    }catch(getMemoErr){this.logger.info('[TabNews|getMemos] (Error): '+getMemoErr)}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async feedItems(event) { this.logger.info('[TabNews|feedItems] (event)...');
    this.batchOffset+=this.batchLimit;
    await this.getMemos(this.batchOffset);
    if(this.memos.length===this.memosTotal){this.infiniteScroll.disabled=true;this.endOfList=true}else{this.infiniteScroll.disabled=false;this.endOfList=false};
    event.target.complete();
  }
////////////////////////////////////////////////////////////////////////////////////////
  async openDetail(memoObj:any){
    if(!this.editMode){
      this.logger.info('[TabNews|openDetail] (memoObj)...');
      let thisMemoDModalOpts=this.memoDetailModalOpts;
      thisMemoDModalOpts['componentProps']={
        memo:memoObj,
        me:this.meObj,
        my:this.myObj,
        meAva:this.meAvatar,
        work:{color:this.workColor,code:this.workName,bright:this.incBright}
      };
      const memoDetailModal=await this.modalCtrl.create(thisMemoDModalOpts);
      document.addEventListener('ionModalDidPresent',()=>{this.memoDetailModalOpen=true;this.logger.info('[TabNews|DetailModal] (ionModalDidPresent)')});
      memoDetailModal.onWillDismiss().then(()=>{this.memoDetailModalOpen=false;this.logger.info('[TabNews|DetailModal] (ionModalWillDismiss)')});
      memoDetailModal.onDidDismiss().then(({role,data})=>{
        this.logger.info('[TabNews|DetailModal] (ionModalDidDismiss) >>> (Role/Data): '+role+'/'+data);
        if(role==='delete'){this.deleteMemo(data)}
      });
      return await memoDetailModal.present()}
    else{this.logger.info('[TabNews|deleteMemoItem] (memoObj)...')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  deleteMemo(memoId:number) { this.logger.info('[TabNews|deleteMemo] (memo)...');
    // dpApi Logic Here
    // dbDel Logic Here
    const newMemoArr:any[]=this.memos.filter(m=>m.Id!==memoId);
    this.memos=[];
    this.memos=newMemoArr;
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillEnter() { this.logger.info('[TabNewsIonViewWillEnter] ()...') }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[TabNewsionViewDidEnter] ()...') }
////////////////////////////////////////////////////////////////////////////////////////
  confirmMemo(memoId:number) { this.logger.info('[TabNews|confirmMemo] ('+memoId+')...') }
////////////////////////////////////////////////////////////////////////////////////////
  async addMemo() {
    this.logger.info('[TabNews|addMemo] ()...');
    let thisAddMemoModalOpts=this.addNewMemoModalOpts;
    thisAddMemoModalOpts['componentProps']={me:this.meObj,my:this.myObj,meAva:this.meAvatar,work:{color:this.workColor,code:this.workName,bright:this.incBright},ppl:this.myPpl};
    const addNewMemoModal = await this.modalCtrl.create(thisAddMemoModalOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.addNewMemoModalOpen=true;this.logger.info('[TabNews|AddNewMemoModal] (ionModalDidPresent)')});
    addNewMemoModal.onWillDismiss().then(()=>{this.addNewMemoModalOpen=false;this.logger.info('[TabTSheets|AddNewMemoModal] (ionModalWillDismiss)')});
    addNewMemoModal.onDidDismiss().then(({data,role})=>{this.logger.info('[TabNews|addMemoModal] (ionModalDidDismiss) >>> (Data): '+data+' >>> (Role): '+role)});
    return await addNewMemoModal.present();
  }
////////////////////////////////////////////////////////////////////////////////////////
  headerProgress(mode, action, data) {
    this.logger.info('[TabNews|headerProgress] (' + mode + ', ' + action + ', ' + data + ')...');
    const circProgEle = $('.hcl-progcirc.' + this.tabKey); const starEle = $('.hcl-star.' + this.tabKey); const sLogoEle = $('.hcl-slogo.' + this.tabKey);
    const startRoutine = () => { $(sLogoEle).css('transform', 'scale(.9)'); this.progCirc.percent = 0; $(starEle).css('transform', 'rotate(0deg)'); if ($(circProgEle).css('display', 'none')) { $(circProgEle).css('display', 'unset') } this.progCirc.animation = false; this.progCirc.outerStrokeColor = '#FF9800'; }
    const finishRoutine = () => { $(sLogoEle).css('transform', 'unset'); this.progCirc.percent = 100; $(starEle).css('transform', 'rotate(0deg)'); this.progCirc.outerStrokeColor = '#4caf50'; this.myAniCSS('.hcl-progcirc.' + this.tabKey, 'fadeOut', 0, 1400, 'remove', 'hide'); this.refresher.complete(); this.isRefreshing = false; }
    if (mode === 'manual') { if (action === 'start') { startRoutine(); this.progCirc.animation = true; } if (action === 'change') { this.progCirc.percent = data; $(starEle).css('transform', 'rotate(' + ((360 * data) / 100) + ')deg'); } if (action === 'finish') { finishRoutine(); this.progCirc.animation = false; } }
    if (mode === 'timed') { startRoutine(); const incPercEaLoop = (20 / data) * 1000; const rotStarEaLoop = (72 / data) * 1000; let starRotCount = 0; const timedProgLoop = setInterval(() => { this.progCirc.percent += incPercEaLoop; starRotCount += rotStarEaLoop; $(starEle).css('transform', 'rotate(' + starRotCount + 'deg)'); if (this.progCirc.percent >= 100) { clearInterval(timedProgLoop); finishRoutine(); } }, 200); }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doRefresh(event) { this.logger.info('[TabNews|doRefresh] (event)...');
    this.isRefreshing=true;this.refresher=event.target;this.headerProgress('timed',null,3000);this.refreshNewsData()
  }
////////////////////////////////////////////////////////////////////////////////////////
  async refreshNewsData() { this.logger.info('[TabNews|refreshNewsData] ()...');
  setTimeout(()=>{this.refresher.complete()},3000)
}
////////////////////////////////////////////////////////////////////////////////////////
  disableRefresher(togV:boolean) { this.preventRefreshPull=togV }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave() { this.logger.info('[TabNewsionViewWillLeave] ()...') }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidLeave() { this.logger.info('[TabNewsionViewDidLeave] ()...');
    const titleBar=$('.hcl-leftbar.'+this.tabKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+this.tabKey);const titleText=$('.sheriff-title.tight-wrap.'+this.tabKey);$(titleBar).css('width','0');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin');$(titleBar).removeClass('dimmed')
  }
////////////////////////////////////////////////////////////////////////////////////////
  myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) { // #myElement, tada, 0-1500, 0-1500, keep/remove, show/hide/remove
    this.logger.info('[TabNewsmyAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
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

