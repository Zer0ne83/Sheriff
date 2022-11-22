import { NGXLogger } from 'ngx-logger';
import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, NavParams } from '@ionic/angular';
import { DateTimeService } from 'src/app/services/datetime.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { EventsService } from 'src/app/services/events.service';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-alertschedule',templateUrl:'./alertschedule.page.html',styleUrls:[]})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class AlertSchedulePage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////////////////
  modalId:any;
  rawAlertList:any[]=[];
  alertsList:any[]=[];
  noAlerts:boolean=null;
  tMode:boolean=false;
  hasTestable:boolean=false;
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private modalCtrl:ModalController,
    private navParams:NavParams,
    private dT:DateTimeService,
    private noteServ:NotificationsService,
    private evServ:EventsService,
    private plt:Platform
  ) { }
////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.logger.info('[Modal|AlertSchedule|ngOnInit] ()...');
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter(){
    this.plt.ready().then(async()=>{
      let rawListForSort:any[]=[];
      const modalEl=await this.modalCtrl.getTop();
      this.modalId=modalEl.id;
      this.rawAlertList=[];this.alertsList=[];
      this.rawAlertList=this.navParams.get('rawAlertList');
      let testableCount:number=0;
      if(this.rawAlertList.length>0){this.logger.info('[Modal|AlertSchedule] ['+this.rawAlertList.length+'] Alerts Found...');
        for(let i=0;i<this.rawAlertList.length;i++){
          const rawAlertOb:any=this.rawAlertList[i];let niceAlertOb:any=rawAlertOb;
          niceAlertOb['eventatNiceDate']=this.dT.format(rawAlertOb.eventat,'dd/MM/yy');
          niceAlertOb['eventatNiceTime']=this.dT.format(rawAlertOb.eventat,'h:mmaaa');
          niceAlertOb['alertatNiceDate']=this.dT.format(rawAlertOb.alertat,'dd/MM/yy');
          niceAlertOb['alertatNiceTime']=this.dT.format(rawAlertOb.alertat,'h:mmaaa');
          if(rawAlertOb.methods.phone){this.hasTestable=true};
          rawListForSort.push(niceAlertOb);
        };
        //const sortByEvDate=(a:any,b:any)=>{if(a.evD<b.evD){return -1};if(a.evD>b.evD){return 1};return 0};
        this.alertsList=rawListForSort;//.sort(sortByEvDate);
        this.noAlerts=false;
      }else{this.logger.info('[Modal|AlertSchedule] rawAlertList = NIL Length.');this.noAlerts=true};
    })}
////////////////////////////////////////////////////////////////////////////////////////////////////
  deleteAlert(deleteId) { this.logger.info('[Modal|AlertsSchedule|deleteNote] ('+deleteId+')...');
    this.evServ.subscribe('delDone',delRes=>{this.logger.info('[Modal|AlertsSchedule|deleteNote] (EVENT): Result: '+delRes);this.evServ.destroy('delDone');if(delRes){const lessDelObj:any[]=this.alertsList.filter(a=>a.id!==deleteId);this.alertsList=lessDelObj;if(this.alertsList.length===0){this.noAlerts=true}else{this.noAlerts=false}}});
    setTimeout(()=>{this.noteServ.noteCancel(deleteId)},500)
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  testNote(testId:number) { this.logger.info('[Modal|AlertSchedule|testNote] ('+testId+')...');
    let schedOK:boolean=false;let schedTId:number;
    this.evServ.subscribe('testRes',tR=>{
      console.log(tR);
      if(tR.stage==='sched'){
        schedOK=true;
        const tN:any=tR.data;
        schedTId=tN.id;
        this.evServ.showToast('warning','Test Note (#'+tN.id+') in 5s...');
        let tNObj:any={type:tN.extra.type,uctype:tN.extra.uctype,id:tN.id,eventat:tN.extra.evdate,alertat:tN.schedule.at,methods:{phone:true}};
        const niceEvAt:Date=this.dT.pISO(tNObj.eventat);
        tNObj['isTest']=true;
        tNObj['eventatNiceDate']=this.dT.format(niceEvAt,'dd/MM/yy');
        tNObj['eventatNiceTime']=this.dT.format(niceEvAt,'h:mmaaa');
        tNObj['alertatNiceDate']='Test Alert';
        tNObj['alertatNiceTime']='Now + 5s';
        this.alertsList.push(tNObj);
      }else if(tR.stage==='gottest'){
        setTimeout(() => {
          this.evServ.destroy('testRes');
          this.evServ.showToast('success','Test Note (#'+schedTId+') RECEIVED OK');
          const lessDelObj:any[]=this.alertsList.filter(a=>a.id!==schedTId);this.alertsList=lessDelObj;if(this.alertsList.length===0){this.noAlerts=true}else{this.noAlerts=false};
          $('.sheriff-btn.settings-alertschedule-testmode-btn.deactivate').click();
        },500);
      }else{
        this.evServ.destroy('testRes');
        if(schedOK){this.evServ.showToast('error','Failed to Receive Test Alert');this.alertsList.filter(n=>n.id!==schedTId)}
        else{this.evServ.showToast('error','Failed to Schedule Test Alert')};
      }
    });
    this.noteServ.testNote(testId);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  closeModal() {
    this.logger.info('[Modal|AlertSchedule|closeModal] ()...');
    if(this.tMode){this.tMode=false;setTimeout(()=>{this.modalCtrl.dismiss(null,'dismiss','alert-schedule-modal')},500)}else{this.modalCtrl.dismiss(null,'dismiss','alert-schedule-modal')}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  testMode() { this.logger.info('[Modal|AlertSchedule|testMode] ()...');
    !this.tMode?this.tMode=true:this.tMode=false;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}
