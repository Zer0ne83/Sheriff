(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 97279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 52377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createColorClasses; },
/* harmony export */   "g": function() { return /* binding */ getClassMap; },
/* harmony export */   "h": function() { return /* binding */ hostContext; },
/* harmony export */   "o": function() { return /* binding */ openURL; }
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 78434:
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": function() { return /* binding */ DirectivesModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _scroll_vanish_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-vanish.directive */ 99698);



let DirectivesModule = class DirectivesModule {
};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [],
        declarations: [_scroll_vanish_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollVanishDirective],
        exports: [_scroll_vanish_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollVanishDirective]
    })
], DirectivesModule);



/***/ }),

/***/ 99698:
/*!*******************************************************!*\
  !*** ./src/app/directives/scroll-vanish.directive.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollVanishDirective": function() { return /* binding */ ScrollVanishDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/events.service */ 80106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);





////////////////////////////////////////////////////////////////////////////////////////
let ScrollVanishDirective = class ScrollVanishDirective {
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(element, renderer, domCtrl, evServ, platform) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.evServ = evServ;
        this.platform = platform;
        this.hidden = false;
        this.hH = 80;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.vH = ((this.platform.height() / 2) - 128);
        this.scrollArea.ionScroll.subscribe(scrollEvent => {
            let delta = scrollEvent.detail.deltaY;
            let dir = () => { if (Math.sign(delta) === 1) {
                return 'd';
            }
            else {
                return 'u';
            } };
            if (scrollEvent.detail.currentY === 0 && this.hidden) {
                this.show();
            }
            else if (!this.hidden && dir() === 'd' && scrollEvent.detail.currentY > this.vH) {
                this.hide();
            }
            else if (this.hidden && dir() === 'u' && scrollEvent.detail.currentY < this.vH) {
                this.show();
            }
            if (this.hidden) {
                if (scrollEvent.detail.currentY > (2 * this.vH)) {
                    setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_1__('.topbump-label').css('color', '#ff9800ad'); }, 500);
                    jquery__WEBPACK_IMPORTED_MODULE_1__('.totopbump').css('height', '28px');
                    jquery__WEBPACK_IMPORTED_MODULE_1__('.totopbump').on('click', () => {
                        this.scrollArea.scrollToTop();
                    });
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('.topbump-label').css('color', '#181818');
                    setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_1__('.totopbump').css('height', '0px'); }, 250);
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngAfterViewInit() {
        this.nE = this.element.nativeElement;
        this.thisP = this.evServ.cPage.lName;
        this.evServ.subscribe('newPage', nP => { this.thisP = nP; this.thisP.substring(0, 3) === 'tab' ? this.isTab = true : this.isTab = false; });
        this.initStyles();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initStyles() {
        const initCSS = [{ s: 'transition', v: '.25s ease-out' }, { s: 'height', v: '72px' }];
        for (let sI = 0; sI < initCSS.length; sI++) {
            this.domCtrl.write(() => { this.renderer.setStyle(this.nE, initCSS[sI]['s'], initCSS[sI]['v']); });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    hide() {
        const showB = jquery__WEBPACK_IMPORTED_MODULE_1__('.sheriff-fade-nav-btn-wrapper.' + this.thisP);
        const fabWrap = jquery__WEBPACK_IMPORTED_MODULE_1__('.sheriff-fader-fab.' + this.thisP);
        if (this.isTab) {
            if (!jquery__WEBPACK_IMPORTED_MODULE_1__('.tabs-inner').hasClass('myscrollhide')) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.tabs-inner').addClass('myscrollhide');
            }
            ;
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__(showB).on('click', () => { this.show(); });
        if (jquery__WEBPACK_IMPORTED_MODULE_1__(fabWrap).css('display') === 'none') {
            jquery__WEBPACK_IMPORTED_MODULE_1__(fabWrap).fadeIn(250);
        }
        const hideCSS = [{ s: 'min-height', v: '32px' }, { s: 'height', v: '32px' }, { s: 'opacity', v: '0' }, { s: 'padding', v: '0' }];
        for (let sI = 0; sI < hideCSS.length; sI++) {
            this.domCtrl.write(() => { this.renderer.setStyle(this.nE, hideCSS[sI]['s'], hideCSS[sI]['v']); });
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__('.sheriff-page-header-grid').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__('.tablistfab').fadeOut(250);
        jquery__WEBPACK_IMPORTED_MODULE_1__('.sheriff-scroll-miniheader').show();
        this.hidden = true;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    show() {
        if (this.isTab) {
            if (jquery__WEBPACK_IMPORTED_MODULE_1__('.tabs-inner').hasClass('myscrollhide')) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.tabs-inner').removeClass('myscrollhide');
            }
            ;
        }
        const fabWrap = jquery__WEBPACK_IMPORTED_MODULE_1__('.sheriff-fader-fab.' + this.thisP);
        if (jquery__WEBPACK_IMPORTED_MODULE_1__(fabWrap).css('display') !== 'none') {
            jquery__WEBPACK_IMPORTED_MODULE_1__(fabWrap).fadeOut(250);
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__('.sheriff-scroll-miniheader').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__('.sheriff-page-header-grid').show();
        jquery__WEBPACK_IMPORTED_MODULE_1__('.tablistfab').fadeIn(250);
        const showCSS = ['opacity', 'min-height', 'padding'];
        this.domCtrl.write(() => { this.renderer.setStyle(this.nE, 'height', '72px'); for (let sI = 0; sI < showCSS.length; sI++) {
            this.renderer.removeStyle(this.nE, showCSS[sI]);
        } ; });
        this.hidden = false;
    }
};
ScrollVanishDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.DomController },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_0__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
ScrollVanishDirective.propDecorators = {
    scrollArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['myScrollVanish',] }],
    iScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScroll,] }],
    vScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll,] }]
};
ScrollVanishDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: '[myScrollVanish]' })
    ////////////////////////////////////////////////////////////////////////////////////////
], ScrollVanishDirective);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map