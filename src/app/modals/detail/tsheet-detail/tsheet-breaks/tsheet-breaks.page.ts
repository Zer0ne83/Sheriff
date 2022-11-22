import { DateTimeService } from './../../../../services/datetime.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController, ActionSheetController, Platform, IonInput, LoadingController } from '@ionic/angular';
import { NGXLogger } from 'ngx-logger';
import { Dialog, ConfirmOptions } from '@capacitor/dialog';
import * as $ from 'jquery';
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector: 'app-tsheet-breaks',templateUrl: './tsheet-breaks.page.html',styleUrls: ['./tsheet-breaks.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class TSheetBreaksPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  modalId:string;
  mode:string;
  ts:any;
  tsb:any;
  breaks:any[] = [];
  newBreaks:any = [];
  newBInputErr:any = null;
  shouldSave:boolean = false;
  totalTime:any = {hours:0,minutes:0};
  newBreakActive:boolean = false;
  wasChanged:boolean = false;
  updatedTSObj:any;
  updatedBreaksArr:any[]=[];
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private modalCtrl: ModalController,
    private loadCtrl: LoadingController,
    private navP: NavParams,
    private plt: Platform,
    private dT: DateTimeService
  ) { }
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.logger.info('[Modal|TSheet-Breaks|OnInit]');
    this.initTSBreaksData();
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter(){
    this.plt.ready().then(async()=>{const modalEl = await this.modalCtrl.getTop();this.modalId=modalEl.id})
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initTSBreaksData() {
    this.logger.info('[Modal|TSheet-Detail|InitTSData] ()...');
    this.mode=this.navP.data.mode;
    this.ts=this.navP.data.ts;
    this.tsb=this.navP.data.tsb;
    for(let i=0;i<this.tsb.length;i++){let thisB={index:i};
      thisB['breakType']=this.tsb[i].mixedActivity.strBreakType;
      thisB['typeName']=this.tsb[i].strTypeName;
      this.tsb[i].strType==='A'?thisB['type']='Paid':thisB['type']='Unpaid';
      thisB['state']=this.tsb[i].strState;
      thisB['stateCode']=this.tsb[i].intState;
      if(this.tsb[i].intStart===0){thisB['startNice']='-'}
      else{thisB['startNice']=this.dT.NTut(this.tsb[i].intUnixStart);thisB['startDate']=this.dT.Dut(this.tsb[i].intUnixStart)}
      if(this.tsb[i].intEnd===0){thisB['endNice']='-'}
      else{thisB['endNice']=this.dT.NTut(this.tsb[i].intUnixEnd);thisB['endDate']=this.dT.Dut(this.tsb[i].intUnixEnd)}
      if(this.tsb[i].intStart===0&&this.tsb[i].intEnd===0){thisB['duration']={hours:0,minutes:0}}
      else{
        thisB['duration']=this.dT.DurAsObj(new Date(this.tsb[i].intStart),new Date(this.tsb[i].intEnd));
        if(thisB['duration']['hours']>0){this.totalTime.hours+=thisB['duration']['hours']};
        if(thisB['duration']['minutes']>0){this.totalTime.hours+=thisB['duration']['minutes']};
      }
      if(this.tsb[i].mixedActivity.blnIsMandatory===1){thisB['status']='mandatory'}else{if(this.tsb[i].intUnixEnd-this.tsb[i].intUnixStart>0){thisB['status']='taken'}else{thisB['status']='nottaken'}};
      this.breaks.push(thisB);
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeBreaks() {
    this.logger.info('[Modal|TSheet-Breaks|closeBreaks] ()...');
    if(this.shouldSave){
      const doSaveConfOpts:ConfirmOptions={title:'Save Changes?',message:'New or updated break data for Timesheet #'+this.ts.Id+'. Save or Discard?',okButtonTitle:'Save Changes',cancelButtonTitle:'Discard Changes'};
      const {value} = await Dialog.confirm(doSaveConfOpts);
      if(value){this.saveBreaks(true)}else{this.modalCtrl.dismiss({data:null,role:'unchanged',id:this.modalId})}
    }else{
      if(this.wasChanged){
        if(this.mode==='details'){
          this.modalCtrl.dismiss({ts:this.updatedTSObj,breaks:this.updatedBreaksArr},'changed',this.modalId)}
        else{
          if(this.mode==='addtsheet'){this.modalCtrl.dismiss(this.breaks,'new',this.modalId)}
        }
      }else{this.modalCtrl.dismiss({data:null,role:'unchanged',id:this.modalId})}
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async saveBreaks(doClose:boolean) {
    this.logger.info('[Modal|TSheet-Breaks|saveBreaks] ()...');
    const saveBreaksLoader = await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Updating Break Data'});
    await saveBreaksLoader.present();
    setTimeout(() => {
      this.logger.info('[Modal|TSheet-Breaks|saveBreaks] (Saving New Breaks) - Remote: Deputy Put/Post Slots Data - Await Server 200 - Do GET Request to /my/timesheet & Push Object to Local Variable...');
      this.logger.info('[Modal|TSheet-Breaks|saveBreaks] (Saving New Breaks) - Local: Replace Updated Timesheet Object (New/Accepted Break Slots) in SQLite DB & Push to Local/Global Var to be Returned with Dismiss Data - No Refresh Required to Update TSheet-Detail View.');
      this.updatedTSObj=this.ts; // Change to New Obj Returned As Above
      this.updatedBreaksArr=this.tsb; // Change to New Breaks Arr Returned As Above
      this.wasChanged=true;
      this.aniSave();this.shouldSave=false;
      saveBreaksLoader.dismiss();
      if(doClose){this.closeBreaks()};
    }, 5000);
  }
//////////////////////////////////////////////////////////////////////////////////////
  newBreak() {
    this.logger.info('[Modal|TSheet-Breaks|addBreaks] ()...');
    this.newBreaks.push({index:this.newBreaks.length,breakType:'R',typeName:'Rest Break',duration:{hours:0,minutes:0},startNice:'Select Time',startDate:new Date(),endNice:'Select Time',endDate:new Date(),status:'taken',isnew:true});
    this.newBreakActive=true;
  }
//////////////////////////////////////////////////////////////////////////////////////
  addBreak(index:number) {
    this.logger.info('[Modal|TSheet-Breaks|saveNewBreak] ()...');
    const newBDurObj=this.newBreaks[index].duration;
    const saveBreak = this.newBreaks.filter(b=>b.index===index);
    this.breaks.push(saveBreak[0]);
    if(newBDurObj.hours>0){this.totalTime.hours+=newBDurObj.hours};
    if(newBDurObj.minutes>0){this.totalTime.minutes+=newBDurObj.minutes};
    if(this.totalTime.minutes>60){this.totalTime.hours+=1;this.totalTime.minutes=this.totalTime.minutes-60};
    this.newBreaks = this.newBreaks.filter(b=>b.index!==index);
    this.newBreaks.length>0?this.newBreakActive=true:this.newBreakActive=false;
    this.aniNew();
    this.shouldSave=true;
  }
//////////////////////////////////////////////////////////////////////////////////////
  deleteNewBreak(index:number) {
    this.logger.info('[Modal|TSheet-Breaks|deleteNewBreak] ()...');
    this.newBreaks = this.newBreaks.filter(b=>b.index!==index);
    this.newBreaks.length>0?this.newBreakActive=true:this.newBreakActive=false;
  }
//////////////////////////////////////////////////////////////////////////////////////
  breakTypeBtn(btI:number,btV:string) {$('.break-type-radio-group-'+btI.toString()).prop('value',btV)}
  selectBreakType(breakI:number,breakTypeVal:string) {
    this.logger.info('[Modal|TSheet-Breaks|selectBreakType] (ionChange) ('+breakI+','+breakTypeVal+')...');
    this.newBreaks[breakI].breakType=breakTypeVal;
    breakTypeVal==='M'?this.newBreaks[breakI].typeName='Meal Break':this.newBreaks[breakI].typeName='Rest Break';
  }
//////////////////////////////////////////////////////////////////////////////////////
  async openTimeSelect(index:number,startOrEnd:string) {
    this.logger.info('[Modal|TSheet-Breaks|addBreaks|OpenTimeSelect] ('+index,startOrEnd+')...');
    const sDate:Date=this.dT.Dut(this.ts.StartTime);
    const hsDur:number=Math.ceil(Number(this.ts.TotalTimeInv)/2);
    let newBOpenTime:Date;this.mode==='addtsheet'?newBOpenTime=new Date():newBOpenTime=this.dT.startOfHr((this.dT.addHrs(sDate,hsDur)));
    this.dT.openTimePicker(newBOpenTime,startOrEnd).then( newT => {
      const nicePtyStr=startOrEnd+'Nice';const datePtyStr=startOrEnd+'Date';
      this.newBreaks[index][nicePtyStr] = this.dT.format(newT,'h:mmaaa');
      this.newBreaks[index][datePtyStr] = newT;
      const isDate=(d:any)=>{if(Object.prototype.toString.call(d)==="[object Date]")return true;return false};
      const nbSN:any=this.newBreaks[index].startNice;const nbSD:any=this.newBreaks[index].startDate;
      const nbEN:any=this.newBreaks[index].endNice;const nbED:any=this.newBreaks[index].endDate;
      const def:string='Select Time';
      if(nbSN!==def&&nbEN!==def){
        if(isDate(nbSD)&&isDate(nbED)){
          if(startOrEnd==='start'){
            if(this.dT.isA(nbSD,nbED)){this.logger.info('[newBreak|inputError] (Start Time -ISAFTER- End Time)');this.newBInputErr='start';$('.save-newbreak-btn').prop('disabled',true)}
            else{if(this.newBInputErr==='start'||this.newBInputErr===null){this.newBInputErr=null;$('.save-newbreak-btn').prop('disabled',false)}}}
          else{
            if(this.dT.isB(nbED,nbSD)){this.logger.info('[newBreak|inputError] (End Time -ISBEFORE- Start Time)');this.newBInputErr='end';$('.save-newbreak-btn').prop('disabled',true)}
            else{if(this.newBInputErr==='end'||this.newBInputErr===null){this.newBInputErr=null;$('.save-newbreak-btn').prop('disabled',false)}}}
          if(this.newBInputErr!=='start'&&this.newBInputErr!=='end'){this.newBreaks[index].duration=this.dT.DurAsObj(nbSD,nbED);$('.save-newbreak-btn').prop('disabled',false)}else{$('.save-newbreak-btn').prop('disabled',true)}
        }else{this.logger.info('[newBreak|TimeInputs] - One or More Inputs Do Not Check as Date Objects.')}
      }else{this.logger.info('[newBreak|TimeInputs] - One or More Inputs Check as Default - Select Time')}
    }).catch(dpErr=>{console.log(dpErr)});
  }
//////////////////////////////////////////////////////////////////////////////////////
  aniNew() { const doAni=()=>new Promise((resolve)=>{const aniStr='animate__animated animate__rubberBand plus1breakcount';$('.title-bc-ani').on('animationend',()=>{$('.title-bc-ani').removeClass(aniStr);resolve(true)});$('.title-bc-ani').addClass(aniStr)});doAni()}
//////////////////////////////////////////////////////////////////////////////////////
  aniSave() { const doAni=()=>new Promise((resolve)=>{const aniStr='animate__animated animate__flipInX saving-tsb-data';$('.save-data').on('animationend',()=>{$('.save-data').removeClass(aniStr);resolve(true)});$('.save-data').addClass(aniStr)});doAni()}
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
