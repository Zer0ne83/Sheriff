(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_tabs_tabtasks_tabtasks_module_ts"],{

/***/ 66749:
/*!**************************************************!*\
  !*** ./src/app/tabs/tabtasks/tabtasks.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTasksPageModule": function() { return /* binding */ TabTasksPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _tabtasks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabtasks.page */ 58746);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../directives/directives.module */ 78434);









const routes = [
    {
        path: '',
        component: _tabtasks_page__WEBPACK_IMPORTED_MODULE_0__.TabTasksPage
    }
];
let TabTasksPageModule = class TabTasksPageModule {
};
TabTasksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot(),
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule
        ],
        declarations: [_tabtasks_page__WEBPACK_IMPORTED_MODULE_0__.TabTasksPage]
    })
], TabTasksPageModule);



/***/ }),

/***/ 58746:
/*!************************************************!*\
  !*** ./src/app/tabs/tabtasks/tabtasks.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTasksPage": function() { return /* binding */ TabTasksPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabtasks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabtasks.page.html */ 46382);
/* harmony import */ var _tabtasks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabtasks.page.scss */ 71086);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/events.service */ 80106);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/sqlite.service */ 90636);
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/detail.service */ 52153);
/* harmony import */ var src_app_services_datetime_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/datetime.service */ 12826);
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sync.service */ 43395);
/* harmony import */ var src_app_services_deputy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/deputy.service */ 22092);
/* harmony import */ var src_app_modals_detail_task_add_task_add_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/detail/task-add/task-add.page */ 81900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-logger */ 62740);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
















////////////////////////////////////////////////////////////////////////////////////////
let TabTasksPage = class TabTasksPage {
    ////////////////////////////////////////////////////////////////////////////////////////
    constructor(plt, router, logger, modalCtrl, sqlServ, syncServ, evServ, deputy, dT, detailServ) {
        this.plt = plt;
        this.router = router;
        this.logger = logger;
        this.modalCtrl = modalCtrl;
        this.sqlServ = sqlServ;
        this.syncServ = syncServ;
        this.evServ = evServ;
        this.deputy = deputy;
        this.dT = dT;
        this.detailServ = detailServ;
        this.dbDataTbl = 'tasks';
        this.myPpl = [];
        this.progCirc = { responsive: true, showTitle: false, showSubtitle: false, showUnits: false, percent: 0, radius: 56, outerStrokeWidth: 4, showInnerStroke: false, outerStrokeColor: '#FF9800', animation: true, backgroundPadding: 2, animationDuration: 400 };
        this.preventRefreshPull = false;
        // Task List/Data/DB
        this.tLists = ['MyTasksToDo', 'MyTasksDone', 'AssTasksAssigned', 'AssTasksDone'];
        this.dbTaskItems = [];
        this.myTasks = [];
        this.myTasksToDo = [];
        this.myTasksDone = [];
        this.assTasks = [];
        this.assTasksAssigned = [];
        this.assTasksDone = [];
        this.totalMyTasksToDo = 0;
        this.totalMyTasksDone = 0;
        this.totalAssTasksAssigned = 0;
        this.totalAssTasksDone = 0;
        // Tasks Segment/Buttons
        this.tTSegProps = { tTDisabled: false, tTMode: 'md', tTScrollable: false, tTSwipeGesture: true, tTValue: 'mytasks', tTSegBtns: { MyTasksProps: { disabled: false, layout: 'icon-start', mode: 'md', type: 'button', value: 'mytasks' }, AssTasksProps: { disabled: false, layout: 'icon-start', mode: 'md', type: 'button', value: 'asstasks' } } };
        // Alerts
        this.alertMethods = { phone: null, calendar: null, email: null };
        this.alertEvents = { shift: null, task: null, tsheet: null };
        // ReOrder Mode
        this.tTReorderGroupProps = { roDisabled: true };
        this.beforeROIds = [];
        this.afterROIds = [];
        // Delete Mode
        this.deleteMode = false;
        // Add Task
        this.addTaskModalOpts = { animated: false, showBackdrop: false, backdropDismiss: false, cssClass: 'tsheet-detail-modal-class', component: src_app_modals_detail_task_add_task_add_page__WEBPACK_IMPORTED_MODULE_8__.TaskAddPage, keyboardClose: true };
        this.addTaskModalOpen = false;
        // Task Prog
        this.taskProg = false;
        // Doofy
        this.assignToSelectAlertOpts = { cssClass: 'quickSelectClass', header: 'Assign Task To' };
        this.globalToDoTaskListArr = [];
        this.globalCompletedTaskListArr = [];
        this.globalCWArr = [];
        this.taskInputAdd = true;
        this.addEditTaskDueDate = '';
        this.unsortedToDoListArr = [];
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|ngOnInit] ()...');
            const urlArr = this.router.url.split('/');
            this.tabKey = urlArr[urlArr.length - 1];
            this.initAlertOpts();
            this.initPrefs();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillEnter() { this.logger.info('[TabTasks|ionViewWillEnter] ()...'); }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidEnter() {
        this.logger.info('[TabTasks|ionViewDidEnter] ()...');
        this.evServ.subscribe('alertsStatus', () => { this.evServ.subscribe('alertsStatus', () => { this.initAlertOpts(); }); });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initPrefs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|initPrefs] ()...');
            this.myPpl = this.detailServ.pplArr;
            this.myObj = this.detailServ.myObj;
            this.meObj = this.detailServ.meObj;
            this.meAvatar = this.detailServ.meAva;
            this.workAvatar = this.detailServ.workAva;
            this.syncTasks('init');
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    initAlertOpts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|initAlertOpts] ()...');
            const getDSSett = yield this.detailServ.getSettings();
            if (getDSSett !== null) {
                const aMs = getDSSett.alerts.options.alertMethods.value;
                const aEs = getDSSett.alerts.options.alertEvents.value;
                this.alertMethods.phone = aMs.phone;
                this.alertMethods.calendar = aMs.calendar;
                this.alertMethods.email = aMs.email;
                this.alertEvents.task = aEs.task;
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    syncTasks(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|syncTasks] (' + mode + ')...');
            if (mode === 'init') {
                this.plt.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.syncServ.doTasksSync('init');
                    setTimeout(() => { this.fetchTasks(); }, 250);
                }));
            }
            else {
                this.dbTaskItems = [];
                yield this.syncServ.doTasksSync('refresh');
                setTimeout(() => { this.fetchTasks(); }, 250);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    fetchTasks() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|initFetchTasks] ()...');
            const getAllTasksRes = yield this.sqlServ.getAllTableItems('tasks');
            console.log(getAllTasksRes.values);
            if (getAllTasksRes.values.length > 0) {
                const locAllTs = getAllTasksRes.values;
                const sortdAllTs = lodash__WEBPACK_IMPORTED_MODULE_10__.sortBy(locAllTs, 'SortOrder');
                for (let i = 0; i < sortdAllTs.length; i++) {
                    this.formatTask(sortdAllTs[i]);
                }
                ;
                this.updateListCounts();
            }
            else {
                for (let i = 0; i < this.tLists.length; i++) {
                    this['total' + this.tLists[i]] = 0;
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    formatTask(rawTaskObj) {
        this.logger.info('[TabTasks|formatTask] (taskObject)...');
        let rTO = rawTaskObj;
        console.log('Start SortOrder: ' + rTO.SortOrder);
        rTO.Question === null || rTO.Question === undefined || rTO.Question === '' || rTO.Question.length === 0 ? rTO.Question = null : rTO.Question = rTO.Question;
        rTO.Comment === null || rTO.Comment === undefined || rTO.Comment === '' || rTO.Comment.length === 0 ? rTO.Comment = null : rTO.Comment = rTO.Comment;
        const uEntryArr = this.myPpl.filter(p => p.EmpId === rTO.UserEntry);
        if (uEntryArr.length > 0) {
            const pO = uEntryArr[0];
            if (pO.EmpId === this.meEmpId) {
                rTO['nUserEntry'] = 'You';
            }
            else {
                if (pO.FirstName.length > 0 && pO.LastName.length > 0) {
                    rTO['nUserEntry'] = pO.FirstName + ' ' + pO.LastName.charAt(0) + '.';
                }
                else {
                    pO.DisplayName.length > 0 ? rTO['nUserEntry'] = pO.DisplayName : rTO['nUserEntry'] = 'NK';
                }
            }
            ;
            rTO['nFromAvatar'] = pO.Photo;
        }
        else {
            rTO['nUserEntry'] = 'NK';
            rTO['nFromAvatar'] = './../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';
        }
        ;
        const uAssignedArr = this.myPpl.filter(p => p.EmpId === rTO.UserResponsible);
        if (uAssignedArr.length > 0) {
            const pO = uAssignedArr[0];
            if (pO.EmpId === this.meEmpId) {
                rTO['nAssigned'] = 'You';
            }
            else {
                if (pO.FirstName.length > 0 && pO.LastName.length > 0) {
                    rTO['nAssigned'] = pO.FirstName + ' ' + pO.LastName.charAt(0) + '.';
                }
                else {
                    pO.DisplayName.length > 0 ? rTO['nAssigned'] = pO.DisplayName : rTO['nAssigned'] = 'NK';
                }
            }
            ;
            rTO['nAssignedAvatar'] = pO.Photo;
        }
        else {
            rTO['nAssigned'] = 'NK';
            rTO['nAssignedAvatar'] = './../../assets/img/sheriff-tsheet-detail-unknown-sv-ico.png';
        }
        ;
        const createD = new Date(rTO.Created);
        rTO['nCreated'] = this.dT.format(createD, 'EEE, d MMM yyyy');
        if (rTO.DueTimestamp !== -1 && rTO.DueTimestamp !== null && rTO.DueTimestamp !== undefined && rTO.DueTimestamp !== '') {
            const dueD = this.dT.Dut(rTO.DueTimestamp);
            rTO['nDue'] = this.dT.format(dueD, 'EEE, d MMM yyyy');
            const nowUT = this.dT.getUT(new Date());
            if (nowUT > rTO.DueTimestamp) {
                rTO['nIsLate'] = true;
                rTO['nOverDue'] = this.dT.DurAsObj(new Date(), dueD);
            }
            else {
                rTO['nIsLate'] = false;
            }
        }
        ;
        if (rTO.TsCompleted === -1 || rTO.TsCompleted === null || rTO.TsCompleted === undefined || rTO.TsCompleted === '') {
            rTO['nIsDone'] = false;
        }
        else {
            const compD = this.dT.Dut(rTO.TsCompleted);
            rTO.nCompleted = this.dT.format(compD, 'EEE, d MMM yyyy');
            rTO['nIsDone'] = true;
        }
        ;
        if (rTO.UserEntry === rTO.UserResponsible) {
            if (rTO['nIsDone']) {
                this.myTasksDone.push(rTO);
            }
            else {
                this.myTasksToDo.push(rTO);
            }
        }
        else {
            if (rTO['nIsDone']) {
                this.assTasksDone.push(rTO);
            }
            else {
                this.assTasksAssigned.push(rTO);
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    updateListCounts() {
        this.logger.info('[TabTasks|updateListCount] ()...');
        for (let i = 0; i < this.tLists.length; i++) {
            const lN = this.tLists[i].charAt(0).toLowerCase() + this.tLists[i].slice(1);
            const tLNo = this[lN].length;
            this['total' + this.tLists[i]] = tLNo;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    tTSegChanged(ev) {
        this.logger.info('[TabTasks|segmentChanged] (' + ev.detail.value + ')...');
        this.tTSegProps.tTValue = ev.detail.value;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    disableRefresher(togV) { this.preventRefreshPull = togV; }
    ////////////////////////////////////////////////////////////////////////////////////////
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|doRefresh] (event)...');
            this.isRefreshing = true;
            this.refresher = event.target;
            this.headerProgress('manual', 'start', null);
            this.refreshTasksData();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    refreshTasksData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|refreshTasksData] ()...');
            let rStage = 0;
            this.logger.info('[TabTasks|refreshTasksData] (PROGRESS LISTEN SUBSCRIBED)...');
            this.evServ.subscribe('refreshTasksProg', () => {
                rStage += 25;
                this.logger.info('[TabTasks|refreshTasksData] (PROGRESS STAGE TRIGGER) STAGE #' + rStage);
                if (rStage < 100) {
                    this.headerProgress('manual', 'change', rStage);
                }
                else {
                    this.evServ.destroy('refreshTasksProg');
                    this.headerProgress('manual', 'finish', null);
                }
            });
            setTimeout(() => { this.syncServ.doTasksSync('refresh'); }, 250);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    changeCheckStatus(list, index, tO) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|changeCheckStatus] (' + list + ',' + index + ',taskObj)...');
            if (this.tTReorderGroupProps.roDisabled && !this.deleteMode) {
                this.taskProg = true;
                jquery__WEBPACK_IMPORTED_MODULE_9__('taskitem-' + tO.Id).addClass('taskgreyed');
                let opTxt;
                const nKeys = ['nCreated', 'nDue', 'nIsLate', 'nIsDone', 'nCompleted'];
                const duTRes = () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    if (tO.nIsDone) {
                        opTxt = 'TO DO';
                        const undRes = yield this.deputy.undoTask(tO.Id, tO.UserResponsible);
                        return Promise.resolve(undRes);
                    }
                    else {
                        opTxt = 'COMPLETED';
                        const dRes = yield this.deputy.doTask(tO.Id, tO.UserResponsible);
                        return Promise.resolve(dRes);
                    }
                });
                const duT = yield duTRes();
                if (duT.result) {
                    for (let i = 0; i < nKeys.length; i++) {
                        if (duT.data.hasOwnProperty(nKeys[i])) {
                            delete duT.data[nKeys[i]];
                        }
                    }
                    ;
                    const trimList = this[list].filter(t => t.Id !== tO.Id);
                    this[list] = trimList;
                    this.sqlServ.replaceItem('tasks', 'Id', duT.data.Id, duT.data);
                    this.formatTask(duT.data);
                    this.evServ.showToast('success', 'Task Updated: ' + opTxt);
                    this.logger.info('[TabTasks|changeCheckStatus] (Success) Update Task Succeeded @ API.');
                    this.updateListCounts();
                    jquery__WEBPACK_IMPORTED_MODULE_9__('taskitem-' + tO.Id).removeClass('taskgreyed');
                    this.taskProg = false;
                }
                else {
                    this.taskProg = false;
                    jquery__WEBPACK_IMPORTED_MODULE_9__('taskitem-' + tO.Id).removeClass('taskgreyed');
                    this.evServ.showToast('error', 'Task Update Error');
                    this.logger.info('[TabTasks|changeCheckStatus] (Error) Task Failed @ API.');
                }
            }
            else {
                this.logger.info('[TabTasks|changeCheckStatus] Ignoring While in Reorder/Delete Mode.');
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    addTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|addTask] ()...');
            let aTMOpts = this.addTaskModalOpts;
            aTMOpts['componentProps'] = { me: this.meObj, my: this.myObj, meAva: this.meAvatar, workAva: this.workAvatar, meEmpId: this.meEmpId, ppl: this.myPpl, myTListLen: this.myTasksToDo.length, assTListLen: this.assTasksAssigned.length };
            const addTaskModal = yield this.modalCtrl.create(aTMOpts);
            document.addEventListener('ionModalDidPresent', () => { this.addTaskModalOpen = true; this.logger.info('[TabTasks|AddTask] (ionModalDidPresent)'); });
            addTaskModal.onWillDismiss().then(() => { this.addTaskModalOpen = false; this.logger.info('[TabTasks|AddTask] (ionModalWillDismiss)'); });
            addTaskModal.onDidDismiss().then(({ data, role }) => {
                this.logger.info('[TabTasks|AddTask] (ionModalDidDismiss) >>> (Data): ' + data + ' >>> (Role): ' + role);
                if (role === 'cancel') {
                    this.logger.info('[TabTasks|addTask] (CANCELLED) User Cancelled - No Data.');
                    this.evServ.showToast('warning', 'Cancelled: Add New Task');
                }
                else {
                    const newT = data;
                    this.evServ.showToast('success', 'Success: Added Task #' + newT.Id);
                    this.formatTask(newT);
                    this.sqlServ.insertSingleItem('tasks', newT);
                    this.logger.info('[TabTasks|addTask] (Success) Added New Task #' + newT.Id);
                }
            });
            return yield addTaskModal.present();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    toggleDeleteMode() {
        this.logger.info('[TabTasks|toggleDeleteMode] ()...');
        if (this.tTReorderGroupProps.roDisabled) {
            this.deleteMode ? this.deleteMode = false : this.deleteMode = true;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    deleteTask(list, tlI, tO) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|deleteTask] (' + list + ',' + tlI + ',taskObj)...');
            this.taskProg = true;
            jquery__WEBPACK_IMPORTED_MODULE_9__('taskitem-' + tO.Id).addClass('taskgreyed');
            const delRes = (dbRes, apiRes) => {
                const listFns = () => { const trimList = this[list].filter(t => t.Id !== tO.Id); this[list] = trimList; this.updateListCounts(); };
                if (dbRes && apiRes) {
                    listFns();
                    this.evServ.showToast('success', 'Task Deleted - OK');
                }
                else {
                    if (!dbRes && !apiRes) {
                        this.evServ.showToast('error', 'Task Delete Errors (DB+API)');
                    }
                    else if (!dbRes && apiRes) {
                        listFns();
                        this.evServ.showToast('warning', 'Task Delete Error (DB)');
                    }
                    else {
                        listFns();
                        this.evServ.showToast('warning', 'Task Delete Error (API)');
                    }
                }
                ;
                this.taskProg = false;
                jquery__WEBPACK_IMPORTED_MODULE_9__('taskitem-' + tO.Id).removeClass('taskgreyed');
            };
            const delApiRes = yield this.deputy.deleteTask(tO.Id);
            const delDbRes = yield this.sqlServ.deleteItem('tasks', 'Id', tO.Id);
            delRes(delApiRes.result, delDbRes);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    toggleReorderList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('[TabTasks|reorderList] ()...');
            console.log('On Click Reorder Btn');
            console.log(this.myTasksToDo);
            const roDis = () => { return this.tasksReorderGroup.disabled; };
            const togDis = (v) => { this.tasksReorderGroup.disabled = v; this.tTReorderGroupProps.roDisabled = v; };
            if (roDis()) { // ENABLE REORDER
                togDis(false);
                if (this.beforeROIds.length > 0) {
                    this.beforeROIds = [];
                }
                ;
                for (let i = 0; i < this.myTasksToDo.length; i++) {
                    this.beforeROIds.push(this.myTasksToDo[i].Id);
                }
                ;
            }
            else { // DISABLE REORDER
                togDis(true);
                const newList = this.myTasksToDo;
                if (this.afterROIds.length > 0) {
                    this.afterROIds = [];
                }
                ;
                for (let i = 0; i < newList.length; i++) {
                    this.afterROIds.push(newList[i].Id);
                }
                ;
                const compStrOld = this.beforeROIds.join(',');
                console.log(compStrOld);
                const compStrNew = this.afterROIds.join(',');
                console.log(compStrNew);
                if (compStrNew === compStrOld) {
                    this.logger.info('[TabTasks|reorderList|Disable] (SAME ORDER) - Not Saving/Chaning.');
                }
                else {
                    this.logger.info('[TabTasks|reorderList|Disable] (NEW ORDER) - Doing Save @ API/DB Level...');
                    for (let i = 0; i < newList.length; i++) {
                        const nTO = newList[i];
                        const apiRORes = yield this.deputy.reorderTask(this.meEmpId, nTO);
                        if (apiRORes.result) {
                            const apiNTO = apiRORes.data;
                            this.logger.info('[TabTasks|toggleReorderList|API Update Order] (SUCCESS): ' + apiNTO.Question + ' (ID #' + apiNTO.Id + ') - API Order = ' + apiNTO.SortOrder);
                            const dbRORes = yield this.sqlServ.updateTaskSortOrder(apiNTO.Id, apiNTO.SortOrder);
                            if (dbRORes) {
                                this.logger.info('[TabTasks|toggleReorderList|DB Update Order] (SUCCESS) Updated Order @ DB - OK');
                            }
                            else {
                                this.logger.info('[TabTasks|toggleReorderList|DB Update Order] (ERROR) Updating Order @ DB - BAD');
                            }
                        }
                        else {
                            this.logger.info('[TabTasks|toggleReorderList|API Update Order] (ERROR): ' + apiRORes.data);
                        }
                    }
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    doReorder(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.info('Before Reorder: ');
            for (let i = 0; i < this.myTasksToDo.length; i++) {
                const bT = this.myTasksToDo[i];
                this.logger.info('[' + i + '] ' + bT.Question + ' - Order: ' + bT.SortOrder);
            }
            ;
            this.myTasksToDo = event.detail.complete(this.myTasksToDo);
            for (let i = 0; i < this.myTasksToDo.length; i++) {
                this.myTasksToDo[i].SortOrder = i;
            }
            ;
            this.logger.info('After Reorder: ');
            for (let i = 0; i < this.myTasksToDo.length; i++) {
                const aT = this.myTasksToDo[i];
                this.logger.info('[' + i + '] ' + aT.Question + ' - Order: ' + aT.SortOrder);
            }
            ;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewWillLeave() { this.logger.info('[TabTasks|ionViewWillLeave] ()...'); }
    ////////////////////////////////////////////////////////////////////////////////////////
    ionViewDidLeave() {
        this.logger.info('[TabTasks|ionViewDidLeave] ()...');
        const titleBar = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-leftbar.' + this.tabKey);
        const animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_9__('.sheriff-title-leftanimbar-inner.' + this.tabKey);
        const titleText = jquery__WEBPACK_IMPORTED_MODULE_9__('.sheriff-title.tight-wrap.' + this.tabKey);
        jquery__WEBPACK_IMPORTED_MODULE_9__(titleBar).css('width', '0');
        jquery__WEBPACK_IMPORTED_MODULE_9__(animBarEnd).removeClass('showing');
        jquery__WEBPACK_IMPORTED_MODULE_9__(titleText).removeClass('scrolledin');
        jquery__WEBPACK_IMPORTED_MODULE_9__(titleBar).removeClass('dimmed');
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    headerProgress(mode, action, data) {
        this.logger.info('[TabTasks|headerProgress] (' + mode + ', ' + action + ', ' + data + ')...');
        const circProgEle = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-progcirc.' + this.tabKey);
        const starEle = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-star.' + this.tabKey);
        const sLogoEle = jquery__WEBPACK_IMPORTED_MODULE_9__('.hcl-slogo.' + this.tabKey);
        const startRoutine = () => { jquery__WEBPACK_IMPORTED_MODULE_9__(sLogoEle).css('transform', 'scale(.9)'); this.progCirc.percent = 0; jquery__WEBPACK_IMPORTED_MODULE_9__(starEle).css('transform', 'rotate(0deg)'); if (jquery__WEBPACK_IMPORTED_MODULE_9__(circProgEle).css('display', 'none')) {
            jquery__WEBPACK_IMPORTED_MODULE_9__(circProgEle).css('display', 'unset');
        } this.progCirc.animation = false; this.progCirc.outerStrokeColor = '#FF9800'; };
        const finishRoutine = () => { jquery__WEBPACK_IMPORTED_MODULE_9__(sLogoEle).css('transform', 'unset'); this.progCirc.percent = 100; jquery__WEBPACK_IMPORTED_MODULE_9__(starEle).css('transform', 'rotate(0deg)'); this.progCirc.outerStrokeColor = '#4caf50'; this.myAniCSS('.hcl-progcirc.' + this.tabKey, 'fadeOut', 0, 1400, 'remove', 'hide'); this.refresher.complete(); this.isRefreshing = false; };
        if (mode === 'manual') {
            if (action === 'start') {
                startRoutine();
                this.progCirc.animation = true;
            }
            else if (action === 'change') {
                this.progCirc.percent = data;
                jquery__WEBPACK_IMPORTED_MODULE_9__(starEle).css('transform', 'rotate(' + ((360 * data) / 100) + ')deg');
            }
            else if (action === 'finish') {
                finishRoutine();
                this.progCirc.animation = false;
            }
        }
        if (mode === 'timed') {
            startRoutine();
            const incPercEaLoop = (20 / data) * 1000;
            const rotStarEaLoop = (72 / data) * 1000;
            let starRotCount = 0;
            const timedProgLoop = setInterval(() => { this.progCirc.percent += incPercEaLoop; starRotCount += rotStarEaLoop; jquery__WEBPACK_IMPORTED_MODULE_9__(starEle).css('transform', 'rotate(' + starRotCount + 'deg)'); if (this.progCirc.percent >= 100) {
                clearInterval(timedProgLoop);
                finishRoutine();
            } }, 200);
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////// 
    myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
        this.logger.info('[TabTasks|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');
        const doAni = () => new Promise((resolve) => {
            const aniStr = 'animate__animated animate__' + aniName;
            const delStr = 'animDel-' + aniDel;
            const durStr = 'animDur-' + aniDur;
            jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).on('animationend', () => {
                if (aniEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).removeClass(delStr).removeClass(durStr).removeClass(aniStr);
                }
                if (eleEnd === 'remove') {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).remove();
                }
                if (eleEnd === 'hide') {
                    jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).css('display', 'none');
                }
                resolve(true);
            });
            if (aniDel > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).addClass(delStr);
            }
            if (aniDur > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).addClass(durStr);
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(theEle).addClass(aniStr);
            }
        });
        doAni();
    }
};
TabTasksPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_14__.NGXLogger },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _services_sqlite_service__WEBPACK_IMPORTED_MODULE_3__.SQLiteService },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__.SyncService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: src_app_services_deputy_service__WEBPACK_IMPORTED_MODULE_7__.DeputyService },
    { type: src_app_services_datetime_service__WEBPACK_IMPORTED_MODULE_5__.DateTimeService },
    { type: _services_detail_service__WEBPACK_IMPORTED_MODULE_4__.DetailService }
];
TabTasksPage.propDecorators = {
    tasksReorderGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonReorderGroup, { static: false },] }],
    tabTasksSegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSegment, { static: false },] }],
    tTSegBtnMyTasks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSegmentButton, { static: false },] }],
    tTSegBtnAssTasks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSegmentButton, { static: false },] }],
    tasksContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['tasksContent', { static: false },] }],
    tasksRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['tasksRefresher',] }]
};
TabTasksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({ selector: 'app-tabtasks', template: _raw_loader_tabtasks_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_tabtasks_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    ////////////////////////////////////////////////////////////////////////////////////////
], TabTasksPage);



/***/ }),

/***/ 71086:
/*!**************************************************!*\
  !*** ./src/app/tabs/tabtasks/tabtasks.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJ0YXNrcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 46382:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabtasks/tabtasks.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- TAB-PAGE MAIN HEADER - STARTS >>> -->\n<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n    <ion-toolbar class=\"sheriff-toolbar\">\n        <div class=\"sheriff-header-background-wrapper\">\n            <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n            <div class=\"sheriff-header-background-inner-wrapper\">\n                <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                    <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                        <ion-col class=\"sheriff-col sheriff-page-header-col left-col tabtasks\">\n                            <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar tabtasks\">\n                                <div class=\"sheriff-title-leftanimbar-inner tabtasks\"></div>\n                            </div>\n                            <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                                <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title tabtasks\">\n                                    <div class=\"sheriff-title tight-wrap tabtasks\">Tasks</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                            <div class=\"sheriff-page-header-logo-wrapper\">\n                                <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                    <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring tabtasks\"></div>\n                                    <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle tabtasks hcl-progcirc tabtasks\">\n                                        <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                            [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                    </div>\n                                    <img [ngClass]=\"{'lilblur-star':taskProg}\" src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star tabtasks\">\n                                    <img [ngClass]=\"{'lilrotate-s':taskProg}\" src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo tabtasks\">\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                            <ion-grid class=\"sheriff-grid tab-header-action-btn-grid tasks\">\n                                <ion-row class=\"sheriff-row tab-header-action-btn-row tasks\">\n                                    <ion-col class=\"sheriff-col tab-header-action-btn-col tasks reorder-btn-col\">\n                                        <ion-button (click)=\"toggleReorderList()\" [disabled]=\"tTSegProps.tTValue==='asstasks'||deleteMode\" [ngClass]=\"{'headbtn-ro-active':!this.tTReorderGroupProps.roDisabled}\" class=\"sheriff-trans-btn tab-header-action-btn tasks reorder-btn\">\n                                            <ion-icon *ngIf=\"this.tTReorderGroupProps.roDisabled\" class=\"sheriff-trans-btn-ico header-opt-btn-ico reorder-btn-ico\" name=\"shuffle\"></ion-icon>\n                                            <ion-icon *ngIf=\"!this.tTReorderGroupProps.roDisabled\" class=\"sheriff-trans-btn-ico header-opt-btn-ico reorder-btn-ico close\" name=\"checkmark\"></ion-icon>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col class=\"sheriff-col tab-header-action-btn-col tasks share-btn-col\">\n                                        <ion-button (click)=\"toggleDeleteMode()\" [disabled]=\"!this.tTReorderGroupProps.roDisabled\" [ngClass]=\"{'headbtn-del-active':deleteMode}\" class=\"sheriff-trans-btn tab-header-action-btn tasks share-btn\">\n                                            <ion-icon *ngIf=\"!deleteMode\" class=\"sheriff-trans-btn-ico header-opt-btn-ico share-btn-ico\" name=\"create\"></ion-icon>\n                                            <ion-icon *ngIf=\"deleteMode\" class=\"sheriff-trans-btn-ico header-opt-btn-ico share-btn-ico close\" name=\"close\"></ion-icon>\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col class=\"sheriff-col tab-header-action-btn-col tasks main-menu-btn-col\">\n                                        <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                                            <div class=\"sheriff-menu-button-wrapper\">\n                                                <ion-menu-button class=\"sheriff-menu-button tabtasks\" autoHide=\"false\">\n                                                    <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                                </ion-menu-button>\n                                            </div>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n<!-- TAB-PAGE MAIN HEADER - ENDS <<< -->\n<!-- TAB-PAGE MAIN CONTENT WRAPPER - STARTS >>> -->\n<ion-content class=\"main-tabtasks-content-wrapper\" [scrollEvents]=\"false\">\n    <!-- PAGE REFRESHER - STARTS >>> -->\n    <ion-refresher #tasksRefresher class=\"sheriff-refresher tabs tasks\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" disabled=\"{{preventRefreshPull}}\">\n        <div class=\"sheriff-refresher-noise-wrapper\">\n            <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n        </div>\n    </ion-refresher>\n    <!-- PAGE REFRESHER - ENDS <<< -->\n    <div class=\"sheriff-tabtasks-mainpage-section-wrapper top-section\">\n        <!-- TAB-TASKS CONTENT HEADING - STARTS >>> -->\n        <div slot=\"fixed\" class=\"sheriff-tabcontent-mainheading-wrapper tasks\">\n            <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid tasks\">\n                <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 tasks\">\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 tasks\">\n                        <div *ngIf=\"deleteMode\" class=\"tasks-editmode-header-txt-wrapper left\">edit mode</div>\n                        <div *ngIf=\"!tTReorderGroupProps.roDisabled\" class=\"tasks-reordermode-header-txt-wrapper left\">reorder mode</div>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 tasks\">\n                        <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-tasks.png\">\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 sheets\">\n                        <div *ngIf=\"deleteMode\" class=\"tasks-editmode-header-txt-wrapper right\">edit mode</div>\n                        <div *ngIf=\"!tTReorderGroupProps.roDisabled\" class=\"tasks-reordermode-header-txt-wrapper right\">reorder mode</div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!-- TAB-TASKS CONTENT HEADING - ENDS <<< -->\n        <!-- TAB-TASKS SEGMENT SWITCHER - STARTS >>> -->\n        <ion-segment slot=\"fixed\" #tabTasksSegment [disabled]=\"tTSegProps.tTDisabled\" [mode]=\"tTSegProps.tTMode\" [scrollable]=\"tTSegProps.tTScrollable\" [swipeGesture]=\"tTSegProps.tTSwipeGesture\" [value]=\"tTSegProps.tTValue\" (ionChange)=\"tTSegChanged($event)\"\n            class=\"sheriff-segment tt-segment\">\n            <ion-segment-button #tTSegBtnMyTasks [disabled]=\"tTSegProps.tTSegBtns.MyTasksProps.disabled\" [layout]=\"tTSegProps.tTSegBtns.MyTasksProps.layout\" [mode]=\"tTSegProps.tTSegBtns.MyTasksProps.mode\" [type]=\"tTSegProps.tTSegBtns.MyTasksProps.type\" [value]=\"tTSegProps.tTSegBtns.MyTasksProps.value\"\n                class=\"sheriff-segment-button tt-segment-button mytasks-btn\">\n                <div class=\"sheriff-icon-wrapper tt-segment-button-ico-label-wrapper mytasks-ico-label-wrapper\">\n                    <ion-icon class=\"sheriff-icon tt-segment-button-ico mytasks-ico\" name=\"person\"></ion-icon>\n                    <div class=\"sheriff-label tt-segment-label-txt mytasks-label-txt\">My Tasks<span class=\"tt-seg-total mytasks\">({{myTasksToDo.length+myTasksDone.length}})</span></div>\n                </div>\n            </ion-segment-button>\n            <ion-segment-button #tTSegBtnAssTasks [disabled]=\"tTSegProps.tTSegBtns.AssTasksProps.disabled\" [layout]=\"tTSegProps.tTSegBtns.AssTasksProps.layout\" [mode]=\"tTSegProps.tTSegBtns.AssTasksProps.mode\" [type]=\"tTSegProps.tTSegBtns.AssTasksProps.type\" [value]=\"tTSegProps.tTSegBtns.AssTasksProps.value\"\n                class=\"sheriff-segment-button tt-segment-button asstasks-btn\">\n                <div class=\"sheriff-icon-wrapper tt-segment-button-ico-label-wrapper asstasks-ico-label-wrapper\">\n                    <ion-icon class=\"sheriff-icon tt-segment-button-ico asstasks-ico\" name=\"people\"></ion-icon>\n                    <div class=\"sheriff-label tt-segment-label-txt asstasks-label-txt\">Assigned<span class=\"tt-seg-total asstasks\">({{assTasksAssigned.length+assTasksDone.length}})</span></div>\n                </div>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <ion-content [scrollEvents]=\"true\" class=\"sheriff-content tab-content tasks\" #tasksContent (ionScrollStart)=\"disableRefresher(true)\" (ionScrollEnd)=\"disableRefresher(false)\">\n        <!-- MAIN LIST WRAPPER -->\n        <div class=\"sheriff-tabcontent-itemlistcontent-wrapper tasks\">\n            <!-- TAB-TASKS SEGMENT SWITCHER - ENDS <<< -->\n            <!-- MY-TASKS LIST WRAPPER - STARTS >>> -->\n            <div *ngIf=\"tTSegProps.tTValue==='mytasks'\" class=\"tabtasks-list-wrapper mytasks\">\n                <ion-grid class=\"sheriff-grid tasks-group-grid mytasks todo\">\n                    <ion-row class=\"sheriff-row tasks-group-row mytasks todo\">\n                        <ion-col size=\"6\" class=\"sheriff-col tasks-group-col mytasks todo label-txt-ico-col\">\n                            <div [ngStyle]=\"{'color':totalMyTasksToDo>0?'#848484':'#565656'}\" class=\"tasks-group-label-txt-ico-wrapper mytasks todo\">\n                                <ion-icon class=\"sheriff-tasks-group-label-ico mytasks todo\" name=\"pin\"></ion-icon>\n                                <div class=\"sheriff-tasks-group-label-txt mytasks todo\">to do</div>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"4\" class=\"sheriff-col tasks-group-col mytasks todo alertsstatus-col\">\n                          <div class=\"tasks-alerts-indic-inner-wrapper\">\n                            <ion-icon *ngIf=\"(alertMethods.phone===null||alertEvents.task===null)||(alertMethods.phone===false||alertEvents.task===false)\" class=\"sslider-shift-alerts-indic notification-ico-off\" name=\"notifications-off-outline\"></ion-icon>\n                            <ion-icon *ngIf=\"alertMethods.phone===true&&alertEvents.task===true\" class=\"sslider-shift-alerts-indic notification-ico-on\" name=\"notifications\"></ion-icon>\n                            <ion-icon *ngIf=\"(alertMethods.calendar===null||alertEvents.task===null)||(alertMethods.calendar===false||alertEvents.task===false)\" class=\"sslider-shift-alerts-indic calendar-ico-off\" name=\"calendar-outline\"></ion-icon>\n                            <ion-icon *ngIf=\"alertMethods.calendar===true&&alertEvents.task===true\" class=\"sslider-shift-alerts-indic calendar-ico-on\" name=\"calendar\"></ion-icon>\n                          </div>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"sheriff-col tasks-group-col mytasks todo count-col\">\n                            <div [ngStyle]=\"{'color':totalMyTasksToDo>0?'#848484':'#565656'}\" class=\"sheriff-tasks-group-countval mytasks todo\">\n                                <span class=\"taskgroupcount-val thisgroup\">{{totalMyTasksToDo}}</span>\n                                <span class=\"taskgroupcount-slash\">/</span>\n                                <span class=\"taskgroupcount-val thissection\">{{myTasksToDo.length+myTasksDone.length}}</span>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- TO DO TASK ITEMS HERE -->\n                <div class=\"tabtasks-group-scrollwrapper calcheight mytasks todo\">\n                    <div *ngIf=\"totalMyTasksToDo===0\" class=\"tabtasks-notask-wrapper mytasks todo\">no tasks to show</div>\n                    <ion-reorder-group *ngIf=\"totalMyTasksToDo>0\" #tasksReorderGroup (ionItemReorder)=\"doReorder($event)\" class=\"tabtasks-tasklistgroup mytasks todo\" [disabled]=\"tTReorderGroupProps.roDisabled\">\n                        <ion-item *ngFor=\"let mtToDo of myTasksToDo;let mtTDi = index\" [button]=\"true\" (click)=\"changeCheckStatus('myTasksToDo',mtTDi,mtToDo)\" class=\"sheriff-taskitem reorder-taskitem mytasks todo taskitem-{{mtToDo.Id}}\">\n                            <ion-grid class=\"sheriff-grid sheriff-task-item-grid reorder-item-grid mytasks todo-item todo-{{mtTDi}}\">\n                                <ion-row class=\"sheriff-row sheriff-task-item-row reorder-item-row mytasks todo-item-row\">\n                                    <ion-col size=\"2\" class=\"sheriff-col sheriff-task-item-col reorder-item-col mytasks todo-item-cb-col\">\n                                        <div *ngIf=\"tTReorderGroupProps.roDisabled&&!deleteMode\" class=\"task-item-cb-wrapper ticbwrap-{{mtTDi}}\">\n                                            <ion-checkbox [checked]=\"mtToDo.nIsDone\" [disabled]=\"true\" [mode]=\"'ios'\" class=\"sheriff-checkbox task-item-cb task-item-cb-{{mtTDi}}\"></ion-checkbox>\n                                        </div>\n                                        <div *ngIf=\"!tTReorderGroupProps.roDisabled&&!deleteMode\" class=\"task-item-reorder-ico-wrapper tirowrap-{{mtTDi}}\">\n                                            <ion-reorder class=\"sheriff-reorder tabtasks-reorder\">\n                                                <ion-icon name=\"reorder-four\" class=\"sheriff-reorder-ico tabtasks-reorder-ico\"></ion-icon>\n                                            </ion-reorder>\n                                        </div>\n                                        <div *ngIf=\"tTReorderGroupProps.roDisabled&&deleteMode\" class=\"task-item-delete-ico-wrapper tidelwrap-{{mtTDi}}\">\n                                            <ion-button (click)=\"deleteTask('myTasksToDo',mtTDi,mtToDo)\" [disabled]=\"mtToDo.UserEntry!==meEmpId\" class=\"sheriff-btn task-item-delete-btn\">\n                                                <ion-icon name=\"trash\" class=\"sheriff-task-item-del-ico\"></ion-icon>\n                                            </ion-button>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col size=\"9\" [ngStyle]=\"{'filter':!tTReorderGroupProps.roDisabled?'brightness(.48)':'brightness(1)'}\" class=\"sheriff-col sheriff-task-item-col reorder-item-col mytasks todo-item-content-col\">\n                                        <ion-grid class=\"sheriff-grid sheriff-task-item-label-grid mytasks todo\">\n                                            <ion-row class=\"sheriff-task-item-label-row mytasks todo tasktitle-row\">\n                                                <ion-col class=\"sheriff-task-item-label-col mytasks todo title-col\">\n                                                    <div class=\"ti-label-title-div\">\n                                                        <span class=\"ti-label-value\">{{mtToDo.Question}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row class=\"sheriff-task-item-label-row mytasks todo taskfrom-row\">\n                                                <ion-col size=\"8\" class=\"sheriff-task-item-label-col mytasks todo from-col\">\n                                                    <div class=\"ti-label-from-div\">\n                                                        <ion-icon class=\"ti-label-ico fromperson-ico\" name=\"person-add-outline\"></ion-icon>\n                                                        <span class=\"ti-label-prefix-span from\">From:</span>\n                                                        <span class=\"ti-label-value\">{{mtToDo.nUserEntry}}</span>\n                                                    </div>\n                                                </ion-col>\n                                                <ion-col size=\"4\" class=\"sheriff-task-item-label-col mytasks todo taskid-col\">\n                                                    <div class=\"ti-label-taskid-div\">\n                                                        <span class=\"ti-taskid-label-value\">#{{mtToDo.Id}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row *ngIf=\"mtToDo.Comment!==null\" class=\"sheriff-task-item-label-row mytasks todo tasknotes-row\">\n                                                <ion-col class=\"sheriff-task-item-label-col mytasks todo notes-col\">\n                                                    <div class=\"ti-label-notes-div\">\n                                                        <ion-icon class=\"ti-label-ico notes-ico\" name=\"newspaper-outline\"></ion-icon>\n                                                        <span class=\"ti-label-prefix-span notes\">Notes:</span>\n                                                        <span class=\"ti-label-value\">{{mtToDo.Comment}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row class=\"sheriff-task-item-label-row mytasks todo taskdue-row\">\n                                                <ion-col class=\"sheriff-task-item-label-col mytasks todo due-col\">\n                                                    <!-- DUE ON -->\n                                                    <div *ngIf=\"!mtToDo.nIsDone&&mtToDo.DueTimestamp!==-1\" [ngStyle]=\"{'color':mtToDo.nIsLate?'var(--ion-color-danger)':'#eee'}\" class=\"ti-label-due-div\">\n                                                        <div *ngIf=\"!mtToDo.nIsLate\" class=\"ti-label-dueon-wrapper std\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico\" name=\"alarm-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span dueon\">Due on:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">{{mtToDo.nDue}}</span>\n                                                        </div>\n                                                        <div *ngIf=\"mtToDo.nIsLate\" class=\"ti-label-dueon-wrapper islate\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico overdue\" name=\"alert-circle-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span dueon\">Was Due:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">\n                                                          <span *ngIf=\"mtToDo.nOverDue.years>0||mtToDo.nOverDue.weeks>0||mtToDo.nOverDue.months>0\" class=\"odue-ago-group long\">\n                                                            <span *ngIf=\"mtToDo.nOverDue.years>0\" class=\"ti-label-odue-ago-val years\">{{mtToDo.nOverDue.years}} years<span *ngIf=\"mtToDo.nOverDue.years>0&&mtToDo.nOverDue.months>0\" class=\"odue-comma\">,</span></span>\n                                                            <span *ngIf=\"mtToDo.nOverDue.months>0\" class=\"ti-label-odue-ago-val months\">{{mtToDo.nOverDue.months}} months</span>\n                                                            <span *ngIf=\"mtToDo.nOverDue.weeks>0&&mtToDo.nOverDue.months===0&&mtToDo.nOverDue.years===0\" class=\"ti-label-odue-ago-val weeks\">{{mtToDo.nOverDue.weeks}} weeks</span>\n                                                            </span>\n                                                            <span *ngIf=\"mtToDo.nOverDue.years===0&&mtToDo.nOverDue.weeks===0&&mtToDo.nOverDue.months===0\" class=\"odue-ago-group short\">\n                                                            <span *ngIf=\"mtToDo.nOverDue.days>0\" class=\"ti-label-odue-ago-val days\">{{mtToDo.nOverDue.days}} days</span>\n                                                            <span *ngIf=\"mtToDo.nOverDue.hours>0&&mtToDo.nOverDue.days===0\" class=\"ti-label-odue-ago-val hours\">{{mtToDo.nOverDue.hours}} hours<span *ngIf=\"mtToDo.nOverDue.hours>0&&mtToDo.nOverDue.minutes>0\" class=\"odue-comma\">,</span></span>\n                                                            <span *ngIf=\"mtToDo.nOverDue.minutes>0&&mtToDo.nOverDue.days===0\" class=\"ti-label-odue-ago-val minutes\">{{mtToDo.nOverDue.minutes}} mins</span>\n                                                            </span>\n                                                            <span class=\"ti-label-odue-ago-suffix\">ago</span>\n                                                            </span>\n                                                        </div>\n                                                    </div>\n                                                    <!-- CREATED ON -->\n                                                    <div *ngIf=\"!mtToDo.nIsDone&&mtToDo.DueTimestamp===-1\" class=\"ti-label-create-div\">\n                                                        <ion-icon class=\"ti-label-ico due-date-ico\" name=\"create-outline\"></ion-icon>\n                                                        <span class=\"ti-label-due-prefix-span createdon\">Created:</span>\n                                                        <span class=\"ti-label-due-datetime-span time\">{{mtToDo.nCreated}}</span>\n                                                    </div>\n                                                    <!-- COMPLETED ON -->\n                                                    <div *ngIf=\"mtToDo.nIsDone\" class=\"ti-label-complete-div\">\n                                                        <ion-icon class=\"ti-label-ico due-date-ico\" name=\"checkmark-outline\"></ion-icon>\n                                                        <span class=\"ti-label-due-prefix-span completedon\">Completed:</span>\n                                                        <span class=\"ti-label-due-datetime-span time\">{{mtToDo.nCompleted}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </ion-col>\n                                    <ion-col size=\"1\" [ngStyle]=\"{'filter':!tTReorderGroupProps.roDisabled?'brightness(.48)':'brightness(1)'}\" class=\"sheriff-col sheriff-task-item-col reorder-item-col mytasks todo-item-reorderorava-col\">\n                                        <ion-avatar class=\"tabtasks-from-avatar-avatar\">\n                                            <img src=\"{{mtToDo.nFromAvatar}}\" class=\"tabtasks-from-avatar-img\">\n                                        </ion-avatar>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n                    </ion-reorder-group>\n                </div>\n                <!-- MY TASKS SPACER -->\n                <div class=\"sheriff-tasks-mytasks-group-divider-spacer\"></div>\n                <!-- MY TASKS - DONE GROUP HEADER -->\n                <ion-grid *ngIf=\"tTReorderGroupProps.roDisabled\" class=\"sheriff-grid tasks-group-grid mytasks completed\">\n                    <ion-row class=\"sheriff-row tasks-group-row mytasks completed\">\n                        <ion-col size=\"6\" class=\"sheriff-col tasks-group-col mytasks completed label-txt-ico-col\">\n                            <div [ngStyle]=\"{'color':totalMyTasksDone>0?'#848484':'#565656'}\" class=\"tasks-group-label-txt-ico-wrapper mytasks completed\">\n                                <ion-icon class=\"sheriff-tasks-group-label-ico mytasks done\" name=\"checkmark\"></ion-icon>\n                                <div class=\"sheriff-tasks-group-label-txt mytasks completed\">completed</div>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"4\" class=\"sheriff-col tasks-group-col mytasks done label-spacer-col\"></ion-col>\n                        <ion-col size=\"2\" class=\"sheriff-col tasks-group-col mytasks todo count-col\">\n                            <div [ngStyle]=\"{'color':totalMyTasksDone>0?'#848484':'#565656'}\" class=\"sheriff-tasks-group-countval mytasks done\">\n                                <span class=\"taskgroupcount-val thisgroup\">{{totalMyTasksDone}}</span>\n                                <span class=\"taskgroupcount-slash\">/</span>\n                                <span class=\"taskgroupcount-val thissection\">{{myTasksToDo.length+myTasksDone.length}}</span>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- MY TASKS - DONE LIST -->\n                <div class=\"tabtasks-group-scrollwrapper calcheight mytasks done\">\n                    <ion-item-group *ngIf=\"tTReorderGroupProps.roDisabled\" class=\"tabtasks-tasklistgroup mytasks done\">\n                        <div *ngIf=\"totalMyTasksDone===0\" class=\"tabtasks-notask-wrapper mytasks completed\">no tasks to show</div>\n                        <ion-list *ngIf=\"totalMyTasksDone>0\" class=\"sheriff-item-list tabtasks-item-list mytasks donetasks\">\n                            <ion-item *ngFor=\"let mtDone of myTasksDone;let mtDi = index\" [button]=\"true\" (click)=\"changeCheckStatus('myTasksDone',mtDi,mtDone)\" class=\"sheriff-taskitem reorder-taskitem mytasks done taskitem-{{mtDone.Id}}\">\n                                <ion-grid class=\"sheriff-grid sheriff-task-item-grid reorder-item-grid mytasks done-item done-{{mtDi}}\">\n                                    <ion-row class=\"sheriff-row sheriff-task-item-row reorder-item-row mytasks done-item-row\">\n                                        <ion-col size=\"2\" class=\"sheriff-col sheriff-task-item-col mytasks done-item-cb-col\">\n                                            <div *ngIf=\"tTReorderGroupProps.roDisabled&&!deleteMode\" class=\"task-item-cb-wrapper ticbwrap-{{mtDi}}\">\n                                                <ion-checkbox [checked]=\"mtDone.nIsDone\" [disabled]=\"true\" [mode]=\"'ios'\" class=\"sheriff-checkbox task-item-cb task-item-cb-{{mtDi}}\"></ion-checkbox>\n                                            </div>\n                                            <div *ngIf=\"tTReorderGroupProps.roDisabled&&deleteMode\" class=\"task-item-delete-ico-wrapper tidelwrap-{{mtDi}}\">\n                                                <ion-button (click)=\"deleteTask('myTasksDone',mtDi,mtDone)\" [disabled]=\"mtDone.UserEntry!==meEmpId\" class=\"sheriff-btn task-item-delete-btn\">\n                                                    <ion-icon name=\"trash\" class=\"sheriff-task-item-del-ico\"></ion-icon>\n                                                </ion-button>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col size=\"9\" class=\"sheriff-col sheriff-task-item-col mytasks done-item-content-col\">\n                                            <ion-grid class=\"sheriff-grid sheriff-task-item-label-grid mytasks done\">\n                                                <ion-row class=\"sheriff-task-item-label-row mytasks done tasktitle-row\">\n                                                    <ion-col class=\"sheriff-task-item-label-col mytasks done title-col\">\n                                                        <div class=\"ti-label-title-div\">\n                                                            <span class=\"ti-label-value\">{{mtDone.Question}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-task-item-label-row mytasks done taskfrom-row\">\n                                                    <ion-col size=\"8\" class=\"sheriff-task-item-label-col mytasks done from-col\">\n                                                        <div class=\"ti-label-from-div\">\n                                                            <ion-icon class=\"ti-label-ico fromperson-ico\" name=\"person-add-outline\"></ion-icon>\n                                                            <span class=\"ti-label-prefix-span from\">From:</span>\n                                                            <span class=\"ti-label-value\">{{mtDone.nUserEntry}}</span></div>\n                                                    </ion-col>\n                                                    <ion-col size=\"4\" class=\"sheriff-task-item-label-col mytasks done taskid-col\">\n                                                        <div class=\"ti-label-taskid-div\">\n                                                            <span class=\"ti-taskid-label-value\">#{{mtDone.Id}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row *ngIf=\"mtDone.Comment!==null\" class=\"sheriff-task-item-label-row mytasks done tasknotes-row\">\n                                                    <ion-col class=\"sheriff-task-item-label-col mytasks done notes-col\">\n                                                        <div class=\"ti-label-notes-div\">\n                                                            <ion-icon class=\"ti-label-ico notes-ico\" name=\"newspaper-outline\"></ion-icon>\n                                                            <span class=\"ti-label-prefix-span notes\">Notes:</span>\n                                                            <span class=\"ti-label-value\">{{mtDone.Comment}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-task-item-label-row mytasks done taskdue-row\">\n                                                    <ion-col class=\"sheriff-task-item-label-col mytasks done due-col\">\n                                                        <!-- DUE ON -->\n                                                        <div *ngIf=\"!mtDone.nIsDone&&mtDone.DueTimestamp!==-1\" [ngStyle]=\"{'color':mtDone.nIsLate?'var(--ion-color-danger)':'#eee'}\" class=\"ti-label-due-div\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico\" name=\"alarm-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span dueon\">Due on:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">{{mtDone.nDue}}</span>\n                                                        </div>\n                                                        <!-- CREATED ON -->\n                                                        <div *ngIf=\"!mtDone.nIsDone&&mtDone.DueTimestamp===-1\" class=\"ti-label-create-div\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico\" name=\"create-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span createdon\">Created:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">{{mtDone.nCreated}}</span>\n                                                        </div>\n                                                        <!-- COMPLETED ON -->\n                                                        <div *ngIf=\"mtDone.nIsDone\" class=\"ti-label-complete-div\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico\" name=\"checkmark-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span completedon\">Completed:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">{{mtDone.nCompleted}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </ion-col>\n                                        <ion-col size=\"1\" class=\"sheriff-col sheriff-task-item-col reorder-item-col mytasks todo-item-reorderorava-col\">\n                                            <ion-avatar class=\"tabtasks-from-avatar-avatar\">\n                                                <img src=\"{{mtDone.nFromAvatar}}\" class=\"tabtasks-from-avatar-img\">\n                                            </ion-avatar>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                        </ion-list>\n                    </ion-item-group>\n                </div>\n            </div>\n            <!-- MY-TASKS LIST WRAPPER - ENDS <<< -->\n            <!-- ASS-TASKS LIST WRAPPER - STARTS >>> -->\n            <div *ngIf=\"tTSegProps.tTValue==='asstasks'\" class=\"tabtasks-list-wrapper asstasks\">\n                <ion-grid class=\"sheriff-grid tasks-group-grid asstasks assigned\">\n                    <ion-row class=\"sheriff-row tasks-group-row asstasks assigned\">\n                        <ion-col size=\"6\" class=\"sheriff-col tasks-group-col asstasks assigned label-txt-ico-col\">\n                            <div [ngStyle]=\"{'color':totalAssTasksAssigned>0?'#848484':'#565656'}\" class=\"tasks-group-label-txt-ico-wrapper asstasks assigned\">\n                                <ion-icon class=\"sheriff-tasks-group-label-ico asstasks assigned\" name=\"send\"></ion-icon>\n                                <div class=\"sheriff-tasks-group-label-txt asstasks assigned\">assigned</div>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"4\" class=\"sheriff-col tasks-group-col asstasks assigned label-spacer-col\"></ion-col>\n                        <ion-col size=\"2\" class=\"sheriff-col tasks-group-col asstasks assigned count-col\">\n                            <div [ngStyle]=\"{'color':totalAssTasksAssigned>0?'#848484':'#565656'}\" class=\"sheriff-tasks-group-countval asstasks assigned\">\n                                <span class=\"taskgroupcount-val thisgroup\">{{totalAssTasksAssigned}}</span>\n                                <span class=\"taskgroupcount-slash\">/</span>\n                                <span class=\"taskgroupcount-val thissection\">{{assTasksAssigned.length+assTasksDone.length}}</span>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- ASSIGNED TASK ITEMS HERE -->\n                <div class=\"tabtasks-group-scrollwrapper calcheight asstasks assigned\">\n                    <div *ngIf=\"totalAssTasksAssigned===0\" class=\"tabtasks-notask-wrapper asstasks assigned\">no tasks to show</div>\n                    <ion-item-group class=\"tabtasks-tasklistgroup asstasks assigned\">\n                        <ion-item *ngFor=\"let atAssigned of assTasksAssigned;let atAi = index\" [button]=\"true\" (click)=\"changeCheckStatus('assTasksAssigned',atAi,atAssigned)\" class=\"sheriff-taskitem reorder-taskitem asstasks assigned taskitem-{{atAssigned.Id}}\">\n                            <ion-grid class=\"sheriff-grid sheriff-task-item-grid reorder-item-grid asstasks assigned-item todo-{{atAi}}\">\n                                <ion-row class=\"sheriff-row sheriff-task-item-row reorder-item-row asstasks assigned-item-row\">\n                                    <ion-col size=\"2\" class=\"sheriff-col sheriff-task-item-col reorder-item-col asstasks assigned-item-cb-col\">\n                                        <div *ngIf=\"tTReorderGroupProps.roDisabled&&!deleteMode\" class=\"task-item-cb-wrapper ticbwrap-{{atAi}}\">\n                                            <ion-checkbox [checked]=\"atAssigned.nIsDone\" [disabled]=\"true\" [mode]=\"'ios'\" class=\"sheriff-checkbox task-item-cb task-item-cb-{{atAi}}\"></ion-checkbox>\n                                        </div>\n                                        <div *ngIf=\"!tTReorderGroupProps.roDisabled&&!deleteMode\" class=\"task-item-reorder-ico-wrapper tirowrap-{{atAi}}\">\n                                            <ion-icon name=\"swap-vertical\" class=\"sheriff-reorder-ico tabtasks-reorder-ico\"></ion-icon>\n                                        </div>\n                                        <div *ngIf=\"tTReorderGroupProps.roDisabled&&deleteMode\" class=\"task-item-delete-ico-wrapper tidelwrap-{{atAi}}\">\n                                            <ion-button (click)=\"deleteTask('assTasksAssigned',atAi,atAssigned)\" [disabled]=\"atAssigned.UserEntry!==meEmpId\" class=\"sheriff-btn task-item-delete-btn\">\n                                                <ion-icon name=\"trash\" class=\"sheriff-task-item-del-ico\"></ion-icon>\n                                            </ion-button>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col size=\"9\" class=\"sheriff-col sheriff-task-item-col reorder-item-col asstasks assigned-item-content-col\">\n                                        <ion-grid class=\"sheriff-grid sheriff-task-item-label-grid asstasks assigned\">\n                                            <ion-row class=\"sheriff-task-item-label-row asstasks assigned tasktitle-row\">\n                                                <ion-col class=\"sheriff-task-item-label-col asstasks assigned title-col\">\n                                                    <div class=\"ti-label-title-div\">\n                                                        <span class=\"ti-label-value\">{{atAssigned.Question}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row class=\"sheriff-task-item-label-row asstasks assigned taskfrom-row\">\n                                                <ion-col size=\"8\" class=\"sheriff-task-item-label-col asstasks assigned from-col\">\n                                                    <div class=\"ti-label-from-div\">\n                                                        <ion-icon class=\"ti-label-ico fromperson-ico\" name=\"person-add-outline\"></ion-icon>\n                                                        <span class=\"ti-label-prefix-span from\">Assigned:</span>\n                                                        <span class=\"ti-label-value\">{{atAssigned.nAssigned}}</span>\n                                                    </div>\n                                                </ion-col>\n                                                <ion-col size=\"4\" class=\"sheriff-task-item-label-col asstasks assigned taskid-col\">\n                                                    <div class=\"ti-label-taskid-div\">\n                                                        <span class=\"ti-taskid-label-value\">#{{atAssigned.Id}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row *ngIf=\"atAssigned.Comment!==null\" class=\"sheriff-task-item-label-row asstasks assigned tasknotes-row\">\n                                                <ion-col class=\"sheriff-task-item-label-col asstasks assigned notes-col\">\n                                                    <div class=\"ti-label-notes-div\">\n                                                        <ion-icon class=\"ti-label-ico notes-ico\" name=\"newspaper-outline\"></ion-icon>\n                                                        <span class=\"ti-label-prefix-span notes\">Notes:</span>\n                                                        <span class=\"ti-label-value\">{{atAssigned.Comment}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row class=\"sheriff-task-item-label-row asstasks assigned taskdue-row\">\n                                                <ion-col class=\"sheriff-task-item-label-col asstasks assigned due-col\">\n                                                    <!-- DUE ON -->\n                                                    <div *ngIf=\"!atAssigned.nIsDone&&atAssigned.DueTimestamp!==-1\" [ngStyle]=\"{'color':atAssigned.nIsLate?'var(--ion-color-danger)':'#eee'}\" class=\"ti-label-due-div\">\n                                                        <ion-icon class=\"ti-label-ico due-date-ico\" name=\"alarm-outline\"></ion-icon>\n                                                        <span class=\"ti-label-due-prefix-span dueon\">Due on:</span>\n                                                        <span class=\"ti-label-due-datetime-span time\">{{atAssigned.nDue}}</span>\n                                                    </div>\n                                                    <!-- CREATED ON -->\n                                                    <div *ngIf=\"!atAssigned.nIsDone&&atAssigned.DueTimestamp===-1\" class=\"ti-label-create-div\">\n                                                        <ion-icon class=\"ti-label-ico due-date-ico\" name=\"create-outline\"></ion-icon>\n                                                        <span class=\"ti-label-due-prefix-span createdon\">Created:</span>\n                                                        <span class=\"ti-label-due-datetime-span time\">{{atAssigned.nCreated}}</span>\n                                                    </div>\n                                                    <!-- COMPLETED ON -->\n                                                    <div *ngIf=\"atAssigned.nIsDone\" class=\"ti-label-complete-div\">\n                                                        <ion-icon class=\"ti-label-ico due-date-ico\" name=\"checkmark-outline\"></ion-icon>\n                                                        <span class=\"ti-label-due-prefix-span completedon\">Completed:</span>\n                                                        <span class=\"ti-label-due-datetime-span time\">{{atAssigned.nCompleted}}</span>\n                                                    </div>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </ion-col>\n                                    <ion-col size=\"1\" class=\"sheriff-col sheriff-task-item-col reorder-item-col asstasks assigned-item-reorderorava-col\">\n                                        <ion-avatar class=\"tabtasks-from-avatar-avatar\">\n                                            <img src=\"{{atAssigned.nAssignedAvatar}}\" class=\"tabtasks-from-avatar-img\">\n                                        </ion-avatar>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n                    </ion-item-group>\n                </div>\n                <!-- ASS TASKS SPACER -->\n                <div class=\"sheriff-tasks-mytasks-group-divider-spacer\"></div>\n                <!-- ASS TASKS - DONE GROUP HEADER -->\n                <ion-grid class=\"sheriff-grid tasks-group-grid asstasks completed\">\n                    <ion-row class=\"sheriff-row tasks-group-row asstasks completed\">\n                        <ion-col size=\"6\" class=\"sheriff-col tasks-group-col asstasks completed label-txt-ico-col\">\n                            <div [ngStyle]=\"{'color':totalAssTasksDone>0?'#848484':'#565656'}\" class=\"tasks-group-label-txt-ico-wrapper asstasks completed\">\n                                <ion-icon class=\"sheriff-tasks-group-label-ico asstasks done\" name=\"checkmark\"></ion-icon>\n                                <div class=\"sheriff-tasks-group-label-txt asstasks completed\">completed</div>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"4\" class=\"sheriff-col tasks-group-col asstasks completed label-spacer-col\"></ion-col>\n                        <ion-col size=\"2\" class=\"sheriff-col tasks-group-col asstasks completed count-col\">\n                            <div [ngStyle]=\"{'color':totalAssTasksDone>0?'#848484':'#565656'}\" class=\"sheriff-tasks-group-countval asstasks done\">\n                                <span class=\"taskgroupcount-val thisgroup\">{{totalAssTasksDone}}</span>\n                                <span class=\"taskgroupcount-slash\">/</span>\n                                <span class=\"taskgroupcount-val thissection\">{{assTasksAssigned.length+assTasksDone.length}}</span>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- ASS TASKS - DONE LIST -->\n                <div class=\"tabtasks-group-scrollwrapper calcheight asstasks done\">\n                    <ion-item-group class=\"tabtasks-tasklistgroup asstasks done\">\n                        <div *ngIf=\"totalAssTasksDone===0\" class=\"tabtasks-notask-wrapper asstasks completed\">no tasks to show</div>\n                        <ion-list *ngIf=\"totalAssTasksDone>0\" class=\"sheriff-item-list tabtasks-item-list asstasks donetasks\">\n                            <ion-item *ngFor=\"let atDone of assTasksDone;let atDi = index\" [button]=\"true\" (click)=\"changeCheckStatus('assTasksDone',atDi,atDone)\" class=\"sheriff-taskitem reorder-taskitem asstasks done taskitem-{{atDone.Id}}\">\n                                <ion-grid class=\"sheriff-grid sheriff-task-item-grid reorder-item-grid asstasks done-item done-{{atDi}}\">\n                                    <ion-row class=\"sheriff-row sheriff-task-item-row reorder-item-row asstasks done-item-row\">\n                                        <ion-col size=\"2\" class=\"sheriff-col sheriff-task-item-col asstasks done-item-cb-col\">\n                                            <div *ngIf=\"tTReorderGroupProps.roDisabled&&!deleteMode\" class=\"task-item-cb-wrapper ticbwrap-{{atDi}}\">\n                                                <ion-checkbox [checked]=\"atDone.nIsDone\" [disabled]=\"true\" [mode]=\"'ios'\" class=\"sheriff-checkbox task-item-cb task-item-cb-{{atDi}}\"></ion-checkbox>\n                                            </div>\n                                            <div *ngIf=\"tTReorderGroupProps.roDisabled&&deleteMode\" class=\"task-item-delete-ico-wrapper tidelwrap-{{atDi}}\">\n                                                <ion-button (click)=\"deleteTask('myTasksDone',atDi,atDone)\" [disabled]=\"atDone.UserEntry!==meEmpId\" class=\"sheriff-btn task-item-delete-btn\">\n                                                    <ion-icon name=\"trash\" class=\"sheriff-task-item-del-ico\"></ion-icon>\n                                                </ion-button>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col size=\"9\" class=\"sheriff-col sheriff-task-item-col asstasks done-item-content-col\">\n                                            <ion-grid class=\"sheriff-grid sheriff-task-item-label-grid asstasks done\">\n                                                <ion-row class=\"sheriff-task-item-label-row asstasks done tasktitle-row\">\n                                                    <ion-col class=\"sheriff-task-item-label-col asstasks done title-col\">\n                                                        <div class=\"ti-label-title-div\">\n                                                            <span class=\"ti-label-value\">{{atDone.Question}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-task-item-label-row asstasks done taskfrom-row\">\n                                                    <ion-col size=\"8\" class=\"sheriff-task-item-label-col asstasks done from-col\">\n                                                        <div class=\"ti-label-from-div\">\n                                                            <ion-icon class=\"ti-label-ico fromperson-ico\" name=\"person-add-outline\"></ion-icon>\n                                                            <span class=\"ti-label-prefix-span from\">Assigned:</span>\n                                                            <span class=\"ti-label-value\">{{atDone.nAssigned}}</span></div>\n                                                    </ion-col>\n                                                    <ion-col size=\"4\" class=\"sheriff-task-item-label-col asstasks done taskid-col\">\n                                                        <div class=\"ti-label-taskid-div\">\n                                                            <span class=\"ti-taskid-label-value\">#{{atDone.Id}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row *ngIf=\"atDone.Comment!==null\" class=\"sheriff-task-item-label-row asstasks done tasknotes-row\">\n                                                    <ion-col class=\"sheriff-task-item-label-col mytasks done notes-col\">\n                                                        <div class=\"ti-label-notes-div\">\n                                                            <ion-icon class=\"ti-label-ico notes-ico\" name=\"newspaper-outline\"></ion-icon>\n                                                            <span class=\"ti-label-prefix-span notes\">Notes:</span>\n                                                            <span class=\"ti-label-value\">{{atDone.Comment}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row class=\"sheriff-task-item-label-row asstasks done taskdue-row\">\n                                                    <ion-col class=\"sheriff-task-item-label-col asstasks done due-col\">\n                                                        <!-- DUE ON -->\n                                                        <div *ngIf=\"!atDone.nIsDone&&atDone.DueTimestamp!==-1\" [ngStyle]=\"{'color':atDone.nIsLate?'var(--ion-color-danger)':'#eee'}\" class=\"ti-label-due-div\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico\" name=\"alarm-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span dueon\">Due on:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">{{atDone.nDue}}</span>\n                                                        </div>\n                                                        <!-- CREATED ON -->\n                                                        <div *ngIf=\"!atDone.nIsDone&&atDone.DueTimestamp===-1\" class=\"ti-label-create-div\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico\" name=\"create-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span createdon\">Created:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">{{atDone.nCreated}}</span>\n                                                        </div>\n                                                        <!-- COMPLETED ON -->\n                                                        <div *ngIf=\"atDone.nIsDone\" class=\"ti-label-complete-div\">\n                                                            <ion-icon class=\"ti-label-ico due-date-ico\" name=\"checkmark-outline\"></ion-icon>\n                                                            <span class=\"ti-label-due-prefix-span completedon\">Completed:</span>\n                                                            <span class=\"ti-label-due-datetime-span time\">{{atDone.nCompleted}}</span>\n                                                        </div>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </ion-col>\n                                        <ion-col size=\"1\" class=\"sheriff-col sheriff-task-item-col reorder-item-col asstasks done-item-reorderorava-col\">\n                                            <ion-avatar class=\"tabtasks-from-avatar-avatar\">\n                                                <img src=\"{{atDone.nAssignedAvatar}}\" class=\"tabtasks-from-avatar-img\">\n                                            </ion-avatar>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                        </ion-list>\n                    </ion-item-group>\n                </div>\n            </div>\n            <!-- ASS-TASKS LIST WRAPPER - ENDS <<< -->\n        </div>\n    </ion-content>\n</ion-content>\n<!-- /////////////////////////////////////////////// -->\n<!-- TAB-TASKS ITEM LIST CONTENT - ENDS <<< -->\n<!-- TAB-TASKS FAB BUTTON - STARTS -->\n<ion-fab class=\"sheriff-fader-fab tabtasks\" [vertical]=\"'bottom'\" [horizontal]=\"'end'\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addTask()\" class=\"sheriff-tab-fab tasks addtask\">\n        <img src=\"../../../assets/img/sheriff-fab-addtask-ico.png\" class=\"addtaskfabimg\">\n    </ion-fab-button>\n</ion-fab>\n<!-- TAB-TASKS FAB BUTTON - ENDS <<< -->");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabtasks_tabtasks_module_ts-es2015.js.map