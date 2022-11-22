import { DateTimeService } from './../../../services/datetime.service';
import { EventsService } from './../../../services/events.service';
import { DetailMenuComponent } from './../../../popovers/detailmenu/detailmenu.component';
import { TSheetBreaksPage } from './tsheet-breaks/tsheet-breaks.page';
import { TSheetHistoryPage } from './tsheet-history/tsheet-history.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController, Platform, LoadingController } from '@ionic/angular';
import { ActionSheet, ShowActionsOptions, ActionSheetButton, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { DetailService } from 'src/app/services/detail.service';
import { NGXLogger } from 'ngx-logger';
import { Share } from '@capacitor/share';
import { Dialog, ConfirmOptions } from '@capacitor/dialog';
import { App } from '@capacitor/app';
import * as $ from 'jquery';
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-tsheet-detail',templateUrl:'./tsheet-detail.page.html',styleUrls:['./tsheet-detail.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class TSheetDetailPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  modalId:string;
  meObj:any;
  ts:any;
  areasArr:any;
  tsSlots:any;
  shiftDurObj:any={hours:0,minutes:0};
  showPMMins:boolean=false;
  showPMHrs:boolean=false;
  showTTLBreakMins:boolean=false;
  mBreakCount:number=0;
  rBreakCount:number=0;
  breaksTtlDur:string;
  nBreaks:any[]=[];
  pmRoster:string;
  TTPerformance:number;
  TTPerfValObj:Duration={hours:0,minutes:0};
  hasEmployeeComment:boolean = true;
  meAvatar:string;
  meEmpId:number;
  pplArr:any[]=[];
  hasSupervisorComment:boolean;
  sVNK:boolean=false;
  supervisorObj:any={avatar:'',label:''};
  hasInvoiceComment:boolean=true;
  noComments:boolean=false;
  didExport:boolean=false;
  exportVia:string;
  popOpen:boolean=false;
  aSheetOpen:boolean=false;
  currentPop:any;
  mHeaderTitle:string;
  newSelect:number;
  tsBreaksModalOpts:any={animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'tsheet-detail-breaks-class',component:TSheetBreaksPage,keyboardClose:true};
  tsHistoryModalOpts:any={animated:false,showBackdrop:false,backdropDismiss:false,cssClass:'tsheet-detail-history-class',component:TSheetHistoryPage,keyboardClose:true};
  tsHistoryModalOpen:boolean=false;
  shouldSave:boolean=false;
  tsBreaksModalOpen:boolean=false;
  wasChanged:boolean=false;
  updatedTS:any;
  updateSaveBannerTxt:string='Updated';
  showIncome:boolean=true;
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private dT: DateTimeService,
    private evServ: EventsService,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private loadCtrl: LoadingController,
    private navP: NavParams,
    private plt: Platform,
    private detailServ: DetailService
  ) { }
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(){
    this.logger.info('[Modal|TSheet-Detail|OnInit]');
    this.initPrefs();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initPrefs() {
    this.meAvatar=this.detailServ.meAva;this.meObj=this.detailServ.meObj;this.meEmpId=this.detailServ.meEmpId;this.pplArr=this.detailServ.pplArr;
    this.initTSData();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initTSData() {
    this.logger.info('[Modal|TSheet-Detail|InitTSData] ()...');
    this.ts=this.navP.data.ts;
    this.showIncome=this.navP.data.showincome;
    if(!this.ts.nTimeApproved){this.areasArr=this.navP.data.wareas};
    this.tsSlots = JSON.parse(this.ts.Slots);
    this.shiftDurObj = this.dT.DurAsObj(this.dT.Dut(this.ts.StartTime),this.dT.Dut(this.ts.EndTime));
    // Total Time
    const rawTTDiff:number=this.ts.TotalTime-this.ts.TotalTimeInv;
    if(rawTTDiff!==0){this.TTPerformance=Math.sign(rawTTDiff);this.TTPerfValObj=this.dT.rosVsTSTTDiff(this.ts.TotalTimeInv,this.ts.TotalTime)}
    else{this.TTPerformance=0};
    if(this.tsSlots.length>0){
      for(let i=0;i<this.tsSlots.length;i++){const thisB={index:i};
        if(this.tsSlots[i].mixedActivity.strBreakType==='R'){this.rBreakCount++;thisB['type']='Rest Break'};
        if(this.tsSlots[i].mixedActivity.strBreakType==='M'){this.mBreakCount++;thisB['type']='Meal Break'};
        const bStart:Date=this.dT.Dut(this.tsSlots[i].intUnixStart); thisB['start']=this.dT.format(bStart,'h:mmaaa');
        const bEnd:Date=this.dT.Dut(this.tsSlots[i].intUnixEnd); thisB['end']=this.dT.format(bEnd,'h:mmaaa');
        const bDurObj=this.dT.DurAsObj(bStart,bEnd);
        let bMins:number=0;if(bDurObj.hours>0){bMins=((bDurObj.hours*60)+bDurObj.minutes)}else{bMins=bDurObj.minutes}
        thisB['durObj']=bDurObj;thisB['durMins']=bMins;this.nBreaks.push(thisB);
      }
      let ttlMins:number=0;for(let i=0;i<this.nBreaks.length;i++){ttlMins+=this.nBreaks[i].durMins};this.breaksTtlDur=Math.round(ttlMins).toString();this.showTTLBreakMins=true
    }else{this.showTTLBreakMins=false;this.breaksTtlDur='NIL'}
    // Warnings
    let lWarnCount:number=0;
    if(this.ts.Warning!==''&&this.ts.Warning!==null&&this.ts.Warning!==undefined){
      if(this.ts.Warning.includes('|')){const warnArr:any[]=this.ts.Warning.split('|');this.ts['nWarning']=warnArr[0];lWarnCount++}
      else{this.ts['nWarning']=this.ts.Warning}
    };
    if(this.ts.WarningOverrideComment!==''&&this.ts.WarningOverrideComment!==null&&this.ts.WarningOverrideComment!==undefined){
      this.ts['nWarningOR']=this.ts.WarningOverrideComment;lWarnCount++
    };
    this.ts['nWarnCount']=lWarnCount;
    // Comments
    const eC:string=this.ts.EmployeeComment;const sV:number=Number(this.ts.Supervisor);const sVComm:string=this.ts.SupervisorComment;const iC=this.ts.InvoiceComment;
    eC!==null&&eC!==undefined&&eC!==''&&eC.length>0?this.hasEmployeeComment=true:this.hasEmployeeComment=false;
    iC!==null&&iC!==undefined&&iC!==''&&iC.length>0?this.hasInvoiceComment=true:this.hasInvoiceComment=false;
    if(sVComm!==null&&sVComm!==undefined&&sVComm!==''&&sVComm.length>0){
      this.hasSupervisorComment=true;
      let sEmpId:number;
      if(sV!==null&&sV!==undefined&&sV>0){sEmpId=sV}
      else{let tA=this.ts.TimeApprover;let crTr=Number(this.ts.Creator);if(tA!==null&&tA!==undefined&&Number(tA)>0){sEmpId=Number(tA)}else{sEmpId=crTr}};
      if(sEmpId!==this.meEmpId){
        const sVArr:any[]=this.pplArr.filter(p=>p.EmpId===sEmpId);
        if(sVArr.length>0){this.supervisorObj.label=sVArr[0].DisplayName;this.supervisorObj.avatar=sVArr[0].Photo;this.sVNK=false}
        else{this.supervisorObj.label='NK';this.supervisorObj.avatar='../../../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';this.sVNK=true}
      }else{this.supervisorObj.label='You';this.supervisorObj.avatar=this.meAvatar;this.sVNK=false}
    }else{this.hasSupervisorComment=false};
    !this.hasEmployeeComment&&!this.hasSupervisorComment&&!this.hasInvoiceComment?this.noComments=true:this.noComments=false
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter(){this.plt.ready().then(async()=>{const modalEl=await this.modalCtrl.getTop();this.modalId=modalEl.id})}
//////////////////////////////////////////////////////////////////////////////////////
  async openPop(event) {
    this.logger.info('[Modal|TSheetDetail|openPop] (event)');
    let editPop=await this.popCtrl.create({event:event,component:DetailMenuComponent,cssClass:'sheriff-pop-detailmenu-class',animated:false,showBackdrop:true,backdropDismiss:true});
    document.addEventListener('ionPopoverWillPresent',()=>{this.popOpen=true});
    document.addEventListener('ionPopoverWillDismiss',()=>{this.popOpen=false});
    editPop.onDidDismiss().then(choiceData=>{if(choiceData.role!=='backdrop'){this.logger.info('[TSheetDetail|editPop] (Menu Selection): '+choiceData)}else{this.logger.info('[TSheetDetail|editPop] - Dismissed Without Selection (Cancelled)')}});
    return editPop.present(); 
  }
//////////////////////////////////////////////////////////////////////////////////////
  async shareTS() {
    this.logger.info('[Modal|TSheet-Detail|shareTS] ()...');
    $('.sheriff-detail-header-btn-wrapper.share-btn').addClass('detail-sharebtn-active');
    App.addListener('appStateChange',({isActive})=>{if(isActive){$('.sheriff-detail-header-btn-wrapper.share-btn').removeClass('detail-sharebtn-active')}});
    let exportTxt:string='Timesheet #'+this.ts.Id+' - '+this.ts.nDate+':\n';
    Object.entries(this.ts).forEach(([key,value])=>{const newLine=`${key}: ${value}\n`;exportTxt = exportTxt.concat(newLine)});
    try {
      const shareRes = await Share.share({title:'Export Timesheet #'+this.ts.Id,text:exportTxt,url:null,dialogTitle:'Export Timesheet #'+this.ts.Id});
      this.evServ.showToast('success','Shared via '+shareRes.activityType);
      this.didExport=true;this.exportVia=shareRes.activityType;
      this.logger.info('[Modal|TSheet-Detail|shareTS] (Result): '+shareRes.activityType);
    } catch (shareErr) {
      this.evServ.showToast('error','Share Failed');
      this.logger.info('[Modal|TSheet-Detail|shareTS] (Error): '+shareErr)
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async editArea(currentArea:number) {
    this.logger.info('[Modal|TSheet-Detail|editArea] ('+currentArea+')...');
    if(!this.ts.nTimeApproved){
      let thisIndexToIdRefArr:any[]=[];
      const niceTxt=(rawLbl:string):string=>{const w=rawLbl.split(' ');const nT=w.map((w)=>{return w[0].toUpperCase()+w.substring(1)}).join(' ');return nT};
      let wareaASheetOpts:ShowActionsOptions={title:<string>'𝗦𝗘𝗟𝗘𝗖𝗧 𝗪𝗢𝗥𝗞 𝗔𝗥𝗘𝗔:',options:<ActionSheetButton[]>[]};
      for(let i=0;i<this.areasArr.length;i++){const tA=this.areasArr[i];let thisASB:ActionSheetButton={title:<string>'',style:<ActionSheetButtonStyle>ActionSheetButtonStyle.Default};Number(tA.Id)===Number(currentArea)?thisASB.title='\uD83D\uDFE2 '+niceTxt(tA.OperationalUnitName.toString().toLowerCase()):thisASB.title='\u26AB '+niceTxt(tA.OperationalUnitName.toString().toLowerCase());thisIndexToIdRefArr.push(tA.Id);wareaASheetOpts.options.push(thisASB)};
      thisIndexToIdRefArr.push(currentArea);wareaASheetOpts.options.push({title:'\u274C 𝗖𝗔𝗡𝗖𝗘𝗟',style:ActionSheetButtonStyle.Cancel});
      await ActionSheet.showActions(wareaASheetOpts).then(wareaRes=>{this.aSheetOpen=true;
        if(thisIndexToIdRefArr[wareaRes.index].toString()===currentArea.toString()){
          if(wareaRes.index+1===wareaASheetOpts.options.length){this.logger.info('[Modal|TSheet-Detail|editArea] (Cancelled)');this.evServ.showToast('cross','Cancelled')}
          else{this.logger.info('[Modal|TSheet-Detail|editArea] (Selected Same)');this.evServ.showToast('warning','Unchanged')};
          this.aSheetOpen=false}
          else{const newAId=thisIndexToIdRefArr[wareaRes.index];for(const areas of this.areasArr){if(newAId===areas.Id){this.ts.nOperationalUnit=areas.OperationalUnitName}};
          this.evServ.showToast('success','New Area Selected');this.shouldSave=true;this.wasChanged=true;this.updateSaveBannerTxt='updated';this.aSheetOpen=false;
          this.logger.info('[Modal|TSheet-Detail|editArea] (Selected) i:'+wareaRes.index+' | name: '+this.areasArr[wareaRes.index].OperationalUnitName);
        };
      }).catch(wareaErr=>{this.evServ.showToast('error','Change Area Error');this.logger.info('[Modal|TSheet-Detail|editArea] (Error): '+wareaErr);this.aSheetOpen=false})
    }else{this.logger.info('[Modal|TSheet-Detail|editArea] (Warning) TS Approved - Cannot Edit Areas - Skipping...')}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async editBreaks() {
    this.logger.info('[Modal|TSheet-Detail|editBreaks] ()...');
    let thisTSBModalOpts = this.tsBreaksModalOpts;
    thisTSBModalOpts['componentProps']={ts:this.ts,tsb:JSON.parse(this.ts.Slots),mode:'details'};
    const tsBreaksModal = await this.modalCtrl.create(thisTSBModalOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.tsBreaksModalOpen=true;this.logger.info('[TSheetDetailModal|BreaksModal] (ionModalDidPresent)...')});
    tsBreaksModal.onWillDismiss().then(()=>{this.tsBreaksModalOpen=false;this.logger.info('[TSheetDetailModal|BreaksModal] (ionModalWillDismiss)...')});
    tsBreaksModal.onDidDismiss().then(({data,role})=>{this.logger.info('[TSheetDetailModal|BreaksModal] (ionModalDidDismiss) >>> ()');
      if(role==='changed'){this.wasChanged=true;this.shouldSave=true;this.updateSaveBannerTxt='updated';this.updatedTS=data.ts;this.evServ.showToast('success','Break Data Updated')}
      else{this.evServ.showToast('general','Break Data Unchanged')}
    });
    return await tsBreaksModal.present();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async viewHistory() {
    this.logger.info('[Modal|TSheet-Detail|viewHistory] ()...');
    let thisTSHModalOpts = this.tsHistoryModalOpts;
    thisTSHModalOpts['componentProps']={ts:this.ts,avatar:this.meAvatar};
    const tsHistoryModal = await this.modalCtrl.create(thisTSHModalOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.tsHistoryModalOpen=true;this.logger.info('[TSheetDetailModal|HistoryModal] (ionModalDidPresent)...')});
    tsHistoryModal.onWillDismiss().then(()=>{this.tsHistoryModalOpen=false;this.logger.info('[TSheetDetailModal|HistoryModal] (ionModalWillDismiss)...')});
    tsHistoryModal.onDidDismiss().then(()=>{this.logger.info('[TSheetDetailModalHistoryModal] (ionModalDidDismiss) >>> (History Modal Dismissed - No Changes Possible.)')});
    return await tsHistoryModal.present();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeDetail() {
    if(this.shouldSave){
      const doSaveConfOpts:ConfirmOptions={title:'Save Changes?',message:'Changes made to Timesheet #'+this.ts.Id+'. Save or Discard?',okButtonTitle:'Save Changes',cancelButtonTitle:'Discard Changes'};
      const {value}=await Dialog.confirm(doSaveConfOpts);
      if(value){this.saveTSChanges(true)}else{this.modalCtrl.dismiss({data:null,role:'unchanged',id:this.modalId})}}
    else{
      if(this.wasChanged){this.modalCtrl.dismiss({data:this.updatedTS,role:'changed',id:this.modalId})}
      else{this.modalCtrl.dismiss({data:null,role:'unchanged',id:this.modalId})}
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async saveTSChanges(doClose:boolean) {
      this.logger.info('[Modal|TSheet-Breaks|saveBreaks] ()...');
      const saveBreaksLoader=await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Saving Timesheet #'+this.ts.Id});
      await saveBreaksLoader.present();
      setTimeout(()=>{
        this.logger.info('[Modal|TSheet-Detail|saveTSChanges] (Saving TS) - Remote: Deputy Put/Post TS Data - Await Server 200 - Do GET Request to /my/timesheet & Push Object to Local Variable...');
        this.logger.info('[Modal|TSheet-Detail|saveTSChanges] (Saving TS) - Local: Replace Updated Timesheet Object (New/Accepted Area/Other Props) in SQLite DB & Push to Local/Global Var to be Returned with Dismiss Detail - No Refresh Required to Update TSheet List View.');
        this.shouldSave=false;this.wasChanged=true;this.updateSaveBannerTxt='saved';
        saveBreaksLoader.dismiss();
        if(doClose){this.closeDetail()}
      },5000);
    }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
