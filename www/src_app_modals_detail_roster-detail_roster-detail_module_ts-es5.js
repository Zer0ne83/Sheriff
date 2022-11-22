(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_modals_detail_roster-detail_roster-detail_module_ts"], {
    /***/
    28249:
    /*!*****************************************************************************!*\
      !*** ./src/app/modals/detail/roster-detail/roster-detail-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RosterDetailPageRoutingModule": function RosterDetailPageRoutingModule() {
          return (
            /* binding */
            _RosterDetailPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _roster_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./roster-detail.page */
      67820);

      var routes = [{
        path: '',
        component: _roster_detail_page__WEBPACK_IMPORTED_MODULE_0__.RosterDetailPage
      }];

      var _RosterDetailPageRoutingModule = function RosterDetailPageRoutingModule() {
        _classCallCheck(this, RosterDetailPageRoutingModule);
      };

      _RosterDetailPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RosterDetailPageRoutingModule);
      /***/
    },

    /***/
    22191:
    /*!*********************************************************************!*\
      !*** ./src/app/modals/detail/roster-detail/roster-detail.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RosterDetailPageModule": function RosterDetailPageModule() {
          return (
            /* binding */
            _RosterDetailPageModule
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


      var _roster_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./roster-detail-routing.module */
      28249);
      /* harmony import */


      var _roster_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./roster-detail.page */
      67820);

      var _RosterDetailPageModule = function RosterDetailPageModule() {
        _classCallCheck(this, RosterDetailPageModule);
      };

      _RosterDetailPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _roster_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.RosterDetailPageRoutingModule],
        declarations: [_roster_detail_page__WEBPACK_IMPORTED_MODULE_1__.RosterDetailPage]
      })], _RosterDetailPageModule);
      /***/
    },

    /***/
    67820:
    /*!*******************************************************************!*\
      !*** ./src/app/modals/detail/roster-detail/roster-detail.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RosterDetailPage": function RosterDetailPage() {
          return (
            /* binding */
            _RosterDetailPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_roster_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./roster-detail.page.html */
      91292);
      /* harmony import */


      var _roster_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./roster-detail.page.scss */
      34592);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RosterDetailPage = /*#__PURE__*/function () {
        function RosterDetailPage() {
          _classCallCheck(this, RosterDetailPage);
        }

        _createClass(RosterDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RosterDetailPage;
      }();

      _RosterDetailPage.ctorParameters = function () {
        return [];
      };

      _RosterDetailPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-roster-detail',
        template: _raw_loader_roster_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_roster_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RosterDetailPage);
      /***/
    },

    /***/
    34592:
    /*!*********************************************************************!*\
      !*** ./src/app/modals/detail/roster-detail/roster-detail.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    91292:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/detail/roster-detail/roster-detail.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>roster-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modals_detail_roster-detail_roster-detail_module_ts-es5.js.map