webpackJsonp([1,4],{

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 127;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(142);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__category_category_component__["a" /* CategoryComponent */] },
    { path: 'articles/:id', component: __WEBPACK_IMPORTED_MODULE_2__article_article_component__["a" /* ArticleComponent */] },
    { path: 'categories/:id', component: __WEBPACK_IMPORTED_MODULE_3__category_category_component__["a" /* CategoryComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.isShowOnPage = true;
    }
    AppComponent.prototype.changeLeftbarState = function () {
        this.isShowOnPage = (this.isShowOnPage) ? false : true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(235),
        styles: [__webpack_require__(204)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__site_header_site_header_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_leftbar_site_leftbar_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__site_content_site_content_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__category_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__article_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__site_site_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__article_article_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__category_category_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__site_header_site_header_component__["a" /* SiteHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__site_leftbar_site_leftbar_component__["a" /* SiteLeftbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__site_content_site_content_component__["a" /* SiteContentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__site_site_component__["a" /* SiteComponent */],
            __WEBPACK_IMPORTED_MODULE_13__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__category_category_component__["a" /* CategoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_10__article_service__["a" /* ArticleService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteContentComponent = (function () {
    function SiteContentComponent() {
    }
    SiteContentComponent.prototype.ngOnInit = function () {
    };
    return SiteContentComponent;
}());
SiteContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-site-content',
        template: __webpack_require__(238),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [])
], SiteContentComponent);

//# sourceMappingURL=site-content.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteHeaderComponent = (function () {
    function SiteHeaderComponent() {
        this.toggleLeftbarRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent.prototype.toggleLeftBar = function () {
        this.toggleLeftbarRequest.emit(null);
    };
    return SiteHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], SiteHeaderComponent.prototype, "toggleLeftbarRequest", void 0);
SiteHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-site-header',
        template: __webpack_require__(239),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [])
], SiteHeaderComponent);

var _a;
//# sourceMappingURL=site-header.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteLeftbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteLeftbarComponent = (function () {
    /*
    categories: Category[] = [
      {
          id: 1,
          name: '前端技術'
      },
      {
          id: 2,
          name: '美食旅遊'
      },
      {
          id: 3,
          name: '關注健康'
      },
      {
          id: 4,
          name: '閱讀計畫'
      },
      {
          id: 5,
          name: '生活小語'
      }
    ]
    */
    function SiteLeftbarComponent(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
    }
    SiteLeftbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (categories) { return _this.categories = categories; });
    };
    SiteLeftbarComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
    };
    return SiteLeftbarComponent;
}());
SiteLeftbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-site-leftbar',
        template: __webpack_require__(240),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], SiteLeftbarComponent);

var _a;
//# sourceMappingURL=site-leftbar.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteComponent = (function () {
    function SiteComponent() {
        this.isShowOnPage = true;
    }
    SiteComponent.prototype.ngOnInit = function () {
    };
    SiteComponent.prototype.changeLeftbarState = function () {
        this.isShowOnPage = (this.isShowOnPage) ? false : true;
    };
    return SiteComponent;
}());
SiteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-site',
        template: __webpack_require__(241),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [])
], SiteComponent);

//# sourceMappingURL=site.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#site-body {\n\t//height: 1000px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#site-leftbar {\n  height: initial;\n  width: 300px;\n  background: rgba(8, 8, 8, 0.73);\n  display: none;\n}\n\n#site-leftbar.show {\n  display: block;\n}\n\n#site-content {\n  width: 100%;\n  background: rgba(128, 128, 128, 0.17);\n  padding: 20px;\n}\n\n#site-content {\n  width:100%;\n  padding:20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".paragraph {\n  height: 300px;\n  overflow: hidden;\n  margin-bottom: 7px;\n}\n\nhr {\n  height: 2px;\n  border: 0;\n  box-shadow: 0 10px 10px -10px #082508 inset;\n}\n\n#content-outer {\n  padding: 20px;\n}\n\n.openArticleBtn {\n  background: #983a3b;\n  color: white;\n  border-style: none;\n  height: 30px;\n  width: 75px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#site-header {\n\theight: 60px;\n    background: #607D8B;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.title {\n\tfont-size: 2em;\n    font-family: Arial,Microsoft JhengHei,Open Sans,sans-serif;\n    line-height: 60px;\n    color: white;\n}\n\n.leftbar-toggle {\n\twidth: 35px;\n    background: #FFEB3B;\n    line-height: 60px;\n    margin: 10px;\n    border-radius: 0.6em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#introduction-block {\n  background-color: #4b4b4b;\n  height: 180px;\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 10px;\n}\n\nul.categories {\n  margin: 0;\n  padding-left: 0px;\n}\n\nul.categories > li {\n  list-style: none;\n  color: white;\n  width: 100%;\n  line-height: 40px;\n  font-size: 15pt;\n  font-family: Arial,Microsoft JhengHei,Open Sans,sans-serif;\n  border-bottom-style: solid;\n  background: #443838;\n  border-bottom-width: 1px;\n}\n\nul.categories > li.selected {\n  background: #983a3b;\n}\n\nul.categories > li:hover {\n  background-color: rgba(221, 221, 221, 0.47);\n}\n\nul.categories > li > a {\n  display: block;\n  color: white;\n  text-decoration: none;\n  text-align: center;\n}\n\n.introductionImg-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 5px;\n}\n\n.introductionImg {\n  width: 90px;\n  height: 90px;\n}\n\n.introductionText {\n  color: white;\n  padding-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  font-family: Arial,Microsoft JhengHei,Open Sans,sans-serif;\n  font-size: 12pt;\n}\n\n.last-aritcles-title {\n    color: white;\n    margin-top: 30px;\n    display: block;\n    font-size: 15pt;\n    border-bottom-style: solid;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#site-body {\n  height: 1000px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#site-leftbar {\n  height: 100%;\n  width: 300px;\n  background: rgba(8, 8, 8, 0.73);\n  display: none;\n}\n\n#site-leftbar.show {\n  display: block;\n}\n\n#site-content {\n  width: 100%;\n  background: rgba(128, 128, 128, 0.17);\n  padding: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<app-site-header (toggleLeftbarRequest)='changeLeftbarState()'></app-site-header>\n\t<div id='site-body'>\n\t\t<app-site-leftbar id='site-leftbar'\n                      [class.show]='isShowOnPage'>\n    </app-site-leftbar>\n    <div id='site-content'>\n      <router-outlet></router-outlet>\n    </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div>\n<markdown path='{{basePath}}/{{article.filename}}'></markdown>  \n</div>\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let article of articles\">\n  <div class='paragraph' >\n    <markdown path='{{articleBasePath}}/{{article.filename}}'></markdown>\n  </div>\n  <button class='openArticleBtn' (click)=\"openArticle(article)\">展開文章</button>\n  <hr />\n</div>\n\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<markdown path='assets/contents/example.md'></markdown>"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div id='site-header'>\n\t<div class='leftbar-toggle'\n    (click)=\"toggleLeftBar()\"></div>\n\t<span class='title'>雞平方</span>\n</div>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div id='introduction-block'>\n  <div class='introductionImg-block'>\n    <img class='introductionImg' src='assets/images/head-img.jpg'/>\n  </div>\n  <div class='introductionText'>\n    <span>我是小雞</span>\n    <span>持續學習</span>\n    <span>認真生活!</span>\n    <span>認真玩!</span>\n  </div>\n</div>\n\n<label class='last-aritcles-title'>文章分類</label>\n<ul class='categories'>\n  <li *ngFor=\"let category of categories\"\n  (click)=\"onSelect(category)\"\n  [class.selected]=\"category === selectedCategory\">\n    <a routerLink=\"/categories/{{category.id}}\" >{{category.name}}</a>\n    <!--<a routerLink=\"/articles/2\" routerLinkActive=\"active\">{{category.name}}</a>-->\n  </li>\n</ul>\n\n<label class='last-aritcles-title'>分類近期文章</label>\n<ul class='categories'>\n  <li *ngFor=\"let category of categories\">\n    <a routerLink=\"/categories/{{category.id}}\" >{{category.name}}</a>\n    <!--<a routerLink=\"/articles/2\" >{{category.name}}</a>-->\n  </li>\n</ul>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-site-header (toggleLeftbarRequest)='changeLeftbarState()'></app-site-header>\n  <div id='site-body'>\n    <app-site-leftbar id='site-leftbar'\n                      [class.show]='isShowOnPage'>\n    </app-site-leftbar>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(128);


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article() {
    }
    return Article;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.backendUrl = 'http:\/\/localhost:3000';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    CategoryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CategoryService.prototype.getCategories = function () {
        var url = this.backendUrl + "/categories";
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    CategoryService.prototype.getArticlesByCategory = function (categoryId) {
        if (!categoryId) {
            categoryId = '1';
        }
        var url = this.backendUrl + "/categories/" + categoryId + "/articles";
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = (function () {
    //private headers = new Headers({'Content-Type': 'application/json'});
    function ArticleService(http) {
        this.http = http;
        this.backendUrl = 'http:\/\/localhost:3000';
    }
    ArticleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ArticleService.prototype.getArticles = function () {
        var url = this.backendUrl + "/articles";
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ArticleService.prototype.getArticle = function (articleId) {
        var url = this.backendUrl + "/articles/" + articleId;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    return ArticleService;
}());
ArticleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArticleService);

var _a;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleComponent = (function () {
    function ArticleComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
        this.article = new __WEBPACK_IMPORTED_MODULE_2__article__["a" /* Article */]();
        //article: Article;
        this.basePath = 'assets/contents';
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('aaa');
        this.route.params
            .switchMap(function (params) { return _this.articleService.getArticle(params['id']); })
            .subscribe(function (article) { return _this.article = article; });
    };
    return ArticleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article__["a" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article__["a" /* Article */]) === "function" && _a || Object)
], ArticleComponent.prototype, "article", void 0);
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__(236),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__article_service__["a" /* ArticleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], ArticleComponent);

var _a, _b, _c;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function () {
    function CategoryComponent(categoryService, route, router) {
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.articles = [];
        this.articleBasePath = 'assets/contents';
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.categoryService.getArticlesByCategory(params['id']); })
            .subscribe(function (articles) { _this.articles = articles; console.log(_this.articles); });
    };
    CategoryComponent.prototype.openArticle = function (selectArticle) {
        this.router.navigate(['/articles', selectArticle.id]);
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__(237),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ })

},[314]);
//# sourceMappingURL=main.bundle.js.map