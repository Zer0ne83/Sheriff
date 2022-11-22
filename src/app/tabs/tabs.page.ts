import { Component} from '@angular/core';
import * as $ from 'jquery';
///////////////////////////////////////////////////////////////////////////
@Component({selector:'app-tabs',templateUrl:'tabs.page.html', styleUrls:['tabs.page.scss']})
///////////////////////////////////////////////////////////////////////////
export class TabsPage {
///////////////////////////////////////////////////////////////////////////
  activeTab:string='shifts';
///////////////////////////////////////////////////////////////////////////
  constructor(){}
///////////////////////////////////////////////////////////////////////////
  tabsWillChange(event){if(event.tab!=='tabshifts'){this.tabChangeAni(event.tab)};this.activeTab=event.tab.replace('tab','')}
///////////////////////////////////////////////////////////////////////////
  tabChangeAni(tk:string){const calcBarW=Math.round(($('.sheriff-page-header-col.left-col.'+tk).outerWidth()+6)-($('.hcl-title.'+tk).offset().left+$('.hcl-title.'+tk).outerWidth()))+'px';$('.hcl-slogo.'+tk).addClass('tabtilt');$('.hcl-star.'+tk).addClass('tabchangestarback');$('.hcl-leftbar.'+tk).css('width',calcBarW);setTimeout(()=>{$('.sheriff-title.tight-wrap.'+tk).addClass('scrolledin');$('.sheriff-title-leftanimbar-inner.'+tk).addClass('showing');setTimeout(()=>{$('.hcl-leftbar.'+tk).addClass('dimmed');$('.hcl-star.'+tk).removeClass('tabchangestarback');$('.hcl-slogo.'+tk).removeClass('tabtilt')},200)},200)}
///////////////////////////////////////////////////////////////////////////
}
