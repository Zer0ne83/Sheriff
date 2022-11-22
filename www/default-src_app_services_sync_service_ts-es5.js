(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["default-src_app_services_sync_service_ts"], {
    /***/
    43395:
    /*!******************************************!*\
      !*** ./src/app/services/sync.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SyncService": function SyncService() {
          return (
            /* binding */
            _SyncService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./storage.service */
      71188);
      /* harmony import */


      var _datetime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./datetime.service */
      12826);
      /* harmony import */


      var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events.service */
      80106);
      /* harmony import */


      var _deputy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./deputy.service */
      22092);
      /* harmony import */


      var _sqlite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sqlite.service */
      90636);
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./firebase.service */
      19446);
      /* harmony import */


      var _filesystem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filesystem.service */
      22904);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./detail.service */
      52153); ////////////////////////////////////////////////////////////////


      var _SyncService = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////
        function SyncService(logger, deputy, sqlServ, evServ, dT, storeServ, detailServ, fileServ, fireServ) {
          _classCallCheck(this, SyncService);

          this.logger = logger;
          this.deputy = deputy;
          this.sqlServ = sqlServ;
          this.evServ = evServ;
          this.dT = dT;
          this.storeServ = storeServ;
          this.detailServ = detailServ;
          this.fileServ = fileServ;
          this.fireServ = fireServ; ////////////////////////////////////////////////////////////////

          this.apiTSheets = null;
          this.runDelayOnce = 1;
        } ////////////////////////////////////////////////////////////////


        _createClass(SyncService, [{
          key: "checkServ",
          value: function checkServ() {
            this.logger.info('♻️ [syncServ|doSync] (TRUE)...');
            return Promise.resolve(true);
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "fireBackupDB",
          value: function fireBackupDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var settObj;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 ()...');
                      _context.next = 3;
                      return this.detailServ.getSettings();

                    case 3:
                      settObj = _context.sent;

                      if (settObj.database.options.backupMode.value === 'auto') {
                        this.evServ.subscribe('dbbuBlob', function (blob) {
                          _this.evServ.destroy('dbbuBlob');

                          _this.evServ.subscribe('dbbuULProg', function (ulD) {
                            _this.evServ.destroy('dbbuULProg');

                            switch (ulD.event) {
                              case 'successData':
                                _this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 (✔️ SUCCESS) Uploaded DBBU to Cloud');

                                break;

                              case 'errorData':
                                _this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 (❌ ERROR) Error Uploading DBBU to Cloud');

                                break;
                            }
                          });

                          _this.fireServ.uploadFSDBBU(blob);
                        });
                        this.fileServ.getFireDBBUFile(this.deputy.uUK);
                      } else {
                        this.logger.info('♻️ [syncServ|fireBackupDB]  🚒 (🤞 SKIPPED) DB backupMode!==AUTO');
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "deepValCheck",
          value: function deepValCheck(dbVArr, dpVArr) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var consFn, getTbl, dbArr, dpArr, tblN, sTblN, remPs, remPDB, i, tO, remPDP, _i, _tO, _loop, _i2;

              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.logger.info('♻️ [syncServ|deepValCheck] (dbArr,dpArr)...');

                      consFn = function consFn(r, m) {
                        var rT;
                        r === 's' ? rT = '🟢 SUCCESS' : r === 'w' ? rT = '⚠️ WARNING' : rT = '🔴 ERROR';

                        var c = _this2.logger.info('♻️ [syncServ|deepValCheck] 🩺 (' + rT + '): ' + m);
                      };

                      getTbl = function getTbl(o) {
                        if (o.hasOwnProperty('MatchedByTimesheet')) {
                          return Promise.resolve('rosters');
                        } else if (o.hasOwnProperty('Disputed')) {
                          return Promise.resolve('timesheets');
                        } else if (o.hasOwnProperty('UserPerformTask')) {
                          return Promise.resolve('tasks');
                        } else if (o.hasOwnProperty('ShowFrom')) {
                          return Promise.resolve('memos');
                        }
                      };

                      dbArr = dbVArr;
                      dpArr = dpVArr;
                      _context4.next = 7;
                      return getTbl(dbArr[0]);

                    case 7:
                      tblN = _context4.sent;
                      sTblN = tblN.substring(0, tblN.length - 1);

                      remPs = function remPs(o) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!lodash__WEBPACK_IMPORTED_MODULE_7__.unset(o, 'last_modified')) {
                                    _context2.next = 4;
                                    break;
                                  }

                                  return _context2.abrupt("return", Promise.resolve(true));

                                case 4:
                                  return _context2.abrupt("return", Promise.resolve(false));

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));
                      };

                      if (!(dbArr.length !== dpArr.length)) {
                        _context4.next = 13;
                        break;
                      }

                      consFn('e', 'Total no. of items !== (DB vs DP)');
                      return _context4.abrupt("return");

                    case 13:
                      ;
                      remPDB = true;
                      i = 0;

                    case 16:
                      if (!(i < dbArr.length)) {
                        _context4.next = 25;
                        break;
                      }

                      tO = dbArr[i];
                      _context4.next = 20;
                      return remPs(tO);

                    case 20:
                      if (_context4.sent) {
                        _context4.next = 22;
                        break;
                      }

                      remPDB = false;

                    case 22:
                      i++;
                      _context4.next = 16;
                      break;

                    case 25:
                      ;

                      if (remPDB) {
                        _context4.next = 29;
                        break;
                      }

                      consFn('e', 'Failed to remove last_modified pty from ' + tblN + ' DB obj');
                      return _context4.abrupt("return");

                    case 29:
                      ;
                      remPDP = true;
                      _i = 0;

                    case 32:
                      if (!(_i < dpArr.length)) {
                        _context4.next = 41;
                        break;
                      }

                      _tO = dpArr[_i];
                      _context4.next = 36;
                      return remPs(_tO);

                    case 36:
                      if (_context4.sent) {
                        _context4.next = 38;
                        break;
                      }

                      remPDP = false;

                    case 38:
                      _i++;
                      _context4.next = 32;
                      break;

                    case 41:
                      ;

                      if (remPDP) {
                        _context4.next = 45;
                        break;
                      }

                      consFn('e', 'Failed to remove last_modified pty from ' + tblN + ' DP obj');
                      return _context4.abrupt("return");

                    case 45:
                      ;
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(_i2) {
                        var dbO, dbOId, dpO, diffObj, m, _i3, _Object$entries, _Object$entries$_i, k, v;

                        return regeneratorRuntime.wrap(function _loop$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                dbO = dbArr[_i2];
                                dbOId = dbO.Id;
                                dpO = dpArr.filter(function (o) {
                                  return o.Id === dbOId;
                                })[0];

                                if (lodash__WEBPACK_IMPORTED_MODULE_7__.isEqual(dbO, dpO)) {
                                  _context3.next = 14;
                                  break;
                                }

                                consFn('w', 'Obj Mismatch: ' + sTblN.toUpperCase() + ' ID #' + dbOId + ' - Checking values...');
                                _context3.next = 7;
                                return _this2.myDiff(dpO, dbO);

                              case 7:
                                diffObj = _context3.sent;

                                _this2.logger.info(diffObj);

                                m = [];

                                for (_i3 = 0, _Object$entries = Object.entries(diffObj); _i3 < _Object$entries.length; _i3++) {
                                  _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
                                  m.push(k + '!==' + v);
                                }

                                ;
                                m = m.join(', ');
                                consFn('w', 'Val Mismatch(s): ' + m);
                                /* const fixSQL:string='UPDATE `'+tblN+'` SET ? WHERE `Id` = ?';
                                const fixVals:any[]=[diffObj,dbOId];
                                const dbRes:boolean=await this.sqlServ.syncUpdateItem(fixSQL,fixVals);
                                if(dbRes){consFn('s','🛠️ Fixed/Updated '+Object.keys(diffObj).join(', ')+' for '+sTblN.toUpperCase()+' ID #'+dbOId)}
                                else{consFn('e','🛠️ Failed to Update '+Object.keys(diffObj).join(', ')+' for '+sTblN.toUpperCase()+' ID #'+dbOId)} */

                              case 14:
                                ;

                              case 15:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _loop);
                      });
                      _i2 = 0;

                    case 48:
                      if (!(_i2 < dbArr.length)) {
                        _context4.next = 53;
                        break;
                      }

                      return _context4.delegateYield(_loop(_i2), "t0", 50);

                    case 50:
                      _i2++;
                      _context4.next = 48;
                      break;

                    case 53:
                      ;

                    case 54:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //////////////////////////////////////////////////

          /**
          // @param  {Object} object Obj compared (mySQL)
          // @param  {Object} base   Obj to compare (Fire)
          // @return {Object} return Obj the Difference
          */
          //////////////////////////////////////////////////

        }, {
          key: "myDiff",
          value: function myDiff(object, base) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var changes;
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      changes = function _changes(object, base) {
                        return lodash__WEBPACK_IMPORTED_MODULE_7__.transform(object, function (result, value, key) {
                          if (!lodash__WEBPACK_IMPORTED_MODULE_7__.isEqual(value, base[key])) {
                            result[key] = lodash__WEBPACK_IMPORTED_MODULE_7__.isObject(value) && lodash__WEBPACK_IMPORTED_MODULE_7__.isObject(base[key]) ? changes(value, base[key]) : value;
                          }
                        });
                      };

                      return _context5.abrupt("return", changes(object, base));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee4);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "doSingleSync",
          value: function doSingleSync(tableN) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var isDiff, actReq, isStaged, apiC, dbC, apiData, dbData, apiIds, dbIds, i, _i4, _ret, sendToAPI, _i7;

              return regeneratorRuntime.wrap(function _callee6$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.logger.info('♻️ [syncServ|doSingleSync] (' + tableN + ')...');
                      _context8.next = 3;
                      return this.deputy.getResSyncCount(tableN);

                    case 3:
                      apiC = _context8.sent;
                      _context8.next = 6;
                      return this.sqlServ.getItemCount(tableN);

                    case 6:
                      dbC = _context8.sent;
                      apiC > 500 ? isStaged = true : isStaged = false;

                      if (apiC > dbC) {
                        isDiff = true;
                        actReq = 'down';
                        this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): Need to [DOWNLOAD] ' + Math.abs(apiC - dbC) + ' ' + tableN + ' Item(s) from API.');
                      } else if (dbC > apiC) {
                        isDiff = true;
                        actReq = 'up';
                        this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): Need to [UPLOAD/SAVE] ' + Math.abs(apiC - dbC) + ' ' + tableN + ' Item(s) to API.');
                      } else {
                        isDiff = false;
                        this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): ' + apiC + '(api) === ' + dbC + '(db) - No Difference/Action Required.');
                      }

                      ; //Prog #1

                      this.evServ.publish('refreshTSProg', 'getapi');

                      if (isStaged) {
                        _context8.next = 49;
                        break;
                      }

                      _context8.next = 14;
                      return this.deputy.getTSheetSyncRange(false, null, null, false);

                    case 14:
                      apiData = _context8.sent;
                      _context8.next = 17;
                      return this.sqlServ.getAllTableItems(tableN);

                    case 17:
                      dbData = _context8.sent.values;
                      //Prog #2
                      this.evServ.publish('refreshTSProg', 'diffcheck');

                      if (!(apiData.length > 0 && dbData.length > 0)) {
                        _context8.next = 45;
                        break;
                      }

                      this.logger.info('♻️ [syncServ|Deputy|getTSheetSyncRange] (Success) - Comparing ' + apiData.length + ' API Items to ' + dbData.length + ' DB Items...');

                      if (!isDiff) {
                        _context8.next = 42;
                        break;
                      }

                      apiIds = [];
                      dbIds = [];

                      for (i = 0; i < apiData.length; i++) {
                        apiIds.push(apiData[i].Id);
                      }

                      ;

                      for (_i4 = 0; _i4 < dbData.length; _i4++) {
                        dbIds.push(dbData[_i4].Id);
                      }

                      ;

                      if (!(actReq === 'down')) {
                        _context8.next = 35;
                        break;
                      }

                      return _context8.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var getFromAPI, insCount, insErr, _i5, _loop2, _i6, _ret2;

                        return regeneratorRuntime.wrap(function _callee5$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                getFromAPI = [];
                                insCount = 0;
                                insErr = false;

                                for (_i5 = 0; _i5 < apiIds.length; _i5++) {
                                  if (!dbIds.includes(apiIds[_i5])) {
                                    getFromAPI.push(apiIds[_i5]);
                                  }
                                }

                                ;

                                _this3.logger.info('♻️ [syncServ|Diff] (Result): Download from API (' + tableN + ') >>> Ids ' + getFromAPI.join(', '));

                                _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(_i6) {
                                  var missingObj, insRes;
                                  return regeneratorRuntime.wrap(function _loop2$(_context6) {
                                    while (1) {
                                      switch (_context6.prev = _context6.next) {
                                        case 0:
                                          missingObj = apiData.filter(function (o) {
                                            return o.Id === getFromAPI[_i6];
                                          })[0];
                                          _context6.next = 3;
                                          return _this3.sqlServ.insertSingleItem(tableN, missingObj);

                                        case 3:
                                          insRes = _context6.sent;

                                          if (insRes === true) {
                                            insCount++;
                                          } else {
                                            insCount++;
                                            insErr = true;
                                          }

                                          ;

                                          if (!(insCount === getFromAPI.length)) {
                                            _context6.next = 11;
                                            break;
                                          }

                                          //Prog #3
                                          _this3.evServ.publish('refreshTSProg', 'insertupload');

                                          _this3.logger.info('♻️ [syncServ|InsertMissing] (Finished) [' + insCount + '/' + getFromAPI.length + ']...');

                                          _this3.logger.info('♻️ [syncServ|doSingleSync|Missing] (Insert Missing Objs Api=>DB) COMPLETED!');

                                          return _context6.abrupt("return", {
                                            v: {
                                              v: Promise.resolve(getFromAPI)
                                            }
                                          });

                                        case 11:
                                        case "end":
                                          return _context6.stop();
                                      }
                                    }
                                  }, _loop2);
                                });
                                _i6 = 0;

                              case 8:
                                if (!(_i6 < getFromAPI.length)) {
                                  _context7.next = 16;
                                  break;
                                }

                                return _context7.delegateYield(_loop2(_i6), "t0", 10);

                              case 10:
                                _ret2 = _context7.t0;

                                if (!(typeof _ret2 === "object")) {
                                  _context7.next = 13;
                                  break;
                                }

                                return _context7.abrupt("return", _ret2.v);

                              case 13:
                                _i6++;
                                _context7.next = 8;
                                break;

                              case 16:
                                ;

                                if (insCount > 0) {
                                  _this3.fireBackupDB();
                                }

                                ;

                              case 19:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee5);
                      })(), "t0", 30);

                    case 30:
                      _ret = _context8.t0;

                      if (!(typeof _ret === "object")) {
                        _context8.next = 33;
                        break;
                      }

                      return _context8.abrupt("return", _ret.v);

                    case 33:
                      _context8.next = 40;
                      break;

                    case 35:
                      sendToAPI = [];

                      for (_i7 = 0; _i7 < dbIds.length; _i7++) {
                        if (!apiIds.includes(dbIds[_i7])) {
                          sendToAPI.push(dbIds[_i7]);
                        }
                      }

                      ;
                      this.logger.info('♻️ [syncServ|Diff] (Result): Upload to API (' + tableN + ') >>> Ids ' + sendToAPI.join(','));
                      return _context8.abrupt("return", Promise.resolve(sendToAPI));

                    case 40:
                      _context8.next = 43;
                      break;

                    case 42:
                      return _context8.abrupt("return", Promise.resolve([]));

                    case 43:
                      _context8.next = 47;
                      break;

                    case 45:
                      this.logger.info('♻️ [syncServ|Deputy|getTSheetSyncRange] (Error) - NIL Items Returned by API and/or DB - Aborting.');
                      return _context8.abrupt("return", Promise.resolve([]));

                    case 47:
                      _context8.next = 51;
                      break;

                    case 49:
                      this.logger.info('♻️ [syncServ|doSingleSync] (All Mode) - Checking All ' + tableN + ' Items (New/Updated)...');
                      return _context8.abrupt("return", Promise.resolve([]));

                    case 51:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee6, this);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "doTSheetsSync",
          value: function doTSheetsSync(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              var syncRes, c, p, lastSyncUTS, lastSyncDate, lSDBVal, apiObs, dbObs, dbObIds, i, missAPIObs, _i8, missOb, modCompareAPIObs, _loop3, _i9;

              return regeneratorRuntime.wrap(function _callee7$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.logger.info('♻️ [syncServ|doTSheetSync] (' + mode + ')...'); // Prep Promise/Return Vars

                      syncRes = {
                        changed: false,
                        added: [],
                        modified: []
                      }; // Get Now & Last Sync UTSs

                      c = function c() {
                        if (mode === 'refresh') {
                          return true;
                        } else {
                          return false;
                        }
                      };

                      p = function p() {
                        _this4.evServ.publish('refreshTSheetsProg', null);
                      };

                      lastSyncUTS = 0;
                      _context10.next = 7;
                      return this.sqlServ.getSync('timesheets');

                    case 7:
                      lSDBVal = _context10.sent;

                      if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                        lastSyncUTS = lSDBVal;
                        lastSyncDate = this.dT.Dut(lastSyncUTS);
                      } else {
                        lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
                        lastSyncDate = this.dT.subYs(new Date(), 1);
                      }

                      ;

                      if (c) {
                        p();
                      }

                      ; //Prog #1
                      // Get API & DB Object Lists for Comparison

                      apiObs = [];
                      dbObs = [];
                      dbObIds = [];

                      if (!(this.apiTSheets !== null)) {
                        _context10.next = 19;
                        break;
                      }

                      apiObs = this.apiTSheets;
                      _context10.next = 22;
                      break;

                    case 19:
                      _context10.next = 21;
                      return this.deputy.getAllTSheetsOrderById();

                    case 21:
                      apiObs = _context10.sent.data;

                    case 22:
                      ;
                      _context10.next = 25;
                      return this.sqlServ.getAllTSheetsOrderId();

                    case 25:
                      dbObs = _context10.sent;

                      if (c) {
                        p();
                      }

                      ; //Prog #2
                      // Check All API Obs Appear In DB - Add Missing

                      for (i = 0; i < dbObs.length; i++) {
                        dbObIds.push(dbObs[i].Id);
                      }

                      ;
                      missAPIObs = apiObs.filter(function (apiOb) {
                        return !dbObIds.includes(apiOb.Id);
                      });

                      if (!(missAPIObs.length > 0)) {
                        _context10.next = 44;
                        break;
                      }

                      syncRes.changed = true;
                      _i8 = 0;

                    case 34:
                      if (!(_i8 < missAPIObs.length)) {
                        _context10.next = 42;
                        break;
                      }

                      missOb = missAPIObs[_i8];
                      _context10.next = 38;
                      return this.sqlServ.insertSingleItem('timesheets', missOb);

                    case 38:
                      syncRes.added.push(missOb.Id);

                    case 39:
                      _i8++;
                      _context10.next = 34;
                      break;

                    case 42:
                      _context10.next = 45;
                      break;

                    case 44:
                      this.logger.info('♻️ [syncServ|doTSheetsSync] [' + missAPIObs.length + '] Timesheets Required [MISSING] Updates.');

                    case 45:
                      ;

                      if (c) {
                        p();
                      }

                      ; //Prog #3
                      // Replace DB Ob if API Ob Has Later Modified Date

                      modCompareAPIObs = apiObs.filter(function (apiOb) {
                        return !syncRes.added.includes(apiOb.Id);
                      });

                      if (!(modCompareAPIObs.length > 0)) {
                        _context10.next = 60;
                        break;
                      }

                      syncRes.changed = true;
                      _loop3 = /*#__PURE__*/regeneratorRuntime.mark(function _loop3(_i9) {
                        var modAPIOb, modDBObI, modAPIObDate, modDBObDate;
                        return regeneratorRuntime.wrap(function _loop3$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                modAPIOb = modCompareAPIObs[_i9];
                                modDBObI = dbObs.findIndex(function (ts) {
                                  return ts.Id === modAPIOb.Id;
                                });
                                modAPIObDate = new Date(modAPIOb.Modified);
                                modDBObDate = null;
                                modDBObI !== -1 ? modDBObDate = new Date(dbObs[modDBObI].Modified) : modDBObDate = null;

                                if (!(modDBObDate !== null)) {
                                  _context9.next = 10;
                                  break;
                                }

                                if (!_this4.dT.isA(modAPIObDate, modDBObDate)) {
                                  _context9.next = 10;
                                  break;
                                }

                                _context9.next = 9;
                                return _this4.sqlServ.replaceItem('timesheets', 'Id', modAPIOb.Id, modAPIOb);

                              case 9:
                                syncRes.modified.push(modAPIOb.Id);

                              case 10:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _loop3);
                      });
                      _i9 = 0;

                    case 53:
                      if (!(_i9 < modCompareAPIObs.length)) {
                        _context10.next = 58;
                        break;
                      }

                      return _context10.delegateYield(_loop3(_i9), "t0", 55);

                    case 55:
                      _i9++;
                      _context10.next = 53;
                      break;

                    case 58:
                      _context10.next = 61;
                      break;

                    case 60:
                      this.logger.info('♻️ [syncServ|doTSheetsSync] [' + modCompareAPIObs.length + '] Timesheets Required [MODIFIED] Updates.');

                    case 61:
                      ; /////////////////////////////////////////////////////

                      this.logger.info('>>>>> SYNC: [RESULT]: Changes: ' + syncRes.changed.toUpperCase + ' - Added: ' + syncRes.added.join(',') + ' (' + syncRes.added.length + ') | Modified: ' + syncRes.modified.join(',') + ' (' + syncRes.modified.length + ')');

                      if (c) {
                        p();
                      }

                      ; //Prog #4

                      _context10.next = 67;
                      return this.sqlServ.setSync('timesheets');

                    case 67:
                      if (syncRes.changed) {
                        this.fireBackupDB();
                      }

                      ;
                      return _context10.abrupt("return", Promise.resolve(syncRes));

                    case 70:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee7, this);
            }));
          } //////////////////////////////////////////////////////////////// 

        }, {
          key: "delayedInitsFN",
          value: function delayedInitsFN(udbI) {
            var _this5 = this;

            this.logger.info('♻️ [syncServ|delayedInitsFN] ()...');
            this.logger.info('♻️ [syncServ|delayedInitsFN] UDB Import Detected! (' + udbI + ') >>> [DELAYED ALERT/INIT/SYNC ACTIVATED]...');

            if (this.runDelayOnce === 1) {
              this.runDelayOnce--;
              var dSIStageCount = 0;
              this.evServ.subscribe('delayedSyncInit', function (dSIStage) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          dSIStageCount++;
                          this.logger.info('♻️ [syncServ|delayedInitsFN] - STAGE #' + dSIStageCount + '/2 = ' + dSIStage.toUpperCase());

                          if (!(dSIStageCount === 2)) {
                            _context11.next = 7;
                            break;
                          }

                          this.evServ.destroy('delayedSyncInit');
                          _context11.next = 6;
                          return this.detailServ.setUDBWasImported(false);

                        case 6:
                          this.evServ.publish('delayedSyncDone', true);

                        case 7:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee8, this);
                }));
              });
            } else {
              this.logger.info('♻️ [syncServ|delayedInitsFN] ALREADY RUNNING - Ignoring Subsequent Request!');
            }

            ;
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "doShiftsSync",
          value: function doShiftsSync(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this6 = this;

              var udbImportd, c, p, syncRes, lastSyncUTS, lSDBVal, syncAgo, apiObs, dbObs, dbObIds, lsMyObUTS, myObSyncAgo, tDiffS, tDiffM, tDiffH, tDiffD, _tDiffS, _tDiffM, _tDiffH, _tDiffD, addedAPIObIds, i, missAPIObs, _i10, missOb, updatedDBObIds, modedAPIObs, modIds, _i11, _i12, modOb, updateRes, uIds, weekTSArr, extraShiftTSArr, _i13, xtraOb, notMatchedTS, _loop4, _i14;

              return regeneratorRuntime.wrap(function _callee9$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.logger.info('♻️ [syncServ|doShiftsSync] (' + mode + ')...');
                      _context13.next = 3;
                      return this.detailServ.getUDBWasImported();

                    case 3:
                      udbImportd = _context13.sent;

                      if (udbImportd) {
                        this.delayedInitsFN(udbImportd);
                      }

                      ;

                      c = function c() {
                        if (mode === 'refresh') {
                          return true;
                        } else {
                          return false;
                        }
                      };

                      p = function p() {
                        _this6.evServ.publish('refreshTSheetsProg', null);
                      };

                      syncRes = {
                        changed: false,
                        ids: [],
                        xtras: []
                      }; // Get Now & Last Sync UTSs

                      lastSyncUTS = 0;
                      _context13.next = 12;
                      return this.sqlServ.getSync('rosters');

                    case 12:
                      lSDBVal = _context13.sent;

                      if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                        lastSyncUTS = lSDBVal;
                      } else {
                        lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
                      }

                      ; //////////////// Mock Old Sync

                      lastSyncUTS = this.dT.getUT(this.dT.subDays(new Date(), 2)); ////////////////

                      syncAgo = this.dT.fDtN(this.dT.Dut(lastSyncUTS)).replace('about', '≈');

                      if (c) {
                        p();
                      }

                      ; //Prog #1
                      // Get API & DB Object Lists for Comparison

                      apiObs = [];
                      dbObs = [];
                      dbObIds = [];
                      _context13.next = 24;
                      return this.deputy.getMy('roster');

                    case 24:
                      apiObs = _context13.sent.data;
                      console.log(apiObs);
                      this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (ApiObs): ' + apiObs.length); // if earliest MY roster is more recent than last sync?
                      // convert all MY roster ob Dates to UTSs & find lowest

                      lsMyObUTS = this.dT.getUT(new Date(lodash__WEBPACK_IMPORTED_MODULE_7__.minBy(apiObs, function (myO) {
                        return _this6.dT.getUT(new Date(myO.Date));
                      }).Date));
                      myObSyncAgo = this.dT.fDtN(this.dT.Dut(lsMyObUTS)).replace('about', '≈');
                      this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (SyncUTS): ' + lastSyncUTS + ' (' + syncAgo + ')');
                      this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (MyObUTS): ' + lsMyObUTS + ' (' + myObSyncAgo + ')');

                      if (lastSyncUTS < lsMyObUTS) {
                        tDiffS = lsMyObUTS - lastSyncUTS;
                        tDiffM = tDiffS / 60;
                        tDiffH = tDiffM / 60;
                        tDiffD = tDiffH / 24;

                        if (tDiffH > 24) {
                          console.log('Synced ' + tDiffD.toFixed(1) + ' days [BEFORE] MY data starts');
                        } else {
                          console.log('Synced ' + tDiffH.toFixed(1) + ' hours [BEFORE] MY data starts');
                        }
                      } else {
                        _tDiffS = lastSyncUTS - lsMyObUTS;
                        _tDiffM = _tDiffS / 60;
                        _tDiffH = _tDiffM / 60;
                        _tDiffD = _tDiffH / 24;

                        if (_tDiffH > 24) {
                          console.log('Synced ' + _tDiffD.toFixed(1) + ' days [AFTER] MY data starts');
                        } else {
                          console.log('Synced ' + _tDiffH.toFixed(1) + ' hours [AFTER] MY data starts');
                        }
                      }

                      ;
                      _context13.next = 35;
                      return this.sqlServ.getAllRosters();

                    case 35:
                      dbObs = _context13.sent;

                      if (c) {
                        p();
                      }

                      ; //Prog #2
                      // Check All API Obs Appear In DB List - Add Any Missing

                      addedAPIObIds = [];

                      for (i = 0; i < dbObs.length; i++) {
                        dbObIds.push(dbObs[i].Id);
                      }

                      ;
                      missAPIObs = apiObs.filter(function (apiOb) {
                        return !dbObIds.includes(apiOb.Id);
                      });

                      if (!(missAPIObs.length > 0)) {
                        _context13.next = 54;
                        break;
                      }

                      _i10 = 0;

                    case 44:
                      if (!(_i10 < missAPIObs.length)) {
                        _context13.next = 52;
                        break;
                      }

                      missOb = missAPIObs[_i10];
                      _context13.next = 48;
                      return this.sqlServ.insertSingleItem('rosters', missOb);

                    case 48:
                      addedAPIObIds.push(missOb.Id);

                    case 49:
                      _i10++;
                      _context13.next = 44;
                      break;

                    case 52:
                      ;

                      if (addedAPIObIds.length > 0) {
                        syncRes.changed = true;
                        syncRes.ids = addedAPIObIds;
                      }

                    case 54:
                      if (c) {
                        p();
                      }

                      ; //Prog #3
                      // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 

                      updatedDBObIds = [];
                      modedAPIObs = apiObs.filter(function (apiOb) {
                        return !addedAPIObIds.includes(apiOb.Id) && _this6.dT.getUT(new Date(apiOb.Modified)) > lastSyncUTS;
                      });

                      if (!(modedAPIObs.length > 0)) {
                        _context13.next = 75;
                        break;
                      }

                      modIds = [];

                      for (_i11 = 0; _i11 < modedAPIObs.length; _i11++) {
                        modIds.push(modedAPIObs[_i11].Id);
                      }

                      ;
                      _i12 = 0;

                    case 63:
                      if (!(_i12 < modedAPIObs.length)) {
                        _context13.next = 72;
                        break;
                      }

                      modOb = modedAPIObs[_i12];
                      _context13.next = 67;
                      return this.sqlServ.replaceItem('rosters', 'Id', modOb.Id, modOb);

                    case 67:
                      updateRes = _context13.sent;

                      if (updateRes.result) {
                        updatedDBObIds.push(updateRes.id);
                      }

                    case 69:
                      _i12++;
                      _context13.next = 63;
                      break;

                    case 72:
                      ;

                      if (updatedDBObIds.length > 0) {
                        syncRes.changed = true;

                        if (syncRes.ids.length > 0) {
                          uIds = syncRes.concat(updatedDBObIds);
                          uIds = lodash__WEBPACK_IMPORTED_MODULE_7__.uniq(uIds);
                        } else {
                          syncRes.ids = updatedDBObIds;
                        }
                      }

                      ;

                    case 75:
                      ; /////////////////////////////////////////////////////

                      _context13.next = 78;
                      return this.deputy.getWeekTSheets();

                    case 78:
                      weekTSArr = _context13.sent;
                      extraShiftTSArr = weekTSArr.filter(function (ts) {
                        return ts.Roster === null;
                      });

                      if (!(extraShiftTSArr.length > 0)) {
                        _context13.next = 90;
                        break;
                      }

                      _i13 = 0;

                    case 82:
                      if (!(_i13 < extraShiftTSArr.length)) {
                        _context13.next = 90;
                        break;
                      }

                      xtraOb = extraShiftTSArr[_i13];
                      _context13.next = 86;
                      return this.sqlServ.insertSingleItem('timesheets', xtraOb);

                    case 86:
                      syncRes.xtras.push(xtraOb);

                    case 87:
                      _i13++;
                      _context13.next = 82;
                      break;

                    case 90:
                      /////////////////////////////////////////////////////
                      notMatchedTS = dbObs.filter(function (rosO) {
                        return rosO.MatchedByTimesheet < 1;
                      });

                      if (!(notMatchedTS.length > 0)) {
                        _context13.next = 99;
                        break;
                      }

                      _loop4 = /*#__PURE__*/regeneratorRuntime.mark(function _loop4(_i14) {
                        var nMRos, nMRosDate, nMRosId, apiRes, modRosArr, modRosOb;
                        return regeneratorRuntime.wrap(function _loop4$(_context12) {
                          while (1) {
                            switch (_context12.prev = _context12.next) {
                              case 0:
                                nMRos = notMatchedTS[_i14];
                                nMRosDate = new Date(nMRos.Date);
                                nMRosId = nMRos.Id;
                                _context12.next = 5;
                                return _this6.deputy.getMissTSRoster(nMRosDate);

                              case 5:
                                apiRes = _context12.sent;

                                if (!(apiRes.result && apiRes.data.length > 0)) {
                                  _context12.next = 12;
                                  break;
                                }

                                modRosArr = apiRes.data.filter(function (r) {
                                  return r.Id === nMRosId;
                                });

                                if (!(modRosArr.length > 0)) {
                                  _context12.next = 12;
                                  break;
                                }

                                modRosOb = modRosArr[0];
                                _context12.next = 12;
                                return _this6.sqlServ.replaceItem('rosters', 'Id', modRosOb.Id, modRosOb);

                              case 12:
                              case "end":
                                return _context12.stop();
                            }
                          }
                        }, _loop4);
                      });
                      _i14 = 0;

                    case 94:
                      if (!(_i14 < notMatchedTS.length)) {
                        _context13.next = 99;
                        break;
                      }

                      return _context13.delegateYield(_loop4(_i14), "t0", 96);

                    case 96:
                      _i14++;
                      _context13.next = 94;
                      break;

                    case 99:
                      /////////////////////////////////////////////////////
                      if (syncRes.changed) {
                        console.log('>>>>> SYNC: [RESULT]: { changed: ' + syncRes.changed + ', ids: ' + syncRes.ids + ' }.');
                      } else {
                        console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');
                      }

                      if (c) {
                        p();
                      }

                      ; //Prog #4

                      _context13.next = 104;
                      return this.sqlServ.setSync('rosters');

                    case 104:
                      if (syncRes.changed) {
                        this.fireBackupDB();
                      }

                      ;

                      if (udbImportd) {
                        this.evServ.publish('delayedSyncInit', 'shifts');
                        this.doTasksSync('delayed');
                      }

                      ;
                      return _context13.abrupt("return", Promise.resolve(syncRes));

                    case 109:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee9, this);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "doTasksSync",
          value: function doTasksSync(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this7 = this;

              var syncRes, c, p, lastSyncUTS, lSDBVal, apiObs, dbObs, dbObIds, apiObIds, _yield$this$deputy$ge, status, data, addedAPIObIds, deletedDBObIds, i, _i15, missAPIObs, missDBObs, _i16, missOb, _i17, _missOb, updatedDBObIds, modedAPIObs, modIds, _i18, _i19, modOb, updateRes, uIds;

              return regeneratorRuntime.wrap(function _callee10$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.logger.info('♻️ [syncServ|doTasksSync] (' + mode + ')...'); // Prep Promise/Return Vars

                      syncRes = {
                        changed: false,
                        ids: []
                      }; // Get Now & Last Sync UTSs

                      c = function c() {
                        if (mode === 'refresh') {
                          return true;
                        } else {
                          return false;
                        }
                      };

                      p = function p() {
                        _this7.evServ.publish('refreshTasksProg', null);
                      };

                      lastSyncUTS = 0;
                      _context14.next = 7;
                      return this.sqlServ.getSync('tasks');

                    case 7:
                      lSDBVal = _context14.sent;

                      if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                        lastSyncUTS = lSDBVal;
                      } else {
                        lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
                      }

                      ;

                      if (c) {
                        p();
                      }

                      ; //Prog #1
                      // Get API & DB Object Lists for Comparison

                      apiObs = [];
                      dbObs = [];
                      dbObIds = [];
                      apiObIds = [];
                      _context14.next = 18;
                      return this.deputy.getResource('Task');

                    case 18:
                      _yield$this$deputy$ge = _context14.sent;
                      status = _yield$this$deputy$ge.status;
                      data = _yield$this$deputy$ge.data;

                      if (status === 200) {
                        apiObs = data;
                      }

                      ;
                      _context14.next = 25;
                      return this.sqlServ.getAllTableItems('tasks');

                    case 25:
                      dbObs = _context14.sent.values;

                      if (c) {
                        p();
                      }

                      ; //Prog #2
                      // Check All API Obs Appear In DB List - Add Any Missing

                      addedAPIObIds = [];
                      deletedDBObIds = [];

                      for (i = 0; i < dbObs.length; i++) {
                        dbObIds.push(dbObs[i].Id);
                      }

                      ;

                      for (_i15 = 0; _i15 < apiObs.length; _i15++) {
                        apiObIds.push(apiObs[_i15].Id);
                      }

                      ;
                      missAPIObs = apiObs.filter(function (apiOb) {
                        return !dbObIds.includes(apiOb.Id);
                      });
                      missDBObs = dbObs.filter(function (dbOb) {
                        return !apiObIds.includes(dbOb.Id);
                      });

                      if (!(missDBObs.length > 0)) {
                        _context14.next = 47;
                        break;
                      }

                      _i16 = 0;

                    case 38:
                      if (!(_i16 < missDBObs.length)) {
                        _context14.next = 46;
                        break;
                      }

                      missOb = missDBObs[_i16];
                      _context14.next = 42;
                      return this.sqlServ.deleteItem('tasks', 'Id', missOb.Id);

                    case 42:
                      deletedDBObIds.push(missOb.Id);

                    case 43:
                      _i16++;
                      _context14.next = 38;
                      break;

                    case 46:
                      if (deletedDBObIds.length > 0) {
                        syncRes.changed = true;
                        syncRes.ids = deletedDBObIds;
                      }

                    case 47:
                      if (!(missAPIObs.length > 0)) {
                        _context14.next = 58;
                        break;
                      }

                      _i17 = 0;

                    case 49:
                      if (!(_i17 < missAPIObs.length)) {
                        _context14.next = 57;
                        break;
                      }

                      _missOb = missAPIObs[_i17];
                      _context14.next = 53;
                      return this.sqlServ.insertSingleItem('tasks', _missOb);

                    case 53:
                      addedAPIObIds.push(_missOb.Id);

                    case 54:
                      _i17++;
                      _context14.next = 49;
                      break;

                    case 57:
                      if (addedAPIObIds.length > 0) {
                        syncRes.changed = true;
                        syncRes.ids = addedAPIObIds;
                      }

                    case 58:
                      if (c) {
                        p();
                      }

                      ; //Prog #3
                      // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 

                      updatedDBObIds = [];
                      modedAPIObs = apiObs.filter(function (apiOb) {
                        return !addedAPIObIds.includes(apiOb.Id) && !deletedDBObIds.includes(apiOb.Id) && _this7.dT.getUT(new Date(apiOb.Modified)) > lastSyncUTS;
                      });

                      if (!(modedAPIObs.length > 0)) {
                        _context14.next = 79;
                        break;
                      }

                      modIds = [];

                      for (_i18 = 0; _i18 < modedAPIObs.length; _i18++) {
                        modIds.push(modedAPIObs[_i18].Id);
                      }

                      ;
                      _i19 = 0;

                    case 67:
                      if (!(_i19 < modedAPIObs.length)) {
                        _context14.next = 76;
                        break;
                      }

                      modOb = modedAPIObs[_i19];
                      _context14.next = 71;
                      return this.sqlServ.replaceItem('tasks', 'Id', modOb.Id, modOb);

                    case 71:
                      updateRes = _context14.sent;

                      if (updateRes.result) {
                        updatedDBObIds.push(updateRes.id);
                      }

                    case 73:
                      _i19++;
                      _context14.next = 67;
                      break;

                    case 76:
                      ;

                      if (updatedDBObIds.length > 0) {
                        syncRes.changed = true;

                        if (syncRes.ids.length > 0) {
                          uIds = syncRes.ids.concat(updatedDBObIds);
                          uIds = lodash__WEBPACK_IMPORTED_MODULE_7__.uniq(uIds);
                        } else {
                          syncRes.ids = updatedDBObIds;
                        }
                      }

                      ;

                    case 79:
                      ;

                      if (syncRes.changed) {
                        console.log('>>>>> SYNC: [RESULT]: { changed: ' + syncRes.changed + ', ids: ' + syncRes.ids + ' }.');
                      } else {
                        console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');
                      }

                      if (c) {
                        p();
                      }

                      ; //Prog #4

                      _context14.next = 85;
                      return this.sqlServ.setSync('tasks');

                    case 85:
                      if (syncRes.changed) {
                        this.fireBackupDB();
                      }

                      ;

                      if (mode === 'delayed') {
                        this.evServ.publish('delayedSyncInit', 'tasks');
                      }

                      ;
                      return _context14.abrupt("return", Promise.resolve(syncRes));

                    case 90:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee10, this);
            }));
          } ////////////////////////////////////////////////////////////////

        }, {
          key: "doMemosSync",
          value: function doMemosSync(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this8 = this;

              var syncRes, c, p, lastSyncUTS, lSDBVal, apiObs, dbObs, dbObIds, apiObIds, _yield$this$deputy$ge2, status, data, addedAPIObIds, deletedDBObIds, i, _i20, missAPIObs, missDBObs, _i21, missOb, _i22, _missOb2, updatedDBObIds, modedAPIObs, modIds, _i23, _i24, modOb, updateRes, uIds;

              return regeneratorRuntime.wrap(function _callee11$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.logger.info('♻️ [syncServ|doMemosSync] (' + mode + ')...'); // Prep Promise/Return Vars

                      syncRes = {
                        changed: false,
                        ids: []
                      }; // Get Now & Last Sync UTSs

                      c = function c() {
                        if (mode === 'refresh') {
                          return true;
                        } else {
                          return false;
                        }
                      };

                      p = function p() {
                        _this8.evServ.publish('refreshTasksProg', null);
                      };

                      lastSyncUTS = 0;
                      _context15.next = 7;
                      return this.sqlServ.getSync('memos');

                    case 7:
                      lSDBVal = _context15.sent;

                      if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                        lastSyncUTS = lSDBVal;
                      } else {
                        lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
                      }

                      ;

                      if (c) {
                        p();
                      }

                      ; //Prog #1
                      // Get API & DB Object Lists for Comparison

                      apiObs = [];
                      dbObs = [];
                      dbObIds = [];
                      apiObIds = [];
                      _context15.next = 18;
                      return this.deputy.getResource('Memo');

                    case 18:
                      _yield$this$deputy$ge2 = _context15.sent;
                      status = _yield$this$deputy$ge2.status;
                      data = _yield$this$deputy$ge2.data;

                      if (status === 200) {
                        apiObs = data;
                      }

                      ;
                      _context15.next = 25;
                      return this.sqlServ.getAllTableItems('memos');

                    case 25:
                      dbObs = _context15.sent.values;

                      if (c) {
                        p();
                      }

                      ; //Prog #2
                      // Check All API Obs Appear In DB List - Add Any Missing

                      addedAPIObIds = [];
                      deletedDBObIds = [];

                      for (i = 0; i < dbObs.length; i++) {
                        dbObIds.push(dbObs[i].Id);
                      }

                      ;

                      for (_i20 = 0; _i20 < apiObs.length; _i20++) {
                        apiObIds.push(apiObs[_i20].Id);
                      }

                      ;
                      missAPIObs = apiObs.filter(function (apiOb) {
                        return !dbObIds.includes(apiOb.Id);
                      });
                      missDBObs = dbObs.filter(function (dbOb) {
                        return !apiObIds.includes(dbOb.Id);
                      });

                      if (!(missDBObs.length > 0)) {
                        _context15.next = 47;
                        break;
                      }

                      _i21 = 0;

                    case 38:
                      if (!(_i21 < missDBObs.length)) {
                        _context15.next = 46;
                        break;
                      }

                      missOb = missDBObs[_i21];
                      _context15.next = 42;
                      return this.sqlServ.deleteItem('memos', 'Id', missOb.Id);

                    case 42:
                      deletedDBObIds.push(missOb.Id);

                    case 43:
                      _i21++;
                      _context15.next = 38;
                      break;

                    case 46:
                      if (deletedDBObIds.length > 0) {
                        syncRes.changed = true;
                        syncRes.ids = deletedDBObIds;
                      }

                    case 47:
                      if (!(missAPIObs.length > 0)) {
                        _context15.next = 58;
                        break;
                      }

                      _i22 = 0;

                    case 49:
                      if (!(_i22 < missAPIObs.length)) {
                        _context15.next = 57;
                        break;
                      }

                      _missOb2 = missAPIObs[_i22];
                      _context15.next = 53;
                      return this.sqlServ.insertSingleItem('tasks', _missOb2);

                    case 53:
                      addedAPIObIds.push(_missOb2.Id);

                    case 54:
                      _i22++;
                      _context15.next = 49;
                      break;

                    case 57:
                      if (addedAPIObIds.length > 0) {
                        syncRes.changed = true;
                        syncRes.ids = addedAPIObIds;
                      }

                    case 58:
                      if (c) {
                        p();
                      }

                      ; //Prog #3
                      // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 

                      updatedDBObIds = [];
                      modedAPIObs = apiObs.filter(function (apiOb) {
                        return !addedAPIObIds.includes(apiOb.Id) && !deletedDBObIds.includes(apiOb.Id) && _this8.dT.getUT(new Date(apiOb.Modified)) > lastSyncUTS;
                      });

                      if (!(modedAPIObs.length > 0)) {
                        _context15.next = 79;
                        break;
                      }

                      modIds = [];

                      for (_i23 = 0; _i23 < modedAPIObs.length; _i23++) {
                        modIds.push(modedAPIObs[_i23].Id);
                      }

                      ;
                      _i24 = 0;

                    case 67:
                      if (!(_i24 < modedAPIObs.length)) {
                        _context15.next = 76;
                        break;
                      }

                      modOb = modedAPIObs[_i24];
                      _context15.next = 71;
                      return this.sqlServ.replaceItem('memos', 'Id', modOb.Id, modOb);

                    case 71:
                      updateRes = _context15.sent;

                      if (updateRes.result) {
                        updatedDBObIds.push(updateRes.id);
                      }

                    case 73:
                      _i24++;
                      _context15.next = 67;
                      break;

                    case 76:
                      ;

                      if (updatedDBObIds.length > 0) {
                        syncRes.changed = true;

                        if (syncRes.ids.length > 0) {
                          uIds = syncRes.ids.concat(updatedDBObIds);
                          uIds = lodash__WEBPACK_IMPORTED_MODULE_7__.uniq(uIds);
                        } else {
                          syncRes.ids = updatedDBObIds;
                        }
                      }

                      ;

                    case 79:
                      ;

                      if (syncRes.changed) {
                        console.log('>>>>> SYNC: [RESULT]: { changed: ' + syncRes.changed + ', ids: ' + syncRes.ids + ' }.');
                      } else {
                        console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');
                      }

                      if (c) {
                        p();
                      }

                      ; //Prog #4

                      _context15.next = 85;
                      return this.sqlServ.setSync('tasks');

                    case 85:
                      if (syncRes.changed) {
                        this.fireBackupDB();
                      }

                      ;
                      return _context15.abrupt("return", Promise.resolve(syncRes));

                    case 88:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return SyncService;
      }();

      _SyncService.ctorParameters = function () {
        return [{
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_10__.NGXLogger
        }, {
          type: _deputy_service__WEBPACK_IMPORTED_MODULE_3__.DeputyService
        }, {
          type: _sqlite_service__WEBPACK_IMPORTED_MODULE_4__.SQLiteService
        }, {
          type: _events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
        }, {
          type: _datetime_service__WEBPACK_IMPORTED_MODULE_1__.DateTimeService
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
        }, {
          type: _detail_service__WEBPACK_IMPORTED_MODULE_8__.DetailService
        }, {
          type: _filesystem_service__WEBPACK_IMPORTED_MODULE_6__.FileSystemService
        }, {
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_5__.FirebaseService
        }];
      };

      _SyncService = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
      }) ////////////////////////////////////////////////////////////////
      ], _SyncService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_services_sync_service_ts-es5.js.map