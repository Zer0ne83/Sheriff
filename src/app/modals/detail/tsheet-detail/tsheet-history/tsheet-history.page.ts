import { SQLiteService } from './../../../../services/sqlite.service';
import { DateTimeService } from './../../../../services/datetime.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { DetailService } from 'src/app/services/detail.service';
import { NGXLogger } from 'ngx-logger';
//////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-tsheet-history',templateUrl:'./tsheet-history.page.html',styleUrls:['./tsheet-history.page.scss']})
//////////////////////////////////////////////////////////////////////////////////////
export class TSheetHistoryPage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  modalId:string;
  ts:any;
  allTSHistory:any[]=[];
  meObj:any;
  meAvatar:string;
  noHistory:boolean = false;
  myEmpId:number;
  myDisplayName:string;
  rosPubDate:string = null;
  pplArr:any[]=[];
  // System
  sLastUpdate:string;
  sETimeRaw:string;
  sETimeRound:string;
  sSTimeRaw:string;
  sSTimeRound:string;
  sTTRaw:any = {hours:0,minutes:0};
  sTTRound:any = {hours:0,minutes:0};
  // User
  uLastUpdate:string;
  uETimeRaw:string;
  uETimeRound:string;
  uSTimeRaw:string;
  uSTimeRound:string;
  uTTRaw:any = {hours:0,minutes:0};
  uTTRound:any = {hours:0,minutes:0};
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private modalCtrl: ModalController,
    private navP: NavParams,
    private plt: Platform,
    private dT: DateTimeService,
    private sql: SQLiteService,
    private detailServ:DetailService
  ) { }
//////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.logger.info('[Modal|TSheet-History|OnInit]');
    this.initPrefs();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initPrefs() {
    this.meObj=this.detailServ.meObj;this.myEmpId=this.detailServ.meEmpId;this.myDisplayName=this.detailServ.meName;this.pplArr=this.detailServ.pplArr;
    this.initTSHistoryData();
  }
//////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() {
    this.logger.info('[Modal|TSheet-History|ionViewDidEnter]');
    this.plt.ready().then(async()=>{
      const modalEl = await this.modalCtrl.getTop();
      this.modalId=modalEl.id;const searchIds:any[]=[];const histIdsArr:any[]=['EmployeeAgreement','File','Id','PaycycleId','Roster'];
      for(let i=0;i<histIdsArr.length;i++){if(this.ts[histIdsArr[i]]&&typeof this.ts[histIdsArr[i]]==='number'){searchIds.push(this.ts[histIdsArr[i]])}};
      this.allTSHistory=await this.sql.getTSHistory(searchIds);
      if(this.allTSHistory.length>0){for(let i=0;i<this.allTSHistory.length;i++){const tH:any=this.allTSHistory[i];if(tH.UsageType===11&&tH.EmpId===this.ts.Employee&&this.ts.Date===tH.Date){const rosPubD:Date=new Date(tH.Created);this.rosPubDate=this.dT.format(rosPubD,'EEEE, d MMMM yyyy')}}}
    })
  }
//////////////////////////////////////////////////////////////////////////////////////
  async initTSHistoryData() {
    this.logger.info('[Modal|TSheet-History|initTSHistoryData]');
    this.ts=this.navP.data.ts;this.meAvatar=this.navP.data.avatar;this.uLastUpdate=this.dT.format(new Date(this.ts.Modified),'HH:mm');
    this.uSTimeRaw=this.dT.TFHut(this.ts.StartTime);this.uSTimeRound=this.dT.round5_24h(this.dT.Dut(this.ts.StartTime));
    this.uETimeRaw=this.dT.TFHut(this.ts.EndTime);this.uETimeRound=this.dT.round5_24h(this.dT.Dut(this.ts.EndTime));
    this.uTTRaw=this.dT.DurAsObj(this.dT.Dut(this.ts.StartTime),this.dT.Dut(this.ts.EndTime));
    let uTTRoundObj={};const tsTTHrsStr:string=this.ts.TotalTime.toString();const splitTArr:any[]=tsTTHrsStr.split('.');
    parseInt(splitTArr[0])>0?uTTRoundObj['hours']=parseInt(splitTArr[0]):uTTRoundObj['hours']=0;
    if(parseInt(splitTArr[1])>0){const raw2DMin:string=splitTArr[1].substring(0,2);const mins2D:number=Math.round((parseInt(raw2DMin)/100)*60);uTTRoundObj['minutes']=mins2D;this.uTTRound=uTTRoundObj}
    else{uTTRoundObj['minutes']=0;this.uTTRound=uTTRoundObj}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeHistory() {
    this.logger.info('[Modal|TSheet-History|closeHistory] ()...');
    this.modalCtrl.dismiss({data:null,role:'unchanged',id:this.modalId})
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
