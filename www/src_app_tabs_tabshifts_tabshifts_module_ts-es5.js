(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_tabs_tabshifts_tabshifts_module_ts"], {
    /***/
    96689:
    /*!****************************************************!*\
      !*** ./src/app/tabs/tabshifts/tabshifts.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabShiftsPageModule": function TabShiftsPageModule() {
          return (
            /* binding */
            _TabShiftsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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


      var _tabshifts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabshifts.page */
      15358); //import { DirectivesModule } from './../../directives/directives.module';


      var routes = [{
        path: '',
        component: _tabshifts_page__WEBPACK_IMPORTED_MODULE_0__.TabShiftsPage
      }];

      var _TabShiftsPageModule = function TabShiftsPageModule() {
        _classCallCheck(this, TabShiftsPageModule);
      };

      _TabShiftsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot() //DirectivesModule
        ],
        declarations: [_tabshifts_page__WEBPACK_IMPORTED_MODULE_0__.TabShiftsPage]
      })], _TabShiftsPageModule);
      /***/
    },

    /***/
    15358:
    /*!**************************************************!*\
      !*** ./src/app/tabs/tabshifts/tabshifts.page.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabShiftsPage": function TabShiftsPage() {
          return (
            /* binding */
            _TabShiftsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabshifts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabshifts.page.html */
      78829);
      /* harmony import */


      var _tabshifts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabshifts.page.scss */
      93435);
      /* harmony import */


      var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/keyboard */
      87730);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/sync.service */
      43395);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/datetime.service */
      12826);
      /* harmony import */


      var _services_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/detail.service */
      52153);
      /* harmony import */


      var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/sqlite.service */
      90636);
      /* harmony import */


      var src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/fairwork.service */
      93405);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../services/storage.service */
      71188);
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      79744);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../services/events.service */
      80106);
      /* harmony import */


      var _services_deputy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../services/deputy.service */
      22092);
      /* harmony import */


      var src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/calendar.service */
      49603);
      /* harmony import */


      var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @capacitor/status-bar */
      64909);
      /* harmony import */


      var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/firebase.service */
      19446);
      /* harmony import */


      var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @capacitor/dialog */
      63540);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__); ////////////////////////////////////////////////////////////////////////////////////////


      var _TabShiftsPage = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////
        function TabShiftsPage(plt, logger, evServ, storeServ, deputy, sqlServ, syncServ, fwServ, dS, dT, router, noteServ, calServ, navCtrl, fireServ) {
          var _this = this;

          _classCallCheck(this, TabShiftsPage);

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
          this.fireServ = fireServ; ////////////////////////////////////////////////////////////////////////////////////////

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
          this.incBright = this.dS.incBright; // Refresh

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
          this.isRefreshing = false;
          this.refreshProgPerc = 0;
          this.getAllDataPerc = 0;
          this.preventRefreshPull = false; // History Scroll

          this.showTTopBtn = false;
          this.scrollingTT = false;
          this.tabKey = 'init';
          this.sbOverlay = true;
          this.dbDataTbl = 'rosters';
          this.dbHasTable = this.dS.getUDBTables().includes(this.dbDataTbl); // Alerts Status

          this.alertMethods = {
            phone: null,
            calendar: null,
            email: null
          };
          this.alertEvents = {
            shift: null,
            task: null,
            tsheets: null
          }; // Show Income

          this.showIncome = true; // Shift DB Items/List

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
          this.orderDir = 'desc'; // Goto TS Item

          this.gotoTSId = 0; // Show Done Shift

          this.doneSId = 0;
          this.doneSHasTSData = false;
          this.doneSIsShowing = false;
          this.doneSShowComments = false;
          this.doneSShowWarnings = false; // SS CDown

          this.CDReady = false;
          this.sSCD = null; // Pay Rate
          // Xtra Shifts

          this.hasXtraShifts = false;
          this.xtraShifts = []; // Shift Slider

          this.apiPeerView = false;
          this.sSColleagues = {
            sameArea: [],
            otherArea: []
          };
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
          this.sSlider = {
            sliderHasLoaded: false,
            slidesItems: [],
            slidesControls: [],
            isBeginningSlide: null,
            isEndSlide: null
          };
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
            cubeEffect: {
              shadow: true,
              slideShadows: true,
              shadowOffset: 18,
              shadowScale: 0.90
            },
            on: {
              beforeInit: function beforeInit() {
                var sSwipe = this;
                sSwipe.classNames.push("".concat(sSwipe.params.containerModifierClass, "cube"));
                sSwipe.classNames.push("".concat(sSwipe.params.containerModifierClass, "3d"));
                var overwriteParams = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: true,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: false,
                  virtualTranslate: true
                };
                this.params = Object.assign(this.params, overwriteParams);
                this.originalParams = Object.assign(this.originalParams, overwriteParams);
              },
              setTranslate: function setTranslate() {
                var sSwipe = this;
                var $el = sSwipe.$el,
                    $wrapperEl = sSwipe.$wrapperEl,
                    slides = sSwipe.slides,
                    swiperWidth = sSwipe.width,
                    swiperHeight = sSwipe.height,
                    rtl = sSwipe.rtlTranslate,
                    swiperSize = sSwipe.size;
                var params = sSwipe.params.cubeEffect;
                var isHorizontal = sSwipe.isHorizontal();
                var isVirtual = sSwipe.virtual && sSwipe.params.virtual.enabled;
                var wrapperRotate = 0;
                var $cubeShadowEl;

                if (params.shadow) {
                  if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                      $cubeShadowEl = sSwipe.$('<div class="swiper-cube-shadow"></div>');
                      $wrapperEl.append($cubeShadowEl);
                    }

                    ;
                    $cubeShadowEl.css({
                      height: "".concat(swiperWidth, "px")
                    });
                  } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                      $cubeShadowEl = sSwipe.$('<div class="swiper-cube-shadow"></div>');
                      $el.append($cubeShadowEl);
                    }
                  }
                }

                ;

                for (var i = 0; i < slides.length; i += 1) {
                  var $slideEl = slides.eq(i);
                  var slideIndex = i;

                  if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                  }

                  ;
                  var slideAngle = slideIndex * 90;
                  var round = Math.floor(slideAngle / 360);

                  if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                  }

                  ;
                  var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                  var tx = 0;
                  var ty = 0;
                  var tz = 0;

                  if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                  } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                  } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                  } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
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
                  var transform$$1 = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px,").concat(ty, "px,").concat(tz, "px)");

                  if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                  }

                  ;
                  $slideEl.transform(transform$$1);

                  if (params.slideShadows) {
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                      shadowBefore = sSwipe.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                      $slideEl.append(shadowBefore);
                    }

                    ;

                    if (shadowAfter.length === 0) {
                      shadowAfter = sSwipe.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                      $slideEl.append(shadowAfter);
                    }

                    ;
                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                  }
                }

                ;
                $wrapperEl.css({
                  '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                  '-moz-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                  '-ms-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                  'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
                });

                if (params.shadow) {
                  if (isHorizontal) {
                    $cubeShadowEl.transform("translate3d(0px,".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
                  } else {
                    var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset$$1 = params.shadowOffset;
                    $cubeShadowEl.transform("scale3d(".concat(scale1, ",1,").concat(scale2, ") translate3d(0px,").concat(swiperHeight / 2 + offset$$1, "px,").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
                  }
                }

                ;
                var zFactor = sSwipe.browser.isSafari || sSwipe.browser.isUiWebView ? -swiperSize / 2 : 0;
                $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(sSwipe.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(sSwipe.isHorizontal() ? -wrapperRotate : 0, "deg)"));
              },
              setTransition: function setTransition(duration) {
                var sSwipe = this;
                var $el = sSwipe.$el,
                    slides = sSwipe.slides;
                slides.transition(duration).find('.swiper-slide-shadow-top,.swiper-slide-shadow-right,.swiper-slide-shadow-bottom,.swiper-slide-shadow-left').transition(duration);

                if (sSwipe.params.cubeEffect.shadow && !sSwipe.isHorizontal()) {
                  $el.find('.swiper-cube-shadow').transition(duration);
                }
              }
            }
          }; ////////////////////////////////////////////////////////////////////////////////////////

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
          };
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(TabShiftsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.logger.info('[TabShifts|ngOnInit] ()...');
            this.plt.ready().then(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.evServ.subscribe('alertsStatus', function () {
                          _this3.setAlertAndIncomeSettings();
                        });
                        this.doInitRefresh('init');
                        this.pageEnterAnim();
                        this.slideToNextLastShift();

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doInitRefresh",
          value: function doInitRefresh(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var uC;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[TabShifts|doReInitFresh] (' + mode + ')...');
                      this.initFetchData();

                      if (mode === 'refresh') {
                        uC = function uC(p) {
                          _this4.headerProgress('manual', 'change', p);
                        };

                        this.evServ.subscribe('refreshShiftsProg', function () {
                          _this4.refreshProgPerc += 20;
                          uC(_this4.refreshProgPerc);
                        });
                        this.doSync(mode);
                      } else {
                        this.doSync(mode);
                      }

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.logger.info('[TabShifts|ionViewWillEnter] ()...');

                      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setOverlaysWebView({
                        overlay: true
                      });

                      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setBackgroundColor({
                        color: '#00000000'
                      });

                      this.setAlertAndIncomeSettings();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var newInsDB;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.logger.info('[TabShifts|ionViewDidEnter] ()...');
                      setTimeout(function () {
                        _this5.evServ.publish('doPageEnterAnim', null);

                        if (jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper').css('display') !== 'none') {
                          _this5.hideSplash();
                        }

                        ;
                        _this5.currentPageObj = _this5.evServ.cPage;
                      }, 300);

                      if (this.tabKey !== 'init') {
                        this.tabChangeAni(this.tabKey);
                      }

                      this.gotoTSId = 0;
                      _context5.next = 6;
                      return this.storeServ.getObject('newDBInstall');

                    case 6:
                      newInsDB = _context5.sent;

                      if (newInsDB) {
                        setTimeout(function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var _yield$_capacitor_dia, value;

                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.next = 2;
                                    return _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog.confirm({
                                      title: 'Confirm New Database',
                                      message: 'Sheriff installed a backup database. Is everything OK? If NOT, hit the REVERT button below. Otherwise, hit OK to continue using this DB.',
                                      okButtonTitle: '👍OK',
                                      cancelButtonTitle: '🔙Revert'
                                    });

                                  case 2:
                                    _yield$_capacitor_dia = _context4.sent;
                                    value = _yield$_capacitor_dia.value;

                                    if (value) {
                                      this.evServ.showToast('smiley', 'All G, Just Checking!');
                                      this.storeServ.removeItem('newDBInstall');
                                    } else {
                                      this.sqlServ.revertDB();
                                    }

                                  case 5:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        }, 5000);
                      }

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } /////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "replayLPN",
          value: function replayLPN() {
            this.logger.info('[TabShifts|replayLPN] ()...');
            this.evServ.publish('iapBubble', 'replay');
          } /////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doSync",
          value: function doSync(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var syncResult, iArrs, i;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (mode === 'refresh') {
                        this.evServ.destroy('refreshShiftsProg');
                        this.headerProgress('manual', 'finish', null);
                      }

                      ;
                      _context6.next = 4;
                      return this.syncServ.doShiftsSync(mode);

                    case 4:
                      syncResult = _context6.sent;

                      if (syncResult.xtras.length > 0) {
                        this.hasXtraShifts = true;
                        this.xtraShifts = syncResult.xtras;
                      }

                      ;

                      if (syncResult.changed === true) {
                        this.logger.info('[TabShifts|doReInitRefresh] (Sync|Rosters): UPDATED/ADDED [' + syncResult.ids.length + '] Roster/Shift Items.');
                        iArrs = ['initRes', 'initList', 'shiftItems'];

                        for (i = 0; i < iArrs.length; i++) {
                          this[iArrs[i]] = [];
                        }

                        ;
                        this.batchOffset = 0;
                        this.sSlider.slideItems = [];
                        this.evServ.publish('doInitFetchShiftData', true);
                      } else {
                        this.logger.info('[TabShifts|doReInitRefresh] (Sync|Rosters): NO CHANGES [0]');

                        if (mode === 'init') {
                          this.evServ.publish('doInitFetchShiftData', true);
                        }
                      }

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "setAlertAndIncomeSettings",
          value: function setAlertAndIncomeSettings() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var getDSSett, aMs, aEs;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.logger.info('[TabShifts|setAlertAndIncomeSettings] ()...');
                      _context7.next = 3;
                      return this.dS.getSettings();

                    case 3:
                      getDSSett = _context7.sent;

                      if (getDSSett !== null) {
                        aMs = getDSSett.alerts.options.alertMethods.value;
                        aEs = getDSSett.alerts.options.alertEvents.value;
                        this.alertMethods.phone = aMs.phone;
                        this.alertMethods.calendar = aMs.calendar;
                        this.alertMethods.email = aMs.email;
                        this.alertEvents.shift = aEs.shift;
                        this.alertEvents.tsheet = aEs.tsheet;
                        this.showIncome = getDSSett.payrates.options.show.value;
                      }

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getPay",
          value: function getPay(rosterObj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var payRes;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.fwServ.getShiftPay(rosterObj);

                    case 2:
                      payRes = _context8.sent;
                      return _context8.abrupt("return", Promise.resolve(payRes));

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "formatShift",
          value: function formatShift(rawNS) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this6 = this;

              var wNames, niceNS, nN, nStartEndObj, calcPay, tT, ttArr, lCommCount, lWarnCount, warnArr, lnConfirmBy, lnConfirmTime, isPastS, gotTS, doneTSObj, tsId, gotTSRes, getTSRes, newTSOb, addObDbRes, setSyncRes, calcDonePay, pArr;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      wNames = function wNames(oUId) {
                        var oUArr = _this6.workAreas.filter(function (oU) {
                          return oU.Id === oUId;
                        });

                        return {
                          cname: oUArr[0]['CompanyCode'],
                          warea: oUArr[0]['OperationalUnitName']
                        };
                      };

                      niceNS = rawNS;
                      nN = wNames(rawNS.OperationalUnit);
                      nN.warea ? niceNS['nOpUnit'] = nN.warea : niceNS['nOpUnit'] = '';
                      nN.cname ? niceNS['nCompanyName'] = nN.cname : niceNS['nCompanyName'] = this.workName;
                      niceNS['nDate'] = this.dT.format(new Date(rawNS.Date), 'EEEE, d MMMM yyyy');
                      nStartEndObj = this.dT.rosterSETimes(rawNS.StartTime, rawNS.EndTime);
                      niceNS['nStart'] = nStartEndObj.s.trim();
                      niceNS['nEnd'] = nStartEndObj.e.trim();
                      _context9.next = 11;
                      return this.getPay(rawNS);

                    case 11:
                      calcPay = _context9.sent;
                      niceNS['nIncomeObj'] = calcPay;
                      niceNS['nIncome'] = calcPay.t.toFixed(0);
                      tT = {
                        hours: 0,
                        minutes: 0
                      };

                      if (rawNS.TotalTime.toString().includes('.')) {
                        ttArr = rawNS.TotalTime.toString().split('.');
                        tT.hours = parseInt(ttArr[0]);
                        tT.minutes = Math.round(Number('0.' + ttArr[1]) * 60);
                      } else {
                        tT.hours = rawNS.TotalTime;
                      }

                      ;
                      niceNS['nTotalTime'] = tT;
                      lCommCount = 0;
                      lWarnCount = 0;

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
                          warnArr = rawNS.Warning.split('|');
                          niceNS['nWarning'] = warnArr[0];
                          lWarnCount++;
                        } else {
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
                      rawNS.ConfirmBy === 0 ? lnConfirmBy = false : lnConfirmBy = this.dT.Dut(rawNS.ConfirmBy);
                      niceNS['nConfirmBy'] = lnConfirmBy;
                      rawNS.ConfirmTime === 0 ? lnConfirmTime = false : lnConfirmTime = this.dT.Dut(rawNS.ConfirmTime);
                      niceNS['nConfirmTime'] = lnConfirmTime;
                      niceNS['nSwapStatus'] = rawNS.SwapStatus;
                      this.dT.gUT() > rawNS.EndTime ? isPastS = true : isPastS = false;
                      isPastS ? niceNS['nIsFinished'] = true : niceNS['nIsFinished'] = false;

                      if (!this.dT.isTW(new Date(rawNS.Date))) {
                        _context9.next = 102;
                        break;
                      }

                      niceNS['nThisWeek'] = true;

                      if (!(rawNS.MatchedByTimesheet > 0)) {
                        _context9.next = 93;
                        break;
                      }

                      gotTS = null;
                      tsId = rawNS.MatchedByTimesheet;
                      _context9.next = 48;
                      return this.sqlServ.checkGetSingleTS(tsId);

                    case 48:
                      gotTSRes = _context9.sent;

                      if (!gotTSRes.result) {
                        _context9.next = 55;
                        break;
                      }

                      this.logger.info('[TabShifts|formatShifts] (Get Shift TS < DB) - SUCCESS.');
                      gotTS = true;
                      doneTSObj = gotTSRes.data;
                      _context9.next = 80;
                      break;

                    case 55:
                      this.logger.info('[TabShifts|formatShifts] (Get Shift TS < DB) - FAIL... Trying API...');
                      _context9.next = 58;
                      return this.deputy.getSingleTS(tsId);

                    case 58:
                      getTSRes = _context9.sent;

                      if (!getTSRes.result) {
                        _context9.next = 78;
                        break;
                      }

                      this.logger.info('[TabShifts|formatShifts] (Get New TS < API) - SUCCESS.');
                      newTSOb = getTSRes.data[0];
                      gotTS = true;
                      doneTSObj = newTSOb;
                      _context9.next = 66;
                      return this.sqlServ.insertSingleItem('timesheets', newTSOb);

                    case 66:
                      addObDbRes = _context9.sent;

                      if (!addObDbRes) {
                        _context9.next = 75;
                        break;
                      }

                      this.logger.info('[TabShifts|formatShifts] (Add New TS > DB) - SUCCESS.');
                      _context9.next = 71;
                      return this.sqlServ.setSync('timesheets');

                    case 71:
                      setSyncRes = _context9.sent;

                      if (setSyncRes) {
                        this.logger.info('[TabShifts|formatShifts] (Updated TS Sync Date) - SUCCESS.');
                      } else {
                        this.logger.info('[TabShifts|formatShifts] (Updated TS Sync Date) - FAIL.');
                      }

                      _context9.next = 76;
                      break;

                    case 75:
                      this.logger.info('[TabShifts|formatShifts] (Add New TS > DB) - FAIL.');

                    case 76:
                      _context9.next = 80;
                      break;

                    case 78:
                      gotTS = false;
                      this.logger.info('[TabShifts|formatShifts] (Get New TS < API) - FAIL.');

                    case 80:
                      ;

                      if (!gotTS) {
                        _context9.next = 89;
                        break;
                      }

                      _context9.next = 84;
                      return this.getPay(doneTSObj);

                    case 84:
                      calcDonePay = _context9.sent;
                      niceNS['nDoneIncomeObj'] = calcDonePay;
                      niceNS['nDoneIncome'] = calcDonePay.t.toFixed(0);
                      _context9.next = 91;
                      break;

                    case 89:
                      niceNS['nDoneIncomeObj'] = calcPay;
                      niceNS['nDoneIncome'] = calcPay.t.toFixed(0);

                    case 91:
                      _context9.next = 95;
                      break;

                    case 93:
                      niceNS['nDoneIncomeObj'] = {
                        b: 0,
                        p: 0,
                        t: 0
                      };
                      niceNS['nDoneIncome'] = 0;

                    case 95:
                      ;

                      if (isPastS && rawNS.Published === 0) {
                        niceNS['nExtraShift'] = true;
                        this.sSExtraShiftCount++;
                      } else {
                        niceNS['nExtraShift'] = false;
                      }

                      ;

                      if (isPastS && rawNS.MatchedByTimesheet === 0) {
                        niceNS['nMissedShift'] = true;
                        this.sSMissedShiftCount++;
                      } else {
                        niceNS['nMissedShift'] = false;
                      }

                      ;
                      _context9.next = 103;
                      break;

                    case 102:
                      niceNS['nThisWeek'] = false;

                    case 103:
                      ;

                      if (this.workPeople.length > 0) {
                        pArr = this.workPeople.filter(function (p) {
                          return p.EmpId === rawNS.Creator;
                        });

                        if (pArr.length > 0) {
                          niceNS['nCreatorName'] = pArr[0].DisplayName;
                          niceNS['nCreatorAva'] = pArr[0].Photo;
                          niceNS['nPublisher'] = pArr[0]['FirstName'].charAt(0).toUpperCase() + pArr[0]['LastName'].charAt(0).toUpperCase();
                          niceNS['sFName'] = pArr[0]['FirstName'];
                        } else {
                          niceNS['nCreatorName'] = 'NK';
                          niceNS['nCreatorAva'] = '../../../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';
                          niceNS['nPublisher'] = '-';
                          niceNS['sFName'] = '-';
                        }
                      } else {
                        niceNS['nCreatorName'] = 'NK';
                        niceNS['nCreatorAva'] = '../../../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';
                        niceNS['nPublisher'] = '-';
                        niceNS['sFName'] = '-';
                      }

                      niceNS['nCreated'] = new Date(rawNS.Created);
                      niceNS['sCreated'] = this.dT.format(new Date(rawNS.Created), 'd/M H:mm');
                      niceNS['nModified'] = new Date(rawNS.Modified);
                      niceNS['sModified'] = this.dT.format(new Date(rawNS.Modified), 'd/M H:mm');
                      return _context9.abrupt("return", Promise.resolve(niceNS));

                    case 110:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initFetchData",
          value: function initFetchData() {
            var _this7 = this;

            this.logger.info('[TabShifts|initFetchData] (Event) Channel: doInitFetchData [Listening...]');
            this.evServ.subscribe('doInitFetchShiftData', function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var initResData;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        this.evServ.destroy('doInitFetchShiftData');
                        this.logger.info('[TabShifts|initFetchData] (Event) Channel: doInitFetchShiftData [TIGGERED!]');
                        _context10.next = 4;
                        return this.dT.getShiftWeek();

                      case 4:
                        this.sSWeek = _context10.sent;
                        _context10.next = 7;
                        return this.sqlServ.getItemCount(this.dbDataTbl);

                      case 7:
                        this.ttlShiftItems = _context10.sent;

                        if (!(this.ttlShiftItems > 0)) {
                          _context10.next = 13;
                          break;
                        }

                        _context10.next = 11;
                        return this.sqlServ.getXRosterItems(null, {
                          by: this.orderBy,
                          dir: this.orderDir
                        }, this.batchLimit, this.batchOffset);

                      case 11:
                        initResData = _context10.sent;
                        this.initRenderList(initResData);

                      case 13:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initRenderList",
          value: function initRenderList(initResData) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this8 = this;

              var lShifts, sShifts, i, niceInitOb, noS, _i, weekSEOb, pastRHrs, rawDone, xtraIncome, _i2, xtraO, xtraPay, pastRIncome, _loop, _i3, _loop2, _i4, perfVs, _i5;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.logger.info('[TabShifts|initRenderList] ()...'); // FORMAT & SORT ALL SHIFTS

                      lShifts = [];
                      sShifts = [];
                      i = 0;

                    case 4:
                      if (!(i < initResData.length)) {
                        _context11.next = 14;
                        break;
                      }

                      _context11.next = 7;
                      return this.formatShift(initResData[i]);

                    case 7:
                      niceInitOb = _context11.sent;

                      if (niceInitOb.nThisWeek) {
                        sShifts.push(niceInitOb);
                      }

                      ;

                      if (niceInitOb.nIsFinished) {
                        lShifts.push(niceInitOb);
                      }

                    case 11:
                      i++;
                      _context11.next = 4;
                      break;

                    case 14:
                      ; // PUSH/DISPLAY MAIN ROSTER LIST

                      this.shiftItems = lShifts; // CHECK TOTAL SSLIDER LIST !=0

                      this.sSlider.slidesItems = sShifts.reverse();
                      this.sSTotalItems = this.sSlider.slidesItems.length;
                      this.sSTotalItems === 0 ? noS = true : noS = false;
                      this.hasLoaded = true; // CALC RELEVANT TOTALS (IF REQUIRED)

                      if (noS) {
                        _context11.next = 70;
                        break;
                      }

                      for (_i = 0; _i < this.sSlider.slidesItems.length; _i++) {
                        this.sSlider.slidesControls.push({
                          sliderIndex: _i,
                          rosterId: this.sSlider.slidesItems[_i].Id,
                          show: false,
                          inProg: false,
                          isPaused: false,
                          progType: 'indeterminate',
                          progPerc: 0
                        });
                      }

                      ;
                      this.sSDoneShifts = this.sSlider.slidesItems.filter(function (s) {
                        return s.nIsFinished;
                      }).length + this.xtraShifts.length;
                      this.sSShiftPerformVal = -this.sSMissedShiftCount + this.sSExtraShiftCount + this.xtraShifts.length;
                      weekSEOb = {
                        s: this.dT.sOfW('uts'),
                        e: this.dT.eOfW('uts')
                      };
                      _context11.t0 = Math;
                      _context11.next = 29;
                      return this.sqlServ.getWeekDoneHrs(weekSEOb);

                    case 29:
                      _context11.t1 = _context11.sent;
                      _context11.t2 = Number.EPSILON;
                      _context11.t3 = _context11.t1 + _context11.t2;
                      _context11.t4 = _context11.t3 * 100;
                      _context11.t5 = _context11.t0.round.call(_context11.t0, _context11.t4);
                      this.sSDoneHrs = _context11.t5 / 100;
                      this.sSRosterHrs = Math.round((this.sSlider.slidesItems.reduce(function (a, b) {
                        return a + b.TotalTime;
                      }, 0) + Number.EPSILON) * 100) / 100;
                      pastRHrs = Math.round((this.sSlider.slidesItems.filter(function (pS) {
                        return pS.StartTime < _this8.dT.getUT(new Date());
                      }).reduce(function (a, b) {
                        return a + b.TotalTime;
                      }, 0) + Number.EPSILON) * 100) / 100;
                      this.sSHrsPerformVal = Math.round((this.sSDoneHrs - pastRHrs + Number.EPSILON) * 100) / 100;
                      this.sSRosterIncome = Math.round((this.sSlider.slidesItems.reduce(function (a, b) {
                        return a + Number(b.nIncome);
                      }, 0) + Number.EPSILON) * 100) / 100;
                      rawDone = Math.round((this.sSlider.slidesItems.reduce(function (a, b) {
                        return a + Number(b.nDoneIncome);
                      }, 0) + Number.EPSILON) * 100) / 100;
                      xtraIncome = 0;

                      if (!(this.xtraShifts.length > 0)) {
                        _context11.next = 54;
                        break;
                      }

                      _i2 = 0;

                    case 43:
                      if (!(_i2 < this.xtraShifts.length)) {
                        _context11.next = 54;
                        break;
                      }

                      xtraO = this.xtraShifts[_i2];
                      _context11.t6 = Math;
                      _context11.next = 48;
                      return this.getPay(xtraO);

                    case 48:
                      _context11.t7 = _context11.sent.t;
                      xtraPay = _context11.t6.round.call(_context11.t6, _context11.t7);
                      xtraIncome = xtraIncome + xtraPay;

                    case 51:
                      _i2++;
                      _context11.next = 43;
                      break;

                    case 54:
                      ;
                      this.xtraIncomeTotal = xtraIncome;
                      this.sSDoneIncome = rawDone + xtraIncome;
                      pastRIncome = Math.round((this.sSlider.slidesItems.filter(function (pS) {
                        return pS.StartTime < _this8.dT.getUT(new Date());
                      }).reduce(function (a, b) {
                        return a + Number(b.nIncome);
                      }, 0) + Number.EPSILON) * 100) / 100;
                      this.sSIncomePerformVal = Math.round(this.sSDoneIncome - pastRIncome); // BULLET DAYS

                      _loop = function _loop(_i3) {
                        var sItem = _this8.sSlider.slidesItems[_i3];
                        var slideDate = new Date(sItem.Date);

                        var bulletDayIndex = _this8.sSWeek.findIndex(function (bd) {
                          return _this8.dT.isSD(bd.d, slideDate);
                        });

                        _this8.sSWeek[bulletDayIndex].isshift = true;

                        if (_this8.sSWeek[bulletDayIndex].tonow === 'B' && sItem.MatchedByTimesheet === 0) {
                          _this8.sSWeek[bulletDayIndex]['nots'] = true;
                        } else {
                          _this8.sSWeek[bulletDayIndex]['nots'] = false;
                        }

                        ;
                        _this8.sSWeek[bulletDayIndex]['si'] = _i3;
                        _this8.sSWeek[bulletDayIndex]['rid'] = sItem.Id;

                        if (bulletDayIndex !== -1) {
                          var bdSN = _this8.sSWeek[0].sn;

                          _this8.indicMatch.push({
                            sn: bdSN,
                            si: _i3
                          });
                        }

                        ;
                      };

                      for (_i3 = 0; _i3 < this.sSlider.slidesItems.length; _i3++) {
                        _loop(_i3);
                      }

                      _loop2 = function _loop2(_i4) {
                        var xtra = _this8.xtraShifts[_i4];
                        var xtraShiftDate = new Date(xtra.Date);

                        var bulletDayIndex = _this8.sSWeek.findIndex(function (bd) {
                          return _this8.dT.isSD(bd.d, xtraShiftDate);
                        });

                        _this8.sSWeek[bulletDayIndex].isshift = true;
                        _this8.sSWeek[bulletDayIndex].tonow === 'B';
                        _this8.sSWeek[bulletDayIndex]['nots'] = false;
                        _this8.sSWeek[bulletDayIndex]['xtra'] = true;
                      };

                      for (_i4 = 0; _i4 < this.xtraShifts.length; _i4++) {
                        _loop2(_i4);
                      } // FINALLY


                      this.myWeekPagReady = true;

                      if (this.initRes.length === this.ttlShiftItems) {
                        this.iScrollShifts.disabled = true;
                        this.endOfList = true;
                      } else {
                        this.iScrollShifts.disabled = false;
                        this.endOfList = false;
                      }

                      ;
                      this.evServ.publish('slidesLoaded', 'List Data Loaded');
                      setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-iscroll').css('opacity', '1');
                      }, 2000);
                      _context11.next = 78;
                      break;

                    case 70:
                      perfVs = ['sSDoneShifts', 'sSShiftPerformVal', 'sSDoneHrs', 'sSRosterHrs', 'sSHrsPerformVal', 'sSRosterIncome', 'sSDoneIncome', 'sSIncomePerformVal'];

                      for (_i5 = 0; _i5 < perfVs.length; _i5++) {
                        this[perfVs[_i5]] = 0;
                      }

                      ; // FINALLY

                      this.myWeekPagReady = true;

                      if (this.initRes.length === this.ttlShiftItems) {
                        this.iScrollShifts.disabled = true;
                        this.endOfList = true;
                      } else {
                        this.iScrollShifts.disabled = false;
                        this.endOfList = false;
                      }

                      ;
                      this.evServ.publish('slidesLoaded', 'List Data Loaded');
                      setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-iscroll').css('opacity', '1');
                      }, 2000);

                    case 78:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "slideToNextLastShift",
          value: function slideToNextLastShift() {
            var _this9 = this;

            var initCount = 0;
            this.evServ.subscribe('slidesLoaded', function (stageStr) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var _this10 = this;

                var nowTS, nSI, sI, cSI, doNextSlide;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        initCount++;

                        if (!(initCount === 1)) {
                          _context12.next = 5;
                          break;
                        }

                        this.logger.info('[slideToNextLastShift] (SlidesLoaded) - STAGE #' + initCount + ' - ' + stageStr);
                        _context12.next = 27;
                        break;

                      case 5:
                        this.logger.info('[slideToNextLastShift] (SlidesLoaded) - STAGE #' + initCount + ' - ' + stageStr);
                        this.evServ.destroy('slidesLoaded');

                        if (!(this.sSTotalItems === 0)) {
                          _context12.next = 12;
                          break;
                        }

                        this.sSCD = 0;
                        this.CDReady = true;
                        _context12.next = 27;
                        break;

                      case 12:
                        nowTS = this.dT.getUT(new Date());
                        nSI = this.sSlider.slidesItems.findIndex(function (sT) {
                          return sT.StartTime > nowTS;
                        });
                        nSI === -1 ? sI = this.sSlider.slidesItems.length - 1 : sI = nSI;
                        this.startNextShiftCD(sI);
                        _context12.next = 18;
                        return this.shiftsSlider.getActiveIndex();

                      case 18:
                        cSI = _context12.sent;

                        if (!(sI === cSI)) {
                          _context12.next = 23;
                          break;
                        }

                        this.sSChecks('init');
                        _context12.next = 27;
                        break;

                      case 23:
                        doNextSlide = function doNextSlide(nextSI) {
                          _this10.shiftsSlider.slideTo(nextSI, 250, false);

                          return Promise.resolve(true);
                        };

                        _context12.next = 26;
                        return doNextSlide(sI);

                      case 26:
                        setTimeout(function () {
                          _this10.sSChecks('init');
                        }, 300);

                      case 27:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "startNextShiftCD",
          value: function startNextShiftCD(nextShiftIndex) {
            var _this11 = this;

            this.logger.info('[TabShifts|startNextShiftCD] ()...');
            var sSTimer;
            this.sSCD = {
              d: 0,
              h: 0,
              m: 0,
              s: 0
            };
            var nextSSUTS = this.sSlider.slidesItems[nextShiftIndex]['StartTime'];
            var nextSSD = this.dT.Dut(nextSSUTS);
            sSTimer = setInterval(function () {
              timeBetweenDates(nextSSD);
            }, 1000);

            var timeBetweenDates = function timeBetweenDates(toDate) {
              var dateEntered = toDate;
              var now = new Date();
              var difference = dateEntered.getTime() - now.getTime();

              if (difference <= 0) {
                clearInterval(sSTimer);
              } else {
                _this11.sSCD.s = Math.floor(difference / 1000);
                _this11.sSCD.m = Math.floor(_this11.sSCD.s / 60);
                _this11.sSCD.h = Math.floor(_this11.sSCD.m / 60);
                _this11.sSCD.d = Math.floor(_this11.sSCD.h / 24);
                _this11.sSCD.h %= 24;
                _this11.sSCD.m %= 60;
                _this11.sSCD.s %= 60;
              }
            };

            setTimeout(function () {
              _this11.CDReady = true;
            }, 1500);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "feedItems",
          value: function feedItems(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.batchOffset += this.batchLimit;
                      this.batchStart = this.shiftItems.length;
                      this.batchEnd = this.batchStart + this.batchLimit;
                      _context13.next = 5;
                      return this.getShifts(this.batchOffset);

                    case 5:
                      if (this.shiftItems.length === this.ttlShiftItems) {
                        this.iScrollShifts.disabled = true;
                        this.endOfList = true;
                      } else {
                        this.iScrollShifts.disabled = false;
                        this.endOfList = false;
                      }

                      ;
                      event.target.complete();
                      this.vScrollShifts.checkEnd();

                    case 9:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getShifts",
          value: function getShifts(offset) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var thisBatch, i, niceTSOb;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.logger.info('[TabShifts|getShifts] (' + offset + ')...');
                      _context14.prev = 1;
                      _context14.next = 4;
                      return this.sqlServ.getXRosterItems(null, {
                        by: this.orderBy,
                        dir: this.orderDir
                      }, this.batchLimit, this.batchOffset);

                    case 4:
                      thisBatch = _context14.sent;
                      i = 0;

                    case 6:
                      if (!(i < thisBatch.length)) {
                        _context14.next = 14;
                        break;
                      }

                      _context14.next = 9;
                      return this.formatShift(thisBatch[i]);

                    case 9:
                      niceTSOb = _context14.sent;
                      this.shiftItems.push(niceTSOb);

                    case 11:
                      i++;
                      _context14.next = 6;
                      break;

                    case 14:
                      return _context14.abrupt("return", Promise.resolve(true));

                    case 17:
                      _context14.prev = 17;
                      _context14.t0 = _context14["catch"](1);
                      this.logger.info('[TabShifts|getShifts] (Error): ' + _context14.t0);

                    case 20:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this, [[1, 17]]);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "gotoTimesheet",
          value: function gotoTimesheet(rosId, tsId) {
            this.logger.info('[TabShifts|gotoTimesheet] (' + rosId + ',' + tsId + ')...');
            this.gotoTSId = tsId;
            var navXtras = {
              state: {
                origin: 'shifts',
                id: this.gotoTSId
              }
            };
            this.router.navigate(['/tabs/tabtsheets'], navXtras);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "gotoSettings",
          value: function gotoSettings() {
            this.navCtrl.navigateRoot('/settings');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "showShiftDetail",
          value: function showShiftDetail(rosId, hIndex) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var tsStartEndObj, rosterStartEndObj, calcRosPay, calcTSPay;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.logger.info('[TabShifts|showShiftDetail] (' + rosId + ',' + hIndex + ')...');
                      this.doneSId = rosId;
                      this.doneS = this.shiftItems.filter(function (rId) {
                        return rId.Id === rosId;
                      })[0];

                      if (!(this.doneS.MatchedByTimesheet > 0)) {
                        _context15.next = 31;
                        break;
                      }

                      this.doneSHasTSData = true;
                      _context15.next = 7;
                      return this.sqlServ.getSingleTimesheet(this.doneS.MatchedByTimesheet);

                    case 7:
                      this.doneSTSData = _context15.sent;
                      tsStartEndObj = this.dT.rosterSETimes(this.doneSTSData.StartTime, this.doneSTSData.EndTime);
                      this.doneS['tsStart'] = tsStartEndObj.s;
                      this.doneS['tsEnd'] = tsStartEndObj.e;
                      rosterStartEndObj = this.dT.rosterSEDoneTimes(this.doneS.StartTime, this.doneS.EndTime);
                      this.doneS['rosStart'] = rosterStartEndObj.s;
                      this.doneS['rosEnd'] = rosterStartEndObj.e;
                      this.doneS['tsTotalTime'] = this.dT.shiftTTToDur(this.doneSTSData.TotalTime);
                      this.doneS['tsTTDiff'] = this.dT.rosVsTSTTDiff(this.doneS.TotalTime, this.doneSTSData.TotalTime);
                      _context15.next = 18;
                      return this.getPay(this.doneS);

                    case 18:
                      calcRosPay = _context15.sent;
                      _context15.next = 21;
                      return this.getPay(this.doneSTSData);

                    case 21:
                      calcTSPay = _context15.sent;
                      this.doneS['rosIncomeObj'] = calcRosPay;
                      this.doneS['tsIncomeObj'] = calcTSPay;
                      this.doneS['rosIncome'] = calcRosPay.t.toFixed(0);
                      this.doneS['tsIncome'] = calcTSPay.t.toFixed(0);
                      this.doneS['tsIncomePerf'] = Math.round(calcTSPay.t - calcRosPay.t);
                      this.doneSAgoTime = this.dT.DurAsObj(new Date(), new Date(this.doneS.Date));
                      this.doneSIsShowing = true;
                      _context15.next = 34;
                      break;

                    case 31:
                      this.logger.info('[TabShifts|showShiftDetail] (ERROR): Missing Timesheet');
                      this.doneSTSData = false;
                      this.doneSIsShowing = true;

                    case 34:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doneShiftShowComments",
          value: function doneShiftShowComments() {
            this.logger.info('[TabShifts|doneShiftShowComments] ()...');
            this.doneSShowComments ? this.doneSShowComments = false : this.doneSShowComments = true;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doneShiftShowWarnings",
          value: function doneShiftShowWarnings() {
            this.logger.info('[TabShifts|doneShiftShowComments] ()...');
            this.doneSShowWarnings ? this.doneSShowWarnings = false : this.doneSShowWarnings = true;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "closeShiftDetail",
          value: function closeShiftDetail() {
            this.logger.info('[TabShifts|closeShiftDetail] ()...');
            this.doneSId = 0;
            this.doneSHasTSData = false;
            this.doneSTSData = null;
            this.doneS = null;
            this.doneSAgoTime = null;
            this.doneSIsShowing = false;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            this.iScrollShifts.disabled = !this.iScrollShifts.disabled;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSControl",
          value: function sSControl(rosterId, action) {
            this.logger.info('[TabShifts|sSShowControlsToggle] (' + rosterId + ',' + action + ')...'); //{sliderIndex:i,rosterId:this.sSlider.slidesItems[i].Id,show:false,inProg:false,isPaused:false,progPerc:0}

            var sC = this.sSlider.slidesControls[this.sSCurrentIndex];

            if (action === 'show') {
              sC;
              sC.show = !sC.show;
            }

            if (action === 'start') {
              if (!sC.inProg) {
                sC.inProg = true;
              } else if (sC.isPaused) {
                sC.isPaused = false;
              } else if (!sC.inProg && !sC.isPaused) {
                this.logger.info('Shift Item (slideIndex:' + this.sSCurrentIndex + ',rosterId:' + rosterId + ') is [ALREADY STARTED]');
              }
            }

            if (action === 'stop') {
              if (sC.inProg) {
                sC.inProg = false;

                if (sC.isPaused) {
                  sC.isPaused = false;
                }
              } else {
                this.logger.info('Shift Item (slideIndex:' + this.sSCurrentIndex + ',rosterId:' + rosterId + ') is [NOT IN-PROGRESS]');
              }
            }

            if (action === 'pause') {
              if (!sC.isPaused) {
                sC.isPaused = true;
              } else {
                sC.isPaused = false;
              }
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "disableRefresher",
          value: function disableRefresher(togV) {
            this.preventRefreshPull = togV;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSNext",
          value: function sSNext() {
            var _this12 = this;

            this.logger.info('[TabShifts|sSNext] (sSNext)');
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.forward').addClass('ss-nav-arrow-activated');
            this.shiftsSlider.slideNext(250, false).then(function () {
              _this12.sSChecks(null);

              jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.forward').css('transition', 'color 1.5s ease-in').removeClass('ss-nav-arrow-activated');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.forward').css('transition', 'unset');
              }, 1500);
            });
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSPrev",
          value: function sSPrev() {
            var _this13 = this;

            this.logger.info('[TabShifts|sSPrev] (sSPrev)');
            jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.back').addClass('ss-nav-arrow-activated');
            this.shiftsSlider.slidePrev(250, false).then(function () {
              _this13.sSChecks(null);

              jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.back').css('transition', 'color 1.5s ease-in').removeClass('ss-nav-arrow-activated');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-shiftsslider-nav-arrow-ico.back').css('transition', 'unset');
              }, 1500);
            });
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSGotoShift",
          value: function sSGotoShift(isShift, sIndex) {
            var _this14 = this;

            this.logger.info('[TabShifts|sSGotoShift] (' + isShift + ',' + sIndex + ')...');

            if (isShift) {
              if (this.doneSIsShowing) {
                this.closeShiftDetail();
              }

              ;
              this.shiftsSlider.slideTo(sIndex, 250, false).then(function () {
                _this14.sSChecks(null);
              })["catch"](function (err) {
                _this14.logger.info('[TabShifts|sSGotoShift] (Error): ' + err);
              });
            } else {
              this.logger.info('[TabShifts|sSGotoShift] (No Shift) Aborted.');
            }
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSDidLoad",
          value: function sSDidLoad() {
            this.logger.info('[TabShifts|sSDidLoad] (ionSlidesDidLoad)');
            this.sSlider.sliderHasLoaded = true;
            this.evServ.publish('slidesLoaded', 'Slides DOM Element Loaded');
            this.extraSE();
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSIsStart",
          value: function sSIsStart() {
            this.logger.info('[TabShifts|sSIsStart] (ionSlideReachStart).');
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSIsEnd",
          value: function sSIsEnd() {
            this.logger.info('[TabShifts|sSIsEnd] (ionSlideReachEnd).');
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSWillChange",
          value: function sSWillChange() {
            this.logger.info('[TabShifts|sSWillChange] (sSWillChange)...');
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSDidChange",
          value: function sSDidChange() {
            this.logger.info('[TabShifts|sSDidChange] (sSDidChange)');
            this.sSChecks(null);
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "extraSE",
          value: function extraSE() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this15 = this;

              var mySw;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.shiftsSlider.getSwiper();

                    case 2:
                      mySw = _context16.sent;
                      this.evServ.subscribe('doExtraCheck', function () {
                        if (!_this15.sSChecking) {
                          _this15.sSChecks(null);
                        }
                      });
                      mySw.on('slideChange', function () {
                        _this15.evServ.publish('doExtraCheck', true);
                      });

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSChecks",
          value: function sSChecks(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this16 = this;

              var isFirstSlide, isLastSlide, isFirstLastSlide, isOtherSlide, nowSlideIndex, nowSlideNumber, checkIfFirst, checkIfLast, ttlSlides, _loop3, i, todayHasShift, myTodaySSIndex, myTodayShift, _i7, tSS, myS, myA;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.logger.info('[TabShifts|sSChecks] ()...');

                      if (this.sSChecking) {
                        _context17.next = 30;
                        break;
                      }

                      this.sSChecking = true;

                      isFirstSlide = function isFirstSlide() {
                        _this16.logger.info('(Slider) [FIRST SLIDE!] <<< PREV - [LOCKED]');

                        _this16.shiftsSlider.lockSwipeToPrev(true);

                        _this16.shiftsSlider.lockSwipeToNext(false);

                        _this16.sSlider['isBeginningSlide'] = true;
                        _this16.sSlider['isEndSlide'] = false;
                      };

                      isLastSlide = function isLastSlide() {
                        _this16.logger.info('(Slider) [LAST SLIDE!] >>> NEXT - [LOCKED]');

                        _this16.shiftsSlider.lockSwipeToPrev(false);

                        _this16.shiftsSlider.lockSwipeToNext(true);

                        _this16.sSlider['isBeginningSlide'] = false;
                        _this16.sSlider['isEndSlide'] = true;
                      };

                      isFirstLastSlide = function isFirstLastSlide() {
                        _this16.logger.info('(Slider) [FIRST & LAST SLIDE!] <<< PREV & NEXT >>> - [BOTH LOCKED]');

                        _this16.shiftsSlider.lockSwipeToPrev(true);

                        _this16.shiftsSlider.lockSwipeToNext(true);

                        _this16.sSlider['isBeginningSlide'] = true;
                        _this16.sSlider['isEndSlide'] = true;
                      };

                      isOtherSlide = function isOtherSlide() {
                        _this16.logger.info('(Slider) [OTHER SLIDE] <<< PREV & NEXT >>> - [BOTH UNLOCKED]');

                        _this16.shiftsSlider.lockSwipeToPrev(false);

                        _this16.shiftsSlider.lockSwipeToNext(false);

                        _this16.sSlider['isBeginningSlide'] = false;
                        _this16.sSlider['isEndSlide'] = false;
                      };

                      _context17.next = 9;
                      return this.shiftsSlider.getActiveIndex();

                    case 9:
                      nowSlideIndex = _context17.sent;
                      _context17.next = 12;
                      return this.shiftsSlider.getActiveIndex();

                    case 12:
                      _context17.t0 = _context17.sent;
                      nowSlideNumber = _context17.t0 + 1;
                      _context17.next = 16;
                      return this.shiftsSlider.isBeginning();

                    case 16:
                      checkIfFirst = _context17.sent;
                      _context17.next = 19;
                      return this.shiftsSlider.isEnd();

                    case 19:
                      checkIfLast = _context17.sent;
                      ttlSlides = this.sSlider.slidesItems.length;
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
                        } else {
                          this.apiPeerView = false;
                        }

                        ;

                        if (this.workPeople.length > 0) {
                          if (this.apiPeerView) {
                            _loop3 = function _loop3(i) {
                              var tSSColObj = {
                                sameArea: [],
                                otherArea: []
                              };
                              var mTS = _this16.sSlider.slidesItems[i];
                              var mTSD = new Date(mTS.Date);
                              var mTSA = mTS.OperationalUnit;

                              _this16.deputy.getThisShiftColleagues(mTSD).then(function (tPRes) {
                                var thisDayPpl = tPRes;

                                var _loop4 = function _loop4(_i6) {
                                  var pS = thisDayPpl[_i6];

                                  if (pS.Employee !== mTS.Employee) {
                                    if (pS.EndTime > mTS.StartTime || pS.StartTime < mTS.EndTime) {
                                      var thisPObj = _this16.workPeople.filter(function (wP) {
                                        return wP.EmpId === pS.Employee;
                                      })[0];

                                      if (pS.OperationalUnit === mTSA) {
                                        tSSColObj.sameArea.push(thisPObj);
                                      } else {
                                        tSSColObj.otherArea.push(thisPObj);
                                      }

                                      ;
                                    }
                                  }
                                };

                                for (var _i6 = 0; _i6 < thisDayPpl.length; _i6++) {
                                  _loop4(_i6);
                                }

                                _this16.sSMultiColleagues.push(tSSColObj);
                              })["catch"](function (tPErr) {
                                _this16.logger.info('[TabShifts|sSChecks|Init|WorkPpl] (Error): ' + tPErr);

                                _this16.initDidFinish = true;
                              });
                            };

                            for (i = 0; i < this.sSlider.slidesItems.length; i++) {
                              _loop3(i);
                            }

                            this.initDidFinish = true;
                          } else {
                            todayHasShift = false;

                            for (_i7 = 0; _i7 < this.sSlider.slidesItems.length; _i7++) {
                              tSS = this.sSlider.slidesItems[_i7];

                              if (this.dT.isSD(new Date(), new Date(tSS.Date))) {
                                myTodaySSIndex = _i7;
                                todayHasShift = true;
                                myTodayShift = tSS;
                              }
                            }

                            ;

                            if (todayHasShift) {
                              this.sSColleagueDayIndex = myTodaySSIndex;
                              myS = myTodayShift;
                              myA = myTodayShift.OperationalUnit;
                              this.deputy.getTodayShiftColleagues().then(function (tPRes) {
                                var todayPpl = tPRes;

                                var _loop5 = function _loop5(_i8) {
                                  var pS = todayPpl[_i8];

                                  if (pS.Employee !== myTodayShift.Employee) {
                                    if (pS.EndTime > myS.StartTime || pS.StartTime < myS.EndTime) {
                                      var thisPObj = _this16.workPeople.filter(function (wP) {
                                        return wP.EmpId === pS.Employee;
                                      })[0];

                                      if (pS.OperationalUnit === myA) {
                                        _this16.sSColleagues.sameArea.push(thisPObj);
                                      } else {
                                        _this16.sSColleagues.otherArea.push(thisPObj);
                                      }

                                      ;
                                    }
                                  }
                                };

                                for (var _i8 = 0; _i8 < todayPpl.length; _i8++) {
                                  _loop5(_i8);
                                }

                                _this16.initDidFinish = true;
                              })["catch"](function (tPErr) {
                                _this16.logger.info('[TabShifts|sSChecks|Init|WorkPpl] (Error): ' + tPErr);

                                _this16.initDidFinish = true;
                              });
                            } else {
                              this.initDidFinish = true;
                            }
                          }
                        } else {
                          this.initDidFinish = true;
                        }
                      }

                      setTimeout(function () {
                        _this16.sSChecking = false;
                      }, 250);
                      _context17.next = 31;
                      break;

                    case 30:
                      this.logger.info('[TabShifts|sSChecks] (CHECKING ALREADY IN PROGRESS!) - Skipped!');

                    case 31:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "stopShowColleague",
          value: function stopShowColleague() {
            this.logger.info('[TabShifts|stopShowColleague] ()...');
            this.viewColleague = null;
            this.showingColleague = false;
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "showColleague",
          value: function showColleague(colleagueObj) {
            this.logger.info('[TabShifts|showColleague] ()...');
            this.viewColleague = colleagueObj;
            this.showingColleague = true;
          } //////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sSEvent",
          value: function sSEvent(eV) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var tappedSlideNo;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!(eV === 'tap')) {
                        _context18.next = 6;
                        break;
                      }

                      _context18.next = 3;
                      return this.shiftsSlider.getActiveIndex();

                    case 3:
                      _context18.t0 = _context18.sent;
                      tappedSlideNo = _context18.t0 + 1;
                      this.logger.info('[TabShifts|ionSlideEvent] Slide ' + tappedSlideNo + ' was tapped.');

                    case 6:
                      ;

                      if (eV === 'firstSlide') {
                        this.logger.info('[TabShifts|ionSlideEvent] Reached [FIRST] Slide (1)');
                      }

                      ;

                      if (eV === 'lastSlide') {
                        this.logger.info('[TabShifts|ionSlideEvent] Reached [LAST] Slide (' + this.sSlider.slidesItems.length + ')');
                      }

                      ;

                    case 11:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "headerProgress",
          value: function headerProgress(mode, action, data) {
            var _this17 = this;

            this.logger.info('[TabShifts|headerProgress] (' + mode + ',' + action + ',' + data + ')...');
            var circProgEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-progcirc.' + this.tabKey);
            var starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + this.tabKey);
            var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + this.tabKey);

            var startRoutine = function startRoutine() {
              _this17.progCirc.outerStrokeColor = '#FF9800';
              jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'scale(.9)');
              jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)');
              _this17.progCirc.percent = 0;

              if (jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'none')) {
                jquery__WEBPACK_IMPORTED_MODULE_16__(circProgEle).css('display', 'unset');
              }
            };

            var finishRoutine = function finishRoutine() {
              jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).css('transform', 'unset');
              jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(0deg)');
              _this17.progCirc.outerStrokeColor = '#4caf50';
              _this17.progCirc.percent = 100;

              _this17.myAniCSS('.hcl-progcirc.' + _this17.tabKey, 'fadeOut', 0, 1000, 'remove', 'hide');

              _this17.refresher.complete();

              _this17.isRefreshing = false;
            };

            if (mode === 'manual') {
              if (action === 'start') {
                this.progCirc.animation = false;
                startRoutine();
              } else if (action === 'change') {
                this.progCirc.percent = data;
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + 360 * data / 100 + ')deg');
              } else if (action === 'finish') {
                finishRoutine();
              }
            } else {
              this.progCirc.animation = true;
              startRoutine();
              var starRotCount = 0;
              var incPercEaLoop = 20 / data * 1000;
              var rotStarEaLoop = 72 / data * 1000;
              var timedProgLoop = setInterval(function () {
                _this17.progCirc.percent += incPercEaLoop;
                starRotCount += rotStarEaLoop;
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).css('transform', 'rotate(' + starRotCount + 'deg)');

                if (_this17.progCirc.percent >= 100) {
                  clearInterval(timedProgLoop);
                  finishRoutine();
                }
              }, 200);
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      this.logger.info('[TabShifts|doRefresh] (event)...');
                      this.isRefreshing = true;
                      this.refresher = event.target;
                      this.headerProgress('manual', 'start', null);
                      this.doInitRefresh('refresh');

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "historyScroll",
          value: function historyScroll(event) {
            var _this18 = this;

            var sD = event.detail.scrollTop;
            var shT = event.target.offsetHeight - 56;

            if (sD > shT) {
              this.showTTopBtn = true;
              jquery__WEBPACK_IMPORTED_MODULE_16__('.shifts-history-btn').removeClass('animate__slideOutDown').addClass('animate__slideInUp');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_16__('.shifts-history-btn').removeClass('animate__slideInUp').addClass('animate__slideOutDown');
              setTimeout(function () {
                _this18.showTTopBtn = false;
              }, 300);
            }

            ;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "scrollHistoryTop",
          value: function scrollHistoryTop() {
            var _this19 = this;

            this.logger.info('[TabShifts|scrollHistoryTop] ()...');
            this.scrollingTT = true;
            this.historyContent.scrollToTop(500).then(function () {
              _this19.scrollingTT = false;
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.logger.info('[TabShifts|ionViewWillLeave] ()...');

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();

            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.removeAllListeners();

            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + this.tabKey);
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + this.tabKey);
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + this.tabKey);
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', '0px');
            jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).removeClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).removeClass('scrolledin');
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).removeClass('dimmed');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "tabChangeAni",
          value: function tabChangeAni(thisTabKey) {
            this.logger.info('[TabShifts|tabChangeAnim] (' + thisTabKey + ')...');
            var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + thisTabKey);
            var starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + thisTabKey);
            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + thisTabKey);
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + thisTabKey);
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + thisTabKey);
            jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).addClass('tabtilt');
            jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).addClass('tabchangestarback');
            jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', this.leftAnimBarW);
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).addClass('showing');
              jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).addClass('scrolledin');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).removeClass('tabtilt');
                jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).addClass('dimmed');
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).removeClass('tabchangestarback');
              }, 200);
            }, 200);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "pageEnterAnim",
          value: function pageEnterAnim() {
            var _this20 = this;

            this.logger.info('[TabShifts|pageEnterAnim] ()...');
            this.evServ.subscribe('doPageEnterAnim', function () {
              _this20.tabKey = 'tabshifts';
              var pageKey = 'tabshifts';
              var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-slogo.' + pageKey);
              var preImg = '../../assets/img/slogo-';
              var cProgEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-progcirc.' + pageKey);
              var patchEles = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
              var starEle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-star.' + pageKey);
              var pageTitle = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-title.' + pageKey);
              var titleBar = jquery__WEBPACK_IMPORTED_MODULE_16__('.hcl-leftbar.' + pageKey);
              var leftCol = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-page-header-col.left-col.' + pageKey);
              var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title-leftanimbar-inner.' + pageKey);
              var titleText = jquery__WEBPACK_IMPORTED_MODULE_16__('.sheriff-title.tight-wrap.' + pageKey);
              var calcBarW = Math.round(jquery__WEBPACK_IMPORTED_MODULE_16__(leftCol).outerWidth() + 6 - (jquery__WEBPACK_IMPORTED_MODULE_16__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_16__(pageTitle).outerWidth())) + 'px';
              _this20.leftAnimBarW = calcBarW;
              jquery__WEBPACK_IMPORTED_MODULE_16__(patchEles).addClass('hidden');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_16__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).addClass('hcl-star-startanim');
                _this20.progCirc.outerStrokeColor = '#FF9800';
                _this20.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).attr('src', preImg + 'g.png');

                _this20.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');

                setTimeout(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).attr('src', preImg + 'w.png');

                  _this20.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');

                  jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).addClass('tabtilt');
                  jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).css('width', calcBarW);
                  setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_16__(animBarEnd).addClass('showing');
                    jquery__WEBPACK_IMPORTED_MODULE_16__(titleText).addClass('scrolledin');
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_16__(titleBar).addClass('dimmed');
                      jquery__WEBPACK_IMPORTED_MODULE_16__(sLogoEle).removeClass('tabtilt');
                    }, 200);
                  }, 200);
                  setTimeout(function () {
                    _this20.progCirc.percent = 0;
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_16__(cProgEle).css('display', 'unset');
                    }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_16__(starEle).removeClass('hcl-star-startanim');

                    _this20.evServ.destroy('doPageEnterAnim');
                  }, 600);
                }, 400);
              }, 300);
            });
          } //////////'.myElement','tada',0-1500,0-1500,'keep|remove','show|hide|remove'

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[TabShifts|myAniCSS] (' + theEle + ',' + aniName + ',' + aniDel + ',' + aniDur + ',' + aniEnd + ',' + eleEnd + ')...');
            var didResolve = false;

            var doAni = function doAni() {
              return new Promise(function (resolve) {
                var aniStr = 'animate__animated animate__' + aniName;
                var delStr = 'animDel-' + aniDel;
                var durStr = 'animDur-' + aniDur;
                jquery__WEBPACK_IMPORTED_MODULE_16__(theEle).on('animationend', function () {
                  setTimeout(function () {
                    if (!didResolve) {
                      resolve(true);
                    }
                  }, 2000);

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
            };

            doAni();
          } ///////////////////////////////////////////////////////////////////////////

        }, {
          key: "hideSplash",
          value: function hideSplash() {
            this.logger.info('[Tabs|hideSplash] ()...');

            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setOverlaysWebView({
              overlay: true
            });

            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_13__.StatusBar.setBackgroundColor({
              color: '#00000000'
            });

            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-auth-networkstatus-wrapper').addClass('adjust-for-auth-toolbar-overlay');

            var myAniCSS = function myAniCSS(jqEle, animName) {
              return new Promise(function (resolve) {
                var animClassStr = 'animate__animated animate__' + animName + ' animate__fast';
                jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).addClass(animClassStr);
                jquery__WEBPACK_IMPORTED_MODULE_16__(jqEle).on('animationend', function () {
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
            jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper, .sheriff-col.custom-splash-col.middlelogocol').css('background', 'transparent');
            myAniCSS('#sheriff-custom-splash-wrapper', 'fadeOut').then(function () {
              return jquery__WEBPACK_IMPORTED_MODULE_16__('#sheriff-custom-splash-wrapper').hide();
            });
          }
        }]);

        return TabShiftsPage;
      }();

      _TabShiftsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform
        }, {
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_19__.NGXLogger
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_10__.EventsService
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService
        }, {
          type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_11__.DeputyService
        }, {
          type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_6__.SQLiteService
        }, {
          type: _services_sync_service__WEBPACK_IMPORTED_MODULE_3__.SyncService
        }, {
          type: src_app_services_fairwork_service__WEBPACK_IMPORTED_MODULE_7__.FairworkService
        }, {
          type: _services_detail_service__WEBPACK_IMPORTED_MODULE_5__.DetailService
        }, {
          type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_4__.DateTimeService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService
        }, {
          type: src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_12__.CalendarService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NavController
        }, {
          type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_14__.FirebaseService
        }];
      };

      _TabShiftsPage.propDecorators = {
        iScrollShifts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInfiniteScroll]
        }],
        vScrollShifts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonVirtualScroll]
        }],
        historyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: ['historyContent', {
            "static": false
          }]
        }],
        shiftsSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: ['shiftsSlider', {
            "static": false
          }]
        }],
        shiftsRefresher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: ['shiftsRefresher']
        }]
      };
      _TabShiftsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-tabshifts',
        template: _raw_loader_tabshifts_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabshifts_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _TabShiftsPage);
      /***/
    },

    /***/
    93435:
    /*!****************************************************!*\
      !*** ./src/app/tabs/tabshifts/tabshifts.page.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzaGlmdHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    78829:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabshifts/tabshifts.page.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col tabshifts\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar tabshifts\">\n                                <div class=\"sheriff-title-leftanimbar-inner tabshifts\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title tabshifts\">\n                                    <div class=\"sheriff-title tight-wrap tabshifts\">Shifts</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div (click)=\"replayLPN()\" class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring tabshifts\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle tabshifts hcl-progcirc tabshifts\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch tabshifts\">\n                                        <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch tabshifts\"></div>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star tabshifts\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo tabshifts\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button tabshifts\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n<!-- ION-CONTENT-MAIN -->\n<ion-content class=\"main-tabshifts-content-wrapper\" [scrollEvents]=\"false\">\n    <!-- PAGE REFRESHER -->\n    <ion-refresher #shiftsRefresher class=\"sheriff-refresher tabs shifts\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" disabled=\"{{preventRefreshPull}}\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <!-- TOP SECTION WRAPPER -->\n    <div class=\"sheriff-tabshifts-mainpage-section-wrapper top-section\">\n        <!-- PAGE HEADING -->\n        <div slot=\"fixed\" class=\"sheriff-tabcontent-mainheading-wrapper shifts\">\n            <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid shifts\">\n                <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 shifts\">\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 shifts\"></ion-col>\n                    <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 shifts\">\n                        <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-shifts.png\">\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 sheets\"></ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- SHIFT THIS WEEK TOP BAR -->\n        <div slot=\"fixed\" class=\"sheriff-thisweek-statsbar-main-wrapper\">\n            <ion-grid class=\"sheriff-grid thisweek-statsbar-grid\">\n                <ion-row class=\"sheriff-row thisweek-statsbar-row heading-row\">\n                    <ion-col class=\"sheriff-col thisweek-statsbar-col heading-col\">\n                        <div class=\"thisweek-statsbar-heading-wrapper\">\n                            this week\n                            <span *ngIf=\"showIncome&&sSRosterIncome>0\" class=\"thisweek-head-income-wrap\">\n                              <span class=\"thisweek-head-income-hyphen\">-</span><span class=\"thisweek-head-income-dollar\">$</span><span *ngIf=\"!hasXtraShifts\" class=\"thisweek-head-income-value\">{{sSRosterIncome}}</span><span *ngIf=\"hasXtraShifts\" class=\"thisweek-head-income-value\">{{sSRosterIncome+xtraIncomeTotal}}<span class=\"thisweek-head-income-rosplusxtra-breakdown wrapper\"><span class=\"thisweek-head-income-rosplusxtra-breakdown brack\">(</span><span class=\"thisweek-head-income-rosplusxtra-breakdown ros\">{{sSRosterIncome}}</span><span class=\"thisweek-head-income-rosplusxtra-breakdown plus\">+</span><span class=\"thisweek-head-income-rosplusxtra-breakdown xtra\">{{xtraIncomeTotal}}</span><span class=\"thisweek-head-income-rosplusxtra-breakdown brack\">)</span></span>\n                              </span>\n                            </span>\n                        </div>\n                        <div class=\"thisweek-statsbar-heading-divider\"></div>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"hasLoaded\" class=\"sheriff-row thisweek-statsbar-row data-row\">\n                    <ion-col size=\"3\" class=\"sheriff-col thisweek-statsbar-col data-col shifts\">\n                        <div class=\"thisweek-statsbar-data-div shifts\">\n                            <ion-icon class=\"tw-sb-ico shifts\" name=\"calendar-outline\"></ion-icon>\n                            <div *ngIf=\"hasLoaded\" class=\"tw-sb-vals-outter-wrapper values shifts\">\n                                <span class=\"tw-sb-completed shifts\">{{sSDoneShifts}}</span>\n                                <span class=\"tw-sb-valslash\">/</span>\n                                <span class=\"tw-sb-rostered shifts\">{{sSTotalItems}}</span>\n                            </div>\n                            <div *ngIf=\"hasLoaded\" class=\"tw-sb-vals-outter-wrapper perform shifts\">\n                                <span *ngIf=\"sSShiftPerformVal>0\" class=\"tw-sb-perform-span plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSShiftPerformVal<0\" class=\"tw-sb-perform-span minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSShiftPerformVal===0\" class=\"tw-sb-perform-span equals\"><ion-icon class=\"tt-pm-ico e\" name=\"reorder-two-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSShiftPerformVal!==0\" [ngClass]=\"{'perform-val-up':sSShiftPerformVal>0,'perform-val-down':sSShiftPerformVal<0}\" class=\"tw-sb-perform-span value shifts\">{{sSShiftPerformVal}}</span>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col thisweek-statsbar-col data-col hours\">\n                        <div class=\"thisweek-statsbar-data-div hours\">\n                            <ion-icon class=\"tw-sb-ico hours\" name=\"time-outline\"></ion-icon>\n                            <div class=\"tw-sb-vals-outter-wrapper values hours\">\n                                <span class=\"tw-sb-completed hours\">{{sSDoneHrs}}</span>\n                                <span class=\"tw-sb-valslash\">/</span>\n                                <span class=\"tw-sb-rostered hours\">{{sSRosterHrs}}</span>\n                            </div>\n                            <div class=\"tw-sb-vals-outter-wrapper perform hours\">\n                                <span *ngIf=\"sSHrsPerformVal>0\" class=\"tw-sb-perform-span plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSHrsPerformVal<0\" class=\"tw-sb-perform-span minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSHrsPerformVal===0\" class=\"tw-sb-perform-span equals\"><ion-icon class=\"tt-pm-ico e\" name=\"reorder-two-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSHrsPerformVal!==0\" [ngClass]=\"{'perform-val-up':sSHrsPerformVal>0,'perform-val-down':sSHrsPerformVal<0}\" class=\"tw-sb-perform-span value hours\">{{sSHrsPerformVal}}</span>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col class=\"sheriff-col thisweek-statsbar-col data-col income\">\n                        <div *ngIf=\"showIncome\" class=\"thisweek-statsbar-data-div income\">\n                            <ion-icon class=\"tw-sb-ico income\" name=\"logo-usd\"></ion-icon>\n                            <div class=\"tw-sb-vals-outter-wrapper values income\">\n                                <span class=\"tw-sb-completed income\">{{sSDoneIncome}}</span>\n                                <span class=\"tw-sb-valslash\">/</span>\n                                <span class=\"tw-sb-rostered income\">{{sSRosterIncome}}</span>\n                            </div>\n                            <div class=\"tw-sb-vals-outter-wrapper perform income\">\n                                <span *ngIf=\"sSIncomePerformVal>0\" class=\"tw-sb-perform-span plus\"><ion-icon class=\"tt-pm-ico p\" name=\"caret-up-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSIncomePerformVal<0\" class=\"tw-sb-perform-span minus\"><ion-icon class=\"tt-pm-ico m\" name=\"caret-down-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSIncomePerformVal===0\" class=\"tw-sb-perform-span equals\"><ion-icon class=\"tt-pm-ico e\" name=\"reorder-two-outline\"></ion-icon></span>\n                                <span *ngIf=\"sSIncomePerformVal!==0\" [ngClass]=\"{'perform-val-up':sSIncomePerformVal>0,'perform-val-down':sSIncomePerformVal<0}\" class=\"tw-sb-perform-span value hours\">{{sSIncomePerformVal}}</span>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- CURRENT SHIFTS SLIDER CONTENT -->\n        <div slot=\"fixed\" class=\"sheriff-currentshifts-slider-main-wrapper\">\n            <ion-grid class=\"sheriff-grid shifts-grid currentshifts-slider-grid\">\n                <ion-row class=\"sheriff-row shifts-row currentshifts-row main-row\">\n                    <ion-col size=\"12\" class=\"sheriff-col shifts-col currentshifts-col main-col\">\n                        <div *ngIf=\"sSCurrentIndex!==null&&sSInitComplete&&hasLoaded&&sSTotalItems!==0&&!sSlider.isBeginningSlide&&!doneSIsShowing\" class=\"currentshifts-div arrow-fade-div left-arrow-fade-div\">\n                            <div class=\"sheriff-slider-nav-arrow-wrapper back-arrow-outter-wrapper shiftsslider\">\n                                <div (click)=\"sSPrev()\" class=\"sheriff-slider-nav-arrow-wrapper back-arrow-inner-wrapper shiftsslider ion-activatable ripple-parent\">\n                                    <ion-icon class=\"sheriff-shiftsslider-nav-arrow-ico back\" name=\"caret-back\"></ion-icon>\n                                    <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- ------------------------------ THIS WEEK SHIFT SLIDE ------------------------------------ -->\n                        <!-- SHOW HIDE SHIFT CONTROLS >>> START -->\n                        <div *ngIf=\"sSInitComplete&&sSlider.slidesControls[sSCurrentIndex].show\" class=\"ss-control-hidecontrols-flipper-outter-wrapper\">\n                            <div (click)=\"sSControl(sSlider.slidesItems[sSCurrentIndex].Id,'show')\" class=\"ss-control-hidecontrols-flipper-inner-wrapper ion-activatable ripple-parent hide\">\n                                <div class=\"ss-control-showctrl-toggle-wrapper hide\">\n                                    <div class=\"ss-control-showhide-btn-wrapper\">\n                                        <ion-icon class=\"ss-control-showhide-btn-ico hide\" name=\"options\"></ion-icon>\n                                        <div class=\"ss-control-showhide-btn-txt hide\">hide</div>\n                                    </div>\n                                </div>\n                                <ion-ripple-effect></ion-ripple-effect>\n                            </div>\n                        </div>\n                        <!-- SHOW HIDE SHIFT CONTROLS <<< END -->\n                        <div [ngClass]=\"{'done-showing-hidden-slider':sSlider.slidesItems.length===0||doneSIsShowing}\" class=\"sslider-currentshifts-hiddenslides-wrapper\">\n                            <ion-slides #shiftsSlider (ionSlidesDidLoad)=\"sSDidLoad()\" (ionSlideWillChange)=\"sSWillChange()\" (ionSlideDidChange)=\"sSDidChange()\" (ionSlideReachStart)=\"sSIsStart()\" (ionSlideReachEnd)=\"sSIsEnd()\" id=\"currentshifts-slides\" class=\"sheriff-slides shifts-slides\"\n                                [options]=sSOptions mode=\"md\">\n                                <ion-slide *ngFor=\"let sItem of sSlider.slidesItems;let i=index\" class=\"shifts-slide slideindex-{{i}} sliderosterid-{{sItem.Id}}\">\n                                    <div class=\"sslider-currentshifts-outter-wrapper\">\n                                        <div class=\"sslider-currentshifts-inner-wrapper\">\n                                            <ion-grid class=\"sheriff-grid sheriff-roster-content-grid\">\n                                                <!-- SLIDER CONTROLS ROW >>> START -->\n                                                <ion-row *ngIf=\"sSInitComplete===true\" [ngClass]=\"{'ss-control-row-showing':sSCurrentIndex!==null&&sSlider.slidesControls[i].show}\" class=\"sheriff-row sslider-shift-control-row\">\n                                                    <ion-col [ngClass]=\"{'ss-control-showing-col1':sSlider.slidesControls[i].show}\" size=\"3\" class=\"sheriff-col sslider-shift-control-col alerts-col\">\n                                                        <div *ngIf=\"sSlider.slidesControls.length>0&&sSlider.slidesControls[i].show\" class=\"ss-control-row-container-wrap col1-wrap\">\n                                                            <div *ngIf=\"sSlider.slidesControls[i].inProg&&!sSlider.slidesControls[i].isPaused\" class=\"ss-control-text-data-wrapper\">x%</div>\n                                                            <div *ngIf=\"sSlider.slidesControls[i].inProg&&sSlider.slidesControls[i].isPaused\" class=\"ss-control-text-data-wrapper ispaused\">\n                                                                <div class=\"ss-control-text-data paused-wrapper  animate__infinite animate__flash animDur-2500\">\n                                                                    <ion-icon class=\"ss-controls-text-data paused-ico\" name=\"pause\"></ion-icon>\n                                                                    <div class=\"ss-controls-text-data paused-txt\">paused</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"6\" class=\"sheriff-col sslider-shift-control-col progress-col\">\n                                                        <div *ngIf=\"sSInitComplete&&!sSlider.slidesControls[sSCurrentIndex].show\" (click)=\"sSControl(sSlider.slidesItems[sSCurrentIndex].Id,'show')\" class=\"ss-control-showctrl-toggle-wrapper show\">\n                                                            <div class=\"ss-control-showhide-btn-wrapper show ion-activatable ripple-parent\">\n                                                                <ion-icon class=\"ss-control-showhide-btn-ico\" name=\"options\"></ion-icon>\n                                                                <div class=\"ss-control-showhide-btn-txt show\">show</div>\n                                                                <ion-ripple-effect></ion-ripple-effect>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"sSlider.slidesControls.length>0&&sSlider.slidesControls[i].show\" class=\"ss-control-row-container-wrap col2-wrap\">\n                                                            <div class=\"ss-control-progressbar-wrapper\">\n                                                                <ion-progress-bar *ngIf=\"sSlider.slidesControls[i].inProg\" type={{sSlider.slidesControls[i].progType}} class=\"sheriff-progress-bar sslider-shift-progress sslider-progress-id-{{sItem.Id}}\"></ion-progress-bar>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"3\" class=\"sheriff-col sslider-shift-control-col startstop-col start-col\">\n                                                        <div *ngIf=\"sSlider.slidesControls.length>0&&sSlider.slidesControls[i].show\" class=\"ss-control-row-container-wrap col3-wrap\">\n                                                            <div class=\"ss-control-btns-wrapper\">\n                                                                <ion-grid class=\"sheriff-grid ss-control-startstop-grid\">\n                                                                    <ion-row class=\"sheriff-row ss-control-startstop-row\">\n                                                                        <ion-col *ngIf=\"sSlider.slidesControls[i].inProg\" size=\"6\" class=\"sheriff-col ss-control-startstop-col\">\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'start')\" *ngIf=\"sSlider.slidesControls[i].inProg===false||sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn start-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico start-ico\" name=\"play\"></ion-icon>\n                                                                            </ion-button>\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'stop')\" *ngIf=\"sSlider.slidesControls[i].inProg===true&&!sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn stop-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico stop-ico\" name=\"stop\"></ion-icon>\n                                                                            </ion-button>\n                                                                        </ion-col>\n\n                                                                        <ion-col size=\"12\" *ngIf=\"!sSlider.slidesControls[i].inProg\" class=\"sheriff-col ss-control-startstop-col\">\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'start')\" *ngIf=\"sSlider.slidesControls[i].inProg===false||sSlider.slidesControls[i].isPaused===true\" class=\"sheriff-button ss-control-btn start-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico start-ico\" name=\"play\"></ion-icon>\n                                                                            </ion-button>\n                                                                        </ion-col>\n\n                                                                        <ion-col size=\"6\" class=\"sheriff-col ss-control-startstop-col\">\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'pause')\" *ngIf=\"sSlider.slidesControls[i].inProg===true&&!sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn pause-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico pause-ico\" name=\"pause\"></ion-icon>\n                                                                            </ion-button>\n                                                                            <ion-button (click)=\"sSControl(sItem.Id,'stop')\" *ngIf=\"sSlider.slidesControls[i].inProg===true&&sSlider.slidesControls[i].isPaused\" class=\"sheriff-button ss-control-btn stop-btn\">\n                                                                                <ion-icon class=\"sheriff-ico ss-control-ico stop-ico\" name=\"stop\"></ion-icon>\n                                                                            </ion-button>\n                                                                        </ion-col>\n                                                                    </ion-row>\n                                                                </ion-grid>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <!-- SLIDER CONTROLS ROW <<< END -->\n                                                <ion-row class=\"sheriff-row sheriff-roster-content-row1\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col sslider-shift-content-col-workico\">\n                                                        <div class=\"sslider-shift-item-alert-indic-wrapper  animate__zoomIn animDur-250\">\n                                                            <div class=\"sslider-shift-alerts-indic-inner-wrapper rid-{{sItem.Id}}\">\n                                                                <ion-icon *ngIf=\"(alertMethods.phone===null||alertEvents.shift===null)||(alertMethods.phone===false||alertEvents.shift===false)\" class=\"sslider-shift-alerts-indic notification-ico-off\" name=\"notifications-off-outline\"></ion-icon>\n                                                                <ion-icon *ngIf=\"alertMethods.phone===true&&alertEvents.shift===true\" class=\"sslider-shift-alerts-indic notification-ico-on\" name=\"notifications\"></ion-icon>\n                                                                <ion-icon *ngIf=\"(alertMethods.calendar===null||alertEvents.shift===null)||(alertMethods.calendar===false||alertEvents.shift===false)\" class=\"sslider-shift-alerts-indic calendar-ico-off\" name=\"calendar-outline\"></ion-icon>\n                                                                <ion-icon *ngIf=\"alertMethods.calendar===true&&alertEvents.shift===true\" class=\"sslider-shift-alerts-indic calendar-ico-on\" name=\"calendar\"></ion-icon>\n                                                                <ion-icon *ngIf=\"(alertMethods.email===null||alertEvents.shift===null)||(alertMethods.email===false||alertEvents.shift===false)\" class=\"sslider-shift-alerts-indic email-ico-off\" name=\"mail-outline\"></ion-icon>\n                                                                <ion-icon *ngIf=\"alertMethods.email===true&&alertEvents.shift===true\" class=\"sslider-shift-alerts-indic email-ico-on\" name=\"mail\"></ion-icon>\n                                                            </div>\n                                                        </div>\n                                                        <div (click)=\"stopShowColleague()\" class=\"ss-showing-colleague-wrapper\" *ngIf=\"showingColleague\">\n                                                            <img class=\"ss-showing-colleague-pic\" src=\"{{viewColleague.Photo}}\">\n                                                            <div class=\"ss-showing-colleague-fname\">{{viewColleague.FirstName}}</div>\n                                                            <div class=\"ss-showing-colleague-lname\">{{viewColleague.LastName}}</div>\n                                                        </div>\n                                                        <div *ngIf=\"!showingColleague\" class=\"sslider-shift-item-workplacecode-wrapper\">\n                                                            <div *ngIf=\"workAvatar!==null\" class=\"sslider-shift-workplaceico gotavatar\" [ngStyle]=\"{'background-image':'url('+workAvatar+')'}\"></div>\n                                                            <div *ngIf=\"workAvatar===null\" class=\"sslider-shift-workplaceico backupavatar\" [ngStyle]=\"{'background-color':workColor}\">\n                                                                <div class=\"shift-workplace-buavatar-singleinitial-label\">{{sItem.nCompanyName.charAt(0)}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"!showingColleague\" class=\"sslider-shift-item work-placearea-wrapper\">\n                                                            <div class=\"sslider-shift-item work-wrapper place\">\n                                                                <ion-icon class=\"sslider-shift-worklabel place\" name=\"business\"></ion-icon>\n                                                                <div class=\"sslider-shift-item-workplacename\">{{sItem.nCompanyName.slice(0,3)}}</div>\n                                                            </div>\n                                                            <div class=\"sslider-shift-item work-wrapper area\">\n                                                                <ion-icon class=\"sslider-shift-worklabel area\" name=\"locate\"></ion-icon>\n                                                                <div class=\"sslider-shift-item-workarea\">{{sItem.nOpUnit.slice(0,3)}}</div>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"7\" class=\"sheriff-col sheriff-roster-content-col-shiftdatetime\">\n                                                        <div class=\"sheriff-roster-datetimeinfowrapper\">\n                                                            <div class=\"sslider-shift-date\">{{sItem.nDate}}</div>\n                                                            <div class=\"sslider-shift-startendtime\">\n                                                                <ion-icon class=\"sslider-shift-setime-ico\" name=\"time\"></ion-icon>\n                                                                {{sItem.nStart}}\n                                                                <ion-icon class=\"sslider-shift-fromto-ico\" name=\"chevron-forward\"></ion-icon>\n                                                                {{sItem.nEnd}}\n                                                            </div>\n                                                            <div class=\"sslider-shift-ttandincome\">\n                                                                <ion-icon class=\"sslider-shift-tt-ico\" name=\"hourglass\"></ion-icon>\n                                                                <span *ngIf=\"sItem.nTotalTime.hours>0\" class=\"ss-ttdur-hv\">{{sItem.nTotalTime.hours}}<span class=\"ss-ttdur-suffix hours\">h</span></span>\n                                                                <span *ngIf=\"sItem.nTotalTime.minutes>0\" class=\"ss-ttdur-mv\">{{sItem.nTotalTime.minutes}}<span class=\"ss-ttdur-suffix mins\">m</span></span>\n                                                                <span *ngIf=\"showIncome\">\n                                                                <span class=\"sslider-shift-vertsep\">|</span>\n                                                                <ion-icon class=\"sslider-shift-income-ico\" name=\"logo-usd\"></ion-icon><span class=\"sslider-shift-dollar-small\">$</span>{{sItem.nIncome}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <!-- IF MULTI PEER VIEW FALSE -->\n                                                        <div *ngIf=\"!apiPeerView\" class=\"sslider-colleagues-outter-wrapper\">\n                                                            <div *ngIf=\"this.sSColleagueDayIndex===i\" class=\"sslider-colleagues-notpeerview-isshiftday-wrapper\">\n                                                                <div class=\"sslider-colleagues-inner-wrapper same\">\n                                                                    <ion-icon class=\"sslider-colleagues-ppl-icon\" name=\"people\"></ion-icon><span class=\"sslider-colleagues-txt with-txt\">with:</span>\n                                                                    <span class=\"sslider-colleagues-grouptotalno same\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSColleagues.sameArea.length>0}\" class=\"sslider-colleagues-groupnoval same\">{{sSColleagues.sameArea.length}}</span>)</span>\n                                                                    <span *ngFor=\"let psa of sSColleagues.sameArea;let sapi = index\" class=\"sslider-colleagues-area-person same\" (click)=\"showColleague(psa)\">\n                                                                    <span *ngIf=\"sapi===sSColleagues.sameArea.length-1&&sSColleagues.sameArea.length>1\" class=\"ss-collcomma and\">&</span>{{psa.FirstName}}\n                                                                    <span *ngIf=\"sapi!==sSColleagues.sameArea.length-1&&(sapi!==sSColleagues.sameArea.length-2&&sSColleagues.sameArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                    </span>\n                                                                    <span *ngIf=\"sSColleagues.sameArea.length===0&&sSColleagues.otherArea.length!==0\">-</span>\n                                                                    <span *ngIf=\"sSColleagues.sameArea.length===0&&sSColleagues.otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                                </div>\n                                                                <div class=\"sslider-colleagues-inner-wrapper other\">\n                                                                    <span class=\"sslider-colleagues-txt and-txt\">and:</span><span class=\"sslider-colleagues-grouptotalno other\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSColleagues.otherArea.length>0}\" class=\"sslider-colleagues-groupnoval other\">{{sSColleagues.otherArea.length}}</span>)</span>\n                                                                    <span *ngFor=\"let poa of sSColleagues.otherArea;let oapi = index\" class=\"sslider-colleagues-area-person other\" (click)=\"showColleague(poa)\">\n                                                                    <span *ngIf=\"oapi===sSColleagues.otherArea.length-1&&sSColleagues.otherArea.length>1\" class=\"ss-collcomma and\">&</span>{{poa.FirstName}}\n                                                                    <span *ngIf=\"oapi!==sSColleagues.otherArea.length-1&&(oapi!==sSColleagues.otherArea.length-2&&sSColleagues.otherArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                    </span>\n                                                                    <span *ngIf=\"sSColleagues.sameArea.length!==0&&sSColleagues.otherArea.length===0\">-</span>\n                                                                    <span *ngIf=\"sSColleagues.otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                                </div>\n                                                            </div>\n                                                            <div *ngIf=\"this.sSColleagueDayIndex!==i\" class=\"sslider-colleagues-notpeerview-notshiftday-wrapper\">\n                                                                <div class=\"sslider-colleagues-inner-wrapper same\">\n                                                                    <ion-icon class=\"sslider-colleagues-ppl-icon\" name=\"people\"></ion-icon><span class=\"sslider-colleagues-txt with-txt\">with:</span><span class=\"apirestrictedpinfo\">NK</span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <!-- IF MULTI PEER VIEW TRUE -->\n                                                        <div *ngIf=\"sSMultiColleagues.length>0&&apiPeerView\" class=\"sslider-colleagues-outter-wrapper\">\n                                                            <div class=\"sslider-colleagues-inner-wrapper same\">\n                                                                <ion-icon class=\"sslider-colleagues-ppl-icon\" name=\"people\"></ion-icon><span class=\"sslider-colleagues-txt with-txt\">with:</span>\n                                                                <span class=\"sslider-colleagues-grouptotalno same\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSMultiColleagues[i].sameArea.length>0}\" class=\"sslider-colleagues-groupnoval same\">{{sSMultiColleagues[i].sameArea.length}}</span>)</span>\n                                                                <span *ngFor=\"let psa of sSMultiColleagues[i].sameArea;let sapi = index\" class=\"sslider-colleagues-area-person same\" (click)=\"showColleague(psa)\">\n                                                                  <span *ngIf=\"sapi===sSMultiColleagues[i].sameArea.length-1&&sSMultiColleagues[i].sameArea.length>1\" class=\"ss-collcomma and\">&</span>{{psa.FirstName}}\n                                                                <span *ngIf=\"sapi!==sSMultiColleagues[i].sameArea.length-1&&(sapi!==sSMultiColleagues[i].sameArea.length-2&&sSMultiColleagues[i].sameArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                </span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].sameArea.length===0&&sSMultiColleagues[i].otherArea.length!==0\">-</span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].sameArea.length===0&&sSMultiColleagues[i].otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                            </div>\n                                                            <div class=\"sslider-colleagues-inner-wrapper other\">\n                                                                <span class=\"sslider-colleagues-txt and-txt\">and:</span><span class=\"sslider-colleagues-grouptotalno other\">(<span [ngClass]=\"{'sslider-group-count-has-members':sSMultiColleagues[i].otherArea.length>0}\" class=\"sslider-colleagues-groupnoval other\">{{sSMultiColleagues[i].otherArea.length}}</span>)</span>\n                                                                <span *ngFor=\"let poa of sSMultiColleagues[i].otherArea;let oapi = index\" class=\"sslider-colleagues-area-person other\" (click)=\"showColleague(poa)\">\n                                                                <span *ngIf=\"oapi===sSMultiColleagues[i].otherArea.length-1&&sSMultiColleagues[i].otherArea.length>1\" class=\"ss-collcomma and\">&</span>{{poa.FirstName}}\n                                                                <span *ngIf=\"oapi!==sSMultiColleagues[i].otherArea.length-1&&(oapi!==sSMultiColleagues[i].otherArea.length-2&&sSMultiColleagues[i].otherArea.length>1)\" class=\"ss-collcomma\">,</span>\n                                                                </span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].sameArea.length!==0&&sSMultiColleagues[i].otherArea.length===0\">-</span>\n                                                                <span *ngIf=\"sSMultiColleagues[i].otherArea.length===0\" class=\"sslider-colleagues-tba\">TBA</span>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"sItem.ConfirmStatus>0\" id=\"comment-{{sItem.Id}}\" class=\"roster-shift-comment-wrapper\">\n                                                            <div *ngIf=\"sItem.ConfirmStatus===1\" class=\"roster-shift-comment-btn-wrapper\">\n                                                                <ion-button id=\"commentbtn-{{sItem.Id}}\" class=\"small sheriff-roster-comment-btn\">\n                                                                    <ion-icon name=\"chatbox\" id=\"commentico-{{sItem.Id}}\" class=\"rosterdeetbuttonico rostercommentbuttonico\"></ion-icon>\n                                                                    <div id=\"commenttxt-{{sItem.Id}}\" class=\"readcommentbtntext\">Confirm</div>\n                                                                </ion-button>\n                                                            </div>\n                                                            <div *ngIf=\"sItem.ConfirmStatus>1\" class=\"roster-shift-comment-wrapper\">\n                                                                <div *ngIf=\"sItem.ConfirmStatus===2\" class=\"roster-confirm-status-txt done\">Confirmed</div>\n                                                                <div *ngIf=\"sItem.ConfirmStatus===3\" class=\"roster-confirm-status-txt declined\">Declined</div>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col size=\"3\" class=\"sheriff-col sheriff-roster-content-col-deetsnactions\">\n                                                        <ion-grid class=\"sheriff-grid ss-stats-grid\">\n                                                            <ion-row class=\"sheriff-row ss-stats-row creator\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <img src=\"{{sItem.nCreatorAva}}\" class=\"ss-stats-ico creator\">\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt creator\">{{sItem.sFName}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row rosterid\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <ion-icon class=\"ss-stats-ico rosterid\" name=\"pricetag-outline\"></ion-icon>\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt rosterid\">#{{sItem.Id}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row created\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <ion-icon class=\"ss-stats-ico created\" name=\"create-outline\"></ion-icon>\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt created\">{{sItem.sCreated}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row modified\">\n                                                                <ion-col size=\"2\" class=\"sheriff-col\">\n                                                                    <ion-icon class=\"ss-stats-ico modified\" name=\"hammer-outline\"></ion-icon>\n                                                                </ion-col>\n                                                                <ion-col size=\"10\" class=\"sheriff-col\">\n                                                                    <div class=\"ss-stats-txt modified\">{{sItem.sModified}}</div>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row class=\"sheriff-row ss-stats-row swapdecline\">\n                                                                <ion-col size=\"6\" class=\"sheriff-col swap\">\n                                                                    <ion-button id=\"swapbtn-{{sItem.Id}}\" class=\"ss-swapdecline-btn swap\">\n                                                                        <ion-icon class=\"ss-swapdecline-btn-ico swap\" name=\"swap-horizontal-outline\"></ion-icon>\n                                                                    </ion-button>\n                                                                </ion-col>\n                                                                <ion-col size=\"6\" class=\"sheriff-col decline\">\n                                                                    <ion-button id=\"swapbtn-{{sItem.Id}}\" class=\"ss-swapdecline-btn decline\">\n                                                                        <ion-icon class=\"ss-swapdecline-btn-ico decline\" name=\"hand-right-outline\"></ion-icon>\n                                                                    </ion-button>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                        </ion-grid>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </div>\n                                    </div>\n                                </ion-slide>\n                            </ion-slides>\n                        </div>\n                        <!-- ------------------------------ END WEEK SHIFT SLIDES ------------------------------------ -->\n                        <div *ngIf=\"hasLoaded&&sSTotalItems===0&&!doneSIsShowing\" class=\"currentshifts-div nofutureitems-outter-wrapper\">\n                            <div class=\"sheriff-shifts-noshifts-background-wrapper\"></div>\n                            <div class=\"currentshifts-div nofutureitems-inner-wrapper\">\n                                <div class=\"noshifts-bg-text\">\n                                    <span *ngIf=\"!isRefreshing\" class=\"nstxt\">No Shifts</span>\n                                    <div *ngIf=\"isRefreshing\" class=\"loadval-spin-wrap\">\n                                        <ion-spinner duration=\"250\" name=\"dots\" class=\"sheriff-small-val-loading\"></ion-spinner>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- START DISPLAY SINGLE DONE SHIFT ITEM -->\n                        <div *ngIf=\"doneSIsShowing\" class=\"display-doneshift-outter-wrapper\">\n                            <div class=\"display-doneshift-inner-wrapper\">\n                                <ion-grid class=\"sheriff-grid sheriff-roster-content-grid doneshift-{{doneS.Id}}\">\n                                    <ion-row class=\"sheriff-row sheriff-roster-content-row1\">\n                                        <ion-col size=\"2\" class=\"sheriff-col sheriff-roster-content-col-workico\">\n                                            <div class=\"sheriff-roster-item-workplace-wrapper  animate__zoomIn animDur-250\"></div>\n                                            <div class=\"sheriff-roster-item-workplacecode-wrapper\">\n                                                <div *ngIf=\"workAvatar!==null\" class=\"sheriff-roster-workplaceico gotavatar\" [ngStyle]=\"{'background-image':'url('+workAvatar+')'}\"></div>\n                                                <div *ngIf=\"workAvatar===null\" class=\"sheriff-roster-workplaceico backupavatar\" [ngStyle]=\"{'background-color':workColor}\">\n                                                    <div class=\"shift-workplace-buavatar-singleinitial-label\">{{doneS.nCompanyName.charAt(0)}}</div>\n                                                </div>\n                                            </div>\n                                            <div class=\"sheriff-roster-item work-placearea-wrapper\">\n                                                <div class=\"sheriff-roster-item work-wrapper place\">\n                                                    <ion-icon class=\"sheriff-roster-worklabel place\" name=\"business\"></ion-icon>\n                                                    <div class=\"sheriff-roster-item-workplacename\">{{doneS.nCompanyName.slice(0,3)}}</div>\n                                                </div>\n                                                <div class=\"sheriff-roster-item work-wrapper area\">\n                                                    <ion-icon class=\"sheriff-roster-worklabel area\" name=\"locate\"></ion-icon>\n                                                    <div class=\"sheriff-roster-item-workarea\">{{doneS.nOpUnit.slice(0,3)}}</div>\n                                                </div>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col size=\"7\" class=\"sheriff-col sheriff-roster-content-col-shiftdatetime\">\n                                            <div class=\"sheriff-roster-datetimeinfowrapper\">\n                                                <div class=\"doneshift-val date\">{{doneS.nDate}}</div>\n                                                <div class=\"doneshift-wrapper times\">\n                                                    <div *ngIf=\"doneSTSData\" class=\"doneshift times rostered\">\n                                                        <ion-icon class=\"doneshift-ico rostered times\" name=\"time-outline\"></ion-icon><span class=\"doneshift times-val start rostered\" [ngClass]=\"{'doneshiftval-up':doneSTSData&&doneS.tsStart!==doneS.nStart&&doneSTSData.StartTime<doneS.StartTime,'doneshiftval-down':doneSTSData&&doneS.tsStart!==doneS.nStart&&doneSTSData.StartTime>doneS.StartTime,'doneshiftval-same':doneS.tsStart===doneS.nStart}\">{{doneS.rosStart}}</span>\n                                                        <ion-icon class=\"doneshift-ico rostered fromto rostered\" name=\"chevron-forward\"></ion-icon><span class=\"doneshift times-val end rostered\" [ngClass]=\"{'doneshiftval-up':doneSTSData&&doneS.tsEnd!==doneS.nEnd&&doneSTSData.EndTime>doneS.EndTime,'doneshiftval-down':doneSTSData&&doneS.tsEnd!==doneS.nEnd&&doneSTSData.EndTime<doneS.EndTime,'doneshiftval-same':doneSTSData&&doneS.tsEnd===doneS.nEnd}\">{{doneS.rosEnd}}</span>\n                                                        <span *ngIf=\"doneSTSData\" [ngClass]=\"{'doneshiftdur-up':(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes>(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes,'doneshiftdur-down':(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes<(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes,'doneshiftdur-same':(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes===(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes}\">\n                                                          <ion-icon *ngIf=\"doneS.tsTTDiff.hours===0&&doneS.tsTTDiff.minutes===0\" class=\"doneshift rostered hm-val same-ico\" name=\"checkmark-done-outline\"></ion-icon>\n                                                          <span class=\"doneshift rostered hm-val hours\" *ngIf=\"doneS.tsTTDiff.hours!==0\">{{doneS.tsTTDiff.hours}}<span class=\"doneshift-rostered-suffix hours\">:</span></span>\n                                                        <span class=\"doneshift rostered hm-val minutes\" *ngIf=\"doneS.tsTTDiff.minutes!==0\">{{doneS.tsTTDiff.minutes}}<span *ngIf=\"doneS.tsTTDiff.minutes!==0&&doneS.tsTTDiff.hours===0\" class=\"doneshift-ttdiff-mins-suffix\">m</span></span>\n                                                        <span class=\"doneshift-actual-dur-income-vertsep\">|</span><span class=\"doneshift-incomeperf-dollar-small\">$</span>\n                                                        <span class=\"doneshift-actual-income-updown-val\"><span *ngIf=\"doneS.tsIncomePerf<0\" class=\"doneshift-actual-income-updown-val-bracks\"><span>(</span></span>{{doneS.tsIncomePerf}}<span *ngIf=\"doneS.tsIncomePerf<0\"\n                                                            class=\"doneshift-actual-income-updown-val-bracks\"><span>)</span></span>\n                                                        </span>\n                                                        </span>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TIMES - STARTS -->\n                                                    <div *ngIf=\"!doneSTSData\" class=\"doneshift times rostered tsmissing\">\n                                                        <ion-icon class=\"doneshift-ico rostered times tsmissing\" name=\"time-outline\"></ion-icon>\n                                                        <span class=\"doneshift times-val start rostered tsmissing\">{{doneS.nStart}}</span>\n                                                        <ion-icon class=\"doneshift-ico rostered fromto rostered tsmissing\" name=\"chevron-forward\"></ion-icon>\n                                                        <span class=\"doneshift times-val end rostered tsmissing\">{{doneS.nEnd}}</span>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TIMES - ENDS -->\n                                                    <div *ngIf=\"doneSTSData\" class=\"doneshift actual\">\n                                                        <div class=\"doneshift-actual times-wrapper\">\n                                                            <ion-icon class=\"doneshift-ico actual times\" name=\"time\"></ion-icon>{{doneS.tsStart}}\n                                                            <ion-icon class=\"doneshift-ico actual fromto\" name=\"chevron-forward\"></ion-icon>{{doneS.tsEnd}}\n                                                        </div>\n                                                        <div class=\"doneshift-actual duration-income\">\n                                                            <ion-icon class=\"doneshift-ico actual hourglass\" name=\"hourglass\"></ion-icon>\n                                                            <span *ngIf=\"doneS.tsTotalTime.hours>0\">{{doneS.tsTotalTime.hours}}<span class=\"doneshift-actual-suffix hours\">h</span></span>\n                                                            <span *ngIf=\"doneS.tsTotalTime.minutes>0\">{{doneS.tsTotalTime.minutes}}<span class=\"doneshift-actual-suffix minutes\">m</span></span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger\">|</span>\n                                                            <ion-icon class=\"sslider-shift-income-ico actual\" name=\"logo-usd\"></ion-icon><span class=\"doneshift-actual-income-updown-val\"><span class=\"doneshift-incomeperf-dollar-s\">$</span>{{doneS.tsIncome}}</span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger\">|</span>\n                                                            <div class=\"doneshift-performance-arrow-wrapper\">\n                                                                <ion-icon *ngIf=\"doneSTSData&&(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes===(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes\" class=\"doneshift-ico rostered equals\" name=\"reorder-two\"></ion-icon>\n                                                                <ion-icon *ngIf=\"doneSTSData&&(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes>(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes\" class=\"doneshift-ico rostered equalsup\" style=\"color:var(--ion-color-success-68);vertical-align:text-top\" name=\"caret-up\"></ion-icon>\n                                                                <ion-icon *ngIf=\"doneSTSData&&(doneS.tsTotalTime.hours*60)+doneS.tsTotalTime.minutes<(doneS.nTotalTime.hours*60)+doneS.nTotalTime.minutes\" class=\"doneshift-ico rostered equalsdown\" style=\"color:var(--ion-color-danger-68);vertical-align:text-bottom\" name=\"caret-down\"></ion-icon>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TTINCOME - STARTS -->\n                                                    <div *ngIf=\"!doneSTSData\" class=\"doneshift actual tsmissing\">\n                                                        <div class=\"doneshift-actual times-wrapper tsmissing\">\n                                                            <ion-icon class=\"doneshift-ico actual times tsmissing\" name=\"time\"></ion-icon><span class=\"doneshift missingts-actual-val\">Unknown</span>\n                                                            <ion-icon class=\"doneshift-ico actual fromto tsmissing\" name=\"chevron-forward\"></ion-icon><span class=\"doneshift missingts-actual-val\">Unknown</span>\n                                                        </div>\n                                                        <div class=\"doneshift-actual duration-income tsmissing\">\n                                                            <ion-icon class=\"doneshift-ico actual hourglass tsmissing\" name=\"hourglass\"></ion-icon>\n                                                            <span class=\"done-shift tt-val hours tsmissing\" *ngIf=\"doneS.nTotalTime.hours>0\">{{doneS.nTotalTime.hours}}<span class=\"doneshift-actual-suffix hours\">h</span></span>\n                                                            <span class=\"done-shift tt-val minutes tsmissing\" *ngIf=\"doneS.nTotalTime.minutes>0\">{{doneS.nTotalTime.minutes}}<span class=\"doneshift-actual-suffix minutes\">m</span></span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger tsmissing\">|</span>\n                                                            <ion-icon class=\"doneshift-ico actual dollar tsmissing\" name=\"logo-usd\"></ion-icon><span class=\"doneshift-actual-income-updown-val\"><span class=\"doneshift-incomeperf-dollar-s\">$</span>{{doneS.nIncome}}</span>\n                                                            <span class=\"doneshift-actual-dur-income-vertsep bigger\">|</span>\n                                                            <div class=\"doneshift-performance-arrow-wrapper\">\n                                                                <ion-icon class=\"doneshift-ico rostered tsmissing qmark\" style=\"color:var(--ion-color-danger-68);vertical-align:middle\" name=\"warning\"></ion-icon>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- MISSING TIMESHEET TTINCOME - ENDS -->\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"doneS.nCommCount>0&&doneSShowComments\" class=\"doneshift-comment-outter-wrapper content-wrapper\">\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nConfirmComment\">\n                                                    <ion-icon class=\"doneshift-comment-ico confirmcomment-ico\" name=\"checkmark-done-circle\"></ion-icon>\n                                                    <span class=\"doneshift comment-type-label confirmcomment-label\">confirm:</span> {{doneS.nConfirmComment}}\n                                                </div>\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nComment\">\n                                                    <ion-icon class=\"doneshift-comment-ico comment-ico\" name=\"chatbubbles\"></ion-icon>\n                                                    <span class=\"doneshift comment-type-label comment-label\">comment:</span> {{doneS.nComment}}\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"doneS.nWarnCount>0&&doneSShowWarnings\" class=\"doneshift-warning-outter-wrapper content-wrapper\">\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nWarning\">\n                                                    <ion-icon class=\"doneshift-warning-ico warning-ico\" name=\"alert-circle\"></ion-icon>\n                                                    <span class=\"doneshift warning-type-label warning-label\">warning:</span> {{doneS.nWarning}}\n                                                </div>\n                                                <div class=\"doneshift-type-wrapper\" *ngIf=\"doneS.nWarningOR\">\n                                                    <ion-icon class=\"doneshift-warning-ico warningoverride-ico\" name=\"skull\"></ion-icon>\n                                                    <span class=\"doneshift warning-type-label warning-label\">override:</span> {{doneS.nWarningOR}}\n                                                </div>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col class=\"sheriff-col sheriff-roster-content-col-deetsnactions\">\n                                            <ion-grid class=\"sheriff-grid ss-stats-grid\">\n                                                <ion-row class=\"sheriff-row ss-stats-row creator\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col\">\n                                                        <img src=\"{{doneS.nCreatorAva}}\" class=\"ss-stats-ico creator\">\n                                                    </ion-col>\n                                                    <ion-col size=\"10\" class=\"sheriff-col\">\n                                                        <div class=\"ss-stats-txt creator\">{{doneS.sFName}}</div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-stats-row created\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col\">\n                                                        <ion-icon class=\"ss-stats-ico created\" name=\"create-outline\"></ion-icon>\n                                                    </ion-col>\n                                                    <ion-col size=\"10\" class=\"sheriff-col\">\n                                                        <div class=\"ss-stats-txt created\">{{doneS.sCreated}}</div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-stats-row modified\">\n                                                    <ion-col size=\"2\" class=\"sheriff-col\">\n                                                        <ion-icon class=\"ss-stats-ico modified\" name=\"hammer-outline\"></ion-icon>\n                                                    </ion-col>\n                                                    <ion-col size=\"10\" class=\"sheriff-col\">\n                                                        <div class=\"ss-stats-txt modified\">{{doneS.sModified}}</div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-comments-row\">\n                                                    <ion-col size=\"12\" class=\"sheriff-col comments-col\">\n                                                        <div *ngIf=\"doneS.nCommCount>0\" class=\"doneshift-comment-outter-wrapper showhide-wrapper\">\n                                                            <div (click)=\"doneShiftShowComments()\" class=\"doneshift-comment-heading-topper ion-activatable ripple-parent\">\n                                                                <ion-icon class=\"doneshift comment-heading-ico\" name=\"chatbox\"></ion-icon>\n                                                                <div class=\"doneshift-comment-heading-label\">Comments</div>\n                                                                <div class=\"doneshift-comment-heading-count-val\">{{doneS.nCommCount}}</div>\n                                                                <ion-ripple-effect></ion-ripple-effect>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-row ss-warnings-row\">\n                                                    <ion-col size=\"12\" class=\"sheriff-col warnings-col\">\n                                                        <div *ngIf=\"doneS.nWarnCount>0\" class=\"doneshift-warning-outter-wrapper showhide-wrapper\">\n                                                            <div (click)=\"doneShiftShowWarnings()\" class=\"doneshift-warning-heading-topper ion-activatable ripple-parent\">\n                                                                <ion-icon class=\"doneshift warning-heading-ico\" name=\"warning\"></ion-icon>\n                                                                <div class=\"doneshift-warning-heading-label\">Warnings</div>\n                                                                <div class=\"doneshift-warning-heading-count-val\">{{doneS.nWarnCount}}</div>\n                                                                <ion-ripple-effect></ion-ripple-effect>\n                                                            </div>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                            <div *ngIf=\"doneS.MatchedByTimesheet===0\" class=\"done-shift-missing-ribbon\"><span>MISSING</span></div>\n                            <div *ngIf=\"doneS.MatchedByTimesheet>0\" class=\"done-shift-completed-ribbon\"><span>COMPLETED</span></div>\n                            <div class=\"display-doneshift-box-shadow\"></div>\n                        </div>\n                        <!-- END DISPLAY SINGLE DONE SHIFT ITEM -->\n                        <div *ngIf=\"hasLoaded&&sSTotalItems!==0&&!sSlider.isEndSlide&&!doneSIsShowing\" [ngClass]=\"{'ss-nav-arrow-to-bottom':sSInitComplete===true&&sSCurrentIndex!==null&&sSlider.slidesControls[sSCurrentIndex].show}\" class=\"currentshifts-div arrow-fade-div right-arrow-fade-div\">\n                            <div class=\"sheriff-slider-nav-arrow-wrapper forward-arrow-outter-wrapper shiftsslider\">\n                                <div (click)=\"sSNext()\" class=\"sheriff-slider-nav-arrow-wrapper forward-arrow-inner-wrapper shiftsslider ion-activatable ripple-parent\">\n                                    <ion-icon class=\"sheriff-shiftsslider-nav-arrow-ico forward\" name=\"caret-forward\"></ion-icon>\n                                    <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- PENDING SHIFTS SLIDER PAGINATION -->\n        <div *ngIf=\"hasLoaded&&myWeekPagReady\" class=\"shiftslider-pagination-grid-outter-wrapper\">\n            <ion-grid class=\"sheriff-grid shiftslider-pagination-grid\">\n                <ion-row class=\"sheriff-row shiftslider-pagination-row\">\n                    <ion-col size=\"7\" class=\"sheriff-col shiftslider-pagination-col bullets-col\">\n                        <ion-grid class=\"sheriff-grid daybullets-grid\">\n                            <ion-row *ngIf=\"!hasLoaded\" class=\"sheriff-row daybullets-row notloaded-row\">\n                                <ion-col size=\"12\" class=\"sheriff-col day-bullets-col not-loaded-col\">\n                                    <div class=\"value-is-loading-wrapper\">\n                                        <ion-spinner duration=\"250\" class=\"sheriff-spinner v-is-loading-spinner\"></ion-spinner>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class=\"sheriff-row daybullets-row\">\n                                <ion-col *ngFor=\"let sSDay of sSWeek;let i = index\" [ngClass]=\"{'gotshift-col':sSDay.isshift===true,'noshift-col':sSDay.isshift===false}\" class=\"sheriff-col daybullets-col {{sSDay.sn}}-col animDel-{{i}}00 animDur-250  animate__fadeIn animate__fast\">\n                                    <div (click)=\"sSGotoShift(sSDay.isshift,sSDay.si)\" class=\"daybullets-touch-wrapper {{sSDay.sn}} ion-activatable ripple-parent\">\n                                        <div [ngClass]=\"{'ss-label-active':sSDay.si===sSCurrentIndex&&!doneSIsShowing,'ss-label-istoday':sSDay.tonow==='T'&&sSDay.si!==sSCurrentIndex,'ss-label-nots':sSDay.tonow==='B'&&sSDay.nots&&sSDay.si!==sSCurrentIndex}\" class=\"dayb-div wdayname-label-txt {{sSDay.sn}}\">{{sSDay.ln.substring(0,3)}}</div>\n                                        <div [ngClass]=\"{'ss-bullet-active':sSDay.si===sSCurrentIndex&&!doneSIsShowing,'ss-bullet-notactive':sSDay.si!==sSCurrentIndex}\" class=\"dayb-div daycal-wrapper {{sSDay.sn}} is{{sSDay.tonow}}\">\n                                            <div *ngIf=\"sSDay.si!==sSCurrentIndex||(sSDay.si===sSCurrentIndex&&doneSIsShowing)\" class=\"dayb-div wdatetxt {{sSDay.sn}}\">\n                                                <span *ngIf=\"!(sSDay.tonow==='B'&&sSDay.isshift)&&!isRefreshing\" [ngClass]=\"{'ss-label-active':!doneSIsShowing&&sSDay.si===sSCurrentIndex,'ss-label-istodaydate':sSDay.tonow==='T'&&sSDay.si!==sSCurrentIndex}\" class=\"dayb-span wdatetxt\">{{sSDay.day}}</span>\n                                                <span *ngIf=\"sSDay.tonow==='B'&&sSDay.isshift&&!isRefreshing\" class=\"dayb-span wdatetxt\">\n                                                  <ion-icon *ngIf=\"!sSDay.nots&&!sSDay.xtra\" class=\"dayb-done-checkmark-ico\" name=\"checkmark-outline\"></ion-icon>\n                                                  <ion-icon *ngIf=\"sSDay.nots&&!sSDay.xtra\" class=\"dayb-done-alert-ico\" name=\"alert-outline\"></ion-icon>\n                                                  <ion-icon *ngIf=\"sSDay.xtra&&!sSDay.nots\" class=\"dayb-done-xtra-ico\" name=\"add-outline\"></ion-icon>\n                                                </span>\n                                                <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                            </div>\n                                            <div *ngIf=\"sSDay.si===sSCurrentIndex&&!doneSIsShowing\" class=\"dayb-div wdatetxt {{sSDay.sn}}\">\n                                                <div class=\"sheriff-uparrow-anim-wrapper shifts-pagination\">\n                                                    <div id=\"sheriffarrowAnim\">\n                                                        <div class=\"sheriffarrowSliding\">\n                                                            <div class=\"sheriffarrow sa1\"></div>\n                                                        </div>\n                                                        <div class=\"sheriffarrowSliding sheriffdelay1\">\n                                                            <div class=\"sheriffarrow sa2\"></div>\n                                                        </div>\n                                                        <div class=\"sheriffarrowSliding sheriffdelay2\">\n                                                            <div class=\"sheriffarrow sa3\"></div>\n                                                        </div>\n                                                        <div class=\"sheriffarrowSliding sheriffdelay3\">\n                                                            <div class=\"sheriffarrow sa4\"></div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col shiftslider-pagination-col fraction-col animDel-700 animDur-250  animate__fadeIn animate__fast\">\n                        <div class=\"ss-pag-frac-outter-wrapper\">\n                            <div *ngIf=\"!doneSIsShowing\" class=\"ss-pag-frac-inner-wrapper\">\n                                <div *ngIf=\"hasLoaded&&sSTotalItems>0&&!isRefreshing\" [ngClass]=\"{'ssfrac-last':sSCurrent===sSTotalItems,'ssfrac-first':sSCurrent===1,'ssfrac-std':sSCurrent!==sSTotalItems&&sSCurrent!==1}\" class=\"ss-pag-frac-val current\">\n                                    <span *ngIf=\"!isRefreshing\">{{sSCurrent}}</span>\n                                    <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                </div>\n                                <div *ngIf=\"!(sSTotalItems>0)&&!isRefreshing\" class=\"ss-pag-frac-val no-shifts\">\n                                    <span *ngIf=\"!isRefreshing\">-</span>\n                                    <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                </div>\n                                <div class=\"ss-pag-frac-slash\"></div>\n                                <div class=\"ss-pag-frac-val total\">\n                                    <span *ngIf=\"!isRefreshing\">{{sSTotalItems}}</span>\n                                    <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"4\" class=\"sheriff-col shiftslider-pagination-col info-col animDel-800 animDur-250  animate__flipInX\">\n                        <div class=\"ss-pag-info-outter-wrapper\">\n                            <div class=\"ss-pag-info-cdown-div title-wrapper\">\n                                <span *ngIf=\"!doneSIsShowing&&sSTotalItems!==0\">SHIFT STARTS:</span>\n                                <span *ngIf=\"doneSIsShowing&&doneSTSData\">SHIFT ENDED:</span>\n                                <div *ngIf=\"!doneSIsShowing&&sSTotalItems===0\" class=\"no-upcoming-timer\">-</div>\n                                <div *ngIf=\"doneSIsShowing&&!doneSTSData\" class=\"no-timesheet-timer\">no timesheet</div>\n                            </div>\n                            <div *ngIf=\"doneSIsShowing&&!doneSTSData\" class=\"ss-cdown-shiftended-value-notimesheet-wrapper\">not known</div>\n                            <div *ngIf=\"doneSIsShowing&&doneSTSData\" class=\"ss-cdown-shiftended-value-wrapper\">\n                                <!-- YEARS -->\n                                <span *ngIf=\"doneSAgoTime.years>0\" class=\"doneshiftago-val-wrapper years\"><span class=\"doneshiftago-value years\">{{doneSAgoTime.years}}</span><span class=\"doneshiftago-suffix years long\">year<span *ngIf=\"doneSAgoTime.years>1\">s</span></span>\n                                </span>\n                                <!-- MONTHS -->\n                                <span *ngIf=\"doneSAgoTime.months>0\" class=\"doneshiftago-val-wrapper months\"><span class=\"doneshiftago-value months\">{{doneSAgoTime.months}}</span><span class=\"doneshiftago-suffix months long\">month<span *ngIf=\"doneSAgoTime.months>1\">s</span></span>\n                                </span>\n                                <!-- WEEKS -->\n                                <span *ngIf=\"doneSAgoTime.weeks>0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper weeks\"><span class=\"doneshiftago-value weeks\">{{doneSAgoTime.weeks}}</span><span class=\"doneshiftago-suffix weeks long\">week<span *ngIf=\"doneSAgoTime.weeks>1\">s</span></span>\n                                </span>\n                                <!-- DAYS -->\n                                <span *ngIf=\"doneSAgoTime.days>0&&doneSAgoTime.weeks===0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper days\"><span class=\"doneshiftago-value days\">{{doneSAgoTime.days}}</span><span class=\"doneshiftago-suffix days long\">day<span *ngIf=\"doneSAgoTime.days>1\">s</span></span>\n                                </span>\n                                <!-- HOURS -->\n                                <span *ngIf=\"doneSAgoTime.hours>0&&doneSAgoTime.days===0&&doneSAgoTime.weeks===0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper hours\"><span class=\"doneshiftago-value hours\">{{doneSAgoTime.hours}}</span>\n                                <span class=\"doneshiftago-suffix hours long\">hr<span *ngIf=\"doneSAgoTime.hours>1\">s</span></span>\n                                </span>\n                                <!-- MINUTES -->\n                                <span *ngIf=\"doneSAgoTime.minutes>0&&doneSAgoTime.hours===0&&doneSAgoTime.days===0&&doneSAgoTime.weeks===0&&doneSAgoTime.months===0&&doneSAgoTime.years===0\" class=\"doneshiftago-val-wrapper minutes\"><span class=\"doneshiftago-value minutes\">{{doneSAgoTime.minutes}}</span>\n                                <span class=\"doneshiftago-suffix minutes long\">min<span *ngIf=\"doneSAgoTime.minutes>1\">s</span></span>\n                                </span>\n                                <!-- AGO TXT -->\n                                <span class=\"doneshiftago ago-suffix-txt\">ago</span>\n                            </div>\n                            <div *ngIf=\"CDReady&&!doneSIsShowing\" class=\"ss-pag-info-cdown-div values-wrapper  animate__flipInX animate__fast\">\n                                <!-- DAYS -->\n                                <span *ngIf=\"sSCD.d>0\" class=\"sscd-int-wrapper days\"><span class=\"sscd-val days\">{{sSCD.d}}</span><span class=\"sscd-colon\">d</span></span>\n                                <!-- HOURS -->\n                                <span *ngIf=\"sSCD.h>0\" class=\"sscd-int-wrapper hours\"><span class=\"sscd-val hours\">{{sSCD.h}}</span><span class=\"sscd-colon\">h</span></span>\n                                <!-- MINS -->\n                                <span *ngIf=\"sSCD.m>0\" class=\"sscd-int-wrapper mins\">\n                                  <span [ngStyle]=\"{'color':sSCD.d<1&&sSCD.h<1?'var(--ion-color-danger)':'#eee'}\" class=\"sscd-val mins\"><span [ngStyle]=\"{'color':sSCD.d<1&&sSCD.h<1?'var(--ion-color-danger)':'#eee'}\" *ngIf=\"sSCD.m<10&&CDReady\">0</span>{{sSCD.m}}</span>\n                                <span [ngStyle]=\"{'color':sSCD.d<1&&sSCD.h<1?'var(--ion-color-danger)':'#aaa'}\" class=\"sscd-colon\">m</span>\n                                </span>\n                                <!-- SECONDS -->\n                                <span *ngIf=\"sSCD.d===0&&sSCD.h===0\" [ngStyle]=\"{'color':sSCD.h<=1?'var(--ion-color-danger)':'#eee'}\" class=\"sscd-val secs\">\n                                  <span [ngStyle]=\"{'color':sSCD.h<=1?'var(--ion-color-danger)':'#eee'}\" *ngIf=\"sSCD.s<10&&CDReady\">0</span>{{sSCD.s}}</span>\n                                <span [ngStyle]=\"{'color':sSCD.h<=1?'var(--ion-color-danger)':'#aaa'}\" *ngIf=\"sSCD.m<=0&&CDReady\" class=\"sscd-colon\">s</span>\n                            </div>\n                            <div *ngIf=\"!hasLoaded||sSCD===null&&!doneSIsShowing\" class=\"ss-pag-info-cdown-div values-wrapper no-next-shift\">\n                                <ion-icon class=\"sscd-noshift-ico\" name=\"ellipsis-horizontal\"></ion-icon>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- HISTORY HEADER -->\n        <div class=\"sheriff-history-statsbar-main-wrapper\">\n            <ion-grid class=\"sheriff-grid history-statsbar-grid\">\n                <ion-row class=\"sheriff-row history-statsbar-row heading-row\">\n                    <ion-col size=\"6\" class=\"sheriff-col history-statsbar-col heading-col\">\n                        <div class=\"history-statsbar-heading-wrapper\">\n                            completed\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col publisher\">\n                        <ion-icon class=\"doneshifts-div-line-ico publisher-ico head-ico\" name=\"person-add-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col comments\">\n                        <ion-icon class=\"doneshifts-div-line-ico comments-ico head-ico\" name=\"chatbox-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col warnings\">\n                        <ion-icon class=\"doneshifts-div-line-ico warnings-ico head-ico\" name=\"warning-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col history-statsbar-col heading-col heading-ico-col swaps\">\n                        <ion-icon class=\"doneshifts-div-line-ico swap-ico head-ico\" name=\"swap-horizontal-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col history-statsbar-col totop-col\">\n                        <ion-button (click)=\"scrollHistoryTop()\" *ngIf=\"showTTopBtn\" class=\"sheriff-btn shifts-history-btn totopbtn  animDur animate__slideInUp\">\n                            <ion-icon [ngStyle]=\"{'color':scrollingTT?'var(--ion-color-success)':'#848484'}\" name=\"chevron-up\" class=\"shifts-history-totop-btn-ico\"></ion-icon>\n                            <div [ngStyle]=\"{'color':scrollingTT?'var(--ion-color-success)':'#848484'}\" class=\"shifts-history-totop-btn-text\">top</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"sheriff-row history-statusbar-row divline-row\">\n                    <ion-col class=\"sheriff-col history-statusbar-col heading-col\">\n                        <div class=\"history-statsbar-heading-divider\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n    <!-- ION/TAB-CONTENT - START -->\n    <ion-content [scrollEvents]=\"true\" (ionScroll)=\"historyScroll($event)\" class=\"sheriff-content tab-content shifts\" #historyContent (ionScrollStart)=\"disableRefresher(true)\" (ionScrollEnd)=\"disableRefresher(false)\">\n        <div slot=\"fixed\" class=\"sheriff-subheader-shadow-div\"></div>\n        <!-- MAIN LIST WRAPPER -->\n        <div class=\"sheriff-tabcontent-itemlistcontent-wrapper shifts\">\n            <!-- NO ITEMS FOUND CARD -->\n            <ion-card *ngIf=\"noShiftItems\" class=\"sheriff-card tab-list-card no-items-card\">\n                <div class=\"sheriff-no-items-card-wrapper\">No {{dbDataTbl}} Items Found</div>\n            </ion-card>\n            <!-- V-SCROLL LIST -->\n            <ion-list *ngIf=\"!noShiftItems\" class=\"sheriff-tablist tabshifts\">\n                <ion-virtual-scroll *ngIf=\"hasLoaded\" [items]=\"shiftItems\" [headerFn]=\"calHeaderGroups\" approxItemHeight=\"42\" approxHeaderHeight=\"25\" class=\"sheriff-vscroll dbitem-vscroll doneshifts\">\n                    <ion-item-divider [hidden]=\"header.week===null&&header.month===null\" *virtualHeader=\"let header\" class=\"sheriff-list-item-divider donerosters-weekheader\">\n                        <ion-grid class=\"sheriff-grid item-list-divider-grid donerosters\">\n                            <ion-row *ngIf=\"header.month!==null\" class=\"sheriff-divider-row donerosters-month\">\n                                <ion-col class=\"sheriff-divider-col donerosters-month\">{{header.month}}</ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"header.week!==null\" class=\"sheriff-divider-row donerosters-week\">\n                                <ion-col class=\"sheriff-divider-col donerosters-week\">{{header.week}}</ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item-divider>\n                    <!-- ITEM START -->\n                    <ion-item *virtualItem=\"let item; let i = index\" [ngClass]=\"{'doneshift-showingdetail-dim-not-selected':doneSIsShowing&&doneSId!==item.Id,'doneshift-showingdetail-hl-selected':doneSIsShowing&&doneSId===item.Id}\" class=\"sheriff-item tablist-item doneshifts-item doneshifts-index-{{i}}\"\n                        id=\"id-doneroster-{{item.Id}}\">\n                        <ion-grid class=\"sheriff-grid list-item-grid doneshifts-item-grid\">\n                            <ion-row class=\"sheriff-row list-item-row doneshifts-item-row maingrid-row\">\n                                <div (click)=\"showShiftDetail(item.Id,i)\" [ngClass]=\"{'doneshift-showingdetail':doneSId===item.Id}\" class=\"doneshifts open-doneshift-outter-wrapper ion-activatable ripple-parent\">\n                                    <ion-col size=\"6\" class=\"sheriff-col list-item-col doneshifts-col\">\n                                        <div class=\"doneshifts-div-line date-area-dl\">\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts date-value\">{{item.nDate}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts rosterid-value\">#{{item.Id}}</span>\n                                            <ion-skeleton-text *ngIf=\"isRefreshing\" animated style=\"width:75%\"></ion-skeleton-text>\n                                        </div>\n                                        <div class=\"doneshifts-div-line startend-ttime-dl\">\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts areaat-sign\">@</span>\n                                            <span *ngIf=\"!isRefreshing\" [ngStyle]=\"{'color':workColor,'filter':incBright?'brightness(2.5)':'brightness(1)'}\" class=\"doneshifts ccode\">{{item.nCompanyName}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts startend-value stime\">{{item.nStart}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts startend-value\"><ion-icon class=\"doneshifts startend-value ico\" name=\"caret-forward\"></ion-icon></span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts startend-value etime\">{{item.nEnd}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts ttime-value\">\n                                            <span  *ngIf=\"!isRefreshing\" class=\"doneshifts ttbrack\">(</span>\n                                            <span *ngIf=\"!isRefreshing&&item.nTotalTime.hours>0\" class=\"doneroster-detail-tt-value hrs\">{{item.nTotalTime.hours}}</span>\n                                            <span *ngIf=\"!isRefreshing&&item.nTotalTime.minutes>0\" class=\"doneroster-detail-tt-value mins\">:{{item.nTotalTime.minutes}}</span>\n                                            <span *ngIf=\"!isRefreshing\" class=\"doneshifts ttbrack\">)</span></span>\n                                            <span *ngIf=\"!isRefreshing&&item.MatchedByTimesheet===0\" class=\"doneshifts notsalert-span\">-<ion-icon class=\"doneshifts-notsalert-ico\" name=\"stopwatch\"></ion-icon>?</span>\n                                            <ion-skeleton-text *ngIf=\"isRefreshing\" animated style=\"width:70%\"></ion-skeleton-text>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col publisher-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line publisher-dl value\">\n                                            <span style=\"color:#848484\" class=\"doneshifts publisher-value\">{{item.nPublisher}}</span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col comments-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line comments-dl value\">\n                                            <span [ngStyle]=\"{'color':item.nCommCount>0?'var(--ion-color-success-48)':'#848484'}\" class=\"doneshifts comments-value\">\n                                            <span *ngIf=\"item.nCommCount>0\" class=\"doneshifts comments-value hasvalue\">{{item.nCommCount}}</span>\n                                            <span *ngIf=\"item.nCommCount===0\" class=\"doneshifts nilvalue\">-</span>\n                                            </span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col warnings-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line warnings-dl value\">\n                                            <span [ngStyle]=\"{'color':item.nWarnCount>0?'var(--ion-color-danger-48)':'#848484'}\" class=\"doneshifts warnings-value\">\n                                              <span *ngIf=\"item.nWarnCount>0\" class=\"doneshifts warnings-value hasvalue\">{{item.nWarnCount}}</span>\n                                            <span *ngIf=\"item.nWarnCount===0\" class=\"doneshifts nilvalue\">-</span>\n                                            </span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col swap-col\">\n                                        <div *ngIf=\"!isRefreshing\" class=\"doneshifts-div-line swap-dl value\">\n                                            <span class=\"doneshifts swap-value\">\n                                            <span style=\"color:#848484\" *ngIf=\"item.SwapStatus===0||item.SwapStatus===6\" class=\"doneshifts swap-value nilvalue\">-</span>\n                                            <span *ngIf=\"item.SwapStatus===1\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-ico pendingout-1\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===2\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-value pendingin-2\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===3\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-value pendinginout-3\"><ion-icon name=\"code-working-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===4\" style=\"color:var(--ion-color-primary-68)\" class=\"doneshifts swap-value pendingapproval-4\"><ion-icon name=\"ellipsis-horizontal-circle-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===5\" style=\"color:var(--ion-color-success-68)\" class=\"doneshifts swap-value approved-5\"><ion-icon name=\"ellipsis-horizontal-circle-outline\"></ion-icon></span>\n                                            <span *ngIf=\"item.SwapStatus===7\" style=\"color:var(--ion-color-danger-68)\" class=\"doneshifts swap-value declined-7\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\n                                            </span>\n                                        </div>\n                                        <ion-skeleton-text *ngIf=\"isRefreshing\" animated class=\"skele-shifts-history-statuscols\"></ion-skeleton-text>\n                                    </ion-col>\n                                    <ion-ripple-effect></ion-ripple-effect>\n                                </div>\n                                <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col opents-col\">\n                                    <div *ngIf=\"item.MatchedByTimesheet>0\" (click)=\"gotoTimesheet(item.Id,item.MatchedByTimesheet)\" [ngStyle]=\"{'border-color':gotoTSId===item.Id?'var(--ion-color-success-68)':'#262626'}\" class=\"doneshifts-goto-ts-ico-wrapper ion-activatable ripple-parent\">\n                                        <ion-icon [ngStyle]=\"{'color':gotoTSId===item.Id?'var(--ion-color-success)':'var(--ion-color-primary-68)'}\" class=\"sheriff-ico doneshifts-goto-ts-ico clock\" name=\"stopwatch-outline\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                    <div style=\"border-color:#262626\" *ngIf=\"item.MatchedByTimesheet===0\" class=\"doneshifts-goto-ts-ico-wrapper\">\n                                        <ion-icon style=\"color:var(--ion-color-danger-68)\" class=\"sheriff-ico doneshifts-missingts-alert-ico\" name=\"alert-circle-outline\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"1\" class=\"sheriff-col list-item-col doneshifts-col opendoneros-col\">\n                                    <div (click)=\"closeShiftDetail()\" [ngClass]=\"{'doneshift-open':doneSId===item.Id}\" class=\"doneshifts-close-detail-ico-wrapper ion-activatable ripple-parent\">\n                                        <ion-icon *ngIf=\"doneSId===item.Id\" [ngStyle]=\"{'color':doneSId===item.Id?'var(--ion-color-danger)':'var(--ion-color-primary-68)'}\" class=\"sheriff-ico doneshifts-close-detail-ico\" name=\"close\"></ion-icon>\n                                        <ion-icon *ngIf=\"doneSId!==item.Id\" [ngStyle]=\"{'color':doneSId!==item.Id?'var(--ion-color-primary-68)':'var(--ion-color-danger)'}\" class=\"sheriff-ico doneshifts-show-detail-ico\" name=\"chevron-forward\"></ion-icon>\n                                        <ion-ripple-effect></ion-ripple-effect>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-item>\n                    <!-- ITEM END -->\n                </ion-virtual-scroll>\n            </ion-list>\n            <ion-card *ngIf=\"endOfList\" class=\"sheriff-card tab-list-card endoflist-card  animate__zoomIn animate__fast\">\n                <div class=\"sheriff-endoflist-card-wrapper\">End of Selected Range</div>\n            </ion-card>\n            <!-- I-SCROLL FEEDER -->\n            <ion-infinite-scroll style=\"opacity:0!important\" disabled=true class=\"sheriff-iscroll shifts\" threshold=\"25%\" (ionInfinite)=\"feedItems($event)\">\n                <ion-infinite-scroll-content [ngStyle]=\"{'opacity':hasLoaded===true?'1':'0'}\" loadingSpinner=null>\n                    <ion-row class=\"sheriff-row inf-loading-row\">\n                        <ion-col class=\"sheriff-col inf-loading-col spinleft\" size=\"4\">\n                            <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner\" name=\"dots\"></ion-spinner>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col inf-loading-col textmiddle\" size=\"4\">\n                            loading\n                            <div class=\"info-load-batch-wrapper\"><span class=\"inf-load-batch-start\">{{batchStart}}</span><span class=\"inf-load-batch-hyphen\">-</span><span class=\"inf-load-batch-end\">{{batchEnd}}</span></div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col inf-loading-col spinright\" size=\"4\">\n                            <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner right\" name=\"dots\"></ion-spinner>\n                        </ion-col>\n                    </ion-row>\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </ion-content>\n</ion-content>\n<!-- ION FAB BUTTON -->\n<ion-fab class=\"sheriff-fader-fab tabshifts\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <div class=\"sheriff-fade-nav-btn-wrapper tabshifts ion-activatable ripple-parent\">\n        <img class=\"sheriff-fade-nav-btn-img\" src=\"../../../assets/img/sheriff-fadenavbtn.png\">\n        <ion-ripple-effect></ion-ripple-effect>\n    </div>\n</ion-fab>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabshifts_tabshifts_module_ts-es5.js.map