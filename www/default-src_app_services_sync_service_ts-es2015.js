(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["default-src_app_services_sync_service_ts"],{

/***/ 43395:
/*!******************************************!*\
  !*** ./src/app/services/sync.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncService": function() { return /* binding */ SyncService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 71188);
/* harmony import */ var _datetime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime.service */ 12826);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.service */ 80106);
/* harmony import */ var _deputy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deputy.service */ 22092);
/* harmony import */ var _sqlite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sqlite.service */ 90636);
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebase.service */ 19446);
/* harmony import */ var _filesystem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filesystem.service */ 22904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail.service */ 52153);












////////////////////////////////////////////////////////////////
let SyncService = class SyncService {
    ////////////////////////////////////////////////////////////////
    constructor(logger, deputy, sqlServ, evServ, dT, storeServ, detailServ, fileServ, fireServ) {
        this.logger = logger;
        this.deputy = deputy;
        this.sqlServ = sqlServ;
        this.evServ = evServ;
        this.dT = dT;
        this.storeServ = storeServ;
        this.detailServ = detailServ;
        this.fileServ = fileServ;
        this.fireServ = fireServ;
        ////////////////////////////////////////////////////////////////
        this.apiTSheets = null;
        this.runDelayOnce = 1;
    }
    ////////////////////////////////////////////////////////////////
    checkServ() {
        this.logger.info('♻️ [syncServ|doSync] (TRUE)...');
        return Promise.resolve(true);
    }
    ////////////////////////////////////////////////////////////////
    fireBackupDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 ()...');
            const settObj = yield this.detailServ.getSettings();
            if (settObj.database.options.backupMode.value === 'auto') {
                this.evServ.subscribe('dbbuBlob', blob => {
                    this.evServ.destroy('dbbuBlob');
                    this.evServ.subscribe('dbbuULProg', ulD => {
                        this.evServ.destroy('dbbuULProg');
                        switch (ulD.event) {
                            case 'successData':
                                this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 (✔️ SUCCESS) Uploaded DBBU to Cloud');
                                break;
                            case 'errorData':
                                this.logger.info('♻️ [syncServ|fireBackupDB] 🚒 (❌ ERROR) Error Uploading DBBU to Cloud');
                                break;
                        }
                    });
                    this.fireServ.uploadFSDBBU(blob);
                });
                this.fileServ.getFireDBBUFile(this.deputy.uUK);
            }
            else {
                this.logger.info('♻️ [syncServ|fireBackupDB]  🚒 (🤞 SKIPPED) DB backupMode!==AUTO');
            }
        });
    }
    ////////////////////////////////////////////////////////////////
    deepValCheck(dbVArr, dpVArr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('♻️ [syncServ|deepValCheck] (dbArr,dpArr)...');
            const consFn = (r, m) => { let rT; r === 's' ? rT = '🟢 SUCCESS' : r === 'w' ? rT = '⚠️ WARNING' : rT = '🔴 ERROR'; const c = this.logger.info('♻️ [syncServ|deepValCheck] 🩺 (' + rT + '): ' + m); };
            const getTbl = (o) => { if (o.hasOwnProperty('MatchedByTimesheet')) {
                return Promise.resolve('rosters');
            }
            else if (o.hasOwnProperty('Disputed')) {
                return Promise.resolve('timesheets');
            }
            else if (o.hasOwnProperty('UserPerformTask')) {
                return Promise.resolve('tasks');
            }
            else if (o.hasOwnProperty('ShowFrom')) {
                return Promise.resolve('memos');
            } };
            let dbArr = dbVArr;
            let dpArr = dpVArr;
            const tblN = yield getTbl(dbArr[0]);
            const sTblN = tblN.substring(0, tblN.length - 1);
            const remPs = (o) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () { if (lodash__WEBPACK_IMPORTED_MODULE_7__.unset(o, 'last_modified')) {
                return Promise.resolve(true);
            }
            else {
                return Promise.resolve(false);
            } });
            if (dbArr.length !== dpArr.length) {
                consFn('e', 'Total no. of items !== (DB vs DP)');
                return;
            }
            ;
            let remPDB = true;
            for (let i = 0; i < dbArr.length; i++) {
                const tO = dbArr[i];
                if (!(yield remPs(tO))) {
                    remPDB = false;
                }
            }
            ;
            if (!remPDB) {
                consFn('e', 'Failed to remove last_modified pty from ' + tblN + ' DB obj');
                return;
            }
            ;
            let remPDP = true;
            for (let i = 0; i < dpArr.length; i++) {
                const tO = dpArr[i];
                if (!(yield remPs(tO))) {
                    remPDP = false;
                }
            }
            ;
            if (!remPDP) {
                consFn('e', 'Failed to remove last_modified pty from ' + tblN + ' DP obj');
                return;
            }
            ;
            for (let i = 0; i < dbArr.length; i++) {
                const dbO = dbArr[i];
                const dbOId = dbO.Id;
                const dpO = dpArr.filter(o => o.Id === dbOId)[0];
                if (!lodash__WEBPACK_IMPORTED_MODULE_7__.isEqual(dbO, dpO)) {
                    consFn('w', 'Obj Mismatch: ' + sTblN.toUpperCase() + ' ID #' + dbOId + ' - Checking values...');
                    const diffObj = yield this.myDiff(dpO, dbO);
                    this.logger.info(diffObj);
                    let m = [];
                    for (const [k, v] of Object.entries(diffObj)) {
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
                }
                ;
            }
            ;
        });
    }
    //////////////////////////////////////////////////
    /**
    // @param  {Object} object Obj compared (mySQL)
    // @param  {Object} base   Obj to compare (Fire)
    // @return {Object} return Obj the Difference
    */
    //////////////////////////////////////////////////
    myDiff(object, base) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            function changes(object, base) {
                return lodash__WEBPACK_IMPORTED_MODULE_7__.transform(object, function (result, value, key) {
                    if (!lodash__WEBPACK_IMPORTED_MODULE_7__.isEqual(value, base[key])) {
                        result[key] = (lodash__WEBPACK_IMPORTED_MODULE_7__.isObject(value) && lodash__WEBPACK_IMPORTED_MODULE_7__.isObject(base[key])) ? changes(value, base[key]) : value;
                    }
                });
            }
            return changes(object, base);
        });
    }
    ////////////////////////////////////////////////////////////////
    doSingleSync(tableN) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('♻️ [syncServ|doSingleSync] (' + tableN + ')...');
            let isDiff;
            let actReq;
            let isStaged;
            const apiC = yield this.deputy.getResSyncCount(tableN);
            const dbC = yield this.sqlServ.getItemCount(tableN);
            apiC > 500 ? isStaged = true : isStaged = false;
            if (apiC > dbC) {
                isDiff = true;
                actReq = 'down';
                this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): Need to [DOWNLOAD] ' + Math.abs(apiC - dbC) + ' ' + tableN + ' Item(s) from API.');
            }
            else if (dbC > apiC) {
                isDiff = true;
                actReq = 'up';
                this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): Need to [UPLOAD/SAVE] ' + Math.abs(apiC - dbC) + ' ' + tableN + ' Item(s) to API.');
            }
            else {
                isDiff = false;
                this.logger.info('♻️ [syncServ|doSingleSync] (Count Diff): ' + apiC + '(api) === ' + dbC + '(db) - No Difference/Action Required.');
            }
            ;
            //Prog #1
            this.evServ.publish('refreshTSProg', 'getapi');
            if (!isStaged) {
                const apiData = yield this.deputy.getTSheetSyncRange(false, null, null, false);
                const dbData = (yield this.sqlServ.getAllTableItems(tableN)).values;
                //Prog #2
                this.evServ.publish('refreshTSProg', 'diffcheck');
                if (apiData.length > 0 && dbData.length > 0) {
                    this.logger.info('♻️ [syncServ|Deputy|getTSheetSyncRange] (Success) - Comparing ' + apiData.length + ' API Items to ' + dbData.length + ' DB Items...');
                    if (isDiff) {
                        let apiIds = [];
                        let dbIds = [];
                        for (let i = 0; i < apiData.length; i++) {
                            apiIds.push(apiData[i].Id);
                        }
                        ;
                        for (let i = 0; i < dbData.length; i++) {
                            dbIds.push(dbData[i].Id);
                        }
                        ;
                        if (actReq === 'down') {
                            let getFromAPI = [];
                            let insCount = 0;
                            let insErr = false;
                            for (let i = 0; i < apiIds.length; i++) {
                                if (!dbIds.includes(apiIds[i])) {
                                    getFromAPI.push(apiIds[i]);
                                }
                            }
                            ;
                            this.logger.info('♻️ [syncServ|Diff] (Result): Download from API (' + tableN + ') >>> Ids ' + getFromAPI.join(', '));
                            for (let i = 0; i < getFromAPI.length; i++) {
                                const missingObj = apiData.filter(o => o.Id === getFromAPI[i])[0];
                                const insRes = yield this.sqlServ.insertSingleItem(tableN, missingObj);
                                if (insRes === true) {
                                    insCount++;
                                }
                                else {
                                    insCount++;
                                    insErr = true;
                                }
                                ;
                                if (insCount === getFromAPI.length) {
                                    //Prog #3
                                    this.evServ.publish('refreshTSProg', 'insertupload');
                                    this.logger.info('♻️ [syncServ|InsertMissing] (Finished) [' + insCount + '/' + getFromAPI.length + ']...');
                                    this.logger.info('♻️ [syncServ|doSingleSync|Missing] (Insert Missing Objs Api=>DB) COMPLETED!');
                                    return Promise.resolve(getFromAPI);
                                }
                            }
                            ;
                            if (insCount > 0) {
                                this.fireBackupDB();
                            }
                            ;
                        }
                        else {
                            let sendToAPI = [];
                            for (let i = 0; i < dbIds.length; i++) {
                                if (!apiIds.includes(dbIds[i])) {
                                    sendToAPI.push(dbIds[i]);
                                }
                            }
                            ;
                            this.logger.info('♻️ [syncServ|Diff] (Result): Upload to API (' + tableN + ') >>> Ids ' + sendToAPI.join(','));
                            return Promise.resolve(sendToAPI);
                        }
                    }
                    else {
                        return Promise.resolve([]);
                    }
                }
                else {
                    this.logger.info('♻️ [syncServ|Deputy|getTSheetSyncRange] (Error) - NIL Items Returned by API and/or DB - Aborting.');
                    return Promise.resolve([]);
                }
            }
            else {
                this.logger.info('♻️ [syncServ|doSingleSync] (All Mode) - Checking All ' + tableN + ' Items (New/Updated)...');
                return Promise.resolve([]);
            }
        });
    }
    ////////////////////////////////////////////////////////////////
    doTSheetsSync(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('♻️ [syncServ|doTSheetSync] (' + mode + ')...');
            // Prep Promise/Return Vars
            let syncRes = { changed: false, added: [], modified: [] };
            // Get Now & Last Sync UTSs
            const c = () => { if (mode === 'refresh') {
                return true;
            }
            else {
                return false;
            } };
            const p = () => { this.evServ.publish('refreshTSheetsProg', null); };
            let lastSyncUTS = 0;
            let lastSyncDate;
            const lSDBVal = yield this.sqlServ.getSync('timesheets');
            if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                lastSyncUTS = lSDBVal;
                lastSyncDate = this.dT.Dut(lastSyncUTS);
            }
            else {
                lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
                lastSyncDate = this.dT.subYs(new Date(), 1);
            }
            ;
            if (c) {
                p();
            }
            ; //Prog #1
            // Get API & DB Object Lists for Comparison
            let apiObs = [];
            let dbObs = [];
            let dbObIds = [];
            if (this.apiTSheets !== null) {
                apiObs = this.apiTSheets;
            }
            else {
                apiObs = (yield this.deputy.getAllTSheetsOrderById()).data;
            }
            ;
            dbObs = yield this.sqlServ.getAllTSheetsOrderId();
            if (c) {
                p();
            }
            ; //Prog #2
            // Check All API Obs Appear In DB - Add Missing
            for (let i = 0; i < dbObs.length; i++) {
                dbObIds.push(dbObs[i].Id);
            }
            ;
            const missAPIObs = apiObs.filter(apiOb => !dbObIds.includes(apiOb.Id));
            if (missAPIObs.length > 0) {
                syncRes.changed = true;
                for (let i = 0; i < missAPIObs.length; i++) {
                    const missOb = missAPIObs[i];
                    yield this.sqlServ.insertSingleItem('timesheets', missOb);
                    syncRes.added.push(missOb.Id);
                }
            }
            else {
                this.logger.info('♻️ [syncServ|doTSheetsSync] [' + missAPIObs.length + '] Timesheets Required [MISSING] Updates.');
            }
            ;
            if (c) {
                p();
            }
            ; //Prog #3
            // Replace DB Ob if API Ob Has Later Modified Date
            const modCompareAPIObs = apiObs.filter(apiOb => !syncRes.added.includes(apiOb.Id));
            if (modCompareAPIObs.length > 0) {
                syncRes.changed = true;
                for (let i = 0; i < modCompareAPIObs.length; i++) {
                    const modAPIOb = modCompareAPIObs[i];
                    const modDBObI = dbObs.findIndex(ts => ts.Id === modAPIOb.Id);
                    const modAPIObDate = new Date(modAPIOb.Modified);
                    let modDBObDate = null;
                    modDBObI !== -1 ? modDBObDate = new Date(dbObs[modDBObI].Modified) : modDBObDate = null;
                    if (modDBObDate !== null) {
                        if (this.dT.isA(modAPIObDate, modDBObDate)) {
                            yield this.sqlServ.replaceItem('timesheets', 'Id', modAPIOb.Id, modAPIOb);
                            syncRes.modified.push(modAPIOb.Id);
                        }
                    }
                }
            }
            else {
                this.logger.info('♻️ [syncServ|doTSheetsSync] [' + modCompareAPIObs.length + '] Timesheets Required [MODIFIED] Updates.');
            }
            ;
            /////////////////////////////////////////////////////
            this.logger.info('>>>>> SYNC: [RESULT]: Changes: ' + syncRes.changed.toUpperCase + ' - Added: ' + syncRes.added.join(',') + ' (' + syncRes.added.length + ') | Modified: ' + syncRes.modified.join(',') + ' (' + syncRes.modified.length + ')');
            if (c) {
                p();
            }
            ; //Prog #4
            yield this.sqlServ.setSync('timesheets');
            if (syncRes.changed) {
                this.fireBackupDB();
            }
            ;
            return Promise.resolve(syncRes);
        });
    }
    //////////////////////////////////////////////////////////////// 
    delayedInitsFN(udbI) {
        this.logger.info('♻️ [syncServ|delayedInitsFN] ()...');
        this.logger.info('♻️ [syncServ|delayedInitsFN] UDB Import Detected! (' + udbI + ') >>> [DELAYED ALERT/INIT/SYNC ACTIVATED]...');
        if (this.runDelayOnce === 1) {
            this.runDelayOnce--;
            let dSIStageCount = 0;
            this.evServ.subscribe('delayedSyncInit', (dSIStage) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                dSIStageCount++;
                this.logger.info('♻️ [syncServ|delayedInitsFN] - STAGE #' + dSIStageCount + '/2 = ' + dSIStage.toUpperCase());
                if (dSIStageCount === 2) {
                    this.evServ.destroy('delayedSyncInit');
                    yield this.detailServ.setUDBWasImported(false);
                    this.evServ.publish('delayedSyncDone', true);
                }
            }));
        }
        else {
            this.logger.info('♻️ [syncServ|delayedInitsFN] ALREADY RUNNING - Ignoring Subsequent Request!');
        }
        ;
    }
    ////////////////////////////////////////////////////////////////
    doShiftsSync(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('♻️ [syncServ|doShiftsSync] (' + mode + ')...');
            const udbImportd = yield this.detailServ.getUDBWasImported();
            if (udbImportd) {
                this.delayedInitsFN(udbImportd);
            }
            ;
            const c = () => { if (mode === 'refresh') {
                return true;
            }
            else {
                return false;
            } };
            const p = () => { this.evServ.publish('refreshTSheetsProg', null); };
            let syncRes = { changed: false, ids: [], xtras: [] };
            // Get Now & Last Sync UTSs
            let lastSyncUTS = 0;
            const lSDBVal = yield this.sqlServ.getSync('rosters');
            if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                lastSyncUTS = lSDBVal;
            }
            else {
                lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
            }
            ;
            //////////////// Mock Old Sync
            lastSyncUTS = this.dT.getUT(this.dT.subDays(new Date(), 2));
            ////////////////
            const syncAgo = this.dT.fDtN(this.dT.Dut(lastSyncUTS)).replace('about', '≈');
            if (c) {
                p();
            }
            ; //Prog #1
            // Get API & DB Object Lists for Comparison
            let apiObs = [];
            let dbObs = [];
            let dbObIds = [];
            apiObs = (yield this.deputy.getMy('roster')).data;
            console.log(apiObs);
            this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (ApiObs): ' + apiObs.length);
            // if earliest MY roster is more recent than last sync?
            // convert all MY roster ob Dates to UTSs & find lowest
            const lsMyObUTS = this.dT.getUT(new Date((lodash__WEBPACK_IMPORTED_MODULE_7__.minBy(apiObs, myO => this.dT.getUT(new Date(myO.Date)))).Date));
            const myObSyncAgo = this.dT.fDtN(this.dT.Dut(lsMyObUTS)).replace('about', '≈');
            this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (SyncUTS): ' + lastSyncUTS + ' (' + syncAgo + ')');
            this.logger.info('♻️ [syncServ|delayedInitsFN] [ROSTERS] (MyObUTS): ' + lsMyObUTS + ' (' + myObSyncAgo + ')');
            if (lastSyncUTS < lsMyObUTS) {
                const tDiffS = lsMyObUTS - lastSyncUTS;
                const tDiffM = tDiffS / 60;
                const tDiffH = tDiffM / 60;
                const tDiffD = tDiffH / 24;
                if (tDiffH > 24) {
                    console.log('Synced ' + tDiffD.toFixed(1) + ' days [BEFORE] MY data starts');
                }
                else {
                    console.log('Synced ' + tDiffH.toFixed(1) + ' hours [BEFORE] MY data starts');
                }
            }
            else {
                const tDiffS = lastSyncUTS - lsMyObUTS;
                const tDiffM = tDiffS / 60;
                const tDiffH = tDiffM / 60;
                const tDiffD = tDiffH / 24;
                if (tDiffH > 24) {
                    console.log('Synced ' + tDiffD.toFixed(1) + ' days [AFTER] MY data starts');
                }
                else {
                    console.log('Synced ' + tDiffH.toFixed(1) + ' hours [AFTER] MY data starts');
                }
            }
            ;
            dbObs = yield this.sqlServ.getAllRosters();
            if (c) {
                p();
            }
            ; //Prog #2
            // Check All API Obs Appear In DB List - Add Any Missing
            let addedAPIObIds = [];
            for (let i = 0; i < dbObs.length; i++) {
                dbObIds.push(dbObs[i].Id);
            }
            ;
            const missAPIObs = apiObs.filter(apiOb => !dbObIds.includes(apiOb.Id));
            if (missAPIObs.length > 0) {
                for (let i = 0; i < missAPIObs.length; i++) {
                    const missOb = missAPIObs[i];
                    yield this.sqlServ.insertSingleItem('rosters', missOb);
                    addedAPIObIds.push(missOb.Id);
                }
                ;
                if (addedAPIObIds.length > 0) {
                    syncRes.changed = true;
                    syncRes.ids = addedAPIObIds;
                }
            }
            if (c) {
                p();
            }
            ; //Prog #3
            // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 
            let updatedDBObIds = [];
            const modedAPIObs = apiObs.filter(apiOb => !addedAPIObIds.includes(apiOb.Id) && this.dT.getUT(new Date(apiOb.Modified)) > lastSyncUTS);
            if (modedAPIObs.length > 0) {
                const modIds = [];
                for (let i = 0; i < modedAPIObs.length; i++) {
                    modIds.push(modedAPIObs[i].Id);
                }
                ;
                for (let i = 0; i < modedAPIObs.length; i++) {
                    const modOb = modedAPIObs[i];
                    const updateRes = yield this.sqlServ.replaceItem('rosters', 'Id', modOb.Id, modOb);
                    if (updateRes.result) {
                        updatedDBObIds.push(updateRes.id);
                    }
                }
                ;
                if (updatedDBObIds.length > 0) {
                    syncRes.changed = true;
                    if (syncRes.ids.length > 0) {
                        let uIds = syncRes.concat(updatedDBObIds);
                        uIds = lodash__WEBPACK_IMPORTED_MODULE_7__.uniq(uIds);
                    }
                    else {
                        syncRes.ids = updatedDBObIds;
                    }
                }
                ;
            }
            ;
            /////////////////////////////////////////////////////
            const weekTSArr = yield this.deputy.getWeekTSheets();
            const extraShiftTSArr = weekTSArr.filter(ts => ts.Roster === null);
            if (extraShiftTSArr.length > 0) {
                for (let i = 0; i < extraShiftTSArr.length; i++) {
                    const xtraOb = extraShiftTSArr[i];
                    yield this.sqlServ.insertSingleItem('timesheets', xtraOb);
                    syncRes.xtras.push(xtraOb);
                }
            }
            /////////////////////////////////////////////////////
            const notMatchedTS = dbObs.filter(rosO => rosO.MatchedByTimesheet < 1);
            if (notMatchedTS.length > 0) {
                for (let i = 0; i < notMatchedTS.length; i++) {
                    const nMRos = notMatchedTS[i];
                    const nMRosDate = new Date(nMRos.Date);
                    const nMRosId = nMRos.Id;
                    const apiRes = yield this.deputy.getMissTSRoster(nMRosDate);
                    if (apiRes.result && apiRes.data.length > 0) {
                        const modRosArr = apiRes.data.filter(r => r.Id === nMRosId);
                        if (modRosArr.length > 0) {
                            const modRosOb = modRosArr[0];
                            yield this.sqlServ.replaceItem('rosters', 'Id', modRosOb.Id, modRosOb);
                        }
                    }
                }
            }
            /////////////////////////////////////////////////////
            if (syncRes.changed) {
                console.log('>>>>> SYNC: [RESULT]: { changed: ' + syncRes.changed + ', ids: ' + syncRes.ids + ' }.');
            }
            else {
                console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');
            }
            if (c) {
                p();
            }
            ; //Prog #4
            yield this.sqlServ.setSync('rosters');
            if (syncRes.changed) {
                this.fireBackupDB();
            }
            ;
            if (udbImportd) {
                this.evServ.publish('delayedSyncInit', 'shifts');
                this.doTasksSync('delayed');
            }
            ;
            return Promise.resolve(syncRes);
        });
    }
    ////////////////////////////////////////////////////////////////
    doTasksSync(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('♻️ [syncServ|doTasksSync] (' + mode + ')...');
            // Prep Promise/Return Vars
            let syncRes = { changed: false, ids: [] };
            // Get Now & Last Sync UTSs
            const c = () => { if (mode === 'refresh') {
                return true;
            }
            else {
                return false;
            } };
            const p = () => { this.evServ.publish('refreshTasksProg', null); };
            let lastSyncUTS = 0;
            const lSDBVal = yield this.sqlServ.getSync('tasks');
            if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                lastSyncUTS = lSDBVal;
            }
            else {
                lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
            }
            ;
            if (c) {
                p();
            }
            ; //Prog #1
            // Get API & DB Object Lists for Comparison
            let apiObs = [];
            let dbObs = [];
            let dbObIds = [];
            let apiObIds = [];
            const { status, data } = yield this.deputy.getResource('Task');
            if (status === 200) {
                apiObs = data;
            }
            ;
            dbObs = (yield this.sqlServ.getAllTableItems('tasks')).values;
            if (c) {
                p();
            }
            ; //Prog #2
            // Check All API Obs Appear In DB List - Add Any Missing
            let addedAPIObIds = [];
            let deletedDBObIds = [];
            for (let i = 0; i < dbObs.length; i++) {
                dbObIds.push(dbObs[i].Id);
            }
            ;
            for (let i = 0; i < apiObs.length; i++) {
                apiObIds.push(apiObs[i].Id);
            }
            ;
            const missAPIObs = apiObs.filter(apiOb => !dbObIds.includes(apiOb.Id));
            const missDBObs = dbObs.filter(dbOb => !apiObIds.includes(dbOb.Id));
            if (missDBObs.length > 0) {
                for (let i = 0; i < missDBObs.length; i++) {
                    const missOb = missDBObs[i];
                    yield this.sqlServ.deleteItem('tasks', 'Id', missOb.Id);
                    deletedDBObIds.push(missOb.Id);
                }
                if (deletedDBObIds.length > 0) {
                    syncRes.changed = true;
                    syncRes.ids = deletedDBObIds;
                }
            }
            if (missAPIObs.length > 0) {
                for (let i = 0; i < missAPIObs.length; i++) {
                    const missOb = missAPIObs[i];
                    yield this.sqlServ.insertSingleItem('tasks', missOb);
                    addedAPIObIds.push(missOb.Id);
                }
                if (addedAPIObIds.length > 0) {
                    syncRes.changed = true;
                    syncRes.ids = addedAPIObIds;
                }
            }
            if (c) {
                p();
            }
            ; //Prog #3
            // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 
            let updatedDBObIds = [];
            const modedAPIObs = apiObs.filter(apiOb => !addedAPIObIds.includes(apiOb.Id) && !deletedDBObIds.includes(apiOb.Id) && this.dT.getUT(new Date(apiOb.Modified)) > lastSyncUTS);
            if (modedAPIObs.length > 0) {
                const modIds = [];
                for (let i = 0; i < modedAPIObs.length; i++) {
                    modIds.push(modedAPIObs[i].Id);
                }
                ;
                for (let i = 0; i < modedAPIObs.length; i++) {
                    const modOb = modedAPIObs[i];
                    const updateRes = yield this.sqlServ.replaceItem('tasks', 'Id', modOb.Id, modOb);
                    if (updateRes.result) {
                        updatedDBObIds.push(updateRes.id);
                    }
                }
                ;
                if (updatedDBObIds.length > 0) {
                    syncRes.changed = true;
                    if (syncRes.ids.length > 0) {
                        let uIds = syncRes.ids.concat(updatedDBObIds);
                        uIds = lodash__WEBPACK_IMPORTED_MODULE_7__.uniq(uIds);
                    }
                    else {
                        syncRes.ids = updatedDBObIds;
                    }
                }
                ;
            }
            ;
            if (syncRes.changed) {
                console.log('>>>>> SYNC: [RESULT]: { changed: ' + syncRes.changed + ', ids: ' + syncRes.ids + ' }.');
            }
            else {
                console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');
            }
            if (c) {
                p();
            }
            ; //Prog #4
            yield this.sqlServ.setSync('tasks');
            if (syncRes.changed) {
                this.fireBackupDB();
            }
            ;
            if (mode === 'delayed') {
                this.evServ.publish('delayedSyncInit', 'tasks');
            }
            ;
            return Promise.resolve(syncRes);
        });
    }
    ////////////////////////////////////////////////////////////////
    doMemosSync(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('♻️ [syncServ|doMemosSync] (' + mode + ')...');
            // Prep Promise/Return Vars
            let syncRes = { changed: false, ids: [] };
            // Get Now & Last Sync UTSs
            const c = () => { if (mode === 'refresh') {
                return true;
            }
            else {
                return false;
            } };
            const p = () => { this.evServ.publish('refreshTasksProg', null); };
            let lastSyncUTS = 0;
            const lSDBVal = yield this.sqlServ.getSync('memos');
            if (lSDBVal && lSDBVal !== null && lSDBVal !== 0 && lSDBVal !== undefined && this.dT.isV(this.dT.Dut(lastSyncUTS))) {
                lastSyncUTS = lSDBVal;
            }
            else {
                lastSyncUTS = this.dT.getUT(this.dT.subYs(new Date(), 1));
            }
            ;
            if (c) {
                p();
            }
            ; //Prog #1
            // Get API & DB Object Lists for Comparison
            let apiObs = [];
            let dbObs = [];
            let dbObIds = [];
            let apiObIds = [];
            const { status, data } = yield this.deputy.getResource('Memo');
            if (status === 200) {
                apiObs = data;
            }
            ;
            dbObs = (yield this.sqlServ.getAllTableItems('memos')).values;
            if (c) {
                p();
            }
            ; //Prog #2
            // Check All API Obs Appear In DB List - Add Any Missing
            let addedAPIObIds = [];
            let deletedDBObIds = [];
            for (let i = 0; i < dbObs.length; i++) {
                dbObIds.push(dbObs[i].Id);
            }
            ;
            for (let i = 0; i < apiObs.length; i++) {
                apiObIds.push(apiObs[i].Id);
            }
            ;
            const missAPIObs = apiObs.filter(apiOb => !dbObIds.includes(apiOb.Id));
            const missDBObs = dbObs.filter(dbOb => !apiObIds.includes(dbOb.Id));
            if (missDBObs.length > 0) {
                for (let i = 0; i < missDBObs.length; i++) {
                    const missOb = missDBObs[i];
                    yield this.sqlServ.deleteItem('memos', 'Id', missOb.Id);
                    deletedDBObIds.push(missOb.Id);
                }
                if (deletedDBObIds.length > 0) {
                    syncRes.changed = true;
                    syncRes.ids = deletedDBObIds;
                }
            }
            if (missAPIObs.length > 0) {
                for (let i = 0; i < missAPIObs.length; i++) {
                    const missOb = missAPIObs[i];
                    yield this.sqlServ.insertSingleItem('tasks', missOb);
                    addedAPIObIds.push(missOb.Id);
                }
                if (addedAPIObIds.length > 0) {
                    syncRes.changed = true;
                    syncRes.ids = addedAPIObIds;
                }
            }
            if (c) {
                p();
            }
            ; //Prog #3
            // Check All API (less new - above) & DB Modified Fields Match - Update DB With Modified API Obs 
            let updatedDBObIds = [];
            const modedAPIObs = apiObs.filter(apiOb => !addedAPIObIds.includes(apiOb.Id) && !deletedDBObIds.includes(apiOb.Id) && this.dT.getUT(new Date(apiOb.Modified)) > lastSyncUTS);
            if (modedAPIObs.length > 0) {
                const modIds = [];
                for (let i = 0; i < modedAPIObs.length; i++) {
                    modIds.push(modedAPIObs[i].Id);
                }
                ;
                for (let i = 0; i < modedAPIObs.length; i++) {
                    const modOb = modedAPIObs[i];
                    const updateRes = yield this.sqlServ.replaceItem('memos', 'Id', modOb.Id, modOb);
                    if (updateRes.result) {
                        updatedDBObIds.push(updateRes.id);
                    }
                }
                ;
                if (updatedDBObIds.length > 0) {
                    syncRes.changed = true;
                    if (syncRes.ids.length > 0) {
                        let uIds = syncRes.ids.concat(updatedDBObIds);
                        uIds = lodash__WEBPACK_IMPORTED_MODULE_7__.uniq(uIds);
                    }
                    else {
                        syncRes.ids = updatedDBObIds;
                    }
                }
                ;
            }
            ;
            if (syncRes.changed) {
                console.log('>>>>> SYNC: [RESULT]: { changed: ' + syncRes.changed + ', ids: ' + syncRes.ids + ' }.');
            }
            else {
                console.log('>>>>> SYNC: [RESULT]: No New/Updated Items Found.');
            }
            if (c) {
                p();
            }
            ; //Prog #4
            yield this.sqlServ.setSync('tasks');
            if (syncRes.changed) {
                this.fireBackupDB();
            }
            ;
            return Promise.resolve(syncRes);
        });
    }
};
SyncService.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_10__.NGXLogger },
    { type: _deputy_service__WEBPACK_IMPORTED_MODULE_3__.DeputyService },
    { type: _sqlite_service__WEBPACK_IMPORTED_MODULE_4__.SQLiteService },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _datetime_service__WEBPACK_IMPORTED_MODULE_1__.DateTimeService },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _detail_service__WEBPACK_IMPORTED_MODULE_8__.DetailService },
    { type: _filesystem_service__WEBPACK_IMPORTED_MODULE_6__.FileSystemService },
    { type: _firebase_service__WEBPACK_IMPORTED_MODULE_5__.FirebaseService }
];
SyncService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({ providedIn: 'root' })
    ////////////////////////////////////////////////////////////////
], SyncService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_sync_service_ts-es2015.js.map