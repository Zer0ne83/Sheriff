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
  selector: 'app-snoop',
  templateUrl: './snoop.page.html',
  styleUrls: ['./snoop.page.scss'],
})
////////////////////////////////////////////////////////////////////////////////////////
export class SnoopPage implements OnInit {
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
  rawSnoopData:any='';
  snoopD:any[]=[];
  //----------------------
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
  ionViewDidEnter() { this.logger.info('[Snoop|ionViewDidEnter] ()...');
    this.evServ.publish('doPageEnterAnim',null);
    this.doInitSnoop();
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave(){ this.logger.info('[Snoop|ionViewWillLeave] ()...');
    const titleBar=$('.hcl-leftbar.snoop');const animBarEnd=$('.sheriff-title-leftanimbar-inner.snoop');const titleText=$('.sheriff-title.tight-wrap.snoop');
    $(titleBar).css('width','0px').removeClass('dimmed');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin')
  }
////////////////////////////////////////////////////////////////////////////////////////
  async fetchSnoopData():Promise<any> { this.logger.info('[Snoop|fetchSnoopData] ()...');
    const getSDRes:any=await this.deputy.getSnoopData();
    if(getSDRes.result){return Promise.resolve({result:true,data:getSDRes.data})}else{return Promise.resolve({result:false})}
  }
////////////////////////////////////////////////////////////////////////////////////////
  renderSnoopData(rawSData:any):Promise<boolean> { this.logger.info('[Snoop|renderSnoopData] ()...');
    this.rawSnoopData=rawSData;
    for(const[sK,sV]of Object.entries(rawSData)){
      let dayObj:any={date:'',rosters:[],ttlR:0,ttlHrs:0};
      if(sV&&Array.isArray(sV)&&sV.length>0){
        const dateD:Date=this.dT.parse(String(sK),'yyyyMMdd');
        const dateStr:string=this.dT.format(dateD,'EEEE, d MMM yyyy');
        dayObj.date=dateStr;
        for(let i=0;i<sV.length;i++){dayObj.ttlR++;
          let rosItemO:any=sV[i];
          const empMatch:any=this.pplArr.filter(p=>String(p.EmpId)===(String(sV[i].Employee)))[0];
          let nName:string='',ffNN:string='';
          const DNameArr:string[]=empMatch.DisplayName.split(' ');
          if(DNameArr.length>1){nName=DNameArr[0]+' '+DNameArr[1].charAt(0)+'.'}else{nName=empMatch.DisplayName};
          const fL:string=nName.charAt(0).toUpperCase();
          const restN:string=nName.substring(1,nName.length-1);
          const fNN:string=fL+restN;
          const fNNArr:string[]=fNN.split(' ');
          if(fNNArr.length>1){ffNN=fNNArr[0]+' '+fNNArr[1].toUpperCase()+'.'}else{ffNN=fNN};
          rosItemO['EmpDName']=ffNN;
          dayObj.ttlHrs+=Number(sV[i].TotalTime);
          dayObj.rosters.push(rosItemO)
        };
        this.snoopD.push(dayObj)
      }
    };
    return Promise.resolve(true);
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doInitSnoop() { this.logger.info('[Snoop|doInitSnoop] ()...');
    const fetchSRes:any=await this.fetchSnoopData();console.log(fetchSRes);
    if(fetchSRes.result){this.renderSnoopData(fetchSRes.data)};
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doSnoopRefresh(event){ this.logger.info('[Snoop|doSnoopRefresh]');
    let backupSRaw:string=this.rawSnoopData,backupSData:string[]=this.snoopD;
    this.isRefreshing=true;
    setTimeout(async()=>{
      this.rawSnoopData='';this.snoopD=[];
      const fetchSRes:any=await this.fetchSnoopData();if(fetchSRes.result){await this.renderSnoopData(fetchSRes.data)}else{this.rawSnoopData=backupSRaw;this.snoopD=backupSData};;
      this.isRefreshing=false;
      event.target.complete();
    },250);
  }
////////////////////////////////////////////////////////////////////////////////////////
  pageEnterAnim() { this.logger.info('[Snoop|pageEnterAnim] ()...');
    this.evServ.subscribe('doPageEnterAnim',()=>{
      const pageKey='snoop';const sLogoEle=$('.hcl-slogo.'+pageKey);const preImg='../../assets/img/slogo-';const cProgEle=$('.hcl-progcirc.'+pageKey);const patchEles=$('.hcl-opatch.'+pageKey+' .hcl-ipatch.'+pageKey);const starEle=$('.hcl-star.'+pageKey);const pageTitle=$('.hcl-title.'+pageKey);const titleBar=$('.hcl-leftbar.'+pageKey);const leftCol=$('.sheriff-page-header-col.left-col.'+pageKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+pageKey);const titleText=$('.sheriff-title.tight-wrap.'+pageKey);const calcBarW=Math.round(($(leftCol).outerWidth()+6)-($(pageTitle).offset().left+$(pageTitle).outerWidth()))+'px';this.leftAnimBarW=calcBarW;$(patchEles).addClass('hidden');
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
    this.logger.info('[Snoop|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
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
