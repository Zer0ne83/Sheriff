import { EventsService } from './events.service';
import { Injectable } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { profileScrapeCode, iabKeys, pSels, pTypes } from './profileData';
import { Platform } from '@ionic/angular';
import { NGXLogger } from 'ngx-logger';
declare var cordova: any;
////////////////////////////////////////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class IABService {
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private iab:InAppBrowser,
    private platform:Platform,
    private logger:NGXLogger,
    private eventServ:EventsService
  ){this.platform.ready().then(()=>{window.open=cordova.InAppBrowser.open})}
////////////////////////////////////////////////////////////////////////////////////////////////////
  getProfile(u:string,p:string) { this.logger.info('[IABServ|getProfile] ('+u+','+p+')...');
    let pDetails:string=null;let pResult:boolean=null;let pData:any;let didFail:boolean;
    const page1Code:string=`(()=>{const insertCreds=setInterval(()=>{const loginInput=document.getElementById("login-email");const passInput=document.getElementById("login-password");const loginButton=document.getElementById("btnLoginSubmit");if(loginInput&&passInput&&loginButton){clearInterval(insertCreds);loginInput.value="`+u+`";passInput.value="`+p+`";setTimeout(()=>{loginButton.click()},500)}},500)})();`;
    const profBOpts:InAppBrowserOptions={clearcache:'yes',clearsessioncache:'yes',location:'no',hidden:'yes',hardwareback:'no',hidenavigationbuttons:'yes',hideurlbar:'yes',fullscreen:'yes',shouldPauseOnSuspend:'no'};
    const profBURL:string='https://once.deputy.com/my/#profile';
    const profB=this.iab.create(profBURL,'_blank',profBOpts);
    const pM=(data:InAppBrowserEvent)=>{this.logger.info('[Deputy|getProfile|IAB] ('+data.type+'): '+data.url)};
    //-------------------------------------------------------------------------------------------------
    this.eventServ.subscribe('fetchPDone',tf=>{
      if(tf){this.eventServ.publish('getProfileRes',{result:pResult,data:pData})}
      else{didFail=true;profB.close();this.eventServ.publish('getProfileRes',{result:false})};
      this.eventServ.destroy('fetchPDone');
    });
    profB.on('loadstop').subscribe(async lSD=>{pDetails=lSD.url;pM(lSD);
      this.eventServ.publish('getProfileRes',{result:'prog',data:20})
      if(lSD.url.includes('login?redirect_url')){profB.executeScript({code:page1Code})};
      if(lSD.url.includes('#profile')){profB.executeScript({code:profileScrapeCode})};
      if(lSD.url.includes('sheriff=')){profB.close()}
    });
    profB.on('loaderror').subscribe(m=>{this.logger.info('[iabServ|getProfile] (LOAD ERROR): '+m.message)});
    profB.on('exit').subscribe(()=>{
      if(!didFail){
        const pDRaw:string=pDetails.replace('https://once.deputy.com/my/','');
        const pDArr:any[]=decodeURIComponent((pDRaw+'').replace(/\+/g,'%20')).replace('sheriff=','').split('|');
        const pNArr:any[]=[];for(let i=0;i<pDArr.length;i++){pNArr.push(pDArr[i].toString().trim())};
        pResult=true;pData=pNArr;
        this.eventServ.publish('fetchPDone',true);
      }
    });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  saveProfile(upObj:any,newFieldsArr:any[]) { this.logger.info('[IABServ|saveProfile] (upObj,newFieldsArr)...');
    let hasGSec:boolean=false;const gSecArr:any[]=['dname','fname','lname','dob','email','phone','gender','pronoun','custompn','pin'];
    let hasASec:boolean=false;const aSecArr:any[]=['street','city','country','state','pcode'];
    let hasESec:boolean=false;const eSecArr:any[]=['ename','ephone'];
    let ifGEle:string='';let setGVal:string='';let checkGVal:string='';const submitGSec:string=`$('button[data-dp-analytics="waProfileSave"]').click();`;
    let ifAEle:string='';let setAVal:string='';let checkAVal:string='';const submitASec:string=`$('button[data-dp-analytics="waProfileSaveAddress"]').click();`;
    let ifEEle:string='';let setEVal:string='';let checkEVal:string='';const submitESec:string=`$('button[data-dp-analytics="waProfileSaveEmergency"]').click();`;
    const alertGSec:string='$("#edit-basic > div.form.js-msg-placeholder > div.alert.alert--floating.alert-success").length';
    const alertASec:string='$("#pnlEditProfileMainAddress > div > div.alert").length';
    const alertESec:string='$("#pnlEditProfileEmergencyAddress > div > div.alert").length';
    let gFields:any[]=[];let aFields:any[]=[];let eFields:any[]=[];
    for(let i=0;i<newFieldsArr.length;i++){
      if(gSecArr.includes(newFieldsArr[i]['n'])){hasGSec=true;gFields.push(newFieldsArr[i])}
      else if(aSecArr.includes(newFieldsArr[i]['n'])){hasASec=true;aFields.push(newFieldsArr[i])}
      else if(eSecArr.includes(newFieldsArr[i]['n'])){hasESec=true;eFields.push(newFieldsArr[i])}
    };
    if(hasGSec){
      for(let i=0;i<gFields.length;i++){
        const eN:string=gFields[i]['n'];const eV:any=gFields[i]['v'].toString().trim();
        const eleI:number=iabKeys.findIndex(pK=>pK===eN);const eleS:string=pSels[eleI];
        if(gFields.length===1){ifGEle='$("'+eleS+'").length'}
        else{if(i===gFields.length-1){ifGEle=ifGEle+'$("'+eleS+'").length'}else{ifGEle=ifGEle+'$("'+eleS+'").length&&'}};
        if(eN==='gender'){setGVal=setGVal+'$("#select2-chosen-2").click().focusin().focusout().blur();$("'+eleS+'").click().focusin().prop("value","'+eV+'").focusout().blur();'}
        else if(eN==='pronoun'){setGVal=setGVal+'$("#select2-chosen-4").click().focusin().focusout().blur();$("'+eleS+'").click().focusin().prop("value","'+eV+'").focusout().blur();'}
        else{setGVal=setGVal+'$("'+eleS+'").click().focusin().prop("value","'+eV+'").focusout().blur();'};
        if(gFields.length===1){checkGVal='$("'+eleS+'").attr("value")==="'+eV+'"'}
        else{if(i===gFields.length-1){checkGVal=checkGVal+'$("'+eleS+'").attr("value")==="'+eV+'"'}else{checkGVal=checkGVal+'$("'+eleS+'").attr("value")==="'+eV+'"&&'}};
      };
    };
    if(hasASec){
      for(let i=0;i<aFields.length;i++){
        const eN:string=aFields[i]['n'];const eV:any=aFields[i]['v'].toString().trim();
        const eleI:number=iabKeys.findIndex(pK=>pK===eN);const eleS:string=pSels[eleI];
        if(aFields.length===1){ifAEle='$("'+eleS+'").length'}
        else{if(i===aFields.length-1){ifAEle=ifAEle+'$("'+eleS+'").length'}else{ifAEle=ifAEle+'$("'+eleS+'").length&&'}};
        setAVal=setAVal+'$("'+eleS+'").click().focusin().prop("value","'+eV+'").focusout().blur();';
        if(aFields.length===1){checkAVal='$("'+eleS+'").attr("value")==="'+eV+'"'}
        else{if(i===aFields.length-1){checkAVal=checkAVal+'$("'+eleS+'").attr("value")==="'+eV+'"'}else{checkAVal=checkAVal+'$("'+eleS+'").attr("value")==="'+eV+'"&&'}};
      };
    };
    if(hasESec){
      for(let i=0;i<eFields.length;i++){
        const eN:string=eFields[i]['n'];const eV:any=eFields[i]['v'].toString().trim();
        const eleI:number=iabKeys.findIndex(pK=>pK===eN);const eleS:string=pSels[eleI];
        if(eFields.length===1){ifEEle='$("'+eleS+'").length'}
        else{if(i===eFields.length-1){ifEEle=ifEEle+'$("'+eleS+'").length'}else{ifEEle=ifEEle+'$("'+eleS+'").length&&'}};
        setEVal=setEVal+'$("'+eleS+'").click().focusin().prop("value","'+eV+'").focusout().blur();';
        if(eFields.length===1){checkEVal='$("'+eleS+'").attr("value")==="'+eV+'"'}
        else{if(i===eFields.length-1){checkEVal=checkEVal+'$("'+eleS+'").attr("value")==="'+eV+'"'}else{checkEVal=checkEVal+'$("'+eleS+'").attr("value")==="'+eV+'"&&'}};
      };
    };

    //-------------------------------------------------------------------------------------------------
    let spDetails:string=null;let spResult:boolean=null;
    const page1Code:string=`(()=>{const insertCreds=setInterval(()=>{const loginInput=document.getElementById("login-email");const passInput=document.getElementById("login-password");const loginButton=document.getElementById("btnLoginSubmit");if(loginInput&&passInput&&loginButton){clearInterval(insertCreds);loginInput.value="`+upObj.u+`";passInput.value="`+upObj.p+`";setTimeout(()=>{loginButton.click()},500)}},500)})();`;
    const profBOpts:InAppBrowserOptions={clearcache:'no',clearsessioncache:'no',location:'no',hidden:'yes',hardwareback:'no',hidenavigationbuttons:'yes',hideurlbar:'yes',fullscreen:'yes',shouldPauseOnSuspend:'no'};
    const profBURL:string='https://once.deputy.com/my/#profile/edit-basic';
    const profB=this.iab.create(profBURL,'_blank',profBOpts);
    const pM=(data:InAppBrowserEvent)=>{this.logger.info('[IABServ|saveProfile] ('+data.type+'): '+data.url)};
    //-------------------------------------------------------------------------------------------------
    this.eventServ.subscribe('iabTO',tf=>{if(tf){spResult=false;profB.close()};this.eventServ.destroy('iabTO')});
    let G1:number=0;let A1:number=0;let E1:number=0;let DONE1=0;
    profB.on('loadstop').subscribe(async lSD=>{spDetails=lSD.url;pM(lSD);
      if(lSD.url.includes('login?redirect_url')){profB.executeScript({code:page1Code})};
      if(lSD.url.replace('https://once.deputy.com/my/#profile/','')==='edit-basic'){G1++;
        if(G1===1){this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "GENERAL"...');
          let skipG:string;if(!hasGSec){skipG=`document.querySelector("#btnMenuItemMainAddress > a").click()`}else{skipG=`
          (()=>{const IfGLoop=setInterval(()=>{if(`+ifGEle+`){clearInterval(IfGLoop);setTimeout(()=>{`+setGVal+`const SetGLoop=setInterval(()=>{if(`+checkGVal+`){clearInterval(SetGLoop);setTimeout(()=>{`+submitGSec+`const SubGLoop=setInterval(()=>{if(`+alertGSec+`){clearInterval(SubGLoop);setTimeout(()=>{document.querySelector("#btnMenuItemMainAddress > a").click()},1000)}},250)},1000)}},250)},1000)}},250)})();`};
          profB.executeScript({code:`var sheriffG1=0;setTimeout(()=>{sheriffG1++;var sheriffGURL=window.location.href.toString().replace("https://once.deputy.com/my/#profile/","");if(sheriffGURL==="edit-basic"&&sheriffG1===1){`+skipG+`}},1000)`});
        }else{this.logger.info('[Profile|saveProfile] (No Doubles!) General.')}
      };
      if(lSD.url.replace('https://once.deputy.com/my/#profile/','')==='edit-main-address'){A1++;
        if(A1===1){this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "ADDRESS"...');
          let skipA:string;if(!hasASec){skipA='document.querySelector("#btnMenuItemEmergencyAddress > a").click()'}else{skipA=`
          (()=>{const IfALoop=setInterval(()=>{if(`+ifAEle+`){clearInterval(IfALoop);setTimeout(()=>{`+setAVal+`const SetALoop=setInterval(()=>{if(`+checkAVal+`){clearInterval(SetALoop);setTimeout(()=>{`+submitASec+`const SubALoop=setInterval(()=>{if(`+alertASec+`){clearInterval(SubALoop);setTimeout(()=>{document.querySelector("#btnMenuItemEmergencyAddress > a").click()},1000)}},250)},1000)}},250)},1000)}},250)})();`};
          profB.executeScript({code:`let sheriffA1=0;setTimeout(()=>{sheriffA1++;var sheriffAURL=window.location.href.toString().replace("https://once.deputy.com/my/#profile/","");if(sheriffAURL==="edit-main-address"&&sheriffA1===1){`+skipA+`}},1000)`});
        }else{this.logger.info('[Profile|saveProfile] (No Doubles!) Address.')}
      }
      if(lSD.url.replace('https://once.deputy.com/my/#profile/','')==='edit-emergency-address'){E1++;
        if(E1===1){this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "EMERGENCY"...');
          let skipE:string;if(!hasESec){skipE='window.location.href="https://google.com"'}else{skipE=`
          (()=>{const IfELoop=setInterval(()=>{if(`+ifEEle+`){clearInterval(IfELoop);setTimeout(()=>{`+setEVal+`const SetELoop=setInterval(()=>{if(`+checkEVal+`){clearInterval(SetELoop);setTimeout(()=>{`+submitESec+`const SubELoop=setInterval(()=>{if(`+alertESec+`){clearInterval(SubELoop);setTimeout(()=>{window.location.href="https://google.com"},1000)}},250)},1000)}},250)},1000)}},250)})();`};
          profB.executeScript({code:`let sheriffE1=0;setTimeout(()=>{sheriffE1++;var sheriffEURL=window.location.href.toString().replace("https://once.deputy.com/my/#profile/","");if(sheriffEURL==="edit-emergency-address"&&sheriffE1===1){`+skipE+`}},1000)`});
        }else{this.logger.info('[Profile|saveProfile] (No Doubles!) Emergency.')}
      }
      if(lSD.url.includes('google.com')){DONE1++;
        if(DONE1===1){this.logger.info('[Profile|saveProfile] (Reached GOOGLE.COM >>> CLOSING!)...');
          spResult=true;profB.close()
        }else{this.logger.info('[Profile|saveProfile] (No Doubles!) DONE GOOGLE.')}
      };
    });
    profB.on('loaderror').subscribe(m=>{this.logger.info('[iabServ|saveProfile] (LOAD ERROR): '+m.message)});
    profB.on('exit').subscribe(()=>{this.eventServ.publish('iabTO',false);this.eventServ.publish('saveProfileDone',spResult)});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}