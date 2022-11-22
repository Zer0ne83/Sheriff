(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_pay_pay_module_ts"],{

/***/ 59485:
/*!***********************************!*\
  !*** ./src/app/pay/pay.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPageModule": function() { return /* binding */ PayPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay.page */ 48941);








const routes = [
    {
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_0__.PayPage
    }
];
let PayPageModule = class PayPageModule {
};
PayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()
        ],
        declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_0__.PayPage]
    })
], PayPageModule);



/***/ }),

/***/ 48941:
/*!*********************************!*\
  !*** ./src/app/pay/pay.page.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPage": function() { return /* binding */ PayPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pay.page.html */ 57068);
/* harmony import */ var _pay_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.page.scss */ 5013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/app.service */ 66475);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sqlite.service */ 90636);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/events.service */ 80106);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/detail.service */ 52153);
/* harmony import */ var _services_deputy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/deputy.service */ 22092);
/* harmony import */ var _services_datetime_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/datetime.service */ 12826);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);















////////////////////////////////////////////////////////////////////////////////////////
let PayPage = class PayPage {
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(evServ, logger, platform, detailServ, deputy, dT, navCtrl, loadCtrl, menuCtrl, modalCtrl, storeServ, sqlServ, appServ, appRef) {
        this.evServ = evServ;
        this.logger = logger;
        this.platform = platform;
        this.detailServ = detailServ;
        this.deputy = deputy;
        this.dT = dT;
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.storeServ = storeServ;
        this.sqlServ = sqlServ;
        this.appServ = appServ;
        this.appRef = appRef;
        ////////////////////////////////////////////////////////////////////////////////////////
        this.progCirc = { responsive: true, showTitle: false, showSubtitle: false, showUnits: false, percent: 0, radius: 56, outerStrokeWidth: 4, showInnerStroke: false, outerStrokeColor: '#FF9800', animation: true, backgroundPadding: 2, animationDuration: 400 };
        this.pplArr = [];
        this.payPeriod = null;
        this.empPayCycle = [];
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.logger.info('[Payment|ngOnInit] ()...');
        this.myObj = this.detailServ.myObj;
        this.meObj = this.detailServ.meObj;
        this.meEmpId = this.detailServ.meEmpId;
        this.pplArr = this.detailServ.pplArr;
        this.pageEnterAnim();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidEnter() {
        this.logger.info('[Payment|ionViewDidEnter] ()...');
        this.evServ.publish('doPageEnterAnim', null);
        this.doInitPayments();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doInitPayments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Payment|doInitPayments] ()...');
            const getPayPeriodRes = yield this.deputy.getPayPeriod();
            if (getPayPeriodRes.result) {
                this.payPeriod = getPayPeriodRes.data;
            }
            ;
            const getEmpPayCycleRes = yield this.deputy.getEmpPayCycle();
            console.log(getEmpPayCycleRes.data);
            if (getEmpPayCycleRes.result) {
                this.empPayCycle = getEmpPayCycleRes.data;
                this.appRef.tick();
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillLeave() {
        this.logger.info('[Payment|ionViewWillLeave] ()...');
        const titleBar = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-leftbar.pay');
        const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_9__('.sheriff-title-leftanimbar-inner.pay');
        const titleText = jquery__WEBPACK_IMPORTED_MODULE_9__('.sheriff-title.tight-wrap.pay');
        jquery__WEBPACK_IMPORTED_MODULE_9__(titleBar).css('width', '0px').removeClass('dimmed');
        jquery__WEBPACK_IMPORTED_MODULE_9__(animBarEnd).removeClass('showing');
        jquery__WEBPACK_IMPORTED_MODULE_9__(titleText).removeClass('scrolledin');
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doPaymentRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Payment|doPaymentRefresh]');
            setTimeout(() => {
                event.target.complete();
            }, 3000);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    pageEnterAnim() {
        this.logger.info('[Profile|pageEnterAnim] ()...');
        this.evServ.subscribe('doPageEnterAnim', () => {
            console.log('Triggered');
            const pageKey = 'pay';
            const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-slogo.' + pageKey);
            const preImg = '../../assets/img/slogo-';
            const cProgEle = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-progcirc.' + pageKey);
            const patchEles = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
            const starEle = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-star.' + pageKey);
            const pageTitle = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-title.' + pageKey);
            const titleBar = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-leftbar.' + pageKey);
            const leftCol = jquery__WEBPACK_IMPORTED_MODULE_9__('.sheriff-page-header-col.left-col.' + pageKey);
            const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_9__('.sheriff-title-leftanimbar-inner.' + pageKey);
            const titleText = jquery__WEBPACK_IMPORTED_MODULE_9__('.sheriff-title.tight-wrap.' + pageKey);
            const calcBarW = Math.round((jquery__WEBPACK_IMPORTED_MODULE_9__(leftCol).outerWidth() + 6) - (jquery__WEBPACK_IMPORTED_MODULE_9__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_9__(pageTitle).outerWidth())) + 'px';
            this.leftAnimBarW = calcBarW;
            jquery__WEBPACK_IMPORTED_MODULE_9__(patchEles).addClass('hidden');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_9__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_9__(starEle).addClass('hcl-star-startanim');
                this.progCirc.outerStrokeColor = '#FF9800';
                this.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_9__(sLogoEle).attr('src', preImg + 'g.png');
                this.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(sLogoEle).attr('src', preImg + 'w.png');
                    this.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');
                    jquery__WEBPACK_IMPORTED_MODULE_9__(sLogoEle).addClass('tabtilt');
                    jquery__WEBPACK_IMPORTED_MODULE_9__(titleBar).css('width', calcBarW);
                    setTimeout(() => {
                        jquery__WEBPACK_IMPORTED_MODULE_9__(animBarEnd).addClass('showing');
                        jquery__WEBPACK_IMPORTED_MODULE_9__(titleText).addClass('scrolledin');
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_9__(titleBar).addClass('dimmed'); jquery__WEBPACK_IMPORTED_MODULE_9__(sLogoEle).removeClass('tabtilt'); }, 200);
                    }, 200);
                    setTimeout(() => {
                        this.progCirc.percent = 0;
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_9__(cProgEle).css('display', 'unset'); }, 1000);
                        jquery__WEBPACK_IMPORTED_MODULE_9__(starEle).removeClass('hcl-star-startanim');
                        this.evServ.destroy('doPageEnterAnim');
                    }, 600);
                }, 400);
            }, 300);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
        this.logger.info('[Profile|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
        const doAni = () => new Promise((resolve) => {
            const aniStr = 'animate__animated animate__' + aniName;
            const delStr = 'animDel-' + aniDel;
            const durStr = 'animDur-' + aniDur;
            jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).on('animationend', () => {
                if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr);
                }
                if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).remove();
                }
                if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).css('display', 'none');
                }
                resolve(true);
            });
            if (aniDel > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).addClass(delStr);
            }
            if (aniDur > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).addClass(durStr);
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).addClass(aniStr);
            }
        });
        doAni();
    }
};
PayPage.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_11__.NGXLogger },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _services_detail_service__WEBPACK_IMPORTED_MODULE_5__.DetailService },
    { type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_6__.DeputyService },
    { type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_7__.DateTimeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_3__.SQLiteService },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ApplicationRef }
];
PayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({ selector: 'app-pay', template: _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_pay_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    ////////////////////////////////////////////////////////////////////////////////////////
], PayPage);



/***/ }),

/***/ 5013:
/*!***********************************!*\
  !*** ./src/app/pay/pay.page.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 57068:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pay/pay.page.html ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n  <ion-toolbar class=\"sheriff-toolbar\">\n      <div class=\"sheriff-header-background-wrapper\">\n          <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n          <div class=\"sheriff-header-background-inner-wrapper\">\n              <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                  <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                      <ion-col class=\"sheriff-col sheriff-page-header-col left-col pay\">\n                          <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar pay\">\n                              <div class=\"sheriff-title-leftanimbar-inner pay\"></div>\n                          </div>\n                          <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                              <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title pay\">\n                                  <div class=\"sheriff-title tight-wrap pay\">Payment</div>\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                          <div class=\"sheriff-page-header-logo-wrapper\">\n                              <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                  <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring pay\"></div>\n                                  <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle pay hcl-progcirc pay\">\n                                      <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                          [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                  </div>\n                                  <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch pay\">\n                                      <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch pay\"></div>\n                                  </div>\n                                  <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star pay\">\n                                  <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo pay\">\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                          <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                              <div class=\"sheriff-page-backbtn-wrapper payment\">\n                                  <ion-back-button icon=\"chevron-back-outline\" class=\"sheriff-backbtn pay\" defaultHref=\"/tabs\"></ion-back-button>\n                              </div>\n                              <div class=\"sheriff-menu-button-wrapper\">\n                                  <ion-menu-button class=\"sheriff-menu-button pay\" autoHide=\"false\">\n                                      <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                  </ion-menu-button>\n                              </div>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sheriff-content tab-content pay\">\n  <!-- PAGE REFRESHER -->\n  <ion-refresher class=\"sheriff-refresher page pay\" slot=\"fixed\" (ionRefresh)=\"doPaymentRefresh($event)\">\n      <div class=\"sheriff-refresher-noise-wrapper\">\n          <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n      </div>\n  </ion-refresher>\n  <!-- PAGE-CONTENT -->\n  <!-- CONTENT HEADING -->\n  <div class=\"sheriff-tabcontent-mainheading-wrapper pay\">\n      <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid pay\">\n          <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 pay\">\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 pay\">\n              </ion-col>\n              <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 pay\">\n                <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-payment.png\">\n              </ion-col>\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 pay\">\n               \n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n  <!-- CONTENT WRAPPER -->\n  <div class=\"sheriff-payment-page main-page-outter-wrapper\">\n    <ion-grid *ngIf=\"payPeriod!==null\" class=\"sheriff-grid sheriff-payment-grid payperiod-grid\">\n      <ion-row class=\"sheriff-row sheriff-payment-row payperiod-row\">\n          <ion-col size=\"6\" class=\"sheriff-col sheriff-payment-col payperiod-col label\">\n            Pay Period:\n          </ion-col>\n          <ion-col size=\"6\" class=\"sheriff-col sheriff-payment-col payperiod-col data\">\n            {{payPeriod.Name}}\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"sheriff-row sheriff-payment-row payperiod-row\">\n        <ion-col size=\"6\" class=\"sheriff-col sheriff-payment-col payperiod-col label\">\n          Active?\n        </ion-col>\n        <ion-col size=\"6\" class=\"sheriff-col sheriff-payment-col payperiod-col data\">\n          {{payPeriod.Active.toString()}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf=\"empPayCycle.length>0\" class=\"sheriff-grid sheriff-payment-grid emppaycycle-grid\">\n      <ion-row class=\"sheriff-row sheriff-payment-row emppaycycle-row\">\n          <ion-col size=\"12\" class=\"sheriff-col sheriff-payment-col emppaycycle-col label\">\n            <ion-grid class=\"sheriff-grid empcycle-label-grid\">\n              <ion-row class=\"sheriff-row empcycle-label-row\">\n                <ion-col size=\"2\" class=\"sheriff-col\">Id</ion-col>\n                <ion-col size=\"3\" class=\"sheriff-col\">Date</ion-col>\n                <ion-col size=\"2\" class=\"sheriff-col\">Shifts</ion-col>\n                <ion-col size=\"3\" class=\"sheriff-col\">Time</ion-col>\n                <ion-col size=\"2\" class=\"sheriff-col\">Paid</ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-list>\n              <ion-item *ngFor=\"let epcItem of empPayCycle; index as epcI\">\n                <ion-grid class=\"sheriff-grid\">\n                  <ion-row class=\"sheriff-row\">\n                    <ion-col size=\"2\" class=\"sheriff-col\">{{epcItem.Id}}</ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col\">{{epcItem.Modified.split('T')[0]}}</ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col\">{{epcItem.Timesheets}}</ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col\">{{epcItem.TimeTotal}}</ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col\">{{epcItem.Paid}}</ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"sheriff-row sheriff-payment-row payperiod-row\">\n        <ion-col size=\"6\" class=\"sheriff-col sheriff-payment-col payperiod-col label\">\n          Active?\n        </ion-col>\n        <ion-col size=\"6\" class=\"sheriff-col sheriff-payment-col payperiod-col data\">\n          {{payPeriod.Active.toString()}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- END OF PAGE-CONTENT -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pay_pay_module_ts-es2015.js.map