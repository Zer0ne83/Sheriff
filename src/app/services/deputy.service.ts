import { DateTimeService } from './datetime.service';
import { Capacitor } from '@capacitor/core';
import { Injectable } from '@angular/core';
import { Platform, NavController, LoadingController, MenuController } from '@ionic/angular';
import { FileSystemService } from './filesystem.service';
import { StorageService } from './storage.service';
import { EventsService } from './events.service';
import { HTTP } from '@ionic-native/http/ngx';
import { NGXLogger } from 'ngx-logger';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Directory, Encoding, Filesystem, CopyOptions } from '@capacitor/filesystem';  
import { frCheckResArr, frCheckMyArr, Resources, TypeMap, resEndPointArr, myEndPointArr,myFREPArr } from './baseDB';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { format, formatISO, isBefore, getDaysInMonth, lastDayOfYear, isLastDayOfMonth, parse, getDate, getMonth, getYear, isSameDay, differenceInDays, addSeconds } from 'date-fns';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import * as _ from 'lodash';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////////////////
@Injectable({ providedIn: 'root' })
////////////////////////////////////////////////////////////////////////////////////////////////////
export class DeputyService {
////////////////////////////////////////////////////////////////////////////////////////////////////
  logP:string='[DeputyService]';mod:string=this.logP;
  didRefresh:boolean=false;
  uUK:string|null=null;
  userEmail:string|null=null;
  isAuthenticated:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(null);
  Client:any={
    id:'d06f14114b6005d5935e1ea13af4f3658b889302',
    secret:'b9d5d47aa18cf73d890c933fabd156f469abedab',
    redirect:'http://localhost/callback',
    scope:'longlife_refresh_token', 
    authUrl:'https://once.deputy.com/my/oauth/access_token',
    auth:{access_token:null,expires_in:null,expires_at:null,scope:null,endpoint:null,refresh_token:null},
    authhead:null,
    apiUrl:null
  };
  SServer:any={
    baseUrl:'http://sheriff.zer0ne.dev:6969/', 
    FCT:{custom_token:null,expires_at:null,fe_token:null}
  };
  testCount=0;
  fileTransfer:FileTransferObject;
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private fileServ:FileSystemService,
    private storeServ:StorageService,
    private eventServ:EventsService,
    private logger:NGXLogger,
    private shttp:HTTP,
    private dT:DateTimeService, 
    private transfer:FileTransfer,
    private platform:Platform
  ) { this.platform.ready().then(()=>{this.fileTransfer=this.transfer.create()}) }
////////////////////////////////////////////////////////////////////////////////////////////////////
  getAuthRefreshOpts:any=(authOrRefresh:string,codeOrRefreshToken:string):any=>{
    let gAROpts:any={method:'post',responseType:'json',data:{client_id:this.Client.id,client_secret:this.Client.secret,redirect_uri:this.Client.redirect,scope:this.Client.scope}};
    if(authOrRefresh==='auth'){gAROpts['data']['grant_type']='authorization_code';gAROpts['data']['code']=codeOrRefreshToken}else{gAROpts['data']['grant_type']='refresh_token';gAROpts['data']['refresh_token']=codeOrRefreshToken};
    return gAROpts;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async doSServerDPLogin(upCreds:any):Promise<any>{ this.logger.info('[Deputy|doSServerDPLogin] ('+upCreds.user+'|'+upCreds.pass+')...');
    const dplOpts:any={method:'post',data:{email:upCreds.user,password:upCreds.pass},responseType:'json',timeout:30};
    try{const{status,data}=await this.shttp.sendRequest('http://sheriff.zer0ne.dev:6969/app/iablogin',dplOpts);
    if(status===200){return Promise.resolve({result:true,data:data})}
    else{this.logger.info('[Deputy|doSServerDPLogin] (ERROR): '+JSON.stringify(data));return Promise.resolve({result:false})}
    }catch(sFCMErr){this.logger.info('[Deputy|doSServerDPLogin] (ERROR): '+JSON.stringify(sFCMErr));return Promise.resolve({result:false})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async setSServerFCM(newFCM:string):Promise<boolean>{
    const sFCMOpts:any={method:'post',data:{ssauth:this.Client.auth.access_token,email:this.userEmail,fcm:newFCM},responseType:'json'} 
    try{const{status,data}=await this.shttp.sendRequest('http://sheriff.zer0ne.dev:6969/msg/setfcm',sFCMOpts); 
    if(status===200){return Promise.resolve(true)}
    else{this.logger.info('[Deputy|setSServerFCM] (ERROR): ('+data.code+') '+data.msg);return Promise.resolve(false)}
    }catch(sFCMErr){this.logger.info('[Deputy|setSServerFCM] (ERROR): '+JSON.stringify(sFCMErr));return Promise.resolve(false)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getServerLog():Promise<any>{
    const gSLOpts:any={method:'post',data:{ssauth:this.Client.auth.access_token,email:this.userEmail},responseType:'text'}
    try{const{status,data}=await this.shttp.sendRequest('http://sheriff.zer0ne.dev:6969/app/log',gSLOpts);
    if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:data})}}
    catch(gSLErr){this.logger.info('[Deputy|getServerLog] (ERROR): '+JSON.stringify(gSLErr));return Promise.resolve({result:false,data:JSON.stringify(gSLErr)})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getSnoopData():Promise<any>{
    const gSDOpts:any={method:'post',data:{ssauth:this.Client.auth.access_token,email:this.userEmail},responseType:'json'}
    try{const{status,data}=await this.shttp.sendRequest('http://sheriff.zer0ne.dev:6969/app/snoophrs',gSDOpts);
    if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false})}}
    catch(gSDErr){this.logger.info('[Deputy|getSnoopData] (ERROR): '+JSON.stringify(gSDErr));return Promise.resolve({result:false,data:JSON.stringify(gSDErr)})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getServerNotif():Promise<any>{
    const gSNOpts:any={method:'post',data:{ssauth:this.Client.auth.access_token,email:this.userEmail},responseType:'text'}
    try{const{status,data}=await this.shttp.sendRequest('http://sheriff.zer0ne.dev:6969/app/notif',gSNOpts);
    if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:data})}}
    catch(gSLErr){this.logger.info('[Deputy|getServerNotif] (ERROR): '+JSON.stringify(gSLErr));return Promise.resolve({result:false,data:JSON.stringify(gSLErr)})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async doAuthToken(code:string):Promise<any>{
    try{
      if(code){this.logger.info('[Deputy|doAuthToken] Requesting DP Tokens using CODE: '+code);
        const authOpts:any=this.getAuthRefreshOpts('auth',code);
        const{status,error,data}=await this.shttp.sendRequest(this.Client.authUrl,authOpts);
        if(status===200){
          const addExpAtRes:any=this.dT.authExpAt(data);
          let allStrData:any=addExpAtRes;
          for(const[key,value]of Object.entries(allStrData)){
            if(typeof value!=='string'){allStrData[key]=String(value)};
            if(key.toString()==='endpoint'){allStrData[key]=String(value).replace('https://','')};
          };
          return Promise.resolve({result:true,data:allStrData})
        }else{return Promise.resolve({result:false,data:JSON.stringify(error)})}
      }else{return Promise.resolve({result:false,data:'[Deputy|doAuthToken] (ERROR): Missing/Invalid Code Provided'})} 
    }catch(dATErr){return Promise.resolve({result:false,data:dATErr.error.description})}
  };
////////////////////////////////////////////////////////////////////////////////////////////////////
  async doRefreshToken(refreshAuthObj:any) { this.logger.info('[DeputyApiService|doRefreshToken] ()...');
    try{
      const refOpts:any=this.getAuthRefreshOpts('refresh',refreshAuthObj.refresh_token);
      this.shttp.setHeader(this.Client.auth.endpoint,'Authorization',null);
      this.shttp.clearCookies();
      this.shttp.setFollowRedirect(false);
      this.shttp.setServerTrustMode('default');
      this.shttp.setDataSerializer('urlencoded');
      const refRes:any=await this.shttp.sendRequest('https://'+refreshAuthObj.endpoint+'/oauth/access_token',refOpts);
      if(refRes.status===200&&refRes.data.hasOwnProperty('access_token')&&refRes.data.access_token!==refreshAuthObj.access_token){
        const addExpAtRes:any=this.dT.authExpAt(refRes.data);
        let allStrData:any=addExpAtRes;
        for(const[key,value]of Object.entries(allStrData)){
          if(typeof value!=='string'){allStrData[key]=String(value)};
          if(key.toString()==='endpoint'){allStrData[key]=String(value).replace('https://','')};
        };
        this.setAuthGVars(allStrData);
      }else{this.setAuthGVars(false)}
    }catch(refreshErr){
      console.log(refreshErr);
      this.logger.info('[Deputy|doRefreshToken] (Error): '+JSON.stringify(refreshErr));this.setAuthGVars(false)
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async setAuthGVars(dpAuthObj:any) { this.logger.info('[DeputyApiService|setAuthGVars] ()...');
    this.shttp.clearCookies();
    let tIVRes:boolean;!dpAuthObj?tIVRes=false:tIVRes=await this.tokenIsValid(dpAuthObj);
    if(tIVRes){
      this.isAuthenticated.next(true);
      this.Client.auth=dpAuthObj;
      this.Client.authhead={'Authorization':'OAuth '+this.Client.auth.access_token};
      this.Client.apiUrl='https://'+this.Client.auth.endpoint+'/api/v1/';
      this.shttp.setHeader(this.Client.auth.endpoint,'Authorization','OAuth '+this.Client.auth.access_token);
      this.shttp.setFollowRedirect(true);
      this.shttp.setRequestTimeout(20);
      this.shttp.setServerTrustMode('nocheck');
      this.shttp.setDataSerializer('json');
      let evResO:any={result:true,refresh:this.didRefresh,data:this.Client.auth};
      if(!this.didRefresh){this.eventServ.showToast('success','ᴛᴏᴋᴇɴ ᴠᴀʟɪᴅ')}
      else{this.eventServ.showToast('success','ᴛᴏᴋᴇɴ ʀᴇꜰʀᴇꜱʜᴇᴅ');this.didRefresh=false};
      this.storeServ.setObject(this.uUK+'DPAuth',dpAuthObj);
      this.storeServ.setItem('userEmail',this.userEmail);
      this.storeServ.setItem('currentUUK',this.uUK);
      // ----------------------------------------
      this.eventServ.publish('setAuthGVarsDone',evResO);
      // ----------------------------------------
      this.logger.info('🔑🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️');
      this.logger.info('🔑 𝗗𝗘𝗣𝗨𝗧𝗬 𝗔𝗨𝗧𝗛 𝗘𝗩 {Object} - "setAuthGVarsDone"');
      this.logger.info('🔑 .result:boolean  = TRUE');
      this.logger.info('🔑 .refresh:boolean = '+evResO.refresh.toString().toUpperCase());
      this.logger.info('🔑 .data:object     = {');
      this.logger.info('🔑   access_token:string  = '+evResO.data.access_token);
      this.logger.info('🔑   expires_in:string    = '+evResO.data.expires_in);
      this.logger.info('🔑   expires_at:string    = '+evResO.data.expires_at);
      this.logger.info('🔑   scope:string         = '+evResO.data.scope);
      this.logger.info('🔑   endpoint:string      = '+evResO.data.endpoint);
      this.logger.info('🔑   refresh_token:string = '+evResO.data.refresh_token);
      this.logger.info('🔑 }');
      this.logger.info('🔑🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️');
    }else{
      if(!this.didRefresh){
        this.didRefresh=true;
        this.eventServ.showToast('refresh','ʀᴇꜰʀᴇꜱʜɪɴɢ...');
        if(dpAuthObj){this.doRefreshToken(dpAuthObj)} // Try Refresh Token (x1)
        else{this.doRefreshToken(this.Client.auth)}
      }else{
        this.didRefresh=false;
        this.eventServ.showToast('error','ʀᴇꜰʀᴇꜱʜ ꜰᴀɪʟᴇᴅ: ʀᴇꜰʀᴇꜱʜ ᴇrror');
        this.eventServ.publish('setAuthGVarsDone',{result:false});
        this.clearAuthGVars();
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  clearAuthGVars() {
    this.logger.info('[DeputyApiService|clearAuthGVars] ()...');
    this.Client.auth=null;
    this.Client.authhead=null;
    this.Client.apiUrl=null;
    this.uUK=null;
    this.userEmail=null;
    this.isAuthenticated.next(false);
    this.eventServ.publish('clearAuthGVarsDone',true);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async tokenIsValid(testAuth:any):Promise<boolean> {
    const testOpts:any={method:'get',headers:{'Authorization':'OAuth '+testAuth.access_token},responseType:'json'}
    try{const{status}=await this.shttp.sendRequest('https://'+testAuth.endpoint+'/api/v1/me',testOpts);
      if(status===200){return Promise.resolve(true)}else{return Promise.resolve(false)}
    }catch{return Promise.resolve(false)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getFCT(tToken:string):Promise<any> {
    try{const{status,data}=await this.shttp.sendRequest('http://sheriff.zer0ne.dev:6969/fct/getfct',{method:'post',data:{email:this.userEmail,token:tToken},responseType:'json',timeout:10});
      if(status===200){this.logger.info('[Deputy|getFCT] 🔥🎟️ (SUCCESS): [TOKEN]: '+data.custom_token.substring(0,20)+'... [EXPIRES]: '+data.expires_at+' [FE_TOKEN]: '+data.fe_token);
        this.SServer.FCT=data;
        this.storeServ.setItem('currentFEToken',data.fe_token);
        return Promise.resolve({result:true,data:data})
    }else{return Promise.resolve({result:false,data:data})}
    }catch(dRFCTErr){this.logger.info('[Deputy|getFCT] (ERROR): '+JSON.stringify(dRFCTErr));return Promise.resolve({result:false,data:JSON.stringify(dRFCTErr)})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async quickMeAva():Promise<any> { this.logger.info('['+this.mod+'|quickMeAva] ()...');
    const statMeAva:any=await this.fileServ.stat(this.fileServ.phoneFS,'/Sheriff/assets/meAvatar');
    const meAvaUri:string=(Capacitor.convertFileSrc(statMeAva.data.uri));
    try{
      const{status,data}=await this.shttp.sendRequest(this.Client.apiUrl+'me',{method:'get',responseType:'json'});
      if(status===200){await this.fileServ.replaceMeAva(data.UserObjectForAPI.Photo)}
      if(this.storeServ.getItem(this.uUK+'meAvatar')){return Promise.resolve({result:true,data:meAvaUri})}
      else{this.storeServ.setItem(this.uUK+'meAvatar',meAvaUri);return Promise.resolve({result:true,data:meAvaUri})}
    }catch{return Promise.resolve({result:false})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async quickWorkAva():Promise<any> { this.logger.info('['+this.mod+'|quickWorkAva] ()...');
    const statWorkAva:any=await this.fileServ.stat(this.fileServ.phoneFS,'/Sheriff/assets/workAvatar');
    const workAvaUri:string=(Capacitor.convertFileSrc(statWorkAva.data.uri));
    try{
      const{status,data}=await this.shttp.sendRequest(this.Client.apiUrl+'my/setup',{method:'get',responseType:'json'});
      if(status===200){await this.fileServ.replaceWorkAva(data.PortfolioLogoUrl)}
      if(this.storeServ.getItem(this.uUK+'workAvatar')){return Promise.resolve({result:true,data:workAvaUri})}
      else{this.storeServ.setItem(this.uUK+'workAvatar',workAvaUri);return Promise.resolve({result:true,data:workAvaUri})}
    }catch{return Promise.resolve({result:false})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async dlConvertMeWorkAvas() {
    this.logger.info('['+this.mod+'|dlConvertMeWorkAvas] ()...');
    let meRes:boolean;let workRes:boolean;let meAvaStr:string;let workAvaStr:string;
    let webMeAvaURL:string;let webWorkAvaURL:string;
    const doMeErr=(err:string)=>{meRes=false;this.logger.info('[meAva] (Error): '+JSON.stringify(err));this.eventServ.publish('avaTasksCounter',{name:'me',data:null})};
    const doWorkErr=(err:string)=>{workRes=false;this.logger.info('[workAva] (Error): '+JSON.stringify(err));this.eventServ.publish('avaTasksCounter',{name:'work',data:null})};
    const getMeAva=async()=>{
      const freshMeObj:any=await this.shttp.sendRequest(this.Client.apiUrl+'me',{method:'get',responseType:'json'});
      let storedMeObj:any;
      if(freshMeObj.status===200){storedMeObj=freshMeObj.data}
      else{storedMeObj=await this.storeServ.getObject(this.uUK+'MeData')};
      webMeAvaURL=storedMeObj.UserObjectForAPI.Photo;
      try{
        let uriForSaveMe:string|null=null;
        const existMeAvaRes=await this.fileServ.stat(this.fileServ.phoneFS,'/Sheriff/assets/meAvatar');
        if(existMeAvaRes.result){
          const replacedMe:boolean=await this.fileServ.compareReplaceAva('me',webMeAvaURL,existMeAvaRes.data.size);
          let consMTxt:string;replacedMe?consMTxt='✔️Replaced':consMTxt='🔸Retained';this.logger.info('[Deputy|dlConvertMeWorkAvas] 🎇 (Keep/Replace|meAva) '+consMTxt);
          uriForSaveMe=(Capacitor.convertFileSrc(existMeAvaRes.data.uri))
        }else{uriForSaveMe=await this.fileServ.dlFile(webMeAvaURL,'meAvatar')};
        if(uriForSaveMe!==null){
          meRes=true;this.storeServ.setItem(this.uUK+'meAvatar',uriForSaveMe);
          this.eventServ.publish('avaTasksCounter',{name:'me',data:uriForSaveMe})
        }else{this.logger.info('[Deputy|dlConvertMeWorkAvas] - ERROR: uriForSaveMe===null')}
      }catch(meDLErr){doMeErr(meDLErr)}
    }
    const getWorkAva=async()=>{
      const storedMySetupData:any=await this.storeServ.getObject(this.uUK+'MySetupData'); 
      const storeAvaExpUTS:number=Number(storedMySetupData.PortfolioLogoUrl.split('Expires=')[1].substring(0,10));
      const nowUTS:number=this.dT.getUT(new Date());
      if(nowUTS>storeAvaExpUTS){const freshWorkAva:string=await this.getMyWorkAva();if(freshWorkAva!=='error'){webWorkAvaURL=freshWorkAva}{webWorkAvaURL=null}}
      else{webWorkAvaURL=storedMySetupData.PortfolioLogoUrl};
      try{
        let uriForSaveWork:string|null=null;
        const existWorkAvaRes=await this.fileServ.stat(this.fileServ.phoneFS,'/Sheriff/assets/workAvatar');
        if(existWorkAvaRes.result){
          if(webWorkAvaURL!==null){
            const replacedWork:boolean=await this.fileServ.compareReplaceAva('work',webWorkAvaURL,existWorkAvaRes.data.size);
            let consMTxt:string;replacedWork?consMTxt='✔️Replaced':consMTxt='🔸Retained';this.logger.info('[Deputy|dlConvertMeWorkAvas] 🎇 (Keep/Replace|workAva) '+consMTxt);
          };
          uriForSaveWork=(Capacitor.convertFileSrc(existWorkAvaRes.data.uri))
        }else{
          if(webWorkAvaURL!==null){uriForSaveWork=await this.fileServ.dlFile(webWorkAvaURL,'workAvatar')}
          else{uriForSaveWork='./../../assets/img/icon.png'}
        };
        if(uriForSaveWork!==null){
          workRes=true;this.storeServ.setItem(this.uUK+'workAvatar',uriForSaveWork);
          this.eventServ.publish('avaTasksCounter',{name:'work',data:uriForSaveWork})
        }else{this.logger.info('[Deputy|dlConvertMeWorkAvas] - ERROR: uriForSaveWork===null')}
      }catch(workDLErr){doWorkErr(workDLErr)}
    };
    this.eventServ.subscribe('avaTasksCounter',taskData=>{
      if(taskData.name==='me'){
        this.logger.info('[DAS|dlConvertMeWorkAvas] - Converting [workAvatar]...');
        meAvaStr=taskData.data;
        getWorkAva()
      }else if(taskData.name==='work'){this.eventServ.destroy('avaTasksCounter');
        this.logger.info('[DAS|dlConvertMeWorkAvas] - Conversion Attempts Finished.');
        workAvaStr=taskData.data;
        if(meRes&&workRes){this.eventServ.publish('dlConvAvasFinished',{result:true,data:{me:meAvaStr,work:workAvaStr}})}
        else{this.eventServ.publish('dlConvAvasFinished',{result:false,data:null})}
      }
    });
    this.logger.info('[DAS|dlConvertMeWorkAvas] - Converting [meAvatar]...');
    getMeAva()
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async frFastStart():Promise<any> {
    const sT:any=new Date();
    this.dlConvertMeWorkAvas();
    const allEPs:any[]=['colleague','roster','timesheet','task','memo','contactaddress/all','notifications','leave','unavail'];
    const ucEPs:any[]=['roster','timesheet','task','memo','leave'];
    for(let i=0;i<allEPs.length;i++){
      const {data}=await this.getMy(allEPs[i]);
      // If This MyEP is Core 
      if(ucEPs.includes(allEPs[i])){this.storeServ.setObject('fr-'+(allEPs[i].charAt(0).toUpperCase()+allEPs[i].slice(1)),data)}
      else{
        if(allEPs[i]==='colleague'){
          this.storeServ.setObject(this.uUK+'MyColleagues',data);
          this.storeServ.setObject(this.uUK+'fr-colleague',data);
        }else if(allEPs[i]==='leave'){this.storeServ.setObject('fr-EmployeeAvailability',data)}
        else{this.storeServ.setObject('fr-'+allEPs[i],data)}
      }
    }
    return Promise.resolve(sT);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getMeMyData() {
    this.logger.info('['+this.mod+'|getMeMyData] ()...');
    const doErr=(err:any)=>{this.eventServ.publish('getMeMyDataDone',{result:false,data:err})};
    const doSuccess=(meO:any,myO:any)=>{this.eventServ.publish('getMeMyDataDone',{result:true,data:{me:meO,my:myO}})};
    try{
      const meAPIRes:any=await this.shttp.sendRequest(this.Client.apiUrl+'me',{method:'get',responseType:'json'});
      if(meAPIRes.status===200){this.storeServ.setObject(this.uUK+'MeData',meAPIRes.data)};
      const myAPIRes:any=await this.shttp.sendRequest(this.Client.apiUrl+'my/setup',{method:'get',responseType:'json'});
      if(myAPIRes.status===200){this.storeServ.setObject(this.uUK+'MySetupData',myAPIRes.data)};
      if(meAPIRes.status===200&&myAPIRes.status===200){doSuccess(meAPIRes.data,myAPIRes.data)}
      else{let errStr:string;
        if(meAPIRes.hasOwnProperty('error')){errStr=JSON.stringify(meAPIRes.error)};
        if(myAPIRes.hasOwnProperty('error')){errStr=errStr+' | '+JSON.stringify(myAPIRes.error)};
        doErr(errStr);
      }
    }catch(gMMErr){this.logger.info('[Deputy|getMeMyData] (ERROR):');this.logger.info(gMMErr)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  getMe() { this.logger.info('[DeputyApiService|getMe] ()...');
    return this.shttp.sendRequest(this.Client.apiUrl+'me',{method:'get',responseType:'json'});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  getMy(mySub) { this.logger.info('[DeputyApiService|getMy] ()...');
    return this.shttp.sendRequest(this.Client.apiUrl+'my/'+mySub,{method:'get',responseType:'json'});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getThis(fullPath):Promise<any> { this.logger.info('[DeputyApiService|getThis] (' + fullPath + ')...');
    const {data,error}=await this.shttp.sendRequest(this.Client.apiUrl+fullPath,{method:'get',responseType:'json'});
    if(!error){return Promise.resolve({r:true,d:data})}else{return({r:false,d:error})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async postThis(fullPath):Promise<any> { this.logger.info('[DeputyApiService|postThis] (' + fullPath + ')...');
    const {data,error}=await this.shttp.sendRequest(this.Client.apiUrl+fullPath,{method:'post',responseType:'json'});
    if(!error){return Promise.resolve({r:true,d:data})}else{return({r:false,d:error})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getDetailMe():Promise<any> { this.logger.info('[DeputyApiService|getDetailMe] ()...');
    try{
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'me',{method:'get',responseType:'json'});
      if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(gDMErr){return Promise.resolve({result:false,data:gDMErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getDetailMy():Promise<any> { this.logger.info('[DeputyApiService|getDetailMy] ()...');
    try{
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'my/setup',{method:'get',responseType:'json'});
      if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(gDMErr){return Promise.resolve({result:false,data:gDMErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getDetailPpl():Promise<any> { this.logger.info('[DeputyApiService|getDetailPpl] ()...');
    try{
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'my/colleagues',{method:'get',responseType:'json'});
      if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(gDMErr){return Promise.resolve({result:false,data:gDMErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getMyWorkAva() { this.logger.info('[DeputyApiService|getMyWorkAva] ()...');
    const {status,data} = await this.shttp.sendRequest(this.Client.apiUrl+'my/setup',{method:'get',responseType:'json'});
    let wA:string;if(status===200){wA=data.PortfolioLogoUrl}else{wA='error'};
    return wA;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getMyOwnAva() { this.logger.info('[DeputyApiService|getMyOwnAva] ()...');
    const {status,data} = await this.shttp.sendRequest(this.Client.apiUrl+'me',{method:'get',responseType:'json'});
    let mA:string;if(status===200){mA=data.UserObjectForAPI.Photo}else{mA='error'};
    return mA;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  getResource(resSub) { this.logger.info('[DeputyApiService|getResource] ()...');
    return this.shttp.sendRequest(this.Client.apiUrl+'resource/'+resSub,{method:'get',responseType:'json'});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async syncDBCount(dbEP:string, epType:string):Promise<any> {
    let infoEP:string; let isRes:boolean; if(epType==='res'){isRes=true;infoEP='/INFO'}else{isRes=false;infoEP='';} 
    const { status, data, error } = await this.shttp.sendRequest(this.Client.apiUrl+dbEP+infoEP,{method:'get',responseType:'json'});
    if (status) { if (isRes) { return Promise.resolve({result:true,data:data.count}) } else { return Promise.resolve({result:true,data:data}) }
    } else { return Promise.resolve({result:false,data:data.status+': '+error}) }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getMemo(memoId:number|null):Promise<any> {
    let memoQBody:any;memoId===null?memoQBody={'search':{'s1':{'field':'Id','type':'ge','data':1}},'sort':{'Id':'desc'}}:memoQBody={'search':{'s1':{'field':'Id','type':'eq','data':memoId}},'sort':{'Id':'desc'}};
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/Memo/QUERY',{method:'post',data:memoQBody,responseType:'json'});
    if(status===200){return Promise.resolve(data)}else{return Promise.resolve(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getWeekTSheets():Promise<any> {
    const startWeek:Date=this.dT.sOW(new Date());
    const endWeek:Date=this.dT.eOW(new Date());
    const gWTSBody:any={'search':{'s1':{'field':'Date','type':'ge','data':startWeek},'s2':{'field':'Date','type':'le','data':endWeek}},'sort':{'Date':'asc'}};
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/Timesheet/QUERY',{method:'post',data:gWTSBody,responseType:'json'});
    if(!error){return Promise.resolve(data)}else{return Promise.resolve(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getSyncItems(dbEP:string, apiCount:number):Promise<any> {
    const batchBodyObj = {start:(apiCount-100),max:500};
    const { status, data, error } = await this.shttp.sendRequest(this.Client.apiUrl+dbEP+'/QUERY',{method:'post',data:batchBodyObj,responseType:'json'});
    if ( status === 200 ) { return Promise.resolve({result:true,data:data}); } else { return Promise.resolve({result:false,data:error}) }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async crawlAPI() {
    const sT = new Date(); const allResEP:any[]=Object.entries(Resources); const allLen:number=allResEP.length; let allC=0;
    let allTables:any[]=[]; let failedTables:any[]=[]; const pk:string=' PRIMARY KEY NOT NULL'; const rn:string='resource_name';
    const gT = (n:any,t:any):string=>{let fStr:string;let fT=(TypeMap[t.toLowerCase()]);fT?fT=fT.toUpperCase():fT='TEXT';n==='Id'?fStr=fT+pk:fStr=fT;return fStr}
    let joinsTable:any = {name:'joins',schema:[{column:rn,value:'TEXT'+pk},{column:'joins',value:'TEXT'}],values:<any[]>[]};
    let assocsTable:any = {name:'assocs',schema:[{column:rn,value:'TEXT'+pk},{column:'assocs',value:'TEXT'}],values:<any[]>[]};
    let countTable:any = {name:'count',schema:[{column:rn,value:'TEXT'+pk},{column:'count',value:'INTEGER'}],values:<any[]>[]};
    for (const [key,value] of allResEP) { allC++
      let fieldsSchema:any[]=[]; const {status,data,error} = await this.shttp.sendRequest(this.Client.apiUrl+'resource/'+key+'/INFO',{method:'get',responseType:'json'});
      if (status!==200) { failedTables.push({name:key,status:status,error:error}) } else { const tblFields = Object.entries(data.fields);
        for (let i=0;i<tblFields.length;i++) { fieldsSchema.push({column:tblFields[i][0],value:gT(tblFields[i][0],tblFields[i][1])}) }
        allTables.push({name:value,schema:fieldsSchema,indexes:[{name:'IndexIdModifiedDesc',value:'Id DESC, Modified, DESC'}]});
        joinsTable.values.push([value,(data.joins),JSON.stringify(data.joins)]);
        assocsTable.values.push([value,JSON.stringify(data.assocs)]);
        countTable.values.push([value,data.count]); 
      }
    }
    allTables.push(joinsTable); allTables.push(assocsTable); allTables.push(countTable);
    console.log('SUCCESS: '+allTables.length+' | FAILED: '+failedTables.length+' - Total Time: '+(this.eventServ.getDur(sT)/1000)+'s');
  }  
////////////////////////////////////////////////////////////////////////////////////////////////////
  async firstRunRecordsCheck():Promise<any[]> { this.logger.info('[Deputy|firstRunResCheck] (STARTED)...');
    let frRecordsCatArr:any[]=[];let isOK:number=0;let isER:number=0;//frCheckResArr
    for(let i=0;i<resEndPointArr.length;i++){const recCat:string=resEndPointArr[i];
      try{
        const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/'+recCat+'/INFO',{method:'get',responseType:'json'});
        if(status===200){isOK++;frRecordsCatArr.push({name:recCat,access:true,fields:data.fields,count:data.count})}
        else{isER++;frRecordsCatArr.push({name:recCat,access:false,error:error,count:0})}
      }catch(frRCErr){isER++;frRecordsCatArr.push({name:recCat,access:false,error:frRCErr,count:0})}
    };
    this.logger.info('[DeputyApiService|firstRunResCheck] (COMPLETED): '+isOK+' GOOD + '+isER+' BAD - Saving/Publishing frRecordsCatObj...');
    return Promise.resolve(frRecordsCatArr);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  getNo(tR:any):Promise<any> {
    let oTyp:string;let oLen:number;
    const isA=(tR:any):boolean=>{if(Array.isArray(tR)){return true}else{return false}};
    const isO=(tR:any):boolean=>{if(tR===Object(tR)&&!Array.isArray(tR)){return true}else{return false}};
    if(isA(tR)){oTyp='array';oLen=tR.length};
    if(isO(tR)){oTyp='object';oLen=Object.keys(tR).length};
    if(!isA(tR)&&!isO(tR)){oTyp='nk';oLen=0};
    return Promise.resolve({o:oTyp,l:oLen});
  };
////////////////////////////////////////////////////////////////////////////////////////////////////
  async firstRunMyCheck():Promise<any[]> { this.logger.info('[Deputy|firstRunMyCheck] (STARTED)...');
    let frMyCatArr:any[]=[];let isOK:number=0;let isER:number=0;
    for(let i=0;i<frCheckMyArr.length;i++){let myCat:string=frCheckMyArr[i];
      try{
        const{status,data}=await this.shttp.sendRequest(this.Client.apiUrl+'my/'+myCat,{method:'get',responseType:'json'});
        if(status===200){isOK++;
          const dataInfo:any=await this.getNo(data);
          frMyCatArr.push({name:myCat,error:false,type:dataInfo.o,count:dataInfo.l,data:data})
        }else{isER++;frMyCatArr.push({name:myCat,error:true})}
      }catch(frRCErr){isER++;frMyCatArr.push({name:myCat,error:true})}
    };
    this.logger.info('[Deputy|firstRunMyCheck] (COMPLETED): '+isOK+' GOOD + '+isER+' BAD - Saving/Publishing frMyCatObj...');
    return Promise.resolve(frMyCatArr);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async frDLMyItems(myEP:string) { this.logger.info('[Deputy|frDLMyItems] ('+myEP+')');
    const getSingleMyItems=async(mEP:string)=>{
      let fEP:string;mEP==='location'||mEP==='contactaddress'?fEP=mEP+'/all':fEP=mEP;
      const{status,data}=await this.shttp.sendRequest(this.Client.apiUrl+'my/'+fEP,{method:'get',responseType:'json'});
      if(status===200){
        const dataInfo=await this.getNo(data);
        if(dataInfo.l>0){this.eventServ.publish('frDLMyItems',{stage:'update',getThisPBar:1});return{error:false,count:dataInfo.l,result:data}}
        else{this.eventServ.publish('frDLMyItems',{stage:'update',getThisPBar:1});return{error:false,count:0,result:null}}
      }else{this.eventServ.publish('frDLMyItems',{stage:'update',getThisPBar:1});return{error:true,count:0,result:null}}
    };
    (async()=>{ this.logger.info('[Deputy|frDLMyItems] ('+myEP+') - [START]');
      const finalSingleObj:any=await getSingleMyItems(myEP);
      if(!finalSingleObj.error&&finalSingleObj.count>0){
        let finalMyArr:any[]=[];let finalEP:string='fr-'+myEP;
        if(myEP!=='roster'){finalMyArr=finalSingleObj.result}else{
          const resRos=await this.storeServ.getObject('fr-Roster');
          const mySet=new Set([...resRos,...finalSingleObj.result]);
          finalMyArr=Array.from(mySet)
        }
        this.logger.info('[Deputy|frDLMyItems] ('+myEP+') - [FINISH] (Saved OK): '+finalMyArr.length);
        this.eventServ.publish('frDLMyItems',{stage:'end',error:false,myEPName:myEP,records:finalMyArr.length,data:finalMyArr});
      }else{
        if(finalSingleObj.error){
          this.logger.info('[DeputyApiService|frDLMyItems] ('+myEP+') - [FINISH] (Request Error)');
          this.eventServ.publish('frDLMyItems',{stage:'end',error:true,records:null});
        }else{
          this.logger.info('[DeputyApiService|frDLMyItems] ('+myEP+') - [FINISH] (No Data) (0 length)');
          this.eventServ.publish('frDLMyItems',{stage:'end',error:false,records:null}); 
        }
      }
    })();
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async gotEPAccess(ep:string[]):Promise<any[]> { this.logger.info('[Deputy|gotEPAccess] (ep(s))...');
    let epRes:any[]=[];
    for(let i=0;i<ep.length;i++){
      try{const{error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/'+ep[i]+'/QUERY',{method:'post',data:{max:200},responseType:'json'});
      if(!error){epRes.push({ep:ep[i],result:true})}else{epRes.push({ep:ep[i],result:false})}}catch(err){epRes.push({ep:ep[i],result:false})}
    };
    return Promise.resolve(epRes);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async frDLResItems(recCount:number,recTotal:number,recEP:string,recMax:number,recValue:number){
    this.logger.info('[Deputy|frDLResItems] ('+recCount+','+recTotal+','+recEP +','+recMax+','+recValue+')');
    const getMultiResItems=async(tMO:any)=>{
      let myMultiArr:any[]=[];let totalBatches:number=Math.ceil(tMO.value/500);
      let errCount:number=0;let errArr:any[]=[];
      for(let batch=0;batch<totalBatches;batch++){
        const batchBodyObj={start:((tMO.max-tMO.value)+(500*batch)),max:500,sort:{'Id':'desc'}};
        try{
          const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/'+recEP+'/QUERY',{method:'post',data:batchBodyObj,responseType:'json'});
          if(status===200){
            const oldArr=myMultiArr;const newArr=data;myMultiArr=_.union(oldArr,newArr);
            const calcThisPBar:string=(myMultiArr.length/recValue).toFixed(2);
            this.eventServ.publish('frDLResItems',{stage:'update',thisDataValue:myMultiArr.length,getThisPBar:Number(calcThisPBar)});
            this.logger.info('[Deputy|frDLResItems] ('+recEP+') - [BATCH] - '+batch);
          }else{
            errCount++;
            errArr.push({errCount:errCount,batchNo:batch,batchTotal:totalBatches,statusCode:error});
            if(status===401||errCount>1){break}else{continue}
          }
        }catch(frDLResErr){
          if(frDLResErr.error.code.toString()==='403'){return{error:false,result:[]}};
        }
      };
      if(errCount>0){return{error:true,result:errArr}}else{return{error:false,result:myMultiArr}}
    };
    (async()=>{this.logger.info('[Deputy|frDLResItems] ('+recEP+') - [START]...');
      const thisMultiObj={ep:recEP,max:recMax,value:recValue};
      const finalMultiResObj=await getMultiResItems(thisMultiObj);
      if(!finalMultiResObj.error){
        let allItemsArrForSave:any[]=[];if(recEP==='SystemUsageTracking'){allItemsArrForSave=finalMultiResObj.result.reverse()}else{allItemsArrForSave=finalMultiResObj.result};
        this.logger.info('[Deputy|frDLResItems] ('+recEP+') - [FINISH] (Saved OK): '+finalMultiResObj.result.length);
        this.eventServ.publish('frDLResItems',{stage:'end',recEPName:recEP,records:allItemsArrForSave.length,data:allItemsArrForSave});
      }else{
        this.logger.info('[Deputy|frDLResItems] ('+recEP+') - [FINISH] (Request Error): '+finalMultiResObj.result[0].statusCode);
        this.eventServ.publish('frDLResItems',{stage:'error',recEPName:recEP,error:finalMultiResObj.result})
      }
    })();
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getMyWebPhoto():Promise<any>{try{const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'my/photo',{method:'get',responseType:'json'});
  if(status===200){
    return Promise.resolve({result:true,data:data.DownloadLink.toString()})}
    else{return Promise.resolve({result:false,data:error})}}catch(err){return Promise.resolve({result:false,data:err})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getRoster():Promise<any> { this.logger.info('[DeputyApiService|getRoster] ()...');
    return await this.shttp.sendRequest(this.Client.apiUrl+'supervise/roster/'+format(new Date(),'yyyy-MM-dd'),{method:'get',responseType:'json'});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getRosterByDate(rosterDate:Date):Promise<any> { this.logger.info('[DeputyApiService|getRosterByDate] ()...');
    const rosterDateStr:string=this.dT.format(rosterDate,'yyyy-MM-dd');
    return await this.shttp.sendRequest(this.Client.apiUrl+'supervise/roster/'+rosterDateStr,{method:'get',responseType:'json'});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getMissTSRoster(rosterDate:Date):Promise<any> { this.logger.info('[DeputyApiService|getMissTSRoster] ()...');
    const rosterDateStr:string=this.dT.format(rosterDate,'yyyy-MM-dd');
    try {
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/roster/'+rosterDateStr,{method:'get',responseType:'json'});
      if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(gMTSRErr){return Promise.resolve({result:false,data:gMTSRErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async findRosters(startDStr:string, endDStr:string) {
    this.logger.info('[DeputyApi|findRosters] ()...');
    const fnStartDRange = startDStr; const fnEndDRange = endDStr;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const pDateStr = (dateStr) => { return parse(dateStr,'yyyy-MM-dd',new Date()) }
    const startDRange = pDateStr(fnStartDRange); const endDRange = pDateStr(fnEndDRange); const rangeLen = differenceInDays(endDRange,startDRange);
    let startM = getMonth(startDRange); let startY = getYear(startDRange); let foundRosDates = []; let foundRosData = [];
    const checkDate = async (cDate:string):Promise<boolean> => { await delay(100); const { status, data, error } = await this.shttp.sendRequest(this.Client.apiUrl + 'supervise/roster/'+cDate, { method: 'get', serializer: 'json', timeout: 20, responseType: 'json'}); if (status === 200) { if ( data.length > 0 ) { foundRosDates.push(cDate); foundRosData.push(data); } else { Promise.resolve(true) } } else { this.logger.info(error); return Promise.resolve(false) } }
    for ( let startD = getDate(startDRange); startD < rangeLen; startD++ ) {
      const newD = new Date(startY, startM, startD); const cDate = formatISO(newD,{representation:'date'});
      await checkDate(cDate);
      if (isLastDayOfMonth(newD)) { startD = 1; startM++ }
      if (isSameDay(newD,lastDayOfYear(newD))) { startD = 1; startM = 0; startY++ }
      if (isSameDay(newD,endDRange)) { break; }
    }
    this.storeServ.setObject('FindRosResults', { dates: foundRosDates, data: foundRosData });
    console.log('[DeputyApi|findRosters] (Finished) - Found: ['+foundRosDates.length+'] Rosters - '+foundRosDates.join(','));
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async saveNativeImage(imgWebURL:string,fileName:string):Promise<string> { this.logger.info(this.mod+'|saveNativeImage] ()...');
    const saveRes = await this.fileServ.stat(this.fileServ.phoneFS,'Sheriff/assets');
    const fileEntry = await this.shttp.downloadFile(imgWebURL,null,this.Client.authhead,saveRes.data.uri+'/'+fileName);
    console.log(fileEntry);
    const convURI:string = (Capacitor.convertFileSrc(fileEntry.nativeURL));
    this.logger.info('[DAS|saveNativeImg] (DL/Save): Success: '+convURI);
    return Promise.resolve(convURI);
  }  
////////////////////////////////////////////////////////////////////////////////////////////////////
  async diffMyWorkplace(currentWPArr:any[]|null):Promise<any> { this.logger.info('['+this.mod+'|diffMyWorkplace](currentWPArr)...');
    let oldWPArr:any[]=[];currentWPArr!==null?oldWPArr=currentWPArr:oldWPArr=[];let newWPArr:any[]=[];
    try{
      const{status,data}=await this.getMy('setup');
      if(status===200){newWPArr=data['Workplace']}else{return Promise.resolve({new:false})};
      if(oldWPArr.length<1||newWPArr.length<1||oldWPArr.length===newWPArr.length){return Promise.resolve({new:false})}
      else{return Promise.resolve({new:true,newno:Math.abs(newWPArr.length-oldWPArr.length),data:data})}
    }catch(dMWPErr){return Promise.resolve({new:false})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getResSyncCount(tableN:string):Promise<number> {
    this.logger.info('[DeputyApiService|getCount] ('+tableN+')...');
    let resName:string;for(const [key,value] of Object.entries(Resources)){if(tableN===value){resName=key.toString()}};
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/'+resName+'/INFO',{method:'get',responseType:'json'});
    if(status===200){return Promise.resolve(data.count)}else{return Promise.reject(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getTSheetSyncRange(range:boolean,start:Date|null,end:Date|null,staged:boolean):Promise<any> {
    this.logger.info('['+this.mod+'|getTSheetSyncRange]()...');
    if(!staged){
      let TSSRBody:any;range?TSSRBody={'search':{'s1':{'field':'Date','type':'ge','data':this.dT.format(start,'yyyy-MM-dd')},'s2':{'field':'Date','type':'le','data':this.dT.format(end,'yyyy-MM-dd')},'s3':{'field':'Modified','type':'ge','data':this.dT.format(start,'yyyy-MM-dd')},'s4':{'field':'Modified','type':'le','data':this.dT.format(end,'yyyy-MM-dd')}},'sort':{'Id':'desc'}}:TSSRBody={'sort':{'Id':'desc'}};
      const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/Timesheet/QUERY',{method:'post',data:TSSRBody,responseType:'json'});
      if(status===200){console.log(status);console.log(data);console.log(error);return Promise.resolve(data)}else{return Promise.reject(error)}
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getAllTSheetsOrderById():Promise<any> { this.logger.info('['+this.mod+'|getAllTSheetsOrderById] ()...');
    try{ const queryBody:any={'sort':{'Id':'desc'}};
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/Timesheet/QUERY',{method:'post',data:queryBody,responseType:'json'});
    if(status===200){return Promise.resolve({result:true,data:data})}
    else{return Promise.resolve({result:false,data:error})}
  }catch(gATSOIdErr){return Promise.resolve({result:false,data:gATSOIdErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getSingleTS(tsId:number):Promise<any> {
    let tsQBody:any={'search':{'s1':{'field':'Id','type':'eq','data':tsId}}};
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/Timesheet/QUERY',{method:'post',data:tsQBody,responseType:'json'});
    if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getTodayShiftColleagues():Promise<any> {
    this.logger.info('[DeputyApi|getTodayShiftColleagues] ()...');
    const t:string=format(new Date(),'yyyy-MM-dd');
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/roster/'+t,{method:'get',serializer:'json',timeout:20,responseType:'json'});
    if(status===200){return Promise.resolve(data)}else{this.logger.info('[DeputyApi|getTodayShiftColleagues] (ERROR): '+error);return Promise.reject(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getThisShiftColleagues(d:Date):Promise<any> {
    this.logger.info('[DeputyApi|getThisShiftColleagues] ()...');
    const t:string=format(d,'yyyy-MM-dd');
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/roster/'+t,{method:'get',serializer:'json',timeout:20,responseType:'json'});
    if(status===200){return Promise.resolve(data)}else{this.logger.info('[DeputyApi|getTodayShiftColleagues] (ERROR): '+error);return Promise.reject(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
///// TASKS
////////////////////////////////////////////////////////////////////////////////////////////////////
  async updateTask(taskId:number,userEntry:number,assignTo:number,taskTitle:string,taskDueDate:Date, taskDueTS:number,taskNotes:string):Promise<any> {
    this.logger.info('[DeputyApi|updateTask] ()...');
    const updateTaskObj:any={'intUserResponsible':assignTo,'strQuestion':taskTitle,'strComment':taskNotes,'strDueDate':taskDueDate,'intDueTimestamp':taskDueTS};
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/task/'+taskId,{method:'put',data:updateTaskObj,serializer:'json',timeout:20,responseType:'json'});
    if(status===200){return Promise.resolve(data)}else{this.logger.info('[DeputyApi|updateTask] (ERROR): '+error);return Promise.reject(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async createTask(
    myAss:string,
    userE:number,
    assignTo:number,
    taskTitle:string,
    taskSortOrder:number,
    taskDueDate:Date|null,
    taskNotes:string|null,
    ):Promise<any> { this.logger.info('[DeputyApi|createTask] ()...');
    try {
      let createTaskObj:any={
        intTaskSetupId:<number>0,intOpUnitId:<number>0,intGroupId:<number>0,
        strDate:<string>null,
        intDayTimestamp:<number>null,
        strDueDate:<string>null,
        intDueTimestamp:<number>null,
        intSortOrder:<number>taskSortOrder,
        strQuestion:<string>taskTitle,
        strComment:<string>null,
        intUserEntry:<number>userE,
        intUserResponsible:<number>assignTo
      };
      const nowDateObj:Date=new Date();createTaskObj.strDate=this.dT.Id(nowDateObj);createTaskObj.intDayTimestamp=this.dT.getUT(nowDateObj);
      if(taskDueDate===null){createTaskObj.strDueDate='';createTaskObj.intDueTimestamp=-1}
      else{createTaskObj.strDueDate=this.dT.Id(taskDueDate);createTaskObj.intDueTimestamp=this.dT.getUT(taskDueDate)};
      taskNotes===null?createTaskObj.strComment='':createTaskObj.strComment=taskNotes;
      this.logger.info(createTaskObj);
      const cTRes:any=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/task',{method:'put',data:createTaskObj,serializer:'json',timeout:20,responseType:'json'});
      console.log(cTRes);
      const status:number=cTRes.status;const error:any=cTRes.error;const data:any=cTRes.data;
      if(status===200){this.logger.info('[DeputyApi|createTask] (SUCCESS): '+status+' - Added Task Successfully');return Promise.resolve({result:true,data:data})}
      else{this.logger.info('[DeputyApi|createTask] (ERROR): '+error);return Promise.resolve({result:false,data:error})}
    }catch(cTErr){this.logger.info(cTErr)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async deleteTask(taskId:number):Promise<any> { this.logger.info('[DeputyApi|deleteTask] ('+taskId+')...');
    const delTOpts:any={method:'delete',serializer:'json',timeout:20,responseType:'json'};
    try{
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/task/'+taskId,delTOpts);
      if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(dTErr){return Promise.resolve({result:false,data:dTErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async reorderTask(myEmpId:number,taskObj:any):Promise<any> { this.logger.info('[DeputyApi|reorderTask] (myTasksToDoObj)...');
    let roData:any={'intUserResponsible':myEmpId,'strQuestion':taskObj.Question,'intSortOrder':taskObj.SortOrder,'strDate':taskObj.Date,'intUserEntry':taskObj.UserEntry,'intTsCompleted':-1};
    if(taskObj.DueDate!==''&&taskObj.DueDate!==null&&taskObj.DueDate!==undefined&&taskObj.DueDate!==-1){roData['strDueDate']=taskObj.DueDate}else{roData['strDueDate']=''};
    if(taskObj.Comment!==''&&taskObj.Comment!==null&&taskObj.Comment!==undefined&&taskObj.Comment!==-1){roData['strComment']=taskObj.Comment}else{roData['strComment']=''};
    if(taskObj.DueTimestamp!==''&&taskObj.DueTimestamp!==null&&taskObj.DueTimestamp!==undefined&&taskObj.DueTimestamp!==-1){roData['intDueTimestamp']=taskObj.DueTimestamp}else{roData['intDueTimestamp']=-1};
    const roTOpts:any={method:'put',data:roData,serializer:'json',timeout:20,responseType:'json'};
    try{
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/task/'+taskObj.Id,roTOpts);
      if(status===200){return Promise.resolve({result:true,data:taskObj})}else{return Promise.resolve({result:false,data:error})}
    }catch(uoErr){console.log(uoErr);return Promise.resolve({result:false,data:uoErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async doTask(taskId:number,assignedTo:number):Promise<any> { this.logger.info('[DeputyApi|doTask] ('+taskId+')...');
    const myId:number=(await this.storeServ.getObject(this.uUK+'MeData')).EmployeeId;let mOrS:string;assignedTo===myId?mOrS='my':mOrS='supervise';
    const dTOpts:any={method:'post',data:{'intUserPerformTaskId':myId},serializer:'json',timeout:20,responseType:'json'};
    try { 
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+mOrS+'/task/'+taskId+'/do',dTOpts);
      if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(dTErr){return Promise.resolve({result:false,data:dTErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async undoTask(taskId:number,assignedTo:number):Promise<any> { this.logger.info('[DeputyApi|undoTask] ('+taskId+')...');
    const myId:any=(await this.storeServ.getObject(this.uUK+'MeData')).EmployeeId;let mOrS:string;assignedTo===myId?mOrS='my':mOrS='supervise';
    const udTOpts:any={method:'post',data:{'intUserPerformTaskId':myId},serializer:'json',timeout:20,responseType:'json'};
    try {
      const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+mOrS+'/task/'+taskId+'/undo',udTOpts);
      if(status===200){return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(udTErr){console.log(udTErr);return Promise.resolve({result:false,data:udTErr})} 
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
///// NEWS/MEMOS
////////////////////////////////////////////////////////////////////////////////////////////////////
  async postMemo(showFrom:Date|null,active:boolean|null,showTill:Date|null,title:string|null,content:string,fileId:number|null,url:string|null,reqConfirm:boolean):Promise<any> {
    let pMObj:any={ShowFrom:'',Active:true,ShowTill:'',Title:'',Content:content,Type:1,File:-1,Url:'',ConfirmText:''};
    showFrom!==null?pMObj.ShowFrom=showFrom:pMObj.ShowFrom=new Date();
    active!==null?pMObj.Active=active:pMObj.Active=true;
    showTill!==null?pMObj.ShowTill=showTill:pMObj.ShowTill='';
    title!==null?pMObj.Title=title:pMObj.Title='';
    fileId!==null?pMObj.File=fileId:pMObj.File=-1;
    url!==null?pMObj.Url=url:pMObj.Url='';
    reqConfirm?pMObj.ConfirmText='dpRequireConfirmation':pMObj.ConfirmText='';
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/memo',{method:'put',data:pMObj,serializer:'json',timeout:20,responseType:'json'});
    if(status===200){return Promise.resolve(data)}else{this.logger.info('[DeputyApi|postMemo] (ERROR): '+error);return Promise.reject(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async postComment(memoId:number,feed:boolean|null,ignorePerms:boolean|null,comment:string):Promise<any> {
    let pCObj:any={Orm:'DeputecMemo',RecId:memoId,InFeed:feed,IgnorePermission:ignorePerms,Comment:comment};
    const {status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'supervise/comment',{method:'put',data:pCObj,serializer:'json',timeout:20,responseType:'json'});
    if(status===200){return Promise.resolve(data)}else{this.logger.info('[DeputyApi|postComment] (ERROR): '+error);return Promise.reject(error)}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getDBBUTS():Promise<any> { this.logger.info('[DeputyApi|getDBBUTS] ()...');
    const {status,data} = await this.shttp.sendRequest('https://zer0ne.dev/sheriff/up/'+this.uUK+'dbSQLite.txt',{method:'get',timeout:20,responseType:'text'});
    const msTS:number=Number(data);const ts:number=Math.floor(msTS/1000);const tsD:Date=this.dT.Dut(ts);
    if(status===200){return Promise.resolve(tsD)}else{return Promise.resolve('error')}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
///// PROFILE
////////////////////////////////////////////////////////////////////////////////////////////////////
  async upProfilePhoto(ulPhotoObj:any):Promise<any> { this.logger.info('[Deputy|upProfilePhoto] ()...');
    return Promise.resolve({result:true})
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getCAProfileObs():Promise<any> {
    try{const{status,data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'my/contactaddress/all',{method:'get',serializer:'json',timeout:20,responseType:'json'});
    if(status===200){const gPObsRes=data;let foundObIds:any={};
      if(gPObsRes.hasOwnProperty('MainAddressObject')){foundObIds['address']={id:gPObsRes.MainAddressObject.Id}}else{foundObIds['address']={id:0}}
      if(gPObsRes.hasOwnProperty('ContactObject')){foundObIds['contact']={id:gPObsRes.ContactObject.Id}}else{foundObIds['contact']={id:0}};
      if(gPObsRes.hasOwnProperty('EmergencyContactAddressObject')){foundObIds['emergency']={id:gPObsRes.EmergencyContactAddressObject.Id}}else{foundObIds['emergency']={id:0}};
      for(const[key] of Object.entries(foundObIds)){const oKey:string=key.toString();const oId:number=Number(foundObIds[oKey]['id']);
        if(oId>0){
          let resEP:string;if(oKey==='address'||oKey==='emergency'){resEP='Address'}else{resEP='Contact'};
          try{const CARec:any=await this.shttp.sendRequest(this.Client.apiUrl+'resource/'+resEP+'/'+oId.toString(),{method:'get',serializer:'json',timeout:20,responseType:'json'});if(CARec.status===200){foundObIds[oKey]['data']=CARec.data}else{foundObIds[oKey]['data']=null}}catch(gCARecErr){foundObIds[oKey]['data']=null}
        }else{foundObIds[oKey]['data']=null}
      };
      return Promise.resolve({result:true,data:foundObIds})}else{return Promise.resolve({result:false,data:error})}}
    catch(gPOIdsErr){return Promise.resolve({result:false,data:gPOIdsErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async updateCAProfileObs(newObs:any):Promise<any> { this.logger.info('[Deputy|updateCAProfileObs] ()...');
    const getChckPtyName=(obKeyName:string):string=>{if(obKeyName==='address'){return 'MainAddressObject'}else if(obKeyName==='contact'){return 'ContactObject'}else{return 'EmergencyContactAddressObject'}};
    let updatedObs:any={};
    for(const[key,value] of Object.entries(newObs)){const newKey:string=key.toString();const newId:string=value['Id'].toString();const newData:any=value;
      let resEP:string;if(newKey==='address'||newKey==='emergency'){resEP='Address'}else{resEP='Contact'};
      try{const upCARec:any=await this.shttp.sendRequest(this.Client.apiUrl+'resource/'+resEP+'/'+newId,{method:'put',data:newData,serializer:'json',timeout:20,responseType:'json'});
      if(upCARec.status===200){const newCARecDataStr:string=JSON.stringify(upCARec.data);
        try{const chckMyCA:any=await this.shttp.sendRequest(this.Client.apiUrl+'my/contactaddress/all',{method:'get',serializer:'json',timeout:20,responseType:'json'});
          if(chckMyCA.status===200){const chckPtyName:string=getChckPtyName(newKey);const newMyCAData:any=chckMyCA.data[chckPtyName];const newMyCADataStr:string=JSON.stringify(newMyCAData);
            if(newMyCADataStr===newCARecDataStr){updatedObs[newKey]={result:true,data:upCARec.data};return Promise.resolve(updatedObs)}
            else{updatedObs[newKey]={result:false,data:'my/contactaddress Object !== resource/Contact Object.'};return Promise.resolve(updatedObs)}
          }else{updatedObs[newKey]={result:false,data:chckMyCA.error};return Promise.resolve(updatedObs)}
        }catch(chckMyCAErr){updatedObs[newKey]={result:false,data:chckMyCAErr};return Promise.resolve(updatedObs)}
      }else{updatedObs[newKey]={result:false,data:upCARec.error};return Promise.resolve(updatedObs)}}
      catch(upCARecErr){console.log(upCARecErr);console.log(JSON.stringify(upCARecErr));updatedObs[newKey]={result:false,data:upCARecErr};return Promise.resolve(updatedObs)}
    };
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
///// PAYMENT
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getPayPeriod():Promise<any>{ this.logger.info('[Deputy|getPayPeriod] ()...');
    try{const{data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/PayPeriod',{method:'get',serializer:'json',timeout:20,responseType:'json'});
      if(!error){return Promise.resolve({result:true,data:data[0]})}else{return Promise.resolve({result:false,data:error})}
    }catch(gPPErr){return Promise.resolve({result:false,data:gPPErr})}
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async getEmpPayCycle():Promise<any>{ this.logger.info('[Deputy|getPayPeriod] ()...');
    const getObj:any={"search":{"s1":{"field":"EmployeeId","type":"eq","data":"421"}},"sort":{"Id":"desc"}};
    try{const{data,error}=await this.shttp.sendRequest(this.Client.apiUrl+'resource/EmployeePaycycle/QUERY',{method:'post',data:getObj,serializer:'json',timeout:20,responseType:'json'});
      if(!error){
        return Promise.resolve({result:true,data:data})}else{return Promise.resolve({result:false,data:error})}
    }catch(gEPPCErr){return Promise.resolve({result:false,data:gEPPCErr})}
  }
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}
