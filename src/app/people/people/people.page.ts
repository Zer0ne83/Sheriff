import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Platform, NavController, LoadingController, MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SQLiteService } from '../../services/sqlite.service';
import { EventsService } from '../../services/events.service';
import { NGXLogger } from 'ngx-logger';
import { DetailService } from '../../services/detail.service';
import { DeputyService } from '../../services/deputy.service';
import { DateTimeService } from '../../services/datetime.service';
import { StorageService } from '../../services/storage.service';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
////////////////////////////////////////////////////////////////////////////////////////
export class PeoplePage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////
  progCirc={responsive:true,showTitle:false,showSubtitle:false,showUnits:false,percent:0,radius:56,outerStrokeWidth:4,showInnerStroke:false,outerStrokeColor:'#FF9800',animation:true,backgroundPadding:2,animationDuration:400};
  leftAnimBarW:any;
  meObj:any;
  myObj:any;
  noPeople:boolean=null;
  pplArr:any[]=[];
  meEmpId:number;
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
  ionViewDidEnter() { this.logger.info('[Payment|ionViewDidEnter] ()...');
    this.evServ.publish('doPageEnterAnim',null);
    this.doInitPeople();
  }
////////////////////////////////////////////////////////////////////////////////////////
  ionViewWillLeave(){ this.logger.info('[People|ionViewWillLeave] ()...');
    const titleBar=$('.hcl-leftbar.people');const animBarEnd=$('.sheriff-title-leftanimbar-inner.people');const titleText=$('.sheriff-title.tight-wrap.people');
    $(titleBar).css('width','0px').removeClass('dimmed');$(animBarEnd).removeClass('showing');$(titleText).removeClass('scrolledin')
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doInitPeople() { this.logger.info('[People|doInitPeople] ()...');
    const gAPRes:any=await this.sqlServ.getAllPeople();
    if(gAPRes.length>0){this.noPeople=false;this.pplArr=gAPRes}else{this.noPeople=true}
    console.log(this.pplArr);
    this.appRef.tick();
  }
////////////////////////////////////////////////////////////////////////////////////////
  async doPeopleRefresh(event){ this.logger.info('[People|doPeopleRefresh]');
    setTimeout(()=>{event.target.complete()},3000);
  }
////////////////////////////////////////////////////////////////////////////////////////
  pageEnterAnim() { this.logger.info('[People|pageEnterAnim] ()...');
    this.evServ.subscribe('doPageEnterAnim',()=>{
      const pageKey='people';const sLogoEle=$('.hcl-slogo.'+pageKey);const preImg='../../assets/img/slogo-';const cProgEle=$('.hcl-progcirc.'+pageKey);const patchEles=$('.hcl-opatch.'+pageKey+' .hcl-ipatch.'+pageKey);const starEle=$('.hcl-star.'+pageKey);const pageTitle=$('.hcl-title.'+pageKey);const titleBar=$('.hcl-leftbar.'+pageKey);const leftCol=$('.sheriff-page-header-col.left-col.'+pageKey);const animBarEnd=$('.sheriff-title-leftanimbar-inner.'+pageKey);const titleText=$('.sheriff-title.tight-wrap.'+pageKey);const calcBarW=Math.round(($(leftCol).outerWidth()+6)-($(pageTitle).offset().left+$(pageTitle).outerWidth()))+'px';this.leftAnimBarW=calcBarW;$(patchEles).addClass('hidden');
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
    this.logger.info('[People|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
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
