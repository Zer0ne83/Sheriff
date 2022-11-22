import { DateTimeService } from './datetime.service';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { myPublicHolidays } from '../services/fairworkVars';
import { intervalToDuration, isSameDay, getYear, getMonth, getDate, endOfDay, startOfDay, addMinutes } from 'date-fns';
import * as _ from 'lodash';
////////////////////////////////////////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class FairworkService {
////////////////////////////////////////////////////////////////////////////////////////////////////
  mPR:any = { base: { 0:38.36, 1:27.40, 2:27.40, 3:27.40, 4:27.40, 5:27.40, 6:32.88 }, penalty: { hrs: { night: { start:{h:0,m:0,s:0}, end:{h:5,m:59,s:59} }, eve: { start:{h:22,m:0,s:0}, end:{h:23,m:59,s:59} } }, 0: {night:0,eve:0}, 1: {night:3.40,eve:2.27}, 2: {night:3.40,eve:2.27}, 3: {night:3.40,eve:2.27}, 4: {night:3.40,eve:2.27}, 5: {night:3.40,eve:2.27}, 6: {n:0,e:0} }, ph: 54.80 };
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private dT: DateTimeService
  ) {}
////////////////////////////////////////////////////////////////////////////////////////////////////
  r2d(no:number):number{const rN:number=Math.round((no+Number.EPSILON)*100)/100;const rS:string=rN.toFixed(2);const nN:number=+rS; return nN}
////////////////////////////////////////////////////////////////////////////////////////////////////
  getShiftPay(shiftObj:any):Promise<any> {
    const sO:any=shiftObj;let shiftCalcArr:any[]=[];
    //let hasPH:boolean;this.inclPublicHoliday(sO).s.res||this.inclPublicHoliday(sO).e.res?hasPH=true:hasPH=false;if(hasPH){console.log('Includes Public Holiday - Skipping.');return};
    const sTDate:Date=this.dT.Dut(sO.StartTime);const eTDate:Date=this.dT.Dut(sO.EndTime);const sTDay:number=this.dT.gD(sTDate);const eTDay:number=this.dT.gD(eTDate);
    const getNoSplitDur=():any=>{let gNSDRes:any=[{day:<number>sTDay,start:<Date>sTDate,end:<Date>eTDate,dur:<Duration>{}}];gNSDRes[0].dur=intervalToDuration({start:sTDate,end:eTDate});return gNSDRes};
    const getSplitDur=():any=>{let gSDRes:any=[{day:<number>sTDay,start:<Date>null,end:<Date>null,dur:<Duration>{}},{day:<number>eTDay,start:<Date>null,end:<Date>null,dur:<Duration>{}}];gSDRes[0].start=sTDate;gSDRes[0].end=endOfDay(sTDate);gSDRes[0].dur=intervalToDuration({start:sTDate,end:(endOfDay(sTDate))});gSDRes[1].start=startOfDay(eTDate);gSDRes[1].end=eTDate;gSDRes[1].dur=intervalToDuration({start:(startOfDay(eTDate)),end:eTDate});return gSDRes};
    let isSplit:boolean;if(isSameDay(sTDate,eTDate)){isSplit=false}else{isSplit=true};
    isSplit?shiftCalcArr=getSplitDur():shiftCalcArr=getNoSplitDur();
    ///////////////////////////////////////////////////////////////
    let basePay:number=0;let penaltyPay:number=0;let payTotal:number=0;
    for(let sSec=0;sSec<shiftCalcArr.length;sSec++){
      const tSSec:any=shiftCalcArr[sSec];
      // Base Pay
      const secBRate:number=this.mPR.base[tSSec.day];
      const secBRateHrs:number=tSSec.dur.hours+(this.r2d(tSSec.dur.minutes/60));
      const secBPay:number=this.r2d((secBRateHrs*secBRate));
      basePay+=secBPay;
      // Penalty Pay
      if(tSSec.day>=1&&tSSec.day<=5){
        const ePSA:any[]=[(getYear(tSSec.start)),(getMonth(tSSec.start)),(getDate(tSSec.start)),this.mPR.penalty.hrs.eve.start.h,this.mPR.penalty.hrs.eve.start.m,this.mPR.penalty.hrs.eve.start.s];
        const ePSD:Date=new Date(ePSA[0],ePSA[1],ePSA[2],ePSA[3],ePSA[4],ePSA[5]);const ePSU:number=this.dT.getUT(ePSD);
        const ePEA:any[]=[(getYear(tSSec.start)),(getMonth(tSSec.start)),(getDate(tSSec.start)),this.mPR.penalty.hrs.eve.end.h,this.mPR.penalty.hrs.eve.end.m,this.mPR.penalty.hrs.eve.end.s];
        const ePED:Date=new Date(ePEA[0],ePEA[1],ePEA[2],ePEA[3],ePEA[4],ePEA[5]);const ePEU:number=this.dT.getUT(ePED);
        const isEveP=(tT:number):boolean=>{if(tT>=ePSU&&tT<=ePEU){return true}else{return false}};
        const nPSA:any[]=[(getYear(tSSec.start)),(getMonth(tSSec.start)),(getDate(tSSec.start)),this.mPR.penalty.hrs.night.start.h,this.mPR.penalty.hrs.night.start.m,this.mPR.penalty.hrs.night.start.s];
        const nPSD:Date=new Date(nPSA[0],nPSA[1],nPSA[2],nPSA[3],nPSA[4],nPSA[5]);const nPSU:number=this.dT.getUT(nPSD);
        const nPEA:any[]=[(getYear(tSSec.start)),(getMonth(tSSec.start)),(getDate(tSSec.start)),this.mPR.penalty.hrs.night.end.h,this.mPR.penalty.hrs.night.end.m,this.mPR.penalty.hrs.night.end.s];
        const nPED:Date=new Date(nPEA[0],nPEA[1],nPEA[2],nPEA[3],nPEA[4],nPEA[5]);const nPEU:number=this.dT.getUT(nPED);
        const isNightP=(tT:number):boolean=>{if(tT>=nPSU&&tT<=nPEU){return true}else{return false}};
        const tSecStartUT:number=this.dT.getUT(tSSec.start);const tSecEndUT:number=this.dT.getUT(tSSec.end);
        const isShiftSec=(tT:number):boolean=>{if(tT>=tSecStartUT&&tT<=tSecEndUT){return true}else{return false}};
        // Evening Penalty
        if(isShiftSec(ePSU)||isShiftSec(ePEU)){
          const secPEveRate:number=this.mPR.penalty[tSSec.day].eve;
          let secPEveDur:Duration={hours:0,minutes:0};let secAllEveMinsCount=0;
          const secAllEveMins:number=tSSec.dur.minutes+(tSSec.dur.hours*60);
          for(let secMs=0;secMs<secAllEveMins;secMs++){const etTUnixMin:number=this.dT.getUT((addMinutes(tSSec.start,secMs)));if(isEveP(etTUnixMin)){secPEveDur.minutes++}};
          if(secAllEveMinsCount>0){secPEveDur.hours=Math.floor(secAllEveMins/60);secPEveDur.minutes=secAllEveMins-(secPEveDur.hours*60)};
          const secPEveRateHrs:number=secPEveDur.hours+(this.r2d(secPEveDur.minutes/60));
          const secPEvePay:number=this.r2d((secPEveRateHrs*secPEveRate));
          penaltyPay+=secPEvePay;
        }
        // Night Penalty
        if(isShiftSec(nPSU)||isShiftSec(nPEU)){
          const secPNightRate:number=this.mPR.penalty[tSSec.day].night;
          let secPNightDur:Duration={hours:0,minutes:0};let secAllNightMinsCount=0;
          const secAllNightMins:number=tSSec.dur.minutes+(tSSec.dur.hours*60);
          for(let secMs=0;secMs<secAllNightMins;secMs++){const ntTUnixMin:number=this.dT.getUT((addMinutes(tSSec.start,secMs)));if(isNightP(ntTUnixMin)){secPNightDur.minutes++}};
          if(secAllNightMinsCount>0){secPNightDur.hours=Math.floor(secAllNightMins/60);secPNightDur.minutes=secAllNightMins-(secPNightDur.hours*60)};
          const secPNightRateHrs:number=secPNightDur.hours+(this.r2d(secPNightDur.minutes/60));
          const secPNightPay:number=this.r2d((secPNightRateHrs*secPNightRate));
          penaltyPay+=secPNightPay;
        }
      }
    }
    ///////////////////////////////////////////////////////////////
    this.r2d(basePay);
    this.r2d(penaltyPay);
    payTotal=basePay+penaltyPay;
    this.r2d(payTotal);
    return Promise.resolve({b:basePay,p:penaltyPay,t:payTotal});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  inclPublicHoliday(sO:any):any {
    const sDate:Date=this.dT.Dut(sO.StartTime);const eDate:Date=this.dT.Dut(sO.EndTime);
    const sSY:number=this.dT.gY(sDate);const sEY:number=this.dT.gY(eDate);
    let pHolsYrs:any[]=[];let pHolsDates:any[]=[];
    sSY===sEY?pHolsYrs=[sSY]:pHolsYrs=[sSY,sEY];
    for(let y=0;y<pHolsYrs.length;y++){
      const tYHols:any[]=myPublicHolidays[pHolsYrs[y]];
      for(let h=0;h<tYHols.length;h++){
        const tHolDate:Date=this.dT.parseStr(tYHols[h],'dd/MM/yyyy');
        pHolsDates.push(tHolDate)
      }
    };
    let sOnPH:any={res:false,ph:null};let eOnPH:any={res:false,ph:null};
    const sMatch:any[]=pHolsDates.filter(pH=>this.dT.isSD(sDate,pH));
    if(sMatch.length>0){sOnPH.res=true;sOnPH.ph=sMatch[0]};
    const eMatch:any[]=pHolsDates.filter(pH=>this.dT.isSD(eDate,pH));
    if(eMatch.length>0){eOnPH.res=true;eOnPH.ph=eMatch[0]};
    return {s:sOnPH,e:eOnPH}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}
