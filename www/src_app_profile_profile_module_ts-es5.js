(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_profile_profile_module_ts"], {
    /***/
    64021:
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* binding */
            _CameraSource
          );
        },

        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* binding */
            _CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* binding */
            _CameraResultType
          );
        }
        /* harmony export */

      });

      var _CameraSource;

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
      })(_CameraSource || (_CameraSource = {}));

      var _CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(_CameraDirection || (_CameraDirection = {}));

      var _CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(_CameraResultType || (_CameraResultType = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    37673:
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType
          );
        },

        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource
          );
        },

        /* harmony export */
        "Camera": function Camera() {
          return (
            /* binding */
            _Camera
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      64021);

      var _Camera = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          14028)).then(function (m) {
            return new m.CameraWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    84523:
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageModule": function ProfilePageModule() {
          return (
            /* binding */
            _ProfilePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      29184);
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.page */
      72919);

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
      }];

      var _ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      _ProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage]
      })], _ProfilePageModule);
      /***/
    },

    /***/
    72919:
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePage": function ProfilePage() {
          return (
            /* binding */
            _ProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile.page.html */
      52907);
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page.scss */
      70231);
      /* harmony import */


      var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/app.service */
      66475);
      /* harmony import */


      var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/dialog */
      63540);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _modals_profilecsselect_profilecsselect_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../modals/profilecsselect/profilecsselect.page */
      67536);
      /* harmony import */


      var _services_profileData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/profileData */
      92472);
      /* harmony import */


      var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/sqlite.service */
      90636);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../services/events.service */
      80106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var _services_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/detail.service */
      52153);
      /* harmony import */


      var _services_deputy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/deputy.service */
      22092);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/datetime.service */
      12826);
      /* harmony import */


      var _services_filesystem_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/filesystem.service */
      22904);
      /* harmony import */


      var _services_camera_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/camera.service */
      53942);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @capacitor/filesystem */
      61977);
      /* harmony import */


      var _services_iab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/iab.service */
      82059);
      /* harmony import */


      var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @capacitor/keyboard */
      87730);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../services/storage.service */
      71188);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__); ////////////////////////////////////////////////////////////////////////////////////////


      var _ProfilePage = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////
        function ProfilePage(evServ, logger, platform, detailServ, deputy, dT, fileServ, camServ, navCtrl, loadCtrl, menuCtrl, modalCtrl, storeServ, sqlServ, appRef, dChanges, iabServ, appServ) {
          _classCallCheck(this, ProfilePage);

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
          this.appServ = appServ; ////////////////////////////////////////////////////////////////////////////////////////

          this.progCirc = {
            responsive: true,
            showTitle: false,
            showSubtitle: false,
            showUnits: false,
            percent: 0,
            radius: 56,
            outerStrokeWidth: 4,
            showInnerStroke: false,
            outerStrokeColor: '#FF9800',
            animation: true,
            backgroundPadding: 2,
            animationDuration: 400
          };
          this.kbO = false;
          this.kbH = null;
          this.scH = null;
          this.scB = null;
          this.kbAdjust = 'unset';
          this.pplArr = [];
          this.gotPerms = false; ////////////////////////////////////////////////////////////////////////////////

          this.ulPhotoObj = null;
          this.profileData = {
            photo: {
              value: {
                ulPath: '',
                nativeUri: './../../assets/img/sheriff-profile-no-photo-ico.png',
                setDate: '-',
                setBy: '-',
                dims: '-',
                size: {
                  s: null,
                  b: ''
                },
                type: '-'
              },
              hasChanged: false,
              isLock: false
            },
            dname: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            fname: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            lname: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            email: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            phone: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            dob: {
              value: null,
              date: null,
              hasChanged: false,
              isLock: true
            },
            pin: {
              value: null,
              hasChanged: false,
              isLock: true
            },
            gender: {
              value: null,
              label: null,
              options: [{
                value: '0',
                label: 'Not specified'
              }, {
                value: '1',
                label: 'Male'
              }, {
                value: '2',
                label: 'Female'
              }, {
                value: '3',
                label: 'Non-binary'
              }],
              hasChanged: false,
              isLock: true
            },
            pronoun: {
              value: null,
              label: null,
              options: [{
                value: '0',
                label: 'Not specified'
              }, {
                value: '1',
                label: 'He/Him'
              }, {
                value: '2',
                label: 'She/Her'
              }, {
                value: '3',
                label: 'They/Them'
              }, {
                value: '4',
                label: 'Custom'
              }],
              hasChanged: false,
              isLock: true
            },
            custompn: {
              value: null,
              hasChanged: false,
              isLock: true
            },
            street: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            city: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            country: {
              value: null,
              label: null,
              hasChanged: false,
              isLock: false
            },
            state: {
              value: null,
              label: null,
              hasChanged: false,
              isLock: false
            },
            pcode: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            ename: {
              value: null,
              hasChanged: false,
              isLock: false
            },
            ephone: {
              value: null,
              hasChanged: false,
              isLock: false
            } //contactaddress

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
            all: {
              v: 0,
              t: 17,
              p: 0
            },
            photo: {
              v: 0,
              t: 1,
              p: 0
            },
            general: {
              v: 0,
              t: 9,
              p: 0
            },
            address: {
              v: 0,
              t: 5,
              p: 0
            },
            emergency: {
              v: 0,
              t: 2,
              p: 0
            }
          };
          this.hasDBProfile = false;
          this.initDataLoadDone = false;
          this.pIsLocked = true;
          this.tryingUnlock = false;
          this.pFieldFocus = null;
          this.dobDPOpen = false;
          this.genderPopOpts = {
            id: 'genderpop',
            backdropDismiss: true
          };
          this.pronounPopOpts = {
            id: 'pronounpop',
            backdropDismiss: true
          };
          this.genProCustOpen = {
            gender: false,
            pronoun: false,
            custompn: false
          };
          this.cModalIsOpen = false;
          this.sModalIsOpen = false;
          this.csSelectModalOpts = {
            component: _modals_profilecsselect_profilecsselect_page__WEBPACK_IMPORTED_MODULE_4__.ProfileCSSelectPage,
            cssClass: 'cs-selectlist',
            showBackdrop: true,
            backdropDismiss: true,
            animated: true,
            keyboardClose: true
          };
          this.shouldSave = false;
          this.errorSave = false;
          this.appFocusListening = false; ////////////////////////////////////////////////////////////////////////////////////////

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var getBPermsRes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('[Profile|ngOnInit] ()...');
                      this.myObj = this.detailServ.myObj;
                      this.meObj = this.detailServ.meObj;
                      this.meEmpId = this.detailServ.meEmpId;
                      this.pplArr = this.detailServ.pplArr;
                      this.pageEnterAnim();

                      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.removeAllListeners();

                      if (this.gotPerms) {
                        _context.next = 12;
                        break;
                      }

                      _context.next = 10;
                      return this.camServ.reqCamPerms();

                    case 10:
                      getBPermsRes = _context.sent;
                      this.gotPerms = getBPermsRes;

                    case 12:
                      ;
                      this.initKBPopListeners('all');
                      this.appFocusListener();
                      this.initSetup();

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.logger.info('[Profile|ionViewDidEnter] ()...');
            this.evServ.publish('doPageEnterAnim', null);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initKBPopListeners",
          value: function initKBPopListeners(mode) {
            var _this = this;

            this.logger.info('[Profile|initKBPopListeners] ()...');
            this.platform.ready().then(function () {
              var exclArr = ['gender', 'pronoun', 'state', 'country'];

              if (_this.scH === null) {
                _this.scH = _this.platform.height();
              }

              ;

              _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.removeAllListeners();

              _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.addListener('keyboardDidShow', function (kbI) {
                _this.kbO = true;
                var localSCB;

                if (_this.scB === null) {
                  _this.kbH = kbI.keyboardHeight;
                  _this.scB = _this.scH - _this.kbH;
                  localSCB = _this.scB;
                } else {
                  localSCB = _this.scB;
                }

                ;

                if (_this.pFieldFocus !== null && !exclArr.includes(_this.pFieldFocus)) {
                  _this.logger.info('[Profile|kbDidShow] (Adjusting)...');

                  var iEle = jquery__WEBPACK_IMPORTED_MODULE_17__('#' + _this.pFieldFocus + '-input-id');

                  _this.logger.info('[Profile|kbDidShow] Input: #' + _this.pFieldFocus + '-input-id');

                  var iEleB = jquery__WEBPACK_IMPORTED_MODULE_17__(iEle).offset().top + jquery__WEBPACK_IMPORTED_MODULE_17__(iEle).outerHeight() + 12;

                  _this.logger.info('[Profile|kbDidShow] Input Bottom: ' + iEleB);

                  if (iEleB > localSCB) {
                    _this.kbAdjust = String(localSCB - iEleB) + 'px';

                    _this.appRef.tick();

                    _this.logger.info('[Profile|kbDidShow] Adjust: ' + _this.kbAdjust);
                  } else {
                    _this.kbAdjust = 'unset';

                    _this.appRef.tick();

                    _this.logger.info('[Profile|kbDidShow] Adjust: NIL - Not Covered.');
                  }
                } else {
                  if (_this.pFieldFocus === null) {
                    _this.logger.info('[Profile|kbDidShow] (Skipping): pFieldFocus===null)');
                  } else {
                    _this.logger.info('[Profile|kbDidShow] (Skipping): excluded Field');
                  }
                }
              });

              _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.addListener('keyboardDidHide', function () {
                _this.kbO = false;

                if (_this.kbAdjust !== 'unset') {
                  _this.kbAdjust = 'unset';

                  _this.appRef.tick();

                  _this.logger.info('[Profile|kbDidHide] - Unset Adjust Done');
                } else {
                  _this.logger.info('[Profile|kbDidHide] (Skipping): Already UNSET');
                }
              });

              if (mode === 'all') {
                document.addEventListener('ionPopoverDidPresent', function () {
                  _this.logger.info('[Profile|EventListen] (ionPopDidPresent): ' + _this.pFieldFocus);

                  _this.genProCustOpen[_this.pFieldFocus] = true;
                });
                document.addEventListener('ionPopoverWillDismiss', function () {
                  var dismissK;

                  for (var _i = 0, _Object$keys = Object.keys(_this.genProCustOpen); _i < _Object$keys.length; _i++) {
                    var popK = _Object$keys[_i];
                    var pK = popK.toString();

                    if (_this.genProCustOpen[pK]) {
                      dismissK = pK;
                      _this.genProCustOpen[pK] = false;
                    }
                  }

                  ;

                  _this.logger.info('[Profile|EventListen] (ionPopDidDismiss): ' + dismissK);
                });
              }
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "appFocusListener",
          value: function appFocusListener() {
            var _this2 = this;

            this.logger.info('[Profile|appFocusListener] ()...');

            if (!this.appFocusListening) {
              this.evServ.subscribe('myAppStateActive', function (tf) {
                if (tf) {
                  _this2.initKBPopListeners('kb');

                  _this2.logger.info('[Profile|appFocusListener] App State [ACTIVE] - Doing Reinit of KB Listeners...');
                } else {
                  _this2.logger.info('[Profile|appFocusListener] App State [NOT ACTIVE] - No Action.');
                }
              });
              this.appFocusListening = true;
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initSetup",
          value: function initSetup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var forceSync, firstSync, timeSync, pOpts, lsUTS, nowUTS, sSLS;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[Profile|initSetup] ()...');
                      _context2.next = 3;
                      return this.sqlServ.hasProfile();

                    case 3:
                      this.hasDBProfile = _context2.sent;
                      this.logger.info('[Profile|initSetup] [DBPROFILE]=' + this.hasDBProfile.toString().toUpperCase());

                      if (!this.hasDBProfile) {
                        _context2.next = 18;
                        break;
                      }

                      _context2.next = 8;
                      return this.storeServ.getObject('settingsProfileOpts');

                    case 8:
                      pOpts = _context2.sent;
                      pOpts !== null ? forceSync = pOpts.alwaysSync.value : forceSync = false;
                      _context2.next = 12;
                      return this.detailServ.getProfileLastSync();

                    case 12:
                      lsUTS = _context2.sent;

                      if (lsUTS === 0) {
                        firstSync = true;
                        this.isFirstSync = true;
                        timeSync = false;
                      } else {
                        firstSync = false;
                        nowUTS = this.dT.gUT();
                        sSLS = nowUTS - lsUTS;
                        sSLS > 86400 ? timeSync = true : timeSync = false;
                      }

                      ;

                      if (forceSync || firstSync || timeSync) {
                        this.initRefreshProfile('refresh');
                      } else {
                        this.loadDBProfile();
                      }

                      _context2.next = 19;
                      break;

                    case 18:
                      this.initRefreshProfile('init');

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initRefreshProfile",
          value: function initRefreshProfile(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var initStages, profileInitLoader, rfPD, checkDismiss, iabTO, initPhotoRes;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.logger.info('[Profile|initRefreshProfile] ()...');
                      initStages = {
                        photo: null,
                        iab: null
                      };
                      profileInitLoader = null;

                      rfPD = function rfPD(data) {
                        if (mode === 'refresh') {
                          _this3.evServ.publish('refreshProg', data);
                        }
                      };

                      if (!(mode === 'init' || mode === 'refresh' && this.isFirstSync)) {
                        _context5.next = 10;
                        break;
                      }

                      _context5.next = 7;
                      return this.loadCtrl.create({
                        spinner: 'dots',
                        cssClass: 'sheriff-loader-class',
                        message: 'Fetching Profile Data'
                      });

                    case 7:
                      profileInitLoader = _context5.sent;
                      _context5.next = 10;
                      return profileInitLoader.present();

                    case 10:
                      ;
                      checkDismiss = setInterval(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var dbCRes, dbSURes, isUL, i;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!(initStages.photo !== null && initStages.iab !== null)) {
                                    _context3.next = 24;
                                    break;
                                  }

                                  clearInterval(checkDismiss);

                                  if (!(mode === 'init')) {
                                    _context3.next = 11;
                                    break;
                                  }

                                  _context3.next = 5;
                                  return this.sqlServ.createProfile(this.profileData);

                                case 5:
                                  dbCRes = _context3.sent;
                                  this.calcComplete();
                                  profileInitLoader.dismiss();

                                  if (dbCRes) {
                                    this.evServ.showToast('success', 'Profile Created');
                                  } else {
                                    this.evServ.showToast('error', 'Profile CreateSave Error');
                                  }

                                  _context3.next = 19;
                                  break;

                                case 11:
                                  _context3.next = 13;
                                  return this.saveUpdateProfile(this.profileData);

                                case 13:
                                  dbSURes = _context3.sent;
                                  this.calcComplete();
                                  rfPD(10);

                                  if (this.isFirstSync) {
                                    this.isFirstSync = null;
                                    profileInitLoader.dismiss();
                                  }

                                  ;

                                  if (dbSURes) {
                                    this.evServ.showToast('success', 'Profile Updated');
                                  } else {
                                    this.evServ.showToast('error', 'Profile Update Error');
                                  }

                                case 19:
                                  ;

                                  for (i = 0; i < this.pLocked.length; i++) {
                                    if (this.profileData[this.pLocked[i]].value !== null) {
                                      isUL = true;
                                    }
                                  }

                                  ;
                                  isUL ? this.pIsLocked = false : this.pIsLocked = true;
                                  this.initDataLoadDone = true;

                                case 24:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, 1000);
                      iabTO = setTimeout(function () {
                        _this3.evServ.publish('fetchPDone', false);
                      }, 30000);
                      this.evServ.subscribe('initIAB', function (initIABRes) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  clearTimeout(iabTO);
                                  initStages.iab = initIABRes;
                                  this.evServ.destroy('initIAB');

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });
                      this.initGetIAB(mode);
                      _context5.next = 17;
                      return this.initGetPhoto();

                    case 17:
                      initPhotoRes = _context5.sent;
                      rfPD(20);

                      if (initPhotoRes) {
                        initStages.photo = true;
                      } else {
                        initStages.photo = false;
                      }

                      ;

                    case 21:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "loadDBProfile",
          value: function loadDBProfile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var pD, _i2, _Object$entries, _Object$entries$_i, key, value, pK, pV, gSCRes, gSSRes, isUL, i;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.logger.info('[Profile|loadDBProfile] ()...');
                      _context6.next = 3;
                      return this.sqlServ.getProfile();

                    case 3:
                      pD = _context6.sent.data;
                      _i2 = 0, _Object$entries = Object.entries(pD);

                    case 5:
                      if (!(_i2 < _Object$entries.length)) {
                        _context6.next = 29;
                        break;
                      }

                      _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                      pK = key.toString();
                      pV = value;

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

                      if (!(pK === 'country' && !this.profileData.country.label)) {
                        _context6.next = 20;
                        break;
                      }

                      _context6.next = 18;
                      return this.sqlServ.getSingleCountry(pV);

                    case 18:
                      gSCRes = _context6.sent;

                      if (gSCRes.result) {
                        this.profileData.country.label = gSCRes.data.Country;
                      }

                    case 20:
                      ;

                      if (!(pK === 'state' && !this.profileData.state.label)) {
                        _context6.next = 26;
                        break;
                      }

                      _context6.next = 24;
                      return this.sqlServ.getSingleState(pV);

                    case 24:
                      gSSRes = _context6.sent;

                      if (gSSRes.result) {
                        this.profileData.state.label = gSSRes.data.State;
                      }

                    case 26:
                      _i2++;
                      _context6.next = 5;
                      break;

                    case 29:
                      ;

                      for (i = 0; i < this.pLocked.length; i++) {
                        if (this.profileData[this.pLocked[i]].value !== null) {
                          isUL = true;
                        }
                      }

                      ;
                      isUL ? this.pIsLocked = false : this.pIsLocked = true;
                      this.initDataLoadDone = true;
                      this.calcComplete();

                    case 35:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "saveUpdateProfile",
          value: function saveUpdateProfile(profileData) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var upDProfRes;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.logger.info('[Profile|saveUpdateProfile] ()...');
                      _context7.next = 3;
                      return this.sqlServ.updateProfile(profileData);

                    case 3:
                      upDProfRes = _context7.sent;

                      if (!upDProfRes) {
                        _context7.next = 8;
                        break;
                      }

                      return _context7.abrupt("return", Promise.resolve(true));

                    case 8:
                      return _context7.abrupt("return", Promise.resolve(false));

                    case 9:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doProfileRefresh",
          value: function doProfileRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.logger.info('[Profile|doProfileRefresh]');
                      this.progCirc.animation = false;
                      this.progCirc.percent = 0;
                      this.progCirc.outerStrokeColor = '#ff9800';
                      this.initDataLoadDone = false;
                      this.pIsLocked = true;
                      _context8.next = 8;
                      return this.resetAllPFields();

                    case 8:
                      _context8.next = 10;
                      return this.resetComplete();

                    case 10:
                      this.progCirc.percent += 10;
                      this.evServ.subscribe('refreshProg', function (rPPerc) {
                        _this4.progCirc.percent += rPPerc;

                        if (_this4.progCirc.percent >= 100) {
                          _this4.logger.info('[Profile|doProfileRefresh] (COMPLETED REFRESH!)...');

                          _this4.progCirc.outerStrokeColor = '#4caf50';
                          event.target.complete();

                          _this4.myAniCSS('.hcl-progcirc.profile', 'fadeOut', 0, 1400, 'remove', 'hide');

                          setTimeout(function () {
                            _this4.progCirc.percent = 0;
                            _this4.progCirc.outerStrokeColor = '#FF9800';
                            jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-progcirc.profile').css('display', 'unset');
                          }, 2000);

                          _this4.evServ.destroy('refreshProg');
                        } else {
                          console.log(_this4.progCirc.percent);
                        }
                      });
                      this.initRefreshProfile('refresh');

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "resetComplete",
          value: function resetComplete() {
            this.logger.info('[Profile|resetComplete] ()...');
            var cFC = 0;
            var ttlCFs = Object.keys(this.pComplete).length;

            for (var _i3 = 0, _Object$keys2 = Object.keys(this.pComplete); _i3 < _Object$keys2.length; _i3++) {
              var pCKey = _Object$keys2[_i3];
              cFC++;
              var pC = pCKey.toString();
              this.pComplete[pC].v = 0;
              this.pComplete[pC].p = 0;

              if (cFC === ttlCFs) {
                return Promise.resolve(true);
              }
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "resetAllPFields",
          value: function resetAllPFields() {
            this.logger.info('[Profile|resetAllPFields] ()...');

            for (var _i4 = 0, _Object$entries2 = Object.entries(this.profileData); _i4 < _Object$entries2.length; _i4++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 1),
                  key = _Object$entries2$_i[0];

              var pK = key.toString();

              if (pK === 'photo') {
                this.profileData.value = {
                  ulPath: '',
                  nativeUri: './../../assets/img/sheriff-profile-no-photo-ico.png',
                  setDate: '-',
                  setBy: '-',
                  dims: '-',
                  size: {
                    s: null,
                    b: ''
                  },
                  type: '-'
                };
              } else {
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
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "calcComplete",
          value: function calcComplete() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _i5, _Object$keys3, pKey, pK, pCat, _i6, _Object$keys4, pCKey, pC;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.logger.info('[Profile|calcComlplete] ()...');
                      _context9.next = 3;
                      return this.resetComplete();

                    case 3:
                      for (_i5 = 0, _Object$keys3 = Object.keys(this.profileData); _i5 < _Object$keys3.length; _i5++) {
                        pKey = _Object$keys3[_i5];
                        pK = pKey.toString();

                        if (pK !== 'custompn') {
                          pCat = null;

                          for (_i6 = 0, _Object$keys4 = Object.keys(this.pCompCats); _i6 < _Object$keys4.length; _i6++) {
                            pCKey = _Object$keys4[_i6];
                            pC = pCKey.toString();

                            if (this.pCompCats[pC].includes(pK)) {
                              pCat = pC;
                            }
                          }

                          ;

                          if (this.profileData[pK].value !== null && this.profileData[pK].value !== 0 && pCat !== null) {
                            this.pComplete[pCat].v++;
                            this.pComplete[pCat].p = Math.round(this.pComplete[pCat].v / this.pComplete[pCat].t * 100);
                          }
                        }
                      }

                      ;
                      this.pComplete.all.v = this.pComplete.photo.v + this.pComplete.general.v + this.pComplete.address.v + this.pComplete.emergency.v;
                      this.pComplete.all.p = Math.round(this.pComplete.all.v / this.pComplete.all.t * 100);

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initGetPhoto",
          value: function initGetPhoto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var apiPhoto, p, pC;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.logger.info('[Profile|initGetPhoto] ()...');
                      _context10.next = 3;
                      return this.deputy.getThis('my/photo');

                    case 3:
                      apiPhoto = _context10.sent;

                      if (!apiPhoto.r) {
                        _context10.next = 18;
                        break;
                      }

                      p = apiPhoto.d;
                      _context10.next = 8;
                      return this.fileServ.dlFile(p.DownloadLink, 'tempProfilePhoto');

                    case 8:
                      this.profileData.photo.value.nativeUri = _context10.sent;
                      this.profileData.photo.value.setDate = this.dT.format(new Date(p.Created), 'dd/MM/yy HH:mm');

                      if (this.meEmpId === p.Creator) {
                        this.profileData.photo.value.setBy = 'You';
                      } else {
                        pC = this.pplArr.filter(function (p) {
                          return p.EmpId === p.Creator;
                        });

                        if (pC.length > 0) {
                          this.profileData.photo.value.setBy = pC[0].FirstName + ' ' + pC[0].LastName.charAt(0) + '.';
                        } else {
                          this.profileData.photo.value.setBy = null;
                        }
                      }

                      ;
                      this.profileData.photo.value.dims = p.Width.toString() + 'x' + p.Height.toString();
                      this.profileData.photo.value.size = this.niceBytes(p.Size);
                      this.profileData.photo.value.type = p.Type.replace('image/', '');
                      return _context10.abrupt("return", Promise.resolve(true));

                    case 18:
                      return _context10.abrupt("return", Promise.resolve(false));

                    case 19:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initGetIAB",
          value: function initGetIAB(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this5 = this;

              var rfPD, emailIsV, setDOMVal, gAR, dUN, dPW;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.logger.info('[Profile|authProfileFetch] ()...');

                      rfPD = function rfPD(data) {
                        if (mode === 'refresh') {
                          _this5.evServ.publish('refreshProg', data);
                        }
                      };

                      emailIsV = function emailIsV(emailText) {
                        var validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                        if (emailText.match(validEmailFormat)) {
                          return true;
                        } else {
                          return false;
                        }
                      };

                      setDOMVal = function setDOMVal(name, val) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                          var oldVal, oldLbl, newLbl, _oldLbl, _newLbl, getNLRes, _oldLbl2, _newLbl2, _getNLRes;

                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  oldVal = this.profileData[name].value;

                                  if (!(val !== oldVal)) {
                                    _context11.next = 26;
                                    break;
                                  }

                                  this.profileData[name].value = val;

                                  if (name === 'gender' || name === 'pronoun') {
                                    oldLbl = this.profileData[name].label;
                                    newLbl = this.profileData[name].options[Number(val)].label;

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

                                  if (!(name === 'country')) {
                                    _context11.next = 16;
                                    break;
                                  }

                                  _oldLbl = this.profileData.country.label;
                                  _context11.next = 13;
                                  return this.sqlServ.getSingleCountry(val);

                                case 13:
                                  getNLRes = _context11.sent;
                                  getNLRes.result ? _newLbl = getNLRes.data.Country : _newLbl = null;

                                  if (_newLbl !== null) {
                                    if (_oldLbl === null || _oldLbl !== _newLbl) {
                                      this.profileData.country.label = _newLbl;
                                    }
                                  }

                                case 16:
                                  ;

                                  if (!(name === 'state')) {
                                    _context11.next = 24;
                                    break;
                                  }

                                  _oldLbl2 = this.profileData.state.label;
                                  _context11.next = 21;
                                  return this.sqlServ.getSingleState(val);

                                case 21:
                                  _getNLRes = _context11.sent;
                                  _getNLRes.result ? _newLbl2 = _getNLRes.data.State : _newLbl2 = null;

                                  if (_newLbl2 !== null) {
                                    if (_oldLbl2 === null || _oldLbl2 !== _newLbl2) {
                                      this.profileData.state.label = _newLbl2;
                                    }
                                  }

                                case 24:
                                  ;
                                  this.profileData[name].hasChanged = false;

                                case 26:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      };

                      _context12.next = 6;
                      return this.sqlServ.openAuth();

                    case 6:
                      _context12.next = 8;
                      return this.sqlServ.getADBItem('up');

                    case 8:
                      gAR = _context12.sent;
                      _context12.next = 11;
                      return this.sqlServ.closeAuth();

                    case 11:
                      if (gAR.result) {
                        dUN = gAR.data.u;
                        dPW = gAR.data.p;

                        if (emailIsV(dUN) && dPW.length > 3) {
                          this.tryingUnlock = true;
                          this.evServ.subscribe('getProfileRes', function (iabData) {
                            if (iabData.result === true) {
                              var iabD = iabData.data;

                              for (var i = 0; i < _services_profileData__WEBPACK_IMPORTED_MODULE_5__.iabKeys.length; i++) {
                                var pN = _services_profileData__WEBPACK_IMPORTED_MODULE_5__.iabKeys[i];
                                var iabVal = iabD[i];

                                if (iabVal !== null && iabVal !== 'null' && iabVal !== undefined && iabVal !== 'undefined' && iabVal !== '') {
                                  setDOMVal(pN, iabVal);
                                }
                              }

                              ;
                              _this5.tryingUnlock = false;
                              _this5.pIsLocked = false;

                              _this5.detailServ.setProfileLastSync();

                              _this5.evServ.publish('initIAB', true);

                              _this5.evServ.destroy('getProfileRes');
                            } else if (iabData.result === false) {
                              _this5.evServ.publish('initIAB', false);

                              _this5.evServ.destroy('getProfileRes');
                            } else if (iabData.result === 'prog') {
                              rfPD(iabData.data);
                            }
                          });
                          this.iabServ.getProfile(dUN, dPW);
                        } else {
                          this.evServ.publish('initIAB', false);
                          this.logger.info('[Profile|initGVars] (checkDUP) (Error): U/P Appears INVALID - Skipping IAB Update.');
                        }
                      } else {
                        this.evServ.publish('initIAB', false);
                        this.logger.info('[Profile|initGVars] (getADBItem) (Error): Failed to Retrieve U/P - Skipping IAB Update.');
                      }

                    case 12:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getPDVal",
          value: function getPDVal(fname) {
            return this.profileData[fname].value;
          }
        }, {
          key: "niceBytes",
          value: ////////////////////////////////////////////////////////////////////////////////////////
          function niceBytes(bytes) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (bytes === 0) return 'empty';
            var k = 1024;
            var dm = decimals < 0 ? 0 : decimals;
            var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return {
              s: parseFloat((bytes / Math.pow(k, i)).toFixed(dm)),
              b: sizes[i]
            };
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "changeGender",
          value: function changeGender(nV) {
            this.logger.info('[Profile|changeGender] (' + nV + ')...');

            if (this.initDataLoadDone) {
              var newVal = Number(nV);

              if (newVal !== this.profileData.gender.value) {
                this.profileData.gender.value = newVal;
                this.profileData.gender.label = this.profileData.gender.options[newVal].label;
                this.profileData.gender.hasChanged = true;
                this.checkPFieldChanges();
              } else {
                this.logger.info('[Profile|changeGender] [SKIP] - Value is Same.');
              }

              ;
            } else {
              this.logger.info('[Profile|changeGender] [SKIP] - initDataLoadDone!==TRUE');
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "changePronoun",
          value: function changePronoun(nV) {
            this.logger.info('[Profile|changePronoun] (' + nV + ')...');

            if (this.initDataLoadDone) {
              var newVal = nV.toString().trim();

              if (newVal !== this.profileData.pronoun.value) {
                this.profileData.pronoun.value = newVal;
                this.profileData.pronoun.label = this.profileData.pronoun.options[Number(newVal)].label;
                this.profileData.pronoun.hasChanged = true;
                this.checkPFieldChanges();
              } else {
                this.logger.info('[Profile|changePronoun] [SKIP] - Value is Same.');
              }

              ;
            } else {
              this.logger.info('[Profile|changePronoun] [SKIP] - initDataLoadDone!==TRUE');
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "editCustomPronoun",
          value: function editCustomPronoun(currentCustPN) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var cPNPOpts, _yield$_capacitor_dia, value, cancelled;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.logger.info('[Profile|editCustomPronoun] ()...');
                      this.genProCustOpen.custompn = true;
                      cPNPOpts = {
                        title: 'Custom Pronouns',
                        okButtonTitle: 'OK/Add',
                        cancelButtonTitle: 'Cancel',
                        message: 'Enter pronouns in Subject/Object format:'
                      };

                      if (currentCustPN !== 'Custom') {
                        cPNPOpts['inputText'] = currentCustPN;
                      }

                      ;
                      _context13.next = 7;
                      return _capacitor_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog.prompt(cPNPOpts);

                    case 7:
                      _yield$_capacitor_dia = _context13.sent;
                      value = _yield$_capacitor_dia.value;
                      cancelled = _yield$_capacitor_dia.cancelled;

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
                      } else {
                        this.genProCustOpen.custompn = false;
                      }

                    case 11:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "changeCountry",
          value: function changeCountry(currentVal) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this6 = this;

              var baseLMOpts, domCVal, selectedC, cListModal, _yield$cListModal$onD, data, role, newC;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.logger.info('[Profile|changeCountry] (' + currentVal + ')...');
                      baseLMOpts = this.csSelectModalOpts;
                      baseLMOpts['id'] = 'country-csselectlist-modal';
                      domCVal = this.profileData.country.value;
                      domCVal !== null ? selectedC = Number(domCVal) : selectedC = null;
                      baseLMOpts['componentProps'] = {
                        listType: 'c',
                        selected: selectedC
                      };
                      _context14.next = 8;
                      return this.modalCtrl.create(baseLMOpts);

                    case 8:
                      cListModal = _context14.sent;
                      jquery__WEBPACK_IMPORTED_MODULE_17__('#country-csselectlist-modal').on('ionModalWillPresent', function () {
                        _this6.cModalIsOpen = true;
                      });
                      jquery__WEBPACK_IMPORTED_MODULE_17__('#country-csselectlist-modal').on('ionModalWillDismiss', function () {
                        _this6.cModalIsOpen = false;
                      });
                      _context14.next = 13;
                      return cListModal.present();

                    case 13:
                      _context14.next = 15;
                      return cListModal.onDidDismiss();

                    case 15:
                      _yield$cListModal$onD = _context14.sent;
                      data = _yield$cListModal$onD.data;
                      role = _yield$cListModal$onD.role;

                      if (role === 'new') {
                        newC = data;
                        this.profileData.country.value = newC.v.toString().trim();
                        this.profileData.country.label = newC.l.toString().trim();
                        this.profileData.country.hasChanged = true;
                        this.profileData.state.value = null;
                        this.profileData.state.label = null;
                        this.profileData.state.hasChanged = true;
                        this.checkPFieldChanges();
                        this.appRef.tick();
                      } else {
                        this.appRef.tick();
                      }

                    case 19:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "changeState",
          value: function changeState(currentVal) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this7 = this;

              var currentCVal, baseLMOpts, domSVal, selectedS, sListModal, _yield$sListModal$onD, data, role, newS;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.logger.info('[Profile|changeState] (' + currentVal + ')...');
                      currentCVal = this.profileData.country.value;

                      if (!(currentCVal !== null)) {
                        _context15.next = 22;
                        break;
                      }

                      baseLMOpts = this.csSelectModalOpts;
                      baseLMOpts['id'] = 'state-csselectlist-modal';
                      domSVal = this.profileData.state.value;

                      if (domSVal !== null) {
                        selectedS = Number(domSVal);
                      } else {
                        selectedS = null;
                      }

                      ;
                      baseLMOpts['componentProps'] = {
                        listType: 's',
                        selected: selectedS,
                        country: Number(currentCVal)
                      };
                      _context15.next = 11;
                      return this.modalCtrl.create(baseLMOpts);

                    case 11:
                      sListModal = _context15.sent;
                      jquery__WEBPACK_IMPORTED_MODULE_17__('#state-csselectlist-modal').on('ionModalWillPresent', function () {
                        _this7.sModalIsOpen = true;
                      });
                      jquery__WEBPACK_IMPORTED_MODULE_17__('#state-csselectlist-modal').on('ionModalWillDismiss', function () {
                        _this7.sModalIsOpen = false;
                      });
                      _context15.next = 16;
                      return sListModal.present();

                    case 16:
                      _context15.next = 18;
                      return sListModal.onDidDismiss();

                    case 18:
                      _yield$sListModal$onD = _context15.sent;
                      data = _yield$sListModal$onD.data;
                      role = _yield$sListModal$onD.role;

                      if (role === 'new') {
                        newS = data;
                        this.profileData.state.value = newS.v.toString().trim();
                        this.profileData.state.label = newS.l.toString().trim();
                        this.profileData.state.hasChanged = true;
                        this.checkPFieldChanges();
                        this.appRef.tick();
                      } else {
                        this.appRef.tick();
                      }

                    case 22:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "forceBlur",
          value: function forceBlur(fName) {
            var _this8 = this;

            this.logger.info('[Profile|forceBlur] (' + fName + ')...');
            var inputEle = jquery__WEBPACK_IMPORTED_MODULE_17__('#' + fName + '-input-id');
            var itemEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.' + fName + '-input-item');
            var remHLLoop = setInterval(function () {
              if (jquery__WEBPACK_IMPORTED_MODULE_17__(inputEle).length && jquery__WEBPACK_IMPORTED_MODULE_17__(itemEle).length) {
                clearInterval(remHLLoop);

                _this8.logger.info('[Profile|forceBlur] (Cleared!)');

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
                _this8.pFieldFocus = null;

                if (fName === 'gender' || fName === 'pronoun') {
                  _this8.genProCustOpen[fName] = false;
                }

                ;

                _this8.appRef.tick();

                setTimeout(function () {
                  console.log('pFieldFocus=' + _this8.pFieldFocus);
                  console.log('genProCustOpen=');
                  console.log(_this8.genProCustOpen);
                }, 2000);
              }
            }, 100);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "openDOBDatePicker",
          value: function openDOBDatePicker() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var oldDate, newDOBRes;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this.logger.info('[Profile|openDOBDatePicker] ()....');
                      this.pFieldFocus = 'dob';
                      this.dobDPOpen = true;
                      oldDate = this.profileData.dob.date;
                      _context16.prev = 4;
                      _context16.next = 7;
                      return this.dT.pickerProfileDOB(this.profileData.dob.date);

                    case 7:
                      newDOBRes = _context16.sent;
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
                      _context16.next = 18;
                      break;

                    case 15:
                      _context16.prev = 15;
                      _context16.t0 = _context16["catch"](4);
                      this.forceBlur('dob');

                    case 18:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this, [[4, 15]]);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doSelectPhoto",
          value: function doSelectPhoto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var getFRes, newFStat, fS, fDims;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.logger.info('[Profile|doSelectPhoto] ()...');

                      if (!this.gotPerms) {
                        _context17.next = 22;
                        break;
                      }

                      _context17.next = 4;
                      return this.camServ.fileGetPhoto();

                    case 4:
                      getFRes = _context17.sent;

                      if (!getFRes) {
                        _context17.next = 19;
                        break;
                      }

                      this.doReadyULPhoto(getFRes);
                      _context17.next = 9;
                      return this.fileServ.stat(null, getFRes.path);

                    case 9:
                      newFStat = _context17.sent;

                      if (newFStat.result) {
                        fS = this.niceBytes(newFStat.data.size);
                      } else {
                        fS = {
                          s: 'NK',
                          b: ''
                        };
                      }

                      ;
                      getFRes.exif.ImageWidth.toString() === '0' && getFRes.exif.ImageLength.toString() === '0' ? fDims = 'NK' : fDims = getFRes.exif.ImageWidth + 'x' + getFRes.exif.ImageLength;
                      this.profileData.photo.value = {
                        ulPath: getFRes.path,
                        nativeUri: getFRes.webPath,
                        setDate: this.dT.format(new Date(), 'dd/MM/yy HH:mm'),
                        setBy: 'You',
                        dims: fDims,
                        size: fS,
                        type: getFRes.type
                      };
                      this.appRef.tick();
                      this.profileData.photo.hasChanged = true;
                      this.checkPFieldChanges();
                      _context17.next = 20;
                      break;

                    case 19:
                      this.evServ.showToast('error', 'Failed to Import Photo');

                    case 20:
                      _context17.next = 23;
                      break;

                    case 22:
                      this.evServ.showToast('error', 'File/Photo Permission Denied');

                    case 23:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doTakePhoto",
          value: function doTakePhoto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var takePRes, newPStat, pS;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.logger.info('[Profile|doChangePhoto] ()...');

                      if (!this.gotPerms) {
                        _context18.next = 21;
                        break;
                      }

                      _context18.next = 4;
                      return this.camServ.camGetPhoto();

                    case 4:
                      takePRes = _context18.sent;

                      if (!takePRes) {
                        _context18.next = 18;
                        break;
                      }

                      this.doReadyULPhoto(takePRes);
                      _context18.next = 9;
                      return this.fileServ.stat(null, takePRes.path);

                    case 9:
                      newPStat = _context18.sent;

                      if (newPStat.result) {
                        pS = this.niceBytes(newPStat.data.size);
                      } else {
                        pS = {
                          s: 'NK',
                          b: ''
                        };
                      }

                      ;
                      this.profileData.photo.value = {
                        ulPath: takePRes.path,
                        nativeUri: takePRes.webPath,
                        setDate: this.dT.format(new Date(), 'dd/MM/yy HH:mm'),
                        setBy: 'You',
                        dims: takePRes.exif.ImageWidth + 'x' + takePRes.exif.ImageLength,
                        size: pS,
                        type: takePRes.type
                      };
                      this.appRef.tick();
                      this.profileData.photo.hasChanged = true;
                      this.checkPFieldChanges();
                      _context18.next = 19;
                      break;

                    case 18:
                      this.evServ.showToast('error', 'Failed to Import Photo');

                    case 19:
                      _context18.next = 22;
                      break;

                    case 21:
                      this.evServ.showToast('error', 'Camera/Photo Permission Denied');

                    case 22:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doReadyULPhoto",
          value: function doReadyULPhoto(photo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var base64Data, fileName, ulPPath, ulPRead;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      this.logger.info('[Profile|doReadyULPhoto] ()...');
                      _context19.next = 3;
                      return this.readAsBase64(photo);

                    case 3:
                      base64Data = _context19.sent;
                      fileName = new Date().getTime() + '.jpeg';
                      _context19.next = 7;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Filesystem.writeFile({
                        path: 'Sheriff/assets/' + fileName,
                        data: base64Data,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Directory.External
                      });

                    case 7:
                      ulPPath = 'Sheriff/assets/' + fileName;
                      _context19.next = 10;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Filesystem.readFile({
                        path: ulPPath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Directory.External
                      });

                    case 10:
                      ulPRead = _context19.sent;
                      this.ulPhotoObj = {
                        name: fileName,
                        path: ulPPath,
                        data: 'data:image/jpeg;base64,' + ulPRead.data
                      };
                      this.logger.info('[Profile|doReadyULPhoto] Upload Photo Object Ready (this.ulPhotoObj)!');

                    case 13:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "readAsBase64",
          value: function readAsBase64(photo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var file, response, blob;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.logger.info('[Profile|readAsBase64] (photo)...');

                      if (!this.platform.is('hybrid')) {
                        _context20.next = 8;
                        break;
                      }

                      _context20.next = 4;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Filesystem.readFile({
                        path: photo.path
                      });

                    case 4:
                      file = _context20.sent;
                      return _context20.abrupt("return", file.data);

                    case 8:
                      _context20.next = 10;
                      return fetch(photo.webPath);

                    case 10:
                      response = _context20.sent;
                      _context20.next = 13;
                      return response.blob();

                    case 13:
                      blob = _context20.sent;
                      _context20.next = 16;
                      return this.convertBlobToBase64(blob);

                    case 16:
                      return _context20.abrupt("return", _context20.sent);

                    case 17:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "checkPFieldChanges",
          value: function checkPFieldChanges() {
            this.logger.info('[Profile|countPFieldChanges] ()...');

            if (this.initDataLoadDone) {
              var fieldChangeCount = 0;

              for (var _i7 = 0, _Object$entries3 = Object.entries(this.profileData); _i7 < _Object$entries3.length; _i7++) {
                var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i7], 1),
                    key = _Object$entries3$_i[0];

                if (this.profileData[key].hasChanged) {
                  fieldChangeCount++;
                }
              }

              ;

              if (fieldChangeCount > 0) {
                this.dChanges.detectChanges();
                this.appRef.tick();
                this.setShouldSave(true);
              } else {
                this.setShouldSave(false);
              }
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doDeletePhoto",
          value: function doDeletePhoto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this9 = this;

              var deleteSuccess, deletePhotoLoader;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      this.logger.info('[Profile|doDeletePhoto] ()...');

                      if (!this.profileData.photo.hasChanged) {
                        _context21.next = 6;
                        break;
                      }

                      this.profileData.photo.hasChanged = false;
                      this.checkPFieldChanges();
                      _context21.next = 13;
                      break;

                    case 6:
                      _context21.next = 8;
                      return this.loadCtrl.create({
                        spinner: 'dots',
                        cssClass: 'sheriff-loader-class',
                        message: 'Deleting Photo'
                      });

                    case 8:
                      deletePhotoLoader = _context21.sent;
                      deletePhotoLoader.onDidDismiss().then(function () {
                        if (deleteSuccess) {
                          _this9.profileData.photo.value = {
                            ulPath: '',
                            nativeUri: './../../assets/img/sheriff-profile-no-photo-ico.png',
                            setDate: '-',
                            setBy: '-',
                            dims: '-',
                            size: {
                              s: '-',
                              b: ''
                            },
                            type: '-'
                          };

                          _this9.evServ.showToast('success', 'Photo Deleted Successfully');
                        } else {
                          _this9.evServ.showToast('error', 'Photo Delete Error');
                        }

                        ;
                      });
                      _context21.next = 12;
                      return deletePhotoLoader.present();

                    case 12:
                      setTimeout(function () {
                        deleteSuccess = true;
                        deletePhotoLoader.dismiss();
                      }, 3000);

                    case 13:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "setShouldSave",
          value: function setShouldSave(tf) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this10 = this;

              var hasEvT;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.logger.info('[Profile|setShouldSave] ()...');

                      if (!tf) {
                        _context22.next = 7;
                        break;
                      }

                      this.shouldSave = true;
                      this.detailServ.setShouldSave(true, 'Profile');
                      this.evServ.subscribe('menuShieldSave', function (thenNav) {
                        _this10.doSaveProfile(thenNav);

                        _this10.evServ.destroy('menuShieldSave');
                      });
                      _context22.next = 13;
                      break;

                    case 7:
                      this.shouldSave = false;
                      this.detailServ.setShouldSave(false, null);
                      _context22.next = 11;
                      return this.evServ.check('menuShieldSave');

                    case 11:
                      hasEvT = _context22.sent;

                      if (hasEvT) {
                        this.evServ.destroy('menuShieldSave');
                      }

                    case 13:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "promptSaveProfile",
          value: function promptSaveProfile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _yield$_capacitor_dia2, value;

              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      this.logger.info('[Profile|promptSaveProfile] ()...');
                      event.stopPropagation();
                      _context23.next = 4;
                      return _capacitor_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog.confirm({
                        title: 'Save/Discard New Details?',
                        message: '𝗦𝗮𝘃𝗲 updated details to Deputy or 𝗗𝗶𝘀𝗰𝗮𝗿𝗱 changes?',
                        okButtonTitle: "\uD83D\uDCBE Save",
                        cancelButtonTitle: "\u274C Discard"
                      });

                    case 4:
                      _yield$_capacitor_dia2 = _context23.sent;
                      value = _yield$_capacitor_dia2.value;

                      if (value) {
                        this.doSaveProfile('/tabs');
                      } else {
                        this.setShouldSave(false);
                        this.navCtrl.navigateRoot('/tabs');
                      }

                    case 7:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doSaveProfile",
          value: function doSaveProfile(thenTask) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this11 = this;

              var emailIsV, savePLoader, doDismiss, newFieldsArr, _i8, _Object$entries4, _Object$entries4$_i, key, value, nK, nV, gAR, upO, iabTO, doAnyNav, _yield$savePLoader$on, data, role, _i9, _Object$entries5, _Object$entries5$_i, _key, errMsg;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      this.logger.info('[Profile|doSaveProfile] ()...');

                      emailIsV = function emailIsV(emailText) {
                        var validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                        if (emailText.match(validEmailFormat)) {
                          return true;
                        } else {
                          return false;
                        }
                      };

                      _context25.next = 4;
                      return this.loadCtrl.create({
                        spinner: 'dots',
                        cssClass: 'sheriff-loader-class',
                        message: 'Saving Profile'
                      });

                    case 4:
                      savePLoader = _context25.sent;
                      _context25.next = 7;
                      return savePLoader.present();

                    case 7:
                      doDismiss = function doDismiss(d, r) {
                        savePLoader.dismiss(d, r);
                      }; //------------------------------------------------


                      newFieldsArr = [];

                      for (_i8 = 0, _Object$entries4 = Object.entries(this.profileData); _i8 < _Object$entries4.length; _i8++) {
                        _Object$entries4$_i = _slicedToArray(_Object$entries4[_i8], 2), key = _Object$entries4$_i[0], value = _Object$entries4$_i[1];

                        if (key.toString() !== 'photo' && value['hasChanged'] && value['value'] !== null) {
                          nK = key.toString();
                          nV = value['value'].toString().trim();
                          newFieldsArr.push({
                            n: nK,
                            v: nV
                          });
                        }
                      }

                      ;

                      if (!(newFieldsArr.length > 0)) {
                        _context25.next = 19;
                        break;
                      }

                      this.logger.info('[Profile|doSaveProfile] (IAB Save) [' + newFieldsArr.length + '] NEW Field Values - Updating...');
                      _context25.next = 15;
                      return this.sqlServ.getADBItem('up');

                    case 15:
                      gAR = _context25.sent;

                      if (gAR.result) {
                        upO = {
                          u: gAR.data.u,
                          p: gAR.data.p
                        };

                        if (emailIsV(upO.u) && upO.p.length > 3) {
                          iabTO = setTimeout(function () {
                            _this11.evServ.publish('iabTO', true);

                            _this11.logger.info('[Profile|saveProfile] (IAB Timeout) Error > 30s');
                          }, 30000);
                          this.evServ.subscribe('saveProfileDone', function (iabSaveRes) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
                              var dbSaveRes;
                              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                                while (1) {
                                  switch (_context24.prev = _context24.next) {
                                    case 0:
                                      clearTimeout(iabTO);

                                      if (!iabSaveRes) {
                                        _context24.next = 8;
                                        break;
                                      }

                                      _context24.next = 4;
                                      return this.sqlServ.updateProfile(this.profileData);

                                    case 4:
                                      dbSaveRes = _context24.sent;

                                      if (dbSaveRes) {
                                        doDismiss('both', 'saved');
                                      } else {
                                        doDismiss('iab', 'saved');
                                      }

                                      _context24.next = 9;
                                      break;

                                    case 8:
                                      doDismiss('iab', 'error');

                                    case 9:
                                      ;
                                      this.evServ.destroy('saveProfileDone');

                                    case 11:
                                    case "end":
                                      return _context24.stop();
                                  }
                                }
                              }, _callee24, this);
                            }));
                          });
                          this.iabServ.saveProfile(upO, newFieldsArr);
                        } else {
                          this.logger.info('[Profile|doSaveProfile] (Error) U/P Invalid');
                          doDismiss('email', 'error');
                        }
                      } else {
                        this.logger.info('[Profile|doSaveProfile] (Error) Failed to Retrieve U/P - Skipping IAB Update.');
                        doDismiss('up', 'error');
                      }

                      _context25.next = 21;
                      break;

                    case 19:
                      this.logger.info('[Profile|doSaveProfile] (Error) No New Field Values (ex. Photo!) - Skipping Update');
                      doDismiss('nonew', 'error');

                    case 21:
                      //------------------------------------------------
                      doAnyNav = function doAnyNav() {
                        if (thenTask === 'logout') {
                          _this11.doDelayedLogout();
                        } else if (thenTask === 'exit') {
                          _this11.doDelayedExit();
                        } else {
                          if (thenTask !== null) {
                            _this11.navCtrl.navigateRoot(thenTask);
                          }
                        }
                      };

                      _context25.next = 24;
                      return savePLoader.onDidDismiss();

                    case 24:
                      _yield$savePLoader$on = _context25.sent;
                      data = _yield$savePLoader$on.data;
                      role = _yield$savePLoader$on.role;

                      if (role === 'saved') {
                        for (_i9 = 0, _Object$entries5 = Object.entries(this.profileData); _i9 < _Object$entries5.length; _i9++) {
                          _Object$entries5$_i = _slicedToArray(_Object$entries5[_i9], 1), _key = _Object$entries5$_i[0];
                          this.profileData[_key].hasChanged = false;
                        }

                        ;
                        this.checkPFieldChanges();
                        this.evServ.showToast('success', 'Profile Saved OK');
                        doAnyNav();
                        this.logger.info('[Profile|saveProfile] (Success) Profile Saved via IAB & Profile DB Fields Updated.');
                      } else {
                        if (data === 'iab') {
                          errMsg = 'Deputy Failed';
                        } else if (data === 'email') {
                          errMsg = 'Invalid Email';
                        } else if (data === 'up') {
                          errMsg = 'User/Pass Missing';
                        } else {
                          errMsg = 'No New Data';
                        }

                        ;
                        this.setShouldSave(false);
                        this.evServ.showToast('error', 'Error: ' + errMsg);
                        doAnyNav();
                        this.logger.info('[Profile|saveProfile] (Error): ' + errMsg);
                      }

                    case 28:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "onInputFocus",
          value: function onInputFocus(fName) {
            this.logger.info('[Profile|onInputFocus] (' + fName + ')...');

            if (this.initDataLoadDone) {
              this.pFieldFocus = fName;
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "onSelectCancel",
          value: function onSelectCancel(fName) {
            this.logger.info('[Profile|onSelectCancel] (' + fName + ')...');
            this.pFieldFocus = null;

            if (fName !== 'gender' && fName !== 'pronoun') {
              this.forceBlur(fName);
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "onInputBlur",
          value: function onInputBlur(fName, fVal) {
            this.logger.info('[Profile|onInputBlur] (' + fName + ')...');
            this.pFieldFocus = null;
            var exceptF = ['gender', 'pronoun', 'country', 'state'];

            if (!exceptF.includes(fName)) {
              if (fVal !== this.profileData[fName].value) {
                this.profileData[fName].value = fVal;
                this.profileData[fName].hasChanged = true;
                this.checkPFieldChanges();
              }
            }

            ;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doDelayedExit",
          value: function doDelayedExit() {
            this.appServ.exitApp();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doDelayedLogout",
          value: function doDelayedLogout() {
            var _this12 = this;

            this.detailServ.setAuthLogout(true);
            jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-auth-networkstatus-wrapper').removeClass('adjust-for-auth-toolbar-overlay');

            var myAniCSS = function myAniCSS(jqEle, animName) {
              return new Promise(function (resolve) {
                var animClassStr = 'animate__animated animate__' + animName + ' animate__faster';
                jquery__WEBPACK_IMPORTED_MODULE_17__(jqEle).addClass(animClassStr);
                jquery__WEBPACK_IMPORTED_MODULE_17__(jqEle).on('animationend', function () {
                  jquery__WEBPACK_IMPORTED_MODULE_17__(jqEle).removeClass(animClassStr);
                  resolve('done');
                });
              });
            };

            myAniCSS('#sheriff-custom-splash-wrapper', 'fadeIn').then(function () {
              return jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-wrapper').show();
            });
            jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-logo-img').addClass('animate__animated animate__headShake animate__infinite');
            jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-titletexttop-wrapper').removeClass('animate__animated animate__slideOutUp animate__faster');
            jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-zer0ne-wrapper').removeClass('animate__animated animate__slideOutDown animate__faster');
            jquery__WEBPACK_IMPORTED_MODULE_17__('.bar-horizontal').removeClass('finished');
            jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-logo-img').prop('src', '../assets/img/lilheader-s.png');
            jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideOutLeft').addClass('animate__slideInLeft');
            jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideOutRight').addClass('animate__slideInRight');
            jquery__WEBPACK_IMPORTED_MODULE_17__('#sheriff-custom-splash-wrapper, .sheriff-col.custom-splash-col.middlelogocol').css('background', '#121212');
            this.menuCtrl.close().then(function () {
              _this12.navCtrl.navigateRoot('/auth');
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.logger.info('[Profile|ionViewWillLeave] ()...');

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_15__.Keyboard.removeAllListeners();

            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-leftbar.profile');
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title-leftanimbar-inner.profile');
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title.tight-wrap.profile');
            jquery__WEBPACK_IMPORTED_MODULE_17__(titleBar).css('width', '0px').removeClass('dimmed');
            jquery__WEBPACK_IMPORTED_MODULE_17__(animBarEnd).removeClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_17__(titleText).removeClass('scrolledin');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "pageEnterAnim",
          value: function pageEnterAnim() {
            var _this13 = this;

            this.logger.info('[Profile|pageEnterAnim] ()...');
            this.evServ.subscribe('doPageEnterAnim', function () {
              var pageKey = 'profile';
              var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-slogo.' + pageKey);
              var preImg = '../../assets/img/slogo-';
              var cProgEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-progcirc.' + pageKey);
              var patchEles = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
              var starEle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-star.' + pageKey);
              var pageTitle = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-title.' + pageKey);
              var titleBar = jquery__WEBPACK_IMPORTED_MODULE_17__('.hcl-leftbar.' + pageKey);
              var leftCol = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-page-header-col.left-col.' + pageKey);
              var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title-leftanimbar-inner.' + pageKey);
              var titleText = jquery__WEBPACK_IMPORTED_MODULE_17__('.sheriff-title.tight-wrap.' + pageKey);
              var calcBarW = Math.round(jquery__WEBPACK_IMPORTED_MODULE_17__(leftCol).outerWidth() + 6 - (jquery__WEBPACK_IMPORTED_MODULE_17__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_17__(pageTitle).outerWidth())) + 'px';
              _this13.leftAnimBarW = calcBarW;
              jquery__WEBPACK_IMPORTED_MODULE_17__(patchEles).addClass('hidden');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_17__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_17__(starEle).addClass('hcl-star-startanim');
                _this13.progCirc.outerStrokeColor = '#FF9800';
                _this13.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).attr('src', preImg + 'g.png');

                _this13.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');

                setTimeout(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).attr('src', preImg + 'w.png');

                  _this13.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');

                  jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).addClass('tabtilt');
                  jquery__WEBPACK_IMPORTED_MODULE_17__(titleBar).css('width', calcBarW);
                  setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(animBarEnd).addClass('showing');
                    jquery__WEBPACK_IMPORTED_MODULE_17__(titleText).addClass('scrolledin');
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_17__(titleBar).addClass('dimmed');
                      jquery__WEBPACK_IMPORTED_MODULE_17__(sLogoEle).removeClass('tabtilt');
                    }, 200);
                  }, 200);
                  setTimeout(function () {
                    _this13.progCirc.percent = 0;
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_17__(cProgEle).css('display', 'unset');
                    }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_17__(starEle).removeClass('hcl-star-startanim');

                    _this13.evServ.destroy('doPageEnterAnim');
                  }, 600);
                }, 400);
              }, 300);
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[Profile|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');

            var doAni = function doAni() {
              return new Promise(function (resolve) {
                var aniStr = 'animate__animated animate__' + aniName;
                var delStr = 'animDel-' + aniDel;
                var durStr = 'animDur-' + aniDur;
                jquery__WEBPACK_IMPORTED_MODULE_17__(theEle).on('animationend', function () {
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
            };

            doAni();
          }
        }]);

        return ProfilePage;
      }();

      _ProfilePage.ctorParameters = function () {
        return [{
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__.EventsService
        }, {
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_19__.NGXLogger
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform
        }, {
          type: _services_detail_service__WEBPACK_IMPORTED_MODULE_8__.DetailService
        }, {
          type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_9__.DeputyService
        }, {
          type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_10__.DateTimeService
        }, {
          type: _services_filesystem_service__WEBPACK_IMPORTED_MODULE_11__.FileSystemService
        }, {
          type: _services_camera_service__WEBPACK_IMPORTED_MODULE_12__.CameraService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_16__.StorageService
        }, {
          type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__.SQLiteService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ApplicationRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef
        }, {
          type: _services_iab_service__WEBPACK_IMPORTED_MODULE_14__.IABService
        }, {
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService
        }];
      };

      _ProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _ProfilePage);
      /***/
    },

    /***/
    53942:
    /*!********************************************!*\
      !*** ./src/app/services/camera.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraService": function CameraService() {
          return (
            /* binding */
            _CameraService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/camera */
      37673);
      /* harmony import */


      var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./events.service */
      80106);
      /* harmony import */


      var _capacitor_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/app */
      42138); ////////////////////////////////////////////////////////////////


      var _CameraService = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////
        function CameraService(logger, evServ) {
          var _this14 = this;

          _classCallCheck(this, CameraService);

          this.logger = logger;
          this.evServ = evServ; ////////////////////////////////////////////////////////////////

          this.camPerms = {
            camera: false,
            photos: false
          };

          _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.addListener('appRestoredResult', function (aRRData) {
            _this14.logger.info('[camServ|appRestoredResult] (APP RESTORED | CAM RESULT)...');

            _this14.logger.info(aRRData);
          });
        } ////////////////////////////////////////////////////////////////


        _createClass(CameraService, [{
          key: "doCamInit",
          value: function doCamInit() {
            this.logger.info('[camServ|doCamInit] ()...');
            this.checkCamPerms();
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "checkCamPerms",
          value: function checkCamPerms() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var permRes;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      this.logger.info('[camServ|checkCamPerms] ()...');
                      _context26.next = 3;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.checkPermissions();

                    case 3:
                      permRes = _context26.sent;
                      this.logger.info('[camServ|checkCamPerms] (Status): [camera]=' + permRes.camera + ' | [photos]=' + permRes.photos);
                      this.camPerms = permRes;
                      return _context26.abrupt("return", Promise.resolve(permRes));

                    case 7:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "reqCamPerms",
          value: function reqCamPerms() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var reqPermRes;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      this.logger.info('[camServ|checkCamPerms] ()...');
                      _context27.next = 3;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.requestPermissions({
                        permissions: ['camera', 'photos']
                      });

                    case 3:
                      reqPermRes = _context27.sent;
                      this.logger.info('[camServ|reqCamPerms] (Result): ');
                      this.logger.info(reqPermRes);
                      this.logger.info('[camServ|checkCamPerms] (Status): [camera]=' + reqPermRes.camera + ' | [photos]=' + reqPermRes.photos);
                      this.camPerms = reqPermRes;

                      if (!(this.camPerms.camera && this.camPerms.photos)) {
                        _context27.next = 12;
                        break;
                      }

                      return _context27.abrupt("return", Promise.resolve(true));

                    case 12:
                      return _context27.abrupt("return", Promise.resolve(false));

                    case 13:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "camGetPhoto",
          value: function camGetPhoto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var cGPRes;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      this.logger.info('[camServ|camGetPhoto] ()...');
                      _context28.prev = 1;
                      _context28.next = 4;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                        quality: 100,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                        saveToGallery: true,
                        width: 1280,
                        height: 720,
                        correctOrientation: true
                      });

                    case 4:
                      cGPRes = _context28.sent;
                      return _context28.abrupt("return", Promise.resolve(cGPRes));

                    case 8:
                      _context28.prev = 8;
                      _context28.t0 = _context28["catch"](1);
                      this.logger.info('[camServ|camGetPhoto] (Error): ' + _context28.t0);

                    case 11:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this, [[1, 8]]);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "fileGetPhoto",
          value: function fileGetPhoto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var fGPRes;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      this.logger.info('[camServ|fielGetPhoto] ()...');
                      _context29.prev = 1;
                      _context29.next = 4;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Photos,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                        webUseInput: true
                      });

                    case 4:
                      fGPRes = _context29.sent;
                      return _context29.abrupt("return", Promise.resolve(fGPRes));

                    case 8:
                      _context29.prev = 8;
                      _context29.t0 = _context29["catch"](1);
                      this.logger.info('[camServ|camGetPhoto] (Error): ' + _context29.t0);

                    case 11:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this, [[1, 8]]);
            }));
          }
        }]);

        return CameraService;
      }();

      _CameraService.ctorParameters = function () {
        return [{
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__.NGXLogger
        }, {
          type: _events_service__WEBPACK_IMPORTED_MODULE_1__.EventsService
        }];
      };

      _CameraService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      }) ////////////////////////////////////////////////////////////////
      ], _CameraService);
      /***/
    },

    /***/
    82059:
    /*!*****************************************!*\
      !*** ./src/app/services/iab.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IABService": function IABService() {
          return (
            /* binding */
            _IABService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./events.service */
      80106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _profileData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profileData */
      92472);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-logger */
      62740); ////////////////////////////////////////////////////////////////////////////////////////////////////


      var _IABService = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        function IABService(iab, platform, logger, eventServ) {
          _classCallCheck(this, IABService);

          this.iab = iab;
          this.platform = platform;
          this.logger = logger;
          this.eventServ = eventServ;
          this.platform.ready().then(function () {
            window.open = cordova.InAppBrowser.open;
          });
        } ////////////////////////////////////////////////////////////////////////////////////////////////////


        _createClass(IABService, [{
          key: "getProfile",
          value: function getProfile(u, p) {
            var _this15 = this;

            this.logger.info('[IABServ|getProfile] (' + u + ',' + p + ')...');
            var pDetails = null;
            var pResult = null;
            var pData;
            var didFail;
            var page1Code = "(()=>{const insertCreds=setInterval(()=>{const loginInput=document.getElementById(\"login-email\");const passInput=document.getElementById(\"login-password\");const loginButton=document.getElementById(\"btnLoginSubmit\");if(loginInput&&passInput&&loginButton){clearInterval(insertCreds);loginInput.value=\"" + u + "\";passInput.value=\"" + p + "\";setTimeout(()=>{loginButton.click()},500)}},500)})();";
            var profBOpts = {
              clearcache: 'yes',
              clearsessioncache: 'yes',
              location: 'no',
              hidden: 'yes',
              hardwareback: 'no',
              hidenavigationbuttons: 'yes',
              hideurlbar: 'yes',
              fullscreen: 'yes',
              shouldPauseOnSuspend: 'no'
            };
            var profBURL = 'https://once.deputy.com/my/#profile';
            var profB = this.iab.create(profBURL, '_blank', profBOpts);

            var pM = function pM(data) {
              _this15.logger.info('[Deputy|getProfile|IAB] (' + data.type + '): ' + data.url);
            }; //-------------------------------------------------------------------------------------------------


            this.eventServ.subscribe('fetchPDone', function (tf) {
              if (tf) {
                _this15.eventServ.publish('getProfileRes', {
                  result: pResult,
                  data: pData
                });
              } else {
                didFail = true;
                profB.close();

                _this15.eventServ.publish('getProfileRes', {
                  result: false
                });
              }

              ;

              _this15.eventServ.destroy('fetchPDone');
            });
            profB.on('loadstop').subscribe(function (lSD) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                return regeneratorRuntime.wrap(function _callee30$(_context30) {
                  while (1) {
                    switch (_context30.prev = _context30.next) {
                      case 0:
                        pDetails = lSD.url;
                        pM(lSD);
                        this.eventServ.publish('getProfileRes', {
                          result: 'prog',
                          data: 20
                        });

                        if (lSD.url.includes('login?redirect_url')) {
                          profB.executeScript({
                            code: page1Code
                          });
                        }

                        ;

                        if (lSD.url.includes('#profile')) {
                          profB.executeScript({
                            code: _profileData__WEBPACK_IMPORTED_MODULE_2__.profileScrapeCode
                          });
                        }

                        ;

                        if (lSD.url.includes('sheriff=')) {
                          profB.close();
                        }

                      case 8:
                      case "end":
                        return _context30.stop();
                    }
                  }
                }, _callee30, this);
              }));
            });
            profB.on('loaderror').subscribe(function (m) {
              _this15.logger.info('[iabServ|getProfile] (LOAD ERROR): ' + m.message);
            });
            profB.on('exit').subscribe(function () {
              if (!didFail) {
                var pDRaw = pDetails.replace('https://once.deputy.com/my/', '');
                var pDArr = decodeURIComponent((pDRaw + '').replace(/\+/g, '%20')).replace('sheriff=', '').split('|');
                var pNArr = [];

                for (var i = 0; i < pDArr.length; i++) {
                  pNArr.push(pDArr[i].toString().trim());
                }

                ;
                pResult = true;
                pData = pNArr;

                _this15.eventServ.publish('fetchPDone', true);
              }
            });
          } ////////////////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "saveProfile",
          value: function saveProfile(upObj, newFieldsArr) {
            var _this16 = this;

            this.logger.info('[IABServ|saveProfile] (upObj,newFieldsArr)...');
            var hasGSec = false;
            var gSecArr = ['dname', 'fname', 'lname', 'dob', 'email', 'phone', 'gender', 'pronoun', 'custompn', 'pin'];
            var hasASec = false;
            var aSecArr = ['street', 'city', 'country', 'state', 'pcode'];
            var hasESec = false;
            var eSecArr = ['ename', 'ephone'];
            var ifGEle = '';
            var setGVal = '';
            var checkGVal = '';
            var submitGSec = "$('button[data-dp-analytics=\"waProfileSave\"]').click();";
            var ifAEle = '';
            var setAVal = '';
            var checkAVal = '';
            var submitASec = "$('button[data-dp-analytics=\"waProfileSaveAddress\"]').click();";
            var ifEEle = '';
            var setEVal = '';
            var checkEVal = '';
            var submitESec = "$('button[data-dp-analytics=\"waProfileSaveEmergency\"]').click();";
            var alertGSec = '$("#edit-basic > div.form.js-msg-placeholder > div.alert.alert--floating.alert-success").length';
            var alertASec = '$("#pnlEditProfileMainAddress > div > div.alert").length';
            var alertESec = '$("#pnlEditProfileEmergencyAddress > div > div.alert").length';
            var gFields = [];
            var aFields = [];
            var eFields = [];

            for (var i = 0; i < newFieldsArr.length; i++) {
              if (gSecArr.includes(newFieldsArr[i]['n'])) {
                hasGSec = true;
                gFields.push(newFieldsArr[i]);
              } else if (aSecArr.includes(newFieldsArr[i]['n'])) {
                hasASec = true;
                aFields.push(newFieldsArr[i]);
              } else if (eSecArr.includes(newFieldsArr[i]['n'])) {
                hasESec = true;
                eFields.push(newFieldsArr[i]);
              }
            }

            ;

            if (hasGSec) {
              var _loop = function _loop(_i10) {
                var eN = gFields[_i10]['n'];

                var eV = gFields[_i10]['v'].toString().trim();

                var eleI = _profileData__WEBPACK_IMPORTED_MODULE_2__.iabKeys.findIndex(function (pK) {
                  return pK === eN;
                });

                var eleS = _profileData__WEBPACK_IMPORTED_MODULE_2__.pSels[eleI];

                if (gFields.length === 1) {
                  ifGEle = '$("' + eleS + '").length';
                } else {
                  if (_i10 === gFields.length - 1) {
                    ifGEle = ifGEle + '$("' + eleS + '").length';
                  } else {
                    ifGEle = ifGEle + '$("' + eleS + '").length&&';
                  }
                }

                ;

                if (eN === 'gender') {
                  setGVal = setGVal + '$("#select2-chosen-2").click().focusin().focusout().blur();$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                } else if (eN === 'pronoun') {
                  setGVal = setGVal + '$("#select2-chosen-4").click().focusin().focusout().blur();$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                } else {
                  setGVal = setGVal + '$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';
                }

                ;

                if (gFields.length === 1) {
                  checkGVal = '$("' + eleS + '").attr("value")==="' + eV + '"';
                } else {
                  if (_i10 === gFields.length - 1) {
                    checkGVal = checkGVal + '$("' + eleS + '").attr("value")==="' + eV + '"';
                  } else {
                    checkGVal = checkGVal + '$("' + eleS + '").attr("value")==="' + eV + '"&&';
                  }
                }

                ;
              };

              for (var _i10 = 0; _i10 < gFields.length; _i10++) {
                _loop(_i10);
              }

              ;
            }

            ;

            if (hasASec) {
              var _loop2 = function _loop2(_i11) {
                var eN = aFields[_i11]['n'];

                var eV = aFields[_i11]['v'].toString().trim();

                var eleI = _profileData__WEBPACK_IMPORTED_MODULE_2__.iabKeys.findIndex(function (pK) {
                  return pK === eN;
                });

                var eleS = _profileData__WEBPACK_IMPORTED_MODULE_2__.pSels[eleI];

                if (aFields.length === 1) {
                  ifAEle = '$("' + eleS + '").length';
                } else {
                  if (_i11 === aFields.length - 1) {
                    ifAEle = ifAEle + '$("' + eleS + '").length';
                  } else {
                    ifAEle = ifAEle + '$("' + eleS + '").length&&';
                  }
                }

                ;
                setAVal = setAVal + '$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';

                if (aFields.length === 1) {
                  checkAVal = '$("' + eleS + '").attr("value")==="' + eV + '"';
                } else {
                  if (_i11 === aFields.length - 1) {
                    checkAVal = checkAVal + '$("' + eleS + '").attr("value")==="' + eV + '"';
                  } else {
                    checkAVal = checkAVal + '$("' + eleS + '").attr("value")==="' + eV + '"&&';
                  }
                }

                ;
              };

              for (var _i11 = 0; _i11 < aFields.length; _i11++) {
                _loop2(_i11);
              }

              ;
            }

            ;

            if (hasESec) {
              var _loop3 = function _loop3(_i12) {
                var eN = eFields[_i12]['n'];

                var eV = eFields[_i12]['v'].toString().trim();

                var eleI = _profileData__WEBPACK_IMPORTED_MODULE_2__.iabKeys.findIndex(function (pK) {
                  return pK === eN;
                });

                var eleS = _profileData__WEBPACK_IMPORTED_MODULE_2__.pSels[eleI];

                if (eFields.length === 1) {
                  ifEEle = '$("' + eleS + '").length';
                } else {
                  if (_i12 === eFields.length - 1) {
                    ifEEle = ifEEle + '$("' + eleS + '").length';
                  } else {
                    ifEEle = ifEEle + '$("' + eleS + '").length&&';
                  }
                }

                ;
                setEVal = setEVal + '$("' + eleS + '").click().focusin().prop("value","' + eV + '").focusout().blur();';

                if (eFields.length === 1) {
                  checkEVal = '$("' + eleS + '").attr("value")==="' + eV + '"';
                } else {
                  if (_i12 === eFields.length - 1) {
                    checkEVal = checkEVal + '$("' + eleS + '").attr("value")==="' + eV + '"';
                  } else {
                    checkEVal = checkEVal + '$("' + eleS + '").attr("value")==="' + eV + '"&&';
                  }
                }

                ;
              };

              for (var _i12 = 0; _i12 < eFields.length; _i12++) {
                _loop3(_i12);
              }

              ;
            }

            ; //-------------------------------------------------------------------------------------------------

            var spDetails = null;
            var spResult = null;
            var page1Code = "(()=>{const insertCreds=setInterval(()=>{const loginInput=document.getElementById(\"login-email\");const passInput=document.getElementById(\"login-password\");const loginButton=document.getElementById(\"btnLoginSubmit\");if(loginInput&&passInput&&loginButton){clearInterval(insertCreds);loginInput.value=\"" + upObj.u + "\";passInput.value=\"" + upObj.p + "\";setTimeout(()=>{loginButton.click()},500)}},500)})();";
            var profBOpts = {
              clearcache: 'no',
              clearsessioncache: 'no',
              location: 'no',
              hidden: 'yes',
              hardwareback: 'no',
              hidenavigationbuttons: 'yes',
              hideurlbar: 'yes',
              fullscreen: 'yes',
              shouldPauseOnSuspend: 'no'
            };
            var profBURL = 'https://once.deputy.com/my/#profile/edit-basic';
            var profB = this.iab.create(profBURL, '_blank', profBOpts);

            var pM = function pM(data) {
              _this16.logger.info('[IABServ|saveProfile] (' + data.type + '): ' + data.url);
            }; //-------------------------------------------------------------------------------------------------


            this.eventServ.subscribe('iabTO', function (tf) {
              if (tf) {
                spResult = false;
                profB.close();
              }

              ;

              _this16.eventServ.destroy('iabTO');
            });
            var G1 = 0;
            var A1 = 0;
            var E1 = 0;
            var DONE1 = 0;
            profB.on('loadstop').subscribe(function (lSD) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
                var skipG, skipA, skipE;
                return regeneratorRuntime.wrap(function _callee31$(_context31) {
                  while (1) {
                    switch (_context31.prev = _context31.next) {
                      case 0:
                        spDetails = lSD.url;
                        pM(lSD);

                        if (lSD.url.includes('login?redirect_url')) {
                          profB.executeScript({
                            code: page1Code
                          });
                        }

                        ;

                        if (lSD.url.replace('https://once.deputy.com/my/#profile/', '') === 'edit-basic') {
                          G1++;

                          if (G1 === 1) {
                            this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "GENERAL"...');

                            if (!hasGSec) {
                              skipG = "document.querySelector(\"#btnMenuItemMainAddress > a\").click()";
                            } else {
                              skipG = "\n          (()=>{const IfGLoop=setInterval(()=>{if(" + ifGEle + "){clearInterval(IfGLoop);setTimeout(()=>{" + setGVal + "const SetGLoop=setInterval(()=>{if(" + checkGVal + "){clearInterval(SetGLoop);setTimeout(()=>{" + submitGSec + "const SubGLoop=setInterval(()=>{if(" + alertGSec + "){clearInterval(SubGLoop);setTimeout(()=>{document.querySelector(\"#btnMenuItemMainAddress > a\").click()},1000)}},250)},1000)}},250)},1000)}},250)})();";
                            }

                            ;
                            profB.executeScript({
                              code: "var sheriffG1=0;setTimeout(()=>{sheriffG1++;var sheriffGURL=window.location.href.toString().replace(\"https://once.deputy.com/my/#profile/\",\"\");if(sheriffGURL===\"edit-basic\"&&sheriffG1===1){" + skipG + "}},1000)"
                            });
                          } else {
                            this.logger.info('[Profile|saveProfile] (No Doubles!) General.');
                          }
                        }

                        ;

                        if (lSD.url.replace('https://once.deputy.com/my/#profile/', '') === 'edit-main-address') {
                          A1++;

                          if (A1 === 1) {
                            this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "ADDRESS"...');

                            if (!hasASec) {
                              skipA = 'document.querySelector("#btnMenuItemEmergencyAddress > a").click()';
                            } else {
                              skipA = "\n          (()=>{const IfALoop=setInterval(()=>{if(" + ifAEle + "){clearInterval(IfALoop);setTimeout(()=>{" + setAVal + "const SetALoop=setInterval(()=>{if(" + checkAVal + "){clearInterval(SetALoop);setTimeout(()=>{" + submitASec + "const SubALoop=setInterval(()=>{if(" + alertASec + "){clearInterval(SubALoop);setTimeout(()=>{document.querySelector(\"#btnMenuItemEmergencyAddress > a\").click()},1000)}},250)},1000)}},250)},1000)}},250)})();";
                            }

                            ;
                            profB.executeScript({
                              code: "let sheriffA1=0;setTimeout(()=>{sheriffA1++;var sheriffAURL=window.location.href.toString().replace(\"https://once.deputy.com/my/#profile/\",\"\");if(sheriffAURL===\"edit-main-address\"&&sheriffA1===1){" + skipA + "}},1000)"
                            });
                          } else {
                            this.logger.info('[Profile|saveProfile] (No Doubles!) Address.');
                          }
                        }

                        if (lSD.url.replace('https://once.deputy.com/my/#profile/', '') === 'edit-emergency-address') {
                          E1++;

                          if (E1 === 1) {
                            this.logger.info('[iabServ|saveProfile] (ExecuteCode) for "EMERGENCY"...');

                            if (!hasESec) {
                              skipE = 'window.location.href="https://google.com"';
                            } else {
                              skipE = "\n          (()=>{const IfELoop=setInterval(()=>{if(" + ifEEle + "){clearInterval(IfELoop);setTimeout(()=>{" + setEVal + "const SetELoop=setInterval(()=>{if(" + checkEVal + "){clearInterval(SetELoop);setTimeout(()=>{" + submitESec + "const SubELoop=setInterval(()=>{if(" + alertESec + "){clearInterval(SubELoop);setTimeout(()=>{window.location.href=\"https://google.com\"},1000)}},250)},1000)}},250)},1000)}},250)})();";
                            }

                            ;
                            profB.executeScript({
                              code: "let sheriffE1=0;setTimeout(()=>{sheriffE1++;var sheriffEURL=window.location.href.toString().replace(\"https://once.deputy.com/my/#profile/\",\"\");if(sheriffEURL===\"edit-emergency-address\"&&sheriffE1===1){" + skipE + "}},1000)"
                            });
                          } else {
                            this.logger.info('[Profile|saveProfile] (No Doubles!) Emergency.');
                          }
                        }

                        if (lSD.url.includes('google.com')) {
                          DONE1++;

                          if (DONE1 === 1) {
                            this.logger.info('[Profile|saveProfile] (Reached GOOGLE.COM >>> CLOSING!)...');
                            spResult = true;
                            profB.close();
                          } else {
                            this.logger.info('[Profile|saveProfile] (No Doubles!) DONE GOOGLE.');
                          }
                        }

                        ;

                      case 10:
                      case "end":
                        return _context31.stop();
                    }
                  }
                }, _callee31, this);
              }));
            });
            profB.on('loaderror').subscribe(function (m) {
              _this16.logger.info('[iabServ|saveProfile] (LOAD ERROR): ' + m.message);
            });
            profB.on('exit').subscribe(function () {
              _this16.eventServ.publish('iabTO', false);

              _this16.eventServ.publish('saveProfileDone', spResult);
            });
          }
        }]);

        return IABService;
      }();

      _IABService.ctorParameters = function () {
        return [{
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__.InAppBrowser
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__.NGXLogger
        }, {
          type: _events_service__WEBPACK_IMPORTED_MODULE_0__.EventsService
        }];
      };

      _IABService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      }) ////////////////////////////////////////////////////////////////////////////////////////////////////
      ], _IABService);
      /***/
    },

    /***/
    70231:
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    52907:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col profile\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar profile\">\n                                <div class=\"sheriff-title-leftanimbar-inner profile\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title profile\">\n                                    <div class=\"sheriff-title tight-wrap profile\">Profile</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring profile\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle profile hcl-progcirc profile\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch profile\">\n                                        <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch profile\"></div>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star profile\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo profile\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div (click)=\"doSaveProfile(null)\" class=\"sheriff-page-savebtn-outter-wrapper profile ion-activatable ripple-parent\">\n                                  <div class=\"shouldsave-indic-wrapper\">\n                                      <ion-icon *ngIf=\"shouldSave\" class=\"shouldsave-indic-ico animate__animated animate__fadeIn\" name=\"ellipse\"></ion-icon>\n                                  </div>\n                                  <div [class.halfbrightness]=\"!shouldSave\" class=\"sheriff-addtsheet-header-btn-wrapper save-btn\">\n                                      <ion-icon class=\"sheriff-addtsheet-header-ico save-btn-ico\" name=\"save\"></ion-icon>\n                                  </div>\n                                  <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                                <div class=\"sheriff-page-backbtn-wrapper profile\">\n                                    <ion-back-button [disabled]=\"shouldSave\" icon=\"chevron-back-outline\" class=\"sheriff-backbtn profile\" defaultHref=\"/tabs\"></ion-back-button>\n                                    <div *ngIf=\"shouldSave\" (click)=\"promptSaveProfile()\" class=\"sheriff-header-shouldsave-shield backshield\"></div>\n                                </div>\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button profile\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngStyle]=\"{'top':kbAdjust}\" class=\"sheriff-content tab-content profile\">\n    <!-- PAGE REFRESHER -->\n    <ion-refresher class=\"sheriff-refresher page profile\" slot=\"fixed\" (ionRefresh)=\"doProfileRefresh($event)\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <!-- PAGE-CONTENT -->\n    <!-- CONTENT HEADING -->\n    <div class=\"sheriff-tabcontent-mainheading-wrapper profile\">\n        <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid profile\">\n            <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 profile\">\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 profile\">\n                </ion-col>\n                <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 profile\">\n                  <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-profile.png\">\n                </ion-col>\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 profile\">\n                  <div class=\"psection-complete-wrapper all\">\n                    <div class=\"pcomplete-all-title-div\">complete</div>\n                    <div class=\"pcomplete-all values-div\">\n                      <span class=\"pseccomp-val all\">{{pComplete.all.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl all\">{{pComplete.all.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.all.v===pComplete.all.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc all\">{{pComplete.all.p}}%</span>\n                    </div>\n                  </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <!-- CONTENT WRAPPER -->\n    <div class=\"sheriff-page-content-outter-wrapper profile-page\">\n        <ion-grid class=\"sheriff-grid profile-info-form main-grid\">\n          <ion-row class=\"sheriff-row profile-info-form main-row photo-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col photo-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text photo\">\n                PHOTO\n                <div class=\"psection-complete-wrapper photo\">\n                  <span class=\"pseccomp-val photo\">{{pComplete.photo.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl photo\">{{pComplete.photo.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.photo.v===pComplete.photo.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc photo\">{{pComplete.photo.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row photo-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid photo-grid\">\n                <ion-row class=\"sheriff-row profile-form-row photo-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col photo-col ico-col\">\n                    <ion-icon name=\"image\" [ngStyle]=\"{'color':pFieldFocus==='photo'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico photo-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"sheriff-col profile-form-col photo-col input-col image\">\n                    <div [ngStyle]=\"{'border-color':profileData.photo.hasChanged?'var(--ion-color-success-78)':'#212121'}\" class=\"profile-photo-outter-wrapper\">\n                      <img src={{profileData.photo.value.nativeUri}} class=\"profile-photo-img-avatar\">\n                    </div>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col photo-col input-col info\">\n                    <ion-grid class=\"sheriff-grid profile-photo-info-grid\">\n                      <ion-row class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"cloud-upload-outline\" class=\"pphoto-info-ico setdate\"></ion-icon>\n                          <span class=\"pphoto-info-val setdate\">{{profileData.photo.value.setDate}}</span>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"person-outline\" class=\"pphoto-info-ico setby\"></ion-icon>\n                          <img *ngIf=\"profileData.photo.value.setBy===null\" src=\"../../assets/img/sheriff-deputy-logoname-white-small.png\" class=\"profile-photo-setby-small\">\n                          <span *ngIf=\"profileData.photo.value.setBy!==null\" class=\"pphoto-info-val setby\">{{profileData.photo.value.setBy}}</span>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row *ngIf=\"profileData.photo.value.dims!=='NK'\" class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"expand-outline\" class=\"pphoto-info-ico dims\"></ion-icon>\n                          <span class=\"pphoto-info-val dims\">{{profileData.photo.value.dims}}</span><span *ngIf=\"profileData.photo.value.dims!=='-'\" class=\"photo-size-px-suffix\">px</span>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"sheriff-row profile-photo-info-row\">\n                        <ion-col class=\"sheriff-col profile-photo-info-col\">\n                          <ion-icon name=\"document-outline\" class=\"pphoto-info-ico size\"></ion-icon>\n                          <span class=\"pphoto-info-val size\">{{profileData.photo.value.size.s}}</span><span class=\"pphoto-info-val size suffix\">{{profileData.photo.value.size.b}}</span>\n                          <span *ngIf=\"profileData.photo.value.type!=='-'\" class=\"pphoto-info-val type\">{{profileData.photo.value.type}}</span>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col photo-col button-col\">\n                    <ion-grid class=\"sheriff-grid profile-photo-btn-grid\">\n                      <ion-row class=\"sheriff-row profile-photo-btn-row change-row\">\n                        <ion-col class=\"sheriff-col profile-photo-btn-col change-col camera-col\">\n                          <ion-button (click)=\"doTakePhoto()\" class=\"sheriff-btn profile-photo-camera-btn\">\n                            <ion-icon name=\"add\" class=\"sheriff-btn-ico profile-photo-btn-ico add\"></ion-icon>\n                            <ion-icon name=\"camera\" class=\"sheriff-btn-ico profile-photo-btn-ico camera\"></ion-icon>\n                          </ion-button>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col profile-photo-btn-col change-col file-col\">\n                          <ion-button (click)=\"doSelectPhoto()\" class=\"sheriff-btn profile-photo-file-btn\">\n                            <ion-icon name=\"add\" class=\"sheriff-btn-ico profile-photo-btn-ico add\"></ion-icon>\n                            <ion-icon name=\"folder\" class=\"sheriff-btn-ico profile-photo-btn-ico select\"></ion-icon>\n                          </ion-button>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"sheriff-row profile-photo-btn-row delete-row\">\n                        <ion-col class=\"sheriff-col profile-photo-btn-col change-col delete-col\">\n                          <ion-button [disabled]=\"\" (click)=\"doDeletePhoto()\" class=\"sheriff-btn profile-photo-delete-btn\">\n                            <ion-icon name=\"trash\" class=\"sheriff-btn-ico profile-photo-btn-ico delete\"></ion-icon>\n                            <div class=\"sheriff-btn-txt take-photo-txt\">remove photo</div>\n                          </ion-button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n          <!-- GENERAL ----------------------------------------------------------------------------------------->\n          <ion-row class=\"sheriff-row profile-info-form main-row general-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col general-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text general\">\n                GENERAL\n                <div class=\"psection-complete-wrapper general\">\n                  <span class=\"pseccomp-val general\">{{pComplete.general.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl general\">{{pComplete.general.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.general.v===pComplete.general.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc general\">{{pComplete.general.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row general-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid general-grid\">\n                <ion-row class=\"sheriff-row profile-form-row general-row names-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col names-col ico-col\">\n                    <ion-icon name=\"person\" [ngStyle]=\"{'color':pFieldFocus==='fname'||pFieldFocus==='lname'||pFieldFocus==='dname'||pFieldFocus==='dob'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico names-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper first-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item first-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.fname.hasChanged}\" class=\"sheriff-profile-input-item-label first-name\">First Name</ion-label>\n                        <ion-input id=\"fname-input-id\" #pDGfname [value]=\"profileData.fname.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('fname')\" (ionBlur)=\"onInputBlur('fname',pDGfname.value)\" class=\"sheriff-profile-input first-name\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper last-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item last-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.lname.hasChanged}\" class=\"sheriff-profile-input-item-label last-name\">Last Name</ion-label>\n                        <ion-input id=\"lname-input-id\" #pDGlname [value]=\"profileData.lname.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('lname')\" (ionBlur)=\"onInputBlur('lname',pDGlname.value)\" class=\"sheriff-profile-input last-name\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"sheriff-col\"></ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper display-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item display-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.dname.hasChanged}\" class=\"sheriff-profile-input-item-label display-name\">Display Name</ion-label>\n                        <ion-input id=\"dname-input-id\" #pDGdname [value]=\"profileData.dname.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('dname')\" (ionBlur)=\"onInputBlur('dname',pDGdname.value)\" class=\"sheriff-profile-input display-name\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col (click)=\"openDOBDatePicker()\" size=\"5\" class=\"sheriff-col profile-form-col general-col dob-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item dob-input-item\">\n                      <ion-label position=\"stacked\" class=\"sheriff-profile-input-item-label dob\"><span [ngClass]=\"{'pfield-changed':profileData.dob.hasChanged}\" [ngStyle]=\"{'color':dobDPOpen?'var(--ion-color-primary)':'#848484'}\" class=\"profile-label-dob\">DOB</span><ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked dob\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked dob\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner dob\" name=\"dots\"></ion-spinner></ion-label>\n                      <ion-input id=\"dob-input-id\" [ngStyle]=\"{'--show-full-highlight':dobDPOpen===true?'1':'0'}\" [readonly]=\"true\" [value]=\"profileData.dob.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" class=\"sheriff-profile-input dob\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row general-row email-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col email-col ico-col\">\n                    <ion-icon name=\"mail\" [ngStyle]=\"{'color':pFieldFocus==='email'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico email-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col general-col email-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item email-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.email.hasChanged}\" class=\"sheriff-profile-input-item-label email\">Email</ion-label>\n                      <ion-input id=\"email-input-id\" #pDGemail [value]=\"profileData.email.value\" [inputmode]=\"'email'\" [pattern]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('email')\" (ionBlur)=\"onInputBlur('email',pDGemail.value)\" class=\"sheriff-profile-input email\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row general-row phone-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col phone-col ico-col\">\n                    <ion-icon name=\"phone-portrait\" [ngStyle]=\"{'color':pFieldFocus==='phone'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico phone-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col general-col phone-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item phone-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.phone.hasChanged}\" class=\"sheriff-profile-input-item-label phone\">Phone</ion-label>\n                      <ion-input id=\"phone-input-id\" #pDGphone [value]=\"profileData.phone.value\" [inputmode]=\"'tel'\" [pattern]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('phone')\" (ionBlur)=\"onInputBlur('phone',pDGphone.value)\" class=\"sheriff-profile-input phone\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row general-row gender-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col general-col gender-col ico-col\">\n                    <ion-icon name=\"transgender\" [ngStyle]=\"{'color':genProCustOpen.gender||genProCustOpen.pronoun||genProCustOpen.custompn?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico general-ico gender-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col general-col gender-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item gender-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.gender.hasChanged}\" class=\"sheriff-profile-input-item-label gender\">Gender<ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked gender\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked gender\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner gender\" name=\"dots\"></ion-spinner></ion-label>\n                      <ion-select id=\"gender-input-id\" #pDGgender [value]=\"profileData.gender.value\" [interfaceOptions]=\"genderPopOpts\" [mode]=\"'md'\" [interface]=\"'popover'\" [selectedText]=\"profileData.gender.label\" (ionChange)=\"changeGender(pDGgender.value)\" (ionFocus)=\"onInputFocus('gender')\" (ionCancel)=\"onSelectCancel('gender')\" (ionBlur)=\"onInputBlur('gender',pDGgender.value)\" [placeholder]=\"'Select'\" class=\"sheriff-profile-input gender\">\n                        <ion-select-option class=\"sheriff-profile-genderopt-class\" *ngFor=\"let genOpt of profileData.gender.options\" [value]=\"genOpt.value\" [ngClass]=\"{'sheriff-profile-genopt-selected-class':pDGgender.value===genOpt.value}\">{{genOpt.label}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col *ngIf=\"profileData.pronoun.value==='4'\" class=\"profile-custom-pronoun-edit-btn-col\">\n                    <ion-button (click)=\"editCustomPronoun(profileData.pronoun.options[4].label)\" class=\"sheriff-btn profile-custom-pronoun-btn\">\n                      <ion-icon class=\"sheriff-btn-ico profile-custom-pronoun-btn-ico\" name=\"add\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col class=\"sheriff-col profile-form-col general-col pronoun-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item pronoun-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.pronoun.hasChanged}\" class=\"sheriff-profile-input-item-label pronoun\">Pronouns<ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked pronoun\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked pronoun\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner pronoun\" name=\"dots\"></ion-spinner></ion-label>\n                      <ion-select id=\"pronoun-input-id\" #pDGpronoun [value]=\"profileData.pronoun.value\" [interfaceOptions]=\"pronounPopOpts\" [mode]=\"'md'\" [interface]=\"'popover'\" [selectedText]=\"profileData.pronoun.label\" (ionChange)=\"changePronoun(pDGpronoun.value)\" (ionFocus)=\"onInputFocus('pronoun')\" (ionCancel)=\"onSelectCancel('pronoun')\" (ionBlur)=\"onInputBlur('pronoun',pDGpronoun.value)\" [placeholder]=\"'Select'\" class=\"sheriff-profile-input pronoun\">\n                        <ion-select-option class=\"sheriff-profile-pronounopt-class\" *ngFor=\"let pnOpt of profileData.pronoun.options\" [value]=\"pnOpt.value\" [ngClass]=\"{'sheriff-profile-pronounopt-selected-class':pDGpronoun.value===pnOpt.value}\">{{pnOpt.label}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row kiosk-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col kiosk-col ico-col\">\n                    <ion-icon name=\"keypad\" [ngStyle]=\"{'color':pFieldFocus==='pin'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico pin-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col general-col names-col input-col\">\n                    <div class=\"profile-names-input-wrapper display-name\">\n                      <ion-item class=\"sheriff-profile-input-item name-input-item display-name\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.pin.hasChanged}\" class=\"sheriff-profile-input-item-label pin\">PIN<ion-icon *ngIf=\"pIsLocked\" class=\"profile-label-lockitem locked pin\" name=\"lock-closed\"></ion-icon><ion-icon *ngIf=\"!pIsLocked\" class=\"profile-label-lockitem unlocked pin\" name=\"lock-open\"></ion-icon><ion-spinner [duration]=\"350\" *ngIf=\"tryingUnlock\" class=\"profile-label-lockitem-spinner pin\" name=\"dots\"></ion-spinner></ion-label>\n                        <ion-input id=\"pin-input-id\" #pDGpin [value]=\"profileData.pin.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" [min]=\"'4'\" [max]=\"'4'\" (ionFocus)=\"onInputFocus('pin')\" (ionBlur)=\"onInputBlur('pin',pDGpin.value)\" class=\"sheriff-profile-input pin\"></ion-input>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n          <!-- ADDRESS ----------------------------------------------------------------------------------------->\n          <ion-row class=\"sheriff-row profile-info-form main-row address-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col address-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text address\">\n                ADDRESS\n                <div class=\"psection-complete-wrapper address\">\n                  <span class=\"pseccomp-val address\">{{pComplete.address.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl address\">{{pComplete.address.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.address.v===pComplete.address.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc address\">{{pComplete.address.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row address-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid address-grid\">\n                <ion-row class=\"sheriff-row profile-form-row address-row1\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col address-col name-col ico-col\">\n                    <ion-icon name=\"location\" [ngStyle]=\"{'color':pFieldFocus==='street'||pFieldFocus==='city'||pFieldFocus==='state'||sModalIsOpen||pFieldFocus==='pcode'||pFieldFocus==='country'||cModalIsOpen?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico address-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"sheriff-col profile-form-col address-col street-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item address-input-item address-street\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.street.hasChanged}\" class=\"sheriff-profile-input-item-label address-street\">Street</ion-label>\n                      <ion-input id=\"street-input-id\" #pDAstreet [value]=\"profileData.street.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('street')\" (ionBlur)=\"onInputBlur('street',pDAstreet.value)\" class=\"sheriff-profile-input address-street\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row address-row2\">\n                  <ion-col size=\"2\" class=\"sheriff-col\"></ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col city-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item address-input-item address-city\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.city.hasChanged}\" class=\"sheriff-profile-input-item-label address-city\">City</ion-label>\n                      <ion-input id=\"city-input-id\" #pDAcity [value]=\"profileData.city.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('city')\" (ionBlur)=\"onInputBlur('city',pDAcity.value)\" class=\"sheriff-profile-input address-city\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col pcode-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item address-input-item address-pcode\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.pcode.hasChanged}\" class=\"sheriff-profile-input-item-label address-pcode\">Postcode</ion-label>\n                      <ion-input id=\"pcode-input-id\" #pDApcode [value]=\"profileData.pcode.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('pcode')\" (ionBlur)=\"onInputBlur('pcode',pDApcode.value)\" class=\"sheriff-profile-input address-pcode\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row profile-form-row address-row3\">\n                  <ion-col size=\"2\" class=\"sheriff-col\"></ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col state-col input-col\">\n                    <div (click)=\"changeState(profileData.state.value)\" class=\"ion-activatable ripple-parent\">\n                      <ion-item [ngClass]=\"{'item-has-focus':sModalIsOpen}\" class=\"sheriff-profile-input-item address-input-item address-state\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.state.hasChanged}\" class=\"sheriff-profile-input-item-label address-state\">State</ion-label>\n                        <ion-select [disabled]=\"true\" class=\"sheriff-profile-input address-state-select\" [mode]=\"'md'\" [placeholder]=\"'Select'\" [value]=\"profileData.state.value\" [selectedText]=\"profileData.state.label\"></ion-select>\n                      </ion-item>\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col address-col country-col input-col\">\n                    <div (click)=\"changeCountry(profileData.country.value)\" class=\"ion-activatable ripple-parent\">\n                      <ion-item [ngClass]=\"{'item-has-focus':cModalIsOpen}\" class=\"sheriff-profile-input-item address-input-item address-country\">\n                        <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.country.hasChanged}\" class=\"sheriff-profile-input-item-label address-country\">Country</ion-label>\n                        <ion-select [disabled]=\"true\" class=\"sheriff-profile-input address-country-select\" [mode]=\"'md'\" [placeholder]=\"'Select'\" [value]=\"profileData.country.value\" [selectedText]=\"profileData.country.label\"></ion-select>\n                      </ion-item>\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n          <!-- EMERGENCY ----------------------------------------------------------------------------------------->\n          <ion-row class=\"sheriff-row profile-info-form main-row emergency-row heading-row\">\n            <ion-col class=\"sheriff-col profile-info-form main-col emergency-col heading-col\">\n              <div class=\"profile-main-section-header-gradient\"></div>\n              <div class=\"profile-main-title-text emergency\">\n                EMERGENCY\n                <div class=\"psection-complete-wrapper emergency\">\n                  <span class=\"pseccomp-val emergency\">{{pComplete.emergency.v}}</span><span class=\"pseccomp-sep\">/</span><span class=\"pseccomp-ttl emergency\">{{pComplete.emergency.t}}</span><span class=\"pseccomp-sep\">-</span><span [ngStyle]=\"{'color':pComplete.emergency.v===pComplete.emergency.t?'var(--ion-color-success-68)':'#848484'}\" class=\"pseccomp-perc emergency\">{{pComplete.emergency.p}}%</span>\n                </div>\n              </div>\n              <div class=\"profile-main-section-header-gradient\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sheriff-row profile-info-form main-row emergency-row fields-row\">\n            <ion-col size=\"12\" class=\"sheriff-col\">\n              <ion-grid class=\"sheriff-grid profile-form-grid emergency-grid\"> \n                <ion-row class=\"sheriff-row profile-form-row emergency-row name-row\">\n                  <ion-col size=\"2\" class=\"sheriff-col profile-form-col emergency-col name-col ico-col\">\n                    <ion-icon name=\"medkit\" [ngStyle]=\"{'color':pFieldFocus==='ename'||pFieldFocus==='ephone'?'var(--ion-color-primary)':'#848484'}\" class=\"sheriff-profile-form-ico emergency-ico name-ico\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col emergency-col name-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item name-input-item display-name\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.ename.hasChanged}\" class=\"sheriff-profile-input-item-label emergency-name\">Name</ion-label>\n                      <ion-input id=\"ename-input-id\" #pDEname [value]=\"profileData.ename.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('ename')\" (ionBlur)=\"onInputBlur('ename',pDEname.value)\" class=\"sheriff-profile-input emergency-name\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"5\" class=\"sheriff-col profile-form-col emergency-col phone-col input-col\">\n                    <ion-item class=\"sheriff-profile-input-item emergency-phone-input-item\">\n                      <ion-label position=\"stacked\" [ngClass]=\"{'pfield-changed':profileData.ephone.hasChanged}\" class=\"sheriff-profile-input-item-label emergency-phone\">Phone</ion-label>\n                      <ion-input id=\"ephone-input-id\" #pDEphone [value]=\"profileData.ephone.value\" [inputmode]=\"'text'\" [mode]=\"'md'\" [type]=\"'text'\" (ionFocus)=\"onInputFocus('ephone')\" (ionBlur)=\"onInputBlur('ephone',pDEphone.value)\" class=\"sheriff-profile-input emergency-phone\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <!-- END OF PAGE-CONTENT -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_profile_profile_module_ts-es5.js.map