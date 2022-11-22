import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { DatePicker, DatePickerOptions } from '@ionic-native/date-picker/ngx';
import { format, fromUnixTime, parseISO, parse, subDays, isBefore, isAfter, isSameSecond, formatISO, differenceInDays, getTime, intervalToDuration, formatDuration, isSameDay, isSameWeek, isSameMonth, endOfWeek, endOfMonth, getDate, startOfWeek, getMonth, addHours, addSeconds, startOfHour, isWithinInterval, getUnixTime, addWeeks, addDays, isValid, subYears, isThisWeek, endOfHour, hoursToMinutes, getDay, getYear, subWeeks, startOfMonth, getHours, getMinutes, toDate, formatDistanceToNow, subMinutes, addMinutes, parseJSON, max, formatRFC3339 } from 'date-fns';

////////////////////////////////////////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class DateTimeService {
////////////////////////////////////////////////////////////////////////////////////////////////////
  dPOpts:DatePickerOptions = {
    mode:<string> '', //date|time|datetime
    date:<Date|string|number> '', //new Date()
    minDate:<Date|string|number> '', //''
    maxDate:<Date|string|number> '', //''
    titleText:<string> '', //''
    is24Hour:<boolean> false,
    androidTheme:<number> 4, //1:THEME_TRADITIONAL|2:THEME_HOLO_DARK|3:THEME_HOLO_LIGHT|4:THEME_DEVICE_DEFAULT_DARK|5:THEME_DEVICE_DEFAULT_LIGHT
    allowOldDates:<boolean> true,
    allowFutureDates:<boolean> true,
    todayText:'Today'
  };
  tPOpts:DatePickerOptions = {
    mode:<string> 'time', //date|time|datetime
    date:<Date|string|number> '', //new Date()
    titleText:<string> 'Select Time', //''
    is24Hour:<boolean> false,
    androidTheme:<number> 4, //1:THEME_TRADITIONAL|2:THEME_HOLO_DARK|3:THEME_HOLO_LIGHT|4:THEME_DEVICE_DEFAULT_DARK|5:THEME_DEVICE_DEFAULT_LIGHT
    nowText:'Now'
  };
  monthNo:any[]=['January','February','March','April','May','June','July','August','September','October','November','December'];
  weekDayNo:any[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private datePicker: DatePicker
  ) {}
////////////////////////////////////////////////////////////////////////////////////////////////////
  checkServ():Promise<boolean> { this.logger.info('[DTServ|checkServ] (TRUE) Date: '+new Date().getDate()); return Promise.resolve(true) }
////////////////////////////////////////////////////////////////////////////////////////////////////
  rCalWVDH(d:Date):string{return format(d,'EEE')+' '+format(d,'d')}
  rCalWVT(d:Date):string{const soW:Date=this.sOW(d);const eoW:Date=this.eOW(d);const soWD:string=format(soW,'d');const eoWD:string=format(eoW,'d');return soWD+' - '+eoWD+' '+format(d,'MMMM')}
  rCalWVHC(d:Date):string{return format(d,'haaa')}
  rCalDVT(d:Date):string{return format(d,'EEE, d MMM yyyy')}
  addS(d:Date,secs:number):Date{return addSeconds(d,secs)}
  no2WD(weekdayNo:number):string{return this.weekDayNo[weekdayNo]}
  parseStr(Dstr:string,strF:string):Date{return parse(Dstr,strF,new Date())}
  format(Date:Date,form:string):string { return format(Date,form) }
  gDate(d:Date):number{return getDate(d)}
  tD(ut:number):Date{return toDate(ut)}
  fDtN(d:Date):string{return formatDistanceToNow(d,{addSuffix:true})}
  gD(d:Date):number{return getDay(d)}
  gY(d:Date):number{return getYear(d)}
  gH(d:Date):number{return getHours(d)}
  gm(d:Date):number{return getMinutes(d)}
  Dln(longNiceDate:string):Date { return parse(longNiceDate,'EEEE, d MMMM yyyy', new Date()) }
  LNd(Date:Date):string { return format(Date,'EEEE, d MMMM yyyy') }
  LNdS(Date:Date):string { return format(Date,'EEEE, d MMMM') }
  Dn(niceDate:string):Date { return parse(niceDate,'d MMM yyyy',new Date()) }
  Nd(Date:Date):string { return format(Date,'d MMM yyyy') }
  Id(Date:Date):string { return formatISO(Date) }
  Di(ISO:string):Date { return parseISO(ISO) }
  pISO(ISO:string):Date {return parseISO(ISO) }
  pJSON(JSON:any):Date {return parseJSON(JSON) }
  UTSd(Date:Date):string { return format(Date,'T') }
  UTd(Date:Date):number { return getTime(Date) }
  NTut(UTS:number):string { return format(fromUnixTime(UTS),'h:mmaaa') }
  TFHut(UTS:number):string { return format(fromUnixTime(UTS),'HH:mm') }
  Dut(unixTime:number):Date { return fromUnixTime(unixTime) }
  DiffInDays(laterDate:Date,earlierDate:Date) { return differenceInDays(laterDate,earlierDate) }
  DifDurStr(startDate:Date,endDate:Date):string { let dur:Duration=intervalToDuration({start:startDate,end:endDate});return formatDuration(dur,{delimiter:', '}) }
  DurAsObj(startDate:Date,endDate:Date):Duration {
    let rawDurObj:any=intervalToDuration({start:startDate,end:endDate});
    const dPs:any[]=['seconds','minutes','hours','days','weeks','months','years'];
    for(let i=0;i<dPs.length;i++){if(!rawDurObj.hasOwnProperty(dPs[i])){rawDurObj[dPs[i]]=0}};
    return rawDurObj;
  }
  syncStr(d:Date):string{return formatRFC3339(d,{fractionDigits:3})}
  dISO(d:Date):string{return formatISO(d)}
  dMax(dArr:any[]):Date{return max(dArr)}
  isSD(date1:Date,date2:Date):boolean { return isSameDay(date1,date2) }
  isA(testDate:Date,afterDate:Date):boolean { return isAfter(testDate,afterDate) }
  isB(testDate:Date,beforeDate:Date):boolean { return isBefore(testDate,beforeDate) }
  isSW(date1:Date,date2:Date):boolean { return isSameWeek(date1,date2,{weekStartsOn:1}) }
  isSM(date1:Date,date2:Date):boolean { return isSameMonth(date1,date2) }
  sOW(Date:Date):Date { return startOfWeek(Date,{weekStartsOn:1}) }
  eOW(Date:Date):Date { return endOfWeek(Date,{weekStartsOn:1}) }
  isTW(d:Date):boolean { return isThisWeek(d,{weekStartsOn:1}) }
  gM(Date:Date):string { return this.monthNo[getMonth(Date)] }
  addHrs(date:Date,hrs:number):Date { return addHours(date,hrs) }
  subDays(date:Date,days:number):Date { return subDays(date,days) }
  addDays(date:Date,days:number):Date { return addDays(date,days) }
  isThisFN(date:Date):boolean { const ftDAgo:Date=this.subDays(new Date(),14);if(this.isA(date,ftDAgo)&&this.isB(date,new Date())){return true}else{return false} }
  endOfHr(date:Date):Date { return endOfHour(date) }
  startOfHr(date:Date):Date { return startOfHour(date) }
  parse(dateStr:string,datePtn:string):Date { return parse(dateStr,datePtn,new Date()) }
  round5(d:Date):Date { let ms=1000*60*5;let rD=new Date(Math.round(new Date(d).getTime()/ms)*ms);return rD }
  round5_24h(date:Date):string { const roundD:Date=this.round5(date);return format(roundD,'HH:mm') }
  isBW(d:Date,range:any):boolean{ return isWithinInterval(d,range) }
  gUT():number{return getUnixTime(new Date()) }
  getUT(d:Date):number{return getUnixTime(d) }
  addWs(d:Date,w:number):Date{return addWeeks(d,w) }
  isV(d:Date):boolean{return isValid(d) }
  subYs(d:Date,years:number):Date{return subYears(d,years) }
  subWs(d:Date,weeks:number):Date{return subWeeks(d,weeks) }
  subMs(d:Date,mins:number):Date{return subMinutes(d,mins) }
  addMs(d:Date,mins:number):Date{return addMinutes(d,mins) }
  sOfM(d:Date):Date{return startOfMonth(d) }
  eOfM(d:Date):Date{return endOfMonth(d) }
  sOfW(mode:string):any{const sD:Date=startOfWeek(new Date(),{weekStartsOn:1});if(mode==='date'){return sD}else{return this.getUT(sD)} }
  eOfW(mode:string):any{const eD:Date=endOfWeek(new Date(),{weekStartsOn:1});if(mode==='date'){return eD}else{return this.getUT(eD)} }
  authExpAt(authObj:any):any{
    let newAuthObj:any=authObj;
    const nowUTS:number=this.getUT(new Date());
    const addExpSecs:number=Number(authObj.expires_in);
    const expAtSecs:number=nowUTS+addExpSecs;
    newAuthObj['expires_at']=String(expAtSecs);
    newAuthObj['expires_in']=String(authObj.expires_in);
    return newAuthObj
  }
  uTokExpd=(authObj:any):boolean=>{if((this.gUT())-600>Number(authObj.expires_at)){return true}else{return false}};
  shiftTTToDur(shiftTT:number):Duration {
    let sTT:Duration={hours:0,minutes:0}
    sTT.hours=Math.floor(shiftTT);
    sTT.minutes=Math.round(hoursToMinutes((shiftTT-sTT.hours)));
    return sTT;
  }
  rosVsTSTTDiff(rosterTT:number,tsheetTT:number):Duration {
    let ttDiff:Duration={hours:0,minutes:0};let isNeg:boolean=false;const ttDiffRawHrs:number=tsheetTT-rosterTT;const ttDiffSign:number=Math.sign(ttDiffRawHrs);let ttDiffRawAbsHrs:number;
    if(ttDiffSign===0){return ttDiff}
    else if(ttDiffSign===-1){ttDiffRawAbsHrs=Math.abs(ttDiffRawHrs);isNeg=true}
    else if(ttDiffSign===1){ttDiffRawAbsHrs=ttDiffRawHrs;isNeg=false};
    const ttDiffWholeHrs:number=Math.floor(ttDiffRawAbsHrs);
    if(ttDiffWholeHrs===0){ttDiff.hours=0}else{if(isNeg){ttDiff.hours=-ttDiffWholeHrs}else{ttDiff.hours=ttDiffWholeHrs}};
    const ttDiffPartHrs2Fixed:string=(ttDiffRawAbsHrs-ttDiffWholeHrs).toFixed(2);
    const ttDiffPartHrs:number=Number(ttDiffPartHrs2Fixed);
    if(ttDiffPartHrs===0){ttDiff.minutes=0}
    else{const ttDiffPHInMins:number=hoursToMinutes(ttDiffPartHrs);const ttDiffPHInMinsRounded:number=Math.round(ttDiffPHInMins);if(isNeg){ttDiff.minutes=-ttDiffPHInMinsRounded}else{ttDiff.minutes=ttDiffPHInMinsRounded}};
    return ttDiff;
  }
  getShiftWeek():Promise<any[]> {
    const nowD:Date=new Date();
    const getTN=(d:Date):string=>{
      let res:string;
      if(this.isSD(d,nowD)){res='T'}
      else if(this.isB(d,nowD)){res='B'}
      else{res='A'};
      return res
    };
    const tMon:Date=startOfWeek(nowD,{weekStartsOn:1});
    const rW:any[]=[{sn:'mo',ln:'monday',d:null,day:null,isshift:false,tonow:''},{sn:'tu',ln:'tuesday',d:null,day:null,isshift:false,tonow:''},{sn:'we',ln:'wednesday',d:null,day:null,isshift:false,tonow:''},{sn:'th',ln:'thursday',d:null,day:null,isshift:false,tonow:''},{sn:'fr',ln:'friday',d:null,day:null,isshift:false,tonow:''},{sn:'sa',ln:'saturday',d:null,day:null,isshift:false,tonow:''},{sn:'su',ln:'sunday',d:null,day:null,isshift:false,tonow:''}];
    for(let i=0;i<rW.length;i++){
      const pI:number=i;
      if(i===0){
        rW[i]['d']=tMon;
        rW[i]['day']=format(tMon,'d');
        rW[i]['tonow']=getTN(tMon);
      }else{
        const tDay:Date=this.addDays(tMon,pI);
        rW[i]['d']=tDay;
        rW[i]['day']=format(tDay,'d');
        rW[i]['tonow']=getTN(tDay)
      }
    };
    return Promise.resolve(rW);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  rosterSETimes(StartUTS:number,EndUTS:number):any {
    let sD:Date=fromUnixTime(StartUTS);let eD:Date=fromUnixTime(EndUTS);
    let finalS:string;let finalSPat:string='h:mm';let finalE:string;let finalEPat:string='h:mmaaa';
    if(format(sD,'aaa')!==format(eD,'aaa')){finalSPat+='aaa'};
    finalS=format(sD,finalSPat);finalE=format(eD,finalEPat);
    return {s:finalS,e:finalE};
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  rosterSEDoneTimes(StartUTS:number,EndUTS:number):any {
    const sD:Date=fromUnixTime(StartUTS);const eD:Date=fromUnixTime(EndUTS);
    const sT:string=format(sD,'h:mm');const eT:string=format(eD,'h:mm');
    return {s:sT,e:eT};
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async openDRPicker(oPList:string,oPFromTo:string,oPDate:Date,oPMin:number,oPMax:number) {
    this.logger.info('[DTServ|openPicker] ('+oPList+','+oPFromTo+','+oPDate+','+oPMin+','+oPMax+')...');
    const stdLists = ['rosters','tsheets','tasks','news'];
    let defOpts=this.dPOpts;defOpts.mode='date';defOpts.date=oPDate;defOpts.minDate=oPMin;defOpts.maxDate=oPMax;
    if(stdLists.includes(oPList)){defOpts.mode='date';defOpts.titleText='\uD83D\uDCC5 𝖲𝖾𝗅𝖾𝖼𝗍 '+(oPFromTo==='start'?'𝗦𝗧𝗔𝗥𝗧':'𝗘𝗡𝗗')+' 𝖣𝖺𝗍𝖾:';defOpts.allowFutureDates=false}
    return await this.datePicker.show(defOpts);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async openTimePicker(newBOpenTime:Date,startOrEnd:string) {
    this.logger.info('[DTServ|openTimePicker] ()...');
    return await this.datePicker.show({mode:'datetime',date:newBOpenTime,titleText:(startOrEnd==='start'?'𝗦𝗧𝗔𝗥𝗧':'𝗘𝗡𝗗')+' 𝖳𝗂𝗆𝖾:',nowText:'Now',is24Hour:false,androidTheme:4});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async dpDateOnly(openDate:Date) {
    this.logger.info('[DTServ|dpDateOnly] ()...');
    return await this.datePicker.show({mode:'date',date:openDate,androidTheme:4});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async pickerProfileDOB(openAt:Date|null):Promise<Date> {
    let openD:Date;openAt!==null?openD=openAt:openD=new Date();
    const pPDOBRes:Date=await this.datePicker.show({mode:'date',date:openD,androidTheme:4});
    return Promise.resolve(pPDOBRes)
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}
