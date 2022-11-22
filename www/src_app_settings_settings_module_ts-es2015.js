(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": function() { return /* binding */ SettingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);








const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot(),
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 14718);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 69519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modals_alertschedule_alertschedule_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/alertschedule/alertschedule.page */ 20060);
/* harmony import */ var _services_deputy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/deputy.service */ 22092);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/events.service */ 80106);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var _services_filesystem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/filesystem.service */ 22904);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/sqlite.service */ 90636);
/* harmony import */ var _services_datetime_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/datetime.service */ 12826);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/notifications.service */ 79744);
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/calendar.service */ 49603);
/* harmony import */ var _services_push_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/push.service */ 52314);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/firebase.service */ 19446);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/keyboard */ 87730);
/* harmony import */ var _capacitor_action_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor/action-sheet */ 54025);
/* harmony import */ var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor/dialog */ 63540);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @capacitor/app */ 42138);
/* harmony import */ var _services_appTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/appTypes */ 38670);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);

























////////////////////////////////////////////////////////////////////////////////////////
let SettingsPage = class SettingsPage {
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(logger, platform, router, evServ, storeServ, deputy, fileServ, sqlServ, dT, noteServ, modalCtrl, calServ, fireServ, pushServ) {
        this.logger = logger;
        this.platform = platform;
        this.router = router;
        this.evServ = evServ;
        this.storeServ = storeServ;
        this.deputy = deputy;
        this.fileServ = fileServ;
        this.sqlServ = sqlServ;
        this.dT = dT;
        this.noteServ = noteServ;
        this.modalCtrl = modalCtrl;
        this.calServ = calServ;
        this.fireServ = fireServ;
        this.pushServ = pushServ;
        this.progCirc = { responsive: true, showTitle: false, showSubtitle: false, showUnits: false, percent: 0, radius: 56, outerStrokeWidth: 4, showInnerStroke: false, outerStrokeColor: '#FF9800', animation: true, backgroundPadding: 2, animationDuration: 400 };
        this.domDataReady = false;
        this.saveSettInProg = false;
        this.noofOpts = { alerts: 4, database: 1, payrates: 1, profile: 1, snoop: 1 };
        this.appSettings = null;
        // Database Vars
        this.hasDBBU = null;
        this.dbBUItem = null;
        this.dbBUDLUrl = null;
        this.dbBUMeta = null;
        this.dbBUNewData = null;
        this.dbBUManAct = null;
        this.dbBUULPerc = 0;
        this.dbBUULStatus = null;
        this.dbBUError = null;
        // Alert Vars
        this.notePerms = null;
        this.calPerms = null;
        this.calList = [];
        this.alertSchedShowing = false;
        this.isRescheduling = false;
        this.delayedRSCount = 0;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|ngOnInit] ()...');
            this.platform.ready().then(() => {
                this.pageEnterAnim();
                _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_13__.Keyboard.removeAllListeners();
                this.loadOptionStates();
            });
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillEnter() { this.logger.info('[Settings|ionViewWillEnter] ()...'); setTimeout(() => { this.evServ.publish('doPageEnterAnim', null); }, 300); }
    ////////////////////////////////////////////////////////////////////////////////////////
    loadOptionStates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|loadOptionStates] ()...');
            let savedSettingsObj;
            const localRes = yield this.sqlServ.getSettings();
            if (localRes.result) {
                savedSettingsObj = localRes.data;
            }
            else {
                const fireRes = yield this.fireServ.getSettingsValue(null);
                if (fireRes.result && fireRes.data !== null) {
                    savedSettingsObj = fireRes.data;
                }
                else {
                    savedSettingsObj = (0,_services_appTypes__WEBPACK_IMPORTED_MODULE_17__.defaultAUSettings)();
                    this.evServ.showToast('warning', 'Using Default Settings');
                }
            }
            ;
            this.appSettings = savedSettingsObj;
            for (const [key, value] of Object.entries(this.appSettings)) {
                const oK = key.toString();
                const oV = value;
                switch (oK) {
                    case 'alerts':
                        const aOAMV = oV.options.alertMethods.value;
                        if (aOAMV.phone) {
                            if (!(yield this.checkNotePerms())) {
                                this.changeAlertMethods('phone', false);
                                this.noteServ.noteGetPerms();
                            }
                        }
                        ;
                        if (aOAMV.calendar) {
                            if (!(yield this.checkCalPerms())) {
                                this.changeAlertMethods('calendar', false);
                                this.calServ.reqCalPerms();
                            }
                        }
                        ;
                        break;
                    case 'database':
                        if (oV.options.backupMode.value !== 'none') {
                            this.getDBBUInfo('init');
                        }
                        ;
                        break;
                }
            }
            ;
            this.calList = this.calServ.calList;
            this.selectedCal = this.calServ.selectedCal;
            yield this.saveSettObj();
            this.domDataReady = true;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    saveSettObj() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.saveSettInProg) {
                const sT = new Date();
                let didDB = false, didFire = false;
                this.logger.info('[Settings|saveSettObj] (STARTED) >>> Saving Updated appSettings Object...');
                this.saveSettInProg = true;
                const consM = (r, dfs) => { let rT, dfT; r === 's' ? rT = 'SUCCESS' : rT = 'ERROR'; dfs === 'd' ? dfT = 'SQLite/Details/Storage' : dfT = 'Firebase'; const m = '[Settings|saveSettObj] (' + rT + ') Save Settings Obj to ' + dfT; this.logger.info(m); };
                if ((yield this.sqlServ.setSettings(this.appSettings))) {
                    didDB = true;
                    consM('s', 'd');
                }
                else {
                    consM('e', 'd');
                }
                ;
                if ((yield this.fireServ.setFireSettingsDoc(null, this.appSettings))) {
                    didFire = true;
                    consM('s', 'f');
                }
                else {
                    consM('e', 'f');
                }
                ;
                this.saveSettInProg = false;
                this.logger.info('[Settings|saveSettObj] (FINISHED) after ' + this.evServ.getDur(sT) + 'ms - >>> Results: SQLite=' + String(didDB) + ', FireDoc=' + String(didFire));
                return Promise.resolve(true);
            }
            else {
                this.logger.info('[Settings|sSObj] [WARNING] Already Running - Skipping.');
                return Promise.resolve(true);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    toggleOptInfo(optSec, optProp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|toggleOptInfo] (' + optSec + ',' + optProp + ')...');
            const oldInfoV = Boolean(this.appSettings[String(optSec)].options[String(optProp)].info);
            let newInfoV;
            oldInfoV ? newInfoV = false : newInfoV = true;
            if (oldInfoV !== newInfoV) {
                this.appSettings[String(optSec)].options[String(optProp)].info = newInfoV;
                yield this.saveSettObj();
            }
        });
    }
    //--------------------------------------------------------------------------------------
    sectionVisToggle(sectionName, visValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|sectionVisToggle] (' + sectionName + ',' + visValue + ')...');
            const oldSVisVal = Boolean(visValue);
            let newSVisVal;
            oldSVisVal ? newSVisVal = false : newSVisVal = true;
            if (oldSVisVal !== newSVisVal) {
                this.appSettings[sectionName].showSection = newSVisVal;
                yield this.saveSettObj();
            }
        });
    }
    //--------------------------------------------------------------------------------------
    changeDatabaseOpts(optProp, optVal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|changeDatabaseOpts] (' + optProp + ',' + optVal + ')...');
            if (optProp === 'backupMode' && optVal === 'none' && this.hasDBBU) {
                const { value } = yield _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog.confirm({ title: 'Confirm No Backups', message: 'WARNING: Existing backup will be DELETED. OK to proceed?', okButtonTitle: 'Yes, Proceed' });
                if (value) {
                    this.logger.info('[Settings|changeDatabaseOpts] (autobackup > "none") User Confirmed - Deleting Backup...');
                    this.dbBUAction('delete');
                    this.appSettings.database.options[optProp].value = optVal;
                    this.saveSettObj();
                }
                else {
                    this.evServ.showToast('cross', 'Cancelled');
                    this.databaseAutobackupRG.value = this.appSettings.database.options.backupMode.value;
                }
            }
            else {
                this.appSettings.database.options[optProp].value = optVal;
                this.saveSettObj();
            }
        });
    }
    //--------------------------------------------------------------------------------------
    changeAlertMethods(optName, optActive) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|changeAlertMethods] (' + optName + ',' + optActive + ')...');
            const oldAMethodV = Boolean(this.appSettings.alerts.options.alertMethods.value[String(optName)]);
            const newAMethodV = Boolean(optActive);
            const reqP = () => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () { if (String(optName) === 'phone') {
                yield this.noteServ.reqP();
                return Promise.resolve(true);
            }
            else {
                yield this.calServ.reqCalPerms();
                return Promise.resolve(true);
            } });
            const checkP = () => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () { if (String(optName) === 'phone') {
                if ((yield this.noteServ.permOK())) {
                    return Promise.resolve(true);
                }
                else {
                    return Promise.resolve(false);
                }
            }
            else {
                if ((yield this.calServ.checkCalPerms())) {
                    return Promise.resolve(true);
                }
                else {
                    return Promise.resolve(false);
                }
            } });
            if (oldAMethodV !== newAMethodV) {
                if (String(optName) !== 'email') {
                    this.isRescheduling = true;
                    const rsF = this.evServ.subscribe('reschedFinish', () => { this.isRescheduling = false; rsF.unsubscribe(); });
                }
                ;
                if (newAMethodV) {
                    const gotP = yield checkP();
                    if (!gotP) {
                        yield reqP();
                        this.changeAlertMethods(optName, newAMethodV);
                        return;
                    }
                }
                ;
                this.appSettings.alerts.options.alertMethods.value[String(optName)] = newAMethodV;
                yield this.saveSettObj();
                switch (optName) {
                    case 'phone':
                        yield this.noteServ.updateNoteSetting();
                        break;
                    case 'calendar':
                        yield this.calServ.updateCalSettings();
                        break;
                    case 'email':
                        this.evServ.publish('alertsStatus', true);
                        break;
                }
            }
        });
    }
    //--------------------------------------------------------------------------------------
    changeAlertEvents(optName, optActive) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|changeAlertEvents] (' + optName + ',' + optActive + ')...');
            const oldAEventV = Boolean(this.appSettings.alerts.options.alertEvents.value[String(optName)]);
            const newAEventV = Boolean(optActive);
            if (oldAEventV !== newAEventV) {
                this.isRescheduling = true;
                this.appSettings.alerts.options.alertEvents.value[String(optName)] = newAEventV;
                yield this.saveSettObj();
                if (String(optName) !== 'tsheet') {
                    let rsC = 0;
                    const rsF = this.evServ.subscribe('reschedFinish', () => { rsC++; if (rsC > 1) {
                        this.isRescheduling = false;
                        rsF.unsubscribe();
                    } });
                    yield this.noteServ.updateNoteSetting();
                    yield this.calServ.updateCalSettings();
                }
                else {
                    this.isRescheduling = false;
                }
                ;
                const aMEmailV = Boolean(this.appSettings.alerts.options.alertMethods.value.email);
                const aEvO = this.appSettings.alerts.options.alertEvents.value;
                this.evServ.publish('alertsStatus', true);
            }
        });
    }
    //--------------------------------------------------------------------------------------
    changeAlertBefore(optName, newRange) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|changeAlertBefore] (' + optName + ',' + newRange + ')');
            const newValue = (0,_services_appTypes__WEBPACK_IMPORTED_MODULE_17__.AUSAlertRange2Value)(optName, Number(newRange));
            const newABeforeObj = { range: Number(newRange), mins: newValue };
            const oldABeforeObj = this.appSettings.alerts.options.alertBefore.value[optName];
            if (!lodash__WEBPACK_IMPORTED_MODULE_19__.isEqual(oldABeforeObj, newABeforeObj)) {
                this.isRescheduling = true;
                this.appSettings.alerts.options.alertBefore.value[optName] = newABeforeObj;
                yield this.saveSettObj();
                if (String(optName) !== 'tsheet') {
                    let rsC = 0;
                    const rsF = this.evServ.subscribe('reschedFinish', () => { rsC++; if (rsC > 1) {
                        this.isRescheduling = false;
                        rsF.unsubscribe();
                    } });
                    yield this.noteServ.updateNoteSetting();
                    yield this.calServ.updateCalSettings();
                }
                else {
                    this.isRescheduling = false;
                }
                ;
            }
        });
    }
    //--------------------------------------------------------------------------------------
    alertCalSelect(selCal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|alertCalSelect] ()...');
            let myCalOs = [];
            myCalOs.push({ title: '\uD83D\uDFE2 ' + selCal.name + ' (𝘚𝘦𝘭𝘦𝘤𝘵𝘦𝘥)' });
            for (let i = 0; i < this.calList.length; i++) {
                if (this.calList[i].name !== selCal.name) {
                    myCalOs.push({ title: '\uD83D\uDD18 ' + this.calList[i].name });
                }
            }
            ;
            myCalOs.push({ title: '\u274C CANCEL' });
            const sameI = 0;
            const cancelI = myCalOs.length - 1;
            const calSelRes = yield _capacitor_action_sheet__WEBPACK_IMPORTED_MODULE_14__.ActionSheet.showActions({ title: 'Select Alert Calendar', options: myCalOs });
            if (calSelRes.index === cancelI) {
                this.evServ.showToast('cross', 'Select Calendar Cancelled');
            }
            else if (calSelRes.index === sameI) {
                this.evServ.showToast('warning', 'Same Calendar Selected');
            }
            else {
                const newCalSelName = myCalOs[calSelRes.index].title.replace('\uD83D\uDD18 ', '');
                const newCalSelObj = this.calList.filter(c => c.name === newCalSelName)[0];
                const oldCalId = String(this.appSettings.alerts.options.alertCal.value);
                const newCalId = String(newCalSelObj.id);
                if (oldCalId !== newCalId) {
                    this.evServ.showToast('success', 'Alert Calendar: ' + this.selectedCal.name);
                    this.isRescheduling = true;
                    this.selectedCal = newCalSelObj;
                    this.appSettings.alerts.options.alertCal.value = newCalId;
                    yield this.saveSettObj();
                    const rsF = this.evServ.subscribe('reschedFinish', () => { this.isRescheduling = false; rsF.unsubscribe(); });
                    yield this.calServ.updateCalSettings();
                }
            }
        });
    }
    //--------------------------------------------------------------------------------------
    toggleShowPR(optActive) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|toggleShowPR] (' + optActive + ')...');
            const oldSIncomeV = Boolean(this.appSettings.payrates.options.show.value);
            const newSIncomeV = Boolean(optActive);
            if (oldSIncomeV !== newSIncomeV) {
                this.isRescheduling = true;
                let rsC = 0;
                const rsF = this.evServ.subscribe('reschedFinish', () => { rsC++; if (rsC > 1) {
                    this.isRescheduling = false;
                    rsF.unsubscribe();
                } });
                this.appSettings.payrates.options.show.value = newSIncomeV;
                yield this.saveSettObj();
                yield this.noteServ.updateNoteSetting();
                yield this.calServ.updateCalSettings();
            }
        });
    }
    //--------------------------------------------------------------------------------------
    toggleSyncProfile(optActive) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|toggleSyncProfile] (' + optActive + ')...');
            const oldASyncV = Boolean(this.appSettings.profile.options.alwaysSync.value);
            const newASyncV = Boolean(optActive);
            if (oldASyncV !== newASyncV) {
                this.appSettings.profile.options.alwaysSync.value = newASyncV;
                yield this.saveSettObj();
            }
        });
    }
    //--------------------------------------------------------------------------------------
    toggleSnoop(optActive) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|toggleSnoop] (' + optActive + ')...');
            const oldSnoopV = Boolean(this.appSettings.snoop.options.activated.value);
            const newSnoopV = Boolean(optActive);
            if (oldSnoopV !== newSnoopV) {
                this.appSettings.snoop.options.activated.value = newSnoopV;
                yield this.saveSettObj();
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    getDBBUInfo(mode) {
        this.logger.info('[Settings|initFireDBBU] ()...');
        this.evServ.subscribe('checkFSDBBU', checkRes => {
            if (checkRes.result) {
                this.evServ.destroy('checkFSDBBU');
                this.updateDBBUMeta({ meta: checkRes.data.meta, dlurl: checkRes.data.dlurl });
                this.hasDBBU = true;
                if (mode === 'init') {
                    this.evServ.publish('initStep', 'dbOpts');
                }
                ;
            }
            else {
                const errCode = checkRes.data;
                switch (errCode) {
                    case 'storage/object-not-found':
                        this.dbBUError = 'No Backup Found';
                        break;
                    case 'storage/unauthorized':
                        this.dbBUError = 'Error: Unauthorised';
                        break;
                    case 'storage/canceled':
                        this.dbBUError = 'Fetch Cancelled';
                        break;
                    case 'storage/unknown':
                        this.dbBUError = 'Unknown Error';
                        break;
                }
                ;
                if (this.dbBUItem !== null) {
                    this.dbBUItem = null;
                }
                ;
                if (this.dbBUDLUrl !== null) {
                    this.dbBUDLUrl = null;
                }
                ;
                if (this.dbBUMeta !== null) {
                    this.dbBUMeta = null;
                }
                ;
                this.hasDBBU = false;
                if (mode === 'init') {
                    this.evServ.publish('initStep', 'dbOpts');
                }
            }
        });
        this.fireServ.checkFSDBBU();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    updateDBBUMeta(metaObj) {
        this.logger.info('[Settings|updateDBBUMeta] (metaObj)...');
        let isInit;
        let prevSize = null;
        let prevDate = null;
        if (this.dbBUItem !== null) {
            isInit = false;
            prevSize = this.dbBUItem.size;
            prevDate = this.dbBUItem.date;
        }
        else {
            isInit = true;
        }
        ;
        const buMeta = metaObj.meta;
        this.dbBUMeta = metaObj.meta;
        this.dbBUDLUrl = metaObj.dlurl;
        const niceSize = this.niceBytes(buMeta.size, 2);
        const niceDate = this.dT.format(new Date(buMeta.updated), 'dd/MM/yy H:mm');
        this.dbBUItem = { name: 'Cloud Backup', date: niceDate, size: niceSize };
        if (!isInit) {
            setTimeout(() => { if (this.dbBUItem.size !== prevSize || this.dbBUItem.date !== prevDate) {
                this.dbBUNewData = true;
                setTimeout(() => { this.dbBUNewData = false; }, 1500);
            } }, 1500);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    uploadDBBU() {
        this.logger.info('[Settings|uploadFireDBBU] ()...');
        let instOnce = 0;
        this.evServ.subscribe('dbbuBlob', blob => {
            this.evServ.destroy('dbbuBlob');
            this.evServ.subscribe('dbbuULProg', ulD => {
                switch (ulD.event) {
                    case 'running':
                        if (instOnce === 0) {
                            instOnce++;
                            this.dbBUULStatus = 'inprog';
                        }
                        ;
                        this.dbBUULPerc = ulD.data.perc;
                        break;
                    case 'successData':
                        this.dbBUManAct = { action: 'create', stage: 'success' };
                        this.dbBUULStatus = 'success';
                        this.dbBUULPerc = 100;
                        this.hasDBBU = true;
                        this.updateDBBUMeta({ meta: ulD.data.meta, dlurl: ulD.data.dlurl });
                        this.evServ.showToast('success', 'Backup Successful');
                        setTimeout(() => {
                            this.dbBUManAct = null;
                            this.dbBUULStatus = null;
                            this.dbBUULPerc = 0;
                            this.evServ.destroy('dbbuULProg');
                        }, 1500);
                        break;
                    case 'errorData':
                        this.dbBUManAct = { action: 'create', stage: 'error' };
                        this.dbBUULStatus = 'error';
                        this.hasDBBU = false;
                        this.evServ.showToast('error', 'Backup Error');
                        this.getDBBUInfo('refresh');
                        setTimeout(() => {
                            this.dbBUManAct = null;
                            this.dbBUULStatus = null;
                            this.dbBUULPerc = 0;
                            this.evServ.destroy('dbbuULProg');
                        }, 1500);
                        break;
                }
            });
            this.fireServ.uploadFSDBBU(blob);
        });
        this.fileServ.getFireDBBUFile(this.deputy.uUK);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    installDBBU() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|installDBBU] ()...');
            let isOlder;
            let isSmaller;
            const dbStat = (yield this.fileServ.getCurrentDBStat(this.deputy.uUK)).data;
            let dbUTS;
            dbStat.mtime >= dbStat.ctime ? dbUTS = dbStat.mtime / 1000 : dbUTS = dbStat.ctime / 1000;
            const dbSize = dbStat.size;
            const buUTS = this.dT.getUT(new Date(this.dbBUMeta.updated));
            const buSize = this.dbBUMeta.size;
            dbUTS > buUTS ? isOlder = true : isOlder = false;
            dbSize > buSize ? isSmaller = true : isSmaller = false;
            let warnMsg;
            if (!isOlder && !isSmaller) {
                warnMsg = '';
            }
            else {
                warnMsg = '𝗪𝗔𝗥𝗡𝗜𝗡𝗚: Backup DB is';
                if (isOlder) {
                    warnMsg = warnMsg + ' OLDER';
                }
                ;
                if (isOlder && isSmaller) {
                    warnMsg = warnMsg + ' & ';
                }
                ;
                if (isSmaller) {
                    warnMsg = warnMsg + ' SMALLER';
                }
                ;
                warnMsg = warnMsg + ' than Active DB.\n\n';
            }
            ;
            const { value } = yield _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog.confirm({ title: 'Confirm DB Install', message: '' + warnMsg + 'Installing a Backup will REPLACE your Active DB and RESTART the App.\n\nAre you SURE you want to proceed?', okButtonTitle: 'Yes, Proceed' });
            if (value) {
                this.logger.info('[Settings|dbBUAction|Install] (Install Warning) - User Confirmed - Installing & Reloading App...');
                this.sqlServ.lrQC();
                this.evServ.subscribe('cpRevertDBDone', rvD => {
                    this.evServ.destroy('cpRevertDBDone');
                    this.logger.info('[Settings|dbBUAction|Install] (Create Revert DB) SUCCESS: ' + rvD.uri);
                    this.storeServ.setObject('newDBInstall', rvD);
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                        this.evServ.subscribe('installBUDBDone', insD => {
                            this.evServ.destroy('installDBDBDone');
                            if (insD) {
                                this.evServ.showToast('warning', 'DB Installed - Restart Sheriff!');
                                this.dbBUManAct = { action: 'install', stage: 'success' };
                                setTimeout(() => { this.dbBUManAct = null; }, 1500);
                                setTimeout(() => { _capacitor_app__WEBPACK_IMPORTED_MODULE_16__.App.exitApp(); }, 2000);
                            }
                            else {
                                this.evServ.showToast('error', 'DB Install Failed');
                                this.dbBUManAct = { action: 'install', stage: 'fail' };
                                setTimeout(() => { this.dbBUManAct = null; }, 1500);
                            }
                        });
                        const dlInstallBURes = yield this.fileServ.dlFireBUForInstall(this.dbBUDLUrl);
                        if (dlInstallBURes) {
                            this.sqlServ.installFireBU();
                        }
                        else {
                            this.evServ.showToast('error', 'Backup Download Failed');
                            this.evServ.destroy('installDBDBDone');
                            return;
                        }
                    }), 500);
                });
                this.sqlServ.createRevertDB();
            }
            else {
                this.evServ.showToast('cross', 'Cancelled');
                this.dbBUManAct = { action: 'install', stage: 'fail' };
                setTimeout(() => { this.dbBUManAct = null; }, 1500);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    deleteDBBU() {
        this.logger.info('[Settings|deleteDBBU] ()...');
        this.evServ.subscribe('delFSDBBU', tf => {
            this.evServ.destroy('delFSDBBU');
            if (tf) {
                this.dbBUManAct = { action: 'delete', stage: 'success' };
                this.getDBBUInfo('refresh');
                setTimeout(() => { this.dbBUManAct = null; }, 1500);
            }
            else {
                this.dbBUManAct = { action: 'delete', stage: 'fail' };
                setTimeout(() => { this.dbBUManAct = null; }, 1500);
            }
        });
        this.fireServ.deleteFSDBBU();
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    dbBUAction(action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (action === 'upload') {
                this.dbBUManAct = { action: 'create', stage: 'inprog' };
                this.uploadDBBU();
            }
            ;
            if (action === 'install') {
                this.dbBUManAct = { action: 'install', stage: 'inprog' };
                this.installDBBU();
            }
            ;
            if (action === 'delete') {
                this.dbBUManAct = { action: 'delete', stage: 'inprog' };
                this.deleteDBBU();
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    checkNotePerms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (this.notePerms !== null) {
                return Promise.resolve(this.notePerms);
            }
            else {
                const cNPermsRes = (yield this.noteServ.noteGetPerms()).result;
                this.notePerms = cNPermsRes;
                return Promise.resolve(this.notePerms);
            }
        });
    }
    // -------------------------------------------------------------------------------------
    openAlertSchedule() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Settings|openAlertSchedule] ()...');
            let aSchedOpts = { component: _modals_alertschedule_alertschedule_page__WEBPACK_IMPORTED_MODULE_2__.AlertSchedulePage, componentProps: null, showBackdrop: true, backdropDismiss: true, cssClass: 'alert-schedule-modal-class', animated: true, mode: 'md', keyboardClose: true, id: 'alert-schedule-modal' };
            let rawSchedData = [];
            const pCalEvs = this.calServ.schedEvs;
            const hasCalEv = (type, dId) => { let hasCalEv; for (let i = 0; i < pCalEvs[type].length; i++) {
                const pCO = pCalEvs[type][i];
                if (pCO.dId.toString() === dId.toString()) {
                    hasCalEv = true;
                }
            } ; return hasCalEv; };
            const valDate = (tD) => { if (this.dT.isV(new Date(tD))) {
                return new Date(tD);
            }
            else {
                return this.dT.pISO(tD);
            } };
            if (this.appSettings.alerts.options.alertMethods.value.phone) {
                // If Note Alerts Enabled --------------------------------
                const pNotes = yield this.noteServ.notePending();
                if (pNotes.result && pNotes.data.length > 0) {
                    const pNData = pNotes.data;
                    for (let i = 0; i < pNData.length; i++) {
                        const sNRaw = pNData[i];
                        const sNId = sNRaw.id;
                        const sNAlertAt = valDate(sNRaw.schedule.at);
                        const sNEventAt = valDate(sNRaw.extra.evdate);
                        const sNType = sNRaw.extra.type;
                        const sNUCType = sNRaw.extra.uctype;
                        const sNIsTest = sNRaw.extra.isTest;
                        const sNObj = { type: sNType, uctype: sNUCType, id: sNId, eventat: sNEventAt, alertat: sNAlertAt, methods: { phone: true }, isTest: sNIsTest };
                        if (hasCalEv(sNObj.type, sNObj.id)) {
                            sNObj.methods['calendar'] = true;
                        }
                        else {
                            sNObj.methods['calendar'] = false;
                        }
                        ;
                        rawSchedData.push(sNObj);
                    }
                    ;
                    aSchedOpts.componentProps = { rawAlertList: rawSchedData };
                }
                else {
                    aSchedOpts.componentProps = { rawAlertList: [] };
                }
            }
            else {
                // If Note Alerts NOT Enabled --------------------------
                let pCalEvsArr = [];
                // Shifts...
                if (pCalEvs.shift.length > 0) {
                    const shiftB4Mins = this.appSettings.alerts.options.alertBefore.value.shift.mins;
                    for (let i = 0; i < pCalEvs.shift.length; i++) {
                        const pCalEvShiftDepId = Number(pCalEvs.shift[i].dId);
                        const pCalEvShiftO = (yield this.calServ.findCalEvent(pCalEvShiftDepId)).data[0];
                        const pCalEvShiftEventAt = this.dT.parseStr(pCalEvShiftO.startDate, 'yyyy-MM-dd HH:mm:ss');
                        const pCalEvShiftAlertAt = this.dT.subMs(pCalEvShiftEventAt, shiftB4Mins);
                        const pCalSchedShiftOb = { type: 'shift', uctype: 'Shift', id: pCalEvShiftDepId, eventat: pCalEvShiftEventAt, alertat: pCalEvShiftAlertAt, methods: { phone: false, calendar: true }, isTest: false };
                        rawSchedData.push(pCalSchedShiftOb);
                    }
                }
                ;
                // Tasks...
                if (pCalEvs.task.length > 0) {
                    const taskB4Mins = this.appSettings.alerts.options.alertBefore.value.task.mins;
                    for (let i = 0; i < pCalEvs.task.length; i++) {
                        const pCalEvTaskDepId = Number(pCalEvs.task[i].dId);
                        const pCalEvTaskO = (yield this.calServ.findCalEvent(pCalEvTaskDepId)).data[0];
                        const pCalEvTaskEventAt = this.dT.parseStr(pCalEvTaskO.startDate, 'yyyy-MM-dd HH:mm:ss');
                        const pCalEvTaskAlertAt = this.dT.subMs(pCalEvTaskEventAt, taskB4Mins);
                        const pCalSchedShiftOb = { type: 'task', uctype: 'Task', id: pCalEvTaskDepId, eventat: pCalEvTaskEventAt, alertat: pCalEvTaskAlertAt, methods: { phone: false, calendar: true }, isTest: false };
                        rawSchedData.push(pCalSchedShiftOb);
                    }
                }
                ;
                aSchedOpts.componentProps = { rawAlertList: rawSchedData };
            }
            ;
            const sortdArr = lodash__WEBPACK_IMPORTED_MODULE_19__.sortBy(aSchedOpts.componentProps.rawAlertList, 'id');
            aSchedOpts.componentProps.rawAlertList = sortdArr;
            const aSchedModal = yield this.modalCtrl.create(aSchedOpts);
            document.addEventListener('ionModalDidPresent', () => { this.logger.info('[EVENT]: IonModalDidPresent...'); this.alertSchedShowing = true; });
            yield aSchedModal.present();
            const { data, role } = yield aSchedModal.onDidDismiss();
            this.alertSchedShowing = false;
            this.logger.info('onDidDismiss resolved with data/role: ' + data + '/' + role);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    /// CALENDAR FNS  
    ////////////////////////////////////////////////////////////////////////////////////////
    checkCalPerms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (this.calPerms !== null) {
                return Promise.resolve(this.calPerms);
            }
            else {
                if (this.calServ.hasPerms !== null) {
                    return Promise.resolve(this.calServ.hasPerms);
                }
                else {
                    return Promise.resolve((yield this.calServ.checkCalPerms()));
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    /// GENERAL PAGE FNS
    ////////////////////////////////////////////////////////////////////////////////////////
    pageEnterAnim() {
        this.logger.info('[Settings|pageEnterAnim] ()...');
        this.evServ.subscribe('doPageEnterAnim', () => {
            const urlArr = this.router.url.split('/');
            const pageKey = urlArr[urlArr.length - 1];
            const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-slogo.' + pageKey);
            const preImg = '../../assets/img/slogo-';
            const cProgEle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-progcirc.' + pageKey);
            const patchEles = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
            const starEle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-star.' + pageKey);
            const pageTitle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-title.' + pageKey);
            const titleBar = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-leftbar.' + pageKey);
            const leftCol = jquery__WEBPACK_IMPORTED_MODULE_18__('.sheriff-page-header-col.left-col.' + pageKey);
            const calcBarW = Math.round((jquery__WEBPACK_IMPORTED_MODULE_18__(leftCol).outerWidth() + 6) - (jquery__WEBPACK_IMPORTED_MODULE_18__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_18__(pageTitle).outerWidth())) + 'px';
            const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_18__('.sheriff-title-leftanimbar-inner.' + pageKey);
            const titleText = jquery__WEBPACK_IMPORTED_MODULE_18__('.sheriff-title.tight-wrap.' + pageKey);
            jquery__WEBPACK_IMPORTED_MODULE_18__(patchEles).addClass('hidden');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_18__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_18__(starEle).addClass('hcl-star-startanim');
                this.progCirc.outerStrokeColor = '#FF9800';
                this.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_18__(sLogoEle).attr('src', preImg + 'g.png');
                this.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_18__(sLogoEle).attr('src', preImg + 'w.png');
                    this.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');
                    jquery__WEBPACK_IMPORTED_MODULE_18__(titleBar).css('width', calcBarW);
                    setTimeout(() => {
                        jquery__WEBPACK_IMPORTED_MODULE_18__(animBarEnd).addClass('showing');
                        setTimeout(() => {
                            jquery__WEBPACK_IMPORTED_MODULE_18__(titleText).addClass('scrolledin');
                            setTimeout(() => {
                                jquery__WEBPACK_IMPORTED_MODULE_18__(titleBar).addClass('dimmed');
                            }, 200);
                        }, 200);
                    }, 400);
                    ///////////////////////////////////
                    setTimeout(() => {
                        this.progCirc.percent = 0;
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_18__(cProgEle).css('display', 'unset'); }, 1000);
                        jquery__WEBPACK_IMPORTED_MODULE_18__(starEle).removeClass('hcl-star-startanim');
                        this.evServ.destroy('doPageEnterAnim');
                    }, 600);
                }, 400);
            }, 600);
        });
    }
    //////////////////////////////////////////////////////
    niceBytes(bytes, decimals = 2) {
        if (bytes === 0)
            return 'empty';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
        this.logger.info('[Settings|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
        const doAni = () => new Promise((resolve) => {
            const aniStr = 'animate__animated animate__' + aniName;
            const delStr = 'animDel-' + aniDel;
            const durStr = 'animDur-' + aniDur;
            jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).on('animationend', () => {
                if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr);
                }
                if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).remove();
                }
                if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).css('display', 'none');
                }
                resolve(true);
            });
            if (aniDel > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).addClass(delStr);
            }
            if (aniDur > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).addClass(durStr);
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).addClass(aniStr);
            }
        });
        doAni();
    }
};
SettingsPage.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_21__.NGXLogger },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_3__.DeputyService },
    { type: _services_filesystem_service__WEBPACK_IMPORTED_MODULE_6__.FileSystemService },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_7__.SQLiteService },
    { type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_8__.DateTimeService },
    { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController },
    { type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_10__.CalendarService },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__.FirebaseService },
    { type: _services_push_service__WEBPACK_IMPORTED_MODULE_11__.PushService }
];
SettingsPage.propDecorators = {
    databaseAutobackupRG: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewChild, args: ['databaseAutobackupRG',] }]
};
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({ selector: 'app-settings', template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    ////////////////////////////////////////////////////////////////////////////////////////
], SettingsPage);



/***/ }),

/***/ 69519:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 14718:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col settings\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar settings\">\n                                <div class=\"sheriff-title-leftanimbar-inner settings\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title settings\">\n                                    <div class=\"sheriff-title tight-wrap settings\">Settings</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring settings\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle settings hcl-progcirc settings\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch settings\">\n                                        <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch settings\"></div>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star settings\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo settings\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div class=\"sheriff-page-backbtn-wrapper settings\">\n                                    <ion-back-button icon=\"chevron-back-outline\" class=\"sheriff-backbtn settings\" defaultHref=\"/tabs\"></ion-back-button>\n                                </div>\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button settings\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sherrif-content tab-content settings\">\n    <!-- SETTINGS-CONTENT -->\n    \n    <!-- CONTENT HEADING -->\n    <div class=\"sheriff-tabcontent-mainheading-wrapper settings\">\n        <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid settings\">\n            <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 settings\">\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 settings\">\n\n                </ion-col>\n                <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 settings\">\n                    <img class=\"sheriff-reflect-title settings\" src=\"../../assets/img/sheriff-reflecttitle-settings.png\">\n                </ion-col>\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 settings\">\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <!-- ITEM LIST CONTENT -->\n    <div *ngIf=\"domDataReady\" class=\"sheriff-tabcontent-itemlistcontent-wrapper settings\">\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper database\">\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <ion-grid class=\"sheriff-grid settings-page-grid heading-grid database\">\n                <ion-row (click)=\"sectionVisToggle('database',databaseVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                    <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                        <div class=\"sheriff-settings-subtitle-wrapper\">\n                            <div class=\"settings-main-title-text database\">Database<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.database}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                        <ion-icon *ngIf=\"appSettings.database.showSection\" class=\"settings-section-heading-vis-ico dbbackups visible\" name=\"eye-outline\"></ion-icon>\n                        <ion-icon *ngIf=\"!appSettings.database.showSection\" class=\"settings-section-heading-vis-ico dbbackups hidden\" name=\"eye-off-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                        <ion-toggle #databaseVisToggle checked={{appSettings.database.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle database\"></ion-toggle>\n                        <div class=\"setting-tog-shield\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <div *ngIf=\"appSettings.database.showSection\" class=\"settings-section-toggle-inner-wrapper database\">\n                <!-- -------------------------------------------------------------------------- -->\n                <!-- DB Options -->\n                <!-- -------------------------------------------------------------------------- -->\n                <ion-grid class=\"sheriff-grid sheriff-settings-main-grid database\">\n                    <ion-row class=\"sheriff-row sheriff-settings-main-row database\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-settings-main-col database\">\n                            <ion-grid class=\"sheriff-grid settings-option-grid database-autobackup\">\n                                <ion-row class=\"sheriff-row settings-option-row option-action-row database-autobackup\">\n                                    <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col database-autobackup\">\n                                        <div class=\"settings-option-name-wrapper database-autobackup\">\n                                            <div class=\"settings-option-name-label-txt\">Backup</div>\n                                            <ion-icon (click)=\"toggleOptInfo('database','backupMode')\" [ngStyle]=\"{'color':appSettings.database.options.backupMode.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col database-autobackup\">\n                                        <ion-radio-group #databaseAutobackupRG (ionChange)=\"changeDatabaseOpts('backupMode',databaseAutobackupRG.value)\" [allowEmptySelection]=\"false\" [value]=\"appSettings.database.options.backupMode.value\" class=\"sheriff-settings-radio-group database-autobackup\">\n                                            <ion-item class=\"settings-radio-item database-autobackup sheriff-radioitem-3opts auto\">\n                                                <div class=\"settings-radio-item-labelcenterwrap\">\n                                                    <ion-radio [mode]=\"'md'\" [value]=\"'auto'\" class=\"sheriff-settings-radio database-autobackup-option auto\"></ion-radio>\n                                                    <div class=\"sheriff-settings-radio-label database-autobackup-label auto\">auto</div>\n                                                </div>\n                                            </ion-item>\n                                            <ion-item class=\"settings-radio-item database-autobackup sheriff-radioitem-3opts user\">\n                                                <div class=\"settings-radio-item-labelcenterwrap\">\n                                                    <ion-radio [mode]=\"'md'\" [value]=\"'user'\" class=\"sheriff-settings-radio database-autobackup-option user\"></ion-radio>\n                                                    <div class=\"sheriff-settings-radio-label database-autobackup-label user\">user</div>\n                                                </div>\n                                            </ion-item>\n                                            <ion-item class=\"settings-radio-item database-autobackup sheriff-radioitem-3opts none\">\n                                                <div class=\"settings-radio-item-labelcenterwrap\">\n                                                    <ion-radio [mode]=\"'md'\" [value]=\"'none'\" class=\"sheriff-settings-radio database-autobackup-option none\"></ion-radio>\n                                                    <div class=\"sheriff-settings-radio-label database-autobackup-label none\">none</div>\n                                                </div>\n                                            </ion-item>\n                                        </ion-radio-group>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"appSettings.database.options.backupMode.info\" class=\"sheriff-row settings-option-row option-info-row database-autobackup\">\n                                    <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col database-autobackup\">\n                                        <ion-button (click)=\"toggleOptInfo('database','backupMode')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                            <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col database-autobackup\">\n                                        <div class=\"settings-option-info-text-wrapper database-autobackup\">\n                                            <div class=\"settings-info-line-item database-autobackup-info auto\"><span class=\"option-info-label\">Auto:</span>DB backups are created/updated automatically each time a change to the Active database occurs.</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info manual\"><span class=\"option-info-label\">User:</span>A DB backup will only be created/updated when you manually action it using the 'Backup' button below.</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info off\"><span class=\"option-info-label\">None:</span>No DB backups are created or available.</div>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                            <ion-grid *ngIf=\"appSettings.database.options.backupMode.value==='user'\" class=\"sheriff-grid settings-option-grid database-manualbackup\">\n                                <ion-row class=\"sheriff-row settings-option-row option-action-row database-manualbackup\">\n                                    <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col database-manualbackup\">\n                                        <div class=\"settings-option-name-wrapper database-autobackup\">\n                                            <div class=\"settings-option-name-label-txt\">Actions</div>\n                                            <ion-icon (click)=\"toggleOptInfo('database','backupActions')\" [ngStyle]=\"{'color':appSettings.database.options.backupActions.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct!==null\" size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup action-status-col\">\n                                        <div style=\"color:#848484\" *ngIf=\"dbBUManAct.stage==='inprog'\" class=\"database-manualactions-actionstatus-msgtext inprog\">\n                                            <ion-spinner [name]=\"'dots'\" [duration]=\"500\" class=\"settings-uploaddbbu-spinner\"></ion-spinner>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='create'&&dbBUItem===null\">Creating</span>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='create'&&dbBUItem!==null\">Updating</span>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='delete'\">Deleting</span>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='install'\">Installing</span> Backup DB\n                                        </div>\n                                        <div style=\"color:var(--ion-color-danger)\" *ngIf=\"dbBUManAct.stage==='fail'\" class=\"database-manualactions-actionstatus-msgtext fail\">\n                                            <ion-icon *ngIf=\"dbBUManAct.stage==='fail'\" style=\"color:var(--ion-color-danger);margin:0 auto;padding-right:2px\" name=\"close\"></ion-icon>Action Failed\n                                        </div>\n                                        <div style=\"color:var(--ion-color-success)\" *ngIf=\"dbBUManAct.stage==='success'\" class=\"database-manualactions-actionstatus-msgtext success\">\n                                            <ion-icon *ngIf=\"dbBUManAct.stage==='success'\" style=\"color:var(--ion-color-success);margin:0 auto;padding-right:2px\" name=\"checkmark\"></ion-icon>Action Successful\n                                        </div>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct===null\" size=\"3\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup actb savebu\">\n                                        <ion-button (click)=\"dbBUAction('upload')\" [disabled]=\"appSettings.database.options.backupMode.value!=='user'\" class=\"sheriff-btn sheriff-settings-manualbackup-btn save\">\n                                            <div *ngIf=\"dbBUItem===null\" class=\"sheriff-btn-txt db-save\">Create</div>\n                                            <div *ngIf=\"dbBUItem!==null\" class=\"sheriff-btn-txt db-save\">Update</div>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct===null\" size=\"3\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup actb deletebu\">\n                                        <ion-button [disabled]=\"hasDBBU===false||appSettings.database.options.backupMode.value!=='user'?true:false\" (click)=\"dbBUAction('delete')\" class=\"sheriff-btn sheriff-settings-manualbackup-btn delete\">\n                                            <div class=\"sheriff-btn-txt db-delete\">Delete</div>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct===null\" size=\"3\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup actb installbu\">\n                                        <ion-button [disabled]=\"hasDBBU===false||appSettings.database.options.backupMode.value!=='user'?true:false\" (click)=\"dbBUAction('install')\" class=\"sheriff-btn sheriff-settings-manualbackup-btn install\">\n                                            <div class=\"sheriff-btn-txt db-install\">Install</div>\n                                        </ion-button>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"appSettings.database.options.backupActions.info\" class=\"sheriff-row settings-option-row option-info-row database-manualactions\">\n                                    <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col database-autobackup\">\n                                        <ion-button (click)=\"toggleOptInfo('database','backupActions')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                            <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col database-autobackup\">\n                                        <div class=\"settings-option-info-text-wrapper database-autobackup\">\n                                            <div class=\"settings-info-line-item database-autobackup-info create\"><span class=\"option-info-label\">Create:</span>Save a backup copy of your current/active DB to the cloud (DB Backups must be set to 'User').</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info delete\"><span class=\"option-info-label\">Delete:</span>Delete your backup DB (if any) from the cloud.</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info install\"><span class=\"option-info-label\">Install:</span>Replace your current/active DB with your backup copy from the cloud and restart Sheriff.</div>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                            <ion-grid *ngIf=\"appSettings.database.options.backupMode.value!=='none'\" class=\"sheriff-grid database-list-table-grid\">\n                                <ion-row *ngIf=\"hasDBBU&&dbBUItem!==null\" class=\"sheriff-row settings-page-row col-label-row dblist-head-row\">\n                                    <ion-col size=\"4\" class=\"sheriff-col col-label-col name\">database</ion-col>\n                                    <ion-col size=\"4\" class=\"sheriff-col col-label-col date\">last saved</ion-col>\n                                    <ion-col size=\"2\" class=\"sheriff-col col-label-col size\">file size</ion-col>\n                                    <ion-col size=\"2\" class=\"sheriff-col col-label-col saved\">\n                                        <ion-icon class=\"settings-db-saved-ico locate\" name=\"locate\"></ion-icon>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"hasDBBU&&dbBUItem!==null\" class=\"sheriff-row settings-page-row founddbs-row\">\n                                  <ion-col size=\"4\" class=\"sheriff-col settings-page-col founddbs-col name dbbuitem\">\n                                      <div [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"sheriff-settings-dbbulist-wrapper name\">{{dbBUItem.name}}<span class=\"dbnewd settings-dbname-suffix\">(SQLite.db)</span></div>\n                                  </ion-col>\n                                  <ion-col *ngIf=\"dbBUULStatus===null\" size=\"4\" class=\"sheriff-col settings-page-col founddbs-col date dbbuitem\">\n                                      <div [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"dbnewd sheriff-settings-dbbulist-wrapper date\">{{dbBUItem.date}}</div>\n                                  </ion-col>\n                                  <ion-col *ngIf=\"dbBUULStatus===null\" size=\"2\" class=\"sheriff-col settings-page-col founddbs-col size dbbuitem\">\n                                      <div [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"dbnewd sheriff-settings-dbbulist-wrapper size\">{{dbBUItem.size}}</div>\n                                  </ion-col>\n                                  <ion-col *ngIf=\"dbBUULStatus===null\" size=\"2\" class=\"sheriff-col settings-page-col founddbs-col saved dbbuitem\">\n                                      <div class=\"dbnewd sheriff-settings-dbbulist-wrapper saved\">\n                                          <ion-icon [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"dbnewd settings-db-saved-ico phone\" name=\"cloud\"></ion-icon>\n                                      </div>\n                                  </ion-col>\n                                  <ion-col class=\"dbbuupload-pbar-col\" *ngIf=\"dbBUULStatus!==null\" size=\"8\">\n                                    <div class=\"sheriff-settings-firedbbupload-progressbar-wrapper\">\n                                      <ion-progress-bar [ngClass]=\"{'ulfiredbbu-inprog':dbBUULStatus==='inprog','ulfiredbbu-success':dbBUULStatus==='success','ulfiredbbu-error':dbBUULStatus==='error'}\" *ngIf=\"dbBUULPerc>0\" class=\"sheriff-settings-firedbbuupload-progress\" value={{dbBUULPerc}}></ion-progress-bar>\n                                    </div>\n                                  </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"!hasDBBU&&dbBUError!==null\" class=\"sheriff-row settings-page-row nodbbu-row\">\n                                  <ion-col class=\"sheriff-col settings-page-col nodbbu-col\">\n                                    <div class=\"nodbbu-warning-text-wrapper\">\n                                      {{dbBUError}}\n                                    </div>\n                                  </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper alerts\">\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <ion-grid class=\"sheriff-grid settings-page-grid heading-grid alerts\">\n                <ion-row (click)=\"sectionVisToggle('alerts',alertsVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                    <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                        <div class=\"sheriff-settings-subtitle-wrapper\">\n                            <div class=\"settings-main-title-text\">alerts<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.alerts}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                        <ion-icon *ngIf=\"appSettings.alerts.showSection\" class=\"settings-section-heading-vis-ico alerts visible\" name=\"eye-outline\"></ion-icon>\n                        <ion-icon *ngIf=\"!appSettings.alerts.showSection\" class=\"settings-section-heading-vis-ico alerts hidden\" name=\"eye-off-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                        <ion-toggle #alertsVisToggle checked={{appSettings.alerts.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle alerts\"></ion-toggle>\n                        <div class=\"setting-tog-shield\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <!-- -------------------- ALERTS -------------------- -->\n            <ion-grid *ngIf=\"appSettings.alerts.showSection\" class=\"sheriff-grid sheriff-settings-main-grid alerts\">\n                <ion-row class=\"sheriff-row settings-page-row\">\n                    <ion-col size=\"12\" class=\"sheriff-col\">\n                        <!-- -------------------- ALERT - METHODS -------------------- -->\n                        <ion-grid class=\"sheriff-grid settings-option-grid alerts-methods\">\n                            <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-methods\">\n                                <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-methods\">\n                                    <div class=\"settings-option-name-wrapper alerts-methods\">\n                                        <div class=\"settings-option-name-label-txt\">Methods</div>\n                                        <ion-icon (click)=\"toggleOptInfo('alerts','alertMethods')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertMethods.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-methods phone-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertMethods('phone',amcbPhone.checked)\" class=\"settings-alertsopt-methods-item phone\">\n                                        <div class=\"settings-alertsopt-methods-wrapper phone\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #amcbPhone class=\"settings-alertsopt-methods-btn-cb phone\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertMethods.value.phone\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':amcbPhone.checked?'var(--ion-color-success)':'#aaa'}\" [ngClass]=\"{'notepermsbad':amcbPhone.checked&&notePerms===false}\" class=\"sheriff-btn-txt settings-alertsopt-methods-btn-txt phone\">Phone</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-methods calendar-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertMethods('calendar',amcbCalendar.checked)\" class=\"settings-alertsopt-methods-item calendar\">\n                                        <div class=\"settings-alertsopt-methods-wrapper calendar\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #amcbCalendar class=\"settings-alertsopt-methods-btn-cb calendar\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertMethods.value.calendar\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':amcbCalendar.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-methods-btn-txt calendar\">Calendar</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-methods email-cb-col\">\n                                  <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertMethods('email',amcbEmail.checked)\" class=\"settings-alertsopt-methods-item email\">\n                                      <div class=\"settings-alertsopt-methods-wrapper email\">\n                                          <ion-checkbox [disabled]=\"isRescheduling\" #amcbEmail class=\"settings-alertsopt-methods-btn-cb email\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertMethods.value.email\"></ion-checkbox>\n                                          <div [ngStyle]=\"{'color':amcbEmail.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-methods-btn-txt email\">Email</div>\n                                      </div>\n                                  </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"appSettings.alerts.options.alertMethods.info\" class=\"sheriff-row settings-option-row option-info-row alert-methods\">\n                                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-methods\">\n                                    <ion-button (click)=\"toggleOptInfo('alerts','alertMethods')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                    <div class=\"settings-option-info-text-wrapper alert-methods\">\n                                        <div class=\"settings-info-line-item alert-methods-info phone\"><span class=\"option-info-label\">Phone:</span>Local notifications triggered on your device/phone.</div>\n                                        <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">Calendar:</span>Calendar events & reminders added to your nominated calendar.</div>\n                                        <div class=\"settings-info-line-item alert-methods-info email\"><span class=\"option-info-label\">Email:</span>Reminder messages emailed to your primary email.</div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- ALERT - EVENTS -------------------- -->\n                        <ion-grid *ngIf=\"appSettings.alerts.options.alertMethods.value.phone||appSettings.alerts.options.alertMethods.value.calendar\" class=\"sheriff-grid settings-option-grid alerts-eventsevents\">\n                            <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-events\">\n                                <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-events\">\n                                    <div class=\"settings-option-name-wrapper alerts-events\">\n                                        <div class=\"settings-option-name-label-txt\">Events</div>\n                                        <ion-icon (click)=\"toggleOptInfo('alerts','alertEvents')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertEvents.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-events shift-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertEvents('shift',aecbShift.checked)\" class=\"settings-alertsopt-events-item shift\">\n                                        <div class=\"settings-alertsopt-events-wrapper shift\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #aecbShift class=\"settings-alertsopt-events-btn-cb shift\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertEvents.value.shift\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':aecbShift.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-events-btn-txt shift\">Shifts</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-events task-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertEvents('task',aecbTask.checked)\" class=\"settings-alertsopt-events-item task\">\n                                        <div class=\"settings-alertsopt-events-wrapper task\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #aecbTask class=\"settings-alertsopt-events-btn-cb task\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertEvents.value.task\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':aecbTask.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-events-btn-txt task\">Tasks</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-events tsheet-cb-col\">\n                                  <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertEvents('tsheet',aecbTSheet.checked)\" class=\"settings-alertsopt-events-item tsheet\">\n                                      <div class=\"settings-alertsopt-events-wrapper tsheet\">\n                                          <ion-checkbox [disabled]=\"isRescheduling\" #aecbTSheet class=\"settings-alertsopt-events-btn-cb tsheet\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertEvents.value.tsheet\"></ion-checkbox>\n                                          <div [ngStyle]=\"{'color':aecbTSheet.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-events-btn-txt tsheet\">TSheets</div>\n                                      </div>\n                                  </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.info\" class=\"sheriff-row settings-option-row option-info-row alert-events\">\n                                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-events\">\n                                    <ion-button (click)=\"toggleOptInfo('alerts','alertEvents')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                    <div class=\"settings-option-info-text-wrapper alert-events\">\n                                      <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">Shifts:</span>Alerts triggered X time before a shift starts or a confirm/accept shift confirmation deadline expires.</div>\n                                      <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">Tasks:</span>Alerts triggered X time before a task is deadline is due (if Due By set)</div>\n                                      <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">TSheets:</span>Alerts triggered X time after you fail/forget to clock on/off</div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- ALERT - BEFORE -------------------- -->\n                        <ion-grid *ngIf=\"(appSettings.alerts.options.alertMethods.value.phone||appSettings.alerts.options.alertMethods.value.calendar)&&(appSettings.alerts.options.alertEvents.value.shift||appSettings.alerts.options.alertEvents.value.task)\" class=\"sheriff-grid settings-option-grid alerts-before\">\n                            <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-before\">\n                                <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-before\">\n                                    <div class=\"settings-option-name-wrapper before\">\n                                        <div class=\"settings-option-name-label-txt\">Times</div>\n                                        <ion-icon (click)=\"toggleOptInfo('alerts','alertBefore')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertBefore.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col alerts-before-settings-col\">\n                                    <ion-grid class=\"sheriff-grid settings-suboptions-grid alerts-before-grid\">\n                                        <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.value.shift\" [ngStyle]=\"{'border-bottom':appSettings.alerts.options.alertEvents.value.task?'solid 1px #212121':'0'}\" class=\"sheriff-row settings-suboptions-row alerts-before-row fn-btn-row shifts\">\n                                            <ion-col size=\"3\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-label-col shifts\">\n                                                Shifts:\n                                            </ion-col>\n                                            <ion-col size=\"2\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-nicevalue-col shifts\">\n                                              <div class=\"alerts-b4-selected-value-wrapper\">\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===1\" class=\"alerts-before-nicevalue\">30</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===2\" class=\"alerts-before-nicevalue\">60</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===3\" class=\"alerts-before-nicevalue\">90</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===4\" class=\"alerts-before-nicevalue\">2</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===5\" class=\"alerts-before-nicevalue\">6</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===6\" class=\"alerts-before-nicevalue\">12</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===1||appSettings.alerts.options.alertBefore.value.shift.range===2||appSettings.alerts.options.alertBefore.value.shift.range===3\" class=\"alerts-b4-mh-suffix mins\">mins</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===4||appSettings.alerts.options.alertBefore.value.shift.range===5||appSettings.alerts.options.alertBefore.value.shift.range===6\" class=\"alerts-b4-mh-suffix hours\">hrs</span>\n                                              </div>\n                                            </ion-col>\n                                            <ion-col size=\"7\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-btn-col shifts\">\n                                                <ion-range [disabled]=\"isRescheduling\" #abRangeShift (ionChange)=\"changeAlertBefore('shift',abRangeShift.value)\" [debounce]=\"250\" [max]=\"6\" [min]=\"1\" [mode]=\"'ios'\" [pin]=\"false\" [snaps]=\"true\" [step]=\"1\" [ticks]=\"true\" [value]=\"appSettings.alerts.options.alertBefore.value.shift.range\" class=\"sheriff-settings-range alertbefore-range shifts\"></ion-range>\n                                            </ion-col>\n                                        </ion-row>\n                                        <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.value.task\" class=\"sheriff-row settings-suboptions-row alerts-before-row fn-btn-row tasks\">\n                                            <ion-col size=\"3\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-label-col tasks\">\n                                                Tasks:\n                                            </ion-col> \n                                            <ion-col size=\"2\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-nicevalue-col tasks\">\n                                              <div class=\"alerts-b4-selected-value-wrapper\">\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===1\" class=\"alerts-before-nicevalue\">30</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===2\" class=\"alerts-before-nicevalue\">60</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===3\" class=\"alerts-before-nicevalue\">90</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===4\" class=\"alerts-before-nicevalue\">2</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===5\" class=\"alerts-before-nicevalue\">6</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===6\" class=\"alerts-before-nicevalue\">12</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===1||appSettings.alerts.options.alertBefore.value.task.range===2||appSettings.alerts.options.alertBefore.value.task.range===3\" class=\"alerts-b4-mh-suffix mins\">mins</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===4||appSettings.alerts.options.alertBefore.value.task.range===5||appSettings.alerts.options.alertBefore.value.task.range===6\" class=\"alerts-b4-mh-suffix hours\">hrs</span>\n                                              </div>\n                                            </ion-col>\n                                            <ion-col size=\"7\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-btn-col tasks\">\n                                                <ion-range [disabled]=\"isRescheduling\" #abRangeTask (ionChange)=\"changeAlertBefore('task',abRangeTask.value)\" [debounce]=\"250\" [max]=\"6\" [min]=\"1\" [mode]=\"'ios'\" [pin]=\"false\" [snaps]=\"true\" [step]=\"1\" [ticks]=\"true\" [value]=\"appSettings.alerts.options.alertBefore.value.task.range\" class=\"sheriff-settings-range alertbefore-range tasks\"></ion-range>\n                                            </ion-col>\n                                        </ion-row>\n                                        <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.value.tsheet\" class=\"sheriff-row settings-suboptions-row alerts-before-row fn-btn-row tsheet\">\n                                          <ion-col size=\"3\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-label-col tsheets\">\n                                              TSheets:\n                                          </ion-col> \n                                          <ion-col size=\"2\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-nicevalue-col tsheets\">\n                                            <div class=\"alerts-b4-selected-value-wrapper\">\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===1\" class=\"alerts-before-nicevalue\">5</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===2\" class=\"alerts-before-nicevalue\">10</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===3\" class=\"alerts-before-nicevalue\">15</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===4\" class=\"alerts-before-nicevalue\">20</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===5\" class=\"alerts-before-nicevalue\">25</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===6\" class=\"alerts-before-nicevalue\">30</span>\n                                              <span class=\"alerts-b4-mh-suffix mins\">mins</span> \n                                            </div>\n                                          </ion-col>\n                                          <ion-col size=\"7\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-btn-col tsheets\">\n                                              <ion-range [disabled]=\"isRescheduling\" #abRangeTSheet (ionChange)=\"changeAlertBefore('tsheet',abRangeTSheet.value)\" [debounce]=\"250\" [max]=\"6\" [min]=\"1\" [mode]=\"'ios'\" [pin]=\"false\" [snaps]=\"true\" [step]=\"1\" [ticks]=\"true\" [value]=\"appSettings.alerts.options.alertBefore.value.tsheet.range\" class=\"sheriff-settings-range alertbefore-range tsheets\"></ion-range>\n                                          </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"appSettings.alerts.options.alertBefore.info\" class=\"sheriff-row settings-option-row option-info-row alert-before\">\n                                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-before\">\n                                    <ion-button (click)=\"toggleOptInfo('alerts','alertBefore')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                    <div class=\"settings-option-info-text-wrapper alert-before\">\n                                        <div class=\"settings-info-line-item alert-before-info shifts\">\n                                            <span class=\"option-info-label\">Shift:</span>Alert triggered X time before each shift/roster is due to start.\n                                        </div>\n                                        <div class=\"settings-info-line-item alert-before-info tasks\">\n                                          <span class=\"option-info-label\">Tasks:</span>Alert triggered X time before a task deadline (if 'Due By' set).\n                                        </div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- CALENDAR SELECTION ------------------ -->\n                        <ion-grid *ngIf=\"appSettings.alerts.options.alertMethods.value.calendar&&(appSettings.alerts.options.alertEvents.value.shift||appSettings.alerts.options.alertEvents.value.task)\"  class=\"sheriff-grid settings-option-grid calendarselect-grid\">\n                          <ion-row class=\"sheriff-row settings-option-row option-action-row calendarselect\">\n                            <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col calendarselect\">\n                                <div class=\"settings-option-name-wrapper calendarselect\">\n                                    <div class=\"settings-option-name-label-txt\">Calendar</div>\n                                    <ion-icon (click)=\"toggleOptInfo('alerts','alertCal')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertCal.info?'var(--ion-color-danger)':'#343434'}\"  class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                </div>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col calendarselect-col selectedcal-col\">\n                              <div class=\"sheriff-settings-selectedcal-value-wrapper\">{{selectedCal.name}}</div>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col calendarselect-col select-cal-btn-col\">\n                              <ion-button [disabled]=\"isRescheduling\" (click)=\"alertCalSelect(selectedCal)\" class=\"sheriff-btn settings-calselect-btn\">\n                                <ion-icon class=\"sheiff-btn-ico settings-calselect-btn-ico\" name=\"calendar-outline\"></ion-icon>\n                                <div class=\"sheriff-btn-txt settings-calselect-btn-txt\">Change</div>\n                              </ion-button>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row *ngIf=\"appSettings.alerts.options.alertCal.info\" class=\"sheriff-row settings-option-row option-info-row alert-cal\">\n                            <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-cal\">\n                                <ion-button (click)=\"toggleOptInfo('alerts','alertCal')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                    <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                </ion-button>\n                            </ion-col>\n                            <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                <div class=\"settings-option-info-text-wrapper alert-cal\">\n                                    <div class=\"settings-info-line-item alert-cal-info\">\n                                      Sheriff will add your shift/task events & reminders (as selected) to this calendar\n                                    </div>\n                                </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- ALERT - SCHEDULE -------------------- -->\n                        <ion-grid *ngIf=\"(appSettings.alerts.options.alertMethods.value.phone||appSettings.alerts.options.alertMethods.value.calendar)&&(appSettings.alerts.options.alertEvents.value.shift||appSettings.alerts.options.alertEvents.value.task)\" class=\"sheriff-grid settings-option-grid scheduled-alerts-grid\">\n                          <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-schedule\">\n                            <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-schedule\">\n                                <div class=\"settings-option-name-wrapper alerts-schedule\">\n                                    <div class=\"settings-option-name-label-txt\">Scheduled</div>\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col alerts-schedule-settings-col\">\n                              <ion-button (click)=\"openAlertSchedule()\" *ngIf=\"!isRescheduling\" class=\"sheriff-btn sheriff-settings-openalertschedule-btn\">\n                                <div class=\"sheriff-btn-txt openalertschedule-btn-txt\"><ion-icon class=\"view-scheduled-alerts-btn-ico\" name=\"search\"></ion-icon>View Alert Schedule</div>\n                              </ion-button>\n                              <div *ngIf=\"isRescheduling\" style=\"color:#848484\" class=\"alerts-rescheduling-msgtext inprog\">\n                                <ion-spinner [name]=\"'dots'\" [duration]=\"500\" class=\"settings-reschedlingalerts-spinner\"></ion-spinner>\n                                <span style=\"margin-right:2px\">Reschedling Alerts</span>\n                              </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper payrates\">\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <ion-grid class=\"sheriff-grid settings-page-grid heading-grid payrates\">\n                <ion-row (click)=\"sectionVisToggle('payrates',payratesVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                    <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                        <div class=\"sheriff-settings-subtitle-wrapper\">\n                            <div class=\"settings-main-title-text\">Pay Rates<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.payrates}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                        <ion-icon *ngIf=\"appSettings.payrates.showSection\" class=\"settings-section-heading-vis-ico payrates visible\" name=\"eye-outline\"></ion-icon>\n                        <ion-icon *ngIf=\"!appSettings.payrates.showSection\" class=\"settings-section-heading-vis-ico payrates hidden\" name=\"eye-off-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                        <ion-toggle #payratesVisToggle checked={{appSettings.payrates.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle payrates\"></ion-toggle>\n                        <div class=\"setting-tog-shield\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <div *ngIf=\"appSettings.payrates.showSection\" class=\"settings-section-toggle-inner-wrapper payrates\">\n                <ion-grid *ngIf=\"appSettings.payrates.showSection\" class=\"sheriff-grid sheriff-settings-main-grid payrates\">\n                  <ion-row class=\"sheriff-row settings-option-row option-action-row payrates-option1\">\n                      <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col payrates-option1\">\n                          <div class=\"settings-option-name-wrapper payrates-option1\">\n                              <div class=\"settings-option-name-label-txt\">Show $</div>\n                              <ion-icon (click)=\"toggleOptInfo('payrates','show')\" [ngStyle]=\"{'color':appSettings.payrates.options.show.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                          </div>\n                      </ion-col>\n                      <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col payrates-option1\">\n                        <ion-item (click)=\"toggleShowPR(prShow.checked)\" class=\"settings-propt-item\">\n                          <div class=\"settings-propt-wrapper\">\n                              <ion-checkbox #prShow class=\"settings-payratesopt-btn-cb show\" [mode]=\"'md'\" [checked]=\"appSettings.payrates.options.show.value\"></ion-checkbox>\n                              <div [ngStyle]=\"{'color':prShow.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-propt-btn-txt show\">Showing Income ($)</div>\n                          </div>\n                          </ion-item>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"appSettings.payrates.options.show.info\" class=\"sheriff-row settings-option-row option-info-row payrates-show\">\n                      <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col payrates-show\">\n                          <ion-button (click)=\"toggleOptInfo('payrates','show')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                              <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                          </ion-button>\n                      </ion-col>\n                      <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col payrates-show\">\n                          <div class=\"settings-option-info-text-wrapper payrates-show\">\n                              <div class=\"settings-info-line-item payrates-show-info\">\n                                Sheriff will calculate & include income ($) figures next to your time/hours\n                              </div>\n                          </div>\n                      </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper profile\">\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <ion-grid class=\"sheriff-grid settings-page-grid heading-grid profile\">\n              <ion-row (click)=\"sectionVisToggle('profile',profileVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                  <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                      <div class=\"sheriff-settings-subtitle-wrapper\">\n                          <div class=\"settings-main-title-text\">Profile<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.profile}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                      </div>\n                  </ion-col>\n                  <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                      <ion-icon *ngIf=\"appSettings.profile.showSection\" class=\"settings-section-heading-vis-ico profile visible\" name=\"eye-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"!appSettings.profile.showSection\" class=\"settings-section-heading-vis-ico profile hidden\" name=\"eye-off-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                      <ion-toggle #profileVisToggle checked={{appSettings.profile.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle profile\"></ion-toggle>\n                      <div class=\"setting-tog-shield\"></div>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <div *ngIf=\"appSettings.profile.showSection\" class=\"settings-section-toggle-inner-wrapper profile\">\n              <ion-grid *ngIf=\"appSettings.profile.showSection\" class=\"sheriff-grid sheriff-settings-main-grid settings-option-grid profile-option1 profile\">\n                  <ion-row class=\"sheriff-row settings-option-row option-action-row profile-option1\">\n                    <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col profile-option1\">\n                        <div class=\"settings-option-name-wrapper profile-option1\">\n                            <div class=\"settings-option-name-label-txt\">Force Sync</div>\n                            <ion-icon (click)=\"toggleOptInfo('profile','alwaysSync')\" [ngStyle]=\"{'color':appSettings.profile.options.alwaysSync.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col profile-option1\">\n                      <ion-item (click)=\"toggleSyncProfile(pAlwaysSync.checked)\" class=\"settings-propt-item\">\n                        <div class=\"settings-propt-wrapper\">\n                            <ion-checkbox #pAlwaysSync class=\"settings-profileopt-btn-cb show\" [mode]=\"'md'\" [checked]=\"appSettings.profile.options.alwaysSync.value\"></ion-checkbox>\n                            <div [ngStyle]=\"{'color':pAlwaysSync.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-propt-btn-txt show\">Force Web-Sync</div>\n                        </div>\n                        </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row *ngIf=\"appSettings.profile.options.alwaysSync.info\" class=\"sheriff-row settings-option-row option-info-row profile-alwayssync\">\n                    <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col profile-alwayssync\">\n                        <ion-button (click)=\"toggleOptInfo('profile','alwaysSync')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                            <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col profile-alwayssync\">\n                        <div class=\"settings-option-info-text-wrapper profile-alwayssync\">\n                            <div class=\"settings-info-line-item profile-alwayssync-info\">\n                              Force web-scraping of private/profile data every time (slower).\n                            </div>\n                        </div>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper snoop\">\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <ion-grid class=\"sheriff-grid settings-page-grid heading-grid snoop\">\n              <ion-row (click)=\"sectionVisToggle('snoop',snoopVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                  <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                      <div class=\"sheriff-settings-subtitle-wrapper\">\n                          <div class=\"settings-main-title-text\">snoop<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.snoop}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                      </div>\n                  </ion-col>\n                  <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                      <ion-icon *ngIf=\"appSettings.snoop.showSection\" class=\"settings-section-heading-vis-ico snoop visible\" name=\"eye-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"!appSettings.snoop.showSection\" class=\"settings-section-heading-vis-ico snoop hidden\" name=\"eye-off-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                      <ion-toggle #snoopVisToggle checked={{appSettings.snoop.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle snoop\"></ion-toggle>\n                      <div class=\"setting-tog-shield\"></div>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <div *ngIf=\"appSettings.snoop.showSection\" class=\"settings-section-toggle-inner-wrapper snoop\">\n              <ion-grid *ngIf=\"appSettings.snoop.showSection\" class=\"sheriff-grid sheriff-settings-main-grid settings-option-grid snoop-option1 snoop\">\n                <ion-row class=\"sheriff-row settings-option-row option-action-row snoop-option1\">\n                  <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col snoop-option1\">\n                      <div class=\"settings-option-name-wrapper snoop-option1\">\n                          <div class=\"settings-option-name-label-txt\">Activated</div>\n                          <ion-icon (click)=\"toggleOptInfo('snoop','activated')\" [ngStyle]=\"{'color':appSettings.snoop.options.activated.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                      </div>\n                  </ion-col>\n                  <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col snoop-option1\">\n                    <ion-item (click)=\"toggleSnoop(snoopActivated.checked)\" class=\"settings-propt-item\">\n                      <div class=\"settings-propt-wrapper\">\n                          <ion-checkbox #snoopActivated class=\"settings-snoopopt-btn-cb show\" [mode]=\"'md'\" [checked]=\"appSettings.snoop.options.activated.value\"></ion-checkbox>\n                          <div [ngStyle]=\"{'color':snoopActivated.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-propt-btn-txt show\">Snoop Data</div>\n                      </div>\n                      </ion-item>\n                  </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"appSettings.snoop.options.activated.info\" class=\"sheriff-row settings-option-row option-info-row snoop-activated\">\n                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col snoop-activated\">\n                    <ion-button (click)=\"toggleOptInfo('snoop','activated')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col snoop-activated\">\n                    <div class=\"settings-option-info-text-wrapper snoop-activated\">\n                        <div class=\"settings-info-line-item snoop-activated-info\">\n                          Monitor, report and record extra levels of workplace/coworker activity.\n                        </div>\n                    </div>\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n          </div>\n        </div>\n      <!-- -------------------------------------------------------------------------- -->\n      <!-- -------------------------------------------------------------------------- -->\n    </div>\n    <!-- -------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------- -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts-es2015.js.map