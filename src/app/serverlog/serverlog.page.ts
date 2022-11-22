import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Platform, NavController, LoadingController, MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SQLiteService } from '../services/sqlite.service';
import { EventsService } from '../services/events.service';
import { NGXLogger } from 'ngx-logger';
import { DetailService } from '../services/detail.service';
import { DeputyService } from '../services/deputy.service';
import { DateTimeService } from '../services/datetime.service';
import { StorageService } from '../services/storage.service';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-serverlog',
  templateUrl: './serverlog.page.html',
  styleUrls: ['./serverlog.page.scss'],
})
////////////////////////////////////////////////////////////////////////////////////////
export class ServerlogPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  progCirc={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  leftAnimBarW:any;
  meObj:any;
  myObj:any;
  noPeople:boolean=null;
  pplArr:any[]=[];
  meEmpId:number;
  isRefreshing:boolean=false;
  //----------------------
  rawLogData:any='';
  logData:string[]=[];
  rawNotifData:any='';
  notifData:string[]=[];
  //----------------------
  headerBtn:string='all';
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private evServ:EventsService,
    private logger:NGXLogger,
    private platform:Platform,
    private detailServ:DetailService,
    private deputy:DeputyService,
    private dT:DateTimeService, 
    private navCtrl:NavController,
    private loadCtrl:LoadingController,
    private menuCtrl:MenuController,
    private modalCtrl:ModalController, 
    private storeServ:StorageService, 
    private sqlServ:SQLiteService,
    private appRef:ApplicationRef,
  ) { }
////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.myObj=this.detailServ.myObj;this.meObj=this.detailServ.meObj;this.meEmpId=this.detailServ.meEmpId;this.pplArr=this.detailServ.pplArr;
    this.pageEnterAnim();
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[ServerLog|ionViewDidEnter] ()...');
    this.evServ.publish('doPageEnterAnim',null);
    this.doInitServerLog();
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave(){ this.logger.info('[ServerLog|ionViewWillLeave] ()...');
    const titleBar=$('.hcl-leftbar.serverlog');const animBarEnd=$('.sheriff-title-leftanimbar-inner.serverlog');const titleText=$('.sheriff-title.tight-wrap.serverlog');
    $(titleBar).css('width','0px').removeClass('dimmed');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin')
  }
////////////////////////////////////////////////////////////////////////////////////////
  async fetchLogData():Promise<any> { this.logger.info('[ServerLog|fetchLogData] ()...');
    const getLDRes:any=await this.deputy.getServerLog();
    if(getLDRes.result){return Promise.resolve({result:true,data:getLDRes.data})}else{return Promise.resolve({result:false})}
  }
////////////////////////////////////////////////////////////////////////////////////////
  async fetchNotifData():Promise<any> { this.logger.info('[ServerLog|fetchNotifData] ()...');
    const getLDRes:any=await this.deputy.getServerNotif();
    if(getLDRes.result){return Promise.resolve({result:true,data:getLDRes.data})}else{return Promise.resolve({result:false})}
  }
////////////////////////////////////////////////////////////////////////////////////////
  toggleHeaderBtn(){
    console.log('WAS: '+this.headerBtn);
    this.headerBtn==='all'?this.headerBtn='notifs':this.headerBtn='all';
    console.log('NOW: '+this.headerBtn);
  }
////////////////////////////////////////////////////////////////////////////////////////
  renderLogData(rawLData:string):Promise<boolean> { this.logger.info('[ServerLog|renderLogData] ()...');
    this.rawLogData=rawLData;
    const splitD:string[]=this.rawLogData.split('\n');
    const tdStr:string=this.dT.format(new Date(),'dd/MM/yyyy');
    for(let i=0;i<splitD.length;i++){this.logData.push(String(splitD[i]).replace(tdStr+' ',''))};
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////////////////////////////
  renderNotifData(rawNData:string):Promise<boolean> { this.logger.info('[ServerLog|renderNotifData] ()...');
  this.rawNotifData=rawNData;
  const splitD:string[]=this.rawNotifData.split('\n');
  const tdStr:string=this.dT.format(new Date(),'dd/MM/yyyy');
  for(let i=0;i<splitD.length;i++){this.notifData.push(String(splitD[i]).replace(tdStr+' ',''))};
  return Promise.resolve(true);
}
////////////////////////////////////////////////////////////////////////////////////////
  async doInitServerLog() { this.logger.info('[ServerLog|doInitServerLog] ()...');
    const fetchLRes:any=await this.fetchLogData();console.log(fetchLRes);
    if(fetchLRes.result){this.renderLogData(fetchLRes.data)};
    const fetchNRes:any=await this.fetchNotifData();console.log(fetchNRes);
    if(fetchNRes.result){this.renderNotifData(fetchNRes.data)};
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doServerLogRefresh(event){ this.logger.info('[ServerLog|doServerLogRefresh]');
    let backupLRaw:string=this.rawLogData,backupLData:string[]=this.logData,
    backupNRaw:string=this.rawNotifData,backupNData:string[]=this.notifData;
    this.isRefreshing=true;
    setTimeout(async()=>{
      this.rawLogData='';this.logData=[];
      this.rawNotifData='';this.notifData=[];
      const fetchLRes:any=await this.fetchLogData();if(fetchLRes.result){await this.renderLogData(fetchLRes.data)}else{this.rawLogData=backupLRaw;this.logData=backupLData};
      const fetchNRes:any=await this.fetchNotifData();if(fetchNRes.result){await this.renderNotifData(fetchNRes.data)}else{this.rawNotifData=backupNRaw;this.logData=backupNData};
      this.isRefreshing=false;
      event.target.complete();
    },250);
  }
////////////////////////////////////////////////////////////////////////////////////////
  pageEnterAnim() { this.logger.info('[ServerLog|pageEnterAnim] ()...');
    this.evServ.subscribe('doPageEnterAnim',()=>{
      const pageKey='serverlog';const sLogoEle=$('.hcl-slogo.'+pageKey);const preImg='../../assets/img/slogo-';const cProgEle=$('.hcl-progcirc.'+pageKey);const patchEles=$('.hcl-opatch.'+pageKey+' .hcl-ipatch.'+pageKey);const starEle=$('.hcl-star.'+pageKey);const pageTitle=$('.hcl-title.'+pageKey);const titleBar=$('.hcl-leftbar.'+pageKey);const leftCol=$('.sheriff-page-header-col.left-col.'+pageKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+pageKey);const titleText=$('.sheriff-title.tight-wrap.'+pageKey);const calcBarW=Math.round(($(leftCol).outerWidth()+6)-($(pageTitle).offset().left+$(pageTitle).outerWidth()))+'px';this.leftAnimBarW=calcBarW;$(patchEles).addClass('hidden');
      setTimeout(()=>{$(patchEles).remove();$(starEle).addClass('hcl-star-startanim');this.progCirc.outerStrokeColor='#FF9800';this.progCirc.percent=100;$(sLogoEle).attr('src',preImg+'g.png');this.myAniCSS('.hcl-slogo.'+pageKey,'tada',400,400,'remove','show');
        setTimeout(()=>{$(sLogoEle).attr('src',preImg+'w.png');this.myAniCSS('.hcl-progcirc.'+pageKey,'zoomOut',0,400,'remove','hide');$(sLogoEle).addClass('tabtilt');$(titleBar).css('width',calcBarW);
          setTimeout(()=>{$(animBarEnd).addClass('showing');$(titleText).addClass('scrolledin');
            setTimeout(()=>{$(titleBar).addClass('dimmed');$(sLogoEle).removeClass('tabtilt')}, 200);
          },200);
          setTimeout(()=>{this.progCirc.percent=0;
            setTimeout(()=>{$(cProgEle).css('display','unset')},1000);$(starEle).removeClass('hcl-star-startanim');this.evServ.destroy('doPageEnterAnim')
          },600)
        },400)
      },300)
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) { // #myElement, tada, 0-1500, 0-1500, keep/remove, show/hide/remove
    this.logger.info('[ServerLog|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
    const doAni = () => new Promise((resolve) => {
    const aniStr = 'animate__animated animate__' + aniName; const delStr = 'animDel-' + aniDel; const durStr = 'animDur-' + aniDur;
    $(theEle).on('animationend', () => { 
      if ( aniEnd === 'remove' ) { $(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr); }
      if ( eleEnd === 'remove' ) { $(theEle).remove(); }
      if ( eleEnd === 'hide' ) { $(theEle).css('display', 'none'); }
      resolve(true);
    });
    if ( aniDel > 0 ) { $(theEle).addClass(delStr); }
    if ( aniDur > 0 ) { $(theEle).addClass(durStr); }
    if ( $(theEle).length > 0 ) { $(theEle).addClass(aniStr); }
    });
    doAni();
  }
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
}
