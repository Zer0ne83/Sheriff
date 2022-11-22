(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_tabs_tabtsheets_tabtsheets_module_ts"], {
    /***/
    61067:
    /*!******************************************************!*\
      !*** ./src/app/tabs/tabtsheets/tabtsheets.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabTSheetsPageModule": function TabTSheetsPageModule() {
          return (
            /* binding */
            _TabTSheetsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../directives/directives.module */
      78434);
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-circle-progress */
      29184);
      /* harmony import */


      var _tabtsheets_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabtsheets.page */
      79128);

      var routes = [{
        path: '',
        component: _tabtsheets_page__WEBPACK_IMPORTED_MODULE_1__.TabTSheetsPage
      }];

      var _TabTSheetsPageModule = function TabTSheetsPageModule() {
        _classCallCheck(this, TabTSheetsPageModule);
      };

      _TabTSheetsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule],
        declarations: [_tabtsheets_page__WEBPACK_IMPORTED_MODULE_1__.TabTSheetsPage]
      })], _TabTSheetsPageModule);
      /***/
    },

    /***/
    79128:
    /*!****************************************************!*\
      !*** ./src/app/tabs/tabtsheets/tabtsheets.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabTSheetsPage": function TabTSheetsPage() {
          return (
            /* binding */
            _TabTSheetsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabtsheets_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabtsheets.page.html */
      86564);
      /* harmony import */


      var _tabtsheets_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabtsheets.page.scss */
      19916);
      /* harmony import */


      var _services_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/sync.service */
      43395);
      /* harmony import */


      var _modals_detail_tsheet_detail_tsheet_add_tsheet_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../modals/detail/tsheet-detail/tsheet-add/tsheet-add.page */
      11628);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/datetime.service */
      12826);
      /* harmony import */


      var _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/deputy.service */
      22092);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/storage.service */
      71188);
      /* harmony import */


      var _services_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../services/detail.service */
      52153);
      /* harmony import */


      var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../services/sqlite.service */
      90636);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_baseDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/baseDB */
      96414);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _popovers_datepresets_datepresets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../popovers/datepresets/datepresets.component */
      51568);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../services/events.service */
      80106);
      /* harmony import */


      var _modals_daterange_daterange_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../modals/daterange/daterange.page */
      34476);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var _modals_detail_tsheet_detail_tsheet_detail_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../modals/detail/tsheet-detail/tsheet-detail.page */
      72348);
      /* harmony import */


      var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @capacitor/dialog */
      63540);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! date-fns */
      50820);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! date-fns */
      12297);
      /* harmony import */


      var src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/fairwork.service */
      93405);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);

      var myls = localStorage; ////////////////////////////////////////////////////////////////////////////////////////

      var _TabTSheetsPage = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////
        function TabTSheetsPage(logger, sqlServ, dS, dT, router, route, modalCtrl, popCtrl, evServ, storeServ, deputy, platform, syncServ, fwServ) {
          var _this = this;

          _classCallCheck(this, TabTSheetsPage);

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
          this.fwServ = fwServ; ////////////////////////////////////////////////////////////////////////////////////////
          // Passed Nav Data

          this.hasNavData = false;
          this.navDataId = 0;
          this.tsForOpen = 0; // Tab/Page gVs

          this.hasLoaded = false;
          this.tabKey = 'tsheets';
          this.drModalOpts = {
            animated: false,
            showBackdrop: true,
            backdropDismiss: true,
            cssClass: 'daterange-modal-class',
            component: _modals_daterange_daterange_page__WEBPACK_IMPORTED_MODULE_12__.DateRangePage,
            keyboardClose: true
          };
          this.tsDetailModalOpts = {
            animated: false,
            showBackdrop: false,
            backdropDismiss: false,
            cssClass: 'tsheet-detail-modal-class',
            component: _modals_detail_tsheet_detail_tsheet_detail_page__WEBPACK_IMPORTED_MODULE_13__.TSheetDetailPage,
            keyboardClose: true
          };
          this.tsDetailModalOpen = false;
          this.addNewTSModalOpts = {
            animated: false,
            showBackdrop: false,
            backdropDismiss: false,
            cssClass: 'tsheet-detail-modal-class',
            component: _modals_detail_tsheet_detail_tsheet_add_tsheet_add_page__WEBPACK_IMPORTED_MODULE_3__.TSheetAddPage,
            keyboardClose: true
          };
          this.addNewTSModalOpen = false;
          this.datePresetsPopOpts = {
            animated: false,
            cssClass: 'sheriff-datepresets-popover',
            component: 'div'
          };
          this.workAvatar = myls.getItem('workAvatar'); // Show Income 

          this.showIncome = true; // Edit Mode

          this.editMode = false;
          this.eMConfirmOpen = false;
          this.eMIsDeleting = false;
          this.preventRefreshPull = false;
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
            animationDuration: 250
          };
          this.refreshProgPerc = 0; // Summary Bar -------------------

          this.showSearchBar = false;
          this.drModalOpen = false;
          this.dpPopOpen = false;
          this.workAreas = [];
          this.listOpts = null;
          this.toDateIsToday = true;
          this.isCustomRange = false; // DB Items ----------------------

          this.dbTblName = _services_baseDB__WEBPACK_IMPORTED_MODULE_9__.List2DBTblMap[this.router.url.split('/')[this.router.url.split('/').length - 1]];
          this.dbHasTbl = this.dS.getUDBTables().includes(this.dbTblName); // Whole List Items --------------

          this.initRes = [];
          this.initList = [];
          this.endOfList = false;
          this.batchLimit = 20;
          this.batchOffset = 0;
          this.batchStart = 0;
          this.batchEnd = 20; // List Order

          this.orderBy = 'StartTime';
          this.didSwapOrder = false;
          this.listItms = [];
          this.sGroupIndex = 0;
          this.allHrsTotal = 0;
          this.allIncomeTotal = 0;
          this.allGroupedHrsTotal = 0;
          this.allGroupedIncTotal = 0; // Refresh Items

          this.newItems = []; ////////////////////////////////////////////////////////////////////////////////////////

          this.calHeaderGroups = function (record, recordIndex, records) {
            var headData = {
              week: null,
              month: null
            };

            if (recordIndex === 0) {
              headData.week = _this.dT.format(_this.dT.sOW(new Date(record.Date)), 'd MMMM') + ' - ' + _this.dT.format(_this.dT.eOW(new Date(record.Date)), 'd MMMM yyyy');
              return headData;
            } else if (recordIndex > 0) {
              var prevD = new Date(records[recordIndex - 1].Date);
              var thisD = new Date(record.Date);

              if (!_this.dT.isSW(prevD, thisD)) {
                headData.week = _this.dT.format(_this.dT.sOW(thisD), 'd MMMM') + ' - ' + _this.dT.format(_this.dT.eOW(thisD), 'd MMMM yyyy');
              }

              ;

              if (!_this.dT.isSM(prevD, thisD)) {
                headData.month = _this.dT.gM(thisD);
              }

              ;
              return headData;
            } else {
              return null;
            }
          }; ////////////////////////////////////////////////////////////////////////////////////////


          this.groupTotals = function (record, recordIndex, records) {
            if (recordIndex + 1 !== records.length) {
              var nextD = new Date(records[recordIndex + 1].Date);
              var thisD = new Date(record.Date);
              _this.allHrsTotal += records[recordIndex].TotalTime;
              _this.allIncomeTotal += records[recordIndex].nIncome.t;

              if (!_this.dT.isSW(nextD, thisD)) {
                var weekTtlCount = 0;
                var weekTtlIncCount = 0;
                var gSI = _this.sGroupIndex;
                var gEI = recordIndex + 1;

                for (var i = gSI; i < gEI; i++) {
                  _this.allGroupedHrsTotal += records[i].TotalTime;
                  _this.allGroupedIncTotal += records[i].nIncome.t;
                  weekTtlCount += records[i].TotalTime;
                  weekTtlIncCount += records[i].nIncome.t;
                }

                ;
                _this.sGroupIndex = recordIndex + 1;
                var weekTtlMins = weekTtlCount * 60;
                var weekWholeHrs = Math.floor(weekTtlMins / 60);
                var weekRemainMins = Math.round(weekTtlMins - weekWholeHrs * 60);
                return {
                  t: {
                    h: weekWholeHrs.toFixed(0),
                    m: weekRemainMins.toFixed(0)
                  },
                  i: weekTtlIncCount.toFixed(0)
                };
              }
            } else {
              var thisRecHrs = records[recordIndex].TotalTime;
              var thisRecInc = records[recordIndex].nIncome.t;
              var balLWeekHrs = _this.allHrsTotal - _this.allGroupedHrsTotal + thisRecHrs;
              var balLWeekInc = _this.allIncomeTotal - _this.allGroupedIncTotal + thisRecInc;
              _this.allHrsTotal = 0;
              _this.allGroupedHrsTotal = 0;
              _this.allIncomeTotal = 0;
              _this.allGroupedIncTotal = 0;

              var _weekTtlMins = balLWeekHrs * 60;

              var _weekWholeHrs = Math.floor(_weekTtlMins / 60);

              var _weekRemainMins = Math.round(_weekTtlMins - _weekWholeHrs * 60);

              return {
                t: {
                  h: _weekWholeHrs.toFixed(0),
                  m: _weekRemainMins.toFixed(0)
                },
                i: balLWeekInc.toFixed(0)
              };
            }
          };

          this.route.queryParams.subscribe(function (pData) {
            if (Object.keys(_this.router.getCurrentNavigation().extras).includes('state')) {
              _this.hasNavData = true;
              _this.navDataOrigin = _this.router.getCurrentNavigation().extras.state.origin;
              _this.navDataId = _this.router.getCurrentNavigation().extras.state.id;
            } else {
              _this.hasNavData = false;
            }
          });
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(TabTSheetsPage, [{
          key: "openTSFromNavData",
          value: function openTSFromNavData(tsId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var inList, tsO, initLObIndex, tsORaw;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('[TabTSheets|openTSFromNavData] (' + tsId + ')...');
                      this.tsForOpen = 0;
                      inList = false;
                      initLObIndex = this.listItms.findIndex(function (ts) {
                        return ts.Id === tsId;
                      });

                      if (!(initLObIndex > 0)) {
                        _context.next = 10;
                        break;
                      }

                      inList = true;
                      tsO = this.listItms[initLObIndex];
                      this.tsForOpen = tsId;
                      _context.next = 17;
                      break;

                    case 10:
                      inList = false;
                      _context.next = 13;
                      return this.sqlServ.getSingleTimesheet(tsId);

                    case 13:
                      tsORaw = _context.sent;
                      _context.next = 16;
                      return this.formatTSheet(tsORaw);

                    case 16:
                      tsO = _context.sent;

                    case 17:
                      ;
                      setTimeout(function () {
                        if (inList) {
                          _this2.vScrollTSheets.positionForItem(initLObIndex).then(function (tsPos) {
                            var adjustPos = tsPos - 72;
                            console.log(adjustPos);

                            _this2.tsheetsContent.scrollToPoint(0, adjustPos, 500);
                          });
                        }

                        ;
                        setTimeout(function () {
                          _this2.openDetail(tsO);
                        }, 750);
                      }, 1000);

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.logger.info('[TabTSheets|ngOnInit] ()...');
            this.platform.ready().then(function () {
              setTimeout(function () {
                return _this3.hasLoaded = true;
              });

              _this3.doInitRefresh('init');
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doInitRefresh",
          value: function doInitRefresh(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var newIRes, iArrs, i;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[TabTasks|doReInitFresh] (' + mode + ')...');
                      this.initFetchData();

                      if (!(mode === 'refresh' || mode === 'init')) {
                        _context2.next = 9;
                        break;
                      }

                      if (this.isRefreshing) {
                        this.refreshProgPerc = 0;
                        this.refreshProgPerc += 10;
                        this.headerProgress('manual', 'change', this.refreshProgPerc);
                        this.evServ.subscribe('refreshTSProg', function (stage) {
                          if (stage === 'getapi') {
                            _this4.refreshProgPerc += 20;

                            _this4.headerProgress('manual', 'change', _this4.refreshProgPerc);
                          }

                          ;

                          if (stage === 'diffcheck') {
                            _this4.refreshProgPerc += 20;

                            _this4.headerProgress('manual', 'change', _this4.refreshProgPerc);
                          }

                          ;

                          if (stage === 'insertupload') {
                            _this4.refreshProgPerc += 20;

                            _this4.headerProgress('manual', 'change', _this4.refreshProgPerc);
                          }

                          ;

                          if (stage === 'render') {
                            _this4.refreshProgPerc += 20;

                            _this4.headerProgress('manual', 'change', _this4.refreshProgPerc);
                          }

                          ;
                        });
                      }

                      ;
                      _context2.next = 7;
                      return this.syncServ.doTSheetsSync(mode);

                    case 7:
                      newIRes = _context2.sent;

                      if (newIRes.length > 0) {
                        this.newItems = newIRes;
                        iArrs = ['initRes', 'initList', 'listItms'];

                        for (i = 0; i < iArrs.length; i++) {
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
                      } else {
                        this.logger.info('[TabTSheets|doReInitRefresh] (Refresh): No New TSheet Items Found');

                        if (this.isRefreshing) {
                          this.evServ.destroy('refreshTSProg');
                          this.refreshProgPerc += 80;
                          this.headerProgress('manual', 'change', this.refreshProgPerc);
                          setTimeout(function () {
                            _this4.headerProgress('manual', 'finish', null);
                          }, 250);
                        }
                      }

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "disableRefresher",
          value: function disableRefresher(togV) {
            this.preventRefreshPull = togV;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doInitSync",
          value: function doInitSync() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.logger.info('[TabTSheets|doInitSync] ()...');
                      this.syncServ.doTSheetsSync('init');

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var savedShowIncomeOpt;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.logger.info('[TabTSheets|ionViewWillEnter] ()...');
                      _context4.next = 3;
                      return this.storeServ.getObject('settingsPayratesOpts');

                    case 3:
                      savedShowIncomeOpt = _context4.sent;

                      if (savedShowIncomeOpt !== null) {
                        this.showIncome = savedShowIncomeOpt.show.value;
                      } else {
                        this.showIncome = true;
                      }

                      ;

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.logger.info('[TabTSheets|ionViewDidEnter] ()...');
            this.loadListPrefs();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "toUCase",
          value: function toUCase(s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "loadListPrefs",
          value: function loadListPrefs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var setListProps, stdTSListOpts, storedListOpts, newSLO, isListen;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
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

                      setListProps = function setListProps() {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var doStoreSave, isOK, newListP;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  doStoreSave = false;

                                  isOK = function isOK(p) {
                                    if (p !== null && p !== undefined && p !== '' && p.length > 0) {
                                      return true;
                                    } else {
                                      doStoreSave = true;
                                      return false;
                                    }
                                  };

                                  if (isOK(this.listOpts.orderDir)) {
                                    this.orderDir = this.listOpts.orderDir;
                                  } else {
                                    this.listOpts.orderDir = 'desc';
                                    this.orderDir = 'desc';
                                  }

                                  ;

                                  if (isOK(this.listOpts.datePreset)) {
                                    this.datePreset = this.listOpts.datePreset;
                                  } else {
                                    this.listOpts.datePreset = 'month';
                                    this.datePreset = 'month';
                                  }

                                  ;

                                  if (isOK(this.listOpts.datePresetValue)) {
                                    this.datePresetValue = this.listOpts.datePresetValue;
                                  } else {
                                    this.listOpts.datePresetValue = 'Month';
                                    this.datePresetValue = 'Month';
                                  }

                                  ;

                                  if (!doStoreSave) {
                                    _context5.next = 15;
                                    break;
                                  }

                                  _context5.next = 11;
                                  return this.storeServ.getObject(this.deputy.uUK + 'ListPrefs');

                                case 11:
                                  newListP = _context5.sent;

                                  if (newListP.hasOwnProperty('tsheets')) {
                                    newListP.tsheets = this.listOpts;
                                  } else {
                                    newListP['tsheets'] = this.listOpts;
                                  }

                                  ;
                                  this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', newListP);

                                case 15:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      };

                      stdTSListOpts = {
                        datePreset: 'month',
                        datePresetValue: 'Month',
                        orderDir: 'desc'
                      };

                      if (!(this.listOpts !== null)) {
                        _context6.next = 17;
                        break;
                      }

                      setListProps();
                      _context6.next = 21;
                      break;

                    case 17:
                      _context6.next = 19;
                      return this.storeServ.getObject(this.deputy.uUK + 'ListPrefs');

                    case 19:
                      storedListOpts = _context6.sent;

                      if (storedListOpts !== null) {
                        if (storedListOpts.hasOwnProperty('tsheets')) {
                          this.listOpts = storedListOpts.tsheets;
                          setListProps();
                        } else {
                          this.listOpts = stdTSListOpts;
                          setListProps();
                          newSLO = storedListOpts;
                          newSLO['tsheets'] = stdTSListOpts;
                          this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', newSLO);
                        }
                      } else {
                        this.listOpts = stdTSListOpts;
                        setListProps();
                        this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', {
                          shifts: null,
                          tsheets: stdTSListOpts
                        });
                      }

                    case 21:
                      isListen = this.evServ.channels['doInitFetchData'];

                      if (isListen) {
                        this.evServ.publish('doInitFetchData', true);
                      }

                      ;

                      if (this.hasNavData) {
                        this.openTSFromNavData(this.navDataId);
                      }

                      ;

                    case 26:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////  

        }, {
          key: "initFetchData",
          value: function initFetchData() {
            var _this6 = this;

            this.logger.info('[TabTSheets|initFetchData] (Event) Channel: doInitFetchData [Listening...]');
            this.evServ.subscribe('doInitFetchData', function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var mmObj, summaryF, summaryT, allDays, listRDays, presetDays, nowDT, summaryEnd, initResData;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        this.evServ.destroy('doInitFetchData');
                        this.batchOffset = 0;
                        this.sGroupIndex = 0;
                        this.allHrsTotal = 0;
                        this.allIncomeTotal = 0;
                        this.allGroupedHrsTotal = 0;
                        this.allGroupedIncTotal = 0;
                        this.prevTSDate = null;
                        this.logger.info('[TabTSheets|initFetchData] (Event) Channel: doInitFetchData [TIGGERED!]');

                        if (!this.dbHasTbl) {
                          _context7.next = 34;
                          break;
                        }

                        _context7.next = 12;
                        return this.sqlServ.getItemCount(this.dbTblName);

                      case 12:
                        this.listTtlItms = _context7.sent;

                        if (!(this.listTtlItms > 0)) {
                          _context7.next = 34;
                          break;
                        }

                        _context7.next = 16;
                        return this.sqlServ.getTSheetsDateRange();

                      case 16:
                        mmObj = _context7.sent;
                        this.minStartTimeUTS = mmObj.min;
                        this.maxStartTimeUTS = mmObj.max;
                        this.minStartTimeDate = this.dT.Dut(this.minStartTimeUTS);
                        this.maxStartTimeDate = this.dT.Dut(this.maxStartTimeUTS);

                        if (this.isCustomRange) {
                          this.btDateStartUTS = (0, date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(this.customRange.start);
                          this.btDateEndUTS = (0, date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(this.customRange.end);
                        } else {
                          allDays = this.dT.DiffInDays(new Date(), this.minStartTimeDate);
                          listRDays = {
                            week: 7,
                            fnight: 14,
                            month: 28,
                            qtr: 84,
                            half: 182,
                            year: 365,
                            all: allDays
                          };
                          presetDays = listRDays[this.datePreset];
                          nowDT = new Date();
                          this.btDateEndUTS = (0, date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(nowDT);
                          this.btDateStartUTS = this.btDateEndUTS - 86400 * presetDays;
                          summaryEnd = this.dT.Dut(this.btDateStartUTS);
                          summaryF = summaryEnd;
                          summaryT = nowDT;
                        }

                        ;
                        _context7.next = 25;
                        return this.sqlServ.getTSheetRangeCount(this.btDateStartUTS, this.btDateEndUTS);

                      case 25:
                        this.dbRangeCount = _context7.sent;
                        _context7.next = 28;
                        return this.sqlServ.getTSheetsRangeMinMax({
                          start: this.btDateStartUTS,
                          end: this.btDateEndUTS
                        });

                      case 28:
                        this.dbRangeMinMax = _context7.sent;
                        _context7.next = 31;
                        return this.sqlServ.getXTSheetItems({
                          start: this.btDateStartUTS,
                          end: this.btDateEndUTS
                        }, {
                          by: this.orderBy,
                          dir: this.orderDir
                        }, this.batchLimit, this.batchOffset);

                      case 31:
                        initResData = _context7.sent;
                        this.updateSummary(summaryF, summaryT, initResData);
                        this.initRenderList(initResData);

                      case 34:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initRenderList",
          value: function initRenderList(initResData) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this7 = this;

              var i, niceInitOb, waitNewLoop;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.logger.info('[TabTSheets|initRenderList] ()...');
                      this.initList = [];
                      this.listItms = [];
                      this.initRes = initResData;
                      i = 0;

                    case 5:
                      if (!(i < initResData.length)) {
                        _context8.next = 13;
                        break;
                      }

                      _context8.next = 8;
                      return this.formatTSheet(initResData[i]);

                    case 8:
                      niceInitOb = _context8.sent;
                      this.initList.push(niceInitOb);

                    case 10:
                      i++;
                      _context8.next = 5;
                      break;

                    case 13:
                      this.listItms = this.initList;

                      if (this.initRes.length === this.dbRangeCount) {
                        this.iScrollTSheets.disabled = true;
                        this.endOfList = true;
                      } else {
                        this.iScrollTSheets.disabled = false;
                        this.endOfList = false;
                      }

                      if (this.isRefreshing) {
                        this.refreshProgPerc += 10;
                        this.headerProgress('manual', 'update', this.refreshProgPerc);
                        setTimeout(function () {
                          _this7.headerProgress('manual', 'finish', null);
                        }, 250);

                        if (this.newItems.length > 0) {
                          waitNewLoop = setInterval(function () {
                            if (jquery__WEBPACK_IMPORTED_MODULE_16__('.tsheet-item-isnew-wrapper.isnew-' + _this7.newItems[0]).length > 0) {
                              clearInterval(waitNewLoop);
                              setTimeout(function () {
                                var aD = 0.30;

                                var _iterator = _createForOfIteratorHelper(_this7.newItems),
                                    _step;

                                try {
                                  var _loop = function _loop() {
                                    var newIId = _step.value;
                                    aD += 0.25;
                                    var tE = jquery__WEBPACK_IMPORTED_MODULE_16__('.tsheet-item-isnew-wrapper.isnew-' + newIId);
                                    jquery__WEBPACK_IMPORTED_MODULE_16__(tE).css('--animate-delay', aD.toString() + 's');
                                    jquery__WEBPACK_IMPORTED_MODULE_16__(tE).addClass('showisnew');
                                    setTimeout(function () {
                                      jquery__WEBPACK_IMPORTED_MODULE_16__(tE).removeClass('showisnew');
                                    }, 1000 + aD * 1000);
                                  };

                                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                    _loop();
                                  }
                                } catch (err) {
                                  _iterator.e(err);
                                } finally {
                                  _iterator.f();
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

                    case 18:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "updateSummary",
          value: function updateSummary(summaryFrom, summaryTo, rawLD) {
            this.logger.info('[TabTSheets|updateSummary] ()...');

            if (!this.isCustomRange) {
              this.summaryFromDate = this.dT.Nd(summaryFrom);
              this.summaryToDate = this.dT.Nd(summaryTo);
            }

            this.showItemCount = this.dbRangeCount;
            var startUTSIndex;
            var endUTSIndex;
            var startUTSDate;
            var endUTSDate;

            if (this.orderDir === 'desc') {
              startUTSIndex = rawLD[rawLD.length - 1].StartTime;
              endUTSIndex = rawLD[0].StartTime;
            } else {
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
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getPay",
          value: function getPay(tsheetObj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var payRes;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.fwServ.getShiftPay(tsheetObj);

                    case 2:
                      payRes = _context9.sent;
                      return _context9.abrupt("return", Promise.resolve(payRes));

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "formatTSheet",
          value: function formatTSheet(rtsOb) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this8 = this;

              var ntsOb, wNames, statProps, ttArr, nDurH, nDurM, nDurMins, nNames, i;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      ntsOb = rtsOb;

                      wNames = function wNames(oUId) {
                        var oUArr = _this8.workAreas.filter(function (oU) {
                          return oU.Id === oUId;
                        });

                        return {
                          cname: oUArr[0]['CompanyName'],
                          warea: oUArr[0]['OperationalUnitName']
                        };
                      };

                      statProps = ['IsInProgress', 'Disputed', 'TimeApproved', 'Discarded'];
                      ntsOb.nDate = this.dT.LNd(new Date(rtsOb.Date));
                      ntsOb.nStartTime = this.dT.NTut(rtsOb.StartTime);
                      ntsOb.nEndTime = this.dT.NTut(rtsOb.EndTime);

                      if (rtsOb.TotalTime.toString().includes('.')) {
                        ttArr = rtsOb.TotalTime.toString().split('.');
                        nDurH = ttArr[0].toString();
                        nDurMins = Math.round(Number('0.' + ttArr[1]) * 60);
                        nDurMins < 10 ? nDurM = '0' + nDurMins.toString() : nDurM = nDurMins.toString();
                        ntsOb['nDur'] = nDurH + ':' + nDurM;
                      } else {
                        ntsOb['nDur'] = rtsOb.TotalTime + ':00';
                      }

                      nNames = wNames(rtsOb.OperationalUnit);
                      nNames.warea ? ntsOb.nOperationalUnit = nNames.warea : ntsOb.nOperationalUnit = 'NK';

                      if (nNames.cname) {
                        if (nNames.cname === this.workName) {
                          ntsOb.nCompanyName = this.workCode;
                        } else {
                          ntsOb.nCompanyName = nNames.cname;
                        }
                      } else {
                        ntsOb.nOperationalUnit = this.workName;
                      }

                      ;

                      for (i = 0; i < statProps.length; i++) {
                        rtsOb[statProps[i]] === -1 ? ntsOb['n' + statProps[i]] = null : ntsOb['n' + statProps[i]] = !!rtsOb[statProps[i]];
                      }

                      ;
                      _context10.next = 15;
                      return this.getPay(rtsOb);

                    case 15:
                      ntsOb['nIncome'] = _context10.sent;
                      return _context10.abrupt("return", Promise.resolve(ntsOb));

                    case 17:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getTSheets",
          value: function getTSheets(offset) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var thisBatch, i, niceTSOb;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.logger.info('[TabTSheets|getTSheets] (' + offset + ')...');
                      _context11.prev = 1;
                      _context11.next = 4;
                      return this.sqlServ.getXTSheetItems({
                        start: this.btDateStartUTS,
                        end: this.btDateEndUTS
                      }, {
                        by: this.orderBy,
                        dir: this.orderDir
                      }, this.batchLimit, this.batchOffset);

                    case 4:
                      thisBatch = _context11.sent;
                      i = 0;

                    case 6:
                      if (!(i < thisBatch.length)) {
                        _context11.next = 14;
                        break;
                      }

                      _context11.next = 9;
                      return this.formatTSheet(thisBatch[i]);

                    case 9:
                      niceTSOb = _context11.sent;
                      this.listItms.push(niceTSOb);

                    case 11:
                      i++;
                      _context11.next = 6;
                      break;

                    case 14:
                      return _context11.abrupt("return", Promise.resolve(true));

                    case 17:
                      _context11.prev = 17;
                      _context11.t0 = _context11["catch"](1);
                      this.logger.info('[TabTSheets|getTSheets] (Error): ' + _context11.t0);

                    case 20:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[1, 17]]);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "feedItems",
          value: function feedItems(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.batchOffset += this.batchLimit;
                      this.batchStart = this.listItms.length;
                      this.batchEnd = this.batchStart + this.batchLimit;
                      _context12.next = 5;
                      return this.getTSheets(this.batchOffset);

                    case 5:
                      if (this.listItms.length === this.dbRangeCount) {
                        this.iScrollTSheets.disabled = true;
                        this.endOfList = true;
                      } else {
                        this.iScrollTSheets.disabled = false;
                        this.endOfList = false;
                      }

                      event.target.complete();
                      this.vScrollTSheets.checkEnd();

                    case 8:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "openDetail",
          value: function openDetail(tsheetObj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this9 = this;

              var thisTSDModalOpts, tsDetailModal, tsId, _yield$_capacitor_dia, value, dbDel;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (this.editMode) {
                        _context13.next = 17;
                        break;
                      }

                      this.logger.info('[TabTSheets|openDetail] (tsheetObj)...');

                      if (tsheetObj.Id !== this.tsForOpen) {
                        this.tsForOpen = 0;
                      }

                      ;
                      thisTSDModalOpts = this.tsDetailModalOpts;
                      thisTSDModalOpts['componentProps'] = {
                        ts: tsheetObj,
                        wareas: this.workAreas,
                        showincome: this.showIncome
                      };
                      _context13.next = 8;
                      return this.modalCtrl.create(thisTSDModalOpts);

                    case 8:
                      tsDetailModal = _context13.sent;
                      document.addEventListener('ionModalDidPresent', function () {
                        _this9.tsDetailModalOpen = true;

                        _this9.logger.info('[TabTSheets|DetailModal] (ionModalDidPresent)');
                      });
                      tsDetailModal.onWillDismiss().then(function () {
                        _this9.tsDetailModalOpen = false;

                        _this9.logger.info('[TabTSheets|DetailModal] (ionModalWillDismiss)');
                      });
                      tsDetailModal.onDidDismiss().then(function (_ref) {
                        var data = _ref.data,
                            role = _ref.role;

                        _this9.logger.info('[TabTSheets|DetailModal] (ionModalDidDismiss) >>> (Data): ' + data + ' >>> (Role): ' + role);
                      });
                      _context13.next = 14;
                      return tsDetailModal.present();

                    case 14:
                      return _context13.abrupt("return", _context13.sent);

                    case 17:
                      this.logger.info('[TabTSheets|deleteTSItem] (tsheetObj)...');
                      tsId = tsheetObj.Id;
                      this.eMId = tsId;
                      this.eMConfirmOpen = true;
                      _context13.next = 23;
                      return _capacitor_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog.confirm({
                        title: 'Confirm',
                        message: 'Are you sure you want to delete Timesheet #' + tsId + '?'
                      });

                    case 23:
                      _yield$_capacitor_dia = _context13.sent;
                      value = _yield$_capacitor_dia.value;

                      if (!value) {
                        _context13.next = 36;
                        break;
                      }

                      this.logger.info('[TabTSheets|EditMode|ConfirmDelete] (CONFIRMED) - OK - Deleting TS #' + tsId);
                      this.eMConfirmOpen = false;
                      this.eMIsDeleting = true;
                      this.logger.info('[TabTSheets|EditMode|Deleting] (Deleting) TS #' + tsId + '...');
                      _context13.next = 32;
                      return this.sqlServ.deleteItem('timesheets', 'Id', tsId);

                    case 32:
                      dbDel = _context13.sent;

                      if (dbDel) {
                        this.evServ.showToast('success', 'Timesheet #' + tsId + ' Deleted');
                        this.logger.info('[TabTSheets|deleteTSItem] (DB Delete): SUCCESS! - Deleted TS Id:' + tsId);
                        this.listItms = this.listItms.filter(function (ts) {
                          return ts.Id !== tsId;
                        });
                        this.eMIsDeleting = false;
                        this.eMId = null;
                      } else {
                        this.eMIsDeleting = false;
                        this.evServ.showToast('error', 'Error: Not Deleted');
                        this.logger.info('[TabTSheets|deleteTSItem] (DB Delete): FAIL! - Error Deleting TS Id:' + tsId);
                        this.eMId = null;
                      }

                      _context13.next = 40;
                      break;

                    case 36:
                      this.logger.info('[TabTSheets|EditMode|ConfirmDelete] (CANCEL) - CANCELLED - Not Deleting TS #' + tsId);
                      this.eMConfirmOpen = false;
                      this.eMIsDeleting = false;
                      this.eMId = null;

                    case 40:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "swapOrder",
          value: function swapOrder() {
            this.logger.info('[TabsTSheets|swapOrder] ()...');
            this.didSwapOrder = true;
            this.sGroupIndex = 0;
            this.orderDir === 'desc' ? this.listOpts[this.tabKey].orderDir = 'asc' : this.listOpts[this.tabKey].orderDir = 'desc';
            this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', this.listOpts);
            this.doInitRefresh('init');
            this.loadListPrefs();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            this.iScrollTSheets.disabled = !this.iScrollTSheets.disabled;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "animateInSummaryVal",
          value: function animateInSummaryVal(vN) {
            var vS = '.' + vN + '-val.' + this.tabKey;
            var vA = 'update-summaryval-ani';

            var dA = function dA() {
              return new Promise(function (resolve) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(vS).on('animationend', function () {
                  resolve(true);
                });
                var w = setInterval(function () {
                  if (jquery__WEBPACK_IMPORTED_MODULE_16__(vS).length > 0) {
                    clearInterval(w);
                    jquery__WEBPACK_IMPORTED_MODULE_16__(vS).addClass(vA);
                  }
                }, 50);
              });
            };

            dA().then(function () {
              jquery__WEBPACK_IMPORTED_MODULE_16__(vS).removeClass(vA);
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "toggleEditMode",
          value: function toggleEditMode(startStop) {
            this.logger.info('[TabTSheets|doEditMode] (' + startStop + ')...');

            if (startStop === 'start') {
              jquery__WEBPACK_IMPORTED_MODULE_16__('.start-edit-mode-ico').css('color', '#ff9800');
            }

            ;
            jquery__WEBPACK_IMPORTED_MODULE_16__('.start-edit-mode-ico').css('color', '#727272');
            var togVal;
            startStop === 'start' ? togVal = true : togVal = false;
            this.editMode = togVal;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "showDPPopover",
          value: function showDPPopover(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this10 = this;

              var dpPop, _yield$dpPop$onDidDis, data, role, newListPrefObj;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.logger.info('[TabTSheets|showDPPopover] (event)...');
                      _context14.next = 3;
                      return this.popCtrl.create({
                        event: event,
                        component: _popovers_datepresets_datepresets_component__WEBPACK_IMPORTED_MODULE_10__.DatePresetsComponent,
                        componentProps: {
                          listName: this.tabKey,
                          selectedName: this.datePreset
                        },
                        cssClass: 'sheriff-pop-datepresets-class',
                        animated: false,
                        showBackdrop: true,
                        backdropDismiss: true
                      });

                    case 3:
                      dpPop = _context14.sent;
                      document.addEventListener('ionPopoverWillPresent', function () {
                        _this10.dpPopOpen = true;
                      });
                      document.addEventListener('ionPopoverWillDismiss', function () {
                        _this10.dpPopOpen = false;
                      });
                      _context14.next = 8;
                      return dpPop.present();

                    case 8:
                      _context14.next = 10;
                      return dpPop.onDidDismiss();

                    case 10:
                      _yield$dpPop$onDidDis = _context14.sent;
                      data = _yield$dpPop$onDidDis.data;
                      role = _yield$dpPop$onDidDis.role;

                      if (!(role === 'new')) {
                        _context14.next = 32;
                        break;
                      }

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
                      _context14.next = 24;
                      return this.storeServ.getObject(this.deputy.uUK + 'ListPrefs');

                    case 24:
                      newListPrefObj = _context14.sent;

                      if (newListPrefObj.hasOwnProperty('tsheets')) {
                        newListPrefObj.tsheets = this.listOpts;
                      } else {
                        newListPrefObj['tsheets'] = this.listOpts;
                      }

                      ;
                      this.storeServ.setObject(this.deputy.uUK + 'ListPrefs', newListPrefObj);
                      this.doInitRefresh('init');
                      this.loadListPrefs();
                      _context14.next = 33;
                      break;

                    case 32:
                      if (role === 'same') {
                        this.logger.info('[TabTSheets|showDPPopover] (SAME) No Change.');
                      } else if (role === 'backdrop') {
                        this.logger.info('[TabTSheets|showDPPopover] (BACKDROP) No Change.');
                      } else {
                        this.logger.info('[TabTSheets|showDPPopover] (ERROR) No Change.');
                      }

                    case 33:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "openCustomRange",
          value: function openCustomRange() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this11 = this;

              var thisMOpts, nSD, nED, drModal;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.logger.info('[TabsTSheets|openCustomRange] ()...');
                      thisMOpts = this.drModalOpts;
                      nSD = this.dT.Dn(this.summaryFromDate);
                      nED = this.dT.Dn(this.summaryToDate);
                      thisMOpts['componentProps'] = {
                        list: this.tabKey,
                        dates: {
                          start: nSD,
                          end: nED
                        },
                        mms: {
                          min: this.minStartTimeUTS,
                          max: this.maxStartTimeUTS
                        }
                      };
                      _context15.next = 7;
                      return this.modalCtrl.create(thisMOpts);

                    case 7:
                      drModal = _context15.sent;
                      document.addEventListener('ionModalDidPresent', function () {
                        _this11.drModalOpen = true;
                      });
                      drModal.onWillDismiss().then(function () {
                        _this11.drModalOpen = false;
                      });
                      drModal.onDidDismiss().then(function (_ref2) {
                        var data = _ref2.data,
                            role = _ref2.role;
                        var sU = false;
                        var eU = false;

                        if (role === 'backdrop') {
                          _this11.evServ.showToast('cross', 'Cancelled');
                        } else {
                          if (data === 'nochange') {
                            sU = false;
                            eU = false;
                          } else {
                            if (!(0, date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(nSD, data.start)) {
                              sU = true;
                              _this11.summaryFromDate = _this11.dT.Nd(data.start);

                              _this11.animateInSummaryVal('drstart');
                            }

                            ;

                            if (!(0, date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(nED, data.end)) {
                              eU = true;
                              _this11.summaryToDate = _this11.dT.Nd(data.end);

                              _this11.animateInSummaryVal('drend');
                            }

                            ;
                            _this11.isCustomRange = true;
                            _this11.customRange = {
                              start: data.start,
                              end: data.end
                            };

                            _this11.doInitRefresh('refresh');

                            _this11.loadListPrefs();
                          }

                          var tI;
                          var tM;

                          if (!sU && !eU) {
                            tI = 'warning';
                            tM = 'Range Unchanged';
                          } else {
                            tI = 'success';
                            sU && eU ? tM = 'Range Updated' : tM = (sU ? 'Start' : 'End') + ' Date Updated';
                          }

                          ;

                          _this11.evServ.showToast(tI, tM);
                        }
                      });
                      return _context15.abrupt("return", drModal.present());

                    case 12:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "headerProgress",
          value: function headerProgress(mode, action, data) {
            var _this12 = this;

            this.logger.info('[TabTSheets|headerProgress] (' + mode + ', ' + action + ', ' + data + ')...');
            var circProgEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-progcirc.' + this.tabKey);
            var starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + this.tabKey);
            var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + this.tabKey);

            var startRoutine = function startRoutine() {
              jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'scale(.9)');
              _this12.progCirc.percent = 0;
              jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)');

              if (jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'none')) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'unset');
              }

              _this12.progCirc.animation = false;
              _this12.progCirc.outerStrokeColor = '#FF9800';
            };

            var finishRoutine = function finishRoutine() {
              jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'unset');
              _this12.progCirc.percent = 100;
              jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)');
              _this12.progCirc.outerStrokeColor = '#4caf50';

              _this12.myAniCSS('.hcl-progcirc.' + _this12.tabKey, 'fadeOut', 0, 1400, 'remove', 'hide');

              _this12.refresher.complete();

              _this12.isRefreshing = false;
            };

            if (mode === 'manual') {
              if (action === 'start') {
                startRoutine();
                this.progCirc.animation = true;
              }

              ;

              if (action === 'change') {
                this.progCirc.percent = data;
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + 360 * data / 100 + ')deg');
              }

              ;

              if (action === 'finish') {
                finishRoutine();
                this.progCirc.animation = false;
              }
            }

            if (mode === 'timed') {
              startRoutine();
              var incPercEaLoop = 20 / data * 1000;
              var rotStarEaLoop = 72 / data * 1000;
              var starRotCount = 0;
              var timedProgLoop = setInterval(function () {
                _this12.progCirc.percent += incPercEaLoop;
                starRotCount += rotStarEaLoop;
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + starRotCount + 'deg)');

                if (_this12.progCirc.percent >= 100) {
                  clearInterval(timedProgLoop);
                  finishRoutine();
                }
              }, 200);
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this.logger.info('[TabTSheets|doRefresh] (event)...');

                      if (this.tsForOpen > 0) {
                        this.tsForOpen = 0;
                      }

                      ;
                      this.isRefreshing = true;
                      this.refresher = event.target;
                      this.headerProgress('manual', 'start', null);
                      this.doInitRefresh('refresh');

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "addTSheet",
          value: function addTSheet() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this13 = this;

              var lastTSArea, thisAddTSModalOpts, addNewTSModal;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.logger.info('[TabTSheets|addTSheets] ()...');
                      this.orderDir === 'desc' ? lastTSArea = this.listItms[0].OperationalUnit : lastTSArea = this.listItms[this.listItms.length - 1].OperationalUnit;
                      thisAddTSModalOpts = this.addNewTSModalOpts;
                      thisAddTSModalOpts['componentProps'] = {
                        wareas: {
                          list: this.workAreas,
                          lastId: lastTSArea
                        }
                      };
                      _context17.next = 6;
                      return this.modalCtrl.create(thisAddTSModalOpts);

                    case 6:
                      addNewTSModal = _context17.sent;
                      document.addEventListener('ionModalDidPresent', function () {
                        _this13.addNewTSModalOpen = true;
                      });
                      addNewTSModal.onWillDismiss().then(function () {
                        _this13.addNewTSModalOpen = false;
                      });
                      addNewTSModal.onDidDismiss().then(function (_ref3) {/// ADD API & DB TIMESHEET INSERT FNS

                        var data = _ref3.data,
                            role = _ref3.role;
                      });
                      _context17.next = 12;
                      return addNewTSModal.present();

                    case 12:
                      return _context17.abrupt("return", _context17.sent);

                    case 13:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.logger.info('[TabTSheets|ionViewDidLeave] ()...');

            if (this.tsForOpen > 0) {
              this.tsForOpen = 0;
            }

            ;
            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + this.tabKey);
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + this.tabKey);
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + this.tabKey);
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', '0');
            jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).removeClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).removeClass('scrolledin');
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).removeClass('dimmed');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[TabTSheets|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');

            var doAni = function doAni() {
              return new Promise(function (resolve) {
                var aniStr = 'animate__animated animate__' + aniName;
                var delStr = 'animDel-' + aniDel;
                var durStr = 'animDur-' + aniDur;
                jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).on('animationend', function () {
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
            };

            doAni();
          }
        }]);

        return TabTSheetsPage;
      }();

      _TabTSheetsPage.ctorParameters = function () {
        return [{
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_20__.NGXLogger
        }, {
          type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_8__.SQLiteService
        }, {
          type: _services_detail_service__WEBPACK_IMPORTED_MODULE_7__.DetailService
        }, {
          type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__.DateTimeService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.PopoverController
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_11__.EventsService
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
        }, {
          type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__.DeputyService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.Platform
        }, {
          type: _services_sync_service__WEBPACK_IMPORTED_MODULE_2__.SyncService
        }, {
          type: src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_15__.FairworkService
        }];
      };

      _TabTSheetsPage.propDecorators = {
        iScrollTSheets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonInfiniteScroll]
        }],
        vScrollTSheets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonVirtualScroll]
        }],
        tsheetsContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
          args: ['tsheetsContent', {
            "static": false
          }]
        }],
        tsheetsRefresher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
          args: ['tsheetsRefresher']
        }]
      };
      _TabTSheetsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
        selector: 'app-tabtsheets',
        template: _raw_loader_tabtsheets_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabtsheets_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _TabTSheetsPage);
      /***/
    },

    /***/
    19916:
    /*!******************************************************!*\
      !*** ./src/app/tabs/tabtsheets/tabtsheets.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJ0c2hlZXRzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    86564:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabtsheets/tabtsheets.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col tabtsheets tsheets\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar tabtsheets tsheets\">\n                                <div class=\"sheriff-title-leftanimbar-inner tabtsheets tsheets\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title tabtsheets tsheets\">\n                                    <div class=\"sheriff-title tight-wrap tabtsheets tsheets\">Timesheets</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring tsheets\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle tsheets hcl-progcirc tsheets\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star tabtsheets tsheets\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo tabtsheets tsheets\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div class=\"sheriff-menu-button-wrapper edit-tsheets-menu-btn\">\n                                    <div *ngIf=\"!editMode\" (click)=\"toggleEditMode('start')\" class=\"edit-tsheets-menu-btn-inner-wrapper start ion-activatable ripple-parent\">\n                                        <ion-icon class=\"edit-tsheets-menu-btn-ico start-edit-mode-ico\" name=\"create-outline\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                    <div *ngIf=\"editMode\" (click)=\"toggleEditMode('stop')\" class=\"edit-tsheets-menu-btn-inner-wrapper stop ion-activatable ripple-parent\">\n                                        <ion-icon class=\"edit-tsheets-menu-btn-ico stop-edit-mode-ico\" name=\"close-outline\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                </div>\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button tabtsheets\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n<!-- TAB-CONTENT - START -->\n<ion-content class=\"main-tabtsheets-content-wrapper\" [scrollEvents]=\"false\">\n    <!-- PAGE REFRESHER -->\n    <ion-refresher #tsheetsRefresher class=\"sheriff-refresher tabs tsheets\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" disabled=\"{{preventRefreshPull}}\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <div class=\"sheriff-tabtsheets-mainpage-section-wrapper top-section\">\n        <!-- TAB-CONTENT -->\n        <!-- CONTENT HEADING -->\n        <div slot=\"fixed\" class=\"sheriff-tabcontent-mainheading-wrapper tsheets\">\n            <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid tsheets\">\n                <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 tsheets\">\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 tsheets\">\n                        <div *ngIf=\"editMode\" class=\"tsheets-editmode-header-txt-wrapper left\">edit mode</div>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 tsheets\">\n                        <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-tsheets.png\">\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 tsheets\">\n                        <div *ngIf=\"editMode\" class=\"tsheets-editmode-header-txt-wrapper right\">edit mode</div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- ITEM LIST CONTENT -->\n        <!-- ITEM LIST SUMMARY/RANGE-SELECT -->\n        <div slot=\"fixed\" class=\"tsheets-list-summary-main-outter-wrapper\">\n            <ion-grid [ngStyle]=\"{'opacity':editMode?'0.48':'1'}\" class=\"sheriff-grid list-summary-grid tsheets\">\n                <ion-row size=\"12\" class=\"sheriff-row tsheet-navbar-row navbar-gradborder-row top\">\n                    <ion-col class=\"sheriff-col tsheet-navbar-col navbar-gradborder-col top\"></ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row list-summary-row searching-row\">\n                    <ion-col (click)=\"swapOrder()\" size=\"1\" class=\"sheriff-col list-summary-col ico-col ion-activatable ripple-parent\">\n                        <div class=\"ascdesc-order-dim-wrapper\" [ngStyle]=\"{'opacity':(drModalOpen)?'0.36':'1'}\">\n                            <div *ngIf=\"orderDir==='asc'\" class=\"swap-order-ico-label asc\">asc</div>\n                            <div class=\"swap-item-order-btn-wrapper\">\n                                <img *ngIf=\"orderDir==='asc'\" src=\"./../../../assets/img/sheriffsort-asc-ico.png\" class=\"sheriff-ico summary-list-ico swaporder-dr-ico asc tsheets\">\n                                <img *ngIf=\"orderDir==='desc'\" src=\"./../../../assets/img/sheriffsort-desc-ico.png\" class=\"sheriff-ico summary-list-ico swaporder-dr-ico desc tsheets\">\n                            </div>\n                            <div *ngIf=\"orderDir==='desc'\" class=\"swap-order-ico-label desc\">des</div>\n                            <ion-ripple-effect></ion-ripple-effect>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col list-summary-col daterange-input-col from\">\n                        <div *ngIf=\"!drModalOpen\" class=\"list-summary-date-input-label from tsheets\">from:</div>\n                        <div *ngIf=\"!drModalOpen\" class=\"summary-list-data-div drstart-val tabtsheets tsheets\">{{summaryFromDate}}</div>\n                        <div *ngIf=\"drModalOpen\" class=\"waiting-custom-input-wrapper from\">\n                            <div class=\"customdrwait loadingdots\">waiting</div>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col list-summary-col daterange-input-col to\">\n                        <div *ngIf=\"!drModalOpen\">\n                            <div class=\"list-summary-date-input-label-wrapper\">\n                                <div class=\"list-summary-date-input-label to tsheets\">to:</div>\n                                <div *ngIf=\"toDateIsToday\" class=\"list-summary-istoday-indic-wrapper\">today</div>\n                            </div>\n                            <div class=\"summary-list-data-div drend-val tabtsheets tsheets\">{{summaryToDate}}</div>\n                        </div>\n                        <div *ngIf=\"drModalOpen\" class=\"waiting-custom-input-wrapper to\">\n                            <div class=\"customdrwait loadingdots\">waiting</div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" (click)=\"openCustomRange()\" class=\"sheriff-col list-summary-col ico-col tsheets ion-activatable ripple-parent\">\n                        <div class=\"summary-list-btn-wrapper cutomrange\">\n                            <ion-icon class=\"sheriff-ico summary-list-ico open-dr-ico tsheets\" name=\"calendar\"></ion-icon>\n                        </div>\n                        <ion-ripple-effect></ion-ripple-effect>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col list-summary-col daterange-input-col preset-col\">\n                        <div *ngIf=\"!dpPopOpen\" (click)=\"showDPPopover($event)\" class=\"list-summary-touchaction-zone-wrapper ion-activatable ripple-parent\">\n                            <div class=\"list-summary-date-input-label select tsheets\">Preset:</div>\n                            <div *ngIf=\"!isCustomRange\" class=\"summary-list-data-div presets-val tabtsheets tsheets\">\n                                {{datePresetValue}}\n                            </div>\n                            <div *ngIf=\"isCustomRange\" class=\"list-summary-iscustomrange\">Custom</div>\n                            <ion-ripple-effect></ion-ripple-effect>\n                        </div>\n                        <div *ngIf=\"dpPopOpen\" class=\"waiting-custom-input-wrapper preset\">\n                            <div class=\"customdrwait loadingdots\">wait</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row size=\"12\" class=\"sheriff-row tsheet-navbar-row navbar-gradborder-row middle\">\n                    <ion-col class=\"sheriff-col tsheet-navbar-col navbar-gradborder-col middle\"></ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row list-summary-row found-row\">\n                    <ion-col class=\"sheriff-col list-summary-col found-col\">\n                        <div class=\"found-col-all-wrapper\">\n                            <span class=\"found-label-text\">Showing</span>\n                            <span class=\"summary-found-sep colon\">:</span>\n                            <span class=\"found-date-wrapper\" [ngSwitch]=\"orderDir\">\n                          <span *ngSwitchCase=\"'desc'\" class=\"found-range-desc\"><span class=\"found-date-fval\">{{foundToNice}}</span>\n                            <ion-icon class=\"found-bar-ico toarrow\" name=\"caret-forward\"></ion-icon><span class=\"found-date-tval\">{{foundFromNice}}</span></span>\n                            <span *ngSwitchCase=\"'asc'\" class=\"found-range-asc\"><span class=\"found-date-fval\">{{foundFromNice}}</span>\n                            <ion-icon class=\"found-bar-ico toarrow\" name=\"caret-forward\"></ion-icon><span class=\"found-date-tval\">{{foundToNice}}</span></span>\n                            <span *ngSwitchDefault class=\"found-range-desc\"><span class=\"found-date-fval\">{{foundToNice}}</span>\n                            <ion-icon class=\"found-bar-ico toarrow\" name=\"caret-forward\"></ion-icon><span class=\"found-date-tval\">{{foundFromNice}}</span></span>\n                            </span>\n                            <ion-icon class=\"found-bar-ico sepslash\" name=\"remove\"></ion-icon>\n                            <span class=\"found-count-wrapper\">    \n                        <span class=\"found-count-fval\">{{showItemCount}}</span>\n                            <span class=\"summary-found-sep slash\">/</span>\n                            <span class=\"found-count-tval\">{{listTtlItms}}</span>\n                            </span>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row size=\"12\" class=\"sheriff-row tsheet-navbar-row navbar-gradborder-row bottom\">\n                    <ion-col class=\"sheriff-col tsheet-navbar-col navbar-gradborder-col bottom\"></ion-col>\n                </ion-row>\n            </ion-grid>\n            <div *ngIf=\"editMode\" class=\"tsheet-editmode-summary-shield\"></div>\n        </div>\n    </div>\n    <ion-content [scrollEvents]=\"true\" class=\"sheriff-content tab-content tsheets\" #tsheetsContent (ionScrollStart)=\"disableRefresher(true)\" (ionScrollEnd)=\"disableRefresher(false)\">\n        <div slot=\"fixed\" class=\"sheriff-subheader-shadow-div\"></div>\n        <!-- MAIN LIST WRAPPER -->\n        <div class=\"sheriff-tabcontent-itemlistcontent-wrapper tsheets\">\n            <!-- V-SCROLL LIST -->\n            <ion-card *ngIf=\"listTtlItms<1\" class=\"sheriff-card tab-list-card no-items-card  animate__animated animate__zoomIn animate__delay-1s\">\n                <div class=\"sheriff-no-items-card-wrapper\">No <span style=\"text-transform:capitalize\">{{dbTblName}}</span> Found</div>\n            </ion-card>\n            <ion-list *ngIf=\"listTtlItms>0\" class=\"sheriff-list dbitem-list tsheets\">\n                <ion-virtual-scroll *ngIf=\"hasLoaded\" [items]=\"listItms\" [headerFn]=\"calHeaderGroups\" [footerFn]=\"groupTotals\" approxItemHeight=\"56\" approxFooterHeight=\"32\" approxHeaderHeight=\"32\" class=\"sheriff-vscroll dbitem-vscroll tsheets\">\n                    <ion-item-divider [hidden]=\"header.week===null&&header.month===null\" *virtualHeader=\"let header\" class=\"sheriff-list-item-divider tsheets-weekheader\">\n                        <ion-grid class=\"sheriff-grid item-list-divider-grid tsheets\">\n                            <ion-row *ngIf=\"header.month!==null\" class=\"sheriff-divider-row tsheets-month\">\n                                <ion-col class=\"sheriff-divider-col tsheets-month\">{{header.month}}</ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"header.week!==null\" class=\"sheriff-divider-row tsheets-week\">\n                                <ion-col class=\"sheriff-divider-col tsheets-week\">{{header.week}}</ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item-divider>\n                    <ion-item (click)=\"openDetail(item)\" *virtualItem=\"let item;let i = index\" button=\"true\" [ngClass]=\"{'tsforopen':item.Id===tsForOpen}\" class=\"sheriff-item sheriff-vitem dbitem-vitem tsheet tsheet-{{i}}\" id=\"tsheet-{{item.Id}}\">\n                        <ion-grid class=\"sheriff-grid list-item-grid tsheet-item-grid\">\n                            <ion-row class=\"sheriff-row list-item-row tsheet-item-row maingrid-row\">\n                                <ion-col size=\"6\" class=\"sheriff-col list-item-col tsheet-col ww-detail-col\">\n                                    <div class=\"sheriff-row ww-detail-row date\">{{item.nDate}}</div>\n                                    <div class=\"sheriff-row ww-detail-row time-area\">\n                                        <span class=\"ww-detail-span time\">\n                                        <span class=\"ww-detail-span stime\">{{item.nStartTime}}</span>\n                                        <span class=\"ww-detail-span time-hyphen\"><ion-icon name=\"arrow-forward\"></ion-icon></span>\n                                        <span class=\"ww-detail-span etime\">{{item.nEndTime}}</span>\n                                        </span>\n                                        <span class=\"ww-detail-span totaltime-wrapper\">\n                                          <span class=\"ww-detail-span tt-equals\"><ion-icon class=\"tt-eq-ico\" name=\"reorder-two-outline\"></ion-icon></span>\n                                        <span class=\"ww-detail-span tt-value\">{{item.nDur}}</span>\n                                        <span *ngIf=\"item.TotalTime>item.TotalTimeInv\" class=\"ww-detail-span tt-plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                        <span *ngIf=\"item.TotalTime<item.TotalTimeInv\" class=\"ww-detail-span tt-minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                        </span>\n                                    </div>\n                                    <div class=\"sheriff-row ww-detail-row areawork-wrapper\">\n                                        <div class=\"ww-detail-div area\">\n                                            <span class=\"ww-detail-span area\">\n                                              <span class=\"ww-detail-span area-at\"><ion-icon name=\"locate-outline\"></ion-icon></span>\n                                              <span class=\"ww-detail-span areaname\">{{item.nOperationalUnit}}</span>\n                                              <span class=\"ww-detail-span areaat-sign\">@</span>\n                                            </span>\n                                        </div>\n                                        <div [ngStyle]=\"{'color':workColor,'filter':incBright?'brightness(2.5)':'brightness(1)'}\" class=\"ww-detail-div work\">{{item.nCompanyName}}</div>\n                                        <div class=\"ww-detail-span ids-div\">\n                                          <ion-icon class=\"ww-detail-ids-ico\" name=\"finger-print-outline\"></ion-icon>\n                                          <span class=\"ww-detail-ids-txt-wrapper tsheetid\">{{item.Id}}</span>\n                                        </div>\n                     \n\n                                    </div>\n                                    <div class=\"tsheet-item-isnew-wrapper isnew-{{item.Id}} animate__animated animate__tada animate__fast\">\n                                        <img class=\"tsheet-item-isnew-img-ico\" src=\"../../../assets/img/sheriff-new-ico.png\">\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"2\" class=\"sheriff-col tsheet-ttincome-col\">\n                                    <div class=\"sheriff-tsheetlist-ttincome-wrapper tt-wrapper\">\n                                        <ion-icon class=\"sheriff-tsheetlist-ttincome-ico tt-ico\" name=\"hourglass-outline\"></ion-icon>\n                                        <span class=\"sheriff-tsheetlist-ttincome-val tt-val\">{{item.TotalTime.toFixed(2)}}<span class=\"tsheet-ttincome-hrs\">h</span></span>\n                                    </div>\n                                    <div *ngIf=\"showIncome\" class=\"sheriff-tsheetlist-ttincome-wrapper income-wrapper\">\n                                        <ion-icon class=\"sheriff-tsheetlist-ttincome-ico income-ico\" name=\"logo-usd\"></ion-icon>\n                                        <span class=\"sheriff-tsheetlist-ttincome-val tt-val\"><span class=\"tsheet-ttincome-dollar\">$</span>{{item.nIncome.t.toFixed(0)}}</span>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"3\" class=\"sheriff-col list-item-col tsheet-col status-col\">\n                                    <div *ngIf=\"eMId!==item.Id\" class=\"tsheet-status-col-main-wrapper\">\n                                        <span *ngIf=\"!item.nIsInProgress&&!item.nTimeApproved&&!item.nDisputed&&!item.nDiscarded\" style=\"color:#ff9800db\" class=\"tsheet-status pending\">Pending</span>\n                                        <span *ngIf=\"item.nIsInProgress\" style=\"color:#ff9800db\" class=\"tsheet-status inprog\">Underway</span>\n                                        <span *ngIf=\"item.nTimeApproved\" style=\"color:#2dd36fdb\" class=\"tsheet-status approved\">Approved</span>\n                                        <span *ngIf=\"item.nDisputed\" style=\"color:#f44034db\" class=\"tsheet-status disputed\">Disputed</span>\n                                        <span *ngIf=\"item.nDiscarded\" style=\"color:#f44034db\" class=\"tsheet-status discarded\">Discarded</span>\n                                    </div>\n                                    <div *ngIf=\"(eMConfirmOpen&&eMId===item.Id)||(eMIsDeleting&&eMId===item.Id)\" class=\"tsheet-status-col-delete-wrapper\">\n                                        <span *ngIf=\"eMConfirmOpen\" class=\"tsheet-editmode-delete confirm-txt\">Delete?</span>\n                                        <span *ngIf=\"eMIsDeleting\" class=\"tsheet-editmode-delete confirm-txt\">Deleting...</span>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"1\" class=\"sheriff-col list-item-col opentsheet-col\">\n                                    <div class=\"status-col-touch-wrapper ion-activatable ripple-parent\">\n                                        <ion-icon *ngIf=\"!editMode\" class=\"sheriff-ico tsheet-status-ico status\" name=\"chevron-forward\"></ion-icon>\n                                        <ion-icon *ngIf=\"editMode\" class=\"sheriff-ico tsheet-editmode-ico\" name=\"trash\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item>\n                    <ion-item-divider *virtualFooter=\"let footer\" class=\"sheriff-list-item-divider tsheets-weekfooter\">\n                        <ion-grid class=\"sheriff-grid item-list-divider-grid tsheets\">\n                            <ion-row class=\"sheriff-divider-row footer-divider-row\">\n                                <ion-col class=\"sheriff-divider-col footer-divider-col\">\n                                    <div class=\"sheriff-divider-div footer-div weektotal\">\n                                        <span class=\"footer-total-label\">Week Total</span>\n                                        <span class=\"footer-total-equals\">=</span>\n                                        <span *ngIf=\"footer.t.h>0\" class=\"footer-total-totalno hours\">{{footer.t.h}}</span>\n                                        <span *ngIf=\"footer.t.h>0\" class=\"footer-total-suffix hours\">h</span>\n                                        <span *ngIf=\"footer.t.m>0\" class=\"footer-total-totalno mins\">{{footer.t.m}}</span>\n                                        <span *ngIf=\"footer.t.m>0\" class=\"footer-total-suffix mins\">m</span>\n                                        <span *ngIf=\"showIncome\">\n                                          <span class=\"footer-total-equals sep\">|</span>\n                                          <span class=\"footer-total-equals dollar\">$</span>\n                                          <span class=\"footer-total-totalno income\">{{footer.i}}</span>\n                                        </span>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item-divider>\n                </ion-virtual-scroll>\n            </ion-list>\n            <ion-card *ngIf=\"endOfList\" class=\"sheriff-card tab-list-card endoflist-card animate__animated animate__zoomIn animate__fast\">\n                <div class=\"sheriff-endoflist-card-wrapper\">End of Selected Range</div>\n            </ion-card>\n\n            <!-- I-SCROLL FEEDER -->\n            <ion-infinite-scroll disabled=\"true\" class=\"sheriff-iscroll tsheet\" threshold=\"25%\" (ionInfinite)=\"feedItems($event)\">\n                <ion-infinite-scroll-content loadingSpinner=null class=\"sheriff-iscroll-content tsheet\">\n                    <ion-grid class=\"sheriff-iscrollcontent-grid\">\n                        <ion-row class=\"sheriff-row inf-loading-row\">\n                            <ion-col class=\"sheriff-col inf-loading-col spinleft\" size=\"4\">\n                                <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner\" name=\"dots\"></ion-spinner>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col inf-loading-col textmiddle\" size=\"4\">loading\n                                <div class=\"info-load-batch-wrapper\"><span class=\"inf-load-batch-start\">{{batchStart}}</span><span class=\"inf-load-batch-hyphen\">-</span><span class=\"inf-load-batch-end\">{{batchEnd}}</span></div>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col inf-loading-col spinright\" size=\"4\">\n                                <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner right\" name=\"dots\"></ion-spinner>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </ion-content>\n</ion-content>\n<!-- ADD TSHEET FAB -->\n<ion-fab *ngIf=\"!editMode\" (click)=\"addTSheet()\" class=\"sheriff-fab tsheet-addtsheet-fab tablistfab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"sheriff-fab-button addtsheet-fab-btn\">\n        <img class=\"sheriff-fab-btn-img addtsheet-fab-btn-img\" src=\"../../../assets/img/sheriff-fab-addtsheet-ico.png\">\n    </ion-fab-button>\n</ion-fab>\n<!-- SHOW OPTIONS FAB -->\n<ion-fab class=\"sheriff-fader-fab tabtsheets\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <div class=\"sheriff-fade-nav-btn-wrapper tabtsheets ion-activatable ripple-parent\">\n        <img class=\"sheriff-fade-nav-btn-img\" src=\"../../../assets/img/sheriff-fadenavbtn.png\">\n        <ion-ripple-effect></ion-ripple-effect>\n    </div>\n</ion-fab>\n<!-- END CONTENT -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabtsheets_tabtsheets_module_ts-es5.js.map