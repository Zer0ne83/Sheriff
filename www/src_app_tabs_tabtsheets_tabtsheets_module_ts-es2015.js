(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_tabs_tabtsheets_tabtsheets_module_ts"],{

/***/ 61067:
/*!******************************************************!*\
  !*** ./src/app/tabs/tabtsheets/tabtsheets.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTSheetsPageModule": function() { return /* binding */ TabTSheetsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../directives/directives.module */ 78434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _tabtsheets_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabtsheets.page */ 79128);









const routes = [
    {
        path: '',
        component: _tabtsheets_page__WEBPACK_IMPORTED_MODULE_1__.TabTSheetsPage
    }
];
let TabTSheetsPageModule = class TabTSheetsPageModule {
};
TabTSheetsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot(),
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule
        ],
        declarations: [_tabtsheets_page__WEBPACK_IMPORTED_MODULE_1__.TabTSheetsPage]
    })
], TabTSheetsPageModule);



/***/ }),

/***/ 79128:
/*!****************************************************!*\
  !*** ./src/app/tabs/tabtsheets/tabtsheets.page.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTSheetsPage": function() { return /* binding */ TabTSheetsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabtsheets_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabtsheets.page.html */ 86564);
/* harmony import */ var _tabtsheets_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabtsheets.page.scss */ 19916);
/* harmony import */ var _services_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/sync.service */ 43395);
/* harmony import */ var _modals_detail_tsheet_detail_tsheet_add_tsheet_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../modals/detail/tsheet-detail/tsheet-add/tsheet-add.page */ 11628);
/* harmony import */ var _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/datetime.service */ 12826);
/* harmony import */ var _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/deputy.service */ 22092);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/detail.service */ 52153);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/sqlite.service */ 90636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_baseDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/baseDB */ 96414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _popovers_datepresets_datepresets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../popovers/datepresets/datepresets.component */ 51568);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/events.service */ 80106);
/* harmony import */ var _modals_daterange_daterange_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../modals/daterange/daterange.page */ 34476);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var _modals_detail_tsheet_detail_tsheet_detail_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../modals/detail/tsheet-detail/tsheet-detail.page */ 72348);
/* harmony import */ var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor/dialog */ 63540);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 50820);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 12297);
/* harmony import */ var src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/fairwork.service */ 93405);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);























const myls = localStorage;
////////////////////////////////////////////////////////////////////////////////////////
let TabTSheetsPage = class TabTSheetsPage {
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(logger, sqlServ, dS, dT, router, route, modalCtrl, popCtrl, evServ, storeServ, deputy, platform, syncServ, fwServ) {
        this.logger = logger;
        this.sqlServ = sqlServ;
        this.dS = dS;
        this.dT = dT;
        this.router = router;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.popCtrl = popCtrl;
        this.evServ = evServ;
        this.storeServ = storeServ;
        this.deputy = deputy;
        this.platform = platform;
        this.syncServ = syncServ;
        this.fwServ = fwServ;
        ////////////////////////////////////////////////////////////////////////////////////////
        // Passed Nav Data
        this.hasNavData = false;
        this.navDataId = 0;
        this.tsForOpen = 0;
        // Tab/Page gVs
        this.hasLoaded = false;
        this.tabKey = 'tsheets';
        this.drModalOpts = { animated: false, showBackdrop: true, backdropDismiss: true, cssClass: 'daterange-modal-class', component: _modals_daterange_daterange_page__WEBPACK_IMPORTED_MODULE_12__.DateRangePage, keyboardClose: true };
        this.tsDetailModalOpts = { animated: false, showBackdrop: false, backdropDismiss: false, cssClass: 'tsheet-detail-modal-class', component: _modals_detail_tsheet_detail_tsheet_detail_page__WEBPACK_IMPORTED_MODULE_13__.TSheetDetailPage, keyboardClose: true };
        this.tsDetailModalOpen = false;
        this.addNewTSModalOpts = { animated: false, showBackdrop: false, backdropDismiss: false, cssClass: 'tsheet-detail-modal-class', component: _modals_detail_tsheet_detail_tsheet_add_tsheet_add_page__WEBPACK_IMPORTED_MODULE_3__.TSheetAddPage, keyboardClose: true };
        this.addNewTSModalOpen = false;
        this.datePresetsPopOpts = { animated: false, cssClass: 'sheriff-datepresets-popover', component: 'div' };
        this.workAvatar = myls.getItem('workAvatar');
        // Show Income 
        this.showIncome = true;
        // Edit Mode
        this.editMode = false;
        this.eMConfirmOpen = false;
        this.eMIsDeleting = false;
        this.preventRefreshPull = false;
        this.progCirc = { responsive: true, showTitle: false, showSubtitle: false, showUnits: false, percent: 0, radius: 56, outerStrokeWidth: 4, showInnerStroke: false, outerStrokeColor: '#FF9800', animation: true, backgroundPadding: 2, animationDuration: 250, };
        this.refreshProgPerc = 0;
        // Summary Bar -------------------
        this.showSearchBar = false;
        this.drModalOpen = false;
        this.dpPopOpen = false;
        this.workAreas = [];
        this.listOpts = null;
        this.toDateIsToday = true;
        this.isCustomRange = false;
        // DB Items ----------------------
        this.dbTblName = _services_baseDB__WEBPACK_IMPORTED_MODULE_9__.List2DBTblMap[(this.router.url.split('/')[this.router.url.split('/').length - 1])];
        this.dbHasTbl = this.dS.getUDBTables().includes(this.dbTblName);
        // Whole List Items --------------
        this.initRes = [];
        this.initList = [];
        this.endOfList = false;
        this.batchLimit = 20;
        this.batchOffset = 0;
        this.batchStart = 0;
        this.batchEnd = 20;
        // List Order
        this.orderBy = 'StartTime';
        this.didSwapOrder = false;
        this.listItms = [];
        this.sGroupIndex = 0;
        this.allHrsTotal = 0;
        this.allIncomeTotal = 0;
        this.allGroupedHrsTotal = 0;
        this.allGroupedIncTotal = 0;
        // Refresh Items
        this.newItems = [];
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
        ////////////////////////////////////////////////////////////////////////////////////////
        this.groupTotals = (record, recordIndex, records) => {
            if (recordIndex + 1 !== records.length) {
                const nextD = new Date(records[recordIndex + 1].Date);
                const thisD = new Date(record.Date);
                this.allHrsTotal += records[recordIndex].TotalTime;
                this.allIncomeTotal += records[recordIndex].nIncome.t;
                if (!this.dT.isSW(nextD, thisD)) {
                    let weekTtlCount = 0;
                    let weekTtlIncCount = 0;
                    const gSI = this.sGroupIndex;
                    const gEI = recordIndex + 1;
                    for (let i = gSI; i < gEI; i++) {
                        this.allGroupedHrsTotal += records[i].TotalTime;
                        this.allGroupedIncTotal += records[i].nIncome.t;
                        weekTtlCount += records[i].TotalTime;
                        weekTtlIncCount += records[i].nIncome.t;
                    }
                    ;
                    this.sGroupIndex = recordIndex + 1;
                    const weekTtlMins = weekTtlCount * 60;
                    const weekWholeHrs = Math.floor(weekTtlMins / 60);
                    const weekRemainMins = Math.round(weekTtlMins - (weekWholeHrs * 60));
                    return { t: { h: weekWholeHrs.toFixed(0), m: weekRemainMins.toFixed(0) }, i: weekTtlIncCount.toFixed(0) };
                }
            }
            else {
                const thisRecHrs = records[recordIndex].TotalTime;
                const thisRecInc = records[recordIndex].nIncome.t;
                const balLWeekHrs = (this.allHrsTotal - this.allGroupedHrsTotal) + thisRecHrs;
                const balLWeekInc = (this.allIncomeTotal - this.allGroupedIncTotal) + thisRecInc;
                this.allHrsTotal = 0;
                this.allGroupedHrsTotal = 0;
                this.allIncomeTotal = 0;
                this.allGroupedIncTotal = 0;
                const weekTtlMins = balLWeekHrs * 60;
                const weekWholeHrs = Math.floor(weekTtlMins / 60);
                const weekRemainMins = Math.round(weekTtlMins - (weekWholeHrs * 60));
                return { t: { h: weekWholeHrs.toFixed(0), m: weekRemainMins.toFixed(0) }, i: balLWeekInc.toFixed(0) };
            }
        };
        this.route.queryParams.subscribe(pData => {
            if (Object.keys(this.router.getCurrentNavigation().extras).includes('state')) {
                this.hasNavData = true;
                this.navDataOrigin = this.router.getCurrentNavigation().extras.state.origin;
                this.navDataId = this.router.getCurrentNavigation().extras.state.id;
            }
            else {
                this.hasNavData = false;
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    openTSFromNavData(tsId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|openTSFromNavData] (' + tsId + ')...');
            this.tsForOpen = 0;
            let inList = false;
            let tsO;
            const initLObIndex = this.listItms.findIndex(ts => ts.Id === tsId);
            if (initLObIndex > 0) {
                inList = true;
                tsO = this.listItms[initLObIndex];
                this.tsForOpen = tsId;
            }
            else {
                inList = false;
                const tsORaw = yield this.sqlServ.getSingleTimesheet(tsId);
                tsO = yield this.formatTSheet(tsORaw);
            }
            ;
            setTimeout(() => {
                if (inList) {
                    this.vScrollTSheets.positionForItem(initLObIndex).then(tsPos => { const adjustPos = tsPos - 72; console.log(adjustPos); this.tsheetsContent.scrollToPoint(0, adjustPos, 500); });
                }
                ;
                setTimeout(() => { this.openDetail(tsO); }, 750);
            }, 1000);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.logger.info('[TabTSheets|ngOnInit] ()...');
        this.platform.ready().then(() => { setTimeout(() => this.hasLoaded = true); this.doInitRefresh('init'); });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doInitRefresh(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|doReInitFresh] (' + mode + ')...');
            this.initFetchData();
            if (mode === 'refresh' || mode === 'init') {
                if (this.isRefreshing) {
                    this.refreshProgPerc = 0;
                    this.refreshProgPerc += 10;
                    this.headerProgress('manual', 'change', this.refreshProgPerc);
                    this.evServ.subscribe('refreshTSProg', stage => {
                        if (stage === 'getapi') {
                            this.refreshProgPerc += 20;
                            this.headerProgress('manual', 'change', this.refreshProgPerc);
                        }
                        ;
                        if (stage === 'diffcheck') {
                            this.refreshProgPerc += 20;
                            this.headerProgress('manual', 'change', this.refreshProgPerc);
                        }
                        ;
                        if (stage === 'insertupload') {
                            this.refreshProgPerc += 20;
                            this.headerProgress('manual', 'change', this.refreshProgPerc);
                        }
                        ;
                        if (stage === 'render') {
                            this.refreshProgPerc += 20;
                            this.headerProgress('manual', 'change', this.refreshProgPerc);
                        }
                        ;
                    });
                }
                ;
                const newIRes = yield this.syncServ.doTSheetsSync(mode);
                if (newIRes.length > 0) {
                    this.newItems = newIRes;
                    const iArrs = ['initRes', 'initList', 'listItms'];
                    for (let i = 0; i < iArrs.length; i++) {
                        this[iArrs[i]] = [];
                    }
                    ;
                    this.batchOffset = 0;
                    this.sGroupIndex = 0;
                    this.allHrsTotal = 0;
                    this.allIncomeTotal = 0;
                    this.allGroupedHrsTotal = 0;
                    this.allGroupedIncTotal = 0;
                    this.prevTSDate = null;
                    this.logger.info('[TabTSheets|doReInitRefresh] (Refresh): Updated/Added ' + newIRes.length + ' TSheet Items!');
                    this.evServ.publish('refreshTSProg', 'render');
                    this.evServ.publish('doInitFetchData', true);
                }
                else {
                    this.logger.info('[TabTSheets|doReInitRefresh] (Refresh): No New TSheet Items Found');
                    if (this.isRefreshing) {
                        this.evServ.destroy('refreshTSProg');
                        this.refreshProgPerc += 80;
                        this.headerProgress('manual', 'change', this.refreshProgPerc);
                        setTimeout(() => { this.headerProgress('manual', 'finish', null); }, 250);
                    }
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    disableRefresher(togV) { this.preventRefreshPull = togV; }
    ////////////////////////////////////////////////////////////////////////////////////////
    doInitSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () { this.logger.info('[TabTSheets|doInitSync] ()...'); this.syncServ.doTSheetsSync('init'); });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|ionViewWillEnter] ()...');
            const savedShowIncomeOpt = yield this.storeServ.getObject('settingsPayratesOpts');
            if (savedShowIncomeOpt !== null) {
                this.showIncome = savedShowIncomeOpt.show.value;
            }
            else {
                this.showIncome = true;
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidEnter() { this.logger.info('[TabTSheets|ionViewDidEnter] ()...'); this.loadListPrefs(); }
    ////////////////////////////////////////////////////////////////////////////////////////
    toUCase(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
    ////////////////////////////////////////////////////////////////////////////////////////
    loadListPrefs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|loadListPrefs] ()...');
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
            const setListProps = () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                let doStoreSave = false;
                const isOK = (p) => { if (p !== null && p !== undefined && p !== '' && p.length > 0) {
                    return true;
                }
                else {
                    doStoreSave = true;
                    return false;
                } };
                if (isOK(this.listOpts.orderDir)) {
                    this.orderDir = this.listOpts.orderDir;
                }
                else {
                    this.listOpts.orderDir = 'desc';
                    this.orderDir = 'desc';
                }
                ;
                if (isOK(this.listOpts.datePreset)) {
                    this.datePreset = this.listOpts.datePreset;
                }
                else {
                    this.listOpts.datePreset = 'month';
                    this.datePreset = 'month';
                }
                ;
                if (isOK(this.listOpts.datePresetValue)) {
                    this.datePresetValue = this.listOpts.datePresetValue;
                }
                else {
                    this.listOpts.datePresetValue = 'Month';
                    this.datePresetValue = 'Month';
                }
                ;
                if (doStoreSave) {
                    let newListP = yield this.storeServ.getObject(this.deputy.uUK + 'ListPrefs');
                    if (newListP.hasOwnProperty('tsheets')) {
                        newListP.tsheets = this.listOpts;
                    }
                    else {
                        newListP['tsheets'] = this.listOpts;
                    }
                    ;
                    this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', newListP);
                }
            });
            const stdTSListOpts = { datePreset: 'month', datePresetValue: 'Month', orderDir: 'desc' };
            if (this.listOpts !== null) {
                setListProps();
            }
            else {
                const storedListOpts = yield this.storeServ.getObject(this.deputy.uUK + 'ListPrefs');
                if (storedListOpts !== null) {
                    if (storedListOpts.hasOwnProperty('tsheets')) {
                        this.listOpts = storedListOpts.tsheets;
                        setListProps();
                    }
                    else {
                        this.listOpts = stdTSListOpts;
                        setListProps();
                        let newSLO = storedListOpts;
                        newSLO['tsheets'] = stdTSListOpts;
                        this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', newSLO);
                    }
                }
                else {
                    this.listOpts = stdTSListOpts;
                    setListProps();
                    this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', { shifts: null, tsheets: stdTSListOpts });
                }
            }
            const isListen = this.evServ.channels['doInitFetchData'];
            if (isListen) {
                this.evServ.publish('doInitFetchData', true);
            }
            ;
            if (this.hasNavData) {
                this.openTSFromNavData(this.navDataId);
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////  
    initFetchData() {
        this.logger.info('[TabTSheets|initFetchData] (Event) Channel: doInitFetchData [Listening...]');
        this.evServ.subscribe('doInitFetchData', () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.evServ.destroy('doInitFetchData');
            this.batchOffset = 0;
            this.sGroupIndex = 0;
            this.allHrsTotal = 0;
            this.allIncomeTotal = 0;
            this.allGroupedHrsTotal = 0;
            this.allGroupedIncTotal = 0;
            this.prevTSDate = null;
            this.logger.info('[TabTSheets|initFetchData] (Event) Channel: doInitFetchData [TIGGERED!]');
            if (this.dbHasTbl) {
                this.listTtlItms = yield this.sqlServ.getItemCount(this.dbTblName);
                if (this.listTtlItms > 0) {
                    const mmObj = yield this.sqlServ.getTSheetsDateRange();
                    this.minStartTimeUTS = mmObj.min;
                    this.maxStartTimeUTS = mmObj.max;
                    this.minStartTimeDate = this.dT.Dut(this.minStartTimeUTS);
                    this.maxStartTimeDate = this.dT.Dut(this.maxStartTimeUTS);
                    let summaryF;
                    let summaryT;
                    if (this.isCustomRange) {
                        this.btDateStartUTS = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.default)(this.customRange.start);
                        this.btDateEndUTS = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.default)(this.customRange.end);
                    }
                    else {
                        const allDays = this.dT.DiffInDays(new Date(), this.minStartTimeDate);
                        const listRDays = { week: 7, fnight: 14, month: 28, qtr: 84, half: 182, year: 365, all: allDays };
                        const presetDays = listRDays[this.datePreset];
                        const nowDT = new Date();
                        this.btDateEndUTS = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.default)(nowDT);
                        this.btDateStartUTS = this.btDateEndUTS - (86400 * presetDays);
                        const summaryEnd = this.dT.Dut(this.btDateStartUTS);
                        summaryF = summaryEnd;
                        summaryT = nowDT;
                    }
                    ;
                    this.dbRangeCount = yield this.sqlServ.getTSheetRangeCount(this.btDateStartUTS, this.btDateEndUTS);
                    this.dbRangeMinMax = yield this.sqlServ.getTSheetsRangeMinMax({ start: this.btDateStartUTS, end: this.btDateEndUTS });
                    const initResData = yield this.sqlServ.getXTSheetItems({ start: this.btDateStartUTS, end: this.btDateEndUTS }, { by: this.orderBy, dir: this.orderDir }, this.batchLimit, this.batchOffset);
                    this.updateSummary(summaryF, summaryT, initResData);
                    this.initRenderList(initResData);
                }
            }
        }));
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initRenderList(initResData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|initRenderList] ()...');
            this.initList = [];
            this.listItms = [];
            this.initRes = initResData;
            for (let i = 0; i < initResData.length; i++) {
                const niceInitOb = yield this.formatTSheet(initResData[i]);
                this.initList.push(niceInitOb);
            }
            this.listItms = this.initList;
            if (this.initRes.length === this.dbRangeCount) {
                this.iScrollTSheets.disabled = true;
                this.endOfList = true;
            }
            else {
                this.iScrollTSheets.disabled = false;
                this.endOfList = false;
            }
            if (this.isRefreshing) {
                this.refreshProgPerc += 10;
                this.headerProgress('manual', 'update', this.refreshProgPerc);
                setTimeout(() => { this.headerProgress('manual', 'finish', null); }, 250);
                if (this.newItems.length > 0) {
                    const waitNewLoop = setInterval(() => {
                        if (jquery__WEBPACK_IMPORTED_MODULE_16__('.tsheet-item-isnew-wrapper.isnew-' + this.newItems[0]).length > 0) {
                            clearInterval(waitNewLoop);
                            setTimeout(() => {
                                let aD = 0.30;
                                for (const newIId of this.newItems) {
                                    aD += 0.25;
                                    const tE = jquery__WEBPACK_IMPORTED_MODULE_16__('.tsheet-item-isnew-wrapper.isnew-' + newIId);
                                    jquery__WEBPACK_IMPORTED_MODULE_16__(tE).css('--animate-delay', aD.toString() + 's');
                                    jquery__WEBPACK_IMPORTED_MODULE_16__(tE).addClass('showisnew');
                                    setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__(tE).removeClass('showisnew'); }, 1000 + (aD * 1000));
                                }
                            }, 200);
                        }
                    }, 100);
                }
            }
            if (this.hasNavData) {
                this.openTSFromNavData(this.navDataId);
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    updateSummary(summaryFrom, summaryTo, rawLD) {
        this.logger.info('[TabTSheets|updateSummary] ()...');
        if (!this.isCustomRange) {
            this.summaryFromDate = this.dT.Nd(summaryFrom);
            this.summaryToDate = this.dT.Nd(summaryTo);
        }
        this.showItemCount = this.dbRangeCount;
        let startUTSIndex;
        let endUTSIndex;
        let startUTSDate;
        let endUTSDate;
        if (this.orderDir === 'desc') {
            startUTSIndex = rawLD[rawLD.length - 1].StartTime;
            endUTSIndex = rawLD[0].StartTime;
        }
        else {
            startUTSIndex = rawLD[0].StartTime;
            endUTSIndex = rawLD[rawLD.length - 1].StartTime;
        }
        ;
        startUTSDate = this.dT.Dut(startUTSIndex);
        endUTSDate = this.dT.Dut(endUTSIndex);
        this.foundFromDate = this.dT.Dut(this.dbRangeMinMax.min);
        this.foundFromNice = this.dT.LNd(this.foundFromDate);
        this.foundToDate = this.dT.Dut(this.dbRangeMinMax.max);
        this.foundToNice = this.dT.LNd(this.foundToDate);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    getPay(tsheetObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const payRes = yield this.fwServ.getShiftPay(tsheetObj);
            return Promise.resolve(payRes);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    formatTSheet(rtsOb) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            let ntsOb = rtsOb;
            const wNames = (oUId) => { let oUArr = this.workAreas.filter(oU => (oU.Id === oUId)); return { cname: oUArr[0]['CompanyName'], warea: oUArr[0]['OperationalUnitName'] }; };
            const statProps = ['IsInProgress', 'Disputed', 'TimeApproved', 'Discarded'];
            ntsOb.nDate = this.dT.LNd(new Date(rtsOb.Date));
            ntsOb.nStartTime = this.dT.NTut(rtsOb.StartTime);
            ntsOb.nEndTime = this.dT.NTut(rtsOb.EndTime);
            if (rtsOb.TotalTime.toString().includes('.')) {
                const ttArr = rtsOb.TotalTime.toString().split('.');
                let nDurH = ttArr[0].toString();
                let nDurM;
                const nDurMins = Math.round(Number('0.' + ttArr[1]) * 60);
                nDurMins < 10 ? nDurM = '0' + nDurMins.toString() : nDurM = nDurMins.toString();
                ntsOb['nDur'] = nDurH + ':' + nDurM;
            }
            else {
                ntsOb['nDur'] = rtsOb.TotalTime + ':00';
            }
            const nNames = wNames(rtsOb.OperationalUnit);
            nNames.warea ? ntsOb.nOperationalUnit = nNames.warea : ntsOb.nOperationalUnit = 'NK';
            if (nNames.cname) {
                if (nNames.cname === this.workName) {
                    ntsOb.nCompanyName = this.workCode;
                }
                else {
                    ntsOb.nCompanyName = nNames.cname;
                }
            }
            else {
                ntsOb.nOperationalUnit = this.workName;
            }
            ;
            for (let i = 0; i < statProps.length; i++) {
                rtsOb[statProps[i]] === -1 ? ntsOb['n' + statProps[i]] = null : ntsOb['n' + statProps[i]] = !!rtsOb[statProps[i]];
            }
            ;
            ntsOb['nIncome'] = yield this.getPay(rtsOb);
            return Promise.resolve(ntsOb);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    getTSheets(offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|getTSheets] (' + offset + ')...');
            try {
                const thisBatch = yield this.sqlServ.getXTSheetItems({ start: this.btDateStartUTS, end: this.btDateEndUTS }, { by: this.orderBy, dir: this.orderDir }, this.batchLimit, this.batchOffset);
                for (let i = 0; i < thisBatch.length; i++) {
                    const niceTSOb = yield this.formatTSheet(thisBatch[i]);
                    this.listItms.push(niceTSOb);
                }
                return Promise.resolve(true);
            }
            catch (getTSErr) {
                this.logger.info('[TabTSheets|getTSheets] (Error): ' + getTSErr);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    feedItems(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.batchOffset += this.batchLimit;
            this.batchStart = this.listItms.length;
            this.batchEnd = this.batchStart + this.batchLimit;
            yield this.getTSheets(this.batchOffset);
            if (this.listItms.length === this.dbRangeCount) {
                this.iScrollTSheets.disabled = true;
                this.endOfList = true;
            }
            else {
                this.iScrollTSheets.disabled = false;
                this.endOfList = false;
            }
            event.target.complete();
            this.vScrollTSheets.checkEnd();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    openDetail(tsheetObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.editMode) {
                this.logger.info('[TabTSheets|openDetail] (tsheetObj)...');
                if (tsheetObj.Id !== this.tsForOpen) {
                    this.tsForOpen = 0;
                }
                ;
                let thisTSDModalOpts = this.tsDetailModalOpts;
                thisTSDModalOpts['componentProps'] = { ts: tsheetObj, wareas: this.workAreas, showincome: this.showIncome };
                const tsDetailModal = yield this.modalCtrl.create(thisTSDModalOpts);
                document.addEventListener('ionModalDidPresent', () => { this.tsDetailModalOpen = true; this.logger.info('[TabTSheets|DetailModal] (ionModalDidPresent)'); });
                tsDetailModal.onWillDismiss().then(() => { this.tsDetailModalOpen = false; this.logger.info('[TabTSheets|DetailModal] (ionModalWillDismiss)'); });
                tsDetailModal.onDidDismiss().then(({ data, role }) => {
                    this.logger.info('[TabTSheets|DetailModal] (ionModalDidDismiss) >>> (Data): ' + data + ' >>> (Role): ' + role);
                });
                return yield tsDetailModal.present();
            }
            else {
                this.logger.info('[TabTSheets|deleteTSItem] (tsheetObj)...');
                const tsId = tsheetObj.Id;
                this.eMId = tsId;
                this.eMConfirmOpen = true;
                const { value } = yield _capacitor_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog.confirm({ title: 'Confirm', message: 'Are you sure you want to delete Timesheet #' + tsId + '?' });
                if (value) {
                    this.logger.info('[TabTSheets|EditMode|ConfirmDelete] (CONFIRMED) - OK - Deleting TS #' + tsId);
                    this.eMConfirmOpen = false;
                    this.eMIsDeleting = true;
                    this.logger.info('[TabTSheets|EditMode|Deleting] (Deleting) TS #' + tsId + '...');
                    const dbDel = yield this.sqlServ.deleteItem('timesheets', 'Id', tsId);
                    if (dbDel) {
                        this.evServ.showToast('success', 'Timesheet #' + tsId + ' Deleted');
                        this.logger.info('[TabTSheets|deleteTSItem] (DB Delete): SUCCESS! - Deleted TS Id:' + tsId);
                        this.listItms = this.listItms.filter(ts => ts.Id !== tsId);
                        this.eMIsDeleting = false;
                        this.eMId = null;
                    }
                    else {
                        this.eMIsDeleting = false;
                        this.evServ.showToast('error', 'Error: Not Deleted');
                        this.logger.info('[TabTSheets|deleteTSItem] (DB Delete): FAIL! - Error Deleting TS Id:' + tsId);
                        this.eMId = null;
                    }
                }
                else {
                    this.logger.info('[TabTSheets|EditMode|ConfirmDelete] (CANCEL) - CANCELLED - Not Deleting TS #' + tsId);
                    this.eMConfirmOpen = false;
                    this.eMIsDeleting = false;
                    this.eMId = null;
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    swapOrder() {
        this.logger.info('[TabsTSheets|swapOrder] ()...');
        this.didSwapOrder = true;
        this.sGroupIndex = 0;
        this.orderDir === 'desc' ? this.listOpts[this.tabKey].orderDir = 'asc' : this.listOpts[this.tabKey].orderDir = 'desc';
        this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', this.listOpts);
        this.doInitRefresh('init');
        this.loadListPrefs();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    toggleInfiniteScroll() { this.iScrollTSheets.disabled = !this.iScrollTSheets.disabled; }
    ////////////////////////////////////////////////////////////////////////////////////////
    animateInSummaryVal(vN) {
        const vS = '.' + vN + '-val.' + this.tabKey;
        const vA = 'update-summaryval-ani';
        const dA = () => new Promise((resolve) => {
            jquery__WEBPACK_IMPORTED_MODULE_16__(vS).on('animationend', () => { resolve(true); });
            const w = setInterval(() => { if (jquery__WEBPACK_IMPORTED_MODULE_16__(vS).length > 0) {
                clearInterval(w);
                jquery__WEBPACK_IMPORTED_MODULE_16__(vS).addClass(vA);
            } }, 50);
        });
        dA().then(() => { jquery__WEBPACK_IMPORTED_MODULE_16__(vS).removeClass(vA); });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    toggleEditMode(startStop) {
        this.logger.info('[TabTSheets|doEditMode] (' + startStop + ')...');
        if (startStop === 'start') {
            jquery__WEBPACK_IMPORTED_MODULE_16__('.start-edit-mode-ico').css('color', '#ff9800');
        }
        ;
        jquery__WEBPACK_IMPORTED_MODULE_16__('.start-edit-mode-ico').css('color', '#727272');
        let togVal;
        startStop === 'start' ? togVal = true : togVal = false;
        this.editMode = togVal;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    showDPPopover(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|showDPPopover] (event)...');
            const dpPop = yield this.popCtrl.create({ event: event, component: _popovers_datepresets_datepresets_component__WEBPACK_IMPORTED_MODULE_10__.DatePresetsComponent, componentProps: { listName: this.tabKey, selectedName: this.datePreset }, cssClass: 'sheriff-pop-datepresets-class', animated: false, showBackdrop: true, backdropDismiss: true });
            document.addEventListener('ionPopoverWillPresent', () => { this.dpPopOpen = true; });
            document.addEventListener('ionPopoverWillDismiss', () => { this.dpPopOpen = false; });
            yield dpPop.present();
            const { data, role } = yield dpPop.onDidDismiss();
            if (role === 'new') {
                console.log(data);
                console.log(role);
                if (this.isCustomRange) {
                    this.isCustomRange = false;
                    this.customRange = {};
                }
                ;
                this.datePreset = data;
                this.datePresetValue = this.toUCase(data);
                this.listOpts.datePreset = data;
                this.listOpts.datePresetValue = this.toUCase(data);
                let newListPrefObj = yield this.storeServ.getObject(this.deputy.uUK + 'ListPrefs');
                if (newListPrefObj.hasOwnProperty('tsheets')) {
                    newListPrefObj.tsheets = this.listOpts;
                }
                else {
                    newListPrefObj['tsheets'] = this.listOpts;
                }
                ;
                this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', newListPrefObj);
                this.doInitRefresh('init');
                this.loadListPrefs();
            }
            else {
                if (role === 'same') {
                    this.logger.info('[TabTSheets|showDPPopover] (SAME) No Change.');
                }
                else if (role === 'backdrop') {
                    this.logger.info('[TabTSheets|showDPPopover] (BACKDROP) No Change.');
                }
                else {
                    this.logger.info('[TabTSheets|showDPPopover] (ERROR) No Change.');
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    openCustomRange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabsTSheets|openCustomRange] ()...');
            let thisMOpts = this.drModalOpts;
            const nSD = this.dT.Dn(this.summaryFromDate);
            const nED = this.dT.Dn(this.summaryToDate);
            thisMOpts['componentProps'] = { list: this.tabKey, dates: { start: nSD, end: nED }, mms: { min: this.minStartTimeUTS, max: this.maxStartTimeUTS } };
            let drModal = yield this.modalCtrl.create(thisMOpts);
            document.addEventListener('ionModalDidPresent', () => { this.drModalOpen = true; });
            drModal.onWillDismiss().then(() => { this.drModalOpen = false; });
            drModal.onDidDismiss().then(({ data, role }) => {
                let sU = false;
                let eU = false;
                if (role === 'backdrop') {
                    this.evServ.showToast('cross', 'Cancelled');
                }
                else {
                    if (data === 'nochange') {
                        sU = false;
                        eU = false;
                    }
                    else {
                        if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_19__.default)(nSD, data.start)) {
                            sU = true;
                            this.summaryFromDate = this.dT.Nd(data.start);
                            this.animateInSummaryVal('drstart');
                        }
                        ;
                        if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_19__.default)(nED, data.end)) {
                            eU = true;
                            this.summaryToDate = this.dT.Nd(data.end);
                            this.animateInSummaryVal('drend');
                        }
                        ;
                        this.isCustomRange = true;
                        this.customRange = { start: data.start, end: data.end };
                        this.doInitRefresh('refresh');
                        this.loadListPrefs();
                    }
                    let tI;
                    let tM;
                    if (!sU && !eU) {
                        tI = 'warning';
                        tM = 'Range Unchanged';
                    }
                    else {
                        tI = 'success';
                        sU && eU ? tM = 'Range Updated' : tM = (sU ? 'Start' : 'End') + ' Date Updated';
                    }
                    ;
                    this.evServ.showToast(tI, tM);
                }
            });
            return drModal.present();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    headerProgress(mode, action, data) {
        this.logger.info('[TabTSheets|headerProgress] (' + mode + ', ' + action + ', ' + data + ')...');
        const circProgEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-progcirc.' + this.tabKey);
        const starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + this.tabKey);
        const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + this.tabKey);
        const startRoutine = () => { jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'scale(.9)'); this.progCirc.percent = 0; jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)'); if (jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'none')) {
            jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'unset');
        } this.progCirc.animation = false; this.progCirc.outerStrokeColor = '#FF9800'; };
        const finishRoutine = () => { jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'unset'); this.progCirc.percent = 100; jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)'); this.progCirc.outerStrokeColor = '#4caf50'; this.myAniCSS('.hcl-progcirc.' + this.tabKey, 'fadeOut', 0, 1400, 'remove', 'hide'); this.refresher.complete(); this.isRefreshing = false; };
        if (mode === 'manual') {
            if (action === 'start') {
                startRoutine();
                this.progCirc.animation = true;
            }
            ;
            if (action === 'change') {
                this.progCirc.percent = data;
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + ((360 * data) / 100) + ')deg');
            }
            ;
            if (action === 'finish') {
                finishRoutine();
                this.progCirc.animation = false;
            }
        }
        if (mode === 'timed') {
            startRoutine();
            const incPercEaLoop = (20 / data) * 1000;
            const rotStarEaLoop = (72 / data) * 1000;
            let starRotCount = 0;
            const timedProgLoop = setInterval(() => { this.progCirc.percent += incPercEaLoop; starRotCount += rotStarEaLoop; jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + starRotCount + 'deg)'); if (this.progCirc.percent >= 100) {
                clearInterval(timedProgLoop);
                finishRoutine();
            } }, 200);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|doRefresh] (event)...');
            if (this.tsForOpen > 0) {
                this.tsForOpen = 0;
            }
            ;
            this.isRefreshing = true;
            this.refresher = event.target;
            this.headerProgress('manual', 'start', null);
            this.doInitRefresh('refresh');
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    addTSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTSheets|addTSheets] ()...');
            let lastTSArea;
            this.orderDir === 'desc' ? lastTSArea = this.listItms[0].OperationalUnit : lastTSArea = this.listItms[this.listItms.length - 1].OperationalUnit;
            let thisAddTSModalOpts = this.addNewTSModalOpts;
            thisAddTSModalOpts['componentProps'] = { wareas: { list: this.workAreas, lastId: lastTSArea } };
            const addNewTSModal = yield this.modalCtrl.create(thisAddTSModalOpts);
            document.addEventListener('ionModalDidPresent', () => { this.addNewTSModalOpen = true; });
            addNewTSModal.onWillDismiss().then(() => { this.addNewTSModalOpen = false; });
            addNewTSModal.onDidDismiss().then(({ data, role }) => {
                /// ADD API & DB TIMESHEET INSERT FNS
            });
            return yield addNewTSModal.present();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidLeave() {
        this.logger.info('[TabTSheets|ionViewDidLeave] ()...');
        if (this.tsForOpen > 0) {
            this.tsForOpen = 0;
        }
        ;
        const titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + this.tabKey);
        const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + this.tabKey);
        const titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + this.tabKey);
        jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', '0');
        jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).removeClass('showing');
        jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).removeClass('scrolledin');
        jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).removeClass('dimmed');
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
        this.logger.info('[TabTSheets|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
        const doAni = () => new Promise((resolve) => {
            const aniStr = 'animate__animated animate__' + aniName;
            const delStr = 'animDel-' + aniDel;
            const durStr = 'animDur-' + aniDur;
            jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).on('animationend', () => {
                if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr);
                }
                if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).remove();
                }
                if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).css('display', 'none');
                }
                resolve(true);
            });
            if (aniDel > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).addClass(delStr);
            }
            if (aniDur > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).addClass(durStr);
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).addClass(aniStr);
            }
        });
        doAni();
    }
};
TabTSheetsPage.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_20__.NGXLogger },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_8__.SQLiteService },
    { type: _services_detail_service__WEBPACK_IMPORTED_MODULE_7__.DetailService },
    { type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__.DateTimeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.PopoverController },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_11__.EventsService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__.DeputyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.Platform },
    { type: _services_sync_service__WEBPACK_IMPORTED_MODULE_2__.SyncService },
    { type: src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_15__.FairworkService }
];
TabTSheetsPage.propDecorators = {
    iScrollTSheets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonInfiniteScroll,] }],
    vScrollTSheets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonVirtualScroll,] }],
    tsheetsContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild, args: ['tsheetsContent', { static: false },] }],
    tsheetsRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild, args: ['tsheetsRefresher',] }]
};
TabTSheetsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({ selector: 'app-tabtsheets', template: _raw_loader_tabtsheets_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_tabtsheets_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    ////////////////////////////////////////////////////////////////////////////////////////
], TabTSheetsPage);



/***/ }),

/***/ 19916:
/*!******************************************************!*\
  !*** ./src/app/tabs/tabtsheets/tabtsheets.page.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJ0c2hlZXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 86564:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabtsheets/tabtsheets.page.html ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col tabtsheets tsheets\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar tabtsheets tsheets\">\n                                <div class=\"sheriff-title-leftanimbar-inner tabtsheets tsheets\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title tabtsheets tsheets\">\n                                    <div class=\"sheriff-title tight-wrap tabtsheets tsheets\">Timesheets</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring tsheets\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle tsheets hcl-progcirc tsheets\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star tabtsheets tsheets\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo tabtsheets tsheets\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div class=\"sheriff-menu-button-wrapper edit-tsheets-menu-btn\">\n                                    <div *ngIf=\"!editMode\" (click)=\"toggleEditMode('start')\" class=\"edit-tsheets-menu-btn-inner-wrapper start ion-activatable ripple-parent\">\n                                        <ion-icon class=\"edit-tsheets-menu-btn-ico start-edit-mode-ico\" name=\"create-outline\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                    <div *ngIf=\"editMode\" (click)=\"toggleEditMode('stop')\" class=\"edit-tsheets-menu-btn-inner-wrapper stop ion-activatable ripple-parent\">\n                                        <ion-icon class=\"edit-tsheets-menu-btn-ico stop-edit-mode-ico\" name=\"close-outline\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                </div>\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button tabtsheets\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n<!-- TAB-CONTENT - START -->\n<ion-content class=\"main-tabtsheets-content-wrapper\" [scrollEvents]=\"false\">\n    <!-- PAGE REFRESHER -->\n    <ion-refresher #tsheetsRefresher class=\"sheriff-refresher tabs tsheets\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" disabled=\"{{preventRefreshPull}}\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <div class=\"sheriff-tabtsheets-mainpage-section-wrapper top-section\">\n        <!-- TAB-CONTENT -->\n        <!-- CONTENT HEADING -->\n        <div slot=\"fixed\" class=\"sheriff-tabcontent-mainheading-wrapper tsheets\">\n            <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid tsheets\">\n                <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 tsheets\">\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 tsheets\">\n                        <div *ngIf=\"editMode\" class=\"tsheets-editmode-header-txt-wrapper left\">edit mode</div>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 tsheets\">\n                        <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-tsheets.png\">\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 tsheets\">\n                        <div *ngIf=\"editMode\" class=\"tsheets-editmode-header-txt-wrapper right\">edit mode</div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- ITEM LIST CONTENT -->\n        <!-- ITEM LIST SUMMARY/RANGE-SELECT -->\n        <div slot=\"fixed\" class=\"tsheets-list-summary-main-outter-wrapper\">\n            <ion-grid [ngStyle]=\"{'opacity':editMode?'0.48':'1'}\" class=\"sheriff-grid list-summary-grid tsheets\">\n                <ion-row size=\"12\" class=\"sheriff-row tsheet-navbar-row navbar-gradborder-row top\">\n                    <ion-col class=\"sheriff-col tsheet-navbar-col navbar-gradborder-col top\"></ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row list-summary-row searching-row\">\n                    <ion-col (click)=\"swapOrder()\" size=\"1\" class=\"sheriff-col list-summary-col ico-col ion-activatable ripple-parent\">\n                        <div class=\"ascdesc-order-dim-wrapper\" [ngStyle]=\"{'opacity':(drModalOpen)?'0.36':'1'}\">\n                            <div *ngIf=\"orderDir==='asc'\" class=\"swap-order-ico-label asc\">asc</div>\n                            <div class=\"swap-item-order-btn-wrapper\">\n                                <img *ngIf=\"orderDir==='asc'\" src=\"./../../../assets/img/sheriffsort-asc-ico.png\" class=\"sheriff-ico summary-list-ico swaporder-dr-ico asc tsheets\">\n                                <img *ngIf=\"orderDir==='desc'\" src=\"./../../../assets/img/sheriffsort-desc-ico.png\" class=\"sheriff-ico summary-list-ico swaporder-dr-ico desc tsheets\">\n                            </div>\n                            <div *ngIf=\"orderDir==='desc'\" class=\"swap-order-ico-label desc\">des</div>\n                            <ion-ripple-effect></ion-ripple-effect>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col list-summary-col daterange-input-col from\">\n                        <div *ngIf=\"!drModalOpen\" class=\"list-summary-date-input-label from tsheets\">from:</div>\n                        <div *ngIf=\"!drModalOpen\" class=\"summary-list-data-div drstart-val tabtsheets tsheets\">{{summaryFromDate}}</div>\n                        <div *ngIf=\"drModalOpen\" class=\"waiting-custom-input-wrapper from\">\n                            <div class=\"customdrwait loadingdots\">waiting</div>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col list-summary-col daterange-input-col to\">\n                        <div *ngIf=\"!drModalOpen\">\n                            <div class=\"list-summary-date-input-label-wrapper\">\n                                <div class=\"list-summary-date-input-label to tsheets\">to:</div>\n                                <div *ngIf=\"toDateIsToday\" class=\"list-summary-istoday-indic-wrapper\">today</div>\n                            </div>\n                            <div class=\"summary-list-data-div drend-val tabtsheets tsheets\">{{summaryToDate}}</div>\n                        </div>\n                        <div *ngIf=\"drModalOpen\" class=\"waiting-custom-input-wrapper to\">\n                            <div class=\"customdrwait loadingdots\">waiting</div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" (click)=\"openCustomRange()\" class=\"sheriff-col list-summary-col ico-col tsheets ion-activatable ripple-parent\">\n                        <div class=\"summary-list-btn-wrapper cutomrange\">\n                            <ion-icon class=\"sheriff-ico summary-list-ico open-dr-ico tsheets\" name=\"calendar\"></ion-icon>\n                        </div>\n                        <ion-ripple-effect></ion-ripple-effect>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col list-summary-col daterange-input-col preset-col\">\n                        <div *ngIf=\"!dpPopOpen\" (click)=\"showDPPopover($event)\" class=\"list-summary-touchaction-zone-wrapper ion-activatable ripple-parent\">\n                            <div class=\"list-summary-date-input-label select tsheets\">Preset:</div>\n                            <div *ngIf=\"!isCustomRange\" class=\"summary-list-data-div presets-val tabtsheets tsheets\">\n                                {{datePresetValue}}\n                            </div>\n                            <div *ngIf=\"isCustomRange\" class=\"list-summary-iscustomrange\">Custom</div>\n                            <ion-ripple-effect></ion-ripple-effect>\n                        </div>\n                        <div *ngIf=\"dpPopOpen\" class=\"waiting-custom-input-wrapper preset\">\n                            <div class=\"customdrwait loadingdots\">wait</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row size=\"12\" class=\"sheriff-row tsheet-navbar-row navbar-gradborder-row middle\">\n                    <ion-col class=\"sheriff-col tsheet-navbar-col navbar-gradborder-col middle\"></ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row list-summary-row found-row\">\n                    <ion-col class=\"sheriff-col list-summary-col found-col\">\n                        <div class=\"found-col-all-wrapper\">\n                            <span class=\"found-label-text\">Showing</span>\n                            <span class=\"summary-found-sep colon\">:</span>\n                            <span class=\"found-date-wrapper\" [ngSwitch]=\"orderDir\">\n                          <span *ngSwitchCase=\"'desc'\" class=\"found-range-desc\"><span class=\"found-date-fval\">{{foundToNice}}</span>\n                            <ion-icon class=\"found-bar-ico toarrow\" name=\"caret-forward\"></ion-icon><span class=\"found-date-tval\">{{foundFromNice}}</span></span>\n                            <span *ngSwitchCase=\"'asc'\" class=\"found-range-asc\"><span class=\"found-date-fval\">{{foundFromNice}}</span>\n                            <ion-icon class=\"found-bar-ico toarrow\" name=\"caret-forward\"></ion-icon><span class=\"found-date-tval\">{{foundToNice}}</span></span>\n                            <span *ngSwitchDefault class=\"found-range-desc\"><span class=\"found-date-fval\">{{foundToNice}}</span>\n                            <ion-icon class=\"found-bar-ico toarrow\" name=\"caret-forward\"></ion-icon><span class=\"found-date-tval\">{{foundFromNice}}</span></span>\n                            </span>\n                            <ion-icon class=\"found-bar-ico sepslash\" name=\"remove\"></ion-icon>\n                            <span class=\"found-count-wrapper\">    \n                        <span class=\"found-count-fval\">{{showItemCount}}</span>\n                            <span class=\"summary-found-sep slash\">/</span>\n                            <span class=\"found-count-tval\">{{listTtlItms}}</span>\n                            </span>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row size=\"12\" class=\"sheriff-row tsheet-navbar-row navbar-gradborder-row bottom\">\n                    <ion-col class=\"sheriff-col tsheet-navbar-col navbar-gradborder-col bottom\"></ion-col>\n                </ion-row>\n            </ion-grid>\n            <div *ngIf=\"editMode\" class=\"tsheet-editmode-summary-shield\"></div>\n        </div>\n    </div>\n    <ion-content [scrollEvents]=\"true\" class=\"sheriff-content tab-content tsheets\" #tsheetsContent (ionScrollStart)=\"disableRefresher(true)\" (ionScrollEnd)=\"disableRefresher(false)\">\n        <div slot=\"fixed\" class=\"sheriff-subheader-shadow-div\"></div>\n        <!-- MAIN LIST WRAPPER -->\n        <div class=\"sheriff-tabcontent-itemlistcontent-wrapper tsheets\">\n            <!-- V-SCROLL LIST -->\n            <ion-card *ngIf=\"listTtlItms<1\" class=\"sheriff-card tab-list-card no-items-card  animate__animated animate__zoomIn animate__delay-1s\">\n                <div class=\"sheriff-no-items-card-wrapper\">No <span style=\"text-transform:capitalize\">{{dbTblName}}</span> Found</div>\n            </ion-card>\n            <ion-list *ngIf=\"listTtlItms>0\" class=\"sheriff-list dbitem-list tsheets\">\n                <ion-virtual-scroll *ngIf=\"hasLoaded\" [items]=\"listItms\" [headerFn]=\"calHeaderGroups\" [footerFn]=\"groupTotals\" approxItemHeight=\"56\" approxFooterHeight=\"32\" approxHeaderHeight=\"32\" class=\"sheriff-vscroll dbitem-vscroll tsheets\">\n                    <ion-item-divider [hidden]=\"header.week===null&&header.month===null\" *virtualHeader=\"let header\" class=\"sheriff-list-item-divider tsheets-weekheader\">\n                        <ion-grid class=\"sheriff-grid item-list-divider-grid tsheets\">\n                            <ion-row *ngIf=\"header.month!==null\" class=\"sheriff-divider-row tsheets-month\">\n                                <ion-col class=\"sheriff-divider-col tsheets-month\">{{header.month}}</ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"header.week!==null\" class=\"sheriff-divider-row tsheets-week\">\n                                <ion-col class=\"sheriff-divider-col tsheets-week\">{{header.week}}</ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item-divider>\n                    <ion-item (click)=\"openDetail(item)\" *virtualItem=\"let item;let i = index\" button=\"true\" [ngClass]=\"{'tsforopen':item.Id===tsForOpen}\" class=\"sheriff-item sheriff-vitem dbitem-vitem tsheet tsheet-{{i}}\" id=\"tsheet-{{item.Id}}\">\n                        <ion-grid class=\"sheriff-grid list-item-grid tsheet-item-grid\">\n                            <ion-row class=\"sheriff-row list-item-row tsheet-item-row maingrid-row\">\n                                <ion-col size=\"6\" class=\"sheriff-col list-item-col tsheet-col ww-detail-col\">\n                                    <div class=\"sheriff-row ww-detail-row date\">{{item.nDate}}</div>\n                                    <div class=\"sheriff-row ww-detail-row time-area\">\n                                        <span class=\"ww-detail-span time\">\n                                        <span class=\"ww-detail-span stime\">{{item.nStartTime}}</span>\n                                        <span class=\"ww-detail-span time-hyphen\"><ion-icon name=\"arrow-forward\"></ion-icon></span>\n                                        <span class=\"ww-detail-span etime\">{{item.nEndTime}}</span>\n                                        </span>\n                                        <span class=\"ww-detail-span totaltime-wrapper\">\n                                          <span class=\"ww-detail-span tt-equals\"><ion-icon class=\"tt-eq-ico\" name=\"reorder-two-outline\"></ion-icon></span>\n                                        <span class=\"ww-detail-span tt-value\">{{item.nDur}}</span>\n                                        <span *ngIf=\"item.TotalTime>item.TotalTimeInv\" class=\"ww-detail-span tt-plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                        <span *ngIf=\"item.TotalTime<item.TotalTimeInv\" class=\"ww-detail-span tt-minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                        </span>\n                                    </div>\n                                    <div class=\"sheriff-row ww-detail-row areawork-wrapper\">\n                                        <div class=\"ww-detail-div area\">\n                                            <span class=\"ww-detail-span area\">\n                                              <span class=\"ww-detail-span area-at\"><ion-icon name=\"locate-outline\"></ion-icon></span>\n                                              <span class=\"ww-detail-span areaname\">{{item.nOperationalUnit}}</span>\n                                              <span class=\"ww-detail-span areaat-sign\">@</span>\n                                            </span>\n                                        </div>\n                                        <div [ngStyle]=\"{'color':workColor,'filter':incBright?'brightness(2.5)':'brightness(1)'}\" class=\"ww-detail-div work\">{{item.nCompanyName}}</div>\n                                        <div class=\"ww-detail-span ids-div\">\n                                          <ion-icon class=\"ww-detail-ids-ico\" name=\"finger-print-outline\"></ion-icon>\n                                          <span class=\"ww-detail-ids-txt-wrapper tsheetid\">{{item.Id}}</span>\n                                        </div>\n                     \n\n                                    </div>\n                                    <div class=\"tsheet-item-isnew-wrapper isnew-{{item.Id}} animate__animated animate__tada animate__fast\">\n                                        <img class=\"tsheet-item-isnew-img-ico\" src=\"../../../assets/img/sheriff-new-ico.png\">\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"2\" class=\"sheriff-col tsheet-ttincome-col\">\n                                    <div class=\"sheriff-tsheetlist-ttincome-wrapper tt-wrapper\">\n                                        <ion-icon class=\"sheriff-tsheetlist-ttincome-ico tt-ico\" name=\"hourglass-outline\"></ion-icon>\n                                        <span class=\"sheriff-tsheetlist-ttincome-val tt-val\">{{item.TotalTime.toFixed(2)}}<span class=\"tsheet-ttincome-hrs\">h</span></span>\n                                    </div>\n                                    <div *ngIf=\"showIncome\" class=\"sheriff-tsheetlist-ttincome-wrapper income-wrapper\">\n                                        <ion-icon class=\"sheriff-tsheetlist-ttincome-ico income-ico\" name=\"logo-usd\"></ion-icon>\n                                        <span class=\"sheriff-tsheetlist-ttincome-val tt-val\"><span class=\"tsheet-ttincome-dollar\">$</span>{{item.nIncome.t.toFixed(0)}}</span>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"3\" class=\"sheriff-col list-item-col tsheet-col status-col\">\n                                    <div *ngIf=\"eMId!==item.Id\" class=\"tsheet-status-col-main-wrapper\">\n                                        <span *ngIf=\"!item.nIsInProgress&&!item.nTimeApproved&&!item.nDisputed&&!item.nDiscarded\" style=\"color:#ff9800db\" class=\"tsheet-status pending\">Pending</span>\n                                        <span *ngIf=\"item.nIsInProgress\" style=\"color:#ff9800db\" class=\"tsheet-status inprog\">Underway</span>\n                                        <span *ngIf=\"item.nTimeApproved\" style=\"color:#2dd36fdb\" class=\"tsheet-status approved\">Approved</span>\n                                        <span *ngIf=\"item.nDisputed\" style=\"color:#f44034db\" class=\"tsheet-status disputed\">Disputed</span>\n                                        <span *ngIf=\"item.nDiscarded\" style=\"color:#f44034db\" class=\"tsheet-status discarded\">Discarded</span>\n                                    </div>\n                                    <div *ngIf=\"(eMConfirmOpen&&eMId===item.Id)||(eMIsDeleting&&eMId===item.Id)\" class=\"tsheet-status-col-delete-wrapper\">\n                                        <span *ngIf=\"eMConfirmOpen\" class=\"tsheet-editmode-delete confirm-txt\">Delete?</span>\n                                        <span *ngIf=\"eMIsDeleting\" class=\"tsheet-editmode-delete confirm-txt\">Deleting...</span>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"1\" class=\"sheriff-col list-item-col opentsheet-col\">\n                                    <div class=\"status-col-touch-wrapper ion-activatable ripple-parent\">\n                                        <ion-icon *ngIf=\"!editMode\" class=\"sheriff-ico tsheet-status-ico status\" name=\"chevron-forward\"></ion-icon>\n                                        <ion-icon *ngIf=\"editMode\" class=\"sheriff-ico tsheet-editmode-ico\" name=\"trash\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item>\n                    <ion-item-divider *virtualFooter=\"let footer\" class=\"sheriff-list-item-divider tsheets-weekfooter\">\n                        <ion-grid class=\"sheriff-grid item-list-divider-grid tsheets\">\n                            <ion-row class=\"sheriff-divider-row footer-divider-row\">\n                                <ion-col class=\"sheriff-divider-col footer-divider-col\">\n                                    <div class=\"sheriff-divider-div footer-div weektotal\">\n                                        <span class=\"footer-total-label\">Week Total</span>\n                                        <span class=\"footer-total-equals\">=</span>\n                                        <span *ngIf=\"footer.t.h>0\" class=\"footer-total-totalno hours\">{{footer.t.h}}</span>\n                                        <span *ngIf=\"footer.t.h>0\" class=\"footer-total-suffix hours\">h</span>\n                                        <span *ngIf=\"footer.t.m>0\" class=\"footer-total-totalno mins\">{{footer.t.m}}</span>\n                                        <span *ngIf=\"footer.t.m>0\" class=\"footer-total-suffix mins\">m</span>\n                                        <span *ngIf=\"showIncome\">\n                                          <span class=\"footer-total-equals sep\">|</span>\n                                          <span class=\"footer-total-equals dollar\">$</span>\n                                          <span class=\"footer-total-totalno income\">{{footer.i}}</span>\n                                        </span>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item-divider>\n                </ion-virtual-scroll>\n            </ion-list>\n            <ion-card *ngIf=\"endOfList\" class=\"sheriff-card tab-list-card endoflist-card animate__animated animate__zoomIn animate__fast\">\n                <div class=\"sheriff-endoflist-card-wrapper\">End of Selected Range</div>\n            </ion-card>\n\n            <!-- I-SCROLL FEEDER -->\n            <ion-infinite-scroll disabled=\"true\" class=\"sheriff-iscroll tsheet\" threshold=\"25%\" (ionInfinite)=\"feedItems($event)\">\n                <ion-infinite-scroll-content loadingSpinner=null class=\"sheriff-iscroll-content tsheet\">\n                    <ion-grid class=\"sheriff-iscrollcontent-grid\">\n                        <ion-row class=\"sheriff-row inf-loading-row\">\n                            <ion-col class=\"sheriff-col inf-loading-col spinleft\" size=\"4\">\n                                <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner\" name=\"dots\"></ion-spinner>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col inf-loading-col textmiddle\" size=\"4\">loading\n                                <div class=\"info-load-batch-wrapper\"><span class=\"inf-load-batch-start\">{{batchStart}}</span><span class=\"inf-load-batch-hyphen\">-</span><span class=\"inf-load-batch-end\">{{batchEnd}}</span></div>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col inf-loading-col spinright\" size=\"4\">\n                                <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner right\" name=\"dots\"></ion-spinner>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </ion-content>\n</ion-content>\n<!-- ADD TSHEET FAB -->\n<ion-fab *ngIf=\"!editMode\" (click)=\"addTSheet()\" class=\"sheriff-fab tsheet-addtsheet-fab tablistfab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"sheriff-fab-button addtsheet-fab-btn\">\n        <img class=\"sheriff-fab-btn-img addtsheet-fab-btn-img\" src=\"../../../assets/img/sheriff-fab-addtsheet-ico.png\">\n    </ion-fab-button>\n</ion-fab>\n<!-- SHOW OPTIONS FAB -->\n<ion-fab class=\"sheriff-fader-fab tabtsheets\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <div class=\"sheriff-fade-nav-btn-wrapper tabtsheets ion-activatable ripple-parent\">\n        <img class=\"sheriff-fade-nav-btn-img\" src=\"../../../assets/img/sheriff-fadenavbtn.png\">\n        <ion-ripple-effect></ion-ripple-effect>\n    </div>\n</ion-fab>\n<!-- END CONTENT -->");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabtsheets_tabtsheets_module_ts-es2015.js.map