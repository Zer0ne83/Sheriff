import { Component, OnInit, ViewChild } from '@angular/core';
import { DateTimeService } from './../../../services/datetime.service';
import { EventsService } from './../../../services/events.service';
import { ModalController, NavParams, PopoverController, Platform, IonInput } from '@ionic/angular';
import { PeopleDetailComponent } from 'src/app/popovers/peopledetail/peopledetail.component';
import { NGXLogger } from 'ngx-logger';
import { Share } from '@capacitor/share';
import { Keyboard } from '@capacitor/keyboard';
import { Dialog } from '@capacitor/dialog';
import { App } from '@capacitor/app';
import * as $ from 'jquery';
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-news-detail',templateUrl:'./news-detail.page.html',styleUrls:['./news-detail.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class NewsDetailPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  @ViewChild('cbInput') cbInput:IonInput;
  // Me/Work Vars
  meAvatar:string;
  meObj:any=null;
  myObj:any=null;
  workColor:string;
  workName:string;
  incBright:boolean;
  // Memo Vars
  memo:any=null;
  // ChatBox
  cbStatus:any={type:null,ico:null,name:null,text:''};
  cbCount:number=0;
  cbIgnore:boolean=false;
  // Header Detail Menu
  popOpen:boolean=false;
  // Share
  didExport:boolean;
  exportVia:any;
  kbO:boolean=false;
  kbH:string;
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private dT: DateTimeService,
    private evServ: EventsService,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private navP: NavParams,
    private plt: Platform,
  ) { }
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.logger.info('[Modal|Memo-Detail|OnInit]');
    Keyboard.removeAllListeners();
    Keyboard.addListener("keyboardDidShow",info=>{this.kbH=info.keyboardHeight.toString()+'px';this.kbO=true});
    Keyboard.addListener("keyboardDidHide",()=>{this.kbO=false});
    this.initMemoDetailData();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initMemoDetailData() {
    this.logger.info('[Modal|Memo-Detail|InitMemoData] ()...');
    this.memo=this.navP.data.memo;this.meAvatar=this.navP.data.meAva;this.meObj=this.navP.data.me;this.myObj=this.navP.data.my;this.workColor=this.navP.data.work.color;this.workName=this.navP.data.work.code;this.incBright=this.navP.data.work.bright;
    this.plt.ready().then(()=>{this.formatComments()})
  }
//////////////////////////////////////////////////////////////////////////////////////
  formatComments() { this.logger.info('[Modal|News-Detail|formatComments] ()...');
    for(let i=0;i<this.memo._DPMetaData.Comments.length;i++){
      let tCO:any=this.memo._DPMetaData.Comments[i];
      const nCreated:string=this.dT.format(this.dT.pISO(tCO.Created),'d MMM yyyy h:mmaaa');
      this.memo._DPMetaData.Comments[i]['Created']=nCreated
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  chatBoxInput(ev:string,val:string) { this.logger.info('[Modal|News-Detail|chatBoxInput] ('+ev+','+val+')...');
    if(!this.cbIgnore){
      const cbS={
        n: {type:null,ico:null,name:null,text:''},
        f: {type:'icon',ico:'forward',name:'chevron-forward',text:'Typing Comment...'},
        b: {type:'icon',ico:'back',name:'backspace',text:'Editing Comment...'},
        w: {type:'icon',ico:'wait',name:'ellipsis-horizontal',text:'Waiting...'},
        c: {type:'icon',ico:'clear',name:'trash',text:'Content Cleared.'},
        s: {type:'icon',ico:'sent',name:'checkmark',text:'Comment Sent Successfully!'},
        sp: {type:'spinner',ico:'spin',name:'dots',text:'Sending Comment - Please Wait...'}
      }
      if(ev==='focus'){this.cbStatus=cbS.w;if(this.cbCount!==val.length){this.cbCount=val.length}};
      if(ev==='blur'){this.cbStatus=cbS.n;if(this.cbCount!==val.length){this.cbCount=val.length}};
      if(ev==='clear'){this.cbStatus=cbS.c;this.cbCount=0};
      if(ev==='input'){
        const oldVLen:number=this.cbCount;console.log('Old Input Count: '+oldVLen);
        const newVLen:number=val.length;console.log('New Input Count: '+newVLen);
        const vDiff:number=newVLen-oldVLen;console.log('vDiff: '+vDiff);
        const vS:number=Math.sign(vDiff);console.log('vS: '+vS);
        if(vS===1){this.cbStatus=cbS.f;this.cbCount=newVLen;console.log('Do F')}
        else if(vS===-1){this.cbStatus=cbS.b;this.cbCount=newVLen;console.log('Do B')}
        else{this.cbStatus=cbS.w;this.cbCount=newVLen;console.log('Do W')}
      }
      if(ev==='send'){
        this.cbIgnore=true;
        this.cbStatus=cbS.sp;
        this.cbInput.disabled=true;
        //API LOGIC HERE...
        setTimeout(()=>{
          this.evServ.showToast('success','Comment Posted Successfully');
          this.cbInput.value='';
          this.cbStatus=cbS.s;
          this.cbInput.disabled=false;
          this.cbIgnore=false;
          setTimeout(()=>{this.cbStatus=cbS.n},1500)
        },3000);
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async deleteMemo() {
    this.logger.info('[Modal|Memo-Detail|deleteMemo] ()...');
    if(this.memo._DPMetaData.CanDelete){
      let delConfOpts:any={title:'Confirm Memo Delete',message:'Deleting a Memo cannot be undone. Are you sure?',okButtonTitle:'DELETE',cancelButtonTitle:'CANCEL'}
      const {value}=await Dialog.confirm(delConfOpts);if(value){this.closeDetail('delete')}else{this.evServ.showToast('cancel','Cancelled - Did NOT Delete Memo')}
    }else{this.evServ.showToast('error','Permission Error - Not Your Memo')}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async showPeoplePop(event) { this.logger.info('[Modal|News-Detail|showPeoplePop] (event)...');
    let pdPopOpts:any={component:PeopleDetailComponent,componentProps:{people:[],logs:[],confReqs:null,me:{}},showBackdrop:false,backdropDismiss:true,cssClass:'pop-peopledetail',event:event,animated:true,mode:'md',keyboardClose:true};
    pdPopOpts.componentProps.people=this.memo._DPMetaData.AssignedUsers;
    pdPopOpts.componentProps.logs=this.memo._DPMetaData.MemoLogs;
    pdPopOpts.componentProps.confReq=this.memo._DPMetaData.RequireConfirmation;
    pdPopOpts.componentProps.meConf=this.memo._DPMetaData.RequireMyConfirm?false:true;
    pdPopOpts.componentProps.me={ava:this.meAvatar,obj:this.meObj};
    const pdPop:any=await this.popCtrl.create(pdPopOpts);
    await pdPop.present();
    const {role}=await pdPop.onDidDismiss();
    this.logger.info('[Modal|News-Detail|showPeoplePop] (DISMISSED): With Role: '+role);
  }
//////////////////////////////////////////////////////////////////////////////////////
  confirmMemo() { this.logger.info('[Modal|News-Detail|confirmMemo] ()...') }
//////////////////////////////////////////////////////////////////////////////////////
  async shareMemo() {
    this.logger.info('[Modal|Memo-Detail|shareMemo] ()...');
    $('.sheriff-detail-header-btn-wrapper.share-btn').addClass('detail-sharebtn-active');
    App.addListener('appStateChange',({isActive})=>{if(isActive){$('.sheriff-detail-header-btn-wrapper.share-btn').removeClass('detail-sharebtn-active')}});
    let exportTxt:string='Timesheet #'+this.memo.Id+' - '+this.memo.nDate+':\n';
    Object.entries(this.memo).forEach(([key,value])=>{const newLine=`${key}: ${value}\n`;exportTxt = exportTxt.concat(newLine)});
    try {
      const shareRes = await Share.share({title:'Export Memo #'+this.memo.Id,text:exportTxt,url:null,dialogTitle:'Export Memo #'+this.memo.Id});
      this.evServ.showToast('success','Shared via '+shareRes.activityType);
      this.didExport=true;this.exportVia=shareRes.activityType;
      this.logger.info('[Modal|Memo-Detail|shareMemo] (Result): '+shareRes.activityType);
    } catch (shareErr) {
      this.evServ.showToast('error','Share Failed');
      this.logger.info('[Modal|Memo-Detail|shareTS] (Error): '+shareErr)
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeDetail(closeRole:string) {
    let cD:any;if(closeRole==='delete'){cD=this.memo.Id}else if(closeRole==='dismiss'){cD=null}else{cD=null};
    this.modalCtrl.dismiss({role:closeRole,data:cD})
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
