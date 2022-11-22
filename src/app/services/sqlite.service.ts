import { AppUserSettings } from './appTypes';
import { DateTimeService } from './datetime.service';
import { DetailService } from './detail.service';
import { DefaultDB, AuthDB } from './baseDB';
import { myEndPointArr, InsertTypeMap, Resources, frEPStore } from './baseDB';
import { dbTypes, pKeys } from './profileData';
import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection, capSQLiteSet, capSQLiteChanges, capSQLiteValues, capEchoResult, capSQLiteResult, JsonSQLite, Changes } from '@capacitor-community/sqlite';
import { EventsService } from './events.service';
import { DeputyService } from './deputy.service';
import { FileSystemService } from './filesystem.service';
import { StorageService } from './storage.service';
import { App } from '@capacitor/app';
import { NGXLogger } from 'ngx-logger';
import * as _ from 'lodash';
//////////////////////////////////////////////////////////////////////////////////////
@Injectable()
//////////////////////////////////////////////////////////////////////////////////////
export class SQLiteService {
  mySQL:SQLiteConnection;
  userDB:SQLiteDBConnection;  
  authDB:SQLiteDBConnection;
  userDBName:string;
  authDBName:string;
//////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private deputy:DeputyService,
    private storeServ:StorageService,
    private logger:NGXLogger,
    private dS:DetailService,
    private evServ:EventsService,
    private fsServ:FileSystemService,
    private dT:DateTimeService,
  ) { }
///////////////////////////////////////////////////////////////////////////////////////
  doInitSQLServ():Promise<boolean> { this.logger.info('[sqlServ|doInitServ] ()...');
    const sqlitePlugin:any=CapacitorSQLite;
    this.mySQL=new SQLiteConnection(sqlitePlugin);
    if(!this.dS.getMySQLReady()){this.dS.setMySQLReady(true)};
    this.logger.info('[sqlServ|doInitSQLServ] ✈️ (SUCCESS): "mySQL" SQLiteConnection Created.');
    return Promise.resolve(true)
  }
//////////////////////////////////////////////////////////////////////////////////////
  async lrQC():Promise<boolean> { this.logger.info('[sqlServ|lrQC] ⚡ ()...');
    const isUserConnO:boolean=(await this.mySQL.isConnection(this.deputy.uUK+'db')).result;
    const isAuthConnO:boolean=(await this.mySQL.isConnection(this.deputy.uUK+'auth')).result; 
    if(isUserConnO){
      const isUserDBO:boolean=(await this.userDB.isDBOpen()).result;
      if(isUserDBO){this.userDB.close()};
      await this.mySQL.closeConnection(this.deputy.uUK+'db');
    };
    if(isAuthConnO){ 
      const isAuthDBO:boolean=(await this.authDB.isDBOpen()).result;
      if(isAuthDBO){this.authDB.close()};
      await this.mySQL.closeConnection(this.deputy.uUK+'auth');
    };
    this.mySQL.closeAllConnections();
    await this.dS.setIsUserConnOpen(false);
    await this.dS.setIsAuthConnOpen(false);
    await this.dS.setADBIsOpen(false);
    await this.dS.setUDBIsOpen(false);
    return Promise.resolve(true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async createUserDBConn(userDBName:string,setupDone:boolean):Promise<void> { this.logger.info('[sqlServ|createUserDBConn] ✨🧑 ('+userDBName+','+setupDone+')...');
    if(this.mySQL==null||!this.dS.getMySQLReady()){return Promise.reject(new Error('☠️ (ERROR): "mySQL" NOT INITIALIZED.'))};
    try{
      if(!(await this.mySQL.isConnection(userDBName)).result){this.userDB=await this.mySQL.createConnection(userDBName,false,'no-encryption',1);this.userDBName=userDBName};
      if(!this.dS.getIsUserConnOpen()){await this.dS.setIsUserConnOpen(true)};
      if(!(await this.userDB.isDBOpen()).result){this.userDB.open()};
      if(!this.dS.getUDBIsOpen()){this.dS.setUDBIsOpen(true)};
      if(!setupDone){
        const createUDB:boolean=await this.cInitTbls('user');
        if(createUDB){this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (✔️SUCCESS): Table Schema & Index Created.')}
        else{this.evServ.publish('uDBReady',false);return Promise.reject(new Error('[sqlServ|createUserDBConn] ✨🧑 (☠️ERROR): Create Schema/Index Failed'))};
        const cSyncT:number=(await this.userDB.createSyncTable()).changes.changes;
        if(cSyncT!==-1){this.userDB.setSyncDate(this.dT.syncStr(new Date()));this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (✔️SUCCESS): ⌚SyncTable Created & Set.')} 
        else{this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (❌ERROR): ⌚SyncTable NOT Created/Set.')};
        const insValsUDB:boolean=await this.cInitTblVals();
        if(insValsUDB){this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (✔️SUCCESS): Initial Table Values Inserted.')}
        else{this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (❌ERROR): Initial Table Values NOT Inserted.')};
        if(!await this.dS.getUDBSetupDone()){await this.dS.setUDBSetupDone(true)};
        this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (✅SUCCESS): [NEW] USER DB CONNECTION CREATED >>> ('+userDBName+')');
      }else{
        this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (✅SUCCESS): [EXISTING] USER DB CONNECTION CREATED >>> ('+userDBName+')');
        if(!await this.dS.getUDBSetupDone()){await this.dS.setUDBSetupDone(true)};
      };
      const udbTbls:string[]=await this.listUDBTables();
      this.dS.setUDBTables(udbTbls);
      this.evServ.publish('uDBReady',true)
    }catch(cUDBCErr){
      this.logger.info('[sqlServ|createUserDBConn] ✨🧑 (☠️ERROR): '+JSON.stringify(cUDBCErr));
      this.evServ.publish('uDBReady',false);
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async createAuthDBConn(authDBName:string,setupDone:boolean,valsObj:any|null):Promise<void> { this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 ('+authDBName+','+setupDone+')...');
    if(this.mySQL==null||!this.dS.getMySQLReady()){return Promise.reject(new Error('☠️ (ERROR): "mySQL" NOT INITIALIZED.'))};
    try{
      if(!setupDone){
        await this.mySQL.createConnection(authDBName,false,'no-encryption',1);
        const hasSecret:boolean=(await this.mySQL.isSecretStored()).result;
        if(hasSecret){this.mySQL.changeEncryptionSecret('sheriff is boss','sheriff is boss');this.logger.info('[sqlServ|createAuthDBConn] 🔐 Secret [CHANGED] - OK.')}
        else{this.mySQL.setEncryptionSecret('sheriff is boss');this.logger.info('[sqlServ|createAuthDBConn] 🔐 Secret [UPDATED] - OK.')};
        this.authDB=await this.mySQL.createConnection(authDBName,true,'secret',1);this.authDBName=authDBName;
        if(!this.dS.getIsAuthConnOpen()){await this.dS.setIsAuthConnOpen(true)};
        if(!(await this.authDB.isDBOpen()).result){this.authDB.open()};
        if(!this.dS.getADBIsOpen()){await this.dS.setADBIsOpen(true)};
        const createADB:boolean=await this.cInitTbls('auth');
        if(createADB){this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 (✔️SUCCESS): Table Schema & Index Created.')}
        else{this.evServ.publish('aDBReady',false);return Promise.reject(new Error('[sqlServ|createAuthDBConn] ✨🔑 (☠️ERROR): Create Schema/Index Failed'))};
        const cSyncT:number=(await this.authDB.createSyncTable()).changes.changes;
        if(cSyncT!==-1){this.authDB.setSyncDate(this.dT.syncStr(new Date()));this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 (✔️SUCCESS): ⌚SyncTable Created & Set.')} 
        else{this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 (❌ERROR): ⌚SyncTable NOT Created/Set.')};
        const insADBIRes:boolean=await this.setADBItem(valsObj.up,valsObj.dp);
        if(insADBIRes){this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 (✔️SUCCESS): Initial Auth Creds Inserted.')}
        else{this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 (❌ERROR): Initial Auth Creds NOT Inserted.')};
        if(!(await this.dS.getADBSetupDone())){await this.dS.setADBSetupDone(true)};
        const adbTbls:string[]=await this.listADBTables();
        this.dS.setADBTables(adbTbls);
        this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 (✅SUCCESS): [NEW] AUTH DB CONNECTION CREATED >>> ('+authDBName+')');
        this.evServ.publish('aDBReady',true)
      }else{
        if(!(await this.dS.getADBSetupDone())){await this.dS.setADBSetupDone(true)};
        if(!(await this.mySQL.isConnection(authDBName)).result){this.authDB=await this.mySQL.createConnection(authDBName,true,'secret',1);this.authDBName=authDBName};
        if(!this.dS.getIsAuthConnOpen()){await this.dS.setIsAuthConnOpen(true)};
        if(!(await this.authDB.isDBOpen()).result){this.authDB.open()};
        if(!this.dS.getADBIsOpen()){this.dS.setADBIsOpen(true)};
        const adbTbls:string[]=await this.listADBTables();
        this.dS.setADBTables(adbTbls);
        this.logger.info('[sqlServ|createAuthDBConn] ✨🔑 (✅SUCCESS): [EXISTING] AUTH DB CONNECTION CREATED >>> ('+authDBName+')');
        this.evServ.publish('aDBReady',true);
      }
    }catch(cUDBCErr){
      this.logger.info('[sqlServ|createUserDBConn] ✨🔑 (☠️ERROR): '+JSON.stringify(cUDBCErr));
      this.evServ.publish('aDBReady',false);
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async cInitTblVals():Promise<boolean>{ this.logger.info('[sqlServ|cInitTblVals] 🛠️ ()...');
    let countrySet:capSQLiteSet[]=[];let stateSet:capSQLiteSet[]=[];
    const cValsArr:any[]=DefaultDB.tables.filter(t=>t.name==='countries')[0].values;const sValsArr:any[]=DefaultDB.tables.filter(t=>t.name==='states')[0].values;
    const cInsSQL:string='INSERT OR IGNORE INTO countries (Id,Code,CodeA3,Region,Active,SortOrder,Country,ZipValidatePreg,PhoneDisplayPreg,Creator,Created,Modified,last_modified) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    for(let i=0;i<cValsArr.length;i++){const cInsSet:capSQLiteSet={statement:cInsSQL,values:cValsArr[i]};countrySet.push(cInsSet)};
    const sInsSQL:string='INSERT OR IGNORE INTO states (Id,Country,Code,Active,SortOrder,State,Creator,Created,Modified,last_modified) VALUES (?,?,?,?,?,?,?,?,?,?)';
    for(let i=0;i<sValsArr.length;i++){const sInsSet:capSQLiteSet={statement:sInsSQL,values:sValsArr[i]};stateSet.push(sInsSet)};
    try{
      const consM=(r,c,t)=>{let rT,tT;r==='s'?rT='✔️SUCCESS':rT='❌ERROR';t==='c'?tT='COUNTRIES':tT='STATES';return this.logger.info('[sqlServ|cInitTbles] 🛠️ ('+rT+') '+tT+': changes='+c.c+'/lastId='+c.l)};
      const cSetRes:Changes=(await this.userDB.executeSet(countrySet)).changes;
      if(cSetRes.changes<0||cSetRes.lastId<0){consM('e',{c:cSetRes.changes,l:cSetRes.lastId},'c')}else{consM('s',{c:cSetRes.changes,l:cSetRes.lastId},'c')};
      const sSetRes:Changes=(await this.userDB.executeSet(stateSet)).changes;
      if(sSetRes.changes<0||sSetRes.lastId<0){consM('e',{c:sSetRes.changes,l:sSetRes.lastId},'s')}else{consM('s',{c:sSetRes.changes,l:sSetRes.lastId},'s')};
      return Promise.resolve(true);
    }catch(cITVErr){this.logger.info('[sqlServ|cInitTblVals] 🛠️ (☠️ERROR): '+cITVErr.message);return Promise.resolve(true)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async insDPTypeCheck(valArr:any[],typeArr:string[]):Promise<any[]> {
    if(valArr.length!==typeArr.length){return Promise.reject(new Error('Value Array Length !== Type Array Length!'))}else{
      let tVs:any[]=[];
      for(let i=0;i<valArr.length;i++){
        const rawV:any=valArr[i];const reqT:string=InsertTypeMap[typeArr[i].toLowerCase()];
        if(typeof rawV==='object'){if(rawV===null||rawV===undefined){reqT==='string'?tVs.push(String('')):tVs.push(Number(-1))}else{tVs.push(JSON.stringify(rawV))}}
        else if(typeof rawV==='boolean'){if(rawV){reqT==='string'?tVs.push(String('true')):tVs.push(Number(1))}else{reqT==='string'?tVs.push(String('false')):tVs.push(Number(0))}}
        else{reqT==='string'?tVs.push(String(rawV)):tVs.push(Number(rawV))}
      };
      return Promise.resolve(tVs);
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async insDPTblSet(resEPName:string,rawDPObjArr:any[]):Promise<boolean> { this.logger.info('[sqlServ|insDPTblVals] 🍄 ('+resEPName+')...');
    const tblN:string=Resources[resEPName];
    const setRowSQL:string=await this.insertItemsCMD(resEPName);
    let dpTblSet:capSQLiteSet[]=[];
    for(let i=0;i<rawDPObjArr.length;i++){const rawObj:any=rawDPObjArr[i];
      let rawRowVals:any[]=[];let setRowTypes:any[]=[];
      const dpTblSchema:any[]=DefaultDB.tables.filter(x=>x.name===tblN)[0].schema;
      for(let i=0;i<dpTblSchema.length;i++){rawRowVals.push(rawObj[dpTblSchema[i].column]);setRowTypes.push(dpTblSchema[i].value)};
      const setRowVals:any[]=await this.insDPTypeCheck(rawRowVals,setRowTypes);
      const sInsSet:capSQLiteSet={statement:setRowSQL,values:setRowVals};
      dpTblSet.push(sInsSet);
    };
    try{const dpSetRes:number=(await this.userDB.executeSet(dpTblSet)).changes.changes;
      if(dpSetRes!==-1){
        this.logger.info('[sqlServ|insDPTblSet] 🍄 (✔️SUCCESS): Inserted DPSet ('+tblN+') - OK!');
        await this.setSync(tblN);
        return Promise.resolve(true);
      }else{this.logger.info('[sqlServ|insDPTblSet] 🍄 (❌ERROR): Insert DPSet ('+tblN+') Failed (changes===-1)');return Promise.resolve(false)}
    }catch(cITVErr){this.logger.info('[sqlServ|cInitTblVals] 🍄 (☠️ERROR): '+JSON.stringify(cITVErr));return Promise.reject(new Error(JSON.stringify(cITVErr)))}
  }
//////////////////////////////////////////////////////////////////////////////////////
  cTblSchemaCMD(db:string,n:string):string{
    let dbTblData:any;db==='user'?dbTblData=DefaultDB.tables:dbTblData=AuthDB.tables;
    let c:string[]=[];
    const tS:any[]=dbTblData.filter(t=>t.name===n)[0].schema;
    for(let i=0;i<tS.length;i++){c.push(tS[i].column+' '+tS[i].value)};
    return 'CREATE TABLE IF NOT EXISTS '+n+' ('+c.join(',')+')'
  };
//////////////////////////////////////////////////////////////////////////////////////
  cTblIndexCMD(db:string,n:string):string{
    let dbTblData:any;db==='user'?dbTblData=DefaultDB.tables:dbTblData=AuthDB.tables;
    const tS:any[]=dbTblData.filter(t=>t.name===n)[0].schema;
    const pKColN:string=tS.filter(tCO=>tCO.value.includes('PRIMARY KEY'))[0].column;
    return 'CREATE INDEX IF NOT EXISTS dpuid_index_'+pKColN+' ON '+n+' ('+pKColN+')';
  }
//////////////////////////////////////////////////////////////////////////////////////
  async cInitTbls(db:string):Promise<boolean> { this.logger.info('[sqlServ|cInitTbles] 🛠️ ()...');
    let cTSchemaCMDs:string[]=[];let cTIndexCMDs:string[]=[];let dbTblData:any;let dbInst:SQLiteDBConnection;
    if(db==='user'){dbTblData=DefaultDB.tables;dbInst=this.userDB}else{dbTblData=AuthDB.tables;dbInst=this.authDB};
    for(let i=0;i<dbTblData.length;i++){const tN:string=dbTblData[i].name;cTSchemaCMDs.push(this.cTblSchemaCMD(db,tN));cTIndexCMDs.push(this.cTblIndexCMD(db,tN))};
    const cInitTblsCMD:string=cTSchemaCMDs.concat(cTIndexCMDs).join(';\n');
    try{
      const {changes}=(await dbInst.execute(cInitTblsCMD)).changes;
      if(changes!==-1){return Promise.resolve(true)}
      else{this.logger.info('[sqlServ|cInitTbles] 🛠️ (❌ERROR): Execute cInitTbls Failed (changes===-1)');return Promise.resolve(false)}
    }catch(cITErr){this.logger.info('[sqlServ|cInitTbles] 🛠️ (☠️ERROR): '+JSON.stringify(cITErr));return Promise.reject(new Error(JSON.stringify(cITErr)))}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async openAuth():Promise<boolean>{
    if(!(await this.mySQL.isConnection(this.authDBName)).result){this.authDB=await this.mySQL.createConnection(this.authDBName,true,'secret',1)};
    if(!this.dS.getIsAuthConnOpen()){await this.dS.setIsAuthConnOpen(true)};
    if(!(await this.authDB.isDBOpen()).result){this.authDB.open()};
    if(!this.dS.getADBIsOpen()){await this.dS.setADBIsOpen(true)};
    this.logger.info('[sqlServ|openAuth] (☂️ OPEN): '+this.authDBName);
    return Promise.resolve(true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeAuth():Promise<boolean>{
    if((await this.authDB.isDBOpen()).result){this.authDB.close()};
    if(this.dS.getADBIsOpen()){await this.dS.setADBIsOpen(false)};
    if((await this.mySQL.isConnection(this.authDBName)).result){this.mySQL.closeConnection(this.authDBName)};
    if(this.dS.getIsAuthConnOpen()){await this.dS.setIsAuthConnOpen(false)};
    this.logger.info('[sqlServ|closeAuth] (🌂 CLOSE): '+this.authDBName); 
    return Promise.resolve(true);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async setADBItem(upObj:any|null,dpObj:any):Promise<boolean> { this.logger.info('[sqlServ|setADBItem] ()...');
    const userDPUUK:string=this.deputy.uUK+'auth';
    let isIns:boolean;upObj!==null?isIns=true:isIns=false;
    let sql:string;let vals:any[]=[];let setADBRes:number;
    const consM=(r,x)=>{let rT,sT,xT;r==='s'?rT='(✔️SUCCESS) ':rT='(❌ERROR) NOT ';isIns?sT='INSERT':sT='UPDAT';x!==null?xT=': '+x:xT='';return this.logger.info('[sqlServ|setADBItem] 🔑 '+rT+' '+sT+'ED'+xT)};
    if(isIns){
      sql='INSERT INTO deputy_auth (dp_uuk,dp_username,dp_password,dp_access_token,dp_endpoint,dp_expires_in,dp_expires_at,dp_refresh_token,last_modified) VALUES (?,?,?,?,?,?,?,?,?)';
      vals=[String(userDPUUK),String(upObj.user),String(upObj.pass),String(dpObj.access_token),String(dpObj.endpoint),String(dpObj.expires_in),String(dpObj.expires_at),String(dpObj.refresh_token),null]
    }else{
      sql='UPDATE deputy_auth SET dp_access_token="'+String(dpObj.access_token)+'",dp_endpoint="'+String(dpObj.endpoint)+'",dp_expires_in="'+dpObj.expires_in+'",dp_expires_at="'+String(dpObj.expires_at)+'",dp_refresh_token="'+String(dpObj.refresh_token)+'" WHERE dp_uuk="'+this.authDBName+'"';
    };
    try{
      if(isIns){setADBRes=(await this.authDB.run(sql,vals)).changes.changes}else{setADBRes=(await this.authDB.run(sql)).changes.changes};
      if(setADBRes!==-1){consM('s',null);return Promise.resolve(true)}else{consM('e','Changes===-1');return Promise.resolve(false)}
    }catch(sAErr){consM('e',JSON.stringify(sAErr));return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getADBItem(mode:string|null):Promise<any> { this.logger.info('[sqlServ|getADBItem] ()...');
    const consM=(r,x)=>{let rT,xT;r==='s'?rT='(✔️SUCCESS) ':rT='(❌ERROR) ';x!==null?xT=': '+x:xT='';return this.logger.info('[sqlServ|getADBItem] 🔑 '+rT+' for '+this.authDBName+xT)};
    const userDPUUK:string=this.deputy.uUK+'auth';
    const sql:string='SELECT * FROM deputy_auth WHERE dp_uuk="'+userDPUUK+'"';
    try{
      const getADBRes:any[]=(await this.authDB.query(sql)).values;
      if(getADBRes.length>0){let finalData:any;const data:any=getADBRes[0];
        if(mode==='auth'){finalData={access_token:String(data.dp_access_token),expires_in:String(data.dp_expires_in),expires_at:String(data.dp_expires_at),scope:'longlife_refresh_token',endpoint:String(data.dp_endpoint),refresh_token:String(data.dp_refresh_token)}}
        else if(mode==='up'){finalData={u:getADBRes[0].dp_username,p:getADBRes[0].dp_password}}
        else if(mode===null){finalData=getADBRes[0]};
        consM('s',null);
        return Promise.resolve({result:true,data:finalData});
      }else{consM('e','No User (dp_uuk)');return Promise.resolve({result:false})}
    }catch(gAErr){consM('e',JSON.stringify(gAErr));return Promise.resolve({result:false})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async setFCMToken(token:string):Promise<boolean> { this.logger.info('[sqlServ|setFCMToken] ()...');
    const consM=(r,x)=>{let rT,sT,xT;r==='s'?rT='(✔️SUCCESS) ':rT='(❌ERROR) NOT ';sT='UPDATED';x!==null?xT=': '+x:xT='';return this.logger.info('[sqlServ|setFCMToken] 🎫 '+rT+' '+sT+'ED'+xT)};
    try{const sFCMTRes:any=await this.userDB.run('INSERT OR REPLACE INTO `firebase_fcm` (app_uuk,fcm_token) VALUES (?,?)',[this.deputy.uUK,token]);
      if(sFCMTRes.changes.changes!==-1){consM('s',null);return Promise.resolve(true)}else{consM('e','Changes===-1');return Promise.resolve(false)}
    }catch(sFErr){consM('e',JSON.stringify(sFErr));return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getFCMToken():Promise<any> { this.logger.info('[sqlServ|getFCMToken] ()...');
    const consM=(r,x)=>{let rT,xT;r==='s'?rT='(✔️SUCCESS) ':rT='(❌ERROR) ';x!==null?xT=': '+x:xT='';return this.logger.info('[sqlServ|getFCMToken] 🎫 '+rT+' for '+this.deputy.uUK+xT)};
    try{
      const {values}=await this.userDB.query('SELECT fcm_token FROM firebase_fcm WHERE app_uuk = "'+this.deputy.uUK+'"');
      if(values.length>0){consM('s',null);return Promise.resolve({result:true,data:values[0]['fcm_token']})}else{consM('e','No User (app_uuk)');return Promise.resolve({result:true,data:null})}
    }catch(gFErr){consM('e',JSON.stringify(gFErr));return Promise.resolve({result:false,data:gFErr})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async setFEToken(feToken:string):Promise<boolean> { this.logger.info('[sqlServ|setFEToken] ()...');
    const consM=(r:string,x:string)=>{let rT:string,sT:string,xT:string;if(r==='s'){rT='(✔️SUCCESS) '}else{rT='(❌ERROR) NOT '};sT='UPDATED';if(x!==null){xT=': '+x}else{xT=''};return this.logger.info('[sqlServ|setFEToken] 🎟️ '+rT+' '+sT+'ED'+xT)};
    try{const sFETRes:any=await this.userDB.run('INSERT OR REPLACE INTO `firebase_fct` (app_uuk,fe_token) VALUES (?,?)',[this.deputy.uUK,feToken]);
      if(sFETRes.changes.changes!==-1){consM('s',null);return Promise.resolve(true)}else{consM('e','Changes===-1');return Promise.resolve(false)}
    }catch(sFErr){consM('e',JSON.stringify(sFErr));return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getFEToken():Promise<any> { this.logger.info('[sqlServ|getFEToken] ()...');
    const consM=(r:string,x:string)=>{
      let rT:string,xT:string;
      if(r==='s'){rT='(✔️SUCCESS) '}else{rT='(❌ERROR) '};
      if(x!==null){xT=': '+x}else{xT=''};
      return this.logger.info('[sqlServ|getFEToken] 🎟️ '+rT+' for '+this.deputy.uUK+xT)
    };
    try{
      const{values}=await this.userDB.query('SELECT * FROM firebase_fct WHERE app_uuk = "'+this.deputy.uUK+'"');
      if(values.length>0){consM('s',null);return Promise.resolve({result:true,data:values[0]['fe_token']})}else{consM('e','No Matching User (app_uuk)');return Promise.resolve({result:true,data:null})}
    }catch(gFErr){consM('e',JSON.stringify(gFErr));return Promise.resolve({result:false,data:null})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async addSingleItem(resEPName:string,singleObj:any):Promise<boolean> { this.logger.info('[sqlServ|addSingleItem] 🔂 ()...');
    if(singleObj.hasOwnProperty('Id')&&singleObj.Id&&singleObj.Id>0){
      const tblN:string=Resources[resEPName];
      const{values}=(await this.userDB.query('SELECT * FROM '+tblN+' WHERE Id='+singleObj.Id));
      if(values.length>0){this.logger.info('[sqlServ|addSingleItem] 🔂 Item with Id #'+singleObj.Id+' ALREADY EXISTS in '+tblN);return Promise.resolve(true)}
      else{
        const aSISQL:string=await this.insertItemsCMD(resEPName);
        let rawVals:any[]=[];let types:any[]=[];
        const dpTblSchema:any[]=DefaultDB.tables.filter(x=>x.name===tblN)[0].schema;
        for(let i=0;i<dpTblSchema.length;i++){rawVals.push(singleObj[dpTblSchema[i].column]);types.push(dpTblSchema[i].value)};
        const niceVals:any[]=await this.insDPTypeCheck(rawVals,types);
        try{const aSIRes:number=(await this.userDB.run(aSISQL,niceVals)).changes.changes;
        if(aSIRes!==-1){return Promise.resolve(true)}else{this.logger.info('[sqlServ|addSingleItem] 🔂 (ERROR): Changes===-1');return Promise.resolve(false)}
        }catch(aSIErr){this.logger.info('[sqlServ|addSingleItem] 🔂 (ERROR): '+JSON.stringify(aSIErr));return Promise.resolve(false)}
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async setLocalImg(iName:string,iUri:string,iSize:number|null,iMTime:number|null):Promise<boolean>{ this.logger.info('[sqlServ|setLocalImg] 🖼️ ()...');
    let isIns:boolean;let sql:string;let vals:any[]=[];let setImgRes:number;let xUFs:string='';
    if(iSize!==null){xUFs=xUFs+',img_size="'+iSize+'"';};if(iMTime!==null){xUFs=xUFs+',img_mtime="'+iMTime+'"'};
    const consM=(r,x)=>{let rT,sT,xT;r==='s'?rT='(✔️SUCCESS) ':rT='(❌ERROR) NOT ';isIns?sT='INSERT':sT='UPDAT';x!==null?xT=': '+x:xT='';return this.logger.info('[sqlServ|setLocalImg] 🖼️ '+rT+' '+sT+'ED'+xT)};
    try{
      const{values}=(await this.userDB.query('SELECT * FROM local_images WHERE img_name="'+iName+'"'));
      if(values.length>0){isIns=false;sql='UPDATE local_images SET img_uri="'+iUri+'"'+xUFs+' WHERE img_name="'+iName+'"'}
      else{isIns=true;sql='INSERT INTO local_images (img_name,img_uri,img_size,img_mtime) VALUES (?,?,?,?)';vals=[iName,iUri,iSize,iMTime]};
      if(isIns){setImgRes=(await this.userDB.run(sql,vals)).changes.changes}else{setImgRes=(await this.userDB.run(sql)).changes.changes};
      if(setImgRes!==-1){consM('s',null);return Promise.resolve(true)}else{consM('e','Changes===-1');return Promise.resolve(false)}
    }catch(sIErr){consM('e',JSON.stringify(sIErr));return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  setLocalDeets() { this.logger.info('[sqlServ|setLocalDeets] ()...');
    const fnSTime:Date=new Date();
    let gotAll:boolean|null=null;
    let setAll:boolean|null=null;
    let hasC:boolean|null=null;
    let hasDBItem:boolean|null=null;
    let dbDelIds:number[]=[];
    let DBI:any|null=null;
    const allOArr:any[]=['me','my','ppl','avaMe','avaWork'];
    const oNKeys:any={
      me: { tcol:'me_obj', store: this.deputy.uUK+'MeData', fData: null },
      my: { tcol:'my_obj', store: this.deputy.uUK+'MySetupData', fData: null },
      ppl: { tcol:'ppl_obj', store: this.deputy.uUK+'MyColleagues', fData: null },
      avaMe: { tcol:'me_ava', store: this.deputy.uUK+'meAvatar', fData: null },
      avaWork: { tcol:'work_ava', store: this.deputy.uUK+'workAvatar', fData: null }
    };
    // --------------------------------------------------------
    // PRE RUN FUNCTIONS
    // --------------------------------------------------------
    const getUDBDeets=async():Promise<any>=>{
      try{
        const uLDeetsRes:any=await this.userDB.query('SELECT * FROM local_deets WHERE user_email = "'+this.deputy.userEmail+'"');
        if(uLDeetsRes.values.length>0){
          dbDelIds=uLDeetsRes.values.map(dbRow=>dbRow.id);
          this.logger.info('[sqlServ|setLocalDeets] (getUDBDeets) Item for '+this.deputy.userEmail+' ✔️FOUND in local_deets table.');
          return Promise.resolve({result:true,data:uLDeetsRes.values[0]});
        }else{this.logger.info('[sqlServ|setLocalDeets] (getUDBDeets) Item for '+this.deputy.userEmail+' ❌ NOT FOUND in local_deets table >>> CREATING NOW...');
          const addLDRes:any=(await this.userDB.run('INSERT INTO local_deets (user_email,me_obj,my_obj,ppl_obj,me_ava,work_ava) VALUES (?,?,?,?,?,?)',[this.deputy.userEmail,null,null,null,null,null])).changes.changes;
          if(addLDRes!==-1){this.logger.info('[sqlServ|setLocalDeets] (getUDBDeets) Add New Item for '+this.deputy.userEmail+' - ✔️ SUCCESS')}
          else{this.logger.info('[sqlServ|setLocalDeets] (getUDBDeets) Add New Item for '+this.deputy.userEmail+' - ❌ FAILED')};
          return Promise.resolve({result:false,data:null});
        }
      }catch(uHDBDErr){return Promise.resolve({result:false,data:JSON.stringify(uHDBDErr)})}
    };
    const doPreChecks=async()=>{ this.logger.info('[sqlServ|setLocalDeets] STAGE #0 - PRE - 🟢STARTED...');
      const checkDBI:any=await getUDBDeets();
      if(checkDBI.result){hasDBItem=true;DBI=checkDBI.data;this.evServ.publish('localDeetsStage','dbCheck')}
      else{hasDBItem=false;this.evServ.publish('localDeetsStage','dbCheck')};
      const checkConn:boolean=await this.dS.getHasNetConn();
      if(checkConn){hasC=true;this.evServ.publish('localDeetsStage','connCheck')}
      else{hasC=false;this.evServ.publish('localDeetsStage','connCheck')};
      this.logger.info('[sqlServ|setLocalDeets] STAGE #0 - PRE - 🏁FINISHED...');
    };
    // --------------------------------------------------------
    // GET DATA FUNCTIONS 
    // --------------------------------------------------------
    // GET API Data 
    const getApiO=async(oName:any):Promise<any>=>{
      if(hasC){
        if(oName==='me'){const meRes=await this.deputy.getDetailMe();if(meRes.result){return Promise.resolve({result:true,data:meRes.data})}else{return Promise.resolve({result:false})}}
        else if(oName==='my'){const myRes=await this.deputy.getDetailMy();if(myRes.result){return Promise.resolve({result:true,data:myRes.data})}else{return Promise.resolve({result:false})}}
        else if(oName==='ppl'){const pplRes=await this.deputy.getDetailPpl();if(pplRes.result){return Promise.resolve({result:true,data:pplRes.data})}else{return Promise.resolve({result:false})}}
        else if(oName==='avaMe'){const meARes=await this.deputy.quickMeAva();if(meARes.result){return Promise.resolve({result:true,data:meARes.data})}else{return Promise.resolve({result:false})}}
        else if(oName==='avaWork'){const workARes=await this.deputy.quickWorkAva();if(workARes.result){return Promise.resolve({result:true,data:workARes.data})}else{return Promise.resolve({result:false})}}
      }else{return Promise.resolve({result:false})}
    };
    // GET Store Data
    const getStoreO=async(oName:any):Promise<any>=>{
      if(oName==='avaMe'){
        const storeKey:string=oNKeys[oName].store;
        const sRes:any=this.storeServ.getItem(storeKey);
        if(sRes){return Promise.resolve({result:true,data:sRes})}else{return Promise.resolve({result:false})}
      }else if(oName==='avaWork'){
        const storeKey:string=oNKeys[oName].store;
        const sRes:any=this.storeServ.getItem(storeKey);
        if(sRes){return Promise.resolve({result:true,data:sRes})}else{return Promise.resolve({result:false})}
      }else{
        const storeKey:string=oNKeys[oName].store;
        const sRes:any=await this.storeServ.getObject(storeKey);
        if(sRes){return Promise.resolve({result:true,data:sRes})}else{return Promise.resolve({result:false})}
      }
    };
    // GET SQL DB Data 
    const getDBIO=(oName:any):Promise<any>=>{
      if(hasDBItem){
        const dbIColStr:string=oNKeys[oName].tcol;
        const dbIColValue:any=DBI[dbIColStr];
        if(dbIColValue&&dbIColValue.length>9){
          if(oName==='avaMe'||oName==='avaWork'){return Promise.resolve({result:true,data:dbIColValue})}
          else{
            const isJV:boolean=this.evServ.isValidJSON(dbIColValue);
            if(isJV){
              const colObj:any=JSON.parse(dbIColValue);
              return Promise.resolve({result:true,data:colObj});
            }else{return Promise.resolve({result:false})}
          }
        }else{return Promise.resolve({result:false})}
      }else{this.logger.info('[sqlServ|setLocalDeets] (getDIO) - ERROR: hasDBItem=FALSE');return Promise.resolve({result:false})}
    };
    // --------------------------------------------------------
    // SET DATA FUNCTIONS 
    // --------------------------------------------------------
    // SET Store Data
    const setStoreO=async(oName:any,oData:any):Promise<boolean>=>{
      if(oName==='avaMe'){
        this.storeServ.setItem(this.deputy.uUK+'meAvatar',oData);
        this.logger.info('[sqlServ|setLocalDeets] (🗳️setStoreO) Set LocalDeets Store - '+this.deputy.uUK+'meAvatar'+' - ✔️SUCCESS');
        return Promise.resolve(true)
      }else if(oName==='avaWork'){
        this.storeServ.setItem(this.deputy.uUK+'workAvatar',oData);
        this.logger.info('[sqlServ|setLocalDeets] (🗳️setStoreO) Set LocalDeets Store - '+this.deputy.uUK+'workAvatar'+' - ✔️SUCCESS');
        return Promise.resolve(true)
      }else{
        const sK:string=oNKeys[oName]['store'];
        this.storeServ.setObject(sK,oData);
        this.logger.info('[sqlServ|setLocalDeets] (🗳️setStoreO) Set LocalDeets Store - '+sK+' - ✔️SUCCESS');
        return Promise.resolve(true)
      }
    };
    // SET SQL DB Data
    const setDBI=async(oName:any,oData:any):Promise<boolean>=>{
      const dbColName:string=oNKeys[oName].tcol;let oDataStr:string;
      if(typeof oData!=='string'){oDataStr=JSON.stringify(oData)}else{oDataStr=oData};
      const dbSQLStr:string='UPDATE local_deets SET '+dbColName+' VALUES (?) WHERE user_email = owenlenegan@gmail.com';const dbSQLVals:any[]=[oDataStr];
      try{const sDBIRes:any=await this.userDB.run(dbSQLStr,dbSQLVals);
        if(sDBIRes.changes.changes!==-1){this.logger.info('[sqlServ|setLocalDeets] (🗄️setDBI) Set LocalDeets SQLDB - '+dbColName+' - ✔️SUCCESS');return Promise.resolve(true)}
        else{this.logger.info('[sqlServ|setLocalDeets] (🗄️setDBI) Set LocalDeets SQLDB - '+dbColName+' - ❌FAILED');return Promise.resolve(false)}
      }catch(sDBIErr){this.logger.info('[sqlServ|setLocalDeets] (🗄️setDBI) Set LocalDeets SQLDB - '+dbColName+' - ❌FAILED');return Promise.resolve(false)}
    };
    // SET ds.Details Variables
    const setDetailsV=async(oName:string,oData:any):Promise<boolean>=>{
      const consM=(r:boolean)=>{let rTxt:string;r?rTxt='✔️SUCCESS':rTxt='❌FAILED';this.logger.info('[sqlServ|setLocalDeets] (📐setDetailsV) Set LocalDeets Details - '+oName+' - '+rTxt)};
      if(oName==='me'){const setMeRes=await this.dS.setMe(oData);if(setMeRes){consM(true)}else{consM(false)}}
      else if(oName==='my'){const setMyRes=await this.dS.setMy(oData);if(setMyRes){consM(true)}else{consM(false)}}
      else{const setPplRes=await this.dS.setPpl(oData);if(setPplRes){consM(true)}else{consM(false)}}
      return Promise.resolve(true);
    };
    // --------------------------------------------------------
    // CORE-GET GET ALL DATA
    // --------------------------------------------------------
    const doLDeetsGet=async()=>{ this.logger.info('[sqlServ|setLocalDeets] STAGE #1 - GET - 🟢STARTED...');
      for(let i=0;i<allOArr.length;i++){
        const dOName:string=allOArr[i];
        const apiDORes:any=await getApiO(dOName);
        if(apiDORes.result){oNKeys[dOName].fData=apiDORes.data}
        else{
          const storeDORes:any=await getStoreO(dOName)
          if(storeDORes){oNKeys[dOName].fData=storeDORes.data}
          else{
            const dbDORes:any=await getDBIO(dOName);
            if(dbDORes.result){oNKeys[dOName].fData=dbDORes.data}
            else{
              if(dOName==='avaMe'){oNKeys[dOName].fData='./../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png'}
              else if(dOName==='avaWork'){oNKeys[dOName].fData='./../../assets/img/sheriff-unknown-company-ico.png'}
              else{oNKeys[dOName].fData=null}
            }
          }
        }    
      };
      // --------------------------------------------------------
      this.logger.info('[sqlServ|setLocalDeets] STAGE #1 - GET - 🏁FINISHED...');
      let getAResAllOK:boolean=true;let getAResArr:boolean[]=[];let resTxtArr:string[]=[];
      for(let i=0;i<allOArr.length;i++){const kN:string=allOArr[i];if(oNKeys[kN].fData!==null){getAResArr.push(true)}else{getAResArr.push(false);getAResAllOK=false}};
      if(getAResAllOK){gotAll=true;
        this.logger.info('[sqlServ|setLocalDeets] (🕸️GET|RESULT) 💯 GOT ALL DATA (me,my,ppl,avaMe,avaWork)...');
        this.evServ.publish('localDeetsStage','get')
      }else{gotAll=false;let resTxtArr:string[]=[];
        for(let i=0;i<allOArr.length;i++){const tOStr:string=allOArr[i];const tORes:string=String(getAResArr[i]);resTxtArr.push('['+tOStr.toUpperCase()+']:'+tORes)};
        this.logger.info('[sqlServ|setLocalDeets] (🕸️GET|RESULT) ❌ Errors: '+resTxtArr.join(', '));
        this.evServ.publish('localDeetsStage','get');
      };
    }
    // --------------------------------------------------------
    // CORE-SET SET ALL DATA
    // --------------------------------------------------------
    const doLDeetsSet=async()=>{ this.logger.info('[sqlServ|setLocalDeets] STAGE #2 - SET - 🟢STARTED...');
      let setAllResO:any={me:{st:null,db:null,dt:null},my:{st:null,db:null,dt:null},ppl:{st:null,db:null,dt:null},avaMe:{st:null,db:null,dt:null},avaWork:{st:null,db:null,dt:null}};
      let dbVals:any[]=[];
      for(let i=0;i<allOArr.length;i++){const dOName:string=allOArr[i];const dOData:any=oNKeys[dOName].fData;
        const sStoreR:boolean=await setStoreO(dOName,dOData);
        if(sStoreR){setAllResO[dOName].st=true}else{setAllResO[dOName].st=false};
        if(dOData===null){dbVals.push(null);setAllResO[dOName].db=false}else{if(typeof dOData!=='string'){dbVals.push(JSON.stringify(dOData))}else{dbVals.push(dOData)};setAllResO[dOName].db=true};
        if(dOName!=='avaMe'&&dOName!=='avaWork'){
          const sDTR:boolean=await setDetailsV(dOName,dOData);
          if(sDTR){setAllResO[dOName].dt=true}else{setAllResO[dOName].dt=false};
        }
      };
      for(let i=0;i<dbDelIds.length;i++){const rowId:number=dbDelIds[i];await this.userDB.run('DELETE FROM local_deets WHERE id = '+rowId+'')};
      const upDBRes:any=(await this.userDB.run('INSERT OR REPLACE INTO local_deets (user_email,me_obj,my_obj,ppl_obj,me_ava,work_ava) VALUES (?,?,?,?,?,?)',[this.deputy.userEmail,dbVals[0],dbVals[1],dbVals[2],dbVals[3],dbVals[4]])).changes.changes;
      if(oNKeys.avaMe.fData!==null&&oNKeys.avaWork.fData!==null){
        const comboAvaDeetData:any={me:oNKeys.avaMe.fData,work:oNKeys.avaWork.fData};
        this.dS.setAvas(comboAvaDeetData);
        setAllResO.avaMe.dt=true;setAllResO.avaWork.dt=true;
      }else{setAllResO.avaMe.dt=false;setAllResO.avaWork.dt=false};
      this.logger.info('[sqlServ|setLocalDeets] STAGE #2 - SET - 🏁FINISHED...');
      let storeSetErr:any[]=[];let dbSetErr:any[]=[];let dtSetErr:any[]=[];
      for(let i=0;i<allOArr.length;i++){
        const oN:string=allOArr[i];
        const oSTR:boolean=setAllResO[oN].st;if(!oSTR){storeSetErr.push(oN)};
        const oDBR:boolean=setAllResO[oN].db;if(!oDBR){dbSetErr.push(oN)};
        const oDTR:boolean=setAllResO[oN].dt;if(!oDTR){dtSetErr.push(oN)};
      };
      if(storeSetErr.length===0&&dbSetErr.length===0&&dtSetErr.length===0){
        this.logger.info('[sqlServ|setLocalDeets] (📐SET|RESULT) 💯 SET ALL DATA (me,my,ppl,avaMe,avaWork) for ALL SOURCES (details,store,db)');
        setAll=true;this.evServ.publish('localDeetsStage','set')
      }else{
        if(storeSetErr.length>0){this.logger.info('[sqlServ|setLocalDeets] (📐SET|ERROR|Storage): ❌ '+storeSetErr.join(', '))};
        if(dbSetErr.length>0){this.logger.info('[sqlServ|setLocalDeets] (📐SET|ERROR|SQLite/DB): ❌ '+dbSetErr.join(', '))};
        if(dtSetErr.length>0){this.logger.info('[sqlServ|setLocalDeets] (📐SET|ERROR|Details): ❌ '+dtSetErr.join(', '))};
        setAll=false;this.evServ.publish('localDeetsStage','set');
      }
    };
    // ----------------------------------------------------
    let stageCount:number=0;
    this.evServ.subscribe('localDeetsStage',stageN=>{stageCount++;
      if(stageCount===2){doLDeetsGet()};
      if(stageN==='get'){doLDeetsSet()};
      if(stageN==='set'){
        this.evServ.publish('setLocalDeetsDone',true);
        this.evServ.destroy('setLocalDeetsDone');
        const fnDurSecs=():string=>{let dStr:string;const ms:number=this.evServ.getDur(fnSTime);ms>1000?dStr=(ms/1000).toFixed(2)+'s':dStr=ms+'ms';return dStr};
        let finalResTxt:string;if(gotAll&&setAll){finalResTxt='(✅FINAL|RESULT): 💯PERFECT💯 >>> '}else{finalResTxt='(❎FINAL|RESULT): 😭ERRORS😭 >>> '};
        this.logger.info('[sqlServ|setLocalDeets] '+finalResTxt+'🏁⏲️🏁 (TOTAL TIME): '+fnDurSecs());
      }
    });
    doPreChecks();
  }
//////////////////////////////////////////////////////////////////////////////////////
  async installBU() {
    const insFileSize:number=(await this.fsServ.stat(this.fsServ.phoneFS,'Sheriff/backups/'+this.deputy.uUK+'dbSQLite.db')).data.size;
    this.logger.info('[sqlServ|installBU] Install DB Size = '+insFileSize);
    this.fsServ.copyByPath('/sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/backups/'+this.deputy.uUK+'dbSQLite.db','/data/data/dev.zer0ne.sheriff/databases/'+this.deputy.uUK+'dbSQLite.db');
    setTimeout(async()=>{
      const checkFileSize:number=(await this.fsServ.stat(null,'/data/data/dev.zer0ne.sheriff/databases/'+this.deputy.uUK+'dbSQLite.db')).data.size;
      if(checkFileSize===insFileSize){this.logger.info('[sqlServ|installBU] (Size Check): '+insFileSize+' vs '+checkFileSize+' = SUCCESS!');this.evServ.publish('installBUDBDone',true)}
      else{this.logger.info('[sqlServ|installBU] (Size Check): '+insFileSize+' vs '+checkFileSize+' = FAIL!');this.evServ.publish('installBUDBDone',false)}
    },1000); 
  }
//////////////////////////////////////////////////////////////////////////////////////
  async installFireBU() {
    const insFileSize:number=(await this.fsServ.stat(this.fsServ.phoneFS,'Sheriff/backups/fireBUInstall.db')).data.size;
    this.logger.info('[sqlServ|installBU] Install DB Size = '+insFileSize);
    this.fsServ.copyByPath('/sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/backups/fireBUInstall.db','/data/data/dev.zer0ne.sheriff/databases/'+this.deputy.uUK+'dbSQLite.db');
    setTimeout(async()=>{
      const checkFileSize:number=(await this.fsServ.stat(null,'/data/data/dev.zer0ne.sheriff/databases/'+this.deputy.uUK+'dbSQLite.db')).data.size;
      if(checkFileSize===insFileSize){this.logger.info('[sqlServ|installBU] (Size Check): '+insFileSize+' vs '+checkFileSize+' = SUCCESS!');this.evServ.publish('installBUDBDone',true)}
      else{this.logger.info('[sqlServ|installBU] (Size Check): '+insFileSize+' vs '+checkFileSize+' = FAIL!');this.evServ.publish('installBUDBDone',false)}
    },1000); 
  }
//////////////////////////////////////////////////////////////////////////////////////
  async revertDB() {
    const revFileSize:number=(await this.fsServ.stat(this.fsServ.phoneFS,'Sheriff/db/revert.db')).data.size; 
    this.logger.info('[sqlServ|revertDB] Revert DB Size = '+revFileSize);
    this.fsServ.copyByPath('/sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/db/revert.db','/data/data/dev.zer0ne.sheriff/databases/'+this.deputy.uUK+'dbSQLite.db');
    setTimeout(async()=>{
      const checkFileSize:number=(await this.fsServ.stat(null,'/data/data/dev.zer0ne.sheriff/databases/'+this.deputy.uUK+'dbSQLite.db')).data.size;
      if(checkFileSize===revFileSize){
        this.logger.info('[sqlServ|revertDB] (Size Check): '+revFileSize+' vs '+checkFileSize+' = SUCCESS!');
        this.storeServ.removeItem('newDBInstall');
        this.evServ.showToast('warning','DB Reverted - Restart Sheriff!');setTimeout(()=>{App.exitApp()},2000)
      }else{
        this.logger.info('[sqlServ|revertDB] (Size Check): '+revFileSize+' vs '+checkFileSize+' = FAIL!');
        this.storeServ.removeItem('newDBInstall');
        this.evServ.showToast('error','Error Reverting DB');
      }
    },1000);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async createRevertDB() {
    this.logger.info('[sqlServ|createRevertDB] ()...');
    const revertPath=((await this.fsServ.stat(this.fsServ.phoneFS,'Sheriff/db')).data.uri)+'/revert.db';
    const cpCheck=setInterval(async()=>{
      const rvData:any=(await this.fsServ.stat(this.fsServ.phoneFS,'Sheriff/db/revert.db')).data;
      if(rvData!==null){clearInterval(cpCheck);this.evServ.publish('cpRevertDBDone',rvData)}
    },250);
    this.fsServ.copyByPath('/data/data/dev.zer0ne.sheriff/databases/'+this.deputy.uUK+'dbSQLite.db',revertPath);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async createConnection(database:string, encrypted:boolean, mode:string, version:number):Promise<SQLiteDBConnection> {
    this.logger.info('[sqlServ|createConnection] (' + database + ', ' + encrypted + ', ' + mode + ', ' + ', ' + version + ')...');
    try { const userDB: SQLiteDBConnection = await this.mySQL.createConnection(database, encrypted, mode, version);
    if ( userDB !== null ) { return Promise.resolve(userDB); } else { return Promise.reject(new Error('[sqlServ|createConnection] (Error): No Connection Returned for ' + database)); }
    } catch (createConnErr) { return Promise.reject(createConnErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async isConnection(dbName:string):Promise<boolean> {
    this.logger.info('[sqlServ|isConnection] (' + dbName + ')...');
    try { const isCRes:capSQLiteResult = await this.mySQL.isConnection(dbName); return Promise.resolve(isCRes.result); } catch (isCErr) { return Promise.reject(isCErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async retrieveConnection(database:string):Promise<SQLiteDBConnection> {
    this.logger.info('[sqlServ|retrieveConnection] (' + database + ')...');
    try { return Promise.resolve(await this.mySQL.retrieveConnection(database)); }
    catch (retrieveConnErr) { return Promise.reject(retrieveConnErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async retrieveAllConnections():Promise<Map<string, SQLiteDBConnection>> {
    this.logger.info('[sqlServ|retrieveAllConnections] ()...');
    try { const myConns = await this.mySQL.retrieveAllConnections(); let keys = [...myConns.keys()];
      if ( keys.length > 0 ) { let connCount = 0;
        this.logger.info('[sqlServ|retrieveAllConnections] Found [' + keys.length + '] Connections:');
        keys.forEach( (value) => { connCount++; this.logger.info('---> [#' + connCount + '] ' + value); }); 
        return Promise.resolve(myConns);
      } else { this.logger.info('[sqlServ|retrieveAllConnections] No Connections Found.'); return Promise.resolve(null); }
    } catch (retrieveAllConnErr) { return Promise.reject(retrieveAllConnErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeConnection(database:string):Promise<void> {
    this.logger.info('[sqlServ|closeConnection] (' + database + ')...');
    try { await this.mySQL.closeConnection(database); return Promise.resolve(); }
    catch (closeConnErr) { return Promise.reject(closeConnErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async closeAllConnections():Promise<void> {
    this.logger.info('[sqlServ|closeAllConnections] ()...');
    try { return Promise.resolve(await this.mySQL.closeAllConnections()); }
    catch (closeAllConnErr) { return Promise.reject(closeAllConnErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async isDBExists():Promise<boolean> {
    this.logger.info('[sqlServ|isDBExists] ()...');
    try { const isDBRes:capSQLiteResult = await this.userDB.isExists(); return Promise.resolve(isDBRes.result); } catch (isDBErr) { return Promise.reject(isDBErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async isDatabase(dbName:string):Promise<boolean> {
    this.logger.info('[sqlServ|isDatabase] (' + dbName + ')...');
    try { const isDBRes:capSQLiteResult = await this.mySQL.isDatabase(dbName); return Promise.resolve(isDBRes.result); } catch (isDBErr) { return Promise.reject(isDBErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async isDBOpen(dbName:string|null|undefined):Promise<boolean> {
    this.logger.info('[sqlServ|isDBOpen] (' + dbName + ')...');
    const gotDBConn:boolean = await this.isConnection(dbName);
    if ( gotDBConn ) { try { const isDBOpenRes:capSQLiteResult = await this.userDB.isDBOpen(); return Promise.resolve(isDBOpenRes.result); } catch (isDBOpenErr) { return Promise.reject(isDBOpenErr); }
    } else { this.logger.info('[sqlServ|isDBOpen] (Abort) No Conn to UDB - Unable to Check - Returning FALSE...'); return Promise.resolve(false); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getDatabaseList():Promise<capSQLiteValues> {
    this.logger.info('[sqlServ|getDatabaseList] ()...');
    try { return Promise.resolve(await this.mySQL.getDatabaseList()); } catch (dbListErr) { return Promise.reject(dbListErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async deleteDatabase(db:SQLiteDBConnection):Promise<void> {
    try { let ret: any = await db.isExists(); if ( ret.result ) { await db.delete(); return Promise.resolve();
    } else { return Promise.resolve(); } } catch(err) { return Promise.reject(err); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async deleteOldDatabases(folderPath:string):Promise<void> {
    this.logger.info('[sqlServ|deleteOldDatabases] (' + folderPath + ')...');
    try { return Promise.resolve(await this.mySQL.deleteOldDatabases(folderPath));
    } catch (delOldDBErr) { return Promise.reject(delOldDBErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async isTableExists(tableName:string):Promise<boolean> {
    this.logger.info('[sqlServ|isTableExists] ()...');
    try { const tblExistRes:capSQLiteResult = await this.userDB.isTable(tableName); return Promise.resolve(tblExistRes.result);
    } catch (tblExistsErr) { return Promise.reject(tblExistsErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async listUDBTables():Promise<any[]> { this.logger.info('[sqlServ|listUDBTables] ()...');
    let tbls:string[]=[];
    try{
      const{values}=await this.userDB.query('SELECT name FROM sqlite_master WHERE type="table"');
      if(values.length>0){for(let i=0;i<values.length;i++){tbls.push(values[i].name)}};
      return Promise.resolve(tbls);
    }catch(lUDBTErr){return Promise.reject(new Error('[sqlServ|listUDBTables] (Error): '+JSON.stringify(lUDBTErr)))}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async listADBTables():Promise<any[]> { this.logger.info('[sqlServ|listADBTables] ()...');
    let tbls:string[]=[];
    try{
      const{values}=await this.authDB.query('SELECT name FROM sqlite_master WHERE type="table"');
      if(values.length>0){for(let i=0;i<values.length;i++){tbls.push(values[i].name)}};
      return Promise.resolve(tbls);
    }catch(lADBTErr){return Promise.reject(new Error('[sqlServ|listADBTables] (Error): '+JSON.stringify(lADBTErr)))}
}
//////////////////////////////////////////////////////////////////////////////////////
  async getAllCompanies():Promise<any[]> { this.logger.info('[sqlServ|getAllCompanies] ()...');
    try{const{values}=await this.userDB.query('SELECT * FROM companies');if(values.length>0){return Promise.resolve(values)}else{return Promise.resolve([])}}
    catch(gACErr){return Promise.resolve([])}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async cleanCloseUserDB():Promise<boolean> {
    this.logger.info('[sqlServ|cleanCloseUserDB] ()...');
    try {
      this.userDB.close(); this.dS.setUDBIsOpen(false);
      if ( this.dS.getUDBIsOpen() ) { this.userDB.close(); this.dS.setUDBIsOpen(false); }
      if ( this.dS.getIsUserConnOpen() ) { this.mySQL.closeConnection(this.deputy.uUK+'db'); this.dS.setIsUserConnOpen(false); }
      this.logger.info('\uD83D\uDC9B'.repeat(10));
      return Promise.resolve(true);
    } catch (cCloseDBErr) { this.logger.info('[sqlServ|cleanCloseUserDB] (ERROR): ' + cCloseDBErr.message); return Promise.resolve(false); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async addSQLiteSuffix(folderPath:string):Promise<void> {
    this.logger.info('[sqlServ|addSQLiteSuffix] (' + folderPath + ')...');
    try { return Promise.resolve(await this.mySQL.addSQLiteSuffix(folderPath));
    } catch (addSuffErr) { return Promise.reject(addSuffErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async echo(value:string):Promise<capEchoResult> {
    console.log('[sqlServ|dbEcho] (' + this.mySQL + ')');
    if (this.mySQL!=null) { return await this.mySQL.echo(value); } else { return null; }
  }  
//////////////////////////////////////////////////////////////////////////////////////
  async addUpgradeStatement(database:string, fromVersion:number, toVersion:number, statement:string, set?:capSQLiteSet[]):Promise<void> {
    this.logger.info('[sqlServ|addUpgradeStatement] (' + database + ', ' + fromVersion + ', ' + toVersion + ', ' + statement + ', ' + JSON.stringify(set) + ')...');
    if ( this.mySQL !== null ) { try { await this.mySQL.addUpgradeStatement(database, fromVersion, toVersion, statement, set? set: []); return Promise.resolve(); }
      catch (addUpErr) { return Promise.reject(addUpErr); }
    } else { return Promise.reject(new Error('[sqlServ|addUpgradeStatement] (Error): No Connection Open for ' + database)) }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async isJsonValid(jsonStr:string):Promise<capSQLiteResult> {
    this.logger.info('[sqlServ|isJsonValid] (JSON)...');
    try { return Promise.resolve(await CapacitorSQLite.isJsonValid({jsonstring:jsonStr})); }
    catch (isJSONValErr) { return Promise.reject(isJSONValErr); }    
  }
//////////////////////////////////////////////////////////////////////////////////////
  async importFromJson(jsonStr:string):Promise<capSQLiteChanges> {
    this.logger.info('[sqlServ|importFromJson] (JSON)...');
    try { return Promise.resolve(await this.mySQL.importFromJson(jsonStr)); }
    catch (importJSONErr) { return Promise.reject(importJSONErr); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async copyFromAssets():Promise<void> { 
    this.logger.info('[sqlServ|copyFromAssets] (JSON)...');
    if ( this.mySQL !== null ) {
      try { return Promise.resolve(await this.mySQL.copyFromAssets()); }
      catch (copyFromAssetsErr) { return Promise.reject(copyFromAssetsErr); }
    } else { return Promise.reject(new Error('[sqlServ|copyFromAssets] (Error): No Connection Open.')) }
  }
///////////////////////////////////////////////////////////////////////////
  async insertItems(resEPName:string) { this.logger.info('[sqlServ|insertItems] ('+resEPName+')...');
    let rawTableItemArr:any;
    if(resEPName==='SystemUsageTracking'){rawTableItemArr=(await this.storeServ.getObject('fr-'+resEPName)).slice(0,5000)}
    else{rawTableItemArr=await this.storeServ.getObject('fr-'+resEPName)};
    const rawArrLen:number = rawTableItemArr.length; let rawItemCount:number = 0; let insertCount:number = 0; 
    const tblValTypes:any = await this.valueTypes(resEPName);
    const tblInsertCMD:string = await this.insertItemsCMD(resEPName);
    let filtTableItemArr:any[] = []; let totalfiltItems:number = 0; 
    // Process/Insert Fn
    const itemRunner = async(filtItem) => {
      const totalVals = Object.keys(tblValTypes).length; let valCount:number = 0; let thisValsArr:any[] = [];
      for (const thisPropName of Object.keys(tblValTypes)) { valCount++; thisValsArr.push(filtItem[thisPropName]);
        if (valCount===totalVals) {
          try { await this.userDB.run(tblInsertCMD,thisValsArr); insertCount++; processTasks();
          } catch (addItemErr) { insertCount++; processTasks() } 
        }
      }
    }
    // Item Feeder Fn
    const processTasks = async() => {
      if (insertCount===totalfiltItems) {
        if(resEPName==='SystemUsageTracking'){this.logger.info('[sqlServ|insertItems] - Skipping Delete for SystemUsageTracking...')}
        else{
          if(resEPName==='colleague'||resEPName==='colleagues'){
          const colObj:any=await this.storeServ.getObject('fr-'+resEPName);
          this.storeServ.setObject(this.deputy.uUK+'MyColleagues',colObj);
          this.storeServ.removeItem('fr-'+resEPName)}
          else{await this.storeServ.removeItem('fr-'+resEPName)}
        };
        this.evServ.publish('frDBIIFinish',{name:resEPName,count:insertCount,total:totalfiltItems});
        this.logger.info('[sqlServ|insertItems] (Finished) \uD83C\uDFC1 Added '+insertCount+'/'+filtTableItemArr.length+' Items to DB Table: '+Resources[resEPName]);
      } else {
        this.evServ.publish('frDBIIProg',{name:resEPName,count:insertCount,total:totalfiltItems});
        const nextItemObj:any = filtTableItemArr[insertCount];
        await itemRunner(nextItemObj);
      }
    }
    // Filter Items
    for (const rawObj of rawTableItemArr) { rawItemCount++;
      const noRawObjKeys:number = Object.keys(rawObj).length;
      let rawKeyCount:number = 0;
      let wipObj:any = rawObj;
      (async () => {
        for (const [key,value] of Object.entries(rawObj)) { rawKeyCount++;
          // DPMeta Object Exceptions: Memo/memos
          const dpMetaObjExcept:any[]=['Memo'];
          if (dpMetaObjExcept.includes(resEPName)&&key==='_DPMetaData'){wipObj[key]=JSON.stringify(value)}
          else if (key.includes('_')){delete wipObj[key]}
          else {
            if (typeof value=='object') {
              if(value==null||value==undefined){if(tblValTypes[key]==='string'){wipObj[key]=String('')}else{wipObj[key]=Number(-1)}}
              else { 
                const isArray=():boolean=>{return Array.isArray(value)?true:false};
                const isObject=():boolean=>{return value==Object(value)&&!Array.isArray(value)?true:false};
                const isPlain=():boolean=>{let proto=value;while(Object.getPrototypeOf(proto)!==null){proto=Object.getPrototypeOf(proto)}return Object.getPrototypeOf(value)===proto};
                if(isArray||isObject||isPlain){wipObj[key]=JSON.stringify(value)};
              }
            }
            if (value==='null'||value==='undefined'){if(tblValTypes[key]==='string'){wipObj[key]=String('')}else{wipObj[key]=Number(-1)}};
            if (typeof value==='boolean'){if(value){wipObj[key]=Number(1)}else{wipObj[key]=Number(0)}};
            if (key==='Date'||key==='DateTime'){wipObj[key]=value.toString()};
          }
          if (rawKeyCount===noRawObjKeys){filtTableItemArr.push(wipObj)};
          if (rawItemCount===rawArrLen&&rawKeyCount===noRawObjKeys) {
            // Table Items Start
            totalfiltItems = filtTableItemArr.length;
            this.evServ.publish('frDBIIStart',{name:resEPName,count:0,total:totalfiltItems});
            processTasks();
          }
        }
      })();
    }
  }
/////////////////////////////////////////////////////////////////////////////
  valueTypes(ResEPName:string):Promise<any> {
    const resTblName:string=Resources[ResEPName];const resTblSchema:any=DefaultDB.tables.filter(x=>x.name===resTblName)[0].schema;let resTblTypes:any={};
    for(let i=0;i<resTblSchema.length;i++){const colName:string=resTblSchema[i].column;const colValI:string=resTblSchema[i].value.split(' ')[0].toLowerCase();resTblTypes[colName]=InsertTypeMap[colValI]};
    return Promise.resolve(resTblTypes);
  }
/////////////////////////////////////////////////////////////////////////////
  insertItemsCMD(ResEPName:string):Promise<string> {
    const exceptTbl:any[]=['sync','deputy_profile'];
    let cTblName:string;let cTblFields:any[]=[];
    if(exceptTbl.includes(ResEPName)){cTblName=ResEPName}else{cTblName=Resources[ResEPName]};
    const cTbl=DefaultDB.tables.filter(x=>x.name===cTblName)[0];
    for(let i=0;i<cTbl.schema.length;i++){cTblFields.push(cTbl.schema[i].column)};
    return Promise.resolve('INSERT OR REPLACE INTO '+cTblName+' ('+cTblFields.join(',').replace(/,\s*$/,'')+') VALUES ('+'?,'.repeat(cTbl.schema.length).replace(/,\s*$/,'')+')');
  }
/////////////////////////////////////////////////////////////////////////////
  async addTable(ResEPName:string):Promise<any> {
    const cTblName = Resources[ResEPName]; const cTbl = DefaultDB.tables.filter(x=>x.name===cTblName)[0]; let cTblFields:any[] = []; let hasI:boolean; let cTblIndexes:any[] = [];
    for(let i=0;i<cTbl.schema.length;i++){cTblFields.push(cTbl.schema[i].column+' '+cTbl.schema[i].value)};
    if(cTbl.indexes){hasI=true;for(let i=0;i<cTbl.indexes.length;i++){cTblIndexes.push('CREATE INDEX IF NOT EXISTS '+cTbl.indexes[i].name+' ON '+cTblName+' ('+cTbl.indexes[i].value+');')}};
    let cTblCMD='CREATE TABLE IF NOT EXISTS '+cTblName+'('+cTblFields.join(', ').replace(/,\s*$/,'')+');';hasI?cTblCMD=cTblCMD+' '+cTblIndexes.join(' '):cTblCMD;
    try { const addResTbl = await this.userDB.run(cTblCMD); if (addResTbl.changes.changes !==-1) {return Promise.resolve(true)}
    } catch (addErr) { this.logger.info('[sqlServ|addTable] (Error): '+addErr); return Promise.resolve(false)}
  }
/////////////////////////////////////////////////////////////////////////////
  async deleteTable(ResEPName:string):Promise<any> {
    try { const delResTbl = await this.userDB.run('DROP TABLE IF EXISTS '+Resources[ResEPName]+';'); if(delResTbl.changes.changes !==-1) {return Promise.resolve(true)}
    } catch (delErr) { this.logger.info('[sqlServ|delTable] (Error): '+delErr); return Promise.resolve(false); }
  }
////////////////////////////////////////////////////////////////////////////
  async deleteItem(tableName:string, uIDCol:string, idNo:any):Promise<boolean> {
    try { const deleteCMD:string = 'DELETE FROM ' + tableName + ' WHERE ' + uIDCol + ' = ' + idNo + ';';
    const deleteRes = await this.userDB.run(deleteCMD);
    if ( deleteRes.changes.changes !== -1 ) { return Promise.resolve(true); }
    } catch (delErr) { return Promise.resolve(false); }
  }
///////////////////////////////////////////////////////////////////////////
  async deleteAllTasks():Promise<any> {
    try { const deleteAllCMD:string = 'DELETE FROM tasks';
    const deleteRes = await this.userDB.run(deleteAllCMD);
    if ( deleteRes.changes.changes !== -1 ) { return Promise.resolve(true); }
    } catch (delErr) { return Promise.resolve(false)}
  }
///////////////////////////////////////////////////////////////////////////
  async updateItem(resEPName, itemToUpdate, fieldNameForUpdate, newValue, uniqueId) {
    const tableColsObj:any = Resources[resEPName]; let uId:string = resEPName==='colleague'?'EmpId':'Id'; const tableColNames:any = Object.keys(tableColsObj);
    let tableColsArr = []; let updatedVals:any = []; const tblInsertCMD:string = await this.insertItemsCMD(resEPName);
    for (let colCount=0;colCount<tableColNames.length;colCount++) { const thisColName=tableColNames[colCount];tableColsArr.push(thisColName+'=?');
    if(thisColName===fieldNameForUpdate){updatedVals.push(newValue)}else{updatedVals.push(itemToUpdate[thisColName])} };
    const deleteCMD:string = 'DELETE FROM '+Resources[resEPName]+' WHERE '+uniqueId+' = '+uId+';';
    const deleteRes = await this.userDB.run(deleteCMD);
    if(deleteRes.changes.changes!==-1){this.logger.info('[sqlServ|updateItem] (Deleted OLD) EmpId: '+uId+' - SUCCESS!')}else{this.logger.info('[sqlServ|updateItem] (Error) Deleting: '+uId)};
    const updateRes = await this.userDB.run(tblInsertCMD,updatedVals);
    if(updateRes.changes.changes!==-1){this.logger.info('[sqlServ|updateItem] (Updated NEW) EmpId: '+uId+' - SUCCESS!')}else{this.logger.info('[sqlServ|updateItem] (Error) Updating: '+uId)};
  } 
///////////////////////////////////////////////////////////////////////////
  async dlNativeColleagueImgs():Promise<any> {
    this.logger.info('[sqlServ|dlNativeColleagueImgs] >>> STARTED...');
    const randomFN=():string=>{return Math.random().toString(20).substr(2,10)};
    const peopleRes:any[]=(await this.userDB.query('SELECT * FROM colleague')).values;
    this.evServ.publish('dlConvImgs-Start',{name:'colleague',total:peopleRes.length,count:0});
    let doneImgs:any[]=[];
    for(let i=0;i<peopleRes.length;i++){
      const p:any=peopleRes[i];
      const pId:number=p.EmpId;
      const pWebImg:string=p.Photo;
      const pFName:string=randomFN();
      try {
        const nativeUri:string=await this.deputy.saveNativeImage(pWebImg,pFName);
        doneImgs.push(nativeUri);
        this.evServ.publish('dlConvImgs-Prog',{name:'colleague',count:i,uImgs:nativeUri});
        const newURLRes:any=await this.userDB.run('UPDATE colleague SET Photo = '+nativeUri+' WHERE EmpId = '+pId);
        if(newURLRes.changes.changes!==-1){this.logger.info('[sqlServ|dlNativeColleagueImgs] (SUCCESS) Replaced DB Photo for '+p.DisplayName+' - '+nativeUri)}
      }catch(nURLErr){this.logger.info('[sqlServ|dlNativeColleagueImgs] (ERROR): '+nURLErr.message)}
    }
    this.logger.info('[sqlServ|SQLServ|dlNativeColleagueImgs] ...FINISHED! <<<');
    this.evServ.publish('dlConvImgs-Finish',true);
    return Promise.resolve(doneImgs);
  }
///////////////////////////////////////////////////////////////////////////
  async dlConvertDBImages(tableN):Promise<any> {
    this.logger.info('[sqlServ|dlConvertDBImages] ('+tableN+')...');
    const pTs=['photo','img','image','picture','avatar','logo','jpg','jpeg','gif','png','bmp'];
    const revRes=(o:object):object=>{let rO={};Object.keys(o).forEach((x=>{rO[o[x]]=x}));return rO};
    const resEPName:string = revRes(Resources)[tableN];
    const iURL=(tS:string):boolean=>{if(!tS.includes('capacitor_file')&&tS.substring(0,4).toLowerCase()==='http'){for(const pT of pTs){if(tS.match(new RegExp(pT,'gi'))){return true}}return false}else{return false}};const randomFN=(length=10)=>Math.random().toString(20).substr(2,length);
    let convImgs:any[]=[];
    try { const iTblItems:capSQLiteValues = await this.userDB.query('SELECT * FROM '+tableN);
      for (let iTblICount=0;iTblICount<iTblItems.values.length;iTblICount++) {
        for (const [key,value] of Object.entries(iTblItems.values[iTblICount])) {
          if(iURL(value.toString())){
            const dlConvUri:string = await this.deputy.saveNativeImage(value.toString(),randomFN()); convImgs.push((dlConvUri));
            await this.updateItem(resEPName,iTblItems.values[iTblICount],key,dlConvUri,(tableN==='colleague'?'EmpId':'Id'))
          }
        }
      }
      this.logger.info('[sqlServ|dlConvertDBImages] ('+tableN+') - FINISHED.');
      return Promise.resolve(convImgs);
    } catch (getAllErr) { this.logger.info('[sqlServ|dlConvertDBImages] (ERROR - '+tableN+'): '+getAllErr.message); return Promise.resolve(null) }
  }
///////////////////////////////////////////////////////////////////////////
  async doDLConvertDBImages() {
    this.logger.info('[sqlServ|doDLConvertDBImages] ()...');
    const imgTbls:any[]=[];
    const exclTbls:any[]=['sync_table','sync','joins','assocs'];
    const imgTerms:any[]=['photo','img','image','picture','avatar','logo'];
    const dbTblNs:any[]=this.dS.getUDBTables().filter(t=>!exclTbls.includes(t));
    const hasImgFields=(dbTblN:string):boolean=>{const tFs:any[]=DefaultDB.tables.filter(t=>t.name===dbTblN)[0].schema;let tFNs:any[]=[];for(let i=0;i<tFs.length;i++){tFNs.push(tFs[i].column)};
    for(const tFN of tFNs){if(imgTerms.includes(tFN.toLowerCase())){return true}}return false};
    for(let tblCount=0;tblCount<dbTblNs.length;tblCount++){const tT:string=dbTblNs[tblCount];if((await this.getItemCount(tT))>0&&hasImgFields(tT)){imgTbls.push(tT)}};
    const iTblNo:number=imgTbls.length;let doneTbls:number=0;
    ///////////////
    const doConv=async(imgT:string)=>{
      const convRes=await this.dlConvertDBImages(imgT);
      doneTbls++;
      this.evServ.publish('dlConvImgs-Prog',{name:imgT,count:doneTbls,uImgs:convRes});
      doFeed()
    };
    const doFeed=async()=>{
      if(doneTbls===iTblNo){
        this.evServ.publish('dlConvImgs-Finish',true);
        this.logger.info('[sqlServ|doDLConvertDBImages] (Finished) \uD83C\uDFC1 Done Converting DB Imgs for '+doneTbls+'/'+iTblNo+' Tables.')
      }else{
        const nextTable=imgTbls[doneTbls];
        await doConv(nextTable)
      }
    };
    doConv(imgTbls[doneTbls]);this.evServ.publish('dlConvImgs-Start',{name:imgTbls[doneTbls],total:iTblNo,count:0});
  }
//////////////////////////////////////////////////////////////////////////////////////
  async myExecuteSet(exeSetCMD:Array<capSQLiteSet>):Promise<any> {
    let totalSetItems = exeSetCMD.length;
    this.logger.info('[sqlServ|myExecuteSet] (' + totalSetItems + ')...');
    try {
      let exeSetResult = await this.userDB.executeSet(exeSetCMD);
      if ( exeSetResult.changes.changes > -1 ) { this.logger.info('[sqlServ|myExecuteSet] (Results): Added ' + exeSetResult.changes.changes + ' Items to Table.'); return Promise.resolve(true);
      } else { return Promise.reject(false); }
    } catch (exeSetErr) { return Promise.reject(exeSetErr.message); }
  }
//////////////////////////////////////////////////////////////////////////////////////
///// TIMESHEETS
//////////////////////////////////////////////////////////////////////////////////////
  async getTimesheets():Promise<any> {
    this.logger.info('[sqlServ|getTimesheets] ()...');
    try {
      let getTSResult = await this.userDB.query('SELECT * FROM Timesheet');
      if ( getTSResult.values.length > 0 ) {
        this.logger.info('[sqlServ|getTimesheets] \uD83D\uDD0E (Results): FOUND [' + getTSResult.values.length + '] Timesheets.');
        return Promise.resolve(getTSResult);
      } else { return Promise.resolve([]); }
    } catch (getTSErr) { return Promise.reject(new Error('[sqlServ|getTimesheets] (ERROR): ' + getTSErr.message)); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getSingleTimesheet(tsId:number):Promise<any> {
    return Promise.resolve((await this.userDB.query('SELECT * FROM timesheets WHERE Id = '+tsId)).values[0]);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async checkGetSingleTS(tsId:number):Promise<any> {
    try{
      const cGSTSRes:any=await this.userDB.query('SELECT * FROM timesheets WHERE Id = '+tsId);
      if(cGSTSRes.values.length>0){return Promise.resolve({result:true,data:cGSTSRes.values[0]})}
      else{return Promise.resolve({result:false,data:null})}
    }catch(cGSTSErr){return Promise.resolve({result:false,data:null})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getItemCount(tableName:string):Promise<number> {
    try { const countRes = await this.userDB.query('SELECT COUNT(*) FROM '+tableName); return Promise.resolve(countRes.values[0]['COUNT(*)']);
    } catch (countErr) { return Promise.reject(countErr) }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getTSheetRangeCount(btStartDate,btEndDate):Promise<number> {
    try { const countRes = await this.userDB.query('SELECT COUNT(*) FROM timesheets WHERE StartTime BETWEEN '+btStartDate+' AND '+btEndDate+';');
      return Promise.resolve(countRes.values[0]['COUNT(*)']);
    } catch (countErr) { return Promise.reject(countErr) }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getAllRosters():Promise<any[]> {
    try{const{values}=await this.userDB.query('SELECT * FROM `rosters`');return Promise.resolve(values)}
    catch(gARErr){this.logger.info('[sqlServ|getAllRosters] (Error): '+JSON.stringify(gARErr));return Promise.reject()}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getAllTableItems(tableName:string):Promise<any> {
    this.logger.info('[sqlServ|getAllTableItems] (' + tableName + ')...');
    try {
      let getAllResult = await this.userDB.query('SELECT * FROM ' + tableName);
      if ( getAllResult.values.length > 0 ) {
        this.logger.info('[sqlServ|getAllTableItems] \uD83D\uDD0E (Results): FOUND [' + getAllResult.values.length + '] ' + tableName + ' Items.');
        return Promise.resolve(getAllResult); 
      } else { return Promise.resolve([]); }
    } catch (getAllErr) { return Promise.reject(new Error('[sqlServ|getAllTableItems] (ERROR - ' + tableName + '): ' + getAllErr.message)); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getAllPeople():Promise<any> { this.logger.info('[sqlServ|getAllPeople] ()...');
    try{const gAPRes:any=(await this.userDB.query('SELECT * FROM colleagues')).values;
      if(gAPRes.length>0){return Promise.resolve(gAPRes)}else{return Promise.resolve([])}
    }catch(gAPErr){this.logger.info('[sqlServ|getAllPeople] (Error): '+gAPErr.message);Promise.resolve(gAPErr.message)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getAllTSheetsOrderId():Promise<any> { this.logger.info('[sqlServ|getAllTSheetsOrderId] ()...');
  try {
    let getAllTSOIdRes=await this.userDB.query('SELECT * FROM timesheets ORDER BY Id DESC');
    if(getAllTSOIdRes.values.length>0){
      this.logger.info('[sqlServ|getAllTSheetsOrderId] \uD83D\uDD0E (Results): Returning ['+getAllTSOIdRes.values.length+'] Sheets ORDERED BY ID DESC.');
      return Promise.resolve(getAllTSOIdRes.values); 
    }else{return Promise.resolve([])}
  }catch(getAllTSOIdErr){return Promise.reject(new Error('[sqlServ|getAllTSheetsOrderId] (ERROR): '+getAllTSOIdErr.message))}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getAllPendingTSheetItems():Promise<any> { this.logger.info('[sqlServ|getAllPendingTSheetItems] ()...');
    try {
      let getAllPTSRes=await this.userDB.query('SELECT * FROM timesheets WHERE TimeApproved !=1');
      if(getAllPTSRes.values.length>0){
        this.logger.info('[sqlServ|getAllPendingTSheetItems] \uD83D\uDD0E (Results): FOUND ['+getAllPTSRes.values.length+'] "PENDING" TSheet Items.');
        return Promise.resolve(getAllPTSRes.values); 
      }else{return Promise.resolve([])}
    }catch(getAllPTSErr){return Promise.reject(new Error('[sqlServ|getAllPendingTSheetItems] (ERROR): '+getAllPTSErr.message))}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getXTableItems(tableName:string,order:string,limit:number,offset:number):Promise<any> {
    let getXCMD:string; offset === 0 ? getXCMD = 'SELECT * FROM '+tableName+' ORDER BY Modified '+order.toUpperCase()+' LIMIT '+limit : getXCMD = 'SELECT * FROM '+tableName+' ORDER BY Modified '+order.toUpperCase()+' LIMIT '+limit+' OFFSET '+offset;
    try { const getXRes = await this.userDB.query(getXCMD); return Promise.resolve(getXRes.values);
    } catch (getAllErr) { return Promise.reject(new Error('[sqlServ|getXTableItems] (ERROR - ' + tableName + '): ' + getAllErr.message)); }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getXTSheetItems(btDates:any|null,order:any|null,itemLimit:number,itemOffset:number) {
    let dR:string;let o:string;let oB:string;let oD:string;let iL:string;let iO:string;
    btDates?dR='WHERE StartTime BETWEEN '+btDates.start+' AND '+btDates.end+' ':dR='';
    if(order&&order.by){oB='ORDER BY '+order.by+' ';order.dir?oD=order.dir.toUpperCase()+' ':oD='';o=oB+oD;}else{o=''};
    itemLimit>0?iL='LIMIT '+itemLimit+' ':iL='';
    itemOffset>0?iO='OFFSET '+itemOffset:iO='';
    const xCMD:string='SELECT * FROM timesheets '+dR+o+iL+iO;const CMD:string=xCMD.trim()+';';
    try { const getXTSRes = await this.userDB.query(CMD); return Promise.resolve(getXTSRes.values);
    } catch (getXTSErr) { return Promise.reject(new Error('[sqlServ|getXTableItems] (ERROR): ' + getXTSErr.message)) }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getMinMaxItems(tableName:string,tableCol:string):Promise<object> {
    const fRes:any = (await this.userDB.query('SELECT MIN('+tableCol+') FROM '+tableName)).values[0]['MIN('+tableCol+')'];
    const lRes:any = (await this.userDB.query('SELECT MAX('+tableCol+') FROM '+tableName)).values[0]['MAX('+tableCol+')'];
    return Promise.resolve({first:fRes,last:lRes});
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getTSheetsDateRange():Promise<object> {
    const minRes:any = (await this.userDB.query('SELECT MIN(StartTime) FROM timesheets')).values[0]['MIN(StartTime)'];
    const maxRes:any = (await this.userDB.query('SELECT MAX(StartTime) FROM timesheets')).values[0]['MAX(StartTime)'];
    return Promise.resolve({min:minRes,max:maxRes});
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getTSheetsRangeMinMax(btDates:any):Promise<object> {
    const minRes:any = (await this.userDB.query('SELECT MIN(StartTime) FROM timesheets WHERE StartTime BETWEEN '+btDates.start+' AND '+btDates.end)).values[0]['MIN(StartTime)'];
    const maxRes:any = (await this.userDB.query('SELECT MAX(StartTime) FROM timesheets WHERE StartTime BETWEEN '+btDates.start+' AND '+btDates.end)).values[0]['MAX(StartTime)'];
    return Promise.resolve({min:minRes,max:maxRes});
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getPerson(empId:number):Promise<any> {
    try {const getPRes=await this.userDB.query('SELECT * FROM colleague WHERE EmpId='+empId);if(getPRes.values.length>0){this.logger.info('[sqlServ|getPerson] \uD83D\uDD0E (Results): FOUND ['+getPRes.values.length+'] Employee/Colleague.');return Promise.resolve(getPRes)}else{return Promise.resolve([])}}catch(getPErr){return Promise.reject(getPErr)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getTSHistory(searchIds:any[]):Promise<any> {
    let combinedRes:any[]=[];const tryCols:any[]=['UsageRecordId','BalanceId','Id']
    for(let i=0;i<searchIds.length;i++){const tryId:number=searchIds[i];
      for(let c=0;c<tryCols.length;c++){const tryCol:string=tryCols[c];
        try {const getTSHRes=await this.userDB.query('SELECT * FROM system_usage_tracking WHERE '+tryCol+'='+tryId);if(getTSHRes.values.length>0){for(const hI of getTSHRes.values){combinedRes.push(hI)}}}
        catch(getTSHErr){this.logger.info('[sqlServ|getTSHistory] (Error): '+getTSHErr);return Promise.reject(getTSHErr)}
      }  
    }
    if(combinedRes.length>0){
      const notDailyArr:any=combinedRes.filter(h=>h.UsageType!==2);
      return Promise.resolve(notDailyArr)}else{return Promise.resolve([])}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getSelectTSheetItems(tsIds:any[]):Promise<any> { let allTSIs:any=[];
    for(let i=0;i<tsIds.length;i++){const thisTSId:number=tsIds[i];
      try{const tsIRes:any=(await this.userDB.query(`SELECT * FROM timesheets WHERE Id='`+thisTSId+`'`))['values'][0];allTSIs.push(tsIRes);console.log(tsIRes)}
      catch(tsIErr){this.logger.info('[sqlServ|getSelectTSheetItems] (ERROR): '+tsIErr.message)}
    }
    if(allTSIs.length>0){return Promise.resolve(allTSIs)}else{return Promise.resolve([])}
  }
//////////////////////////////////////////////////////////////////////////////////////
///// SHIFTS/ROSTERS /////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
async getXRosterItems(btDates:any|null,order:any|null,itemLimit:number,itemOffset:number) {
  let dR:string;let o:string;let oB:string;let oD:string;let iL:string;let iO:string;
  btDates?dR='WHERE StartTime BETWEEN '+btDates.start+' AND '+btDates.end+' ':dR='';
  if(order&&order.by){oB='ORDER BY '+order.by+' ';order.dir?oD=order.dir.toUpperCase()+' ':oD='';o=oB+oD;}else{o=''};
  itemLimit>0?iL='LIMIT '+itemLimit+' ':iL='';
  itemOffset>0?iO='OFFSET '+itemOffset:iO='';
  const xCMD:string='SELECT * FROM rosters '+dR+o+iL+iO;const CMD:string=xCMD.trim()+';';
  try { const getXTSRes = await this.userDB.query(CMD); return Promise.resolve(getXTSRes.values);
  } catch (getXTSErr) { return Promise.reject(new Error('[sqlServ|getXRosterItems] (ERROR): ' + getXTSErr.message)) }
}
//////////////////////////////////////////////////////////////////////////////////////
async getRosterWeekItems(startOfWeek:number,endOfWeek:number) {
  const weekEvsQ:string='SELECT * FROM rosters WHERE StartTime >= '+startOfWeek+' AND StartTime <= '+endOfWeek+ ' ORDER BY StartTime ASC';
  try {const weekEvsRes=await this.userDB.query(weekEvsQ);return Promise.resolve(weekEvsRes.values)}catch(weekEvsErr){return Promise.reject(new Error('[sqlServ|getRosterWeekItems] (ERROR): '+weekEvsErr))}
}
//////////////////////////////////////////////////////////////////////////////////////
async getRosterRangeCount(btStartDate,btEndDate):Promise<number> {
  try { const countRes = await this.userDB.query('SELECT COUNT(*) FROM rosters WHERE StartTime BETWEEN '+btStartDate+' AND '+btEndDate+';');
    return Promise.resolve(countRes.values[0]['COUNT(*)']);
  } catch (countErr) { return Promise.reject(countErr) }
}
//////////////////////////////////////////////////////////////////////////////////////
  async getFutureDueTasks():Promise<any> {
    const nowUTS:number=this.dT.getUT(new Date());
    try {const gFDTRes:any=await this.userDB.query('SELECT * FROM tasks WHERE DueTimestamp > '+nowUTS+' AND TsCompleted = -1;');
      if(gFDTRes.values.length>0){return Promise.resolve({result:true,data:gFDTRes.values})}else{return Promise.resolve({result:true,data:[]})}
    } catch (gFDTErr) { return Promise.reject(gFDTErr) }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getFutureStartShifts():Promise<any> {
    const nowUTS:number=this.dT.getUT(new Date());
    try {const gFSSRes:any=await this.userDB.query('SELECT * FROM rosters WHERE StartTime > '+nowUTS+';');
      if(gFSSRes.values.length>0){return Promise.resolve({result:true,data:gFSSRes.values})}else{return Promise.resolve({result:true,data:[]})}
    } catch (gFSSErr) { return Promise.reject(gFSSErr) }
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getFutureShifts():Promise<any> {
    const nowT:number=this.dT.gUT();
    try{const fSRes:any[]=(await this.userDB.query('SELECT * FROM rosters WHERE StartTime >='+nowT+' ORDER BY StartTime ASC')).values;
    if(fSRes.length>0){return Promise.resolve(fSRes)}else{return Promise.resolve([])}
    }catch(fSErr){this.logger.info('[sqlServ|getFutureShifts] (Error): '+fSErr.message)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getRostersRangeMinMax(btDates:any):Promise<object> {
    const minRes:any = (await this.userDB.query('SELECT MIN(StartTime) FROM rosters WHERE StartTime BETWEEN '+btDates.start+' AND '+btDates.end)).values[0]['MIN(StartTime)'];
    const maxRes:any = (await this.userDB.query('SELECT MAX(StartTime) FROM rosters WHERE StartTime BETWEEN '+btDates.start+' AND '+btDates.end)).values[0]['MAX(StartTime)'];
    return Promise.resolve({min:minRes,max:maxRes});
  }
  //////////////////////////////////////////////////////////////////////////////////////
  async getRostersDateRange():Promise<object> {
    const minRes:any = (await this.userDB.query('SELECT MIN(StartTime) FROM rosters')).values[0]['MIN(StartTime)'];
    const maxRes:any = (await this.userDB.query('SELECT MAX(StartTime) FROM rosters')).values[0]['MAX(StartTime)'];
    return Promise.resolve({min:minRes,max:maxRes});
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getWeekDoneHrs(wO:any):Promise<any> {
    const wHrsRes:any=(await this.userDB.query('SELECT SUM(TotalTime) FROM timesheets WHERE StartTime > '+wO.s+' AND StartTime < '+wO.e)).values[0]['SUM(TotalTime)'];
    return Promise.resolve(wHrsRes);
  }
//////////////////////////////////////////////////////////////////////////////////////
  async updateRosterTSMatch(rosItems:any[]):Promise<any> { let allURs:any[]=[];
    for(let i=0;i<rosItems.length;i++){
      const rId:number=rosItems[i].Id;
      const rTSM:number=rosItems[i].MatchedByTimesheet;
      try{ const updateRes:any=await this.userDB.run('UPDATE rosters set MatchedByTimesheet = '+rTSM+' WHERE Id = '+rId+';');
        if(updateRes.changes.changes!==-1){allURs.push({rId:rId,tId:rTSM});this.logger.info('[sqlServ|updateRosterTSMatch] (SUCCESS) Added MatchedByTimesheet Pty ('+rTSM+') for Roster Id #'+rId)}
      }catch(uRResErr){this.logger.info('[sqlServ|updateRosterTSMatch] (ERROR):'+uRResErr.message)}
    }
    if(allURs.length>0){return Promise.resolve(allURs)}else{return Promise.resolve([])}
  }
//////////////////////////////////////////////////////////////////////////////////////
////// SYNC/UPDATE ///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
  async initSync():Promise<any> {
    const syncTbls:any[]=['rosters','timesheets','tasks','memos'];
    const inCMD:string=await this.insertItemsCMD('sync');let okC:number=0;
    for(let i=0;i<syncTbls.length;i++){
      const tN:string=syncTbls[i];
      const tTS:number=this.dT.getUT(new Date());
      const inVals:any[]=[null,tN,tTS,null];
      try{
        const tsRes=await this.userDB.run(inCMD,inVals);
        if(tsRes.changes.changes!==-1){okC++}
      }catch(err){this.logger.info('[sqlServ|initSync] (ERROR): '+err)}
    };
    if(okC>0){this.logger.info('[sqlServ|initSync] (SUCCESS): Created Sync Table (sync) & Set last_sync UTS For [ALL] DB Tables')}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getSync(tableN:string):Promise<number> {
    const monthAgoUTS:number=this.dT.getUT(this.dT.subWs(new Date(),4));
    try{
      const {values}=await this.userDB.query('SELECT last_sync FROM sync WHERE table_name="'+tableN+'"');
      if(values&&values.length>0){const lS:number=values[0]['last_sync'];this.logger.info('[sqlServ|getSync] (Found) Last Sync for '+tableN+'='+lS);return Promise.resolve(lS)}
      else{this.logger.info('[sqlServ|getSync] (NOT FOUND) - Returning Sync UTS NOW less 4x Weeks');return Promise.resolve(monthAgoUTS)}
    }catch(gSErr){this.logger.info('[sqlServ|getSync] (Error):'+gSErr.message+' - Returning Sync UTS NOW less 4x Weeks.');return Promise.resolve(monthAgoUTS)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async setSync(tableN:string):Promise<boolean> {
    const sUTS:number=this.dT.getUT(new Date());
    try{
      const sSRes:number=(await this.userDB.run('UPDATE sync SET last_sync = '+sUTS+' WHERE table_name = "'+tableN+'"')).changes.changes;
      if(sSRes!==-1){this.logger.info('[sqlServ|setSync] (SUCCESS) Updated last_sync UTS to '+sUTS+' for '+tableN+' DB Table');return Promise.resolve(true)}
    }catch(sSErr){this.logger.info('[sqlServ|setSync] (ERROR):'+sSErr.message)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async syncUpdateItem(sql:string,vals:any[]):Promise<boolean> {
    try{
      const{changes}=(await this.userDB.run(sql,vals)).changes;
      if(changes!==-1){return Promise.resolve(true)}else{return Promise.resolve(false)}
    }catch(sUIErr){this.logger.info('♻️ [sqlServ|syncUpdateItem] (🔴 ERROR): '+JSON.stringify(sUIErr))}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async replaceItem(tableN:string,UID:string,UIDValue:any,newItem:any):Promise<any> {
    const consM=(r,x)=>{let rT,xT;x?xT=': '+x:xT='';r==='s'?rT='✔️SUCCESS':rT='❌ERROR';return this.logger.info('[sqlServ|replaceItem] 🛠️ ('+rT+') UPDATE Item ('+UID+':'+UIDValue+') in '+tableN+xT)};
    const dpTblSchema:any[]=DefaultDB.tables.filter(x=>x.name===tableN)[0].schema;
    let resEPName:string;for(const[k,v]of Object.entries(Resources)){if(v===tableN){resEPName=k}};
    let rawVals:any[]=[];let updTypes:any[]=[];
    for(let i=0;i<dpTblSchema.length;i++){rawVals.push(newItem[dpTblSchema[i].column]);updTypes.push(dpTblSchema[i].value)};
    const updVals:any[]=await this.insDPTypeCheck(rawVals,updTypes);
    const updSQL:string=await this.insertItemsCMD(resEPName);
    try{const{changes}=(await this.userDB.run(updSQL,updVals)).changes;
    if(changes!==-1){consM('s',null);return Promise.resolve({result:true,id:UIDValue})}else{consM('e','changes===-1');return Promise.resolve({result:false,id:UIDValue})}}
    catch(rIErr){consM('e',rIErr.message);return Promise.resolve({result:false,id:UIDValue})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async insertSingleItem(tableN:string,rawItem:any):Promise<any> {
    this.logger.info('[sqlServ|insertSingleItem] ('+tableN+','+rawItem+')...');
    let resName:string;if(tableN==='rosters'){resName='Roster'}else{for(const [key,value] of Object.entries(Resources)){if(tableN===value){resName=key.toString()}}};
    const tblValTypes:any = await this.valueTypes(resName);
    const tblInsertCMD:string = await this.insertItemsCMD(resName);
    const noRawObjKeys:number=Object.keys(rawItem).length;let rawKeyCount:number=0;let wipObj:any=rawItem;
    for(const [key,value] of Object.entries(rawItem)){rawKeyCount++;
      if(key.includes('_')){delete wipObj[key]}
      else{
        if(typeof value=='object'){
          if(value==null||value==undefined){if(tblValTypes[key]==='string'){wipObj[key]=String('')}else{wipObj[key]=Number(-1)}}
          else{ 
            const isArray=():boolean=>{return Array.isArray(value)?true:false};
            const isObject=():boolean=>{return value==Object(value)&&!Array.isArray(value)?true:false};
            const isPlain=():boolean=>{let proto=value;while(Object.getPrototypeOf(proto)!==null){proto=Object.getPrototypeOf(proto)}return Object.getPrototypeOf(value)===proto};
            if(isArray||isObject||isPlain){wipObj[key]=JSON.stringify(value)};
          }
        }
        if (value==='null'||value==='undefined'){if(tblValTypes[key]==='string'){wipObj[key]=String('')}else{wipObj[key]=Number(-1)}};
        if (typeof value==='boolean'){if(value){wipObj[key]=Number(1)}else{wipObj[key]=Number(0)}};
        if (key==='Date'||key==='DateTime'){wipObj[key]=value.toString()};
      }
      if (rawKeyCount===noRawObjKeys){
        const totalVals=Object.keys(tblValTypes).length;let valCount:number=0;let thisValsArr:any[]=[];
        for (const thisPropName of Object.keys(tblValTypes)){valCount++;thisValsArr.push(wipObj[thisPropName]);
          if(valCount===totalVals){
            try{await this.userDB.run(tblInsertCMD,thisValsArr);return Promise.resolve(true)
            }catch(insertIErr){this.logger.info('[sqlServ|insertSingleItem] (Error): '+insertIErr);return Promise.resolve(false)}
          };
        }
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
///// PROFILE - COUNTRIES/STATES /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
  async createProfile(profileData:any):Promise<boolean>{
    let insVals:any[]=[];const insCMD:string=await this.insertItemsCMD('deputy_profile');const uUKStr:string=this.deputy.uUK.toString();const nowUTS:number=this.dT.gUT();insVals.push(uUKStr);
    for(let i=0;i<pKeys.length;i++){const fName:string=pKeys[i];let newV:any;const rawV:any=profileData[fName].value;
      if(rawV===null||rawV==='null'||rawV===undefined||rawV==='undefined'||rawV===''){newV=null}
      else if(fName==='photo'){newV=JSON.stringify(rawV)}
      else{newV=rawV.toString().trim()};
      insVals.push(newV)
    };
    insVals.push(nowUTS);insVals.push(nowUTS);
    try{const cPRes:number=(await this.userDB.run(insCMD,insVals)).changes.changes;if(cPRes!==-1){return Promise.resolve(true)}else{return Promise.resolve(false)}}
    catch(cPErr){return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async hasProfile():Promise<boolean>{
    try{const hPRes:any[]=(await this.userDB.query('SELECT dp_uuk FROM deputy_profile')).values;
      if(hPRes.length>0){for(let i=0;i<hPRes.length;i++){const pO:any=hPRes[i];if(pO['dp_uuk'].toString()===this.deputy.uUK.toString()){return Promise.resolve(true)}};return Promise.resolve(false)}
      else{return Promise.resolve(false)}
    }catch(hPErr){return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getProfile():Promise<any>{
    try{const gPRes:any=(await this.userDB.query(`SELECT * FROM deputy_profile WHERE dp_uuk = '`+this.deputy.uUK+`'`)).values;if(gPRes.length>0){return Promise.resolve({result:true,data:gPRes[0]})}
    else{Promise.resolve({result:false,data:null})}
    }catch(gPErr){return Promise.resolve({result:false,data:gPErr})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async updateProfile(profileObj:any):Promise<boolean>{
    try{
      const delRes=await this.userDB.run(`DELETE FROM deputy_profile WHERE dp_uuk = '`+this.deputy.uUK+`'`);
      if(delRes.changes.changes!==-1){this.logger.info('[sqlServ|updateProfile] (STEP #1) [SUCCESS] - DELETED OLD Profile - OK.');
        const insRes:any=await this.createProfile(profileObj);
        if(insRes){this.logger.info('[sqlServ|updateProfile] (STEP #2) [SUCCESS] - ADDED NEW Profile - OK.');return Promise.resolve(true)}
        else{this.logger.info('[sqlServ|updateProfile] (STEP #2) [ERROR] - FAILED TO ADD NEW Profile.')}
      }else{this.logger.info('[sqlServ|updateProfile] (STEP #1) [ERROR] - FAILED TO DELETE OLD Profile.');return Promise.resolve(false)}
    }catch(uPErr){this.logger.info('[sqlServ|updateProfile] (Error) - FAILED TO UPDATE Profile.')}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getStates(countryId:number):Promise<any> {
    const cId:number=Number(countryId);
    try{const gSRes:any[]=(await this.userDB.query('SELECT * FROM states WHERE Country = '+cId+';')).values;
      if(gSRes.length>0){return Promise.resolve({result:true,data:gSRes})}else{return Promise.resolve({result:true,data:[]})}
    }catch(gSErr){return Promise.resolve({result:false,data:gSErr})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getSingleState(stateId:number):Promise<any> {
    const sId:number=Number(stateId);
    try{const gSSRes:any[]=(await this.userDB.query('SELECT * FROM states WHERE Id = '+sId+';')).values;
      if(gSSRes.length>0){return Promise.resolve({result:true,data:gSSRes[0]})}
      else{return Promise.resolve({result:true,data:null})}
    }catch(gSSErr){return Promise.resolve({result:false,data:gSSErr})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getSingleCountry(countryId:any):Promise<any> {
    const cId:number=Number(countryId);
    try{const gSCRes:any[]=(await this.userDB.query('SELECT * FROM countries WHERE Id = '+cId+';')).values;
      if(gSCRes.length>0){return Promise.resolve({result:true,data:gSCRes[0]})}
      else{return Promise.resolve({result:true,data:null})}
    }catch(gSCErr){return Promise.resolve({result:false,data:gSCErr})}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async qCountry(searchTxt:string):Promise<any> {
    try {const qCRes:any[]=(await this.userDB.query(`SELECT * FROM countries WHERE Country LIKE '%`+searchTxt+`%';`)).values;
      if(qCRes.length>0){return Promise.resolve(qCRes)}else{return Promise.resolve([])}
    }catch(qCErr){this.logger.info('[sqlServ|qCountry] (Error): '+qCErr);return Promise.reject(qCErr)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getAllCsOrSs(cOs:string):Promise<any> { this.logger.info('[sqlServ|getAllCsOrSs] ('+cOs+')...');
    let tblN:string;cOs==='c'?tblN='countries':tblN='states';
    try{const gARes=(await this.userDB.query('SELECT * FROM '+tblN)).values;
      if(gARes.length>0){return Promise.resolve({result:true,data:gARes})}
      else{return Promise.resolve({result:false,data:[]})}
    }catch(gAErr){return Promise.resolve({result:false,data:gAErr})}
  }
//////////////////////////////////////////////////////////////////////////////////////
///// NEWS/MEMOS /////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
  async getXMemoItems(itemLimit:number,itemOffset:number) {
    let iL:string;let iO:string;itemLimit>0?iL='LIMIT '+itemLimit+' ':iL='';itemOffset>0?iO='OFFSET '+itemOffset:iO='';
    const xCMD:string='SELECT * FROM memos ORDER BY Id DESC '+iL+iO;const CMD:string=xCMD.trim()+';';
    try{const getXTSRes=await this.userDB.query(CMD);return Promise.resolve(getXTSRes.values);}
    catch(getXTSErr){return Promise.reject(new Error('[sqlServ|getXMemoItems] (ERROR): ' + getXTSErr.message))}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async updateTaskSortOrder(taskId:number,newSortOrder:number):Promise<any> {
    try{const uTSORes:any=await this.userDB.run('UPDATE tasks set SortOrder = '+newSortOrder+' WHERE Id = '+taskId+';');
      if(uTSORes.changes.changes!==-1){this.logger.info('[sqlServ|updateTaskSortOrder] (SUCCESS) Updated SortOrder ('+newSortOrder+') for Task Id #'+taskId);return Promise.resolve(true)}}
    catch(uTSOErr){this.logger.info('[sqlServ|updateTaskSortOrder] (ERROR): '+uTSOErr.message);return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
///// SHERIFF SETTINGS ///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
  async hasSettings():Promise<boolean>{ this.logger.info('[sqlServ|hasSettings] ()...');
    try{const hSRes:any[]=(await this.userDB.query('SELECT dp_uuk FROM `sheriff_settings`')).values;
      if(hSRes.length>0){
        const matchArr:any[]=hSRes.filter(sO=>String(sO.dp_uuk)===String(this.deputy.uUK));
        if(matchArr&&matchArr.length>0){return Promise.resolve(true)}else{return Promise.resolve(false)}
      }else{return Promise.resolve(false)}
    }catch{return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////////////////////////////////////
  async setSettings(settingsObj:AppUserSettings):Promise<boolean> { this.logger.info('[sqlServ|setSettings] (setObj)...');
    const uUKStr:string=this.deputy.uUK.toString();
    const settingsStr:string=JSON.stringify(settingsObj);
    const inCMD:string='INSERT OR REPLACE INTO `sheriff_settings` (dp_uuk,settings) VALUES (?,?)';
    const inVals:any[]=[uUKStr,settingsStr];
    try{
      await this.userDB.run(inCMD,inVals);
      await this.dS.setSettings(settingsObj);
      return Promise.resolve(true)
    }catch{
      await this.dS.setSettings(settingsObj);
      return Promise.resolve(false)
    };
  }
//////////////////////////////////////////////////////////////////////////////////////
  async getSettings():Promise<any>{ this.logger.info('[sqlServ|getSettings] ()...');
    const detailRes:AppUserSettings|null=await this.dS.getSettings();
    if(detailRes!==null){return Promise.resolve({result:true,data:detailRes})}
    else{
      try{
        const gSRes:any=(await this.userDB.query('SELECT * FROM `sheriff_settings` WHERE `dp_uuk` = "'+this.deputy.uUK+'"')).values;
        if(gSRes.length>0){
          if(gSRes[0].hasOwnProperty('settings')&&gSRes[0].settings){
            const settStr:string=gSRes[0].settings;
            if(this.evServ.isValidJSON(settStr)){const settObj:any=JSON.parse(settStr);return Promise.resolve({result:true,data:settObj})}
            else{return Promise.resolve({result:false})}
          }else{return Promise.resolve({result:false})}
        }else{return Promise.resolve({result:false})}
      }catch{return Promise.resolve({result:false})}
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
}
