import { EventsService } from './../../../services/events.service';
import { DeputyService } from '../../../services/deputy.service';
import { DateTimeService } from '../../../services/datetime.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskAssigneePage } from './taskassignee/taskassignee.page';
import { ModalController, NavParams, Platform, LoadingController, IonInput, IonTextarea } from '@ionic/angular';
import { Dialog, ConfirmOptions } from '@capacitor/dialog';
import { Keyboard } from '@capacitor/keyboard';
import { NGXLogger } from 'ngx-logger';
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-task-add',templateUrl:'./task-add.page.html',styleUrls:['./task-add.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class TaskAddPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  @ViewChild(IonInput,{static:false}) atiTitle:IonInput;
  @ViewChild(IonTextarea,{static:false}) atiNotes:IonTextarea;
  modalNavData:any;modalId:string;
  meObj:any;myObj:any;meAvatar:string;workAvatar:string;myEmpId:number=0;
  pplArr:any[]=[];
  submitReady:boolean=false;didSubmit:boolean=false;
  addForm:any={
    title:{input:'atiTitle',required:true,focus:false,valid:null,value:null},
    assign:{required:true,focus:false,valid:null,value:null},
    duedate:{required:false,focus:false,valid:null,value:null,txt:null,ts:null},
    notes:{input:'atiNotes',required:false,focus:false,valid:null,value:null}
  };
  assList:any[]=[];
  assSelModalOpts:any={animated:false,showBackdrop:true,backdropDismiss:false,cssClass:'memo-recipients-modal-class',component:TaskAssigneePage,keyboardClose:true};
  assSelIsOpen:boolean=false;
  dateSelIsOpen:boolean=false;dateOD:boolean=false;
  myTasksListLen:number;assTasksListLen:number;
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private modalCtrl: ModalController,
    private loadCtrl: LoadingController,
    private navP: NavParams,
    private plt: Platform,
    private dT: DateTimeService,
    private deputy: DeputyService,
    private evServ: EventsService
  ){}
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(){ this.logger.info('[Modal|Tasks-Add|OnInit]');
    this.initPrefs()
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initPrefs() { this.logger.info('[Modal|Tasks-Add|initPrefs] ()...')
    Keyboard.removeAllListeners();
    this.modalNavData=this.navP.data;this.meObj=this.modalNavData.me;this.myObj=this.modalNavData.my;this.meAvatar=this.modalNavData.meAva;this.workAvatar=this.modalNavData.workAva;this.myEmpId=this.modalNavData.meEmpId;this.pplArr=this.modalNavData.ppl;this.assList=this.modalNavData.ppl;this.myTasksListLen=this.modalNavData.myTListLen;this.assTasksListLen=this.modalNavData.assTListLen;
    if(this.myEmpId>0){const assignMeArr:any[]=this.modalNavData.ppl.filter(p=>p.EmpId===this.myEmpId);if(assignMeArr.length>0){this.addForm.assign.value=assignMeArr[0];this.addForm.assign.valid=true}}
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[Modal|Tasks-Add|ionViewDidEnter]');
    this.plt.ready().then(async()=>{const modalEl=await this.modalCtrl.getTop();this.modalId=modalEl.id})
  }
//////////////////////////////////////////////////////////////////////////////////////
  actionATField(fieldAction:string,formPtyName:string,fieldVal:any) { this.logger.info('[TabTasks|actionATField] ('+fieldAction+','+formPtyName+','+fieldVal+')...');
    const getPH=()=>{if(this.addForm[formPtyName].required){return 'Required'}else{return 'Optional'}};
    const allValidCheck=()=>{if(this.addForm.title.valid&&this.addForm.assign.valid){return true}else{return false}};
    if(fieldAction==='blur'){
      this.addForm[formPtyName].focus=false;
      const inputEleStr:string=this.addForm[formPtyName].input;this[inputEleStr].placeholder=getPH();
      fieldVal===''||fieldVal.length<1?this.addForm[formPtyName].value=null:this.addForm[formPtyName].value=fieldVal;
      if(formPtyName==='title'){
        if(this.addForm.title.value===null){this.addForm.title.valid=false}else{this.addForm.title.valid=true}
      }else{this.addForm.notes.valid=true};
      if(allValidCheck()){this.submitReady=true}else{this.submitReady=false}
    }else{this.addForm[formPtyName].focus=true;const inputEleStr:string=this.addForm[formPtyName].input;this[inputEleStr].placeholder='';this.addForm[formPtyName].valid=null}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeAddTask() { this.logger.info('[Modal|Task-Add|closeAddTask] ()...');
    if(this.submitReady&&!this.didSubmit){
      const addDiscardTaskOpts:ConfirmOptions={title:'Add New Task?',message:'Add or Discard New Task?',okButtonTitle:'Add Task',cancelButtonTitle:'Discard'};
      const {value} = await Dialog.confirm(addDiscardTaskOpts);
      if(value){this.submitAddTask()}
      else{this.modalCtrl.dismiss(null,'cancel',this.modalId)}
    }else{this.modalCtrl.dismiss(null,'cancel',this.modalId)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async submitAddTask() { this.logger.info('[Modal|Task-Add|submitTaskAdd] ()...');
    const submitTaskLoader=await this.loadCtrl.create({spinner:'dots',cssClass:'sheriff-loader-class',message:'Adding New Task'});
    await submitTaskLoader.present();
    if(this.addForm.duedate.value!==null){this.addForm.duedate.ts=this.dT.UTSd(this.addForm.duedate.value)};
    let tSOrder:number;let myAss:string;if(this.addForm.assign.value===this.myEmpId){myAss='my';tSOrder=this.myTasksListLen+1}else{myAss='ass';tSOrder=this.assTasksListLen+1};
    const submitTAPiRes:any=await this.deputy.createTask(myAss,this.myEmpId,this.addForm.assign.value.EmpId,this.addForm.title.value,tSOrder,this.addForm.duedate.value,this.addForm.notes.value);
    if(submitTAPiRes.result){submitTaskLoader.dismiss();this.modalCtrl.dismiss(submitTAPiRes.data,'success',this.modalId);this.didSubmit=true}
    else{submitTaskLoader.dismiss();this.didSubmit=false}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async openDP() { this.logger.info('[Modal|Task-Add|openDP] ()...');
    this.dateSelIsOpen=true;
    const isDate=(d:any)=>{if(Object.prototype.toString.call(d)==='[object Date]')return true;return false};
    let addUpdate:string;let openDate:Date;if(this.addForm.duedate.value===null){openDate=new Date();addUpdate='Added'}else{openDate=this.addForm.duedate.value;addUpdate='Updated'};
    this.dT.dpDateOnly(openDate).then(newD=>{this.dateSelIsOpen=false;
      if(isDate(newD)){this.addForm.duedate.value=newD;this.addForm.duedate.txt=this.dT.format(newD,'EEE, d MMM yyyy');this.addForm.duedate.valid=true;
        if(this.dT.isB(newD,new Date())){this.dateOD=true}else{this.dateOD=false};this.logger.info('[Modal|TSheet-Add|DueDatePicker] (Success): Date '+addUpdate+'.')}
        else{this.dateSelIsOpen=false;this.logger.info('[Modal|Task-Add|DueDatePicker] (ERROR): Selection NOT VALID Date Object.')}
    }).catch(newDErr=>{this.dateSelIsOpen=false;let errMsg:string;addUpdate==='Added'?errMsg='No Due Date':errMsg='Using Old Due Date';
      if(newDErr==='cancel'){this.logger.info('[Modal|Task-Add|DueDatePicker] (Cancelled): User Cancelled')}
      else{this.logger.info('[Modal|Task-Add|DueDatePicker] (Error): '+newDErr)};
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  clearDueDate() { this.logger.info('[Modal|Task-Add|clearDueDate] ()...');
    this.addForm.duedate.value=null;this.addForm.duedate.txt=null;this.addForm.duedate.valid=null;
  }
//////////////////////////////////////////////////////////////////////////////////////
  async openAssignSelect() { this.logger.info('[Modal|Task-Add|openAssignSelect] ()...');
    let assSelOpts:any=this.assSelModalOpts;const assModalList:any[]=this.assList;let currentSelEmpId:number=this.addForm.assign.value.EmpId;
    assSelOpts['componentProps']={assList:assModalList};
    const assSelModal=await this.modalCtrl.create(assSelOpts);
    document.addEventListener('ionModalDidPresent',()=>{this.assSelIsOpen=true;this.addForm.title.focus===true;this.logger.info('[Modal|Task-Add|openAssignSelect] (ionModalDidPresent)')});
    assSelModal.onDidDismiss().then(({data,role})=>{this.assSelIsOpen=false;this.logger.info('[Modal|Task-Add|openAssignSelect] (ionModalDidDismiss) >>> (Role): '+role+' ...');
      if(role==='cancel'){this.logger.info('[Modal|Task-Add|openAssignSelect] (CANCELLED) User Cancelled Selection')}
      else{const newAssSel:any=data;
        if(newAssSel.EmpId===currentSelEmpId){this.logger.info('[Modal|Task-Add|openAssignSelect] (UNCHANGED) Same Person Selected - Unchanged Assignee')}
        else{this.addForm.assign.value=newAssSel;this.addForm.assign.valid=true}
      }
    });
    await assSelModal.present();
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
