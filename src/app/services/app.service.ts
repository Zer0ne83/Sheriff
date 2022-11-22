import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { App, AppInfo, AppLaunchUrl, AppState, BackButtonListenerEvent, RestoredListenerEvent, URLOpenListenerEvent } from '@capacitor/app';
import { EventsService } from './events.service';
////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////
export class AppService {
////////////////////////////////////////////////////////////////
  aIsActive:boolean;
  aOpenUrl:string;
  aRestoredRes:any;
  aCanGoBack:boolean;
  aLaunchUrl:string;
  aInfo:any={
    name:<string>null,
    id:<string>null,
    build:<string>null,
    version:<string>null
  };
  initDone:boolean=false;
////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private evServ:EventsService
  ) {}
////////////////////////////////////////////////////////////////
  async doAppInit() { this.logger.info('[appServ|doAppInit] ()...');
    this.logger.info('[appServ|initListeners] (contructor) 🎧🎧🎧...');
    App.addListener('appStateChange',state=>{
      this.aIsActive=state.isActive;
      this.evServ.publish('myAppStateActive',this.aIsActive);
      let consTxt:string;this.aIsActive?consTxt='[ACTIVE]':consTxt='[NOT ACTIVE]';  
      this.logger.info('[App|Listener|EVENT] \u269C (appStateChange): App is '+consTxt)
    });
    App.addListener('appUrlOpen',(event:URLOpenListenerEvent)=>{
      this.evServ.publish('myAppUrlOpen',event);
      this.aOpenUrl=event.url;
      this.logger.info('[App|Listener|EVENT] \u269C (appUrlOpen): URL is '+this.aOpenUrl)
    });
    App.addListener('appRestoredResult',(event:RestoredListenerEvent)=>{
      this.aRestoredRes=event;
      this.evServ.publish('myAppRestoredResult',this.aRestoredRes);
      this.logger.info('[App|Listener|EVENT] \u269C (appRestoreResult): '+this.aRestoredRes.methodName+' Result for Plugin ID: '+this.aRestoredRes.pluginId+'...');
      if(this.aRestoredRes.success){this.logger.info('- Plugin Call Succeeded:');console.log(this.aRestoredRes.data)}
      else{this.logger.info('- Plugin Call Error: '+this.aRestoredRes.error.message)}
    });
    App.addListener('backButton',(event:BackButtonListenerEvent)=>{
      this.aCanGoBack=event.canGoBack;
      this.evServ.publish('myAppCanGoBack',this.aCanGoBack);
      let consTxt:string;this.aCanGoBack?consTxt='[CAN]':consTxt='[CANNOT]';
      this.logger.info('[App|Listener|EVENT] \u269C (backButton): App '+consTxt+' Go Back.')
    });
    const aLaunchUrl:boolean=await this.getAppLaunchUrl();this.logger.info('\u269C - getAppLaunchUrl: '+aLaunchUrl);
    const aState:boolean=await this.getAppState();this.logger.info('\u269C - getAppState: '+aState);
    const aInfo:boolean=await this.getInfo();this.logger.info('\u269C - getAppInfo: '+aInfo)
  }
////////////////////////////////////////////////////////////////
  async getAppLaunchUrl():Promise<any> { this.logger.info('[appServ|getAppLaunchUrl] ()...');
    const gALUrlRes:AppLaunchUrl|undefined=await App.getLaunchUrl();
    if(gALUrlRes!==undefined){this.aLaunchUrl=gALUrlRes.url;this.logger.info('\u269C - App Launch URL: '+this.aLaunchUrl);return Promise.resolve(true)}
    else{this.logger.info('(NULL) \u269C App Launch URL Not Found.');return Promise.resolve(true)}
  }
////////////////////////////////////////////////////////////////
  async getAppState():Promise<any> { this.logger.info('[appServ|getAppState] ()...');
    const gASRes:AppState=await App.getState();
    this.aIsActive=gASRes.isActive;let consTxt:string;this.aIsActive?consTxt='[ACTIVE]':consTxt='[NOT ACTIVE]';
    this.logger.info('[appServ|getAppState] \u269C - App is '+consTxt);
    return Promise.resolve(true)
  }
////////////////////////////////////////////////////////////////
  async getInfo():Promise<any> { this.logger.info('[appServ|getInfo] ()...');
    const gAIRes:AppInfo=await App.getInfo();this.aInfo=gAIRes;
    this.logger.info('[appServ|getInfo] \u269C (Result): '+this.aInfo.name+' | '+this.aInfo.id+' | '+this.aInfo.build+' | '+this.aInfo.version);
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////
  exitApp() { this.logger.info('[appServ|exitApp] \u269C ()...');App.exitApp()}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
}
