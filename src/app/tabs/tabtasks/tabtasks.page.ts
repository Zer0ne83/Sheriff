import { EventsService } from './../../services/events.service';
import { SQLiteService } from './../../services/sqlite.service';
import { DetailService } from './../../services/detail.service';
import { DateTimeService } from 'src/app/services/datetime.service';
import { SyncService } from 'src/app/services/sync.service';
import { DeputyService } from 'src/app/services/deputy.service';
import { TaskAddPage } from 'src/app/modals/detail/task-add/task-add.page';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform, IonReorderGroup, IonSegment, ModalController, LoadingController, IonSegmentButton, IonContent, IonRefresher } from '@ionic/angular';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { AppUserSettings } from './../../services/appTypes';
import * as $ from 'jquery';
import * as _ from 'lodash';
////////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-tabtasks', templateUrl: './tabtasks.page.html', styleUrls: ['./tabtasks.page.scss'] })
////////////////////////////////////////////////////////////////////////////////////////
export class TabTasksPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  @ViewChild(IonReorderGroup,{static:false}) tasksReorderGroup:IonReorderGroup;
  @ViewChild(IonSegment,{static:false}) tabTasksSegment:IonSegment;
  @ViewChild(IonSegmentButton,{static:false}) tTSegBtnMyTasks:IonSegmentButton;
  @ViewChild(IonSegmentButton,{static:false}) tTSegBtnAssTasks:IonSegmentButton;
  @ViewChild('tasksContent',{static:false}) tasksContent: IonContent;
  @ViewChild('tasksRefresher') tasksRefresher:IonRefresher;
  // Page/Tab, Init Prefs, Prog Circ, Refresher
  tabKey:string;dbDataTbl:string='tasks';splashIsShowing:boolean;
  myPpl:any[]=[];myObj:any;meObj:any;meEmpId:number;meAvatar:string;workAvatar:string;
  progCirc:any={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  refresher:any;isRefreshing:boolean;
  preventRefreshPull:boolean=false;
  // Task List/Data/DB
  tLists:any[]=['MyTasksToDo','MyTasksDone','AssTasksAssigned','AssTasksDone'];
  dbTaskItems:any[]=[];
  myTasks:any[]=[];myTasksToDo:any[]=[];myTasksDone:any[]=[];
  assTasks:any[]=[];assTasksAssigned:any[]=[];assTasksDone:any[]=[];
  totalMyTasksToDo:number=0;totalMyTasksDone:number=0;totalAssTasksAssigned:number=0;totalAssTasksDone:number=0;
  // Tasks Segment/Buttons
  tTSegProps:any={tTDisabled:false,tTMode:'md',tTScrollable:false,tTSwipeGesture:true,tTValue:'mytasks',tTSegBtns:{MyTasksProps:{disabled:false,layout:'icon-start',mode:'md',type:'button',value:'mytasks'},AssTasksProps:{disabled:false,layout:'icon-start',mode:'md',type:'button',value:'asstasks'}}};
  // Alerts
  alertMethods:any={phone:null,calendar:null,email:null};
  alertEvents:any={shift:null,task:null,tsheet:null};
  // ReOrder Mode
  tTReorderGroupProps:any={roDisabled:true};
  beforeROIds:any[]=[];
  afterROIds:any[]=[];
  // Delete Mode
  deleteMode:boolean=false;
  // Add Task
  addTaskModalOpts:any={animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'tsheet-detail-modal-class',component:TaskAddPage,keyboardClose:true};
  addTaskModalOpen:boolean=false;
  // Task Prog
  taskProg:boolean=false;
  // Doofy
  assignToSelectAlertOpts:any={cssClass:'quickSelectClass',header:'Assign Task To'};
  taskAssignTo;
  assignSelectedCWName;
  assignSelectedValue;
  myFirstName;
  recentNoteCount;
  segment;
  myTasksSegmentActive;
  assignedSegmentActive;
  currentTasksObj;
  globalToDoTaskListArr = [];
  globalCompletedTaskListArr = [];
  globalCWArr = [];
  taskInputAdd = true;
  taskInputEdit;
  addEditTaskDueDate = '';
  newTaskDateTime;
  reorderTasks:any;
  unsortedToDoListArr = [];
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private plt: Platform,
    private router: Router,
    private logger: NGXLogger,
    private modalCtrl: ModalController,
    private sqlServ: SQLiteService,
    private syncServ: SyncService,
    private evServ: EventsService,
    private deputy: DeputyService,
    private dT: DateTimeService,
    private detailServ:DetailService
  ) { }
////////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit() { this.logger.info('[TabTasks|ngOnInit] ()...');
    const urlArr=this.router.url.split('/');this.tabKey=urlArr[urlArr.length-1];
    this.initAlertOpts();
    this.initPrefs();
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillEnter() { this.logger.info('[TabTasks|ionViewWillEnter] ()...') }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[TabTasks|ionViewDidEnter] ()...');
    this.evServ.subscribe('alertsStatus',()=>{this.evServ.subscribe('alertsStatus',()=>{this.initAlertOpts()})});
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initPrefs() { this.logger.info('[TabTasks|initPrefs] ()...');
    this.myPpl=this.detailServ.pplArr;this.myObj=this.detailServ.myObj;this.meObj=this.detailServ.meObj;this.meAvatar=this.detailServ.meAva;this.workAvatar=this.detailServ.workAva;
    this.syncTasks('init');
  }
////////////////////////////////////////////////////////////////////////////////////////
  async initAlertOpts() { this.logger.info('[TabTasks|initAlertOpts] ()...');
    const getDSSett:AppUserSettings|null=await this.detailServ.getSettings();
    if(getDSSett!==null){
      const aMs:any=getDSSett.alerts.options.alertMethods.value;const aEs:any=getDSSett.alerts.options.alertEvents.value;
      this.alertMethods.phone=aMs.phone;this.alertMethods.calendar=aMs.calendar;this.alertMethods.email=aMs.email;
      this.alertEvents.task=aEs.task;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async syncTasks(mode:string) { this.logger.info('[TabTasks|syncTasks] ('+mode+')...');
    if(mode==='init'){
      this.plt.ready().then(async()=>{
        await this.syncServ.doTasksSync('init');
        setTimeout(()=>{this.fetchTasks()},250);
      })
    }else{
      this.dbTaskItems=[];
      await this.syncServ.doTasksSync('refresh');
      setTimeout(()=>{this.fetchTasks()},250)
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async fetchTasks() { this.logger.info('[TabTasks|initFetchTasks] ()...');
    const getAllTasksRes:any=await this.sqlServ.getAllTableItems('tasks');
    console.log(getAllTasksRes.values);
    if(getAllTasksRes.values.length>0){const locAllTs:any[]=getAllTasksRes.values;const sortdAllTs:any[]=_.sortBy(locAllTs,'SortOrder');
    for(let i=0;i<sortdAllTs.length;i++){this.formatTask(sortdAllTs[i])};
    this.updateListCounts();
    }else{for(let i=0;i<this.tLists.length;i++){this['total'+this.tLists[i]]=0}}
  }
////////////////////////////////////////////////////////////////////////////////////////
  formatTask(rawTaskObj:any):any { this.logger.info('[TabTasks|formatTask] (taskObject)...');
    let rTO:any=rawTaskObj;
    console.log('Start SortOrder: '+rTO.SortOrder);
    rTO.Question===null||rTO.Question===undefined||rTO.Question===''||rTO.Question.length===0?rTO.Question=null:rTO.Question=rTO.Question;
    rTO.Comment===null||rTO.Comment===undefined||rTO.Comment===''||rTO.Comment.length===0?rTO.Comment=null:rTO.Comment=rTO.Comment;
    const uEntryArr:any[]=this.myPpl.filter(p=>p.EmpId===rTO.UserEntry);
    if(uEntryArr.length>0){
      const pO:any=uEntryArr[0];
      if(pO.EmpId===this.meEmpId){rTO['nUserEntry']='You'}
      else{
        if(pO.FirstName.length>0&&pO.LastName.length>0){rTO['nUserEntry']=pO.FirstName+' '+pO.LastName.charAt(0)+'.'}
        else{pO.DisplayName.length>0?rTO['nUserEntry']=pO.DisplayName:rTO['nUserEntry']='NK'}
      };
      rTO['nFromAvatar']=pO.Photo
    }else{rTO['nUserEntry']='NK';rTO['nFromAvatar']='./../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png'};
    const uAssignedArr:any[]=this.myPpl.filter(p=>p.EmpId===rTO.UserResponsible);
    if(uAssignedArr.length>0){
      const pO:any=uAssignedArr[0];
      if(pO.EmpId===this.meEmpId){rTO['nAssigned']='You'}
      else{
        if(pO.FirstName.length>0&&pO.LastName.length>0){rTO['nAssigned']=pO.FirstName+' '+pO.LastName.charAt(0)+'.'}
        else{pO.DisplayName.length>0?rTO['nAssigned']=pO.DisplayName:rTO['nAssigned']='NK'}
      };
      rTO['nAssignedAvatar']=pO.Photo
    }else{rTO['nAssigned']='NK';rTO['nAssignedAvatar']='./../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png'};
    const createD:Date=new Date(rTO.Created);rTO['nCreated']=this.dT.format(createD,'EEE, d MMM yyyy');
    if(rTO.DueTimestamp!==-1&&rTO.DueTimestamp!==null&&rTO.DueTimestamp!==undefined&&rTO.DueTimestamp!==''){const dueD:Date=this.dT.Dut(rTO.DueTimestamp);rTO['nDue']=this.dT.format(dueD,'EEE, d MMM yyyy');const nowUT:number=this.dT.getUT(new Date());if(nowUT>rTO.DueTimestamp){rTO['nIsLate']=true;rTO['nOverDue']=this.dT.DurAsObj(new Date(),dueD)}else{rTO['nIsLate']=false}};
    if(rTO.TsCompleted===-1||rTO.TsCompleted===null||rTO.TsCompleted===undefined||rTO.TsCompleted===''){rTO['nIsDone']=false}else{const compD:Date=this.dT.Dut(rTO.TsCompleted);rTO.nCompleted=this.dT.format(compD,'EEE, d MMM yyyy');rTO['nIsDone']=true};
    if(rTO.UserEntry===rTO.UserResponsible){if(rTO['nIsDone']){this.myTasksDone.push(rTO)}else{this.myTasksToDo.push(rTO)}}
    else{if(rTO['nIsDone']){this.assTasksDone.push(rTO)}else{this.assTasksAssigned.push(rTO)}}
  }
////////////////////////////////////////////////////////////////////////////////////////
  updateListCounts() { this.logger.info('[TabTasks|updateListCount] ()...');
    for(let i=0;i<this.tLists.length;i++){const lN:string=this.tLists[i].charAt(0).toLowerCase()+this.tLists[i].slice(1);const tLNo:number=this[lN].length;this['total'+this.tLists[i]]=tLNo}
  }
////////////////////////////////////////////////////////////////////////////////////////
  tTSegChanged(ev:any) {
    this.logger.info('[TabTasks|segmentChanged] ('+ev.detail.value+')...');
    this.tTSegProps.tTValue=ev.detail.value;
  }
////////////////////////////////////////////////////////////////////////////////////////
  disableRefresher(togV:boolean) { this.preventRefreshPull=togV }
////////////////////////////////////////////////////////////////////////////////////////
  async doRefresh(event) { this.logger.info('[TabTasks|doRefresh] (event)...');
    this.isRefreshing=true;
    this.refresher=event.target;
    this.headerProgress('manual','start',null);
    this.refreshTasksData()
  }
////////////////////////////////////////////////////////////////////////////////////////
  async refreshTasksData() { this.logger.info('[TabTasks|refreshTasksData] ()...');
    let rStage:number=0;
    this.logger.info('[TabTasks|refreshTasksData] (PROGRESS LISTEN SUBSCRIBED)...');
    this.evServ.subscribe('refreshTasksProg',()=>{rStage+=25;this.logger.info('[TabTasks|refreshTasksData] (PROGRESS STAGE TRIGGER) STAGE #'+rStage);
      if(rStage<100){this.headerProgress('manual','change',rStage)}
      else{this.evServ.destroy('refreshTasksProg');this.headerProgress('manual','finish',null)}
    });
    setTimeout(()=>{this.syncServ.doTasksSync('refresh')},250);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async changeCheckStatus(list:string,index:number,tO:any){ this.logger.info('[TabTasks|changeCheckStatus] ('+list+','+index+',taskObj)...');
    if(this.tTReorderGroupProps.roDisabled&&!this.deleteMode){
      this.taskProg=true;
      $('taskitem-'+tO.Id).addClass('taskgreyed');
      let opTxt:string;const nKeys:any[]=['nCreated','nDue','nIsLate','nIsDone','nCompleted'];
      const duTRes=async():Promise<any>=>{
        if(tO.nIsDone){opTxt='TO DO';const undRes:any=await this.deputy.undoTask(tO.Id,tO.UserResponsible);return Promise.resolve(undRes)}
        else{opTxt='COMPLETED';const dRes:any=await this.deputy.doTask(tO.Id,tO.UserResponsible);return Promise.resolve(dRes)}};
      const duT:any=await duTRes();
      if(duT.result){
        for(let i=0;i<nKeys.length;i++){if(duT.data.hasOwnProperty(nKeys[i])){delete duT.data[nKeys[i]]}};
        const trimList:any[]=this[list].filter(t=>t.Id!==tO.Id);this[list]=trimList;
        this.sqlServ.replaceItem('tasks','Id',duT.data.Id,duT.data);
        this.formatTask(duT.data);this.evServ.showToast('success','Task Updated: '+opTxt);
        this.logger.info('[TabTasks|changeCheckStatus] (Success) Update Task Succeeded @ API.');
        this.updateListCounts();
        $('taskitem-'+tO.Id).removeClass('taskgreyed');
        this.taskProg=false
      }else{
        this.taskProg=false;
        $('taskitem-'+tO.Id).removeClass('taskgreyed');
        this.evServ.showToast('error','Task Update Error');
        this.logger.info('[TabTasks|changeCheckStatus] (Error) Task Failed @ API.')
      } 
    }else{this.logger.info('[TabTasks|changeCheckStatus] Ignoring While in Reorder/Delete Mode.')}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async addTask() { this.logger.info('[TabTasks|addTask] ()...');
    let aTMOpts=this.addTaskModalOpts;
    aTMOpts['componentProps']={me:this.meObj,my:this.myObj,meAva:this.meAvatar,workAva:this.workAvatar,meEmpId:this.meEmpId,ppl:this.myPpl,myTListLen:this.myTasksToDo.length,assTListLen:this.assTasksAssigned.length};
    const addTaskModal:any=await this.modalCtrl.create(aTMOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.addTaskModalOpen=true;this.logger.info('[TabTasks|AddTask] (ionModalDidPresent)')});
    addTaskModal.onWillDismiss().then(()=>{this.addTaskModalOpen=false;this.logger.info('[TabTasks|AddTask] (ionModalWillDismiss)')});
    addTaskModal.onDidDismiss().then(({data,role})=>{this.logger.info('[TabTasks|AddTask] (ionModalDidDismiss) >>> (Data): '+data+' >>> (Role): '+role);
      if(role==='cancel'){this.logger.info('[TabTasks|addTask] (CANCELLED) User Cancelled - No Data.');this.evServ.showToast('warning','Cancelled: Add New Task')}
      else{const newT:any=data;
        this.evServ.showToast('success','Success: Added Task #'+newT.Id);
        this.formatTask(newT);
        this.sqlServ.insertSingleItem('tasks',newT);
        this.logger.info('[TabTasks|addTask] (Success) Added New Task #'+newT.Id)
      }
    });
    return await addTaskModal.present();
  }
////////////////////////////////////////////////////////////////////////////////////////
  toggleDeleteMode() { this.logger.info('[TabTasks|toggleDeleteMode] ()...');
    if(this.tTReorderGroupProps.roDisabled){this.deleteMode?this.deleteMode=false:this.deleteMode=true}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async deleteTask(list:string,tlI:number,tO:any) { this.logger.info('[TabTasks|deleteTask] ('+list+','+tlI+',taskObj)...');
    this.taskProg=true;
    $('taskitem-'+tO.Id).addClass('taskgreyed');
    const delRes=(dbRes:boolean,apiRes)=>{
      const listFns=()=>{const trimList:any[]=this[list].filter(t=>t.Id!==tO.Id);this[list]=trimList;this.updateListCounts()};
      if(dbRes&&apiRes){listFns();this.evServ.showToast('success','Task Deleted - OK')}
      else{
        if(!dbRes&&!apiRes){this.evServ.showToast('error','Task Delete Errors (DB+API)')}
        else if(!dbRes&&apiRes){listFns();this.evServ.showToast('warning','Task Delete Error (DB)')}
        else{listFns();this.evServ.showToast('warning','Task Delete Error (API)')}
      };
      this.taskProg=false;
      $('taskitem-'+tO.Id).removeClass('taskgreyed');
    };
    const delApiRes:any=await this.deputy.deleteTask(tO.Id);
    const delDbRes:boolean=await this.sqlServ.deleteItem('tasks','Id',tO.Id);
    delRes(delApiRes.result,delDbRes)
  }
////////////////////////////////////////////////////////////////////////////////////////
  async toggleReorderList(){ this.logger.info('[TabTasks|reorderList] ()...');
    console.log('On Click Reorder Btn');console.log(this.myTasksToDo);
    const roDis=():boolean=>{return this.tasksReorderGroup.disabled};
    const togDis=(v:boolean)=>{this.tasksReorderGroup.disabled=v;this.tTReorderGroupProps.roDisabled=v};
    if(roDis()){ // ENABLE REORDER
      togDis(false);
      if(this.beforeROIds.length>0){this.beforeROIds=[]};
      for(let i=0;i<this.myTasksToDo.length;i++){this.beforeROIds.push(this.myTasksToDo[i].Id)};
    }else{ // DISABLE REORDER
      togDis(true);
      const newList:any[]=this.myTasksToDo;
      if(this.afterROIds.length>0){this.afterROIds=[]};
      for(let i=0;i<newList.length;i++){this.afterROIds.push(newList[i].Id)};
      const compStrOld:string=this.beforeROIds.join(',');console.log(compStrOld);
      const compStrNew:string=this.afterROIds.join(',');console.log(compStrNew);
      if(compStrNew===compStrOld){this.logger.info('[TabTasks|reorderList|Disable] (SAME ORDER) - Not Saving/Chaning.')}
      else{
        this.logger.info('[TabTasks|reorderList|Disable] (NEW ORDER) - Doing Save @ API/DB Level...');
        for(let i=0;i<newList.length;i++){ const nTO:any=newList[i];
          const apiRORes:any=await this.deputy.reorderTask(this.meEmpId,nTO);
          if(apiRORes.result){ const apiNTO:any=apiRORes.data;
            this.logger.info('[TabTasks|toggleReorderList|API Update Order] (SUCCESS): '+apiNTO.Question+' (ID #'+apiNTO.Id+') - API Order = '+apiNTO.SortOrder);
            const dbRORes:boolean=await this.sqlServ.updateTaskSortOrder(apiNTO.Id,apiNTO.SortOrder);
            if(dbRORes){this.logger.info('[TabTasks|toggleReorderList|DB Update Order] (SUCCESS) Updated Order @ DB - OK')}
            else{this.logger.info('[TabTasks|toggleReorderList|DB Update Order] (ERROR) Updating Order @ DB - BAD')}
          }else{this.logger.info('[TabTasks|toggleReorderList|API Update Order] (ERROR): '+apiRORes.data)}
        }
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doReorder(event) {
    this.logger.info('Before Reorder: ');
    for(let i=0;i<this.myTasksToDo.length;i++){const bT:any=this.myTasksToDo[i];this.logger.info('['+i+'] '+bT.Question+' - Order: '+bT.SortOrder)};
    this.myTasksToDo=event.detail.complete(this.myTasksToDo);
    for(let i=0;i<this.myTasksToDo.length;i++){this.myTasksToDo[i].SortOrder=i};
    this.logger.info('After Reorder: ');
    for(let i=0;i<this.myTasksToDo.length;i++){const aT:any=this.myTasksToDo[i];this.logger.info('['+i+'] '+aT.Question+' - Order: '+aT.SortOrder)};
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave() { this.logger.info('[TabTasks|ionViewWillLeave] ()...') }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidLeave() { this.logger.info('[TabTasks|ionViewDidLeave] ()...');
    const titleBar=$('.hcl-leftbar.'+this.tabKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+this.tabKey);const titleText=$('.sheriff-title.tight-wrap.'+this.tabKey);$(titleBar).css('width','0');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin');$(titleBar).removeClass('dimmed')
  }
////////////////////////////////////////////////////////////////////////////////////////
  headerProgress(mode, action, data) {
    this.logger.info('[TabTasks|headerProgress] (' + mode + ', ' + action + ', ' + data + ')...');
    const circProgEle = $('.hcl-progcirc.' + this.tabKey); const starEle = $('.hcl-star.' + this.tabKey); const sLogoEle = $('.hcl-slogo.' + this.tabKey);
    const startRoutine = () => { $(sLogoEle).css('transform', 'scale(.9)'); this.progCirc.percent = 0; $(starEle).css('transform', 'rotate(0deg)'); if ($(circProgEle).css('display', 'none')) { $(circProgEle).css('display', 'unset') } this.progCirc.animation = false; this.progCirc.outerStrokeColor = '#FF9800'; }
    const finishRoutine = () => { $(sLogoEle).css('transform', 'unset'); this.progCirc.percent = 100; $(starEle).css('transform', 'rotate(0deg)'); this.progCirc.outerStrokeColor = '#4caf50'; this.myAniCSS('.hcl-progcirc.' + this.tabKey, 'fadeOut', 0, 1400, 'remove', 'hide'); this.refresher.complete(); this.isRefreshing = false; }
    if (mode === 'manual') {
      if(action==='start'){startRoutine();this.progCirc.animation=true}
      else if(action==='change'){this.progCirc.percent=data;$(starEle).css('transform','rotate('+((360*data)/100)+')deg')}
      else if(action==='finish'){finishRoutine();this.progCirc.animation=false}
    }
    if (mode === 'timed') { startRoutine(); const incPercEaLoop = (20 / data) * 1000; const rotStarEaLoop = (72 / data) * 1000; let starRotCount = 0; const timedProgLoop = setInterval(() => { this.progCirc.percent += incPercEaLoop; starRotCount += rotStarEaLoop; $(starEle).css('transform', 'rotate(' + starRotCount + 'deg)'); if (this.progCirc.percent >= 100) { clearInterval(timedProgLoop); finishRoutine(); } }, 200); }
  }
 //////////////////////////////////////////////////////////////////////////////////////// 
  myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) { // #myElement, tada, 0-1500, 0-1500, keep/remove, show/hide/remove
    this.logger.info('[TabTasks|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
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

