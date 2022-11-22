import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NGXLogger } from 'ngx-logger';
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-recipients',templateUrl:'./recipients.page.html',styleUrls:['./recipients.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class RecipientsPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  recModalId:any;
  modalRecList:any[]=[];
  modalORecList:any[]=[];
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private modalCtrl: ModalController,
    private navP: NavParams,
    ) { }
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.logger.info('[Modal|Recipients|OnInit] ()...');
    this.initRecipientsData();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initRecipientsData() {
    this.logger.info('[Modal|Memo-Recipients|initRecipientsData] ()...');
    const modalEl=await this.modalCtrl.getTop();
    this.recModalId=modalEl.id;
    const oList:any[]=this.navP.get('mORL');
    const rList:any[]=oList;
    this.modalORecList=oList;
    this.modalRecList=rList;
  }
//////////////////////////////////////////////////////////////////////////////////////
  bulkSelectRec(allNone:string) { this.logger.info('[Modal-Memo-Recipients|bulkSelect] ('+allNone+')...');
    if(allNone==='all'){this.modalCtrl.dismiss(null,'all',this.recModalId)}else{this.modalCtrl.dismiss(null,'none',this.recModalId)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  recChange(rpIndex:number) { this.logger.info('[Modal|Memo-Recipients|recChange] ('+rpIndex+')...');
    let selStr:string;
    const oState:boolean=this.modalRecList[rpIndex].isChecked;
    oState?this.modalRecList[rpIndex].isChecked=false:this.modalRecList[rpIndex].isChecked=true;
    const nState:boolean=this.modalRecList[rpIndex].isChecked;
    nState?selStr='Selected':selStr='Not Selected';
    this.logger.info('(Change): '+this.modalRecList[rpIndex].name+' [CHANGED TO] '+selStr);
    this.logger.info(this.modalRecList);
    
  }
//////////////////////////////////////////////////////////////////////////////////////
  async updateCancelList(closeRole:string) { this.logger.info('[Modal|Memo-Recipients|updateCancelList] ('+closeRole+')...');
    if(closeRole==='update'){
      this.modalCtrl.dismiss(this.modalRecList,'update',this.recModalId)
    }else{
      this.modalCtrl.dismiss(this.modalORecList,'cancel',this.recModalId)
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
