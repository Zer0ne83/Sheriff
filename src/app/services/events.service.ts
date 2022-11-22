import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Toast } from '@capacitor/toast';
import { differenceInMilliseconds } from 'date-fns';
///////////////////////////////////////////////////////////////
@Injectable({ providedIn: 'root' })
///////////////////////////////////////////////////////////////
export class EventsService {
///////////////////////////////////////////////////////////////
  cPage:any={url:null,lName:null,cName:null};
  channels:{[key:string]:Subject<any>}={};
///////////////////////////////////////////////////////////////
  subscribe(topic:string,observer:(_:any)=>void):Subscription{if(!this.channels[topic]){this.channels[topic]=new Subject<any>()};return this.channels[topic].subscribe(observer)}
///////////////////////////////////////////////////////////////
  publish(topic:string,data:any):void{const subject=this.channels[topic];if(!subject){return};subject.next(data)}
///////////////////////////////////////////////////////////////
  check(topic:string):Promise<boolean>{const subject=this.channels[topic];if(!subject){return Promise.resolve(false)}else{return Promise.resolve(true)}}
///////////////////////////////////////////////////////////////
  destroy(topic:string):null{const subject=this.channels[topic];if(!subject){return};subject.complete();delete this.channels[topic]}
///////////////////////////////////////////////////////////////
  currentPageName(cPageObj){this.cPage=cPageObj;this.publish('newPage',cPageObj.lName)}
///////////////////////////////////////////////////////////////
  getDur(start:Date){return differenceInMilliseconds(new Date(),start)}
///////////////////////////////////////////////////////////////
  showToast(tIco:string,tText:string){
    const icoObj={general:'\uD83D\uDEE1\uFE0F',success:'\uD83D\uDFE2',error:'\uD83D\uDD34',warning:'\uD83D\uDFE0',check:'\u2714\uFE0F',cross:'\u274C',refresh:'\u267B\uFE0F',smiley:'🙃',locked:'\uD83D\uDD10',fire:'\uD83D\uDD25',email:'\uD83D\uDCEB',msg:'\uD83D\uDCAC'};(async()=>{await Toast.show({text:icoObj[tIco]+' '+tText,duration:'short',position:'bottom'})})();
  }
//////////////////////////////////////////////////////////////
  showPushToast(ico:string|null,title:string|null,body:string,dur:'short'|'long'|null,pos:'top'|'center'|'bottom'|null){
    let spIco:string,spTxt:string,spDur:'short'|'long',spPos:'top'|'center'|'bottom';
    ico!==null?spIco=ico:spIco='🛡️';title!==null?spTxt=spIco+' '+title+': '+body:spTxt=spIco+' '+body;dur!==null?spDur=dur:spDur='long';pos!==null?spPos=pos:spPos='bottom';
    (async()=>{await Toast.show({text:spTxt,duration:spDur,position:spPos})})();
  }
//////////////////////////////////////////////////////////////
  isConOK(color1:string,color2:string):boolean{
    const hexToRgb=(hex)=>{let shRX=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shRX,(m,r,g,b)=>{return r+r+g+g+b+b});let rs=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return rs?{r:parseInt(rs[1],16),g:parseInt(rs[2],16),b:parseInt(rs[3],16)}:null};
    const lum=(r,g,b)=>{let a=[r,g,b].map((v)=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});return a[0]*0.2126+a[1]*0.7152+a[2]*0.0722}
    const calcR=()=>{const c1rgb=hexToRgb(color1);const c2rgb=hexToRgb(color2);const c1lum=lum(c1rgb.r,c1rgb.g,c1rgb.b);const c2lum=lum(c2rgb.r,c2rgb.g,c2rgb.b);const ratio=c1lum>c2lum?((c2lum+0.05)/(c1lum+0.05)):((c1lum+0.05)/(c2lum+0.05));return ratio};
    const ratio = calcR();if(ratio<1/4.5){return true}else{return false}
  }
  ///////////////////////////////////////////////////////////////
  incBright(color:string,percent:number):string{let hex=color.replace(/^\s*#|\s*$/g,'');if(hex.length==3){hex=hex.replace(/(.)/g,'$1$1')};let r=parseInt(hex.substr(0,2),16),g=parseInt(hex.substr(2,2),16),b=parseInt(hex.substr(4,2),16);return '#'+((0|(1<<8)+r+(256-r)*percent/100).toString(16)).substr(1)+((0|(1<<8)+g+(256-g)*percent/100).toString(16)).substr(1)+((0|(1<<8)+b+(256-b)*percent/100).toString(16)).substr(1)}
///////////////////////////////////////////////////////////////
  isValidJSON=(jsonStr:string):boolean=>{try{JSON.parse(jsonStr)}catch(e){return false}return true};
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
}