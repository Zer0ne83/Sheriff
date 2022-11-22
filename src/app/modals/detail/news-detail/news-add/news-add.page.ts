import { EventsService } from '../../../../services/events.service';
import { DeputyService } from '../../../../services/deputy.service';
import { FileSystemService } from 'src/app/services/filesystem.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecipientsPage } from './recipients/recipients.page';
import { ModalController, NavParams, Platform, IonInput, IonTextarea} from '@ionic/angular';
import { Dialog } from '@capacitor/dialog';
import { Keyboard, KeyboardInfo } from '@capacitor/keyboard';
import { NGXLogger } from 'ngx-logger';
import * as $ from 'jquery';
import * as _ from 'lodash';
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-news-add',templateUrl:'./news-add.page.html',styleUrls:['./news-add.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class NewsAddPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  @ViewChild('newMemoBox') newMemoBox:IonTextarea;
  @ViewChild('newMemoBoxWrap') newMemoBoxWrap:ElementRef;
  @ViewChild('newMemoTitle') newMemoTitle:IonInput;
  // init Prefs
  modalId:any;
  addRecModalOpts:any={animated:false,showBackdrop:true,backdropDismiss:false,cssClass:'memo-recipients-modal-class',component:RecipientsPage,keyboardClose:true};
  addRecModalOpen:boolean=false;
  meAvatar:string=this.navP.data.meAva;
  meObj:any=this.navP.data.me;
  myObj:any=this.navP.data.my;
  workColor:string=this.navP.data.work.color;
  workName:string=this.navP.data.work.code;
  incBright:boolean=this.navP.data.work.bright;
  myPpl:any[]=this.navP.data.ppl;
  meEmpId:number;
  // Memo Box
  mbIgnore:boolean=false;
  mbStatus:any={type:null,ico:null,name:null,text:''};
  mbCount:number=0;
  mbFocus:boolean=false;
  // Recipient List
  recList:any[]=[];
  recListReady:boolean=false;
  recShowHead:any[]=[];
  // Memo Contents
  memoTitle:string=null;
  memoContentReady:boolean=false;
  memoFiles:any=[];
  memoUrls:any=[];
  memoReqConf:boolean=false;
  // Keyboard
  scH:number;
  fitH:string;
  isNegH:boolean=false;
  negH:string;
  //////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private modalCtrl: ModalController,
    private navP: NavParams,
    private plt: Platform,
    private deputy: DeputyService,
    private evServ: EventsService,
    private fileServ: FileSystemService
  ) {}
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(){
    this.logger.info('[Modal|News-Add|OnInit]');
    this.initPrefs();
  }
//////////////////////////////////////////////////////////////////////////////////////
  adjustKB(kbE:string,kbHeight:number) { this.logger.info('[Modal|News-Add|adjustKB] ('+kbE+','+kbHeight+')...');
    if(kbE==='show'){
      const kbTop:number=this.scH-kbHeight;const mbDiv:any=this.newMemoBoxWrap.nativeElement.getBoundingClientRect();const mbBot:number=mbDiv.bottom;const diffH:number=kbTop-mbBot-25;
      const mSD:number=Math.sign(diffH);
      if(mSD===1){ this.logger.info('[Modal|News-Add|adjustKB] (Positive Adjust) @ '+diffH+'px');
        this.isNegH=false;
        const fitH:string=(mbDiv.height+diffH).toString()+'px';
        this.newMemoBoxWrap.nativeElement.style.height=fitH
      }else if(mSD===-1){ this.logger.info('[Modal|News-Add|adjustKB] (Negative Adjust) @ '+diffH+'px');
        this.isNegH=true;
        this.negH=diffH+'px';
        this.newMemoBoxWrap.nativeElement.style.height='auto';
      }else{ this.logger.info('[Modal|News-Add|adjustKB] (No Adjust) @ '+diffH+'px');
        this.isNegH=false;
        this.newMemoBoxWrap.nativeElement.style.height='auto'
      }
    }else if(kbE==='hide'){
      this.isNegH=false;
      this.newMemoBoxWrap.nativeElement.style.height='auto'
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initPrefs() {
    this.logger.info('[Modal|News-Add|initPrefs]');
    this.plt.ready().then(async()=>{
      const modalEl=await this.modalCtrl.getTop();this.modalId=modalEl.id;
      this.meEmpId=this.meObj.EmployeeId;
      for(let i=0;i<this.myPpl.length;i++){const p:any=this.myPpl[i];
        if(p.EmpId!==this.meEmpId){
          this.recList.push({id:p.EmpId,name:p.FirstName,ava:p.Photo,isChecked:false})
        }
      };
      this.recShowHead=[];
      this.recListReady=this.checkRecListReady();
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { 
    this.logger.info('[Modal|News-Add|ionViewDidEnter]');
    this.scH=this.plt.height();
    Keyboard.removeAllListeners();
    Keyboard.addListener('keyboardDidShow',info=>{
      $('.news-addmemo-typedata-grid').css('display','block');
      const lKBH:number=info.keyboardHeight;
      this.adjustKB('show',lKBH);
    });
    Keyboard.addListener('keyboardDidHide',()=>{
      $('.news-addmemo-typedata-grid').css('display','none');
      this.adjustKB('hide',null)
    });
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave(){ this.logger.info('[Modal|News-Add|ionViewWillLeave] ()...');
    Keyboard.removeAllListeners();
  }
//////////////////////////////////////////////////////////////////////////////////////
  memoBoxEvent(ev:string,val:string) {
    this.logger.info('[Modal|News-Add|memoBoxInput] ('+ev+','+val+')...');
    if(!this.mbIgnore){
      const cbS={
        n: {type:null,ico:null,name:null,text:''},
        f: {type:'icon',ico:'forward',name:'chevron-forward',text:'Typing Memo...'},
        b: {type:'icon',ico:'back',name:'backspace',text:'Editing Memo...'},
        w: {type:'icon',ico:'wait',name:'ellipsis-horizontal',text:'Waiting...'},
        c: {type:'icon',ico:'clear',name:'trash',text:'Content Cleared.'},
        s: {type:'icon',ico:'sent',name:'checkmark',text:'Memo Posted!'},
        sp: {type:'spinner',ico:'spin',name:'dots',text:'Posting Memo - Please Wait...'}
      }
      if(ev==='focus'){ this.logger.info('[Modal|News-Add|memoBoxEvent] (FOCUS)...');
        this.mbFocus=true;this.mbStatus=cbS.w;if(this.mbCount!==val.length){this.mbCount=val.length}};
        val.length>0?this.memoContentReady=true:this.memoContentReady=false;
      if(ev==='blur'){ this.logger.info('[Modal|News-Add|memoBoxEvent] (BLUR)...');
        this.mbFocus=false;this.mbStatus=cbS.n;if(this.mbCount!==val.length){this.mbCount=val.length}};
        val.length>0?this.memoContentReady=true:this.memoContentReady=false;
      if(ev==='input'){ this.logger.info('[Modal|News-Add|memoBoxEvent] (INPUT)...');
        const oldVLen:number=this.mbCount;const newVLen:number=val.length;const vDiff:number=newVLen-oldVLen;const vS:number=Math.sign(vDiff);
        if(vS===1){this.mbStatus=cbS.f;this.mbCount=newVLen}
        else if(vS===-1){this.mbStatus=cbS.b;this.mbCount=newVLen}
        else{this.mbStatus=cbS.w;this.mbCount=newVLen};
        val.length>0?this.memoContentReady=true:this.memoContentReady=false;
      }
      if(ev==='send'){ this.logger.info('[Modal|News-Add|memoBoxEvent] (SEND/POST)...');
        val.length>0?this.memoContentReady=true:this.memoContentReady=false;
        this.recListReady=this.checkRecListReady();
        this.logger.info('[Post Required Field Check]: (Recipients)='+this.recListReady+' | (Memo Content)='+this.memoContentReady);
        if(this.recListReady&&this.memoContentReady){ 
          this.mbIgnore=true;this.mbStatus=cbS.sp;this.newMemoBox.disabled=true;
          let pMemoObj:any={title:null,body:val,file:null,url:null,reqconf:false};
          if(this.memoTitle!==null){pMemoObj.title=this.memoTitle};
          if(this.memoFiles.length>0){pMemoObj.file=this.memoFiles[0]};
          if(this.memoUrls.length>0){pMemoObj.file=this.memoUrls[0]};
          if(this.memoReqConf){pMemoObj.reqconf=true};
          let testMode:boolean=true;
          //API LOGIC HERE...
          //showFrom:Date|null,active:boolean|null,showTill:Date|null,title:string|null,content:string,fileId:number|null,url:string|null,reqConfirm:boolean
          if(!testMode){
            const postMemoRes:any=this.deputy.postMemo(null,true,null,pMemoObj.title,pMemoObj.body,pMemoObj.file,pMemoObj.url,pMemoObj.reqconf);
            this.logger.info('[Modal|Add-News|memoBoxInput] (Post Memo) [API]...');
            console.log(postMemoRes);
          }else{
            setTimeout(()=>{
              this.evServ.showToast('success','Memo Posted Successfully');
              this.newMemoBox.value='';this.mbStatus=cbS.s;this.newMemoBox.disabled=false;this.mbIgnore=false;
              setTimeout(()=>{this.mbStatus=cbS.n},1500)
            },3000)
          }
        }else{
          let missingStr:string;let missingAni:string='';
          if (!this.recListReady&&!this.memoContentReady){missingStr='Recipients & Memo Content';missingAni='b'}
          else if(!this.recListReady&&this.memoContentReady){missingStr='Recipients';missingAni='r'}
          else {missingStr='Memo Content';missingAni='m'};
          if(missingAni==='b'){this.noRecipientsAni();this.noMemoContentAni()};
          if(missingAni==='r'){this.noRecipientsAni()};
          if(missingAni==='m'){this.noMemoContentAni()};
          this.evServ.showToast('error','Missing: '+missingStr);
        }
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  checkRecListReady() { this.logger.info('[Modal|Add-News|checkRecListReady] ()...');
    let isReady:boolean;this.recShowHead.length>0?isReady=true:isReady=false;return isReady
  }
//////////////////////////////////////////////////////////////////////////////////////
  noRecipientsAni() { this.logger.info('[Modal|Add-News|noRecpientsAni] ()...');
    const doAni=()=>new Promise((resolve)=>{const aniStr='animate__animated animate__rubberBand animDel-1000 animDur-750';const aniEle=$('.news-addmemo-no-add.recipients');$(aniEle).on('animationend',()=>{$(aniEle).removeClass(aniStr);resolve(true)});$(aniEle).addClass(aniStr)});doAni()
  }
//////////////////////////////////////////////////////////////////////////////////////
  noMemoContentAni() { this.logger.info('[Modal|Add-News|noMemoContentAni] ()...');
  const doAni=()=>new Promise((resolve)=>{const aniStr='animate__animated animate__flash animDel-1750 animDur-750';const aniEle=$('.news-addmemo-messagebox');$(aniEle).on('animationend',()=>{$(aniEle).removeClass(aniStr);resolve(true)});$(aniEle).addClass(aniStr)});doAni()
  }
//////////////////////////////////////////////////////////////////////////////////////
  async addRecipients() { this.logger.info('[Modal|News-Add|addRecipients] ()...'); 
    this.logger.info('[Modal|Add-News|addRecipients] ()...');
    let thisAddRecModalOpts=this.addRecModalOpts;
    const modalORList:any[]=this.recList;
    thisAddRecModalOpts['componentProps']={mORL:modalORList};
    const addRecModal=await this.modalCtrl.create(thisAddRecModalOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.addRecModalOpen=true;this.logger.info('[Modal|Add-News|addRecipients] (ionModalDidPresent)')});
    addRecModal.onDidDismiss().then(({data,role})=>{this.logger.info('[Modal|Add-News|addRecipients] (ionModalDidDismiss) >>> (Role): '+role+' ...');
    setTimeout(() => {
      const oArrLen:number=this.recShowHead.length;
      const upsert=(item:any)=>{const rI=this.recShowHead.findIndex(_item=>_item.id===item.id);if(rI>-1)this.recShowHead[rI]=item;else this.recShowHead.push(item)};
      if(role==='all'){
        this.recShowHead=[];
        let allArr:any[]=[];
        for(let i=0;i<this.recList.length;i++){
          const rPO:any=this.recList[i];
          rPO.isChecked=true;
          this.recShowHead.push(rPO);
          allArr.push(rPO);
        }
        this.recList=allArr
      }
      else if(role==='none'){
        this.recShowHead=[];
        let noneArr:any[]=[];
        for(let i=0;i<this.recList.length;i++){
          const rPO:any=this.recList[i];
          rPO.isChecked=false;
          noneArr.push(rPO);
        }
        this.recList=noneArr
      }
      else if(role==='update'){this.recList=data;
        for(let i=0;i<this.recList.length;i++){
          if(this.recList[i].isChecked){upsert(this.recList[i])}
          else{const dI:number=this.recShowHead.findIndex(p=>p.id===this.recList[i].id);if(dI!==-1){this.recShowHead.splice(dI,1)}}
        };
        const nArrLen:number=this.recShowHead.length;
        this.recListReady=this.checkRecListReady();
        if(oArrLen===nArrLen){this.evServ.showToast('warning','No Change to List')}
        else{this.evServ.showToast('success','Recipient List Updated')}
      }else if(role==='cancel'){this.evServ.showToast('cross','Cancelled')}
    },500);
      
    });
    return await addRecModal.present();
  }
//////////////////////////////////////////////////////////////////////////////////////
  removeRP(rpIndex:number) {
    this.logger.info('[Modal|News-Add|removeRP] ('+rpIndex+')');
    const sHId:number=this.recShowHead[rpIndex].id;
    this.recShowHead=this.recShowHead.filter(p=>p.id!==sHId);
    for(let i=0;i<this.recList.length;i++){if(this.recList[i].id===sHId){this.recList[i].isChecked=false}}
    this.recListReady=this.checkRecListReady();
  }
//////////////////////////////////////////////////////////////////////////////////////
  updateMemoTitle(titleTxt:string) {
    this.logger.info('[Modal|News-Add|updateMemoTitle] ('+titleTxt+')');
    titleTxt.length>0?this.memoTitle=titleTxt:this.memoTitle=null;
  }
//////////////////////////////////////////////////////////////////////////////////////
  async addFiles() { this.logger.info('[Modal|News-Add|addFiles] ()...');
    const tFileName:string='File'+(this.memoFiles.length+1);
    this.memoFiles.push({name:tFileName,id:''})
  }
//////////////////////////////////////////////////////////////////////////////////////
  removeMemoFile(mfIndex:number) {
    this.logger.info('[Modal|News-Add|removeMemoFile] ('+mfIndex+')');
    const newMFList:any[]=[];
    for(let i=0;i<this.memoFiles.length;i++){if(i!==mfIndex){newMFList.push(this.memoFiles[i])}};
    this.memoFiles=newMFList;
  }
//////////////////////////////////////////////////////////////////////////////////////
  async addUrls() { this.logger.info('[Modal|News-Add|addUrls] ()...');
    const {value,cancelled}=await Dialog.prompt({title:'Add URL to Memo',message:'Enter full URL',okButtonTitle:'Add URL',cancelButtonTitle:'Cancel',inputPlaceholder:'e.g. https://mylink.com/article'});
    if(cancelled){this.logger.info('[Modal|News-Add|addUrls] (CANCELLED)');this.evServ.showToast('warning','Cancelled')}
    else{
      let urlName:string='Link'+(this.memoUrls.length+1);
      const tUrlStr:string=JSON.stringify(value);
      this.memoUrls.push({name:urlName,url:tUrlStr});
      this.logger.info('[Modal|News-Add|addUrls] (ADDED): '+value);
      this.evServ.showToast('success', 'Added URL to Memo')};
  }
//////////////////////////////////////////////////////////////////////////////////////
  removeMemoUrl(muIndex:number) {
    this.logger.info('[Modal|News-Add|removeMemoUrl] ('+muIndex+')');
    const newMUList:any[]=[];
    for(let i=0;i<this.memoUrls.length;i++){if(i!==muIndex){newMUList.push(this.memoUrls[i])}};
    this.memoUrls=newMUList;
  }
//////////////////////////////////////////////////////////////////////////////////////
  reqConfChange() { this.logger.info('[Modal|News-Add|reqConfChange] ()...');
    this.memoReqConf?this.memoReqConf=false:this.memoReqConf=true;
    this.logger.info('[Modal|News-Add|reqConfChange] (REQUIRE CONFIRMATION) [CHANGED TO]: '+this.memoReqConf);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeAddNews() {
    this.logger.info('[Modal|News-Add|closeAddNews] ()...');
    this.modalCtrl.dismiss({data:null,role:null,id:this.modalId})
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
