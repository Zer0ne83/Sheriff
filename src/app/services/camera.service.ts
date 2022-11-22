import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Camera, CameraPermissionType, CameraResultType, CameraSource, PermissionStatus } from '@capacitor/camera';
import { EventsService } from './events.service';
import { App } from '@capacitor/app';
////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////
export class CameraService {
////////////////////////////////////////////////////////////////
  camPerms:any={camera:false,photos:false};
  appRestoreRes:any;
////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private evServ:EventsService
  ) {
    App.addListener('appRestoredResult',aRRData=>{
      this.logger.info('[camServ|appRestoredResult] (APP RESTORED | CAM RESULT)...');
      this.logger.info(aRRData);
    });
  }
////////////////////////////////////////////////////////////////
  doCamInit() { this.logger.info('[camServ|doCamInit] ()...');
    this.checkCamPerms();
  }
////////////////////////////////////////////////////////////////
  async checkCamPerms():Promise<any> { this.logger.info('[camServ|checkCamPerms] ()...');
    const permRes:PermissionStatus=await Camera.checkPermissions();
    this.logger.info('[camServ|checkCamPerms] (Status): [camera]='+permRes.camera+' | [photos]='+permRes.photos);
    this.camPerms=permRes;
    return Promise.resolve(permRes);
  }
////////////////////////////////////////////////////////////////
  async reqCamPerms():Promise<boolean> { this.logger.info('[camServ|checkCamPerms] ()...');
    const reqPermRes=await Camera.requestPermissions({permissions:['camera','photos']});
    this.logger.info('[camServ|reqCamPerms] (Result): ');this.logger.info(reqPermRes);
    this.logger.info('[camServ|checkCamPerms] (Status): [camera]='+reqPermRes.camera+' | [photos]='+reqPermRes.photos);
    this.camPerms=reqPermRes;
    if(this.camPerms.camera&&this.camPerms.photos){return Promise.resolve(true)}else{return Promise.resolve(false)}
  }
////////////////////////////////////////////////////////////////
  async camGetPhoto():Promise<any> { this.logger.info('[camServ|camGetPhoto] ()...');
    try{
      const cGPRes:any=await Camera.getPhoto({
        quality:100,
        source:CameraSource.Camera,
        allowEditing:false,
        resultType:CameraResultType.Uri,
        saveToGallery:true,
        width:1280,
        height:720,
        correctOrientation:true
      });
      return Promise.resolve(cGPRes)
    }catch(cGPErr){this.logger.info('[camServ|camGetPhoto] (Error): '+cGPErr)}
  }
////////////////////////////////////////////////////////////////
  async fileGetPhoto():Promise<any> { this.logger.info('[camServ|fielGetPhoto] ()...');
    try{
      const fGPRes:any=await Camera.getPhoto({
        source:CameraSource.Photos,
        resultType:CameraResultType.Uri,
        webUseInput:true
      });
      return Promise.resolve(fGPRes)
    }catch(fGPErr){this.logger.info('[camServ|camGetPhoto] (Error): '+fGPErr)}
  }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
}
