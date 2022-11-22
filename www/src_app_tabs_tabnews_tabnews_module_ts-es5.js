(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_tabs_tabnews_tabnews_module_ts"], {
    /***/
    71893:
    /*!************************************************!*\
      !*** ./src/app/tabs/tabnews/tabnews.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabNewsPageModule": function TabNewsPageModule() {
          return (
            /* binding */
            _TabNewsPageModule
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


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../directives/directives.module */
      78434);
      /* harmony import */


      var _tabnews_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabnews.page */
      70785);

      var routes = [{
        path: '',
        component: _tabnews_page__WEBPACK_IMPORTED_MODULE_1__.TabNewsPage
      }];

      var _TabNewsPageModule = function TabNewsPageModule() {
        _classCallCheck(this, TabNewsPageModule);
      };

      _TabNewsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule],
        declarations: [_tabnews_page__WEBPACK_IMPORTED_MODULE_1__.TabNewsPage]
      })], _TabNewsPageModule);
      /***/
    },

    /***/
    70785:
    /*!**********************************************!*\
      !*** ./src/app/tabs/tabnews/tabnews.page.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabNewsPage": function TabNewsPage() {
          return (
            /* binding */
            _TabNewsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabnews_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabnews.page.html */
      67709);
      /* harmony import */


      var _tabnews_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabnews.page.scss */
      50437);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/datetime.service */
      12826);
      /* harmony import */


      var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/sqlite.service */
      90636);
      /* harmony import */


      var _services_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/detail.service */
      52153);
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/storage.service */
      71188);
      /* harmony import */


      var src_app_services_deputy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/deputy.service */
      22092);
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/events.service */
      80106);
      /* harmony import */


      var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/sync.service */
      43395);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_popovers_peopledetail_peopledetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/popovers/peopledetail/peopledetail.component */
      2925);
      /* harmony import */


      var _modals_detail_news_detail_news_detail_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../modals/detail/news-detail/news-detail.page */
      85800);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_modals_detail_news_detail_news_add_news_add_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modals/detail/news-detail/news-add/news-add.page */
      97124); ////////////////////////////////////////////////////////////////////////////////////////


      var _TabNewsPage = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////
        function TabNewsPage(plt, router, logger, sqlServ, dS, dT, syncServ, modalCtrl, storeServ, deputy, evServ, popCtrl) {
          _classCallCheck(this, TabNewsPage);

          this.plt = plt;
          this.router = router;
          this.logger = logger;
          this.sqlServ = sqlServ;
          this.dS = dS;
          this.dT = dT;
          this.syncServ = syncServ;
          this.modalCtrl = modalCtrl;
          this.storeServ = storeServ;
          this.deputy = deputy;
          this.evServ = evServ;
          this.popCtrl = popCtrl;
          this.dbDataTbl = 'memos';
          this.myPpl = [];
          this.myAreas = [];
          this.workAreas = [];
          this.incBright = null; // Refresh/Circ

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
          this.preventRefreshPull = false; // Memos/Items

          this.allApiMemos = [];
          this.initMemoData = [];
          this.initMemoList = [];
          this.memos = [];
          this.noMemos = false;
          this.batchStart = 0;
          this.batchEnd = 20;
          this.batchLimit = 20;
          this.batchOffset = 0;
          this.endOfList = false; // Edit Mode

          this.editMode = false; // Memo Details

          this.memoDetailModalOpts = {
            animated: false,
            showBackdrop: false,
            backdropDismiss: false,
            cssClass: 'memo-detail-modal-class',
            component: _modals_detail_news_detail_news_detail_page__WEBPACK_IMPORTED_MODULE_10__.NewsDetailPage,
            keyboardClose: true
          };
          this.memoDetailModalOpen = false; // Add Memo

          this.addNewMemoModalOpts = {
            animated: false,
            showBackdrop: false,
            backdropDismiss: false,
            cssClass: 'memo-add-modal-class',
            component: src_app_modals_detail_news_detail_news_add_news_add_page__WEBPACK_IMPORTED_MODULE_12__.NewsAddPage,
            keyboardClose: true
          };
          this.addNewMemoModalOpen = false;
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(TabNewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logger.info('[TabNews|ngOnInit] ()...');
            var urlArr = this.router.url.split('/');
            this.tabKey = urlArr[urlArr.length - 1];
            this.initPrefs();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initPrefs",
          value: function initPrefs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('[TabNews|initPrefs] ()...');
                      this.myObj = this.dS.myObj;
                      this.meObj = this.dS.meObj;
                      this.myPpl = this.dS.pplArr;
                      this.meAvatar = this.dS.meAva;
                      this.workAreas = this.dS.workAreas;
                      this.workName = this.dS.workCode;
                      this.workColor = this.dS.workColor;
                      this.incBright = this.dS.incBright;
                      this.syncMemos('init');

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "syncMemos",
          value: function syncMemos(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.logger.info('[TabNews|syncMemos] (' + mode + ')...');

                      if (!(mode === 'init')) {
                        _context3.next = 5;
                        break;
                      }

                      this.plt.ready().then(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this2 = this;

                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.syncServ.doMemosSync('init');

                                case 2:
                                  setTimeout(function () {
                                    _this2.initFetchMemoData();
                                  }, 250);

                                case 3:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });
                      _context3.next = 9;
                      break;

                    case 5:
                      this.memos = [];
                      _context3.next = 8;
                      return this.syncServ.doMemosSync('refresh');

                    case 8:
                      setTimeout(function () {
                        _this.initFetchMemoData();
                      }, 250);

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initFetchMemoData",
          value: function initFetchMemoData() {
            var _this3 = this;

            this.plt.ready().then(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var initMD;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return this.sqlServ.getItemCount('memos');

                      case 2:
                        this.memosTotal = _context4.sent;

                        if (!(this.memosTotal > 0)) {
                          _context4.next = 10;
                          break;
                        }

                        _context4.next = 6;
                        return this.sqlServ.getXMemoItems(this.batchLimit, this.batchOffset);

                      case 6:
                        initMD = _context4.sent;

                        if (initMD.length > 0) {
                          this.initRenderMemoList(initMD);
                        } else {
                          this.noMemos = true;
                          this.logger.info('[TabNews|initRenderData] (!) No Memo Items in DB.');
                        }

                        _context4.next = 12;
                        break;

                      case 10:
                        this.noMemos = true;
                        this.logger.info('[TabNews|initRenderData] (!) No Memo Items in DB.');

                      case 12:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "initRenderMemoList",
          value: function initRenderMemoList(initMD) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var i, niceInitOb;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.logger.info('[TabNews|initRenderMemoList] (initData)...');
                      this.initMemoData = initMD;
                      i = 0;

                    case 3:
                      if (!(i < initMD.length)) {
                        _context5.next = 11;
                        break;
                      }

                      _context5.next = 6;
                      return this.formatMemo(initMD[i]);

                    case 6:
                      niceInitOb = _context5.sent;
                      this.initMemoList.push(niceInitOb);

                    case 8:
                      i++;
                      _context5.next = 3;
                      break;

                    case 11:
                      ;
                      this.memos = this.initMemoList;

                      if (this.memos.length === this.memosTotal) {
                        this.infiniteScroll.disabled = true;
                        this.endOfList = true;
                      } else {
                        this.infiniteScroll.disabled = false;
                        this.endOfList = false;
                      }

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "formatMemo",
          value: function formatMemo(rawMemoObj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var niceMObj, rM, creatorArr, sF, sT, localnContent, msgWordArr;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.logger.info('[TabNews|formatMemo] (rawMemoObj)...');
                      niceMObj = rawMemoObj;
                      rM = rawMemoObj;
                      niceMObj._DPMetaData = JSON.parse(rM._DPMetaData);
                      creatorArr = this.myPpl.filter(function (wp) {
                        return wp.EmpId === rM.Creator;
                      });

                      if (creatorArr.length > 0) {
                        niceMObj['nCreatorName'] = creatorArr[0].DisplayName;
                        niceMObj['nCreatorAva'] = creatorArr[0].Photo;
                      } else {
                        niceMObj['nCreatorName'] = 'Unknown';
                        niceMObj['nCreatorAva'] = './../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';
                      }

                      ;
                      niceMObj['nCreated'] = this.dT.format(new Date(rM.Created), 'd MMM yyyy h:mmaaa');
                      niceMObj['nModified'] = this.dT.format(new Date(rM.Modified), 'd MMM yyyy h:mmaaa');

                      if (this.dT.isV(this.dT.pISO(rM.ShowFrom)) && this.dT.isV(this.dT.pISO(rM.ShowTill))) {
                        sF = this.dT.format(new Date(rM.ShowFrom), 'dd/MM/yyyy');
                        sT = this.dT.format(new Date(rM.ShowTill), 'dd/MM/yyyy');
                        niceMObj['nShowFT'] = {
                          f: sF,
                          t: sT
                        };
                      } else {
                        niceMObj['nShowFT'] = null;
                      }

                      ;
                      msgWordArr = rM.Content.split(' ');

                      if (msgWordArr.length > 32) {
                        localnContent = msgWordArr.slice(0, 32).join(' ');
                        niceMObj['nContentTrim'] = true;
                      } else {
                        localnContent = rM.Content;
                        niceMObj['nContentTrim'] = false;
                      }

                      ;
                      niceMObj['nContent'] = localnContent;
                      console.log(niceMObj);
                      return _context6.abrupt("return", Promise.resolve(niceMObj));

                    case 17:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "showPeoplePop",
          value: function showPeoplePop(event, memo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var pdPopOpts, pdPop, _yield$pdPop$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.logger.info('[TabNews|showPeoplePop] (' + memo.Id + ')...');
                      event.stopPropagation();
                      pdPopOpts = {
                        component: src_app_popovers_peopledetail_peopledetail_component__WEBPACK_IMPORTED_MODULE_9__.PeopleDetailComponent,
                        componentProps: {
                          people: [],
                          logs: [],
                          confReq: null,
                          me: {}
                        },
                        showBackdrop: false,
                        backdropDismiss: true,
                        cssClass: 'pop-peopledetail',
                        event: event,
                        animated: true,
                        mode: 'md',
                        keyboardClose: true
                      };
                      pdPopOpts.componentProps.people = memo._DPMetaData.AssignedUsers;
                      pdPopOpts.componentProps.logs = memo._DPMetaData.MemoLogs;
                      pdPopOpts.componentProps.confReq = memo._DPMetaData.RequireConfirmation;
                      pdPopOpts.componentProps.meConf = memo._DPMetaData.RequireMyConfirm ? false : true;
                      pdPopOpts.componentProps.me = {
                        ava: this.meAvatar,
                        obj: this.meObj
                      };
                      _context7.next = 10;
                      return this.popCtrl.create(pdPopOpts);

                    case 10:
                      pdPop = _context7.sent;
                      _context7.next = 13;
                      return pdPop.present();

                    case 13:
                      _context7.next = 15;
                      return pdPop.onDidDismiss();

                    case 15:
                      _yield$pdPop$onDidDis = _context7.sent;
                      role = _yield$pdPop$onDidDis.role;
                      this.logger.info('[TabNews|showPeoplePop] (DISMISSED): With Role: ' + role);

                    case 18:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getMemos",
          value: function getMemos(offset) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var thisBatch, i, niceMemoOb;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.logger.info('[TabNews|getMemos] (' + offset + ')...');
                      _context8.prev = 1;
                      _context8.next = 4;
                      return this.sqlServ.getXMemoItems(this.batchLimit, this.batchOffset);

                    case 4:
                      thisBatch = _context8.sent;
                      i = 0;

                    case 6:
                      if (!(i < thisBatch.length)) {
                        _context8.next = 14;
                        break;
                      }

                      _context8.next = 9;
                      return this.formatMemo(thisBatch[i]);

                    case 9:
                      niceMemoOb = _context8.sent;
                      this.memos.push(niceMemoOb);

                    case 11:
                      i++;
                      _context8.next = 6;
                      break;

                    case 14:
                      ;
                      return _context8.abrupt("return", Promise.resolve(true));

                    case 18:
                      _context8.prev = 18;
                      _context8.t0 = _context8["catch"](1);
                      this.logger.info('[TabNews|getMemos] (Error): ' + _context8.t0);

                    case 21:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[1, 18]]);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "feedItems",
          value: function feedItems(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.logger.info('[TabNews|feedItems] (event)...');
                      this.batchOffset += this.batchLimit;
                      _context9.next = 4;
                      return this.getMemos(this.batchOffset);

                    case 4:
                      if (this.memos.length === this.memosTotal) {
                        this.infiniteScroll.disabled = true;
                        this.endOfList = true;
                      } else {
                        this.infiniteScroll.disabled = false;
                        this.endOfList = false;
                      }

                      ;
                      event.target.complete();

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "openDetail",
          value: function openDetail(memoObj) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this4 = this;

              var thisMemoDModalOpts, memoDetailModal;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (this.editMode) {
                        _context10.next = 15;
                        break;
                      }

                      this.logger.info('[TabNews|openDetail] (memoObj)...');
                      thisMemoDModalOpts = this.memoDetailModalOpts;
                      thisMemoDModalOpts['componentProps'] = {
                        memo: memoObj,
                        me: this.meObj,
                        my: this.myObj,
                        meAva: this.meAvatar,
                        work: {
                          color: this.workColor,
                          code: this.workName,
                          bright: this.incBright
                        }
                      };
                      _context10.next = 6;
                      return this.modalCtrl.create(thisMemoDModalOpts);

                    case 6:
                      memoDetailModal = _context10.sent;
                      document.addEventListener('ionModalDidPresent', function () {
                        _this4.memoDetailModalOpen = true;

                        _this4.logger.info('[TabNews|DetailModal] (ionModalDidPresent)');
                      });
                      memoDetailModal.onWillDismiss().then(function () {
                        _this4.memoDetailModalOpen = false;

                        _this4.logger.info('[TabNews|DetailModal] (ionModalWillDismiss)');
                      });
                      memoDetailModal.onDidDismiss().then(function (_ref) {
                        var role = _ref.role,
                            data = _ref.data;

                        _this4.logger.info('[TabNews|DetailModal] (ionModalDidDismiss) >>> (Role/Data): ' + role + '/' + data);

                        if (role === 'delete') {
                          _this4.deleteMemo(data);
                        }
                      });
                      _context10.next = 12;
                      return memoDetailModal.present();

                    case 12:
                      return _context10.abrupt("return", _context10.sent);

                    case 15:
                      this.logger.info('[TabNews|deleteMemoItem] (memoObj)...');

                    case 16:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "deleteMemo",
          value: function deleteMemo(memoId) {
            this.logger.info('[TabNews|deleteMemo] (memo)...'); // dpApi Logic Here
            // dbDel Logic Here

            var newMemoArr = this.memos.filter(function (m) {
              return m.Id !== memoId;
            });
            this.memos = [];
            this.memos = newMemoArr;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.logger.info('[TabNewsIonViewWillEnter] ()...');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.logger.info('[TabNewsionViewDidEnter] ()...');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "confirmMemo",
          value: function confirmMemo(memoId) {
            this.logger.info('[TabNews|confirmMemo] (' + memoId + ')...');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "addMemo",
          value: function addMemo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this5 = this;

              var thisAddMemoModalOpts, addNewMemoModal;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.logger.info('[TabNews|addMemo] ()...');
                      thisAddMemoModalOpts = this.addNewMemoModalOpts;
                      thisAddMemoModalOpts['componentProps'] = {
                        me: this.meObj,
                        my: this.myObj,
                        meAva: this.meAvatar,
                        work: {
                          color: this.workColor,
                          code: this.workName,
                          bright: this.incBright
                        },
                        ppl: this.myPpl
                      };
                      _context11.next = 5;
                      return this.modalCtrl.create(thisAddMemoModalOpts);

                    case 5:
                      addNewMemoModal = _context11.sent;
                      document.addEventListener('ionModalDidPresent', function () {
                        _this5.addNewMemoModalOpen = true;

                        _this5.logger.info('[TabNews|AddNewMemoModal] (ionModalDidPresent)');
                      });
                      addNewMemoModal.onWillDismiss().then(function () {
                        _this5.addNewMemoModalOpen = false;

                        _this5.logger.info('[TabTSheets|AddNewMemoModal] (ionModalWillDismiss)');
                      });
                      addNewMemoModal.onDidDismiss().then(function (_ref2) {
                        var data = _ref2.data,
                            role = _ref2.role;

                        _this5.logger.info('[TabNews|addMemoModal] (ionModalDidDismiss) >>> (Data): ' + data + ' >>> (Role): ' + role);
                      });
                      _context11.next = 11;
                      return addNewMemoModal.present();

                    case 11:
                      return _context11.abrupt("return", _context11.sent);

                    case 12:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "headerProgress",
          value: function headerProgress(mode, action, data) {
            var _this6 = this;

            this.logger.info('[TabNews|headerProgress] (' + mode + ', ' + action + ', ' + data + ')...');
            var circProgEle = jquery__WEBPACK_IMPORTED_MODULE_11__('.hcl-progcirc.' + this.tabKey);
            var starEle = jquery__WEBPACK_IMPORTED_MODULE_11__('.hcl-star.' + this.tabKey);
            var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_11__('.hcl-slogo.' + this.tabKey);

            var startRoutine = function startRoutine() {
              jquery__WEBPACK_IMPORTED_MODULE_11__(sLogoEle).css('transform', 'scale(.9)');
              _this6.progCirc.percent = 0;
              jquery__WEBPACK_IMPORTED_MODULE_11__(starEle).css('transform', 'rotate(0deg)');

              if (jquery__WEBPACK_IMPORTED_MODULE_11__(circProgEle).css('display', 'none')) {
                jquery__WEBPACK_IMPORTED_MODULE_11__(circProgEle).css('display', 'unset');
              }

              _this6.progCirc.animation = false;
              _this6.progCirc.outerStrokeColor = '#FF9800';
            };

            var finishRoutine = function finishRoutine() {
              jquery__WEBPACK_IMPORTED_MODULE_11__(sLogoEle).css('transform', 'unset');
              _this6.progCirc.percent = 100;
              jquery__WEBPACK_IMPORTED_MODULE_11__(starEle).css('transform', 'rotate(0deg)');
              _this6.progCirc.outerStrokeColor = '#4caf50';

              _this6.myAniCSS('.hcl-progcirc.' + _this6.tabKey, 'fadeOut', 0, 1400, 'remove', 'hide');

              _this6.refresher.complete();

              _this6.isRefreshing = false;
            };

            if (mode === 'manual') {
              if (action === 'start') {
                startRoutine();
                this.progCirc.animation = true;
              }

              if (action === 'change') {
                this.progCirc.percent = data;
                jquery__WEBPACK_IMPORTED_MODULE_11__(starEle).css('transform', 'rotate(' + 360 * data / 100 + ')deg');
              }

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
                _this6.progCirc.percent += incPercEaLoop;
                starRotCount += rotStarEaLoop;
                jquery__WEBPACK_IMPORTED_MODULE_11__(starEle).css('transform', 'rotate(' + starRotCount + 'deg)');

                if (_this6.progCirc.percent >= 100) {
                  clearInterval(timedProgLoop);
                  finishRoutine();
                }
              }, 200);
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.logger.info('[TabNews|doRefresh] (event)...');
                      this.isRefreshing = true;
                      this.refresher = event.target;
                      this.headerProgress('timed', null, 3000);
                      this.refreshNewsData();

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "refreshNewsData",
          value: function refreshNewsData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.logger.info('[TabNews|refreshNewsData] ()...');
                      setTimeout(function () {
                        _this7.refresher.complete();
                      }, 3000);

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "disableRefresher",
          value: function disableRefresher(togV) {
            this.preventRefreshPull = togV;
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.logger.info('[TabNewsionViewWillLeave] ()...');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.logger.info('[TabNewsionViewDidLeave] ()...');
            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_11__('.hcl-leftbar.' + this.tabKey);
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_11__('.sheriff-title-leftanimbar-inner.' + this.tabKey);
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_11__('.sheriff-title.tight-wrap.' + this.tabKey);
            jquery__WEBPACK_IMPORTED_MODULE_11__(titleBar).css('width', '0');
            jquery__WEBPACK_IMPORTED_MODULE_11__(animBarEnd).removeClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_11__(titleText).removeClass('scrolledin');
            jquery__WEBPACK_IMPORTED_MODULE_11__(titleBar).removeClass('dimmed');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[TabNewsmyAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');

            var doAni = function doAni() {
              return new Promise(function (resolve) {
                var aniStr = 'animate__animated animate__' + aniName;
                var delStr = 'animDel-' + aniDel;
                var durStr = 'animDur-' + aniDur;
                jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).on('animationend', function () {
                  if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr);
                  }

                  if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).remove();
                  }

                  if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).css('display', 'none');
                  }

                  resolve(true);
                });

                if (aniDel > 0) {
                  jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).addClass(delStr);
                }

                if (aniDur > 0) {
                  jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).addClass(durStr);
                }

                if (jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).length > 0) {
                  jquery__WEBPACK_IMPORTED_MODULE_11__(theEle).addClass(aniStr);
                }
              });
            };

            doAni();
          }
        }]);

        return TabNewsPage;
      }();

      _TabNewsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
        }, {
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_16__.NGXLogger
        }, {
          type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_3__.SQLiteService
        }, {
          type: _services_detail_service__WEBPACK_IMPORTED_MODULE_4__.DetailService
        }, {
          type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_2__.DateTimeService
        }, {
          type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__.SyncService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
        }, {
          type: src_app_services_deputy_service__WEBPACK_IMPORTED_MODULE_6__.DeputyService
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_7__.EventsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PopoverController
        }];
      };

      _TabNewsPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScroll]
        }],
        newsContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
          args: ['newsContent', {
            "static": false
          }]
        }],
        newsRefresher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
          args: ['newsRefresher']
        }]
      };
      _TabNewsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-tabnews',
        template: _raw_loader_tabnews_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabnews_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _TabNewsPage);
      /***/
    },

    /***/
    50437:
    /*!************************************************!*\
      !*** ./src/app/tabs/tabnews/tabnews.page.scss ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJuZXdzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    67709:
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabnews/tabnews.page.html ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col tabnews\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar tabnews\">\n                                <div class=\"sheriff-title-leftanimbar-inner tabnews\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title tabnews\">\n                                    <div class=\"sheriff-title tight-wrap tabnews\">News</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring tabnews\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle tabnews hcl-progcirc tabnews\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star tabnews\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo tabnews\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button tabnews\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"main-tabnews-content-wrapper\" [scrollEvents]=\"false\">\n    <!-- PAGE REFRESHER -->\n    <ion-refresher #newsRefresher class=\"sheriff-refresher tabs news\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" disabled=\"{{preventRefreshPull}}\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <!-- TAB-CONTENT -->\n    <div class=\"sheriff-tabnews-mainpage-section-wrapper top-section\">\n        <!-- CONTENT HEADING -->\n        <div slot=\"fixed\" class=\"sheriff-tabcontent-mainheading-wrapper news\">\n            <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid news\">\n                <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 news\">\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 news\"></ion-col>\n                    <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 news\">\n                        <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-news.png\">\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 news\"></ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <ion-grid slot=\"fixed\" class=\"sheriff-grid tabnews header-div-grid\">\n            <ion-row size=\"12\" class=\"sheriff-row news-navbar-row navbar-gradborder-row bottom\">\n                <ion-col class=\"sheriff-col news-navbar-col navbar-gradborder-col bottom\"></ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <!-- ITEM LIST CONTENT -->\n    <ion-content [scrollEvents]=\"true\" class=\"sheriff-content tab-content news\" #tasksContent (ionScrollStart)=\"disableRefresher(true)\" (ionScrollEnd)=\"disableRefresher(false)\">\n        <div class=\"sheriff-tabcontent-itemlistcontent-wrapper news\">\n            <div *ngIf=\"noMemos\" class=\"sheriff-nomemos-outter-wrapper\">\n                <div class=\"sheriff-nomemos-inner-wrapper\">\n                    <div class=\"sheriff-nomemos-txt\">No News/Memos Found</div>\n                </div>\n            </div>\n            <ion-list *ngIf=\"!noMemos\" class=\"sheriff-tab-list sheriff-memo-list\">\n                <ion-item *ngFor=\"let memo of memos; let mi = index\" (click)=\"openDetail(memo)\" class=\"sheriff-item memo-item memo-{{memo.Id}}\">\n                    <ion-grid class=\"sheriff-grid memo-item-grid\">\n                        <ion-row class=\"sheriff-row memo-item-main-row\">\n                            <ion-col size=\"2\" class=\"sheriff-col memo-item-main-col1 ava-replies-confirm-col\">\n                                <div class=\"memo-item-ava-img-wrapper\">\n                                    <div class=\"memo-item-ava-img-value-wrapper\">\n                                        <img src=\"{{memo._DPMetaData.CreatorInfo.Photo}}\" class=\"memo-item-ava-img\">\n                                    </div>\n                                </div>\n                                <div *ngIf=\"memo._DPMetaData.RequireConfirmation\" class=\"memo-item-confirm-btn-wrapper\">\n                                    <ion-button *ngIf=\"memo._DPMetaData.RequireMyConfirm\" (click)=\"confirmMemo(memo)\" class=\"sheriff-btn memo-item-confirm-btn\">\n                                        <ion-icon class=\"sheriff-btn-ico confirm-memo-ico\" name=\"thumbs-up\"></ion-icon>\n                                        <div class=\"sheriff-btn-txt confirm-memo-txt\">Confirm</div>\n                                    </ion-button>\n                                    <div *ngIf=\"!memo._DPMetaData.RequireMyConfirm\" class=\"confirm-memo-isconfirmed-wrapper\">\n                                        <div class=\"confirm-memo-isconfirmed-inner\">\n                                            <div class=\"confirm-memo-isconfirmed-txt\">Confirmed</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"memo._DPMetaData.CanDelete\" class=\"memo-item-delete-btn-wrapper\">\n                                    <ion-button (click)=\"deleteMemo(memo.Id)\" class=\"sheriff-btn memo-item-delete-btn\">\n                                        <ion-icon class=\"sheriff-btn-ico delete-memo-ico\" name=\"trash\"></ion-icon>\n                                        <div class=\"sheriff-btn-txt confirm-memo-txt\">Delete</div>\n                                    </ion-button>\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"9\" class=\"sheriff-col memo-item-main-col2 who-when-content-col\">\n                                <ion-grid class=\"sheriff-grid memo-item-content-grid\">\n                                    <ion-row class=\"sheriff-row memo-item-content-row creator-row\">\n                                        <ion-col size=\"12\" class=\"sheriff-col memo-item-content-col creator-col\">{{memo._DPMetaData.CreatorInfo.DisplayName}}</ion-col>\n                                    </ion-row>\n                                    <ion-row class=\"sheriff-row memo-item-content-row dates-row\">\n                                        <ion-col size=\"12\" class=\"sheriff-col memo-item-content-col dates-col\">\n                                            <div class=\"memo-item-date-item-wrapper created\">\n                                                <ion-icon class=\"memo-item-date-item-ico created\" name=\"push\"></ion-icon>\n                                                <span class=\"memo-item-label-txt created\">Posted:</span>\n                                                <span class=\"memo-item-date-item-value created\">{{memo.nCreated}}</span>\n                                            </div>\n                                            <div *ngIf=\"memo.nModified!==memo.nCreated\" class=\"memo-item-date-item-wrapper modified\">\n                                                <ion-icon class=\"memo-item-date-item-ico modified\" name=\"create\"></ion-icon>\n                                                <span class=\"memo-item-label-txt modified\">Edited:</span>\n                                                <span class=\"memo-item-date-item-value modified\">{{memo.nModified}}</span>\n                                            </div>\n                                            <div *ngIf=\"memo.nShowFT!==null\" class=\"memo-item-date-item-wrapper showfromtill\">\n                                                <ion-icon class=\"memo-item-date-item-ico showfromtill\" name=\"eye\"></ion-icon>\n                                                <span class=\"memo-item-label-txt showfromtill\">Showing:</span>\n                                                <span class=\"memo-item-date-item-value showfrom\">{{memo.nShowFT.f}}</span>\n                                                <ion-icon class=\"memo-item-date-item-ico fwd-caret\" name=\"caret-forward\"></ion-icon>\n                                                <span class=\"memo-item-date-item-value showtill\">{{memo.nShowFT.t}}</span>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row class=\"sheriff-row memo-item-content-row recipients-row\">\n                                        <ion-col size=\"12\" class=\"sheriff-col memo-item-content-col recipients-col\">\n                                            <ion-icon class=\"memo-item-sentto-ico sentto\" name=\"send\"></ion-icon>\n                                            <div class=\"memo-item-label-txt sentto\">Sent to:</div>\n                                            <div *ngIf=\"memo._DPMetaData.AssignedUsers.length>1\" class=\"memo-item-sentto-wrapper people\">\n                                                <div (click)=\"showPeoplePop($event,memo)\" class=\"memo-item-sentto-group-countshow people\">\n                                                    <div class=\"memo-item-senttocount-value\">\n                                                        {{memo._DPMetaData.AssignedUsers.length}}\n                                                        <ion-icon class=\"memo-item-sentto-ico people\" name=\"people\"></ion-icon>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"memo._DPMetaData.Companies.length>0\" class=\"memo-item-sentto-wrapper companies\">\n                                                <div class=\"memo-item-senttocount-value\">\n                                                    {{memo._DPMetaData.Companies.length}}\n                                                    <ion-icon class=\"memo-item-sentto-ico companies\" name=\"business\"></ion-icon>\n                                                    <span class=\"memo-senttocompany-wrapper\" *ngFor=\"let c of memo._DPMetaData.Companies;let ci=index\">\n                                                      <span [ngStyle]=\"{'color':c.Code===this.workName?workColor:'#eee','filter':incBright===true?'brightness(2.5)':'brightness(1)'}\" class=\"memo-senttocompany-name\">{{c.Code}}</span>\n                                                    </span>\n                                                </div>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row class=\"sheriff-row memo-item-content-row message-text-row\">\n                                        <ion-col *ngIf=\"memo.Title!==null&&memo.Title!==undefined&&memo.Title!==''\" size=\"12\" class=\"sheriff-col memo-item-content-col message-text-title-col\">{{memo.Title}}</ion-col>\n                                        <ion-col size=\"12\" class=\"sheriff-col memo-item-content-col message-text-content-col\">\n                                            <div class=\"memo-item-content-message-wrapper\">\n                                                {{memo.nContent}}<span *ngIf=\"memo.nContentTrim\"><ion-icon class=\"memo-content-trim-dots\" name=\"ellipsis-horizontal\"></ion-icon></span>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col size=\"12\" *ngIf=\"memo.File!==null&&memo.File!==undefined&&memo.File!==''&&memo.File>0\" class=\"sheriff-col memo-item-content-col message-text-file-col\">\n                                            <ion-icon class=\"memo-item-ico file-ico\" name=\"document\"></ion-icon>\n                                            <span class=\"memo-item-label-txt file\">Files:</span>\n                                            <div *ngFor=\"let file of memo._DPMetaData.Files\" class=\"memo-item-file-objects-wrapper\">\n                                                <span class=\"memo-item-value-txt file\">{{file.Id}}</span>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col size=\"12\" *ngIf=\"memo.Url!==null&&memo.Url!==undefined&&memo.Url!==''\" class=\"sheriff-col memo-item-content-col message-text-url-col\">\n                                            <ion-icon class=\"memo-item-ico url-ico\" name=\"link\"></ion-icon>\n                                            <span class=\"memo-item-label-txt url\">Links:</span>\n                                            <span class=\"memo-item-value-txt url\"><a href=\"{{memo.Url}}\">{{memo.Url}}</a></span>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-col>\n                            <ion-col size=\"1\" class=\"sheriff-col memo-item-main-col1 detail-delete-ico-col\">\n                                <div class=\"memo-item-reply-count-wrapper\">\n                                    <div [ngStyle]=\"{color:memo._DPMetaData.Comments.length>0?'var(--ion-color-success)':'#565656'}\" class=\"memo-reply-count-value-wrapper\">\n                                        <ion-icon [ngStyle]=\"{color:memo._DPMetaData.Comments.length>0?'var(--ion-color-success)':'#565656'}\" class=\"memo-replycount-ico\" name=\"chatbubbles\"></ion-icon>\n                                        <span [ngStyle]=\"{color:memo._DPMetaData.Comments.length>0?'var(--ion-color-success)':'#565656'}\" class=\"memo-replycount-txt\">{{memo._DPMetaData.Comments.length}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"memo-item-detaildelete-wrapper\">\n                                    <ion-icon *ngIf=\"!editMode\" name=\"chevron-forward\" class=\"memo-item-detail-delete-ico detail-ico\"></ion-icon>\n                                    <ion-icon *ngIf=\"editMode\" name=\"close\" class=\"memo-item-detail-delete-ico delete-ico\"></ion-icon>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n            </ion-list>\n            <!-- END OF LIST CARD -->\n            <ion-card *ngIf=\"endOfList\" class=\"sheriff-card tab-list-card endoflist-card animate__animated animate__zoomIn animate__fast\">\n                <div class=\"sheriff-endoflist-card-wrapper\">End of News Memos</div>\n            </ion-card>\n            <!-- I-SCROLL FEEDER -->\n            <ion-infinite-scroll class=\"sheriff-iscroll news\" threshold=\"25%\" (ionInfinite)=\"feedItems($event)\">\n                <ion-infinite-scroll-content loadingSpinner=null class=\"sheriff-iscroll-content news\">\n                    <ion-grid class=\"sheriff-iscrollcontent-grid\">\n                        <ion-row class=\"sheriff-row inf-loading-row\">\n                            <ion-col class=\"sheriff-col inf-loading-col spinleft\" size=\"4\">\n                                <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner\" name=\"dots\"></ion-spinner>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col inf-loading-col textmiddle\" size=\"4\">loading\n                                <div class=\"info-load-batch-wrapper\"><span class=\"inf-load-batch-start\">{{batchStart}}</span><span class=\"inf-load-batch-hyphen\">-</span><span class=\"inf-load-batch-end\">{{batchEnd}}</span></div>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col inf-loading-col spinright\" size=\"4\">\n                                <ion-spinner duration=\"750\" class=\"sheriff-infscroll-loading-spinner right\" name=\"dots\"></ion-spinner>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </ion-content>\n</ion-content>\n<!-- ADD NEWS FAB -->\n<ion-fab *ngIf=\"!editMode\" (click)=\"addMemo()\" class=\"sheriff-fab news-addmemo-fab tablistfab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"sheriff-fab-button addmemo-fab-btn\">\n        <img class=\"sheriff-fade-nav-btn-img addnewsico\" src=\"../../../assets/img/sheriff-fab-addnews-ico.png\">\n    </ion-fab-button>\n</ion-fab>\n<!-- SHOW OPTIONS FAB -->\n<ion-fab class=\"sheriff-fader-fab tabtsheets\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <div class=\"sheriff-fade-nav-btn-wrapper tabtsheets ion-activatable ripple-parent\">\n        <img class=\"sheriff-fade-nav-btn-img\" src=\"../../../assets/img/sheriff-fadenavbtn.png\">\n        <ion-ripple-effect></ion-ripple-effect>\n    </div>\n</ion-fab>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabnews_tabnews_module_ts-es5.js.map