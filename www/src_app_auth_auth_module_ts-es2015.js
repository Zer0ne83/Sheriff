(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": function() { return /* binding */ AuthPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 13561);




const routes = [{ path: '', component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage }];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] })
], AuthPageRoutingModule);



/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": function() { return /* binding */ AuthPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 13561);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ 40431);








const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 13561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": function() { return /* binding */ AuthPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auth.page.html */ 21643);
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ 90957);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/keyboard */ 87730);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 64909);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/app */ 42138);
/* harmony import */ var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/dialog */ 63540);
/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../animations/index */ 63074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/events.service */ 80106);
/* harmony import */ var _services_deputy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/deputy.service */ 22092);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/storage.service */ 71188);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/firebase.service */ 19446);
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/detail.service */ 52153);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../services/sqlite.service */ 90636);
/* harmony import */ var _services_datetime_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/datetime.service */ 12826);
/* harmony import */ var _modals_firstrun_firstrun_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../modals/firstrun/firstrun.page */ 1119);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var _services_appTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/appTypes */ 38670);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);























//////////////////////////////////////////////////////////////////////////////////////
let AuthPage = class AuthPage {
    //////////////////////////////////////////////////////////////////////////////////////
    constructor(navController, evServ, deputy, storeServ, detailServ, sqlServ, dT, router, platform, logger, zone, modalCtrl, fireServ) {
        this.navController = navController;
        this.evServ = evServ;
        this.deputy = deputy;
        this.storeServ = storeServ;
        this.detailServ = detailServ;
        this.sqlServ = sqlServ;
        this.dT = dT;
        this.router = router;
        this.platform = platform;
        this.logger = logger;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.fireServ = fireServ;
        //////////////////////////////////////////////////////////////////////////////////////
        this.stdModalOpts = {
            animated: true,
            backdropDismiss: false,
            cssClass: 'firstrun-modal-class',
            enterAnimation: _animations_index__WEBPACK_IMPORTED_MODULE_6__.modalEnterAnimation,
            keyboardClose: true,
            leaveAnimation: _animations_index__WEBPACK_IMPORTED_MODULE_6__.modalLeaveAnimation,
            showBackdrop: true,
            component: _modals_firstrun_firstrun_page__WEBPACK_IMPORTED_MODULE_14__.FirstRunPage
        };
        this.kbHeightCalcRunOnce = 0;
        this.oldloginBoxTxt = '';
        this.loginBoxTxtVal = '';
        this.connectStage = 'connect';
        this.showFirstLoad = false;
        this.showIonContent = true;
        this.gotStoreUUK = false;
        this.storeUUK = null;
        this.gotStoreUEml = false;
        this.storeUEml = null;
        this.gotStoreUFET = false;
        this.storeUFET = null;
        this.gotUPCreds = false;
        this.upCredsObj = null;
        this.gotDPAuth = false;
        this.dpAuthIsValid = false;
        this.dpAuthObj = null;
        this.fbLoggedIn = false;
        this.FRDone = false;
        this.UDBDone = false;
        this.ADBDone = false;
        this.gotSavedDLData = false;
        this.dpAuthInProgress = false;
        this.dpAuthPBarPerc = 0;
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.logger.info('[Auth|ngOnInit] Fired!');
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            window.open = cordova.InAppBrowser.open;
            yield this.sqlServ.doInitSQLServ();
        }));
    }
    //////////////////////////////////////////////////////////////////////////////////////
    ionViewWillEnter() {
        this.logger.info('[Auth|ionViewWillEnter] ()...');
        this.kbHeightCalcRunOnce = 0;
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({ color: '#121212' });
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({ overlay: false });
        this.startChecks();
    }
    //////////////////////////////////////////////////////////////////////////////////////
    ionViewWillLeave() {
        this.logger.info('[Auth|ionViewWillLeave] ()...');
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();
    }
    //////////////////////////////////////////////////////////////////////////////////////
    ionViewDidEnter() {
        this.logger.info('[Auth|ionViewDidEnter] ()...');
        const waitForEle = setInterval(() => { if (jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').length) {
            clearInterval(waitForEle);
            setTimeout(() => { const sTitlePx = Math.round(jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').outerWidth()); jquery__WEBPACK_IMPORTED_MODULE_16__('ion-grid.sheriff-auth-sunicon-grid').css('min-width', sTitlePx + 'px').css('max-width', sTitlePx + 'px').css('width', sTitlePx + 'px'); }, 1000);
        } }, 200);
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardWillShow', info => {
            this.kbHeightCalcRunOnce++;
            if (this.kbHeightCalcRunOnce < 2) {
                this.myKbICEle = document.getElementById('auth-page-ion-content');
                this.myKbPTEle = document.getElementById('sheriff-authpage-title-txt');
                this.myKbHelpTxtEle = document.getElementById('sheriff-auth-loginbox-helpertext-wrapper');
                this.myKbBtmLine = Math.round(this.myKbHelpTxtEle.getBoundingClientRect().bottom);
                this.myKbOffsetNum = Math.round(info.keyboardHeight - (this.localScreenResObj.height - this.myKbBtmLine));
                this.myKbTopNum = Math.abs(Math.round(info.keyboardHeight - (this.localScreenResObj.height - this.myKbBtmLine))) - 32;
            }
        });
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidShow', () => { this.loginBoxKBAdjust('open'); });
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidHide', () => { this.loginBoxKBAdjust('close'); });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    hideSplash() {
        this.logger.info('[Auth|hideSplash] ()...');
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({ overlay: true });
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({ color: '#00000000' });
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-networkstatus-wrapper').addClass('adjust-for-auth-toolbar-overlay');
        const myAniCSS = (jqEle, animName) => new Promise((resolve) => { const animClassStr = 'animate__animated animate__' + animName + ' animate__fast'; jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).addClass(animClassStr).on('animationend', () => { jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).removeClass(animClassStr); resolve('done'); }); });
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-logo-img').removeClass('animate__animated animate__headShake animate__infinite');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-titletexttop-wrapper').addClass('animate__animated animate__slideOutUp animate__faster');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-zer0ne-wrapper').addClass('animate__animated animate__slideOutDown animate__faster');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.bar-horizontal').addClass('finished');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-logo-img').prop('src', '../assets/img/slogo-g.png');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideInLeft').addClass('animate__slideOutLeft');
        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideInRight').addClass('animate__slideOutRight');
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper,.sheriff-col.custom-splash-col.middlelogocol').css('background', 'transparent');
        myAniCSS('#sheriff-custom-splash-wrapper', 'fadeOut').then(() => jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper').hide());
    }
    //////////////////////////////////////////////////////////////////////////////////////
    loginBoxKBAdjust(kbState) {
        this.logger.info('[Auth|loginBoxKBAdjust] (' + kbState + ')');
        let openCDown;
        let closeCDown;
        const offsetPx = this.myKbOffsetNum + 'px';
        const topPx = this.myKbTopNum + 'px';
        const icEle = this.myKbICEle;
        const ptEle = this.myKbPTEle;
        const getOffVal = () => { return icEle.style.getPropertyValue('--offset-top'); };
        const setOffVal = () => { icEle.style.setProperty('--offset-top', offsetPx); };
        const unsetOffVal = () => { icEle.style.setProperty('--offset-top', 'unset'); };
        const getTopVal = () => { const cS = window.getComputedStyle(ptEle); return cS.top; };
        const setTopVal = () => { ptEle.style.setProperty('top', topPx); };
        const unsetTopVal = () => { ptEle.style.setProperty('top', 'unset'); };
        const addOffset = () => { if (getOffVal() === '0px' || getOffVal() === 'unset') {
            setOffVal();
        } };
        const remOffset = () => { if (getOffVal() === offsetPx) {
            unsetOffVal();
        } };
        const addTop = () => { if (getTopVal() === '0px' || getTopVal() === 'unset') {
            setTopVal();
        } };
        const remTop = () => { if (getTopVal() === topPx) {
            unsetTopVal();
        } };
        if (kbState === 'open') {
            (() => { openCDown = setTimeout(() => { addOffset(); addTop(); }, 250); })();
            clearTimeout(closeCDown);
        }
        else {
            (() => { closeCDown = setTimeout(() => { remOffset(); remTop(); }, 250); })();
            clearTimeout(openCDown);
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////
    checkNetworkScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|checkNetworkScreen] ()...');
            this.hasConnection = yield this.detailServ.getHasNetConn();
            this.isConnSub = this.evServ.subscribe('globalHasNetConn', (newIsConn) => { this.hasConnection = newIsConn; });
            const sRW = yield this.platform.width();
            const sRH = this.platform.height();
            const screenResObj = { width: sRW, height: sRH };
            this.localScreenResObj = screenResObj;
            this.storeServ.setObject('screenRes', screenResObj);
            this.evServ.publish('startChecklist', 'networkCheckDone'); // CHECK 1
            this.checkStoreUUKEmail(); // Next - Do Check #2 (StoreUUKEmail)
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    checkStoreUUKEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|checkStoreUUKEmail] ()...');
            const sSUUK = yield this.storeServ.getItem('currentUUK');
            const sSUEml = yield this.storeServ.getItem('userEmail');
            const sSUFET = yield this.storeServ.getItem('currentFEToken');
            if (sSUUK) {
                this.gotStoreUUK = true;
                this.storeUUK = sSUUK;
                this.deputy.uUK = sSUUK;
                this.logger.info('[Auth|checkStoreUUKEmail] (SUCCESS) this.gotStoreUUK=' + String(this.gotStoreUUK) + ' | this.storeUUK=' + this.storeUUK);
            }
            else {
                this.gotStoreUUK = false;
                this.storeUUK = null;
                this.deputy.uUK = null;
                this.logger.info('[Auth|checkStoreUUKEmail] (FAIL) this.gotStoreUUK=' + String(this.gotStoreUUK));
            }
            ;
            if (sSUEml) {
                this.gotStoreUEml = true;
                this.storeUEml = sSUEml;
                this.deputy.userEmail = sSUEml;
                this.logger.info('[Auth|checkStoreUUKEmail] (SUCCESS) this.gotStoreUEml=' + String(this.gotStoreUEml) + ' | this.storeUEml=' + this.storeUEml);
                if (!this.gotStoreUUK) {
                    const tempUUK = this.storeUEml.replace('@', '').replace('.', '');
                    this.storeUUK = tempUUK;
                    this.gotStoreUUK = true;
                    this.deputy.uUK = tempUUK;
                    this.storeServ.setItem(this.deputy.uUK + 'currentUUK', tempUUK);
                }
                ;
            }
            else {
                this.gotStoreUEml = false;
                this.storeUEml = null;
                this.deputy.userEmail = null;
                this.logger.info('[Auth|checkStoreUUKEmail] (FAIL) this.gotStoreUEml=' + String(this.gotStoreUEml));
            }
            ;
            if (sSUFET) {
                this.gotStoreUFET = true;
                this.storeUFET = sSUFET;
                this.deputy.SServer.FCT.fe_token = sSUFET;
                this.logger.info('[Auth|checkStoreFEToken] (SUCCESS) this.gotStoreUFET=' + String(this.gotStoreUFET) + ' | this.storeUEml=' + this.storeUFET);
            }
            else {
                this.gotStoreUFET = false;
                this.storeUFET = null;
                this.deputy.SServer.FCT.fe_token = null;
                this.logger.info('[Auth|checkStoreFEToken] (FAIL) this.gotStoreUFET=' + String(this.gotStoreUFET));
            }
            ;
            this.evServ.publish('startChecklist', 'storeUUKEmailCheckDone'); // CHECK 2
            this.checkDBSetup(); // Next - Do Check #3 (DBSetup)
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    checkDBSetup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|checkDBSetup] ()...');
            if (this.deputy.uUK !== null) {
                this.FRDone = yield this.detailServ.getFRSetupDone();
                let CMfr;
                this.FRDone ? CMfr = '✔️' : CMfr = '❌';
                this.UDBDone = yield this.detailServ.getUDBSetupDone();
                let CMud;
                this.UDBDone ? CMud = '✔️' : CMud = '❌';
                this.ADBDone = yield this.detailServ.getADBSetupDone();
                let CMad;
                this.ADBDone ? CMad = '✔️' : CMad = '❌';
                this.logger.info('[Auth|checkDBSetup] FirstRunDone:' + CMfr + ', UDBSetupDone?:' + CMud + ', ADBSetupDone?:' + CMad);
                const checkUDB = () => {
                    if (this.FRDone && this.UDBDone) {
                        this.logger.info('[Auth|checkDBSetup] Running createUserDBConn(' + this.deputy.uUK + 'db,true) @ SQLiteService.');
                        this.evServ.subscribe('uDBReady', () => {
                            this.evServ.destroy('uDBReady');
                            this.evServ.publish('startChecklist', 'DBSetupCheckDone'); // CHECK 3
                            this.checkDPAuth();
                        });
                        this.sqlServ.createUserDBConn(this.deputy.uUK + 'db', true);
                    }
                    else {
                        this.evServ.publish('startChecklist', 'DBSetupCheckDone'); // CHECK 3
                        this.checkDPAuth();
                    }
                };
                if (this.ADBDone) {
                    this.logger.info('[Auth|checkDBSetup] Running createAuthDBConn(' + this.deputy.uUK + 'auth,true) @SQLiteService.');
                    this.evServ.subscribe('aDBReady', () => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                        this.evServ.destroy('aDBReady');
                        const doCTLRes = yield this.fireServ.loginCustomToken();
                        if (!doCTLRes) {
                            const upRes = yield this.sqlServ.getADBItem('up');
                            if (upRes.result) {
                                yield this.fireServ.loginUserEmail(upRes.data);
                            }
                            ;
                            checkUDB();
                        }
                        else {
                            checkUDB();
                        }
                    }));
                    this.sqlServ.createAuthDBConn(this.deputy.uUK + 'auth', true, null);
                }
                else {
                    checkUDB();
                }
            }
            else {
                this.FRDone = false;
                this.UDBDone = false;
                this.ADBDone = false;
                this.logger.info('[Auth|checkDBSetup] SKIPPED: deputy.uUK===null');
                this.evServ.publish('startChecklist', 'DBSetupCheckDone'); // CHECK 3
                this.checkDPAuth();
            }
            // Next - Do Check #4 (DPAuth) 
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    checkDPAuth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|checkDPAuth] ()...');
            const doFail = (got, valid) => {
                this.gotDPAuth = got;
                this.dpAuthIsValid = valid;
                this.dpAuthObj = null;
                this.evServ.publish('startChecklist', 'dpAuthTokensCheckDone'); // CHECK 4
            };
            const doSuccess = (aO) => {
                this.gotDPAuth = true;
                this.dpAuthIsValid = true;
                this.dpAuthObj = aO;
                this.evServ.publish('startChecklist', 'dpAuthTokensCheckDone'); // CHECK 4
            };
            const isExp = (o) => { if (this.dT.uTokExpd(o)) {
                return true;
            }
            else {
                return false;
            } };
            const doSetAuth = (o) => {
                this.evServ.subscribe('setAuthGVarsDone', (authResult) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                    if (authResult.result) {
                        this.logger.info('[Auth|checkDPAuth] - [GOOD] - Token Tested VALID');
                        if (authResult.refresh) {
                            this.logger.info('[Auth|checkDPAuth] - [===REFRESHED] - Token was Refreshed');
                            doSuccess(authResult.data);
                        }
                        else {
                            this.logger.info('[Auth|checkDPAuth] - [!==REFRESHED] - Token VALID & NOT Refreshed');
                            doSuccess(o);
                        }
                    }
                    else {
                        this.logger.info('[Auth|checkDPAuth] - [BAD] - Invalid/Unrefreshable Token - Deleting...');
                        doFail(true, false);
                    }
                }));
                this.deputy.setAuthGVars(o);
            };
            // -------------------------------------------------------------------------------
            const fireO = () => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                if (this.hasConnection) {
                    if (this.fireServ.tempUPO || this.gotStoreUFET || this.deputy.uUK) {
                        const { result, data } = yield this.fireServ.getFireUserAuth();
                        if (result) {
                            const fireAuthObj = data;
                            return Promise.resolve({ r: true, d: fireAuthObj });
                        }
                        else {
                            return Promise.resolve({ r: false });
                        }
                    }
                    else {
                        return Promise.resolve({ r: false });
                    }
                }
                else {
                    return Promise.resolve({ r: false });
                }
            });
            const storeO = () => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () { if (this.deputy.uUK !== null) {
                const sO = yield this.storeServ.getObject(this.deputy.uUK + 'DPAuth');
                if (sO) {
                    return Promise.resolve({ r: true, d: sO });
                }
                else {
                    return Promise.resolve({ r: false });
                }
            }
            else {
                return Promise.resolve({ r: false });
            } });
            const dbO = () => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () { if (this.detailServ.getADBIsOpen() && this.deputy.uUK !== null) {
                const { result, data } = yield this.sqlServ.getADBItem('auth');
                if (result) {
                    return Promise.resolve({ r: true, d: data });
                }
                else {
                    return Promise.resolve({ r: false });
                }
            }
            else {
                return Promise.resolve({ r: false });
            } });
            // -------------------------------------------------------------------------------
            let availAObs = [];
            const getF = yield fireO();
            if (getF.r) {
                availAObs.push(getF.d);
            }
            ;
            const getS = yield storeO();
            if (getS.r) {
                availAObs.push(getS.d);
            }
            ;
            const getD = yield dbO();
            if (getD.r) {
                availAObs.push(getD.d);
            }
            ;
            const latestAObj = lodash__WEBPACK_IMPORTED_MODULE_17__.maxBy(availAObs, 'expires_at');
            if (latestAObj) {
                if (!isExp(latestAObj)) {
                    doSetAuth(latestAObj);
                }
                else {
                    doSetAuth(latestAObj);
                }
            }
            else {
                doFail(false, false);
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    startChecks() {
        this.logger.info('[Auth|startChecks] ()...');
        const totalStartChecks = 4;
        let startCheckCount = 0;
        this.evServ.subscribe('startChecklist', checkName => {
            startCheckCount++;
            this.logger.info('[Auth|startChecks|Events] - Check ' + startCheckCount + '/' + totalStartChecks + ': ' + checkName + ' - \u2705');
            if (startCheckCount === totalStartChecks) {
                this.logger.info('[Auth|startChecks] - [FINISHED] (' + startCheckCount + '/' + totalStartChecks + ') - \uD83C\uDFC1');
                this.evServ.destroy('startChecklist');
                this.startApp();
            }
        });
        this.checkNetworkScreen(); // Start - Do Check #1
    }
    //////////////////////////////////////////////////////////////////////////////////////
    startApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|StartApp] ()...');
            if (this.detailServ.getAuthLogout()) {
                this.logoutFlow();
            }
            else {
                if (this.hasConnection) {
                    this.logger.info('[Auth|startApp] (hasConnection?) - TRUE');
                    if (this.gotDPAuth) {
                        this.logger.info('[Auth|startApp] (gotDPAuth?) - TRUE');
                        if (this.FRDone && this.UDBDone) {
                            this.logger.info('[Auth|startApp] (FRSetupComplete?) - TRUE');
                            let oLDCCount = 0;
                            this.evServ.subscribe('onLoginDetailChecks', () => { oLDCCount++; if (oLDCCount === 2) {
                                this.evServ.destroy('onLoginDetailChecks');
                                this.onLogin();
                            } });
                            const dsSett = yield this.detailServ.getSettings();
                            if (dsSett !== null) {
                                this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');
                            }
                            else {
                                const dbSett = yield this.sqlServ.getSettings();
                                if (dbSett.result) {
                                    const dbO = dbSett.data;
                                    yield this.detailServ.setSettings(dbO);
                                    this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');
                                }
                                else {
                                    const fireSett = yield this.fireServ.getSettingsValue(null);
                                    if (fireSett.result) {
                                        const fireO = fireSett.data;
                                        yield this.sqlServ.setSettings(fireO);
                                        yield this.detailServ.setSettings(fireO);
                                        this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');
                                    }
                                    else {
                                        const defSett = (0,_services_appTypes__WEBPACK_IMPORTED_MODULE_15__.defaultAUSettings)();
                                        yield this.sqlServ.setSettings(defSett);
                                        yield this.fireServ.setSettingsValue(defSett);
                                        yield this.detailServ.setSettings(defSett);
                                        this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');
                                    }
                                }
                            }
                            ;
                            this.evServ.subscribe('setLocalDeetsDone', () => { this.evServ.publish('onLoginDetailChecks', 'preLOCALDEETS'); });
                            this.sqlServ.setLocalDeets();
                        }
                        else {
                            this.logger.info('[Auth|startApp] (FRSetupComplete?) - FALSE');
                            const sMe = yield this.detailServ.setMe(null);
                            const sMy = yield this.detailServ.setMy(null);
                            if (!sMe || !sMy) {
                                this.evServ.subscribe('getMeMyDataDone', (meMyRes) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                                    if (meMyRes.result) {
                                        yield this.detailServ.setMe(meMyRes.data.me);
                                        yield this.detailServ.setMy(meMyRes.data.my);
                                        this.openFirstRunModal();
                                    }
                                    else {
                                        this.signingIn = false;
                                        this.hideSplash();
                                    }
                                }));
                                this.deputy.getMeMyData();
                            }
                            else {
                                this.openFirstRunModal();
                            }
                            ;
                        }
                    }
                    else {
                        this.logger.info('[Auth|startApp] (gotDPAuth?) - FALSE');
                        if (this.gotStoreUUK && this.deputy.uUK !== null) {
                            this.logger.info('[Auth|startApp] (gotStoreUUK?) - TRUE');
                            this.signingIn = false;
                            this.hideSplash();
                            const authDBRes = yield this.sqlServ.getADBItem('up');
                            if (authDBRes.result) {
                                this.deputy.userEmail = authDBRes.data.u;
                                this.userInput.disabled = false;
                                this.userInput.value = authDBRes.data.u;
                                this.passInput.disabled = false;
                                this.passInput.value = authDBRes.data.p;
                                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', false);
                                jquery__WEBPACK_IMPORTED_MODULE_16__('.username-row').css('opacity', '0.24');
                                jquery__WEBPACK_IMPORTED_MODULE_16__('.password-row').css('opacity', '0.24');
                                const cDownHTML = '<div id="sheriff-auth-loginbox-countdown-text" class="loginbox-heading-class">Auto-Login...<span id="sheriff-auto-login-cdown-digits">5</span><ion-button id="sheriff-cancelautosignin-btn"><ion-icon id="sheriff-cancel-autologin-btn-ico" name="close"></ion-icon></ion-button></div>';
                                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').html(cDownHTML);
                                let cDownTimer;
                                const countDown = (i, callback) => { cDownTimer = setInterval(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auto-login-cdown-digits').text(i); i-- || (clearInterval(cDownTimer), callback()); }, 1000); };
                                countDown(5, () => { this.loginBoxSignIn(); });
                                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-cancelautosignin-btn').click(() => {
                                    clearInterval(cDownTimer);
                                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').html('<div class="animate__animated animate__flipInX" id="sheriff-autologin-cancelled-text">cancelled</div>');
                                    jquery__WEBPACK_IMPORTED_MODULE_16__('.username-row').css('opacity', '1');
                                    jquery__WEBPACK_IMPORTED_MODULE_16__('.password-row').css('opacity', '1');
                                    setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').hide(); jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').text('One-time Sign In'); jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').fadeIn(); }, 3000);
                                });
                            }
                            else {
                                this.logger.info('[Auth|startApp] (gotDBAuth) - FAIL');
                                this.signingIn = false;
                                this.hideSplash();
                            }
                        }
                        else {
                            this.logger.info('[Auth|startApp] (gotUPCreds?) - FALSE');
                            this.signingIn = false;
                            this.hideSplash();
                        }
                    }
                }
                else {
                    this.logger.info('[Auth|startApp] (hasConnection?) - FALSE');
                    if (this.gotStoreUUK) {
                        this.logger.info('[Auth|startApp] (gotStoreUUK?) - TRUE');
                        if (this.gotDPAuth) {
                            this.logger.info('[Auth|startApp] (gotDPAuth?) - TRUE');
                            if (this.FRDone && this.UDBDone) {
                                this.gotSavedDLData = true;
                                this.hideSplash();
                            }
                            else {
                                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-exitapp').css('width', '100%');
                                this.hideSplash();
                            }
                        }
                        else {
                            this.logger.info('[Auth|startApp] (gotDPAuth?) - FALSE');
                            if (this.ADBDone) {
                                this.logger.info('[Auth|startApp] (AuthDBSetupDone?) - TRUE');
                                const authDBRes = yield this.sqlServ.getADBItem('up');
                                if (authDBRes.result && authDBRes.data.p.length > 0) {
                                    if (this.FRDone && this.UDBDone) {
                                        this.gotSavedDLData = true;
                                        this.hideSplash();
                                    }
                                    else {
                                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-exitapp').css('width', '100%');
                                        this.hideSplash();
                                    }
                                }
                            }
                        }
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-exitapp').css('width', '100%');
                        this.hideSplash();
                    }
                }
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    cancelAutoSignIn() { this.logger.info('[App|CancelAutoSignIn] ()...'); }
    //////////////////////////////////////////////////////////////////////////////////////
    logoutFlow() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|logoutFlow] ()...');
            if (this.signingIn) {
                this.signingIn = false;
            }
            ;
            this.userInput.value = '';
            this.passInput.value = '';
            this.storeServ.removeItem(this.deputy.uUK + 'DPAuth');
            this.storeServ.removeItem('currentUUK');
            this.storeServ.removeItem('userEmail');
            this.gotUPCreds = false;
            this.upCredsObj = null;
            this.gotDPAuth = false;
            this.dpAuthObj = null;
            this.evServ.subscribe('clearAuthGVarsDone', () => { this.evServ.destroy('clearAuthGVarsDone'); this.router.navigateByUrl('/', { replaceUrl: true }); this.hideSplash(); });
            this.deputy.clearAuthGVars();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    owenDev() {
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-username').prop('disabled', false);
        this.userInput.value = 'owenlenegan@gmail.com';
        this.passInput.value = 'lotto12';
        this.loginBoxSignIn();
    }
    //////////////////////////////////////////////////////////////////////////////////////
    loginBoxInput(input, event) {
        this.logger.info('[Auth|loginBoxFocus] The - ' + input.toUpperCase() + ' - Input got [' + event.toUpperCase() + ']...');
        const depLabel = '<img src="../../assets/img/sheriff-deputy-logoname-white-small.png" class="lildeputylogoname">';
        const emailIsV = (emailText) => { const validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; if (emailText.match(validEmailFormat)) {
            return true;
        }
        else {
            return false;
        } };
        const updateHelper = (type, newHTML) => {
            let msgIco;
            const htEle = jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-helper-text');
            const anBaseStr = 'animate__animated';
            const anInStr = anBaseStr + ' animate__fadeIn';
            const anOutStr = anBaseStr + ' animate__fadeOut';
            type === 'help' ? msgIco = '<ion-icon class="sheriff-auth-loginbox-info-ico help" name="information-circle"></ion-icon>' : msgIco = '<ion-icon class="sheriff-auth-loginbox-info-ico warn" name="warning"></ion-icon>';
            new Promise((resolvedOut) => { jquery__WEBPACK_IMPORTED_MODULE_16__(htEle).addClass(anOutStr).on('animationend', () => { jquery__WEBPACK_IMPORTED_MODULE_16__(htEle).hide().html(msgIco + newHTML).removeClass(anOutStr); resolvedOut('done'); new Promise((resolvedIn) => { jquery__WEBPACK_IMPORTED_MODULE_16__(htEle).addClass(anInStr).show().removeClass(anInStr); resolvedIn('done'); }); }); });
        };
        if (event === 'focus') {
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-img').css('visibility', 'hidden');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').css('visibility', 'visible');
            const thisInputIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');
            jquery__WEBPACK_IMPORTED_MODULE_16__(thisInputIco).removeClass('sheriff-auth-input-invalidated sheriff-auth-input-validated');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).addClass('infocus-sheriff-auth-login-input');
            if (input.includes('username')) {
                updateHelper('help', 'The <span class="asc">email</span> linked to your ' + depLabel + ' account');
            }
            else {
                updateHelper('help', 'The <span class="asc">password</span> to your ' + depLabel + 'account');
            }
        }
        ;
        if (event === 'change') {
            const afterEvTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).prop('value');
            if (afterEvTxt.length === 0) {
                this.oldloginBoxTxt = '';
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('');
            }
        }
        ;
        if (event === 'input') {
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').show();
            const shortIn = input.replace('.sheriff-auth-loginbox-input-ico.', '');
            if (shortIn === 'user') {
                const existingTxt = this.oldloginBoxTxt;
                const inputTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-username').prop('value');
                if (existingTxt.length - 1 === inputTxt.length) {
                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('');
                    this.oldloginBoxTxt = inputTxt;
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text(inputTxt.charAt(inputTxt.length - 1)).fadeOut(500);
                    this.oldloginBoxTxt = inputTxt;
                }
            }
            else {
                const existingTxt = this.oldloginBoxTxt;
                const inputTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('value');
                if (existingTxt.length - 1 === inputTxt.length) {
                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('');
                    this.oldloginBoxTxt = inputTxt;
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('?').fadeOut(500);
                    this.oldloginBoxTxt = inputTxt;
                    if (jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.user').hasClass('sheriff-auth-input-validated') && inputTxt.length > 3) {
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.pass').addClass('sheriff-auth-input-validated'); jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', false); }, 2000);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', true);
                    }
                }
            }
            ;
            jquery__WEBPACK_IMPORTED_MODULE_16__(input).toggleClass('flashico');
            setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__(input).toggleClass('flashico'); }, 200);
        }
        ;
        if (event === 'blur') {
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-img').css('visibility', 'visible');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').css('visibility', 'hidden');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).removeClass('infocus-sheriff-auth-login-input');
            if (input === 'sheriff-auth-login-username') {
                const thisEmailIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');
                const thisEmailTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).prop('value');
                if (emailIsV(thisEmailTxt)) {
                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('disabled', false);
                    jquery__WEBPACK_IMPORTED_MODULE_16__(thisEmailIco).removeClass('sheriff-auth-input-invalidated').addClass('sheriff-auth-input-validated');
                    if (!jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').hasClass('sheriff-auth-input-validated')) {
                        updateHelper('help', 'Enter the <span class="asc">password</span> you use to access your ' + depLabel + 'account');
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password > input').focus(); }, 500);
                    }
                }
                else {
                    const thisEmailIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');
                    jquery__WEBPACK_IMPORTED_MODULE_16__(thisEmailIco).removeClass('sheriff-auth-input-validated').addClass('sheriff-auth-input-invalidated').addClass('animate__animated animate__headShake animate__delay-2s').on('animationend', () => { jquery__WEBPACK_IMPORTED_MODULE_16__(thisEmailIco).removeClass('animate__animated animate__headShake animate__delay-2s'); });
                    updateHelper('warn', 'Not a valid <span class="asc">email address</span> - please correct it');
                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('disabled', true);
                }
            }
            ;
            if (input === 'sheriff-auth-login-password') {
                const thisPassTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).prop('value');
                const thisPassIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');
                if (thisPassTxt.length > 0) {
                    if (thisPassTxt.length > 3) {
                        jquery__WEBPACK_IMPORTED_MODULE_16__(thisPassIco).removeClass('sheriff-auth-input-invalidated').addClass('sheriff-auth-input-validated');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_16__(thisPassIco).removeClass('sheriff-auth-input-validated').addClass('sheriff-auth-input-invalidated').addClass('animate__animated animate__headShake animate__delay-2s').on('animationend', () => { jquery__WEBPACK_IMPORTED_MODULE_16__(thisPassIco).removeClass('animate__animated animate__headShake animate__delay-2s'); });
                        updateHelper('warn', 'Not a valid <span class="asc">password</span> - please correct it');
                    }
                }
            }
            ;
            if (jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.user').hasClass('sheriff-auth-input-validated') && jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.pass').hasClass('sheriff-auth-input-validated')) {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', false);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', true);
            }
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////
    onLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|onLogin] ()...');
            this.isConnSub.unsubscribe();
            this.evServ.publish('EnteringApp', null);
            this.navController.navigateRoot('/tabs/tabshifts');
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    reRunFR() {
        this.logger.info('[Auth|reRunFR] (LISTENING)...');
        this.evServ.subscribe('ReRunFR', choiceObj => {
            this.evServ.destroy('ReRunFR');
            if (choiceObj.choice) {
                if (choiceObj.logout) {
                    this.logoutFlow();
                }
                else {
                    this.openFirstRunModal();
                }
            }
            else {
                _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    ionViewDidLeave() {
        this.logger.info('[Auth|ionViewDidLeave] ()...');
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_16__('ion-content#auth-page-ion-content').css('display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-custom-firstload-outter-wrapper').css('display', 'none');
        }, 3000);
    }
    //////////////////////////////////////////////////////////////////////////////////////
    openFirstRunModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|openFirstRunModal] ()...');
            const dS = this.detailServ;
            const frModal = yield this.modalCtrl.create(this.stdModalOpts);
            frModal.onDidDismiss().then((finalFRData) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                const tryFRAgain = (withLogout) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                    yield dS.setFRSetupDone(false);
                    this.reRunFR();
                    let dialogPopOpts;
                    withLogout ? dialogPopOpts = { title: 'Setup Failed', message: 'Setup failed. Please check you have internet access, permissions granted and login with the correct Deputy email/password. Try again?', okButtonTitle: 'Try Again', cancelButtonTitle: 'Cancel/Exit' } : dialogPopOpts = { title: 'Logout/Switch', message: 'Sheriff will logout and return to the login screen where you can input fresh/correct Deputy email/password.\nSetup will automatically resume thereafter. Proceed or Cancel/Exit?', okButtonTitle: 'Proceed', cancelButtonTitle: 'Cancel/Exit' };
                    _capacitor_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog.prompt(dialogPopOpts).then(tf => { this.evServ.publish('ReRunFR', { logout: withLogout, choice: tf }); });
                });
                if (finalFRData === null || finalFRData === undefined || finalFRData.data === null || finalFRData.data === undefined || !finalFRData.data.dlDone) {
                    tryFRAgain(false);
                }
                else if (finalFRData.data === 'logout') {
                    tryFRAgain(true);
                }
                else {
                    const impDB = finalFRData.data.dbImported;
                    yield dS.setFRSetupDone(true);
                    yield dS.setUDBWasImported(impDB);
                    yield dS.setWpId(finalFRData.data.wpId);
                    let baseSettObj, finalSettObj;
                    if (impDB) {
                        const newFCM = yield this.storeServ.getItem('fireMsgToken');
                        if (newFCM) {
                            yield this.sqlServ.setFCMToken(newFCM);
                        }
                        ;
                        const newFET = yield this.storeServ.getItem('currentFEToken');
                        if (newFET) {
                            yield this.sqlServ.setFEToken(newFET);
                        }
                        ;
                        const dbSettRes = yield this.sqlServ.getSettings();
                        dbSettRes.result ? baseSettObj = dbSettRes.data : baseSettObj = (0,_services_appTypes__WEBPACK_IMPORTED_MODULE_15__.defaultAUSettings)();
                    }
                    else {
                        baseSettObj = (0,_services_appTypes__WEBPACK_IMPORTED_MODULE_15__.defaultAUSettings)();
                    }
                    ;
                    baseSettObj['alerts']['options'] = finalFRData.data.alertOpts;
                    finalSettObj = baseSettObj;
                    const consM = (r, dfs) => {
                        let rT;
                        let dfT;
                        r === 's' ? rT = 'SUCCESS' : rT = 'ERROR';
                        dfs === 'd' ? dfT = 'SQLite' : dfs === 'f' ? dfT = 'Firebase' : dfT = 'Storage';
                        const m = '[Auth|openFirstRunModal] (' + rT + ') Save Settings Obj to ' + dfT;
                        return this.logger.info(m);
                    };
                    if ((yield this.detailServ.setSettings(finalSettObj))) {
                        consM('s', 's');
                    }
                    else {
                        consM('e', 's');
                    }
                    ;
                    if ((yield this.sqlServ.setSettings(finalSettObj))) {
                        consM('s', 'd');
                    }
                    else {
                        consM('e', 'd');
                    }
                    ;
                    if ((yield this.fireServ.setFireSettingsDoc(this.deputy.userEmail, finalSettObj))) {
                        consM('s', 'f');
                    }
                    else {
                        consM('e', 'f');
                    }
                    ;
                    this.evServ.subscribe('setLocalDeetsDone', () => { this.evServ.destroy('setLocalDeetsDone'); this.evServ.publish('doDelayedAppInits', impDB); this.onLogin(); });
                    this.sqlServ.setLocalDeets();
                }
            }));
            return yield frModal.present();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    setFirstAuthProcess(authObj, upObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|setFirstAuthProcess] ()...');
            //---------------------------------------------------
            this.evServ.subscribe('dpAuthProgressStatus', (statusUpdate) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                if (statusUpdate === 'completed') {
                    if (this.FRDone && this.UDBDone) {
                        this.onLogin();
                    }
                    else {
                        this.openFirstRunModal();
                    }
                }
                else if (statusUpdate === 'failed') {
                    setTimeout(() => { this.signingIn = false; }, 1000);
                }
            }));
            //---------------------------------------------------
            this.evServ.subscribe('setAuthGVarsDone', (validTokenRes) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                this.dpAuthProgressStager('tokens');
                this.evServ.destroy('setAuthGVarsDone');
                this.logger.info('[Auth-<Deputy|setAuthGVars] setAuthGVars [OK] -> validTokenTest: ' + validTokenRes.result);
                if (validTokenRes.result) {
                    this.logger.info('[Auth|browseDPAuth->Deputy] Set New uUKey @ DeputyService.');
                    //-----------------------
                    this.evServ.subscribe('getMeMyDataDone', (meMyRes) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                        this.evServ.destroy('getMeMyDataDone');
                        if (meMyRes.result) {
                            yield this.detailServ.setMe(meMyRes.data.me);
                            yield this.detailServ.setMy(meMyRes.data.my);
                            this.logger.info('[Auth|DAS|getMeMyData] - [OK] - getMeMyData Complete.');
                            if (this.FRDone && this.UDBDone) {
                                this.onLogin();
                            }
                            else {
                                this.openFirstRunModal();
                            }
                            ;
                        }
                        else {
                            this.deputy.uUK = null;
                            this.storeUUK = null;
                            this.gotStoreUUK = false;
                            this.logger.info('[DeputyService|GetMeMyData] ERROR!');
                            this.logger.info('\uD83C\uDFEE'.repeat(10));
                        }
                    }));
                    //-----------------------
                    this.dpAuthProgressStager('completed');
                    const getFETViaDPTRes = yield this.deputy.getFCT(validTokenRes.data.access_token);
                    if (getFETViaDPTRes.result) {
                        yield this.fireServ.logoutUser();
                        const doCTLoginRes = yield this.fireServ.loginCustomToken();
                        if (!doCTLoginRes) {
                            yield this.fireServ.getFireUserAuth();
                        }
                        ;
                        this.deputy.getMeMyData();
                    }
                    else {
                        this.deputy.getMeMyData();
                    }
                }
                else {
                    this.logger.info('[Auth->Deputy|setAuthGVars] - [ERROR] - setAuthGVars Failed validTokenTest: ' + validTokenRes + ' -> Triggering ERROR.');
                    this.dpAuthProgressStager('failed');
                }
                ;
            }));
            // Set/Store uUK --------------------------
            this.storeUUK = upObj.user.replace('@', '').replace('.', '');
            this.gotStoreUUK = true;
            this.storeServ.setItem('currentUUK', this.storeUUK);
            this.deputy.uUK = this.storeUUK;
            // Set/Store DPAuthObj --------------------
            this.dpAuthObj = authObj;
            this.gotDPAuth = true;
            this.storeServ.setObject(this.storeUUK + 'DPAuth', this.dpAuthObj);
            // Set/Store userEmail --------------------
            this.storeUEml = upObj.user;
            this.gotStoreUEml = true;
            this.storeServ.setItem('userEmail', this.storeUEml);
            this.deputy.userEmail = this.storeUEml;
            // Init ADB -------------------------------
            if (!this.ADBDone) {
                this.logger.info('[Auth|setFirstAuthProcess] Running createAuthDBConn(' + this.deputy.uUK + 'auth,false) to CREATE Encrypted DB + `deputy_auth` TABLE...');
                this.evServ.subscribe('aDBReady', (tf) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                    this.evServ.destroy('aDBReady');
                    this.ADBDone = tf;
                    if (tf) {
                        this.evServ.showToast('locked', 'Password Encrypted');
                    }
                    else {
                        this.evServ.showToast('fire', 'Password Destroyed');
                    }
                    ;
                    this.logger.info('[Auth->DeputyApiService|browseDPAuth->setAuthGVars] - Running setAuthGVars...');
                    if (!this.fireServ.fbLoggedIn) {
                        yield this.fireServ.loginUserEmail({ u: upObj.user, p: upObj.pass });
                    }
                    ;
                    this.deputy.setAuthGVars(authObj);
                }));
                this.sqlServ.createAuthDBConn(this.deputy.uUK + 'auth', false, { up: upObj, dp: authObj });
            }
            else {
                this.logger.info('[Auth->DeputyApiService|browseDPAuth->checkDBSetup] AuthDB Already Created - Skipping...');
                this.deputy.setAuthGVars(authObj);
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    sserverDPLogin(upCreds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth] (Login|Admin) [FUNCTION] sserverDPLogin()...');
            const dpLoginRes = yield this.deputy.doSServerDPLogin(upCreds);
            if (dpLoginRes.result) {
                return Promise.resolve(dpLoginRes);
            }
            else {
                return Promise.resolve({ result: false });
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    authIsV(authO) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () { const isV = yield this.deputy.tokenIsValid(authO); if (isV) {
            return Promise.resolve(true);
        }
        else {
            return Promise.resolve(false);
        } });
    }
    ;
    //////////////////////////////////////////////////////////////////////////////////////
    loginBoxSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Auth|loginBoxLogin] ()...');
            this.dpAuthProgressStager('connect');
            this.signingIn = true;
            const upCredsObj = { user: String(this.userInput.value).trim(), pass: String(this.passInput.value).trim() };
            this.deputy.uUK = upCredsObj.user.replace('@', '').replace('.', '');
            this.deputy.userEmail = upCredsObj.user;
            this.fireServ.tempUPO = { u: upCredsObj.user, p: upCredsObj.pass };
            let existFireURes = yield this.fireServ.getFireUserAuth();
            if (existFireURes.result && (yield this.authIsV(existFireURes.data))) {
                this.dpAuthProgressStager('authenticate');
                this.setFirstAuthProcess(existFireURes.data, upCredsObj);
            }
            else {
                setTimeout(() => { this.dpAuthProgressStager('authenticate'); }, 8000);
                const ssLoginRes = yield this.sserverDPLogin(upCredsObj);
                if (ssLoginRes.result && (yield this.authIsV(ssLoginRes.data))) {
                    this.setFirstAuthProcess(ssLoginRes.data, upCredsObj);
                }
                else {
                    this.dpAuthProgressStager('failed');
                    setTimeout(() => { this.signingIn = false; }, 1000);
                }
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    offlineExitEnterApp(choice) {
        this.logger.info('[Auth|offlineExitEnterApp] (' + choice + ')...');
        if (choice === 'exit') {
            const exitPromptOpts = { title: 'Exiting Sheriff', message: 'You sure now?', okButtonTitle: 'Yes sir!', cancelButtonTitle: 'Cancel' };
            _capacitor_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog.confirm(exitPromptOpts).then(wasConfirmed => { if (wasConfirmed.value) {
                this.logger.info('[App|onExit] Exit Request [CONFIRMED] - Closing App...');
                _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
            }
            else {
                this.logger.info('[App|onExit] Exit Request [DENIED] - Closing Menu Only...');
            } });
        }
        else {
            this.onLogin();
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    dpAuthProgressStager(stage) {
        this.logger.info('[APP|dpAuthProgressStager] (' + stage + ')...');
        const iconArr = ['connect', 'authenticate', 'tokens', 'completed'];
        this.evServ.publish('dpAuthProgressStatus', stage);
        this.zone.run(() => {
            const localPHFn = (thisStage) => {
                this.connectStage = thisStage;
                const myAniCSS = (jqEle, animName) => new Promise((resolve) => { let animClassStr; jqEle.includes('sunicon') ? animClassStr = 'animate__animated animate__' + animName + ' animate__duration-2s' : animClassStr = 'animate__animated animate__' + animName + ' animate__faster'; jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).addClass(animClassStr).on('animationend', () => { jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).removeClass(animClassStr); resolve('done'); }); });
                myAniCSS('#sheriff-auth-loginbox-signingin-shield-overlay-wrapper', 'flipInX');
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signingin-shield-overlay-wrapper').removeClass().addClass('signing-in-' + thisStage);
                const lilTitleIcoEle = '.sheriff-sunicon-ico.' + thisStage;
                myAniCSS(lilTitleIcoEle, 'zoomIn');
                jquery__WEBPACK_IMPORTED_MODULE_16__(lilTitleIcoEle).addClass('opacityup');
                const nextColIndex = iconArr.indexOf(thisStage) + 1;
                const nextColStage = iconArr[nextColIndex];
                const nextColEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-sunicon-col.' + nextColStage);
                jquery__WEBPACK_IMPORTED_MODULE_16__(nextColEle).addClass('nexticocol');
                const prevIcoIndex = iconArr.indexOf(thisStage) - 1;
                const prevIcoStage = iconArr[prevIcoIndex];
                jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-sunicon-ico.' + prevIcoStage).addClass('icondone');
                setTimeout(() => {
                    if (iconArr.indexOf(thisStage) === 4) {
                        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-sunicon-col').removeClass('nexticocol');
                        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-sunicon-ico.completed').addClass('icondone');
                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').addClass('standard-filled');
                    }
                }, 1000);
            };
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-sunicon-col').removeClass('nexticocol');
            if (stage === 'connect') {
                jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-sunicon-ico').removeClass('opacityup icondone');
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').removeClass('standard-filled').text('sheriff').css('transition', 'all 1s ease-in-out').css('background-size', '33% 100%');
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-dpauthinprogress-bar').css('--progress-background', '#ff9800d6');
                this.dpAuthPBarPerc = .25;
                localPHFn(stage);
            }
            ;
            if (stage === 'authenticate') {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').css('background-size', '66% 100%');
                this.dpAuthPBarPerc = .5;
                localPHFn(stage);
            }
            ;
            if (stage === 'tokens') {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').css('background-size', '100% 100%');
                this.dpAuthPBarPerc = .75;
                localPHFn(stage);
            }
            ;
            if (stage === 'completed') {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').css('background-size', '100% 100%');
                this.dpAuthPBarPerc = 1;
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-dpauthinprogress-bar').css('--progress-background', '#4caf50d6');
                localPHFn(stage);
            }
            ;
            if (stage === 'failed') {
                this.dpAuthPBarPerc = 1;
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').text('failed');
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-dpauthinprogress-bar').css('--progress-background', '#ff0000d6');
                localPHFn(stage);
            }
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NavController },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__.EventsService },
    { type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_8__.DeputyService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService },
    { type: _services_detail_service__WEBPACK_IMPORTED_MODULE_11__.DetailService },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_12__.SQLiteService },
    { type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_13__.DateTimeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_21__.NGXLogger },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_10__.FirebaseService }
];
AuthPage.propDecorators = {
    userInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild, args: ['loginInputUser',] }],
    passInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild, args: ['loginInputPass',] }]
};
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({ selector: 'app-auth', template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    //////////////////////////////////////////////////////////////////////////////////////
], AuthPage);



/***/ }),

/***/ 90957:
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 21643:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sheriff-custom-firstload-outter-wrapper\">\n  <div class=\"sheriff-custom-firstload-txt top\">starting</div>\n  <div class=\"sheriff-custom-firstload-inner-wrapper\">\n    <img class=\"sheriff-custom-firstload-img fl-bigs fload-s-anim\" src=\"../assets/img/slogo-g.png\">\n    <img class=\"sheriff-custom-firstload-img fl-star fload-star-anim\" src=\"../assets/img/loadingstar.png\">\n  </div>\n  <div class=\"sheriff-custom-firstload-txt bottom\">sheriff</div>\n</div>\n<ion-content id=\"auth-page-ion-content\" class=\"sheriff-content login-page-content\">\n\n    <div id=\"sheriff-auth-page-main-wrapper\" class=\"sheriff-page-wrapper login-page\">\n        <div id=\"sheriff-authpage-bg-wrapper\" class=\"sheriff-authpage-bg-wrapper\">\n            <div id=\"sheriff-authpage-bg-layer1\"></div>\n            <div id=\"sheriff-authpage-title-wrapper\">\n                <div id=\"sheriff-authpage-sunincons-wrapper\">\n                    <ion-grid class=\"sheriff-grid sheriff-auth-sunicon-grid\">\n                        <ion-row class=\"sheriff-row sheriff-auth-row sheriff-auth-sunicons-row iconsrow\">\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col connect\"><img src=\"../../assets/img/sheriff-sunicon-connect.png\" class=\"sheriff-sunicon-ico connect\"></ion-col>\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col authenticate\"><img src=\"../../assets/img/sheriff-sunicon-authenticate.png\" class=\"sheriff-sunicon-ico authenticate\"></ion-col>\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col tokens\"><img src=\"../../assets/img/sheriff-sunicon-tokens.png\" class=\"sheriff-sunicon-ico tokens\"></ion-col>\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col completed\"><img src=\"../../assets/img/sheriff-sunicon-completed.png\" class=\"sheriff-sunicon-ico completed\"></ion-col>\n                        </ion-row>\n                        <ion-row class=\"sheriff-row sheriff-auth-sunicon-sep-row\">\n                            <ion-col class=\"sheriff-col sheriff-auth-col sep-col\"></ion-col>\n                        </ion-row>\n                        <ion-row class=\"sheriff-row sheriff-auth-row sheriff-auth-sunicons-row textrow\">\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicons-text-top-col\">\n                                <div class=\"blacktextfill standard-filled\" id=\"sheriff-authpage-loadprogtext\">\n                                    sheriff\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <div id=\"sheriff-authpage-title-txt\"></div>\n            </div>\n            <div id=\"sheriff-authpage-bg-sunlayer\" class=\"sheriff-authpage-bg-sunlayer\"></div>\n            <div id=\"sheriff-authpage-bg-layer2\"></div>\n        </div>\n        <!-- AUTH ACTIONS MAIN WRAPPER -->\n        <div id=\"sheriff-auth-mainactions-bottom-wrapper\">\n            <!-- OFFLINE INFO/ACTION GRID -->\n            <div *ngIf=\"!hasConnection\" id=\"sheriff-auth-offline-wrapperid\" class=\"sheriff-auth-offline-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-auth-grid sheriff-offline-grid\">\n                    <ion-row class=\"sheriff-row sheriff-auth-row sheriff-offline-row heading-row1\">\n                        <ion-col size=\"3\" class=\"sheriff-col sheriff-auth-col sheriff-offline-col heading-col1\">\n                            <div id=\"sheriff-auth-offline-heading-wrapperid\" class=\"sheriff-auth-offline-heading-wrapper\">\n                                <img class=\"sheriff-auth-offline-heading-ico\" src=\"../../assets/img/sheriff-auth-offline-bigico.png\">\n                                <div id=\"sheriff-auth-offline-offlinetext\" class=\"sheriff-auth-offline-offlinetext\">offline</div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-auth-col sheriff-offline-col infotext-col1\">\n                            <div id=\"sheriff-auth-offline-info-wrapperid\" class=\"sheriff-auth-offline-info-wrapper\">\n                                <div *ngIf=\"!hasConnection && !gotSavedDLData\" class=\"sheriff-auth-offline-infotext nodataquitonly\">\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv l1\">\n                                        no data connection\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        Sheriff cannot be used in <span class=\"auth-olmodespan\">offline mode</span> because no saved data was found.\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        This App automatically saves and updates your data so that it <span class=\"italexpress\">can</span> be used offline so it is most likely that:\n                                        <ul class=\"sheriff-auth-offline-info-list\">\n                                            <li class=\"sheriff-auth-offline-info-list-item\">you are using this App for the first time</li>\n                                            <li class=\"sheriff-auth-offline-info-list-item\">you recently un/re-installed Sheriff</li>\n                                            <li class=\"sheriff-auth-offline-info-list-item\">your device denied this App storage permissions</li>\n                                            <li class=\"sheriff-auth-offline-info-list-item\">you recently cleared/deleted this App's storage/cache</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"!hasConnection && gotSavedDLData\" class=\"sheriff-auth-offline-infotext gotdatacanenter\">\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv l1\">\n                                        no data connection\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        Sheriff can used in <span class=\"auth-olmodespan\">offline mode</span> but it is <span class=\"stressimportant\">important</span> that you understand that you will be looking at <span class=\"italexpress\">outdated information</span>                                        and unable to refresh, change, post or send any data to Deputy servers.\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        If you understand and accept those limitations, hit that <span class=\"lilbtntxt enter\">enter app</span> button, otherwise, the <span class=\"lilbtntxt exit\">exit app</span> button is for you.\n                                    </div>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"sheriff-row sheriff-auth-row sheriff-offline-row btns-row2\">\n                        <ion-col class=\"sheriff-col sheriff-auth-col sheriff-offline-col exitbtn-col1\">\n                            <ion-button (click)=\"offlineExitEnterApp('exit')\" id=\"sheriff-auth-loginbox-exitapp\">\n                                <ion-icon id=\"sheriff-auth-loginbox-exitapp-ico\" name=\"log-out\"></ion-icon>\n                                <div id=\"sheriff-auth-offline-exitapp-btn-text\">Exit App</div>\n                            </ion-button>\n                        </ion-col>\n                        <ion-col *ngIf=\"!(!hasConnection && !gotSavedDLData)\" class=\"sheriff-col sheriff-auth-col sheriff-offline-col enterbtn-col2\">\n                            <ion-button (click)=\"offlineExitEnterApp('enter')\" id=\"sheriff-auth-loginbox-enterapp\">\n                                <ion-icon id=\"sheriff-auth-loginbox-enterapp-ico\" name=\"log-in\"></ion-icon>\n                                <div id=\"sheriff-auth-offline-enterapp-btn-text\">Enter App</div>\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- APP/DEPUTY LOGIN ACTION GRID -->\n            <div *ngIf=\"hasConnection\" id=\"sheriff-auth-loginbox-wrapperid\" class=\"sheriff-auth-loginbox-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-auth-loginbox-grid\">\n                    <ion-row class=\"sheriff-row sheriff-auth-loginbox-row heading-row\">\n                        <ion-col class=\"sheriff-col sheriff-auth-loginbox-col heading-col\">\n                            <div class=\"sheriff-auth-loginbox-heading-text\">\n                                <div *ngIf=\"!signingIn\" id=\"sheriff-auth-loginbox-signin-text\" class=\"loginbox-heading-class\" (click)=\"owenDev()\">One-time Sign In</div>\n                                <div *ngIf=\"signingIn && connectStage !== 'completed' && connectStage !== 'failed' && !frSetup\" id=\"sheriff-auth-loginbox-signingin-text\" class=\"loginbox-heading-class\">Signing In</div>\n                                <div *ngIf=\"signingIn && connectStage === 'completed' && !frSetup\" id=\"sheriff-auth-loginbox-signin-complete-text\" class=\"loginbox-heading-class\">Completed</div>\n                                <div *ngIf=\"signingIn && connectStage === 'failed'\" id=\"sheriff-auth-loginbox-signin-failed-text\" class=\"loginbox-heading-class\">Failed</div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"!signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row username-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col username-input-col\">\n                            <div class=\"sheriff-col sheriff-auth-loginbox-col username-leftindic-col\">\n                                <ion-icon class=\"sheriff-auth-loginbox-input-ico user left sheriff-auth-login-username-ico\" name=\"mail\"></ion-icon>\n                            </div>\n                            <ion-input ngModel #loginInputUser (ionChange)=\"loginBoxInput('sheriff-auth-login-username', 'change')\" disabled=\"false\" required=\"true\" clear-input=\"true\" autocomplete=\"off\" autocorrect=\"off\" autofocus=\"false\" value id='sheriff-auth-login-username' class='sheriff-auth-login-input user'\n                                (ionInput)=\"loginBoxInput('.sheriff-auth-loginbox-input-ico.user', 'input')\" (ionFocus)=\"loginBoxInput('sheriff-auth-login-username', 'focus')\" (ionBlur)=\"loginBoxInput('sheriff-auth-login-username', 'blur')\" pattern=\"email\"\n                                mode=\"md\" inputmode=\"email\" placeholder='Your Deputy Email' type=\"email\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"!signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row password-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col password-input-col\">\n                            <div class=\"sheriff-col sheriff-auth-loginbox-col password-leftindic-col\">\n                                <ion-icon class=\"sheriff-auth-loginbox-input-ico pass left sheriff-auth-login-password-ico\" name=\"medical\"></ion-icon>\n                            </div>\n                            <ion-input ngModel #loginInputPass (ionChange)=\"loginBoxInput('sheriff-auth-login-password', 'change')\" disabled=\"true\" required=\"true\" clear-input=\"true\" autocomplete=\"off\" autocorrect=\"off\" autofocus=\"false\" value id='sheriff-auth-login-password' class='sheriff-auth-login-input pass'\n                                (ionInput)=\"loginBoxInput('.sheriff-auth-loginbox-input-ico.pass', 'input')\" (ionFocus)=\"loginBoxInput('sheriff-auth-login-password', 'focus')\" (ionBlur)=\"loginBoxInput('sheriff-auth-login-password', 'blur')\" mode=\"md\" inputmode=\"password\"\n                                placeholder='Your Deputy Password' type=\"password\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row signingin-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col signingin-col\">\n                            <div *ngIf=\"!frSetup\" id=\"sheriff-auth-loginbox-signingin-progress-icon-wrapper\">\n                                <img *ngIf=\"connectStage === 'connect'\" src=\"../../assets/img/sheriffauth-1-connect.png\" class=\"sheriff-auth-loginbox-signingin-progress-ico connect\">\n                                <img *ngIf=\"connectStage === 'authenticate'\" src=\"../../assets/img/sheriffauth-2-authenticate.png\" class=\"sheriff-auth-loginbox-signingin-progress-ico authenticate\">\n                                <img *ngIf=\"connectStage === 'tokens'\" src=\"../../assets/img/sheriffauth-3-tokens.png\" class=\"sheriff-auth-loginbox-signingin-progress-ico tokens\">\n                            </div>\n                            <div *ngIf=\"connectStage === 'completed' && !frSetup\" class=\"animate__animated animate__zoomIn animate__faster\" id=\"sheriff-auth-loginbox-signingin-completed-icon-wrapper\">\n                                <img src=\"../../assets/img/sheriffauth-5-completed.png\" class=\"sheriff-auth-loginbox-signingin-completed-ico\">\n                            </div>\n                            <div *ngIf=\"connectStage === 'failed' && !frSetup\" class=\"animate__animated animate__flash animate__slower animate__infinite\" id=\"sheriff-auth-loginbox-signingin-failed-icon-wrapper\">\n                                <img src=\"../../assets/img/sheriff-auth-error-bigico.png\" class=\"sheriff-auth-loginbox-signingin-failed-ico\">\n                            </div>\n                            <div id=\"sheriff-auth-loginbox-signingin-shield-overlay-wrapper\"></div>\n                            <div id=\"sheriff-auth-loginbox-signingin-shield-darkbacker\"></div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row signingin-statustext-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col signingin-statustext-col\">\n                            <div *ngIf=\"connectStage !== 'completed' && connectStage !== 'failed' && !frSetup\" class=\"sheriff-auth-signingin-progress-stageno-text-wrapper\">\n                                <span class=\"stageno-text connect\" *ngIf=\"connectStage === 'connect'\">1</span>\n                                <span class=\"stageno-text authenticate\" *ngIf=\"connectStage === 'authenticate'\">2</span>\n                                <span class=\"stageno-text tokens\" *ngIf=\"connectStage === 'tokens'\">3</span>\n                                <span class=\"lilvertdiv\">|</span>3\n                                <span class=\"lilhorodiv\">-</span>\n                            </div>\n                            <div *ngIf=\"connectStage === 'connect'\" class=\"sheriff-auth-signingin-progress-text connect\">Connecting...</div>\n                            <div *ngIf=\"connectStage === 'authenticate'\" class=\"sheriff-auth-signingin-progress-text authenticate\">Authenticating...</div>\n                            <div *ngIf=\"connectStage === 'tokens'\" class=\"sheriff-auth-signingin-progress-text tokens\">Obtaining Token...</div>\n                            <div *ngIf=\"connectStage === 'completed'\" class=\"animate__animated animate__flipInX sheriff-auth-signingin-progress-text completed\">Saddle-up, pilgram.</div>\n                            <div *ngIf=\"connectStage === 'failed'\" class=\"animate__animated animate__flipInX sheriff-auth-signingin-progress-text failed\">Login Failed!</div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"!signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row logincancelbtn-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col login-btn-col\">\n                            <div *ngIf=\"authLoginBtn.disabled\" id=\"sheriff-auth-loginbox-helpertext-wrapper\">\n                                <div id=\"sheriff-auth-loginbox-helper-text\">\n                                    <div class=\"animate__animated animate__fadeIn\" id=\"sheriff-auth-loginbox-helper-initial\">Sign in with your <img src=\"../../assets/img/sheriff-deputy-logoname-white-small.png\" class=\"lildeputylogoname\"> email/password</div>\n                                </div>\n                            </div>\n                            <ion-button #authLoginBtn disabled=\"true\" (click)=\"loginBoxSignIn()\" id=\"sheriff-auth-loginbox-loginbtn\" class=\"animate__animated animate__flipInX sheriff-auth-login-button loginbtn\">\n                                <ion-icon class=\"sheriff-ico sheriff-auth-logincancel-btn-ico login\" name=\"log-in\"></ion-icon>\n                                <div class=\"sheriff-btn-label sheriff-auth-logincancel-btn-label login animate__animated animate__fadeIn\">Save & Sign In</div>\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- DEPUTY API AUTH PROGRESS GRID -->\n            <div *ngIf=\"signingIn\" id=\"sheriff-auth-dpauthinprogress-wrapperid\" class=\"sheriff-auth-dpauthinprogress-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-auth-dpauthinprogress-grid\">\n                    <ion-row class=\"sheriff-row sheriff-auth-dpauthinprogress-row row1\">\n                        <ion-col class=\"sheriff-col sheriff-auth-dpauthinprogress-col col1\">\n                            <div class=\"sheriff-auth-dpauthinprogress-bar-wrapper\">\n                                <ion-progress-bar id=\"sheriff-auth-dpauthinprogress-bar\" value=\"{{ dpAuthPBarPerc }}\"></ion-progress-bar>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- END AUTH ACTIONS WRAPPER -->\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts-es2015.js.map