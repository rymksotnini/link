function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <div class=\"position-relative\">\r\n        <!-- shape Hero -->\r\n        <section class=\"section section-lg section-shaped pb-250\">\r\n            <div class=\"shape shape-style-1 shape-default\">\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n            </div>\r\n            <div class=\"container py-lg-md d-flex\">\r\n                <div class=\"col px-0\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                            <img src=\"./assets/img/brand/longLogo.png\" style=\"width: 200px;\" class=\"img-fluid\">\r\n                            <h1 class=\"display-3  text-white\">Easiest way to connect\r\n                                <span>Sponsors <i class=\"fa fa-arrows-h\"></i> Organizations</span>\r\n                            </h1>\r\n                            <p class=\"lead  text-white\">Link comes with an easy to manipulate platform, connecting sponsors and organizations. You can create an account as a sponsor or as an organization and you are good to go.</p>\r\n                            <div class=\"btn-wrapper\">\r\n                                <a [routerLink]=\"['/register']\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                                    <span class=\"btn-inner--text\">Register</span>\r\n                                    <span class=\"btn-inner--icon\"><i class=\"fa fa-angle-double-right\"></i></span>\r\n                                </a>\r\n                                <a href=\"#details\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                                    <span class=\"btn-inner--text\">More Details</span>\r\n                                    <span class=\"btn-inner--icon\"><i class=\"fa fa-angle-double-down\"></i></span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n                            <div class=\"position-relative pl-md-5\">\r\n                                <img src=\"./assets/img/theme/Handshake.png\" class=\"img-center img-fluid rounded floating\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- SVG separator -->\r\n            <div class=\"separator separator-bottom separator-skew\">\r\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </section>\r\n        <!-- 1st Hero Variation -->\r\n    </div>\r\n    <section id=\"details\" class=\"section section-lg pt-lg-0 mt--200\">\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"row row-grid\">\r\n                        <div class=\"offset-2 col-lg-4\">\r\n                            <div class=\"card card-lift--hover shadow border-0\" style=\"height: 400px\">\r\n                                <div class=\"card-body py-5\">\r\n                                    <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                                        <i class=\"fa fa-dollar\"></i>\r\n                                    </div>\r\n                                    <h6 class=\"text-success text-uppercase\">Sponsors</h6>\r\n                                    <p class=\"description mt-3\">Choose the event that you want to invest into and get a full traceability of money transactions.</p>\r\n                                    <div>\r\n                                        <span class=\"badge badge-pill badge-success\">business</span>\r\n                                        <span class=\"badge badge-pill badge-success\">investment</span>\r\n                                        <span class=\"badge badge-pill badge-success\">sponsoring</span>\r\n                                    </div>\r\n                                    <a href=\"#sponsors-section\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4\">\r\n                            <div class=\"card card-lift--hover shadow border-0\" style=\"height: 400px\">\r\n                                <div class=\"card-body py-5\">\r\n                                    <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                                        <i class=\"fa fa-users\"></i>\r\n                                    </div>\r\n                                    <h6 class=\"text-warning text-uppercase\">Organizations</h6>\r\n                                    <p class=\"description mt-3\">Create your event and share it for the sponsors to see.</p>\r\n                                    <div>\r\n                                        <span class=\"badge badge-pill badge-warning\">event</span>\r\n                                        <span class=\"badge badge-pill badge-warning\">budget</span>\r\n                                        <span class=\"badge badge-pill badge-warning\">organization</span>\r\n                                    </div>\r\n                                    <a href=\"#organizations-section\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section id=\"sponsors-section\" class=\"section section-lg\">\r\n        <div class=\"container\">\r\n            <div class=\"row row-grid align-items-center\">\r\n                <div class=\"col-md-6 order-md-2\">\r\n                    <img src=\"./assets/img/theme/moneyBills.png\" class=\"img-fluid floating\">\r\n                </div>\r\n                <div class=\"col-md-6 order-md-1\">\r\n                    <div class=\"pr-md-5\">\r\n                        <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n                            <i class=\"fa fa-dollar\"></i>\r\n                        </div>\r\n                        <h3>Sponsors</h3>\r\n                        <p class=\"lead\">Sponsor account comes with three benefits to help you build the desired image</p>\r\n                        <ul class=\"list-unstyled mt-5\">\r\n                            <li class=\"py-2\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div>\r\n                                        <div class=\"badge badge-circle badge-success mr-3\">\r\n                                            <i class=\"fa fa-file-text\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div>\r\n                                        <h6 class=\"mb-0\">Traceability</h6>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"py-2\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div>\r\n                                        <div class=\"badge badge-circle badge-success mr-3\">\r\n                                            <i class=\"fa fa-bullhorn\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div>\r\n                                        <h6 class=\"mb-0\">Image Marketing</h6>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"py-2\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div>\r\n                                        <div class=\"badge badge-circle badge-success mr-3\">\r\n                                            <i class=\"fa fa-calendar-check-o\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div>\r\n                                        <h6 class=\"mb-0\">Events Visibility</h6>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section id=\"organizations-section\" class=\"section bg-secondary\">\r\n        <div class=\"container\">\r\n            <div class=\"row row-grid align-items-center\">\r\n                <div class=\"col-md-6\">\r\n                    <img src=\"./assets/img/theme/organization.png\" class=\"img-fluid floating\">\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"pl-md-5\">\r\n                        <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n                            <i class=\"fa fa-users\"></i>\r\n                        </div>\r\n                        <h3>Organizations</h3>\r\n                        <p class=\"lead\">Organization account comes with three benefits to help you organize your events</p>\r\n                        <ul class=\"list-unstyled mt-5\">\r\n                            <li class=\"py-2\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div>\r\n                                        <div class=\"badge badge-circle badge-warning mr-3\">\r\n                                            <i class=\"fa fa-calendar-plus-o\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div>\r\n                                        <h6 class=\"mb-0\">Event Creation</h6>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"py-2\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div>\r\n                                        <div class=\"badge badge-circle badge-warning mr-3\">\r\n                                            <i class=\"fa fa-sitemap\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div>\r\n                                        <h6 class=\"mb-0\">Organizing Tool</h6>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"py-2\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div>\r\n                                        <div class=\"badge badge-circle badge-warning mr-3\">\r\n                                            <i class=\"fa fa-list-alt\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div>\r\n                                        <h6 class=\"mb-0\">Sponsor Contacts</h6>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section section-lg\">\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center text-center mb-lg\">\r\n                <div class=\"col-lg-8\">\r\n                    <h2 class=\"display-3\">The amazing Team</h2>\r\n                    <p class=\"lead text-muted\">When ideation and development become one. With these great people we were able to create our project.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n                    <div class=\"px-4\">\r\n                        <img src=\"./assets/img/theme/rymKsontini.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n                        <div class=\"pt-4 text-center\">\r\n                            <h5 class=\"title\">\r\n                                <span class=\"d-block mb-1\">Rym</span>\r\n                                <span class=\"d-block mb-1\">KSONTINI</span>\r\n                                <small class=\"h6 text-muted\">Web Developer</small>\r\n                            </h5>\r\n                            <div class=\"mt-3\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-facebook\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-dribbble\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n                    <div class=\"px-4\">\r\n                        <img src=\"./assets/img/theme/hayfaTayeb.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n                        <div class=\"pt-4 text-center\">\r\n                            <h5 class=\"title\">\r\n                                <span class=\"d-block mb-1\">Hayfa</span>\r\n                                <span class=\"d-block mb-1\">TAYEB</span>\r\n                                <small class=\"h6 text-muted\">Web Developer </small>\r\n                            </h5>\r\n                            <div class=\"mt-3\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-facebook\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-dribbble\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n                    <div class=\"px-4\">\r\n                        <img src=\"./assets/img/theme/MeriemBenChaaben.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n                        <div class=\"pt-4 text-center\">\r\n                            <h5 class=\"title\">\r\n                                <span class=\"d-block mb-1\">Meriem</span>\r\n                                <span class=\"d-block mb-1\">BEN CHAABEN</span>\r\n                                <small class=\"h6 text-muted\">Web Developer </small>\r\n                            </h5>\r\n                            <div class=\"mt-3\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-facebook\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-dribbble\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n                    <div class=\"px-4\">\r\n                        <img src=\"./assets/img/theme/EmnaKsontini.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n                        <div class=\"pt-4 text-center\">\r\n                            <h5 class=\"title\">\r\n                                <span class=\"d-block mb-1\">Emna</span>\r\n                                <span class=\"d-block mb-1\">KSONTINI</span>\r\n                                <small class=\"h6 text-muted\">Web Developer </small>\r\n                            </h5>\r\n                            <div class=\"mt-3\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-default btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-default btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-facebook\"></i>\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-default btn-icon-only rounded-circle\">\r\n                                    <i class=\"fa fa-dribbble\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel-for-events/carousel-for-events.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel-for-events/carousel-for-events.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarouselForEventsCarouselForEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "        <div class=\"row justify-content-center\">\r\n\r\n                <div *ngFor=\"let element of elements;\" class=\" col-lg-4 \">\r\n                            <app-upcoming-event  [description]=\"element.description\" [eventPhoto]=\"element.img\" [title]=\"element.title\" ></app-upcoming-event>\r\n                </div>\r\n                      <!-- <div class=\" col-lg-4 \">\r\n                            <app-upcoming-event></app-upcoming-event>\r\n                        </div>\r\n                    <div class=\" col-lg-4 \">\r\n                        <app-upcoming-event></app-upcoming-event>\r\n                    </div>\r\n                        <div class=\"col-lg-4\">\r\n                            <app-upcoming-event></app-upcoming-event>\r\n                        </div> -->\r\n\r\n                    </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"row justify-content-center\">\r\n            <nav aria-label=\"Page navigation example\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage($event)\"aria-label=\"Default pagination\">\r\n                    <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\r\n                    <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\r\n                </ngb-pagination>\r\n            </nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event-form/event-form.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-form/event-form.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventFormEventFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <section class=\"section section-shaped section-lg\">\r\n        <div class=\"shape shape-style-1 bg-gradient-default\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        <div class=\"container pt-lg-md\">\r\n\r\n            <div class=\"row justify-content-center\">\r\n\r\n                <div class=\"col-lg-10\">\r\n                    <div class=\"card bg-secondary shadow border-0\"style=\"padding-top: 30px ;   \">\r\n\r\n                        <div class=\"card-body justify-content-center px-lg-5 py-lg-5\">\r\n                            <div class=\"  col-md-10 white order-md-2\">\r\n                                <h2 class=\"  text-uppercase font-weight-bold mb-3\">\r\n                                    Create a new event\r\n                                </h2>\r\n                            </div>\r\n                            <form #formulaireEvent=\"ngForm\">\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">Name</small>\r\n                                    <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                                        <div class=\"input-group mb-4\">\r\n                                            <div class=\"input-group-prepend\">\r\n                                                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n                                            </div>\r\n                                            <input required name=\"name\" ngModel class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                        </div>\r\n                                    </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">START DATE</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                    </div>\r\n                                    <input required name=\"startDate\" ngModel class=\"form-control date-picker\" placeholder=\"Select date\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\r\n                                </div>\r\n                            </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">END DATE</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                        </div>\r\n                                        <input required name=\"endDate\" ngModel class=\"form-control date\" placeholder=\"Select date\"  [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">PLACE</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                                    <div class=\"input-group mb-4\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n                                        </div>\r\n                                        <input required name=\"place\" ngModel class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                    </div>\r\n                                </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">category</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                                    <div class=\"input-group mb-4\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n                                        </div>\r\n                                        <input required name=\"category\" ngModel class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                    </div>\r\n                                </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">DESCRIPTION</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                                    <div class=\"input-group mb-4\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n                                        </div>\r\n                                        <textarea required  name=\"description\" ngModel class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\"> </textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">Budget</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                                    <div class=\"input-group mb-4\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-money-coins\"></i></span>\r\n                                        </div>\r\n                                        <input required  name=\"budget\" ngModel class=\"form-control\" placeholder=\"specify budget in dinar\" type=\"number\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                    </div>\r\n                                </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">Event Image</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                                    <div>\r\n                                        <input type=\"file\" name=\"image\" (change)=\"selectImage($event)\" />\r\n                                    </div>\r\n                                    <br>\r\n                                </div>\r\n                                <small class=\"d-block text-uppercase font-weight-bold mb-3\">Sponsoring File</small>\r\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                                    <div>\r\n                                        <input type=\"file\" name=\"image\" (change)=\"selectFile($event)\" />\r\n                                    </div>\r\n                                    <br>\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <button type=\"button\" class=\"btn btn-white my-4 changeColor\" (click)=\"submit(formulaireEvent)\" [disabled]=\"!formulaireEvent.form.valid\">create</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <div class=\"position-relative\">\r\n        <!-- Hero for FREE version -->\r\n        <section class=\"section section-lg section-hero section-shaped\">\r\n            <!-- Background circles -->\r\n            <div class=\"shape shape-style-1 shape-primary\">\r\n                <span class=\"span-150\">\r\n                    </span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n\r\n            <div>\r\n                <div class=\"container justify-content-center\">\r\n                    <div class=\"row justify-content-center\">\r\n                    <div *ngFor=\"let event of events ;let index = index;\" class=\"col-lg-12 mt-4 mt-lg-0\">\r\n                        <div class=\"navbar navbar-expand-lg navbar-dark bg-gradient-white rounded\">\r\n                            <div class=\"container\">\r\n                                <div class=\" col-4\">\r\n                                    <img [src]=\"event.image\" class=\"img-fluid card-profile-image rounded shadow \" >\r\n                                </div>\r\n                                <div class=\" col-8 \">\r\n                                    <br>\r\n                                    <a class=\" text-dark display-4\" href=\"javascript:void(0)\">{{event.name}}</a>\r\n                                    <p class=\"lead text-muted\">{{event.description}}</p>\r\n                                    <div class=\"progress-wrapper\">\r\n                                        <div class=\"progress-info\">\r\n                                            <div class=\"progress-label\">\r\n                                                <span>Funding</span>\r\n                                            </div>\r\n                                            <div class=\"progress-percentage\">\r\n                                                <span>{{(event.fundings/event.budget)*100}}%</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <ngb-progressbar type=\"default\" [value]=\"(event.fundings/event.budget)*100\"></ngb-progressbar>\r\n                                    </div>\r\n                                    <div  *ngIf=\"event.input\" class=\"input-group mb-4\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-money-coins\"></i></span>\r\n                                        </div>\r\n                                        <input required #budget  name=\"budget\" ngModel class=\"form-control\" placeholder=\"specify budget in dolar\" type=\"number\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                        <button class=\"btn btn-1 btn-neutral\" type=\"button\" (click)=\"Fund(index,budget.value)\">FUND</button>\r\n\r\n                                    </div>\r\n                                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                                        <span class=\"navbar-toggler-icon\"></span>\r\n                                    </button>\r\n                                    <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\r\n                                        <div class=\"navbar-collapse-header\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-6 collapse-brand\">\r\n                                                    <a href=\"javascript:void(0)\">\r\n                                                        <img src=\"./assets/img/brand/blue.png\">\r\n                                                    </a>\r\n                                                </div>\r\n                                                <div class=\"col-6 collapse-close\">\r\n                                                    <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                                                        <span></span>\r\n                                                        <span></span>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <ul class=\"navbar-nav ml-lg-auto\">\r\n                                            <li class=\"nav-item\">\r\n                                                <a class=\"nav-link text-dark nav-link-icon\" href=\"javascript:void(0)\">\r\n                                                    <i class=\"ni ni-favourite-28\"></i>\r\n                                                    <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n                                                </a>\r\n                                            </li>\r\n                                            <li class=\"nav-item\">\r\n                                                <a class=\"nav-link text-dark nav-link-icon\" href=\"javascript:void(0)\">\r\n                                                    <i class=\"ni ni-notification-70\"></i>\r\n                                                    <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n                                                </a>\r\n                                            </li>\r\n                                            <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                                                <a class=\"nav-link  text-dark nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                    <i class=\"ni ni-settings-gear-65\"></i>\r\n                                                    <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n                                                </a>\r\n                                                <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\r\n                                                    <a class=\"dropdown-item\" href=\"javascript:void(0) \" (click)=\"inputOn(index)\">Fund</a>\r\n                                                    <div class=\"dropdown-divider\"></div>\r\n                                                    <a class=\"dropdown-item\" href=\"javascript:void(0) \" (click)=\"getSponsoringFile(index)\">Download Sponsoring File</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <br>\r\n                    </div>\r\n            </div>\r\n            </div>\r\n            </div>\r\n                </section>\r\n    </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/file-loder/file-loder.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-loder/file-loder.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFileLoderFileLoderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <div class=\"position-relative\">\r\n        <!-- Hero for FREE version -->\r\n        <section class=\"section section-lg section-hero section-shaped\">\r\n            <!-- Background circles -->\r\n            <div class=\"shape shape-style-1 shape-primary\">\r\n                <span class=\"span-150\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n            </div>\r\n            <div class=\"container shape-container d-flex align-items-center py-lg\" style=\"\r\n    height: 650px;\">\r\n                <div class=\"col px-0\">\r\n                    <div class=\"row align-items-center justify-content-center\">\r\n                        <!-- <div class=\"col-lg-2 \">\r\n                            <img src=\"./assets/img/brand/longLogo.png\" style=\"width: 150px;margin-left: 50px;margin-top: -42px;\" >\r\n                        </div> -->\r\n                        <div class=\"col-lg-12 text-center\">\r\n                            <img src=\"./assets/img/brand/courtLogo.png\" style=\"background: #222;width: 150px;border-radius: 150px;margin-top: -60px;\"  class=\"floating\">\r\n<br>\r\n                            <br>\r\n                            <h1 class=\"display-2 text-white\">LINK is a marketplace for event sponsorships.\r\n                            </h1>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row align-items-center justify-content-center\">\r\n                        <p class=\"lead text-white\" >We make it easy to find and sponsor events to engage with your brand’s target audience\r\n                        </p>\r\n                    <div class=\"btn-wrapper mt-5\">\r\n                        <a [routerLink]=\"['./']\" fragment=\"events\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\r\n                                    <span class=\"btn-inner--icon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                    <span class=\"btn-inner--text\">DISCOVER EVENTS</span>\r\n                                </a>\r\n                        <a [routerLink]=\"['./']\" fragment=\"sponsors\" class=\"btn btn-lg btn-sponsor btn-icon mb-3 mb-sm-0\">\r\n                            <span class=\"btn-inner--icon\"><i class=\"fa fa-connectdevelop\"></i></span>\r\n                            <span  class=\"btn-inner--text\" >TOP SPONSORS</span>\r\n                        </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n            </div>\r\n            <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </section>\r\n    <section id=\"sponsors\" class=\"section section-lg\" style=\" height: auto;\">\r\n        <app-top-sponsors></app-top-sponsors>\r\n\r\n    </section>\r\n        <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n            <svg  x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <polygon  points=\"2560 0 2560 100 0 100\" style=\"\r\n    fill: #f4f5f7;\r\n\"></polygon>\r\n            </svg>\r\n        </div>\r\n        <section id=\"events\"class=\"section section-lg section-nucleo-icons pb-250 bg-secondary\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2 order-md-2 \">\r\n                        <div class=\"icon icon-lg icon-shape bg-gradient-success  text-white-50 shadow rounded-circle mb-5\">\r\n                            <i class=\"ni ni-calendar-grid-58\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-10 order-md-2\">\r\n                        <h2 class=\"display-3\" style=\"margin-left: -70px;\">\r\n                            Upcoming Events\r\n                        </h2>\r\n                    </div>\r\n                </div>\r\n                    <app-carousel-for-events></app-carousel-for-events>\r\n                <div class=\"blur--hover\">\r\n                    <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\r\n                        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\r\n                            <!-- Center -->\r\n                            <i class=\"icon ni ni-diamond\"></i>\r\n                            <!-- Right 1 -->\r\n                            <i class=\"icon icon-sm ni ni-album-2\"></i>\r\n                            <i class=\"icon icon-sm ni ni-app\"></i>\r\n                            <i class=\"icon icon-sm ni ni-atom\"></i>\r\n                            <!-- Right 2 -->\r\n                            <i class=\"icon ni ni-bag-17\"></i>\r\n                            <i class=\"icon ni ni-bell-55\"></i>\r\n                            <i class=\"icon ni ni-credit-card\"></i>\r\n                            <!-- Left 1 -->\r\n                            <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\r\n                            <i class=\"icon icon-sm ni ni-building\"></i>\r\n                            <i class=\"icon icon-sm ni ni-button-play\"></i>\r\n                            <!-- Left 2 -->\r\n                            <i class=\"icon ni ni-calendar-grid-58\"></i>\r\n                            <i class=\"icon ni ni-camera-compact\"></i>\r\n                            <i class=\"icon ni ni-chart-bar-32\"></i>\r\n                        </div>\r\n                        <span class=\"blur-hidden h5 text-success\">Explore all the 21.000+ Event</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n    <section class=\"section section-lg bg-gradient-default\">\r\n        <div class=\"container pt-lg pb-300\">\r\n            <div class=\"row text-center justify-content-center\">\r\n                <div class=\"col-lg-10\">\r\n                    <h2 class=\"display-3 text-white\">Build something</h2>\r\n                    <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-grid mt-5\">\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                        <i class=\"ni ni-settings text-primary\"></i>\r\n                    </div>\r\n                    <h5 class=\"text-white mt-3\">Building tools</h5>\r\n                    <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                        <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n                    </div>\r\n                    <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n                    <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                        <i class=\"ni ni-atom text-primary\"></i>\r\n                    </div>\r\n                    <h5 class=\"text-white mt-3\">Launch time</h5>\r\n                    <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n            </svg>\r\n        </div>\r\n    </section>\r\n    <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center mt--300\">\r\n                <div class=\"col-lg-8\">\r\n                    <div class=\"card bg-gradient-secondary shadow\">\r\n                        <div class=\"card-body p-lg-5\">\r\n                            <h4 class=\"mb-1\">Want to work with us?</h4>\r\n                            <p class=\"mt-0\">Your project is very important to us.</p>\r\n                            <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                                <div class=\"input-group input-group-alternative\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                                    </div>\r\n                                    <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                                <div class=\"input-group input-group-alternative\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                                    </div>\r\n                                    <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group mb-4\">\r\n                                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                            </div>\r\n                            <div>\r\n                                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    </div></main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <div class=\"position-relative\">\r\n    <!-- Hero for FREE version -->\r\n    <section class=\"section section-lg section-hero section-shaped\">\r\n      <!-- Background circles -->\r\n      <div class=\"shape shape-style-1 shape-primary\">\r\n        <span class=\"span-150\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n      </div>\r\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row align-items-center justify-content-center\">\r\n            <div class=\"col-lg-6 text-center\">\r\n              <img src=\"./assets/img/brand/longLogo.png\" style=\"width: 200px;\" class=\"img-fluid\">\r\n              <p class=\"lead text-white\">A beautiful Design System for Bootstrap 4 and Angular 7. It's Free and Open Source.</p>\r\n              <div class=\"btn-wrapper mt-5\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Download Angular</span>\r\n                </a>\r\n                <a href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-github btn-icon mb-3 mb-sm-0\" target=\"_blank\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-github\"></i></span>\r\n                  <span class=\"btn-inner--text\">\r\n                    <span class=\"text-warning\">Star us</span> on Github</span>\r\n                </a>\r\n              </div>\r\n              <div class=\"mt-5\">\r\n                <small class=\"text-white font-weight-bold mb-0 mr-2\">*proudly coded by</small>\r\n                <img src=\"./assets/img/brand/creativetim-white-slim.png\" style=\"height: 28px;\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <app-sections></app-sections>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <div class=\"position-relative\">\r\n    <!-- shape Hero -->\r\n    <section class=\"section section-lg section-shaped pb-250\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h1 class=\"display-3  text-white\">A beautiful Design System\r\n                <span>completed with examples</span>\r\n              </h1>\r\n              <p class=\"lead  text-white\">The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n              <div class=\"btn-wrapper\">\r\n                <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Components</span>\r\n                </a>\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Download Angular</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                    <i class=\"ni ni-check-bold\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                    <i class=\"ni ni-istanbul\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-success\">business</span>\r\n                    <span class=\"badge badge-pill badge-success\">vision</span>\r\n                    <span class=\"badge badge-pill badge-success\">success</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                    <i class=\"ni ni-planet\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                    <span class=\"badge badge-pill badge-warning\">product</span>\r\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n          <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n            </div>\r\n            <h3>Awesome features</h3>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-settings-gear-65\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-html5\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section bg-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-default shadow border-0\">\r\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>Our customers</h3>\r\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-success\">Awesome Support</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Modular Components</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center text-center mb-lg\">\r\n        <div class=\"col-lg-8\">\r\n          <h2 class=\"display-3\">The amazing Team</h2>\r\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                <small class=\"h6 text-muted\">Web Developer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">John Doe</span>\r\n                <small class=\"h6 text-muted\">Founder and CEO</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">Build something</h2>\r\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Building tools</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Launch time</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to work with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n          <div class=\"btn-wrapper\">\r\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n<app-carousel-for-events></app-carousel-for-events>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"row\" style=\"margin-bottom: 20px\">\r\n            <img class=\"img-fluid offset-3 col-lg-6\" src=\"./assets/img/brand/longLogo.png\">\r\n          </div>\r\n          <div class=\"card bg-secondary shadow border-0\"style=\"padding-top: 30px\">\r\n\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n\r\n              <form  (ngSubmit)=\"onSubmit(formulaireLogin)\"  #formulaireLogin=\"ngForm\">\r\n                <div class=\"form-group mb-3\" >\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"text form-control email\" type=\"email\" name=\"email\" placeholder=\"Email\" ngModel required=\"\" email>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group mb-3\" >\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"text form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" ngModel required=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <input type=\"button\" class=\"btn btn-white my-4 changeColor\" type=\"submit\" [disabled]=\"!formulaireLogin.form.valid\" value=\"login\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/organization-manage-profile/organization-manage-profile.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization-manage-profile/organization-manage-profile.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrganizationManageProfileOrganizationManageProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"profile-page\">\r\n    <section class=\"section-profile-cover section-shaped my-0\">\r\n        <!-- Circles background -->\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n                 xmlns=\"http://www.w3.org/2000/svg\">\r\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n            </svg>\r\n        </div>\r\n    </section>\r\n    <section class=\"section\">\r\n        <div class=\"container\">\r\n            <div class=\"card card-profile shadow mt--300\">\r\n                <div class=\"px-4\">\r\n                    <div class=\"row\" style=\"padding: 2rem;\">\r\n                        <h2>Manage Your Profile</h2>\r\n                    </div>\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-lg-10\">\r\n                            <form #formUpdateSponsor=\"ngForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Activity</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"activity\"\r\n                                                   [(ngModel)]=\"organization.activity\"\r\n                                                   value=\"{{organization.activity}}\" placeholder=\"Your activity field.\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Registration Number</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"matricule\"\r\n                                                   [(ngModel)]=\"organization.matricule\"\r\n                                                   value=\"{{organization.matricule}}\" placeholder=\"Registration Number\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">City</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"city\"\r\n                                                   [(ngModel)]=\"organization.city\"\r\n                                                   value=\"{{organization.city}}\" placeholder=\"City\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Country</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"country\"\r\n                                                   [(ngModel)]=\"organization.country\"\r\n                                                   value=\"{{organization.country}}\" placeholder=\"Country\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Slogan</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"slogan\"\r\n                                                   [(ngModel)]=\"organization.slogan\"\r\n                                                   value=\"{{organization.slogan}}\" placeholder=\"Your Company Slogan\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\" row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Description</label>\r\n                                            <textarea class=\"form-control\" row=\"4\" name=\"description\"\r\n                                                      [(ngModel)]=\"organization.description\"\r\n                                                      value=\"{{organization.description}}\"\r\n                                                      placeholder=\"Write a paragraph to describe your Organization\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\" row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Upload New Profile Image</label>\r\n                                            <div class=\"row\">\r\n                                                <input type=\"file\" name=\"image\" (change)=\"selectImage($event)\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\" row\">\r\n                                    <div class=\"col-md-8 offset-5 center\">\r\n                                        <div class=\"form-group\">\r\n                                            <button type=\"button\" class=\"btn btn-1 btn-danger changeColor\"\r\n                                                    (click)=\"submit()\" [disabled]=\"!formUpdateSponsor.form.valid\">Save\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/organization-profile/organization-profile.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization-profile/organization-profile.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrganizationProfileOrganizationProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"profile-page\">\r\n    <section class=\"section-profile-cover section-shaped my-0\">\r\n        <!-- Circles background -->\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n                 xmlns=\"http://www.w3.org/2000/svg\">\r\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n            </svg>\r\n        </div>\r\n    </section>\r\n    <section class=\"section\">\r\n        <div class=\"container\">\r\n            <div class=\"card card-profile shadow mt--300\">\r\n                <div class=\"px-4\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-lg-3 order-lg-2\">\r\n                            <div class=\"card-profile-image\">\r\n                                <img [src]=\"organization.image\" class=\"rounded-circle\" style=\"width: 400px; height: 200px\">                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 order-lg-3 align-self-lg-center\">\r\n                            <div class=\"py-4 mt-lg-0\">\r\n                                <button *ngIf=\"userConnected\" (click)=\"deleteMyself()\" class=\"btn btn-sm btn-danger\">\r\n                                    <i class=\"fa fa-times\"></i> Delete Account\r\n                                </button>\r\n                                <a *ngIf=\"userConnected\" [routerLink]=\"['/organization-manage-profile']\"\r\n                                   class=\"btn btn-sm btn-default float-right\">\r\n                                    <i class=\"ni ni-settings-gear-65\"></i>\r\n                                    Manage Profile\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 order-lg-1\">\r\n                            <div class=\"card-profile-stats d-flex justify-content-center\">\r\n                                <div>\r\n                                    <span class=\"heading\">{{organization.followers}}</span>\r\n                                    <span class=\"description\">Followers</span>\r\n                                </div>\r\n                                <div>\r\n                                    <span class=\"heading\">{{organization.events}}</span>\r\n                                    <span class=\"description\">Events</span>\r\n                                </div>\r\n                                <div>\r\n                                    <span class=\"heading\">{{organization.sponsors}}</span>\r\n                                    <span class=\"description\">Comments</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center mt-5\">\r\n                        <h3>{{organization.name}}</h3>\r\n                        <div class=\"h6 mt-4\"><i class=\"ni ni-world mr-2\"></i>{{organization.activity}}</div>\r\n                        <div><a href=\"#\"><i class=\"ni ni-square-pin mr-2\"></i>{{organization.city}}, {{organization.country}}</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mt-5 py-5 border-top border-bottom text-center\">\r\n                        <div class=\"mb-3\">\r\n                            <h6 class=\"text-uppercase font-weight-bold\">{{organization.slogan}}</h6>\r\n                        </div>\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-lg-9\">\r\n                                <p>\r\n                                    {{organization.description}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/organizations/organizations.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organizations/organizations.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrganizationsOrganizationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <div class=\"position-relative\">\r\n        <!-- Hero for FREE version -->\r\n        <section class=\"section section-lg section-hero section-shaped\">\r\n            <!-- Background circles -->\r\n            <div class=\"shape shape-style-1 shape-primary\">\r\n                <span class=\"span-150\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n            </div>\r\n\r\n        </section>\r\n    </div>\r\n    <section id=\"details\" class=\"section section-lg pt-lg-0 mt--200\">\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"row row-grid\">\r\n                        <div class=\"col-lg-4\" *ngFor=\"let organization of organizations\">\r\n                            <div class=\"card card-lift--hover shadow border-0\" style=\"height: 400px\">\r\n                                <div class=\"card-body py-5\">\r\n                                    <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                                        <i class=\"fa fa-users\"></i>\r\n                                    </div>\r\n                                    <h6 class=\"text-warning text-uppercase\">{{organization.name}}</h6>\r\n                                    <p class=\"description mt-3\">Create your event and share it for the sponsors to see.</p>\r\n                                    <div>\r\n                                        <span class=\"badge badge-pill badge-warning\">{{organization.activity}}</span>\r\n                                        <span class=\"badge badge-pill badge-warning\">{{organization.matricule}}</span>\r\n                                    </div>\r\n                                    <button [routerLink]=\"['/organization',organization.id]\" class=\"btn btn-info mt-4\">details</button>\r\n                                    <button (click)=\"delete(organization)\" class=\"btn btn-warning mt-4\">delete</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"profile-page\">\r\n  <section class=\"section-profile-cover section-shaped my-0\">\r\n    <!-- Circles background -->\r\n    <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"section\">\r\n    <div class=\"container\">\r\n      <div class=\"card card-profile shadow mt--300\">\r\n        <div class=\"px-4\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-3 order-lg-2\">\r\n              <div class=\"card-profile-image\">\r\n                <a href=\"javascript:void(0)\">\r\n                  <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\r\n              <div class=\"card-profile-actions py-4 mt-lg-0\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 order-lg-1\">\r\n              <div class=\"card-profile-stats d-flex justify-content-center\">\r\n                <div>\r\n                  <span class=\"heading\">22</span>\r\n                  <span class=\"description\">Friends</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">10</span>\r\n                  <span class=\"description\">Photos</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">89</span>\r\n                  <span class=\"description\">Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-5\">\r\n            <h3>Jessica Jones\r\n              <span class=\"font-weight-light\">, 27</span>\r\n            </h3>\r\n            <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>Bucharest, Romania</div>\r\n            <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>Solution Manager - Creative Tim Officer</div>\r\n            <div><i class=\"ni education_hat mr-2\"></i>University of Computer Science</div>\r\n          </div>\r\n          <div class=\"mt-5 py-5 border-top text-center\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-9\">\r\n                <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>\r\n                <a href=\"javascript:void(0)\">Show more</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsAlertsSectionAlertsSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"container\">\r\n  <h3 class=\"mt-lg mb-4\">\r\n    <span>Alerts</span>\r\n  </h3>\r\n  <div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\r\n      <ng-container *ngIf=\"alert.icon\">\r\n        <div class=\"alert-inner--icon\">\r\n            <i class=\"{{alert.icon}}\"></i>\r\n        </div>\r\n      </ng-container>\r\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\r\n    </ngb-alert>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsAngularSectionAngularSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Javascript Components</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\r\n       Default\r\n      </button>\r\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\r\n         Notification\r\n      </button>\r\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content bg-gradient-danger\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"py-3 text-center\">\r\n              <i class=\"ni ni-bell-55 ni-3x wh\"></i>\r\n              <h4 class=\"heading mt-4\">You should read this!</h4>\r\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\r\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\r\n         Form\r\n      </button>\r\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body p-0\">\r\n            <div class=\"card bg-secondary shadow border-0\">\r\n              <div class=\"card-header bg-white pb-5\">\r\n                <div class=\"text-muted text-center mb-3\">\r\n                  <small>Sign in with</small>\r\n                </div>\r\n                <div class=\"btn-wrapper text-center\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/github.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Github</span>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/google.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Google</span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body px-lg-5 py-lg-5\">\r\n                <div class=\"text-center text-muted mb-4\">\r\n                  <small>Or sign in with credentials</small>\r\n                </div>\r\n                <form role=\"form\">\r\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                      <span>Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <!-- Datepicker -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\r\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n          </div>\r\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8 mt-4 mt-md-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\r\n      <div class=\"input-daterange datepicker row align-items-center\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp1\" [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" (select)=\"mama($event)\" type=\"text\" [dayTemplate]=\"t\" (dateSelect)=\"startDateChanged($event)\" autocomplete=\"off\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"/>\r\n              <ng-template #t let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\r\n              <ng-template #t1 let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Tooltips and Popovers -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsButtonsSectionButtonsSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section section-components pb-0\" id=\"section-components\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Basic elements -->\r\n        <h2 class=\"mb-5\">\r\n          <span>Basic Elements</span>\r\n        </h2>\r\n        <!-- Buttons -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\r\n        <!-- Button styles -->\r\n        <div>\r\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\r\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n            <span class=\"btn-inner--text\">With icon</span>\r\n          </button>\r\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n          </button>\r\n          <!-- Button wizes -->\r\n          <div class=\"mb-3 mt-5\">\r\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\r\n          </div>\r\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\r\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\r\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\r\n        </div>\r\n        <!-- Button colors -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\r\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\r\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\r\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\r\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\r\n        <!-- Button links -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsCrsSectionCrsSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section\">\r\n  <div class=\"container\">\r\n    <!-- Custom controls -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <!-- Checkboxes -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\r\n          <label class=\"custom-control-label\" for=\"customCheck1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\r\n          <label class=\"custom-control-label\" for=\"customCheck2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck3\">\r\n            <span>Disabled Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck4\">\r\n            <span>Disabled Checked</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Radio buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio3\">\r\n            <span>Disabled unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio4\">\r\n            <span>Disabled checkbox</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Toggle buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\r\n        </div>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n        <span class=\"clearfix\"></span>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\r\n        </div>\r\n        <!-- Simple slider -->\r\n        <div class=\"input-slider-container\">\r\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\r\n        </div>\r\n        <!-- Range slider -->\r\n        <div class=\"mt-5\">\r\n          <!-- Range slider container -->\r\n          <div id=\"input-slider-range\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center mt-md\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Menu -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n                        <span class=\"sr-only\">(current)</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-favourite-28\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-notification-70\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"ni ni-settings-gear-65\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n                      </a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsInputsSectionInputsSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section pb-0 section-components\">\r\n  <div class=\"container mb-5\">\r\n    <!-- Inputs -->\r\n    <h3 class=\"h4 text-success font-weight-bold mb-4\">Inputs</h3>\r\n    <div class=\"mb-3\">\r\n      <small class=\"text-uppercase font-weight-bold\">Form controls</small>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" disabled />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group has-success\">\r\n          <input type=\"text\" placeholder=\"Success\" class=\"form-control is-valid\" />\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <input type=\"email\" placeholder=\"Error Input\" class=\"form-control is-invalid\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"py-5 bg-secondary\">\r\n    <div class=\"container\">\r\n      <!-- Inputs (alternative) -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">Form controls (alternative)</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative\" />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative \" disabled />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group has-success\">\r\n            <input type=\"text\" placeholder=\"Success\" class=\"form-control form-control-alternative is-valid\" />\r\n          </div>\r\n          <div class=\"form-group has-danger\">\r\n            <input type=\"email\" placeholder=\"Error Input\" class=\"form-control form-control-alternative is-invalid\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsNavigationSectionNavigationSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"\">\r\n  <div class=\"container\">\r\n    <!-- Navigation -->\r\n    <h2 class=\"mb-5\">\r\n      <span>Navbars</span>\r\n    </h2>\r\n  </div>\r\n  <!-- Navbar default -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-notification-70\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar primary -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n              <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar success -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-planet\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar danger -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-google-plus\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar warning -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-pinterest\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar info -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsNucleoSectionNucleoSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section section-lg section-nucleo-icons pb-250\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Nucleo Icons</h2>\r\n        <p class=\"lead\">\r\n          The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.\r\n        </p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\" class=\"btn btn-primary\">View demo icons</a>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\" class=\"btn btn-default mt-3 mt-md-0\">View all icons</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"blur--hover\">\r\n      <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\r\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\r\n          <!-- Center -->\r\n          <i class=\"icon ni ni-diamond\"></i>\r\n          <!-- Right 1 -->\r\n          <i class=\"icon icon-sm ni ni-album-2\"></i>\r\n          <i class=\"icon icon-sm ni ni-app\"></i>\r\n          <i class=\"icon icon-sm ni ni-atom\"></i>\r\n          <!-- Right 2 -->\r\n          <i class=\"icon ni ni-bag-17\"></i>\r\n          <i class=\"icon ni ni-bell-55\"></i>\r\n          <i class=\"icon ni ni-credit-card\"></i>\r\n          <!-- Left 1 -->\r\n          <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\r\n          <i class=\"icon icon-sm ni ni-building\"></i>\r\n          <i class=\"icon icon-sm ni ni-button-play\"></i>\r\n          <!-- Left 2 -->\r\n          <i class=\"icon ni ni-calendar-grid-58\"></i>\r\n          <i class=\"icon ni ni-camera-compact\"></i>\r\n          <i class=\"icon ni ni-chart-bar-32\"></i>\r\n        </div>\r\n        <span class=\"blur-hidden h5 text-success\">Eplore all the 21.000+ Nucleo Icons</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsSectionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-buttons-section></app-buttons-section>\r\n<app-inputs-section></app-inputs-section>\r\n<app-crs-section></app-crs-section>\r\n<app-navigation-section></app-navigation-section>\r\n<section class=\"section section-components\">\r\n  <app-tabs-section></app-tabs-section>\r\n  <app-alerts-section></app-alerts-section>\r\n  <app-typography-section></app-typography-section>\r\n  <app-angular-section></app-angular-section>\r\n</section>\r\n<section class=\"section section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row justify-content-between align-items-center\">\r\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n        <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\r\n        <p class=\"lead text-white mt-4\">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n        <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-bootstrap-carousel\" class=\"btn btn-white mt-4\">See all components</a>\r\n      </div>\r\n      <div class=\"col-lg-6 mb-lg-auto\">\r\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n          <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\r\n              </ng-template>\r\n          </ngb-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-nucleo-section></app-nucleo-section>\r\n<section class=\"section section-lg section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row row-grid justify-content-between align-items-center\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"display-3 text-white\">A beautiful Design System\r\n          <span class=\"text-white\">completed with examples</span>\r\n        </h3>\r\n        <p class=\"lead text-white\">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a [routerLink]=\"['/login']\" class=\"btn btn-success\">Login Page</a>\r\n          <a [routerLink]=\"['/register']\" (click)=\"fun()\" class=\"btn btn-white\">Register Page</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 mb-lg-auto\">\r\n        <div class=\"transform-perspective-right\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign in with</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign in with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin2\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-versions-section></app-versions-section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsTabsSectionTabsSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- Tabs with icons -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n      </div>\r\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\r\n      <!-- Menu -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n      </div>\r\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n          <ngb-tab title=\"Home\">\r\n            <ng-template ngbTabContent>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Profile\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Messages\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>40%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\r\n      </div>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>60%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\r\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n      </nav>\r\n      <nav aria-label=\"Page navigation example\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\r\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\r\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\r\n        </ngb-pagination>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-grid justify-content-between\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\r\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\r\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\r\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\r\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\r\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\r\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsTypographySectionTypographySectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Typography</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h5 class=\"mb-0\">Argon Design System </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h6 class=\"mb-0\">Argon Design System </h6>\r\n    </div>\r\n  </div>\r\n  <!-- Display titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <!-- Specialized titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div>\r\n        <h2 class=\"display-3\">Header with small subtitle </h2>\r\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Paragraphs -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <blockquote class=\"blockquote\">\r\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        <footer class=\"blockquote-footer\">Someone famous in\r\n          <cite title=\"Source Title\">Source Title</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <!-- Images -->\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Images</span>\r\n  </h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\r\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\r\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\r\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\r\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionsVersionsSectionVersionsSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section section-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Do you love this awesome\r\n          <span class=\"text-success\">Design System for Angular?</span>\r\n        </h2>\r\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you for supporting us!</h3>\r\n        <h4 class=\"mb-0 font-weight-light\">Let's get in touch on any of these platforms.</h4>\r\n      </div>\r\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n        <a target=\"_blank\" href=\"https://twitter.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\r\n          <i class=\"fa fa-facebook-square\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://dribbble.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-dribbble\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://github.com/creativetimofficial\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\r\n          <i class=\"fa fa-github\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\r\n      <img src=\"./assets/img/brand/longLogo.png\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a [routerLink]=\"['/home']\">\r\n              <img src=\"./assets/img/brand/blue.png\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <li class=\"nav-item\">\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['home']\" class=\"nav-link no-caret\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Home</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto\">\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link \"  data-toggle=\"dropdown\" title=\"Events\">\r\n                <span class=\"nav-link-inner--text mb-md-1\" routerLinkActive=\"active\" [routerLink]=\"['events']\">Event</span>\r\n\r\n              </a>\r\n\r\n\r\n              <div *ngIf=\"loginService.isLoggedIn && isOrganizer\" class=\" dropdown-menu\">\r\n                <div class=\"dropdown-menu-sm\">\r\n                  <a [routerLink]=\"['/add']\" class=\"align-items-center dropdown-item\">\r\n\r\n                    <div class=\"ml-2\" style=\"padding-top: 10px\">\r\n\r\n                      <h6 class=\"text-gray-dark right\"><i class=\"fa fa-plus\" style=\"padding-right:15px \"></i>add event</h6>\r\n                    </div>\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['organizations']\" class=\"nav-link no-caret\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Organizations</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['sponsors']\" class=\"nav-link no-caret\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Sponsors</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['about-us']\" class=\"nav-link no-caret\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">About Us</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"loginService.isLoggedIn()\" class=\"navbar-nav ml-auto\" style=\"padding-left: 6rem;\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\">\r\n            <i class=\"ni ni-single-02\" style=\"padding-right: 0.5rem;\"></i>\r\n            <span>Hello {{userConnected}}</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link btn-success\" *ngIf=\"!loginService.isLoggedIn()\" data-toggle=\"dropdown\" title=\"Get Started\" role=\"button\">\r\n            <span class=\"nav-link-inner--text mb-md-1\">Get Started</span>\r\n          </a>\r\n\r\n\r\n          <div class=\"dropdown-menu-lg dropdown-menu\">\r\n            <div class=\"dropdown-menu-inner\">\r\n              <a [routerLink]=\"['/login']\" class=\"media d-flex align-items-center dropdown-item\">\r\n                <div class=\"icon icon-shape bg-gradient-orange rounded-circle text-white\">\r\n                  <i class=\"ni ni-button-power\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-gray-dark mb-md-1\">Log In</h6>\r\n                </div>\r\n              </a>\r\n              <button class=\"media d-flex align-items-center dropdown-item\" (click)=\"openDialog()\">\r\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                  <i class=\"ni ni-single-02\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-gray-dark mb-md-1\" >Register</h6>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <div *ngIf=\"loginService.isLoggedIn()\">\r\n        <a class=\"nav-link btn-success\"   role=\"button\">\r\n\r\n          <span class=\"nav-link-inner--text mb-md-1\" (click)=\"logout()\">Logout </span>\r\n        </a>\r\n\r\n        </div>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up-popup/sign-up-popup.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up-popup/sign-up-popup.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpPopupSignUpPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fixActionRow bg-gradient-danger\"  >\r\n    <h1 mat-dialog-title><br></h1>\r\n        <br>\r\n        <br>\r\n       <div class=\"row \" align=\"center\" >\r\n        <div class=\"col-md-6\">\r\n            <i class=\"ni ni-money-coins ni-9x \" style=\"color:#DDDDDD;\"></i>\r\n\r\n\r\n\r\n        </div>\r\n           <div class=\"col-md-6\">\r\n               <i class=\"ni ni-building  ni-8x \" style=\"color:#DDDDDD;\"></i>\r\n\r\n           </div>\r\n\r\n       </div>\r\n\r\n    <div class=\"spacer\"></div>\r\n\r\n        <div class=\"row\" align=\"center\">\r\n            <div class=\"col-md-6\">\r\n                    <p class=\"text-white font-weight-bold\">As a Sponsor</p>\r\n                <button class=\"btn btn-1 btn-white btn-inner--text\" type=\"button\" (click)=\"is_organizer(false)\">REGISTER </button>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <p class=\"text-white font-weight-bold\" >As an organization</p>\r\n\r\n                <button class=\"btn btn-1 btn-white btn-inner--text\" type=\"button\" (click)=\"is_organizer(true)\">REGISTER</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-sponsor/signup-sponsor.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-sponsor/signup-sponsor.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSponsorSignupSponsorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <section class=\"section section-shaped section-lg\">\r\n        <div class=\"shape shape-style-1 bg-gradient-default\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        <head>\r\n            <script type=\"application/x-javascript\"> addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>\r\n            <!-- Custom Theme files -->\r\n\r\n            <!-- //Custom Theme files -->\r\n            <!-- web font -->\r\n            <link href=\"//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i\" rel=\"stylesheet\">\r\n            <!-- //web font -->\r\n        </head>\r\n        <!-- main -->\r\n        <div class=\"main-w3layouts wrapper\">\r\n\r\n            <div  class=\"main-agileinfo\">\r\n                <div class=\"titreCustom\">\r\n                    <p align=\"center\">\r\n                        <br>\r\n                        SignUp as a sponsor\r\n                    </p>\r\n                </div>\r\n                <div class=\"agileits-top\" >\r\n                    <form (ngSubmit)=\"onSubmit(formulaireSponsor)\"  #formulaireSponsor=\"ngForm\">\r\n                        <label>Name</label>\r\n                        <input class=\"text \" type=\"text\" name=\"sponsorName\" placeholder=\"Sponsor Name\" ngModel required #sponsorName=\"ngModel\" style=\"margin-bottom: 10px\">\r\n                        <div [hidden]=\"sponsorName.valid || sponsorName.pristine\" class=\"alert alert-danger\">\r\n                            Sponsor Name is required\r\n                        </div>\r\n                        <label>Email</label>\r\n                        <input class=\"email\" type=\"email\" name=\"sponsorEmail\" placeholder=\"SponsorEmail\" ngModel required #sponsorEmail=\"ngModel\" style=\"margin-bottom: 10px; margin-top: auto;\">\r\n                        <div [hidden]=\"sponsorEmail.valid || sponsorEmail.pristine\"\r\n                             class=\"alert alert-danger\">\r\n                            Email is required\r\n                        </div>\r\n                        <label>Password</label>\r\n                        <input class=\"text\" type=\"password\" name=\"password\" placeholder=\"Password\" ngModel style=\"margin-bottom: 10px\">\r\n                        <label>Confirm Password</label>\r\n                        <input class=\"text\" type=\"password\" name=\"ConfirmPassword\" placeholder=\"Confirm Password\" ngModel style=\"margin-bottom: 10px\">\r\n                        <label>Field of Activity</label>\r\n                        <input class=\"text\" type=\"text\" name=\"activity\" placeholder=\"Field of activity\" ngModel style=\"margin-bottom: 10px\">\r\n                        <label>City</label>\r\n                        <input class=\"text\" type=\"text\" name=\"city\" placeholder=\"City\" ngModel style=\"margin-bottom: 10px\">\r\n                        <label>Country</label>\r\n                        <input class=\"text\" type=\"text\" name=\"country\" placeholder=\"Country\" ngModel style=\"margin-bottom: 10px\">\r\n                        <label>Slogan</label>\r\n                        <input class=\"text\" type=\"text\" name=\"slogan\" placeholder=\"Your company's Slogan\" ngModel style=\"margin-bottom: 10px\">\r\n                        <input class=\"btn btn-1 btn-danger changeColor \" type=\"submit\" value=\"sign up\"[disabled]=\"!formulaireSponsor.form.valid\">\r\n                        <input class=\"btn btn-1 btn-success changeColor \" [disabled]=\"!formulaireSponsor.form.dirty\" (click)=\"reset(formulaireSponsor)\" value=\"reset\">\r\n\r\n                    </form>\r\n                    <p> Already have an Account? <a (click)=\"onLogin()\"> Login Now!</a></p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- //main -->\r\n\r\n\r\n    </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n  <head>\r\n      <script type=\"application/x-javascript\"> addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>\r\n      <!-- Custom Theme files -->\r\n\r\n      <!-- //Custom Theme files -->\r\n      <!-- web font -->\r\n      <link href=\"//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i\" rel=\"stylesheet\">\r\n      <!-- //web font -->\r\n    </head>\r\n    <!-- main -->\r\n    <div class=\"main-w3layouts wrapper\">\r\n\r\n\r\n      <div class=\"main-agileinfo\" >\r\n        <div class=\"titreCustom\">\r\n          <p align=\"center\">\r\n            <br>\r\n            Sign up as an Organization\r\n          </p>\r\n        </div>\r\n        <div class=\"agileits-top\">\r\n          <form (ngSubmit)=\"onSubmit(formulaireOrganization)\"  #formulaireOrganization=\"ngForm\">\r\n            <label>Organization Name</label><input class=\"text\" type=\"text\" name=\"organizationName\" ngModel required=\"\" style=\"margin-bottom: 10px\">\r\n            <label>Organization mail</label><input class=\"email\" type=\"email\" name=\"organizationEmail\" ngModel required=\"\" email style=\"margin-bottom: 10px\">\r\n            <label>Password</label><input class=\"text\" type=\"password\" name=\"password\" ngModel required=\"\"style=\"margin-bottom: 10px\">\r\n              <div class=\"mat-error\" *ngIf=\"!valid\"> Passwords do not match </div>\r\n              <label>Confirm Password</label><input class=\"text \" type=\"password\" name=\"ConfirmPassword\" ngModel required=\"\"style=\"margin-bottom: 10px\">\r\n              <label>Domain</label><input class=\"text\" type=\"text\" name=\"organizationDomain\" ngModel required=\"\"style=\"margin-bottom: 10px\">\r\n              <label>City</label><input class=\"text\" type=\"text\" name=\"organizationCity\" ngModel required=\"\"style=\"margin-bottom: 10px\">\r\n              <label>Country</label><input class=\"text\" type=\"text\" name=\"organizationCountry\" ngModel required=\"\"style=\"margin-bottom: 10px\">\r\n              <label>Slogan</label><input class=\"text\" type=\"text\" name=\"organizationSlogan\" ngModel required=\"\"style=\"margin-bottom: 10px\">\r\n            <label>Registration Number</label><input class=\"text  \" type=\"text\" name=\"organizationRegistrationNumber\"  ngModel required=\"\">\r\n            <input class=\"btn btn-1 btn-danger changeColor \" [disabled]=\"!formulaireOrganization.form.valid\" type=\"submit\" value=\"sign up\">\r\n            <input class=\"btn btn-1 btn-success changeColor \" [disabled]=\"!formulaireOrganization.form.dirty\" (click)=\"reset(formulaireOrganization)\" value=\"reset\">\r\n          </form>\r\n          <p> Already have an Account? <a (click)=\"onLogin()\"> Login Now!</a></p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <!-- //main -->\r\n\r\n\r\n  </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsor-manage-profile/sponsor-manage-profile.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsor-manage-profile/sponsor-manage-profile.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSponsorManageProfileSponsorManageProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"profile-page\">\r\n    <section class=\"section-profile-cover section-shaped my-0\">\r\n        <!-- Circles background -->\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n                 xmlns=\"http://www.w3.org/2000/svg\">\r\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n            </svg>\r\n        </div>\r\n    </section>\r\n    <section class=\"section\">\r\n        <div class=\"container\">\r\n            <div class=\"card card-profile shadow mt--300\">\r\n                <div class=\"px-4\">\r\n                    <div class=\"row\" style=\"padding: 2rem;\">\r\n                        <h2>Manage Your Profile</h2>\r\n                    </div>\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-lg-10\">\r\n                            <form #formUpdateSponsor=\"ngForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Activity</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"activity\"  [(ngModel)]=\"sponsor.activity\"\r\n                                                   value=\"{{sponsor.activity}}\" placeholder=\"Your activity field.\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">City</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"city\"  [(ngModel)]=\"sponsor.city\"\r\n                                                   value=\"{{sponsor.city}}\" placeholder=\"City\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Country</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"country\"  [(ngModel)]=\"sponsor.country\"\r\n                                                   value=\"{{sponsor.country}}\" placeholder=\"Country\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Slogan</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"slogan\"  [(ngModel)]=\"sponsor.slogan\"\r\n                                                   value=\"{{sponsor.slogan}}\" placeholder=\"Your Company Slogan\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\" row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Description</label>\r\n                                            <textarea class=\"form-control\" row=\"4\" name=\"description\" [(ngModel)]=\"sponsor.description\"\r\n                                                      value=\"{{sponsor.description}}\" placeholder=\"Write a paragraph to describe your Company\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\" row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Upload New Profile Image</label>\r\n                                            <div class=\"row\">\r\n                                                    <input type=\"file\" name=\"image\" (change)=\"selectImage($event)\" >\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\" row\">\r\n                                    <div class=\"col-md-8 center\">\r\n                                        <div class=\"form-group\">\r\n                                            <button type=\"button\" class=\"btn btn-1 btn-danger changeColor\" (click)=\"submit()\" [disabled]=\"!formUpdateSponsor.form.valid\">Save</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsor-profile/sponsor-profile.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsor-profile/sponsor-profile.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSponsorProfileSponsorProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"profile-page\">\r\n    <section class=\"section-profile-cover section-shaped my-0\">\r\n        <!-- Circles background -->\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n                 xmlns=\"http://www.w3.org/2000/svg\">\r\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n            </svg>\r\n        </div>\r\n    </section>\r\n    <section class=\"section\">\r\n        <div class=\"container\">\r\n            <div class=\"card card-profile shadow mt--300\">\r\n                <div class=\"px-4\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-lg-3 order-lg-2\">\r\n                            <div class=\"card-profile-image\">\r\n                                <img [src]=\"sponsor.image\" class=\"rounded-circle\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\r\n                            <div class=\"py-4 mt-lg-0\">\r\n                                <button *ngIf=\"isCurrentUser\" (click)=\"deleteMyself()\" class=\"btn btn-sm btn-danger\">\r\n                                    <i class=\"fa fa-times\"></i> Delete Account\r\n                                </button>\r\n                                <a *ngIf= \"isCurrentUser\"  [routerLink]=\"['/sponsor-manage-profile']\"\r\n                                   class=\"btn btn-sm btn-default float-right\">\r\n                                    <i class=\"ni ni-settings-gear-65\"></i>\r\n                                    Manage Profile\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 order-lg-1\">\r\n                            <!-- Problem with css .card !!\r\n                            <div class=\"card-profile-stats d-flex justify-content-center\">\r\n                                <div>\r\n                                    <span class=\"heading\">22</span>\r\n                                    <a href=\"#\"><span class=\"description\" placement=\"bottom\"\r\n                                                      ngbTooltip=\"Show the events sponsored previously\">Events</span></a>\r\n                                </div>\r\n                                <div>\r\n                                    <span class=\"heading\">10</span>\r\n                                    <a href=\"#\"><span class=\"description\" placement=\"bottom\" ngbTooltip=\"Show comments\">Comments</span></a>\r\n                                </div>\r\n                                <div>\r\n                                    <span class=\"heading\">5</span>\r\n                                    <a href=\"#\"><span class=\"description\" placement=\"bottom\"\r\n                                                      ngbTooltip=\"Show the average rate\">Rate</span></a>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center mt-5\">\r\n                        <h3>{{sponsor.name}}</h3>\r\n                        <div class=\"h6 mt-4\"><i class=\"ni ni-building mr-2\"></i>{{sponsor.activity}}</div>\r\n                        <div><a href=\"#\"><i class=\"ni ni-square-pin mr-2\"></i>{{sponsor.city}}, {{sponsor.country}}</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mt-5 py-5 border-top border-bottom text-center\">\r\n                        <div class=\"mb-3\">\r\n                            <h6 class=\"text-uppercase font-weight-bold\">{{sponsor.slogan}}</h6>\r\n                        </div>\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-lg-9\">\r\n                                <p>\r\n                                    {{sponsor.description}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <app-carousel-for-events></app-carousel-for-events>\r\n                    <div class=\"row\">comments !</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSponsorsSponsorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <div class=\"position-relative\">\r\n        <!-- Hero for FREE version -->\r\n        <section class=\"section section-lg section-hero section-shaped\">\r\n            <!-- Background circles -->\r\n            <div class=\"shape shape-style-1 shape-primary\">\r\n                <span class=\"span-150\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-75\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n                <span class=\"span-50\"></span>\r\n                <span class=\"span-100\"></span>\r\n            </div>\r\n           <!-- Search Filter\r\n           <div class=\"row\" style=\"justify-content: center; padding: 4rem;\">\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group mb-4\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n                            </div>\r\n                            <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n        </section>\r\n    </div>\r\n    <section id=\"details\" class=\"section section-lg pt-lg-0 mt--200\">\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"row row-grid\">\r\n                        <div class=\"col-lg-4\" style=\"padding-bottom: 1rem\" *ngFor=\"let sponsor of sponsors\">\r\n                            <div class=\"card card-lift--hover shadow border-0\" style=\"height: 400px\">\r\n                                <div class=\"card-body py-5\">\r\n                                    <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                                        <i class=\"fa fa-users\"></i>\r\n                                    </div>\r\n                                    <h6 class=\"text-warning text-uppercase\">{{sponsor.name}}</h6>\r\n                                    <p class=\"description mt-3\"><b>{{sponsor.description}}</b></p>\r\n                                    <p class=\"description mt-3\">{{sponsor.description}}</p>\r\n                                    <div>\r\n                                        <span class=\"badge badge-pill badge-warning\">{{sponsor.activity}}</span>\r\n                                        <span class=\"badge badge-pill badge-warning\">{{sponsor.city}}</span>\r\n                                        <span class=\"badge badge-pill badge-warning\">{{sponsor.country}}</span>\r\n                                    </div>\r\n                                    <a [routerLink]=\"['/sponsor-details',sponsor.id]\"\r\n                                       class=\"btn btn-info mt-4\">details</a>\r\n                                    <a href=\"\" class=\"btn btn-warning mt-4\">delete</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stripe-card/stripe-card.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stripe-card/stripe-card.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStripeCardStripeCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/top-sponsors/top-sponsors.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-sponsors/top-sponsors.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopSponsorsTopSponsorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<div class=\"container py-md\">\r\n    <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n            <h1 class=\"text-white font-weight-light\"> {{slogan}}</h1>\r\n            <p class=\"lead text-white mt-4\">{{description}}</p>\r\n            <a [routerLink]=\"['/sponsors']\" class=\"btn btn-white mt-4\">See all details</a>\r\n        </div>\r\n        <div class=\"col-lg-6 mb-lg-auto\">\r\n            <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n                <ngb-carousel (slide)=\"print($event)\">\r\n                    <ng-template ngbSlide  *ngFor=\"let sponsor of top_sponsors; let  i=index;\" >\r\n                        <img class=\"img-fluid\" [src]=\"sponsor.image\"/>\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<div class=\"container\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 order-md-2 \">\r\n            <div class=\"icon icon-lg icon-shape  bg-gradient-blue text-white-50 shadow rounded-circle mb-5\">\r\n                <i class=\"ni ni-trophy\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 order-md-2\">\r\n            <h2 class=\"display-3\" style=\"margin-left: -70px;\">\r\n                Meet Our Top Sponsors\r\n            </h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n            <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n                <ngb-carousel (slide)=\"print($event)\">\r\n                    <ng-template ngbSlide *ngFor=\"let sponsor of top_sponsors; let  i=index;\">\r\n                        <img class=\"img-fluid\" [src]=\"sponsor.image\"/>\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n            <div class=\"row\">\r\n                <h3>{{slogan}}</h3>\r\n                <p>{{description}}</p>\r\n                <button [routerLink]=\"['/sponsors']\"  class=\"btn btn-1 bg-gradient-orange text-white\" type=\"button\">Know More</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming-event/upcoming-event.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming-event/upcoming-event.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpcomingEventUpcomingEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: auto ; width: auto\" class=\"card card-lift--hover shadow border-0\">\r\n    <img [src]=\"eventPhoto\"  class=\"card-img-top\">\r\n    <blockquote  class=\"card-blockquote\">\r\n        <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\" >\r\n            <polygon points=\"0,52 583,95  0,95\"  class=\"fill-white\" />\r\n            <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-white\" />\r\n        </svg>\r\n    </blockquote>\r\n    <div class=\"card-body \" style=\"height: auto\" >\r\n        <h6 class=\"text-primary text-uppercase\" style=\"\r\n    padding: initial;\r\n    margin-top: -45px;\r\n    margin-left: -10px;\r\n\" >{{title}}</h6>\r\n        <p class=\"description mt-3\">{{this.description}}</p>\r\n        <div>\r\n            <span class=\"badge badge-pill badge-primary\">angular</span>\r\n            <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n            <span class=\"badge badge-pill badge-primary\">creative</span>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n    </div>\r\n</div>\r\n<br>\r\n<br>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/OrganizerRoleGuard..ts":
  /*!****************************************!*\
    !*** ./src/app/OrganizerRoleGuard..ts ***!
    \****************************************/

  /*! exports provided: OrganizerRoleGuard */

  /***/
  function srcAppOrganizerRoleGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizerRoleGuard", function () {
      return OrganizerRoleGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrganizerRoleGuard = /*#__PURE__*/function () {
      function OrganizerRoleGuard(router, LoginService) {
        _classCallCheck(this, OrganizerRoleGuard);

        this.router = router;
        this.LoginService = LoginService;
        this.currentUserRole = 0
        /* simple */
        ;
      }

      _createClass(OrganizerRoleGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this = this;

          console.log("I m in guard Role !");
          this.LoginService.getCurrentUser().subscribe(function (user) {
            _this.currentUserRole = user.body.role;
            console.log(_this.currentUserRole);
            console.log(2
            /* Organization */
            );
            console.log(typeof (_this.currentUserRole + ""));
            console.log(_this.currentUserRole + "" == "Organization");
          });
          console.log(this.currentUserRole + "" == "Organization");
          return this.currentUserRole + "" == "Organization";
        }
      }]);

      return OrganizerRoleGuard;
    }();

    OrganizerRoleGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    OrganizerRoleGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])], OrganizerRoleGuard);
    /***/
  },

  /***/
  "./src/app/about-us/about-us.component.css":
  /*!*************************************************!*\
    !*** ./src/app/about-us/about-us.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutUsAboutUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-us/about-us.component.ts ***!
    \************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-about-us',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./about-us.component.css */
      "./src/app/about-us/about-us.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = 0;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(renderer, router, document, element, location) {
        _classCallCheck(this, AppComponent);

        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
      }

      _createClass(AppComponent, [{
        key: "hasScrolled",
        value: function hasScrolled() {
          var st = window.pageYOffset; // Make sure they scroll more than delta

          if (Math.abs(lastScrollTop - st) <= delta) return;
          var navbar = document.getElementsByTagName('nav')[0]; // If they scrolled down and are past the navbar, add class .headroom--unpinned.
          // This is necessary so you never see what is "behind" the navbar.

          if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
              navbar.classList.remove('headroom--pinned');
              navbar.classList.add('headroom--unpinned');
            } // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');

          } else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
              // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
              if (navbar.classList.contains('headroom--unpinned')) {
                navbar.classList.remove('headroom--unpinned');
                navbar.classList.add('headroom--pinned');
              }
            }
          }

          lastScrollTop = st;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var navbar = this.element.nativeElement.children[0].children[0];
          this._router = this.router.events.filter(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }).subscribe(function (event) {
            if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
            } else {
              window.document.activeElement.scrollTop = 0;
            }

            _this2.renderer.listenGlobal('window', 'scroll', function (event) {
              var number = window.scrollY;

              if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.add('headroom--not-top');
              } else {
                // remove logic
                navbar.classList.remove('headroom--not-top');
              }
            });
          });
          this.hasScrolled();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], AppComponent.prototype, "hasScrolled", null);

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _upcoming_event_upcoming_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./upcoming-event/upcoming-event.component */
    "./src/app/upcoming-event/upcoming-event.component.ts");
    /* harmony import */


    var _carousel_for_events_carousel_for_events_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./carousel-for-events/carousel-for-events.component */
    "./src/app/carousel-for-events/carousel-for-events.component.ts");
    /* harmony import */


    var ngx_carousel_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-carousel-lib */
    "./node_modules/ngx-carousel-lib/fesm2015/ngx-carousel-lib.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _sign_up_popup_sign_up_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./sign-up-popup/sign-up-popup.component */
    "./src/app/sign-up-popup/sign-up-popup.component.ts");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/events/events.component.ts");
    /* harmony import */


    var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./sponsors/sponsors.component */
    "./src/app/sponsors/sponsors.component.ts");
    /* harmony import */


    var _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./organizations/organizations.component */
    "./src/app/organizations/organizations.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _top_sponsors_top_sponsors_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./top-sponsors/top-sponsors.component */
    "./src/app/top-sponsors/top-sponsors.component.ts");
    /* harmony import */


    var _sponsor_profile_sponsor_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./sponsor-profile/sponsor-profile.component */
    "./src/app/sponsor-profile/sponsor-profile.component.ts");
    /* harmony import */


    var _sponsor_manage_profile_sponsor_manage_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./sponsor-manage-profile/sponsor-manage-profile.component */
    "./src/app/sponsor-manage-profile/sponsor-manage-profile.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _signup_sponsor_signup_sponsor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./signup-sponsor/signup-sponsor.component */
    "./src/app/signup-sponsor/signup-sponsor.component.ts");
    /* harmony import */


    var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./event-form/event-form.component */
    "./src/app/event-form/event-form.component.ts");
    /* harmony import */


    var _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./organization-profile/organization-profile.component */
    "./src/app/organization-profile/organization-profile.component.ts");
    /* harmony import */


    var _interceptors_login_interceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./interceptors/login.interceptor */
    "./src/app/interceptors/login.interceptor.ts");
    /* harmony import */


    var _OrganizerRoleGuard___WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./OrganizerRoleGuard. */
    "./src/app/OrganizerRoleGuard..ts");
    /* harmony import */


    var _file_loder_file_loder_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./file-loder/file-loder.component */
    "./src/app/file-loder/file-loder.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _stripe_card_stripe_card_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./stripe-card/stripe-card.component */
    "./src/app/stripe-card/stripe-card.component.ts");
    /* harmony import */


    var _organization_manage_profile_organization_manage_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./organization-manage-profile/organization-manage-profile.component */
    "./src/app/organization-manage-profile/organization-manage-profile.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _upcoming_event_upcoming_event_component__WEBPACK_IMPORTED_MODULE_16__["UpcomingEventComponent"], _carousel_for_events_carousel_for_events_component__WEBPACK_IMPORTED_MODULE_17__["CarouselForEventsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _sign_up_popup_sign_up_popup_component__WEBPACK_IMPORTED_MODULE_20__["SignUpPopupComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_21__["EventsComponent"], _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_22__["SponsorsComponent"], _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_23__["OrganizationsComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_24__["AboutUsComponent"], _top_sponsors_top_sponsors_component__WEBPACK_IMPORTED_MODULE_25__["TopSponsorsComponent"], _sponsor_profile_sponsor_profile_component__WEBPACK_IMPORTED_MODULE_26__["SponsorProfileComponent"], _sponsor_manage_profile_sponsor_manage_profile_component__WEBPACK_IMPORTED_MODULE_27__["SponsorManageProfileComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_28__["HomePageComponent"], _signup_sponsor_signup_sponsor_component__WEBPACK_IMPORTED_MODULE_29__["SignupSponsorComponent"], _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_30__["EventFormComponent"], _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_31__["OrganizationProfileComponent"], _file_loder_file_loder_component__WEBPACK_IMPORTED_MODULE_34__["FileLoderComponent"], _stripe_card_stripe_card_component__WEBPACK_IMPORTED_MODULE_36__["StripeCardComponent"], _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_31__["OrganizationProfileComponent"], _organization_manage_profile_organization_manage_profile_component__WEBPACK_IMPORTED_MODULE_37__["OrganizationManageProfileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_carousel_lib__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListModule"]],
      providers: [_interceptors_login_interceptor__WEBPACK_IMPORTED_MODULE_32__["LoginInterceptorProider"], _OrganizerRoleGuard___WEBPACK_IMPORTED_MODULE_33__["OrganizerRoleGuard"]],
      entryComponents: [_sign_up_popup_sign_up_popup_component__WEBPACK_IMPORTED_MODULE_20__["SignUpPopupComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/events/events.component.ts");
    /* harmony import */


    var _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./organizations/organizations.component */
    "./src/app/organizations/organizations.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sponsors/sponsors.component */
    "./src/app/sponsors/sponsors.component.ts");
    /* harmony import */


    var _sponsor_profile_sponsor_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sponsor-profile/sponsor-profile.component */
    "./src/app/sponsor-profile/sponsor-profile.component.ts");
    /* harmony import */


    var _sponsor_manage_profile_sponsor_manage_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./sponsor-manage-profile/sponsor-manage-profile.component */
    "./src/app/sponsor-manage-profile/sponsor-manage-profile.component.ts");
    /* harmony import */


    var _signup_sponsor_signup_sponsor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./signup-sponsor/signup-sponsor.component */
    "./src/app/signup-sponsor/signup-sponsor.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./event-form/event-form.component */
    "./src/app/event-form/event-form.component.ts");
    /* harmony import */


    var _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./organization-profile/organization-profile.component */
    "./src/app/organization-profile/organization-profile.component.ts");
    /* harmony import */


    var _file_loder_file_loder_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./file-loder/file-loder.component */
    "./src/app/file-loder/file-loder.component.ts");
    /* harmony import */


    var _organization_manage_profile_organization_manage_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./organization-manage-profile/organization-manage-profile.component */
    "./src/app/organization-manage-profile/organization-manage-profile.component.ts");
    /* harmony import */


    var _OrganizerRoleGuard___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./OrganizerRoleGuard. */
    "./src/app/OrganizerRoleGuard..ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'file',
      component: _file_loder_file_loder_component__WEBPACK_IMPORTED_MODULE_19__["FileLoderComponent"]
    }, {
      path: 'add',
      component: _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_17__["EventFormComponent"]
    }, {
      path: 'homee',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'events',
      component: _events_events_component__WEBPACK_IMPORTED_MODULE_9__["EventsComponent"]
    }, {
      path: 'organizations',
      component: _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_10__["OrganizationsComponent"]
    }, {
      path: 'sponsors',
      component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__["SponsorsComponent"]
    }, {
      path: 'about-us',
      component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"]
    }, {
      path: 'user-profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }, {
      path: 'organization/:id',
      component: _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_18__["OrganizationProfileComponent"]
    }, {
      path: 'register/sponsor',
      component: _signup_sponsor_signup_sponsor_component__WEBPACK_IMPORTED_MODULE_15__["SignupSponsorComponent"]
    }, {
      path: 'register/organization',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }, {
      path: 'landing',
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"]
    }, {
      path: 'sponsor-details/:id',
      component: _sponsor_profile_sponsor_profile_component__WEBPACK_IMPORTED_MODULE_13__["SponsorProfileComponent"]
    }, {
      path: 'sponsor-profile',
      component: _sponsor_profile_sponsor_profile_component__WEBPACK_IMPORTED_MODULE_13__["SponsorProfileComponent"]
    }, {
      path: 'sponsor-manage-profile',
      component: _sponsor_manage_profile_sponsor_manage_profile_component__WEBPACK_IMPORTED_MODULE_14__["SponsorManageProfileComponent"]
    }, {
      path: 'organization-manage-profile',
      component: _organization_manage_profile_organization_manage_profile_component__WEBPACK_IMPORTED_MODULE_20__["OrganizationManageProfileComponent"],
      canActivate: [_OrganizerRoleGuard___WEBPACK_IMPORTED_MODULE_21__["OrganizerRoleGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
        useHash: false,
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled'
      })],
      exports: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/carousel-for-events/carousel-for-events.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/carousel-for-events/carousel-for-events.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarouselForEventsCarouselForEventsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (min-width: 768px) {\r\n    /* show 4 items */\r\n    .carousel-inner .active,\r\n    .carousel-inner .active + .carousel-item,\r\n    .carousel-inner .active + .carousel-item + .carousel-item,\r\n    .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {\r\n        display: block;\r\n    }\r\n\r\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),\r\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item,\r\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item,\r\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item {\r\n        transition: none;\r\n    }\r\n\r\n    .carousel-inner .carousel-item-next,\r\n    .carousel-inner .carousel-item-prev {\r\n        position: relative;\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n\r\n    .carousel-inner .active.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\r\n        position: absolute;\r\n        top: 0;\r\n        right: -25%;\r\n        z-index: -1;\r\n        display: block;\r\n        visibility: visible;\r\n    }\r\n\r\n    /* left or forward direction */\r\n    .active.carousel-item-left + .carousel-item-next.carousel-item-left,\r\n    .carousel-item-next.carousel-item-left + .carousel-item,\r\n    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,\r\n    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item,\r\n    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\r\n        position: relative;\r\n        transform: translate3d(-100%, 0, 0);\r\n        visibility: visible;\r\n    }\r\n\r\n    /* farthest right hidden item must be absolue position for animations */\r\n    .carousel-inner .carousel-item-prev.carousel-item-right {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        z-index: -1;\r\n        display: block;\r\n        visibility: visible;\r\n    }\r\n\r\n    /* right or prev direction */\r\n    .active.carousel-item-right + .carousel-item-prev.carousel-item-right,\r\n    .carousel-item-prev.carousel-item-right + .carousel-item,\r\n    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,\r\n    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item,\r\n    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\r\n        position: relative;\r\n        transform: translate3d(100%, 0, 0);\r\n        visibility: visible;\r\n        display: block;\r\n        visibility: visible;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwtZm9yLWV2ZW50cy9jYXJvdXNlbC1mb3ItZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakI7Ozs7UUFJSSxjQUFjO0lBQ2xCOztJQUVBOzs7O1FBSUksZ0JBQWdCO0lBQ3BCOztJQUVBOztRQUVJLGtCQUFrQjtRQUNsQiwrQkFBK0I7SUFDbkM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztRQUNkLG1CQUFtQjtJQUN2Qjs7SUFFQSw4QkFBOEI7SUFDOUI7Ozs7O1FBS0ksa0JBQWtCO1FBQ2xCLG1DQUFtQztRQUNuQyxtQkFBbUI7SUFDdkI7O0lBRUEsdUVBQXVFO0lBQ3ZFO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVztRQUNYLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7O0lBRUEsNEJBQTRCO0lBQzVCOzs7OztRQUtJLGtCQUFrQjtRQUNsQixrQ0FBa0M7UUFDbEMsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsLWZvci1ldmVudHMvY2Fyb3VzZWwtZm9yLWV2ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBzaG93IDQgaXRlbXMgKi9cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLFxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUgKyAuY2Fyb3VzZWwtaXRlbSxcclxuICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSxcclxuICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpLFxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtLFxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0sXHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1uZXh0LFxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLXByZXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogLTI1JTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGxlZnQgb3IgZm9yd2FyZCBkaXJlY3Rpb24gKi9cclxuICAgIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1sZWZ0ICsgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQsXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtLFxyXG4gICAgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtLFxyXG4gICAgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0sXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBmYXJ0aGVzdCByaWdodCBoaWRkZW4gaXRlbSBtdXN0IGJlIGFic29sdWUgcG9zaXRpb24gZm9yIGFuaW1hdGlvbnMgKi9cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHJpZ2h0IG9yIHByZXYgZGlyZWN0aW9uICovXHJcbiAgICAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQgKyAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQsXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQgKyAuY2Fyb3VzZWwtaXRlbSxcclxuICAgIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0sXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0sXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/carousel-for-events/carousel-for-events.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/carousel-for-events/carousel-for-events.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CarouselForEventsComponent */

  /***/
  function srcAppCarouselForEventsCarouselForEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselForEventsComponent", function () {
      return CarouselForEventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CarouselForEventsComponent = /*#__PURE__*/function () {
      function CarouselForEventsComponent() {
        _classCallCheck(this, CarouselForEventsComponent);

        this.itemsPerPage = 3;
        this.page = 1;
        this.cards = [{
          title: 'Sing With Me',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://www.festivalsherpa.com/wp-content/uploads/2015/07/tland-cover-750x400.jpg'
        }, {
          title: "let's CAMP",
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }, {
          title: "It's all about hope",
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://www.searcylaw.com/wp-content/uploads/2017/06/Breast-Cancer-Awareness.jpg'
        }, {
          title: 'Card Title 5',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }, {
          title: 'Card Title 6',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }, {
          title: 'Card Title 7',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }, {
          title: 'Card Title 8',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }, {
          title: 'Card Title 9',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }, {
          title: 'Card Title 9',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }, {
          title: 'Card Title 9',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        }];
        this.elements = this.cards.slice(0, 3);
        this.totalItems = this.cards.length / 3 * 10;
      }

      _createClass(CarouselForEventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          console.log("page is ", page);
          this.elements = this.cards.slice((page - 1) * 3, (page - 1) * 3 + 3);

          if (page !== this.previousPage) {
            this.previousPage = page; //this.loadData();
          }
        }
      }, {
        key: "loadData",
        value: function loadData() {
          /*  this.dataService.query({
                page: this.page - 1,
                size: this.itemsPerPage,
            }).subscribe(
                (res: Response) => this.onSuccess(res.json(), res.headers),
                (res: Response) => this.onError(res.json())
            ) */
        }
      }]);

      return CarouselForEventsComponent;
    }();

    CarouselForEventsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-carousel-for-events',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./carousel-for-events.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel-for-events/carousel-for-events.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./carousel-for-events.component.css */
      "./src/app/carousel-for-events/carousel-for-events.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], CarouselForEventsComponent);
    /***/
  },

  /***/
  "./src/app/event-form/event-form.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/event-form/event-form.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventFormEventFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/event-form/event-form.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/event-form/event-form.component.ts ***!
    \****************************************************/

  /*! exports provided: EventFormComponent */

  /***/
  function srcAppEventFormEventFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventFormComponent", function () {
      return EventFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/Event */
    "./src/app/models/Event.ts");
    /* harmony import */


    var _event_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../event-service.service */
    "./src/app/event-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // import custom validator to validate that password and confirm password fields match


    var EventFormComponent = /*#__PURE__*/function () {
      function EventFormComponent(eventService, http, router) {
        _classCallCheck(this, EventFormComponent);

        this.eventService = eventService;
        this.http = http;
        this.router = router;
        this.submitted = false;
        this.multipleImages = [];
      }

      _createClass(EventFormComponent, [{
        key: "selectImage",
        value: function selectImage(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.images = file;
          }
        }
      }, {
        key: "selectFile",
        value: function selectFile(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.filesponso = file;
          }
        }
      }, {
        key: "selectMultipleImage",
        value: function selectMultipleImage(event) {
          if (event.target.files.length > 0) {
            this.multipleImages = event.target.files;
          }
        }
      }, {
        key: "sendFile",
        value: function sendFile(form) {
          var _this3 = this;

          var formData = new FormData();
          formData.append('file', this.filesponso);
          this.http.post('http://localhost:3000/file', formData).subscribe(function (res) {
            _this3.sponsoringFile = res.name;

            _this3.EventCreation(form);
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "submit",
        value: function submit(form) {
          var _this4 = this;

          var formData = new FormData();
          formData.append('file', this.images);
          this.http.post('http://localhost:3000/file', formData).subscribe(function (res) {
            _this4.eventImage = res.name;

            _this4.sendFile(form);
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "onMultipleSubmit",
        value: function onMultipleSubmit() {
          var formData = new FormData();

          var _iterator = _createForOfIteratorHelper(this.multipleImages),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var img = _step.value;
              formData.append('files', img);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.http.post('http://localhost:3000/multipleFiles', formData).subscribe(function (res) {}, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // convenience getter for easy access to form fields

      }, {
        key: "EventCreation",
        value: function EventCreation(form) {
          var _this5 = this;

          this.submitted = true;
          console.log(form.controls.startDate.value);
          this.moment = new Date(form.controls.startDate.value.day, form.controls.startDate.value.month, form.controls.startDate.value.year, 5, 0, 0);
          this.event = new _models_Event__WEBPACK_IMPORTED_MODULE_1__["Event"](0, form.controls.name.value, this.moment, this.moment, form.controls.place.value, form.controls.category.value, form.controls.description.value, this.eventImage, this.sponsoringFile, Number(form.controls.budget.value), Number(0));
          this.eventService.create(this.event).subscribe(function (result) {
            console.log("shit !!!", result);
            console.log(result);
            console.log("added");
            alert('Event Created successfully!! :-)\n\n');

            _this5.router.navigate(['/events']);
          });
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
        }
      }]);

      return EventFormComponent;
    }();

    EventFormComponent.ctorParameters = function () {
      return [{
        type: _event_service_service__WEBPACK_IMPORTED_MODULE_2__["EventServiceService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    EventFormComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-event-form',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./event-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event-form/event-form.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./event-form.component.css */
      "./src/app/event-form/event-form.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_event_service_service__WEBPACK_IMPORTED_MODULE_2__["EventServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], EventFormComponent);
    /***/
  },

  /***/
  "./src/app/event-service.service.ts":
  /*!******************************************!*\
    !*** ./src/app/event-service.service.ts ***!
    \******************************************/

  /*! exports provided: EventServiceService */

  /***/
  function srcAppEventServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventServiceService", function () {
      return EventServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EventServiceService = /*#__PURE__*/function () {
      function EventServiceService(http) {
        _classCallCheck(this, EventServiceService);

        this.http = http;
        this.resourceUrl = 'http://localhost:3000/event';
      }

      _createClass(EventServiceService, [{
        key: "create",
        value: function create(event) {
          return this.http.post(this.resourceUrl + '/add', JSON.parse(JSON.stringify(event)), {
            observe: 'response'
          });
        }
      }, {
        key: "update",
        value: function update(event, id) {
          return this.http.put(this.resourceUrl + '/update/' + id, event, {
            observe: 'response'
          });
        }
      }, {
        key: "getOrganization",
        value: function getOrganization(id) {
          return this.http.get(this.resourceUrl + '/' + id);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.resourceUrl + '/');
        }
      }]);

      return EventServiceService;
    }();

    EventServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    EventServiceService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], EventServiceService);
    /***/
  },

  /***/
  "./src/app/events/events.component.css":
  /*!*********************************************!*\
    !*** ./src/app/events/events.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsEventsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/events/events.component.ts":
  /*!********************************************!*\
    !*** ./src/app/events/events.component.ts ***!
    \********************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _event_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../event-service.service */
    "./src/app/event-service.service.ts");
    /* harmony import */


    var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/Event */
    "./src/app/models/Event.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EventsComponent = /*#__PURE__*/function () {
      function EventsComponent(eventService, sanitizer, http) {
        _classCallCheck(this, EventsComponent);

        this.eventService = eventService;
        this.sanitizer = sanitizer;
        this.http = http;
        this.i = 0;
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.loadStripe();
          this.eventService.getAll().subscribe(function (res) {
            var i;
            _this6.events = res;
            _this6.eventOrig = [];

            for (i = 0; i < res.length; i++) {
              _this6.eventOrig[i] = new _models_Event__WEBPACK_IMPORTED_MODULE_2__["Event"](res[i].id, res[i].name, res[i].startTime, res[i].endTime, res[i].place, res[i].category, res[i].description, res[i].image, res[i].sponsoringFile, res[i].budget, res[i].fundings);
              _this6.events[i].input = false;

              _this6.getImage(_this6.events[i]);
            }
          });
        }
      }, {
        key: "loadStripe",
        value: function loadStripe() {
          if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            window.document.body.appendChild(s);
          }
        } //To move this to the navbar component + service in the constructor

      }, {
        key: "pay",
        value: function pay(amount, index) {
          var _this7 = this;

          var handler = window.StripeCheckout.configure({
            key: 'pk_test_b5EhK6kbYuK6AMb07vgV82MK0021wa2BWM',
            locale: 'auto',
            token: function token(_token) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              console.log(_token);
              console.log("i =", this.i);
            }
          });
          handler.open({
            name: 'Thanks For you Support to ',
            description: this.event.name,
            amount: amount,
            closed: function closed() {
              _this7.EndOfPayment(amount, index);
            }
          });
        }
      }, {
        key: "EndOfPayment",
        value: function EndOfPayment(amount, index) {
          console.log(" funding", this.event.fundings);
          console.log(" amount", amount);
          this.event.fundings = this.event.fundings + Number(amount);
          console.log("event funding", this.event.fundings);
          this.eventService.update(this.event, this.event.id).subscribe(function (res) {
            console.log("helloooooooo");
            alert("THANKS FOR YOUR SUPPORT");
          });
          this.events[index].fundings = this.event.fundings;
        }
      }, {
        key: "getImage",
        value: function getImage(event) {
          var _this8 = this;

          this.http.get("http://localhost:3000/download/" + event.image, {
            responseType: "blob"
          }) //set response Type properly (it is not part of headers)
          .toPromise().then(function (blob) {
            _this8.imageUrl = URL.createObjectURL(blob);
            event.image = _this8.sanitizer.bypassSecurityTrustResourceUrl(_this8.imageUrl);
            _this8.i = _this8.i + 1;
          })["catch"](function (err) {
            return console.error("download error = ", err);
          });
        }
      }, {
        key: "getSponsoringFile",
        value: function getSponsoringFile(index) {
          var _this9 = this;

          console.log("test test test");
          this.http.get("http://localhost:3000/download/" + this.events[index].sponsoringFile, {
            responseType: "blob"
          }) //set response Type properly (it is not part of headers)
          .toPromise().then(function (blob) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, _this9.events[index].sponsoringFile);
          })["catch"](function (err) {
            return console.error("download error = ", err);
          });
        }
      }, {
        key: "inputOn",
        value: function inputOn(index) {
          this.events[index].input = !this.events[index].input;
        }
      }, {
        key: "Fund",
        value: function Fund(index, amount) {
          this.inputOn(index);
          this.event = this.eventOrig[index];
          console.log(this.event, "ev");
          this.pay(amount, index);
        }
      }]);

      return EventsComponent;
    }();

    EventsComponent.ctorParameters = function () {
      return [{
        type: _event_service_service__WEBPACK_IMPORTED_MODULE_1__["EventServiceService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    EventsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-events',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./events.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./events.component.css */
      "./src/app/events/events.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_event_service_service__WEBPACK_IMPORTED_MODULE_1__["EventServiceService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], EventsComponent);
    /***/
  },

  /***/
  "./src/app/file-loder/file-loder.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/file-loder/file-loder.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFileLoderFileLoderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtbG9kZXIvZmlsZS1sb2Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/file-loder/file-loder.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/file-loder/file-loder.component.ts ***!
    \****************************************************/

  /*! exports provided: FileLoderComponent */

  /***/
  function srcAppFileLoderFileLoderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileLoderComponent", function () {
      return FileLoderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FileLoderComponent = /*#__PURE__*/function () {
      function FileLoderComponent(http) {
        _classCallCheck(this, FileLoderComponent);

        this.http = http;
        this.title = 'fileUpload';
        this.multipleImages = [];
      }

      _createClass(FileLoderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectImage",
        value: function selectImage(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.images = file;
          }
        }
      }, {
        key: "selectMultipleImage",
        value: function selectMultipleImage(event) {
          if (event.target.files.length > 0) {
            this.multipleImages = event.target.files;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var formData = new FormData();
          formData.append('file', this.images);
          this.http.post('http://localhost:3000/file', formData).subscribe(function (res) {
            return console.log(res);
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "onMultipleSubmit",
        value: function onMultipleSubmit() {
          var formData = new FormData();

          var _iterator2 = _createForOfIteratorHelper(this.multipleImages),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var img = _step2.value;
              formData.append('files', img);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.http.post('http://localhost:3000/multipleFiles', formData).subscribe(function (res) {
            return console.log(res);
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return FileLoderComponent;
    }();

    FileLoderComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    FileLoderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-file-loder',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./file-loder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/file-loder/file-loder.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./file-loder.component.css */
      "./src/app/file-loder/file-loder.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], FileLoderComponent);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/home-page/home-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-sponsor{\r\n    color: #f1f6fc;\r\n    border-color:  #fb6340;\r\n    background-color:  #fb6340;\r\n    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)\r\n   \r\n}\r\n\r\n.btn-sponsor:hover {\r\n    color:  #f1f6fc;\r\n    border-color: #fb6340;\r\n    background-color: #fb6340\r\n}\r\n\r\n.btn-sponsor.focus,\r\n.btn-sponsor:focus {\r\n    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(255, 255, 255, .5)\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUI7O0FBRUo7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7O0lBRUk7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc3BvbnNvcntcclxuICAgIGNvbG9yOiAjZjFmNmZjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2ZiNjM0MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZmI2MzQwO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjA4KVxyXG4gICBcclxufVxyXG5cclxuLmJ0bi1zcG9uc29yOmhvdmVyIHtcclxuICAgIGNvbG9yOiAgI2YxZjZmYztcclxuICAgIGJvcmRlci1jb2xvcjogI2ZiNjM0MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzNDBcclxufVxyXG5cclxuLmJ0bi1zcG9uc29yLmZvY3VzLFxyXG4uYnRuLXNwb25zb3I6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjA4KSwgMCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var nucleoView = document.getElementsByClassName('icons-container')[0];
          window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
              nucleoView.classList.add('on-screen');
            } else {
              nucleoView.classList.remove('on-screen');
            }
          }.bind(this), false);
        }
      }, {
        key: "isInViewport",
        value: function isInViewport(elem) {
          var bounding = elem.getBoundingClientRect();
          return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home-page',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/home-page/home-page.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.model = {
          left: true,
          middle: false,
          right: false
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sections/sections.module */
    "./src/app/sections/sections.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"]],
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
      exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
      providers: []
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/interceptors/login.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptors/login.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: LoginInterceptor, LoginInterceptorProider */

  /***/
  function srcAppInterceptorsLoginInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginInterceptor", function () {
      return LoginInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginInterceptorProider", function () {
      return LoginInterceptorProider;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginInterceptor = /*#__PURE__*/function () {
      function LoginInterceptor() {
        _classCallCheck(this, LoginInterceptor);
      }

      _createClass(LoginInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (localStorage.getItem('obj')) {
            var storage = JSON.parse(localStorage.getItem('obj'));
            var token = storage['0']['token'];
            var newRequest = req.clone({
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('token', token)
            });
            return next.handle(newRequest);
          } else {
            return next.handle(req);
          }
        }
      }]);

      return LoginInterceptor;
    }();

    var LoginInterceptorProider = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: LoginInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/landing/landing.component.scss":
  /*!************************************************!*\
    !*** ./src/app/landing/landing.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-landing',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./landing.component.scss */
      "./src/app/landing/landing.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], LandingComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/User */
    "./src/app/models/User.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(loginService, router) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.router = router;
        this.submitted = false;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(formulaire) {
          var _this10 = this;

          console.log("dkhalt");
          this.submitted = formulaire.valid;
          if (!this.submitted) return;
          this.user.email = formulaire.controls['email'].value;
          this.user.password = formulaire.controls['password'].value;
          console.log(this.user);
          this.loginService.login(this.user).subscribe(function (result) {
            console.log("pleaassse");
            var token = result.body["token"];
            console.log(token);
            var obj = [{
              'token': token
            }, {
              'user': _this10.user.email
            }];
            localStorage.setItem('obj', JSON.stringify(obj));

            _this10.router.navigate(['/']);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/Event.ts":
  /*!*********************************!*\
    !*** ./src/app/models/Event.ts ***!
    \*********************************/

  /*! exports provided: Event */

  /***/
  function srcAppModelsEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Event", function () {
      return Event;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Event = function Event() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var name = arguments.length > 1 ? arguments[1] : undefined;
      var startTime = arguments.length > 2 ? arguments[2] : undefined;
      var endTime = arguments.length > 3 ? arguments[3] : undefined;
      var place = arguments.length > 4 ? arguments[4] : undefined;
      var category = arguments.length > 5 ? arguments[5] : undefined;
      var description = arguments.length > 6 ? arguments[6] : undefined;
      var image = arguments.length > 7 ? arguments[7] : undefined;
      var sponsoringFile = arguments.length > 8 ? arguments[8] : undefined;
      var budget = arguments.length > 9 ? arguments[9] : undefined;
      var fundings = arguments.length > 10 ? arguments[10] : undefined;

      _classCallCheck(this, Event);

      this.id = 0;
      this.id = id;
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.place = place;
      this.category = category;
      this.description = description;
      this.image = image;
      this.sponsoringFile = sponsoringFile;
      this.budget = budget;
      this.fundings = fundings;
    };
    /***/

  },

  /***/
  "./src/app/models/Sponsor.ts":
  /*!***********************************!*\
    !*** ./src/app/models/Sponsor.ts ***!
    \***********************************/

  /*! exports provided: Sponsor */

  /***/
  function srcAppModelsSponsorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sponsor", function () {
      return Sponsor;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Sponsor = function Sponsor() {
      _classCallCheck(this, Sponsor);
    };
    /***/

  },

  /***/
  "./src/app/models/User.ts":
  /*!********************************!*\
    !*** ./src/app/models/User.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/models/organization.ts":
  /*!****************************************!*\
    !*** ./src/app/models/organization.ts ***!
    \****************************************/

  /*! exports provided: Organization */

  /***/
  function srcAppModelsOrganizationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Organization", function () {
      return Organization;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Organization = function Organization() {
      _classCallCheck(this, Organization);
    };
    /***/

  },

  /***/
  "./src/app/organization-manage-profile/organization-manage-profile.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/organization-manage-profile/organization-manage-profile.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrganizationManageProfileOrganizationManageProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi1tYW5hZ2UtcHJvZmlsZS9vcmdhbml6YXRpb24tbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/organization-manage-profile/organization-manage-profile.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/organization-manage-profile/organization-manage-profile.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: OrganizationManageProfileComponent */

  /***/
  function srcAppOrganizationManageProfileOrganizationManageProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationManageProfileComponent", function () {
      return OrganizationManageProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _models_organization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/organization */
    "./src/app/models/organization.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrganizationManageProfileComponent = /*#__PURE__*/function () {
      function OrganizationManageProfileComponent(organizationService, loginService, http, router) {
        _classCallCheck(this, OrganizationManageProfileComponent);

        this.organizationService = organizationService;
        this.loginService = loginService;
        this.http = http;
        this.router = router;
        this.organization = new _models_organization__WEBPACK_IMPORTED_MODULE_2__["Organization"]();
      }

      _createClass(OrganizationManageProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.loginService.getCurrentUser().subscribe(function (user) {
            _this11.organizationService.getLoggedOrganization(user.body.id).subscribe(function (res) {
              return _this11.organization = res;
            });
          });
        }
      }, {
        key: "selectImage",
        value: function selectImage(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.image_file = file;
          }
        }
      }, {
        key: "save",
        value: function save() {
          this.organization.image = this.image_name;
          this.organizationService.update(this.organization, this.organization.id).subscribe(function (res) {
            return console.log("sponsor updated", res);
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this12 = this;

          var formData = new FormData();
          formData.append('file', this.image_file);
          this.http.post('http://localhost:3000/file', formData).subscribe(function (res) {
            _this12.image_name = res.name;

            _this12.save();

            _this12.router.navigate(['organization', _this12.organization.id]);
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return OrganizationManageProfileComponent;
    }();

    OrganizationManageProfileComponent.ctorParameters = function () {
      return [{
        type: _services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    OrganizationManageProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-organization-manage-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./organization-manage-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/organization-manage-profile/organization-manage-profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./organization-manage-profile.component.css */
      "./src/app/organization-manage-profile/organization-manage-profile.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], OrganizationManageProfileComponent);
    /***/
  },

  /***/
  "./src/app/organization-profile/organization-profile.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/organization-profile/organization-profile.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrganizationProfileOrganizationProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi1wcm9maWxlL29yZ2FuaXphdGlvbi1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/organization-profile/organization-profile.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/organization-profile/organization-profile.component.ts ***!
    \************************************************************************/

  /*! exports provided: OrganizationProfileComponent */

  /***/
  function srcAppOrganizationProfileOrganizationProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationProfileComponent", function () {
      return OrganizationProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/organization */
    "./src/app/models/organization.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrganizationProfileComponent = /*#__PURE__*/function () {
      function OrganizationProfileComponent(router, organizationService, route, loginService, http, sanitizer) {
        _classCallCheck(this, OrganizationProfileComponent);

        this.router = router;
        this.organizationService = organizationService;
        this.route = route;
        this.loginService = loginService;
        this.http = http;
        this.sanitizer = sanitizer;
      }

      _createClass(OrganizationProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.organization = new _models_organization__WEBPACK_IMPORTED_MODULE_3__["Organization"]();
          this.route.params.subscribe(function (params) {
            _this13.organizationService.getOrganization(+params.id).subscribe(function (res) {
              _this13.organization = res;

              _this13.getImage(_this13.organization);
            });

            _this13.loginService.getCurrentUser().subscribe(function (user) {
              _this13.organizationService.getLoggedOrganization(user.body.id).subscribe(function (res) {
                if (res.id == +params.id) {
                  _this13.userConnected = true;
                } else {
                  _this13.userConnected = false;
                }
              });
            }), console.log("id " + params.id);
          });
        }
      }, {
        key: "getImage",
        value: function getImage(organization) {
          var _this14 = this;

          this.http.get("http://localhost:3000/download/" + organization.image, {
            responseType: "blob"
          }).toPromise().then(function (blob) {
            _this14.imageUrl = URL.createObjectURL(blob);
            organization.image = _this14.sanitizer.bypassSecurityTrustResourceUrl(_this14.imageUrl);
          })["catch"](function (err) {
            return console.error("download error = ", err);
          });
        }
      }, {
        key: "deleteMyself",
        value: function deleteMyself() {
          var _this15 = this;

          this.loginService.getCurrentUser().subscribe(function (user) {
            _this15.organizationService.deleteMyself(user.body.id).subscribe(function (res) {
              _this15.router.navigate(['home']);

              _this15.loginService.logout();
            });
          });
        }
      }]);

      return OrganizationProfileComponent;
    }();

    OrganizationProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }];
    };

    OrganizationProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-organization-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./organization-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/organization-profile/organization-profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./organization-profile.component.css */
      "./src/app/organization-profile/organization-profile.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])], OrganizationProfileComponent);
    /***/
  },

  /***/
  "./src/app/organizations/organizations.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/organizations/organizations.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrganizationsOrganizationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ucy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/organizations/organizations.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/organizations/organizations.component.ts ***!
    \**********************************************************/

  /*! exports provided: OrganizationsComponent */

  /***/
  function srcAppOrganizationsOrganizationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationsComponent", function () {
      return OrganizationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/organization.service */
    "./src/app/services/organization.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrganizationsComponent = /*#__PURE__*/function () {
      function OrganizationsComponent(organizationService) {
        _classCallCheck(this, OrganizationsComponent);

        this.organizationService = organizationService;
      }

      _createClass(OrganizationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.organizationService.getAll().subscribe(function (organizations) {
            console.log(organizations[0].name);
            _this16.organizations = organizations;
          });
        }
      }, {
        key: "delete",
        value: function _delete(organization) {
          var index = this.organizations.indexOf(organization, 0);

          if (index > -1) {
            this.organizations.splice(index, 1);
          }

          this.organizationService["delete"](organization.id).subscribe(function (res) {
            console.log("delete done: " + organization.id);
          });
        }
      }]);

      return OrganizationsComponent;
    }();

    OrganizationsComponent.ctorParameters = function () {
      return [{
        type: _services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"]
      }];
    };

    OrganizationsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-organizations',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./organizations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/organizations/organizations.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./organizations.component.css */
      "./src/app/organizations/organizations.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"]])], OrganizationsComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/sections/alerts-section/alerts-section.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsAlertsSectionAlertsSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FsZXJ0cy1zZWN0aW9uL2FsZXJ0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sections/alerts-section/alerts-section.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AlertsSectionComponent */

  /***/
  function srcAppSectionsAlertsSectionAlertsSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function () {
      return AlertsSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AlertsSectionComponent = /*#__PURE__*/function () {
      function AlertsSectionComponent() {
        _classCallCheck(this, AlertsSectionComponent);

        this.alerts = [];
        this.alerts.push({
          id: 1,
          type: 'success',
          strong: 'Success!',
          message: 'This is a success alert—check it out!',
          icon: 'ni ni-like-2'
        }, {
          id: 2,
          strong: 'Info!',
          type: 'info',
          message: 'This is an info alert—check it out!',
          icon: 'ni ni-bell-55'
        }, {
          id: 3,
          type: 'warning',
          strong: 'Warning!',
          message: 'This is a warning alert—check it out!',
          icon: 'ni ni-bell-55'
        }, {
          id: 4,
          type: 'danger',
          strong: 'Danger!',
          message: 'This is a danger alert—check it out!',
          icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) {
          return Object.assign({}, alert);
        });
      }

      _createClass(AlertsSectionComponent, [{
        key: "close",
        value: function close(alert) {
          this.alerts.splice(this.alerts.indexOf(alert), 1);
        }
      }]);

      return AlertsSectionComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array)], AlertsSectionComponent.prototype, "alerts", void 0);

    AlertsSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-alerts-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./alerts-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./alerts-section.component.css */
      "./src/app/sections/alerts-section/alerts-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], AlertsSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/angular-section/angular-section.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/sections/angular-section/angular-section.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsAngularSectionAngularSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FuZ3VsYXItc2VjdGlvbi9hbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sections/angular-section/angular-section.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AngularSectionComponent */

  /***/
  function srcAppSectionsAngularSectionAngularSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function () {
      return AngularSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AngularSectionComponent = /*#__PURE__*/function () {
      function AngularSectionComponent(modalService, calendar) {
        _classCallCheck(this, AngularSectionComponent);

        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
      }

      _createClass(AngularSectionComponent, [{
        key: "open",
        value: function open(content, type, modalDimension) {
          var _this17 = this;

          if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, {
              windowClass: 'modal-mini',
              size: 'sm',
              centered: true
            }).result.then(function (result) {
              _this17.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this17.closeResult = "Dismissed ".concat(_this17.getDismissReason(reason));
            });
          } else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, {
              windowClass: 'modal-danger',
              centered: true
            }).result.then(function (result) {
              _this17.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this17.closeResult = "Dismissed ".concat(_this17.getDismissReason(reason));
            });
          } else {
            this.modalService.open(content, {
              centered: true
            }).result.then(function (result) {
              _this17.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this17.closeResult = "Dismissed ".concat(_this17.getDismissReason(reason));
            });
          }
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "isRangeStart",
        value: function isRangeStart(date) {
          return this.model1 && this.model2 && date.equals(this.model1);
        }
      }, {
        key: "isRangeEnd",
        value: function isRangeEnd(date) {
          return this.model1 && this.model2 && date.equals(this.model2);
        }
      }, {
        key: "isInRange",
        value: function isInRange(date) {
          return date.after(this.model1) && date.before(this.model2);
        }
      }, {
        key: "isActive",
        value: function isActive(date) {
          return date.equals(this.model1) || date.equals(this.model2);
        }
      }, {
        key: "endDateChanged",
        value: function endDateChanged(date) {
          if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
          }
        }
      }, {
        key: "startDateChanged",
        value: function startDateChanged(date) {
          if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AngularSectionComponent;
    }();

    AngularSectionComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
      }];
    };

    AngularSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-angular-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./angular-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./angular-section.component.css */
      "./src/app/sections/angular-section/angular-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])], AngularSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/buttons-section/buttons-section.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsButtonsSectionButtonsSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2J1dHRvbnMtc2VjdGlvbi9idXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sections/buttons-section/buttons-section.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ButtonsSectionComponent */

  /***/
  function srcAppSectionsButtonsSectionButtonsSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function () {
      return ButtonsSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ButtonsSectionComponent = /*#__PURE__*/function () {
      function ButtonsSectionComponent() {
        _classCallCheck(this, ButtonsSectionComponent);
      }

      _createClass(ButtonsSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsSectionComponent;
    }();

    ButtonsSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-buttons-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./buttons-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./buttons-section.component.css */
      "./src/app/sections/buttons-section/buttons-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], ButtonsSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/crs-section/crs-section.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/sections/crs-section/crs-section.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsCrsSectionCrsSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Nycy1zZWN0aW9uL2Nycy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sections/crs-section/crs-section.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
    \***************************************************************/

  /*! exports provided: CrsSectionComponent */

  /***/
  function srcAppSectionsCrsSectionCrsSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function () {
      return CrsSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! nouislider */
    "./node_modules/nouislider/distribute/nouislider.js");
    /* harmony import */


    var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CrsSectionComponent = /*#__PURE__*/function () {
      function CrsSectionComponent() {
        _classCallCheck(this, CrsSectionComponent);
      }

      _createClass(CrsSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var slider = document.getElementById("input-slider");
          nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
              min: 0,
              max: 100
            }
          });
          var slider2 = document.getElementById("input-slider-range");
          nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
              min: 0,
              max: 100
            }
          });
        }
      }]);

      return CrsSectionComponent;
    }();

    CrsSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-crs-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./crs-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./crs-section.component.css */
      "./src/app/sections/crs-section/crs-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], CrsSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/inputs-section/inputs-section.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsInputsSectionInputsSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2lucHV0cy1zZWN0aW9uL2lucHV0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sections/inputs-section/inputs-section.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
    \*********************************************************************/

  /*! exports provided: InputsSectionComponent */

  /***/
  function srcAppSectionsInputsSectionInputsSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function () {
      return InputsSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var InputsSectionComponent = /*#__PURE__*/function () {
      function InputsSectionComponent() {
        _classCallCheck(this, InputsSectionComponent);
      }

      _createClass(InputsSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputsSectionComponent;
    }();

    InputsSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-inputs-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./inputs-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./inputs-section.component.css */
      "./src/app/sections/inputs-section/inputs-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], InputsSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/modal/modal.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/sections/modal/modal.component.ts ***!
    \***************************************************/

  /*! exports provided: NgbdModalContent, NgbdModalComponent */

  /***/
  function srcAppSectionsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function () {
      return NgbdModalContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function () {
      return NgbdModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NgbdModalContent = function NgbdModalContent(activeModal) {
      _classCallCheck(this, NgbdModalContent);

      this.activeModal = activeModal;
    };

    NgbdModalContent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], NgbdModalContent.prototype, "name", void 0);

    NgbdModalContent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-modal-content',
      template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
    }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])], NgbdModalContent);

    var NgbdModalComponent = /*#__PURE__*/function () {
      function NgbdModalComponent(modalService) {
        _classCallCheck(this, NgbdModalComponent);

        this.modalService = modalService;
      }

      _createClass(NgbdModalComponent, [{
        key: "open",
        value: function open() {
          var modalRef = this.modalService.open(NgbdModalContent);
          modalRef.componentInstance.name = 'World';
        }
      }]);

      return NgbdModalComponent;
    }();

    NgbdModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
      }];
    };

    NgbdModalComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-modal-component',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html"))["default"]
    }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], NgbdModalComponent);
    /***/
  },

  /***/
  "./src/app/sections/navigation-section/navigation-section.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsNavigationSectionNavigationSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL25hdmlnYXRpb24tc2VjdGlvbi9uYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sections/navigation-section/navigation-section.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NavigationSectionComponent */

  /***/
  function srcAppSectionsNavigationSectionNavigationSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function () {
      return NavigationSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavigationSectionComponent = /*#__PURE__*/function () {
      function NavigationSectionComponent() {
        _classCallCheck(this, NavigationSectionComponent);
      }

      _createClass(NavigationSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationSectionComponent;
    }();

    NavigationSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-navigation-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./navigation-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./navigation-section.component.css */
      "./src/app/sections/navigation-section/navigation-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], NavigationSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/nucleo-section/nucleo-section.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsNucleoSectionNucleoSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL251Y2xlby1zZWN0aW9uL251Y2xlby1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sections/nucleo-section/nucleo-section.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NucleoSectionComponent */

  /***/
  function srcAppSectionsNucleoSectionNucleoSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function () {
      return NucleoSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NucleoSectionComponent = /*#__PURE__*/function () {
      function NucleoSectionComponent() {
        _classCallCheck(this, NucleoSectionComponent);
      }

      _createClass(NucleoSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var nucleoView = document.getElementsByClassName('icons-container')[0];
          window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
              nucleoView.classList.add('on-screen');
            } else {
              nucleoView.classList.remove('on-screen');
            }
          }.bind(this), false);
        }
      }, {
        key: "isInViewport",
        value: function isInViewport(elem) {
          var bounding = elem.getBoundingClientRect();
          return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
      }]);

      return NucleoSectionComponent;
    }();

    NucleoSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nucleo-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nucleo-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./nucleo-section.component.css */
      "./src/app/sections/nucleo-section/nucleo-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], NucleoSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/sections.component.css":
  /*!*************************************************!*\
    !*** ./src/app/sections/sections.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsSectionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sections/sections.component.ts":
  /*!************************************************!*\
    !*** ./src/app/sections/sections.component.ts ***!
    \************************************************/

  /*! exports provided: SectionsComponent */

  /***/
  function srcAppSectionsSectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionsComponent", function () {
      return SectionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SectionsComponent = /*#__PURE__*/function () {
      function SectionsComponent(activatedRoute) {
        _classCallCheck(this, SectionsComponent);

        this.activatedRoute = activatedRoute;
      }

      _createClass(SectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fun",
        value: function fun() {
          this.activatedRoute.params.subscribe(function (parm) {
            return console.log("param ", parm);
          });
        }
      }]);

      return SectionsComponent;
    }();

    SectionsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    SectionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sections',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sections.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sections.component.css */
      "./src/app/sections/sections.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])], SectionsComponent);
    /***/
  },

  /***/
  "./src/app/sections/sections.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/sections/sections.module.ts ***!
    \*********************************************/

  /*! exports provided: SectionsModule */

  /***/
  function srcAppSectionsSectionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionsModule", function () {
      return SectionsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-nouislider */
    "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
    /* harmony import */


    var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/fesm2015/jw-bootstrap-switch-ng2.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sections.component */
    "./src/app/sections/sections.component.ts");
    /* harmony import */


    var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./buttons-section/buttons-section.component */
    "./src/app/sections/buttons-section/buttons-section.component.ts");
    /* harmony import */


    var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./inputs-section/inputs-section.component */
    "./src/app/sections/inputs-section/inputs-section.component.ts");
    /* harmony import */


    var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./crs-section/crs-section.component */
    "./src/app/sections/crs-section/crs-section.component.ts");
    /* harmony import */


    var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navigation-section/navigation-section.component */
    "./src/app/sections/navigation-section/navigation-section.component.ts");
    /* harmony import */


    var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tabs-section/tabs-section.component */
    "./src/app/sections/tabs-section/tabs-section.component.ts");
    /* harmony import */


    var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./alerts-section/alerts-section.component */
    "./src/app/sections/alerts-section/alerts-section.component.ts");
    /* harmony import */


    var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./typography-section/typography-section.component */
    "./src/app/sections/typography-section/typography-section.component.ts");
    /* harmony import */


    var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./angular-section/angular-section.component */
    "./src/app/sections/angular-section/angular-section.component.ts");
    /* harmony import */


    var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./nucleo-section/nucleo-section.component */
    "./src/app/sections/nucleo-section/nucleo-section.component.ts");
    /* harmony import */


    var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./versions-section/versions-section.component */
    "./src/app/sections/versions-section/versions-section.component.ts");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/sections/modal/modal.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SectionsModule = function SectionsModule() {
      _classCallCheck(this, SectionsModule);
    };

    SectionsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"], _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"], _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"], _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"], _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"], _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"], _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"], _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"], _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"], _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"], _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
      entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]],
      exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"]]
    })], SectionsModule);
    /***/
  },

  /***/
  "./src/app/sections/tabs-section/tabs-section.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsTabsSectionTabsSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sections/tabs-section/tabs-section.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TabsSectionComponent */

  /***/
  function srcAppSectionsTabsSectionTabsSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function () {
      return TabsSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TabsSectionComponent = /*#__PURE__*/function () {
      function TabsSectionComponent() {
        _classCallCheck(this, TabsSectionComponent);

        this.page = 2;
        this.page1 = 3;
      }

      _createClass(TabsSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsSectionComponent;
    }();

    TabsSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-tabs-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./tabs-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./tabs-section.component.css */
      "./src/app/sections/tabs-section/tabs-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], TabsSectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/typography-section/typography-section.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/sections/typography-section/typography-section.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsTypographySectionTypographySectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3R5cG9ncmFwaHktc2VjdGlvbi90eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sections/typography-section/typography-section.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TypographySectionComponent */

  /***/
  function srcAppSectionsTypographySectionTypographySectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function () {
      return TypographySectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TypographySectionComponent = /*#__PURE__*/function () {
      function TypographySectionComponent() {
        _classCallCheck(this, TypographySectionComponent);
      }

      _createClass(TypographySectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TypographySectionComponent;
    }();

    TypographySectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-typography-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./typography-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./typography-section.component.css */
      "./src/app/sections/typography-section/typography-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], TypographySectionComponent);
    /***/
  },

  /***/
  "./src/app/sections/versions-section/versions-section.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/sections/versions-section/versions-section.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionsVersionsSectionVersionsSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3ZlcnNpb25zLXNlY3Rpb24vdmVyc2lvbnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sections/versions-section/versions-section.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
    \*************************************************************************/

  /*! exports provided: VersionsSectionComponent */

  /***/
  function srcAppSectionsVersionsSectionVersionsSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function () {
      return VersionsSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var VersionsSectionComponent = /*#__PURE__*/function () {
      function VersionsSectionComponent() {
        _classCallCheck(this, VersionsSectionComponent);
      }

      _createClass(VersionsSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VersionsSectionComponent;
    }();

    VersionsSectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-versions-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./versions-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./versions-section.component.css */
      "./src/app/sections/versions-section/versions-section.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], VersionsSectionComponent);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resourceUrl = 'http://localhost:3000/login';
      } //check credentials


      _createClass(LoginService, [{
        key: "login",
        value: function login(user) {
          var _this18 = this;

          return this.http.post(this.resourceUrl + '/', JSON.parse(JSON.stringify(user)), {
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this18.refresh.next();
          }));
        }
      }, {
        key: "signUp",
        value: function signUp(user) {
          return this.http.post(this.resourceUrl + '/register', JSON.parse(JSON.stringify(user)), {
            observe: 'response'
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('obj');
          this.refresh.next();
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!localStorage.getItem('obj');
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var storage = JSON.parse(localStorage.getItem('obj'));
          var userEmail = storage['1']['user'];
          console.log(userEmail);
          return this.http.get(this.resourceUrl + '/currentUser/' + userEmail, {
            observe: 'response'
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    LoginService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LoginService);
    /***/
  },

  /***/
  "./src/app/services/organization.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/organization.service.ts ***!
    \**************************************************/

  /*! exports provided: OrganizationService */

  /***/
  function srcAppServicesOrganizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationService", function () {
      return OrganizationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrganizationService = /*#__PURE__*/function () {
      function OrganizationService(http) {
        _classCallCheck(this, OrganizationService);

        this.http = http;
        this.resourceUrl = 'http://localhost:3000/organization';
      }

      _createClass(OrganizationService, [{
        key: "create",
        value: function create(organization) {
          return this.http.post(this.resourceUrl + '/add', JSON.parse(JSON.stringify(organization)), {
            observe: 'response'
          });
        }
      }, {
        key: "update",
        value: function update(organization, id) {
          return this.http.put(this.resourceUrl + '/update/' + id, organization, {
            observe: 'response'
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"](this.resourceUrl + '/delete/' + id);
        }
      }, {
        key: "getOrganization",
        value: function getOrganization(id) {
          return this.http.get(this.resourceUrl + '/' + id);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.resourceUrl + '/All');
        }
      }, {
        key: "getLoggedOrganization",
        value: function getLoggedOrganization(id) {
          return this.http.get(this.resourceUrl + '/findByUserLogged/' + id);
        }
      }, {
        key: "deleteMyself",
        value: function deleteMyself(id) {
          return this.http["delete"](this.resourceUrl + '/deleteMyself/' + id);
        }
      }]);

      return OrganizationService;
    }();

    OrganizationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    OrganizationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], OrganizationService);
    /***/
  },

  /***/
  "./src/app/services/sponsor.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/sponsor.service.ts ***!
    \*********************************************/

  /*! exports provided: SponsorService */

  /***/
  function srcAppServicesSponsorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorService", function () {
      return SponsorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SponsorService = /*#__PURE__*/function () {
      function SponsorService(http) {
        _classCallCheck(this, SponsorService);

        this.http = http;
        this.resourceUrl = 'http://localhost:3000/sponsor';
      }

      _createClass(SponsorService, [{
        key: "getSponsors",
        value: function getSponsors() {
          return this.http.get(this.resourceUrl + '/all');
        }
      }, {
        key: "getSponsor",
        value: function getSponsor(id) {
          return this.http.get(this.resourceUrl + '/' + id);
        }
      }, {
        key: "getSponsorByUserId",
        value: function getSponsorByUserId(id) {
          return this.http.get(this.resourceUrl + '/findByUserLogged/' + id);
        }
      }, {
        key: "addSponsor",
        value: function addSponsor(sponsor) {
          return this.http.post(this.resourceUrl + '/add', JSON.parse(JSON.stringify(sponsor)), {
            observe: 'response'
          });
        }
      }, {
        key: "updateSponsor",
        value: function updateSponsor(sponsor) {
          return this.http.put(this.resourceUrl + '/update', sponsor);
        }
      }, {
        key: "deleteSponsor",
        value: function deleteSponsor(id) {
          return this.http["delete"](this.resourceUrl + '/deleteByUserId/' + id);
        }
      }]);

      return SponsorService;
    }();

    SponsorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    SponsorService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SponsorService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.resourceUrl = 'http://localhost:3000/user';
      }

      _createClass(UserService, [{
        key: "create",
        value: function create(user) {
          return this.http.post(this.resourceUrl + '/add', JSON.parse(JSON.stringify(user)), {
            observe: 'response'
          });
        } //not tested yet

      }, {
        key: "update",
        value: function update(user, id) {
          return this.http.put(this.resourceUrl + '/update/' + id, user, {
            observe: 'response'
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.get(this.resourceUrl + '/delete/' + id, {
            observe: 'response'
          });
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.http.get(this.resourceUrl + '/' + id, {
            observe: 'response'
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UserService);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        this.test = new Date();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPath",
        value: function getPath() {
          return this.router.url;
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sign_up_popup_sign_up_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../sign-up-popup/sign-up-popup.component */
    "./src/app/sign-up-popup/sign-up-popup.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(location, router, matDialog, loginService) {
        _classCallCheck(this, NavbarComponent);

        this.location = location;
        this.router = router;
        this.matDialog = matDialog;
        this.loginService = loginService;
        this.isCollapsed = true;
        this.yScrollStack = [];
        this.isConnected = false;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.router.events.subscribe(function (event) {
            _this19.isCollapsed = true;

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              if (event.url != _this19.lastPoppedUrl) _this19.yScrollStack.push(window.scrollY);
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (event.url == _this19.lastPoppedUrl) {
                _this19.lastPoppedUrl = undefined;
                window.scrollTo(0, _this19.yScrollStack.pop());
              } else window.scrollTo(0, 0);
            }
          });
          this.location.subscribe(function (ev) {
            _this19.lastPoppedUrl = ev.url;
          });
          this.updateCurrentUser();
          this.loginService.refresh.subscribe(function () {
            _this19.updateCurrentUser();
          });
        }
      }, {
        key: "updateCurrentUser",
        value: function updateCurrentUser() {
          var _this20 = this;

          this.loginService.getCurrentUser().subscribe(function (user) {
            if (user) {
              _this20.userConnected = user.body.UserName;
              _this20.isSponsor = user.body.role + "" == "Sponsor";
              _this20.isOrganizer = user.body.role + "" == "Organization";
            }
          });
        }
      }, {
        key: "isHome",
        value: function isHome() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee === '#/home') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isDocumentation",
        value: function isDocumentation() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee === '#/documentation') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this21 = this;

          console.log("working");
          var dialogRef = this.matDialog.open(_sign_up_popup_sign_up_popup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpPopupComponent"], {
            height: '400px',
            width: '600px',
            panelClass: 'myapp-no-padding-dialog'
          });
          var sub = dialogRef.componentInstance.onClick.subscribe(function (value) {
            console.log(value);
            if (value.asOrganizer == true) _this21.router.navigate(['/register/organization']);else if (value.asOrganizer == false) _this21.router.navigate(['/register/sponsor']);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginService.logout();
          this.isOrganizer = false;
          this.isSponsor = false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }];
    };

    NavbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-navbar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/shared/navbar/navbar.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/sign-up-popup/sign-up-popup.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/sign-up-popup/sign-up-popup.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpPopupSignUpPopupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rounded-circle {\r\n    border-radius: 50% !important;\r\n}\r\n.fixActionRow {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.spacer {\r\n    flex-grow: 0.3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC1wb3B1cC9zaWduLXVwLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC1wb3B1cC9zaWduLXVwLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91bmRlZC1jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpeEFjdGlvblJvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBmbGV4LWdyb3c6IDAuMztcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/sign-up-popup/sign-up-popup.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/sign-up-popup/sign-up-popup.component.ts ***!
    \**********************************************************/

  /*! exports provided: SignUpPopupComponent */

  /***/
  function srcAppSignUpPopupSignUpPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPopupComponent", function () {
      return SignUpPopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignUpPopupComponent = /*#__PURE__*/function () {
      function SignUpPopupComponent(dialogRef) {
        _classCallCheck(this, SignUpPopupComponent);

        this.dialogRef = dialogRef;
        this.asOrganizer = false;
        this.asSponsor = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SignUpPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close({
            asOrganizer: this.asOrganizer,
            asSponsor: this.asSponsor
          });
        }
      }, {
        key: "is_organizer",
        value: function is_organizer(val) {
          this.asOrganizer = val;
          this.asSponsor = !val;
          console.log("clicked");
          this.onClick.emit({
            asOrganizer: this.asOrganizer,
            asSponsor: this.asSponsor
          });
          this.close();
        }
      }]);

      return SignUpPopupComponent;
    }();

    SignUpPopupComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }];
    };

    SignUpPopupComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sign-up-popup',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sign-up-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up-popup/sign-up-popup.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sign-up-popup.component.css */
      "./src/app/sign-up-popup/sign-up-popup.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])], SignUpPopupComponent);
    /***/
  },

  /***/
  "./src/app/signup-sponsor/signup-sponsor.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/signup-sponsor/signup-sponsor.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSponsorSignupSponsorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*--\nAuthor: Colorlib\nAuthor URL: https://colorlib.com\nLicense: Creative Commons Attribution 3.0 Unported\nLicense URL: http://creativecommons.org/licenses/by/3.0/\n--*/\n/*-- reset --*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, nav ul, nav li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n.titreCustom {\n  font-size: larger;\n  color: whitesmoke;\n  alignment: center;\n}\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\nol, ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  text-decoration: none;\n}\n.txt-rt {\n  text-align: right;\n}\n.txt-lt {\n  text-align: left;\n}\n/* text align left */\n.txt-center {\n  text-align: center;\n}\n/* text align center */\n.float-rt {\n  float: right;\n}\n/* float right */\n.float-lt {\n  float: left;\n}\n/* float left */\n.clear {\n  clear: both;\n}\n/* clear float */\n.pos-relative {\n  position: relative;\n}\n/* Position Relative */\n.pos-absolute {\n  position: absolute;\n}\n/* Position Absolute */\n.vertical-base {\n  vertical-align: baseline;\n}\n/* vertical align baseline */\n.vertical-top {\n  vertical-align: top;\n}\n/* vertical align top */\nnav.vertical ul li {\n  display: block;\n}\n/* vertical menu */\nnav.horizontal ul li {\n  display: inline-block;\n}\n/* horizontal menu */\nimg {\n  max-width: 100%;\n}\nh1 {\n  font-size: 3em;\n  text-align: center;\n  color: #fff;\n  font-weight: 100;\n  text-transform: capitalize;\n  letter-spacing: 4px;\n  font-family: \"Roboto\", sans-serif;\n}\n/*-- main --*/\n.main-w3layouts {\n  padding: 3em 0 1em;\n}\n.main-agileinfo {\n  width: 35%;\n  margin: 3em auto;\n  background: rgba(0, 0, 0, 0.18);\n  background-size: cover;\n}\n.agileits-top {\n  padding: 3em;\n}\ninput[type=text], input[type=email], input[type=password] {\n  font-size: 0.9em;\n  color: black;\n  font-weight: 100;\n  width: 94.5%;\n  display: block;\n  border: none;\n  padding: 0.8em;\n  border: solid 1px rgba(255, 255, 255, 0.37);\n  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #fff 4%);\n  background-position: -800px 0;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n}\ninput.email, input.text.w3lpass {\n  margin: 2em 0;\n}\n.text:focus, .text:valid {\n  box-shadow: none;\n  outline: none;\n  background-position: 0 0;\n}\n::-webkit-input-placeholder {\n  color: #fff;\n  font-weight: 100;\n}\n:-ms-input-placeholder {\n  color: #fff;\n}\n.changeColor {\n  font-size: 0.9em;\n  color: #fff;\n  outline: none;\n  cursor: pointer;\n  padding: 0.9em;\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 2em 0;\n  letter-spacing: 4px;\n}\n.agileits-top p {\n  font-size: 1em;\n  color: #fff;\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 300;\n}\n.agileits-top p a {\n  color: #fff;\n  transition: 0.5s all;\n  font-weight: 400;\n}\n.agileits-top p a:hover {\n  color: deeppink;\n}\n/*-- //main --*/\n/*-- checkbox --*/\n.wthree-text label {\n  font-size: 0.9em;\n  color: #fff;\n  font-weight: 200;\n  cursor: pointer;\n  position: relative;\n}\ninput.checkbox {\n  background: #8DC26F;\n  cursor: pointer;\n  width: 1.2em;\n  height: 1.2em;\n}\ninput.checkbox:before {\n  content: \"\";\n  position: absolute;\n  width: 1.2em;\n  height: 1.2em;\n  background: inherit;\n  cursor: pointer;\n}\ninput.checkbox:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: 1;\n  width: 1.2em;\n  height: 1.2em;\n  border: 1px solid #fff;\n  transition: 0.4s ease-in-out;\n}\ninput.checkbox:checked:after {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #fff;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.anim input.checkbox:checked:after {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: transparent;\n  border-right-color: transparent;\n  -webkit-animation: 0.4s rippling 0.4s ease;\n          animation: 0.4s rippling 0.4s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes rippling {\n  50% {\n    border-left-color: #fff;\n  }\n  100% {\n    border-bottom-color: #fff;\n    border-left-color: #fff;\n  }\n}\n@keyframes rippling {\n  50% {\n    border-left-color: #fff;\n  }\n  100% {\n    border-bottom-color: #fff;\n    border-left-color: #fff;\n  }\n}\n/*-- //checkbox --*/\n/*-- copyright --*/\n.colorlibcopy-agile {\n  margin: 2em 0 1em;\n  text-align: center;\n}\n.colorlibcopy-agile p {\n  font-size: 0.9em;\n  color: #fff;\n  line-height: 1.8em;\n  letter-spacing: 1px;\n  font-weight: 100;\n}\n.colorlibcopy-agile p a {\n  color: #fff;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n}\n.colorlibcopy-agile p a:hover {\n  color: #000;\n}\n/*-- //copyright --*/\n.wrapper {\n  position: relative;\n  overflow: hidden;\n}\n.colorlib-bubbles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n/*-- responsive-design --*/\n@media (max-width: 1440px) {\n  input[type=text], input[type=email], input[type=password] {\n    width: 94%;\n  }\n}\n@media (max-width: 1366px) {\n  h1 {\n    font-size: 2.6em;\n  }\n\n  .agileits-top {\n    padding: 2.5em;\n  }\n\n  .main-agileinfo {\n    margin: 2em auto;\n  }\n\n  .main-agileinfo {\n    width: 36%;\n  }\n}\n@media (max-width: 1280px) {\n  .main-agileinfo {\n    width: 40%;\n  }\n}\n@media (max-width: 1080px) {\n  .main-agileinfo {\n    width: 46%;\n  }\n}\n@media (max-width: 1024px) {\n  .main-agileinfo {\n    width: 49%;\n  }\n}\n@media (max-width: 991px) {\n  h1 {\n    font-size: 2.4em;\n  }\n\n  .main-w3layouts {\n    padding: 2em 0 1em;\n  }\n}\n@media (max-width: 900px) {\n  .main-agileinfo {\n    width: 58%;\n  }\n\n  input[type=text], input[type=email], input[type=password] {\n    width: 93%;\n  }\n}\n@media (max-width: 800px) {\n  h1 {\n    font-size: 2.2em;\n  }\n}\n@media (max-width: 736px) {\n  .main-agileinfo {\n    width: 62%;\n  }\n}\n@media (max-width: 667px) {\n  .main-agileinfo {\n    width: 67%;\n  }\n}\n@media (max-width: 600px) {\n  .agileits-top {\n    padding: 2.2em;\n  }\n\n  input.email, input.text.w3lpass {\n    margin: 1.5em 0;\n  }\n\n  input[type=submit] {\n    margin: 2em 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    letter-spacing: 3px;\n  }\n}\n@media (max-width: 568px) {\n  .main-agileinfo {\n    width: 75%;\n  }\n\n  .colorlibcopy-agile p {\n    padding: 0 2em;\n  }\n}\n@media (max-width: 480px) {\n  h1 {\n    font-size: 1.8em;\n    letter-spacing: 3px;\n  }\n\n  .agileits-top {\n    padding: 1.8em;\n  }\n\n  input[type=text], input[type=email], input[type=password] {\n    width: 91%;\n  }\n\n  .agileits-top p {\n    font-size: 0.9em;\n  }\n}\n@media (max-width: 414px) {\n  h1 {\n    font-size: 1.8em;\n    letter-spacing: 2px;\n  }\n\n  .main-agileinfo {\n    width: 85%;\n    margin: 1.5em auto;\n  }\n\n  .text:focus, .text:valid {\n    background-position: 0 0px;\n  }\n\n  .wthree-text ul li, .wthree-text ul li:nth-child(2) {\n    display: block;\n    float: none;\n  }\n\n  .wthree-text ul li:nth-child(2) {\n    margin-top: 1.5em;\n  }\n\n  input[type=submit] {\n    margin: 2em 0 1.5em;\n    letter-spacing: 3px;\n  }\n\n  input[type=submit] {\n    margin: 2em 0 1.5em;\n  }\n\n  .colorlibcopy-agile {\n    margin: 1em 0 1em;\n  }\n}\n@media (max-width: 384px) {\n  .main-agileinfo {\n    width: 88%;\n  }\n\n  .colorlibcopy-agile p {\n    padding: 0 1em;\n  }\n}\n@media (max-width: 375px) {\n  .agileits-top p {\n    letter-spacing: 0px;\n  }\n}\n@media (max-width: 320px) {\n  .main-w3layouts {\n    padding: 1.5em 0 0;\n  }\n\n  .agileits-top {\n    padding: 1.2em;\n  }\n\n  .colorlibcopy-agile {\n    margin: 0 0 1em;\n  }\n\n  input[type=text], input[type=email], input[type=password] {\n    width: 89.5%;\n    font-size: 0.85em;\n  }\n\n  h1 {\n    font-size: 1.7em;\n    letter-spacing: 0px;\n  }\n\n  .main-agileinfo {\n    width: 92%;\n    margin: 1em auto;\n  }\n\n  .text:focus, .text:valid {\n    background-position: 0 0px;\n  }\n\n  input[type=submit] {\n    margin: 1.5em 0;\n    padding: 0.8em;\n    font-size: 0.85em;\n  }\n\n  .colorlibcopy-agile p {\n    font-size: 0.85em;\n  }\n\n  .wthree-text label {\n    font-size: 0.85em;\n  }\n\n  .main-w3layouts {\n    padding: 1em 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLXNwb25zb3IvQzpcXFVzZXJzXFxyeW1vdVxcSWRlYVByb2plY3RzXFxsaW5rXFxGcm9udC9zcmNcXGFwcFxcc2lnbnVwLXNwb25zb3JcXHNpZ251cC1zcG9uc29yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAtc3BvbnNvci9zaWdudXAtc3BvbnNvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7R0FBQTtBQU1BLGNBQUE7QUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLGNBQUE7QUNFSjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0E7RUFDSSxZQUFBO0FDRUo7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDRUo7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBRENBO0VBQ0kscUJBQUE7QUNFSjtBRENBO0VBQ0ksaUJBQUE7QUNFSjtBREVBO0VBQ0ksZ0JBQUE7QUNDSjtBREVBLG9CQUFBO0FBQ0E7RUFDSSxrQkFBQTtBQ0NKO0FERUEsc0JBQUE7QUFDQTtFQUNJLFlBQUE7QUNDSjtBREVBLGdCQUFBO0FBQ0E7RUFDSSxXQUFBO0FDQ0o7QURFQSxlQUFBO0FBQ0E7RUFDSSxXQUFBO0FDQ0o7QURFQSxnQkFBQTtBQUNBO0VBQ0ksa0JBQUE7QUNDSjtBREVBLHNCQUFBO0FBQ0E7RUFDSSxrQkFBQTtBQ0NKO0FERUEsc0JBQUE7QUFDQTtFQUNJLHdCQUFBO0FDQ0o7QURFQSw0QkFBQTtBQUNBO0VBQ0ksbUJBQUE7QUNDSjtBREVBLHVCQUFBO0FBQ0E7RUFDSSxjQUFBO0FDQ0o7QURFQSxrQkFBQTtBQUNBO0VBQ0kscUJBQUE7QUNDSjtBREVBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0FDQ0o7QURJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQ0RKO0FESUEsYUFBQTtBQUNBO0VBQ0ksa0JBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBRUEsc0RBQUE7RUFFQSwyRUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ0RKO0FESUE7RUFDSSxhQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDREo7QURnQkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNiSjtBRGtCQTtFQUNJLFdBQUE7QUNmSjtBRGtCQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2pCSjtBRHNCQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksV0FBQTtFQUdBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNuQko7QURzQkE7RUFDSSxlQUFBO0FDbkJKO0FEc0JBLGVBQUE7QUFDQSxpQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQko7QURzQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ25CSjtBRHNCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDbkJKO0FEc0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUlBLDRCQUFBO0FDbkJKO0FEc0JBO0VBS0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDbkJKO0FEc0JBO0VBS0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDbkJKO0FEc0JBO0VBQ0k7SUFDSSx1QkFBQTtFQ25CTjtFRHNCRTtJQUNJLHlCQUFBO0lBQ0EsdUJBQUE7RUNwQk47QUFDRjtBRFlBO0VBQ0k7SUFDSSx1QkFBQTtFQ25CTjtFRHNCRTtJQUNJLHlCQUFBO0lBQ0EsdUJBQUE7RUNwQk47QUFDRjtBRHVCQSxtQkFBQTtBQUNBLGtCQUFBO0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDckJKO0FEd0JBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDckJKO0FEd0JBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNyQko7QUR3QkE7RUFDSSxXQUFBO0FDckJKO0FEd0JBLG9CQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDckJKO0FEd0JBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3JCSjtBRDBCQSwwQkFBQTtBQUNBO0VBQ0k7SUFDSSxVQUFBO0VDdkJOO0FBQ0Y7QUQwQkE7RUFDSTtJQUNJLGdCQUFBO0VDeEJOOztFRDJCRTtJQUNJLGNBQUE7RUN4Qk47O0VEMkJFO0lBQ0ksZ0JBQUE7RUN4Qk47O0VEMkJFO0lBQ0ksVUFBQTtFQ3hCTjtBQUNGO0FEMkJBO0VBQ0k7SUFDSSxVQUFBO0VDekJOO0FBQ0Y7QUQ0QkE7RUFDSTtJQUNJLFVBQUE7RUMxQk47QUFDRjtBRDZCQTtFQUNJO0lBQ0ksVUFBQTtFQzNCTjtBQUNGO0FEOEJBO0VBQ0k7SUFDSSxnQkFBQTtFQzVCTjs7RUQrQkU7SUFDSSxrQkFBQTtFQzVCTjtBQUNGO0FEK0JBO0VBQ0k7SUFDSSxVQUFBO0VDN0JOOztFRGdDRTtJQUNJLFVBQUE7RUM3Qk47QUFDRjtBRGdDQTtFQUNJO0lBQ0ksZ0JBQUE7RUM5Qk47QUFDRjtBRGlDQTtFQUNJO0lBQ0ksVUFBQTtFQy9CTjtBQUNGO0FEa0NBO0VBQ0k7SUFDSSxVQUFBO0VDaENOO0FBQ0Y7QURtQ0E7RUFDSTtJQUNJLGNBQUE7RUNqQ047O0VEb0NFO0lBQ0ksZUFBQTtFQ2pDTjs7RURvQ0U7SUFDSSxhQUFBO0VDakNOOztFRG9DRTtJQUNJLGNBQUE7SUFDQSxtQkFBQTtFQ2pDTjtBQUNGO0FEb0NBO0VBQ0k7SUFDSSxVQUFBO0VDbENOOztFRHFDRTtJQUNJLGNBQUE7RUNsQ047QUFDRjtBRHFDQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQ25DTjs7RURzQ0U7SUFDSSxjQUFBO0VDbkNOOztFRHNDRTtJQUNJLFVBQUE7RUNuQ047O0VEc0NFO0lBQ0ksZ0JBQUE7RUNuQ047QUFDRjtBRHNDQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQ3BDTjs7RUR1Q0U7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7RUNwQ047O0VEdUNFO0lBQ0ksMEJBQUE7RUNwQ047O0VEdUNFO0lBQ0ksY0FBQTtJQUNBLFdBQUE7RUNwQ047O0VEdUNFO0lBQ0ksaUJBQUE7RUNwQ047O0VEdUNFO0lBQ0ksbUJBQUE7SUFDQSxtQkFBQTtFQ3BDTjs7RUR1Q0U7SUFDSSxtQkFBQTtFQ3BDTjs7RUR1Q0U7SUFDSSxpQkFBQTtFQ3BDTjtBQUNGO0FEdUNBO0VBQ0k7SUFDSSxVQUFBO0VDckNOOztFRHdDRTtJQUNJLGNBQUE7RUNyQ047QUFDRjtBRHdDQTtFQUNJO0lBQ0ksbUJBQUE7RUN0Q047QUFDRjtBRHlDQTtFQUNJO0lBQ0ksa0JBQUE7RUN2Q047O0VEMENFO0lBQ0ksY0FBQTtFQ3ZDTjs7RUQwQ0U7SUFDSSxlQUFBO0VDdkNOOztFRDBDRTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtFQ3ZDTjs7RUQwQ0U7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VDdkNOOztFRDBDRTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQ3ZDTjs7RUQwQ0U7SUFDSSwwQkFBQTtFQ3ZDTjs7RUQwQ0U7SUFDSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDdkNOOztFRDBDRTtJQUNJLGlCQUFBO0VDdkNOOztFRDBDRTtJQUNJLGlCQUFBO0VDdkNOOztFRDBDRTtJQUNJLGdCQUFBO0VDdkNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtc3BvbnNvci9zaWdudXAtc3BvbnNvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKi0tXHJcbkF1dGhvcjogQ29sb3JsaWJcclxuQXV0aG9yIFVSTDogaHR0cHM6Ly9jb2xvcmxpYi5jb21cclxuTGljZW5zZTogQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbiAzLjAgVW5wb3J0ZWRcclxuTGljZW5zZSBVUkw6IGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC9cclxuLS0qL1xyXG4vKi0tIHJlc2V0IC0tKi9cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBkbCwgZHQsIGRkLCBvbCwgbmF2IHVsLCBuYXYgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4udGl0cmVDdXN0b217XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYWxpZ25tZW50OiBjZW50ZXI7XHJcbn1cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5vbCwgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLCBxIHtcclxuICAgIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY29udGVudDogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnR4dC1ydCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcbi50eHQtbHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogdGV4dCBhbGlnbiBsZWZ0ICovXHJcbi50eHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogdGV4dCBhbGlnbiBjZW50ZXIgKi9cclxuLmZsb2F0LXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLyogZmxvYXQgcmlnaHQgKi9cclxuLmZsb2F0LWx0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4vKiBmbG9hdCBsZWZ0ICovXHJcbi5jbGVhciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogY2xlYXIgZmxvYXQgKi9cclxuLnBvcy1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIFJlbGF0aXZlICovXHJcbi5wb3MtYWJzb2x1dGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiBBYnNvbHV0ZSAqL1xyXG4udmVydGljYWwtYmFzZSB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi8qIHZlcnRpY2FsIGFsaWduIGJhc2VsaW5lICovXHJcbi52ZXJ0aWNhbC10b3Age1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLyogdmVydGljYWwgYWxpZ24gdG9wICovXHJcbm5hdi52ZXJ0aWNhbCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogdmVydGljYWwgbWVudSAqL1xyXG5uYXYuaG9yaXpvbnRhbCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIGhvcml6b250YWwgbWVudSAqL1xyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKi0tIG1haW4gLS0qL1xyXG4ubWFpbi13M2xheW91dHMge1xyXG4gICAgcGFkZGluZzogM2VtIDAgMWVtO1xyXG59XHJcblxyXG4ubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIG1hcmdpbjogM2VtIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmFnaWxlaXRzLXRvcCB7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHdpZHRoOiA5NC41JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NCwgMC4wOSwgMC4wOCwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NCwgMC4wOSwgMC4wOCwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLCAjZmZmIDQlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLCAjZmZmIDQlKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MDBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pbnB1dC5lbWFpbCwgaW5wdXQudGV4dC53M2xwYXNzIHtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbn1cclxuXHJcbi50ZXh0OmZvY3VzLCAudGV4dDp2YWxpZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxufVxyXG5cclxuLy9cclxuLy8udGV4dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLnRleHQ6dmFsaWQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8vICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIC8vICBmb250LXNpemU6IC45ZW07XHJcbiAgLy8gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICAvLyAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIC8vICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIC8vICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICAvLyAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICAvLyAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIC8vfVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuXHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2hhbmdlQ29sb3Ige1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjllbTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmFnaWxlaXRzLXRvcCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmFnaWxlaXRzLXRvcCBwIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC41cyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmFnaWxlaXRzLXRvcCBwIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGRlZXBwaW5rO1xyXG59XHJcblxyXG4vKi0tIC8vbWFpbiAtLSovXHJcbi8qLS0gY2hlY2tib3ggLS0qL1xyXG4ud3RocmVlLXRleHQgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW5wdXQuY2hlY2tib3gge1xyXG4gICAgYmFja2dyb3VuZDogIzhEQzI2RjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxLjJlbTtcclxuICAgIGhlaWdodDogMS4yZW07XHJcbn1cclxuXHJcbmlucHV0LmNoZWNrYm94OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEuMmVtO1xyXG4gICAgaGVpZ2h0OiAxLjJlbTtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0LmNoZWNrYm94OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEuMmVtO1xyXG4gICAgaGVpZ2h0OiAxLjJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dC5jaGVja2JveDpjaGVja2VkOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICBoZWlnaHQ6IC41cmVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYW5pbSBpbnB1dC5jaGVja2JveDpjaGVja2VkOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICBoZWlnaHQ6IC41cmVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBhbmltYXRpb246IC40cyByaXBwbGluZyAuNHMgZWFzZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpcHBsaW5nIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLyotLSAvL2NoZWNrYm94IC0tKi9cclxuLyotLSBjb3B5cmlnaHQgLS0qL1xyXG4uY29sb3JsaWJjb3B5LWFnaWxlIHtcclxuICAgIG1hcmdpbjogMmVtIDAgMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sb3JsaWJjb3B5LWFnaWxlIHAge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmNvbG9ybGliY29weS1hZ2lsZSBwIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbi5jb2xvcmxpYmNvcHktYWdpbGUgcCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vKi0tIC8vY29weXJpZ2h0IC0tKi9cclxuLndyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbG9ybGliLWJ1YmJsZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLSByZXNwb25zaXZlLWRlc2lnbiAtLSovXHJcbkBtZWRpYShtYXgtd2lkdGg6MTQ0MHB4KSB7XHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTM2NnB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjZlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWdpbGVpdHMtdG9wIHtcclxuICAgICAgICBwYWRkaW5nOiAyLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogMzYlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwODBweCkge1xyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjRlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi13M2xheW91dHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDJlbSAwIDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5MDBweCkge1xyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogNTglO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICAgICAgd2lkdGg6IDkzJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzM2cHgpIHtcclxuICAgIC5tYWluLWFnaWxlaW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDYyJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo2NjdweCkge1xyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogNjclO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAuYWdpbGVpdHMtdG9wIHtcclxuICAgICAgICBwYWRkaW5nOiAyLjJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5lbWFpbCwgaW5wdXQudGV4dC53M2xwYXNzIHtcclxuICAgICAgICBtYXJnaW46IDEuNWVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgbWFyZ2luOiAyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NjhweCkge1xyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFnaWxlaXRzLXRvcCB7XHJcbiAgICAgICAgcGFkZGluZzogMS44ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgICAgICB3aWR0aDogOTElO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZ2lsZWl0cy10b3AgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0OmZvY3VzLCAudGV4dDp2YWxpZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnd0aHJlZS10ZXh0IHVsIGxpLCAud3RocmVlLXRleHQgdWwgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAud3RocmVlLXRleHQgdWwgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICBtYXJnaW46IDJlbSAwIDEuNWVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgbWFyZ2luOiAyZW0gMCAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sb3JsaWJjb3B5LWFnaWxlIHtcclxuICAgICAgICBtYXJnaW46IDFlbSAwIDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozODRweCkge1xyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogODglO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpIHtcclxuICAgIC5hZ2lsZWl0cy10b3AgcCB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozMjBweCkge1xyXG4gICAgLm1haW4tdzNsYXlvdXRzIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVlbSAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFnaWxlaXRzLXRvcCB7XHJcbiAgICAgICAgcGFkZGluZzogMS4yZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG9ybGliY29weS1hZ2lsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICAgICAgd2lkdGg6IDg5LjUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQ6Zm9jdXMsIC50ZXh0OnZhbGlkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICBtYXJnaW46IDEuNWVtIDA7XHJcbiAgICAgICAgcGFkZGluZzogMC44ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sb3JsaWJjb3B5LWFnaWxlIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnd0aHJlZS10ZXh0IGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi13M2xheW91dHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAwIDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLyotLVxuQXV0aG9yOiBDb2xvcmxpYlxuQXV0aG9yIFVSTDogaHR0cHM6Ly9jb2xvcmxpYi5jb21cbkxpY2Vuc2U6IENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gMy4wIFVucG9ydGVkXG5MaWNlbnNlIFVSTDogaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1xuLS0qL1xuLyotLSByZXNldCAtLSovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGRsLCBkdCwgZGQsIG9sLCBuYXYgdWwsIG5hdiBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4udGl0cmVDdXN0b20ge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGFsaWdubWVudDogY2VudGVyO1xufVxuXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnR4dC1ydCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udHh0LWx0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLyogdGV4dCBhbGlnbiBsZWZ0ICovXG4udHh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogdGV4dCBhbGlnbiBjZW50ZXIgKi9cbi5mbG9hdC1ydCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogZmxvYXQgcmlnaHQgKi9cbi5mbG9hdC1sdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4vKiBmbG9hdCBsZWZ0ICovXG4uY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogY2xlYXIgZmxvYXQgKi9cbi5wb3MtcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFBvc2l0aW9uIFJlbGF0aXZlICovXG4ucG9zLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4vKiBQb3NpdGlvbiBBYnNvbHV0ZSAqL1xuLnZlcnRpY2FsLWJhc2Uge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIHZlcnRpY2FsIGFsaWduIGJhc2VsaW5lICovXG4udmVydGljYWwtdG9wIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLyogdmVydGljYWwgYWxpZ24gdG9wICovXG5uYXYudmVydGljYWwgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogdmVydGljYWwgbWVudSAqL1xubmF2Lmhvcml6b250YWwgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIGhvcml6b250YWwgbWVudSAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qLS0gbWFpbiAtLSovXG4ubWFpbi13M2xheW91dHMge1xuICBwYWRkaW5nOiAzZW0gMCAxZW07XG59XG5cbi5tYWluLWFnaWxlaW5mbyB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbjogM2VtIGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hZ2lsZWl0cy10b3Age1xuICBwYWRkaW5nOiAzZW07XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgd2lkdGg6IDk0LjUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NCwgMC4wOSwgMC4wOCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY0LCAwLjA5LCAwLjA4LCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk2JSwgI2ZmZiA0JSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLCAjZmZmIDQlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwMHB4IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dC5lbWFpbCwgaW5wdXQudGV4dC53M2xwYXNzIHtcbiAgbWFyZ2luOiAyZW0gMDtcbn1cblxuLnRleHQ6Zm9jdXMsIC50ZXh0OnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2hhbmdlQ29sb3Ige1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjllbTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyZW0gMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cblxuLmFnaWxlaXRzLXRvcCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hZ2lsZWl0cy10b3AgcCBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYWdpbGVpdHMtdG9wIHAgYTpob3ZlciB7XG4gIGNvbG9yOiBkZWVwcGluaztcbn1cblxuLyotLSAvL21haW4gLS0qL1xuLyotLSBjaGVja2JveCAtLSovXG4ud3RocmVlLXRleHQgbGFiZWwge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0LmNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogIzhEQzI2RjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG59XG5cbmlucHV0LmNoZWNrYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0LmNoZWNrYm94OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXQuY2hlY2tib3g6Y2hlY2tlZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbmltIGlucHV0LmNoZWNrYm94OmNoZWNrZWQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGhlaWdodDogMC41cmVtO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IDAuNHMgcmlwcGxpbmcgMC40cyBlYXNlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyByaXBwbGluZyB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLyotLSAvL2NoZWNrYm94IC0tKi9cbi8qLS0gY29weXJpZ2h0IC0tKi9cbi5jb2xvcmxpYmNvcHktYWdpbGUge1xuICBtYXJnaW46IDJlbSAwIDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sb3JsaWJjb3B5LWFnaWxlIHAge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uY29sb3JsaWJjb3B5LWFnaWxlIHAgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW8tdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbn1cblxuLmNvbG9ybGliY29weS1hZ2lsZSBwIGE6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyotLSAvL2NvcHlyaWdodCAtLSovXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbG9ybGliLWJ1YmJsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi8qLS0gcmVzcG9uc2l2ZS1kZXNpZ24gLS0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiA5NCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi42ZW07XG4gIH1cblxuICAuYWdpbGVpdHMtdG9wIHtcbiAgICBwYWRkaW5nOiAyLjVlbTtcbiAgfVxuXG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgfVxuXG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDM2JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWFpbi1hZ2lsZWluZm8ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLm1haW4tYWdpbGVpbmZvIHtcbiAgICB3aWR0aDogNDYlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNGVtO1xuICB9XG5cbiAgLm1haW4tdzNsYXlvdXRzIHtcbiAgICBwYWRkaW5nOiAyZW0gMCAxZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubWFpbi1hZ2lsZWluZm8ge1xuICAgIHdpZHRoOiA1OCU7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDYyJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDY3JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hZ2lsZWl0cy10b3Age1xuICAgIHBhZGRpbmc6IDIuMmVtO1xuICB9XG5cbiAgaW5wdXQuZW1haWwsIGlucHV0LnRleHQudzNscGFzcyB7XG4gICAgbWFyZ2luOiAxLjVlbSAwO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBtYXJnaW46IDJlbSAwO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xuICAubWFpbi1hZ2lsZWluZm8ge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuICAuY29sb3JsaWJjb3B5LWFnaWxlIHAge1xuICAgIHBhZGRpbmc6IDAgMmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgfVxuXG4gIC5hZ2lsZWl0cy10b3Age1xuICAgIHBhZGRpbmc6IDEuOGVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogOTElO1xuICB9XG5cbiAgLmFnaWxlaXRzLXRvcCBwIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgfVxuXG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDEuNWVtIGF1dG87XG4gIH1cblxuICAudGV4dDpmb2N1cywgLnRleHQ6dmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICB9XG5cbiAgLnd0aHJlZS10ZXh0IHVsIGxpLCAud3RocmVlLXRleHQgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC53dGhyZWUtdGV4dCB1bCBsaTpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBtYXJnaW46IDJlbSAwIDEuNWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIG1hcmdpbjogMmVtIDAgMS41ZW07XG4gIH1cblxuICAuY29sb3JsaWJjb3B5LWFnaWxlIHtcbiAgICBtYXJnaW46IDFlbSAwIDFlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDg4JTtcbiAgfVxuXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XG4gICAgcGFkZGluZzogMCAxZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuYWdpbGVpdHMtdG9wIHAge1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAubWFpbi13M2xheW91dHMge1xuICAgIHBhZGRpbmc6IDEuNWVtIDAgMDtcbiAgfVxuXG4gIC5hZ2lsZWl0cy10b3Age1xuICAgIHBhZGRpbmc6IDEuMmVtO1xuICB9XG5cbiAgLmNvbG9ybGliY29weS1hZ2lsZSB7XG4gICAgbWFyZ2luOiAwIDAgMWVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogODkuNSU7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICB9XG5cbiAgLm1haW4tYWdpbGVpbmZvIHtcbiAgICB3aWR0aDogOTIlO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cblxuICAudGV4dDpmb2N1cywgLnRleHQ6dmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBtYXJnaW46IDEuNWVtIDA7XG4gICAgcGFkZGluZzogMC44ZW07XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gIH1cblxuICAuY29sb3JsaWJjb3B5LWFnaWxlIHAge1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICB9XG5cbiAgLnd0aHJlZS10ZXh0IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgfVxuXG4gIC5tYWluLXczbGF5b3V0cyB7XG4gICAgcGFkZGluZzogMWVtIDAgMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup-sponsor/signup-sponsor.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/signup-sponsor/signup-sponsor.component.ts ***!
    \************************************************************/

  /*! exports provided: SignupSponsorComponent */

  /***/
  function srcAppSignupSponsorSignupSponsorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSponsorComponent", function () {
      return SignupSponsorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/User */
    "./src/app/models/User.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_Sponsor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/Sponsor */
    "./src/app/models/Sponsor.ts");
    /* harmony import */


    var _services_sponsor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/sponsor.service */
    "./src/app/services/sponsor.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignupSponsorComponent = /*#__PURE__*/function () {
      // @Output()
      // public Login: EventEmitter<void> = new EventEmitter<void>();
      function SignupSponsorComponent(userService, sponsorService, router, loginService) {
        _classCallCheck(this, SignupSponsorComponent);

        this.userService = userService;
        this.sponsorService = sponsorService;
        this.router = router;
        this.loginService = loginService;
        this.test = new Date();
        this.valid = true;
        this.submitted = false;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.sponsor = new _models_Sponsor__WEBPACK_IMPORTED_MODULE_4__["Sponsor"]();
      }

      _createClass(SignupSponsorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formulaire) {
          var _this22 = this;

          console.log("testing");
          var pass = formulaire.controls['password'].value;
          var confirmPass = formulaire.controls['ConfirmPassword'].value;
          this.valid = pass == confirmPass;
          this.submitted = formulaire.valid && pass == confirmPass;
          if (!this.submitted) return; //User information

          this.user.UserName = formulaire.controls['sponsorName'].value;
          console.log(formulaire.controls['password'].value);
          this.user.email = formulaire.controls['sponsorEmail'].value;
          this.user.password = formulaire.controls['password'].value;
          this.user.role = 1
          /* Sponsor */
          ; //Sponsor information

          this.sponsor.name = formulaire.controls['sponsorName'].value;
          this.sponsor.activity = formulaire.controls['activity'].value;
          this.sponsor.city = formulaire.controls['city'].value;
          this.sponsor.country = formulaire.controls['country'].value;
          this.sponsor.slogan = formulaire.controls['slogan'].value;
          this.sponsor.image = "./assets/img/sponsors/default-profile-sponsor.jpg";
          this.sponsor.user = this.user;
          console.log(this.sponsor);
          this.sponsorService.addSponsor(this.sponsor).subscribe(function (res) {
            console.log("organization added");

            _this22.loginService.signUp(_this22.user).subscribe(function (result) {
              var token = result.body["token"];
              var obj = [{
                'token': token
              }, {
                'user': _this22.user.email
              }];
              localStorage.setItem('obj', JSON.stringify(obj));

              _this22.router.navigate(['/']);
            }, function (error) {
              return console.log(error);
            });
          }); //connection and redirection to home !!
        }
      }, {
        key: "reset",
        value: function reset(formulaire) {
          formulaire.resetForm();
        }
      }]);

      return SignupSponsorComponent;
    }();

    SignupSponsorComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_sponsor_service__WEBPACK_IMPORTED_MODULE_5__["SponsorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }];
    };

    SignupSponsorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-signup-sponsor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./signup-sponsor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-sponsor/signup-sponsor.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./signup-sponsor.component.scss */
      "./src/app/signup-sponsor/signup-sponsor.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_sponsor_service__WEBPACK_IMPORTED_MODULE_5__["SponsorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])], SignupSponsorComponent);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/signup/signup.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*--\nAuthor: Colorlib\nAuthor URL: https://colorlib.com\nLicense: Creative Commons Attribution 3.0 Unported\nLicense URL: http://creativecommons.org/licenses/by/3.0/\n--*/\n/*-- reset --*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, nav ul, nav li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n.titreCustom {\n  font-size: larger;\n  color: whitesmoke;\n  alignment: center;\n}\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\nol, ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  text-decoration: none;\n}\n.txt-rt {\n  text-align: right;\n}\n.txt-lt {\n  text-align: left;\n}\n/* text align left */\n.txt-center {\n  text-align: center;\n}\n/* text align center */\n.float-rt {\n  float: right;\n}\n/* float right */\n.float-lt {\n  float: left;\n}\n/* float left */\n.clear {\n  clear: both;\n}\n/* clear float */\n.pos-relative {\n  position: relative;\n}\n/* Position Relative */\n.pos-absolute {\n  position: absolute;\n}\n/* Position Absolute */\n.vertical-base {\n  vertical-align: baseline;\n}\n/* vertical align baseline */\n.vertical-top {\n  vertical-align: top;\n}\n/* vertical align top */\nnav.vertical ul li {\n  display: block;\n}\n/* vertical menu */\nnav.horizontal ul li {\n  display: inline-block;\n}\n/* horizontal menu */\nimg {\n  max-width: 100%;\n}\nh1 {\n  font-size: 3em;\n  text-align: center;\n  color: #fff;\n  font-weight: 100;\n  text-transform: capitalize;\n  letter-spacing: 4px;\n  font-family: \"Roboto\", sans-serif;\n}\n/*-- main --*/\n.main-w3layouts {\n  padding: 3em 0 1em;\n}\n.main-agileinfo {\n  width: 35%;\n  margin: 3em auto;\n  background: rgba(0, 0, 0, 0.18);\n  background-size: cover;\n}\n.agileits-top {\n  padding: 3em;\n}\ninput[type=text], input[type=email], input[type=password] {\n  font-size: 0.9em;\n  color: black;\n  font-weight: 100;\n  width: 94.5%;\n  display: block;\n  border: none;\n  padding: 0.8em;\n  border: solid 1px rgba(255, 255, 255, 0.37);\n  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #fff 4%);\n  background-position: -800px 0;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n}\ninput.text.w3lpass {\n  margin: 2em 0;\n}\n.text:focus, .text:valid {\n  box-shadow: none;\n  outline: none;\n  background-position: 0 0;\n}\n::-webkit-input-placeholder {\n  color: #fff;\n  font-weight: 100;\n}\n:-ms-input-placeholder {\n  color: #fff;\n}\n.changeColor {\n  font-size: 0.9em;\n  color: #fff;\n  outline: none;\n  cursor: pointer;\n  padding: 0.9em;\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 2em 0;\n  letter-spacing: 4px;\n}\n.agileits-top p {\n  font-size: 1em;\n  color: #fff;\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 300;\n}\n.agileits-top p a {\n  color: #fff;\n  transition: 0.5s all;\n  font-weight: 400;\n}\n.agileits-top p a:hover {\n  color: deeppink;\n}\n/*-- //main --*/\n/*-- checkbox --*/\n.wthree-text label {\n  font-size: 0.9em;\n  color: #fff;\n  font-weight: 200;\n  cursor: pointer;\n  position: relative;\n}\ninput.checkbox {\n  background: #8DC26F;\n  cursor: pointer;\n  width: 1.2em;\n  height: 1.2em;\n}\ninput.checkbox:before {\n  content: \"\";\n  position: absolute;\n  width: 1.2em;\n  height: 1.2em;\n  background: inherit;\n  cursor: pointer;\n}\ninput.checkbox:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: 1;\n  width: 1.2em;\n  height: 1.2em;\n  border: 1px solid #fff;\n  transition: 0.4s ease-in-out;\n}\ninput.checkbox:checked:after {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #fff;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.anim input.checkbox:checked:after {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: transparent;\n  border-right-color: transparent;\n  -webkit-animation: 0.4s rippling 0.4s ease;\n          animation: 0.4s rippling 0.4s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes rippling {\n  50% {\n    border-left-color: #fff;\n  }\n  100% {\n    border-bottom-color: #fff;\n    border-left-color: #fff;\n  }\n}\n@keyframes rippling {\n  50% {\n    border-left-color: #fff;\n  }\n  100% {\n    border-bottom-color: #fff;\n    border-left-color: #fff;\n  }\n}\n/*-- //checkbox --*/\n/*-- copyright --*/\n.colorlibcopy-agile {\n  margin: 2em 0 1em;\n  text-align: center;\n}\n.colorlibcopy-agile p {\n  font-size: 0.9em;\n  color: #fff;\n  line-height: 1.8em;\n  letter-spacing: 1px;\n  font-weight: 100;\n}\n.colorlibcopy-agile p a {\n  color: #fff;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n}\n.colorlibcopy-agile p a:hover {\n  color: #000;\n}\n/*-- //copyright --*/\n.wrapper {\n  position: relative;\n  overflow: hidden;\n}\n.colorlib-bubbles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n/*-- responsive-design --*/\n@media (max-width: 1440px) {\n  input[type=text], input[type=email], input[type=password] {\n    width: 94%;\n  }\n}\n@media (max-width: 1366px) {\n  h1 {\n    font-size: 2.6em;\n  }\n\n  .agileits-top {\n    padding: 2.5em;\n  }\n\n  .main-agileinfo {\n    margin: 2em auto;\n  }\n\n  .main-agileinfo {\n    width: 36%;\n  }\n}\n@media (max-width: 1280px) {\n  .main-agileinfo {\n    width: 40%;\n  }\n}\n@media (max-width: 1080px) {\n  .main-agileinfo {\n    width: 46%;\n  }\n}\n@media (max-width: 1024px) {\n  .main-agileinfo {\n    width: 49%;\n  }\n}\n@media (max-width: 991px) {\n  h1 {\n    font-size: 2.4em;\n  }\n\n  .main-w3layouts {\n    padding: 2em 0 1em;\n  }\n}\n@media (max-width: 900px) {\n  .main-agileinfo {\n    width: 58%;\n  }\n\n  input[type=text], input[type=email], input[type=password] {\n    width: 93%;\n  }\n}\n@media (max-width: 800px) {\n  h1 {\n    font-size: 2.2em;\n  }\n}\n@media (max-width: 736px) {\n  .main-agileinfo {\n    width: 62%;\n  }\n}\n@media (max-width: 667px) {\n  .main-agileinfo {\n    width: 67%;\n  }\n}\n@media (max-width: 600px) {\n  .agileits-top {\n    padding: 2.2em;\n  }\n\n  input.text.w3lpass {\n    margin: 1.5em 0;\n  }\n\n  input[type=submit] {\n    margin: 2em 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    letter-spacing: 3px;\n  }\n}\n@media (max-width: 568px) {\n  .main-agileinfo {\n    width: 75%;\n  }\n\n  .colorlibcopy-agile p {\n    padding: 0 2em;\n  }\n}\n@media (max-width: 480px) {\n  h1 {\n    font-size: 1.8em;\n    letter-spacing: 3px;\n  }\n\n  .agileits-top {\n    padding: 1.8em;\n  }\n\n  input[type=text], input[type=email], input[type=password] {\n    width: 91%;\n  }\n\n  .agileits-top p {\n    font-size: 0.9em;\n  }\n}\n@media (max-width: 414px) {\n  h1 {\n    font-size: 1.8em;\n    letter-spacing: 2px;\n  }\n\n  .main-agileinfo {\n    width: 85%;\n    margin: 1.5em auto;\n  }\n\n  .text:focus, .text:valid {\n    background-position: 0 0px;\n  }\n\n  .wthree-text ul li, .wthree-text ul li:nth-child(2) {\n    display: block;\n    float: none;\n  }\n\n  .wthree-text ul li:nth-child(2) {\n    margin-top: 1.5em;\n  }\n\n  input[type=submit] {\n    margin: 2em 0 1.5em;\n    letter-spacing: 3px;\n  }\n\n  input[type=submit] {\n    margin: 2em 0 1.5em;\n  }\n\n  .colorlibcopy-agile {\n    margin: 1em 0 1em;\n  }\n}\n@media (max-width: 384px) {\n  .main-agileinfo {\n    width: 88%;\n  }\n\n  .colorlibcopy-agile p {\n    padding: 0 1em;\n  }\n}\n@media (max-width: 375px) {\n  .agileits-top p {\n    letter-spacing: 0px;\n  }\n}\n@media (max-width: 320px) {\n  .main-w3layouts {\n    padding: 1.5em 0 0;\n  }\n\n  .agileits-top {\n    padding: 1.2em;\n  }\n\n  .colorlibcopy-agile {\n    margin: 0 0 1em;\n  }\n\n  input[type=text], input[type=email], input[type=password] {\n    width: 89.5%;\n    font-size: 0.85em;\n  }\n\n  h1 {\n    font-size: 1.7em;\n    letter-spacing: 0px;\n  }\n\n  .main-agileinfo {\n    width: 92%;\n    margin: 1em auto;\n  }\n\n  .text:focus, .text:valid {\n    background-position: 0 0px;\n  }\n\n  input[type=submit] {\n    margin: 1.5em 0;\n    padding: 0.8em;\n    font-size: 0.85em;\n  }\n\n  .colorlibcopy-agile p {\n    font-size: 0.85em;\n  }\n\n  .wthree-text label {\n    font-size: 0.85em;\n  }\n\n  .main-w3layouts {\n    padding: 1em 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xccnltb3VcXElkZWFQcm9qZWN0c1xcbGlua1xcRnJvbnQvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7OztHQUFBO0FBTUEsY0FBQTtBQUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FGO0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENBO0VBQ0UsY0FBQTtBQ0VGO0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7QURDQTtFQUNFLFlBQUE7QUNFRjtBRENBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNFRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0VGO0FEQ0E7RUFDRSxxQkFBQTtBQ0VGO0FEQ0E7RUFDRSxpQkFBQTtBQ0VGO0FERUE7RUFDRSxnQkFBQTtBQ0NGO0FERUEsb0JBQUE7QUFDQTtFQUNFLGtCQUFBO0FDQ0Y7QURFQSxzQkFBQTtBQUNBO0VBQ0UsWUFBQTtBQ0NGO0FERUEsZ0JBQUE7QUFDQTtFQUNFLFdBQUE7QUNDRjtBREVBLGVBQUE7QUFDQTtFQUNFLFdBQUE7QUNDRjtBREVBLGdCQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQ0NGO0FERUEsc0JBQUE7QUFDQTtFQUNFLGtCQUFBO0FDQ0Y7QURFQSxzQkFBQTtBQUNBO0VBQ0Usd0JBQUE7QUNDRjtBREVBLDRCQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0NGO0FERUEsdUJBQUE7QUFDQTtFQUNFLGNBQUE7QUNDRjtBREVBLGtCQUFBO0FBQ0E7RUFDRSxxQkFBQTtBQ0NGO0FERUEsb0JBQUE7QUFDQTtFQUNFLGVBQUE7QUNDRjtBRElBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FDREY7QURJQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFFQSxzREFBQTtFQUVBLDJFQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNERjtBRGdCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ2JGO0FEa0JBO0VBQ0UsV0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDakJGO0FEc0JBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNuQkY7QURzQkE7RUFDRSxXQUFBO0VBR0Esb0JBQUE7RUFDQSxnQkFBQTtBQ25CRjtBRHNCQTtFQUNFLGVBQUE7QUNuQkY7QURzQkEsZUFBQTtBQUNBLGlCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ25CRjtBRHNCQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDbkJGO0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNuQkY7QURzQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBSUEsNEJBQUE7QUNuQkY7QURzQkE7RUFLRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUNuQkY7QURzQkE7RUFLRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNuQkY7QURzQkE7RUFDRTtJQUNFLHVCQUFBO0VDbkJGO0VEc0JBO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQ3BCRjtBQUNGO0FEWUE7RUFDRTtJQUNFLHVCQUFBO0VDbkJGO0VEc0JBO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQ3BCRjtBQUNGO0FEdUJBLG1CQUFBO0FBQ0Esa0JBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7QUNyQkY7QUR3QkEsb0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDckJGO0FEMEJBLDBCQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7RUN2QkY7QUFDRjtBRDBCQTtFQUNFO0lBQ0UsZ0JBQUE7RUN4QkY7O0VEMkJBO0lBQ0UsY0FBQTtFQ3hCRjs7RUQyQkE7SUFDRSxnQkFBQTtFQ3hCRjs7RUQyQkE7SUFDRSxVQUFBO0VDeEJGO0FBQ0Y7QUQyQkE7RUFDRTtJQUNFLFVBQUE7RUN6QkY7QUFDRjtBRDRCQTtFQUNFO0lBQ0UsVUFBQTtFQzFCRjtBQUNGO0FENkJBO0VBQ0U7SUFDRSxVQUFBO0VDM0JGO0FBQ0Y7QUQ4QkE7RUFDRTtJQUNFLGdCQUFBO0VDNUJGOztFRCtCQTtJQUNFLGtCQUFBO0VDNUJGO0FBQ0Y7QUQrQkE7RUFDRTtJQUNFLFVBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsVUFBQTtFQzdCRjtBQUNGO0FEZ0NBO0VBQ0U7SUFDRSxnQkFBQTtFQzlCRjtBQUNGO0FEaUNBO0VBQ0U7SUFDRSxVQUFBO0VDL0JGO0FBQ0Y7QURrQ0E7RUFDRTtJQUNFLFVBQUE7RUNoQ0Y7QUFDRjtBRG1DQTtFQUNFO0lBQ0UsY0FBQTtFQ2pDRjs7RURvQ0E7SUFDRSxlQUFBO0VDakNGOztFRG9DQTtJQUNFLGFBQUE7RUNqQ0Y7O0VEb0NBO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VDakNGO0FBQ0Y7QURvQ0E7RUFDRTtJQUNFLFVBQUE7RUNsQ0Y7O0VEcUNBO0lBQ0UsY0FBQTtFQ2xDRjtBQUNGO0FEcUNBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDbkNGOztFRHNDQTtJQUNFLGNBQUE7RUNuQ0Y7O0VEc0NBO0lBQ0UsVUFBQTtFQ25DRjs7RURzQ0E7SUFDRSxnQkFBQTtFQ25DRjtBQUNGO0FEc0NBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDcENGOztFRHVDQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSwwQkFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxpQkFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0VDcENGOztFRHVDQTtJQUNFLG1CQUFBO0VDcENGOztFRHVDQTtJQUNFLGlCQUFBO0VDcENGO0FBQ0Y7QUR1Q0E7RUFDRTtJQUNFLFVBQUE7RUNyQ0Y7O0VEd0NBO0lBQ0UsY0FBQTtFQ3JDRjtBQUNGO0FEd0NBO0VBQ0U7SUFDRSxtQkFBQTtFQ3RDRjtBQUNGO0FEeUNBO0VBQ0U7SUFDRSxrQkFBQTtFQ3ZDRjs7RUQwQ0E7SUFDRSxjQUFBO0VDdkNGOztFRDBDQTtJQUNFLGVBQUE7RUN2Q0Y7O0VEMENBO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VDdkNGOztFRDBDQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUN2Q0Y7O0VEMENBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDdkNGOztFRDBDQTtJQUNFLDBCQUFBO0VDdkNGOztFRDBDQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUN2Q0Y7O0VEMENBO0lBQ0UsaUJBQUE7RUN2Q0Y7O0VEMENBO0lBQ0UsaUJBQUE7RUN2Q0Y7O0VEMENBO0lBQ0UsZ0JBQUE7RUN2Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyotLVxyXG5BdXRob3I6IENvbG9ybGliXHJcbkF1dGhvciBVUkw6IGh0dHBzOi8vY29sb3JsaWIuY29tXHJcbkxpY2Vuc2U6IENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gMy4wIFVucG9ydGVkXHJcbkxpY2Vuc2UgVVJMOiBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXHJcbi0tKi9cclxuLyotLSByZXNldCAtLSovXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgZGwsIGR0LCBkZCwgb2wsIG5hdiB1bCwgbmF2IGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLnRpdHJlQ3VzdG9te1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGFsaWdubWVudDogY2VudGVyO1xyXG59XHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm9sLCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsIHEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udHh0LXJ0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcbi50eHQtbHQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIHRleHQgYWxpZ24gbGVmdCAqL1xyXG4udHh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiB0ZXh0IGFsaWduIGNlbnRlciAqL1xyXG4uZmxvYXQtcnQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLyogZmxvYXQgcmlnaHQgKi9cclxuLmZsb2F0LWx0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLyogZmxvYXQgbGVmdCAqL1xyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBjbGVhciBmbG9hdCAqL1xyXG4ucG9zLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIFJlbGF0aXZlICovXHJcbi5wb3MtYWJzb2x1dGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gQWJzb2x1dGUgKi9cclxuLnZlcnRpY2FsLWJhc2Uge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLyogdmVydGljYWwgYWxpZ24gYmFzZWxpbmUgKi9cclxuLnZlcnRpY2FsLXRvcCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLyogdmVydGljYWwgYWxpZ24gdG9wICovXHJcbm5hdi52ZXJ0aWNhbCB1bCBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIHZlcnRpY2FsIG1lbnUgKi9cclxubmF2Lmhvcml6b250YWwgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogaG9yaXpvbnRhbCBtZW51ICovXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyotLSBtYWluIC0tKi9cclxuLm1haW4tdzNsYXlvdXRzIHtcclxuICBwYWRkaW5nOiAzZW0gMCAxZW07XHJcbn1cclxuXHJcbi5tYWluLWFnaWxlaW5mbyB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBtYXJnaW46IDNlbSBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmFnaWxlaXRzLXRvcCB7XHJcbiAgcGFkZGluZzogM2VtO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgd2lkdGg6IDk0LjUlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQsIDAuMDksIDAuMDgsIDEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY0LCAwLjA5LCAwLjA4LCAxKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLCAjZmZmIDQlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk2JSwgI2ZmZiA0JSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pbnB1dC50ZXh0LnczbHBhc3Mge1xyXG4gIG1hcmdpbjogMmVtIDA7XHJcbn1cclxuXHJcbi50ZXh0OmZvY3VzLCAudGV4dDp2YWxpZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxufVxyXG5cclxuLy9cclxuLy8udGV4dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLnRleHQ6dmFsaWQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4vLyAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuLy8gIGZvbnQtc2l6ZTogLjllbTtcclxuLy8gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuLy8gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuLy8gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbi8vICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuLy8gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbi8vICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbi8vfVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG5cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2hhbmdlQ29sb3Ige1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAuOWVtO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDJlbSAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmFnaWxlaXRzLXRvcCBwIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYWdpbGVpdHMtdG9wIHAgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5hZ2lsZWl0cy10b3AgcCBhOmhvdmVyIHtcclxuICBjb2xvcjogZGVlcHBpbms7XHJcbn1cclxuXHJcbi8qLS0gLy9tYWluIC0tKi9cclxuLyotLSBjaGVja2JveCAtLSovXHJcbi53dGhyZWUtdGV4dCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmlucHV0LmNoZWNrYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjOERDMjZGO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMS4yZW07XHJcbiAgaGVpZ2h0OiAxLjJlbTtcclxufVxyXG5cclxuaW5wdXQuY2hlY2tib3g6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMS4yZW07XHJcbiAgaGVpZ2h0OiAxLjJlbTtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQuY2hlY2tib3g6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMS4yZW07XHJcbiAgaGVpZ2h0OiAxLjJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjRzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IC40cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0LmNoZWNrYm94OmNoZWNrZWQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIGhlaWdodDogLjVyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hbmltIGlucHV0LmNoZWNrYm94OmNoZWNrZWQ6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIGhlaWdodDogLjVyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogLjRzIHJpcHBsaW5nIC40cyBlYXNlO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpcHBsaW5nIHtcclxuICA1MCUge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi8qLS0gLy9jaGVja2JveCAtLSovXHJcbi8qLS0gY29weXJpZ2h0IC0tKi9cclxuLmNvbG9ybGliY29weS1hZ2lsZSB7XHJcbiAgbWFyZ2luOiAyZW0gMCAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sb3JsaWJjb3B5LWFnaWxlIHAge1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uY29sb3JsaWJjb3B5LWFnaWxlIHAgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gIC1tcy10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG5cclxuLmNvbG9ybGliY29weS1hZ2lsZSBwIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vKi0tIC8vY29weXJpZ2h0IC0tKi9cclxuLndyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29sb3JsaWItYnViYmxlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcblxyXG4vKi0tIHJlc3BvbnNpdmUtZGVzaWduIC0tKi9cclxuQG1lZGlhKG1heC13aWR0aDoxNDQwcHgpIHtcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTM2NnB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjZlbTtcclxuICB9XHJcblxyXG4gIC5hZ2lsZWl0cy10b3Age1xyXG4gICAgcGFkZGluZzogMi41ZW07XHJcbiAgfVxyXG5cclxuICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICB9XHJcblxyXG4gIC5tYWluLWFnaWxlaW5mbyB7XHJcbiAgICB3aWR0aDogMzYlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTA4MHB4KSB7XHJcbiAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gIC5tYWluLWFnaWxlaW5mbyB7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbiAgfVxyXG5cclxuICAubWFpbi13M2xheW91dHMge1xyXG4gICAgcGFkZGluZzogMmVtIDAgMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5MDBweCkge1xyXG4gIC5tYWluLWFnaWxlaW5mbyB7XHJcbiAgICB3aWR0aDogNTglO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzM2cHgpIHtcclxuICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDYyJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NjY3cHgpIHtcclxuICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDY3JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAuYWdpbGVpdHMtdG9wIHtcclxuICAgIHBhZGRpbmc6IDIuMmVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQudGV4dC53M2xwYXNzIHtcclxuICAgIG1hcmdpbjogMS41ZW0gMDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NTY4cHgpIHtcclxuICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB9XHJcblxyXG4gIC5hZ2lsZWl0cy10b3Age1xyXG4gICAgcGFkZGluZzogMS44ZW07XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgd2lkdGg6IDkxJTtcclxuICB9XHJcblxyXG4gIC5hZ2lsZWl0cy10b3AgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tYWdpbGVpbmZvIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDEuNWVtIGF1dG87XHJcbiAgfVxyXG5cclxuICAudGV4dDpmb2N1cywgLnRleHQ6dmFsaWQge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XHJcbiAgfVxyXG5cclxuICAud3RocmVlLXRleHQgdWwgbGksIC53dGhyZWUtdGV4dCB1bCBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC53dGhyZWUtdGV4dCB1bCBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIG1hcmdpbjogMmVtIDAgMS41ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBtYXJnaW46IDJlbSAwIDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9ybGliY29weS1hZ2lsZSB7XHJcbiAgICBtYXJnaW46IDFlbSAwIDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6Mzg0cHgpIHtcclxuICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICB9XHJcblxyXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpIHtcclxuICAuYWdpbGVpdHMtdG9wIHAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAubWFpbi13M2xheW91dHMge1xyXG4gICAgcGFkZGluZzogMS41ZW0gMCAwO1xyXG4gIH1cclxuXHJcbiAgLmFnaWxlaXRzLXRvcCB7XHJcbiAgICBwYWRkaW5nOiAxLjJlbTtcclxuICB9XHJcblxyXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUge1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIHdpZHRoOiA4OS41JTtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgfVxyXG5cclxuICAudGV4dDpmb2N1cywgLnRleHQ6dmFsaWQge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIG1hcmdpbjogMS41ZW0gMDtcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgZm9udC1zaXplOiAuODVlbTtcclxuICB9XHJcblxyXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XHJcbiAgICBmb250LXNpemU6IC44NWVtO1xyXG4gIH1cclxuXHJcbiAgLnd0aHJlZS10ZXh0IGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdzNsYXlvdXRzIHtcclxuICAgIHBhZGRpbmc6IDFlbSAwIDA7XHJcbiAgfVxyXG59XHJcbiIsIi8qLS1cbkF1dGhvcjogQ29sb3JsaWJcbkF1dGhvciBVUkw6IGh0dHBzOi8vY29sb3JsaWIuY29tXG5MaWNlbnNlOiBDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIDMuMCBVbnBvcnRlZFxuTGljZW5zZSBVUkw6IGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC9cbi0tKi9cbi8qLS0gcmVzZXQgLS0qL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBkbCwgZHQsIGRkLCBvbCwgbmF2IHVsLCBuYXYgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLnRpdHJlQ3VzdG9tIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbn1cblxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50eHQtcnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnR4dC1sdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIHRleHQgYWxpZ24gbGVmdCAqL1xuLnR4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHRleHQgYWxpZ24gY2VudGVyICovXG4uZmxvYXQtcnQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi8qIGZsb2F0IHJpZ2h0ICovXG4uZmxvYXQtbHQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLyogZmxvYXQgbGVmdCAqL1xuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIGNsZWFyIGZsb2F0ICovXG4ucG9zLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBQb3NpdGlvbiBSZWxhdGl2ZSAqL1xuLnBvcy1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLyogUG9zaXRpb24gQWJzb2x1dGUgKi9cbi52ZXJ0aWNhbC1iYXNlIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiB2ZXJ0aWNhbCBhbGlnbiBiYXNlbGluZSAqL1xuLnZlcnRpY2FsLXRvcCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi8qIHZlcnRpY2FsIGFsaWduIHRvcCAqL1xubmF2LnZlcnRpY2FsIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIHZlcnRpY2FsIG1lbnUgKi9cbm5hdi5ob3Jpem9udGFsIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBob3Jpem9udGFsIG1lbnUgKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4vKi0tIG1haW4gLS0qL1xuLm1haW4tdzNsYXlvdXRzIHtcbiAgcGFkZGluZzogM2VtIDAgMWVtO1xufVxuXG4ubWFpbi1hZ2lsZWluZm8ge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW46IDNlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYWdpbGVpdHMtdG9wIHtcbiAgcGFkZGluZzogM2VtO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHdpZHRoOiA5NC41JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC44ZW07XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQsIDAuMDksIDAuMDgsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NCwgMC4wOSwgMC4wOCwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5NiUsICNmZmYgNCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk2JSwgI2ZmZiA0JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MDBweCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQudGV4dC53M2xwYXNzIHtcbiAgbWFyZ2luOiAyZW0gMDtcbn1cblxuLnRleHQ6Zm9jdXMsIC50ZXh0OnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2hhbmdlQ29sb3Ige1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjllbTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyZW0gMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cblxuLmFnaWxlaXRzLXRvcCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hZ2lsZWl0cy10b3AgcCBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYWdpbGVpdHMtdG9wIHAgYTpob3ZlciB7XG4gIGNvbG9yOiBkZWVwcGluaztcbn1cblxuLyotLSAvL21haW4gLS0qL1xuLyotLSBjaGVja2JveCAtLSovXG4ud3RocmVlLXRleHQgbGFiZWwge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0LmNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogIzhEQzI2RjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG59XG5cbmlucHV0LmNoZWNrYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0LmNoZWNrYm94OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXQuY2hlY2tib3g6Y2hlY2tlZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbmltIGlucHV0LmNoZWNrYm94OmNoZWNrZWQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGhlaWdodDogMC41cmVtO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IDAuNHMgcmlwcGxpbmcgMC40cyBlYXNlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyByaXBwbGluZyB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLyotLSAvL2NoZWNrYm94IC0tKi9cbi8qLS0gY29weXJpZ2h0IC0tKi9cbi5jb2xvcmxpYmNvcHktYWdpbGUge1xuICBtYXJnaW46IDJlbSAwIDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sb3JsaWJjb3B5LWFnaWxlIHAge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uY29sb3JsaWJjb3B5LWFnaWxlIHAgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW8tdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbn1cblxuLmNvbG9ybGliY29weS1hZ2lsZSBwIGE6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyotLSAvL2NvcHlyaWdodCAtLSovXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbG9ybGliLWJ1YmJsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi8qLS0gcmVzcG9uc2l2ZS1kZXNpZ24gLS0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiA5NCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi42ZW07XG4gIH1cblxuICAuYWdpbGVpdHMtdG9wIHtcbiAgICBwYWRkaW5nOiAyLjVlbTtcbiAgfVxuXG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgfVxuXG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDM2JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWFpbi1hZ2lsZWluZm8ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLm1haW4tYWdpbGVpbmZvIHtcbiAgICB3aWR0aDogNDYlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNGVtO1xuICB9XG5cbiAgLm1haW4tdzNsYXlvdXRzIHtcbiAgICBwYWRkaW5nOiAyZW0gMCAxZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubWFpbi1hZ2lsZWluZm8ge1xuICAgIHdpZHRoOiA1OCU7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDYyJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDY3JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hZ2lsZWl0cy10b3Age1xuICAgIHBhZGRpbmc6IDIuMmVtO1xuICB9XG5cbiAgaW5wdXQudGV4dC53M2xwYXNzIHtcbiAgICBtYXJnaW46IDEuNWVtIDA7XG4gIH1cblxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIG1hcmdpbjogMmVtIDA7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5tYWluLWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XG4gICAgcGFkZGluZzogMCAyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB9XG5cbiAgLmFnaWxlaXRzLXRvcCB7XG4gICAgcGFkZGluZzogMS44ZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiA5MSU7XG4gIH1cblxuICAuYWdpbGVpdHMtdG9wIHAge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG5cbiAgLm1haW4tYWdpbGVpbmZvIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgfVxuXG4gIC50ZXh0OmZvY3VzLCAudGV4dDp2YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIH1cblxuICAud3RocmVlLXRleHQgdWwgbGksIC53dGhyZWUtdGV4dCB1bCBsaTpudGgtY2hpbGQoMikge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgLnd0aHJlZS10ZXh0IHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIG1hcmdpbjogMmVtIDAgMS41ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgbWFyZ2luOiAyZW0gMCAxLjVlbTtcbiAgfVxuXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUge1xuICAgIG1hcmdpbjogMWVtIDAgMWVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgLm1haW4tYWdpbGVpbmZvIHtcbiAgICB3aWR0aDogODglO1xuICB9XG5cbiAgLmNvbG9ybGliY29weS1hZ2lsZSBwIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5hZ2lsZWl0cy10b3AgcCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5tYWluLXczbGF5b3V0cyB7XG4gICAgcGFkZGluZzogMS41ZW0gMCAwO1xuICB9XG5cbiAgLmFnaWxlaXRzLXRvcCB7XG4gICAgcGFkZGluZzogMS4yZW07XG4gIH1cblxuICAuY29sb3JsaWJjb3B5LWFnaWxlIHtcbiAgICBtYXJnaW46IDAgMCAxZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiA4OS41JTtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIH1cblxuICAubWFpbi1hZ2lsZWluZm8ge1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgfVxuXG4gIC50ZXh0OmZvY3VzLCAudGV4dDp2YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICBwYWRkaW5nOiAwLjhlbTtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgfVxuXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUgcCB7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gIH1cblxuICAud3RocmVlLXRleHQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICB9XG5cbiAgLm1haW4tdzNsYXlvdXRzIHtcbiAgICBwYWRkaW5nOiAxZW0gMCAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/User */
    "./src/app/models/User.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_organization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/organization */
    "./src/app/models/organization.ts");
    /* harmony import */


    var _services_organization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignupComponent = /*#__PURE__*/function () {
      // @Output()
      // public Login: EventEmitter<void> = new EventEmitter<void>();
      function SignupComponent(activatedRoute, userService, router, organizationService, loginService) {
        _classCallCheck(this, SignupComponent);

        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.organizationService = organizationService;
        this.loginService = loginService;
        this.test = new Date();
        this.valid = true;
        this.submitted = false;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.organization = new _models_organization__WEBPACK_IMPORTED_MODULE_4__["Organization"]();
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formulaire) {
          var _this23 = this;

          var pass = formulaire.controls['password'].value;
          var confirmPass = formulaire.controls['ConfirmPassword'].value;
          this.valid = pass == confirmPass;
          this.submitted = formulaire.valid && pass == confirmPass;
          if (!this.submitted) return;
          this.user.UserName = formulaire.controls['organizationName'].value;
          console.log(formulaire.controls['password'].value);
          this.user.email = formulaire.controls['organizationEmail'].value;
          this.user.password = formulaire.controls['password'].value;
          this.user.role = 2
          /* Organization */
          ;
          console.log(this.user);
          this.organization.name = formulaire.controls['organizationName'].value;
          this.organization.matricule = formulaire.controls['organizationRegistrationNumber'].value;
          this.organization.activity = formulaire.controls['organizationDomain'].value;
          this.organization.city = formulaire.controls['organizationCity'].value;
          this.organization.country = formulaire.controls['organizationCountry'].value;
          this.organization.slogan = formulaire.controls['organizationSlogan'].value;
          this.organization.image = "./assets/img/icons/common/organizer.png";
          this.organization.user = this.user;
          console.log(this.organization);
          this.organizationService.create(this.organization).subscribe(function (res) {
            console.log("organization added");

            _this23.loginService.signUp(_this23.user).subscribe(function (result) {
              var token = result.body["token"];
              var obj = [{
                'token': token
              }, {
                'user': _this23.user.email
              }];
              localStorage.setItem('obj', JSON.stringify(obj));

              _this23.router.navigate(['/']);
            }, function (error) {
              return console.log(error);
            });
          });
        }
      }, {
        key: "reset",
        value: function reset(formulaire) {
          formulaire.resetForm();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_organization_service__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }];
    };

    SignupComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-signup',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/signup/signup.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_organization_service__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"], _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/sponsor-manage-profile/sponsor-manage-profile.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/sponsor-manage-profile/sponsor-manage-profile.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSponsorManageProfileSponsorManageProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3ItbWFuYWdlLXByb2ZpbGUvc3BvbnNvci1tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sponsor-manage-profile/sponsor-manage-profile.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/sponsor-manage-profile/sponsor-manage-profile.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SponsorManageProfileComponent */

  /***/
  function srcAppSponsorManageProfileSponsorManageProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorManageProfileComponent", function () {
      return SponsorManageProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_Sponsor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/Sponsor */
    "./src/app/models/Sponsor.ts");
    /* harmony import */


    var _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/sponsor.service */
    "./src/app/services/sponsor.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SponsorManageProfileComponent = /*#__PURE__*/function () {
      function SponsorManageProfileComponent(sponsorService, loginService, http, router) {
        _classCallCheck(this, SponsorManageProfileComponent);

        this.sponsorService = sponsorService;
        this.loginService = loginService;
        this.http = http;
        this.router = router;
        this.sponsor = new _models_Sponsor__WEBPACK_IMPORTED_MODULE_1__["Sponsor"]();
        this.loggedSponsor = new _models_Sponsor__WEBPACK_IMPORTED_MODULE_1__["Sponsor"]();
        this.flag = false;
      }

      _createClass(SponsorManageProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.loginService.getCurrentUser().subscribe(function (user) {
            _this24.sponsorService.getSponsorByUserId(user.body.id).subscribe(function (res) {
              _this24.loggedSponsor = res;

              _this24.sponsorService.getSponsor(_this24.loggedSponsor.id).subscribe(function (sponsor) {
                return _this24.sponsor = sponsor;
              });
            });
          });
        }
      }, {
        key: "selectImage",
        value: function selectImage(event) {
          this.flag = true;

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.image_file = file;
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this25 = this;

          if (this.flag) {
            var formData = new FormData();
            formData.append('file', this.image_file);
            this.http.post('http://localhost:3000/file', formData).subscribe(function (res) {
              _this25.image_name = res.name;

              _this25.save();
            }, function (err) {
              return console.log(err);
            });
          } else {
            this.save();
          }
        }
      }, {
        key: "save",
        value: function save() {
          this.sponsor.image = this.image_name;
          this.sponsorService.updateSponsor(this.sponsor).subscribe(function (res) {
            console.log("sponsor updated", res);
          });
          this.router.navigate(['/sponsor-details', this.sponsor.id]).then(function (e) {
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
        }
      }]);

      return SponsorManageProfileComponent;
    }();

    SponsorManageProfileComponent.ctorParameters = function () {
      return [{
        type: _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SponsorManageProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sponsor-manage-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sponsor-manage-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsor-manage-profile/sponsor-manage-profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sponsor-manage-profile.component.css */
      "./src/app/sponsor-manage-profile/sponsor-manage-profile.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], SponsorManageProfileComponent);
    /***/
  },

  /***/
  "./src/app/sponsor-profile/sponsor-profile.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/sponsor-profile/sponsor-profile.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSponsorProfileSponsorProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#profile-details{\r\n    padding: 4rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNvci1wcm9maWxlL3Nwb25zb3ItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3ItcHJvZmlsZS9zcG9uc29yLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlLWRldGFpbHN7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sponsor-profile/sponsor-profile.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/sponsor-profile/sponsor-profile.component.ts ***!
    \**************************************************************/

  /*! exports provided: SponsorProfileComponent */

  /***/
  function srcAppSponsorProfileSponsorProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorProfileComponent", function () {
      return SponsorProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_Sponsor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/Sponsor */
    "./src/app/models/Sponsor.ts");
    /* harmony import */


    var _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/sponsor.service */
    "./src/app/services/sponsor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SponsorProfileComponent = /*#__PURE__*/function () {
      function SponsorProfileComponent(sponsorService, route, loginService, http, sanitizer, router) {
        _classCallCheck(this, SponsorProfileComponent);

        this.sponsorService = sponsorService;
        this.route = route;
        this.loginService = loginService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.router = router;
        this.sponsor = new _models_Sponsor__WEBPACK_IMPORTED_MODULE_1__["Sponsor"]();
        this.loggedSponsor = new _models_Sponsor__WEBPACK_IMPORTED_MODULE_1__["Sponsor"]();
      }

      _createClass(SponsorProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.route.params.subscribe(function (params) {
            _this26.sponsorService.getSponsor(params.id).subscribe(function (sponsor) {
              _this26.sponsor = sponsor;

              _this26.loginService.getCurrentUser().subscribe(function (user) {
                _this26.sponsorService.getSponsorByUserId(user.body.id).subscribe(function (res) {
                  _this26.loggedSponsor = res;
                  console.log(_this26.loggedSponsor);

                  if (_this26.loggedSponsor.id == _this26.sponsor.id) {
                    _this26.isCurrentUser = true;
                    console.log(_this26.isCurrentUser);
                  } else {
                    _this26.isCurrentUser = false;
                  }
                });
              });

              _this26.getImage(_this26.sponsor);
            });
          });
        }
      }, {
        key: "getImage",
        value: function getImage(sponsor) {
          var _this27 = this;

          this.http.get("http://localhost:3000/download/" + sponsor.image, {
            responseType: "blob"
          }).toPromise().then(function (blob) {
            _this27.imageUrl = URL.createObjectURL(blob);
            sponsor.image = _this27.sanitizer.bypassSecurityTrustResourceUrl(_this27.imageUrl);
          })["catch"](function (err) {
            return console.error("download error = ", err);
          });
        }
      }, {
        key: "deleteMyself",
        value: function deleteMyself() {
          var _this28 = this;

          this.loginService.getCurrentUser().subscribe(function (user) {
            _this28.sponsorService.deleteSponsor(user.body.id).subscribe(function (res) {
              _this28.router.navigate(['home']);

              _this28.loginService.logout();
            });
          });
        }
      }]);

      return SponsorProfileComponent;
    }();

    SponsorProfileComponent.ctorParameters = function () {
      return [{
        type: _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SponsorProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sponsor-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sponsor-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsor-profile/sponsor-profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sponsor-profile.component.css */
      "./src/app/sponsor-profile/sponsor-profile.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SponsorProfileComponent);
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.component.css":
  /*!*************************************************!*\
    !*** ./src/app/sponsors/sponsors.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSponsorsSponsorsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.component.ts":
  /*!************************************************!*\
    !*** ./src/app/sponsors/sponsors.component.ts ***!
    \************************************************/

  /*! exports provided: SponsorsComponent */

  /***/
  function srcAppSponsorsSponsorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function () {
      return SponsorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_sponsor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/sponsor.service */
    "./src/app/services/sponsor.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SponsorsComponent = /*#__PURE__*/function () {
      function SponsorsComponent(sponsorService) {
        _classCallCheck(this, SponsorsComponent);

        this.sponsorService = sponsorService;
      }

      _createClass(SponsorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.sponsorService.getSponsors().subscribe(function (sponsors) {
            console.log(sponsors);
            _this29.sponsors = sponsors;
          });
        }
      }]);

      return SponsorsComponent;
    }();

    SponsorsComponent.ctorParameters = function () {
      return [{
        type: _services_sponsor_service__WEBPACK_IMPORTED_MODULE_1__["SponsorService"]
      }];
    };

    SponsorsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sponsors',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sponsors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sponsors.component.css */
      "./src/app/sponsors/sponsors.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_sponsor_service__WEBPACK_IMPORTED_MODULE_1__["SponsorService"]])], SponsorsComponent);
    /***/
  },

  /***/
  "./src/app/stripe-card/stripe-card.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/stripe-card/stripe-card.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStripeCardStripeCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZS1jYXJkL3N0cmlwZS1jYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/stripe-card/stripe-card.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/stripe-card/stripe-card.component.ts ***!
    \******************************************************/

  /*! exports provided: StripeCardComponent */

  /***/
  function srcAppStripeCardStripeCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripeCardComponent", function () {
      return StripeCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var StripeCardComponent = /*#__PURE__*/function () {
      function StripeCardComponent() {
        _classCallCheck(this, StripeCardComponent);
      }

      _createClass(StripeCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StripeCardComponent;
    }();

    StripeCardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-stripe-card',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./stripe-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stripe-card/stripe-card.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./stripe-card.component.css */
      "./src/app/stripe-card/stripe-card.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], StripeCardComponent);
    /***/
  },

  /***/
  "./src/app/top-sponsors/top-sponsors.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/top-sponsors/top-sponsors.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopSponsorsTopSponsorsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img{\r\n    max-height: 350px;\r\n    width: 700px;\r\n    height: 350px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLXNwb25zb3JzL3RvcC1zcG9uc29ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdG9wLXNwb25zb3JzL3RvcC1zcG9uc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/top-sponsors/top-sponsors.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/top-sponsors/top-sponsors.component.ts ***!
    \********************************************************/

  /*! exports provided: TopSponsorsComponent */

  /***/
  function srcAppTopSponsorsTopSponsorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopSponsorsComponent", function () {
      return TopSponsorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Sponsor = function Sponsor() {
      _classCallCheck(this, Sponsor);
    };

    var TopSponsorsComponent = /*#__PURE__*/function () {
      function TopSponsorsComponent(config) {
        _classCallCheck(this, TopSponsorsComponent);

        this.top_sponsors = [{
          id: 1,
          name: 'Amazon',
          image: 'https://www.pocketpc.ch/magazin/wp-content/uploads/2017/07/td-amazon-smile-logo-01-large.jpg',
          slogan: 'Work hard. Have fun. Make history.',
          description: 'It\'s meant to signify a company which is aspirational and enjoyable - but where the staff are still pulling their weight.'
        }, {
          id: 2,
          name: '',
          image: './assets/img/sponsors/samsung-logo.jpg',
          slogan: 'Imagine',
          description: 'From one perspective, it simply means, "Imagine the amazing things we can build." That\'s a pretty strong message for a company that already makes everything from refrigerators to smartphones to TVs.'
        }]; // customize default values of carousels used by this component tree

        config.interval = 2000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = true;
        config.wrap = true;
        config.showNavigationIndicators = false;
        this.slogan = this.top_sponsors[0].slogan;
        this.description = this.top_sponsors[0].description;
        this.index = 0;
      }

      _createClass(TopSponsorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "print",
        value: function print(event) {
          this.index = this.index + 1;
          this.slogan = this.top_sponsors[this.index % this.top_sponsors.length].slogan;
          this.description = this.top_sponsors[this.index % this.top_sponsors.length].description;
          console.log("current", event.current);
        }
      }]);

      return TopSponsorsComponent;
    }();

    TopSponsorsComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
      }];
    };

    TopSponsorsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-top-sponsors',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./top-sponsors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top-sponsors/top-sponsors.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./top-sponsors.component.css */
      "./src/app/top-sponsors/top-sponsors.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])], TopSponsorsComponent);
    /***/
  },

  /***/
  "./src/app/upcoming-event/upcoming-event.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/upcoming-event/upcoming-event.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpcomingEventUpcomingEventComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwY29taW5nLWV2ZW50L3VwY29taW5nLWV2ZW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/upcoming-event/upcoming-event.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/upcoming-event/upcoming-event.component.ts ***!
    \************************************************************/

  /*! exports provided: UpcomingEventComponent */

  /***/
  function srcAppUpcomingEventUpcomingEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpcomingEventComponent", function () {
      return UpcomingEventComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UpcomingEventComponent = /*#__PURE__*/function () {
      function UpcomingEventComponent() {
        _classCallCheck(this, UpcomingEventComponent);

        this.title = "Back To school";
        this.description = "Argon is a great free UI package based on Angular that includes the most important components and features.";
        this.eventPhoto = "./assets/img/theme/img-1-1200x1000.jpg";
      }

      _createClass(UpcomingEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpcomingEventComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], UpcomingEventComponent.prototype, "title", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], UpcomingEventComponent.prototype, "description", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], UpcomingEventComponent.prototype, "eventPhoto", void 0);

    UpcomingEventComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-upcoming-event',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./upcoming-event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming-event/upcoming-event.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./upcoming-event.component.css */
      "./src/app/upcoming-event/upcoming-event.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], UpcomingEventComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /*!
    
    =========================================================
    * Argon Design System Angular - v1.0.0
    =========================================================
    
    * Product Page: https://www.creative-tim.com/product/argon-design-system-angular
    * Copyright 2019 Creative Tim (https://www.creative-tim.com)
    * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)
    
    * Coded by Creative Tim
    
    =========================================================
    
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\rymou\IdeaProjects\link\Front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map