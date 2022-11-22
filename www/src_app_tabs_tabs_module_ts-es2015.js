(self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-circle-progress */ 29184);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);








//////////////////////////////////////////////////////////////////////////////////////////
const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tabshifts',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_sync_service_ts"), __webpack_require__.e("src_app_tabs_tabshifts_tabshifts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabshifts/tabshifts.module */ 96689)).then(m => m.TabShiftsPageModule),
                    },
                ],
            },
            {
                path: 'tabrosters',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabrosters_tabrosters_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabrosters/tabrosters.module */ 58770)).then(m => m.TabRostersPageModule),
                    },
                ],
            },
            {
                path: 'tabtsheets',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_sync_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabtsheets_tabtsheets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabtsheets/tabtsheets.module */ 61067)).then(m => m.TabTSheetsPageModule),
                    },
                ],
            },
            {
                path: 'tabtasks',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_sync_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabtasks_tabtasks_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabtasks/tabtasks.module */ 66749)).then(m => m.TabTasksPageModule),
                    },
                ],
            },
            {
                path: 'tabnews',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_sync_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabnews_tabnews_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabnews/tabnews.module */ 71893)).then(m => m.TabNewsPageModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/tabs/tabshifts',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/tabshifts',
        pathMatch: 'full',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__.NgCircleProgressModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage],
    })
], TabsPageModule);

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);





///////////////////////////////////////////////////////////////////////////
let TabsPage = class TabsPage {
    ///////////////////////////////////////////////////////////////////////////
    constructor() {
        ///////////////////////////////////////////////////////////////////////////
        this.activeTab = 'shifts';
    }
    ///////////////////////////////////////////////////////////////////////////
    tabsWillChange(event) { if (event.tab !== 'tabshifts') {
        this.tabChangeAni(event.tab);
    } ; this.activeTab = event.tab.replace('tab', ''); }
    ///////////////////////////////////////////////////////////////////////////
    tabChangeAni(tk) { const calcBarW = Math.round((jquery__WEBPACK_IMPORTED_MODULE_2__('.sheriff-page-header-col.left-col.' + tk).outerWidth() + 6) - (jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-title.' + tk).offset().left + jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-title.' + tk).outerWidth())) + 'px'; jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-slogo.' + tk).addClass('tabtilt'); jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-star.' + tk).addClass('tabchangestarback'); jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-leftbar.' + tk).css('width', calcBarW); setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_2__('.sheriff-title.tight-wrap.' + tk).addClass('scrolledin'); jquery__WEBPACK_IMPORTED_MODULE_2__('.sheriff-title-leftanimbar-inner.' + tk).addClass('showing'); setTimeout(() => { jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-leftbar.' + tk).addClass('dimmed'); jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-star.' + tk).removeClass('tabchangestarback'); jquery__WEBPACK_IMPORTED_MODULE_2__('.hcl-slogo.' + tk).removeClass('tabtilt'); }, 200); }, 200); }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({ selector: 'app-tabs', template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default, styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default] })
    ///////////////////////////////////////////////////////////////////////////
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs (ionTabsWillChange)=\"tabsWillChange($event)\" class=\"sheriff-tabs\">\n\n    <ion-tab-bar class=\"sheriff-tab-bar\" slot=\"bottom\">\n\n        <ion-tab-button class=\"sheriff-tab-btn tabshifts\" tab=\"tabshifts\">\n            <ion-icon class=\"sheriff-tab-ico tabshifts\" name=\"alarm\"></ion-icon>\n            <ion-label class=\"sheriff-tab-label tabshifts\">Shifts</ion-label>\n            <div *ngIf=\"activeTab==='shifts'\" class=\"lightdown\"></div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"sheriff-tab-btn tabrosters\" tab=\"tabrosters\">\n            <ion-icon class=\"sheriff-tab-ico tabrosters\" name=\"calendar\"></ion-icon>\n            <ion-label class=\"sheriff-tab-label tabrosters\">Rosters</ion-label>\n            <div *ngIf=\"activeTab==='rosters'\" class=\"lightdown\"></div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"sheriff-tab-btn tabtsheets\" tab=\"tabtsheets\">\n            <ion-icon class=\"sheriff-tab-ico tabtsheets\" name=\"stopwatch\"></ion-icon>\n            <ion-label class=\"sheriff-tab-label tabtsheets\">T/Sheets</ion-label>\n            <div *ngIf=\"activeTab==='tsheets'\" class=\"lightdown\"></div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"sheriff-tab-btn tabtasks\" tab=\"tabtasks\">\n            <ion-icon class=\"sheriff-tab-ico tabtasks\" name=\"list\"></ion-icon>\n            <ion-label class=\"sheriff-tab-label tabtasks\">Tasks</ion-label>\n            <div *ngIf=\"activeTab==='tasks'\" class=\"lightdown\"></div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"sheriff-tab-btn tabnews\" tab=\"tabnews\">\n            <ion-icon class=\"sheriff-tab-ico tabnews\" name=\"newspaper\"></ion-icon>\n            <ion-label class=\"sheriff-tab-label tabnews\">News</ion-label>\n            <div *ngIf=\"activeTab==='news'\" class=\"lightdown\"></div>\n        </ion-tab-button>\n\n    </ion-tab-bar>\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map