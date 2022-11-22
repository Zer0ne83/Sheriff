(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksheriff"] = self["webpackChunksheriff"] || []).push([["src_app_people_people_people_module_ts"], {
    /***/
    38710:
    /*!************************************************!*\
      !*** ./src/app/people/people/people.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeoplePageModule": function PeoplePageModule() {
          return (
            /* binding */
            _PeoplePageModule
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


      var _people_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./people.page */
      46459);

      var routes = [{
        path: '',
        component: _people_page__WEBPACK_IMPORTED_MODULE_0__.PeoplePage
      }];

      var _PeoplePageModule = function PeoplePageModule() {
        _classCallCheck(this, PeoplePageModule);
      };

      _PeoplePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot()],
        declarations: [_people_page__WEBPACK_IMPORTED_MODULE_0__.PeoplePage]
      })], _PeoplePageModule);
      /***/
    },

    /***/
    46459:
    /*!**********************************************!*\
      !*** ./src/app/people/people/people.page.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeoplePage": function PeoplePage() {
          return (
            /* binding */
            _PeoplePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_people_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./people.page.html */
      2477);
      /* harmony import */


      var _people_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./people.page.scss */
      53373);
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
      /*! ../../services/sqlite.service */
      90636);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/events.service */
      80106);
      /* harmony import */


      var ngx_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-logger */
      62740);
      /* harmony import */


      var _services_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/detail.service */
      52153);
      /* harmony import */


      var _services_deputy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/deputy.service */
      22092);
      /* harmony import */


      var _services_datetime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/datetime.service */
      12826);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/storage.service */
      71188);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__); ////////////////////////////////////////////////////////////////////////////////////////


      var _PeoplePage = /*#__PURE__*/function () {
        ////////////////////////////////////////////////////////////////////////////////////////
        function PeoplePage(evServ, logger, platform, detailServ, deputy, dT, navCtrl, loadCtrl, menuCtrl, modalCtrl, storeServ, sqlServ, appRef) {
          _classCallCheck(this, PeoplePage);

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
        } ////////////////////////////////////////////////////////////////////////////////////////


        _createClass(PeoplePage, [{
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
            this.logger.info('[Payment|ionViewDidEnter] ()...');
            this.evServ.publish('doPageEnterAnim', null);
            this.doInitPeople();
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.logger.info('[People|ionViewWillLeave] ()...');
            var titleBar = jquery__WEBPACK_IMPORTED_MODULE_8__('.hcl-leftbar.people');
            var animBarEnd = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title-leftanimbar-inner.people');
            var titleText = jquery__WEBPACK_IMPORTED_MODULE_8__('.sheriff-title.tight-wrap.people');
            jquery__WEBPACK_IMPORTED_MODULE_8__(titleBar).css('width', '0px').removeClass('dimmed');
            jquery__WEBPACK_IMPORTED_MODULE_8__(animBarEnd).removeClass('showing');
            jquery__WEBPACK_IMPORTED_MODULE_8__(titleText).removeClass('scrolledin');
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doInitPeople",
          value: function doInitPeople() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var gAPRes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.logger.info('[People|doInitPeople] ()...');
                      _context.next = 3;
                      return this.sqlServ.getAllPeople();

                    case 3:
                      gAPRes = _context.sent;

                      if (gAPRes.length > 0) {
                        this.noPeople = false;
                        this.pplArr = gAPRes;
                      } else {
                        this.noPeople = true;
                      }

                      console.log(this.pplArr);
                      this.appRef.tick();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "doPeopleRefresh",
          value: function doPeopleRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.logger.info('[People|doPeopleRefresh]');
                      setTimeout(function () {
                        event.target.complete();
                      }, 3000);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "pageEnterAnim",
          value: function pageEnterAnim() {
            var _this = this;

            this.logger.info('[People|pageEnterAnim] ()...');
            this.evServ.subscribe('doPageEnterAnim', function () {
              var pageKey = 'people';
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
              _this.leftAnimBarW = calcBarW;
              jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).addClass('hidden');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_8__(patchEles).remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).addClass('hcl-star-startanim');
                _this.progCirc.outerStrokeColor = '#FF9800';
                _this.progCirc.percent = 100;
                jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'g.png');

                _this.myAniCSS('.hcl-slogo.' + pageKey, 'tada', 400, 400, 'remove', 'show');

                setTimeout(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_8__(sLogoEle).attr('src', preImg + 'w.png');

                  _this.myAniCSS('.hcl-progcirc.' + pageKey, 'zoomOut', 0, 400, 'remove', 'hide');

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
                    _this.progCirc.percent = 0;
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_8__(cProgEle).css('display', 'unset');
                    }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_8__(starEle).removeClass('hcl-star-startanim');

                    _this.evServ.destroy('doPageEnterAnim');
                  }, 600);
                }, 400);
              }, 300);
            });
          } ////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "myAniCSS",
          value: function myAniCSS(theEle, aniName, aniDel, aniDur, aniEnd, eleEnd) {
            this.logger.info('[People|myAniCSS] (' + theEle + ', ' + aniName + ', ' + aniDel + ', ' + aniDur + ', ' + aniEnd + ', ' + eleEnd + ')...');

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

        return PeoplePage;
      }();

      _PeoplePage.ctorParameters = function () {
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

      _PeoplePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-people',
        template: _raw_loader_people_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_people_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) ////////////////////////////////////////////////////////////////////////////////////////
      ], _PeoplePage);
      /***/
    },

    /***/
    53373:
    /*!************************************************!*\
      !*** ./src/app/people/people/people.page.scss ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    2477:
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people/people/people.page.html ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"sheriff-header sheriff-tabpage-header\">\n  <ion-toolbar class=\"sheriff-toolbar\">\n      <div class=\"sheriff-header-background-wrapper\">\n          <div class=\"sheriff-header-droidstatus-padding-wrapper\"></div>\n          <div class=\"sheriff-header-background-inner-wrapper\">\n              <ion-grid class=\"sheriff-grid sheriff-page-header-grid\">\n                  <ion-row class=\"sheriff-row sheriff-page-header-row\">\n                      <ion-col class=\"sheriff-col sheriff-page-header-col left-col people\">\n                          <div class=\"sheriff-title-leftanimbar-wrapper hcl-leftbar people\">\n                              <div class=\"sheriff-title-leftanimbar-inner people\"></div>\n                          </div>\n                          <div class=\"sheriff-header-toolbar-btn-wrapper left-side\">\n                              <div class=\"sheriff-page-title sheriff-heading-sansman hcl-title people\">\n                                  <div class=\"sheriff-title tight-wrap people\">people</div>\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col middle-logo-col2\">\n                          <div class=\"sheriff-page-header-logo-wrapper\">\n                              <div class=\"sheriff-page-header-logo-inner-wrapper\">\n                                  <div class=\"sheriff-page-header-logo-highlight-layer hcl-ring people\"></div>\n                                  <div id=\"sheriff-circle-progress-header-wrapper\" class=\"sheriff-progress-circle people hcl-progcirc people\">\n                                      <circle-progress [responsive]=progCirc.responsive [showTitle]=progCirc.showTitle [showSubtitle]=progCirc.showSubtitle [showUnits]=progCirc.showUnits [percent]=progCirc.percent [radius]=progCirc.radius [outerStrokeWidth]=progCirc.outerStrokeWidth [showInnerStroke]=progCirc.showInnerStroke\n                                          [outerStrokeColor]=progCirc.outerStrokeColor [animation]=progCirc.animation [backgroundPadding]=progCirc.backgroundPadding [animationDuration]=progCirc.animationDuration></circle-progress>\n                                  </div>\n                                  <div id=\"logo-top-patchcover-outter\" class=\"logo-top-patchcover outter hcl-opatch people\">\n                                      <div id=\"logo-top-patchcover-inner\" class=\"logo-top-patchcover inner hcl-ipatch people\"></div>\n                                  </div>\n                                  <img src=\"../../../assets/img/loadingstar.png\" class=\"sheriff-page-header-starbadge-img hcl-star people\">\n                                  <img src=\"../../../assets/img/slogo-w.png\" class=\"sheriff-page-header-main-logo-img hcl-slogo people\">\n                              </div>\n                          </div>\n                      </ion-col>\n                      <ion-col class=\"sheriff-col sheriff-page-header-col right-menubtns-col3\">\n                          <div class=\"sheriff-header-toolbar-btn-wrapper right-side\">\n                              <div class=\"sheriff-page-backbtn-wrapper peoplement\">\n                                  <ion-back-button icon=\"chevron-back-outline\" class=\"sheriff-backbtn people\" defaultHref=\"/tabs\"></ion-back-button>\n                              </div>\n                              <div class=\"sheriff-menu-button-wrapper\">\n                                  <ion-menu-button class=\"sheriff-menu-button people\" autoHide=\"false\">\n                                      <img src=\"../../../assets/img/sheriff-mainmenu-s.png\" class=\"sheriff-mainmenuico\">\n                                  </ion-menu-button>\n                              </div>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sheriff-content tab-content people\">\n  <!-- PAGE REFRESHER -->\n  <ion-refresher class=\"sheriff-refresher page people\" slot=\"fixed\" (ionRefresh)=\"doPeopleRefresh($event)\">\n      <div class=\"sheriff-refresher-noise-wrapper\">\n          <ion-refresher-content class=\"sheriff-refresher-content-class\" pullingIcon=\"arrow-down-circle\" refreshingSpinner=\"dots\"></ion-refresher-content>\n      </div>\n  </ion-refresher>\n  <!-- PAGE-CONTENT -->\n  <!-- CONTENT HEADING -->\n  <div class=\"sheriff-tabcontent-mainheading-wrapper people\">\n      <ion-grid class=\"sheriff-grid sheriff-tabcontent-header-grid people\">\n          <ion-row class=\"sheriff-row sheriff-tabcontent-header-row row1 people\">\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col1 people\">\n              </ion-col>\n              <ion-col size=\"6\" class=\"sheriff-col sheriff-tabcontent-header-col col2 people\">\n                <img class=\"sheriff-reflect-title\" src=\"../../assets/img/sheriff-reflecttitle-people.png\">\n              </ion-col>\n              <ion-col size=\"3\" class=\"sheriff-col sheriff-tabcontent-header-col col3 people\">\n               \n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>  \n  <!-- CONTENT WRAPPER -->\n  <div class=\"sheriff-people-page main-page-outter-wrapper\">\n    <div *ngIf=\"noPeople\" class=\"sheriff-people-div nopeople-outter-wrap\">\n        <div class=\"sheriff-people-div nopeople-inner-wrap\">\n          No People Found\n        </div>\n    </div>\n    <div *ngIf=\"pplArr.length>0\" class=\"sheriff-people-list-outter-wrapper\">\n      <ion-list class=\"sheriff-list sheriff-people-list people-list\">\n        <ion-item *ngFor=\"let ppl of pplArr;let iP=index\" class=\"sheriff-item sheriff-person-item person-item\">\n          <ion-grid class=\"sheriff-grid sheriff-people-grid people-grid\">\n            <ion-row class=\"sheriff-row sheriff-people-row ppl-row\">\n              <ion-col size=\"1\" class=\"sheriff-col sheriff-people-col ppl-col avatar-col\">\n                <img class=\"people-list ppl-avatar-img\" src=\"{{ppl.Photo}}\">\n              </ion-col>\n              <ion-col size=\"6\" class=\"sheriff-col sheriff-people-col ppl-col name-col\">\n                {{ppl.DisplayName}}\n              </ion-col>\n              <ion-col size=\"1\" class=\"sheriff-col sheriff-people-col ppl-col empid-col\">\n                {{ppl.EmpId}}\n              </ion-col>\n              <ion-col size=\"1\" class=\"sheriff-col sheriff-people-col ppl-col company-col\">\n                {{ppl.Company}}\n              </ion-col>\n              <ion-col  size=\"1\" class=\"sheriff-col sheriff-people-col ppl-col role-col\">\n                {{ppl.Role}}\n              </ion-col>\n              <ion-col size=\"1\" class=\"sheriff-col sheriff-people-col ppl-col issamewp-col\">\n                {{ppl.IsSameWorkplace}}\n              </ion-col>\n              <ion-col size=\"1\" class=\"sheriff-col sheriff-people-col ppl-col issub-col\">\n                {{ppl.IsSubordinate}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <!-- END OF PAGE-CONTENT -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_people_people_people_module_ts-es5.js.map