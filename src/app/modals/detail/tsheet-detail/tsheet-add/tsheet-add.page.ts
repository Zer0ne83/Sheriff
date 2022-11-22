import { EventsService } from './../../../../services/events.service';
import { DeputyService } from '../../../../services/deputy.service';
import { SQLiteService } from '../../../../services/sqlite.service';
import { StorageService } from 'src/app/services/storage.service';
import { DateTimeService } from '../../../../services/datetime.service';
import { DetailService } from 'src/app/services/detail.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform, LoadingController, ActionSheetController } from '@ionic/angular';
import { ActionSheet, ShowActionsOptions, ActionSheetButton, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { TSheetBreaksPage } from '../tsheet-breaks/tsheet-breaks.page';
import { TSheetHistoryPage } from '../tsheet-history/tsheet-history.page';
import { Dialog, ConfirmOptions } from '@capacitor/dialog';
import { Keyboard } from '@capacitor/keyboard';
import { NGXLogger } from 'ngx-logger';
import * as $ from 'jquery';
const myls = localStorage;
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-tsheet-add',templateUrl:'./tsheet-add.page.html',styleUrls:['./tsheet-add.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class TSheetAddPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  modalId:string;
  meObj:any;
  myObj:any;
  meAvatar:string;
  workAvatar:string;
  myEmpId:number;
  myDisplayName:string;
  tsBreaksModalOpts:any = {animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'tsheet-detail-breaks-class',component:TSheetBreaksPage,keyboardClose:true};
  tsHistoryModalOpts:any = {animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'tsheet-detail-history-class',component:TSheetHistoryPage,keyboardClose:true};
  dpDateOpen:boolean = false;
  dpSTimeOpen:boolean = false;
  dpETimeOpen:boolean = false;
  workAreas:any[]=[];
  pplArr:any[]=[];
  addTSPs:any;
  addTSFormData:any = {
    companyId:<number>null,
    companyName:<string>null,
    areaId:<number>0,
    areaName:<string>'',
    date:<any>{date:<Date>new Date(),txt:<string>this.dT.LNd(new Date())},
    stime:<any>{date:<Date>null,txt:<string>null},
    etime:<any>{date:<Date>null,txt:<string>null},
    breaks:<any>{
      values:<any>{
        summary:<any>{r:<number>0,m:<number>0,dur:<Duration>{hours:0,minutes:0}},
        slots:<any[]>[{start:<Date>null,end:<Date>null,dur:<Duration>{hours:0,minutes:0},type:''}]
      },
      slotsConfig:<any[]>[ //JSON.parse(myls.getItem('dpMyData')).SlotsConfig
        {SlotValue:<string>'M',SlotLabel:<string>'Meal Break (Unpaid)',SlotName:<string>'Meal Break'},
        {SlotValue:<string>'R',SlotLabel:<string>'Rest Break (Paid)',SlotName:<string>'Rest Break'}
      ]
    },
    ttime:<Duration>{hours:0,minutes:0},
    comments:<any>{content:<string>'',pholder:<string>'Add Comment?'}
  };
  newBreaks:any[]=[];
  showTTLBreakMins:boolean = true;
  shouldSave:boolean = false;
  errorSave:boolean = false;
  newTSInputErr:any = null;
  breakMOpen:boolean = false;
  wasChanged:boolean = false;
  newTSAPIObj:any;
  updateSaveBannerTxt:string = 'updated';
  aSheetOpen:boolean = false;
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private modalCtrl: ModalController,
    private loadCtrl: LoadingController,
    private navP: NavParams,
    private plt: Platform,
    private dT: DateTimeService,
    private deputy: DeputyService,
    private detailServ:DetailService,
    private evServ: EventsService,
    private storeServ: StorageService
  ) {}
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(){
    this.logger.info('[Modal|TSheet-Add|OnInit]');
    this.initPrefs();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initPrefs() {
    this.meAvatar=this.detailServ.meAva;this.workAvatar=this.detailServ.workAva;this.meObj=this.detailServ.meObj;this.myObj=this.detailServ.myObj;this.myEmpId=this.detailServ.meEmpId;this.myDisplayName=this.detailServ.meName;this.pplArr=this.detailServ.pplArr;
    this.addTSFormData.companyId=this.meObj.Company;
    this.addTSFormData.companyName=this.meObj.CompanyObject.CompanyName;
    this.initTSAddData();Keyboard.removeAllListeners()
  }   
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() {
    this.logger.info('[Modal|TSheet-Add|ionViewDidEnter]');
    this.plt.ready().then(async()=>{
      const modalEl = await this.modalCtrl.getTop();
      this.modalId=modalEl.id
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initTSAddData() {
    this.logger.info('[Modal|TSheet-Add|initTSAddData]');
    this.addTSPs=this.navP.data;
    this.workAreas=this.navP.data.wareas.list;
    this.addTSFormData.areaId=this.navP.data.wareas.lastId;
    this.addTSFormData.areaName=this.workAreas.filter(wa=>wa.Id===this.addTSFormData.areaId)[0].OperationalUnitName;
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeAddTSheet() {
    this.logger.info('[Modal|TSheet-Add|closeAddTSheet] ()...');
    if(this.errorSave){this.errorWarning('error')}
    else{
      if(this.shouldSave){
        const doSaveConfOpts:ConfirmOptions={title:'Save New Timesheet?',message:'Save & Add or Discard Your New TimesheetNew?',okButtonTitle:'Save/Add',cancelButtonTitle:'Discard'};
        const {value} = await Dialog.confirm(doSaveConfOpts);
        if(value){this.saveNewTSheet(true)}else{this.modalCtrl.dismiss({data:null,role:'unchanged',id:this.modalId})}
      }else{
        if(this.wasChanged){this.modalCtrl.dismiss({data:{newTSFormData:this.addTSFormData,newTSAPIObj:this.newTSAPIObj},role:'changed',id:this.modalId})
        }else{this.modalCtrl.dismiss({data:null,role:'unchanged',id:this.modalId})}
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async errorWarning(type) {
    this.logger.info('[Modal|TSheet-Add|errorWarning] ()...');
    if(type==='error'){Dialog.alert({title:'Fix Errors',message:'Unable to Save/Add Timesheet until errors are resolved'})}
    if(type==='missing'){Dialog.alert({title:'Missing Data',message:'Unable to Save/Add Timesheet until all details entered'})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async saveNewTSheet(doClose:boolean) {
    this.logger.info('[Modal|TSheet-Add|saveNewTSheet] ()...');
    const dO:any=this.addTSFormData;const isDate=(d:any)=>{if(Object.prototype.toString.call(d)==='[object Date]')return true;return false};
    if(this.errorSave){this.errorWarning('error')}
    else{
      if(dO.companyId>0&&dO.areaId>0&&isDate(dO.date.date)&&isDate(dO.stime.date)&&isDate(dO.etime.date)&&(dO.ttime.hours+dO.ttime.minutes)!==0&&this.errorSave!==true){
        const saveNewTSheetLoader = await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Saving/Adding New Timesheet'});
        await saveNewTSheetLoader.present();
        setTimeout(() => {
          this.logger.info('[Modal|TSheet-Add|saveNewTSheet] (Saving/Adding New TSheet) - Remote: Deputy Put/Post New Timesheet - Await Server 200 - Do GET Request to /my/timesheet & Push Object to Local Variable...');
          this.logger.info('[Modal|TSheet-Add|saveNewTSheet] (Saving/Adding New TSheet) - Local: Add New Timesheet Object to SQLite DB & Push New Obj to Local/Global Var to be Returned with Dismiss Data - No Refresh Required to Update TSheet-List View.');
          //this.newTSAPIObj=? // Change to New Obj Returned As Above
          this.wasChanged=true;
          this.aniSave();this.shouldSave=false;
          saveNewTSheetLoader.dismiss();
          this.updateSaveBannerTxt='saved';
          if(doClose){this.closeAddTSheet()};
        }, 5000);
      }else{this.errorWarning('missing')}
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  aniNew() { const doAni=()=>new Promise((resolve)=>{const aniStr='animate__animated animate__rubberBand plus1breakcount';$('.title-bc-ani').on('animationend',()=>{$('.title-bc-ani').removeClass(aniStr);resolve(true)});$('.title-bc-ani').addClass(aniStr)});doAni()}
//////////////////////////////////////////////////////////////////////////////////////
  aniSave() { const doAni=()=>new Promise((resolve)=>{const aniStr='animate__animated animate__flipInX saving-tsb-data';$('.save-data').on('animationend',()=>{$('.save-data').removeClass(aniStr);resolve(true)});$('.save-data').addClass(aniStr)});doAni()}
//////////////////////////////////////////////////////////////////////////////////////
  async editArea(currentArea:number) {
    this.logger.info('[Modal|TSheet-Add|editArea] ('+currentArea+')...');
    let thisIndexToIdRefArr:any[]=[];
    const niceTxt=(rawLbl:string):string=>{const w=rawLbl.split(' ');const nT=w.map((w)=>{return w[0].toUpperCase()+w.substring(1)}).join(' ');return nT};
    let wareaASheetOpts:ShowActionsOptions={title:<string>'𝗦𝗘𝗟𝗘𝗖𝗧 𝗪𝗢𝗥𝗞 𝗔𝗥𝗘𝗔:',options:<ActionSheetButton[]>[]};
    for(let i=0;i<this.workAreas.length;i++){const tA=this.workAreas[i];let thisASB:ActionSheetButton={title:<string>'',style:<ActionSheetButtonStyle>ActionSheetButtonStyle.Default};Number(tA.Id)===Number(currentArea)?thisASB.title='\uD83D\uDFE2 '+niceTxt(tA.OperationalUnitName.toString().toLowerCase()):thisASB.title='\u26AB '+niceTxt(tA.OperationalUnitName.toString().toLowerCase());thisIndexToIdRefArr.push(tA.Id);wareaASheetOpts.options.push(thisASB)};
    thisIndexToIdRefArr.push(currentArea);wareaASheetOpts.options.push({title:'\u274C 𝗖𝗔𝗡𝗖𝗘𝗟',style:ActionSheetButtonStyle.Cancel});
    await ActionSheet.showActions(wareaASheetOpts).then(wareaRes=>{this.aSheetOpen=true;
      if(thisIndexToIdRefArr[wareaRes.index].toString()===currentArea.toString()){
        if(wareaRes.index+1===wareaASheetOpts.options.length){this.logger.info('[Modal|TSheet-Detail|editArea] (Cancelled)');this.evServ.showToast('cross','Cancelled')}
        else{this.logger.info('[Modal|TSheet-Detail|editArea] (Selected Same)');this.evServ.showToast('warning','Unchanged')};
        this.aSheetOpen=false}
        else{const newAId=thisIndexToIdRefArr[wareaRes.index];
          for(const areas of this.workAreas){if(newAId===areas.Id){this.addTSFormData.areaName=areas.OperationalUnitName;this.addTSFormData.areaId=areas.Id}};
          this.evServ.showToast('success','New Area Selected');this.shouldSave=true;this.wasChanged=true;this.updateSaveBannerTxt='updated';this.aSheetOpen=false;
        this.logger.info('[Modal|TSheet-Detail|editArea] (Selected) i:'+wareaRes.index+' | name: '+this.workAreas[wareaRes.index].OperationalUnitName);
      };
    }).catch(wareaErr=>{this.evServ.showToast('error','Change Area Error');this.logger.info('[Modal|TSheet-Detail|editArea] (Error): '+wareaErr);this.aSheetOpen=false})
  }
//////////////////////////////////////////////////////////////////////////////////////
  async openDP(input:string) {
    this.logger.info('[Modal|TSheet-Add|openDP] ('+input+')...');
    const isDate=(d:any)=>{if(Object.prototype.toString.call(d)==='[object Date]')return true;return false};
    if(input==='date'){
      this.dT.dpDateOnly(this.addTSFormData.date.date).then(newD=>{this.addTSFormData.date.date=newD;this.addTSFormData.date.txt=this.dT.LNd(newD);this.evServ.showToast('success','Date Updated');this.logger.info('[Modal|TSheet-Add|openDP|Date] (Success): Date Updated.')}).catch(newDErr=>{this.evServ.showToast('error','Date Error');this.logger.info('[Modal|TSheet-Add|openDP|Date] (Error): '+newDErr)})}
    else{
      let sE:string;input.charAt(0)==='s'?sE='start':sE='end';let oD:Date;this.addTSFormData[input].date===null?oD=this.addTSFormData.date.date:oD=this.addTSFormData[input].date;
      this.dT.openTimePicker(oD,sE)
      .then(newT=>{
        const cap=sE.charAt(0).toUpperCase()+sE.slice(1);
        this.addTSFormData[input].date=newT;this.addTSFormData[input].txt=this.dT.format(newT,'h:mmaaa');
        this.evServ.showToast('success',cap+' Time Updated');
        this.logger.info('[Modal|TSheet-Add|openDP|Time] (Success): Time Updated: '+newT);
        const ntSD:Date=this.addTSFormData.stime.date;const ntED:Date=this.addTSFormData.etime.date;
        if(ntSD!==null&&ntED!==null){
          if(isDate(ntSD)&&isDate(ntED)){
            if(sE==='start'){
              if(this.dT.isA(ntSD,ntED)){this.logger.info('[newTime|inputError] (Start Time -ISAFTER- End Time)');this.newTSInputErr='start';this.errorSave=true;if(this.shouldSave){this.shouldSave=false}}else{if(this.newTSInputErr==='start'||this.newTSInputErr===null){this.newTSInputErr=null;this.errorSave=false}}
            }else{
              if(this.dT.isB(ntED,ntSD)){this.logger.info('[newTime|inputError] (End Time -ISBEFORE- Start Time)');this.newTSInputErr='end';this.errorSave=true;if(this.shouldSave){this.shouldSave=false}}else{if(this.newTSInputErr==='end'||this.newTSInputErr===null){this.newTSInputErr=null;this.errorSave=false}}
            }
            if(this.newTSInputErr!=='start'&&this.newTSInputErr!=='end'){
              console.log('[FINAL CHECK]');
              let finalTTObj:Duration={hours:0,minutes:0};
              const shiftDurObj:any=this.dT.DurAsObj(ntSD,ntED);
              const totalSMins:number=(shiftDurObj.hours*60)+shiftDurObj.minutes;
              const totalBMins:number=(this.addTSFormData.breaks.values.summary.dur.hours*60)+this.addTSFormData.breaks.values.summary.dur.minutes;
              const totalAdjMins:number=totalSMins-totalBMins;
              const fTTHrs:number=Math.floor(totalAdjMins/60);
              const fTTMins:number=totalAdjMins-(fTTHrs*60);
              finalTTObj.hours=fTTHrs;finalTTObj.minutes=fTTMins;this.addTSFormData.ttime=finalTTObj;
              this.errorSave=false;this.shouldSave=true;this.wasChanged=true;
            }else{this.errorSave=true;this.shouldSave=false}
          }else{this.logger.info('[newTime|TimeInputs] - One or More Inputs Do Not Check as Date Objects.')}
        }else{this.logger.info('[newTime|TimeInputs] - One or More Inputs Check as Default - Select Time')}})
      .catch(newTErr=>{if(newTErr==='cancel'){this.evServ.showToast('warning','Cancelled');this.logger.info('[Modal|TSheet-Add|openDP|Time] (Cancelled): '+newTErr)}else{this.evServ.showToast('error','Error');this.logger.info('[Modal|TSheet-Add|openDP|Time] (Error): '+newTErr)}})
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async editNewBreaks() {
    this.logger.info('[Modal|TSheet-Add|editNewBreaks] ()...');
    let thisTSBModalOpts = this.tsBreaksModalOpts;
    thisTSBModalOpts['componentProps']={mode:'addtsheet',ts:{nTimeApproved:false},tsb:this.newBreaks,newTSFormData:this.addTSFormData};
    const tsNewBreaksModal = await this.modalCtrl.create(thisTSBModalOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.breakMOpen=true;this.logger.info('[TSheetAddModal|BreaksModal] (ionModalDidPresent)...')});
    tsNewBreaksModal.onWillDismiss().then(()=>{this.breakMOpen=false;this.logger.info('[TSheetAddModal|BreaksModal] (ionModalWillDismiss)...')});
    tsNewBreaksModal.onDidDismiss().then(res=>{
      console.log(res);
      this.logger.info('[TSheetAddModal|BreaksModal] (ionModalDidDismiss) >>> ()');
      if(res.data.length>0){
        this.wasChanged=true;this.shouldSave=true;this.updateSaveBannerTxt='updated';const nBA:any[]=res.data;
        let uS:any=this.addTSFormData.breaks.values.summary;let newDurMins:number=0;this.newBreaks=[];
        for(let i=0;i<nBA.length;i++){const nB:any=nBA[i];
          nB.breakType==='R'?uS.r++:uS.m++;
          newDurMins+=(nB.duration.hours*60)+nB.duration.minutes;
          let newBO:any={blnEmptySlot:false,intEnd:'',intStart:'',intUnixEnd:0,intUnixStart:0,mixedActivity:{blnCanEndEarly:1,blnCanStartEarly:1,blnIsMandatory:1,intState:3,strBreakType:'M'},strState:'Finished Duration',strType:'B',strTypeName:''};
          newBO.intEnd=this.dT.Id(nB.endDate);newBO.intStart=this.dT.Id(nB.startDate);
          newBO.intUnixEnd=this.dT.UTd(nB.endDate);newBO.intUnixStart=this.dT.UTd(nB.startDate);
          newBO.mixedActivity.strBreakType=nB.breakType;
          nB.breakType==='M'?newBO.strTypeName='Meal Break':newBO.strTypeName='Rest Break';
          this.newBreaks.push(newBO);
        }
        const currentDurMins:number=(this.addTSFormData.breaks.values.summary.dur.hours*60)+this.addTSFormData.breaks.values.summary.dur.minutes;
        const combinedDurMins:number=currentDurMins+newDurMins;
        const wholeH:number=Math.floor(combinedDurMins/60);
        const wholeM:number=combinedDurMins-(wholeH*60);
        this.addTSFormData.breaks.values.summary.dur.hours=wholeH;
        this.addTSFormData.breaks.values.summary.dur.minutes=wholeM;
        const totalSMins:number=(this.addTSFormData.ttime.hours*60)+this.addTSFormData.ttime.minutes;
        const totalAdjMins:number=totalSMins-combinedDurMins;
        const fTTHrs:number=Math.floor(totalAdjMins/60);
        const fTTMins:number=totalAdjMins-(fTTHrs*60);
        this.addTSFormData.ttime={hours:fTTHrs,minutes:fTTMins};
        this.evServ.showToast('success','New Break Data Add/Updated');
      }
      else{this.evServ.showToast('general','Break Data Unchanged')}
    });
    return await tsNewBreaksModal.present();
  }
//////////////////////////////////////////////////////////////////////////////////////
  updateComments() {
    this.logger.info('[Modal|TSheet-Add|updateComments] ()...');
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
