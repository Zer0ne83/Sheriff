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

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_settings_settings_module_ts"], {
    /***/
    27075:
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageModule": function SettingsPageModule() {
          return (
            /* binding */
            _SettingsPageModule
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.page */
      7162);

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
      }];

      var _SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      _SettingsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage]
      })], _SettingsPageModule);
      /***/
    },

    /***/
    7162:
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPage": function SettingsPage() {
          return (
            /* binding */
            _SettingsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./settings.page.html */
      14718);
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page.scss */
      69519);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _modals_alertschedule_alertschedule_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../modals/alertschedule/alertschedule.page */
      20060);
      /* harmony import */


      var _services_deputy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/deputy.service */
      22092);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/events.service */
      80106);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/storage.service */
      71188);
      /* harmony import */


      var _services_filesystem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../services/filesystem.service */
      22904);
      /* harmony import */


      var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/sqlite.service */
      90636);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/datetime.service */
      12826);
      /* harmony import */


      var _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/notifications.service */
      79744);
      /* harmony import */


      var _services_calendar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/calendar.service */
      49603);
      /* harmony import */


      var _services_push_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/push.service */
      52314);
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/firebase.service */
      19446);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @capacitor/keyboard */
      87730);
      /* harmony import */


      var _capacitor_action_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @capacitor/action-sheet */
      54025);
      /* harmony import */


      var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @capacitor/dialog */
      63540);
      /* harmony import */


      var _capacitor_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @capacitor/app */
      42138);
      /* harmony import */


      var _services_appTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../services/appTypes */
      38670);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__); ////////////////////////////////////////////////////////////////////////////////////////


      var _SettingsPage = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////
        function SettingsPage(logger, platform, router, evServ, storeServ, deputy, fileServ, sqlServ, dT, noteServ, modalCtrl, calServ, fireServ, pushServ) {
          _classCallCheck(this, SettingsPage);

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
          this.domDataReady = false;
          this.saveSettInProg = false;
          this.noofOpts = {
            alerts: 4,
            database: 1,
            payrates: 1,
            profile: 1,
            snoop: 1
          };
          this.appSettings = null; // Database Vars

          this.hasDBBU = null;
          this.dbBUItem = null;
          this.dbBUDLUrl = null;
          this.dbBUMeta = null;
          this.dbBUNewData = null;
          this.dbBUManAct = null;
          this.dbBUULPerc = 0;
          this.dbBUULStatus = null;
          this.dbBUError = null; // Alert Vars

          this.notePerms = null;
          this.calPerms = null;
          this.calList = [];
          this.alertSchedShowing = false;
          this.isRescheduling = false;
          this.delayedRSCount = 0;
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('[Settings|ngOnInit] ()...');
                      this.platform.ready().then(function () {
                        _this.pageEnterAnim();

                        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_13__.Keyboard.removeAllListeners();

                        _this.loadOptionStates();
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.logger.info('[Settings|ionViewWillEnter] ()...');
            setTimeout(function () {
              _this2.evServ.publish('doPageEnterAnim', null);
            }, 300);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "loadOptionStates",
          value: function loadOptionStates() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var savedSettingsObj, localRes, fireRes, _i, _Object$entries, _Object$entries$_i, key, value, oK, oV, aOAMV;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[Settings|loadOptionStates] ()...');
                      _context2.next = 3;
                      return this.sqlServ.getSettings();

                    case 3:
                      localRes = _context2.sent;

                      if (!localRes.result) {
                        _context2.next = 8;
                        break;
                      }

                      savedSettingsObj = localRes.data;
                      _context2.next = 12;
                      break;

                    case 8:
                      _context2.next = 10;
                      return this.fireServ.getSettingsValue(null);

                    case 10:
                      fireRes = _context2.sent;

                      if (fireRes.result && fireRes.data !== null) {
                        savedSettingsObj = fireRes.data;
                      } else {
                        savedSettingsObj = (0, _services_appTypes__WEBPACK_IMPORTED_MODULE_17__.defaultAUSettings)();
                        this.evServ.showToast('warning', 'Using Default Settings');
                      }

                    case 12:
                      ;
                      this.appSettings = savedSettingsObj;
                      _i = 0, _Object$entries = Object.entries(this.appSettings);

                    case 15:
                      if (!(_i < _Object$entries.length)) {
                        _context2.next = 44;
                        break;
                      }

                      _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                      oK = key.toString();
                      oV = value;
                      _context2.t0 = oK;
                      _context2.next = _context2.t0 === 'alerts' ? 22 : _context2.t0 === 'database' ? 38 : 41;
                      break;

                    case 22:
                      aOAMV = oV.options.alertMethods.value;

                      if (!aOAMV.phone) {
                        _context2.next = 29;
                        break;
                      }

                      _context2.next = 26;
                      return this.checkNotePerms();

                    case 26:
                      if (_context2.sent) {
                        _context2.next = 29;
                        break;
                      }

                      this.changeAlertMethods('phone', false);
                      this.noteServ.noteGetPerms();

                    case 29:
                      ;

                      if (!aOAMV.calendar) {
                        _context2.next = 36;
                        break;
                      }

                      _context2.next = 33;
                      return this.checkCalPerms();

                    case 33:
                      if (_context2.sent) {
                        _context2.next = 36;
                        break;
                      }

                      this.changeAlertMethods('calendar', false);
                      this.calServ.reqCalPerms();

                    case 36:
                      ;
                      return _context2.abrupt("break", 41);

                    case 38:
                      if (oV.options.backupMode.value !== 'none') {
                        this.getDBBUInfo('init');
                      }

                      ;
                      return _context2.abrupt("break", 41);

                    case 41:
                      _i++;
                      _context2.next = 15;
                      break;

                    case 44:
                      ;
                      this.calList = this.calServ.calList;
                      this.selectedCal = this.calServ.selectedCal;
                      _context2.next = 49;
                      return this.saveSettObj();

                    case 49:
                      this.domDataReady = true;

                    case 50:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "saveSettObj",
          value: function saveSettObj() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var sT, didDB, didFire, consM;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.saveSettInProg) {
                        _context3.next = 29;
                        break;
                      }

                      sT = new Date();
                      didDB = false, didFire = false;
                      this.logger.info('[Settings|saveSettObj] (STARTED) >>> Saving Updated appSettings Object...');
                      this.saveSettInProg = true;

                      consM = function consM(r, dfs) {
                        var rT, dfT;
                        r === 's' ? rT = 'SUCCESS' : rT = 'ERROR';
                        dfs === 'd' ? dfT = 'SQLite/Details/Storage' : dfT = 'Firebase';
                        var m = '[Settings|saveSettObj] (' + rT + ') Save Settings Obj to ' + dfT;

                        _this3.logger.info(m);
                      };

                      _context3.next = 8;
                      return this.sqlServ.setSettings(this.appSettings);

                    case 8:
                      if (!_context3.sent) {
                        _context3.next = 13;
                        break;
                      }

                      didDB = true;
                      consM('s', 'd');
                      _context3.next = 14;
                      break;

                    case 13:
                      consM('e', 'd');

                    case 14:
                      ;
                      _context3.next = 17;
                      return this.fireServ.setFireSettingsDoc(null, this.appSettings);

                    case 17:
                      if (!_context3.sent) {
                        _context3.next = 22;
                        break;
                      }

                      didFire = true;
                      consM('s', 'f');
                      _context3.next = 23;
                      break;

                    case 22:
                      consM('e', 'f');

                    case 23:
                      ;
                      this.saveSettInProg = false;
                      this.logger.info('[Settings|saveSettObj] (FINISHED) after ' + this.evServ.getDur(sT) + 'ms - >>> Results: SQLite=' + String(didDB) + ', FireDoc=' + String(didFire));
                      return _context3.abrupt("return", Promise.resolve(true));

                    case 29:
                      this.logger.info('[Settings|sSObj] [WARNING] Already Running - Skipping.');
                      return _context3.abrupt("return", Promise.resolve(true));

                    case 31:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "toggleOptInfo",
          value: function toggleOptInfo(optSec, optProp) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var oldInfoV, newInfoV;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.logger.info('[Settings|toggleOptInfo] (' + optSec + ',' + optProp + ')...');
                      oldInfoV = Boolean(this.appSettings[String(optSec)].options[String(optProp)].info);
                      oldInfoV ? newInfoV = false : newInfoV = true;

                      if (!(oldInfoV !== newInfoV)) {
                        _context4.next = 7;
                        break;
                      }

                      this.appSettings[String(optSec)].options[String(optProp)].info = newInfoV;
                      _context4.next = 7;
                      return this.saveSettObj();

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "sectionVisToggle",
          value: function sectionVisToggle(sectionName, visValue) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var oldSVisVal, newSVisVal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.logger.info('[Settings|sectionVisToggle] (' + sectionName + ',' + visValue + ')...');
                      oldSVisVal = Boolean(visValue);
                      oldSVisVal ? newSVisVal = false : newSVisVal = true;

                      if (!(oldSVisVal !== newSVisVal)) {
                        _context5.next = 7;
                        break;
                      }

                      this.appSettings[sectionName].showSection = newSVisVal;
                      _context5.next = 7;
                      return this.saveSettObj();

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "changeDatabaseOpts",
          value: function changeDatabaseOpts(optProp, optVal) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _yield$_capacitor_dia, value;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.logger.info('[Settings|changeDatabaseOpts] (' + optProp + ',' + optVal + ')...');

                      if (!(optProp === 'backupMode' && optVal === 'none' && this.hasDBBU)) {
                        _context6.next = 9;
                        break;
                      }

                      _context6.next = 4;
                      return _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog.confirm({
                        title: 'Confirm No Backups',
                        message: 'WARNING: Existing backup will be DELETED. OK to proceed?',
                        okButtonTitle: 'Yes, Proceed'
                      });

                    case 4:
                      _yield$_capacitor_dia = _context6.sent;
                      value = _yield$_capacitor_dia.value;

                      if (value) {
                        this.logger.info('[Settings|changeDatabaseOpts] (autobackup > "none") User Confirmed - Deleting Backup...');
                        this.dbBUAction('delete');
                        this.appSettings.database.options[optProp].value = optVal;
                        this.saveSettObj();
                      } else {
                        this.evServ.showToast('cross', 'Cancelled');
                        this.databaseAutobackupRG.value = this.appSettings.database.options.backupMode.value;
                      }

                      _context6.next = 11;
                      break;

                    case 9:
                      this.appSettings.database.options[optProp].value = optVal;
                      this.saveSettObj();

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "changeAlertMethods",
          value: function changeAlertMethods(optName, optActive) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this4 = this;

              var oldAMethodV, newAMethodV, reqP, checkP, rsF, gotP;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.logger.info('[Settings|changeAlertMethods] (' + optName + ',' + optActive + ')...');
                      oldAMethodV = Boolean(this.appSettings.alerts.options.alertMethods.value[String(optName)]);
                      newAMethodV = Boolean(optActive);

                      reqP = function reqP() {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  if (!(String(optName) === 'phone')) {
                                    _context7.next = 6;
                                    break;
                                  }

                                  _context7.next = 3;
                                  return this.noteServ.reqP();

                                case 3:
                                  return _context7.abrupt("return", Promise.resolve(true));

                                case 6:
                                  _context7.next = 8;
                                  return this.calServ.reqCalPerms();

                                case 8:
                                  return _context7.abrupt("return", Promise.resolve(true));

                                case 9:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      };

                      checkP = function checkP() {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  if (!(String(optName) === 'phone')) {
                                    _context8.next = 10;
                                    break;
                                  }

                                  _context8.next = 3;
                                  return this.noteServ.permOK();

                                case 3:
                                  if (!_context8.sent) {
                                    _context8.next = 7;
                                    break;
                                  }

                                  return _context8.abrupt("return", Promise.resolve(true));

                                case 7:
                                  return _context8.abrupt("return", Promise.resolve(false));

                                case 8:
                                  _context8.next = 17;
                                  break;

                                case 10:
                                  _context8.next = 12;
                                  return this.calServ.checkCalPerms();

                                case 12:
                                  if (!_context8.sent) {
                                    _context8.next = 16;
                                    break;
                                  }

                                  return _context8.abrupt("return", Promise.resolve(true));

                                case 16:
                                  return _context8.abrupt("return", Promise.resolve(false));

                                case 17:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      };

                      if (!(oldAMethodV !== newAMethodV)) {
                        _context9.next = 32;
                        break;
                      }

                      if (String(optName) !== 'email') {
                        this.isRescheduling = true;
                        rsF = this.evServ.subscribe('reschedFinish', function () {
                          _this4.isRescheduling = false;
                          rsF.unsubscribe();
                        });
                      }

                      ;

                      if (!newAMethodV) {
                        _context9.next = 17;
                        break;
                      }

                      _context9.next = 11;
                      return checkP();

                    case 11:
                      gotP = _context9.sent;

                      if (gotP) {
                        _context9.next = 17;
                        break;
                      }

                      _context9.next = 15;
                      return reqP();

                    case 15:
                      this.changeAlertMethods(optName, newAMethodV);
                      return _context9.abrupt("return");

                    case 17:
                      ;
                      this.appSettings.alerts.options.alertMethods.value[String(optName)] = newAMethodV;
                      _context9.next = 21;
                      return this.saveSettObj();

                    case 21:
                      _context9.t0 = optName;
                      _context9.next = _context9.t0 === 'phone' ? 24 : _context9.t0 === 'calendar' ? 27 : _context9.t0 === 'email' ? 30 : 32;
                      break;

                    case 24:
                      _context9.next = 26;
                      return this.noteServ.updateNoteSetting();

                    case 26:
                      return _context9.abrupt("break", 32);

                    case 27:
                      _context9.next = 29;
                      return this.calServ.updateCalSettings();

                    case 29:
                      return _context9.abrupt("break", 32);

                    case 30:
                      this.evServ.publish('alertsStatus', true);
                      return _context9.abrupt("break", 32);

                    case 32:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "changeAlertEvents",
          value: function changeAlertEvents(optName, optActive) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this5 = this;

              var oldAEventV, newAEventV, rsC, rsF, aMEmailV, aEvO;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.logger.info('[Settings|changeAlertEvents] (' + optName + ',' + optActive + ')...');
                      oldAEventV = Boolean(this.appSettings.alerts.options.alertEvents.value[String(optName)]);
                      newAEventV = Boolean(optActive);

                      if (!(oldAEventV !== newAEventV)) {
                        _context10.next = 22;
                        break;
                      }

                      this.isRescheduling = true;
                      this.appSettings.alerts.options.alertEvents.value[String(optName)] = newAEventV;
                      _context10.next = 8;
                      return this.saveSettObj();

                    case 8:
                      if (!(String(optName) !== 'tsheet')) {
                        _context10.next = 17;
                        break;
                      }

                      rsC = 0;
                      rsF = this.evServ.subscribe('reschedFinish', function () {
                        rsC++;

                        if (rsC > 1) {
                          _this5.isRescheduling = false;
                          rsF.unsubscribe();
                        }
                      });
                      _context10.next = 13;
                      return this.noteServ.updateNoteSetting();

                    case 13:
                      _context10.next = 15;
                      return this.calServ.updateCalSettings();

                    case 15:
                      _context10.next = 18;
                      break;

                    case 17:
                      this.isRescheduling = false;

                    case 18:
                      ;
                      aMEmailV = Boolean(this.appSettings.alerts.options.alertMethods.value.email);
                      aEvO = this.appSettings.alerts.options.alertEvents.value;
                      this.evServ.publish('alertsStatus', true);

                    case 22:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "changeAlertBefore",
          value: function changeAlertBefore(optName, newRange) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this6 = this;

              var newValue, newABeforeObj, oldABeforeObj, rsC, rsF;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.logger.info('[Settings|changeAlertBefore] (' + optName + ',' + newRange + ')');
                      newValue = (0, _services_appTypes__WEBPACK_IMPORTED_MODULE_17__.AUSAlertRange2Value)(optName, Number(newRange));
                      newABeforeObj = {
                        range: Number(newRange),
                        mins: newValue
                      };
                      oldABeforeObj = this.appSettings.alerts.options.alertBefore.value[optName];

                      if (lodash__WEBPACK_IMPORTED_MODULE_19__.isEqual(oldABeforeObj, newABeforeObj)) {
                        _context11.next = 20;
                        break;
                      }

                      this.isRescheduling = true;
                      this.appSettings.alerts.options.alertBefore.value[optName] = newABeforeObj;
                      _context11.next = 9;
                      return this.saveSettObj();

                    case 9:
                      if (!(String(optName) !== 'tsheet')) {
                        _context11.next = 18;
                        break;
                      }

                      rsC = 0;
                      rsF = this.evServ.subscribe('reschedFinish', function () {
                        rsC++;

                        if (rsC > 1) {
                          _this6.isRescheduling = false;
                          rsF.unsubscribe();
                        }
                      });
                      _context11.next = 14;
                      return this.noteServ.updateNoteSetting();

                    case 14:
                      _context11.next = 16;
                      return this.calServ.updateCalSettings();

                    case 16:
                      _context11.next = 19;
                      break;

                    case 18:
                      this.isRescheduling = false;

                    case 19:
                      ;

                    case 20:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "alertCalSelect",
          value: function alertCalSelect(selCal) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this7 = this;

              var myCalOs, i, sameI, cancelI, calSelRes, newCalSelName, newCalSelObj, oldCalId, newCalId, rsF;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.logger.info('[Settings|alertCalSelect] ()...');
                      myCalOs = [];
                      myCalOs.push({
                        title: "\uD83D\uDFE2 " + selCal.name + ' (𝘚𝘦𝘭𝘦𝘤𝘵𝘦𝘥)'
                      });

                      for (i = 0; i < this.calList.length; i++) {
                        if (this.calList[i].name !== selCal.name) {
                          myCalOs.push({
                            title: "\uD83D\uDD18 " + this.calList[i].name
                          });
                        }
                      }

                      ;
                      myCalOs.push({
                        title: "\u274C CANCEL"
                      });
                      sameI = 0;
                      cancelI = myCalOs.length - 1;
                      _context12.next = 10;
                      return _capacitor_action_sheet__WEBPACK_IMPORTED_MODULE_14__.ActionSheet.showActions({
                        title: 'Select Alert Calendar',
                        options: myCalOs
                      });

                    case 10:
                      calSelRes = _context12.sent;

                      if (!(calSelRes.index === cancelI)) {
                        _context12.next = 15;
                        break;
                      }

                      this.evServ.showToast('cross', 'Select Calendar Cancelled');
                      _context12.next = 33;
                      break;

                    case 15:
                      if (!(calSelRes.index === sameI)) {
                        _context12.next = 19;
                        break;
                      }

                      this.evServ.showToast('warning', 'Same Calendar Selected');
                      _context12.next = 33;
                      break;

                    case 19:
                      newCalSelName = myCalOs[calSelRes.index].title.replace("\uD83D\uDD18 ", '');
                      newCalSelObj = this.calList.filter(function (c) {
                        return c.name === newCalSelName;
                      })[0];
                      oldCalId = String(this.appSettings.alerts.options.alertCal.value);
                      newCalId = String(newCalSelObj.id);

                      if (!(oldCalId !== newCalId)) {
                        _context12.next = 33;
                        break;
                      }

                      this.evServ.showToast('success', 'Alert Calendar: ' + this.selectedCal.name);
                      this.isRescheduling = true;
                      this.selectedCal = newCalSelObj;
                      this.appSettings.alerts.options.alertCal.value = newCalId;
                      _context12.next = 30;
                      return this.saveSettObj();

                    case 30:
                      rsF = this.evServ.subscribe('reschedFinish', function () {
                        _this7.isRescheduling = false;
                        rsF.unsubscribe();
                      });
                      _context12.next = 33;
                      return this.calServ.updateCalSettings();

                    case 33:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "toggleShowPR",
          value: function toggleShowPR(optActive) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this8 = this;

              var oldSIncomeV, newSIncomeV, rsC, rsF;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.logger.info('[Settings|toggleShowPR] (' + optActive + ')...');
                      oldSIncomeV = Boolean(this.appSettings.payrates.options.show.value);
                      newSIncomeV = Boolean(optActive);

                      if (!(oldSIncomeV !== newSIncomeV)) {
                        _context13.next = 14;
                        break;
                      }

                      this.isRescheduling = true;
                      rsC = 0;
                      rsF = this.evServ.subscribe('reschedFinish', function () {
                        rsC++;

                        if (rsC > 1) {
                          _this8.isRescheduling = false;
                          rsF.unsubscribe();
                        }
                      });
                      this.appSettings.payrates.options.show.value = newSIncomeV;
                      _context13.next = 10;
                      return this.saveSettObj();

                    case 10:
                      _context13.next = 12;
                      return this.noteServ.updateNoteSetting();

                    case 12:
                      _context13.next = 14;
                      return this.calServ.updateCalSettings();

                    case 14:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "toggleSyncProfile",
          value: function toggleSyncProfile(optActive) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var oldASyncV, newASyncV;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.logger.info('[Settings|toggleSyncProfile] (' + optActive + ')...');
                      oldASyncV = Boolean(this.appSettings.profile.options.alwaysSync.value);
                      newASyncV = Boolean(optActive);

                      if (!(oldASyncV !== newASyncV)) {
                        _context14.next = 7;
                        break;
                      }

                      this.appSettings.profile.options.alwaysSync.value = newASyncV;
                      _context14.next = 7;
                      return this.saveSettObj();

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } //--------------------------------------------------------------------------------------

        }, {
          key: "toggleSnoop",
          value: function toggleSnoop(optActive) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var oldSnoopV, newSnoopV;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.logger.info('[Settings|toggleSnoop] (' + optActive + ')...');
                      oldSnoopV = Boolean(this.appSettings.snoop.options.activated.value);
                      newSnoopV = Boolean(optActive);

                      if (!(oldSnoopV !== newSnoopV)) {
                        _context15.next = 7;
                        break;
                      }

                      this.appSettings.snoop.options.activated.value = newSnoopV;
                      _context15.next = 7;
                      return this.saveSettObj();

                    case 7:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getDBBUInfo",
          value: function getDBBUInfo(mode) {
            var _this9 = this;

            this.logger.info('[Settings|initFireDBBU] ()...');
            this.evServ.subscribe('checkFSDBBU', function (checkRes) {
              if (checkRes.result) {
                _this9.evServ.destroy('checkFSDBBU');

                _this9.updateDBBUMeta({
                  meta: checkRes.data.meta,
                  dlurl: checkRes.data.dlurl
                });

                _this9.hasDBBU = true;

                if (mode === 'init') {
                  _this9.evServ.publish('initStep', 'dbOpts');
                }

                ;
              } else {
                var errCode = checkRes.data;

                switch (errCode) {
                  case 'storage/object-not-found':
                    _this9.dbBUError = 'No Backup Found';
                    break;

                  case 'storage/unauthorized':
                    _this9.dbBUError = 'Error: Unauthorised';
                    break;

                  case 'storage/canceled':
                    _this9.dbBUError = 'Fetch Cancelled';
                    break;

                  case 'storage/unknown':
                    _this9.dbBUError = 'Unknown Error';
                    break;
                }

                ;

                if (_this9.dbBUItem !== null) {
                  _this9.dbBUItem = null;
                }

                ;

                if (_this9.dbBUDLUrl !== null) {
                  _this9.dbBUDLUrl = null;
                }

                ;

                if (_this9.dbBUMeta !== null) {
                  _this9.dbBUMeta = null;
                }

                ;
                _this9.hasDBBU = false;

                if (mode === 'init') {
                  _this9.evServ.publish('initStep', 'dbOpts');
                }
              }
            });
            this.fireServ.checkFSDBBU();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "updateDBBUMeta",
          value: function updateDBBUMeta(metaObj) {
            var _this10 = this;

            this.logger.info('[Settings|updateDBBUMeta] (metaObj)...');
            var isInit;
            var prevSize = null;
            var prevDate = null;

            if (this.dbBUItem !== null) {
              isInit = false;
              prevSize = this.dbBUItem.size;
              prevDate = this.dbBUItem.date;
            } else {
              isInit = true;
            }

            ;
            var buMeta = metaObj.meta;
            this.dbBUMeta = metaObj.meta;
            this.dbBUDLUrl = metaObj.dlurl;
            var niceSize = this.niceBytes(buMeta.size, 2);
            var niceDate = this.dT.format(new Date(buMeta.updated), 'dd/MM/yy H:mm');
            this.dbBUItem = {
              name: 'Cloud Backup',
              date: niceDate,
              size: niceSize
            };

            if (!isInit) {
              setTimeout(function () {
                if (_this10.dbBUItem.size !== prevSize || _this10.dbBUItem.date !== prevDate) {
                  _this10.dbBUNewData = true;
                  setTimeout(function () {
                    _this10.dbBUNewData = false;
                  }, 1500);
                }
              }, 1500);
            }
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "uploadDBBU",
          value: function uploadDBBU() {
            var _this11 = this;

            this.logger.info('[Settings|uploadFireDBBU] ()...');
            var instOnce = 0;
            this.evServ.subscribe('dbbuBlob', function (blob) {
              _this11.evServ.destroy('dbbuBlob');

              _this11.evServ.subscribe('dbbuULProg', function (ulD) {
                switch (ulD.event) {
                  case 'running':
                    if (instOnce === 0) {
                      instOnce++;
                      _this11.dbBUULStatus = 'inprog';
                    }

                    ;
                    _this11.dbBUULPerc = ulD.data.perc;
                    break;

                  case 'successData':
                    _this11.dbBUManAct = {
                      action: 'create',
                      stage: 'success'
                    };
                    _this11.dbBUULStatus = 'success';
                    _this11.dbBUULPerc = 100;
                    _this11.hasDBBU = true;

                    _this11.updateDBBUMeta({
                      meta: ulD.data.meta,
                      dlurl: ulD.data.dlurl
                    });

                    _this11.evServ.showToast('success', 'Backup Successful');

                    setTimeout(function () {
                      _this11.dbBUManAct = null;
                      _this11.dbBUULStatus = null;
                      _this11.dbBUULPerc = 0;

                      _this11.evServ.destroy('dbbuULProg');
                    }, 1500);
                    break;

                  case 'errorData':
                    _this11.dbBUManAct = {
                      action: 'create',
                      stage: 'error'
                    };
                    _this11.dbBUULStatus = 'error';
                    _this11.hasDBBU = false;

                    _this11.evServ.showToast('error', 'Backup Error');

                    _this11.getDBBUInfo('refresh');

                    setTimeout(function () {
                      _this11.dbBUManAct = null;
                      _this11.dbBUULStatus = null;
                      _this11.dbBUULPerc = 0;

                      _this11.evServ.destroy('dbbuULProg');
                    }, 1500);
                    break;
                }
              });

              _this11.fireServ.uploadFSDBBU(blob);
            });
            this.fileServ.getFireDBBUFile(this.deputy.uUK);
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "installDBBU",
          value: function installDBBU() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this12 = this;

              var isOlder, isSmaller, dbStat, dbUTS, dbSize, buUTS, buSize, warnMsg, _yield$_capacitor_dia2, value;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.logger.info('[Settings|installDBBU] ()...');
                      _context17.next = 3;
                      return this.fileServ.getCurrentDBStat(this.deputy.uUK);

                    case 3:
                      dbStat = _context17.sent.data;
                      dbStat.mtime >= dbStat.ctime ? dbUTS = dbStat.mtime / 1000 : dbUTS = dbStat.ctime / 1000;
                      dbSize = dbStat.size;
                      buUTS = this.dT.getUT(new Date(this.dbBUMeta.updated));
                      buSize = this.dbBUMeta.size;
                      dbUTS > buUTS ? isOlder = true : isOlder = false;
                      dbSize > buSize ? isSmaller = true : isSmaller = false;

                      if (!isOlder && !isSmaller) {
                        warnMsg = '';
                      } else {
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
                      _context17.next = 14;
                      return _capacitor_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog.confirm({
                        title: 'Confirm DB Install',
                        message: '' + warnMsg + 'Installing a Backup will REPLACE your Active DB and RESTART the App.\n\nAre you SURE you want to proceed?',
                        okButtonTitle: 'Yes, Proceed'
                      });

                    case 14:
                      _yield$_capacitor_dia2 = _context17.sent;
                      value = _yield$_capacitor_dia2.value;

                      if (value) {
                        this.logger.info('[Settings|dbBUAction|Install] (Install Warning) - User Confirmed - Installing & Reloading App...');
                        this.sqlServ.lrQC();
                        this.evServ.subscribe('cpRevertDBDone', function (rvD) {
                          _this12.evServ.destroy('cpRevertDBDone');

                          _this12.logger.info('[Settings|dbBUAction|Install] (Create Revert DB) SUCCESS: ' + rvD.uri);

                          _this12.storeServ.setObject('newDBInstall', rvD);

                          setTimeout(function () {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                              var _this13 = this;

                              var dlInstallBURes;
                              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                                while (1) {
                                  switch (_context16.prev = _context16.next) {
                                    case 0:
                                      this.evServ.subscribe('installBUDBDone', function (insD) {
                                        _this13.evServ.destroy('installDBDBDone');

                                        if (insD) {
                                          _this13.evServ.showToast('warning', 'DB Installed - Restart Sheriff!');

                                          _this13.dbBUManAct = {
                                            action: 'install',
                                            stage: 'success'
                                          };
                                          setTimeout(function () {
                                            _this13.dbBUManAct = null;
                                          }, 1500);
                                          setTimeout(function () {
                                            _capacitor_app__WEBPACK_IMPORTED_MODULE_16__.App.exitApp();
                                          }, 2000);
                                        } else {
                                          _this13.evServ.showToast('error', 'DB Install Failed');

                                          _this13.dbBUManAct = {
                                            action: 'install',
                                            stage: 'fail'
                                          };
                                          setTimeout(function () {
                                            _this13.dbBUManAct = null;
                                          }, 1500);
                                        }
                                      });
                                      _context16.next = 3;
                                      return this.fileServ.dlFireBUForInstall(this.dbBUDLUrl);

                                    case 3:
                                      dlInstallBURes = _context16.sent;

                                      if (!dlInstallBURes) {
                                        _context16.next = 8;
                                        break;
                                      }

                                      this.sqlServ.installFireBU();
                                      _context16.next = 11;
                                      break;

                                    case 8:
                                      this.evServ.showToast('error', 'Backup Download Failed');
                                      this.evServ.destroy('installDBDBDone');
                                      return _context16.abrupt("return");

                                    case 11:
                                    case "end":
                                      return _context16.stop();
                                  }
                                }
                              }, _callee16, this);
                            }));
                          }, 500);
                        });
                        this.sqlServ.createRevertDB();
                      } else {
                        this.evServ.showToast('cross', 'Cancelled');
                        this.dbBUManAct = {
                          action: 'install',
                          stage: 'fail'
                        };
                        setTimeout(function () {
                          _this12.dbBUManAct = null;
                        }, 1500);
                      }

                    case 17:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "deleteDBBU",
          value: function deleteDBBU() {
            var _this14 = this;

            this.logger.info('[Settings|deleteDBBU] ()...');
            this.evServ.subscribe('delFSDBBU', function (tf) {
              _this14.evServ.destroy('delFSDBBU');

              if (tf) {
                _this14.dbBUManAct = {
                  action: 'delete',
                  stage: 'success'
                };

                _this14.getDBBUInfo('refresh');

                setTimeout(function () {
                  _this14.dbBUManAct = null;
                }, 1500);
              } else {
                _this14.dbBUManAct = {
                  action: 'delete',
                  stage: 'fail'
                };
                setTimeout(function () {
                  _this14.dbBUManAct = null;
                }, 1500);
              }
            });
            this.fireServ.deleteFSDBBU();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "dbBUAction",
          value: function dbBUAction(action) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (action === 'upload') {
                        this.dbBUManAct = {
                          action: 'create',
                          stage: 'inprog'
                        };
                        this.uploadDBBU();
                      }

                      ;

                      if (action === 'install') {
                        this.dbBUManAct = {
                          action: 'install',
                          stage: 'inprog'
                        };
                        this.installDBBU();
                      }

                      ;

                      if (action === 'delete') {
                        this.dbBUManAct = {
                          action: 'delete',
                          stage: 'inprog'
                        };
                        this.deleteDBBU();
                      }

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "checkNotePerms",
          value: function checkNotePerms() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var cNPermsRes;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (!(this.notePerms !== null)) {
                        _context19.next = 4;
                        break;
                      }

                      return _context19.abrupt("return", Promise.resolve(this.notePerms));

                    case 4:
                      _context19.next = 6;
                      return this.noteServ.noteGetPerms();

                    case 6:
                      cNPermsRes = _context19.sent.result;
                      this.notePerms = cNPermsRes;
                      return _context19.abrupt("return", Promise.resolve(this.notePerms));

                    case 9:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          } // -------------------------------------------------------------------------------------

        }, {
          key: "openAlertSchedule",
          value: function openAlertSchedule() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this15 = this;

              var aSchedOpts, rawSchedData, pCalEvs, hasCalEv, valDate, pNotes, pNData, i, sNRaw, sNId, sNAlertAt, sNEventAt, sNType, sNUCType, sNIsTest, sNObj, pCalEvsArr, shiftB4Mins, _i2, pCalEvShiftDepId, pCalEvShiftO, pCalEvShiftEventAt, pCalEvShiftAlertAt, pCalSchedShiftOb, taskB4Mins, _i3, pCalEvTaskDepId, pCalEvTaskO, pCalEvTaskEventAt, pCalEvTaskAlertAt, _pCalSchedShiftOb, sortdArr, aSchedModal, _yield$aSchedModal$on, data, role;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.logger.info('[Settings|openAlertSchedule] ()...');
                      aSchedOpts = {
                        component: _modals_alertschedule_alertschedule_page__WEBPACK_IMPORTED_MODULE_2__.AlertSchedulePage,
                        componentProps: null,
                        showBackdrop: true,
                        backdropDismiss: true,
                        cssClass: 'alert-schedule-modal-class',
                        animated: true,
                        mode: 'md',
                        keyboardClose: true,
                        id: 'alert-schedule-modal'
                      };
                      rawSchedData = [];
                      pCalEvs = this.calServ.schedEvs;

                      hasCalEv = function hasCalEv(type, dId) {
                        var hasCalEv;

                        for (var i = 0; i < pCalEvs[type].length; i++) {
                          var pCO = pCalEvs[type][i];

                          if (pCO.dId.toString() === dId.toString()) {
                            hasCalEv = true;
                          }
                        }

                        ;
                        return hasCalEv;
                      };

                      valDate = function valDate(tD) {
                        if (_this15.dT.isV(new Date(tD))) {
                          return new Date(tD);
                        } else {
                          return _this15.dT.pISO(tD);
                        }
                      };

                      if (!this.appSettings.alerts.options.alertMethods.value.phone) {
                        _context20.next = 13;
                        break;
                      }

                      _context20.next = 9;
                      return this.noteServ.notePending();

                    case 9:
                      pNotes = _context20.sent;

                      if (pNotes.result && pNotes.data.length > 0) {
                        pNData = pNotes.data;

                        for (i = 0; i < pNData.length; i++) {
                          sNRaw = pNData[i];
                          sNId = sNRaw.id;
                          sNAlertAt = valDate(sNRaw.schedule.at);
                          sNEventAt = valDate(sNRaw.extra.evdate);
                          sNType = sNRaw.extra.type;
                          sNUCType = sNRaw.extra.uctype;
                          sNIsTest = sNRaw.extra.isTest;
                          sNObj = {
                            type: sNType,
                            uctype: sNUCType,
                            id: sNId,
                            eventat: sNEventAt,
                            alertat: sNAlertAt,
                            methods: {
                              phone: true
                            },
                            isTest: sNIsTest
                          };

                          if (hasCalEv(sNObj.type, sNObj.id)) {
                            sNObj.methods['calendar'] = true;
                          } else {
                            sNObj.methods['calendar'] = false;
                          }

                          ;
                          rawSchedData.push(sNObj);
                        }

                        ;
                        aSchedOpts.componentProps = {
                          rawAlertList: rawSchedData
                        };
                      } else {
                        aSchedOpts.componentProps = {
                          rawAlertList: []
                        };
                      }

                      _context20.next = 47;
                      break;

                    case 13:
                      // If Note Alerts NOT Enabled --------------------------
                      pCalEvsArr = []; // Shifts...

                      if (!(pCalEvs.shift.length > 0)) {
                        _context20.next = 29;
                        break;
                      }

                      shiftB4Mins = this.appSettings.alerts.options.alertBefore.value.shift.mins;
                      _i2 = 0;

                    case 17:
                      if (!(_i2 < pCalEvs.shift.length)) {
                        _context20.next = 29;
                        break;
                      }

                      pCalEvShiftDepId = Number(pCalEvs.shift[_i2].dId);
                      _context20.next = 21;
                      return this.calServ.findCalEvent(pCalEvShiftDepId);

                    case 21:
                      pCalEvShiftO = _context20.sent.data[0];
                      pCalEvShiftEventAt = this.dT.parseStr(pCalEvShiftO.startDate, 'yyyy-MM-dd HH:mm:ss');
                      pCalEvShiftAlertAt = this.dT.subMs(pCalEvShiftEventAt, shiftB4Mins);
                      pCalSchedShiftOb = {
                        type: 'shift',
                        uctype: 'Shift',
                        id: pCalEvShiftDepId,
                        eventat: pCalEvShiftEventAt,
                        alertat: pCalEvShiftAlertAt,
                        methods: {
                          phone: false,
                          calendar: true
                        },
                        isTest: false
                      };
                      rawSchedData.push(pCalSchedShiftOb);

                    case 26:
                      _i2++;
                      _context20.next = 17;
                      break;

                    case 29:
                      ; // Tasks...

                      if (!(pCalEvs.task.length > 0)) {
                        _context20.next = 45;
                        break;
                      }

                      taskB4Mins = this.appSettings.alerts.options.alertBefore.value.task.mins;
                      _i3 = 0;

                    case 33:
                      if (!(_i3 < pCalEvs.task.length)) {
                        _context20.next = 45;
                        break;
                      }

                      pCalEvTaskDepId = Number(pCalEvs.task[_i3].dId);
                      _context20.next = 37;
                      return this.calServ.findCalEvent(pCalEvTaskDepId);

                    case 37:
                      pCalEvTaskO = _context20.sent.data[0];
                      pCalEvTaskEventAt = this.dT.parseStr(pCalEvTaskO.startDate, 'yyyy-MM-dd HH:mm:ss');
                      pCalEvTaskAlertAt = this.dT.subMs(pCalEvTaskEventAt, taskB4Mins);
                      _pCalSchedShiftOb = {
                        type: 'task',
                        uctype: 'Task',
                        id: pCalEvTaskDepId,
                        eventat: pCalEvTaskEventAt,
                        alertat: pCalEvTaskAlertAt,
                        methods: {
                          phone: false,
                          calendar: true
                        },
                        isTest: false
                      };
                      rawSchedData.push(_pCalSchedShiftOb);

                    case 42:
                      _i3++;
                      _context20.next = 33;
                      break;

                    case 45:
                      ;
                      aSchedOpts.componentProps = {
                        rawAlertList: rawSchedData
                      };

                    case 47:
                      ;
                      sortdArr = lodash__WEBPACK_IMPORTED_MODULE_19__.sortBy(aSchedOpts.componentProps.rawAlertList, 'id');
                      aSchedOpts.componentProps.rawAlertList = sortdArr;
                      _context20.next = 52;
                      return this.modalCtrl.create(aSchedOpts);

                    case 52:
                      aSchedModal = _context20.sent;
                      document.addEventListener('ionModalDidPresent', function () {
                        _this15.logger.info('[EVENT]: IonModalDidPresent...');

                        _this15.alertSchedShowing = true;
                      });
                      _context20.next = 56;
                      return aSchedModal.present();

                    case 56:
                      _context20.next = 58;
                      return aSchedModal.onDidDismiss();

                    case 58:
                      _yield$aSchedModal$on = _context20.sent;
                      data = _yield$aSchedModal$on.data;
                      role = _yield$aSchedModal$on.role;
                      this.alertSchedShowing = false;
                      this.logger.info('onDidDismiss resolved with data/role: ' + data + '/' + role);

                    case 63:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////
          /// CALENDAR FNS  
          ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "checkCalPerms",
          value: function checkCalPerms() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      if (!(this.calPerms !== null)) {
                        _context21.next = 4;
                        break;
                      }

                      return _context21.abrupt("return", Promise.resolve(this.calPerms));

                    case 4:
                      if (!(this.calServ.hasPerms !== null)) {
                        _context21.next = 8;
                        break;
                      }

                      return _context21.abrupt("return", Promise.resolve(this.calServ.hasPerms));

                    case 8:
                      _context21.t0 = Promise;
                      _context21.next = 11;
                      return this.calServ.checkCalPerms();

                    case 11:
                      _context21.t1 = _context21.sent;
                      return _context21.abrupt("return", _context21.t0.resolve.call(_context21.t0, _context21.t1));

                    case 13:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////
          /// GENERAL PAGE FNS
          ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "pageEnterAnim",
          value: function pageEnterAnim() {
            var _this16 = this;

            this.logger.info('[Settings|pageEnterAnim] ()...');
            this.evServ.subscribe('doPageEnterAnim', function () {
              var urlArr = _this16.router.url.split('/');

              var pageKey = urlArr[urlArr.length - 1];
              var sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-slogo.' + pageKey);
              var preImg = '../../assets/img/slogo-';
              var cProgEle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-progcirc.' + pageKey);
              var patchEles = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-opatch.' + pageKey + ' .hcl-ipatch.' + pageKey);
              var starEle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-star.' + pageKey);
              var pageTitle = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-title.' + pageKey);
              var titleBar = jquery__WEBPACK_IMPORTED_MODULE_18__('.hcl-leftbar.' + pageKey);
              var leftCol = jquery__WEBPACK_IMPORTED_MODULE_18__('.sheriff-page-header-col.left-col.' + pageKey);
              var calcBarW = Math.round(jquery__WEBPACK_IMPORTED_MODULE_18__(leftCol).outerWidth() + 6 - (jquery__WEBPACK_IMPORTED_MODULE_18__(pageTitle).offset().left + jquery__WEBPACK_IMPORTED_MODULE_18__(pageTitle).outerWidth())) + 'px';
              var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_18__('.sheriff-title-leftanimbar-inner.' + pageKey);
              var titleText = jquery__WEBPACK_IMPORTED_MODULE_18__('.sheriff-title.tight-wrap.' + pageKey);
              jquery__WEBPACK_IMPORTED_MODULE_18__(patchEles).addClass('hidden');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_18__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_18__(starEle).addClass('hcl-star-startanim');
                _this16.progCirc.outerStrokeColor = '#FF9800';
                _this16.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_18__(sLogoEle).attr('src', preImg + 'g.png');

                _this16.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');

                setTimeout(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_18__(sLogoEle).attr('src', preImg + 'w.png');

                  _this16.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');

                  jquery__WEBPACK_IMPORTED_MODULE_18__(titleBar).css('width', calcBarW);
                  setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_18__(animBarEnd).addClass('showing');
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_18__(titleText).addClass('scrolledin');
                      setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_18__(titleBar).addClass('dimmed');
                      }, 200);
                    }, 200);
                  }, 400); ///////////////////////////////////

                  setTimeout(function () {
                    _this16.progCirc.percent = 0;
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_18__(cProgEle).css('display', 'unset');
                    }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_18__(starEle).removeClass('hcl-star-startanim');

                    _this16.evServ.destroy('doPageEnterAnim');
                  }, 600);
                }, 400);
              }, 600);
            });
          } //////////////////////////////////////////////////////

        }, {
          key: "niceBytes",
          value: function niceBytes(bytes) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            if (bytes === 0) return 'empty';
            var k = 1024;
            var dm = decimals < 0 ? 0 : decimals;
            var sizes = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[Settings|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');

            var doAni = function doAni() {
              return new Promise(function (resolve) {
                var aniStr = 'animate__animated animate__' + aniName;
                var delStr = 'animDel-' + aniDel;
                var durStr = 'animDur-' + aniDur;
                jquery__WEBPACK_IMPORTED_MODULE_18__(theEle).on('animationend', function () {
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
            };

            doAni();
          }
        }]);

        return SettingsPage;
      }();

      _SettingsPage.ctorParameters = function () {
        return [{
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_21__.NGXLogger
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
        }, {
          type: _services_deputy_service__WEBPACK_IMPORTED_MODULE_3__.DeputyService
        }, {
          type: _services_filesystem_service__WEBPACK_IMPORTED_MODULE_6__.FileSystemService
        }, {
          type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_7__.SQLiteService
        }, {
          type: _services_datetime_service__WEBPACK_IMPORTED_MODULE_8__.DateTimeService
        }, {
          type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController
        }, {
          type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_10__.CalendarService
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__.FirebaseService
        }, {
          type: _services_push_service__WEBPACK_IMPORTED_MODULE_11__.PushService
        }];
      };

      _SettingsPage.propDecorators = {
        databaseAutobackupRG: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewChild,
          args: ['databaseAutobackupRG']
        }]
      };
      _SettingsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _SettingsPage);
      /***/
    },

    /***/
    69519:
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    14718:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col settings\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar settings\">\n                                <div class=\"sheriff-title-leftanimbar-inner settings\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title settings\">\n                                    <div class=\"sheriff-title tight-wrap settings\">Settings</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring settings\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle settings hcl-progcirc settings\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch settings\">\n                                        <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch settings\"></div>\n                                    </div>\n                                    <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star settings\">\n                                    <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo settings\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                <div class=\"sheriff-page-backbtn-wrapper settings\">\n                                    <ion-back-button icon=\"chevron-back-outline\" class=\"sheriff-backbtn settings\" defaultHref=\"/tabs\"></ion-back-button>\n                                </div>\n                                <div class=\"sheriff-menu-button-wrapper\">\n                                    <ion-menu-button class=\"sheriff-menu-button settings\" autoHide=\"false\">\n                                        <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                    </ion-menu-button>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sherrif-content tab-content settings\">\n    <!-- SETTINGS-CONTENT -->\n    \n    <!-- CONTENT HEADING -->\n    <div class=\"sheriff-tabcontent-mainheading-wrapper settings\">\n        <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid settings\">\n            <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 settings\">\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 settings\">\n\n                </ion-col>\n                <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 settings\">\n                    <img class=\"sheriff-reflect-title settings\" src=\"../../assets/img/sheriff-reflecttitle-settings.png\">\n                </ion-col>\n                <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 settings\">\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <!-- ITEM LIST CONTENT -->\n    <div *ngIf=\"domDataReady\" class=\"sheriff-tabcontent-itemlistcontent-wrapper settings\">\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper database\">\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <ion-grid class=\"sheriff-grid settings-page-grid heading-grid database\">\n                <ion-row (click)=\"sectionVisToggle('database',databaseVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                    <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                        <div class=\"sheriff-settings-subtitle-wrapper\">\n                            <div class=\"settings-main-title-text database\">Database<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.database}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                        <ion-icon *ngIf=\"appSettings.database.showSection\" class=\"settings-section-heading-vis-ico dbbackups visible\" name=\"eye-outline\"></ion-icon>\n                        <ion-icon *ngIf=\"!appSettings.database.showSection\" class=\"settings-section-heading-vis-ico dbbackups hidden\" name=\"eye-off-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                        <ion-toggle #databaseVisToggle checked={{appSettings.database.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle database\"></ion-toggle>\n                        <div class=\"setting-tog-shield\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <div *ngIf=\"appSettings.database.showSection\" class=\"settings-section-toggle-inner-wrapper database\">\n                <!-- -------------------------------------------------------------------------- -->\n                <!-- DB Options -->\n                <!-- -------------------------------------------------------------------------- -->\n                <ion-grid class=\"sheriff-grid sheriff-settings-main-grid database\">\n                    <ion-row class=\"sheriff-row sheriff-settings-main-row database\">\n                        <ion-col size=\"12\" class=\"sheriff-col sheriff-settings-main-col database\">\n                            <ion-grid class=\"sheriff-grid settings-option-grid database-autobackup\">\n                                <ion-row class=\"sheriff-row settings-option-row option-action-row database-autobackup\">\n                                    <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col database-autobackup\">\n                                        <div class=\"settings-option-name-wrapper database-autobackup\">\n                                            <div class=\"settings-option-name-label-txt\">Backup</div>\n                                            <ion-icon (click)=\"toggleOptInfo('database','backupMode')\" [ngStyle]=\"{'color':appSettings.database.options.backupMode.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col database-autobackup\">\n                                        <ion-radio-group #databaseAutobackupRG (ionChange)=\"changeDatabaseOpts('backupMode',databaseAutobackupRG.value)\" [allowEmptySelection]=\"false\" [value]=\"appSettings.database.options.backupMode.value\" class=\"sheriff-settings-radio-group database-autobackup\">\n                                            <ion-item class=\"settings-radio-item database-autobackup sheriff-radioitem-3opts auto\">\n                                                <div class=\"settings-radio-item-labelcenterwrap\">\n                                                    <ion-radio [mode]=\"'md'\" [value]=\"'auto'\" class=\"sheriff-settings-radio database-autobackup-option auto\"></ion-radio>\n                                                    <div class=\"sheriff-settings-radio-label database-autobackup-label auto\">auto</div>\n                                                </div>\n                                            </ion-item>\n                                            <ion-item class=\"settings-radio-item database-autobackup sheriff-radioitem-3opts user\">\n                                                <div class=\"settings-radio-item-labelcenterwrap\">\n                                                    <ion-radio [mode]=\"'md'\" [value]=\"'user'\" class=\"sheriff-settings-radio database-autobackup-option user\"></ion-radio>\n                                                    <div class=\"sheriff-settings-radio-label database-autobackup-label user\">user</div>\n                                                </div>\n                                            </ion-item>\n                                            <ion-item class=\"settings-radio-item database-autobackup sheriff-radioitem-3opts none\">\n                                                <div class=\"settings-radio-item-labelcenterwrap\">\n                                                    <ion-radio [mode]=\"'md'\" [value]=\"'none'\" class=\"sheriff-settings-radio database-autobackup-option none\"></ion-radio>\n                                                    <div class=\"sheriff-settings-radio-label database-autobackup-label none\">none</div>\n                                                </div>\n                                            </ion-item>\n                                        </ion-radio-group>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"appSettings.database.options.backupMode.info\" class=\"sheriff-row settings-option-row option-info-row database-autobackup\">\n                                    <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col database-autobackup\">\n                                        <ion-button (click)=\"toggleOptInfo('database','backupMode')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                            <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col database-autobackup\">\n                                        <div class=\"settings-option-info-text-wrapper database-autobackup\">\n                                            <div class=\"settings-info-line-item database-autobackup-info auto\"><span class=\"option-info-label\">Auto:</span>DB backups are created/updated automatically each time a change to the Active database occurs.</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info manual\"><span class=\"option-info-label\">User:</span>A DB backup will only be created/updated when you manually action it using the 'Backup' button below.</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info off\"><span class=\"option-info-label\">None:</span>No DB backups are created or available.</div>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                            <ion-grid *ngIf=\"appSettings.database.options.backupMode.value==='user'\" class=\"sheriff-grid settings-option-grid database-manualbackup\">\n                                <ion-row class=\"sheriff-row settings-option-row option-action-row database-manualbackup\">\n                                    <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col database-manualbackup\">\n                                        <div class=\"settings-option-name-wrapper database-autobackup\">\n                                            <div class=\"settings-option-name-label-txt\">Actions</div>\n                                            <ion-icon (click)=\"toggleOptInfo('database','backupActions')\" [ngStyle]=\"{'color':appSettings.database.options.backupActions.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct!==null\" size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup action-status-col\">\n                                        <div style=\"color:#848484\" *ngIf=\"dbBUManAct.stage==='inprog'\" class=\"database-manualactions-actionstatus-msgtext inprog\">\n                                            <ion-spinner [name]=\"'dots'\" [duration]=\"500\" class=\"settings-uploaddbbu-spinner\"></ion-spinner>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='create'&&dbBUItem===null\">Creating</span>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='create'&&dbBUItem!==null\">Updating</span>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='delete'\">Deleting</span>\n                                            <span style=\"margin-right:2px\" *ngIf=\"dbBUManAct.action==='install'\">Installing</span> Backup DB\n                                        </div>\n                                        <div style=\"color:var(--ion-color-danger)\" *ngIf=\"dbBUManAct.stage==='fail'\" class=\"database-manualactions-actionstatus-msgtext fail\">\n                                            <ion-icon *ngIf=\"dbBUManAct.stage==='fail'\" style=\"color:var(--ion-color-danger);margin:0 auto;padding-right:2px\" name=\"close\"></ion-icon>Action Failed\n                                        </div>\n                                        <div style=\"color:var(--ion-color-success)\" *ngIf=\"dbBUManAct.stage==='success'\" class=\"database-manualactions-actionstatus-msgtext success\">\n                                            <ion-icon *ngIf=\"dbBUManAct.stage==='success'\" style=\"color:var(--ion-color-success);margin:0 auto;padding-right:2px\" name=\"checkmark\"></ion-icon>Action Successful\n                                        </div>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct===null\" size=\"3\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup actb savebu\">\n                                        <ion-button (click)=\"dbBUAction('upload')\" [disabled]=\"appSettings.database.options.backupMode.value!=='user'\" class=\"sheriff-btn sheriff-settings-manualbackup-btn save\">\n                                            <div *ngIf=\"dbBUItem===null\" class=\"sheriff-btn-txt db-save\">Create</div>\n                                            <div *ngIf=\"dbBUItem!==null\" class=\"sheriff-btn-txt db-save\">Update</div>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct===null\" size=\"3\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup actb deletebu\">\n                                        <ion-button [disabled]=\"hasDBBU===false||appSettings.database.options.backupMode.value!=='user'?true:false\" (click)=\"dbBUAction('delete')\" class=\"sheriff-btn sheriff-settings-manualbackup-btn delete\">\n                                            <div class=\"sheriff-btn-txt db-delete\">Delete</div>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col *ngIf=\"dbBUManAct===null\" size=\"3\" class=\"sheriff-col settings-option-col settings-option-selection-col database-manualbackup actb installbu\">\n                                        <ion-button [disabled]=\"hasDBBU===false||appSettings.database.options.backupMode.value!=='user'?true:false\" (click)=\"dbBUAction('install')\" class=\"sheriff-btn sheriff-settings-manualbackup-btn install\">\n                                            <div class=\"sheriff-btn-txt db-install\">Install</div>\n                                        </ion-button>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"appSettings.database.options.backupActions.info\" class=\"sheriff-row settings-option-row option-info-row database-manualactions\">\n                                    <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col database-autobackup\">\n                                        <ion-button (click)=\"toggleOptInfo('database','backupActions')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                            <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col database-autobackup\">\n                                        <div class=\"settings-option-info-text-wrapper database-autobackup\">\n                                            <div class=\"settings-info-line-item database-autobackup-info create\"><span class=\"option-info-label\">Create:</span>Save a backup copy of your current/active DB to the cloud (DB Backups must be set to 'User').</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info delete\"><span class=\"option-info-label\">Delete:</span>Delete your backup DB (if any) from the cloud.</div>\n                                            <div class=\"settings-info-line-item database-autobackup-info install\"><span class=\"option-info-label\">Install:</span>Replace your current/active DB with your backup copy from the cloud and restart Sheriff.</div>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                            <ion-grid *ngIf=\"appSettings.database.options.backupMode.value!=='none'\" class=\"sheriff-grid database-list-table-grid\">\n                                <ion-row *ngIf=\"hasDBBU&&dbBUItem!==null\" class=\"sheriff-row settings-page-row col-label-row dblist-head-row\">\n                                    <ion-col size=\"4\" class=\"sheriff-col col-label-col name\">database</ion-col>\n                                    <ion-col size=\"4\" class=\"sheriff-col col-label-col date\">last saved</ion-col>\n                                    <ion-col size=\"2\" class=\"sheriff-col col-label-col size\">file size</ion-col>\n                                    <ion-col size=\"2\" class=\"sheriff-col col-label-col saved\">\n                                        <ion-icon class=\"settings-db-saved-ico locate\" name=\"locate\"></ion-icon>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"hasDBBU&&dbBUItem!==null\" class=\"sheriff-row settings-page-row founddbs-row\">\n                                  <ion-col size=\"4\" class=\"sheriff-col settings-page-col founddbs-col name dbbuitem\">\n                                      <div [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"sheriff-settings-dbbulist-wrapper name\">{{dbBUItem.name}}<span class=\"dbnewd settings-dbname-suffix\">(SQLite.db)</span></div>\n                                  </ion-col>\n                                  <ion-col *ngIf=\"dbBUULStatus===null\" size=\"4\" class=\"sheriff-col settings-page-col founddbs-col date dbbuitem\">\n                                      <div [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"dbnewd sheriff-settings-dbbulist-wrapper date\">{{dbBUItem.date}}</div>\n                                  </ion-col>\n                                  <ion-col *ngIf=\"dbBUULStatus===null\" size=\"2\" class=\"sheriff-col settings-page-col founddbs-col size dbbuitem\">\n                                      <div [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"dbnewd sheriff-settings-dbbulist-wrapper size\">{{dbBUItem.size}}</div>\n                                  </ion-col>\n                                  <ion-col *ngIf=\"dbBUULStatus===null\" size=\"2\" class=\"sheriff-col settings-page-col founddbs-col saved dbbuitem\">\n                                      <div class=\"dbnewd sheriff-settings-dbbulist-wrapper saved\">\n                                          <ion-icon [ngClass]=\"{'dbbuitem-newdata-class':dbBUNewData}\" class=\"dbnewd settings-db-saved-ico phone\" name=\"cloud\"></ion-icon>\n                                      </div>\n                                  </ion-col>\n                                  <ion-col class=\"dbbuupload-pbar-col\" *ngIf=\"dbBUULStatus!==null\" size=\"8\">\n                                    <div class=\"sheriff-settings-firedbbupload-progressbar-wrapper\">\n                                      <ion-progress-bar [ngClass]=\"{'ulfiredbbu-inprog':dbBUULStatus==='inprog','ulfiredbbu-success':dbBUULStatus==='success','ulfiredbbu-error':dbBUULStatus==='error'}\" *ngIf=\"dbBUULPerc>0\" class=\"sheriff-settings-firedbbuupload-progress\" value={{dbBUULPerc}}></ion-progress-bar>\n                                    </div>\n                                  </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"!hasDBBU&&dbBUError!==null\" class=\"sheriff-row settings-page-row nodbbu-row\">\n                                  <ion-col class=\"sheriff-col settings-page-col nodbbu-col\">\n                                    <div class=\"nodbbu-warning-text-wrapper\">\n                                      {{dbBUError}}\n                                    </div>\n                                  </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper alerts\">\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <ion-grid class=\"sheriff-grid settings-page-grid heading-grid alerts\">\n                <ion-row (click)=\"sectionVisToggle('alerts',alertsVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                    <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                        <div class=\"sheriff-settings-subtitle-wrapper\">\n                            <div class=\"settings-main-title-text\">alerts<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.alerts}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                        <ion-icon *ngIf=\"appSettings.alerts.showSection\" class=\"settings-section-heading-vis-ico alerts visible\" name=\"eye-outline\"></ion-icon>\n                        <ion-icon *ngIf=\"!appSettings.alerts.showSection\" class=\"settings-section-heading-vis-ico alerts hidden\" name=\"eye-off-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                        <ion-toggle #alertsVisToggle checked={{appSettings.alerts.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle alerts\"></ion-toggle>\n                        <div class=\"setting-tog-shield\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <!-- -------------------- ALERTS -------------------- -->\n            <ion-grid *ngIf=\"appSettings.alerts.showSection\" class=\"sheriff-grid sheriff-settings-main-grid alerts\">\n                <ion-row class=\"sheriff-row settings-page-row\">\n                    <ion-col size=\"12\" class=\"sheriff-col\">\n                        <!-- -------------------- ALERT - METHODS -------------------- -->\n                        <ion-grid class=\"sheriff-grid settings-option-grid alerts-methods\">\n                            <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-methods\">\n                                <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-methods\">\n                                    <div class=\"settings-option-name-wrapper alerts-methods\">\n                                        <div class=\"settings-option-name-label-txt\">Methods</div>\n                                        <ion-icon (click)=\"toggleOptInfo('alerts','alertMethods')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertMethods.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-methods phone-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertMethods('phone',amcbPhone.checked)\" class=\"settings-alertsopt-methods-item phone\">\n                                        <div class=\"settings-alertsopt-methods-wrapper phone\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #amcbPhone class=\"settings-alertsopt-methods-btn-cb phone\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertMethods.value.phone\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':amcbPhone.checked?'var(--ion-color-success)':'#aaa'}\" [ngClass]=\"{'notepermsbad':amcbPhone.checked&&notePerms===false}\" class=\"sheriff-btn-txt settings-alertsopt-methods-btn-txt phone\">Phone</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-methods calendar-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertMethods('calendar',amcbCalendar.checked)\" class=\"settings-alertsopt-methods-item calendar\">\n                                        <div class=\"settings-alertsopt-methods-wrapper calendar\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #amcbCalendar class=\"settings-alertsopt-methods-btn-cb calendar\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertMethods.value.calendar\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':amcbCalendar.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-methods-btn-txt calendar\">Calendar</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-methods email-cb-col\">\n                                  <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertMethods('email',amcbEmail.checked)\" class=\"settings-alertsopt-methods-item email\">\n                                      <div class=\"settings-alertsopt-methods-wrapper email\">\n                                          <ion-checkbox [disabled]=\"isRescheduling\" #amcbEmail class=\"settings-alertsopt-methods-btn-cb email\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertMethods.value.email\"></ion-checkbox>\n                                          <div [ngStyle]=\"{'color':amcbEmail.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-methods-btn-txt email\">Email</div>\n                                      </div>\n                                  </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"appSettings.alerts.options.alertMethods.info\" class=\"sheriff-row settings-option-row option-info-row alert-methods\">\n                                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-methods\">\n                                    <ion-button (click)=\"toggleOptInfo('alerts','alertMethods')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                    <div class=\"settings-option-info-text-wrapper alert-methods\">\n                                        <div class=\"settings-info-line-item alert-methods-info phone\"><span class=\"option-info-label\">Phone:</span>Local notifications triggered on your device/phone.</div>\n                                        <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">Calendar:</span>Calendar events & reminders added to your nominated calendar.</div>\n                                        <div class=\"settings-info-line-item alert-methods-info email\"><span class=\"option-info-label\">Email:</span>Reminder messages emailed to your primary email.</div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- ALERT - EVENTS -------------------- -->\n                        <ion-grid *ngIf=\"appSettings.alerts.options.alertMethods.value.phone||appSettings.alerts.options.alertMethods.value.calendar\" class=\"sheriff-grid settings-option-grid alerts-eventsevents\">\n                            <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-events\">\n                                <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-events\">\n                                    <div class=\"settings-option-name-wrapper alerts-events\">\n                                        <div class=\"settings-option-name-label-txt\">Events</div>\n                                        <ion-icon (click)=\"toggleOptInfo('alerts','alertEvents')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertEvents.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-events shift-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertEvents('shift',aecbShift.checked)\" class=\"settings-alertsopt-events-item shift\">\n                                        <div class=\"settings-alertsopt-events-wrapper shift\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #aecbShift class=\"settings-alertsopt-events-btn-cb shift\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertEvents.value.shift\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':aecbShift.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-events-btn-txt shift\">Shifts</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-events task-cb-col\">\n                                    <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertEvents('task',aecbTask.checked)\" class=\"settings-alertsopt-events-item task\">\n                                        <div class=\"settings-alertsopt-events-wrapper task\">\n                                            <ion-checkbox [disabled]=\"isRescheduling\" #aecbTask class=\"settings-alertsopt-events-btn-cb task\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertEvents.value.task\"></ion-checkbox>\n                                            <div [ngStyle]=\"{'color':aecbTask.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-events-btn-txt task\">Tasks</div>\n                                        </div>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col alerts-events tsheet-cb-col\">\n                                  <ion-item [disabled]=\"isRescheduling\" (click)=\"changeAlertEvents('tsheet',aecbTSheet.checked)\" class=\"settings-alertsopt-events-item tsheet\">\n                                      <div class=\"settings-alertsopt-events-wrapper tsheet\">\n                                          <ion-checkbox [disabled]=\"isRescheduling\" #aecbTSheet class=\"settings-alertsopt-events-btn-cb tsheet\" [mode]=\"'md'\" [checked]=\"appSettings.alerts.options.alertEvents.value.tsheet\"></ion-checkbox>\n                                          <div [ngStyle]=\"{'color':aecbTSheet.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-alertsopt-events-btn-txt tsheet\">TSheets</div>\n                                      </div>\n                                  </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.info\" class=\"sheriff-row settings-option-row option-info-row alert-events\">\n                                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-events\">\n                                    <ion-button (click)=\"toggleOptInfo('alerts','alertEvents')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                    <div class=\"settings-option-info-text-wrapper alert-events\">\n                                      <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">Shifts:</span>Alerts triggered X time before a shift starts or a confirm/accept shift confirmation deadline expires.</div>\n                                      <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">Tasks:</span>Alerts triggered X time before a task is deadline is due (if Due By set)</div>\n                                      <div class=\"settings-info-line-item alert-methods-info calendar\"><span class=\"option-info-label\">TSheets:</span>Alerts triggered X time after you fail/forget to clock on/off</div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- ALERT - BEFORE -------------------- -->\n                        <ion-grid *ngIf=\"(appSettings.alerts.options.alertMethods.value.phone||appSettings.alerts.options.alertMethods.value.calendar)&&(appSettings.alerts.options.alertEvents.value.shift||appSettings.alerts.options.alertEvents.value.task)\" class=\"sheriff-grid settings-option-grid alerts-before\">\n                            <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-before\">\n                                <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-before\">\n                                    <div class=\"settings-option-name-wrapper before\">\n                                        <div class=\"settings-option-name-label-txt\">Times</div>\n                                        <ion-icon (click)=\"toggleOptInfo('alerts','alertBefore')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertBefore.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col alerts-before-settings-col\">\n                                    <ion-grid class=\"sheriff-grid settings-suboptions-grid alerts-before-grid\">\n                                        <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.value.shift\" [ngStyle]=\"{'border-bottom':appSettings.alerts.options.alertEvents.value.task?'solid 1px #212121':'0'}\" class=\"sheriff-row settings-suboptions-row alerts-before-row fn-btn-row shifts\">\n                                            <ion-col size=\"3\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-label-col shifts\">\n                                                Shifts:\n                                            </ion-col>\n                                            <ion-col size=\"2\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-nicevalue-col shifts\">\n                                              <div class=\"alerts-b4-selected-value-wrapper\">\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===1\" class=\"alerts-before-nicevalue\">30</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===2\" class=\"alerts-before-nicevalue\">60</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===3\" class=\"alerts-before-nicevalue\">90</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===4\" class=\"alerts-before-nicevalue\">2</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===5\" class=\"alerts-before-nicevalue\">6</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===6\" class=\"alerts-before-nicevalue\">12</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===1||appSettings.alerts.options.alertBefore.value.shift.range===2||appSettings.alerts.options.alertBefore.value.shift.range===3\" class=\"alerts-b4-mh-suffix mins\">mins</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.shift.range===4||appSettings.alerts.options.alertBefore.value.shift.range===5||appSettings.alerts.options.alertBefore.value.shift.range===6\" class=\"alerts-b4-mh-suffix hours\">hrs</span>\n                                              </div>\n                                            </ion-col>\n                                            <ion-col size=\"7\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-btn-col shifts\">\n                                                <ion-range [disabled]=\"isRescheduling\" #abRangeShift (ionChange)=\"changeAlertBefore('shift',abRangeShift.value)\" [debounce]=\"250\" [max]=\"6\" [min]=\"1\" [mode]=\"'ios'\" [pin]=\"false\" [snaps]=\"true\" [step]=\"1\" [ticks]=\"true\" [value]=\"appSettings.alerts.options.alertBefore.value.shift.range\" class=\"sheriff-settings-range alertbefore-range shifts\"></ion-range>\n                                            </ion-col>\n                                        </ion-row>\n                                        <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.value.task\" class=\"sheriff-row settings-suboptions-row alerts-before-row fn-btn-row tasks\">\n                                            <ion-col size=\"3\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-label-col tasks\">\n                                                Tasks:\n                                            </ion-col> \n                                            <ion-col size=\"2\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-nicevalue-col tasks\">\n                                              <div class=\"alerts-b4-selected-value-wrapper\">\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===1\" class=\"alerts-before-nicevalue\">30</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===2\" class=\"alerts-before-nicevalue\">60</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===3\" class=\"alerts-before-nicevalue\">90</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===4\" class=\"alerts-before-nicevalue\">2</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===5\" class=\"alerts-before-nicevalue\">6</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===6\" class=\"alerts-before-nicevalue\">12</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===1||appSettings.alerts.options.alertBefore.value.task.range===2||appSettings.alerts.options.alertBefore.value.task.range===3\" class=\"alerts-b4-mh-suffix mins\">mins</span>\n                                                <span *ngIf=\"appSettings.alerts.options.alertBefore.value.task.range===4||appSettings.alerts.options.alertBefore.value.task.range===5||appSettings.alerts.options.alertBefore.value.task.range===6\" class=\"alerts-b4-mh-suffix hours\">hrs</span>\n                                              </div>\n                                            </ion-col>\n                                            <ion-col size=\"7\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-btn-col tasks\">\n                                                <ion-range [disabled]=\"isRescheduling\" #abRangeTask (ionChange)=\"changeAlertBefore('task',abRangeTask.value)\" [debounce]=\"250\" [max]=\"6\" [min]=\"1\" [mode]=\"'ios'\" [pin]=\"false\" [snaps]=\"true\" [step]=\"1\" [ticks]=\"true\" [value]=\"appSettings.alerts.options.alertBefore.value.task.range\" class=\"sheriff-settings-range alertbefore-range tasks\"></ion-range>\n                                            </ion-col>\n                                        </ion-row>\n                                        <ion-row *ngIf=\"appSettings.alerts.options.alertEvents.value.tsheet\" class=\"sheriff-row settings-suboptions-row alerts-before-row fn-btn-row tsheet\">\n                                          <ion-col size=\"3\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-label-col tsheets\">\n                                              TSheets:\n                                          </ion-col> \n                                          <ion-col size=\"2\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-nicevalue-col tsheets\">\n                                            <div class=\"alerts-b4-selected-value-wrapper\">\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===1\" class=\"alerts-before-nicevalue\">5</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===2\" class=\"alerts-before-nicevalue\">10</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===3\" class=\"alerts-before-nicevalue\">15</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===4\" class=\"alerts-before-nicevalue\">20</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===5\" class=\"alerts-before-nicevalue\">25</span>\n                                              <span *ngIf=\"appSettings.alerts.options.alertBefore.value.tsheet.range===6\" class=\"alerts-before-nicevalue\">30</span>\n                                              <span class=\"alerts-b4-mh-suffix mins\">mins</span> \n                                            </div>\n                                          </ion-col>\n                                          <ion-col size=\"7\" class=\"sheriff-col settings-suboptions-col alerts-before-col fn-btn-col tsheets\">\n                                              <ion-range [disabled]=\"isRescheduling\" #abRangeTSheet (ionChange)=\"changeAlertBefore('tsheet',abRangeTSheet.value)\" [debounce]=\"250\" [max]=\"6\" [min]=\"1\" [mode]=\"'ios'\" [pin]=\"false\" [snaps]=\"true\" [step]=\"1\" [ticks]=\"true\" [value]=\"appSettings.alerts.options.alertBefore.value.tsheet.range\" class=\"sheriff-settings-range alertbefore-range tsheets\"></ion-range>\n                                          </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf=\"appSettings.alerts.options.alertBefore.info\" class=\"sheriff-row settings-option-row option-info-row alert-before\">\n                                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-before\">\n                                    <ion-button (click)=\"toggleOptInfo('alerts','alertBefore')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                    <div class=\"settings-option-info-text-wrapper alert-before\">\n                                        <div class=\"settings-info-line-item alert-before-info shifts\">\n                                            <span class=\"option-info-label\">Shift:</span>Alert triggered X time before each shift/roster is due to start.\n                                        </div>\n                                        <div class=\"settings-info-line-item alert-before-info tasks\">\n                                          <span class=\"option-info-label\">Tasks:</span>Alert triggered X time before a task deadline (if 'Due By' set).\n                                        </div>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- CALENDAR SELECTION ------------------ -->\n                        <ion-grid *ngIf=\"appSettings.alerts.options.alertMethods.value.calendar&&(appSettings.alerts.options.alertEvents.value.shift||appSettings.alerts.options.alertEvents.value.task)\"  class=\"sheriff-grid settings-option-grid calendarselect-grid\">\n                          <ion-row class=\"sheriff-row settings-option-row option-action-row calendarselect\">\n                            <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col calendarselect\">\n                                <div class=\"settings-option-name-wrapper calendarselect\">\n                                    <div class=\"settings-option-name-label-txt\">Calendar</div>\n                                    <ion-icon (click)=\"toggleOptInfo('alerts','alertCal')\" [ngStyle]=\"{'color':appSettings.alerts.options.alertCal.info?'var(--ion-color-danger)':'#343434'}\"  class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                                </div>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col calendarselect-col selectedcal-col\">\n                              <div class=\"sheriff-settings-selectedcal-value-wrapper\">{{selectedCal.name}}</div>\n                            </ion-col>\n                            <ion-col class=\"sheriff-col settings-option-col settings-option-selection-col calendarselect-col select-cal-btn-col\">\n                              <ion-button [disabled]=\"isRescheduling\" (click)=\"alertCalSelect(selectedCal)\" class=\"sheriff-btn settings-calselect-btn\">\n                                <ion-icon class=\"sheiff-btn-ico settings-calselect-btn-ico\" name=\"calendar-outline\"></ion-icon>\n                                <div class=\"sheriff-btn-txt settings-calselect-btn-txt\">Change</div>\n                              </ion-button>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row *ngIf=\"appSettings.alerts.options.alertCal.info\" class=\"sheriff-row settings-option-row option-info-row alert-cal\">\n                            <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col alert-cal\">\n                                <ion-button (click)=\"toggleOptInfo('alerts','alertCal')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                                    <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                                </ion-button>\n                            </ion-col>\n                            <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col alert-methods\">\n                                <div class=\"settings-option-info-text-wrapper alert-cal\">\n                                    <div class=\"settings-info-line-item alert-cal-info\">\n                                      Sheriff will add your shift/task events & reminders (as selected) to this calendar\n                                    </div>\n                                </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                        <!-- -------------------- ALERT - SCHEDULE -------------------- -->\n                        <ion-grid *ngIf=\"(appSettings.alerts.options.alertMethods.value.phone||appSettings.alerts.options.alertMethods.value.calendar)&&(appSettings.alerts.options.alertEvents.value.shift||appSettings.alerts.options.alertEvents.value.task)\" class=\"sheriff-grid settings-option-grid scheduled-alerts-grid\">\n                          <ion-row class=\"sheriff-row settings-option-row option-action-row alerts-schedule\">\n                            <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col alerts-schedule\">\n                                <div class=\"settings-option-name-wrapper alerts-schedule\">\n                                    <div class=\"settings-option-name-label-txt\">Scheduled</div>\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col alerts-schedule-settings-col\">\n                              <ion-button (click)=\"openAlertSchedule()\" *ngIf=\"!isRescheduling\" class=\"sheriff-btn sheriff-settings-openalertschedule-btn\">\n                                <div class=\"sheriff-btn-txt openalertschedule-btn-txt\"><ion-icon class=\"view-scheduled-alerts-btn-ico\" name=\"search\"></ion-icon>View Alert Schedule</div>\n                              </ion-button>\n                              <div *ngIf=\"isRescheduling\" style=\"color:#848484\" class=\"alerts-rescheduling-msgtext inprog\">\n                                <ion-spinner [name]=\"'dots'\" [duration]=\"500\" class=\"settings-reschedlingalerts-spinner\"></ion-spinner>\n                                <span style=\"margin-right:2px\">Reschedling Alerts</span>\n                              </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper payrates\">\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <ion-grid class=\"sheriff-grid settings-page-grid heading-grid payrates\">\n                <ion-row (click)=\"sectionVisToggle('payrates',payratesVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                    <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                        <div class=\"sheriff-settings-subtitle-wrapper\">\n                            <div class=\"settings-main-title-text\">Pay Rates<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.payrates}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                        <ion-icon *ngIf=\"appSettings.payrates.showSection\" class=\"settings-section-heading-vis-ico payrates visible\" name=\"eye-outline\"></ion-icon>\n                        <ion-icon *ngIf=\"!appSettings.payrates.showSection\" class=\"settings-section-heading-vis-ico payrates hidden\" name=\"eye-off-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                        <ion-toggle #payratesVisToggle checked={{appSettings.payrates.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle payrates\"></ion-toggle>\n                        <div class=\"setting-tog-shield\"></div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div class=\"settings-main-section-header-gradient\"></div>\n            <div *ngIf=\"appSettings.payrates.showSection\" class=\"settings-section-toggle-inner-wrapper payrates\">\n                <ion-grid *ngIf=\"appSettings.payrates.showSection\" class=\"sheriff-grid sheriff-settings-main-grid payrates\">\n                  <ion-row class=\"sheriff-row settings-option-row option-action-row payrates-option1\">\n                      <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col payrates-option1\">\n                          <div class=\"settings-option-name-wrapper payrates-option1\">\n                              <div class=\"settings-option-name-label-txt\">Show $</div>\n                              <ion-icon (click)=\"toggleOptInfo('payrates','show')\" [ngStyle]=\"{'color':appSettings.payrates.options.show.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                          </div>\n                      </ion-col>\n                      <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col payrates-option1\">\n                        <ion-item (click)=\"toggleShowPR(prShow.checked)\" class=\"settings-propt-item\">\n                          <div class=\"settings-propt-wrapper\">\n                              <ion-checkbox #prShow class=\"settings-payratesopt-btn-cb show\" [mode]=\"'md'\" [checked]=\"appSettings.payrates.options.show.value\"></ion-checkbox>\n                              <div [ngStyle]=\"{'color':prShow.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-propt-btn-txt show\">Showing Income ($)</div>\n                          </div>\n                          </ion-item>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf=\"appSettings.payrates.options.show.info\" class=\"sheriff-row settings-option-row option-info-row payrates-show\">\n                      <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col payrates-show\">\n                          <ion-button (click)=\"toggleOptInfo('payrates','show')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                              <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                          </ion-button>\n                      </ion-col>\n                      <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col payrates-show\">\n                          <div class=\"settings-option-info-text-wrapper payrates-show\">\n                              <div class=\"settings-info-line-item payrates-show-info\">\n                                Sheriff will calculate & include income ($) figures next to your time/hours\n                              </div>\n                          </div>\n                      </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper profile\">\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <ion-grid class=\"sheriff-grid settings-page-grid heading-grid profile\">\n              <ion-row (click)=\"sectionVisToggle('profile',profileVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                  <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                      <div class=\"sheriff-settings-subtitle-wrapper\">\n                          <div class=\"settings-main-title-text\">Profile<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.profile}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                      </div>\n                  </ion-col>\n                  <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                      <ion-icon *ngIf=\"appSettings.profile.showSection\" class=\"settings-section-heading-vis-ico profile visible\" name=\"eye-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"!appSettings.profile.showSection\" class=\"settings-section-heading-vis-ico profile hidden\" name=\"eye-off-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                      <ion-toggle #profileVisToggle checked={{appSettings.profile.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle profile\"></ion-toggle>\n                      <div class=\"setting-tog-shield\"></div>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <div *ngIf=\"appSettings.profile.showSection\" class=\"settings-section-toggle-inner-wrapper profile\">\n              <ion-grid *ngIf=\"appSettings.profile.showSection\" class=\"sheriff-grid sheriff-settings-main-grid settings-option-grid profile-option1 profile\">\n                  <ion-row class=\"sheriff-row settings-option-row option-action-row profile-option1\">\n                    <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col profile-option1\">\n                        <div class=\"settings-option-name-wrapper profile-option1\">\n                            <div class=\"settings-option-name-label-txt\">Force Sync</div>\n                            <ion-icon (click)=\"toggleOptInfo('profile','alwaysSync')\" [ngStyle]=\"{'color':appSettings.profile.options.alwaysSync.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col profile-option1\">\n                      <ion-item (click)=\"toggleSyncProfile(pAlwaysSync.checked)\" class=\"settings-propt-item\">\n                        <div class=\"settings-propt-wrapper\">\n                            <ion-checkbox #pAlwaysSync class=\"settings-profileopt-btn-cb show\" [mode]=\"'md'\" [checked]=\"appSettings.profile.options.alwaysSync.value\"></ion-checkbox>\n                            <div [ngStyle]=\"{'color':pAlwaysSync.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-propt-btn-txt show\">Force Web-Sync</div>\n                        </div>\n                        </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row *ngIf=\"appSettings.profile.options.alwaysSync.info\" class=\"sheriff-row settings-option-row option-info-row profile-alwayssync\">\n                    <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col profile-alwayssync\">\n                        <ion-button (click)=\"toggleOptInfo('profile','alwaysSync')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                            <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col profile-alwayssync\">\n                        <div class=\"settings-option-info-text-wrapper profile-alwayssync\">\n                            <div class=\"settings-info-line-item profile-alwayssync-info\">\n                              Force web-scraping of private/profile data every time (slower).\n                            </div>\n                        </div>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n        </div>\n        <!-- -------------------------------------------------------------------------- -->\n        <div class=\"sheriff-page settings-page settings-section-wrapper snoop\">\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <ion-grid class=\"sheriff-grid settings-page-grid heading-grid snoop\">\n              <ion-row (click)=\"sectionVisToggle('snoop',snoopVisToggle.checked)\" class=\"sheriff-row settings-page-row heading-row\">\n                  <ion-col size=\"9\" class=\"sheriff-col settings-page-col heading-col title-col\">\n                      <div class=\"sheriff-settings-subtitle-wrapper\">\n                          <div class=\"settings-main-title-text\">snoop<span class=\"settings-sec-noof-opts-span\"><span class=\"set-noof-hyphen\">-</span>{{noofOpts.snoop}}<span class=\"noof-opt-txt\">Opts</span></span></div>\n                      </div>\n                  </ion-col>\n                  <ion-col size=\"1\" class=\"sheriff-col settings-page-col heading-col vis-col\">\n                      <ion-icon *ngIf=\"appSettings.snoop.showSection\" class=\"settings-section-heading-vis-ico snoop visible\" name=\"eye-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"!appSettings.snoop.showSection\" class=\"settings-section-heading-vis-ico snoop hidden\" name=\"eye-off-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"sheriff-col settings-page-col heading-col toggle-col\">\n                      <ion-toggle #snoopVisToggle checked={{appSettings.snoop.showSection}} mode=\"ios\" class=\"settings-section-vis-toggle snoop\"></ion-toggle>\n                      <div class=\"setting-tog-shield\"></div>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n          <div class=\"settings-main-section-header-gradient\"></div>\n          <div *ngIf=\"appSettings.snoop.showSection\" class=\"settings-section-toggle-inner-wrapper snoop\">\n              <ion-grid *ngIf=\"appSettings.snoop.showSection\" class=\"sheriff-grid sheriff-settings-main-grid settings-option-grid snoop-option1 snoop\">\n                <ion-row class=\"sheriff-row settings-option-row option-action-row snoop-option1\">\n                  <ion-col size=\"3\" class=\"sheriff-col settings-option-col settings-option-name-col snoop-option1\">\n                      <div class=\"settings-option-name-wrapper snoop-option1\">\n                          <div class=\"settings-option-name-label-txt\">Activated</div>\n                          <ion-icon (click)=\"toggleOptInfo('snoop','activated')\" [ngStyle]=\"{'color':appSettings.snoop.options.activated.info?'var(--ion-color-danger)':'#343434'}\" class=\"sheriff-option-info-ico\" name=\"information-circle\"></ion-icon>\n                      </div>\n                  </ion-col>\n                  <ion-col size=\"9\" class=\"sheriff-col settings-option-col settings-option-selection-col snoop-option1\">\n                    <ion-item (click)=\"toggleSnoop(snoopActivated.checked)\" class=\"settings-propt-item\">\n                      <div class=\"settings-propt-wrapper\">\n                          <ion-checkbox #snoopActivated class=\"settings-snoopopt-btn-cb show\" [mode]=\"'md'\" [checked]=\"appSettings.snoop.options.activated.value\"></ion-checkbox>\n                          <div [ngStyle]=\"{'color':snoopActivated.checked?'var(--ion-color-success)':'#aaa'}\" class=\"sheriff-btn-txt settings-propt-btn-txt show\">Snoop Data</div>\n                      </div>\n                      </ion-item>\n                  </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"appSettings.snoop.options.activated.info\" class=\"sheriff-row settings-option-row option-info-row snoop-activated\">\n                <ion-col size=\"1\" class=\"sheriff-col settings-option-col option-info-close-col snoop-activated\">\n                    <ion-button (click)=\"toggleOptInfo('snoop','activated')\" class=\"sheriff-btn sheriff-settings-info-close-btn\">\n                        <ion-icon name=\"close\" class=\"sheriff-btn-ico sheriff-settings-info-close-btn-ico\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"11\" class=\"sheriff-col settings-option-col option-info-txt-col snoop-activated\">\n                    <div class=\"settings-option-info-text-wrapper snoop-activated\">\n                        <div class=\"settings-info-line-item snoop-activated-info\">\n                          Monitor, report and record extra levels of workplace/coworker activity.\n                        </div>\n                    </div>\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n          </div>\n        </div>\n      <!-- -------------------------------------------------------------------------- -->\n      <!-- -------------------------------------------------------------------------- -->\n    </div>\n    <!-- -------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------- -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_settings_settings_module_ts-es5.js.map