import { DeputyService } from './deputy.service';
import { StorageService } from './storage.service';
import { DateTimeService } from './datetime.service';
import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { EventsService } from './events.service';
import { Network } from '@capacitor/network';
import { AppUserSettings } from './appTypes';
const myls = localStorage;
///////////////////////////////////////////////////////////////////////////
@Injectable()
///////////////////////////////////////////////////////////////////////////
export class DetailService {
///////////////////////////////////////////////////////////////////////////
//// DATABASES //////////////////////
  pS:string='🔌';
  mySQLReady:boolean=false;
  // User DB ------------------------
  isUserConnOpen:boolean=false;
  uDBIsOpen:boolean=false;
  uDBSetupDone:boolean|null=null;
  uDBTables:string[]=[];
  uDBWasImported:boolean=null;
  // Auth DB ------------------------
  isAuthConnOpen:boolean=false;
  aDBIsOpen:boolean=false;
  aDBSetupDone:boolean|null=null;
  aDBTables:string[]=[];
//// NAV/PAGES //////////////////////
  FRSetupDone:boolean|null=null;
  authLogout:boolean=false;
  shouldSave:any={value:false,data:null};
  doneSessionProfile:boolean=false;
  doneInitProfile:boolean=false;
//// APP GVARS ////////////////////
  hasNetConn:boolean=null;
  // ME Vars ------------------------
  meObj:any=null;
  meEmpId:number=null;
  workName:string=null;
  workCode:string=null;
  meName:string=null;
  meFName:string=null;
  meLName:string=null;
  meEmail:string=null;
  mePhone:string=null;
  inProgressTS:boolean=null;
  memosToConf:any[]=[];
  meDefaultOpUnit:number=null;
  mePermissions:any[]=[];
  // MY Vars ------------------------
  myObj:any=null;
  wpId:number=null;
  workAreas:any[]=null;
  workColor:string=null;
  incBright:boolean=null;
  pplArr:any[]=[];
  // AVAS ---------------------------
  meAva:string=null;
  workAva:string=null;
//// APP SETTINGS ///////////////////
  appSettings:AppUserSettings|null=null;
///////////////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private storeServ: StorageService,
    private deputy: DeputyService,
    private evServ: EventsService,
    private dT:DateTimeService
  ) { }
///////////////////////////////////////////////////////////////////////////
///// DATABASES
///////////////////////////////////////////////////////////////////////////
  setMySQLReady(tf:boolean){this.mySQLReady=tf;this.logger.info(this.pS+' [Detail|mySQLReady] (SET) to: '+tf)}
  getMySQLReady():boolean{return this.mySQLReady};
  //-----------------------------------------------------------------------
  // User Database
  //-----------------------------------------------------------------------
  async setUDBWasImported(tf:boolean):Promise<boolean>{
    this.uDBWasImported=tf;
    this.storeServ.setItem(this.deputy.uUK+'UDBWasImported',String(tf));
    this.logger.info(this.pS+' [Detail|uDBWasImported] (SET) to: '+tf);
    return Promise.resolve(true);
  };
  async getUDBWasImported():Promise<boolean>{
    if(this.uDBWasImported!==null){return Promise.resolve(this.uDBWasImported)}
    else{
      const storeRes:any=await this.storeServ.getItem(this.deputy.uUK+'UDBWasImported');
      if(storeRes){
        const storeVal:boolean=Boolean(JSON.parse(storeRes));
        this.uDBWasImported=storeVal;
        return Promise.resolve(storeVal);
      }else{return Promise.resolve(false)}
    }
  };
  //-----------------------------------------------------------------------
  async setUDBSetupDone(tf:boolean):Promise<boolean>{
    this.uDBSetupDone=tf;
    this.storeServ.setItem(this.deputy.uUK+'UDBSetupDone',String(tf));
    this.logger.info(this.pS+' [Detail|uDBSetupDone] (SET) to: '+tf);
    return Promise.resolve(true);
  };
  async getUDBSetupDone():Promise<boolean>{
    if(this.uDBSetupDone!==null){return Promise.resolve(this.uDBSetupDone)}
    else{
      const storeStr:string=await this.storeServ.getItem(this.deputy.uUK+'UDBSetupDone');
      if(storeStr!==null&&storeStr!==undefined&&typeof storeStr==='string'){
        const storeVal:boolean=Boolean(JSON.parse(storeStr));
        this.uDBSetupDone=storeVal;
        return Promise.resolve(this.uDBSetupDone)
      }else{return Promise.resolve(false)}
    }
  }
  //-----------------------------------------------------------------------
  setUDBTables(udbTables:string[]){this.uDBTables=udbTables;this.logger.info(this.pS+' [DBDetail|userDBTables] (SET)')}
  getUDBTables():string[]{return this.uDBTables}
  //-----------------------------------------------------------------------
  setIsUserConnOpen(tf:boolean):Promise<boolean>{
    this.isUserConnOpen=tf;this.logger.info(this.pS+' [Detail|IsUserConnOpen] (SET) to: '+tf);
    if(tf===false){myls.setItem('lrConnClosed','true');this.logger.info('[+ADD] lrConnClosed (lS)');return Promise.resolve(true)}
    else{myls.removeItem('lrConnClosed');this.logger.info('[-] lrConnClosed (lS)')}
  }
  getIsUserConnOpen():boolean{return this.isUserConnOpen};
  //-----------------------------------------------------------------------
  setUDBIsOpen(tf:boolean):Promise<boolean> {
    this.uDBIsOpen=tf;this.logger.info(this.pS+' [Detail|uDBIsOpen] (SET) to: '+tf);
    if(tf===false){myls.setItem('lrUDBClosed','true');this.logger.info('[+ADD] lrUDBClosed (lS)');return Promise.resolve(true)}
    else{myls.removeItem('lrUDBClosed');this.logger.info('[-REM] lrUDBClosed (lS)');return Promise.resolve(true)}
  }
  getUDBIsOpen():boolean{return this.uDBIsOpen};
  //-----------------------------------------------------------------------
  // Auth Database
  //-----------------------------------------------------------------------
  setADBSetupDone(tf:boolean):Promise<boolean>{
    this.aDBSetupDone=tf;
    this.storeServ.setItem(this.deputy.uUK+'ADBSetupDone',String(tf));
    this.logger.info(this.pS+' [Detail|aDBSetupDone] (SET) to: '+tf);
    return Promise.resolve(true);
  }
  async getADBSetupDone():Promise<boolean>{
    if(this.aDBSetupDone!==null&&typeof this.aDBSetupDone==='boolean'){return Promise.resolve(this.aDBSetupDone)}
    else{
      const storeStr:string=await this.storeServ.getItem(this.deputy.uUK+'ADBSetupDone');
      if(storeStr!==null&&storeStr!==undefined&&typeof storeStr==='string'){
        const storeVal:boolean=Boolean(JSON.parse(storeStr));
        this.aDBSetupDone=storeVal;
        return Promise.resolve(this.aDBSetupDone)
      }else{return Promise.resolve(false)}
    }
  }
  //-----------------------------------------------------------------------
  setADBTables(adbTables:string[]){this.aDBTables=adbTables;this.logger.info(this.pS+' [DBDetail|authDBTables] (SET)')}
  getADBTables():string[]{return this.aDBTables}
  //-----------------------------------------------------------------------
  setIsAuthConnOpen(tf:boolean):Promise<boolean>{
    this.isAuthConnOpen=tf;this.logger.info(this.pS+' [Detail|IsAuthConnOpen] (SET) to: '+tf);
    if(tf===false){myls.setItem('lrAuthConnClosed','true');this.logger.info('[+ADD] lrAuthConnClosed (lS)');return Promise.resolve(true)}
    else{myls.removeItem('lrAuthConnClosed');this.logger.info('[-] lrConnAuthClosed (lS)');return Promise.resolve(true)}
  }
  getIsAuthConnOpen():boolean{return this.isAuthConnOpen};
  //-----------------------------------------------------------------------
  setADBIsOpen(tf:boolean):Promise<any>{
    this.aDBIsOpen=tf;this.logger.info(this.pS+' [Detail|aDBIsOpen] (SET) to: '+tf);
    if(tf===false){myls.setItem('lrADBClosed','true');this.logger.info('[+ADD] lrADBClosed (lS)');return Promise.resolve(true)}
    else{myls.removeItem('lrADBClosed');this.logger.info('[-REM] lrADBClosed (lS)');return Promise.resolve(true)}
  }
  getADBIsOpen():boolean{return this.aDBIsOpen};
//-----------------------------------------------------------------------
// FIRE CUSTOM TOKEN
//-----------------------------------------------------------------------

///////////////////////////////////////////////////////////////////////////
///// ME/MY/PPL/WORK
///////////////////////////////////////////////////////////////////////////
  async setMe(meO:any|null):Promise<boolean>{
    const setMeVars=(mO:any):Promise<boolean>=>{
      this.meObj=mO;
      this.meEmpId=this.meObj.EmployeeId;
      this.workName=this.meObj.CompanyObject.CompanyName;
      this.workCode=this.meObj.CompanyObject.Code;
      this.meName=this.meObj.Name;
      this.meFName=this.meObj.FirstName;
      this.meLName=this.meObj.LastName;
      this.meEmail=this.meObj.PrimaryEmail;
      this.deputy.userEmail=this.meEmail;
      this.mePhone=this.meObj.PrimaryPhone;
      this.meObj.InProgressTS===null||!this.meObj.InProgressTS||this.meObj.InProgressTS<1?this.inProgressTS=false:this.inProgressTS=true;
      this.memosToConf=this.meObj.MemosToConfirm;
      this.meObj.OPS.length>0?this.meDefaultOpUnit=this.meObj.OPS[0]:this.meDefaultOpUnit=null;
      this.mePermissions=this.meObj.Permissions;
      this.storeServ.setObject(this.deputy.uUK+'MeData',this.meObj)
      return Promise.resolve(true);
    };
    if(meO!==null){await setMeVars(meO);return Promise.resolve(true)}
    else{
      const gotMeO:any|null=await this.getMe();
      if(gotMeO!==null){await setMeVars(gotMeO);return Promise.resolve(true)}
      else{return Promise.resolve(false)}
    };
  };
  async getMe():Promise<any>{
    if(this.meObj!==null){return Promise.resolve(this.meObj)}
    else{
      const apiMeRes:any=await this.deputy.getDetailMe();
      if(apiMeRes.result){await this.setMe(apiMeRes.data);return Promise.resolve(apiMeRes.data)}
      else{
        const storeMeObj:any=await this.storeServ.getObject(this.deputy.uUK+'MeData');
        if(storeMeObj!==null){await this.setMe(storeMeObj);return Promise.resolve(storeMeObj)}
        else{return Promise.resolve(false)}
      }
    }
  };
  //-----------------------------------------------------------------------
  async setMy(myO:any|null):Promise<boolean>{
    const setMyVars=(mO:any):Promise<boolean>=>{
      const checkWC=(color:string):boolean=>{return this.evServ.isConOK('#121212',color)};
      this.myObj=mO;this.workAreas=this.myObj.Department;
      if(this.myObj.ColorThemeCode.length>0&&this.myObj.ColorThemeCode.includes('#')){this.workColor=this.myObj.ColorThemeCode;checkWC(this.workColor)?this.incBright=false:this.incBright=true}
      else{this.workColor='#848484'};
      this.storeServ.setObject(this.deputy.uUK+'MySetupData',this.myObj);
      return Promise.resolve(true);
    };
    if(myO!==null){await setMyVars(myO);return Promise.resolve(true)}
    else{
      const gotMyO:any|null=await this.getMy();
      if(gotMyO!==null){await setMyVars(gotMyO);return Promise.resolve(true)}
      else{return Promise.resolve(false)}
    };
  };
  async getMy():Promise<any>{
    if(this.myObj!==null){return Promise.resolve(this.myObj)}
    else{
      const apiMyRes:any=await this.deputy.getDetailMy();
      if(apiMyRes.result){await this.setMy(apiMyRes.data);return Promise.resolve(apiMyRes.data)}
      else{
        const storeMyObj:any=await this.storeServ.getObject(this.deputy.uUK+'MySetupData');
        if(storeMyObj){await this.setMy(storeMyObj);return Promise.resolve(storeMyObj)}
        else{return Promise.resolve(null)}
      }
    }
  };
  //-----------------------------------------------------------------------
  async setPpl(pplArr:any[]|null):Promise<boolean>{
    const setPplVars=(pA:any[]):Promise<boolean>=>{this.pplArr=pA;this.storeServ.setObject(this.deputy.uUK+'MyColleagues',this.pplArr);return Promise.resolve(true)};
    if(pplArr!==null){await setPplVars(pplArr);return Promise.resolve(true)}
    else{
      const gotPplO:any|null=await this.getPpl();
      if(gotPplO!==null){await setPplVars(gotPplO);return Promise.resolve(true)}
      else{return Promise.resolve(false)}
    }
  };
  async getPpl():Promise<any>{
    if(this.pplArr.length>0){return Promise.resolve(this.pplArr)}
    else{
      const apiPplRes:any=await this.deputy.getDetailPpl();
      if(apiPplRes.result){await this.setPpl(apiPplRes.data);return Promise.resolve(apiPplRes.data)}
      else{
        const storePpl:any=await this.storeServ.getObject(this.deputy.uUK+'MyColleagues');
        if(storePpl!==null){await this.setPpl(storePpl);return Promise.resolve(storePpl)}
        else{return Promise.resolve(null)}
      }
    }
  }
  //------------------------------------------------------------------------
  async setAvas(avasO:any|null){
    const setAvasVars=(aO:any):Promise<boolean>=>{
      this.meAva=aO.me;this.workAva=aO.work;this.storeServ.setItem(this.deputy.uUK+'meAvatar',this.meAva);this.storeServ.setItem(this.deputy.uUK+'workAvatar',this.workAva);return Promise.resolve(true)
    };
    if(avasO!==null){
      await setAvasVars(avasO);this.evServ.publish('avasDone',true)
    }else{
      const gotAvasO:any=await this.getAvas();
      if(gotAvasO!==null){await setAvasVars(gotAvasO);this.evServ.publish('avasDone',true)}
      else{this.evServ.publish('avasDone',false)}
    }
  };
  getAvas():Promise<any>{
    if(this.meAva!==null&&this.workAva!==null){return Promise.resolve({me:this.meAva,work:this.workAva})}
    else{
      const dsAvaSub=this.evServ.subscribe('dlConvAvasFinished',async avaRes=>{
        if(avaRes.result){await this.setAvas(avaRes.data);dsAvaSub.unsubscribe();return Promise.resolve(avaRes.data)}
        else{
          let storeAvas:any={me:'./../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png',work:'./../../assets/img/icon.png'}
          const storeMeAva:any=await this.storeServ.getItem(this.deputy.uUK+'meAvatar');
          if(storeMeAva){storeAvas.me=storeMeAva};
          const storeWorkAva:any=await this.storeServ.getItem(this.deputy.uUK+'workAvatar');
          if(storeWorkAva){storeAvas.work=storeWorkAva};
          await this.setAvas(storeAvas);
          dsAvaSub.unsubscribe();
          return Promise.resolve(storeAvas)
        }
      });
      this.deputy.dlConvertMeWorkAvas()
    }
  }
  //------------------------------------------------------------------------
  setProfileLastSync(){const nowUTS:number=this.dT.gUT();const utsStr:string=nowUTS.toString();this.storeServ.setItem(this.deputy.uUK+'ProfileSync',utsStr)}
  async getProfileLastSync():Promise<number>{const plsRes:any=await this.storeServ.getItem(this.deputy.uUK+'ProfileSync');if(plsRes!==null){return Promise.resolve(Number(plsRes))}else{return Promise.resolve(0)}}
///////////////////////////////////////////////////////////////////////////
///// SETTINGS
///////////////////////////////////////////////////////////////////////////
  async setSettings(settingsObj:AppUserSettings):Promise<boolean>{
    this.appSettings=settingsObj;
    this.storeServ.setObject(this.deputy.uUK+'AppSettings',settingsObj);
    return Promise.resolve(true);
  };
  async getSettings():Promise<AppUserSettings|null>{
    if(this.appSettings!==null){return Promise.resolve(this.appSettings)}
    else{
      const storeSettRes:any=await this.storeServ.getObject(this.deputy.uUK+'AppSettings');
      if(storeSettRes){this.appSettings=storeSettRes;return Promise.resolve(this.appSettings)}
      else{return Promise.resolve(null)}
    } 
  }
///////////////////////////////////////////////////////////////////////////
///// NAV/PAGES/CONNECTION
///////////////////////////////////////////////////////////////////////////
  setHasNetConn(tf:boolean){this.hasNetConn=tf;let tfI:string;tf?tfI='🟢':tfI='🔴';this.logger.info('[Detail|setHasNetConn] (SET) to: 🔌'+tfI+' - '+tf)};
  async getHasNetConn():Promise<boolean>{
    if(this.hasNetConn===null){
      const tf:boolean=(await Network.getStatus()).connected;
      this.hasNetConn=tf;
      Network.removeAllListeners();
      Network.addListener('networkStatusChange',newStatus=>{this.hasNetConn=newStatus.connected;this.evServ.publish('globalHasNetConn',this.hasNetConn)});
      return Promise.resolve(this.hasNetConn);
    }else{return Promise.resolve(this.hasNetConn)}
  };
  //-----------------------------------------------------------------------
  setAuthLogout(tf:boolean){this.authLogout=tf;this.logger.info('[Detail|authLogout] (SET) to: '+tf)}
  getAuthLogout():boolean{return this.authLogout}
  //-----------------------------------------------------------------------
  async setFRSetupDone(tf:boolean):Promise<boolean>{
    this.FRSetupDone=tf;
    this.storeServ.setItem(this.deputy.uUK+'FRSetupDone',String(tf));
    this.logger.info('[Detail|uFRSetupDone] (SET) to: '+tf);
    return Promise.resolve(true);
  };
  async getFRSetupDone():Promise<boolean>{
    if(this.FRSetupDone!==null){return Promise.resolve(this.FRSetupDone)}
    else{
      const storeStr:string=await this.storeServ.getItem(this.deputy.uUK+'FRSetupDone');
      if(storeStr){const storeVal:boolean=Boolean(JSON.parse(storeStr));this.FRSetupDone=storeVal;return Promise.resolve(this.FRSetupDone)}
      else{return Promise.resolve(false)}
    }
  }
  //-----------------------------------------------------------------------
  async setWpId(wpId:number):Promise<boolean>{
    this.wpId=wpId;
    this.storeServ.setItem(this.deputy.uUK+'WPId',String(wpId));
    this.logger.info('[Detail|wpId] (SET) to: '+wpId);
    return Promise.resolve(true);
  };
  async getWpId():Promise<number>{
    if(this.wpId!==null){return Promise.resolve(this.wpId)}
    else{
      const storeStr:string=await this.storeServ.getItem(this.deputy.uUK+'WPId');
      if(storeStr){const storeVal:number=Number(storeStr);this.wpId=storeVal;return Promise.resolve(this.wpId)}
      else{return Promise.resolve(1)}
    }
  }
  //-----------------------------------------------------------------------
  setShouldSave(tf:boolean,d:any){this.shouldSave={value:tf,data:d};this.logger.info('[Detail|setShouldSave] (SET) to: '+tf+' with data property: '+d)}
  getShouldSave():any{return this.shouldSave}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
}
