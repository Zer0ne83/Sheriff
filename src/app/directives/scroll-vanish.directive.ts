import { EventsService } from './../services/events.service';
import { Directive, Input, ElementRef, Renderer2, OnInit, ViewChild } from '@angular/core';
import { DomController, Platform, IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////
@Directive({ selector: '[myScrollVanish]'})
////////////////////////////////////////////////////////////////////////////////////////
export class ScrollVanishDirective implements OnInit {
  @Input('myScrollVanish') scrollArea;
  @ViewChild(IonInfiniteScroll) iScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) vScroll: IonVirtualScroll;
  ///////////////////////////////////////////////////////
  nE:any; isTab:boolean; hidden:boolean = false; thisP:string; vH:number; hH:number = 80;
////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController,
    private evServ: EventsService,
    private platform: Platform
  ) {}
////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.vH = ((this.platform.height()/2)-128); 
    this.scrollArea.ionScroll.subscribe(scrollEvent => {
      let delta = scrollEvent.detail.deltaY; let dir = () => {if(Math.sign(delta)===1){return'd'}else{return'u'}};
      if (scrollEvent.detail.currentY === 0 && this.hidden) { this.show(); }
      else if (!this.hidden && dir() === 'd' && scrollEvent.detail.currentY > this.vH ) { this.hide(); }
      else if (this.hidden && dir() === 'u' && scrollEvent.detail.currentY < this.vH ) { this.show(); }
      if ( this.hidden ) {
        if ( scrollEvent.detail.currentY > (2*this.vH) ) {
          setTimeout(() => { $('.topbump-label').css('color', '#ff9800ad'); }, 500);
          $('.totopbump').css('height', '28px');
          $('.totopbump').on('click', () => {
            this.scrollArea.scrollToTop();
          });
        } else {
          $('.topbump-label').css('color', '#181818');
          setTimeout(() => { $('.totopbump').css('height', '0px'); }, 250);
        }
      }
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  ngAfterViewInit() {
    this.nE = this.element.nativeElement; this.thisP = this.evServ.cPage.lName;
    this.evServ.subscribe('newPage', nP => { this.thisP = nP; this.thisP.substring(0,3) === 'tab' ? this.isTab = true : this.isTab = false; });
    this.initStyles();
  }
////////////////////////////////////////////////////////////////////////////////////////
  initStyles() {
    const initCSS = [{s:'transition',v:'.25s ease-out'},{s:'height',v:'72px'}];
    for ( let sI = 0; sI < initCSS.length; sI++ ) { this.domCtrl.write(() => { this.renderer.setStyle(this.nE, initCSS[sI]['s'], initCSS[sI]['v']); }); }
  }
////////////////////////////////////////////////////////////////////////////////////////
  hide() {
    const showB = $('.sheriff-fade-nav-btn-wrapper.' + this.thisP); const fabWrap = $('.sheriff-fader-fab.' + this.thisP);
    if ( this.isTab ) { if (!$('.tabs-inner').hasClass('myscrollhide')) { $('.tabs-inner').addClass('myscrollhide') }; }
    $(showB).on('click', () => { this.show(); }); if ( $(fabWrap).css('display') === 'none' ) { $(fabWrap).fadeIn(250); }
    const hideCSS = [{s:'min-height',v:'32px'},{s:'height',v:'32px'},{s:'opacity',v:'0'},{s:'padding',v:'0'}];
    for ( let sI = 0; sI < hideCSS.length; sI++ ) { this.domCtrl.write(() => { this.renderer.setStyle(this.nE, hideCSS[sI]['s'], hideCSS[sI]['v']); }); }
    $('.sheriff-page-header-grid').hide();
    $('.tablistfab').fadeOut(250);
    $('.sheriff-scroll-miniheader').show();
    this.hidden = true;
  }
////////////////////////////////////////////////////////////////////////////////////////
  show() {
    if ( this.isTab ) { if ( $('.tabs-inner').hasClass('myscrollhide') ) { $('.tabs-inner').removeClass('myscrollhide') }; }
    const fabWrap = $('.sheriff-fader-fab.' + this.thisP); if ( $(fabWrap).css('display') !== 'none' ) { $(fabWrap).fadeOut(250); }
    $('.sheriff-scroll-miniheader').hide();
    $('.sheriff-page-header-grid').show();
    $('.tablistfab').fadeIn(250);
    const showCSS = ['opacity','min-height','padding']; 
    this.domCtrl.write(() => { this.renderer.setStyle(this.nE, 'height', '72px'); for ( let sI = 0; sI < showCSS.length; sI++ ) { this.renderer.removeStyle(this.nE, showCSS[sI]) }; });
    this.hidden = false;
  }
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
}
