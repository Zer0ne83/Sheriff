(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_tabs_tabshifts_tabshifts_module_ts"],{

/***/ 96689:
/*!****************************************************!*\
  !*** ./src/app/tabs/tabshifts/tabshifts.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabShiftsPageModule": function() { return /* binding */ TabShiftsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _tabshifts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabshifts.page */ 15358);








//import { DirectivesModule } from './../../directives/directives.module';

const routes = [
    {
        path: '',
        component: _tabshifts_page__WEBPACK_IMPORTED_MODULE_0__.TabShiftsPage
    }
];
let TabShiftsPageModule = class TabShiftsPageModule {
};
TabShiftsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot(),
            //DirectivesModule
        ],
        declarations: [_tabshifts_page__WEBPACK_IMPORTED_MODULE_0__.TabShiftsPage]
    })
], TabShiftsPageModule);



/***/ }),

/***/ 15358:
/*!**************************************************!*\
  !*** ./src/app/tabs/tabshifts/tabshifts.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabShiftsPage": function() { return /* binding */ TabShiftsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabshifts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabshifts.page.html */ 78829);
/* harmony import */ var _tabshifts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabshifts.page.scss */ 93435);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/keyboard */ 87730);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/sync.service */ 43395);
/* harmony import */ var _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/datetime.service */ 12826);
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/detail.service */ 52153);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/sqlite.service */ 90636);
/* harmony import */ var src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fairwork.service */ 93405);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/notifications.service */ 79744);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/events.service */ 80106);
/* harmony import */ var _services_deputy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/deputy.service */ 22092);
/* harmony import */ var src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/calendar.service */ 49603);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/status-bar */ 64909);
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/firebase.service */ 19446);
/* harmony import */ var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor/dialog */ 63540);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);






















////////////////////////////////////////////////////////////////////////////////////////
let TabShiftsPage = class TabShiftsPage {
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(plt, logger, evServ, storeServ, deputy, sqlServ, syncServ, fwServ, dS, dT, router, noteServ, calServ, navCtrl, fireServ) {
        this.plt = plt;
        this.logger = logger;
        this.evServ = evServ;
        this.storeServ = storeServ;
        this.deputy = deputy;
        this.sqlServ = sqlServ;
        this.syncServ = syncServ;
        this.fwServ = fwServ;
        this.dS = dS;
        this.dT = dT;
        this.router = router;
        this.noteServ = noteServ;
        this.calServ = calServ;
        this.navCtrl = navCtrl;
        this.fireServ = fireServ;
        ////////////////////////////////////////////////////////////////////////////////////////
        this.hasLoaded = false;
        this.initDidFinish = false;
        this.sSChecking = false;
        this.doneShiftsIcoSrc = './../../assets/img/sheriff-shifts-donelist-ico.png';
        this.myObj = this.dS.myObj;
        this.meObj = this.dS.meObj;
        this.workAreas = this.dS.workAreas;
        this.workAvatar = this.dS.workAva;
        this.meAvatar = this.dS.meAva;
        this.workCode = this.dS.workCode;
        this.workName = this.dS.workName;
        this.workColor = this.dS.workColor;
        this.workPeople = this.dS.pplArr;
        this.incBright = this.dS.incBright;
        // Refresh
        this.progCirc = { responsive: true, showTitle: false, showSubtitle: false, showUnits: false, percent: 0, radius: 56, outerStrokeWidth: 4, showInnerStroke: false, outerStrokeColor: '#FF9800', animation: true, backgroundPadding: 2, animationDuration: 400 };
        this.isRefreshing = false;
        this.refreshProgPerc = 0;
        this.getAllDataPerc = 0;
        this.preventRefreshPull = false;
        // History Scroll
        this.showTTopBtn = false;
        this.scrollingTT = false;
        this.tabKey = 'init';
        this.sbOverlay = true;
        this.dbDataTbl = 'rosters';
        this.dbHasTable = this.dS.getUDBTables().includes(this.dbDataTbl);
        // Alerts Status
        this.alertMethods = { phone: null, calendar: null, email: null };
        this.alertEvents = { shift: null, task: null, tsheets: null };
        // Show Income
        this.showIncome = true;
        // Shift DB Items/List
        this.initRes = [];
        this.initList = [];
        this.shiftItems = [];
        this.shiftListsReady = false;
        this.batchLimit = 28;
        this.batchOffset = 0;
        this.batchStart = 0;
        this.batchEnd = 28;
        this.endOfList = false;
        this.orderBy = 'StartTime';
        this.orderDir = 'desc';
        // Goto TS Item
        this.gotoTSId = 0;
        // Show Done Shift
        this.doneSId = 0;
        this.doneSHasTSData = false;
        this.doneSIsShowing = false;
        this.doneSShowComments = false;
        this.doneSShowWarnings = false;
        // SS CDown
        this.CDReady = false;
        this.sSCD = null;
        // Pay Rate
        // Xtra Shifts
        this.hasXtraShifts = false;
        this.xtraShifts = [];
        // Shift Slider
        this.apiPeerView = false;
        this.sSColleagues = { sameArea: [], otherArea: [] };
        this.sSColleagueDayIndex = null;
        this.sSMultiColleagues = [];
        this.showingColleague = false;
        this.sSInitComplete = false;
        this.sSWeek = [];
        this.sSDoneShifts = 0;
        this.sSTotalItems = 0;
        this.sSDoneHrs = 0;
        this.sSRosterHrs = 0;
        this.sSRosterIncome = 0;
        this.sSDoneIncome = 0;
        this.sSExtraShiftCount = 0;
        this.sSMissedShiftCount = 0;
        this.sSShiftPerformVal = this.sSExtraShiftCount - this.sSMissedShiftCount;
        this.sSHrsPerformVal = this.sSDoneHrs - this.sSRosterHrs;
        this.sSIncomePerformVal = this.sSDoneIncome - this.sSRosterIncome;
        this.indicMatch = [];
        this.sSlider = { sliderHasLoaded: false, slidesItems: [], slidesControls: [], isBeginningSlide: null, isEndSlide: null };
        this.sSCurrent = null;
        this.sSCurrentIndex = null;
        this.myWeekPagReady = false;
        this.sSOptions = {
            allowSlideNext: true,
            allowSlidePrev: true,
            grabCursor: false,
            loop: false,
            speed: 250,
            pagination: false,
            cubeEffect: { shadow: true, slideShadows: true, shadowOffset: 18, shadowScale: 0.90 },
            on: {
                beforeInit: function () {
                    const sSwipe = this;
                    sSwipe.classNames.push(`${sSwipe.params.containerModifierClass}cube`);
                    sSwipe.classNames.push(`${sSwipe.params.containerModifierClass}3d`);
                    const overwriteParams = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const sSwipe = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize } = sSwipe;
                    const params = sSwipe.params.cubeEffect;
                    const isHorizontal = sSwipe.isHorizontal();
                    const isVirtual = sSwipe.virtual && sSwipe.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = sSwipe.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            ;
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = sSwipe.$('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    ;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) {
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                        }
                        ;
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        ;
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + (round * 4 * swiperSize);
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = (3 * swiperSize) + (swiperSize * 4 * round);
                        }
                        ;
                        if (rtl) {
                            tx = -tx;
                        }
                        ;
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        ;
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px,${ty}px,${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = (slideIndex * 90) + (progress * 90);
                            if (rtl)
                                wrapperRotate = (-slideIndex * 90) - (progress * 90);
                        }
                        ;
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = sSwipe.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            ;
                            if (shadowAfter.length === 0) {
                                shadowAfter = sSwipe.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            ;
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    ;
                    $wrapperEl.css({ '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`, '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`, '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`, 'transform-origin': `50% 50% -${swiperSize / 2}px` });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px,${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                            const multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1},1,${scale2}) translate3d(0px,${(swiperHeight / 2) + offset$$1}px,${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    ;
                    const zFactor = (sSwipe.browser.isSafari || sSwipe.browser.isUiWebView) ? (-swiperSize / 2) : 0;
                    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${sSwipe.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${sSwipe.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const sSwipe = this;
                    const { $el, slides } = sSwipe;
                    slides.transition(duration).find('.swiper-slide-shadow-top,.swiper-slide-shadow-right,.swiper-slide-shadow-bottom,.swiper-slide-shadow-left').transition(duration);
                    if (sSwipe.params.cubeEffect.shadow && !sSwipe.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            }
        };
        ////////////////////////////////////////////////////////////////////////////////////////
        this.calHeaderGroups = (record, recordIndex, records) => {
            let headData = { week: null, month: null };
            if (recordIndex === 0) {
                headData.week = this.dT.format(this.dT.sOW(new Date(record.Date)), 'd MMMM') + ' - ' + this.dT.format(this.dT.eOW(new Date(record.Date)), 'd MMMM yyyy');
                return headData;
            }
            else if (recordIndex > 0) {
                const prevD = new Date(records[recordIndex - 1].Date);
                const thisD = new Date(record.Date);
                if (!this.dT.isSW(prevD, thisD)) {
                    headData.week = this.dT.format(this.dT.sOW(thisD), 'd MMMM') + ' - ' + this.dT.format(this.dT.eOW(thisD), 'd MMMM yyyy');
                }
                ;
                if (!this.dT.isSM(prevD, thisD)) {
                    headData.month = this.dT.gM(thisD);
                }
                ;
                return headData;
            }
            else {
                return null;
            }
        };
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.logger.info('[TabShifts|ngOnInit] ()...');
        this.plt.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.evServ.subscribe('alertsStatus', () => { this.setAlertAndIncomeSettings(); });
            this.doInitRefresh('init');
            this.pageEnterAnim();
            this.slideToNextLastShift();
        }));
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doInitRefresh(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|doReInitFresh] (' + mode + ')...');
            this.initFetchData();
            if (mode === 'refresh') {
                const uC = (p) => { this.headerProgress('manual', 'change', p); };
                this.evServ.subscribe('refreshShiftsProg', () => { this.refreshProgPerc += 20; uC(this.refreshProgPerc); });
                this.doSync(mode);
            }
            else {
                this.doSync(mode);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|ionViewWillEnter] ()...');
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setOverlaysWebView({ overlay: true });
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setBackgroundColor({ color: '#00000000' });
            this.setAlertAndIncomeSettings();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|ionViewDidEnter] ()...');
            setTimeout(() => { this.evServ.publish('doPageEnterAnim', null); if (jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper').css('display') !== 'none') {
                this.hideSplash();
            } ; this.currentPageObj = this.evServ.cPage; }, 300);
            if (this.tabKey !== 'init') {
                this.tabChangeAni(this.tabKey);
            }
            this.gotoTSId = 0;
            const newInsDB = yield this.storeServ.getObject('newDBInstall');
            if (newInsDB) {
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                    const { value } = yield _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog.confirm({ title: 'Confirm New Database', message: 'Sheriff installed a backup database. Is everything OK? If NOT, hit the REVERT button below. Otherwise, hit OK to continue using this DB.', okButtonTitle: '👍OK', cancelButtonTitle: '🔙Revert' });
                    if (value) {
                        this.evServ.showToast('smiley', 'All G, Just Checking!');
                        this.storeServ.removeItem('newDBInstall');
                    }
                    else {
                        this.sqlServ.revertDB();
                    }
                }), 5000);
            }
        });
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    replayLPN() {
        this.logger.info('[TabShifts|replayLPN] ()...');
        this.evServ.publish('iapBubble', 'replay');
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    doSync(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (mode === 'refresh') {
                this.evServ.destroy('refreshShiftsProg');
                this.headerProgress('manual', 'finish', null);
            }
            ;
            const syncResult = yield this.syncServ.doShiftsSync(mode);
            if (syncResult.xtras.length > 0) {
                this.hasXtraShifts = true;
                this.xtraShifts = syncResult.xtras;
            }
            ;
            if (syncResult.changed === true) {
                this.logger.info('[TabShifts|doReInitRefresh] (Sync|Rosters): UPDATED/ADDED [' + syncResult.ids.length + '] Roster/Shift Items.');
                const iArrs = ['initRes', 'initList', 'shiftItems'];
                for (let i = 0; i < iArrs.length; i++) {
                    this[iArrs[i]] = [];
                }
                ;
                this.batchOffset = 0;
                this.sSlider.slideItems = [];
                this.evServ.publish('doInitFetchShiftData', true);
            }
            else {
                this.logger.info('[TabShifts|doReInitRefresh] (Sync|Rosters): NO CHANGES [0]');
                if (mode === 'init') {
                    this.evServ.publish('doInitFetchShiftData', true);
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    setAlertAndIncomeSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|setAlertAndIncomeSettings] ()...');
            const getDSSett = yield this.dS.getSettings();
            if (getDSSett !== null) {
                const aMs = getDSSett.alerts.options.alertMethods.value;
                const aEs = getDSSett.alerts.options.alertEvents.value;
                this.alertMethods.phone = aMs.phone;
                this.alertMethods.calendar = aMs.calendar;
                this.alertMethods.email = aMs.email;
                this.alertEvents.shift = aEs.shift;
                this.alertEvents.tsheet = aEs.tsheet;
                this.showIncome = getDSSett.payrates.options.show.value;
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    getPay(rosterObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const payRes = yield this.fwServ.getShiftPay(rosterObj);
            return Promise.resolve(payRes);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    formatShift(rawNS) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const wNames = (oUId) => { let oUArr = this.workAreas.filter(oU => (oU.Id === oUId)); return { cname: oUArr[0]['CompanyCode'], warea: oUArr[0]['OperationalUnitName'] }; };
            let niceNS = rawNS;
            const nN = wNames(rawNS.OperationalUnit);
            nN.warea ? niceNS['nOpUnit'] = nN.warea : niceNS['nOpUnit'] = '';
            nN.cname ? niceNS['nCompanyName'] = nN.cname : niceNS['nCompanyName'] = this.workName;
            niceNS['nDate'] = this.dT.format(new Date(rawNS.Date), 'EEEE, d MMMM yyyy');
            const nStartEndObj = this.dT.rosterSETimes(rawNS.StartTime, rawNS.EndTime);
            niceNS['nStart'] = nStartEndObj.s.trim();
            niceNS['nEnd'] = nStartEndObj.e.trim();
            const calcPay = yield this.getPay(rawNS);
            niceNS['nIncomeObj'] = calcPay;
            niceNS['nIncome'] = calcPay.t.toFixed(0);
            let tT = { hours: 0, minutes: 0 };
            if (rawNS.TotalTime.toString().includes('.')) {
                const ttArr = rawNS.TotalTime.toString().split('.');
                tT.hours = parseInt(ttArr[0]);
                tT.minutes = Math.round(Number('0.' + ttArr[1]) * 60);
            }
            else {
                tT.hours = rawNS.TotalTime;
            }
            ;
            niceNS['nTotalTime'] = tT;
            let lCommCount = 0;
            let lWarnCount = 0;
            if (rawNS.Comment !== '' && rawNS.Comment !== null && rawNS.Comment !== undefined) {
                niceNS['nComment'] = rawNS.Comment;
                lCommCount++;
            }
            ;
            if (rawNS.ConfirmComment !== '' && rawNS.ConfirmComment !== null && rawNS.ConfirmComment !== undefined) {
                niceNS['nConfirmComment'] = rawNS.ConfirmComment;
                lCommCount++;
            }
            ;
            if (rawNS.Warning !== '' && rawNS.Warning !== null && rawNS.Warning !== undefined) {
                if (rawNS.Warning.includes('|')) {
                    const warnArr = rawNS.Warning.split('|');
                    niceNS['nWarning'] = warnArr[0];
                    lWarnCount++;
                }
                else {
                    niceNS['nWarning'] = rawNS.Warning;
                }
            }
            ;
            if (rawNS.WarningOverrideComment !== '' && rawNS.WarningOverrideComment !== null && rawNS.WarningOverrideComment !== undefined) {
                niceNS['nWarningOR'] = rawNS.WarningOverrideComment;
                lWarnCount++;
            }
            ;
            niceNS['nCommCount'] = lCommCount;
            niceNS['nWarnCount'] = lWarnCount;
            niceNS['nPublished'] = rawNS.Published === -1 ? null : rawNS.Published === 1 ? true : false;
            niceNS['nOpen'] = rawNS.Open === -1 ? null : rawNS.Open === 1 ? true : false;
            niceNS['nApprovalRequired'] = rawNS.ApprovalRequired === -1 ? null : rawNS.ApprovalRequired === 1 ? true : false;
            niceNS['nConfirmStatus'] = rawNS.ConfirmStatus;
            let lnConfirmBy;
            rawNS.ConfirmBy === 0 ? lnConfirmBy = false : lnConfirmBy = this.dT.Dut(rawNS.ConfirmBy);
            niceNS['nConfirmBy'] = lnConfirmBy;
            let lnConfirmTime;
            rawNS.ConfirmTime === 0 ? lnConfirmTime = false : lnConfirmTime = this.dT.Dut(rawNS.ConfirmTime);
            niceNS['nConfirmTime'] = lnConfirmTime;
            niceNS['nSwapStatus'] = rawNS.SwapStatus;
            let isPastS;
            this.dT.gUT() > rawNS.EndTime ? isPastS = true : isPastS = false;
            isPastS ? niceNS['nIsFinished'] = true : niceNS['nIsFinished'] = false;
            if (this.dT.isTW(new Date(rawNS.Date))) {
                niceNS['nThisWeek'] = true;
                if (rawNS.MatchedByTimesheet > 0) {
                    let gotTS = null;
                    let doneTSObj;
                    const tsId = rawNS.MatchedByTimesheet;
                    const gotTSRes = yield this.sqlServ.checkGetSingleTS(tsId);
                    if (gotTSRes.result) {
                        this.logger.info('[TabShifts|formatShifts] (Get Shift TS < DB) - SUCCESS.');
                        gotTS = true;
                        doneTSObj = gotTSRes.data;
                    }
                    else {
                        this.logger.info('[TabShifts|formatShifts] (Get Shift TS < DB) - FAIL... Trying API...');
                        const getTSRes = yield this.deputy.getSingleTS(tsId);
                        if (getTSRes.result) {
                            this.logger.info('[TabShifts|formatShifts] (Get New TS < API) - SUCCESS.');
                            const newTSOb = getTSRes.data[0];
                            gotTS = true;
                            doneTSObj = newTSOb;
                            const addObDbRes = yield this.sqlServ.insertSingleItem('timesheets', newTSOb);
                            if (addObDbRes) {
                                this.logger.info('[TabShifts|formatShifts] (Add New TS > DB) - SUCCESS.');
                                const setSyncRes = yield this.sqlServ.setSync('timesheets');
                                if (setSyncRes) {
                                    this.logger.info('[TabShifts|formatShifts] (Updated TS Sync Date) - SUCCESS.');
                                }
                                else {
                                    this.logger.info('[TabShifts|formatShifts] (Updated TS Sync Date) - FAIL.');
                                }
                            }
                            else {
                                this.logger.info('[TabShifts|formatShifts] (Add New TS > DB) - FAIL.');
                            }
                        }
                        else {
                            gotTS = false;
                            this.logger.info('[TabShifts|formatShifts] (Get New TS < API) - FAIL.');
                        }
                    }
                    ;
                    if (gotTS) {
                        const calcDonePay = yield this.getPay(doneTSObj);
                        niceNS['nDoneIncomeObj'] = calcDonePay;
                        niceNS['nDoneIncome'] = calcDonePay.t.toFixed(0);
                    }
                    else {
                        niceNS['nDoneIncomeObj'] = calcPay;
                        niceNS['nDoneIncome'] = calcPay.t.toFixed(0);
                    }
                }
                else {
                    niceNS['nDoneIncomeObj'] = { b: 0, p: 0, t: 0 };
                    niceNS['nDoneIncome'] = 0;
                }
                ;
                if (isPastS && rawNS.Published === 0) {
                    niceNS['nExtraShift'] = true;
                    this.sSExtraShiftCount++;
                }
                else {
                    niceNS['nExtraShift'] = false;
                }
                ;
                if (isPastS && rawNS.MatchedByTimesheet === 0) {
                    niceNS['nMissedShift'] = true;
                    this.sSMissedShiftCount++;
                }
                else {
                    niceNS['nMissedShift'] = false;
                }
                ;
            }
            else {
                niceNS['nThisWeek'] = false;
            }
            ;
            if (this.workPeople.length > 0) {
                const pArr = this.workPeople.filter(p => p.EmpId === rawNS.Creator);
                if (pArr.length > 0) {
                    niceNS['nCreatorName'] = pArr[0].DisplayName;
                    niceNS['nCreatorAva'] = pArr[0].Photo;
                    niceNS['nPublisher'] = pArr[0]['FirstName'].charAt(0).toUpperCase() + pArr[0]['LastName'].charAt(0).toUpperCase();
                    niceNS['sFName'] = pArr[0]['FirstName'];
                }
                else {
                    niceNS['nCreatorName'] = 'NK';
                    niceNS['nCreatorAva'] = '../../../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';
                    niceNS['nPublisher'] = '-';
                    niceNS['sFName'] = '-';
                }
            }
            else {
                niceNS['nCreatorName'] = 'NK';
                niceNS['nCreatorAva'] = '../../../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';
                niceNS['nPublisher'] = '-';
                niceNS['sFName'] = '-';
            }
            niceNS['nCreated'] = new Date(rawNS.Created);
            niceNS['sCreated'] = this.dT.format(new Date(rawNS.Created), 'd/M H:mm');
            niceNS['nModified'] = new Date(rawNS.Modified);
            niceNS['sModified'] = this.dT.format(new Date(rawNS.Modified), 'd/M H:mm');
            return Promise.resolve(niceNS);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initFetchData() {
        this.logger.info('[TabShifts|initFetchData] (Event) Channel: doInitFetchData [Listening...]');
        this.evServ.subscribe('doInitFetchShiftData', () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.evServ.destroy('doInitFetchShiftData');
            this.logger.info('[TabShifts|initFetchData] (Event) Channel: doInitFetchShiftData [TIGGERED!]');
            this.sSWeek = yield this.dT.getShiftWeek();
            this.ttlShiftItems = yield this.sqlServ.getItemCount(this.dbDataTbl);
            if (this.ttlShiftItems > 0) {
                const initResData = yield this.sqlServ.getXRosterItems(null, { by: this.orderBy, dir: this.orderDir }, this.batchLimit, this.batchOffset);
                this.initRenderList(initResData);
            }
        }));
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initRenderList(initResData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|initRenderList] ()...');
            // FORMAT & SORT ALL SHIFTS
            let lShifts = [];
            let sShifts = [];
            for (let i = 0; i < initResData.length; i++) {
                const niceInitOb = yield this.formatShift(initResData[i]);
                if (niceInitOb.nThisWeek) {
                    sShifts.push(niceInitOb);
                }
                ;
                if (niceInitOb.nIsFinished) {
                    lShifts.push(niceInitOb);
                }
            }
            ;
            // PUSH/DISPLAY MAIN ROSTER LIST
            this.shiftItems = lShifts;
            // CHECK TOTAL SSLIDER LIST !=0
            this.sSlider.slidesItems = sShifts.reverse();
            this.sSTotalItems = this.sSlider.slidesItems.length;
            let noS;
            this.sSTotalItems === 0 ? noS = true : noS = false;
            this.hasLoaded = true;
            // CALC RELEVANT TOTALS (IF REQUIRED)
            if (!noS) {
                for (let i = 0; i < this.sSlider.slidesItems.length; i++) {
                    this.sSlider.slidesControls.push({ sliderIndex: i, rosterId: this.sSlider.slidesItems[i].Id, show: false, inProg: false, isPaused: false, progType: 'indeterminate', progPerc: 0 });
                }
                ;
                this.sSDoneShifts = this.sSlider.slidesItems.filter(s => s.nIsFinished).length + this.xtraShifts.length;
                this.sSShiftPerformVal = -this.sSMissedShiftCount + this.sSExtraShiftCount + this.xtraShifts.length;
                const weekSEOb = { s: this.dT.sOfW('uts'), e: this.dT.eOfW('uts') };
                this.sSDoneHrs = Math.round(((yield this.sqlServ.getWeekDoneHrs(weekSEOb)) + Number.EPSILON) * 100) / 100;
                this.sSRosterHrs = Math.round(((this.sSlider.slidesItems.reduce((a, b) => { return a + b.TotalTime; }, 0)) + Number.EPSILON) * 100) / 100;
                const pastRHrs = Math.round(((this.sSlider.slidesItems.filter(pS => pS.StartTime < this.dT.getUT(new Date())).reduce((a, b) => { return a + b.TotalTime; }, 0)) + Number.EPSILON) * 100) / 100;
                this.sSHrsPerformVal = Math.round(((this.sSDoneHrs - pastRHrs) + Number.EPSILON) * 100) / 100;
                this.sSRosterIncome = Math.round(((this.sSlider.slidesItems.reduce((a, b) => { return a + Number(b.nIncome); }, 0)) + Number.EPSILON) * 100) / 100;
                const rawDone = Math.round(((this.sSlider.slidesItems.reduce((a, b) => { return a + Number(b.nDoneIncome); }, 0)) + Number.EPSILON) * 100) / 100;
                let xtraIncome = 0;
                if (this.xtraShifts.length > 0) {
                    for (let i = 0; i < this.xtraShifts.length; i++) {
                        const xtraO = this.xtraShifts[i];
                        const xtraPay = Math.round((yield this.getPay(xtraO)).t);
                        xtraIncome = xtraIncome + xtraPay;
                    }
                }
                ;
                this.xtraIncomeTotal = xtraIncome;
                this.sSDoneIncome = rawDone + xtraIncome;
                const pastRIncome = Math.round(((this.sSlider.slidesItems.filter(pS => pS.StartTime < this.dT.getUT(new Date())).reduce((a, b) => { return a + Number(b.nIncome); }, 0)) + Number.EPSILON) * 100) / 100;
                this.sSIncomePerformVal = Math.round((this.sSDoneIncome) - pastRIncome);
                // BULLET DAYS
                for (let i = 0; i < this.sSlider.slidesItems.length; i++) {
                    const sItem = this.sSlider.slidesItems[i];
                    const slideDate = new Date(sItem.Date);
                    const bulletDayIndex = this.sSWeek.findIndex(bd => this.dT.isSD(bd.d, slideDate));
                    this.sSWeek[bulletDayIndex].isshift = true;
                    if (this.sSWeek[bulletDayIndex].tonow === 'B' && sItem.MatchedByTimesheet === 0) {
                        this.sSWeek[bulletDayIndex]['nots'] = true;
                    }
                    else {
                        this.sSWeek[bulletDayIndex]['nots'] = false;
                    }
                    ;
                    this.sSWeek[bulletDayIndex]['si'] = i;
                    this.sSWeek[bulletDayIndex]['rid'] = sItem.Id;
                    if (bulletDayIndex !== -1) {
                        const bdSN = this.sSWeek[0].sn;
                        this.indicMatch.push({ sn: bdSN, si: i });
                    }
                    ;
                }
                for (let i = 0; i < this.xtraShifts.length; i++) {
                    const xtra = this.xtraShifts[i];
                    const xtraShiftDate = new Date(xtra.Date);
                    const bulletDayIndex = this.sSWeek.findIndex(bd => this.dT.isSD(bd.d, xtraShiftDate));
                    this.sSWeek[bulletDayIndex].isshift = true;
                    this.sSWeek[bulletDayIndex].tonow === 'B';
                    this.sSWeek[bulletDayIndex]['nots'] = false;
                    this.sSWeek[bulletDayIndex]['xtra'] = true;
                }
                // FINALLY
                this.myWeekPagReady = true;
                if (this.initRes.length === this.ttlShiftItems) {
                    this.iScrollShifts.disabled = true;
                    this.endOfList = true;
                }
                else {
                    this.iScrollShifts.disabled = false;
                    this.endOfList = false;
                }
                ;
                this.evServ.publish('slidesLoaded', 'List Data Loaded');
                setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-iscroll').css('opacity', '1'); }, 2000);
            }
            else {
                const perfVs = ['sSDoneShifts', 'sSShiftPerformVal', 'sSDoneHrs', 'sSRosterHrs', 'sSHrsPerformVal', 'sSRosterIncome', 'sSDoneIncome', 'sSIncomePerformVal'];
                for (let i = 0; i < perfVs.length; i++) {
                    this[perfVs[i]] = 0;
                }
                ;
                // FINALLY
                this.myWeekPagReady = true;
                if (this.initRes.length === this.ttlShiftItems) {
                    this.iScrollShifts.disabled = true;
                    this.endOfList = true;
                }
                else {
                    this.iScrollShifts.disabled = false;
                    this.endOfList = false;
                }
                ;
                this.evServ.publish('slidesLoaded', 'List Data Loaded');
                setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-iscroll').css('opacity', '1'); }, 2000);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    slideToNextLastShift() {
        let initCount = 0;
        this.evServ.subscribe('slidesLoaded', (stageStr) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            initCount++;
            if (initCount === 1) {
                this.logger.info('[slideToNextLastShift] (SlidesLoaded) - STAGE #' + initCount + ' - ' + stageStr);
            }
            else {
                this.logger.info('[slideToNextLastShift] (SlidesLoaded) - STAGE #' + initCount + ' - ' + stageStr);
                this.evServ.destroy('slidesLoaded');
                if (this.sSTotalItems === 0) {
                    this.sSCD = 0;
                    this.CDReady = true;
                }
                else {
                    let nowTS = this.dT.getUT(new Date());
                    const nSI = this.sSlider.slidesItems.findIndex(sT => sT.StartTime > nowTS);
                    let sI;
                    nSI === -1 ? sI = this.sSlider.slidesItems.length - 1 : sI = nSI;
                    this.startNextShiftCD(sI);
                    const cSI = yield this.shiftsSlider.getActiveIndex();
                    if (sI === cSI) {
                        this.sSChecks('init');
                    }
                    else {
                        const doNextSlide = (nextSI) => { this.shiftsSlider.slideTo(nextSI, 250, false); return Promise.resolve(true); };
                        yield doNextSlide(sI);
                        setTimeout(() => {
                            this.sSChecks('init');
                        }, 300);
                    }
                }
            }
        }));
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    startNextShiftCD(nextShiftIndex) {
        this.logger.info('[TabShifts|startNextShiftCD] ()...');
        let sSTimer;
        this.sSCD = { d: 0, h: 0, m: 0, s: 0 };
        const nextSSUTS = this.sSlider.slidesItems[nextShiftIndex]['StartTime'];
        const nextSSD = this.dT.Dut(nextSSUTS);
        sSTimer = setInterval(() => { timeBetweenDates(nextSSD); }, 1000);
        const timeBetweenDates = (toDate) => { let dateEntered = toDate; let now = new Date(); const difference = dateEntered.getTime() - now.getTime(); if (difference <= 0) {
            clearInterval(sSTimer);
        }
        else {
            this.sSCD.s = Math.floor(difference / 1000);
            this.sSCD.m = Math.floor(this.sSCD.s / 60);
            this.sSCD.h = Math.floor(this.sSCD.m / 60);
            this.sSCD.d = Math.floor(this.sSCD.h / 24);
            this.sSCD.h %= 24;
            this.sSCD.m %= 60;
            this.sSCD.s %= 60;
        } };
        setTimeout(() => { this.CDReady = true; }, 1500);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    feedItems(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.batchOffset += this.batchLimit;
            this.batchStart = this.shiftItems.length;
            this.batchEnd = this.batchStart + this.batchLimit;
            yield this.getShifts(this.batchOffset);
            if (this.shiftItems.length === this.ttlShiftItems) {
                this.iScrollShifts.disabled = true;
                this.endOfList = true;
            }
            else {
                this.iScrollShifts.disabled = false;
                this.endOfList = false;
            }
            ;
            event.target.complete();
            this.vScrollShifts.checkEnd();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    getShifts(offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|getShifts] (' + offset + ')...');
            try {
                const thisBatch = yield this.sqlServ.getXRosterItems(null, { by: this.orderBy, dir: this.orderDir }, this.batchLimit, this.batchOffset);
                for (let i = 0; i < thisBatch.length; i++) {
                    const niceTSOb = yield this.formatShift(thisBatch[i]);
                    this.shiftItems.push(niceTSOb);
                }
                return Promise.resolve(true);
            }
            catch (getSErr) {
                this.logger.info('[TabShifts|getShifts] (Error): ' + getSErr);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    gotoTimesheet(rosId, tsId) {
        this.logger.info('[TabShifts|gotoTimesheet] (' + rosId + ',' + tsId + ')...');
        this.gotoTSId = tsId;
        let navXtras = { state: { origin: 'shifts', id: this.gotoTSId } };
        this.router.navigate(['/tabs/tabtsheets'], navXtras);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    gotoSettings() {
        this.navCtrl.navigateRoot('/settings');
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    showShiftDetail(rosId, hIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|showShiftDetail] (' + rosId + ',' + hIndex + ')...');
            this.doneSId = rosId;
            this.doneS = this.shiftItems.filter(rId => rId.Id === rosId)[0];
            if (this.doneS.MatchedByTimesheet > 0) {
                this.doneSHasTSData = true;
                this.doneSTSData = yield this.sqlServ.getSingleTimesheet(this.doneS.MatchedByTimesheet);
                const tsStartEndObj = this.dT.rosterSETimes(this.doneSTSData.StartTime, this.doneSTSData.EndTime);
                this.doneS['tsStart'] = tsStartEndObj.s;
                this.doneS['tsEnd'] = tsStartEndObj.e;
                const rosterStartEndObj = this.dT.rosterSEDoneTimes(this.doneS.StartTime, this.doneS.EndTime);
                this.doneS['rosStart'] = rosterStartEndObj.s;
                this.doneS['rosEnd'] = rosterStartEndObj.e;
                this.doneS['tsTotalTime'] = this.dT.shiftTTToDur(this.doneSTSData.TotalTime);
                this.doneS['tsTTDiff'] = this.dT.rosVsTSTTDiff(this.doneS.TotalTime, this.doneSTSData.TotalTime);
                const calcRosPay = yield this.getPay(this.doneS);
                const calcTSPay = yield this.getPay(this.doneSTSData);
                this.doneS['rosIncomeObj'] = calcRosPay;
                this.doneS['tsIncomeObj'] = calcTSPay;
                this.doneS['rosIncome'] = calcRosPay.t.toFixed(0);
                this.doneS['tsIncome'] = calcTSPay.t.toFixed(0);
                this.doneS['tsIncomePerf'] = Math.round(calcTSPay.t - calcRosPay.t);
                this.doneSAgoTime = this.dT.DurAsObj(new Date(), new Date(this.doneS.Date));
                this.doneSIsShowing = true;
            }
            else {
                this.logger.info('[TabShifts|showShiftDetail] (ERROR): Missing Timesheet');
                this.doneSTSData = false;
                this.doneSIsShowing = true;
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doneShiftShowComments() {
        this.logger.info('[TabShifts|doneShiftShowComments] ()...');
        this.doneSShowComments ? this.doneSShowComments = false : this.doneSShowComments = true;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doneShiftShowWarnings() {
        this.logger.info('[TabShifts|doneShiftShowComments] ()...');
        this.doneSShowWarnings ? this.doneSShowWarnings = false : this.doneSShowWarnings = true;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    closeShiftDetail() {
        this.logger.info('[TabShifts|closeShiftDetail] ()...');
        this.doneSId = 0;
        this.doneSHasTSData = false;
        this.doneSTSData = null;
        this.doneS = null;
        this.doneSAgoTime = null;
        this.doneSIsShowing = false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    toggleInfiniteScroll() {
        this.iScrollShifts.disabled = !this.iScrollShifts.disabled;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    sSControl(rosterId, action) {
        this.logger.info('[TabShifts|sSShowControlsToggle] (' + rosterId + ',' + action + ')...'); //{sliderIndex:i,rosterId:this.sSlider.slidesItems[i].Id,show:false,inProg:false,isPaused:false,progPerc:0}
        const sC = this.sSlider.slidesControls[this.sSCurrentIndex];
        if (action === 'show') {
            sC;
            sC.show = !sC.show;
        }
        if (action === 'start') {
            if (!sC.inProg) {
                sC.inProg = true;
            }
            else if (sC.isPaused) {
                sC.isPaused = false;
            }
            else if (!sC.inProg && !sC.isPaused) {
                this.logger.info('Shift Item (slideIndex:' + this.sSCurrentIndex + ',rosterId:' + rosterId + ') is [ALREADY STARTED]');
            }
        }
        if (action === 'stop') {
            if (sC.inProg) {
                sC.inProg = false;
                if (sC.isPaused) {
                    sC.isPaused = false;
                }
            }
            else {
                this.logger.info('Shift Item (slideIndex:' + this.sSCurrentIndex + ',rosterId:' + rosterId + ') is [NOT IN-PROGRESS]');
            }
        }
        if (action === 'pause') {
            if (!sC.isPaused) {
                sC.isPaused = true;
            }
            else {
                sC.isPaused = false;
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    disableRefresher(togV) { this.preventRefreshPull = togV; }
    ////////////////////////////////////////////////////////////////////////////////////////
    sSNext() {
        this.logger.info('[TabShifts|sSNext] (sSNext)');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.forward').addClass('ss-nav-arrow-activated');
        this.shiftsSlider.slideNext(250, false).then(() => {
            this.sSChecks(null);
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.forward').css('transition', 'color 1.5s ease-in').removeClass('ss-nav-arrow-activated');
            setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.forward').css('transition', 'unset'); }, 1500);
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    sSPrev() {
        this.logger.info('[TabShifts|sSPrev] (sSPrev)');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.back').addClass('ss-nav-arrow-activated');
        this.shiftsSlider.slidePrev(250, false).then(() => {
            this.sSChecks(null);
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.back').css('transition', 'color 1.5s ease-in').removeClass('ss-nav-arrow-activated');
            setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.back').css('transition', 'unset'); }, 1500);
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    sSGotoShift(isShift, sIndex) {
        this.logger.info('[TabShifts|sSGotoShift] (' + isShift + ',' + sIndex + ')...');
        if (isShift) {
            if (this.doneSIsShowing) {
                this.closeShiftDetail();
            }
            ;
            this.shiftsSlider.slideTo(sIndex, 250, false).then(() => { this.sSChecks(null); }).catch(err => { this.logger.info('[TabShifts|sSGotoShift] (Error): ' + err); });
        }
        else {
            this.logger.info('[TabShifts|sSGotoShift] (No Shift) Aborted.');
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////
    sSDidLoad() {
        this.logger.info('[TabShifts|sSDidLoad] (ionSlidesDidLoad)');
        this.sSlider.sliderHasLoaded = true;
        this.evServ.publish('slidesLoaded', 'Slides DOM Element Loaded');
        this.extraSE();
    }
    //////////////////////////////////////////////////////////////////////////////////////
    sSIsStart() { this.logger.info('[TabShifts|sSIsStart] (ionSlideReachStart).'); }
    //////////////////////////////////////////////////////////////////////////////////////
    sSIsEnd() { this.logger.info('[TabShifts|sSIsEnd] (ionSlideReachEnd).'); }
    //////////////////////////////////////////////////////////////////////////////////////
    sSWillChange() { this.logger.info('[TabShifts|sSWillChange] (sSWillChange)...'); }
    //////////////////////////////////////////////////////////////////////////////////////
    sSDidChange() { this.logger.info('[TabShifts|sSDidChange] (sSDidChange)'); this.sSChecks(null); }
    //////////////////////////////////////////////////////////////////////////////////////
    extraSE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const mySw = yield this.shiftsSlider.getSwiper();
            this.evServ.subscribe('doExtraCheck', () => { if (!this.sSChecking) {
                this.sSChecks(null);
            } });
            mySw.on('slideChange', () => { this.evServ.publish('doExtraCheck', true); });
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    sSChecks(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|sSChecks] ()...');
            if (!this.sSChecking) {
                this.sSChecking = true;
                const isFirstSlide = () => { this.logger.info('(Slider) [FIRST SLIDE!] <<< PREV - [LOCKED]'); this.shiftsSlider.lockSwipeToPrev(true); this.shiftsSlider.lockSwipeToNext(false); this.sSlider['isBeginningSlide'] = true; this.sSlider['isEndSlide'] = false; };
                const isLastSlide = () => { this.logger.info('(Slider) [LAST SLIDE!] >>> NEXT - [LOCKED]'); this.shiftsSlider.lockSwipeToPrev(false); this.shiftsSlider.lockSwipeToNext(true); this.sSlider['isBeginningSlide'] = false; this.sSlider['isEndSlide'] = true; };
                const isFirstLastSlide = () => { this.logger.info('(Slider) [FIRST & LAST SLIDE!] <<< PREV & NEXT >>> - [BOTH LOCKED]'); this.shiftsSlider.lockSwipeToPrev(true); this.shiftsSlider.lockSwipeToNext(true); this.sSlider['isBeginningSlide'] = true; this.sSlider['isEndSlide'] = true; };
                const isOtherSlide = () => { this.logger.info('(Slider) [OTHER SLIDE] <<< PREV & NEXT >>> - [BOTH UNLOCKED]'); this.shiftsSlider.lockSwipeToPrev(false); this.shiftsSlider.lockSwipeToNext(false); this.sSlider['isBeginningSlide'] = false; this.sSlider['isEndSlide'] = false; };
                const nowSlideIndex = yield this.shiftsSlider.getActiveIndex();
                const nowSlideNumber = (yield this.shiftsSlider.getActiveIndex()) + 1;
                const checkIfFirst = yield this.shiftsSlider.isBeginning();
                const checkIfLast = yield this.shiftsSlider.isEnd();
                const ttlSlides = this.sSlider.slidesItems.length;
                this.sSCurrent = nowSlideNumber;
                this.sSCurrentIndex = nowSlideIndex;
                if (ttlSlides === 1) {
                    isFirstLastSlide();
                }
                ;
                if (ttlSlides > 1) {
                    if (checkIfFirst) {
                        isFirstSlide();
                    }
                    ;
                    if (checkIfLast) {
                        isLastSlide();
                    }
                    ;
                    if (!checkIfFirst && !checkIfLast) {
                        isOtherSlide();
                    }
                    ;
                }
                if (mode === 'init') {
                    this.sSInitComplete = true;
                    if (this.myObj.WorkplaceConfig[1].ROSTER_ALLOW_PEER_VIEW === 1) {
                        this.apiPeerView = true;
                    }
                    else {
                        this.apiPeerView = false;
                    }
                    ;
                    if (this.workPeople.length > 0) {
                        if (this.apiPeerView) {
                            for (let i = 0; i < this.sSlider.slidesItems.length; i++) {
                                let tSSColObj = { sameArea: [], otherArea: [] };
                                const mTS = this.sSlider.slidesItems[i];
                                const mTSD = new Date(mTS.Date);
                                const mTSA = mTS.OperationalUnit;
                                this.deputy.getThisShiftColleagues(mTSD).then(tPRes => {
                                    let thisDayPpl = tPRes;
                                    for (let i = 0; i < thisDayPpl.length; i++) {
                                        const pS = thisDayPpl[i];
                                        if (pS.Employee !== mTS.Employee) {
                                            if (pS.EndTime > mTS.StartTime || pS.StartTime < mTS.EndTime) {
                                                let thisPObj = this.workPeople.filter(wP => wP.EmpId === pS.Employee)[0];
                                                if (pS.OperationalUnit === mTSA) {
                                                    tSSColObj.sameArea.push(thisPObj);
                                                }
                                                else {
                                                    tSSColObj.otherArea.push(thisPObj);
                                                }
                                                ;
                                            }
                                        }
                                    }
                                    this.sSMultiColleagues.push(tSSColObj);
                                }).catch(tPErr => {
                                    this.logger.info('[TabShifts|sSChecks|Init|WorkPpl] (Error): ' + tPErr);
                                    this.initDidFinish = true;
                                });
                            }
                            this.initDidFinish = true;
                        }
                        else {
                            let todayHasShift = false;
                            let myTodaySSIndex;
                            let myTodayShift;
                            for (let i = 0; i < this.sSlider.slidesItems.length; i++) {
                                const tSS = this.sSlider.slidesItems[i];
                                if (this.dT.isSD(new Date(), new Date(tSS.Date))) {
                                    myTodaySSIndex = i;
                                    todayHasShift = true;
                                    myTodayShift = tSS;
                                }
                            }
                            ;
                            if (todayHasShift) {
                                this.sSColleagueDayIndex = myTodaySSIndex;
                                const myS = myTodayShift;
                                const myA = myTodayShift.OperationalUnit;
                                this.deputy.getTodayShiftColleagues().then(tPRes => {
                                    let todayPpl = tPRes;
                                    for (let i = 0; i < todayPpl.length; i++) {
                                        const pS = todayPpl[i];
                                        if (pS.Employee !== myTodayShift.Employee) {
                                            if (pS.EndTime > myS.StartTime || pS.StartTime < myS.EndTime) {
                                                let thisPObj = this.workPeople.filter(wP => wP.EmpId === pS.Employee)[0];
                                                if (pS.OperationalUnit === myA) {
                                                    this.sSColleagues.sameArea.push(thisPObj);
                                                }
                                                else {
                                                    this.sSColleagues.otherArea.push(thisPObj);
                                                }
                                                ;
                                            }
                                        }
                                    }
                                    this.initDidFinish = true;
                                }).catch(tPErr => { this.logger.info('[TabShifts|sSChecks|Init|WorkPpl] (Error): ' + tPErr); this.initDidFinish = true; });
                            }
                            else {
                                this.initDidFinish = true;
                            }
                        }
                    }
                    else {
                        this.initDidFinish = true;
                    }
                }
                setTimeout(() => { this.sSChecking = false; }, 250);
            }
            else {
                this.logger.info('[TabShifts|sSChecks] (CHECKING ALREADY IN PROGRESS!) - Skipped!');
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    stopShowColleague() {
        this.logger.info('[TabShifts|stopShowColleague] ()...');
        this.viewColleague = null;
        this.showingColleague = false;
    }
    //////////////////////////////////////////////////////////////////////////////////////
    showColleague(colleagueObj) {
        this.logger.info('[TabShifts|showColleague] ()...');
        this.viewColleague = colleagueObj;
        this.showingColleague = true;
    }
    //////////////////////////////////////////////////////////////////////////////////////
    sSEvent(eV) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (eV === 'tap') {
                const tappedSlideNo = (yield this.shiftsSlider.getActiveIndex()) + 1;
                this.logger.info('[TabShifts|ionSlideEvent] Slide ' + tappedSlideNo + ' was tapped.');
            }
            ;
            if (eV === 'firstSlide') {
                this.logger.info('[TabShifts|ionSlideEvent] Reached [FIRST] Slide (1)');
            }
            ;
            if (eV === 'lastSlide') {
                this.logger.info('[TabShifts|ionSlideEvent] Reached [LAST] Slide (' + this.sSlider.slidesItems.length + ')');
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    headerProgress(mode, action, data) {
        this.logger.info('[TabShifts|headerProgress] (' + mode + ',' + action + ',' + data + ')...');
        const circProgEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-progcirc.' + this.tabKey);
        const starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + this.tabKey);
        const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + this.tabKey);
        const startRoutine = () => {
            this.progCirc.outerStrokeColor = '#FF9800';
            jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'scale(.9)');
            jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)');
            this.progCirc.percent = 0;
            if (jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'none')) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'unset');
            }
        };
        const finishRoutine = () => {
            jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'unset');
            jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)');
            this.progCirc.outerStrokeColor = '#4caf50';
            this.progCirc.percent = 100;
            this.myAniCSS('.hcl-progcirc.' + this.tabKey, 'fadeOut', 0, 1000, 'remove', 'hide');
            this.refresher.complete();
            this.isRefreshing = false;
        };
        if (mode === 'manual') {
            if (action === 'start') {
                this.progCirc.animation = false;
                startRoutine();
            }
            else if (action === 'change') {
                this.progCirc.percent = data;
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + (360 * data) / 100 + ')deg');
            }
            else if (action === 'finish') {
                finishRoutine();
            }
        }
        else {
            this.progCirc.animation = true;
            startRoutine();
            let starRotCount = 0;
            const incPercEaLoop = (20 / data) * 1000;
            const rotStarEaLoop = (72 / data) * 1000;
            const timedProgLoop = setInterval(() => {
                this.progCirc.percent += incPercEaLoop;
                starRotCount += rotStarEaLoop;
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + starRotCount + 'deg)');
                if (this.progCirc.percent >= 100) {
                    clearInterval(timedProgLoop);
                    finishRoutine();
                }
            }, 200);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabShifts|doRefresh] (event)...');
            this.isRefreshing = true;
            this.refresher = event.target;
            this.headerProgress('manual', 'start', null);
            this.doInitRefresh('refresh');
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    historyScroll(event) {
        const sD = event.detail.scrollTop;
        const shT = event.target.offsetHeight - 56;
        if (sD > shT) {
            this.showTTopBtn = true;
            jquery__WEBPACK_IMPORTED_MODULE_16__('.shifts-history-btn').removeClass('animate__slideOutDown').addClass('animate__slideInUp');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_16__('.shifts-history-btn').removeClass('animate__slideInUp').addClass('animate__slideOutDown');
            setTimeout(() => { this.showTTopBtn = false; }, 300);
        }
        ;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    scrollHistoryTop() {
        this.logger.info('[TabShifts|scrollHistoryTop] ()...');
        this.scrollingTT = true;
        this.historyContent.scrollToTop(500).then(() => { this.scrollingTT = false; });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillLeave() {
        this.logger.info('[TabShifts|ionViewWillLeave] ()...');
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();
        const titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + this.tabKey);
        const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + this.tabKey);
        const titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + this.tabKey);
        jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', '0px');
        jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).removeClass('showing');
        jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).removeClass('scrolledin');
        jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).removeClass('dimmed');
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    tabChangeAni(thisTabKey) {
        this.logger.info('[TabShifts|tabChangeAnim] (' + thisTabKey + ')...');
        const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + thisTabKey);
        const starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + thisTabKey);
        const titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + thisTabKey);
        const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + thisTabKey);
        const titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + thisTabKey);
        jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).addClass('tabtilt');
        jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).addClass('tabchangestarback');
        jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', this.leftAnimBarW);
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).addClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).addClass('scrolledin');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).removeClass('tabtilt');
                jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).addClass('dimmed');
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).removeClass('tabchangestarback');
            }, 200);
        }, 200);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    pageEnterAnim() {
        this.logger.info('[TabShifts|pageEnterAnim] ()...');
        this.evServ.subscribe('doPageEnterAnim', () => {
            this.tabKey = 'tabshifts';
            const pageKey = 'tabshifts';
            const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + pageKey);
            const preImg = '../../assets/img/slogo-';
            const cProgEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-progcirc.' + pageKey);
            const patchEles = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
            const starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + pageKey);
            const pageTitle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-title.' + pageKey);
            const titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + pageKey);
            const leftCol = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-page-header-col.left-col.' + pageKey);
            const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + pageKey);
            const titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + pageKey);
            const calcBarW = Math.round((jquery__WEBPACK_IMPORTED_MODULE_16__(leftCol).outerWidth() + 6) - (jquery__WEBPACK_IMPORTED_MODULE_16__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_16__(pageTitle).outerWidth())) + 'px';
            this.leftAnimBarW = calcBarW;
            jquery__WEBPACK_IMPORTED_MODULE_16__(patchEles).addClass('hidden');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_16__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).addClass('hcl-star-startanim');
                this.progCirc.outerStrokeColor = '#FF9800';
                this.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).attr('src', preImg + 'g.png');
                this.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).attr('src', preImg + 'w.png');
                    this.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');
                    jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).addClass('tabtilt');
                    jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', calcBarW);
                    setTimeout(() => {
                        jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).addClass('showing');
                        jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).addClass('scrolledin');
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).addClass('dimmed'); jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).removeClass('tabtilt'); }, 200);
                    }, 200);
                    setTimeout(() => {
                        this.progCirc.percent = 0;
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__(cProgEle).css('display', 'unset'); }, 1000);
                        jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).removeClass('hcl-star-startanim');
                        this.evServ.destroy('doPageEnterAnim');
                    }, 600);
                }, 400);
            }, 300);
        });
    }
    //////////'.myElement','tada',0-1500,0-1500,'keep|remove','show|hide|remove'
    myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
        this.logger.info('[TabShifts|myAniCSS] (' + theEle + ',' + aniName + ',' + aniDel + ',' + aniDur + ',' + aniEnd + ',' + eleEnd + ')...');
        let didResolve = false;
        const doAni = () => new Promise((resolve) => {
            const aniStr = 'animate__animated animate__' + aniName;
            const delStr = 'animDel-' + aniDel;
            const durStr = 'animDur-' + aniDur;
            jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).on('animationend', () => {
                setTimeout(() => { if (!didResolve) {
                    resolve(true);
                } }, 2000);
                if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).removeClass(aniStr);
                    if (jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).hasClass(delStr)) {
                        jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).removeClass(delStr);
                    }
                    ;
                    if (jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).hasClass(durStr)) {
                        jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).removeClass(durStr);
                    }
                }
                ;
                if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).remove();
                }
                ;
                if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).css('display', 'none');
                }
                ;
                resolve(true);
                didResolve = true;
            });
            if (aniDel > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).addClass(delStr);
            }
            ;
            if (aniDur > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).addClass(durStr);
            }
            ;
            jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).addClass(aniStr);
        });
        doAni();
    }
    ///////////////////////////////////////////////////////////////////////////
    hideSplash() {
        this.logger.info('[Tabs|hideSplash] ()...');
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setOverlaysWebView({ overlay: true });
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setBackgroundColor({ color: '#00000000' });
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-networkstatus-wrapper').addClass('adjust-for-auth-toolbar-overlay');
        const myAniCSS = (jqEle, animName) => new Promise((resolve) => { const animClassStr = 'animate__animated animate__' + animName + ' animate__fast'; jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).addClass(animClassStr); jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).on('animationend', () => { jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).removeClass(animClassStr); resolve('done'); }); });
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-logo-img').removeClass('animate__animated animate__headShake animate__infinite');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-titletexttop-wrapper').addClass('animate__animated animate__slideOutUp animate__faster');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-zer0ne-wrapper').addClass('animate__animated animate__slideOutDown animate__faster');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.bar-horizontal').addClass('finished');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-logo-img').prop('src', '../assets/img/slogo-g.png');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideInLeft').addClass('animate__slideOutLeft');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideInRight').addClass('animate__slideOutRight');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper, .sheriff-col.custom-splash-col.middlelogocol').css('background', 'transparent');
        myAniCSS('#sheriff-custom-splash-wrapper', 'fadeOut').then(() => jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper').hide());
    }
};
TabShiftsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_19__.NGXLogger },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_10__.EventsService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_11__.DeputyService },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__.SQLiteService },
    { type: _services_sync_service__WEBPACK_IMPORTED_MODULE_3__.SyncService },
    { type: src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_7__.FairworkService },
    { type: _services_detail_service__WEBPACK_IMPORTED_MODULE_5__.DetailService },
    { type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__.DateTimeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService },
    { type: src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_12__.CalendarService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NavController },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_14__.FirebaseService }
];
TabShiftsPage.propDecorators = {
    iScrollShifts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInfiniteScroll,] }],
    vScrollShifts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonVirtualScroll,] }],
    historyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['historyContent', { static: false },] }],
    shiftsSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['shiftsSlider', { static: false },] }],
    shiftsRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['shiftsRefresher',] }]
};
TabShiftsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({ selector: 'app-tabshifts', template: _raw_loader_tabshifts_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_tabshifts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    ////////////////////////////////////////////////////////////////////////////////////////
], TabShiftsPage);



/***/ }),

/***/ 93435:
/*!****************************************************!*\
  !*** ./src/app/tabs/tabshifts/tabshifts.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzaGlmdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 78829:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabshifts/tabshifts.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col tabshifts\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar tabshifts\">\n                                <div class=\"sheriff-title-leftanimbar-inner tabshifts\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title tabshifts\">\n                                    <div class=\"sheriff-title tight-wrap tabshifts\">Shifts</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div (click)=\"replayLPN()\" class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring tabshifts\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle tabshifts hcl-progcirc tabshifts\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch tabshifts\">\n                                        <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch tabshifts\"></div>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star tabshifts\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo tabshifts\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button tabshifts\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n<!-- ION-CONTENT-MAIN -->\n<ion-content class=\"main-tabshifts-content-wrapper\" [scrollEvents]=\"false\">\n    <!-- PAGE REFRESHER -->\n    <ion-refresher #shiftsRefresher class=\"sheriff-refresher tabs shifts\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" disabled=\"{{preventRefreshPull}}\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <!-- TOP SECTION WRAPPER -->\n    <div class=\"sheriff-tabshifts-mainpage-section-wrapper top-section\">\n        <!-- PAGE HEADING -->\n        <div slot=\"fixed\" class=\"sheriff-tabcontent-mainheading-wrapper shifts\">\n            <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid shifts\">\n                <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 shifts\">\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 shifts\"></ion-col>\n                    <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 shifts\">\n                        <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-shifts.png\">\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 sheets\"></ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- SHIFT THIS WEEK TOP BAR -->\n        <div slot=\"fixed\" class=\"sheriff-thisweek-statsbar-main-wrapper\">\n            <ion-grid class=\"sheriff-grid thisweek-statsbar-grid\">\n                <ion-row class=\"sheriff-row thisweek-statsbar-row heading-row\">\n                    <ion-col class=\"sheriff-col thisweek-statsbar-col heading-col\">\n                        <div class=\"thisweek-statsbar-heading-wrapper\">\n                            this week\n                            <span *ngIf=\"showIncome&&sSRosterIncome>0\" class=\"thisweek-head-income-wrap\">\n                              <span class=\"thisweek-head-income-hyphen\">-</span><span class=\"thisweek-head-income-dollar\">$</span><span *ngIf=\"!hasXtraShifts\" class=\"thisweek-head-income-value\">{{sSRosterIncome}}</span><span *ngIf=\"hasXtraShifts\" class=\"thisweek-head-income-value\">{{sSRosterIncome+xtraIncomeTotal}}<span class=\"thisweek-head-income-rosplusxtra-breakdown wrapper\"><span class=\"thisweek-head-income-rosplusxtra-breakdown brack\">(</span><span class=\"thisweek-head-income-rosplusxtra-breakdown ros\">{{sSRosterIncome}}</span><span class=\"thisweek-head-income-rosplusxtra-breakdown plus\">+</span><span class=\"thisweek-head-income-rosplusxtra-breakdown xtra\">{{xtraIncomeTotal}}</span><span class=\"thisweek-head-income-rosplusxtra-breakdown brack\">)</span></span>\n                              </span>\n                            </span>\n                        </div>\n                        <div class=\"thisweek-statsbar-heading-divider\"></div>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"hasLoaded\" class=\"sheriff-row thisweek-statsbar-row data-row\">\n                    <ion-col size=\"3\" class=\"sheriff-col thisweek-statsbar-col data-col shifts\">\n                        <div class=\"thisweek-statsbar-data-div shifts\">\n                            <ion-icon class=\"tw-sb-ico shifts\" name=\"calendar-outline\"></ion-icon>\n                            <div *ngIf=\"hasLoaded\" class=\"tw-sb-vals-outter-wrapper values shifts\">\n                                <span class=\"tw-sb-completed shifts\">{{sSDoneShifts}}</span>\n                                <span class=\"tw-sb-valslash\">/</span>\n                                <span class=\"tw-sb-rostered shifts\">{{sSTotalItems}}</span>\n                            </div>\n                            <div *ngIf=\"hasLoaded\" class=\"tw-sb-vals-outter-wrapper perform shifts\">\n                                <span *ngIf=\"sSShiftPerformVal>0\" class=\"tw-sb-perform-span plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSShiftPerformVal<0\" class=\"tw-sb-perform-span minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSShiftPerformVal===0\" class=\"tw-sb-perform-span equals\"><ion-icon class=\"tt-pm-ico e\" name=\"reorder-two-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSShiftPerformVal!==0\" [ngClass]=\"{'perform-val-up':sSShiftPerformVal>0,'perform-val-down':sSShiftPerformVal<0}\" class=\"tw-sb-perform-span value shifts\">{{sSShiftPerformVal}}</span>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col thisweek-statsbar-col data-col hours\">\n                        <div class=\"thisweek-statsbar-data-div hours\">\n                            <ion-icon class=\"tw-sb-ico hours\" name=\"time-outline\"></ion-icon>\n                            <div class=\"tw-sb-vals-outter-wrapper values hours\">\n                                <span class=\"tw-sb-completed hours\">{{sSDoneHrs}}</span>\n                                <span class=\"tw-sb-valslash\">/</span>\n                                <span class=\"tw-sb-rostered hours\">{{sSRosterHrs}}</span>\n                            </div>\n                            <div class=\"tw-sb-vals-outter-wrapper perform hours\">\n                                <span *ngIf=\"sSHrsPerformVal>0\" class=\"tw-sb-perform-span plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSHrsPerformVal<0\" class=\"tw-sb-perform-span minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSHrsPerformVal===0\" class=\"tw-sb-perform-span equals\"><ion-icon class=\"tt-pm-ico e\" name=\"reorder-two-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSHrsPerformVal!==0\" [ngClass]=\"{'perform-val-up':sSHrsPerformVal>0,'perform-val-down':sSHrsPerformVal<0}\" class=\"tw-sb-perform-span value hours\">{{sSHrsPerformVal}}</span>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col thisweek-statsbar-col data-col income\">\n                        <div *ngIf=\"showIncome\" class=\"thisweek-statsbar-data-div income\">\n                            <ion-icon class=\"tw-sb-ico income\" name=\"logo-usd\"></ion-icon>\n                            <div class=\"tw-sb-vals-outter-wrapper values income\">\n                                <span class=\"tw-sb-completed income\">{{sSDoneIncome}}</span>\n                                <span class=\"tw-sb-valslash\">/</span>\n                                <span class=\"tw-sb-rostered income\">{{sSRosterIncome}}</span>\n                            </div>\n                            <div class=\"tw-sb-vals-outter-wrapper perform income\">\n                                <span *ngIf=\"sSIncomePerformVal>0\" class=\"tw-sb-perform-span plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSIncomePerformVal<0\" class=\"tw-sb-perform-span minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSIncomePerformVal===0\" class=\"tw-sb-perform-span equals\"><ion-icon class=\"tt-pm-ico e\" name=\"reorder-two-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSIncomePerformVal!==0\" [ngClass]=\"{'perform-val-up':sSIncomePerformVal>0,'perform-val-down':sSIncomePerformVal<0}\" class=\"tw-sb-perform-span value hours\">{{sSIncomePerformVal}}</span>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- CURRENT SHIFTS SLIDER CONTENT -->\n        <div slot=\"fixed\" class=\"sheriff-currentshifts-slider-main-wrapper\">\n            <ion-grid class=\"sheriff-grid shifts-grid currentshifts-slider-grid\">\n                <ion-row class=\"sheriff-row shifts-row currentshifts-row main-row\">\n                    <ion-col size=\"12\" class=\"sheriff-col shifts-col currentshifts-col main-col\">\n                        <div *ngIf=\"sSCurrentIndex!==null&&sSInitComplete&&hasLoaded&&sSTotalItems!==0&&!sSlider.isBeginningSlide&&!doneSIsShowing\" class=\"currentshifts-div arrow-fade-div left-arrow-fade-div\">\n                            <div class=\"sheriff-slider-nav-arrow-wrapper back-arrow-outter-wrapper shiftsslider\">\n                                <div (click)=\"sSPrev()\" class=\"sheriff-slider-nav-arrow-wrapper back-arrow-inner-wrapper shiftsslider ion-activatable ripple-parent\">\n                                    <ion-icon class=\"sheriff-shiftsslider-nav-arrow-ico back\" name=\"caret-back\"></ion-icon>\n                                    <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- ------------------------------ THIS WEEK SHIFT SLIDE ------------------------------------ -->\n                        <!-- SHOW HIDE SHIFT CONTROLS >>> START -->\n                        <div *ngIf=\"sSInitComplete&&sSlider.slidesControls[sSCurrentIndex].show\" class=\"ss-control-hidecontrols-flipper-outter-wrapper\">\n                            <div (click)=\"sSControl(sSlider.slidesItems[sSCurrentIndex].Id,'show')\" class=\"ss-control-hidecontrols-flipper-inner-wrapper ion-activatable ripple-parent hide\">\n                                <div class=\"ss-control-showctrl-toggle-wrapper hide\">\n                                    <div class=\"ss-control-showhide-btn-wrapper\">\n                                        <ion-icon class=\"ss-control-showhide-btn-ico hide\" name=\"options\"></ion-icon>\n                                        <div class=\"ss-control-showhide-btn-txt hide\">hide</div>\n                                    </div>\n                                </div>\n                                <ion-ripple-effect></ion-ripple-effect>\n                            </div>\n                        </div>\n                        <!-- SHOW HIDE SHIFT CONTROLS <<< END -->\n                        <div [ngClass]=\"{'done-showing-hidden-slider':sSlider.slidesItems.length===0||doneSIsShowing}\" class=\"sslider-currentshifts-hiddenslides-wrapper\">\n                            <ion-slides #shiftsSlider (ionSlidesDidLoad)=\"sSDidLoad()\" (ionSlideWillChange)=\"sSWillChange()\" (ionSlideDidChange)=\"sSDidChange()\" (ionSlideReachStart)=\"sSIsStart()\" (ionSlideReachEnd)=\"sSIsEnd()\" id=\"currentshifts-slides\" class=\"sheriff-slides shifts-slides\"\n                                [options]=sSOptions mode=\"md\">\n                                <ion-slide *ngFor=\"let sItem of sSlider.slidesItems;let i=index\" class=\"shifts-slide slideindex-{{i}} sliderosterid-{{sItem.Id}}\">\n                                    <div class=\"sslider-currentshifts-outter-wrapper\">\n                                        <div class=\"sslider-currentshifts-inner-wrapper\">\n                                            <ion-grid class=\"sheriff-grid sheriff-roster-content-grid\">\n                                                <!-- SLIDER CONTROLS ROW >>> START -->\n                                                <ion-row *ngIf=\"sSInitComplete===true\" [ngClass]=\"{'ss-control-row-showing':sSCurrentIndex!==null&&sSlider.slidesControls[i].show}\" class=\"sheriff-row sslider-shift-control-row\">\n                                                    <ion-col [ngClass]=\"{'ss-control-showing-col1':sSlider.slidesControls[i].show}\" size=\"3\" class=\"sheriff-col sslider-shift-control-col alerts-col\">\n                                                        <div *ngIf=\"sSlider.slidesControls.length>0&&sSlider.slidesControls[i].show\" class=\"ss-control-row-container-wrap col1-wrap\">\n                                                            <div *ngIf=\"sSlider.slidesControls[i].inProg&&!sSlider.slidesControls[i].isPaused\" class=\"ss-control-text-data-wrapper\">x%</div>\n                                                            <div *ngIf=\"sSlider.slidesControls[i].inProg&&sSlider.slidesControls[i].isPaused\" class=\"ss-control-text-data-wrapper ispaused\">\n                                                                <div class=\"ss-control-text-data paused-wrapper  animate__infinite animate__flash animDur-2500\">\n                                                                    <ion-icon class=\"ss-controls-text-data paused-ico\" name=\"pause\"></ion-icon>\n                                                                    <div class=\"ss-controls-text-data paused-txt\">paused</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"6\" class=\"sheriff-col sslider-shift-control-col progress-col\">\n                                                        <div *ngIf=\"sSInitComplete&&!sSlider.slidesControls[sSCurrentIndex].show\" (click)=\"sSControl(sSlider.slidesItems[sSCurrentIndex].Id,'show')\" class=\"ss-control-showctrl-toggle-wrapper show\">\n                                                            <div class=\"ss-control-showhide-btn-wrapper show ion-activatable ripple-parent\">\n                                                                <ion-icon class=\"ss-control-showhide-btn-ico\" name=\"options\"></ion-icon>\n                                                                <div class=\"ss-control-showhide-btn-txt show\">show</div>\n                                                                <ion-ripple-effect></ion-ripple-effect>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"sSlider.slidesControls.length>0&&sSlider.slidesControls[i].show\" class=\"ss-control-row-container-wrap col2-wrap\">\n                                                            <div class=\"ss-control-progressbar-wrapper\">\n                                                                <ion-progress-bar *ngIf=\"sSlider.slidesControls[i].inProg\" type={{sSlider.slidesControls[i].progType}} class=\"sheriff-progress-bar sslider-shift-progress sslider-progress-id-{{sItem.Id}}\"></ion-progress-bar>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"3\" class=\"sheriff-col sslider-shift-control-col startstop-col start-col\">\n                                                        <div *ngIf=\"sSlider.slidesControls.length>0&&sSlider.slidesControls[i].show\" class=\"ss-control-row-container-wrap col3-wrap\">\n                                                            <div class=\"ss-control-btns-wrapper\">\n                                                                <ion-grid class=\"sheriff-grid ss-control-startstop-grid\">\n                                                                    <ion-row class=\"sheriff-row ss-control-startstop-row\">\n                                                                        <ion-col *ngIf=\"sSlider.slidesControls[i].inProg\" size=\"6\" class=\"sheriff-col ss-control-startstop-col\">\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'start')\" *ngIf=\"sSlider.slidesControls[i].inProg===false||sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn start-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico start-ico\" name=\"play\"></ion-icon>\n                                                                            </ion-button>\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'stop')\" *ngIf=\"sSlider.slidesControls[i].inProg===true&&!sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn stop-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico stop-ico\" name=\"stop\"></ion-icon>\n                                                                            </ion-button>\n                                                                        </ion-col>\n\n                                                                        <ion-col size=\"12\" *ngIf=\"!sSlider.slidesControls[i].inProg\" class=\"sheriff-col ss-control-startstop-col\">\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'start')\" *ngIf=\"sSlider.slidesControls[i].inProg===false||sSlider.slidesControls[i].isPaused===true\" class=\"sheriff-button ss-control-btn start-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico start-ico\" name=\"play\"></ion-icon>\n                                                                            </ion-button>\n                                                                        </ion-col>\n\n                                                                        <ion-col size=\"6\" class=\"sheriff-col ss-control-startstop-col\">\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'pause')\" *ngIf=\"sSlider.slidesControls[i].inProg===true&&!sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn pause-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico pause-ico\" name=\"pause\"></ion-icon>\n                                                                            </ion-button>\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'stop')\" *ngIf=\"sSlider.slidesControls[i].inProg===true&&sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn stop-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico stop-ico\" name=\"stop\"></ion-icon>\n                                                                            </ion-button>\n                                                                        </ion-col>\n                                                                    </ion-row>\n                                                                </ion-grid>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <!-- SLIDER CONTROLS ROW <<< END -->\n                                                <ion-row class=\"sheriff-row sheriff-roster-content-row1\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col sslider-shift-content-col-workico\">\n                                                        <div class=\"sslider-shift-item-alert-indic-wrapper  animate__zoomIn animDur-250\">\n                                                            <div class=\"sslider-shift-alerts-indic-inner-wrapper rid-{{sItem.Id}}\">\n                                                                <ion-icon *ngIf=\"(alertMethods.phone===null||alertEvents.shift===null)||(alertMethods.phone===false||alertEvents.shift===false)\" class=\"sslider-shift-alerts-indic notification-ico-off\" name=\"notifications-off-outline\"></ion-icon>\n                                                                <ion-icon *ngIf=\"alertMethods.phone===true&&alertEvents.shift===true\" class=\"sslider-shift-alerts-indic notification-ico-on\" name=\"notifications\"></ion-icon>\n                                                                <ion-icon *ngIf=\"(alertMethods.calendar===null||alertEvents.shift===null)||(alertMethods.calendar===false||alertEvents.shift===false)\" class=\"sslider-shift-alerts-indic calendar-ico-off\" name=\"calendar-outline\"></ion-icon>\n                                                                <ion-icon *ngIf=\"alertMethods.calendar===true&&alertEvents.shift===true\" class=\"sslider-shift-alerts-indic calendar-ico-on\" name=\"calendar\"></ion-icon>\n                                                                <ion-icon *ngIf=\"(alertMethods.email===null||alertEvents.shift===null)||(alertMethods.email===false||alertEvents.shift===false)\" class=\"sslider-shift-alerts-indic email-ico-off\" name=\"mail-outline\"></ion-icon>\n                                                                <ion-icon *ngIf=\"alertMethods.email===true&&alertEvents.shift===true\" class=\"sslider-shift-alerts-indic email-ico-on\" name=\"mail\"></ion-icon>\n                                                            </div>\n                                                        </div>\n                                                        <div (click)=\"stopShowColleague()\" class=\"ss-showing-colleague-wrapper\" *ngIf=\"showingColleague\">\n                                                            <img class=\"ss-showing-colleague-pic\" src=\"{{viewColleague.Photo}}\">\n                                                            <div class=\"ss-showing-colleague-fname\">{{viewColleague.FirstName}}</div>\n                                                            <div class=\"ss-showing-colleague-lname\">{{viewColleague.LastName}}</div>\n                                                        </div>\n                                                        <div *ngIf=\"!showingColleague\" class=\"sslider-shift-item-workplacecode-wrapper\">\n                                                            <div *ngIf=\"workAvatar!==null\" class=\"sslider-shift-workplaceico gotavatar\" [ngStyle]=\"{'background-image':'url('+workAvatar+')'}\"></div>\n                                                            <div *ngIf=\"workAvatar===null\" class=\"sslider-shift-workplaceico backupavatar\" [ngStyle]=\"{'background-color':workColor}\">\n                                                                <div class=\"shift-workplace-buavatar-singleinitial-label\">{{sItem.nCompanyName.charAt(0)}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"!showingColleague\" class=\"sslider-shift-item work-placearea-wrapper\">\n                                                            <div class=\"sslider-shift-item work-wrapper place\">\n                                                                <ion-icon class=\"sslider-shift-worklabel place\" name=\"business\"></ion-icon>\n                                                                <div class=\"sslider-shift-item-workplacename\">{{sItem.nCompanyName.slice(0,3)}}</div>\n                                                            </div>\n                                                            <div class=\"sslider-shift-item work-wrapper area\">\n                                                                <ion-icon class=\"sslider-shift-worklabel area\" name=\"locate\"></ion-icon>\n                                                                <div class=\"sslider-shift-item-workarea\">{{sItem.nOpUnit.slice(0,3)}}</div>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"7\" class=\"sheriff-col sheriff-roster-content-col-shiftdatetime\">\n                                                        <div class=\"sheriff-roster-datetimeinfowrapper\">\n                                                            <div class=\"sslider-shift-date\">{{sItem.nDate}}</div>\n                                                            <div class=\"sslider-shift-startendtime\">\n                                                                <ion-icon class=\"sslider-shift-setime-ico\" name=\"time\"></ion-icon>\n                                                                {{sItem.nStart}}\n                                                                <ion-icon class=\"sslider-shift-fromto-ico\" name=\"chevron-forward\"></ion-icon>\n                                                                {{sItem.nEnd}}\n                                                            </div>\n                                                            <div class=\"sslider-shift-ttandincome\">\n                                                                <ion-icon class=\"sslider-shift-tt-ico\" name=\"hourglass\"></ion-icon>\n                                                                <span *ngIf=\"sItem.nTotalTime.hours>0\" class=\"ss-ttdur-hv\">{{sItem.nTotalTime.hours}}<span class=\"ss-ttdur-suffix hours\">h</span></span>\n                                                                <span *ngIf=\"sItem.nTotalTime.minutes>0\" class=\"ss-ttdur-mv\">{{sItem.nTotalTime.minutes}}<span class=\"ss-ttdur-suffix mins\">m</span></span>\n                                                                <span *ngIf=\"showIncome\">\n                                                                <span class=\"sslider-shift-vertsep\">|</span>\n                                                                <ion-icon class=\"sslider-shift-income-ico\" name=\"logo-usd\"></ion-icon><span class=\"sslider-shift-dollar-small\">$</span>{{sItem.nIncome}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <!-- IF MULTI PEER VIEW FALSE -->\n                                                        <div *ngIf=\"!apiPeerView\" class=\"sslider-colleagues-outter-wrapper\">\n                                                            <div *ngIf=\"this.sSColleagueDayIndex===i\" class=\"sslider-colleagues-notpeerview-isshiftday-wrapper\">\n                                                                <div class=\"sslider-colleagues-inner-wrapper same\">\n                                                                    <ion-icon class=\"sslider-colleagues-ppl-icon\" name=\"people\"></ion-icon><span class=\"sslider-colleagues-txt with-txt\">with:</span>\n                                                                    <span class=\"sslider-colleagues-grouptotalno same\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSColleagues.sameArea.length>0}\" class=\"sslider-colleagues-groupnoval same\">{{sSColleagues.sameArea.length}}</span>)</span>\n                                                                    <span *ngFor=\"let psa of sSColleagues.sameArea;let sapi = index\" class=\"sslider-colleagues-area-person same\" (click)=\"showColleague(psa)\">\n                                                                    <span *ngIf=\"sapi===sSColleagues.sameArea.length-1&&sSColleagues.sameArea.length>1\" class=\"ss-collcomma and\">&</span>{{psa.FirstName}}\n                                                                    <span *ngIf=\"sapi!==sSColleagues.sameArea.length-1&&(sapi!==sSColleagues.sameArea.length-2&&sSColleagues.sameArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                    </span>\n                                                                    <span *ngIf=\"sSColleagues.sameArea.length===0&&sSColleagues.otherArea.length!==0\">-</span>\n                                                                    <span *ngIf=\"sSColleagues.sameArea.length===0&&sSColleagues.otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                                </div>\n                                                                <div class=\"sslider-colleagues-inner-wrapper other\">\n                                                                    <span class=\"sslider-colleagues-txt and-txt\">and:</span><span class=\"sslider-colleagues-grouptotalno other\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSColleagues.otherArea.length>0}\" class=\"sslider-colleagues-groupnoval other\">{{sSColleagues.otherArea.length}}</span>)</span>\n                                                                    <span *ngFor=\"let poa of sSColleagues.otherArea;let oapi = index\" class=\"sslider-colleagues-area-person other\" (click)=\"showColleague(poa)\">\n                                                                    <span *ngIf=\"oapi===sSColleagues.otherArea.length-1&&sSColleagues.otherArea.length>1\" class=\"ss-collcomma and\">&</span>{{poa.FirstName}}\n                                                                    <span *ngIf=\"oapi!==sSColleagues.otherArea.length-1&&(oapi!==sSColleagues.otherArea.length-2&&sSColleagues.otherArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                    </span>\n                                                                    <span *ngIf=\"sSColleagues.sameArea.length!==0&&sSColleagues.otherArea.length===0\">-</span>\n                                                                    <span *ngIf=\"sSColleagues.otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                                </div>\n                                                            </div>\n                                                            <div *ngIf=\"this.sSColleagueDayIndex!==i\" class=\"sslider-colleagues-notpeerview-notshiftday-wrapper\">\n                                                                <div class=\"sslider-colleagues-inner-wrapper same\">\n                                                                    <ion-icon class=\"sslider-colleagues-ppl-icon\" name=\"people\"></ion-icon><span class=\"sslider-colleagues-txt with-txt\">with:</span><span class=\"apirestrictedpinfo\">NK</span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <!-- IF MULTI PEER VIEW TRUE -->\n                                                        <div *ngIf=\"sSMultiColleagues.length>0&&apiPeerView\" class=\"sslider-colleagues-outter-wrapper\">\n                                                            <div class=\"sslider-colleagues-inner-wrapper same\">\n                                                                <ion-icon class=\"sslider-colleagues-ppl-icon\" name=\"people\"></ion-icon><span class=\"sslider-colleagues-txt with-txt\">with:</span>\n                                                                <span class=\"sslider-colleagues-grouptotalno same\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSMultiColleagues[i].sameArea.length>0}\" class=\"sslider-colleagues-groupnoval same\">{{sSMultiColleagues[i].sameArea.length}}</span>)</span>\n                                                                <span *ngFor=\"let psa of sSMultiColleagues[i].sameArea;let sapi = index\" class=\"sslider-colleagues-area-person same\" (click)=\"showColleague(psa)\">\n                                                                  <span *ngIf=\"sapi===sSMultiColleagues[i].sameArea.length-1&&sSMultiColleagues[i].sameArea.length>1\" class=\"ss-collcomma and\">&</span>{{psa.FirstName}}\n                                                                <span *ngIf=\"sapi!==sSMultiColleagues[i].sameArea.length-1&&(sapi!==sSMultiColleagues[i].sameArea.length-2&&sSMultiColleagues[i].sameArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                </span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].sameArea.length===0&&sSMultiColleagues[i].otherArea.length!==0\">-</span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].sameArea.length===0&&sSMultiColleagues[i].otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                            </div>\n                                                            <div class=\"sslider-colleagues-inner-wrapper other\">\n                                                                <span class=\"sslider-colleagues-txt and-txt\">and:</span><span class=\"sslider-colleagues-grouptotalno other\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSMultiColleagues[i].otherArea.length>0}\" class=\"sslider-colleagues-groupnoval other\">{{sSMultiColleagues[i].otherArea.length}}</span>)</span>\n                                                                <span *ngFor=\"let poa of sSMultiColleagues[i].otherArea;let oapi = index\" class=\"sslider-colleagues-area-person other\" (click)=\"showColleague(poa)\">\n                                                                <span *ngIf=\"oapi===sSMultiColleagues[i].otherArea.length-1&&sSMultiColleagues[i].otherArea.length>1\" class=\"ss-collcomma and\">&</span>{{poa.FirstName}}\n                                                                <span *ngIf=\"oapi!==sSMultiColleagues[i].otherArea.length-1&&(oapi!==sSMultiColleagues[i].otherArea.length-2&&sSMultiColleagues[i].otherArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                </span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].sameArea.length!==0&&sSMultiColleagues[i].otherArea.length===0\">-</span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"sItem.ConfirmStatus>0\" id=\"comment-{{sItem.Id}}\" class=\"roster-shift-comment-wrapper\">\n                                                            <div *ngIf=\"sItem.ConfirmStatus===1\" class=\"roster-shift-comment-btn-wrapper\">\n                                                                <ion-button id=\"commentbtn-{{sItem.Id}}\" class=\"small sheriff-roster-comment-btn\">\n                                                                    <ion-icon name=\"chatbox\" id=\"commentico-{{sItem.Id}}\" class=\"rosterdeetbuttonico rostercommentbuttonico\"></ion-icon>\n                                                                    <div id=\"commenttxt-{{sItem.Id}}\" class=\"readcommentbtntext\">Confirm</div>\n                                                                </ion-button>\n                                                            </div>\n                                                            <div *ngIf=\"sItem.ConfirmStatus>1\" class=\"roster-shift-comment-wrapper\">\n                                                                <div *ngIf=\"sItem.ConfirmStatus===2\" class=\"roster-confirm-status-txt done\">Confirmed</div>\n                                                                <div *ngIf=\"sItem.ConfirmStatus===3\" class=\"roster-confirm-status-txt declined\">Declined</div>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"3\" class=\"sheriff-col sheriff-roster-content-col-deetsnactions\">\n                                                        <ion-grid class=\"sheriff-grid ss-stats-grid\">\n                                                            <ion-row class=\"sheriff-row ss-stats-row creator\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <img src=\"{{sItem.nCreatorAva}}\" class=\"ss-stats-ico creator\">\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt creator\">{{sItem.sFName}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row rosterid\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <ion-icon class=\"ss-stats-ico rosterid\" name=\"pricetag-outline\"></ion-icon>\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt rosterid\">#{{sItem.Id}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row created\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <ion-icon class=\"ss-stats-ico created\" name=\"create-outline\"></ion-icon>\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt created\">{{sItem.sCreated}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row modified\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <ion-icon class=\"ss-stats-ico modified\" name=\"hammer-outline\"></ion-icon>\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt modified\">{{sItem.sModified}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row swapdecline\">\n                                                                <ion-col size=\"6\" class=\"sheriff-col swap\">\n                                                                    <ion-button id=\"swapbtn-{{sItem.Id}}\" class=\"ss-swapdecline-btn swap\">\n                                                                        <ion-icon class=\"ss-swapdecline-btn-ico swap\" name=\"swap-horizontal-outline\"></ion-icon>\n                                                                    </ion-button>\n                                                                </ion-col>\n                                                                <ion-col size=\"6\" class=\"sheriff-col decline\">\n                                                                    <ion-button id=\"swapbtn-{{sItem.Id}}\" class=\"ss-swapdecline-btn decline\">\n                                                                        <ion-icon class=\"ss-swapdecline-btn-ico decline\" name=\"hand-right-outline\"></ion-icon>\n                                                                    </ion-button>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                        </ion-grid>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </div>\n                                    </div>\n                                </ion-slide>\n                            </ion-slides>\n                        </div>\n                        <!-- ------------------------------ END WEEK SHIFT SLIDES ------------------------------------ -->\n                        <div *ngIf=\"hasLoaded&&sSTotalItems===0&&!doneSIsShowing\" class=\"currentshifts-div nofutureitems-outter-wrapper\">\n                            <div class=\"sheriff-shifts-noshifts-background-wrapper\"></div>\n                            <div class=\"currentshifts-div nofutureitems-inner-wrapper\">\n                                <div class=\"noshifts-bg-text\">\n                                    <span *ngIf=\"!isRefreshing\" class=\"nstxt\">No Shifts</span>\n                                    <div *ngIf=\"isRefreshing\" class=\"loadval-spin-wrap\">\n                                        <ion-spinner duration=\"250\" name=\"dots\" class=\"sheriff-small-val-loading\"></ion-spinner>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- START DISPLAY SINGLE DONE SHIFT ITEM -->\n                        <div *ngIf=\"doneSIsShowing\" class=\"display-doneshift-outter-wrapper\">\n                            <div class=\"display-doneshift-inner-wrapper\">\n                                <ion-grid class=\"sheriff-grid sheriff-roster-content-grid doneshift-{{doneS.Id}}\">\n                                    <ion-row class=\"sheriff-row sheriff-roster-content-row1\">\n                                        <ion-col size=\"2\" class=\"sheriff-col sheriff-roster-content-col-workico\">\n                                            <div class=\"sheriff-roster-item-workplace-wrapper  animate__zoomIn animDur-250\"></div>\n                                            <div class=\"sheriff-roster-item-workplacecode-wrapper\">\n                                                <div *ngIf=\"workAvatar!==null\" class=\"sheriff-roster-workplaceico gotavatar\" [ngStyle]=\"{'background-image':'url('+workAvatar+')'}\"></div>\n                                                <div *ngIf=\"workAvatar===null\" class=\"sheriff-roster-workplaceico backupavatar\" [ngStyle]=\"{'background-color':workColor}\">\n                                                    <div class=\"shift-workplace-buavatar-singleinitial-label\">{{doneS.nCompanyName.charAt(0)}}</div>\n                                                </div>\n                                            </div>\n                                            <div class=\"sheriff-roster-item work-placearea-wrapper\">\n                                                <div class=\"sheriff-roster-item work-wrapper place\">\n                                                    <ion-icon class=\"sheriff-roster-worklabel place\" name=\"business\"></ion-icon>\n                                                    <div class=\"sheriff-roster-item-workplacename\">{{doneS.nCompanyName.slice(0,3)}}</div>\n                                                </div>\n                                                <div class=\"sheriff-roster-item work-wrapper area\">\n                                                    <ion-icon class=\"sheriff-roster-worklabel area\" name=\"locate\"></ion-icon>\n                                                    <div class=\"sheriff-roster-item-workarea\">{{doneS.nOpUnit.slice(0,3)}}</div>\n                                                </div>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col size=\"7\" class=\"sheriff-col sheriff-roster-content-col-shiftdatetime\">\n                                            <div class=\"sheriff-roster-datetimeinfowrapper\">\n                                                <div class=\"doneshift-val date\">{{doneS.nDate}}</div>\n                                                <div class=\"doneshift-wrapper times\">\n                                                    <div *ngIf=\"doneSTSData\" class=\"doneshift times rostered\">\n                                                        <ion-icon class=\"doneshift-ico rostered times\" name=\"time-outline\"></ion-icon><span class=\"doneshift times-val start rostered\" [ngClass]=\"{'doneshiftval-up':doneSTSData&&doneS.tsStart!==doneS.nStart&&doneSTSData.StartTime<doneS.StartTime,'doneshiftval-down':doneSTSData&&doneS.tsStart!==doneS.nStart&&doneSTSData.StartTime>doneS.StartTime,'doneshiftval-same':doneS.tsStart===doneS.nStart}\">{{doneS.rosStart}}</span>\n                                                        <ion-icon class=\"doneshift-ico rostered fromto rostered\" name=\"chevron-forward\"></ion-icon><span class=\"doneshift times-val end rostered\" [ngClass]=\"{'doneshiftval-up':doneSTSData&&doneS.tsEnd!==doneS.nEnd&&doneSTSData.EndTime>doneS.EndTime,'doneshiftval-down':doneSTSData&&doneS.tsEnd!==doneS.nEnd&&doneSTSData.EndTime<doneS.EndTime,'doneshiftval-same':doneSTSData&&doneS.tsEnd===doneS.nEnd}\">{{doneS.rosEnd}}</span>\n                                                        <span *ngIf=\"doneSTSData\" [ngClass]=\"{'doneshiftdur-up':(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes>(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes,'doneshiftdur-down':(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes<(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes,'doneshiftdur-same':(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes===(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes}\">\n                                                          <ion-icon *ngIf=\"doneS.tsTTDiff.hours===0&&doneS.tsTTDiff.minutes===0\" class=\"doneshift rostered hm-val same-ico\" name=\"checkmark-done-outline\"></ion-icon>\n                                                          <span class=\"doneshift rostered hm-val hours\" *ngIf=\"doneS.tsTTDiff.hours!==0\">{{doneS.tsTTDiff.hours}}<span class=\"doneshift-rostered-suffix hours\">:</span></span>\n                                                        <span class=\"doneshift rostered hm-val minutes\" *ngIf=\"doneS.tsTTDiff.minutes!==0\">{{doneS.tsTTDiff.minutes}}<span *ngIf=\"doneS.tsTTDiff.minutes!==0&&doneS.tsTTDiff.hours===0\" class=\"doneshift-ttdiff-mins-suffix\">m</span></span>\n                                                        <span class=\"doneshift-actual-dur-income-vertsep\">|</span><span class=\"doneshift-incomeperf-dollar-small\">$</span>\n                                                        <span class=\"doneshift-actual-income-updown-val\"><span *ngIf=\"doneS.tsIncomePerf<0\" class=\"doneshift-actual-income-updown-val-bracks\"><span>(</span></span>{{doneS.tsIncomePerf}}<span *ngIf=\"doneS.tsIncomePerf<0\"\n                                                            class=\"doneshift-actual-income-updown-val-bracks\"><span>)</span></span>\n                                                        </span>\n                                                        </span>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TIMES - STARTS -->\n                                                    <div *ngIf=\"!doneSTSData\" class=\"doneshift times rostered tsmissing\">\n                                                        <ion-icon class=\"doneshift-ico rostered times tsmissing\" name=\"time-outline\"></ion-icon>\n                                                        <span class=\"doneshift times-val start rostered tsmissing\">{{doneS.nStart}}</span>\n                                                        <ion-icon class=\"doneshift-ico rostered fromto rostered tsmissing\" name=\"chevron-forward\"></ion-icon>\n                                                        <span class=\"doneshift times-val end rostered tsmissing\">{{doneS.nEnd}}</span>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TIMES - ENDS -->\n                                                    <div *ngIf=\"doneSTSData\" class=\"doneshift actual\">\n                                                        <div class=\"doneshift-actual times-wrapper\">\n                                                            <ion-icon class=\"doneshift-ico actual times\" name=\"time\"></ion-icon>{{doneS.tsStart}}\n                                                            <ion-icon class=\"doneshift-ico actual fromto\" name=\"chevron-forward\"></ion-icon>{{doneS.tsEnd}}\n                                                        </div>\n                                                        <div class=\"doneshift-actual duration-income\">\n                                                            <ion-icon class=\"doneshift-ico actual hourglass\" name=\"hourglass\"></ion-icon>\n                                                            <span *ngIf=\"doneS.tsTotalTime.hours>0\">{{doneS.tsTotalTime.hours}}<span class=\"doneshift-actual-suffix hours\">h</span></span>\n                                                            <span *ngIf=\"doneS.tsTotalTime.minutes>0\">{{doneS.tsTotalTime.minutes}}<span class=\"doneshift-actual-suffix minutes\">m</span></span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger\">|</span>\n                                                            <ion-icon class=\"sslider-shift-income-ico actual\" name=\"logo-usd\"></ion-icon><span class=\"doneshift-actual-income-updown-val\"><span class=\"doneshift-incomeperf-dollar-s\">$</span>{{doneS.tsIncome}}</span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger\">|</span>\n                                                            <div class=\"doneshift-performance-arrow-wrapper\">\n                                                                <ion-icon *ngIf=\"doneSTSData&&(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes===(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes\" class=\"doneshift-ico rostered equals\" name=\"reorder-two\"></ion-icon>\n                                                                <ion-icon *ngIf=\"doneSTSData&&(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes>(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes\" class=\"doneshift-ico rostered equalsup\" style=\"color:var(--ion-color-success-68);vertical-align:text-top\" name=\"caret-up\"></ion-icon>\n                                                                <ion-icon *ngIf=\"doneSTSData&&(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes<(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes\" class=\"doneshift-ico rostered equalsdown\" style=\"color:var(--ion-color-danger-68);vertical-align:text-bottom\" name=\"caret-down\"></ion-icon>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TTINCOME - STARTS -->\n                                                    <div *ngIf=\"!doneSTSData\" class=\"doneshift actual tsmissing\">\n                                                        <div class=\"doneshift-actual times-wrapper tsmissing\">\n                                                            <ion-icon class=\"doneshift-ico actual times tsmissing\" name=\"time\"></ion-icon><span class=\"doneshift missingts-actual-val\">Unknown</span>\n                                                            <ion-icon class=\"doneshift-ico actual fromto tsmissing\" name=\"chevron-forward\"></ion-icon><span class=\"doneshift missingts-actual-val\">Unknown</span>\n                                                        </div>\n                                                        <div class=\"doneshift-actual duration-income tsmissing\">\n                                                            <ion-icon class=\"doneshift-ico actual hourglass tsmissing\" name=\"hourglass\"></ion-icon>\n                                                            <span class=\"done-shift tt-val hours tsmissing\" *ngIf=\"doneS.nTotalTime.hours>0\">{{doneS.nTotalTime.hours}}<span class=\"doneshift-actual-suffix hours\">h</span></span>\n                                                            <span class=\"done-shift tt-val minutes tsmissing\" *ngIf=\"doneS.nTotalTime.minutes>0\">{{doneS.nTotalTime.minutes}}<span class=\"doneshift-actual-suffix minutes\">m</span></span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger tsmissing\">|</span>\n                                                            <ion-icon class=\"doneshift-ico actual dollar tsmissing\" name=\"logo-usd\"></ion-icon><span class=\"doneshift-actual-income-updown-val\"><span class=\"doneshift-incomeperf-dollar-s\">$</span>{{doneS.nIncome}}</span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger\">|</span>\n                                                            <div class=\"doneshift-performance-arrow-wrapper\">\n                                                                <ion-icon class=\"doneshift-ico rostered tsmissing qmark\" style=\"color:var(--ion-color-danger-68);vertical-align:middle\" name=\"warning\"></ion-icon>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TTINCOME - ENDS -->\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"doneS.nCommCount>0&&doneSShowComments\" class=\"doneshift-comment-outter-wrapper content-wrapper\">\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nConfirmComment\">\n                                                    <ion-icon class=\"doneshift-comment-ico confirmcomment-ico\" name=\"checkmark-done-circle\"></ion-icon>\n                                                    <span class=\"doneshift comment-type-label confirmcomment-label\">confirm:</span> {{doneS.nConfirmComment}}\n                                                </div>\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nComment\">\n                                                    <ion-icon class=\"doneshift-comment-ico comment-ico\" name=\"chatbubbles\"></ion-icon>\n                                                    <span class=\"doneshift comment-type-label comment-label\">comment:</span> {{doneS.nComment}}\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"doneS.nWarnCount>0&&doneSShowWarnings\" class=\"doneshift-warning-outter-wrapper content-wrapper\">\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nWarning\">\n                                                    <ion-icon class=\"doneshift-warning-ico warning-ico\" name=\"alert-circle\"></ion-icon>\n                                                    <span class=\"doneshift warning-type-label warning-label\">warning:</span> {{doneS.nWarning}}\n                                                </div>\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nWarningOR\">\n                                                    <ion-icon class=\"doneshift-warning-ico warningoverride-ico\" name=\"skull\"></ion-icon>\n                                                    <span class=\"doneshift warning-type-label warning-label\">override:</span> {{doneS.nWarningOR}}\n                                                </div>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col class=\"sheriff-col sheriff-roster-content-col-deetsnactions\">\n                                            <ion-grid class=\"sheriff-grid ss-stats-grid\">\n                                                <ion-row class=\"sheriff-row ss-stats-row creator\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col\">\n                                                        <img src=\"{{doneS.nCreatorAva}}\" class=\"ss-stats-ico creator\">\n                                                    </ion-col>\n                                                    <ion-col size=\"10\" class=\"sheriff-col\">\n                                                        <div class=\"ss-stats-txt creator\">{{doneS.sFName}}</div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-stats-row created\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col\">\n                                                        <ion-icon class=\"ss-stats-ico created\" name=\"create-outline\"></ion-icon>\n                                                    </ion-col>\n                                                    <ion-col size=\"10\" class=\"sheriff-col\">\n                                                        <div class=\"ss-stats-txt created\">{{doneS.sCreated}}</div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-stats-row modified\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col\">\n                                                        <ion-icon class=\"ss-stats-ico modified\" name=\"hammer-outline\"></ion-icon>\n                                                    </ion-col>\n                                                    <ion-col size=\"10\" class=\"sheriff-col\">\n                                                        <div class=\"ss-stats-txt modified\">{{doneS.sModified}}</div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-comments-row\">\n                                                    <ion-col size=\"12\" class=\"sheriff-col comments-col\">\n                                                        <div *ngIf=\"doneS.nCommCount>0\" class=\"doneshift-comment-outter-wrapper showhide-wrapper\">\n                                                            <div (click)=\"doneShiftShowComments()\" class=\"doneshift-comment-heading-topper ion-activatable ripple-parent\">\n                                                                <ion-icon class=\"doneshift comment-heading-ico\" name=\"chatbox\"></ion-icon>\n                                                                <div class=\"doneshift-comment-heading-label\">Comments</div>\n                                                                <div class=\"doneshift-comment-heading-count-val\">{{doneS.nCommCount}}</div>\n                                                                <ion-ripple-effect></ion-ripple-effect>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-warnings-row\">\n                                                    <ion-col size=\"12\" class=\"sheriff-col warnings-col\">\n                                                        <div *ngIf=\"doneS.nWarnCount>0\" class=\"doneshift-warning-outter-wrapper showhide-wrapper\">\n                                                            <div (click)=\"doneShiftShowWarnings()\" class=\"doneshift-warning-heading-topper ion-activatable ripple-parent\">\n                                                                <ion-icon class=\"doneshift warning-heading-ico\" name=\"warning\"></ion-icon>\n                                                                <div class=\"doneshift-warning-heading-label\">Warnings</div>\n                                                                <div class=\"doneshift-warning-heading-count-val\">{{doneS.nWarnCount}}</div>\n                                                                <ion-ripple-effect></ion-ripple-effect>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                            <div *ngIf=\"doneS.MatchedByTimesheet===0\" class=\"done-shift-missing-ribbon\"><span>MISSING</span></div>\n                            <div *ngIf=\"doneS.MatchedByTimesheet>0\" class=\"done-shift-completed-ribbon\"><span>COMPLETED</span></div>\n                            <div class=\"display-doneshift-box-shadow\"></div>\n                        </div>\n                        <!-- END DISPLAY SINGLE DONE SHIFT ITEM -->\n                        <div *ngIf=\"hasLoaded&&sSTotalItems!==0&&!sSlider.isEndSlide&&!doneSIsShowing\" [ngClass]=\"{'ss-nav-arrow-to-bottom':sSInitComplete===true&&sSCurrentIndex!==null&&sSlider.slidesControls[sSCurrentIndex].show}\" class=\"currentshifts-div arrow-fade-div right-arrow-fade-div\">\n                            <div class=\"sheriff-slider-nav-arrow-wrapper forward-arrow-outter-wrapper shiftsslider\">\n                                <div (click)=\"sSNext()\" class=\"sheriff-slider-nav-arrow-wrapper forward-arrow-inner-wrapper shiftsslider ion-activatable ripple-parent\">\n                                    <ion-icon class=\"sheriff-shiftsslider-nav-arrow-ico forward\" name=\"caret-forward\"></ion-icon>\n                                    <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- PENDING SHIFTS SLIDER PAGINATION -->\n        <div *ngIf=\"hasLoaded&&myWeekPagReady\" class=\"shiftslider-pagination-grid-outter-wrapper\">\n            <ion-grid class=\"sheriff-grid shiftslider-pagination-grid\">\n                <ion-row class=\"sheriff-row shiftslider-pagination-row\">\n                    <ion-col size=\"7\" class=\"sheriff-col shiftslider-pagination-col bullets-col\">\n                        <ion-grid class=\"sheriff-grid daybullets-grid\">\n                            <ion-row *ngIf=\"!hasLoaded\" class=\"sheriff-row daybullets-row notloaded-row\">\n                                <ion-col size=\"12\" class=\"sheriff-col day-bullets-col not-loaded-col\">\n                                    <div class=\"value-is-loading-wrapper\">\n                                        <ion-spinner duration=\"250\" class=\"sheriff-spinner v-is-loading-spinner\"></ion-spinner>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class=\"sheriff-row daybullets-row\">\n                                <ion-col *ngFor=\"let sSDay of sSWeek;let i = index\" [ngClass]=\"{'gotshift-col':sSDay.isshift===true,'noshift-col':sSDay.isshift===false}\" class=\"sheriff-col daybullets-col {{sSDay.sn}}-col animDel-{{i}}00 animDur-250  animate__fadeIn animate__fast\">\n                                    <div (click)=\"sSGotoShift(sSDay.isshift,sSDay.si)\" class=\"daybullets-touch-wrapper {{sSDay.sn}} ion-activatable ripple-parent\">\n                                        <div [ngClass]=\"{'ss-label-active':sSDay.si===sSCurrentIndex&&!doneSIsShowing,'ss-label-istoday':sSDay.tonow==='T'&&sSDay.si!==sSCurrentIndex,'ss-label-nots':sSDay.tonow==='B'&&sSDay.nots&&sSDay.si!==sSCurrentIndex}\" class=\"dayb-div wdayname-label-txt {{sSDay.sn}}\">{{sSDay.ln.substring(0,3)}}</div>\n                                        <div [ngClass]=\"{'ss-bullet-active':sSDay.si===sSCurrentIndex&&!doneSIsShowing,'ss-bullet-notactive':sSDay.si!==sSCurrentIndex}\" class=\"dayb-div daycal-wrapper {{sSDay.sn}} is{{sSDay.tonow}}\">\n                                            <div *ngIf=\"sSDay.si!==sSCurrentIndex||(sSDay.si===sSCurrentIndex&&doneSIsShowing)\" class=\"dayb-div wdatetxt {{sSDay.sn}}\">\n                                                <span *ngIf=\"!(sSDay.tonow==='B'&&sSDay.isshift)&&!isRefreshing\" [ngClass]=\"{'ss-label-active':!doneSIsShowing&&sSDay.si===sSCurrentIndex,'ss-label-istodaydate':sSDay.tonow==='T'&&sSDay.si!==sSCurrentIndex}\" class=\"dayb-span wdatetxt\">{{sSDay.day}}</span>\n                                                <span *ngIf=\"sSDay.tonow==='B'&&sSDay.isshift&&!isRefreshing\" class=\"dayb-span wdatetxt\">\n                                                  <ion-icon *ngIf=\"!sSDay.nots&&!sSDay.xtra\" class=\"dayb-done-checkmark-ico\" name=\"checkmark-outline\"></ion-icon>\n                                                  <ion-icon *ngIf=\"sSDay.nots&&!sSDay.xtra\" class=\"dayb-done-alert-ico\" name=\"alert-outline\"></ion-icon>\n                                                  <ion-icon *ngIf=\"sSDay.xtra&&!sSDay.nots\" class=\"dayb-done-xtra-ico\" name=\"add-outline\"></ion-icon>\n                                                </span>\n                                                <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                            </div>\n                                            <div *ngIf=\"sSDay.si===sSCurrentIndex&&!doneSIsShowing\" class=\"dayb-div wdatetxt {{sSDay.sn}}\">\n                                                <div class=\"sheriff-uparrow-anim-wrapper shifts-pagination\">\n                                                    <div id=\"sheriffarrowAnim\">\n                                                        <div class=\"sheriffarrowSliding\">\n                                                            <div class=\"sheriffarrow sa1\"></div>\n                                                        </div>\n                                                        <div class=\"sheriffarrowSliding sheriffdelay1\">\n                                                            <div class=\"sheriffarrow sa2\"></div>\n                                                        </div>\n                                                        <div class=\"sheriffarrowSliding sheriffdelay2\">\n                                                            <div class=\"sheriffarrow sa3\"></div>\n                                                        </div>\n                                                        <div class=\"sheriffarrowSliding sheriffdelay3\">\n                                                            <div class=\"sheriffarrow sa4\"></div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col shiftslider-pagination-col fraction-col animDel-700 animDur-250  animate__fadeIn animate__fast\">\n                        <div class=\"ss-pag-frac-outter-wrapper\">\n                            <div *ngIf=\"!doneSIsShowing\" class=\"ss-pag-frac-inner-wrapper\">\n                                <div *ngIf=\"hasLoaded&&sSTotalItems>0&&!isRefreshing\" [ngClass]=\"{'ssfrac-last':sSCurrent===sSTotalItems,'ssfrac-first':sSCurrent===1,'ssfrac-std':sSCurrent!==sSTotalItems&&sSCurrent!==1}\" class=\"ss-pag-frac-val current\">\n                                    <span *ngIf=\"!isRefreshing\">{{sSCurrent}}</span>\n                                    <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                </div>\n                                <div *ngIf=\"!(sSTotalItems>0)&&!isRefreshing\" class=\"ss-pag-frac-val no-shifts\">\n                                    <span *ngIf=\"!isRefreshing\">-</span>\n                                    <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                </div>\n                                <div class=\"ss-pag-frac-slash\"></div>\n                                <div class=\"ss-pag-frac-val total\">\n                                    <span *ngIf=\"!isRefreshing\">{{sSTotalItems}}</span>\n                                    <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"4\" class=\"sheriff-col shiftslider-pagination-col info-col animDel-800 animDur-250  animate__flipInX\">\n                        <div class=\"ss-pag-info-outter-wrapper\">\n                            <div class=\"ss-pag-info-cdown-div title-wrapper\">\n                                <span *ngIf=\"!doneSIsShowing&&sSTotalItems!==0\">SHIFT STARTS:</span>\n                                <span *ngIf=\"doneSIsShowing&&doneSTSData\">SHIFT ENDED:</span>\n                                <div *ngIf=\"!doneSIsShowing&&sSTotalItems===0\" class=\"no-upcoming-timer\">-</div>\n                                <div *ngIf=\"doneSIsShowing&&!doneSTSData\" class=\"no-timesheet-timer\">no timesheet</div>\n                            </div>\n                            <div *ngIf=\"doneSIsShowing&&!doneSTSData\" class=\"ss-cdown-shiftended-value-notimesheet-wrapper\">not known</div>\n                            <div *ngIf=\"doneSIsShowing&&doneSTSData\" class=\"ss-cdown-shiftended-value-wrapper\">\n                                <!-- YEARS -->\n                                <span *ngIf=\"doneSAgoTime.years>0\" class=\"doneshiftago-val-wrapper years\"><span class=\"doneshiftago-value years\">{{doneSAgoTime.years}}</span><span class=\"doneshiftago-suffix years long\">year<span *ngIf=\"doneSAgoTime.years>1\">s</span></span>\n                                </span>\n                                <!-- MONTHS -->\n                                <span *ngIf=\"doneSAgoTime.months>0\" class=\"doneshiftago-val-wrapper months\"><span class=\"doneshiftago-value months\">{{doneSAgoTime.months}}</span><span class=\"doneshiftago-suffix months long\">month<span *ngIf=\"doneSAgoTime.months>1\">s</span></span>\n                                </span>\n                                <!-- WEEKS -->\n                                <span *ngIf=\"doneSAgoTime.weeks>0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper weeks\"><span class=\"doneshiftago-value weeks\">{{doneSAgoTime.weeks}}</span><span class=\"doneshiftago-suffix weeks long\">week<span *ngIf=\"doneSAgoTime.weeks>1\">s</span></span>\n                                </span>\n                                <!-- DAYS -->\n                                <span *ngIf=\"doneSAgoTime.days>0&&doneSAgoTime.weeks===0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper days\"><span class=\"doneshiftago-value days\">{{doneSAgoTime.days}}</span><span class=\"doneshiftago-suffix days long\">day<span *ngIf=\"doneSAgoTime.days>1\">s</span></span>\n                                </span>\n                                <!-- HOURS -->\n                                <span *ngIf=\"doneSAgoTime.hours>0&&doneSAgoTime.days===0&&doneSAgoTime.weeks===0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper hours\"><span class=\"doneshiftago-value hours\">{{doneSAgoTime.hours}}</span>\n                                <span class=\"doneshiftago-suffix hours long\">hr<span *ngIf=\"doneSAgoTime.hours>1\">s</span></span>\n                                </span>\n                                <!-- MINUTES -->\n                                <span *ngIf=\"doneSAgoTime.minutes>0&&doneSAgoTime.hours===0&&doneSAgoTime.days===0&&doneSAgoTime.weeks===0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper minutes\"><span class=\"doneshiftago-value minutes\">{{doneSAgoTime.minutes}}</span>\n                                <span class=\"doneshiftago-suffix minutes long\">min<span *ngIf=\"doneSAgoTime.minutes>1\">s</span></span>\n                                </span>\n                                <!-- AGO TXT -->\n                                <span class=\"doneshiftago ago-suffix-txt\">ago</span>\n                            </div>\n                            <div *ngIf=\"CDReady&&!doneSIsShowing\" class=\"ss-pag-info-cdown-div values-wrapper  animate__flipInX animate__fast\">\n                                <!-- DAYS -->\n                                <span *ngIf=\"sSCD.d>0\" class=\"sscd-int-wrapper days\"><span class=\"sscd-val days\">{{sSCD.d}}</span><span class=\"sscd-colon\">d</span></span>\n                                <!-- HOURS -->\n                                <span *ngIf=\"sSCD.h>0\" class=\"sscd-int-wrapper hours\"><span class=\"sscd-val hours\">{{sSCD.h}}</span><span class=\"sscd-colon\">h</span></span>\n                                <!-- MINS -->\n                                <span *ngIf=\"sSCD.m>0\" class=\"sscd-int-wrapper mins\">\n                                  <span [ngStyle]=\"{'color':sSCD.d<1&&sSCD.h<1?'var(--ion-color-danger)':'#eee'}\" class=\"sscd-val mins\"><span [ngStyle]=\"{'color':sSCD.d<1&&sSCD.h<1?'var(--ion-color-danger)':'#eee'}\" *ngIf=\"sSCD.m<10&&CDReady\">0</span>{{sSCD.m}}</span>\n                                <span [ngStyle]=\"{'color':sSCD.d<1&&sSCD.h<1?'var(--ion-color-danger)':'#aaa'}\" class=\"sscd-colon\">m</span>\n                                </span>\n                                <!-- SECONDS -->\n                                <span *ngIf=\"sSCD.d===0&&sSCD.h===0\" [ngStyle]=\"{'color':sSCD.h<=1?'var(--ion-color-danger)':'#eee'}\" class=\"sscd-val secs\">\n                                  <span [ngStyle]=\"{'color':sSCD.h<=1?'var(--ion-color-danger)':'#eee'}\" *ngIf=\"sSCD.s<10&&CDReady\">0</span>{{sSCD.s}}</span>\n                                <span [ngStyle]=\"{'color':sSCD.h<=1?'var(--ion-color-danger)':'#aaa'}\" *ngIf=\"sSCD.m<=0&&CDReady\" class=\"sscd-colon\">s</span>\n                            </div>\n                            <div *ngIf=\"!hasLoaded||sSCD===null&&!doneSIsShowing\" class=\"ss-pag-info-cdown-div values-wrapper no-next-shift\">\n                                <ion-icon class=\"sscd-noshift-ico\" name=\"ellipsis-horizontal\"></ion-icon>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- HISTORY HEADER -->\n        <div class=\"sheriff-history-statsbar-main-wrapper\">\n            <ion-grid class=\"sheriff-grid history-statsbar-grid\">\n                <ion-row class=\"sheriff-row history-statsbar-row heading-row\">\n                    <ion-col size=\"6\" class=\"sheriff-col history-statsbar-col heading-col\">\n                        <div class=\"history-statsbar-heading-wrapper\">\n                            completed\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col publisher\">\n                        <ion-icon class=\"doneshifts-div-line-ico publisher-ico head-ico\" name=\"person-add-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col comments\">\n                        <ion-icon class=\"doneshifts-div-line-ico comments-ico head-ico\" name=\"chatbox-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col warnings\">\n                        <ion-icon class=\"doneshifts-div-line-ico warnings-ico head-ico\" name=\"warning-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col swaps\">\n                        <ion-icon class=\"doneshifts-div-line-ico swap-ico head-ico\" name=\"swap-horizontal-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col history-statsbar-col totop-col\">\n                        <ion-button (click)=\"scrollHistoryTop()\" *ngIf=\"showTTopBtn\" class=\"sheriff-btn shifts-history-btn totopbtn  animDur animate__slideInUp\">\n                            <ion-icon [ngStyle]=\"{'color':scrollingTT?'var(--ion-color-success)':'#848484'}\" name=\"chevron-up\" class=\"shifts-history-totop-btn-ico\"></ion-icon>\n                            <div [ngStyle]=\"{'color':scrollingTT?'var(--ion-color-success)':'#848484'}\" class=\"shifts-history-totop-btn-text\">top</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row history-statusbar-row divline-row\">\n                    <ion-col class=\"sheriff-col history-statusbar-col heading-col\">\n                        <div class=\"history-statsbar-heading-divider\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n    <!-- ION/TAB-CONTENT - START -->\n    <ion-content [scrollEvents]=\"true\" (ionScroll)=\"historyScroll($event)\" class=\"sheriff-content tab-content shifts\" #historyContent (ionScrollStart)=\"disableRefresher(true)\" (ionScrollEnd)=\"disableRefresher(false)\">\n        <div slot=\"fixed\" class=\"sheriff-subheader-shadow-div\"></div>\n        <!-- MAIN LIST WRAPPER -->\n        <div class=\"sheriff-tabcontent-itemlistcontent-wrapper shifts\">\n            <!-- NO ITEMS FOUND CARD -->\n            <ion-card *ngIf=\"noShiftItems\" class=\"sheriff-card tab-list-card no-items-card\">\n                <div class=\"sheriff-no-items-card-wrapper\">No {{dbDataTbl}} Items Found</div>\n            </ion-card>\n            <!-- V-SCROLL LIST -->\n            <ion-list *ngIf=\"!noShiftItems\" class=\"sheriff-tablist tabshifts\">\n                <ion-virtual-scroll *ngIf=\"hasLoaded\" [items]=\"shiftItems\" [headerFn]=\"calHeaderGroups\" approxItemHeight=\"42\" approxHeaderHeight=\"25\" class=\"sheriff-vscroll dbitem-vscroll doneshifts\">\n                    <ion-item-divider [hidden]=\"header.week===null&&header.month===null\" *virtualHeader=\"let header\" class=\"sheriff-list-item-divider donerosters-weekheader\">\n                        <ion-grid class=\"sheriff-grid item-list-divider-grid donerosters\">\n                            <ion-row *ngIf=\"header.month!==null\" class=\"sheriff-divider-row donerosters-month\">\n                                <ion-col class=\"sheriff-divider-col donerosters-month\">{{header.month}}</ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"header.week!==null\" class=\"sheriff-divider-row donerosters-week\">\n                                <ion-col class=\"sheriff-divider-col donerosters-week\">{{header.week}}</ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item-divider>\n                    <!-- ITEM START -->\n                    <ion-item *virtualItem=\"let item; let i = index\" [ngClass]=\"{'doneshift-showingdetail-dim-not-selected':doneSIsShowing&&doneSId!==item.Id,'doneshift-showingdetail-hl-selected':doneSIsShowing&&doneSId===item.Id}\" class=\"sheriff-item tablist-item doneshifts-item doneshifts-index-{{i}}\"\n                        id=\"id-doneroster-{{item.Id}}\">\n                        <ion-grid class=\"sheriff-grid list-item-grid doneshifts-item-grid\">\n                            <ion-row class=\"sheriff-row list-item-row doneshifts-item-row maingrid-row\">\n                                <div (click)=\"showShiftDetail(item.Id,i)\" [ngClass]=\"{'doneshift-showingdetail':doneSId===item.Id}\" class=\"doneshifts open-doneshift-outter-wrapper ion-activatable ripple-parent\">\n                                    <ion-col size=\"6\" class=\"sheriff-col list-item-col doneshifts-col\">\n                                        <div class=\"doneshifts-div-line date-area-dl\">\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts date-value\">{{item.nDate}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts rosterid-value\">#{{item.Id}}</span>\n                                            <ion-skeleton-text *ngIf=\"isRefreshing\" animated style=\"width:75%\"></ion-skeleton-text>\n                                        </div>\n                                        <div class=\"doneshifts-div-line startend-ttime-dl\">\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts areaat-sign\">@</span>\n                                            <span *ngIf=\"!isRefreshing\" [ngStyle]=\"{'color':workColor,'filter':incBright?'brightness(2.5)':'brightness(1)'}\" class=\"doneshifts ccode\">{{item.nCompanyName}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts startend-value stime\">{{item.nStart}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts startend-value\"><ion-icon class=\"doneshifts startend-value ico\" name=\"caret-forward\"></ion-icon></span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts startend-value etime\">{{item.nEnd}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts ttime-value\">\n                                            <span  *ngIf=\"!isRefreshing\" class=\"doneshifts ttbrack\">(</span>\n                                            <span *ngIf=\"!isRefreshing&&item.nTotalTime.hours>0\" class=\"doneroster-detail-tt-value hrs\">{{item.nTotalTime.hours}}</span>\n                                            <span *ngIf=\"!isRefreshing&&item.nTotalTime.minutes>0\" class=\"doneroster-detail-tt-value mins\">:{{item.nTotalTime.minutes}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts ttbrack\">)</span></span>\n                                            <span *ngIf=\"!isRefreshing&&item.MatchedByTimesheet===0\" class=\"doneshifts notsalert-span\">-<ion-icon class=\"doneshifts-notsalert-ico\" name=\"stopwatch\"></ion-icon>?</span>\n                                            <ion-skeleton-text *ngIf=\"isRefreshing\" animated style=\"width:70%\"></ion-skeleton-text>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col publisher-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line publisher-dl value\">\n                                            <span style=\"color:#848484\" class=\"doneshifts publisher-value\">{{item.nPublisher}}</span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col comments-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line comments-dl value\">\n                                            <span [ngStyle]=\"{'color':item.nCommCount>0?'var(--ion-color-success-48)':'#848484'}\" class=\"doneshifts comments-value\">\n                                            <span *ngIf=\"item.nCommCount>0\" class=\"doneshifts comments-value hasvalue\">{{item.nCommCount}}</span>\n                                            <span *ngIf=\"item.nCommCount===0\" class=\"doneshifts nilvalue\">-</span>\n                                            </span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col warnings-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line warnings-dl value\">\n                                            <span [ngStyle]=\"{'color':item.nWarnCount>0?'var(--ion-color-danger-48)':'#848484'}\" class=\"doneshifts warnings-value\">\n                                              <span *ngIf=\"item.nWarnCount>0\" class=\"doneshifts warnings-value hasvalue\">{{item.nWarnCount}}</span>\n                                            <span *ngIf=\"item.nWarnCount===0\" class=\"doneshifts nilvalue\">-</span>\n                                            </span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col swap-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line swap-dl value\">\n                                            <span class=\"doneshifts swap-value\">\n                                            <span style=\"color:#848484\" *ngIf=\"item.SwapStatus===0||item.SwapStatus===6\" class=\"doneshifts swap-value nilvalue\">-</span>\n                                            <span *ngIf=\"item.SwapStatus===1\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-ico pendingout-1\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===2\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-value pendingin-2\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===3\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-value pendinginout-3\"><ion-icon name=\"code-working-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===4\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-value pendingapproval-4\"><ion-icon name=\"ellipsis-horizontal-circle-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===5\" style=\"color:var(--ion-color-success-68)\" class=\"doneshifts swap-value approved-5\"><ion-icon name=\"ellipsis-horizontal-circle-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===7\" style=\"color:var(--ion-color-danger-68)\" class=\"doneshifts swap-value declined-7\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n                                            </span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                                <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col opents-col\">\n                                    <div *ngIf=\"item.MatchedByTimesheet>0\" (click)=\"gotoTimesheet(item.Id,item.MatchedByTimesheet)\" [ngStyle]=\"{'border-color':gotoTSId===item.Id?'var(--ion-color-success-68)':'#262626'}\" class=\"doneshifts-goto-ts-ico-wrapper ion-activatable ripple-parent\">\n                                        <ion-icon [ngStyle]=\"{'color':gotoTSId===item.Id?'var(--ion-color-success)':'var(--ion-color-primary-68)'}\" class=\"sheriff-ico doneshifts-goto-ts-ico clock\" name=\"stopwatch-outline\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                    <div style=\"border-color:#262626\" *ngIf=\"item.MatchedByTimesheet===0\" class=\"doneshifts-goto-ts-ico-wrapper\">\n                                        <ion-icon style=\"color:var(--ion-color-danger-68)\" class=\"sheriff-ico doneshifts-missingts-alert-ico\" name=\"alert-circle-outline\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col opendoneros-col\">\n                                    <div (click)=\"closeShiftDetail()\" [ngClass]=\"{'doneshift-open':doneSId===item.Id}\" class=\"doneshifts-close-detail-ico-wrapper ion-activatable ripple-parent\">\n                                        <ion-icon *ngIf=\"doneSId===item.Id\" [ngStyle]=\"{'color':doneSId===item.Id?'var(--ion-color-danger)':'var(--ion-color-primary-68)'}\" class=\"sheriff-ico doneshifts-close-detail-ico\" name=\"close\"></ion-icon>\n                                        <ion-icon *ngIf=\"doneSId!==item.Id\" [ngStyle]=\"{'color':doneSId!==item.Id?'var(--ion-color-primary-68)':'var(--ion-color-danger)'}\" class=\"sheriff-ico doneshifts-show-detail-ico\" name=\"chevron-forward\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item>\n                    <!-- ITEM END -->\n                </ion-virtual-scroll>\n            </ion-list>\n            <ion-card *ngIf=\"endOfList\" class=\"sheriff-card tab-list-card endoflist-card  animate__zoomIn animate__fast\">\n                <div class=\"sheriff-endoflist-card-wrapper\">End of Selected Range</div>\n            </ion-card>\n            <!-- I-SCROLL FEEDER -->\n            <ion-infinite-scroll style=\"opacity:0!important\" disabled=true class=\"sheriff-iscroll shifts\" threshold=\"25%\" (ionInfinite)=\"feedItems($event)\">\n                <ion-infinite-scroll-content [ngStyle]=\"{'opacity':hasLoaded===true?'1':'0'}\" loadingSpinner=null>\n                    <ion-row class=\"sheriff-row inf-loading-row\">\n                        <ion-col class=\"sheriff-col inf-loading-col spinleft\" size=\"4\">\n                            <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner\" name=\"dots\"></ion-spinner>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col inf-loading-col textmiddle\" size=\"4\">\n                            loading\n                            <div class=\"info-load-batch-wrapper\"><span class=\"inf-load-batch-start\">{{batchStart}}</span><span class=\"inf-load-batch-hyphen\">-</span><span class=\"inf-load-batch-end\">{{batchEnd}}</span></div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col inf-loading-col spinright\" size=\"4\">\n                            <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner right\" name=\"dots\"></ion-spinner>\n                        </ion-col>\n                    </ion-row>\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </ion-content>\n</ion-content>\n<!-- ION FAB BUTTON -->\n<ion-fab class=\"sheriff-fader-fab tabshifts\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <div class=\"sheriff-fade-nav-btn-wrapper tabshifts ion-activatable ripple-parent\">\n        <img class=\"sheriff-fade-nav-btn-img\" src=\"../../../assets/img/sheriff-fadenavbtn.png\">\n        <ion-ripple-effect></ion-ripple-effect>\n    </div>\n</ion-fab>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabshifts_tabshifts_module_ts-es2015.js.map