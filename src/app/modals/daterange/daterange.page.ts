import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonInput, ModalController, NavParams } from '@ionic/angular';
import { NGXLogger } from 'ngx-logger';
import { DateTimeService } from './../../services/datetime.service';
import * as $ from 'jquery';
//////////////////////////////////////////////////////////////////////////////////////
@Component({ selector: 'app-daterange', templateUrl: './daterange.page.html', styleUrls: ['./daterange.page.scss'] })
//////////////////////////////////////////////////////////////////////////////////////
export class DateRangePage implements OnInit {
//////////////////////////////////////////////////////////////////////////////////////
  @ViewChild('drStart') sDateIn:IonInput;
  @ViewChild('drEnd') eDateIn:IonInput;
//////////////////////////////////////////////////////////////////////////////////////
  modalId:any;
  mId:string;
  listName:string;
  sDate:string;
  sDIsToday:boolean = false;
  eDate:string;
  eDIsToday:boolean = false;
  minDate:number;
  maxDate:number;
  exSDate:Date;
  exEDate:Date;
  exMinDate:Date;
  exMaxDate:Date;
  rangeDur:string;
  drIsValid:boolean = true;
  rangeError:string;
  //////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private dT: DateTimeService,
    private modalCtrl: ModalController,
    private navP: NavParams,
  ) { }
//////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit() {
    this.logger.info('[Modal|OnInit] - '+this.navP.data.list);
    this.modalId = (await this.modalCtrl.getTop()).id;
    console.log(this.navP.data);
    const {list,dates,mms}=this.navP.data;
    this.listName=list;
    this.sDate=this.dT.Id(dates.start);this.exSDate=dates.start;
    this.checkValidToday('start',this.exSDate);
    this.eDate=this.dT.Id(dates.end);this.exEDate=dates.end;
    this.checkValidToday('end',this.exEDate);
    let rawDur:string=this.dT.DifDurStr(this.exEDate,this.exSDate);
    if(rawDur.includes('year')){rawDur.replace(' year','y');rawDur.replace(' month','m');rawDur.replace(' day','d')}
    this.rangeDur=rawDur;
    this.minDate=mms.min;this.exMinDate=this.dT.Dut(mms.min);
    this.maxDate=mms.max;this.exMaxDate=this.dT.Dut(mms.max);
  }
//////////////////////////////////////////////////////////////////////////////////////
  checkValidToday(startOrEnd:string,testDate:Date) {
    console.log('Checking ' + startOrEnd + ' ... ' + testDate);
    let todayIndic:string;startOrEnd==='start'?todayIndic='sDIsToday':todayIndic='eDIsToday';
    if(this.dT.isSD(testDate,new Date())){this[todayIndic]=true}else{this[todayIndic]=false};
    let valSDate:Date; let valEDate:Date;if(startOrEnd==='start'){valSDate=testDate;valEDate=this.dT.Di(this.eDate)}else{valEDate=testDate;valSDate=this.dT.Di(this.sDate)};
    if(this.dT.isSD(valSDate,valEDate)){$('.dr-modal-button.done').prop('disabled',false);this.drIsValid=true;this.rangeError=''} else {
      if(startOrEnd==='start'){if(!this.dT.isB(valSDate,valEDate)){$('.dr-modal-button.done').prop('disabled',true);this.drIsValid=false;this.rangeError='Start Date > End Date';} else {$('.dr-modal-button.done').prop('disabled',false);this.drIsValid=true;this.rangeError=''}
      }else{if(!this.dT.isA(valEDate,valSDate)){$('.dr-modal-button.done').prop('disabled',true);this.drIsValid=false;this.rangeError='End Date < Start Date'} else { $('.dr-modal-button.done').prop('disabled',false);this.drIsValid=true;this.rangeError=''}}
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async openDateRange(startOrEnd:string,action:string,gVarInputName:string,gVarDateName:string,gVarDateValue:any) {
    this.logger.info('[Modal|updateRange] ('+startOrEnd+','+action+','+gVarInputName+','+gVarDateName+','+gVarDateValue+')...');
    this.dT.openDRPicker(this.listName,startOrEnd,this.dT.Di(gVarDateValue),(this.minDate*1000),Number(this.dT.UTSd(new Date()))).then(newD=>{
      this[gVarDateName]=this.dT.Id(newD);
      this.checkValidToday(startOrEnd,newD);
      let rawDur:string=this.dT.DifDurStr((this.dT.Di(this.eDate)),(this.dT.Di(this.sDate)));
      if(rawDur.includes('year')){console.log('includes "year" true');rawDur = rawDur.replace(' year','y');rawDur = rawDur.replace(' month','m');rawDur = rawDur.replace(' day','d');this.rangeDur=rawDur} else{this.rangeDur=rawDur}
    },dpErr=>{console.log(dpErr)})
  }
//////////////////////////////////////////////////////////////////////////////////////
  cancelDateRange() {
    this.logger.info('[TabsTSheets|cancelDateRange] ()...');
    this.modalCtrl.dismiss({start:null,end:null},'backdrop',this.modalId);
  }
//////////////////////////////////////////////////////////////////////////////////////
  drModalAction(action) {
    this.logger.info('[Modal|drModalAction] ('+action+')...');
    if (action==='cancel') {
      this.modalCtrl.dismiss({start:null,end:null},null,this.modalId)
    } else if (action==='done') { if (!this.sDate||!this.eDate) { this.modalCtrl.dismiss('nochange')
      } else { const newSDate=this.dT.Di(this.sDate);const newEDate=this.dT.Di(this.eDate);
        if (newSDate===this.exSDate&&newEDate===this.exEDate) { this.modalCtrl.dismiss('nochange')
        } else { this.modalCtrl.dismiss({start:newSDate,end:newEDate},null,this.modalId) }
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
  useTodayDate(input) {
    this.logger.info('[TabsTSheets|useTodayDate] ('+input+')...');
    let checkStr:string;input.charAt(0)==='s'?checkStr='start':checkStr='end';
    this[input]=this.dT.Id(new Date());
    this.checkValidToday(checkStr,new Date());
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
