(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_snoop_snoop_module_ts"],{

/***/ 47607:
/*!***************************************!*\
  !*** ./src/app/snoop/snoop.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnoopPageModule": function() { return /* binding */ SnoopPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _snoop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snoop.page */ 87424);








const routes = [
    {
        path: '',
        component: _snoop_page__WEBPACK_IMPORTED_MODULE_0__.SnoopPage
    }
];
let SnoopPageModule = class SnoopPageModule {
};
SnoopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()
        ],
        declarations: [_snoop_page__WEBPACK_IMPORTED_MODULE_0__.SnoopPage]
    })
], SnoopPageModule);



/***/ }),

/***/ 87424:
/*!*************************************!*\
  !*** ./src/app/snoop/snoop.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnoopPage": function() { return /* binding */ SnoopPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_snoop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./snoop.page.html */ 99906);
/* harmony import */ var _snoop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snoop.page.scss */ 75089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sqlite.service */ 90636);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/events.service */ 80106);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/detail.service */ 52153);
/* harmony import */ var _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/deputy.service */ 22092);
/* harmony import */ var _services_datetime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/datetime.service */ 12826);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);














////////////////////////////////////////////////////////////////////////////////////////
let SnoopPage = class SnoopPage {
    //----------------------
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(evServ, logger, platform, detailServ, deputy, dT, navCtrl, loadCtrl, menuCtrl, modalCtrl, storeServ, sqlServ, appRef) {
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
        this.appRef = appRef;
        ////////////////////////////////////////////////////////////////////////////////////////
        this.progCirc = { responsive: true, showTitle: false, showSubtitle: false, showUnits: false, percent: 0, radius: 56, outerStrokeWidth: 4, showInnerStroke: false, outerStrokeColor: '#FF9800', animation: true, backgroundPadding: 2, animationDuration: 400 };
        this.noPeople = null;
        this.pplArr = [];
        this.isRefreshing = false;
        //----------------------
        this.rawSnoopData = '';
        this.snoopD = [];
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.myObj = this.detailServ.myObj;
        this.meObj = this.detailServ.meObj;
        this.meEmpId = this.detailServ.meEmpId;
        this.pplArr = this.detailServ.pplArr;
        this.pageEnterAnim();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidEnter() {
        this.logger.info('[Snoop|ionViewDidEnter] ()...');
        this.evServ.publish('doPageEnterAnim', null);
        this.doInitSnoop();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillLeave() {
        this.logger.info('[Snoop|ionViewWillLeave] ()...');
        const titleBar = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-leftbar.snoop');
        const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title-leftanimbar-inner.snoop');
        const titleText = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title.tight-wrap.snoop');
        jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).css('width', '0px').removeClass('dimmed');
        jquery__WEBPACK_IMPORTED_MODULE_8__(animBarEnd).removeClass('showing');
        jquery__WEBPACK_IMPORTED_MODULE_8__(titleText).removeClass('scrolledin');
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    fetchSnoopData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Snoop|fetchSnoopData] ()...');
            const getSDRes = yield this.deputy.getSnoopData();
            if (getSDRes.result) {
                return Promise.resolve({ result: true, data: getSDRes.data });
            }
            else {
                return Promise.resolve({ result: false });
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    renderSnoopData(rawSData) {
        this.logger.info('[Snoop|renderSnoopData] ()...');
        this.rawSnoopData = rawSData;
        for (const [sK, sV] of Object.entries(rawSData)) {
            let dayObj = { date: '', rosters: [], ttlR: 0, ttlHrs: 0 };
            if (sV && Array.isArray(sV) && sV.length > 0) {
                const dateD = this.dT.parse(String(sK), 'yyyyMMdd');
                const dateStr = this.dT.format(dateD, 'EEEE, d MMM yyyy');
                dayObj.date = dateStr;
                for (let i = 0; i < sV.length; i++) {
                    dayObj.ttlR++;
                    let rosItemO = sV[i];
                    const empMatch = this.pplArr.filter(p => String(p.EmpId) === (String(sV[i].Employee)))[0];
                    let nName = '', ffNN = '';
                    const DNameArr = empMatch.DisplayName.split(' ');
                    if (DNameArr.length > 1) {
                        nName = DNameArr[0] + ' ' + DNameArr[1].charAt(0) + '.';
                    }
                    else {
                        nName = empMatch.DisplayName;
                    }
                    ;
                    const fL = nName.charAt(0).toUpperCase();
                    const restN = nName.substring(1, nName.length - 1);
                    const fNN = fL + restN;
                    const fNNArr = fNN.split(' ');
                    if (fNNArr.length > 1) {
                        ffNN = fNNArr[0] + ' ' + fNNArr[1].toUpperCase() + '.';
                    }
                    else {
                        ffNN = fNN;
                    }
                    ;
                    rosItemO['EmpDName'] = ffNN;
                    dayObj.ttlHrs += Number(sV[i].TotalTime);
                    dayObj.rosters.push(rosItemO);
                }
                ;
                this.snoopD.push(dayObj);
            }
        }
        ;
        return Promise.resolve(true);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doInitSnoop() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Snoop|doInitSnoop] ()...');
            const fetchSRes = yield this.fetchSnoopData();
            console.log(fetchSRes);
            if (fetchSRes.result) {
                this.renderSnoopData(fetchSRes.data);
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doSnoopRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Snoop|doSnoopRefresh]');
            let backupSRaw = this.rawSnoopData, backupSData = this.snoopD;
            this.isRefreshing = true;
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                this.rawSnoopData = '';
                this.snoopD = [];
                const fetchSRes = yield this.fetchSnoopData();
                if (fetchSRes.result) {
                    yield this.renderSnoopData(fetchSRes.data);
                }
                else {
                    this.rawSnoopData = backupSRaw;
                    this.snoopD = backupSData;
                }
                ;
                ;
                this.isRefreshing = false;
                event.target.complete();
            }), 250);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    pageEnterAnim() {
        this.logger.info('[Snoop|pageEnterAnim] ()...');
        this.evServ.subscribe('doPageEnterAnim', () => {
            const pageKey = 'snoop';
            const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-slogo.' + pageKey);
            const preImg = '../../assets/img/slogo-';
            const cProgEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-progcirc.' + pageKey);
            const patchEles = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
            const starEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-star.' + pageKey);
            const pageTitle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-title.' + pageKey);
            const titleBar = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-leftbar.' + pageKey);
            const leftCol = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-page-header-col.left-col.' + pageKey);
            const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title-leftanimbar-inner.' + pageKey);
            const titleText = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title.tight-wrap.' + pageKey);
            const calcBarW = Math.round((jquery__WEBPACK_IMPORTED_MODULE_8__(leftCol).outerWidth() + 6) - (jquery__WEBPACK_IMPORTED_MODULE_8__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_8__(pageTitle).outerWidth())) + 'px';
            this.leftAnimBarW = calcBarW;
            jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).addClass('hidden');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).addClass('hcl-star-startanim');
                this.progCirc.outerStrokeColor = '#FF9800';
                this.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'g.png');
                this.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'w.png');
                    this.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');
                    jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).addClass('tabtilt');
                    jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).css('width', calcBarW);
                    setTimeout(() => {
                        jquery__WEBPACK_IMPORTED_MODULE_8__(animBarEnd).addClass('showing');
                        jquery__WEBPACK_IMPORTED_MODULE_8__(titleText).addClass('scrolledin');
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).addClass('dimmed'); jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).removeClass('tabtilt'); }, 200);
                    }, 200);
                    setTimeout(() => {
                        this.progCirc.percent = 0;
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_8__(cProgEle).css('display', 'unset'); }, 1000);
                        jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).removeClass('hcl-star-startanim');
                        this.evServ.destroy('doPageEnterAnim');
                    }, 600);
                }, 400);
            }, 300);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
        this.logger.info('[Snoop|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
        const doAni = () => new Promise((resolve) => {
            const aniStr = 'animate__animated animate__' + aniName;
            const delStr = 'animDel-' + aniDel;
            const durStr = 'animDur-' + aniDur;
            jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).on('animationend', () => {
                if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr);
                }
                if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).remove();
                }
                if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).css('display', 'none');
                }
                resolve(true);
            });
            if (aniDel > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).addClass(delStr);
            }
            if (aniDur > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).addClass(durStr);
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).addClass(aniStr);
            }
        });
        doAni();
    }
};
SnoopPage.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_10__.NGXLogger },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _services_detail_service__WEBPACK_IMPORTED_MODULE_4__.DetailService },
    { type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__.DeputyService },
    { type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_6__.DateTimeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_2__.SQLiteService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ApplicationRef }
];
SnoopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-snoop',
        template: _raw_loader_snoop_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_snoop_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
    ////////////////////////////////////////////////////////////////////////////////////////
], SnoopPage);



/***/ }),

/***/ 75089:
/*!***************************************!*\
  !*** ./src/app/snoop/snoop.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbm9vcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 99906:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/snoop/snoop.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n  <ion-toolbar class=\"sheriff-toolbar\">\n      <div class=\"sheriff-header-background-wrapper\">\n          <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n          <div class=\"sheriff-header-background-inner-wrapper\">\n              <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                  <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                      <ion-col class=\"sheriff-col sheriff-page-header-col left-col snoop\">\n                          <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar snoop\">\n                              <div class=\"sheriff-title-leftanimbar-inner snoop\"></div>\n                          </div>\n                          <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                              <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title snoop\">\n                                  <div class=\"sheriff-title tight-wrap snoop\">snoop data</div>\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                          <div class=\"sheriff-page-header-logo-wrapper\">\n                              <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                  <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring snoop\"></div>\n                                  <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle snoop hcl-progcirc snoop\">\n                                      <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                          [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                  </div>\n                                  <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch snoop\">\n                                      <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch snoop\"></div>\n                                  </div>\n                                  <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star snoop\">\n                                  <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo snoop\">\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                          <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                              <div class=\"sheriff-page-backbtn-wrapper snoopment\">\n                                  <ion-back-button icon=\"chevron-back-outline\" class=\"sheriff-backbtn snoop\" defaultHref=\"/tabs\"></ion-back-button>\n                              </div>\n                              <div class=\"sheriff-menu-button-wrapper\">\n                                  <ion-menu-button class=\"sheriff-menu-button snoop\" autoHide=\"false\">\n                                      <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                  </ion-menu-button>\n                              </div>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sheriff-content tab-content snoop\">\n  <!-- PAGE REFRESHER -->\n  <ion-refresher class=\"sheriff-refresher page snoop\" slot=\"fixed\" (ionRefresh)=\"doSnoopRefresh($event)\">\n      <div class=\"sheriff-refresher-noise-wrapper\">\n          <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n      </div>\n  </ion-refresher>\n  <!-- PAGE-CONTENT -->\n  <!-- CONTENT HEADING -->\n  <div class=\"sheriff-tabcontent-mainheading-wrapper snoop\">\n      <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid snoop\">\n          <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 snoop\">\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 snoop\">\n              </ion-col>\n              <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 snoop\">\n                  <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-snoop.png\">\n              </ion-col>\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 snoop\">\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>  \n  <!-- CONTENT WRAPPER -->\n  <div class=\"sheriff-snoop-page main-page-outter-wrapper\">\n    <div *ngIf=\"snoopD!==null\" class=\"sheriff-snoop-page main-page-inner-wrapper\">\n      <div *ngFor=\"let snoopDay of snoopD;let i=index\" [ngStyle]=\"{'animation-delay':250+(i*50)+'ms'}\" class=\"sheriff-snoop-line-div snoopday{{i}} animate__animated animate__fadeIn animDur-250\">\n        <ion-grid class=\"sheriff-grid snoopday-grid\">\n          <ion-row class=\"sheriff-grid snoopday-daytitle-row\">\n            <ion-col size=\"8\" class=\"sheriff-grid snoopday-daytitle-col date\">\n              {{snoopDay.date}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-daytitle-col shifts\">\n              <span class=\"snoop-daytitle no\">{{snoopDay.ttlR}}</span><span class=\"snoop-daytitle txt\">Shifts</span>\n            </ion-col>\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-daytitle-col hrs\">\n              <span class=\"snoop-daytitle no\">{{snoopDay.ttlHrs}}</span><span class=\"snoop-daytitle txt\">Hrs</span>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let snoopRos of snoopD[i].rosters;let ri=index\" class=\"sheriff-grid snoopday-item-row\">\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-item-col rosid-col\">\n              #{{snoopRos.Id}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"sheriff-grid snoopday-item-col rosemp-col\">\n              {{snoopRos.EmpDName}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"sheriff-grid snoopday-item-col rosarea-col\">\n              {{snoopRos.OperationalUnitObject.OperationalUnitName}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-item-col rostt-col\">\n              {{snoopRos.TotalTime}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  <!-- END OF PAGE-CONTENT -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_snoop_snoop_module_ts-es2015.js.map