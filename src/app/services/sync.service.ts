import { StorageService } from './storage.service';
import { DateTimeService } from './datetime.service';
import { EventsService } from './events.service';
import { DeputyService } from './deputy.service';
import { SQLiteService } from './sqlite.service';
import { FirebaseService } from './firebase.service';
import { FileSystemService } from './filesystem.service';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import * as _ from 'lodash';
import { DetailService } from './detail.service';
import { AppUserSettings } from './appTypes';
////////////////////////////////////////////////////////////////
@Injectable({ providedIn: 'root' })
////////////////////////////////////////////////////////////////
export class SyncService {
////////////////////////////////////////////////////////////////
  apiTSheets:any[]=null;
  runDelayOnce:number=1;
////////////////////////////////////////////////////////////////
  constructor(
    private logger: NGXLogger,
    private deputy: DeputyService,
    private sqlServ: SQLiteService,
    private evServ: EventsService,
    private dT:DateTimeService,
    private storeServ:StorageService,
    private detailServ:DetailService,
    private fileServ:FileSystemService,
    private fireServ:FirebaseService
    ) { }
////////////////////////////////////////////////////////////////
  checkServ():Promise<any> { this.logger.info('♻️ [syncServ|doSync] (TRUE)...');
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////
  async fireBackupDB() { this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 ()...');
    const settObj:AppUserSettings=await this.detailServ.getSettings();
    if(settObj.database.options.backupMode.value==='auto'){
      this.evServ.subscribe('dbbuBlob',blob=>{this.evServ.destroy('dbbuBlob');
        this.evServ.subscribe('dbbuULProg',ulD=>{this.evServ.destroy('dbbuULProg');
          switch(ulD.event){
            case 'successData':this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 (✔️ SUCCESS) Uploaded DBBU to Cloud');break;
            case 'errorData':this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 (❌ ERROR) Error Uploading DBBU to Cloud');break;
          }
        });this.fireServ.uploadFSDBBU(blob);
      });this.fileServ.getFireDBBUFile(this.deputy.uUK)
    }else{this.logger.info('♻️ [syncServ|fireBackupDB]  🚒 (🤞 SKIPPED) DB backupMode!==AUTO')}
  }
////////////////////////////////////////////////////////////////
  async deepValCheck(dbVArr:any[],dpVArr:any[]){ this.logger.info('♻️ [syncServ|deepValCheck] (dbArr,dpArr)...');
    const consFn=(r:string,m:string)=>{let rT;r==='s'?rT='🟢 SUCCESS':r==='w'?rT='⚠️ WARNING':rT='🔴 ERROR';const c=this.logger.info('♻️ [syncServ|deepValCheck] 🩺 ('+rT+'): '+m)};
    const getTbl=(o:any):Promise<string>=>{if(o.hasOwnProperty('MatchedByTimesheet')){return Promise.resolve('rosters')}else if(o.hasOwnProperty('Disputed')){return Promise.resolve('timesheets')}else if(o.hasOwnProperty('UserPerformTask')){return Promise.resolve('tasks')}else if(o.hasOwnProperty('ShowFrom')){return Promise.resolve('memos')}};
    let dbArr:any[]=dbVArr;let dpArr:any[]=dpVArr;const tblN:string=await getTbl(dbArr[0]);const sTblN:string=tblN.substring(0,tblN.length-1);
    const remPs=async(o:object):Promise<boolean>=>{if(_.unset(o,'last_modified')){return Promise.resolve(true)}else{return Promise.resolve(false)}};
    if(dbArr.length!==dpArr.length){consFn('e','Total no. of items !== (DB vs DP)');return};
    let remPDB:boolean=true;for(let i=0;i<dbArr.length;i++){const tO:object=dbArr[i];if(!(await remPs(tO))){remPDB=false}};
    if(!remPDB){consFn('e','Failed to remove last_modified pty from '+tblN+' DB obj');return};
    let remPDP:boolean=true;for(let i=0;i<dpArr.length;i++){const tO:object=dpArr[i];if(!(await remPs(tO))){remPDP=false}};
    if(!remPDP){consFn('e','Failed to remove last_modified pty from '+tblN+' DP obj');return};
    for(let i=0;i<dbArr.length;i++){
      const dbO:any=dbArr[i];const dbOId:number=dbO.Id;
      const dpO:any=dpArr.filter(o=>o.Id===dbOId)[0];
      if(!_.isEqual(dbO,dpO)){
        consFn('w','Obj Mismatch: '+sTblN.toUpperCase()+' ID #'+dbOId+' - Checking values...');
        const diffObj:object=await this.myDiff(dpO,dbO);
        this.logger.info(diffObj);
        let m:any=[];for(const[k,v]of Object.entries(diffObj)){m.push(k+'!=='+v)};m=m.join(', ');
        consFn('w','Val Mismatch(s): '+m);
        /* const fixSQL:string='UPDATE `'+tblN+'` SET ? WHERE `Id` = ?';
        const fixVals:any[]=[diffObj,dbOId];
        const dbRes:boolean=await this.sqlServ.syncUpdateItem(fixSQL,fixVals);
        if(dbRes){consFn('s','🛠️ Fixed/Updated '+Object.keys(diffObj).join(', ')+' for '+sTblN.toUpperCase()+' ID #'+dbOId)}
        else{consFn('e','🛠️ Failed to Update '+Object.keys(diffObj).join(', ')+' for '+sTblN.toUpperCase()+' ID #'+dbOId)} */
      };
    };
  }
  //////////////////////////////////////////////////
  /**
  // @param  {Object} object Obj compared (mySQL)
  // @param  {Object} base   Obj to compare (Fire)
  // @return {Object} return Obj the Difference
  */
  //////////////////////////////////////////////////
  async myDiff(object:any,base:any) {
    function changes(object:any,base:any) {
      return _.transform(object,function(result:any,value:any,key:any) {
        if (!_.isEqual(value, base[key])) {
          result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
        }
      });
    }
    return changes(object, base);
  }
////////////////////////////////////////////////////////////////
  async doSingleSync(tableN:string):Promise<any>{ this.logger.info('♻️ [syncServ|doSingleSync] ('+tableN+')...');
    let isDiff:boolean;let actReq:string;let isStaged:boolean;
    const apiC:number=await this.deputy.getResSyncCount(tableN);
    const dbC:number=await this.sqlServ.getItemCount(tableN);
    apiC>500?isStaged=true:isStaged=false;
    if(apiC>dbC){isDiff=true;actReq='down';this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): Need to [DOWNLOAD] '+Math.abs(apiC-dbC)+' '+tableN+' Item(s) from API.')}
    else if(dbC>apiC){isDiff=true;actReq='up';this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): Need to [UPLOAD/SAVE] '+Math.abs(apiC-dbC)+' '+tableN+' Item(s) to API.')}
    else{isDiff=false;this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): '+apiC+'(api) === '+dbC+'(db) - No Difference/Action Required.')};
    //Prog #1
    this.evServ.publish('refreshTSProg','getapi');
    if(!isStaged){
      const apiData:any[]=await this.deputy.getTSheetSyncRange(false,null,null,false);
      const dbData:any[]=(await this.sqlServ.getAllTableItems(tableN)).values;
      //Prog #2
      this.evServ.publish('refreshTSProg','diffcheck');
      if(apiData.length>0&&dbData.length>0){ 
        this.logger.info('♻️ [syncServ|Deputy|getTSheetSyncRange] (Success) - Comparing '+apiData.length+' API Items to '+dbData.length+' DB Items...');
        if(isDiff){
          let apiIds:any[]=[];let dbIds:any[]=[];
          for(let i=0;i<apiData.length;i++){apiIds.push(apiData[i].Id)};
          for(let i=0;i<dbData.length;i++){dbIds.push(dbData[i].Id)};
          if(actReq==='down'){
            let getFromAPI:any=[];let insCount:number=0; let insErr:boolean=false;
            for(let i=0;i<apiIds.length;i++){if(!dbIds.includes(apiIds[i])){getFromAPI.push(apiIds[i])}};
            this.logger.info('♻️ [syncServ|Diff] (Result): Download from API ('+tableN+') >>> Ids '+getFromAPI.join(', '));
            for(let i=0;i<getFromAPI.length;i++){
              const missingObj:any=apiData.filter(o=>o.Id===getFromAPI[i])[0];
              const insRes:boolean = await this.sqlServ.insertSingleItem(tableN,missingObj);
              if(insRes===true){insCount++}else{insCount++;insErr=true};
              if(insCount===getFromAPI.length){
                //Prog #3
                this.evServ.publish('refreshTSProg','insertupload');
                this.logger.info('♻️ [syncServ|InsertMissing] (Finished) ['+insCount+'/'+getFromAPI.length+']...');
                this.logger.info('♻️ [syncServ|doSingleSync|Missing] (Insert Missing Objs Api=>DB) COMPLETED!'); 
                return Promise.resolve(getFromAPI);
              }
            };
            if(insCount>0){this.fireBackupDB()};
          }else{
            let sendToAPI:any[]=[];for(let i=0;i<dbIds.length;i++){if(!apiIds.includes(dbIds[i])){sendToAPI.push(dbIds[i])}};
            this.logger.info('♻️ [syncServ|Diff] (Result): Upload to API ('+tableN+') >>> Ids '+sendToAPI.join(','));
            return Promise.resolve(sendToAPI);
          }
        }else{return Promise.resolve([])}
      }else{this.logger.info('♻️ [syncServ|Deputy|getTSheetSyncRange] (Error) - NIL Items Returned by API and/or DB - Aborting.');return Promise.resolve([])}
    }else{this.logger.info('♻️ [syncServ|doSingleSync] (All Mode) - Checking All '+tableN+' Items (New/Updated)...');return Promise.resolve([])}
  }
////////////////////////////////////////////////////////////////
  async doTSheetsSync(mode:string):Promise<any> { this.logger.info('♻️ [syncServ|doTSheetSync] ('+mode+')...');
    // Prep Promise/Return Vars
    let syncRes:any={changed:<boolean>false,added:<any[]>[],modified:<any[]>[]};
    // Get Now & Last Sync UTSs
    const c=():boolean=>{if(mode==='refresh'){return true}else{return false}};const p=()=>{this.evServ.publish('refreshTSheetsProg',null)};
    let lastSyncUTS:number=0;let lastSyncDate:Date;const lSDBVal:number=await this.sqlServ.getSync('timesheets');
    if(lSDBVal&&lSDBVal!==null&&lSDBVal!==0&&lSDBVal!==undefined&&this.dT.isV(this.dT.Dut(lastSyncUTS))){lastSyncUTS=lSDBVal;lastSyncDate=this.dT.Dut(lastSyncUTS)}
    else{lastSyncUTS=this.dT.getUT(this.dT.subYs(new Date(),1));lastSyncDate=this.dT.subYs(new Date(),1)};
    if(c){p()};//Prog #1
    // Get API & DB Object Lists for Comparison
    let apiObs:any[]=[];let dbObs:any[]=[];let dbObIds:any=[];
    if(this.apiTSheets!==null){apiObs=this.apiTSheets}else{apiObs=(await this.deputy.getAllTSheetsOrderById()).data};
    dbObs=await this.sqlServ.getAllTSheetsOrderId();
    if(c){p()};//Prog #2
    // Check All API Obs Appear In DB - Add Missing
    for(let i=0;i<dbObs.length;i++){dbObIds.push(dbObs[i].Id)};
    const missAPIObs:any[]=apiObs.filter(apiOb=>!dbObIds.includes(apiOb.Id));
    if(missAPIObs.length>0){
      syncRes.changed=true;
      for(let i=0;i<missAPIObs.length;i++){
        const missOb:any=missAPIObs[i];
        await this.sqlServ.insertSingleItem('timesheets',missOb);
        syncRes.added.push(missOb.Id)
      }  
    }else{this.logger.info('♻️ [syncServ|doTSheetsSync] ['+missAPIObs.length+'] Timesheets Required [MISSING] Updates.')};
    if(c){p()};//Prog #3
    // Replace DB Ob if API Ob Has Later Modified Date
    const modCompareAPIObs:any[]=apiObs.filter(apiOb=>!syncRes.added.includes(apiOb.Id));
    if(modCompareAPIObs.length>0){
      syncRes.changed=true;
      for(let i=0;i<modCompareAPIObs.length;i++){
        const modAPIOb:any=modCompareAPIObs[i];
        const modDBObI:number=dbObs.findIndex(ts=>ts.Id===modAPIOb.Id);
        const modAPIObDate:Date=new Date(modAPIOb.Modified);
        let modDBObDate:Date=null;modDBObI!==-1?modDBObDate=new Date(dbObs[modDBObI].Modified):modDBObDate=null;
        if(modDBObDate!==null){
          if(this.dT.isA(modAPIObDate,modDBObDate)){
            await this.sqlServ.replaceItem('timesheets','Id',modAPIOb.Id,modAPIOb);
            syncRes.modified.push(modAPIOb.Id)
          }
        }
      } 
    }else{this.logger.info('♻️ [syncServ|doTSheetsSync] ['+modCompareAPIObs.length+'] Timesheets Required [MODIFIED] Updates.')};
    /////////////////////////////////////////////////////
    this.logger.info('>>>>> SYNC: [RESULT]: Changes: '+syncRes.changed.toUpperCase+' - Added: '+syncRes.added.join(',')+' ('+syncRes.added.length+') | Modified: '+syncRes.modified.join(',')+' ('+syncRes.modified.length+')');
    if(c){p()};//Prog #4
    await this.sqlServ.setSync('timesheets');
    if(syncRes.changed){this.fireBackupDB()};
    return Promise.resolve(syncRes);
  }
//////////////////////////////////////////////////////////////// 
  delayedInitsFN(udbI:boolean) { this.logger.info('♻️ [syncServ|delayedInitsFN] ()...');
    this.logger.info('♻️ [syncServ|delayedInitsFN] UDB Import Detected! ('+udbI+') >>> [DELAYED ALERT/INIT/SYNC ACTIVATED]...');
    if(this.runDelayOnce===1){
      this.runDelayOnce--;let dSIStageCount:number=0;
      this.evServ.subscribe('delayedSyncInit',async dSIStage=>{dSIStageCount++;
        this.logger.info('♻️ [syncServ|delayedInitsFN] - STAGE #'+dSIStageCount+'/2 = '+dSIStage.toUpperCase());
        if(dSIStageCount===2){
          this.evServ.destroy('delayedSyncInit');
          await this.detailServ.setUDBWasImported(false);
          this.evServ.publish('delayedSyncDone',true);
        }
      })
    }else{this.logger.info('♻️ [syncServ|delayedInitsFN] ALREADY RUNNING - Ignoring Subsequent Request!')};
  }
////////////////////////////////////////////////////////////////
  async doShiftsSync(mode:string):Promise<any> { this.logger.info('♻️ [syncServ|doShiftsSync] ('+mode+')...');
    const udbImportd:boolean=await this.detailServ.getUDBWasImported();
    if(udbImportd){this.delayedInitsFN(udbImportd)};
    const c=():boolean=>{if(mode==='refresh'){return true}else{return false}};
    const p=()=>{this.evServ.publish('refreshTSheetsProg',null)};
    let syncRes:any={changed:<boolean>false,ids:<any[]>[],xtras:<any[]>[]};
    // Get Now & Last Sync UTSs
    let lastSyncUTS:number=0;const lSDBVal:number=await this.sqlServ.getSync('rosters');
    if(lSDBVal&&lSDBVal!==null&&lSDBVal!==0&&lSDBVal!==undefined&&this.dT.isV(this.dT.Dut(lastSyncUTS))){lastSyncUTS=lSDBVal}
    else{lastSyncUTS=this.dT.getUT(this.dT.subYs(new Date(),1))};
    //////////////// Mock Old Sync
    lastSyncUTS=this.dT.getUT(this.dT.subDays(new Date(),2));
    ////////////////
    const syncAgo:string=this.dT.fDtN(this.dT.Dut(lastSyncUTS)).replace('about','≈');
    if(c){p()};//Prog #1
    // Get API & DB Object Lists for Comparison
    let apiObs:any[]=[];let dbObs:any[]=[];let dbObIds:any=[];
    apiObs=(await this.deputy.getMy('roster')).data;
    console.log(apiObs);
    this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (ApiObs): '+apiObs.length);
    // if earliest MY roster is more recent than last sync?
    // convert all MY roster ob Dates to UTSs & find lowest
    const lsMyObUTS:number=this.dT.getUT(new Date((_.minBy(apiObs,myO=>this.dT.getUT(new Date(myO.Date)))).Date));
    const myObSyncAgo:string=this.dT.fDtN(this.dT.Dut(lsMyObUTS)).replace('about','≈');
    this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (SyncUTS): '+lastSyncUTS+' ('+syncAgo+')');
    this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (MyObUTS): '+lsMyObUTS+' ('+myObSyncAgo+')');
    if(lastSyncUTS<lsMyObUTS){
      const tDiffS=lsMyObUTS-lastSyncUTS;
      const tDiffM=tDiffS/60;
      const tDiffH=tDiffM/60;
      const tDiffD=tDiffH/24;
      if(tDiffH>24){console.log('Synced '+tDiffD.toFixed(1)+' days [BEFORE] MY data starts')}
      else{console.log('Synced '+tDiffH.toFixed(1)+' hours [BEFORE] MY data starts')}
    }else{
      const tDiffS=lastSyncUTS-lsMyObUTS;
      const tDiffM=tDiffS/60;
      const tDiffH=tDiffM/60;
      const tDiffD=tDiffH/24;
      if(tDiffH>24){console.log('Synced '+tDiffD.toFixed(1)+' days [AFTER] MY data starts')}
      else{console.log('Synced '+tDiffH.toFixed(1)+' hours [AFTER] MY data starts')}
    };
    dbObs=await this.sqlServ.getAllRosters();
    if(c){p()};//Prog #2
    // Check All API Obs Appear In DB List - Add Any Missing
    let addedAPIObIds:any=[];
    for(let i=0;i<dbObs.length;i++){dbObIds.push(dbObs[i].Id)};
    const missAPIObs:any[]=apiObs.filter(apiOb=>!dbObIds.includes(apiOb.Id));
    if(missAPIObs.length>0){
      for(let i=0;i<missAPIObs.length;i++){const missOb:any=missAPIObs[i];await this.sqlServ.insertSingleItem('rosters',missOb);addedAPIObIds.push(missOb.Id)};if(addedAPIObIds.length>0){syncRes.changed=true;syncRes.ids=addedAPIObIds}
    }
    if(c){p()};//Prog #3
    // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 
    let updatedDBObIds:any[]=[];
    const modedAPIObs:any[]=apiObs.filter(apiOb=>!addedAPIObIds.includes(apiOb.Id)&&this.dT.getUT(new Date(apiOb.Modified))>lastSyncUTS);
    if(modedAPIObs.length>0){
      const modIds:any[]=[];for(let i=0;i<modedAPIObs.length;i++){modIds.push(modedAPIObs[i].Id)};
      for(let i=0;i<modedAPIObs.length;i++){
        const modOb=modedAPIObs[i];
        const updateRes:any=await this.sqlServ.replaceItem('rosters','Id',modOb.Id,modOb);
        if(updateRes.result){updatedDBObIds.push(updateRes.id)}};
      if(updatedDBObIds.length>0){syncRes.changed=true;if(syncRes.ids.length>0){let uIds:any[]=syncRes.concat(updatedDBObIds);uIds=_.uniq(uIds)}else{syncRes.ids=updatedDBObIds}};
    };
    /////////////////////////////////////////////////////
    const weekTSArr:any=await this.deputy.getWeekTSheets();
    const extraShiftTSArr:any=weekTSArr.filter(ts=>ts.Roster===null);
    if(extraShiftTSArr.length>0){
      for(let i=0;i<extraShiftTSArr.length;i++){
        const xtraOb:any=extraShiftTSArr[i];
        await this.sqlServ.insertSingleItem('timesheets',xtraOb);
        syncRes.xtras.push(xtraOb);
      }
    }
    /////////////////////////////////////////////////////
    const notMatchedTS:any[]=dbObs.filter(rosO=>rosO.MatchedByTimesheet<1);
    if(notMatchedTS.length>0){
      for(let i=0;i<notMatchedTS.length;i++){
        const nMRos:any=notMatchedTS[i];const nMRosDate:Date=new Date(nMRos.Date);const nMRosId:number=nMRos.Id;
        const apiRes:any=await this.deputy.getMissTSRoster(nMRosDate);
        if(apiRes.result&&apiRes.data.length>0){const modRosArr:any[]=apiRes.data.filter(r=>r.Id===nMRosId);
          if(modRosArr.length>0){const modRosOb:any=modRosArr[0];await this.sqlServ.replaceItem('rosters','Id',modRosOb.Id,modRosOb)}
        }
      }  
    }
    /////////////////////////////////////////////////////
    if(syncRes.changed){console.log('>>>>> SYNC: [RESULT]: { changed: '+syncRes.changed+', ids: '+syncRes.ids+' }.')}
    else{console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');}
    if(c){p()};//Prog #4
    await this.sqlServ.setSync('rosters');
    if(syncRes.changed){this.fireBackupDB()};
    if(udbImportd){this.evServ.publish('delayedSyncInit','shifts');this.doTasksSync('delayed')};
    return Promise.resolve(syncRes);
  }
////////////////////////////////////////////////////////////////
  async doTasksSync(mode:string):Promise<any> { this.logger.info('♻️ [syncServ|doTasksSync] ('+mode+')...');
    // Prep Promise/Return Vars
    let syncRes:any={changed:<boolean>false,ids:<any[]>[]};
    // Get Now & Last Sync UTSs
    const c=():boolean=>{if(mode==='refresh'){return true}else{return false}};
    const p=()=>{this.evServ.publish('refreshTasksProg',null)};
    let lastSyncUTS:number=0;const lSDBVal:number=await this.sqlServ.getSync('tasks');
    if(lSDBVal&&lSDBVal!==null&&lSDBVal!==0&&lSDBVal!==undefined&&this.dT.isV(this.dT.Dut(lastSyncUTS))){lastSyncUTS=lSDBVal}
    else{lastSyncUTS=this.dT.getUT(this.dT.subYs(new Date(),1))};
    if(c){p()};//Prog #1
    // Get API & DB Object Lists for Comparison
    let apiObs:any[]=[];let dbObs:any[]=[];let dbObIds:any=[];let apiObIds:any[]=[];
    const {status,data}=await this.deputy.getResource('Task');if(status===200){apiObs=data};
    dbObs=(await this.sqlServ.getAllTableItems('tasks')).values;
    if(c){p()};//Prog #2
    // Check All API Obs Appear In DB List - Add Any Missing
    let addedAPIObIds:any=[];let deletedDBObIds:any[]=[];
    for(let i=0;i<dbObs.length;i++){dbObIds.push(dbObs[i].Id)};
    for(let i=0;i<apiObs.length;i++){apiObIds.push(apiObs[i].Id)};
    const missAPIObs:any[]=apiObs.filter(apiOb=>!dbObIds.includes(apiOb.Id));
    const missDBObs:any=dbObs.filter(dbOb=>!apiObIds.includes(dbOb.Id));
    if(missDBObs.length>0){
      for(let i=0;i<missDBObs.length;i++){
        const missOb:any=missDBObs[i];
        await this.sqlServ.deleteItem('tasks','Id',missOb.Id);
        deletedDBObIds.push(missOb.Id)
      }
      if(deletedDBObIds.length>0){syncRes.changed=true;syncRes.ids=deletedDBObIds}
    }
    if(missAPIObs.length>0){
      for(let i=0;i<missAPIObs.length;i++){
        const missOb:any=missAPIObs[i];
        await this.sqlServ.insertSingleItem('tasks',missOb);
        addedAPIObIds.push(missOb.Id)
      }
      if(addedAPIObIds.length>0){syncRes.changed=true;syncRes.ids=addedAPIObIds}
    }
    if(c){p()};//Prog #3
    // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 
    let updatedDBObIds:any[]=[];
    const modedAPIObs:any[]=apiObs.filter(apiOb=>!addedAPIObIds.includes(apiOb.Id)&&!deletedDBObIds.includes(apiOb.Id)&&this.dT.getUT(new Date(apiOb.Modified))>lastSyncUTS);
    if(modedAPIObs.length>0){
      const modIds:any[]=[];for(let i=0;i<modedAPIObs.length;i++){modIds.push(modedAPIObs[i].Id)};
      for(let i=0;i<modedAPIObs.length;i++){
        const modOb=modedAPIObs[i];
        const updateRes:any=await this.sqlServ.replaceItem('tasks','Id',modOb.Id,modOb);
        if(updateRes.result){updatedDBObIds.push(updateRes.id)}
      };
      if(updatedDBObIds.length>0){
        syncRes.changed=true;
        if(syncRes.ids.length>0){
          let uIds:any[]=syncRes.ids.concat(updatedDBObIds);
          uIds=_.uniq(uIds)
        }else{syncRes.ids=updatedDBObIds}};
    };
    if(syncRes.changed){console.log('>>>>> SYNC: [RESULT]: { changed: '+syncRes.changed+', ids: '+syncRes.ids+' }.')}
    else{console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');}
    if(c){p()};//Prog #4
    await this.sqlServ.setSync('tasks');
    if(syncRes.changed){this.fireBackupDB()};
    if(mode==='delayed'){this.evServ.publish('delayedSyncInit','tasks')};
    return Promise.resolve(syncRes);
  }
////////////////////////////////////////////////////////////////
  async doMemosSync(mode:string):Promise<any> { this.logger.info('♻️ [syncServ|doMemosSync] ('+mode+')...');
    // Prep Promise/Return Vars
    let syncRes:any={changed:<boolean>false,ids:<any[]>[]};
    // Get Now & Last Sync UTSs
    const c=():boolean=>{if(mode==='refresh'){return true}else{return false}};
    const p=()=>{this.evServ.publish('refreshTasksProg',null)};
    let lastSyncUTS:number=0;const lSDBVal:number=await this.sqlServ.getSync('memos');
    if(lSDBVal&&lSDBVal!==null&&lSDBVal!==0&&lSDBVal!==undefined&&this.dT.isV(this.dT.Dut(lastSyncUTS))){lastSyncUTS=lSDBVal}
    else{lastSyncUTS=this.dT.getUT(this.dT.subYs(new Date(),1))};
    if(c){p()};//Prog #1
    // Get API & DB Object Lists for Comparison
    let apiObs:any[]=[];let dbObs:any[]=[];let dbObIds:any=[];let apiObIds:any[]=[];
    const {status,data}=await this.deputy.getResource('Memo');if(status===200){apiObs=data};
    dbObs=(await this.sqlServ.getAllTableItems('memos')).values;
    if(c){p()};//Prog #2
    // Check All API Obs Appear In DB List - Add Any Missing
    let addedAPIObIds:any=[];let deletedDBObIds:any[]=[];
    for(let i=0;i<dbObs.length;i++){dbObIds.push(dbObs[i].Id)};
    for(let i=0;i<apiObs.length;i++){apiObIds.push(apiObs[i].Id)};
    const missAPIObs:any[]=apiObs.filter(apiOb=>!dbObIds.includes(apiOb.Id));
    const missDBObs:any=dbObs.filter(dbOb=>!apiObIds.includes(dbOb.Id));
    if(missDBObs.length>0){
      for(let i=0;i<missDBObs.length;i++){
        const missOb:any=missDBObs[i];
        await this.sqlServ.deleteItem('memos','Id',missOb.Id);
        deletedDBObIds.push(missOb.Id)
      }
      if(deletedDBObIds.length>0){syncRes.changed=true;syncRes.ids=deletedDBObIds}
    }
    if(missAPIObs.length>0){
      for(let i=0;i<missAPIObs.length;i++){
        const missOb:any=missAPIObs[i];
        await this.sqlServ.insertSingleItem('tasks',missOb);
        addedAPIObIds.push(missOb.Id)
      }
      if(addedAPIObIds.length>0){syncRes.changed=true;syncRes.ids=addedAPIObIds}
    }
    if(c){p()};//Prog #3
    // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 
    let updatedDBObIds:any[]=[];
    const modedAPIObs:any[]=apiObs.filter(apiOb=>!addedAPIObIds.includes(apiOb.Id)&&!deletedDBObIds.includes(apiOb.Id)&&this.dT.getUT(new Date(apiOb.Modified))>lastSyncUTS);
    if(modedAPIObs.length>0){
      const modIds:any[]=[];for(let i=0;i<modedAPIObs.length;i++){modIds.push(modedAPIObs[i].Id)};
      for(let i=0;i<modedAPIObs.length;i++){
        const modOb=modedAPIObs[i];
        const updateRes:any=await this.sqlServ.replaceItem('memos','Id',modOb.Id,modOb);
        if(updateRes.result){updatedDBObIds.push(updateRes.id)}
      };
      if(updatedDBObIds.length>0){
        syncRes.changed=true;
        if(syncRes.ids.length>0){
          let uIds:any[]=syncRes.ids.concat(updatedDBObIds);
          uIds=_.uniq(uIds)
        }else{syncRes.ids=updatedDBObIds}};
    };
    if(syncRes.changed){console.log('>>>>> SYNC: [RESULT]: { changed: '+syncRes.changed+', ids: '+syncRes.ids+' }.')}
    else{console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');}
    if(c){p()};//Prog #4
    await this.sqlServ.setSync('tasks');
    if(syncRes.changed){this.fireBackupDB()};
    return Promise.resolve(syncRes);
  }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
}


