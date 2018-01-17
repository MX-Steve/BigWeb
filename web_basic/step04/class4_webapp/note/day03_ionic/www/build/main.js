webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardPage = (function () {
    function CardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPage');
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\card\card.html"*/'<!--\n  Generated template for the CardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>卡片示例</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<p>基本卡片</p>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Police stand guard outside Florida\n    </ion-card-header>\n    <ion-card-content>\n      (CNN)A Florida university posted campus police outside a sociology class titled "White Racism" after the professor\n      was flooded with harassing emails and messages -- some of them openly racist.\n    </ion-card-content>\n  </ion-card>\n\n  <p>列表内容卡片</p>\n  <ion-card>\n    <ion-card-header>\n      List\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <button ion-item>\n          <ion-icon item-start name="heart" color="danger"></ion-icon>\n          Heart!\n        </button>\n        <button ion-item>\n          <ion-icon item-start name="heart" color="danger"></ion-icon>\n          Heart!\n        </button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <p>主题图片</p>\n  <ion-card>\n    <img src="assets/imgs/product.jpg">\n    <ion-card-title>\n      xxx 笔记本\n    </ion-card-title>\n    <p>\n      (CNN)A Florida university posted campus police outside a sociology class titled "White Racism" after the professor\n      was flooded with harassing emails and messages -- some of them openly racist.\n    </p>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\card\card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            'Tom 1',
            'Jerry 1',
            'Tom 2',
            'Jerry 2',
            'Tom 3',
            'Jerry 3',
            'Tom 4',
            'Jerry 4',
            'Tom 5',
            'Jerry 5',
            'Tom 6',
            'Jerry 6',
            'Tom 7',
            'Jerry 7'
        ];
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage.prototype.itemSelected = function (item) {
        console.error("selected: " + item);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\list\list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>列表示例</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <p>基本列表</p>\n  <ion-list inset>\n    <ion-item>Tom</ion-item>\n    <ion-item>Jerry</ion-item>\n  </ion-list>\n\n  <p>按钮作为列表项</p>\n  <ion-list>\n    <button ion-item>Tom</button>\n    <button ion-item>Jerry</button>\n  </ion-list>\n\n  <p>列表边距</p>\n  <ion-list inset>\n    <ion-item>Tom</ion-item>\n    <ion-item>Jerry</ion-item>\n  </ion-list>\n\n  <p>无分隔线列表</p>\n  <ion-list no-lines>\n    <ion-item>Tom</ion-item>\n    <ion-item>Jerry</ion-item>\n  </ion-list>\n\n  <p>列表分割项</p>\n  <ion-item-group>\n    <ion-item-divider>Students</ion-item-divider>\n    <button ion-item>Tom</button>\n    <button ion-item>Jerry</button>\n    <ion-item-divider>Teachers</ion-item-divider>\n    <ion-item>Tom 1</ion-item>\n    <ion-item>Jerry 1</ion-item>\n  </ion-item-group>\n\n  <p>列表头部</p>\n  <ion-list>\n    <ion-list-header>Students</ion-list-header>\n    <ion-item>Tom</ion-item>\n    <ion-item>Jerry</ion-item>\n  </ion-list>\n\n  <p>图标作为列表项</p>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="heart" item-start color="danger"></ion-icon>\n      Tom\n    </ion-item>\n    <ion-item>\n      Jerry\n      <ion-icon name="heart" item-end color="danger"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="heart" item-start color="danger"></ion-icon>\n      Tom Jerry\n      <ion-icon name="heart" item-end color="danger"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <p>头像作为列表项 http://iconfinder.com</p>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/avatars/tom.png">\n      </ion-avatar>\n      <h2>Tom</h2>\n      <p>The world is your oyster!</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-end>\n        <img src="assets/imgs/logo.png">\n      </ion-avatar>\n      <h2>Jerry</h2>\n      <p>Practice makes perfect.</p>\n    </ion-item>\n  </ion-list>\n\n  <p>滑动列表项</p>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start="">\n          <img src="assets/avatars/tom.png">\n        </ion-avatar>\n        <h2>Tom</h2>\n        <p>Hello, Tom!</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button icon-start color="light">\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button icon-start color="danger">\n          <ion-icon name="american-football" color="secondary"></ion-icon>\n          football\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <p>列表项数据来自于类</p>\n  <ion-list>\n    <button *ngFor="let item of items" ion-item (click)="itemSelected(item)">{{item}}</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/button/button.module": [
		274,
		2
	],
	"../pages/card/card.module": [
		275,
		1
	],
	"../pages/list/list.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.buttonPage = __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* ButtonPage */];
        this.listPage = __WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */];
        this.cardPage = __WEBPACK_IMPORTED_MODULE_4__card_card__["a" /* CardPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button [navPush]="buttonPage" full>按钮示例</button>\n  <button ion-button [navPush]="listPage" full>列表示例</button>\n  <button ion-button [navPush]="cardPage" full>卡片示例</button>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_button_button__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_card_card__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_card_card__["a" /* CardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/button/button.module#ButtonPageModule', name: 'ButtonPage', segment: 'button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_card_card__["a" /* CardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ButtonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ButtonPage = (function () {
    function ButtonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ButtonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ButtonPage');
    };
    ButtonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-button',template:/*ion-inline-start:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\button\button.html"*/'<!--\n  Generated template for the ButtonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>按钮示例</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>basic button 基本按钮</p>\n  <button ion-button>button...</button>\n  <button ion-button color="light">light</button>\n  <button ion-button color="secondary">secondary</button>\n  <button ion-button color="danger">danger Ctrl+W</button>\n  <button ion-button color="dark">dark</button>\n\n  <p>outline button 外边框按钮</p>\n  <button ion-button outline>outline</button>\n  <button ion-button outline color="light">outline</button>\n  <button ion-button outline color="secondary">outline</button>\n  <button ion-button outline color="danger">outline</button>\n  <button ion-button outline color="dark">outline</button>\n\n  <p>clear button 无边框无背景按钮</p>\n  <button ion-button clear>clear</button>\n  <button ion-button clear color="light">outline</button>\n  <button ion-button clear color="secondary">outline</button>\n  <button ion-button clear color="danger">outline</button>\n  <button ion-button clear color="dark">outline</button>\n\n  <p>round button 圆角按钮</p>\n  <button ion-button round>round</button>\n  <button ion-button round color="light">outline</button>\n  <button ion-button round color="secondary">outline</button>\n  <button ion-button round color="danger">outline</button>\n  <button ion-button round color="dark">outline</button>\n\n  <p>block button 块级按钮</p>\n  <button ion-button block>block</button>\n  <button ion-button block color="light">outline</button>\n  <button ion-button block color="secondary">outline</button>\n  <button ion-button block color="danger">outline</button>\n  <button ion-button block color="dark">outline</button>\n\n  <p>full button 无圆角的块级按钮</p>\n  <button ion-button full>full</button>\n  <button ion-button full color="light">outline</button>\n  <button ion-button full color="secondary">outline</button>\n  <button ion-button full color="danger">outline</button>\n  <button ion-button full color="dark">outline</button>\n\n  <p>button size 按钮大小</p>\n  <button ion-button>default</button>\n  <button ion-button small>small</button>\n  <button ion-button large>large</button>\n\n  <p>icon button 图标按钮</p>\n  <button ion-button icon-left>\n    <ion-icon name="home"></ion-icon>\n    Home\n  </button>\n  <button ion-button icon-right>\n    Apple\n    <ion-icon name="attach"></ion-icon>\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\web-01\IntelliJIDEAProjects\ionic-1708N\blank-app\src\pages\button\button.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map