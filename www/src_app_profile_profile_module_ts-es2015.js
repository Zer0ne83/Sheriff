(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 64021:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": function() { return /* binding */ CameraSource; },
/* harmony export */   "CameraDirection": function() { return /* binding */ CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* binding */ CameraResultType; }
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 37673:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType; },
/* harmony export */   "CameraSource": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource; },
/* harmony export */   "Camera": function() { return /* binding */ Camera; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 64021);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 14028)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);








const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 52907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 70231);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/app.service */ 66475);
/* harmony import */ var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/dialog */ 63540);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modals_profilecsselect_profilecsselect_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../modals/profilecsselect/profilecsselect.page */ 67536);
/* harmony import */ var _services_profileData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/profileData */ 92472);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/sqlite.service */ 90636);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/events.service */ 80106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/detail.service */ 52153);
/* harmony import */ var _services_deputy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/deputy.service */ 22092);
/* harmony import */ var _services_datetime_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/datetime.service */ 12826);
/* harmony import */ var _services_filesystem_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/filesystem.service */ 22904);
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/camera.service */ 53942);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/filesystem */ 61977);
/* harmony import */ var _services_iab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/iab.service */ 82059);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor/keyboard */ 87730);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);























////////////////////////////////////////////////////////////////////////////////////////
let ProfilePage = class ProfilePage {
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(evServ, logger, platform, detailServ, deputy, dT, fileServ, camServ, navCtrl, loadCtrl, menuCtrl, modalCtrl, storeServ, sqlServ, appRef, dChanges, iabServ, appServ) {
        this.evServ = evServ;
        this.logger = logger;
        this.platform = platform;
        this.detailServ = detailServ;
        this.deputy = deputy;
        this.dT = dT;
        this.fileServ = fileServ;
        this.camServ = camServ;
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.storeServ = storeServ;
        this.sqlServ = sqlServ;
        this.appRef = appRef;
        this.dChanges = dChanges;
        this.iabServ = iabServ;
        this.appServ = appServ;
        ////////////////////////////////////////////////////////////////////////////////////////
        this.progCirc = { responsive: true, showTitle: false, showSubtitle: false, showUnits: false, percent: 0, radius: 56, outerStrokeWidth: 4, showInnerStroke: false, outerStrokeColor: '#FF9800', animation: true, backgroundPadding: 2, animationDuration: 400 };
        this.kbO = false;
        this.kbH = null;
        this.scH = null;
        this.scB = null;
        this.kbAdjust = 'unset';
        this.pplArr = [];
        this.gotPerms = false;
        ////////////////////////////////////////////////////////////////////////////////
        this.ulPhotoObj = null;
        this.profileData = {
            photo: {
                value: {
                    ulPath: '',
                    nativeUri: './../../assets/img/sheriff-profile-no-photo-ico.png',
                    setDate: '-',
                    setBy: '-',
                    dims: '-',
                    size: { s: null, b: '' },
                    type: '-'
                },
                hasChanged: false,
                isLock: false
            },
            dname: { value: null, hasChanged: false, isLock: false },
            fname: { value: null, hasChanged: false, isLock: false },
            lname: { value: null, hasChanged: false, isLock: false },
            email: { value: null, hasChanged: false, isLock: false },
            phone: { value: null, hasChanged: false, isLock: false },
            dob: { value: null, date: null, hasChanged: false, isLock: true },
            pin: { value: null, hasChanged: false, isLock: true },
            gender: {
                value: null,
                label: null,
                options: [
                    { value: '0', label: 'Not specified' },
                    { value: '1', label: 'Male' },
                    { value: '2', label: 'Female' },
                    { value: '3', label: 'Non-binary' }
                ],
                hasChanged: false,
                isLock: true
            },
            pronoun: {
                value: null,
                label: null,
                options: [
                    { value: '0', label: 'Not specified' },
                    { value: '1', label: 'He/Him' },
                    { value: '2', label: 'She/Her' },
                    { value: '3', label: 'They/Them' },
                    { value: '4', label: 'Custom' }
                ],
                hasChanged: false,
                isLock: true
            },
            custompn: { value: null, hasChanged: false, isLock: true },
            street: { value: null, hasChanged: false, isLock: false },
            city: { value: null, hasChanged: false, isLock: false },
            country: { value: null, label: null, hasChanged: false, isLock: false },
            state: { value: null, label: null, hasChanged: false, isLock: false },
            pcode: { value: null, hasChanged: false, isLock: false },
            ename: { value: null, hasChanged: false, isLock: false },
            ephone: { value: null, hasChanged: false, isLock: false } //contactaddress
        };
        this.pCAObjects = null;
        this.upContactAddress = ['email', 'phone', 'street', 'city', 'country', 'state', 'pcode', 'ename', 'ephone'];
        this.pLocked = ['dob', 'gender', 'pronoun', 'pin'];
        this.pCompCats = {
            photo: ['photo'],
            general: ['dname', 'fname', 'lname', 'email', 'phone', 'dob', 'pin', 'gender', 'pronoun'],
            address: ['street', 'city', 'country', 'state', 'pcode'],
            emergency: ['ename', 'ephone']
        };
        this.pComplete = {
            all: { v: 0, t: 17, p: 0 },
            photo: { v: 0, t: 1, p: 0 },
            general: { v: 0, t: 9, p: 0 },
            address: { v: 0, t: 5, p: 0 },
            emergency: { v: 0, t: 2, p: 0 }
        };
        this.hasDBProfile = false;
        this.initDataLoadDone = false;
        this.pIsLocked = true;
        this.tryingUnlock = false;
        this.pFieldFocus = null;
        this.dobDPOpen = false;
        this.genderPopOpts = { id: 'genderpop', backdropDismiss: true };
        this.pronounPopOpts = { id: 'pronounpop', backdropDismiss: true };
        this.genProCustOpen = { gender: false, pronoun: false, custompn: false };
        this.cModalIsOpen = false;
        this.sModalIsOpen = false;
        this.csSelectModalOpts = { component: _modals_profilecsselect_profilecsselect_page__WEBPACK_IMPORTED_MODULE_4__.ProfileCSSelectPage, cssClass: 'cs-selectlist', showBackdrop: true, backdropDismiss: true, animated: true, keyboardClose: true };
        this.shouldSave = false;
        this.errorSave = false;
        this.appFocusListening = false;
        ////////////////////////////////////////////////////////////////////////////////////////
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => { const reader = new FileReader; reader.onerror = reject; reader.onload = () => { resolve(reader.result); }; reader.readAsDataURL(blob); });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|ngOnInit] ()...');
            this.myObj = this.detailServ.myObj;
            this.meObj = this.detailServ.meObj;
            this.meEmpId = this.detailServ.meEmpId;
            this.pplArr = this.detailServ.pplArr;
            this.pageEnterAnim();
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.removeAllListeners();
            if (!this.gotPerms) {
                const getBPermsRes = yield this.camServ.reqCamPerms();
                this.gotPerms = getBPermsRes;
            }
            ;
            this.initKBPopListeners('all');
            this.appFocusListener();
            this.initSetup();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidEnter() {
        this.logger.info('[Profile|ionViewDidEnter] ()...');
        this.evServ.publish('doPageEnterAnim', null);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initKBPopListeners(mode) {
        this.logger.info('[Profile|initKBPopListeners] ()...');
        this.platform.ready().then(() => {
            const exclArr = ['gender', 'pronoun', 'state', 'country'];
            if (this.scH === null) {
                this.scH = this.platform.height();
            }
            ;
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.removeAllListeners();
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.addListener('keyboardDidShow', kbI => {
                this.kbO = true;
                let localSCB;
                if (this.scB === null) {
                    this.kbH = kbI.keyboardHeight;
                    this.scB = this.scH - this.kbH;
                    localSCB = this.scB;
                }
                else {
                    localSCB = this.scB;
                }
                ;
                if (this.pFieldFocus !== null && !exclArr.includes(this.pFieldFocus)) {
                    this.logger.info('[Profile|kbDidShow] (Adjusting)...');
                    const iEle = jquery__WEBPACK_IMPORTED_MODULE_17__('#' + this.pFieldFocus + '-input-id');
                    this.logger.info('[Profile|kbDidShow] Input: #' + this.pFieldFocus + '-input-id');
                    const iEleB = jquery__WEBPACK_IMPORTED_MODULE_17__(iEle).offset().top + jquery__WEBPACK_IMPORTED_MODULE_17__(iEle).outerHeight() + 12;
                    this.logger.info('[Profile|kbDidShow] Input Bottom: ' + iEleB);
                    if (iEleB > localSCB) {
                        this.kbAdjust = String(localSCB - iEleB) + 'px';
                        this.appRef.tick();
                        this.logger.info('[Profile|kbDidShow] Adjust: ' + this.kbAdjust);
                    }
                    else {
                        this.kbAdjust = 'unset';
                        this.appRef.tick();
                        this.logger.info('[Profile|kbDidShow] Adjust: NIL - Not Covered.');
                    }
                }
                else {
                    if (this.pFieldFocus === null) {
                        this.logger.info('[Profile|kbDidShow] (Skipping): pFieldFocus===null)');
                    }
                    else {
                        this.logger.info('[Profile|kbDidShow] (Skipping): excluded Field');
                    }
                }
            });
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.addListener('keyboardDidHide', () => {
                this.kbO = false;
                if (this.kbAdjust !== 'unset') {
                    this.kbAdjust = 'unset';
                    this.appRef.tick();
                    this.logger.info('[Profile|kbDidHide] - Unset Adjust Done');
                }
                else {
                    this.logger.info('[Profile|kbDidHide] (Skipping): Already UNSET');
                }
            });
            if (mode === 'all') {
                document.addEventListener('ionPopoverDidPresent', () => { this.logger.info('[Profile|EventListen] (ionPopDidPresent): ' + this.pFieldFocus); this.genProCustOpen[this.pFieldFocus] = true; });
                document.addEventListener('ionPopoverWillDismiss', () => { let dismissK; for (const popK of Object.keys(this.genProCustOpen)) {
                    const pK = popK.toString();
                    if (this.genProCustOpen[pK]) {
                        dismissK = pK;
                        this.genProCustOpen[pK] = false;
                    }
                } ; this.logger.info('[Profile|EventListen] (ionPopDidDismiss): ' + dismissK); });
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    appFocusListener() {
        this.logger.info('[Profile|appFocusListener] ()...');
        if (!this.appFocusListening) {
            this.evServ.subscribe('myAppStateActive', tf => { if (tf) {
                this.initKBPopListeners('kb');
                this.logger.info('[Profile|appFocusListener] App State [ACTIVE] - Doing Reinit of KB Listeners...');
            }
            else {
                this.logger.info('[Profile|appFocusListener] App State [NOT ACTIVE] - No Action.');
            } });
            this.appFocusListening = true;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initSetup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|initSetup] ()...');
            this.hasDBProfile = yield this.sqlServ.hasProfile();
            this.logger.info('[Profile|initSetup] [DBPROFILE]=' + this.hasDBProfile.toString().toUpperCase());
            if (this.hasDBProfile) {
                let forceSync;
                let firstSync;
                let timeSync;
                const pOpts = yield this.storeServ.getObject('settingsProfileOpts');
                pOpts !== null ? forceSync = pOpts.alwaysSync.value : forceSync = false;
                const lsUTS = yield this.detailServ.getProfileLastSync();
                if (lsUTS === 0) {
                    firstSync = true;
                    this.isFirstSync = true;
                    timeSync = false;
                }
                else {
                    firstSync = false;
                    const nowUTS = this.dT.gUT();
                    const sSLS = nowUTS - lsUTS;
                    sSLS > 86400 ? timeSync = true : timeSync = false;
                }
                ;
                if (forceSync || firstSync || timeSync) {
                    this.initRefreshProfile('refresh');
                }
                else {
                    this.loadDBProfile();
                }
            }
            else {
                this.initRefreshProfile('init');
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initRefreshProfile(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|initRefreshProfile] ()...');
            let initStages = { photo: null, iab: null };
            let profileInitLoader = null;
            const rfPD = (data) => { if (mode === 'refresh') {
                this.evServ.publish('refreshProg', data);
            } };
            if (mode === 'init' || (mode === 'refresh' && this.isFirstSync)) {
                profileInitLoader = yield this.loadCtrl.create({ spinner: 'dots', cssClass: 'sheriff-loader-class', message: 'Fetching Profile Data' });
                yield profileInitLoader.present();
            }
            ;
            const checkDismiss = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                if (initStages.photo !== null && initStages.iab !== null) {
                    clearInterval(checkDismiss);
                    if (mode === 'init') {
                        const dbCRes = yield this.sqlServ.createProfile(this.profileData);
                        this.calcComplete();
                        profileInitLoader.dismiss();
                        if (dbCRes) {
                            this.evServ.showToast('success', 'Profile Created');
                        }
                        else {
                            this.evServ.showToast('error', 'Profile CreateSave Error');
                        }
                    }
                    else {
                        const dbSURes = yield this.saveUpdateProfile(this.profileData);
                        this.calcComplete();
                        rfPD(10);
                        if (this.isFirstSync) {
                            this.isFirstSync = null;
                            profileInitLoader.dismiss();
                        }
                        ;
                        if (dbSURes) {
                            this.evServ.showToast('success', 'Profile Updated');
                        }
                        else {
                            this.evServ.showToast('error', 'Profile Update Error');
                        }
                    }
                    ;
                    let isUL;
                    for (let i = 0; i < this.pLocked.length; i++) {
                        if (this.profileData[this.pLocked[i]].value !== null) {
                            isUL = true;
                        }
                    }
                    ;
                    isUL ? this.pIsLocked = false : this.pIsLocked = true;
                    this.initDataLoadDone = true;
                }
            }), 1000);
            const iabTO = setTimeout(() => { this.evServ.publish('fetchPDone', false); }, 30000);
            this.evServ.subscribe('initIAB', (initIABRes) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () { clearTimeout(iabTO); initStages.iab = initIABRes; this.evServ.destroy('initIAB'); }));
            this.initGetIAB(mode);
            const initPhotoRes = yield this.initGetPhoto();
            rfPD(20);
            if (initPhotoRes) {
                initStages.photo = true;
            }
            else {
                initStages.photo = false;
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    loadDBProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|loadDBProfile] ()...');
            const pD = (yield this.sqlServ.getProfile()).data;
            for (const [key, value] of Object.entries(pD)) {
                const pK = key.toString();
                const pV = value;
                if (this.profileData.hasOwnProperty(pK)) {
                    pK === 'photo' ? this.profileData[pK].value = JSON.parse(value.toString()) : this.profileData[pK].value = pV;
                }
                ;
                if (pK === 'dob') {
                    this.profileData.dob.date = this.dT.parseStr(pV.toString(), 'MMM d, yyyy');
                }
                ;
                if (pK === 'custompn' && pV !== 'Custom') {
                    this.profileData.pronoun.options[4].label = pV;
                    if (this.profileData.pronoun.value === '4' && this.profileData.pronoun.label !== pV) {
                        this.profileData.pronoun.label = pV;
                    }
                }
                ;
                if (pK === 'country' && !this.profileData.country.label) {
                    const gSCRes = yield this.sqlServ.getSingleCountry(pV);
                    if (gSCRes.result) {
                        this.profileData.country.label = gSCRes.data.Country;
                    }
                }
                ;
                if (pK === 'state' && !this.profileData.state.label) {
                    const gSSRes = yield this.sqlServ.getSingleState(pV);
                    if (gSSRes.result) {
                        this.profileData.state.label = gSSRes.data.State;
                    }
                }
            }
            ;
            let isUL;
            for (let i = 0; i < this.pLocked.length; i++) {
                if (this.profileData[this.pLocked[i]].value !== null) {
                    isUL = true;
                }
            }
            ;
            isUL ? this.pIsLocked = false : this.pIsLocked = true;
            this.initDataLoadDone = true;
            this.calcComplete();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    saveUpdateProfile(profileData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|saveUpdateProfile] ()...');
            const upDProfRes = yield this.sqlServ.updateProfile(profileData);
            if (upDProfRes) {
                return Promise.resolve(true);
            }
            else {
                return Promise.resolve(false);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doProfileRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|doProfileRefresh]');
            this.progCirc.animation = false;
            this.progCirc.percent = 0;
            this.progCirc.outerStrokeColor = '#ff9800';
            this.initDataLoadDone = false;
            this.pIsLocked = true;
            yield this.resetAllPFields();
            yield this.resetComplete();
            this.progCirc.percent += 10;
            this.evServ.subscribe('refreshProg', rPPerc => {
                this.progCirc.percent += rPPerc;
                if (this.progCirc.percent >= 100) {
                    this.logger.info('[Profile|doProfileRefresh] (COMPLETED REFRESH!)...');
                    this.progCirc.outerStrokeColor = '#4caf50';
                    event.target.complete();
                    this.myAniCSS('.hcl-progcirc.profile', 'fadeOut', 0, 1400, 'remove', 'hide');
                    setTimeout(() => { this.progCirc.percent = 0; this.progCirc.outerStrokeColor = '#FF9800'; jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-progcirc.profile').css('display', 'unset'); }, 2000);
                    this.evServ.destroy('refreshProg');
                }
                else {
                    console.log(this.progCirc.percent);
                }
            });
            this.initRefreshProfile('refresh');
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    resetComplete() {
        this.logger.info('[Profile|resetComplete] ()...');
        let cFC = 0;
        const ttlCFs = Object.keys(this.pComplete).length;
        for (const pCKey of Object.keys(this.pComplete)) {
            cFC++;
            const pC = pCKey.toString();
            this.pComplete[pC].v = 0;
            this.pComplete[pC].p = 0;
            if (cFC === ttlCFs) {
                return Promise.resolve(true);
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    resetAllPFields() {
        this.logger.info('[Profile|resetAllPFields] ()...');
        for (const [key] of Object.entries(this.profileData)) {
            const pK = key.toString();
            if (pK === 'photo') {
                this.profileData.value = { ulPath: '', nativeUri: './../../assets/img/sheriff-profile-no-photo-ico.png', setDate: '-', setBy: '-', dims: '-', size: { s: null, b: '' }, type: '-' };
            }
            else {
                this.profileData[pK].value = null;
            }
            ;
            this.profileData[pK].hasChanged = false;
            if (this.profileData[pK].hasOwnProperty('label')) {
                this.profileData[pK].label = null;
            }
        }
        ;
        this.profileData.dob.date = null;
        this.profileData.pronoun.options[4].label = 'Custom';
        console.log(this.profileData);
        return Promise.resolve(true);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    calcComplete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|calcComlplete] ()...');
            yield this.resetComplete();
            for (const pKey of Object.keys(this.profileData)) {
                const pK = pKey.toString();
                if (pK !== 'custompn') {
                    let pCat = null;
                    for (const pCKey of Object.keys(this.pCompCats)) {
                        const pC = pCKey.toString();
                        if (this.pCompCats[pC].includes(pK)) {
                            pCat = pC;
                        }
                    }
                    ;
                    if (this.profileData[pK].value !== null && this.profileData[pK].value !== 0 && pCat !== null) {
                        this.pComplete[pCat].v++;
                        this.pComplete[pCat].p = Math.round((this.pComplete[pCat].v / this.pComplete[pCat].t) * 100);
                    }
                }
            }
            ;
            this.pComplete.all.v = this.pComplete.photo.v + this.pComplete.general.v + this.pComplete.address.v + this.pComplete.emergency.v;
            this.pComplete.all.p = Math.round((this.pComplete.all.v / this.pComplete.all.t) * 100);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initGetPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|initGetPhoto] ()...');
            const apiPhoto = yield this.deputy.getThis('my/photo');
            if (apiPhoto.r) {
                const p = apiPhoto.d;
                this.profileData.photo.value.nativeUri = yield this.fileServ.dlFile(p.DownloadLink, 'tempProfilePhoto');
                this.profileData.photo.value.setDate = this.dT.format(new Date(p.Created), 'dd/MM/yy HH:mm');
                if (this.meEmpId === p.Creator) {
                    this.profileData.photo.value.setBy = 'You';
                }
                else {
                    const pC = this.pplArr.filter(p => p.EmpId === p.Creator);
                    if (pC.length > 0) {
                        this.profileData.photo.value.setBy = pC[0].FirstName + ' ' + pC[0].LastName.charAt(0) + '.';
                    }
                    else {
                        this.profileData.photo.value.setBy = null;
                    }
                }
                ;
                this.profileData.photo.value.dims = p.Width.toString() + 'x' + p.Height.toString();
                this.profileData.photo.value.size = this.niceBytes(p.Size);
                this.profileData.photo.value.type = p.Type.replace('image/', '');
                return Promise.resolve(true);
            }
            else {
                return Promise.resolve(false);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initGetIAB(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|authProfileFetch] ()...');
            const rfPD = (data) => { if (mode === 'refresh') {
                this.evServ.publish('refreshProg', data);
            } };
            const emailIsV = (emailText) => { const validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; if (emailText.match(validEmailFormat)) {
                return true;
            }
            else {
                return false;
            } };
            const setDOMVal = (name, val) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                const oldVal = this.profileData[name].value;
                if (val !== oldVal) {
                    this.profileData[name].value = val;
                    if (name === 'gender' || name === 'pronoun') {
                        const oldLbl = this.profileData[name].label;
                        const newLbl = this.profileData[name].options[Number(val)].label;
                        if (oldLbl === null || oldLbl !== newLbl) {
                            this.profileData[name].label = newLbl;
                        }
                    }
                    ;
                    if (name === 'custompn' && val !== 'Custom') {
                        this.profileData.pronoun.options[4].label = val;
                        if (this.profileData.pronoun.value === '4' && this.profileData.pronoun.label !== val) {
                            this.profileData.pronoun.label = val;
                        }
                    }
                    ;
                    if (name === 'dob') {
                        this.profileData.dob.date = this.dT.parseStr(val, 'MMM d, yyyy');
                    }
                    ;
                    if (name === 'country') {
                        const oldLbl = this.profileData.country.label;
                        let newLbl;
                        const getNLRes = yield this.sqlServ.getSingleCountry(val);
                        getNLRes.result ? newLbl = getNLRes.data.Country : newLbl = null;
                        if (newLbl !== null) {
                            if (oldLbl === null || oldLbl !== newLbl) {
                                this.profileData.country.label = newLbl;
                            }
                        }
                    }
                    ;
                    if (name === 'state') {
                        const oldLbl = this.profileData.state.label;
                        let newLbl;
                        const getNLRes = yield this.sqlServ.getSingleState(val);
                        getNLRes.result ? newLbl = getNLRes.data.State : newLbl = null;
                        if (newLbl !== null) {
                            if (oldLbl === null || oldLbl !== newLbl) {
                                this.profileData.state.label = newLbl;
                            }
                        }
                    }
                    ;
                    this.profileData[name].hasChanged = false;
                }
            });
            yield this.sqlServ.openAuth();
            const gAR = yield this.sqlServ.getADBItem('up');
            yield this.sqlServ.closeAuth();
            if (gAR.result) {
                const dUN = gAR.data.u;
                const dPW = gAR.data.p;
                if (emailIsV(dUN) && dPW.length > 3) {
                    this.tryingUnlock = true;
                    this.evServ.subscribe('getProfileRes', iabData => {
                        if (iabData.result === true) {
                            const iabD = iabData.data;
                            for (let i = 0; i < _services_profileData__WEBPACK_IMPORTED_MODULE_5__.iabKeys.length; i++) {
                                const pN = _services_profileData__WEBPACK_IMPORTED_MODULE_5__.iabKeys[i];
                                const iabVal = iabD[i];
                                if (iabVal !== null && iabVal !== 'null' && iabVal !== undefined && iabVal !== 'undefined' && iabVal !== '') {
                                    setDOMVal(pN, iabVal);
                                }
                            }
                            ;
                            this.tryingUnlock = false;
                            this.pIsLocked = false;
                            this.detailServ.setProfileLastSync();
                            this.evServ.publish('initIAB', true);
                            this.evServ.destroy('getProfileRes');
                        }
                        else if (iabData.result === false) {
                            this.evServ.publish('initIAB', false);
                            this.evServ.destroy('getProfileRes');
                        }
                        else if (iabData.result === 'prog') {
                            rfPD(iabData.data);
                        }
                    });
                    this.iabServ.getProfile(dUN, dPW);
                }
                else {
                    this.evServ.publish('initIAB', false);
                    this.logger.info('[Profile|initGVars] (checkDUP) (Error): U/P Appears INVALID - Skipping IAB Update.');
                }
            }
            else {
                this.evServ.publish('initIAB', false);
                this.logger.info('[Profile|initGVars] (getADBItem) (Error): Failed to Retrieve U/P - Skipping IAB Update.');
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    getPDVal(fname) { return this.profileData[fname].value; }
    ;
    ////////////////////////////////////////////////////////////////////////////////////////
    niceBytes(bytes, decimals = 0) { if (bytes === 0)
        return 'empty'; const k = 1024; const dm = decimals < 0 ? 0 : decimals; const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; const i = Math.floor(Math.log(bytes) / Math.log(k)); return { s: parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), b: sizes[i] }; }
    ////////////////////////////////////////////////////////////////////////////////////////
    changeGender(nV) {
        this.logger.info('[Profile|changeGender] (' + nV + ')...');
        if (this.initDataLoadDone) {
            const newVal = Number(nV);
            if (newVal !== this.profileData.gender.value) {
                this.profileData.gender.value = newVal;
                this.profileData.gender.label = this.profileData.gender.options[newVal].label;
                this.profileData.gender.hasChanged = true;
                this.checkPFieldChanges();
            }
            else {
                this.logger.info('[Profile|changeGender] [SKIP] - Value is Same.');
            }
            ;
        }
        else {
            this.logger.info('[Profile|changeGender] [SKIP] - initDataLoadDone!==TRUE');
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    changePronoun(nV) {
        this.logger.info('[Profile|changePronoun] (' + nV + ')...');
        if (this.initDataLoadDone) {
            const newVal = nV.toString().trim();
            if (newVal !== this.profileData.pronoun.value) {
                this.profileData.pronoun.value = newVal;
                this.profileData.pronoun.label = this.profileData.pronoun.options[Number(newVal)].label;
                this.profileData.pronoun.hasChanged = true;
                this.checkPFieldChanges();
            }
            else {
                this.logger.info('[Profile|changePronoun] [SKIP] - Value is Same.');
            }
            ;
        }
        else {
            this.logger.info('[Profile|changePronoun] [SKIP] - initDataLoadDone!==TRUE');
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    editCustomPronoun(currentCustPN) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|editCustomPronoun] ()...');
            this.genProCustOpen.custompn = true;
            let cPNPOpts = { title: 'Custom Pronouns', okButtonTitle: 'OK/Add', cancelButtonTitle: 'Cancel', message: 'Enter pronouns in Subject/Object format:' };
            if (currentCustPN !== 'Custom') {
                cPNPOpts['inputText'] = currentCustPN;
            }
            ;
            const { value, cancelled } = yield _capacitor_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog.prompt(cPNPOpts);
            if (!cancelled && value !== null && value !== undefined && value !== '' && value !== this.profileData.custompn.value) {
                this.profileData.custompn.value = value;
                if (this.profileData.pronoun.value === '4') {
                    this.profileData.pronoun.label = value;
                }
                ;
                this.profileData.pronoun.options[4].label = value;
                this.profileData.custompn.hasChanged = true;
                this.checkPFieldChanges();
                this.genProCustOpen.custompn = false;
            }
            else {
                this.genProCustOpen.custompn = false;
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    changeCountry(currentVal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|changeCountry] (' + currentVal + ')...');
            let baseLMOpts = this.csSelectModalOpts;
            baseLMOpts['id'] = 'country-csselectlist-modal';
            const domCVal = this.profileData.country.value;
            let selectedC;
            domCVal !== null ? selectedC = Number(domCVal) : selectedC = null;
            baseLMOpts['componentProps'] = { listType: 'c', selected: selectedC };
            const cListModal = yield this.modalCtrl.create(baseLMOpts);
            jquery__WEBPACK_IMPORTED_MODULE_17__('#country-csselectlist-modal').on('ionModalWillPresent', () => { this.cModalIsOpen = true; });
            jquery__WEBPACK_IMPORTED_MODULE_17__('#country-csselectlist-modal').on('ionModalWillDismiss', () => { this.cModalIsOpen = false; });
            yield cListModal.present();
            const { data, role } = yield cListModal.onDidDismiss();
            if (role === 'new') {
                const newC = data;
                this.profileData.country.value = newC.v.toString().trim();
                this.profileData.country.label = newC.l.toString().trim();
                this.profileData.country.hasChanged = true;
                this.profileData.state.value = null;
                this.profileData.state.label = null;
                this.profileData.state.hasChanged = true;
                this.checkPFieldChanges();
                this.appRef.tick();
            }
            else {
                this.appRef.tick();
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    changeState(currentVal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|changeState] (' + currentVal + ')...');
            const currentCVal = this.profileData.country.value;
            if (currentCVal !== null) {
                let baseLMOpts = this.csSelectModalOpts;
                baseLMOpts['id'] = 'state-csselectlist-modal';
                let domSVal = this.profileData.state.value;
                let selectedS;
                if (domSVal !== null) {
                    selectedS = Number(domSVal);
                }
                else {
                    selectedS = null;
                }
                ;
                baseLMOpts['componentProps'] = { listType: 's', selected: selectedS, country: Number(currentCVal) };
                const sListModal = yield this.modalCtrl.create(baseLMOpts);
                jquery__WEBPACK_IMPORTED_MODULE_17__('#state-csselectlist-modal').on('ionModalWillPresent', () => { this.sModalIsOpen = true; });
                jquery__WEBPACK_IMPORTED_MODULE_17__('#state-csselectlist-modal').on('ionModalWillDismiss', () => { this.sModalIsOpen = false; });
                yield sListModal.present();
                const { data, role } = yield sListModal.onDidDismiss();
                if (role === 'new') {
                    const newS = data;
                    this.profileData.state.value = newS.v.toString().trim();
                    this.profileData.state.label = newS.l.toString().trim();
                    this.profileData.state.hasChanged = true;
                    this.checkPFieldChanges();
                    this.appRef.tick();
                }
                else {
                    this.appRef.tick();
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    forceBlur(fName) {
        this.logger.info('[Profile|forceBlur] (' + fName + ')...');
        const inputEle = jquery__WEBPACK_IMPORTED_MODULE_17__('#' + fName + '-input-id');
        const itemEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.' + fName + '-input-item');
        const remHLLoop = setInterval(() => {
            if (jquery__WEBPACK_IMPORTED_MODULE_17__(inputEle).length && jquery__WEBPACK_IMPORTED_MODULE_17__(itemEle).length) {
                clearInterval(remHLLoop);
                this.logger.info('[Profile|forceBlur] (Cleared!)');
                jquery__WEBPACK_IMPORTED_MODULE_17__(inputEle).blur().focusout();
                if (jquery__WEBPACK_IMPORTED_MODULE_17__(inputEle).css('--show-full-highlight') === '1') {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(inputEle).css('--show-full-highlight') === '0';
                }
                ;
                if (jquery__WEBPACK_IMPORTED_MODULE_17__(inputEle).hasClass('has-focus')) {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(inputEle).removeClass('has-focus');
                }
                ;
                jquery__WEBPACK_IMPORTED_MODULE_17__(itemEle).blur().focusout();
                if (jquery__WEBPACK_IMPORTED_MODULE_17__(itemEle).css('--show-full-highlight') === '1') {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(itemEle).css('--show-full-highlight') === '0';
                }
                ;
                if (jquery__WEBPACK_IMPORTED_MODULE_17__(itemEle).hasClass('has-focus')) {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(itemEle).removeClass('has-focus');
                }
                ;
                this.pFieldFocus = null;
                if (fName === 'gender' || fName === 'pronoun') {
                    this.genProCustOpen[fName] = false;
                }
                ;
                this.appRef.tick();
                setTimeout(() => {
                    console.log('pFieldFocus=' + this.pFieldFocus);
                    console.log('genProCustOpen=');
                    console.log(this.genProCustOpen);
                }, 2000);
            }
        }, 100);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    openDOBDatePicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|openDOBDatePicker] ()....');
            this.pFieldFocus = 'dob';
            this.dobDPOpen = true;
            let oldDate = this.profileData.dob.date;
            try {
                const newDOBRes = yield this.dT.pickerProfileDOB(this.profileData.dob.date);
                this.dobDPOpen = false;
                this.pFieldFocus = null;
                if (!this.dT.isSD(oldDate, newDOBRes)) {
                    this.profileData.dob.date = newDOBRes;
                    this.profileData.dob.value = this.dT.format(newDOBRes, 'MMM d, yyyy');
                    this.profileData.dob.hasChanged = true;
                    this.checkPFieldChanges();
                }
                ;
                this.forceBlur('dob');
            }
            catch (dobErr) {
                this.forceBlur('dob');
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doSelectPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|doSelectPhoto] ()...');
            if (this.gotPerms) {
                const getFRes = yield this.camServ.fileGetPhoto();
                if (getFRes) {
                    this.doReadyULPhoto(getFRes);
                    const newFStat = yield this.fileServ.stat(null, getFRes.path);
                    let fS;
                    if (newFStat.result) {
                        fS = this.niceBytes(newFStat.data.size);
                    }
                    else {
                        fS = { s: 'NK', b: '' };
                    }
                    ;
                    let fDims;
                    getFRes.exif.ImageWidth.toString() === '0' && getFRes.exif.ImageLength.toString() === '0' ? fDims = 'NK' : fDims = getFRes.exif.ImageWidth + 'x' + getFRes.exif.ImageLength;
                    this.profileData.photo.value = { ulPath: getFRes.path, nativeUri: getFRes.webPath, setDate: this.dT.format(new Date(), 'dd/MM/yy HH:mm'), setBy: 'You', dims: fDims, size: fS, type: getFRes.type };
                    this.appRef.tick();
                    this.profileData.photo.hasChanged = true;
                    this.checkPFieldChanges();
                }
                else {
                    this.evServ.showToast('error', 'Failed to Import Photo');
                }
            }
            else {
                this.evServ.showToast('error', 'File/Photo Permission Denied');
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doTakePhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|doChangePhoto] ()...');
            if (this.gotPerms) {
                const takePRes = yield this.camServ.camGetPhoto();
                if (takePRes) {
                    this.doReadyULPhoto(takePRes);
                    const newPStat = yield this.fileServ.stat(null, takePRes.path);
                    let pS;
                    if (newPStat.result) {
                        pS = this.niceBytes(newPStat.data.size);
                    }
                    else {
                        pS = { s: 'NK', b: '' };
                    }
                    ;
                    this.profileData.photo.value = { ulPath: takePRes.path, nativeUri: takePRes.webPath, setDate: this.dT.format(new Date(), 'dd/MM/yy HH:mm'), setBy: 'You', dims: takePRes.exif.ImageWidth + 'x' + takePRes.exif.ImageLength, size: pS, type: takePRes.type };
                    this.appRef.tick();
                    this.profileData.photo.hasChanged = true;
                    this.checkPFieldChanges();
                }
                else {
                    this.evServ.showToast('error', 'Failed to Import Photo');
                }
            }
            else {
                this.evServ.showToast('error', 'Camera/Photo Permission Denied');
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doReadyULPhoto(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|doReadyULPhoto] ()...');
            const base64Data = yield this.readAsBase64(photo);
            const fileName = new Date().getTime() + '.jpeg';
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Filesystem.writeFile({ path: 'Sheriff/assets/' + fileName, data: base64Data, directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Directory.External });
            const ulPPath = 'Sheriff/assets/' + fileName;
            const ulPRead = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Filesystem.readFile({ path: ulPPath, directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Directory.External });
            this.ulPhotoObj = { name: fileName, path: ulPPath, data: 'data:image/jpeg;base64,' + ulPRead.data };
            this.logger.info('[Profile|doReadyULPhoto] Upload Photo Object Ready (this.ulPhotoObj)!');
        });
    }
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|readAsBase64] (photo)...');
            if (this.platform.is('hybrid')) {
                const file = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Filesystem.readFile({ path: photo.path });
                return file.data;
            }
            else {
                const response = yield fetch(photo.webPath);
                const blob = yield response.blob();
                return yield this.convertBlobToBase64(blob);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    checkPFieldChanges() {
        this.logger.info('[Profile|countPFieldChanges] ()...');
        if (this.initDataLoadDone) {
            let fieldChangeCount = 0;
            for (const [key] of Object.entries(this.profileData)) {
                if (this.profileData[key].hasChanged) {
                    fieldChangeCount++;
                }
            }
            ;
            if (fieldChangeCount > 0) {
                this.dChanges.detectChanges();
                this.appRef.tick();
                this.setShouldSave(true);
            }
            else {
                this.setShouldSave(false);
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doDeletePhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|doDeletePhoto] ()...');
            let deleteSuccess;
            if (this.profileData.photo.hasChanged) {
                this.profileData.photo.hasChanged = false;
                this.checkPFieldChanges();
            }
            else {
                const deletePhotoLoader = yield this.loadCtrl.create({ spinner: 'dots', cssClass: 'sheriff-loader-class', message: 'Deleting Photo' });
                deletePhotoLoader.onDidDismiss().then(() => {
                    if (deleteSuccess) {
                        this.profileData.photo.value = { ulPath: '', nativeUri: './../../assets/img/sheriff-profile-no-photo-ico.png', setDate: '-', setBy: '-', dims: '-', size: { s: '-', b: '' }, type: '-' };
                        this.evServ.showToast('success', 'Photo Deleted Successfully');
                    }
                    else {
                        this.evServ.showToast('error', 'Photo Delete Error');
                    }
                    ;
                });
                yield deletePhotoLoader.present();
                setTimeout(() => { deleteSuccess = true; deletePhotoLoader.dismiss(); }, 3000);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    setShouldSave(tf) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|setShouldSave] ()...');
            if (tf) {
                this.shouldSave = true;
                this.detailServ.setShouldSave(true, 'Profile');
                this.evServ.subscribe('menuShieldSave', thenNav => { this.doSaveProfile(thenNav); this.evServ.destroy('menuShieldSave'); });
            }
            else {
                this.shouldSave = false;
                this.detailServ.setShouldSave(false, null);
                const hasEvT = yield this.evServ.check('menuShieldSave');
                if (hasEvT) {
                    this.evServ.destroy('menuShieldSave');
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    promptSaveProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|promptSaveProfile] ()...');
            event.stopPropagation();
            const { value } = yield _capacitor_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog.confirm({ title: 'Save/Discard New Details?', message: '𝗦𝗮𝘃𝗲 updated details to Deputy or 𝗗𝗶𝘀𝗰𝗮𝗿𝗱 changes?', okButtonTitle: '\uD83D\uDCBE Save', cancelButtonTitle: '\u274C Discard' });
            if (value) {
                this.doSaveProfile('/tabs');
            }
            else {
                this.setShouldSave(false);
                this.navCtrl.navigateRoot('/tabs');
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doSaveProfile(thenTask) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[Profile|doSaveProfile] ()...');
            const emailIsV = (emailText) => { const validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; if (emailText.match(validEmailFormat)) {
                return true;
            }
            else {
                return false;
            } };
            const savePLoader = yield this.loadCtrl.create({ spinner: 'dots', cssClass: 'sheriff-loader-class', message: 'Saving Profile' });
            yield savePLoader.present();
            const doDismiss = (d, r) => { savePLoader.dismiss(d, r); };
            //------------------------------------------------
            let newFieldsArr = [];
            for (const [key, value] of Object.entries(this.profileData)) {
                if (key.toString() !== 'photo' && value['hasChanged'] && value['value'] !== null) {
                    const nK = key.toString();
                    const nV = value['value'].toString().trim();
                    newFieldsArr.push({ n: nK, v: nV });
                }
            }
            ;
            if (newFieldsArr.length > 0) {
                this.logger.info('[Profile|doSaveProfile] (IAB Save) [' + newFieldsArr.length + '] NEW Field Values - Updating...');
                const gAR = yield this.sqlServ.getADBItem('up');
                if (gAR.result) {
                    const upO = { u: gAR.data.u, p: gAR.data.p };
                    if (emailIsV(upO.u) && upO.p.length > 3) {
                        const iabTO = setTimeout(() => { this.evServ.publish('iabTO', true); this.logger.info('[Profile|saveProfile] (IAB Timeout) Error > 30s'); }, 30000);
                        this.evServ.subscribe('saveProfileDone', (iabSaveRes) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                            clearTimeout(iabTO);
                            if (iabSaveRes) {
                                const dbSaveRes = yield this.sqlServ.updateProfile(this.profileData);
                                if (dbSaveRes) {
                                    doDismiss('both', 'saved');
                                }
                                else {
                                    doDismiss('iab', 'saved');
                                }
                            }
                            else {
                                doDismiss('iab', 'error');
                            }
                            ;
                            this.evServ.destroy('saveProfileDone');
                        }));
                        this.iabServ.saveProfile(upO, newFieldsArr);
                    }
                    else {
                        this.logger.info('[Profile|doSaveProfile] (Error) U/P Invalid');
                        doDismiss('email', 'error');
                    }
                }
                else {
                    this.logger.info('[Profile|doSaveProfile] (Error) Failed to Retrieve U/P - Skipping IAB Update.');
                    doDismiss('up', 'error');
                }
            }
            else {
                this.logger.info('[Profile|doSaveProfile] (Error) No New Field Values (ex. Photo!) - Skipping Update');
                doDismiss('nonew', 'error');
            }
            //------------------------------------------------
            const doAnyNav = () => { if (thenTask === 'logout') {
                this.doDelayedLogout();
            }
            else if (thenTask === 'exit') {
                this.doDelayedExit();
            }
            else {
                if (thenTask !== null) {
                    this.navCtrl.navigateRoot(thenTask);
                }
            } };
            const { data, role } = yield savePLoader.onDidDismiss();
            if (role === 'saved') {
                for (const [key] of Object.entries(this.profileData)) {
                    this.profileData[key].hasChanged = false;
                }
                ;
                this.checkPFieldChanges();
                this.evServ.showToast('success', 'Profile Saved OK');
                doAnyNav();
                this.logger.info('[Profile|saveProfile] (Success) Profile Saved via IAB & Profile DB Fields Updated.');
            }
            else {
                let errMsg;
                if (data === 'iab') {
                    errMsg = 'Deputy Failed';
                }
                else if (data === 'email') {
                    errMsg = 'Invalid Email';
                }
                else if (data === 'up') {
                    errMsg = 'User/Pass Missing';
                }
                else {
                    errMsg = 'No New Data';
                }
                ;
                this.setShouldSave(false);
                this.evServ.showToast('error', 'Error: ' + errMsg);
                doAnyNav();
                this.logger.info('[Profile|saveProfile] (Error): ' + errMsg);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    onInputFocus(fName) {
        this.logger.info('[Profile|onInputFocus] (' + fName + ')...');
        if (this.initDataLoadDone) {
            this.pFieldFocus = fName;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    onSelectCancel(fName) {
        this.logger.info('[Profile|onSelectCancel] (' + fName + ')...');
        this.pFieldFocus = null;
        if (fName !== 'gender' && fName !== 'pronoun') {
            this.forceBlur(fName);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    onInputBlur(fName, fVal) {
        this.logger.info('[Profile|onInputBlur] (' + fName + ')...');
        this.pFieldFocus = null;
        const exceptF = ['gender', 'pronoun', 'country', 'state'];
        if (!exceptF.includes(fName)) {
            if (fVal !== this.profileData[fName].value) {
                this.profileData[fName].value = fVal;
                this.profileData[fName].hasChanged = true;
                this.checkPFieldChanges();
            }
        }
        ;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doDelayedExit() { this.appServ.exitApp(); }
    ////////////////////////////////////////////////////////////////////////////////////////
    doDelayedLogout() {
        this.detailServ.setAuthLogout(true);
        jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-auth-networkstatus-wrapper').removeClass('adjust-for-auth-toolbar-overlay');
        const myAniCSS = (jqEle, animName) => new Promise((resolve) => { const animClassStr = 'animate__animated animate__' + animName + ' animate__faster'; jquery__WEBPACK_IMPORTED_MODULE_17__(jqEle).addClass(animClassStr); jquery__WEBPACK_IMPORTED_MODULE_17__(jqEle).on('animationend', () => { jquery__WEBPACK_IMPORTED_MODULE_17__(jqEle).removeClass(animClassStr); resolve('done'); }); });
        myAniCSS('#sheriff-custom-splash-wrapper', 'fadeIn').then(() => jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-wrapper').show());
        jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-logo-img').addClass('animate__animated animate__headShake animate__infinite');
        jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-titletexttop-wrapper').removeClass('animate__animated animate__slideOutUp animate__faster');
        jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-zer0ne-wrapper').removeClass('animate__animated animate__slideOutDown animate__faster');
        jquery__WEBPACK_IMPORTED_MODULE_17__('.bar-horizontal').removeClass('finished');
        jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-logo-img').prop('src', '../assets/img/lilheader-s.png');
        jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideOutLeft').addClass('animate__slideInLeft');
        jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideOutRight').addClass('animate__slideInRight');
        jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-wrapper, .sheriff-col.custom-splash-col.middlelogocol').css('background', '#121212');
        this.menuCtrl.close().then(() => { this.navCtrl.navigateRoot('/auth'); });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillLeave() {
        this.logger.info('[Profile|ionViewWillLeave] ()...');
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.removeAllListeners();
        const titleBar = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-leftbar.profile');
        const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title-leftanimbar-inner.profile');
        const titleText = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title.tight-wrap.profile');
        jquery__WEBPACK_IMPORTED_MODULE_17__(titleBar).css('width', '0px').removeClass('dimmed');
        jquery__WEBPACK_IMPORTED_MODULE_17__(animBarEnd).removeClass('showing');
        jquery__WEBPACK_IMPORTED_MODULE_17__(titleText).removeClass('scrolledin');
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    pageEnterAnim() {
        this.logger.info('[Profile|pageEnterAnim] ()...');
        this.evServ.subscribe('doPageEnterAnim', () => {
            const pageKey = 'profile';
            const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-slogo.' + pageKey);
            const preImg = '../../assets/img/slogo-';
            const cProgEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-progcirc.' + pageKey);
            const patchEles = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
            const starEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-star.' + pageKey);
            const pageTitle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-title.' + pageKey);
            const titleBar = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-leftbar.' + pageKey);
            const leftCol = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-page-header-col.left-col.' + pageKey);
            const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title-leftanimbar-inner.' + pageKey);
            const titleText = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title.tight-wrap.' + pageKey);
            const calcBarW = Math.round((jquery__WEBPACK_IMPORTED_MODULE_17__(leftCol).outerWidth() + 6) - (jquery__WEBPACK_IMPORTED_MODULE_17__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_17__(pageTitle).outerWidth())) + 'px';
            this.leftAnimBarW = calcBarW;
            jquery__WEBPACK_IMPORTED_MODULE_17__(patchEles).addClass('hidden');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_17__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_17__(starEle).addClass('hcl-star-startanim');
                this.progCirc.outerStrokeColor = '#FF9800';
                this.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).attr('src', preImg + 'g.png');
                this.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).attr('src', preImg + 'w.png');
                    this.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');
                    jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).addClass('tabtilt');
                    jquery__WEBPACK_IMPORTED_MODULE_17__(titleBar).css('width', calcBarW);
                    setTimeout(() => {
                        jquery__WEBPACK_IMPORTED_MODULE_17__(animBarEnd).addClass('showing');
                        jquery__WEBPACK_IMPORTED_MODULE_17__(titleText).addClass('scrolledin');
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_17__(titleBar).addClass('dimmed'); jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).removeClass('tabtilt'); }, 200);
                    }, 200);
                    setTimeout(() => {
                        this.progCirc.percent = 0;
                        setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_17__(cProgEle).css('display', 'unset'); }, 1000);
                        jquery__WEBPACK_IMPORTED_MODULE_17__(starEle).removeClass('hcl-star-startanim');
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
            jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).on('animationend', () => {
                if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr);
                }
                if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).remove();
                }
                if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).css('display', 'none');
                }
                resolve(true);
            });
            if (aniDel > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).addClass(delStr);
            }
            if (aniDur > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).addClass(durStr);
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).addClass(aniStr);
            }
        });
        doAni();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__.EventsService },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_19__.NGXLogger },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform },
    { type: _services_detail_service__WEBPACK_IMPORTED_MODULE_8__.DetailService },
    { type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_9__.DeputyService },
    { type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_10__.DateTimeService },
    { type: _services_filesystem_service__WEBPACK_IMPORTED_MODULE_11__.FileSystemService },
    { type: _services_camera_service__WEBPACK_IMPORTED_MODULE_12__.CameraService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_16__.StorageService },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__.SQLiteService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ApplicationRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef },
    { type: _services_iab_service__WEBPACK_IMPORTED_MODULE_14__.IABService },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({ selector: 'app-profile', template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    ////////////////////////////////////////////////////////////////////////////////////////
], ProfilePage);



/***/ }),

/***/ 53942:
/*!********************************************!*\
  !*** ./src/app/services/camera.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraService": function() { return /* binding */ CameraService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ 80106);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/app */ 42138);






////////////////////////////////////////////////////////////////
let CameraService = class CameraService {
    ////////////////////////////////////////////////////////////////
    constructor(logger, evServ) {
        this.logger = logger;
        this.evServ = evServ;
        ////////////////////////////////////////////////////////////////
        this.camPerms = { camera: false, photos: false };
        _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.addListener('appRestoredResult', aRRData => {
            this.logger.info('[camServ|appRestoredResult] (APP RESTORED | CAM RESULT)...');
            this.logger.info(aRRData);
        });
    }
    ////////////////////////////////////////////////////////////////
    doCamInit() {
        this.logger.info('[camServ|doCamInit] ()...');
        this.checkCamPerms();
    }
    ////////////////////////////////////////////////////////////////
    checkCamPerms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[camServ|checkCamPerms] ()...');
            const permRes = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.checkPermissions();
            this.logger.info('[camServ|checkCamPerms] (Status): [camera]=' + permRes.camera + ' | [photos]=' + permRes.photos);
            this.camPerms = permRes;
            return Promise.resolve(permRes);
        });
    }
    ////////////////////////////////////////////////////////////////
    reqCamPerms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[camServ|checkCamPerms] ()...');
            const reqPermRes = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.requestPermissions({ permissions: ['camera', 'photos'] });
            this.logger.info('[camServ|reqCamPerms] (Result): ');
            this.logger.info(reqPermRes);
            this.logger.info('[camServ|checkCamPerms] (Status): [camera]=' + reqPermRes.camera + ' | [photos]=' + reqPermRes.photos);
            this.camPerms = reqPermRes;
            if (this.camPerms.camera && this.camPerms.photos) {
                return Promise.resolve(true);
            }
            else {
                return Promise.resolve(false);
            }
        });
    }
    ////////////////////////////////////////////////////////////////
    camGetPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[camServ|camGetPhoto] ()...');
            try {
                const cGPRes = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                    quality: 100,
                    source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                    allowEditing: false,
                    resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                    saveToGallery: true,
                    width: 1280,
                    height: 720,
                    correctOrientation: true
                });
                return Promise.resolve(cGPRes);
            }
            catch (cGPErr) {
                this.logger.info('[camServ|camGetPhoto] (Error): ' + cGPErr);
            }
        });
    }
    ////////////////////////////////////////////////////////////////
    fileGetPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[camServ|fielGetPhoto] ()...');
            try {
                const fGPRes = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                    source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Photos,
                    resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                    webUseInput: true
                });
                return Promise.resolve(fGPRes);
            }
            catch (fGPErr) {
                this.logger.info('[camServ|camGetPhoto] (Error): ' + fGPErr);
            }
        });
    }
};
CameraService.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__.NGXLogger },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_1__.EventsService }
];
CameraService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
    ////////////////////////////////////////////////////////////////
], CameraService);



/***/ }),

/***/ 82059:
/*!*****************************************!*\
  !*** ./src/app/services/iab.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IABService": function() { return /* binding */ IABService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.service */ 80106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _profileData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileData */ 92472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ 62740);







////////////////////////////////////////////////////////////////////////////////////////////////////
let IABService = class IABService {
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(iab, platform, logger, eventServ) {
        this.iab = iab;
        this.platform = platform;
        this.logger = logger;
        this.eventServ = eventServ;
        this.platform.ready().then(() => { window.open = cordova.InAppBrowser.open; });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    getProfile(u, p) {
        this.logger.info('[IABServ|getProfile] (' + u + ',' + p + ')...');
        let pDetails = null;
        let pResult = null;
        let pData;
        let didFail;
        const page1Code = `(()=>{const insertCreds=setInterval(()=>{const loginInput=document.getElementById("login-email");const passInput=document.getElementById("login-password");const loginButton=document.getElementById("btnLoginSubmit");if(loginInput&&passInput&&loginButton){clearInterval(insertCreds);loginInput.value="` + u + `";passInput.value="` + p + `";setTimeout(()=>{loginButton.click()},500)}},500)})();`;
        const profBOpts = { clearcache: 'yes', clearsessioncache: 'yes', location: 'no', hidden: 'yes', hardwareback: 'no', hidenavigationbuttons: 'yes', hideurlbar: 'yes', fullscreen: 'yes', shouldPauseOnSuspend: 'no' };
        const profBURL = 'https://once.deputy.com/my/#profile';
        const profB = this.iab.create(profBURL, '_blank', profBOpts);
        const pM = (data) => { this.logger.info('[Deputy|getProfile|IAB] (' + data.type + '): ' + data.url); };
        //-------------------------------------------------------------------------------------------------
        this.eventServ.subscribe('fetchPDone', tf => {
            if (tf) {
                this.eventServ.publish('getProfileRes', { result: pResult, data: pData });
            }
            else {
                didFail = true;
                profB.close();
                this.eventServ.publish('getProfileRes', { result: false });
            }
            ;
            this.eventServ.destroy('fetchPDone');
        });
        profB.on('loadstop').subscribe((lSD) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            pDetails = lSD.url;
            pM(lSD);
            this.eventServ.publish('getProfileRes', { result: 'prog', data: 20 });
            if (lSD.url.includes('login?redirect_url')) {
                profB.executeScript({ code: page1Code });
            }
            ;
            if (lSD.url.includes('#profile')) {
                profB.executeScript({ code: _profileData__WEBPACK_IMPORTED_MODULE_2__.profileScrapeCode });
            }
            ;
            if (lSD.url.includes('sheriff=')) {
                profB.close();
            }
        }));
        profB.on('loaderror').subscribe(m => { this.logger.info('[iabServ|getProfile] (LOAD ERROR): ' + m.message); });
        profB.on('exit').subscribe(() => {
            if (!didFail) {
                const pDRaw = pDetails.replace('https://once.deputy.com/my/', '');
                const pDArr = decodeURIComponent((pDRaw + '').replace(/\+/g, '%20')).replace('sheriff=', '').split('|');
                const pNArr = [];
                for (let i = 0; i < pDArr.length; i++) {
                    pNArr.push(pDArr[i].toString().trim());
                }
                ;
                pResult = true;
                pData = pNArr;
                this.eventServ.publish('fetchPDone', true);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    saveProfile(upObj, newFieldsArr) {
        this.logger.info('[IABServ|saveProfile] (upObj,newFieldsArr)...');
        let hasGSec = false;
        const gSecArr = ['dname', 'fname', 'lname', 'dob', 'email', 'phone', 'gender', 'pronoun', 'custompn', 'pin'];
        let hasASec = false;
        const aSecArr = ['street', 'city', 'country', 'state', 'pcode'];
        let hasESec = false;
        const eSecArr = ['ename', 'ephone'];
        let ifGEle = '';
        let setGVal = '';
        let checkGVal = '';
        const submitGSec = `$('button[data-dp-analytics="waProfileSave"]').click();`;
        let ifAEle = '';
        let setAVal = '';
        let checkAVal = '';
        const submitASec = `$('button[data-dp-analytics="waProfileSaveAddress"]').click();`;
        let ifEEle = '';
        let setEVal = '';
        let checkEVal = '';
        const submitESec = `$('button[data-dp-analytics="waProfileSaveEmergency"]').click();`;
        const alertGSec = '$("#edit-basic > div.form.js-msg-placeholder > div.alert.alert--floating.alert-success").length';
        const alertASec = '$("#pnlEditProfileMainAddress > div > div.alert").length';
        const alertESec = '$("#pnlEditProfileEmergencyAddress > div > div.alert").length';
        let gFields = [];
        let aFields = [];
        let eFields = [];
        for (let i = 0; i < newFieldsArr.length; i++) {
            if (gSecArr.includes(newFieldsArr[i]['n'])) {
                hasGSec = true;
                gFields.push(newFieldsArr[i]);
            }
            else if (aSecArr.includes(newFieldsArr[i]['n'])) {
                hasASec = true;
                aFields.push(newFieldsArr[i]);
            }
            else if (eSecArr.includes(newFieldsArr[i]['n'])) {
                hasESec = true;
                eFields.push(newFieldsArr[i]);
            }
        }
        ;
        if (hasGSec) {
            for (let i = 0; i < gFields.length; i++) {
                const eN = gFields[i]['n'];
                const eV = gFields[i]['v'].toString().trim();
                const eleI = _profileData__WEBPACK_IMPORTED_MODULE_2__.iabKeys.findIndex(pK => pK === eN);
                const eleS = _profileData__WEBPACK_IMPORTED_MODULE_2__.pSels[eleI];
                if (gFields.length === 1) {
                    ifGEle = '$("' + eleS + '").length';
                }
                else {
                    if (i === gFields.length - 1) {
                        ifGEle = ifGEle + '$("' + eleS + '").length';
                    }
                    else {
                        ifGEle = ifGEle + '$("' + eleS + '").length&&';
                    }
                }
                ;
                if (eN === 'gender') {
                    setGVal = setGVal + '$("#select2-chosen-2").click().focusin().focusout().blur();$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                }
                else if (eN === 'pronoun') {
                    setGVal = setGVal + '$("#select2-chosen-4").click().focusin().focusout().blur();$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                }
                else {
                    setGVal = setGVal + '$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                }
                ;
                if (gFields.length === 1) {
                    checkGVal = '$("' + eleS + '").attr("value")==="' + eV + '"';
                }
                else {
                    if (i === gFields.length - 1) {
                        checkGVal = checkGVal + '$("' + eleS + '").attr("value")==="' + eV + '"';
                    }
                    else {
                        checkGVal = checkGVal + '$("' + eleS + '").attr("value")==="' + eV + '"&&';
                    }
                }
                ;
            }
            ;
        }
        ;
        if (hasASec) {
            for (let i = 0; i < aFields.length; i++) {
                const eN = aFields[i]['n'];
                const eV = aFields[i]['v'].toString().trim();
                const eleI = _profileData__WEBPACK_IMPORTED_MODULE_2__.iabKeys.findIndex(pK => pK === eN);
                const eleS = _profileData__WEBPACK_IMPORTED_MODULE_2__.pSels[eleI];
                if (aFields.length === 1) {
                    ifAEle = '$("' + eleS + '").length';
                }
                else {
                    if (i === aFields.length - 1) {
                        ifAEle = ifAEle + '$("' + eleS + '").length';
                    }
                    else {
                        ifAEle = ifAEle + '$("' + eleS + '").length&&';
                    }
                }
                ;
                setAVal = setAVal + '$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                if (aFields.length === 1) {
                    checkAVal = '$("' + eleS + '").attr("value")==="' + eV + '"';
                }
                else {
                    if (i === aFields.length - 1) {
                        checkAVal = checkAVal + '$("' + eleS + '").attr("value")==="' + eV + '"';
                    }
                    else {
                        checkAVal = checkAVal + '$("' + eleS + '").attr("value")==="' + eV + '"&&';
                    }
                }
                ;
            }
            ;
        }
        ;
        if (hasESec) {
            for (let i = 0; i < eFields.length; i++) {
                const eN = eFields[i]['n'];
                const eV = eFields[i]['v'].toString().trim();
                const eleI = _profileData__WEBPACK_IMPORTED_MODULE_2__.iabKeys.findIndex(pK => pK === eN);
                const eleS = _profileData__WEBPACK_IMPORTED_MODULE_2__.pSels[eleI];
                if (eFields.length === 1) {
                    ifEEle = '$("' + eleS + '").length';
                }
                else {
                    if (i === eFields.length - 1) {
                        ifEEle = ifEEle + '$("' + eleS + '").length';
                    }
                    else {
                        ifEEle = ifEEle + '$("' + eleS + '").length&&';
                    }
                }
                ;
                setEVal = setEVal + '$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                if (eFields.length === 1) {
                    checkEVal = '$("' + eleS + '").attr("value")==="' + eV + '"';
                }
                else {
                    if (i === eFields.length - 1) {
                        checkEVal = checkEVal + '$("' + eleS + '").attr("value")==="' + eV + '"';
                    }
                    else {
                        checkEVal = checkEVal + '$("' + eleS + '").attr("value")==="' + eV + '"&&';
                    }
                }
                ;
            }
            ;
        }
        ;
        //-------------------------------------------------------------------------------------------------
        let spDetails = null;
        let spResult = null;
        const page1Code = `(()=>{const insertCreds=setInterval(()=>{const loginInput=document.getElementById("login-email");const passInput=document.getElementById("login-password");const loginButton=document.getElementById("btnLoginSubmit");if(loginInput&&passInput&&loginButton){clearInterval(insertCreds);loginInput.value="` + upObj.u + `";passInput.value="` + upObj.p + `";setTimeout(()=>{loginButton.click()},500)}},500)})();`;
        const profBOpts = { clearcache: 'no', clearsessioncache: 'no', location: 'no', hidden: 'yes', hardwareback: 'no', hidenavigationbuttons: 'yes', hideurlbar: 'yes', fullscreen: 'yes', shouldPauseOnSuspend: 'no' };
        const profBURL = 'https://once.deputy.com/my/#profile/edit-basic';
        const profB = this.iab.create(profBURL, '_blank', profBOpts);
        const pM = (data) => { this.logger.info('[IABServ|saveProfile] (' + data.type + '): ' + data.url); };
        //-------------------------------------------------------------------------------------------------
        this.eventServ.subscribe('iabTO', tf => { if (tf) {
            spResult = false;
            profB.close();
        } ; this.eventServ.destroy('iabTO'); });
        let G1 = 0;
        let A1 = 0;
        let E1 = 0;
        let DONE1 = 0;
        profB.on('loadstop').subscribe((lSD) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            spDetails = lSD.url;
            pM(lSD);
            if (lSD.url.includes('login?redirect_url')) {
                profB.executeScript({ code: page1Code });
            }
            ;
            if (lSD.url.replace('https://once.deputy.com/my/#profile/', '') === 'edit-basic') {
                G1++;
                if (G1 === 1) {
                    this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "GENERAL"...');
                    let skipG;
                    if (!hasGSec) {
                        skipG = `document.querySelector("#btnMenuItemMainAddress > a").click()`;
                    }
                    else {
                        skipG = `
          (()=>{const IfGLoop=setInterval(()=>{if(` + ifGEle + `){clearInterval(IfGLoop);setTimeout(()=>{` + setGVal + `const SetGLoop=setInterval(()=>{if(` + checkGVal + `){clearInterval(SetGLoop);setTimeout(()=>{` + submitGSec + `const SubGLoop=setInterval(()=>{if(` + alertGSec + `){clearInterval(SubGLoop);setTimeout(()=>{document.querySelector("#btnMenuItemMainAddress > a").click()},1000)}},250)},1000)}},250)},1000)}},250)})();`;
                    }
                    ;
                    profB.executeScript({ code: `var sheriffG1=0;setTimeout(()=>{sheriffG1++;var sheriffGURL=window.location.href.toString().replace("https://once.deputy.com/my/#profile/","");if(sheriffGURL==="edit-basic"&&sheriffG1===1){` + skipG + `}},1000)` });
                }
                else {
                    this.logger.info('[Profile|saveProfile] (No Doubles!) General.');
                }
            }
            ;
            if (lSD.url.replace('https://once.deputy.com/my/#profile/', '') === 'edit-main-address') {
                A1++;
                if (A1 === 1) {
                    this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "ADDRESS"...');
                    let skipA;
                    if (!hasASec) {
                        skipA = 'document.querySelector("#btnMenuItemEmergencyAddress > a").click()';
                    }
                    else {
                        skipA = `
          (()=>{const IfALoop=setInterval(()=>{if(` + ifAEle + `){clearInterval(IfALoop);setTimeout(()=>{` + setAVal + `const SetALoop=setInterval(()=>{if(` + checkAVal + `){clearInterval(SetALoop);setTimeout(()=>{` + submitASec + `const SubALoop=setInterval(()=>{if(` + alertASec + `){clearInterval(SubALoop);setTimeout(()=>{document.querySelector("#btnMenuItemEmergencyAddress > a").click()},1000)}},250)},1000)}},250)},1000)}},250)})();`;
                    }
                    ;
                    profB.executeScript({ code: `let sheriffA1=0;setTimeout(()=>{sheriffA1++;var sheriffAURL=window.location.href.toString().replace("https://once.deputy.com/my/#profile/","");if(sheriffAURL==="edit-main-address"&&sheriffA1===1){` + skipA + `}},1000)` });
                }
                else {
                    this.logger.info('[Profile|saveProfile] (No Doubles!) Address.');
                }
            }
            if (lSD.url.replace('https://once.deputy.com/my/#profile/', '') === 'edit-emergency-address') {
                E1++;
                if (E1 === 1) {
                    this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "EMERGENCY"...');
                    let skipE;
                    if (!hasESec) {
                        skipE = 'window.location.href="https://google.com"';
                    }
                    else {
                        skipE = `
          (()=>{const IfELoop=setInterval(()=>{if(` + ifEEle + `){clearInterval(IfELoop);setTimeout(()=>{` + setEVal + `const SetELoop=setInterval(()=>{if(` + checkEVal + `){clearInterval(SetELoop);setTimeout(()=>{` + submitESec + `const SubELoop=setInterval(()=>{if(` + alertESec + `){clearInterval(SubELoop);setTimeout(()=>{window.location.href="https://google.com"},1000)}},250)},1000)}},250)},1000)}},250)})();`;
                    }
                    ;
                    profB.executeScript({ code: `let sheriffE1=0;setTimeout(()=>{sheriffE1++;var sheriffEURL=window.location.href.toString().replace("https://once.deputy.com/my/#profile/","");if(sheriffEURL==="edit-emergency-address"&&sheriffE1===1){` + skipE + `}},1000)` });
                }
                else {
                    this.logger.info('[Profile|saveProfile] (No Doubles!) Emergency.');
                }
            }
            if (lSD.url.includes('google.com')) {
                DONE1++;
                if (DONE1 === 1) {
                    this.logger.info('[Profile|saveProfile] (Reached GOOGLE.COM >>> CLOSING!)...');
                    spResult = true;
                    profB.close();
                }
                else {
                    this.logger.info('[Profile|saveProfile] (No Doubles!) DONE GOOGLE.');
                }
            }
            ;
        }));
        profB.on('loaderror').subscribe(m => { this.logger.info('[iabServ|saveProfile] (LOAD ERROR): ' + m.message); });
        profB.on('exit').subscribe(() => { this.eventServ.publish('iabTO', false); this.eventServ.publish('saveProfileDone', spResult); });
    }
};
IABService.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__.NGXLogger },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_0__.EventsService }
];
IABService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({ providedIn: 'root' })
    ////////////////////////////////////////////////////////////////////////////////////////////////////
], IABService);



/***/ }),

/***/ 70231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 52907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col profile\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar profile\">\n                                <div class=\"sheriff-title-leftanimbar-inner profile\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title profile\">\n                                    <div class=\"sheriff-title tight-wrap profile\">Profile</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring profile\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle profile hcl-progcirc profile\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch profile\">\n                                        <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch profile\"></div>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star profile\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo profile\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div (click)=\"doSaveProfile(null)\" class=\"sheriff-page-savebtn-outter-wrapper profile ion-activatable ripple-parent\">\n                                  <div class=\"shouldsave-indic-wrapper\">\n                                      <ion-icon *ngIf=\"shouldSave\" class=\"shouldsave-indic-ico animate__animated animate__fadeIn\" name=\"ellipse\"></ion-icon>\n                                  </div>\n                                  <div [class.halfbrightness]=\"!shouldSave\" class=\"sheriff-addtsheet-header-btn-wrapper save-btn\">\n                                      <ion-icon class=\"sheriff-addtsheet-header-ico save-btn-ico\" name=\"save\"></ion-icon>\n                                  </div>\n                                  <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                                <div class=\"sheriff-page-backbtn-wrapper profile\">\n                                    <ion-back-button [disabled]=\"shouldSave\" icon=\"chevron-back-outline\" class=\"sheriff-backbtn profile\" defaultHref=\"/tabs\"></ion-back-button>\n                                    <div *ngIf=\"shouldSave\" (click)=\"promptSaveProfile()\" class=\"sheriff-header-shouldsave-shield backshield\"></div>\n                                </div>\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button profile\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngStyle]=\"{'top':kbAdjust}\" class=\"sheriff-content tab-content profile\">\n    <!-- PAGE REFRESHER -->\n    <ion-refresher class=\"sheriff-refresher page profile\" slot=\"fixed\" (ionRefresh)=\"doProfileRefresh($event)\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <!-- PAGE-CONTENT -->\n    <!-- CONTENT HEADING -->\n    <div class=\"sheriff-tabcontent-mainheading-wrapper profile\">\n        <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid profile\">\n            <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 profile\">\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 profile\">\n                </ion-col>\n                <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 profile\">\n                  <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-profile.png\">\n                </ion-col>\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 profile\">\n                  <div class=\"psection-complete-wrapper all\">\n                    <div class=\"pcomplete-all-title-div\">complete</div>\n                    <div class=\"pcomplete-all values-div\">\n                      <span class=\"pseccomp-val all\">{{pComplete.all.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl all\">{{pComplete.all.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.all.v===pComplete.all.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc all\">{{pComplete.all.p}}%</span>\n                    </div>\n                  </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <!-- CONTENT WRAPPER -->\n    <div class=\"sheriff-page-content-outter-wrapper profile-page\">\n        <ion-grid class=\"sheriff-grid profile-info-form main-grid\">\n          <ion-row class=\"sheriff-row profile-info-form main-row photo-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col photo-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text photo\">\n                PHOTO\n                <div class=\"psection-complete-wrapper photo\">\n                  <span class=\"pseccomp-val photo\">{{pComplete.photo.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl photo\">{{pComplete.photo.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.photo.v===pComplete.photo.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc photo\">{{pComplete.photo.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row photo-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid photo-grid\">\n                <ion-row class=\"sheriff-row profile-form-row photo-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col photo-col ico-col\">\n                    <ion-icon name=\"image\" [ngStyle]=\"{'color':pFieldFocus==='photo'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico photo-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"sheriff-col profile-form-col photo-col input-col image\">\n                    <div [ngStyle]=\"{'border-color':profileData.photo.hasChanged?'var(--ion-color-success-78)':'#212121'}\" class=\"profile-photo-outter-wrapper\">\n                      <img src={{profileData.photo.value.nativeUri}} class=\"profile-photo-img-avatar\">\n                    </div>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col photo-col input-col info\">\n                    <ion-grid class=\"sheriff-grid profile-photo-info-grid\">\n                      <ion-row class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"cloud-upload-outline\" class=\"pphoto-info-ico setdate\"></ion-icon>\n                          <span class=\"pphoto-info-val setdate\">{{profileData.photo.value.setDate}}</span>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"person-outline\" class=\"pphoto-info-ico setby\"></ion-icon>\n                          <img *ngIf=\"profileData.photo.value.setBy===null\" src=\"../../assets/img/sheriff-deputy-logoname-white-small.png\" class=\"profile-photo-setby-small\">\n                          <span *ngIf=\"profileData.photo.value.setBy!==null\" class=\"pphoto-info-val setby\">{{profileData.photo.value.setBy}}</span>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row *ngIf=\"profileData.photo.value.dims!=='NK'\" class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"expand-outline\" class=\"pphoto-info-ico dims\"></ion-icon>\n                          <span class=\"pphoto-info-val dims\">{{profileData.photo.value.dims}}</span><span *ngIf=\"profileData.photo.value.dims!=='-'\" class=\"photo-size-px-suffix\">px</span>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"document-outline\" class=\"pphoto-info-ico size\"></ion-icon>\n                          <span class=\"pphoto-info-val size\">{{profileData.photo.value.size.s}}</span><span class=\"pphoto-info-val size suffix\">{{profileData.photo.value.size.b}}</span>\n                          <span *ngIf=\"profileData.photo.value.type!=='-'\" class=\"pphoto-info-val type\">{{profileData.photo.value.type}}</span>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col photo-col button-col\">\n                    <ion-grid class=\"sheriff-grid profile-photo-btn-grid\">\n                      <ion-row class=\"sheriff-row profile-photo-btn-row change-row\">\n                        <ion-col class=\"sheriff-col profile-photo-btn-col change-col camera-col\">\n                          <ion-button (click)=\"doTakePhoto()\" class=\"sheriff-btn profile-photo-camera-btn\">\n                            <ion-icon name=\"add\" class=\"sheriff-btn-ico profile-photo-btn-ico add\"></ion-icon>\n                            <ion-icon name=\"camera\" class=\"sheriff-btn-ico profile-photo-btn-ico camera\"></ion-icon>\n                          </ion-button>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col profile-photo-btn-col change-col file-col\">\n                          <ion-button (click)=\"doSelectPhoto()\" class=\"sheriff-btn profile-photo-file-btn\">\n                            <ion-icon name=\"add\" class=\"sheriff-btn-ico profile-photo-btn-ico add\"></ion-icon>\n                            <ion-icon name=\"folder\" class=\"sheriff-btn-ico profile-photo-btn-ico select\"></ion-icon>\n                          </ion-button>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"sheriff-row profile-photo-btn-row delete-row\">\n                        <ion-col class=\"sheriff-col profile-photo-btn-col change-col delete-col\">\n                          <ion-button [disabled]=\"\" (click)=\"doDeletePhoto()\" class=\"sheriff-btn profile-photo-delete-btn\">\n                            <ion-icon name=\"trash\" class=\"sheriff-btn-ico profile-photo-btn-ico delete\"></ion-icon>\n                            <div class=\"sheriff-btn-txt take-photo-txt\">remove photo</div>\n                          </ion-button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n          <!-- GENERAL ----------------------------------------------------------------------------------------->\n          <ion-row class=\"sheriff-row profile-info-form main-row general-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col general-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text general\">\n                GENERAL\n                <div class=\"psection-complete-wrapper general\">\n                  <span class=\"pseccomp-val general\">{{pComplete.general.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl general\">{{pComplete.general.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.general.v===pComplete.general.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc general\">{{pComplete.general.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row general-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid general-grid\">\n                <ion-row class=\"sheriff-row profile-form-row general-row names-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col names-col ico-col\">\n                    <ion-icon name=\"person\" [ngStyle]=\"{'color':pFieldFocus==='fname'||pFieldFocus==='lname'||pFieldFocus==='dname'||pFieldFocus==='dob'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico names-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper first-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item first-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.fname.hasChanged}\" class=\"sheriff-profile-input-item-label first-name\">First Name</ion-label>\n                        <ion-input id=\"fname-input-id\" #pDGfname [value]=\"profileData.fname.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('fname')\" (ionBlur)=\"onInputBlur('fname',pDGfname.value)\" class=\"sheriff-profile-input first-name\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper last-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item last-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.lname.hasChanged}\" class=\"sheriff-profile-input-item-label last-name\">Last Name</ion-label>\n                        <ion-input id=\"lname-input-id\" #pDGlname [value]=\"profileData.lname.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('lname')\" (ionBlur)=\"onInputBlur('lname',pDGlname.value)\" class=\"sheriff-profile-input last-name\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"sheriff-col\"></ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper display-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item display-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.dname.hasChanged}\" class=\"sheriff-profile-input-item-label display-name\">Display Name</ion-label>\n                        <ion-input id=\"dname-input-id\" #pDGdname [value]=\"profileData.dname.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('dname')\" (ionBlur)=\"onInputBlur('dname',pDGdname.value)\" class=\"sheriff-profile-input display-name\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col (click)=\"openDOBDatePicker()\" size=\"5\" class=\"sheriff-col profile-form-col general-col dob-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item dob-input-item\">\n                      <ion-label position=\"stacked\" class=\"sheriff-profile-input-item-label dob\"><span [ngClass]=\"{'pfield-changed':profileData.dob.hasChanged}\" [ngStyle]=\"{'color':dobDPOpen?'var(--ion-color-primary)':'#848484'}\" class=\"profile-label-dob\">DOB</span><ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked dob\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked dob\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner dob\" name=\"dots\"></ion-spinner></ion-label>\n                      <ion-input id=\"dob-input-id\" [ngStyle]=\"{'--show-full-highlight':dobDPOpen===true?'1':'0'}\" [readonly]=\"true\" [value]=\"profileData.dob.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" class=\"sheriff-profile-input dob\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row general-row email-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col email-col ico-col\">\n                    <ion-icon name=\"mail\" [ngStyle]=\"{'color':pFieldFocus==='email'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico email-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col general-col email-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item email-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.email.hasChanged}\" class=\"sheriff-profile-input-item-label email\">Email</ion-label>\n                      <ion-input id=\"email-input-id\" #pDGemail [value]=\"profileData.email.value\" [inputmode]=\"'email'\" [pattern]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('email')\" (ionBlur)=\"onInputBlur('email',pDGemail.value)\" class=\"sheriff-profile-input email\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row general-row phone-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col phone-col ico-col\">\n                    <ion-icon name=\"phone-portrait\" [ngStyle]=\"{'color':pFieldFocus==='phone'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico phone-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col general-col phone-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item phone-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.phone.hasChanged}\" class=\"sheriff-profile-input-item-label phone\">Phone</ion-label>\n                      <ion-input id=\"phone-input-id\" #pDGphone [value]=\"profileData.phone.value\" [inputmode]=\"'tel'\" [pattern]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('phone')\" (ionBlur)=\"onInputBlur('phone',pDGphone.value)\" class=\"sheriff-profile-input phone\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row general-row gender-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col gender-col ico-col\">\n                    <ion-icon name=\"transgender\" [ngStyle]=\"{'color':genProCustOpen.gender||genProCustOpen.pronoun||genProCustOpen.custompn?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico gender-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col general-col gender-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item gender-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.gender.hasChanged}\" class=\"sheriff-profile-input-item-label gender\">Gender<ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked gender\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked gender\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner gender\" name=\"dots\"></ion-spinner></ion-label>\n                      <ion-select id=\"gender-input-id\" #pDGgender [value]=\"profileData.gender.value\" [interfaceOptions]=\"genderPopOpts\" [mode]=\"'md'\" [interface]=\"'popover'\" [selectedText]=\"profileData.gender.label\" (ionChange)=\"changeGender(pDGgender.value)\" (ionFocus)=\"onInputFocus('gender')\" (ionCancel)=\"onSelectCancel('gender')\" (ionBlur)=\"onInputBlur('gender',pDGgender.value)\" [placeholder]=\"'Select'\" class=\"sheriff-profile-input gender\">\n                        <ion-select-option class=\"sheriff-profile-genderopt-class\" *ngFor=\"let genOpt of profileData.gender.options\" [value]=\"genOpt.value\" [ngClass]=\"{'sheriff-profile-genopt-selected-class':pDGgender.value===genOpt.value}\">{{genOpt.label}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col *ngIf=\"profileData.pronoun.value==='4'\" class=\"profile-custom-pronoun-edit-btn-col\">\n                    <ion-button (click)=\"editCustomPronoun(profileData.pronoun.options[4].label)\" class=\"sheriff-btn profile-custom-pronoun-btn\">\n                      <ion-icon class=\"sheriff-btn-ico profile-custom-pronoun-btn-ico\" name=\"add\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col general-col pronoun-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item pronoun-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.pronoun.hasChanged}\" class=\"sheriff-profile-input-item-label pronoun\">Pronouns<ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked pronoun\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked pronoun\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner pronoun\" name=\"dots\"></ion-spinner></ion-label>\n                      <ion-select id=\"pronoun-input-id\" #pDGpronoun [value]=\"profileData.pronoun.value\" [interfaceOptions]=\"pronounPopOpts\" [mode]=\"'md'\" [interface]=\"'popover'\" [selectedText]=\"profileData.pronoun.label\" (ionChange)=\"changePronoun(pDGpronoun.value)\" (ionFocus)=\"onInputFocus('pronoun')\" (ionCancel)=\"onSelectCancel('pronoun')\" (ionBlur)=\"onInputBlur('pronoun',pDGpronoun.value)\" [placeholder]=\"'Select'\" class=\"sheriff-profile-input pronoun\">\n                        <ion-select-option class=\"sheriff-profile-pronounopt-class\" *ngFor=\"let pnOpt of profileData.pronoun.options\" [value]=\"pnOpt.value\" [ngClass]=\"{'sheriff-profile-pronounopt-selected-class':pDGpronoun.value===pnOpt.value}\">{{pnOpt.label}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row kiosk-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col kiosk-col ico-col\">\n                    <ion-icon name=\"keypad\" [ngStyle]=\"{'color':pFieldFocus==='pin'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico pin-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper display-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item display-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.pin.hasChanged}\" class=\"sheriff-profile-input-item-label pin\">PIN<ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked pin\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked pin\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner pin\" name=\"dots\"></ion-spinner></ion-label>\n                        <ion-input id=\"pin-input-id\" #pDGpin [value]=\"profileData.pin.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" [min]=\"'4'\" [max]=\"'4'\" (ionFocus)=\"onInputFocus('pin')\" (ionBlur)=\"onInputBlur('pin',pDGpin.value)\" class=\"sheriff-profile-input pin\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n          <!-- ADDRESS ----------------------------------------------------------------------------------------->\n          <ion-row class=\"sheriff-row profile-info-form main-row address-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col address-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text address\">\n                ADDRESS\n                <div class=\"psection-complete-wrapper address\">\n                  <span class=\"pseccomp-val address\">{{pComplete.address.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl address\">{{pComplete.address.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.address.v===pComplete.address.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc address\">{{pComplete.address.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row address-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid address-grid\">\n                <ion-row class=\"sheriff-row profile-form-row address-row1\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col address-col name-col ico-col\">\n                    <ion-icon name=\"location\" [ngStyle]=\"{'color':pFieldFocus==='street'||pFieldFocus==='city'||pFieldFocus==='state'||sModalIsOpen||pFieldFocus==='pcode'||pFieldFocus==='country'||cModalIsOpen?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico address-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col address-col street-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item address-input-item address-street\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.street.hasChanged}\" class=\"sheriff-profile-input-item-label address-street\">Street</ion-label>\n                      <ion-input id=\"street-input-id\" #pDAstreet [value]=\"profileData.street.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('street')\" (ionBlur)=\"onInputBlur('street',pDAstreet.value)\" class=\"sheriff-profile-input address-street\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row address-row2\">\n                  <ion-col size=\"2\" class=\"sheriff-col\"></ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col city-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item address-input-item address-city\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.city.hasChanged}\" class=\"sheriff-profile-input-item-label address-city\">City</ion-label>\n                      <ion-input id=\"city-input-id\" #pDAcity [value]=\"profileData.city.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('city')\" (ionBlur)=\"onInputBlur('city',pDAcity.value)\" class=\"sheriff-profile-input address-city\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col pcode-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item address-input-item address-pcode\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.pcode.hasChanged}\" class=\"sheriff-profile-input-item-label address-pcode\">Postcode</ion-label>\n                      <ion-input id=\"pcode-input-id\" #pDApcode [value]=\"profileData.pcode.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('pcode')\" (ionBlur)=\"onInputBlur('pcode',pDApcode.value)\" class=\"sheriff-profile-input address-pcode\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row address-row3\">\n                  <ion-col size=\"2\" class=\"sheriff-col\"></ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col state-col input-col\">\n                    <div (click)=\"changeState(profileData.state.value)\" class=\"ion-activatable ripple-parent\">\n                      <ion-item [ngClass]=\"{'item-has-focus':sModalIsOpen}\" class=\"sheriff-profile-input-item address-input-item address-state\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.state.hasChanged}\" class=\"sheriff-profile-input-item-label address-state\">State</ion-label>\n                        <ion-select [disabled]=\"true\" class=\"sheriff-profile-input address-state-select\" [mode]=\"'md'\" [placeholder]=\"'Select'\" [value]=\"profileData.state.value\" [selectedText]=\"profileData.state.label\"></ion-select>\n                      </ion-item>\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col country-col input-col\">\n                    <div (click)=\"changeCountry(profileData.country.value)\" class=\"ion-activatable ripple-parent\">\n                      <ion-item [ngClass]=\"{'item-has-focus':cModalIsOpen}\" class=\"sheriff-profile-input-item address-input-item address-country\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.country.hasChanged}\" class=\"sheriff-profile-input-item-label address-country\">Country</ion-label>\n                        <ion-select [disabled]=\"true\" class=\"sheriff-profile-input address-country-select\" [mode]=\"'md'\" [placeholder]=\"'Select'\" [value]=\"profileData.country.value\" [selectedText]=\"profileData.country.label\"></ion-select>\n                      </ion-item>\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n          <!-- EMERGENCY ----------------------------------------------------------------------------------------->\n          <ion-row class=\"sheriff-row profile-info-form main-row emergency-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col emergency-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text emergency\">\n                EMERGENCY\n                <div class=\"psection-complete-wrapper emergency\">\n                  <span class=\"pseccomp-val emergency\">{{pComplete.emergency.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl emergency\">{{pComplete.emergency.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.emergency.v===pComplete.emergency.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc emergency\">{{pComplete.emergency.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row emergency-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid emergency-grid\"> \n                <ion-row class=\"sheriff-row profile-form-row emergency-row name-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col emergency-col name-col ico-col\">\n                    <ion-icon name=\"medkit\" [ngStyle]=\"{'color':pFieldFocus==='ename'||pFieldFocus==='ephone'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico emergency-ico name-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col emergency-col name-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item name-input-item display-name\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.ename.hasChanged}\" class=\"sheriff-profile-input-item-label emergency-name\">Name</ion-label>\n                      <ion-input id=\"ename-input-id\" #pDEname [value]=\"profileData.ename.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('ename')\" (ionBlur)=\"onInputBlur('ename',pDEname.value)\" class=\"sheriff-profile-input emergency-name\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col emergency-col phone-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item emergency-phone-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.ephone.hasChanged}\" class=\"sheriff-profile-input-item-label emergency-phone\">Phone</ion-label>\n                      <ion-input id=\"ephone-input-id\" #pDEphone [value]=\"profileData.ephone.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('ephone')\" (ionBlur)=\"onInputBlur('ephone',pDEphone.value)\" class=\"sheriff-profile-input emergency-phone\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <!-- END OF PAGE-CONTENT -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts-es2015.js.map