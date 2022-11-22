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

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_snoop_snoop_module_ts"], {
    /***/
    47607:
    /*!***************************************!*\
      !*** ./src/app/snoop/snoop.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SnoopPageModule": function SnoopPageModule() {
          return (
            /* binding */
            _SnoopPageModule
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


      var _snoop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./snoop.page */
      87424);

      var routes = [{
        path: '',
        component: _snoop_page__WEBPACK_IMPORTED_MODULE_0__.SnoopPage
      }];

      var _SnoopPageModule = function SnoopPageModule() {
        _classCallCheck(this, SnoopPageModule);
      };

      _SnoopPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()],
        declarations: [_snoop_page__WEBPACK_IMPORTED_MODULE_0__.SnoopPage]
      })], _SnoopPageModule);
      /***/
    },

    /***/
    87424:
    /*!*************************************!*\
      !*** ./src/app/snoop/snoop.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SnoopPage": function SnoopPage() {
          return (
            /* binding */
            _SnoopPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_snoop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./snoop.page.html */
      99906);
      /* harmony import */


      var _snoop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./snoop.page.scss */
      75089);
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


      var _SnoopPage = /*#__PURE__*/function () {
        //----------------------
        ////////////////////////////////////////////////////////////////////////////////////////
        function SnoopPage(evServ, logger, platform, detailServ, deputy, dT, navCtrl, loadCtrl, menuCtrl, modalCtrl, storeServ, sqlServ, appRef) {
          _classCallCheck(this, SnoopPage);

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

          this.rawSnoopData = '';
          this.snoopD = [];
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(SnoopPage, [{
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
            this.logger.info('[Snoop|ionViewDidEnter] ()...');
            this.evServ.publish('doPageEnterAnim', null);
            this.doInitSnoop();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.logger.info('[Snoop|ionViewWillLeave] ()...');
            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-leftbar.snoop');
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title-leftanimbar-inner.snoop');
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title.tight-wrap.snoop');
            jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).css('width', '0px').removeClass('dimmed');
            jquery__WEBPACK_IMPORTED_MODULE_8__(animBarEnd).removeClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_8__(titleText).removeClass('scrolledin');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "fetchSnoopData",
          value: function fetchSnoopData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var getSDRes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('[Snoop|fetchSnoopData] ()...');
                      _context.next = 3;
                      return this.deputy.getSnoopData();

                    case 3:
                      getSDRes = _context.sent;

                      if (!getSDRes.result) {
                        _context.next = 8;
                        break;
                      }

                      return _context.abrupt("return", Promise.resolve({
                        result: true,
                        data: getSDRes.data
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
          key: "renderSnoopData",
          value: function renderSnoopData(rawSData) {
            var _this = this;

            this.logger.info('[Snoop|renderSnoopData] ()...');
            this.rawSnoopData = rawSData;

            var _loop = function _loop() {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  sK = _Object$entries$_i[0],
                  sV = _Object$entries$_i[1];

              var dayObj = {
                date: '',
                rosters: [],
                ttlR: 0,
                ttlHrs: 0
              };

              if (sV && Array.isArray(sV) && sV.length > 0) {
                var dateD = _this.dT.parse(String(sK), 'yyyyMMdd');

                var dateStr = _this.dT.format(dateD, 'EEEE, d MMM yyyy');

                dayObj.date = dateStr;

                var _loop2 = function _loop2(i) {
                  dayObj.ttlR++;
                  var rosItemO = sV[i];

                  var empMatch = _this.pplArr.filter(function (p) {
                    return String(p.EmpId) === String(sV[i].Employee);
                  })[0];

                  var nName = '',
                      ffNN = '';
                  var DNameArr = empMatch.DisplayName.split(' ');

                  if (DNameArr.length > 1) {
                    nName = DNameArr[0] + ' ' + DNameArr[1].charAt(0) + '.';
                  } else {
                    nName = empMatch.DisplayName;
                  }

                  ;
                  var fL = nName.charAt(0).toUpperCase();
                  var restN = nName.substring(1, nName.length - 1);
                  var fNN = fL + restN;
                  var fNNArr = fNN.split(' ');

                  if (fNNArr.length > 1) {
                    ffNN = fNNArr[0] + ' ' + fNNArr[1].toUpperCase() + '.';
                  } else {
                    ffNN = fNN;
                  }

                  ;
                  rosItemO['EmpDName'] = ffNN;
                  dayObj.ttlHrs += Number(sV[i].TotalTime);
                  dayObj.rosters.push(rosItemO);
                };

                for (var i = 0; i < sV.length; i++) {
                  _loop2(i);
                }

                ;

                _this.snoopD.push(dayObj);
              }
            };

            for (var _i = 0, _Object$entries = Object.entries(rawSData); _i < _Object$entries.length; _i++) {
              _loop();
            }

            ;
            return Promise.resolve(true);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doInitSnoop",
          value: function doInitSnoop() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var fetchSRes;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[Snoop|doInitSnoop] ()...');
                      _context2.next = 3;
                      return this.fetchSnoopData();

                    case 3:
                      fetchSRes = _context2.sent;
                      console.log(fetchSRes);

                      if (fetchSRes.result) {
                        this.renderSnoopData(fetchSRes.data);
                      }

                      ;

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doSnoopRefresh",
          value: function doSnoopRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var backupSRaw, backupSData;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.logger.info('[Snoop|doSnoopRefresh]');
                      backupSRaw = this.rawSnoopData, backupSData = this.snoopD;
                      this.isRefreshing = true;
                      setTimeout(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var fetchSRes;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  this.rawSnoopData = '';
                                  this.snoopD = [];
                                  _context3.next = 4;
                                  return this.fetchSnoopData();

                                case 4:
                                  fetchSRes = _context3.sent;

                                  if (!fetchSRes.result) {
                                    _context3.next = 10;
                                    break;
                                  }

                                  _context3.next = 8;
                                  return this.renderSnoopData(fetchSRes.data);

                                case 8:
                                  _context3.next = 12;
                                  break;

                                case 10:
                                  this.rawSnoopData = backupSRaw;
                                  this.snoopD = backupSData;

                                case 12:
                                  ;
                                  ;
                                  this.isRefreshing = false;
                                  event.target.complete();

                                case 16:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, 250);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "pageEnterAnim",
          value: function pageEnterAnim() {
            var _this3 = this;

            this.logger.info('[Snoop|pageEnterAnim] ()...');
            this.evServ.subscribe('doPageEnterAnim', function () {
              var pageKey = 'snoop';
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
              _this3.leftAnimBarW = calcBarW;
              jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).addClass('hidden');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).addClass('hcl-star-startanim');
                _this3.progCirc.outerStrokeColor = '#FF9800';
                _this3.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'g.png');

                _this3.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');

                setTimeout(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'w.png');

                  _this3.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');

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
                    _this3.progCirc.percent = 0;
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_8__(cProgEle).css('display', 'unset');
                    }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).removeClass('hcl-star-startanim');

                    _this3.evServ.destroy('doPageEnterAnim');
                  }, 600);
                }, 400);
              }, 300);
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[Snoop|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');

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

        return SnoopPage;
      }();

      _SnoopPage.ctorParameters = function () {
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

      _SnoopPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-snoop',
        template: _raw_loader_snoop_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_snoop_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _SnoopPage);
      /***/
    },

    /***/
    75089:
    /*!***************************************!*\
      !*** ./src/app/snoop/snoop.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbm9vcC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    99906:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/snoop/snoop.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n  <ion-toolbar class=\"sheriff-toolbar\">\n      <div class=\"sheriff-header-background-wrapper\">\n          <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n          <div class=\"sheriff-header-background-inner-wrapper\">\n              <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                  <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                      <ion-col class=\"sheriff-col sheriff-page-header-col left-col snoop\">\n                          <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar snoop\">\n                              <div class=\"sheriff-title-leftanimbar-inner snoop\"></div>\n                          </div>\n                          <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                              <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title snoop\">\n                                  <div class=\"sheriff-title tight-wrap snoop\">snoop data</div>\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                          <div class=\"sheriff-page-header-logo-wrapper\">\n                              <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                  <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring snoop\"></div>\n                                  <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle snoop hcl-progcirc snoop\">\n                                      <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                          [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                  </div>\n                                  <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch snoop\">\n                                      <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch snoop\"></div>\n                                  </div>\n                                  <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star snoop\">\n                                  <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo snoop\">\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                          <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                              <div class=\"sheriff-page-backbtn-wrapper snoopment\">\n                                  <ion-back-button icon=\"chevron-back-outline\" class=\"sheriff-backbtn snoop\" defaultHref=\"/tabs\"></ion-back-button>\n                              </div>\n                              <div class=\"sheriff-menu-button-wrapper\">\n                                  <ion-menu-button class=\"sheriff-menu-button snoop\" autoHide=\"false\">\n                                      <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                  </ion-menu-button>\n                              </div>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sheriff-content tab-content snoop\">\n  <!-- PAGE REFRESHER -->\n  <ion-refresher class=\"sheriff-refresher page snoop\" slot=\"fixed\" (ionRefresh)=\"doSnoopRefresh($event)\">\n      <div class=\"sheriff-refresher-noise-wrapper\">\n          <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n      </div>\n  </ion-refresher>\n  <!-- PAGE-CONTENT -->\n  <!-- CONTENT HEADING -->\n  <div class=\"sheriff-tabcontent-mainheading-wrapper snoop\">\n      <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid snoop\">\n          <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 snoop\">\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 snoop\">\n              </ion-col>\n              <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 snoop\">\n                  <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-snoop.png\">\n              </ion-col>\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 snoop\">\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>  \n  <!-- CONTENT WRAPPER -->\n  <div class=\"sheriff-snoop-page main-page-outter-wrapper\">\n    <div *ngIf=\"snoopD!==null\" class=\"sheriff-snoop-page main-page-inner-wrapper\">\n      <div *ngFor=\"let snoopDay of snoopD;let i=index\" [ngStyle]=\"{'animation-delay':250+(i*50)+'ms'}\" class=\"sheriff-snoop-line-div snoopday{{i}} animate__animated animate__fadeIn animDur-250\">\n        <ion-grid class=\"sheriff-grid snoopday-grid\">\n          <ion-row class=\"sheriff-grid snoopday-daytitle-row\">\n            <ion-col size=\"8\" class=\"sheriff-grid snoopday-daytitle-col date\">\n              {{snoopDay.date}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-daytitle-col shifts\">\n              <span class=\"snoop-daytitle no\">{{snoopDay.ttlR}}</span><span class=\"snoop-daytitle txt\">Shifts</span>\n            </ion-col>\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-daytitle-col hrs\">\n              <span class=\"snoop-daytitle no\">{{snoopDay.ttlHrs}}</span><span class=\"snoop-daytitle txt\">Hrs</span>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let snoopRos of snoopD[i].rosters;let ri=index\" class=\"sheriff-grid snoopday-item-row\">\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-item-col rosid-col\">\n              #{{snoopRos.Id}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"sheriff-grid snoopday-item-col rosemp-col\">\n              {{snoopRos.EmpDName}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"sheriff-grid snoopday-item-col rosarea-col\">\n              {{snoopRos.OperationalUnitObject.OperationalUnitName}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"sheriff-grid snoopday-item-col rostt-col\">\n              {{snoopRos.TotalTime}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  <!-- END OF PAGE-CONTENT -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_snoop_snoop_module_ts-es5.js.map