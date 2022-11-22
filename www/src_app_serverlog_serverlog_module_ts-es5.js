(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_serverlog_serverlog_module_ts"], {
    /***/
    36958:
    /*!***********************************************!*\
      !*** ./src/app/serverlog/serverlog.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServerlogPageModule": function ServerlogPageModule() {
          return (
            /* binding */
            _ServerlogPageModule
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


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      29184);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _serverlog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./serverlog.page */
      53001);

      var routes = [{
        path: '',
        component: _serverlog_page__WEBPACK_IMPORTED_MODULE_0__.ServerlogPage
      }];

      var _ServerlogPageModule = function ServerlogPageModule() {
        _classCallCheck(this, ServerlogPageModule);
      };

      _ServerlogPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()],
        declarations: [_serverlog_page__WEBPACK_IMPORTED_MODULE_0__.ServerlogPage]
      })], _ServerlogPageModule);
      /***/
    },

    /***/
    53001:
    /*!*********************************************!*\
      !*** ./src/app/serverlog/serverlog.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServerlogPage": function ServerlogPage() {
          return (
            /* binding */
            _ServerlogPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_serverlog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./serverlog.page.html */
      33564);
      /* harmony import */


      var _serverlog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./serverlog.page.scss */
      93411);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/sqlite.service */
      90636);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/events.service */
      80106);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var _services_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/detail.service */
      52153);
      /* harmony import */


      var _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/deputy.service */
      22092);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/datetime.service */
      12826);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/storage.service */
      71188);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__); ////////////////////////////////////////////////////////////////////////////////////////


      var _ServerlogPage = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////
        function ServerlogPage(evServ, logger, platform, detailServ, deputy, dT, navCtrl, loadCtrl, menuCtrl, modalCtrl, storeServ, sqlServ, appRef) {
          _classCallCheck(this, ServerlogPage);

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
          this.appRef = appRef; ////////////////////////////////////////////////////////////////////////////////////////

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
          this.noPeople = null;
          this.pplArr = [];
          this.isRefreshing = false; //----------------------

          this.rawLogData = '';
          this.logData = [];
          this.rawNotifData = '';
          this.notifData = []; //----------------------

          this.headerBtn = 'all';
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(ServerlogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myObj = this.detailServ.myObj;
            this.meObj = this.detailServ.meObj;
            this.meEmpId = this.detailServ.meEmpId;
            this.pplArr = this.detailServ.pplArr;
            this.pageEnterAnim();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.logger.info('[ServerLog|ionViewDidEnter] ()...');
            this.evServ.publish('doPageEnterAnim', null);
            this.doInitServerLog();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.logger.info('[ServerLog|ionViewWillLeave] ()...');
            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-leftbar.serverlog');
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title-leftanimbar-inner.serverlog');
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title.tight-wrap.serverlog');
            jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).css('width', '0px').removeClass('dimmed');
            jquery__WEBPACK_IMPORTED_MODULE_8__(animBarEnd).removeClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_8__(titleText).removeClass('scrolledin');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "fetchLogData",
          value: function fetchLogData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var getLDRes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('[ServerLog|fetchLogData] ()...');
                      _context.next = 3;
                      return this.deputy.getServerLog();

                    case 3:
                      getLDRes = _context.sent;

                      if (!getLDRes.result) {
                        _context.next = 8;
                        break;
                      }

                      return _context.abrupt("return", Promise.resolve({
                        result: true,
                        data: getLDRes.data
                      }));

                    case 8:
                      return _context.abrupt("return", Promise.resolve({
                        result: false
                      }));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "fetchNotifData",
          value: function fetchNotifData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var getLDRes;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[ServerLog|fetchNotifData] ()...');
                      _context2.next = 3;
                      return this.deputy.getServerNotif();

                    case 3:
                      getLDRes = _context2.sent;

                      if (!getLDRes.result) {
                        _context2.next = 8;
                        break;
                      }

                      return _context2.abrupt("return", Promise.resolve({
                        result: true,
                        data: getLDRes.data
                      }));

                    case 8:
                      return _context2.abrupt("return", Promise.resolve({
                        result: false
                      }));

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "toggleHeaderBtn",
          value: function toggleHeaderBtn() {
            console.log('WAS: ' + this.headerBtn);
            this.headerBtn === 'all' ? this.headerBtn = 'notifs' : this.headerBtn = 'all';
            console.log('NOW: ' + this.headerBtn);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "renderLogData",
          value: function renderLogData(rawLData) {
            this.logger.info('[ServerLog|renderLogData] ()...');
            this.rawLogData = rawLData;
            var splitD = this.rawLogData.split('\n');
            var tdStr = this.dT.format(new Date(), 'dd/MM/yyyy');

            for (var i = 0; i < splitD.length; i++) {
              this.logData.push(String(splitD[i]).replace(tdStr + ' ', ''));
            }

            ;
            return Promise.resolve(true);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "renderNotifData",
          value: function renderNotifData(rawNData) {
            this.logger.info('[ServerLog|renderNotifData] ()...');
            this.rawNotifData = rawNData;
            var splitD = this.rawNotifData.split('\n');
            var tdStr = this.dT.format(new Date(), 'dd/MM/yyyy');

            for (var i = 0; i < splitD.length; i++) {
              this.notifData.push(String(splitD[i]).replace(tdStr + ' ', ''));
            }

            ;
            return Promise.resolve(true);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doInitServerLog",
          value: function doInitServerLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var fetchLRes, fetchNRes;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.logger.info('[ServerLog|doInitServerLog] ()...');
                      _context3.next = 3;
                      return this.fetchLogData();

                    case 3:
                      fetchLRes = _context3.sent;
                      console.log(fetchLRes);

                      if (fetchLRes.result) {
                        this.renderLogData(fetchLRes.data);
                      }

                      ;
                      _context3.next = 9;
                      return this.fetchNotifData();

                    case 9:
                      fetchNRes = _context3.sent;
                      console.log(fetchNRes);

                      if (fetchNRes.result) {
                        this.renderNotifData(fetchNRes.data);
                      }

                      ;

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doServerLogRefresh",
          value: function doServerLogRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this = this;

              var backupLRaw, backupLData, backupNRaw, backupNData;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.logger.info('[ServerLog|doServerLogRefresh]');
                      backupLRaw = this.rawLogData, backupLData = this.logData, backupNRaw = this.rawNotifData, backupNData = this.notifData;
                      this.isRefreshing = true;
                      setTimeout(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var fetchLRes, fetchNRes;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  this.rawLogData = '';
                                  this.logData = [];
                                  this.rawNotifData = '';
                                  this.notifData = [];
                                  _context4.next = 6;
                                  return this.fetchLogData();

                                case 6:
                                  fetchLRes = _context4.sent;

                                  if (!fetchLRes.result) {
                                    _context4.next = 12;
                                    break;
                                  }

                                  _context4.next = 10;
                                  return this.renderLogData(fetchLRes.data);

                                case 10:
                                  _context4.next = 14;
                                  break;

                                case 12:
                                  this.rawLogData = backupLRaw;
                                  this.logData = backupLData;

                                case 14:
                                  ;
                                  _context4.next = 17;
                                  return this.fetchNotifData();

                                case 17:
                                  fetchNRes = _context4.sent;

                                  if (!fetchNRes.result) {
                                    _context4.next = 23;
                                    break;
                                  }

                                  _context4.next = 21;
                                  return this.renderNotifData(fetchNRes.data);

                                case 21:
                                  _context4.next = 25;
                                  break;

                                case 23:
                                  this.rawNotifData = backupNRaw;
                                  this.logData = backupNData;

                                case 25:
                                  ;
                                  this.isRefreshing = false;
                                  event.target.complete();

                                case 28:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      }, 250);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "pageEnterAnim",
          value: function pageEnterAnim() {
            var _this2 = this;

            this.logger.info('[ServerLog|pageEnterAnim] ()...');
            this.evServ.subscribe('doPageEnterAnim', function () {
              var pageKey = 'serverlog';
              var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-slogo.' + pageKey);
              var preImg = '../../assets/img/slogo-';
              var cProgEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-progcirc.' + pageKey);
              var patchEles = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
              var starEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-star.' + pageKey);
              var pageTitle = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-title.' + pageKey);
              var titleBar = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-leftbar.' + pageKey);
              var leftCol = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-page-header-col.left-col.' + pageKey);
              var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title-leftanimbar-inner.' + pageKey);
              var titleText = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title.tight-wrap.' + pageKey);
              var calcBarW = Math.round(jquery__WEBPACK_IMPORTED_MODULE_8__(leftCol).outerWidth() + 6 - (jquery__WEBPACK_IMPORTED_MODULE_8__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_8__(pageTitle).outerWidth())) + 'px';
              _this2.leftAnimBarW = calcBarW;
              jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).addClass('hidden');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).addClass('hcl-star-startanim');
                _this2.progCirc.outerStrokeColor = '#FF9800';
                _this2.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'g.png');

                _this2.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');

                setTimeout(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'w.png');

                  _this2.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');

                  jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).addClass('tabtilt');
                  jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).css('width', calcBarW);
                  setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_8__(animBarEnd).addClass('showing');
                    jquery__WEBPACK_IMPORTED_MODULE_8__(titleText).addClass('scrolledin');
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).addClass('dimmed');
                      jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).removeClass('tabtilt');
                    }, 200);
                  }, 200);
                  setTimeout(function () {
                    _this2.progCirc.percent = 0;
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_8__(cProgEle).css('display', 'unset');
                    }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).removeClass('hcl-star-startanim');

                    _this2.evServ.destroy('doPageEnterAnim');
                  }, 600);
                }, 400);
              }, 300);
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[ServerLog|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');

            var doAni = function doAni() {
              return new Promise(function (resolve) {
                var aniStr = 'animate__animated animate__' + aniName;
                var delStr = 'animDel-' + aniDel;
                var durStr = 'animDur-' + aniDur;
                jquery__WEBPACK_IMPORTED_MODULE_8__(theEle).on('animationend', function () {
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
            };

            doAni();
          }
        }]);

        return ServerlogPage;
      }();

      _ServerlogPage.ctorParameters = function () {
        return [{
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService
        }, {
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_10__.NGXLogger
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
        }, {
          type: _services_detail_service__WEBPACK_IMPORTED_MODULE_4__.DetailService
        }, {
          type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__.DeputyService
        }, {
          type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_6__.DateTimeService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService
        }, {
          type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_2__.SQLiteService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ApplicationRef
        }];
      };

      _ServerlogPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-serverlog',
        template: _raw_loader_serverlog_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_serverlog_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _ServerlogPage);
      /***/
    },

    /***/
    93411:
    /*!***********************************************!*\
      !*** ./src/app/serverlog/serverlog.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXJsb2cucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    33564:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/serverlog/serverlog.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n  <ion-toolbar class=\"sheriff-toolbar\">\n      <div class=\"sheriff-header-background-wrapper\">\n          <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n          <div class=\"sheriff-header-background-inner-wrapper\">\n              <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                  <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                      <ion-col class=\"sheriff-col sheriff-page-header-col left-col serverlog\">\n                          <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar serverlog\">\n                              <div class=\"sheriff-title-leftanimbar-inner serverlog\"></div>\n                          </div>\n                          <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                              <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title serverlog\">\n                                  <div class=\"sheriff-title tight-wrap serverlog\">serverlog</div>\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                          <div class=\"sheriff-page-header-logo-wrapper\">\n                              <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                  <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring serverlog\"></div>\n                                  <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle serverlog hcl-progcirc serverlog\">\n                                      <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                          [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                  </div>\n                                  <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch serverlog\">\n                                      <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch serverlog\"></div>\n                                  </div>\n                                  <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star serverlog\">\n                                  <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo serverlog\">\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                          <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                              <div class=\"sheriff-page-backbtn-wrapper serverlogment\">\n                                  <ion-back-button icon=\"chevron-back-outline\" class=\"sheriff-backbtn serverlog\" defaultHref=\"/tabs\"></ion-back-button>\n                              </div>\n                              <div class=\"sheriff-menu-button-wrapper\">\n                                  <ion-menu-button class=\"sheriff-menu-button serverlog\" autoHide=\"false\">\n                                      <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                  </ion-menu-button>\n                              </div>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sheriff-content tab-content serverlog\">\n  <!-- PAGE REFRESHER -->\n  <ion-refresher class=\"sheriff-refresher page serverlog\" slot=\"fixed\" (ionRefresh)=\"doServerLogRefresh($event)\">\n      <div class=\"sheriff-refresher-noise-wrapper\">\n          <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n      </div>\n  </ion-refresher>\n  <!-- PAGE-CONTENT -->\n  <!-- CONTENT HEADING -->\n  <div class=\"sheriff-tabcontent-mainheading-wrapper serverlog\">\n      <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid serverlog\">\n          <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 serverlog\">\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 serverlog\">\n              </ion-col>\n              <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 serverlog\">\n                  <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-serverlog.png\">\n              </ion-col>\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 serverlog\">\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>  \n  <!-- CONTENT WRAPPER -->\n  <div class=\"sheriff-serverlog-page main-page-outter-wrapper\">\n    <div class=\"sheriff-serverlog-page-togglebtn-header-wrapper\">\n      <ion-grid class=\"sheriff-grid sheriff-serverlog-togglebtnheader-grid\">\n        <ion-row class=\"sheriff-row sheriff-serverlog-togglebtnheader-row\">\n          <ion-col size=\"6\" class=\"sheriff-col sheriff-serverlog-togglebtnheader-col all-logs\">\n            <ion-button (click)=\"toggleHeaderBtn()\" [ngClass]=\"{'logbanbtn-selected':headerBtn!=='all'}\" class=\"sheriff-btn sheriff-togglebtnheader-btn all-logs\">\n              <div class=\"sheriff-togglebtnheader-btn-wrapper all-logs\">\n                <ion-icon class=\"sheriff-btn-ico sheriff-togglebtnheader-btn-ico all-logs\" name=\"list\"></ion-icon>\n                <div class=\"sheriff-btn-txt sheriffbtnheaderbtn-txt all-logs\">all console msgs</div>\n              </div>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\" class=\"sheriff-col sheriff-serverlog-togglebtnheader-col notifs\">\n            <ion-button (click)=\"toggleHeaderBtn()\" [ngClass]=\"{'logbanbtn-selected':headerBtn!=='notifs'}\" class=\"sheriff-btn sheriff-togglebtnheader-btn notifs\">\n              <div class=\"sheriff-togglebtnheader-btn-wrapper notifs\">\n                <ion-icon class=\"sheriff-btn-ico sheriff-togglebtnheader-btn-ico notifs\" name=\"notifications\"></ion-icon>\n                <div class=\"sheriff-btn-txt sheriffbtnheaderbtn-txt notifs\">notifications</div>\n              </div>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngIf=\"headerBtn==='all'\" class=\"sheriff-serverlog-page main-page-inner-wrapper all-logs\">\n      <div [ngClass]=\"{'fadelogsout':isRefreshing}\" class=\"sheriff-serverlog-page logdata-container all-logs\">\n        <div *ngFor=\"let logLine of logData;let i=index\" [ngStyle]=\"{'animation-delay':250+(i*50)+'ms'}\" class=\"sheriff-serverlog-line-div logline{{i}} animate__animated animate__fadeIn animDur-250\">\n          {{logLine}}\n        </div>\n      </div>  \n    </div>\n    <div *ngIf=\"headerBtn==='notifs'\" class=\"sheriff-serverlog-page main-page-inner-wrapper notifs\">\n      <div [ngClass]=\"{'fadelogsout':isRefreshing}\" class=\"sheriff-serverlog-page logdata-container notifs\">\n        <div *ngFor=\"let notifLine of notifData;let i=index\" [ngStyle]=\"{'animation-delay':250+(i*50)+'ms'}\" class=\"sheriff-serverlog-line-div logline{{i}} animate__animated animate__fadeIn animDur-250\">\n          {{notifLine}}\n        </div>\n      </div>  \n    </div>\n  </div>\n  <!-- END OF PAGE-CONTENT -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_serverlog_serverlog_module_ts-es5.js.map