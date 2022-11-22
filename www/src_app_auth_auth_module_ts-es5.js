(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_auth_auth_module_ts"], {
    /***/
    40431:
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPageRoutingModule": function AuthPageRoutingModule() {
          return (
            /* binding */
            _AuthPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.page */
      13561);

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
      }];

      var _AuthPageRoutingModule = function AuthPageRoutingModule() {
        _classCallCheck(this, AuthPageRoutingModule);
      };

      _AuthPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AuthPageRoutingModule);
      /***/
    },

    /***/
    71674:
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPageModule": function AuthPageModule() {
          return (
            /* binding */
            _AuthPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.page */
      13561);
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-routing.module */
      40431);

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
      }];

      var _AuthPageModule = function AuthPageModule() {
        _classCallCheck(this, AuthPageModule);
      };

      _AuthPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage]
      })], _AuthPageModule);
      /***/
    },

    /***/
    13561:
    /*!***********************************!*\
      !*** ./src/app/auth/auth.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPage": function AuthPage() {
          return (
            /* binding */
            _AuthPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./auth.page.html */
      21643);
      /* harmony import */


      var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.page.scss */
      90957);
      /* harmony import */


      var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/keyboard */
      87730);
      /* harmony import */


      var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/status-bar */
      64909);
      /* harmony import */


      var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/app */
      42138);
      /* harmony import */


      var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/dialog */
      63540);
      /* harmony import */


      var _animations_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../animations/index */
      63074);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/events.service */
      80106);
      /* harmony import */


      var _services_deputy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../services/deputy.service */
      22092);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../services/storage.service */
      71188);
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/firebase.service */
      19446);
      /* harmony import */


      var _services_detail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/detail.service */
      52153);
      /* harmony import */


      var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../services/sqlite.service */
      90636);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/datetime.service */
      12826);
      /* harmony import */


      var _modals_firstrun_firstrun_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../modals/firstrun/firstrun.page */
      1119);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var _services_appTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../services/appTypes */
      38670);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__); //////////////////////////////////////////////////////////////////////////////////////


      var _AuthPage = /*#__PURE__*/function () {
        //////////////////////////////////////////////////////////////////////////////////////
        function AuthPage(navController, evServ, deputy, storeServ, detailServ, sqlServ, dT, router, platform, logger, zone, modalCtrl, fireServ) {
          var _this = this;

          _classCallCheck(this, AuthPage);

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
          this.fireServ = fireServ; //////////////////////////////////////////////////////////////////////////////////////

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
          this.router.events.subscribe(function (event) {
            if (event && event.url) {
              _this.selectedPath = event.url;
            }
          });
        } //////////////////////////////////////////////////////////////////////////////////////


        _createClass(AuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.logger.info('[Auth|ngOnInit] Fired!');
            this.platform.ready().then(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        window.open = cordova.InAppBrowser.open;
                        _context.next = 3;
                        return this.sqlServ.doInitSQLServ();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.logger.info('[Auth|ionViewWillEnter] ()...');
            this.kbHeightCalcRunOnce = 0;

            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({
              color: '#121212'
            });

            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
              overlay: false
            });

            this.startChecks();
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.logger.info('[Auth|ionViewWillLeave] ()...');

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this3 = this;

            this.logger.info('[Auth|ionViewDidEnter] ()...');
            var waitForEle = setInterval(function () {
              if (jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').length) {
                clearInterval(waitForEle);
                setTimeout(function () {
                  var sTitlePx = Math.round(jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').outerWidth());
                  jquery__WEBPACK_IMPORTED_MODULE_16__('ion-grid.sheriff-auth-sunicon-grid').css('min-width', sTitlePx + 'px').css('max-width', sTitlePx + 'px').css('width', sTitlePx + 'px');
                }, 1000);
              }
            }, 200);

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardWillShow', function (info) {
              _this3.kbHeightCalcRunOnce++;

              if (_this3.kbHeightCalcRunOnce < 2) {
                _this3.myKbICEle = document.getElementById('auth-page-ion-content');
                _this3.myKbPTEle = document.getElementById('sheriff-authpage-title-txt');
                _this3.myKbHelpTxtEle = document.getElementById('sheriff-auth-loginbox-helpertext-wrapper');
                _this3.myKbBtmLine = Math.round(_this3.myKbHelpTxtEle.getBoundingClientRect().bottom);
                _this3.myKbOffsetNum = Math.round(info.keyboardHeight - (_this3.localScreenResObj.height - _this3.myKbBtmLine));
                _this3.myKbTopNum = Math.abs(Math.round(info.keyboardHeight - (_this3.localScreenResObj.height - _this3.myKbBtmLine))) - 32;
              }
            });

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidShow', function () {
              _this3.loginBoxKBAdjust('open');
            });

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidHide', function () {
              _this3.loginBoxKBAdjust('close');
            });
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "hideSplash",
          value: function hideSplash() {
            this.logger.info('[Auth|hideSplash] ()...');

            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
              overlay: true
            });

            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({
              color: '#00000000'
            });

            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-networkstatus-wrapper').addClass('adjust-for-auth-toolbar-overlay');

            var myAniCSS = function myAniCSS(jqEle, animName) {
              return new Promise(function (resolve) {
                var animClassStr = 'animate__animated animate__' + animName + ' animate__fast';
                jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).addClass(animClassStr).on('animationend', function () {
                  jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).removeClass(animClassStr);
                  resolve('done');
                });
              });
            };

            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-logo-img').removeClass('animate__animated animate__headShake animate__infinite');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-titletexttop-wrapper').addClass('animate__animated animate__slideOutUp animate__faster');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-zer0ne-wrapper').addClass('animate__animated animate__slideOutDown animate__faster');
            jquery__WEBPACK_IMPORTED_MODULE_16__('.bar-horizontal').addClass('finished');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-logo-img').prop('src', '../assets/img/slogo-g.png');
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-cutom-splash-text-wrapper.texttop').removeClass('animate__slideInLeft').addClass('animate__slideOutLeft');
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-cutom-splash-text-wrapper.textbottom').removeClass('animate__slideInRight').addClass('animate__slideOutRight');
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper,.sheriff-col.custom-splash-col.middlelogocol').css('background', 'transparent');
            myAniCSS('#sheriff-custom-splash-wrapper', 'fadeOut').then(function () {
              return jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper').hide();
            });
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "loginBoxKBAdjust",
          value: function loginBoxKBAdjust(kbState) {
            this.logger.info('[Auth|loginBoxKBAdjust] (' + kbState + ')');
            var openCDown;
            var closeCDown;
            var offsetPx = this.myKbOffsetNum + 'px';
            var topPx = this.myKbTopNum + 'px';
            var icEle = this.myKbICEle;
            var ptEle = this.myKbPTEle;

            var getOffVal = function getOffVal() {
              return icEle.style.getPropertyValue('--offset-top');
            };

            var setOffVal = function setOffVal() {
              icEle.style.setProperty('--offset-top', offsetPx);
            };

            var unsetOffVal = function unsetOffVal() {
              icEle.style.setProperty('--offset-top', 'unset');
            };

            var getTopVal = function getTopVal() {
              var cS = window.getComputedStyle(ptEle);
              return cS.top;
            };

            var setTopVal = function setTopVal() {
              ptEle.style.setProperty('top', topPx);
            };

            var unsetTopVal = function unsetTopVal() {
              ptEle.style.setProperty('top', 'unset');
            };

            var addOffset = function addOffset() {
              if (getOffVal() === '0px' || getOffVal() === 'unset') {
                setOffVal();
              }
            };

            var remOffset = function remOffset() {
              if (getOffVal() === offsetPx) {
                unsetOffVal();
              }
            };

            var addTop = function addTop() {
              if (getTopVal() === '0px' || getTopVal() === 'unset') {
                setTopVal();
              }
            };

            var remTop = function remTop() {
              if (getTopVal() === topPx) {
                unsetTopVal();
              }
            };

            if (kbState === 'open') {
              (function () {
                openCDown = setTimeout(function () {
                  addOffset();
                  addTop();
                }, 250);
              })();

              clearTimeout(closeCDown);
            } else {
              (function () {
                closeCDown = setTimeout(function () {
                  remOffset();
                  remTop();
                }, 250);
              })();

              clearTimeout(openCDown);
            }
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "checkNetworkScreen",
          value: function checkNetworkScreen() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var sRW, sRH, screenResObj;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[Auth|checkNetworkScreen] ()...');
                      _context2.next = 3;
                      return this.detailServ.getHasNetConn();

                    case 3:
                      this.hasConnection = _context2.sent;
                      this.isConnSub = this.evServ.subscribe('globalHasNetConn', function (newIsConn) {
                        _this4.hasConnection = newIsConn;
                      });
                      _context2.next = 7;
                      return this.platform.width();

                    case 7:
                      sRW = _context2.sent;
                      sRH = this.platform.height();
                      screenResObj = {
                        width: sRW,
                        height: sRH
                      };
                      this.localScreenResObj = screenResObj;
                      this.storeServ.setObject('screenRes', screenResObj);
                      this.evServ.publish('startChecklist', 'networkCheckDone'); // CHECK 1

                      this.checkStoreUUKEmail(); // Next - Do Check #2 (StoreUUKEmail)

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "checkStoreUUKEmail",
          value: function checkStoreUUKEmail() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var sSUUK, sSUEml, sSUFET, tempUUK;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.logger.info('[Auth|checkStoreUUKEmail] ()...');
                      _context3.next = 3;
                      return this.storeServ.getItem('currentUUK');

                    case 3:
                      sSUUK = _context3.sent;
                      _context3.next = 6;
                      return this.storeServ.getItem('userEmail');

                    case 6:
                      sSUEml = _context3.sent;
                      _context3.next = 9;
                      return this.storeServ.getItem('currentFEToken');

                    case 9:
                      sSUFET = _context3.sent;

                      if (sSUUK) {
                        this.gotStoreUUK = true;
                        this.storeUUK = sSUUK;
                        this.deputy.uUK = sSUUK;
                        this.logger.info('[Auth|checkStoreUUKEmail] (SUCCESS) this.gotStoreUUK=' + String(this.gotStoreUUK) + ' | this.storeUUK=' + this.storeUUK);
                      } else {
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
                          tempUUK = this.storeUEml.replace('@', '').replace('.', '');
                          this.storeUUK = tempUUK;
                          this.gotStoreUUK = true;
                          this.deputy.uUK = tempUUK;
                          this.storeServ.setItem(this.deputy.uUK + 'currentUUK', tempUUK);
                        }

                        ;
                      } else {
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
                      } else {
                        this.gotStoreUFET = false;
                        this.storeUFET = null;
                        this.deputy.SServer.FCT.fe_token = null;
                        this.logger.info('[Auth|checkStoreFEToken] (FAIL) this.gotStoreUFET=' + String(this.gotStoreUFET));
                      }

                      ;
                      this.evServ.publish('startChecklist', 'storeUUKEmailCheckDone'); // CHECK 2

                      this.checkDBSetup(); // Next - Do Check #3 (DBSetup)

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "checkDBSetup",
          value: function checkDBSetup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var CMfr, CMud, CMad, checkUDB;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.logger.info('[Auth|checkDBSetup] ()...');

                      if (!(this.deputy.uUK !== null)) {
                        _context5.next = 19;
                        break;
                      }

                      _context5.next = 4;
                      return this.detailServ.getFRSetupDone();

                    case 4:
                      this.FRDone = _context5.sent;
                      this.FRDone ? CMfr = '✔️' : CMfr = '❌';
                      _context5.next = 8;
                      return this.detailServ.getUDBSetupDone();

                    case 8:
                      this.UDBDone = _context5.sent;
                      this.UDBDone ? CMud = '✔️' : CMud = '❌';
                      _context5.next = 12;
                      return this.detailServ.getADBSetupDone();

                    case 12:
                      this.ADBDone = _context5.sent;
                      this.ADBDone ? CMad = '✔️' : CMad = '❌';
                      this.logger.info('[Auth|checkDBSetup] FirstRunDone:' + CMfr + ', UDBSetupDone?:' + CMud + ', ADBSetupDone?:' + CMad);

                      checkUDB = function checkUDB() {
                        if (_this5.FRDone && _this5.UDBDone) {
                          _this5.logger.info('[Auth|checkDBSetup] Running createUserDBConn(' + _this5.deputy.uUK + 'db,true) @ SQLiteService.');

                          _this5.evServ.subscribe('uDBReady', function () {
                            _this5.evServ.destroy('uDBReady');

                            _this5.evServ.publish('startChecklist', 'DBSetupCheckDone'); // CHECK 3


                            _this5.checkDPAuth();
                          });

                          _this5.sqlServ.createUserDBConn(_this5.deputy.uUK + 'db', true);
                        } else {
                          _this5.evServ.publish('startChecklist', 'DBSetupCheckDone'); // CHECK 3


                          _this5.checkDPAuth();
                        }
                      };

                      if (this.ADBDone) {
                        this.logger.info('[Auth|checkDBSetup] Running createAuthDBConn(' + this.deputy.uUK + 'auth,true) @SQLiteService.');
                        this.evServ.subscribe('aDBReady', function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var doCTLRes, upRes;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    this.evServ.destroy('aDBReady');
                                    _context4.next = 3;
                                    return this.fireServ.loginCustomToken();

                                  case 3:
                                    doCTLRes = _context4.sent;

                                    if (doCTLRes) {
                                      _context4.next = 15;
                                      break;
                                    }

                                    _context4.next = 7;
                                    return this.sqlServ.getADBItem('up');

                                  case 7:
                                    upRes = _context4.sent;

                                    if (!upRes.result) {
                                      _context4.next = 11;
                                      break;
                                    }

                                    _context4.next = 11;
                                    return this.fireServ.loginUserEmail(upRes.data);

                                  case 11:
                                    ;
                                    checkUDB();
                                    _context4.next = 16;
                                    break;

                                  case 15:
                                    checkUDB();

                                  case 16:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        });
                        this.sqlServ.createAuthDBConn(this.deputy.uUK + 'auth', true, null);
                      } else {
                        checkUDB();
                      }

                      _context5.next = 25;
                      break;

                    case 19:
                      this.FRDone = false;
                      this.UDBDone = false;
                      this.ADBDone = false;
                      this.logger.info('[Auth|checkDBSetup] SKIPPED: deputy.uUK===null');
                      this.evServ.publish('startChecklist', 'DBSetupCheckDone'); // CHECK 3

                      this.checkDPAuth();

                    case 25:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "checkDPAuth",
          value: function checkDPAuth() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this6 = this;

              var doFail, doSuccess, isExp, doSetAuth, fireO, storeO, dbO, availAObs, getF, getS, getD, latestAObj;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.logger.info('[Auth|checkDPAuth] ()...');

                      doFail = function doFail(got, valid) {
                        _this6.gotDPAuth = got;
                        _this6.dpAuthIsValid = valid;
                        _this6.dpAuthObj = null;

                        _this6.evServ.publish('startChecklist', 'dpAuthTokensCheckDone'); // CHECK 4

                      };

                      doSuccess = function doSuccess(aO) {
                        _this6.gotDPAuth = true;
                        _this6.dpAuthIsValid = true;
                        _this6.dpAuthObj = aO;

                        _this6.evServ.publish('startChecklist', 'dpAuthTokensCheckDone'); // CHECK 4

                      };

                      isExp = function isExp(o) {
                        if (_this6.dT.uTokExpd(o)) {
                          return true;
                        } else {
                          return false;
                        }
                      };

                      doSetAuth = function doSetAuth(o) {
                        _this6.evServ.subscribe('setAuthGVarsDone', function (authResult) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    if (authResult.result) {
                                      this.logger.info('[Auth|checkDPAuth] - [GOOD] - Token Tested VALID');

                                      if (authResult.refresh) {
                                        this.logger.info('[Auth|checkDPAuth] - [===REFRESHED] - Token was Refreshed');
                                        doSuccess(authResult.data);
                                      } else {
                                        this.logger.info('[Auth|checkDPAuth] - [!==REFRESHED] - Token VALID & NOT Refreshed');
                                        doSuccess(o);
                                      }
                                    } else {
                                      this.logger.info('[Auth|checkDPAuth] - [BAD] - Invalid/Unrefreshable Token - Deleting...');
                                      doFail(true, false);
                                    }

                                  case 1:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this);
                          }));
                        });

                        _this6.deputy.setAuthGVars(o);
                      }; // -------------------------------------------------------------------------------


                      fireO = function fireO() {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var _yield$this$fireServ$, result, data, fireAuthObj;

                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  if (!this.hasConnection) {
                                    _context7.next = 18;
                                    break;
                                  }

                                  if (!(this.fireServ.tempUPO || this.gotStoreUFET || this.deputy.uUK)) {
                                    _context7.next = 15;
                                    break;
                                  }

                                  _context7.next = 4;
                                  return this.fireServ.getFireUserAuth();

                                case 4:
                                  _yield$this$fireServ$ = _context7.sent;
                                  result = _yield$this$fireServ$.result;
                                  data = _yield$this$fireServ$.data;

                                  if (!result) {
                                    _context7.next = 12;
                                    break;
                                  }

                                  fireAuthObj = data;
                                  return _context7.abrupt("return", Promise.resolve({
                                    r: true,
                                    d: fireAuthObj
                                  }));

                                case 12:
                                  return _context7.abrupt("return", Promise.resolve({
                                    r: false
                                  }));

                                case 13:
                                  _context7.next = 16;
                                  break;

                                case 15:
                                  return _context7.abrupt("return", Promise.resolve({
                                    r: false
                                  }));

                                case 16:
                                  _context7.next = 19;
                                  break;

                                case 18:
                                  return _context7.abrupt("return", Promise.resolve({
                                    r: false
                                  }));

                                case 19:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      };

                      storeO = function storeO() {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          var sO;
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  if (!(this.deputy.uUK !== null)) {
                                    _context8.next = 11;
                                    break;
                                  }

                                  _context8.next = 3;
                                  return this.storeServ.getObject(this.deputy.uUK + 'DPAuth');

                                case 3:
                                  sO = _context8.sent;

                                  if (!sO) {
                                    _context8.next = 8;
                                    break;
                                  }

                                  return _context8.abrupt("return", Promise.resolve({
                                    r: true,
                                    d: sO
                                  }));

                                case 8:
                                  return _context8.abrupt("return", Promise.resolve({
                                    r: false
                                  }));

                                case 9:
                                  _context8.next = 12;
                                  break;

                                case 11:
                                  return _context8.abrupt("return", Promise.resolve({
                                    r: false
                                  }));

                                case 12:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      };

                      dbO = function dbO() {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var _yield$this$sqlServ$g, result, data;

                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  if (!(this.detailServ.getADBIsOpen() && this.deputy.uUK !== null)) {
                                    _context9.next = 13;
                                    break;
                                  }

                                  _context9.next = 3;
                                  return this.sqlServ.getADBItem('auth');

                                case 3:
                                  _yield$this$sqlServ$g = _context9.sent;
                                  result = _yield$this$sqlServ$g.result;
                                  data = _yield$this$sqlServ$g.data;

                                  if (!result) {
                                    _context9.next = 10;
                                    break;
                                  }

                                  return _context9.abrupt("return", Promise.resolve({
                                    r: true,
                                    d: data
                                  }));

                                case 10:
                                  return _context9.abrupt("return", Promise.resolve({
                                    r: false
                                  }));

                                case 11:
                                  _context9.next = 14;
                                  break;

                                case 13:
                                  return _context9.abrupt("return", Promise.resolve({
                                    r: false
                                  }));

                                case 14:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      }; // -------------------------------------------------------------------------------


                      availAObs = [];
                      _context10.next = 11;
                      return fireO();

                    case 11:
                      getF = _context10.sent;

                      if (getF.r) {
                        availAObs.push(getF.d);
                      }

                      ;
                      _context10.next = 16;
                      return storeO();

                    case 16:
                      getS = _context10.sent;

                      if (getS.r) {
                        availAObs.push(getS.d);
                      }

                      ;
                      _context10.next = 21;
                      return dbO();

                    case 21:
                      getD = _context10.sent;

                      if (getD.r) {
                        availAObs.push(getD.d);
                      }

                      ;
                      latestAObj = lodash__WEBPACK_IMPORTED_MODULE_17__.maxBy(availAObs, 'expires_at');

                      if (latestAObj) {
                        if (!isExp(latestAObj)) {
                          doSetAuth(latestAObj);
                        } else {
                          doSetAuth(latestAObj);
                        }
                      } else {
                        doFail(false, false);
                      }

                    case 26:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "startChecks",
          value: function startChecks() {
            var _this7 = this;

            this.logger.info('[Auth|startChecks] ()...');
            var totalStartChecks = 4;
            var startCheckCount = 0;
            this.evServ.subscribe('startChecklist', function (checkName) {
              startCheckCount++;

              _this7.logger.info('[Auth|startChecks|Events] - Check ' + startCheckCount + '/' + totalStartChecks + ': ' + checkName + " - \u2705");

              if (startCheckCount === totalStartChecks) {
                _this7.logger.info('[Auth|startChecks] - [FINISHED] (' + startCheckCount + '/' + totalStartChecks + ") - \uD83C\uDFC1");

                _this7.evServ.destroy('startChecklist');

                _this7.startApp();
              }
            });
            this.checkNetworkScreen(); // Start - Do Check #1
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "startApp",
          value: function startApp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this8 = this;

              var oLDCCount, dsSett, dbSett, dbO, fireSett, fireO, defSett, sMe, sMy, authDBRes, cDownHTML, cDownTimer, countDown, _authDBRes;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.logger.info('[Auth|StartApp] ()...');

                      if (!this.detailServ.getAuthLogout()) {
                        _context12.next = 5;
                        break;
                      }

                      this.logoutFlow();
                      _context12.next = 101;
                      break;

                    case 5:
                      if (!this.hasConnection) {
                        _context12.next = 82;
                        break;
                      }

                      this.logger.info('[Auth|startApp] (hasConnection?) - TRUE');

                      if (!this.gotDPAuth) {
                        _context12.next = 66;
                        break;
                      }

                      this.logger.info('[Auth|startApp] (gotDPAuth?) - TRUE');

                      if (!(this.FRDone && this.UDBDone)) {
                        _context12.next = 55;
                        break;
                      }

                      this.logger.info('[Auth|startApp] (FRSetupComplete?) - TRUE');
                      oLDCCount = 0;
                      this.evServ.subscribe('onLoginDetailChecks', function () {
                        oLDCCount++;

                        if (oLDCCount === 2) {
                          _this8.evServ.destroy('onLoginDetailChecks');

                          _this8.onLogin();
                        }
                      });
                      _context12.next = 15;
                      return this.detailServ.getSettings();

                    case 15:
                      dsSett = _context12.sent;

                      if (!(dsSett !== null)) {
                        _context12.next = 20;
                        break;
                      }

                      this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');
                      _context12.next = 50;
                      break;

                    case 20:
                      _context12.next = 22;
                      return this.sqlServ.getSettings();

                    case 22:
                      dbSett = _context12.sent;

                      if (!dbSett.result) {
                        _context12.next = 30;
                        break;
                      }

                      dbO = dbSett.data;
                      _context12.next = 27;
                      return this.detailServ.setSettings(dbO);

                    case 27:
                      this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');
                      _context12.next = 50;
                      break;

                    case 30:
                      _context12.next = 32;
                      return this.fireServ.getSettingsValue(null);

                    case 32:
                      fireSett = _context12.sent;

                      if (!fireSett.result) {
                        _context12.next = 42;
                        break;
                      }

                      fireO = fireSett.data;
                      _context12.next = 37;
                      return this.sqlServ.setSettings(fireO);

                    case 37:
                      _context12.next = 39;
                      return this.detailServ.setSettings(fireO);

                    case 39:
                      this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');
                      _context12.next = 50;
                      break;

                    case 42:
                      defSett = (0, _services_appTypes__WEBPACK_IMPORTED_MODULE_15__.defaultAUSettings)();
                      _context12.next = 45;
                      return this.sqlServ.setSettings(defSett);

                    case 45:
                      _context12.next = 47;
                      return this.fireServ.setSettingsValue(defSett);

                    case 47:
                      _context12.next = 49;
                      return this.detailServ.setSettings(defSett);

                    case 49:
                      this.evServ.publish('onLoginDetailChecks', 'preSETTINGS');

                    case 50:
                      ;
                      this.evServ.subscribe('setLocalDeetsDone', function () {
                        _this8.evServ.publish('onLoginDetailChecks', 'preLOCALDEETS');
                      });
                      this.sqlServ.setLocalDeets();
                      _context12.next = 64;
                      break;

                    case 55:
                      this.logger.info('[Auth|startApp] (FRSetupComplete?) - FALSE');
                      _context12.next = 58;
                      return this.detailServ.setMe(null);

                    case 58:
                      sMe = _context12.sent;
                      _context12.next = 61;
                      return this.detailServ.setMy(null);

                    case 61:
                      sMy = _context12.sent;

                      if (!sMe || !sMy) {
                        this.evServ.subscribe('getMeMyDataDone', function (meMyRes) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                              while (1) {
                                switch (_context11.prev = _context11.next) {
                                  case 0:
                                    if (!meMyRes.result) {
                                      _context11.next = 8;
                                      break;
                                    }

                                    _context11.next = 3;
                                    return this.detailServ.setMe(meMyRes.data.me);

                                  case 3:
                                    _context11.next = 5;
                                    return this.detailServ.setMy(meMyRes.data.my);

                                  case 5:
                                    this.openFirstRunModal();
                                    _context11.next = 10;
                                    break;

                                  case 8:
                                    this.signingIn = false;
                                    this.hideSplash();

                                  case 10:
                                  case "end":
                                    return _context11.stop();
                                }
                              }
                            }, _callee11, this);
                          }));
                        });
                        this.deputy.getMeMyData();
                      } else {
                        this.openFirstRunModal();
                      }

                      ;

                    case 64:
                      _context12.next = 80;
                      break;

                    case 66:
                      this.logger.info('[Auth|startApp] (gotDPAuth?) - FALSE');

                      if (!(this.gotStoreUUK && this.deputy.uUK !== null)) {
                        _context12.next = 77;
                        break;
                      }

                      this.logger.info('[Auth|startApp] (gotStoreUUK?) - TRUE');
                      this.signingIn = false;
                      this.hideSplash();
                      _context12.next = 73;
                      return this.sqlServ.getADBItem('up');

                    case 73:
                      authDBRes = _context12.sent;

                      if (authDBRes.result) {
                        this.deputy.userEmail = authDBRes.data.u;
                        this.userInput.disabled = false;
                        this.userInput.value = authDBRes.data.u;
                        this.passInput.disabled = false;
                        this.passInput.value = authDBRes.data.p;
                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', false);
                        jquery__WEBPACK_IMPORTED_MODULE_16__('.username-row').css('opacity', '0.24');
                        jquery__WEBPACK_IMPORTED_MODULE_16__('.password-row').css('opacity', '0.24');
                        cDownHTML = '<div id="sheriff-auth-loginbox-countdown-text" class="loginbox-heading-class">Auto-Login...<span id="sheriff-auto-login-cdown-digits">5</span><ion-button id="sheriff-cancelautosignin-btn"><ion-icon id="sheriff-cancel-autologin-btn-ico" name="close"></ion-icon></ion-button></div>';
                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').html(cDownHTML);

                        countDown = function countDown(i, callback) {
                          cDownTimer = setInterval(function () {
                            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auto-login-cdown-digits').text(i);
                            i-- || (clearInterval(cDownTimer), callback());
                          }, 1000);
                        };

                        countDown(5, function () {
                          _this8.loginBoxSignIn();
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-cancelautosignin-btn').click(function () {
                          clearInterval(cDownTimer);
                          jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').html('<div class="animate__animated animate__flipInX" id="sheriff-autologin-cancelled-text">cancelled</div>');
                          jquery__WEBPACK_IMPORTED_MODULE_16__('.username-row').css('opacity', '1');
                          jquery__WEBPACK_IMPORTED_MODULE_16__('.password-row').css('opacity', '1');
                          setTimeout(function () {
                            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').hide();
                            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').text('One-time Sign In');
                            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signin-text').fadeIn();
                          }, 3000);
                        });
                      } else {
                        this.logger.info('[Auth|startApp] (gotDBAuth) - FAIL');
                        this.signingIn = false;
                        this.hideSplash();
                      }

                      _context12.next = 80;
                      break;

                    case 77:
                      this.logger.info('[Auth|startApp] (gotUPCreds?) - FALSE');
                      this.signingIn = false;
                      this.hideSplash();

                    case 80:
                      _context12.next = 101;
                      break;

                    case 82:
                      this.logger.info('[Auth|startApp] (hasConnection?) - FALSE');

                      if (!this.gotStoreUUK) {
                        _context12.next = 99;
                        break;
                      }

                      this.logger.info('[Auth|startApp] (gotStoreUUK?) - TRUE');

                      if (!this.gotDPAuth) {
                        _context12.next = 90;
                        break;
                      }

                      this.logger.info('[Auth|startApp] (gotDPAuth?) - TRUE');

                      if (this.FRDone && this.UDBDone) {
                        this.gotSavedDLData = true;
                        this.hideSplash();
                      } else {
                        jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-exitapp').css('width', '100%');
                        this.hideSplash();
                      }

                      _context12.next = 97;
                      break;

                    case 90:
                      this.logger.info('[Auth|startApp] (gotDPAuth?) - FALSE');

                      if (!this.ADBDone) {
                        _context12.next = 97;
                        break;
                      }

                      this.logger.info('[Auth|startApp] (AuthDBSetupDone?) - TRUE');
                      _context12.next = 95;
                      return this.sqlServ.getADBItem('up');

                    case 95:
                      _authDBRes = _context12.sent;

                      if (_authDBRes.result && _authDBRes.data.p.length > 0) {
                        if (this.FRDone && this.UDBDone) {
                          this.gotSavedDLData = true;
                          this.hideSplash();
                        } else {
                          jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-exitapp').css('width', '100%');
                          this.hideSplash();
                        }
                      }

                    case 97:
                      _context12.next = 101;
                      break;

                    case 99:
                      jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-exitapp').css('width', '100%');
                      this.hideSplash();

                    case 101:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "cancelAutoSignIn",
          value: function cancelAutoSignIn() {
            this.logger.info('[App|CancelAutoSignIn] ()...');
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "logoutFlow",
          value: function logoutFlow() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
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
                      this.evServ.subscribe('clearAuthGVarsDone', function () {
                        _this9.evServ.destroy('clearAuthGVarsDone');

                        _this9.router.navigateByUrl('/', {
                          replaceUrl: true
                        });

                        _this9.hideSplash();
                      });
                      this.deputy.clearAuthGVars();

                    case 14:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "owenDev",
          value: function owenDev() {
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('disabled', false);
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-username').prop('disabled', false);
            this.userInput.value = 'owenlenegan@gmail.com';
            this.passInput.value = 'lotto12';
            this.loginBoxSignIn();
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "loginBoxInput",
          value: function loginBoxInput(input, event) {
            this.logger.info('[Auth|loginBoxFocus] The - ' + input.toUpperCase() + ' - Input got [' + event.toUpperCase() + ']...');
            var depLabel = '<img src="../../assets/img/sheriff-deputy-logoname-white-small.png" class="lildeputylogoname">';

            var emailIsV = function emailIsV(emailText) {
              var validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

              if (emailText.match(validEmailFormat)) {
                return true;
              } else {
                return false;
              }
            };

            var updateHelper = function updateHelper(type, newHTML) {
              var msgIco;
              var htEle = jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-helper-text');
              var anBaseStr = 'animate__animated';
              var anInStr = anBaseStr + ' animate__fadeIn';
              var anOutStr = anBaseStr + ' animate__fadeOut';
              type === 'help' ? msgIco = '<ion-icon class="sheriff-auth-loginbox-info-ico help" name="information-circle"></ion-icon>' : msgIco = '<ion-icon class="sheriff-auth-loginbox-info-ico warn" name="warning"></ion-icon>';
              new Promise(function (resolvedOut) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(htEle).addClass(anOutStr).on('animationend', function () {
                  jquery__WEBPACK_IMPORTED_MODULE_16__(htEle).hide().html(msgIco + newHTML).removeClass(anOutStr);
                  resolvedOut('done');
                  new Promise(function (resolvedIn) {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(htEle).addClass(anInStr).show().removeClass(anInStr);
                    resolvedIn('done');
                  });
                });
              });
            };

            if (event === 'focus') {
              jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-img').css('visibility', 'hidden');
              jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').css('visibility', 'visible');
              var thisInputIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');
              jquery__WEBPACK_IMPORTED_MODULE_16__(thisInputIco).removeClass('sheriff-auth-input-invalidated sheriff-auth-input-validated');
              jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).addClass('infocus-sheriff-auth-login-input');

              if (input.includes('username')) {
                updateHelper('help', 'The <span class="asc">email</span> linked to your ' + depLabel + ' account');
              } else {
                updateHelper('help', 'The <span class="asc">password</span> to your ' + depLabel + 'account');
              }
            }

            ;

            if (event === 'change') {
              var afterEvTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).prop('value');

              if (afterEvTxt.length === 0) {
                this.oldloginBoxTxt = '';
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('');
              }
            }

            ;

            if (event === 'input') {
              jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').show();
              var shortIn = input.replace('.sheriff-auth-loginbox-input-ico.', '');

              if (shortIn === 'user') {
                var existingTxt = this.oldloginBoxTxt;
                var inputTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-username').prop('value');

                if (existingTxt.length - 1 === inputTxt.length) {
                  jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('');
                  this.oldloginBoxTxt = inputTxt;
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text(inputTxt.charAt(inputTxt.length - 1)).fadeOut(500);
                  this.oldloginBoxTxt = inputTxt;
                }
              } else {
                var _existingTxt = this.oldloginBoxTxt;

                var _inputTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('value');

                if (_existingTxt.length - 1 === _inputTxt.length) {
                  jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('');
                  this.oldloginBoxTxt = _inputTxt;
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').text('?').fadeOut(500);
                  this.oldloginBoxTxt = _inputTxt;

                  if (jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.user').hasClass('sheriff-auth-input-validated') && _inputTxt.length > 3) {
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.pass').addClass('sheriff-auth-input-validated');
                      jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', false);
                    }, 2000);
                  } else {
                    jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', true);
                  }
                }
              }

              ;
              jquery__WEBPACK_IMPORTED_MODULE_16__(input).toggleClass('flashico');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_16__(input).toggleClass('flashico');
              }, 200);
            }

            ;

            if (event === 'blur') {
              jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-img').css('visibility', 'visible');
              jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-title-txt').css('visibility', 'hidden');
              jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).removeClass('infocus-sheriff-auth-login-input');

              if (input === 'sheriff-auth-login-username') {
                var thisEmailIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');
                var thisEmailTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).prop('value');

                if (emailIsV(thisEmailTxt)) {
                  jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('disabled', false);
                  jquery__WEBPACK_IMPORTED_MODULE_16__(thisEmailIco).removeClass('sheriff-auth-input-invalidated').addClass('sheriff-auth-input-validated');

                  if (!jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').hasClass('sheriff-auth-input-validated')) {
                    updateHelper('help', 'Enter the <span class="asc">password</span> you use to access your ' + depLabel + 'account');
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password > input').focus();
                    }, 500);
                  }
                } else {
                  var _thisEmailIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');

                  jquery__WEBPACK_IMPORTED_MODULE_16__(_thisEmailIco).removeClass('sheriff-auth-input-validated').addClass('sheriff-auth-input-invalidated').addClass('animate__animated animate__headShake animate__delay-2s').on('animationend', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(_thisEmailIco).removeClass('animate__animated animate__headShake animate__delay-2s');
                  });
                  updateHelper('warn', 'Not a valid <span class="asc">email address</span> - please correct it');
                  jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-login-password').prop('disabled', true);
                }
              }

              ;

              if (input === 'sheriff-auth-login-password') {
                var thisPassTxt = jquery__WEBPACK_IMPORTED_MODULE_16__('#' + input).prop('value');
                var thisPassIco = jquery__WEBPACK_IMPORTED_MODULE_16__('.' + input + '-ico');

                if (thisPassTxt.length > 0) {
                  if (thisPassTxt.length > 3) {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(thisPassIco).removeClass('sheriff-auth-input-invalidated').addClass('sheriff-auth-input-validated');
                  } else {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(thisPassIco).removeClass('sheriff-auth-input-validated').addClass('sheriff-auth-input-invalidated').addClass('animate__animated animate__headShake animate__delay-2s').on('animationend', function () {
                      jquery__WEBPACK_IMPORTED_MODULE_16__(thisPassIco).removeClass('animate__animated animate__headShake animate__delay-2s');
                    });
                    updateHelper('warn', 'Not a valid <span class="asc">password</span> - please correct it');
                  }
                }
              }

              ;

              if (jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.user').hasClass('sheriff-auth-input-validated') && jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-loginbox-input-ico.pass').hasClass('sheriff-auth-input-validated')) {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', false);
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-loginbtn').prop('disabled', true);
              }
            }
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "onLogin",
          value: function onLogin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.logger.info('[Auth|onLogin] ()...');
                      this.isConnSub.unsubscribe();
                      this.evServ.publish('EnteringApp', null);
                      this.navController.navigateRoot('/tabs/tabshifts');

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "reRunFR",
          value: function reRunFR() {
            var _this10 = this;

            this.logger.info('[Auth|reRunFR] (LISTENING)...');
            this.evServ.subscribe('ReRunFR', function (choiceObj) {
              _this10.evServ.destroy('ReRunFR');

              if (choiceObj.choice) {
                if (choiceObj.logout) {
                  _this10.logoutFlow();
                } else {
                  _this10.openFirstRunModal();
                }
              } else {
                _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
              }
            });
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.logger.info('[Auth|ionViewDidLeave] ()...');
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_16__('ion-content#auth-page-ion-content').css('display', 'block');
              jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-custom-firstload-outter-wrapper').css('display', 'none');
            }, 3000);
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "openFirstRunModal",
          value: function openFirstRunModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this11 = this;

              var dS, frModal;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.logger.info('[Auth|openFirstRunModal] ()...');
                      dS = this.detailServ;
                      _context17.next = 4;
                      return this.modalCtrl.create(this.stdModalOpts);

                    case 4:
                      frModal = _context17.sent;
                      frModal.onDidDismiss().then(function (finalFRData) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                          var _this12 = this;

                          var tryFRAgain, impDB, baseSettObj, finalSettObj, newFCM, newFET, dbSettRes, consM;
                          return regeneratorRuntime.wrap(function _callee16$(_context16) {
                            while (1) {
                              switch (_context16.prev = _context16.next) {
                                case 0:
                                  tryFRAgain = function tryFRAgain(withLogout) {
                                    return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                                      var _this13 = this;

                                      var dialogPopOpts;
                                      return regeneratorRuntime.wrap(function _callee15$(_context15) {
                                        while (1) {
                                          switch (_context15.prev = _context15.next) {
                                            case 0:
                                              _context15.next = 2;
                                              return dS.setFRSetupDone(false);

                                            case 2:
                                              this.reRunFR();
                                              withLogout ? dialogPopOpts = {
                                                title: 'Setup Failed',
                                                message: 'Setup failed. Please check you have internet access, permissions granted and login with the correct Deputy email/password. Try again?',
                                                okButtonTitle: 'Try Again',
                                                cancelButtonTitle: 'Cancel/Exit'
                                              } : dialogPopOpts = {
                                                title: 'Logout/Switch',
                                                message: 'Sheriff will logout and return to the login screen where you can input fresh/correct Deputy email/password.\nSetup will automatically resume thereafter. Proceed or Cancel/Exit?',
                                                okButtonTitle: 'Proceed',
                                                cancelButtonTitle: 'Cancel/Exit'
                                              };

                                              _capacitor_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog.prompt(dialogPopOpts).then(function (tf) {
                                                _this13.evServ.publish('ReRunFR', {
                                                  logout: withLogout,
                                                  choice: tf
                                                });
                                              });

                                            case 5:
                                            case "end":
                                              return _context15.stop();
                                          }
                                        }
                                      }, _callee15, this);
                                    }));
                                  };

                                  if (!(finalFRData === null || finalFRData === undefined || finalFRData.data === null || finalFRData.data === undefined || !finalFRData.data.dlDone)) {
                                    _context16.next = 5;
                                    break;
                                  }

                                  tryFRAgain(false);
                                  _context16.next = 68;
                                  break;

                                case 5:
                                  if (!(finalFRData.data === 'logout')) {
                                    _context16.next = 9;
                                    break;
                                  }

                                  tryFRAgain(true);
                                  _context16.next = 68;
                                  break;

                                case 9:
                                  impDB = finalFRData.data.dbImported;
                                  _context16.next = 12;
                                  return dS.setFRSetupDone(true);

                                case 12:
                                  _context16.next = 14;
                                  return dS.setUDBWasImported(impDB);

                                case 14:
                                  _context16.next = 16;
                                  return dS.setWpId(finalFRData.data.wpId);

                                case 16:
                                  if (!impDB) {
                                    _context16.next = 37;
                                    break;
                                  }

                                  _context16.next = 19;
                                  return this.storeServ.getItem('fireMsgToken');

                                case 19:
                                  newFCM = _context16.sent;

                                  if (!newFCM) {
                                    _context16.next = 23;
                                    break;
                                  }

                                  _context16.next = 23;
                                  return this.sqlServ.setFCMToken(newFCM);

                                case 23:
                                  ;
                                  _context16.next = 26;
                                  return this.storeServ.getItem('currentFEToken');

                                case 26:
                                  newFET = _context16.sent;

                                  if (!newFET) {
                                    _context16.next = 30;
                                    break;
                                  }

                                  _context16.next = 30;
                                  return this.sqlServ.setFEToken(newFET);

                                case 30:
                                  ;
                                  _context16.next = 33;
                                  return this.sqlServ.getSettings();

                                case 33:
                                  dbSettRes = _context16.sent;
                                  dbSettRes.result ? baseSettObj = dbSettRes.data : baseSettObj = (0, _services_appTypes__WEBPACK_IMPORTED_MODULE_15__.defaultAUSettings)();
                                  _context16.next = 38;
                                  break;

                                case 37:
                                  baseSettObj = (0, _services_appTypes__WEBPACK_IMPORTED_MODULE_15__.defaultAUSettings)();

                                case 38:
                                  ;
                                  baseSettObj['alerts']['options'] = finalFRData.data.alertOpts;
                                  finalSettObj = baseSettObj;

                                  consM = function consM(r, dfs) {
                                    var rT;
                                    var dfT;
                                    r === 's' ? rT = 'SUCCESS' : rT = 'ERROR';
                                    dfs === 'd' ? dfT = 'SQLite' : dfs === 'f' ? dfT = 'Firebase' : dfT = 'Storage';
                                    var m = '[Auth|openFirstRunModal] (' + rT + ') Save Settings Obj to ' + dfT;
                                    return _this12.logger.info(m);
                                  };

                                  _context16.next = 44;
                                  return this.detailServ.setSettings(finalSettObj);

                                case 44:
                                  if (!_context16.sent) {
                                    _context16.next = 48;
                                    break;
                                  }

                                  consM('s', 's');
                                  _context16.next = 49;
                                  break;

                                case 48:
                                  consM('e', 's');

                                case 49:
                                  ;
                                  _context16.next = 52;
                                  return this.sqlServ.setSettings(finalSettObj);

                                case 52:
                                  if (!_context16.sent) {
                                    _context16.next = 56;
                                    break;
                                  }

                                  consM('s', 'd');
                                  _context16.next = 57;
                                  break;

                                case 56:
                                  consM('e', 'd');

                                case 57:
                                  ;
                                  _context16.next = 60;
                                  return this.fireServ.setFireSettingsDoc(this.deputy.userEmail, finalSettObj);

                                case 60:
                                  if (!_context16.sent) {
                                    _context16.next = 64;
                                    break;
                                  }

                                  consM('s', 'f');
                                  _context16.next = 65;
                                  break;

                                case 64:
                                  consM('e', 'f');

                                case 65:
                                  ;
                                  this.evServ.subscribe('setLocalDeetsDone', function () {
                                    _this12.evServ.destroy('setLocalDeetsDone');

                                    _this12.evServ.publish('doDelayedAppInits', impDB);

                                    _this12.onLogin();
                                  });
                                  this.sqlServ.setLocalDeets();

                                case 68:
                                case "end":
                                  return _context16.stop();
                              }
                            }
                          }, _callee16, this);
                        }));
                      });
                      _context17.next = 8;
                      return frModal.present();

                    case 8:
                      return _context17.abrupt("return", _context17.sent);

                    case 9:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "setFirstAuthProcess",
          value: function setFirstAuthProcess(authObj, upObj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.logger.info('[Auth|setFirstAuthProcess] ()...'); //---------------------------------------------------

                      this.evServ.subscribe('dpAuthProgressStatus', function (statusUpdate) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                          var _this15 = this;

                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) {
                              switch (_context18.prev = _context18.next) {
                                case 0:
                                  if (statusUpdate === 'completed') {
                                    if (this.FRDone && this.UDBDone) {
                                      this.onLogin();
                                    } else {
                                      this.openFirstRunModal();
                                    }
                                  } else if (statusUpdate === 'failed') {
                                    setTimeout(function () {
                                      _this15.signingIn = false;
                                    }, 1000);
                                  }

                                case 1:
                                case "end":
                                  return _context18.stop();
                              }
                            }
                          }, _callee18, this);
                        }));
                      }); //---------------------------------------------------

                      this.evServ.subscribe('setAuthGVarsDone', function (validTokenRes) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                          var _this16 = this;

                          var getFETViaDPTRes, doCTLoginRes;
                          return regeneratorRuntime.wrap(function _callee20$(_context20) {
                            while (1) {
                              switch (_context20.prev = _context20.next) {
                                case 0:
                                  this.dpAuthProgressStager('tokens');
                                  this.evServ.destroy('setAuthGVarsDone');
                                  this.logger.info('[Auth-<Deputy|setAuthGVars] setAuthGVars [OK] -> validTokenTest: ' + validTokenRes.result);

                                  if (!validTokenRes.result) {
                                    _context20.next = 26;
                                    break;
                                  }

                                  this.logger.info('[Auth|browseDPAuth->Deputy] Set New uUKey @ DeputyService.'); //-----------------------

                                  this.evServ.subscribe('getMeMyDataDone', function (meMyRes) {
                                    return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                                      return regeneratorRuntime.wrap(function _callee19$(_context19) {
                                        while (1) {
                                          switch (_context19.prev = _context19.next) {
                                            case 0:
                                              this.evServ.destroy('getMeMyDataDone');

                                              if (!meMyRes.result) {
                                                _context19.next = 11;
                                                break;
                                              }

                                              _context19.next = 4;
                                              return this.detailServ.setMe(meMyRes.data.me);

                                            case 4:
                                              _context19.next = 6;
                                              return this.detailServ.setMy(meMyRes.data.my);

                                            case 6:
                                              this.logger.info('[Auth|DAS|getMeMyData] - [OK] - getMeMyData Complete.');

                                              if (this.FRDone && this.UDBDone) {
                                                this.onLogin();
                                              } else {
                                                this.openFirstRunModal();
                                              }

                                              ;
                                              _context19.next = 16;
                                              break;

                                            case 11:
                                              this.deputy.uUK = null;
                                              this.storeUUK = null;
                                              this.gotStoreUUK = false;
                                              this.logger.info('[DeputyService|GetMeMyData] ERROR!');
                                              this.logger.info("\uD83C\uDFEE".repeat(10));

                                            case 16:
                                            case "end":
                                              return _context19.stop();
                                          }
                                        }
                                      }, _callee19, this);
                                    }));
                                  }); //-----------------------

                                  this.dpAuthProgressStager('completed');
                                  _context20.next = 9;
                                  return this.deputy.getFCT(validTokenRes.data.access_token);

                                case 9:
                                  getFETViaDPTRes = _context20.sent;

                                  if (!getFETViaDPTRes.result) {
                                    _context20.next = 23;
                                    break;
                                  }

                                  _context20.next = 13;
                                  return this.fireServ.logoutUser();

                                case 13:
                                  _context20.next = 15;
                                  return this.fireServ.loginCustomToken();

                                case 15:
                                  doCTLoginRes = _context20.sent;

                                  if (doCTLoginRes) {
                                    _context20.next = 19;
                                    break;
                                  }

                                  _context20.next = 19;
                                  return this.fireServ.getFireUserAuth();

                                case 19:
                                  ;
                                  this.deputy.getMeMyData();
                                  _context20.next = 24;
                                  break;

                                case 23:
                                  this.deputy.getMeMyData();

                                case 24:
                                  _context20.next = 28;
                                  break;

                                case 26:
                                  this.logger.info('[Auth->Deputy|setAuthGVars] - [ERROR] - setAuthGVars Failed validTokenTest: ' + validTokenRes + ' -> Triggering ERROR.');
                                  this.dpAuthProgressStager('failed');

                                case 28:
                                  ;

                                case 29:
                                case "end":
                                  return _context20.stop();
                              }
                            }
                          }, _callee20, this);
                        }));
                      }); // Set/Store uUK --------------------------

                      this.storeUUK = upObj.user.replace('@', '').replace('.', '');
                      this.gotStoreUUK = true;
                      this.storeServ.setItem('currentUUK', this.storeUUK);
                      this.deputy.uUK = this.storeUUK; // Set/Store DPAuthObj --------------------

                      this.dpAuthObj = authObj;
                      this.gotDPAuth = true;
                      this.storeServ.setObject(this.storeUUK + 'DPAuth', this.dpAuthObj); // Set/Store userEmail --------------------

                      this.storeUEml = upObj.user;
                      this.gotStoreUEml = true;
                      this.storeServ.setItem('userEmail', this.storeUEml);
                      this.deputy.userEmail = this.storeUEml; // Init ADB -------------------------------

                      if (!this.ADBDone) {
                        this.logger.info('[Auth|setFirstAuthProcess] Running createAuthDBConn(' + this.deputy.uUK + 'auth,false) to CREATE Encrypted DB + `deputy_auth` TABLE...');
                        this.evServ.subscribe('aDBReady', function (tf) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                            return regeneratorRuntime.wrap(function _callee21$(_context21) {
                              while (1) {
                                switch (_context21.prev = _context21.next) {
                                  case 0:
                                    this.evServ.destroy('aDBReady');
                                    this.ADBDone = tf;

                                    if (tf) {
                                      this.evServ.showToast('locked', 'Password Encrypted');
                                    } else {
                                      this.evServ.showToast('fire', 'Password Destroyed');
                                    }

                                    ;
                                    this.logger.info('[Auth->DeputyApiService|browseDPAuth->setAuthGVars] - Running setAuthGVars...');

                                    if (this.fireServ.fbLoggedIn) {
                                      _context21.next = 8;
                                      break;
                                    }

                                    _context21.next = 8;
                                    return this.fireServ.loginUserEmail({
                                      u: upObj.user,
                                      p: upObj.pass
                                    });

                                  case 8:
                                    ;
                                    this.deputy.setAuthGVars(authObj);

                                  case 10:
                                  case "end":
                                    return _context21.stop();
                                }
                              }
                            }, _callee21, this);
                          }));
                        });
                        this.sqlServ.createAuthDBConn(this.deputy.uUK + 'auth', false, {
                          up: upObj,
                          dp: authObj
                        });
                      } else {
                        this.logger.info('[Auth->DeputyApiService|browseDPAuth->checkDBSetup] AuthDB Already Created - Skipping...');
                        this.deputy.setAuthGVars(authObj);
                      }

                    case 15:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sserverDPLogin",
          value: function sserverDPLogin(upCreds) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var dpLoginRes;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      this.logger.info('[Auth] (Login|Admin) [FUNCTION] sserverDPLogin()...');
                      _context23.next = 3;
                      return this.deputy.doSServerDPLogin(upCreds);

                    case 3:
                      dpLoginRes = _context23.sent;

                      if (!dpLoginRes.result) {
                        _context23.next = 8;
                        break;
                      }

                      return _context23.abrupt("return", Promise.resolve(dpLoginRes));

                    case 8:
                      return _context23.abrupt("return", Promise.resolve({
                        result: false
                      }));

                    case 9:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "authIsV",
          value: function authIsV(authO) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var isV;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.deputy.tokenIsValid(authO);

                    case 2:
                      isV = _context24.sent;

                      if (!isV) {
                        _context24.next = 7;
                        break;
                      }

                      return _context24.abrupt("return", Promise.resolve(true));

                    case 7:
                      return _context24.abrupt("return", Promise.resolve(false));

                    case 8:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "loginBoxSignIn",
          value: //////////////////////////////////////////////////////////////////////////////////////
          function loginBoxSignIn() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this17 = this;

              var upCredsObj, existFireURes, ssLoginRes;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      this.logger.info('[Auth|loginBoxLogin] ()...');
                      this.dpAuthProgressStager('connect');
                      this.signingIn = true;
                      upCredsObj = {
                        user: String(this.userInput.value).trim(),
                        pass: String(this.passInput.value).trim()
                      };
                      this.deputy.uUK = upCredsObj.user.replace('@', '').replace('.', '');
                      this.deputy.userEmail = upCredsObj.user;
                      this.fireServ.tempUPO = {
                        u: upCredsObj.user,
                        p: upCredsObj.pass
                      };
                      _context25.next = 9;
                      return this.fireServ.getFireUserAuth();

                    case 9:
                      existFireURes = _context25.sent;
                      _context25.t0 = existFireURes.result;

                      if (!_context25.t0) {
                        _context25.next = 15;
                        break;
                      }

                      _context25.next = 14;
                      return this.authIsV(existFireURes.data);

                    case 14:
                      _context25.t0 = _context25.sent;

                    case 15:
                      if (!_context25.t0) {
                        _context25.next = 20;
                        break;
                      }

                      this.dpAuthProgressStager('authenticate');
                      this.setFirstAuthProcess(existFireURes.data, upCredsObj);
                      _context25.next = 35;
                      break;

                    case 20:
                      setTimeout(function () {
                        _this17.dpAuthProgressStager('authenticate');
                      }, 8000);
                      _context25.next = 23;
                      return this.sserverDPLogin(upCredsObj);

                    case 23:
                      ssLoginRes = _context25.sent;
                      _context25.t1 = ssLoginRes.result;

                      if (!_context25.t1) {
                        _context25.next = 29;
                        break;
                      }

                      _context25.next = 28;
                      return this.authIsV(ssLoginRes.data);

                    case 28:
                      _context25.t1 = _context25.sent;

                    case 29:
                      if (!_context25.t1) {
                        _context25.next = 33;
                        break;
                      }

                      this.setFirstAuthProcess(ssLoginRes.data, upCredsObj);
                      _context25.next = 35;
                      break;

                    case 33:
                      this.dpAuthProgressStager('failed');
                      setTimeout(function () {
                        _this17.signingIn = false;
                      }, 1000);

                    case 35:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "offlineExitEnterApp",
          value: function offlineExitEnterApp(choice) {
            var _this18 = this;

            this.logger.info('[Auth|offlineExitEnterApp] (' + choice + ')...');

            if (choice === 'exit') {
              var exitPromptOpts = {
                title: 'Exiting Sheriff',
                message: 'You sure now?',
                okButtonTitle: 'Yes sir!',
                cancelButtonTitle: 'Cancel'
              };

              _capacitor_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog.confirm(exitPromptOpts).then(function (wasConfirmed) {
                if (wasConfirmed.value) {
                  _this18.logger.info('[App|onExit] Exit Request [CONFIRMED] - Closing App...');

                  _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
                } else {
                  _this18.logger.info('[App|onExit] Exit Request [DENIED] - Closing Menu Only...');
                }
              });
            } else {
              this.onLogin();
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "dpAuthProgressStager",
          value: function dpAuthProgressStager(stage) {
            var _this19 = this;

            this.logger.info('[APP|dpAuthProgressStager] (' + stage + ')...');
            var iconArr = ['connect', 'authenticate', 'tokens', 'completed'];
            this.evServ.publish('dpAuthProgressStatus', stage);
            this.zone.run(function () {
              var localPHFn = function localPHFn(thisStage) {
                _this19.connectStage = thisStage;

                var myAniCSS = function myAniCSS(jqEle, animName) {
                  return new Promise(function (resolve) {
                    var animClassStr;
                    jqEle.includes('sunicon') ? animClassStr = 'animate__animated animate__' + animName + ' animate__duration-2s' : animClassStr = 'animate__animated animate__' + animName + ' animate__faster';
                    jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).addClass(animClassStr).on('animationend', function () {
                      jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).removeClass(animClassStr);
                      resolve('done');
                    });
                  });
                };

                myAniCSS('#sheriff-auth-loginbox-signingin-shield-overlay-wrapper', 'flipInX');
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-loginbox-signingin-shield-overlay-wrapper').removeClass().addClass('signing-in-' + thisStage);
                var lilTitleIcoEle = '.sheriff-sunicon-ico.' + thisStage;
                myAniCSS(lilTitleIcoEle, 'zoomIn');
                jquery__WEBPACK_IMPORTED_MODULE_16__(lilTitleIcoEle).addClass('opacityup');
                var nextColIndex = iconArr.indexOf(thisStage) + 1;
                var nextColStage = iconArr[nextColIndex];
                var nextColEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-auth-sunicon-col.' + nextColStage);
                jquery__WEBPACK_IMPORTED_MODULE_16__(nextColEle).addClass('nexticocol');
                var prevIcoIndex = iconArr.indexOf(thisStage) - 1;
                var prevIcoStage = iconArr[prevIcoIndex];
                jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-sunicon-ico.' + prevIcoStage).addClass('icondone');
                setTimeout(function () {
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
                _this19.dpAuthPBarPerc = .25;
                localPHFn(stage);
              }

              ;

              if (stage === 'authenticate') {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').css('background-size', '66% 100%');
                _this19.dpAuthPBarPerc = .5;
                localPHFn(stage);
              }

              ;

              if (stage === 'tokens') {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').css('background-size', '100% 100%');
                _this19.dpAuthPBarPerc = .75;
                localPHFn(stage);
              }

              ;

              if (stage === 'completed') {
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').css('background-size', '100% 100%');
                _this19.dpAuthPBarPerc = 1;
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-dpauthinprogress-bar').css('--progress-background', '#4caf50d6');
                localPHFn(stage);
              }

              ;

              if (stage === 'failed') {
                _this19.dpAuthPBarPerc = 1;
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-authpage-loadprogtext').text('failed');
                jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-dpauthinprogress-bar').css('--progress-background', '#ff0000d6');
                localPHFn(stage);
              }
            });
          }
        }]);

        return AuthPage;
      }();

      _AuthPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NavController
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__.EventsService
        }, {
          type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_8__.DeputyService
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService
        }, {
          type: _services_detail_service__WEBPACK_IMPORTED_MODULE_11__.DetailService
        }, {
          type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_12__.SQLiteService
        }, {
          type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_13__.DateTimeService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform
        }, {
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_21__.NGXLogger
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_10__.FirebaseService
        }];
      };

      _AuthPage.propDecorators = {
        userInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
          args: ['loginInputUser']
        }],
        passInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
          args: ['loginInputPass']
        }]
      };
      _AuthPage = (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) //////////////////////////////////////////////////////////////////////////////////////
      ], _AuthPage);
      /***/
    },

    /***/
    90957:
    /*!*************************************!*\
      !*** ./src/app/auth/auth.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    21643:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"sheriff-custom-firstload-outter-wrapper\">\n  <div class=\"sheriff-custom-firstload-txt top\">starting</div>\n  <div class=\"sheriff-custom-firstload-inner-wrapper\">\n    <img class=\"sheriff-custom-firstload-img fl-bigs fload-s-anim\" src=\"../assets/img/slogo-g.png\">\n    <img class=\"sheriff-custom-firstload-img fl-star fload-star-anim\" src=\"../assets/img/loadingstar.png\">\n  </div>\n  <div class=\"sheriff-custom-firstload-txt bottom\">sheriff</div>\n</div>\n<ion-content id=\"auth-page-ion-content\" class=\"sheriff-content login-page-content\">\n\n    <div id=\"sheriff-auth-page-main-wrapper\" class=\"sheriff-page-wrapper login-page\">\n        <div id=\"sheriff-authpage-bg-wrapper\" class=\"sheriff-authpage-bg-wrapper\">\n            <div id=\"sheriff-authpage-bg-layer1\"></div>\n            <div id=\"sheriff-authpage-title-wrapper\">\n                <div id=\"sheriff-authpage-sunincons-wrapper\">\n                    <ion-grid class=\"sheriff-grid sheriff-auth-sunicon-grid\">\n                        <ion-row class=\"sheriff-row sheriff-auth-row sheriff-auth-sunicons-row iconsrow\">\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col connect\"><img src=\"../../assets/img/sheriff-sunicon-connect.png\" class=\"sheriff-sunicon-ico connect\"></ion-col>\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col authenticate\"><img src=\"../../assets/img/sheriff-sunicon-authenticate.png\" class=\"sheriff-sunicon-ico authenticate\"></ion-col>\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col tokens\"><img src=\"../../assets/img/sheriff-sunicon-tokens.png\" class=\"sheriff-sunicon-ico tokens\"></ion-col>\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicon-col completed\"><img src=\"../../assets/img/sheriff-sunicon-completed.png\" class=\"sheriff-sunicon-ico completed\"></ion-col>\n                        </ion-row>\n                        <ion-row class=\"sheriff-row sheriff-auth-sunicon-sep-row\">\n                            <ion-col class=\"sheriff-col sheriff-auth-col sep-col\"></ion-col>\n                        </ion-row>\n                        <ion-row class=\"sheriff-row sheriff-auth-row sheriff-auth-sunicons-row textrow\">\n                            <ion-col class=\"sheriff-col sheriff-auth-col sheriff-auth-sunicons-text-top-col\">\n                                <div class=\"blacktextfill standard-filled\" id=\"sheriff-authpage-loadprogtext\">\n                                    sheriff\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <div id=\"sheriff-authpage-title-txt\"></div>\n            </div>\n            <div id=\"sheriff-authpage-bg-sunlayer\" class=\"sheriff-authpage-bg-sunlayer\"></div>\n            <div id=\"sheriff-authpage-bg-layer2\"></div>\n        </div>\n        <!-- AUTH ACTIONS MAIN WRAPPER -->\n        <div id=\"sheriff-auth-mainactions-bottom-wrapper\">\n            <!-- OFFLINE INFO/ACTION GRID -->\n            <div *ngIf=\"!hasConnection\" id=\"sheriff-auth-offline-wrapperid\" class=\"sheriff-auth-offline-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-auth-grid sheriff-offline-grid\">\n                    <ion-row class=\"sheriff-row sheriff-auth-row sheriff-offline-row heading-row1\">\n                        <ion-col size=\"3\" class=\"sheriff-col sheriff-auth-col sheriff-offline-col heading-col1\">\n                            <div id=\"sheriff-auth-offline-heading-wrapperid\" class=\"sheriff-auth-offline-heading-wrapper\">\n                                <img class=\"sheriff-auth-offline-heading-ico\" src=\"../../assets/img/sheriff-auth-offline-bigico.png\">\n                                <div id=\"sheriff-auth-offline-offlinetext\" class=\"sheriff-auth-offline-offlinetext\">offline</div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-auth-col sheriff-offline-col infotext-col1\">\n                            <div id=\"sheriff-auth-offline-info-wrapperid\" class=\"sheriff-auth-offline-info-wrapper\">\n                                <div *ngIf=\"!hasConnection && !gotSavedDLData\" class=\"sheriff-auth-offline-infotext nodataquitonly\">\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv l1\">\n                                        no data connection\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        Sheriff cannot be used in <span class=\"auth-olmodespan\">offline mode</span> because no saved data was found.\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        This App automatically saves and updates your data so that it <span class=\"italexpress\">can</span> be used offline so it is most likely that:\n                                        <ul class=\"sheriff-auth-offline-info-list\">\n                                            <li class=\"sheriff-auth-offline-info-list-item\">you are using this App for the first time</li>\n                                            <li class=\"sheriff-auth-offline-info-list-item\">you recently un/re-installed Sheriff</li>\n                                            <li class=\"sheriff-auth-offline-info-list-item\">your device denied this App storage permissions</li>\n                                            <li class=\"sheriff-auth-offline-info-list-item\">you recently cleared/deleted this App's storage/cache</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"!hasConnection && gotSavedDLData\" class=\"sheriff-auth-offline-infotext gotdatacanenter\">\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv l1\">\n                                        no data connection\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        Sheriff can used in <span class=\"auth-olmodespan\">offline mode</span> but it is <span class=\"stressimportant\">important</span> that you understand that you will be looking at <span class=\"italexpress\">outdated information</span>                                        and unable to refresh, change, post or send any data to Deputy servers.\n                                    </div>\n                                    <div class=\"sheriff-auth-offline-infotext linerdiv\">\n                                        If you understand and accept those limitations, hit that <span class=\"lilbtntxt enter\">enter app</span> button, otherwise, the <span class=\"lilbtntxt exit\">exit app</span> button is for you.\n                                    </div>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"sheriff-row sheriff-auth-row sheriff-offline-row btns-row2\">\n                        <ion-col class=\"sheriff-col sheriff-auth-col sheriff-offline-col exitbtn-col1\">\n                            <ion-button (click)=\"offlineExitEnterApp('exit')\" id=\"sheriff-auth-loginbox-exitapp\">\n                                <ion-icon id=\"sheriff-auth-loginbox-exitapp-ico\" name=\"log-out\"></ion-icon>\n                                <div id=\"sheriff-auth-offline-exitapp-btn-text\">Exit App</div>\n                            </ion-button>\n                        </ion-col>\n                        <ion-col *ngIf=\"!(!hasConnection && !gotSavedDLData)\" class=\"sheriff-col sheriff-auth-col sheriff-offline-col enterbtn-col2\">\n                            <ion-button (click)=\"offlineExitEnterApp('enter')\" id=\"sheriff-auth-loginbox-enterapp\">\n                                <ion-icon id=\"sheriff-auth-loginbox-enterapp-ico\" name=\"log-in\"></ion-icon>\n                                <div id=\"sheriff-auth-offline-enterapp-btn-text\">Enter App</div>\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- APP/DEPUTY LOGIN ACTION GRID -->\n            <div *ngIf=\"hasConnection\" id=\"sheriff-auth-loginbox-wrapperid\" class=\"sheriff-auth-loginbox-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-auth-loginbox-grid\">\n                    <ion-row class=\"sheriff-row sheriff-auth-loginbox-row heading-row\">\n                        <ion-col class=\"sheriff-col sheriff-auth-loginbox-col heading-col\">\n                            <div class=\"sheriff-auth-loginbox-heading-text\">\n                                <div *ngIf=\"!signingIn\" id=\"sheriff-auth-loginbox-signin-text\" class=\"loginbox-heading-class\" (click)=\"owenDev()\">One-time Sign In</div>\n                                <div *ngIf=\"signingIn && connectStage !== 'completed' && connectStage !== 'failed' && !frSetup\" id=\"sheriff-auth-loginbox-signingin-text\" class=\"loginbox-heading-class\">Signing In</div>\n                                <div *ngIf=\"signingIn && connectStage === 'completed' && !frSetup\" id=\"sheriff-auth-loginbox-signin-complete-text\" class=\"loginbox-heading-class\">Completed</div>\n                                <div *ngIf=\"signingIn && connectStage === 'failed'\" id=\"sheriff-auth-loginbox-signin-failed-text\" class=\"loginbox-heading-class\">Failed</div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"!signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row username-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col username-input-col\">\n                            <div class=\"sheriff-col sheriff-auth-loginbox-col username-leftindic-col\">\n                                <ion-icon class=\"sheriff-auth-loginbox-input-ico user left sheriff-auth-login-username-ico\" name=\"mail\"></ion-icon>\n                            </div>\n                            <ion-input ngModel #loginInputUser (ionChange)=\"loginBoxInput('sheriff-auth-login-username', 'change')\" disabled=\"false\" required=\"true\" clear-input=\"true\" autocomplete=\"off\" autocorrect=\"off\" autofocus=\"false\" value id='sheriff-auth-login-username' class='sheriff-auth-login-input user'\n                                (ionInput)=\"loginBoxInput('.sheriff-auth-loginbox-input-ico.user', 'input')\" (ionFocus)=\"loginBoxInput('sheriff-auth-login-username', 'focus')\" (ionBlur)=\"loginBoxInput('sheriff-auth-login-username', 'blur')\" pattern=\"email\"\n                                mode=\"md\" inputmode=\"email\" placeholder='Your Deputy Email' type=\"email\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"!signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row password-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col password-input-col\">\n                            <div class=\"sheriff-col sheriff-auth-loginbox-col password-leftindic-col\">\n                                <ion-icon class=\"sheriff-auth-loginbox-input-ico pass left sheriff-auth-login-password-ico\" name=\"medical\"></ion-icon>\n                            </div>\n                            <ion-input ngModel #loginInputPass (ionChange)=\"loginBoxInput('sheriff-auth-login-password', 'change')\" disabled=\"true\" required=\"true\" clear-input=\"true\" autocomplete=\"off\" autocorrect=\"off\" autofocus=\"false\" value id='sheriff-auth-login-password' class='sheriff-auth-login-input pass'\n                                (ionInput)=\"loginBoxInput('.sheriff-auth-loginbox-input-ico.pass', 'input')\" (ionFocus)=\"loginBoxInput('sheriff-auth-login-password', 'focus')\" (ionBlur)=\"loginBoxInput('sheriff-auth-login-password', 'blur')\" mode=\"md\" inputmode=\"password\"\n                                placeholder='Your Deputy Password' type=\"password\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row signingin-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col signingin-col\">\n                            <div *ngIf=\"!frSetup\" id=\"sheriff-auth-loginbox-signingin-progress-icon-wrapper\">\n                                <img *ngIf=\"connectStage === 'connect'\" src=\"../../assets/img/sheriffauth-1-connect.png\" class=\"sheriff-auth-loginbox-signingin-progress-ico connect\">\n                                <img *ngIf=\"connectStage === 'authenticate'\" src=\"../../assets/img/sheriffauth-2-authenticate.png\" class=\"sheriff-auth-loginbox-signingin-progress-ico authenticate\">\n                                <img *ngIf=\"connectStage === 'tokens'\" src=\"../../assets/img/sheriffauth-3-tokens.png\" class=\"sheriff-auth-loginbox-signingin-progress-ico tokens\">\n                            </div>\n                            <div *ngIf=\"connectStage === 'completed' && !frSetup\" class=\"animate__animated animate__zoomIn animate__faster\" id=\"sheriff-auth-loginbox-signingin-completed-icon-wrapper\">\n                                <img src=\"../../assets/img/sheriffauth-5-completed.png\" class=\"sheriff-auth-loginbox-signingin-completed-ico\">\n                            </div>\n                            <div *ngIf=\"connectStage === 'failed' && !frSetup\" class=\"animate__animated animate__flash animate__slower animate__infinite\" id=\"sheriff-auth-loginbox-signingin-failed-icon-wrapper\">\n                                <img src=\"../../assets/img/sheriff-auth-error-bigico.png\" class=\"sheriff-auth-loginbox-signingin-failed-ico\">\n                            </div>\n                            <div id=\"sheriff-auth-loginbox-signingin-shield-overlay-wrapper\"></div>\n                            <div id=\"sheriff-auth-loginbox-signingin-shield-darkbacker\"></div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row signingin-statustext-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col signingin-statustext-col\">\n                            <div *ngIf=\"connectStage !== 'completed' && connectStage !== 'failed' && !frSetup\" class=\"sheriff-auth-signingin-progress-stageno-text-wrapper\">\n                                <span class=\"stageno-text connect\" *ngIf=\"connectStage === 'connect'\">1</span>\n                                <span class=\"stageno-text authenticate\" *ngIf=\"connectStage === 'authenticate'\">2</span>\n                                <span class=\"stageno-text tokens\" *ngIf=\"connectStage === 'tokens'\">3</span>\n                                <span class=\"lilvertdiv\">|</span>3\n                                <span class=\"lilhorodiv\">-</span>\n                            </div>\n                            <div *ngIf=\"connectStage === 'connect'\" class=\"sheriff-auth-signingin-progress-text connect\">Connecting...</div>\n                            <div *ngIf=\"connectStage === 'authenticate'\" class=\"sheriff-auth-signingin-progress-text authenticate\">Authenticating...</div>\n                            <div *ngIf=\"connectStage === 'tokens'\" class=\"sheriff-auth-signingin-progress-text tokens\">Obtaining Token...</div>\n                            <div *ngIf=\"connectStage === 'completed'\" class=\"animate__animated animate__flipInX sheriff-auth-signingin-progress-text completed\">Saddle-up, pilgram.</div>\n                            <div *ngIf=\"connectStage === 'failed'\" class=\"animate__animated animate__flipInX sheriff-auth-signingin-progress-text failed\">Login Failed!</div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"!signingIn\" class=\"sheriff-row sheriff-auth-loginbox-row logincancelbtn-row\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-auth-loginbox-col login-btn-col\">\n                            <div *ngIf=\"authLoginBtn.disabled\" id=\"sheriff-auth-loginbox-helpertext-wrapper\">\n                                <div id=\"sheriff-auth-loginbox-helper-text\">\n                                    <div class=\"animate__animated animate__fadeIn\" id=\"sheriff-auth-loginbox-helper-initial\">Sign in with your <img src=\"../../assets/img/sheriff-deputy-logoname-white-small.png\" class=\"lildeputylogoname\"> email/password</div>\n                                </div>\n                            </div>\n                            <ion-button #authLoginBtn disabled=\"true\" (click)=\"loginBoxSignIn()\" id=\"sheriff-auth-loginbox-loginbtn\" class=\"animate__animated animate__flipInX sheriff-auth-login-button loginbtn\">\n                                <ion-icon class=\"sheriff-ico sheriff-auth-logincancel-btn-ico login\" name=\"log-in\"></ion-icon>\n                                <div class=\"sheriff-btn-label sheriff-auth-logincancel-btn-label login animate__animated animate__fadeIn\">Save & Sign In</div>\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- DEPUTY API AUTH PROGRESS GRID -->\n            <div *ngIf=\"signingIn\" id=\"sheriff-auth-dpauthinprogress-wrapperid\" class=\"sheriff-auth-dpauthinprogress-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-auth-dpauthinprogress-grid\">\n                    <ion-row class=\"sheriff-row sheriff-auth-dpauthinprogress-row row1\">\n                        <ion-col class=\"sheriff-col sheriff-auth-dpauthinprogress-col col1\">\n                            <div class=\"sheriff-auth-dpauthinprogress-bar-wrapper\">\n                                <ion-progress-bar id=\"sheriff-auth-dpauthinprogress-bar\" value=\"{{ dpAuthPBarPerc }}\"></ion-progress-bar>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- END AUTH ACTIONS WRAPPER -->\n        </div>\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_auth_module_ts-es5.js.map