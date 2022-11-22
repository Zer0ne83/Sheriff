import { DateTimeService } from 'src/app/services/datetime.service';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Capacitor } from '@capacitor/core';
import { HTTP } from '@ionic-native/http/ngx';
import { StorageService } from './storage.service';
import { Directory, Encoding, Filesystem, CopyOptions, GetUriResult, StatResult } from '@capacitor/filesystem';
import { EventsService } from './events.service';
import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Dialog } from '@capacitor/dialog';
import { App } from '@capacitor/app';
import { HttpClient } from "@angular/common/http";
import { Platform } from '@ionic/angular';
///////////////////////////////////////////////////////
@Injectable({ providedIn: 'root' })
//////////////////////////////////////////////////////
export class FileSystemService {
//////////////////////////////////////////////////////
  fsIsReady: boolean|null = null;
  fsReadyTime: string|null = null;
  permDenyCount = 0;
  phoneFS:Directory = Directory.External;
  appFS:Directory = Directory.External;
  buDir='Sheriff/backups/';
  // --------------------------------------------------
  appDocs:Directory = Directory.Documents;
  appData:Directory = Directory.Data;
  appCache:Directory = Directory.Cache;
  appExt:Directory = Directory.External;
//////////////////////////////////////////////////////
  extFileCodes:any[]=['PAD','NOT_FOUND_ERR','SECURITY_ERR','ABORT_ERR','NOT_READABLE_ERR','ENCODING_ERR','NO_MODIFICATION_ALLOWED_ERR','INVALID_STATE_ERR','SYNTAX_ERR','INVALID_MODIFICATION_ERR','QUOTA_EXCEEDED_ERR','TYPE_MISMATCH_ERR','PATH_EXISTS_ERR'];
//////////////////////////////////////////////////////
  fileTransfer:FileTransferObject;
//////////////////////////////////////////////////////
  constructor(
    private fileChooser:FileChooser,
    private evServ:EventsService,
    private shttp:HTTP,
    private logger:NGXLogger,
    private storeServ:StorageService,
    private transfer:FileTransfer,
    private file:File,
    private fileP:FilePath,
    private httpClient:HttpClient,
    private dT:DateTimeService,
    private plt:Platform
  ) { this.plt.ready().then(()=>{this.fileTransfer=this.transfer.create()}) }
/////////////////////////////////////////////////////
  async reInitFS(uUK) {
    const fsPermErrOpts = { title: 'Permission Required', message: 'Without access to your device\'s filesysem, Sheriff cannot save/backup your Deputy records/data. Please ALLOW ACCESS when prompted again to continue, otherwise Sheriff will exit.', okButtonTitle: 'Prompt Again', cancelButtonTitle: 'Exit App' }
    this.evServ.subscribe('doReInitFS', doReInit => {
      if ( doReInit ) { this.evServ.destroy('doReInitFS'); this.initFS(uUK);
      } else { this.permDenyCount++;
        if ( this.permDenyCount < 2 ) { Dialog.confirm(fsPermErrOpts).then( didConfirm => { if ( didConfirm ) { this.evServ.destroy('doReInitFS'); this.initFS(uUK); } else { this.evServ.destroy('doReInitFS'); App.exitApp(); } });
        } else { this.evServ.destroy('doReInitFS'); App.exitApp(); }
      }
    });
  } 
/////////////////////////////////////////////////////
  async initFS(uUK) {
    this.logger.info('[FileService|initFS] ()...');
    const userPermStatus = await Filesystem.checkPermissions();
    if ( userPermStatus.publicStorage === 'granted' ) {
      this.fsIsReady = true;
      this.evServ.publish('fsPermsGranted', true);
      this.logger.info('[FilesystemService|initFS] (PermCheck) Result: \uD83D\uDFE9[' + userPermStatus.publicStorage.toUpperCase() + ']');
      this.storeServ.setItem(uUK + 'fsPerm', 'true').then( () => { this.logger.info('[FilesystemService|initFS] (PermCheck -> Storage) \uD83D\uDD11 User\'s fsPerm Key Set to [TRUE].');
      }).catch( () => { this.logger.info('[FilesystemService|initFS] (PermCheck -> Storage) \uD83D\uDD11 ERROR: \uD83D\uDFE5 Failed to Set User\'s fsPerm Key.'); });
    } else { this.logger.info('[FilesystemService|initFS] (PermCheck) Result: \uD83D\uDFE5[' + userPermStatus.publicStorage.toUpperCase() + ']');
      this.reInitFS(uUK);
      Filesystem.requestPermissions().then( permStat => {
        if ( permStat.publicStorage === 'granted') {
          this.evServ.publish('doReInitFS', true);
        } else { this.evServ.publish('doReInitFS', false); }
      }).catch( () => { this.evServ.publish('doReInitFS', false); });
    }
  }
/////////////////////////////////////////////////////
  async fileWrite(baseFS:Directory, pathToFile:string, fileData:string):Promise<any> {
    try { const fWRes = await Filesystem.writeFile({ path: pathToFile, data: fileData, directory: baseFS, encoding: Encoding.UTF8, recursive: true });
      return Promise.resolve({ result: true, data: fWRes.uri });
    } catch (fWErr) { return Promise.resolve({ result: false, data: fWErr.message }); }
  }
/////////////////////////////////////////////////////
  async fileRead(baseFS:Directory, pathToFile:string):Promise<any> {
    try {
      const fRRes = await Filesystem.readFile({ path: pathToFile, directory: baseFS, encoding: Encoding.UTF8 });
      return Promise.resolve({ result: true, data: fRRes.data });
    } catch (fRErr) { return Promise.resolve({ result: false, data: fRErr.message }); }
  }
/////////////////////////////////////////////////////
  async fileAppend(baseFS:Directory, pathToFile:string, appendData:string):Promise<any> {
    try { await Filesystem.appendFile({ path: pathToFile, data: appendData, directory: baseFS, encoding: Encoding.UTF8 });
    return Promise.resolve({ result: true, data: 'success' });
    } catch ( fAErr ) { return Promise.resolve({ result: false, data: fAErr.message }); }
  }
/////////////////////////////////////////////////////
  async fileDelete(baseFS:Directory, pathToFile:string):Promise<any> {
    try { await Filesystem.deleteFile({ path: pathToFile, directory: baseFS });
    return Promise.resolve({ result: true, data: 'success' });
    } catch ( fDErr ) { return Promise.resolve({ result: false, data: fDErr.message }); }
  } 
/////////////////////////////////////////////////////
  async mkdir(baseFS:Directory, pathToDir:string):Promise<any> {
    try { await Filesystem.mkdir({ path: pathToDir, directory: baseFS, recursive: true });
      return Promise.resolve({result: true, data: 'success' });
    } catch (mkdirErr) { return Promise.resolve({result: false, data: mkdirErr.message}); }
  }
/////////////////////////////////////////////////////
  async rmdir(baseFS:Directory, pathToDir:string):Promise<any>{
    try { await Filesystem.rmdir({ path: pathToDir, directory: baseFS });
      return Promise.resolve({result: true, data: 'success' });
    } catch (rmdirErr) { return Promise.resolve({result: false, data: rmdirErr.message}); }
  }
/////////////////////////////////////////////////////
  async readdir(baseFS:Directory, pathToDir:string):Promise<any> {
    try { const readdirRes = await Filesystem.readdir({ path: pathToDir, directory: baseFS });
      return Promise.resolve({result: true, data: readdirRes});
    } catch (readDirErr) { return Promise.resolve({ result: false, data: readDirErr.message }); }
  }
/////////////////////////////////////////////////////
  async stat(baseFS:Directory, pathToFile:string):Promise<any> {
    try { const statRes = await Filesystem.stat({ path: pathToFile, directory: baseFS });
      if ( statRes ) { return Promise.resolve({ result: true, data: statRes }); }
    } catch (statErr) { return Promise.resolve({ result: false, data: null }); }
  }
/////////////////////////////////////////////////////
  async copy(fromBaseFS:Directory, toBaseFS:Directory, fromFilePath:string, toFilePath:string):Promise<any> {
    try { await Filesystem.copy({ from: fromFilePath, to: toFilePath, directory: fromBaseFS, toDirectory: toBaseFS });
      return Promise.resolve({result: true, data: 'success' })
    } catch (copyErr) { return Promise.resolve({result:false, data:copyErr.message}); }
  }
/////////////////////////////////////////////////////
  async copyByPath(fromFilePath:string, toFilePath:string):Promise<any> {
    try { await Filesystem.copy({ from: fromFilePath, to: toFilePath });
      return Promise.resolve({result: true, data: 'success' })
    } catch (copyErr) { return Promise.resolve({result:false, data:copyErr.message}); }
  }
//////////////////////////////////////////////////////
  async pickOpen() { return await this.fileChooser.open()}
//////////////////////////////////////////////////////
  pickPhoto(){return this.fileChooser.open()}
//////////////////////////////////////////////////////
  async dlFile(url:string,fileNExt:string):Promise<string> {
    this.logger.info('[fileServ|dlFile] ('+url+')...');
    try{
      const {isFile,nativeURL}=await this.shttp.downloadFile(url,null,null,'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+fileNExt);
      if(isFile){const convFileUri:string=Capacitor.convertFileSrc(nativeURL);if(convFileUri!==null&&convFileUri!==undefined&&convFileUri.length>0){return Promise.resolve(convFileUri)}
      else{return Promise.resolve(null)}}
    }catch(dlErr){return Promise.resolve(null)}
  }
//////////////////////////////////////////////////////
  async replaceMeAva(webUrl:string):Promise<boolean> { this.logger.info('[fileServ|replaceMeAva] ()...')
    try{
      const {isFile}=await this.shttp.downloadFile(webUrl,null,null,'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/meAvatarMeTemp');
      if(isFile){
        Filesystem.deleteFile({path:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/meAvatar'});
        Filesystem.rename({
          from:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/meAvatarMeTemp',
          to:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/meAvatar'
        });
        return Promise.resolve(true);
      }else{return Promise.resolve(false)}
    }catch{return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////
  async replaceWorkAva(webUrl:string):Promise<boolean> { this.logger.info('[fileServ|replaceWorkAva] ()...')
    try{
      const {isFile}=await this.shttp.downloadFile(webUrl,null,null,'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/workAvatarWorkTemp');
      if(isFile){
        Filesystem.deleteFile({path:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/workAvatar'});
        Filesystem.rename({
          from:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/workAvatarWorkTemp',
          to:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/workAvatar'
        });
        return Promise.resolve(true);
      }else{return Promise.resolve(false)}
    }catch{return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////
  async compareReplaceAva(avaName:string,newAvaWebUrl:string,currentAvaSize:number):Promise<boolean>{
    this.logger.info('[fileServ|compareReplaceAvas] ('+avaName+','+newAvaWebUrl+','+currentAvaSize+')');
    try{
      const {isFile}=await this.shttp.downloadFile(newAvaWebUrl,null,null,'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+avaName+'AvatarTemp');
      if(isFile){
        const tempStat:any=await Filesystem.stat({path:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+avaName+'AvatarTemp'});
        if(tempStat){
          if(tempStat.size===currentAvaSize){
            Filesystem.deleteFile({path:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+avaName+'AvatarTemp'});
            return Promise.resolve(false);
          }else{
            Filesystem.deleteFile({path:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+avaName+'Avatar'});
            Filesystem.rename({from:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+avaName+'AvatarTemp',to:'file:///storage/emulated/0/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+avaName+'Avatar'});
            return Promise.resolve(true)
          }
        }
      }else{return Promise.resolve(false)}
    }catch{return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////
  niceBytes(bytes:number,decimals=2) {
    if(bytes===0) return 'empty';const k=1024;const dm=decimals<0?0:decimals;const sizes=['Bytes','kB','MB','GB','TB','PB','EB','ZB','YB'];const i=Math.floor(Math.log(bytes)/Math.log(k));return parseFloat((bytes/Math.pow(k,i)).toFixed(dm))+' '+sizes[i];
  }
//////////////////////////////////////////////////////
  async getDBBUTS(uUK):Promise<any> { this.logger.info('[fileServ|getDBBUTS] ()...');
    const {status,data} = await this.shttp.sendRequest('https://zer0ne.dev/sheriff/up/'+uUK+'dbSQLite.txt',{method:'get',timeout:20,responseType:'text'});
    const msTS:number=Number(data);const ts:number=Math.floor(msTS/1000);const tsD:Date=this.dT.Dut(ts);
    if(status===200){return Promise.resolve(tsD)}else{return Promise.resolve('error')}
  }
//////////////////////////////////////////////////////
  async renameExistBU(rnOpts):Promise<any> {
    try { await Filesystem.rename(rnOpts);return Promise.resolve({result: true, data: 'success' })}
    catch (rnErr) { return Promise.resolve({result: false, data: rnErr.message}); }
  }
//////////////////////////////////////////////////////
  async dbbuUpload(uUK:string) { this.logger.info('[fileServ|uploadFile] ('+uUK+')...');
    const ulSuccess=()=>{this.evServ.publish('dbbuUploadDone',true)};
    const ulFail=()=>{this.evServ.publish('dbbuUploadDone',false)};
    await this.fileDelete(this.phoneFS,'Sheriff/temp-'+uUK+'.db');
    const tempBUDirRes:any=await this.stat(this.phoneFS,'Sheriff');
    const tempBUDirPath:string=tempBUDirRes.data.uri;
    const tempBULocalPath:string=tempBUDirPath+'/temp-'+uUK+'.db';
    let sT:Date=new Date();
    this.evServ.subscribe('cpDone',async mt => {
      this.evServ.destroy('cpDone');const dur:any=this.evServ.getDur(sT);
      this.logger.info('[fileServ|dbbuUpload|copyTemp] (Copy Time): '+dur+'ms');sT=new Date();
      try {
        const dbbuOpts:FileUploadOptions={fileKey:'file',fileName:uUK+'dbSQLite.db',httpMethod:'post',mimeType:'application/x-sqlite3'};
        const dbbuServer:string=encodeURI('http://zer0ne.dev:6969/upload');
        const dbbuLocalFileData=await this.stat(this.appFS,'/Sheriff/temp-'+uUK+'.db');
        console.log(dbbuLocalFileData);
        const dbbuLocalFileUri=dbbuLocalFileData.data.uri;
        console.log(dbbuLocalFileUri);
        const dbbuFilePath=Capacitor.convertFileSrc(dbbuLocalFileUri);
        console.log(dbbuFilePath);
        const buRes:any=await this.fileTransfer.upload('file:///sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/temp-'+uUK+'.db',dbbuServer,dbbuOpts,true);
        console.log(buRes);
        if(buRes.responseCode===200){
          const buResObj:any=JSON.parse(buRes.response); const dur2:any=this.evServ.getDur(sT);
          this.logger.info('[fileServ|dbbuUpload] Sheriff FS Replied: ('+buRes.responseCode+') - success: '+buResObj.success+', message: '+buResObj.message+' - '+dur2+'ms');
          ulSuccess();
        }else{ulFail()}
      } catch (buErr) {ulFail();console.log(buErr)}
    });
    const cpCheck=setInterval(async()=>{const tfData:any=(await this.stat(this.appFS,'Sheriff/temp-'+uUK+'.db')).data;if(tfData!==null){clearInterval(cpCheck);const tfMTime:string=this.dT.format((this.dT.tD(tfData.mtime)),'hh:mm:ss:SS');this.evServ.publish('cpDone',tfMTime)}},100);
    this.copyByPath('/data/data/dev.zer0ne.sheriff/databases/'+uUK+'dbSQLite.db',tempBULocalPath);
  }
//////////////////////////////////////////////////////
  async getCurrentDBStat(uUK:string):Promise<any> { this.logger.info('[fileServ|getCurrentDBStats] ()...');
    try{const dbStatRes:any=await Filesystem.stat({path:'/data/data/dev.zer0ne.sheriff/databases/'+uUK+'dbSQLite.db'});
    if(dbStatRes){return Promise.resolve({result:true,data:dbStatRes})}else{return Promise.resolve({result:false})}
    }catch{return Promise.resolve({result:false})}
  }
//////////////////////////////////////////////////////
  async listDBFiles():Promise<any> { this.logger.info('[fileServ|listDBFiles] ()...');
    try{const dbDirRes:any=await Filesystem.readdir({path:'/data/data/dev.zer0ne.sheriff/databases'});
    if(dbDirRes&&dbDirRes.files.length>0){return Promise.resolve({result:true,data:dbDirRes.files})}else{return Promise.resolve({result:false})}}
    catch(lDBFErr){this.logger.info('[fileServ|listDBFiles] (Error): '+JSON.stringify(lDBFErr))}
  }
//////////////////////////////////////////////////////
  async getFireDBBUFile(uUK:string) { this.logger.info('[fileServ|getFireDBBUFile] ()...');
    const fbDBUri=async():Promise<string|null>=>{
      try{
        const statRes:StatResult=await Filesystem.stat({path:'Sheriff/fireDBBU.db',directory:this.phoneFS});
        if(statRes){return statRes.uri}else{return null}
      }catch{return null}
    };  
    const doDel=async(delUri:string):Promise<boolean>=>{const slp=()=>{return new Promise(resolve=>setTimeout(resolve,500))};Filesystem.deleteFile({path:delUri});await slp();return Promise.resolve(true)};
    const doCopy=()=>{
      const cpCheckLoop=setInterval(async()=>{let fU:string|null=await fbDBUri();
        if(fU!==null){clearInterval(cpCheckLoop);const ulfType:string='application/x-sqlite3';const ulfDataSrc:string = Capacitor.convertFileSrc(fU);const rawBlob:Blob=await fetch(ulfDataSrc).then((res:Response)=>res.blob());const ulfBlob:Blob=rawBlob.slice(0,rawBlob.size,ulfType);this.evServ.publish('dbbuBlob',ulfBlob)}
      },100);
      this.copyByPath('/data/data/dev.zer0ne.sheriff/databases/'+uUK+'dbSQLite.db','file:///sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/fireDBBU.db');
    };
    const preEx:any=await fbDBUri();
    if(preEx!==null){
      await doDel(preEx.toString());
      doCopy()
    }else{doCopy()}
  }
//////////////////////////////////////////////////////
  async dlFireBUForInstall(dlURL:string):Promise<boolean> { this.logger.info('[fileServ|dlFireBUForInstall] ()...');
    const buInstallUri:string='file:///sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/backups/fireBUInstall.db';
    try{
      const dlRes:any=await this.shttp.downloadFile(dlURL,null,null,buInstallUri);
      if(dlRes.isFile){
        const dlBUStatRes:any=await Filesystem.stat({path:buInstallUri});
        if(dlBUStatRes){return Promise.resolve(true)
        }else{return Promise.resolve(false)}
      }else{return Promise.resolve(false)}
    }catch(dlErr){this.logger.info('[fileServ|dlFireDBBU] (Error): '+JSON.stringify(dlErr));return Promise.resolve(false)}
  }
//////////////////////////////////////////////////////
  async dlImage4SQLite(dlURL:string,saveNameWExt:string):Promise<any> { this.logger.info('[fileServ|dlImage4SQLite] ('+dlURL+')...');
    const sUri:string='file:///sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/assets/'+saveNameWExt;
    try{
      const dlRes:any=await this.shttp.downloadFile(dlURL,null,null,sUri);
      if(dlRes.isFile){
        const dlImgStatRes:any=await Filesystem.stat({path:sUri});
        if(dlImgStatRes){
          const lcUri:string=Capacitor.convertFileSrc(dlImgStatRes.uri);
          return Promise.resolve({result:true,uri:lcUri,size:dlImgStatRes.size,mtime:dlImgStatRes.mtime})
        }else{return Promise.resolve({result:false})}
      }else{return Promise.resolve({result:false})}
    }catch(dlErr){this.logger.info('[fileServ|dlImage4SQLite] (Error): '+JSON.stringify(dlErr));return Promise.resolve({result:false})}
  }
//////////////////////////////////////////////////////
  async dlFireDBBU(dlURL:string):Promise<any> { this.logger.info('[fileServ|dlFireDBBU] ('+dlURL+')...');
    const sUri:string='file:///sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/backups/fireDBBU.db';
    try{
      const dlRes:any=await this.shttp.downloadFile(dlURL,null,null,sUri);
      if(dlRes.isFile){
        const dlBUStatRes:any=await Filesystem.stat({path:sUri});
        if(dlBUStatRes){return Promise.resolve({result:true,uri:dlBUStatRes.uri})
        }else{return Promise.resolve({result:false})}
      }else{return Promise.resolve({result:false})}
    }catch(dlErr){this.logger.info('[fileServ|dlFireDBBU] (Error): '+JSON.stringify(dlErr));return Promise.resolve({result:false})}
  }
//////////////////////////////////////////////////////
  async dbbuDelete(uUK:string) { this.logger.info('[fileServ|budbDelete] ('+uUK+')');
    const delSuccess=()=>{this.evServ.publish('dbbuDeleteDone',true)};
    const delFail=()=>{this.evServ.publish('dbbuDeleteDone',false)};
    // Delete Server DBBU
    const delServerBU=async()=>{
      try { const {status,data,error}=await this.shttp.sendRequest('http://zer0ne.dev:6969/delete',{method:'post',data:{uuk:uUK},headers:{uuk:uUK}});
        if(status===200){ const resObj:any=JSON.parse(data);this.logger.info('[fileServ|dbbuDelete|ServerBU] (RESULT): ['+status.toString()+'] - success: '+resObj.success+', message: '+resObj.message);delSuccess()}else{this.logger.info('[fileServ|dbbuDelete|ServerBU] (RESULT): ['+status.toString()+'] - error: '+error);delFail()}
      }catch(err){this.logger.info('[fileServ|dbbuDelete|ServerBU] (RESULT): ['+status.toString()+'] - error: '+JSON.stringify(err));delFail()}
    };
    // Delete Local DBBUs
    const buLocals:any[]=['Sheriff/backups/'+uUK+'dbSQLite.db','Sheriff/db/'+uUK+'dbSQLite.db','Sheriff/temp-'+uUK+'.db'];
    for(let i=0;i<buLocals.length;i++){
      const oldDBPath:string=buLocals[i];const oldStat:any=(await this.stat(this.appFS,oldDBPath)).data;
      if(oldStat!==null){this.logger.info('[fileServ|dbbuDelete|OldLocalDBs] (Found): Old DB @ '+oldStat.uri);const delOldRes:any=await this.fileDelete(this.phoneFS,oldDBPath);if(delOldRes.result){this.logger.info('[fileServ|dbbuDelete|OldLocalDBs] (Delete): SUCCESS.')}else{this.logger.info('[fileServ|dbbuDelete|OldLocalDBs] (Delete): FAIL.')}}else{this.logger.info('[fileServ|dbbuDelete|OldLocalDBs] (Not Found): Old DB @ '+oldDBPath)}
    }
    setTimeout(()=>{delServerBU()},500);
  }
//////////////////////////////////////////////////////
  async dbbuDownload(uUK:string):Promise<any> { this.logger.info('[fileServ|dbbuDownload] ('+uUK+')...');
    const doRename=async():Promise<boolean>=>{const rNOpts:CopyOptions={from:'Sheriff/backups/'+uUK+'dbSQLite.db',to:'Sheriff/backups/OLD'+uUK+'dbSQLite.db',directory:this.phoneFS,toDirectory:this.phoneFS};const rNRes:any=await this.renameExistBU(rNOpts);if(rNRes.result){this.logger.info('[fileServ|dbbuDownload|RenameOldBU] (SUCCESS) - Renamed Existing BU to OLD...');return Promise.resolve(true)}else{this.logger.info('[fileServ|dbbuDownload|RenameOldBU] (ERROR) - Error Renaming Existing BU to OLD.');return Promise.resolve(false)}};
    const undoRename=async():Promise<boolean>=>{const rNOpts:CopyOptions={from:'Sheriff/backups/OLD'+uUK+'dbSQLite.db',to:'Sheriff/backups/'+uUK+'dbSQLite.db',directory:this.phoneFS,toDirectory:this.phoneFS};const rNRes:any=await this.renameExistBU(rNOpts);if(rNRes.result){this.logger.info('[fileServ|dbbuDownload|UndoRenameOldBU] (SUCCESS) - Renamed Existing BU [REMOVED OLD].');return Promise.resolve(true)}else{this.logger.info('[fileServ|dbbuDownload|UndoRenameOldBU] (ERROR) - Error Removing OLD from Existing BU Filename.');return Promise.resolve(false)}};
    // Check for Existing BU 
    let existBU:boolean=false;const statExistBU=await this.stat(this.phoneFS,this.buDir+uUK+'dbSQLite.db');statExistBU.result?existBU=true:existBU=false;
    // Rename Existing BU (OLD) if Exists
    if(existBU){await doRename()};
    // Attempt Server BU Download
    const sUri:string='file:///sdcard/Android/data/dev.zer0ne.sheriff/files/Sheriff/backups/'+uUK+'dbSQLite.db';
    try { const dlRes:any = await this.shttp.downloadFile('https://zer0ne.dev/sheriff/up/uploads/'+uUK+'dbSQLite.db',null,null,sUri);
      // If DL Successful, get Stats/Timestamp & Delete OLD BU
      if(dlRes.isFile){
        const newBUStatRes:any=await this.stat(this.appFS,'Sheriff/backups/'+uUK+'dbSQLite.db');
        let newBUObj:any={rname:uUK+'dbSQLite.db',nname:'dbSQLite.db',uri:newBUStatRes.data.uri,rsize:newBUStatRes.data.size,nsize:null,rdate:null,ndate:null,ago:null,store:'both'};
        newBUObj.nsize=this.niceBytes(newBUStatRes.data.size);
        let buDate:Date;const serverBUDate:any=await this.getDBBUTS(uUK);if(serverBUDate!=='error'){buDate=serverBUDate}else{buDate=this.dT.tD(newBUStatRes.data.mtime)};
        newBUObj.rdate=buDate;newBUObj.ndate=this.dT.format(buDate,'d MMM yyyy h:mma');newBUObj.ago=this.dT.fDtN(buDate);
        // Delete OLD BU
        const delOLD:any=await this.fileDelete(this.phoneFS,'Sheriff/backups/OLD'+uUK+'dbSQLite.db');
        if(delOLD.result){this.logger.info('[fileServ|quickDBDownload|deleteOLD] (SUCCESS) Deleted Old BU')}else{this.logger.info('[fileServ|quickDBDownload|deleteOLD] (FAIL) Failed to Delete Old BU')};
        // Return New BU File Info
        return Promise.resolve({result:true,data:newBUObj})
      // If DL Not Exist or Fail Undo Rename OLD BU & Return Fail
      }else{
        // If ExistBU TRUE - Undo Rename, get Stats/TS & Return Local BU File Info
        if(existBU){
          const rNUDRes:boolean=await undoRename();
          if(rNUDRes){this.logger.info('[fileRes|dbbuDownload|UndoRename) (SUCCESS): OLD Local BU Renamed - OK - Using/Returning That...');
            const oldBUStatRes:any=await this.stat(this.appFS,'Sheriff/backups/'+uUK+'dbSQLite.db');
            let oldBUObj:any={rname:uUK+'dbSQLite.db',nname:'dbSQLite.db',uri:oldBUStatRes.data.uri,rsize:oldBUStatRes.data.size,nsize:null,rdate:null,ndate:null,ago:null,store:'local'};
            oldBUObj.nsize=this.niceBytes(oldBUStatRes.data.size);
            oldBUObj.rdate=this.dT.tD(oldBUStatRes.data.mtime);
            oldBUObj.ndate=this.dT.format(oldBUObj.rdate,'d MMM yyyy h:mma');
            oldBUObj.ago=this.dT.fDtN(oldBUObj.rdate);
            return Promise.resolve({result:true,data:oldBUObj})
          }else{this.logger.info('[fileRes|dbbuDownload|UndoRename) (FAILED): Failed to Undo Rename of OLD Local BU - Returning No BU.');return Promise.resolve({result:false,data:404})}
        // ELSE Return Fail - NK Reason
        }else{this.logger.info('[fileRes|dbbuDownload) Cloud DL 404 & No OLD Local BU Found - Returning No BU.');return Promise.resolve({result:false,data:404})}
      }
    } catch (err) {
      if(existBU){
        const rNUDRes:boolean=await undoRename();
        if(rNUDRes){this.logger.info('[fileRes|dbbuDownload|UndoRename) (SUCCESS): OLD Local BU Renamed - OK - Using/Returning That...');
          const oldBUStatRes:any=await this.stat(this.appFS,'Sheriff/backups/'+uUK+'dbSQLite.db');
          let oldBUObj:any={rname:uUK+'dbSQLite.db',nname:'dbSQLite.db',uri:oldBUStatRes.data.uri,rsize:oldBUStatRes.data.size,nsize:null,rdate:null,ndate:null,ago:null,store:'local'};
          oldBUObj.nsize=this.niceBytes(oldBUStatRes.data.size);
          oldBUObj.rdate=this.dT.tD(oldBUStatRes.data.mtime);
          oldBUObj.ndate=this.dT.format(oldBUObj.rdate,'d MMM yyyy h:mma');
          oldBUObj.ago=this.dT.fDtN(oldBUObj.rdate);
          return Promise.resolve({result:true,data:oldBUObj})
        }else{this.logger.info('[fileRes|dbbuDownload|UndoRename) (FAILED): Failed to Undo Rename of OLD Local BU - Returning No BU.');return Promise.resolve({result:false,data:err})}
      // ELSE Return Fail - NK Reason
      }else{this.logger.info('[fileRes|dbbuDownload) Cloud DL 404 & No OLD Local BU Found - Returning No BU.');return Promise.resolve({result:false,data:err})}
    }
  }
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
}
