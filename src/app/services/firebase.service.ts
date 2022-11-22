import { DetailService } from 'src/app/services/detail.service';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { DateTimeService } from './datetime.service';
import { StorageService } from './storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference, DocumentData, DocumentReference, DocumentSnapshot, QuerySnapshot } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { DeputyService } from './deputy.service';
import { EventsService } from './events.service';
import { SQLiteService } from './sqlite.service';
import { URLOpenListenerEvent, RestoredListenerEvent } from '@capacitor/app';
import { Observable } from 'rxjs';
import { finalize, tap, map, first } from 'rxjs/operators';
import { FileSystemService } from './filesystem.service';
import { c2DCObj } from './profileData';
import { AppUserSettings, defaultAUSettings, AppUserUser, defaultAUUser } from './appTypes';
import * as _ from 'lodash';
/////////////////////////////////////////////////////
export interface myFile{fileRef:string,fileCat:string,fileName:string,filePath:string,fileType:string,fileSize:number,fileDate:string};
export type fireAuthDoc={dp_token:string,dp_refresh:string,dp_expires:string,dp_domain:string,fcm_token?:string};

/////////////////////////////////////////////////////
@Injectable({providedIn:'root'})export class FirebaseService {
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// FB User Vars
  fbUser:any=null;
  fbLoggedIn:boolean=false;
  fbUId:string=null;
  fbMsgToken:string=null;
  fbToken:string=null;
  fbProfileUpdating:boolean=false;
  tLoopIsActive:boolean=false;
/////////////////////////////////////////////////////
  fixLoopCount:number=0;
// FB Storage Vars
  settingsDocId:any=null;
  appSettingsObj:any=null;
// Uploads
  isFileULing:boolean;
  isFileULed:boolean;
  fileUploads:any[]=[];
  ulTask:AngularFireUploadTask;
  ulPercVal:Observable<number>;
  ulTrackSnapshot:Observable<any>;
  ulFileURL:Observable<string>;
  myFiles:Observable<myFile[]>;
  specFName:string;
  specFSize:number;
  fbStoreDirs:any={db:'dbBackups/',image:'imageFiles/',other:'otherFiles/'};
  dbCollection:AngularFirestoreCollection<myFile>;
  imageCollection:AngularFirestoreCollection<myFile>;
  otherCollection:AngularFirestoreCollection<myFile>;
  fileLists:any={db:<myFile[]>[],image:<myFile[]>[],other:<myFile[]>[]};
  gFFLInProg:boolean=false;
  tempUPO:any=null;
  loginMethodKey:string='notsignedin';
/////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger, 
    private fireStore:AngularFirestore,
    private fireStorage:AngularFireStorage,
    private fireAuth:AngularFireAuth,
    private dT:DateTimeService,
    private storeServ:StorageService,
    private deputy:DeputyService,
    private evServ:EventsService,
    private dS:DetailService,
    private sqlServ:SQLiteService,
    private fileServ:FileSystemService,
  ){
    this.isFileULing=false;
    this.isFileULed=false;
    this.dbCollection=fireStore.collection<myFile>('dbCollection');
    this.imageCollection=fireStore.collection<myFile>('imageCollection');
    this.otherCollection=fireStore.collection<myFile>('otherCollection');
    this.myFiles=this.dbCollection.valueChanges();
    fireAuth.onAuthStateChanged(async(oacFBUser:firebase.User)=>{
      this.logger.info('🔥 [fireServ|authState] \uD83D\uDD25\uD83D\uDE92\uD83E\uDDEF (EVENT) AuthState Changed:');
      let uJ:any;oacFBUser!==null?uJ=oacFBUser.toJSON():uJ=null;
      if(uJ&&uJ.uid){
        if(!this.fbLoggedIn){this.fbLoggedIn=true};
        this.fbUser=oacFBUser;
        this.fbUId=uJ.uid;
        this.fbToken=(await oacFBUser.getIdToken(false));
        this.logger.info('🔥 [fireServ|authState] 🟢 isLoggedIn: '+this.fbLoggedIn+', liMethodKey: '+this.loginMethodKey);
        if(this.loginMethodKey==='fctokenfet'||this.loginMethodKey==='fctokendpt'){this.tempUPO=null};
        this.evServ.publish('fbUserAccount',{isLoggedIn:this.fbLoggedIn,liMethodKey:this.loginMethodKey});
        this.checkFireUserDoc();
        //this.checkProfile();
        //this.checkRefreshLoop();
      }else{this.logger.info('(onAuthStateChanged) - Signed Out || No User Data');
        if(this.fbLoggedIn){this.fbLoggedIn=false};
        this.evServ.publish('fbUserAccount',{isLoggedIn:this.fbLoggedIn,liMethodKey:this.loginMethodKey});
      }
    });
  }
/////////////////////////////////////////////////////
///// AUTHENTICATION
/////////////////////////////////////////////////////
  async registerUser(upObj:any):Promise<boolean> { this.logger.info('🔥 [fireServ|registerUser] ()...');
    if(!this.fbLoggedIn){
      try{
        this.loginMethodKey='upregister';
        await this.fireAuth.createUserWithEmailAndPassword(upObj.u,upObj.p);
        this.logger.info('🔥 [fireServ|registerUser] (Success) Registered OK!');
        return Promise.resolve(true);
      }catch(rUErr){
        this.loginMethodKey='notsignedin';
        if(rUErr.code==='auth/email-already-in-use'){
          const liURes:boolean=await this.loginUserEmail(upObj);
          if(liURes){return Promise.resolve(true)}else{return Promise.resolve(false)}
        }else{this.logger.info('🔥 [fireServ|registerUser] (Error) Registration Failed: '+rUErr.code);return Promise.resolve(false)}
      }
    }else{
      if(!this.fireAuth.currentUser){
        const rUTryAgainRes:boolean=await this.registerUser(upObj);
        if(rUTryAgainRes){return Promise.resolve(true)}else{return Promise.resolve(false)};
      }else{this.logger.info('🔥 [fireServ|registerUser] (Warning) fireUser ('+this.fbUser.email+') already logged-in');return Promise.resolve(true)}
    }
  }
/////////////////////////////////////////////////////
  async loginUserEmail(upObj:any):Promise<boolean> { this.logger.info('🔥 [fireServ|loginUserEmail] ()...');
    if(!this.fbLoggedIn){
      try{
        this.loginMethodKey='uplogin';
        await this.fireAuth.signInWithEmailAndPassword(upObj.u,upObj.p);
        this.logger.info('🔥 [fireServ|loginUserEmail] (Success) LoginUserEmail OK!');
        return Promise.resolve(true);
      }catch(liUErr){
        this.loginMethodKey='notsignedin';
        if(liUErr.code==='auth/user-not-found'){
          const rURes:boolean=await this.registerUser(upObj);
          if(rURes){return Promise.resolve(true)}else{return Promise.resolve(false)}
        }else{this.logger.info('🔥 [fireServ|loginUserEmail] (Error) Login Failed: '+liUErr.code);return Promise.resolve(false)}
      }
    }else{
      if(!this.fireAuth.currentUser){
        this.fbLoggedIn=false;
        const luTryAgainRes:boolean=await this.loginUserEmail(upObj);
        if(luTryAgainRes){return Promise.resolve(true)}else{return Promise.resolve(false)};
      }else{this.logger.info('🔥 [fireServ|loginUserEmail] (Warning) fireUser ('+this.fbUser.email+') already logged-in');return Promise.resolve(true)}
    }
  }
/////////////////////////////////////////////////////
  async getAuthItem(item:string):Promise<any> {
    const storeO=async():Promise<any>=>{
      if(this.deputy.uUK!==null){
        const sO:any=await this.storeServ.getObject(this.deputy.uUK+'DPAuth');
        if(sO){return Promise.resolve({result:true,data:sO})}else{return Promise.resolve({result:false})}
      }else{return Promise.resolve({result:false})}
    };
    const dbO=async():Promise<any>=>{
      if(this.deputy.uUK!==null&&(await this.dS.getADBSetupDone())){
        let doClose:boolean=false;
        if(!this.dS.getADBIsOpen()){await this.sqlServ.openAuth();doClose=true};
        const getUAItemRes:any=await this.sqlServ.getADBItem(null);
        if(doClose){await this.sqlServ.closeAuth()};
        if(getUAItemRes.result){return Promise.resolve({result:true,data:getUAItemRes.data})}
        else{return Promise.resolve({result:false})}
      }else{return Promise.resolve({result:false})}
    };
    if(item==='dptoken'){
      if(this.deputy.Client.auth.access_token!==null){return Promise.resolve({result:true,data:this.deputy.Client.auth.access_token})}
      else{const storeRes:any=await storeO();
        if(storeRes.result){return Promise.resolve({result:true,data:storeRes.data.access_token})}
        else{const dbRes:any=await dbO();
          if(dbRes.result){return Promise.resolve({result:true,data:dbRes.data.dp_token})}
          else{return Promise.resolve({result:false})}
        }
      }
    }else if(item==='up'){
      if(this.tempUPO!==null){return Promise.resolve({result:true,data:this.tempUPO})}
      else{const dbRes:any=await dbO();
        if(dbRes.result){return Promise.resolve({result:true,data:{u:dbRes.data.dp_username,p:dbRes.data.dp_password}})}
        else{return Promise.resolve({result:false})}
      }
    }
  }
/////////////////////////////////////////////////////
  async setFEToken(msObj:any,feT:string):Promise<boolean> {
    if(msObj.l){this.deputy.SServer.FCT.fe_token=feT};
    if(msObj.s){this.storeServ.setItem('currentFEToken',feT)};
    if(msObj.d){
      if((await this.dS.getUDBSetupDone())&&this.dS.getUDBIsOpen()){
        await this.sqlServ.setFEToken(feT)
      }
    };
    return Promise.resolve(true);
  }
/////////////////////////////////////////////////////
  async getFEToken():Promise<any> {
    let feTs:string[]=[],feT:string,mustSet:any={l:false,s:false,d:false};
    const localRes:string=this.deputy.SServer.FCT.fe_token;if(localRes){feTs.push(localRes)}else{mustSet.l=true};
    const storeRes:any=await this.storeServ.getItem('currentFEToken');if(storeRes){feTs.push(storeRes)}else{mustSet.s=true};
    if((await this.dS.getUDBSetupDone())&&this.dS.getUDBIsOpen()){
      const dbRes:any=await this.sqlServ.getFEToken();
      if(dbRes.result&&dbRes.data&&dbRes.data.length===16){feTs.push(dbRes.data)}else{mustSet.d=true}
    };
    if(feTs.length>0){
      let allS:boolean=true;
      for(let i=0;i<feTs.length;i++){if(!feTs.every(id=>id===feTs[i])){allS=false}};
      if(!allS){mustSet.l=true;mustSet.s=true;mustSet.d=true;feT=String(_.head(_(feTs).countBy().entries().maxBy(_.last)))}else{feT=feTs[0]};
      if(mustSet.l||mustSet.s||mustSet.d){await this.setFEToken(mustSet,feT)};
      return Promise.resolve({result:true,data:feT});
    }else{return Promise.resolve({result:false})}
  }
/////////////////////////////////////////////////////
  async loginCustomToken():Promise<boolean> { this.logger.info('[fireServ|loginCustToken] ()...');
    if(!this.fbLoggedIn){
      let FET:string|null=null,FCT:string|null=null;
      const gFETokenRes:any=await this.getFEToken();
      if(gFETokenRes.result){FET=gFETokenRes.data}
      else{const getDPTokenRes:any=await this.getAuthItem('dptoken');if(getDPTokenRes.result){FET=getDPTokenRes.data;this.loginMethodKey='fctokendpt'}else{FET=null}};
      if(FET!==null){
        const getFCTRes:any=await this.deputy.getFCT(FET);
        if(getFCTRes.result){FCT=getFCTRes.data.custom_token;if(this.loginMethodKey==='ctokendpt'){await this.getFEToken()}}else{FCT=null};
        if(FCT!==null){
          try{
            this.loginMethodKey='fctokenfet';
            await this.fireAuth.signInWithCustomToken(FCT);
            this.logger.info('[fireServ|loginCustomToken] 🔥🟢🎟️ (LOGIN SUCCESS): Method = Custom Token');
            return Promise.resolve(true);
          }catch(liCTErr){
            this.loginMethodKey='notsignedin';
            this.logger.info('[fireServ|loginCustomToken] 🔥🟠🎟️ (LOGIN WARNING): CUSTOM TOKEN FAILED: '+JSON.stringify(liCTErr));
            return Promise.resolve(false)
          }
        }else{
          this.loginMethodKey='notsignedin';
          this.logger.info('[fireServ|loginCustomToken] 🔥🟠🎟️ (LOGIN WARNING): CUSTOM TOKEN FAILED - getFCT(token) returned result:false');
          return Promise.resolve(false)
        }
      }else{
        this.loginMethodKey='notsignedin';
        this.logger.info('[fireServ|loginCustomToken] 🔥🟠🎟️ (LOGIN WARNING): CUSTOM TOKEN FAILED - No Saved FET||DPT');
        return Promise.resolve(false)
      }
    }else{
      if(!this.fireAuth.currentUser){
        this.fbLoggedIn=false;
        const lctTryAgainRes:boolean=await this.loginCustomToken();
        if(lctTryAgainRes){return Promise.resolve(true)}else{return Promise.resolve(false)};
      }else{this.logger.info('🔥 [fireServ|loginCustomToken] (Warning) fireUser ('+this.fbUser.email+') already logged-in');return Promise.resolve(true)}
    }
  }
/////////////////////////////////////////////////////
  async logoutUser():Promise<boolean> { this.logger.info('🔥 [fireServ|logoutUser] ()...');
    let oldlMK:string=this.loginMethodKey;
    if(this.fbLoggedIn){
      try{
        this.loginMethodKey='notsignedin';
        await this.fireAuth.signOut();
        this.logger.info('🔥 [fireServ|logoutUser] (Success) Logged out OK!');
        return Promise.resolve(true)
      }catch(loUErr){
        this.loginMethodKey=oldlMK;
        this.logger.info('🔥 [fireServ|logoutUser] (Error) Failed to Logout: '+JSON.stringify(loUErr));
        return Promise.resolve(false)
      }
    }else{
      if(this.fireAuth.currentUser){
        this.fbLoggedIn=true;
        const loTryAgainRes:boolean=await this.logoutUser();
        if(loTryAgainRes){return Promise.resolve(true)}else{return Promise.resolve(false)};
      }else{this.logger.info('🔥 [fireServ|registerUser] (Warning) User is NOT logged-in');this.fbLoggedIn=false;Promise.resolve(true)}
    }
  }
/////////////////////////////////////////////////////
  async getUser():Promise<any> { this.logger.info('🔥 [fireServ|getUser] ()...');
    this.fbUser=(await this.fireAuth.currentUser);
    return Promise.resolve(this.fbUser);
  }
/////////////////////////////////////////////////////
  async refreshToken():Promise<any> { this.logger.info('🔥 [fireServ|refreshToken] ()...');
    (await this.fireAuth.currentUser).getIdToken(true);
  }
/////////////////////////////////////////////////////
  async checkRefreshLoop() { this.logger.info('🔥 [fireServ|checkRefreshLoop] (Started)...');
    let tokenCheckLoop:any;
    const doCheck=async()=>{
      const fU:firebase.User=await this.fireAuth.currentUser;
      const fUTokenRes:any=await fU.getIdTokenResult(false);
      const expUTS:number=this.fbUser.multiFactor.user.stsTokenManager.expirationTime/1000;
      const expDate:Date=this.dT.Dut(expUTS);
      const nowDate:Date=new Date();const nowUTS:number=this.dT.getUT(nowDate);
      const expInStr:string=this.dT.DifDurStr(expDate,nowDate);this.logger.info('🔥 [fireServ|checkTokenFresh] (Expires In): '+expInStr);
      if((expUTS-nowUTS)<600){this.logger.info('🔥 [fireServ|checkTokenFresh] !!! REFRESHING FireBase Token...');this.refreshToken()}
      else{this.logger.info('🔥 [fireServ|checkTokenFresh] Token Fresh - Skipping Refresh.')}
    };
    if(!this.tLoopIsActive){
      if(this.fbLoggedIn&&this.fireAuth.currentUser!==null){this.tLoopIsActive=true;tokenCheckLoop=setInterval(()=>{doCheck()},600000)}
      else{clearInterval(tokenCheckLoop)};
    };
  } 
/////////////////////////////////////////////////////
  async checkProfile() { this.logger.info('🔥 [fireServ|checkProfile] ()...');
    if(!this.fbProfileUpdating){
      let doneCount:number=0;
      this.fbProfileUpdating=true;
      this.evServ.subscribe('allFBUPDone',()=>{doneCount++;
        if(doneCount===2){this.logger.info('🔥 [fireServ|checkProfile] Check Finished 2/2 - Unlocking...');
          this.fbProfileUpdating=false;
          this.evServ.destroy('allFBUPDone');
        }else{this.logger.info('🔥 [fireServ|checkProfile] STAGE #'+doneCount+' - Waiting...')}
      });
      const verifyURLSub=this.evServ.subscribe('myAppUrlOpen',urlOEvent=>{
        let uO:URLOpenListenerEvent=urlOEvent;
        this.logger.info('🔥 [fireServ|checkProfile] UrlOpenRes - [url]: '+uO.url)
      });
      const verifyRestoreSub=this.evServ.subscribe('myAppRestoredResult',restResEvent=>{
        let rR:RestoredListenerEvent=restResEvent;
        for(const[key,value]of Object.entries(rR)){if(value&&value!==null){this.logger.info('🔥 [fireServ|checkProfile] RestoredRes - ['+key+']: '+value)}}
      });
      //------------------------------
      const fb2DBArr:any[]=[{fb:'displayName',db:'dname'},{fb:'email',db:'email'},{fb:'phoneNumber',db:'phone'},{fb:'photoURL',db:null}];
      let webPic:string;const wPRes:any=await this.deputy.getMyWebPhoto();if(wPRes.result){webPic=wPRes.data};
      let defaultP:any={dname:this.dS.meName,email:this.dS.meEmail,phone:this.dS.mePhone,photo:webPic}
      const fbU:any=(await this.fireAuth.currentUser);
      let myP:any=null;let telPref:string=null;let didChange:boolean=false;let newPO:any={};
      if((await this.sqlServ.hasProfile())){myP=(await this.sqlServ.getProfile()).data}else{myP=defaultP};
      if(myP.hasOwnProperty('phone')&&myP.hasOwnProperty('country')&&myP.phone.charAt(0)!=='+'){
        const cORes:any=await this.sqlServ.getSingleCountry(myP['country']);
        if(cORes.result){const cN:string=cORes.data['Country'];for(const[key,value]of Object.entries(c2DCObj)){const cK:string=key.toString();if(cK===cN){telPref=value.toString()}}}
      };
      if(telPref!==null){
        const cPrefNoP:string=telPref.replace('+','');
        let nowPhoneStr=myP['phone'].replace(' ','').replace('(','').replace(')','').trim();
        let finalPStr:string;if(nowPhoneStr.substring(0,2)===cPrefNoP){finalPStr='+'+nowPhoneStr}else{finalPStr=telPref+nowPhoneStr};
        myP['phone']=finalPStr
      };
      if(myP!==null&&fbU!==null&&fbU.providerData.length>0){
        const myPO:any=myP;const fbPO:any=fbU.providerData[0];
        for(let i=0;i<fb2DBArr.length;i++){
          const myK:string=fb2DBArr[i]['db'];const myV:string=myPO[myK];
          const fbK:string=fb2DBArr[i]['fb'];const fbV:string=fbPO[fbK];
          if(fbK!=='photoURL'){if(fbV!==myV){newPO[fbK]=myV;didChange=true}else{newPO[fbK]=fbV}
          }else{if(fbK!==webPic){newPO[fbK]=webPic;didChange=true}else{newPO[fbK]=fbV}}
        };
        if(didChange){
          fbU.updateProfile(newPO)
          .then(()=>{this.logger.info('🔥 [fireServ|checkProfile] (Profile Updated) - SUCCESS!');this.evServ.publish('allFBUPDone','updateP')})
          .catch(()=>{this.logger.info('🔥 [fireServ|checkProfile] (Error) Updating Profile Failed');this.evServ.publish('allFBUPDone','updateP')})
        }else{this.logger.info('🔥 [fireServ|checkProfile] (Unchanged) Skipping...');}
      }else{this.logger.info('🔥 [fireServ|checkProfile] (Error) Failed to Retrieve FB/SQL Profile(s)');this.evServ.publish('allFBUPDone','updateP')};
      //------------------------------
      if(!fbU.emailVerified&&!this.loginMethodKey.includes('fctoken')){
        const verifyActiveSub=this.evServ.subscribe('myAppStateActive',tf=>{
          if(tf){
            setTimeout(async()=>{
              const newCUser:any=(await this.fireAuth.currentUser);
              newCUser.reload().then(async()=>{
                this.evServ.showToast('success','Email Successfully Verified');
                await this.logoutUser();
                setTimeout(async()=>{
                  this.evServ.publish('allFBUPDone','emailV');
                  await this.loginCustomToken();
                  verifyActiveSub.unsubscribe();
                },1000);
              });
            },1000)
          }
        });
        await fbU.sendEmailVerification()
        .then(()=>{this.evServ.showToast('email','Verification Sent: '+this.dS.meEmail)})
        .catch(()=>{this.evServ.showToast('error','Error Verifying Email');this.evServ.publish('allFBUPDone','emailV')});
      }else{
        verifyURLSub.unsubscribe();
        verifyRestoreSub.unsubscribe();
        this.evServ.publish('allFBUPDone','emailV');
      }
    }else{this.logger.info('🔥 [fireServ|checkProfile] Already Checking - No Doubles - Ignoring Duplicate Request.')}
  }
/////////////////////////////////////////////////////
///// STORAGE
/////////////////////////////////////////////////////
  gMData(filePath:string){const sRef:any=firebase.storage().ref();let fRef:any=sRef.child(filePath);fRef.getMetadata().then(metaD=>{return metaD}).catch(()=>{return null})}
  cloudErr(code:string){const errMsg:any={'storage/unknown':'Unknown Error','storage/object-not-found':'No Object Exists','storage/bucket-not-found':'No Bucket Configured','storage/project-not-found':'No Project Configured','storage/quota-exceeded':'Quota Exceeded','storage/unauthenticated':'User Unauthenticated','storage/unauthorized':'User Unauthorized','storage/retry-limit-exceeded':'Operation Timeout','storage/invalid-checksum':'Checksum Mismatch','storage/canceled':'Canceled Operation','storage/invalid-event-name':'Invalid Event Name','storage/invalid-url':'	Invalid URL provided','storage/invalid-argument':'Invalid Upload Argument','storage/no-default-bucket':'No Bucket Setup','storage/cannot-slice-blob':'Local File Changed','storage/server-file-wrong-size':'Client/Server Filesize Mismatch'};return errMsg[code]}
/////////////////////////////////////////////////////
  getFSFilesList(cat:string) {
    if(!this.gFFLInProg){this.logger.info('🔥 [fireServ|getFirestoreFilesList] ('+cat+')...');
      this.gFFLInProg=true;this.fileLists[cat]=[];let storeDirRef:any=this.fireStorage.storage.ref(this.fbStoreDirs[cat]);
      storeDirRef.listAll().then(result=>{
        result.items.forEach(async fFile=>{
          const fFMD:any=await fFile.getMetadata();
          const fFListObj:any={fileRef:fFile,fileCat:cat,fileName:fFile.name,filePath:fFile.fullPath,fileType:fFMD.contentType,fileSize:fFMD.size,fileDate:fFMD.updated};
          this.fileLists[cat].push(fFListObj);
        });
        this.evServ.publish('fireServGetList',{listCat:cat,listResult:true,listData:this.fileLists[cat]})
      }).catch(()=>{this.evServ.publish('fireServGetList',{listCat:cat,listResult:false})})
    }else{this.logger.info('🔥 [fireServ|getFSFilesList] (Skipping) Already In Progress.')}
  }
/////////////////////////////////////////////////////
  checkFSDBBU() { this.logger.info('🔥 [fireServ|getFSDBBU] ()...');
    const userDBBURef:any=this.fireStorage.storage.ref().child('dbBackups/'+this.deputy.userEmail+'.db');
    userDBBURef.getMetadata().then((meta:any)=>{const buMeta:any=meta;
      userDBBURef.getDownloadURL().then((dlurl:string)=>{const buURL:string=dlurl;
        this.evServ.publish('checkFSDBBU',{result:true,data:{meta:buMeta,dlurl:buURL}})
      }).catch((error:any)=>{this.evServ.publish('checkFSDBBU',{result:false,data:error.code})})
    }).catch((error:any)=>{this.evServ.publish('checkFSDBBU',{result:false,data:error.code})});
  }
/////////////////////////////////////////////////////
  storeFilesFirebase(cat:string,ulFile:myFile) {
    const fileId:any=this.fireStore.createId();
    let fCollectionPty:string;if(cat==='db'){fCollectionPty='dbCollection'}else if(cat==='image'){fCollectionPty='imageCollection'}else{fCollectionPty='otherCollection'};
    this[fCollectionPty].doc(fileId).set(ulFile)
    .then(sffRes=>{this.logger.info('[fireStore|storeFilesFirebase] (Success): '+sffRes)})
    .catch(sffErr=>{this.logger.info('[fireStore|storeFilesFirebase] (Error): '+sffErr)})
  }
/////////////////////////////////////////////////////
  async uploadFile(cat:string,event:FileList) { this.logger.info('🔥 [fireServ|uploadFile] ('+cat+',event)...');
    const file=event.item(0);
    // File Validation /////
    const sufBL:any=['java-archive','javascript','zip','gzip','vnd-rar','7z','vnd.ms-excel','vnd.openxmlformats-officedocument.spreadsheetml.sheet','x-tar','x-shockwave','x-sh'];
    const preL:any[]=['image','text','audio','video'];const sufL:any[]=['x-sqlite3','vnd-sqlite3','json','ld+json','pdf'];
    let tPre:string=file.type.split('/')[0];let tSuf:string=file.type.split('/')[1];
    if((!preL.includes(tPre)&&!sufL.includes(tSuf))||sufBL.includes(tSuf)){this.evServ.showToast('error','Unsupported File Type');return};
    this.isFileULing=true;this.isFileULed=false;
    // Storage Path /////
    const getSDir=(cat:string)=>{return this.fbStoreDirs[cat]};
    let catN:string;let storePath:string;
    if(tSuf===sufL[0]||tSuf===sufL[1]){catN='db'}else if(tPre==='image'){catN='image'}else{catN='other'};
    storePath=getSDir(catN);
    // File Name /////
    const genFileName=(cat:string)=>{
      const fbUIDStr:string=this.fbUId;
      const dateTStr:string=this.dT.format(new Date(),'ddMyyHHmmssSS');
      let catSuffix:string;
      if(cat==='db'){catSuffix='dBBackup'}else if(cat==='image'){catSuffix='Image'}else{catSuffix='File'};
      return dateTStr+'-'+catSuffix+'-'+fbUIDStr
    }
    const getFExt:string=file.name.split('.').pop();
    const getFName:string=genFileName(catN);
    const fileName:string=getFName+'.'+getFExt;
    // File Ref /////
    const filePathNameExt:string=storePath+fileName;
    const fileRef:any=this.fireStorage.ref(filePathNameExt);
    // Upload Task /////
    this.ulTask=this.fireStorage.upload(filePathNameExt,file);
    // Show Progress /////
    this.ulPercVal=this.ulTask.percentageChanges();
    this.evServ.publish('ulPV',this.ulPercVal);
    this.ulTrackSnapshot=this.ulTask.snapshotChanges().pipe(
      finalize(async()=>{
        // Retrieve Uploaded File Storage Path
        const ulFileMeta:any=await fileRef.getMetaData();
        this.ulFileURL=fileRef.getDownloadURL();
        this.ulFileURL.subscribe(
          ufsPath=>{
            this.storeFilesFirebase(cat,{fileRef:fileRef,fileCat:cat,fileName:fileName,filePath:ufsPath,fileType:ulFileMeta.contentType,fileSize:ulFileMeta.size,fileDate:ulFileMeta.updated});
            this.isFileULing=false;
            this.isFileULed=true
          },
          ufsErr=>{this.logger.info('🔥 [fireServ|uploadFile] (Error): '+ufsErr)}
        )}
      ),tap(snap=>{
          this.specFSize=snap.totalBytes;
          this.evServ.publish('snap',snap.totalBytes)
      })
    );
  }
/////////////////////////////////////////////////////
  uploadFSDBBU(fileData:any) { this.logger.info('🔥 [fireServ|getFSDBBU] ()...');
    const ulProgEv=(evState:string,evData:any)=>{this.evServ.publish('dbbuULProg',{event:evState,data:evData})};
    const dbbuFileData:any=fileData;const dbbuMeta:any={contentType:'application/x-sqlite3'};
    const dbbuStoreRef:any=this.fireStorage.storage.ref().child('dbBackups/'+this.deputy.userEmail+'.db');
    let dbbuUploadTask:any=dbbuStoreRef.put(dbbuFileData,dbbuMeta);
    dbbuUploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot:any)=>{let t=snapshot.task;let md=snapshot.metadata;
        switch(snapshot.state){
          case firebase.storage.TaskState.RUNNING:let ulP:number=(snapshot.bytesTransferred/snapshot.totalBytes);ulProgEv('running',{task:t,meta:md,perc:ulP});break;
          case firebase.storage.TaskState.PAUSED:ulProgEv('paused',{task:t,meta:md,perc:ulP});break;
          case firebase.storage.TaskState.SUCCESS:ulProgEv('success',null);break;
          case firebase.storage.TaskState.ERROR:ulProgEv('error',null);break;
        }
      },
      (error:any)=>{const errMsg:string=this.cloudErr(error.code);this.logger.info('🔥 [fireServ|uploadFSDBBU] (Error): '+errMsg);ulProgEv('errorData',errMsg)},
      ()=>{(async()=>{let sDObj:any={meta:null,dlurl:null};sDObj.meta=await dbbuUploadTask.snapshot.ref.getMetadata();sDObj.dlurl=await dbbuUploadTask.snapshot.ref.getDownloadURL();ulProgEv('successData',sDObj)})()}
    );
  }
/////////////////////////////////////////////////////
  async downloadFSDBBU(dlURL:string) { this.logger.info('🔥 [fireServ|getFSDBBU] ()...');
    const dlDBBURes:any=await this.fileServ.dlFireDBBU(dlURL);
    this.evServ.publish('dlFSDBBU',dlDBBURes);
  }
/////////////////////////////////////////////////////
  deleteFSDBBU() { this.logger.info('🔥 [fireServ|deleteFSDBBU] ()...');
    const dbBUFileRef:any=this.fireStorage.storage.ref().child('dbBackups/'+this.deputy.userEmail+'.db');
    dbBUFileRef.delete()
    .then(()=>{this.evServ.publish('delFSDBBU',true)})
    .catch((error)=>{
      this.logger.info('🔥 [fireServ|deleteFSDBBU] (Error): '+this.cloudErr(error.code));
      this.evServ.publish('delFSDBBU',false)
    });
  }
/////////////////////////////////////////////////////
///// FIRESTORE
/////////////////////////////////////////////////////
  async setFireUserDoc(userEmail:string,dpAuthObj:any):Promise<boolean> { this.logger.info('🔥 [fireServ|setFireAuthDoc] (userEmail,DPAuthObj)...');
    if(this.fbLoggedIn){
      let fireDoc:AppUserUser={dp_token:String(dpAuthObj.access_token),dp_refresh:String(dpAuthObj.refresh_token),dp_expires:String(dpAuthObj.expires_at),dp_domain:String(dpAuthObj.endpoint)};
      const consM=(r,uc,x)=>{let xT;x!==null?xT=' '+JSON.stringify(x):xT='';const m='🔥 [fireServ|setUpdateFireAuthDoc] ('+r+') UserDoc '+uc+' for '+userEmail+xT;return this.logger.info(m)};
      try{
        await this.fireStore.collection('users').doc(userEmail).update(fireDoc);
        consM('SUCCESS','UPDATED',null);
        return Promise.resolve(true)
      }catch(e){
        consM('ERROR','FAILED',e);
        fireDoc['fcm_token']=String('');
        this.fireStore.collection('users').doc(String(userEmail)).set(fireDoc)
        .then(()=>{consM('SUCCESS','CREATED',null);return Promise.resolve(true)})
        .catch(e=>{consM('ERROR','FAILED',e);return Promise.resolve(false)}) 
      }
    }else{return Promise.resolve(false)}
  }
/////////////////////////////////////////////////////
  async hasFireUserDoc():Promise<boolean>{
    if(this.fbLoggedIn){
      const userDocRef:DocumentReference=this.fireStore.collection('users').doc(this.deputy.userEmail).ref;
      try{const udSnap:any=await userDocRef.get();
        if(udSnap.exists){return Promise.resolve(true)}else{return Promise.resolve(false)}
      }catch(e){return Promise.resolve(false)}
    }else{return Promise.resolve(false)}
  }
/////////////////////////////////////////////////////
  async checkFireUserDoc():Promise<boolean>{this.logger.info('🔥 [fireServ|checkFireUserDoc] ()...');
    if(this.fbLoggedIn){
      const localAuth=async():Promise<any>=>{if(this.deputy.Client.auth.access_token!==null){return Promise.resolve({r:true,d:this.deputy.Client.auth})}else{return Promise.resolve({r:false})}};
      const storeAuth=async():Promise<any>=>{if(this.deputy.uUK!==null){const sO:any=await this.storeServ.getObject(this.deputy.uUK+'DPAuth');if(sO){return Promise.resolve({r:true,d:sO})}else{return Promise.resolve({r:false})}}else{return Promise.resolve({r:false})}};
      const dbAuth=async():Promise<any>=>{if(this.deputy.uUK!==null&&(await this.dS.getADBSetupDone())){let doClose:boolean=false;if(!this.dS.getADBIsOpen()){await this.sqlServ.openAuth();doClose=true};const{result,data}=await this.sqlServ.getADBItem('auth');if(result){if(doClose){await this.sqlServ.closeAuth()};return Promise.resolve({r:true,d:data})}else{if(doClose){await this.sqlServ.closeAuth()};return Promise.resolve({r:false})}}else{return Promise.resolve({r:false})}};
      const localFCM=async():Promise<any>=>{if(this.fbMsgToken!==null){return Promise.resolve({r:true,d:this.fbMsgToken})}else{return Promise.resolve({r:false})}};
      const storeFCM=async():Promise<any>=>{const sF:any=await this.storeServ.getItem('fireMsgToken');if(sF){return Promise.resolve({r:true,d:sF})}else{return Promise.resolve({r:false})}};
      const dbFCM=async():Promise<any>=>{
        if((await this.dS.getUDBSetupDone())&&this.dS.getUDBIsOpen()){
        const dbF:any=await this.sqlServ.getFCMToken();if(dbF.result&&dbF.data!==null){return Promise.resolve({r:true,d:dbF.data})}else{return Promise.resolve({r:false})}
        }else{return Promise.resolve({r:false})}
      };
      // ----------------------------------------------
      const dO:any={dp_token:'',dp_refresh:'',dp_expires:'',dp_domain:'',fcm_token:''};
      let aO:any=null;const lAR=await localAuth();if(lAR.r){aO=lAR.d}else{const sAR=await storeAuth();if(sAR.r){aO=sAR.d}else{const dAR=await dbAuth();if(dAR.r){aO=dAR.d}else{aO=null}}};
      let fS:string=null;const lFR=await localFCM();if(lFR.r){fS=lFR.d}else{const sFR=await storeFCM();if(sFR.r){fS=sFR.d}else{const dFR=await dbFCM();if(dFR.r){fS=dFR.d}else{fS=null}}};
      if(aO!==null){dO.dp_token=String(aO.access_token);dO.dp_refresh=String(aO.refresh_token);dO.dp_expires=String(aO.expires_at);dO.dp_domain=String(aO.endpoint)};
      if(fS!==null){dO.fcm_token=fS};
      // ----------------------------------------------
      const uDocExists:boolean=await this.hasFireUserDoc();
      if(uDocExists){this.logger.info('[fireServ|checkFireUserDoc] 🟢🔥🟢 FireUserDoc Already Exists - Not Creating Default.');return Promise.resolve(true)}
      else{
        this.fireStore.collection('users').doc(this.deputy.userEmail).set(dO)
        .then(()=>{this.logger.info('[fireServ|checkFireUserDoc] 🔴🔥🟢 No FireUserDoc >>> Default=SUCCESS.');return Promise.resolve(true)})
        .catch(e=>{this.logger.info('[fireServ|checkFireUserDoc] 🔴🔥🔴 No FireUserDoc + Default=FAIL: '+JSON.stringify(e));return Promise.resolve(false)});
      }
    }else{return Promise.resolve(false)}
  }
/////////////////////////////////////////////////////
  async getFireUserDoc():Promise<object> { this.logger.info('🔥 [fireServ|getFireUserDoc] ()...');
    if(this.fbLoggedIn){
      const userDocRef:DocumentReference=this.fireStore.collection('users').doc(this.deputy.userEmail).ref;
      return userDocRef.get().then((doc)=>{
        if(doc.exists){return Promise.resolve({result:true,data:doc.data()});
        }else{this.logger.info('🔥 [fireServ|getFireUserDoc] (Warning): Doc !==EXIST');return Promise.resolve({result:false})}
      }).catch(gSVErr=>{this.logger.info('🔥 [fireServ|getFireUserDoc] (Error): '+JSON.stringify(gSVErr));return Promise.resolve({result:false})})
    }else{return Promise.resolve({result:false})}
  }
/////////////////////////////////////////////////////
  async getFireUserAuth():Promise<any> { this.logger.info('🔥 [fireServ|getFireUserAuth] ()...');
    if(!this.fbLoggedIn){
      if(this.tempUPO!==null){await this.loginUserEmail(this.tempUPO)}
      else{
        const fireLoginTokenRes:boolean=await this.loginCustomToken();
        if(!fireLoginTokenRes){
          if((await this.dS.getADBSetupDone())){
            let doClose:boolean|null=null;
            if(!this.dS.getADBIsOpen()){await this.sqlServ.openAuth();doClose=true};
            const upRes:any=await this.sqlServ.getADBItem('up');
            if(upRes.result){await this.loginUserEmail(upRes.data)};
            if(doClose!==null&&doClose===true){await this.sqlServ.closeAuth()};
          }
        };
      }
    };
    if(this.fbLoggedIn){
      const userDocRef:DocumentReference=this.fireStore.collection('users').doc(this.deputy.userEmail).ref;
      try{const udSnap:any=await userDocRef.get();
        if(udSnap.exists){const fD:any=udSnap.data();
          const fAuthObj:any={access_token:String(fD.dp_token),expires_in:'86400',expires_at:String(fD.dp_expires),scope:'longlife_refresh_token',endpoint:String(fD.dp_domain),refresh_token:String(fD.dp_refresh)};
          return Promise.resolve({result:true,data:fAuthObj});
        }else{this.logger.info('🔥 [fireServ|getFireUserAuth] (Warning): Doc !==EXIST');return Promise.resolve({result:false})}
      }catch(gFUAErr){this.logger.info('🔥 [fireServ|getFireUserAuth] (Error): '+JSON.stringify(gFUAErr));return Promise.resolve({result:false})}
    }else{return Promise.resolve({result:false})}
  }
/////////////////////////////////////////////////////
  async getFCMTokenValue():Promise<any> { this.logger.info('🔥 [fireServ|getFCMTokenValue] ()...');
    const userDocRef:DocumentReference=this.fireStore.collection('users').doc(this.deputy.userEmail).ref;
    return userDocRef.get()
    .then((doc)=>{
      if(doc.exists){const fcmTokenVal:any=doc.get('fcm_token');
        if(fcmTokenVal===null||fcmTokenVal===undefined||fcmTokenVal===''){return Promise.resolve({result:true,data:null})}else{return Promise.resolve({result:true,data:fcmTokenVal})}
      }else{this.logger.info('🔥 [fireServ|getFCMTokenValue] (Warning): Doc !==EXIST');return Promise.resolve({result:false})}
    }).catch(gFTVErr=>{this.logger.info('🔥 [fireServ|getFCMTokenValue] (Error): '+JSON.stringify(gFTVErr));return Promise.resolve({result:false})})
  }
/////////////////////////////////////////////////////
  async onFCMTokenChange(pushModToken:string) { this.logger.info('🔥 [fireServ|onFCMTokenChange] >>> 👂🏼 LISTENING 👂🏼 ...');
    const cM=(n:string)=>{let nT;n==='db'?nT='[SQLite]':nT='[Fire UserDoc]';const m='🔥 [fireServ|onFCMTokenChange] 🎫⚠️ '+nT+' Token Mismatch - Fixing...';return this.logger.info(m)};
    let pm:string|null=pushModToken;let db:string|null;let ud:string|null;
    if((await this.dS.getUDBSetupDone())&&this.dS.getUDBIsOpen){const dbR=(await this.sqlServ.getFCMToken());dbR.result?db=dbR.data:db=null}else{db=null};
    const udR=(await this.getFCMTokenValue());udR.result?ud=udR.data:ud=null;
    if(db===pm&&ud===pm){this.logger.info('🔥 [fireServ|onFCMTokenChange] 🎫✅ ALL FCM Tokens Match')}
    else{
      if((await this.dS.getUDBSetupDone())&&this.dS.getUDBIsOpen){if(db!==pm){cM('db');await this.sqlServ.setFCMToken(pm)}};
      if(ud!==pm){cM('ud');await this.setFCMTokenValue(pm)};
    };
  }
/////////////////////////////////////////////////////
  async setFCMTokenValue(token:string):Promise<boolean> { this.logger.info('🔥 [fireServ|setFCMTokenValue] ('+token.substring(0,10)+')...');
    this.fbMsgToken=token;
    const userDocRef:DocumentReference=this.fireStore.collection('users').doc(this.deputy.userEmail).ref;
    return userDocRef.update({fcm_token:token})
    .then(()=>{this.logger.info('🔥 [fireServ|setFCMTokenValue] (SUCCESS) 🎫✔️ [Fire UserDoc] - Token Updated/Fixed.');return Promise.resolve(true)})
    .catch(sFTVErr=>{this.logger.info('🔥 [fireServ|setFCMTokenValue] (ERROR) 🎫❌ [Fire UserDoc] - Token NOT Updated/Fixed: '+JSON.stringify(sFTVErr));return Promise.resolve(false)});
  }
/////////////////////////////////////////////////////
  async setFireSettingsDoc(userEmail:string|null,settObj:any):Promise<boolean> { this.logger.info('🔥 [fireServ|setFireSettingsDoc] (userEmail,settObj)...');
  let uEmail:string='';if(userEmail===null){uEmail=this.deputy.userEmail}else{uEmail=userEmail};
    const consM=(r,uc,x)=>{let xT;x!==null?xT=' '+JSON.stringify(x):xT='';const m='🔥 [fireServ|setFireSettingsDoc] ('+r+') SettDoc '+uc+' for '+uEmail+xT;return this.logger.info(m)};
    try{
      await this.fireStore.collection('settings').doc(uEmail).update(settObj);
      consM('SUCCESS','UPDATED',null);
      return Promise.resolve(true)
    }catch(e){
      consM('ERROR','FAILED',e);
      this.fireStore.collection('settings').doc(String(uEmail)).set(settObj)
      .then(()=>{consM('SUCCESS','CREATED',null);return Promise.resolve(true)})
      .catch(e=>{consM('ERROR','FAILED',e);return Promise.resolve(false)})
    }
  }
/////////////////////////////////////////////////////
  async updateSettingsObj(settObj:AppUserSettings):Promise<boolean> { this.logger.info('🔥 [fireServ|updateSettingsObj] ()...');
    const userSettRef:DocumentReference=this.fireStore.collection('settings').doc(String(this.deputy.userEmail)).ref;
    return userSettRef.update(settObj)
    .then(()=>{this.logger.info('🔥 [fireServ|updateSettingsObj] (SUCCESS) - Updated User Settings Obj');return Promise.resolve(true)})
    .catch(uSOErr=>{this.logger.info('🔥 [fireServ|updateSettingsObj] (Error): '+JSON.stringify(uSOErr));return Promise.resolve(false)});
  }
/////////////////////////////////////////////////////
  async getSettingsValue(fieldPath:string|null):Promise<object> { this.logger.info('🔥 [fireServ|getSettingsValue] ()...');
    const userDocRef:DocumentReference=this.fireStore.collection('settings').doc(this.deputy.userEmail).ref;
    return userDocRef.get()
    .then((doc)=>{
      if(doc.exists){
        let fieldVal:any;
        if(fieldPath===null){fieldVal=doc.data()}else{fieldVal=doc.get(fieldPath)};
        if(fieldVal===null||fieldVal===undefined||fieldVal===''){return Promise.resolve({result:true,data:null})}else{return Promise.resolve({result:true,data:fieldVal})}
      }else{this.logger.info('🔥 [fireServ|getSettingsValue] (Warning): Doc !==EXIST');return Promise.resolve({result:false})}
    }).catch(gSVErr=>{this.logger.info('🔥 [fireServ|getSettingsValue] (Error): '+JSON.stringify(gSVErr));return Promise.resolve({result:false})
  })
}
/////////////////////////////////////////////////////
  async setSettingsValue(keyVal:object):Promise<boolean> { this.logger.info('🔥 [fireServ|setSettingsValue] ('+keyVal+')...');
    const userDocRef:DocumentReference=this.fireStore.collection('settings').doc(this.deputy.userEmail).ref;
    return userDocRef.update(keyVal)
    .then(()=>{this.logger.info('🔥 [fireServ|setSettingsValue] (SUCCESS) - Updated Settings Field');return Promise.resolve(true)})
    .catch(sSVErr=>{this.logger.info('🔥 [fireServ|setSettingsValue] (Error): '+JSON.stringify(sSVErr));return Promise.resolve(false)});
  } 
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
}
