webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* unused harmony export AppRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__["a" /* RegistrationComponent */],
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
function tokenGetter() {
    return localStorage.getItem('token');
}
var AppRoutes = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { initialNavigation: false });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                    }
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["a" /* JwtHelperService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        // if (!this.auth.isAuthenticated()) {
        //   this.router.navigate(['login']);
        //   return false;
        // }
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    // ...
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<button (click)=\"signOut()\">Sign Out</button>\n<h1> User details </h1>\n<h3>UserId :  {{userId}} <h3>\n<h3>FirstName : {{firstName}} <h3>\n<h3>LastName :  {{lastName}} <h3>\n<h3>Username : {{username}} <h3>\n<h3>Jwt Token : {{jwtToken}} <h3>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.userId = localStorage.getItem('userId');
        this.firstName = localStorage.getItem('firstName');
        this.lastName = localStorage.getItem('lastName');
        this.username = localStorage.getItem('username');
        this.jwtToken = localStorage.getItem('token');
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.signOut = function () {
        // localStorage.setItem('token',null);
        alert('sign out');
        localStorage.removeItem('token');
        // this.auth.logout();
        this.router.navigate(['login']);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Welcome to Learning Yogi</a>\n    </div>\n    <div class=\"pull-right\">\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"login-section\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t<div *ngIf=\"errorAlert\" class=\"alert alert-info text-center\">\n\t\t\t\t\t{{unauthorizeUser}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" style=\"width: 100%;\">\n\n\t\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t\t<h4 class=\"card-title\">Login</h4>\n\t\t\t\t\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && userLogin()\" #f=\"ngForm\" novalidate>\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid } \">\n\t\t\t\t\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"login.username\" #username=\"ngModel\" required />\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\t\t\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"login.password\" #password=\"ngModel\" required />\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Login</button>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n\t\t\t\t\t\t\t</div>\n              <div>\n                <input type=\"checkbox\"  name=\"rememberme\" [(ngModel)]=\"login.rememberme\"> Remember me \n              </div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, _cookieService) {
        this.router = router;
        this.userService = userService;
        this._cookieService = _cookieService;
        this.login = {};
        this.errorAlert = false;
        console.log("******** " + _cookieService.get('remember'));
        if (_cookieService.get('remember')) {
            this.login.username = this._cookieService.get('username');
            this.login.password = this._cookieService.get('password');
            this.login.rememberme = this._cookieService.get('remember');
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        console.log('<========Inside register function========>');
        console.log("-----> login object ", this.login);
        if (this.login.rememberme == true) {
            this._cookieService.put('username', this.login.username);
            this._cookieService.put('password', this.login.password);
            this._cookieService.put('remember', this.login.rememberme);
        }
        this.userService.userLogin(this.login)
            .then(function (user) {
            // this.serverResponse = user;
            _this.customResponse = user;
            console.log(_this.customResponse);
            if (_this.customResponse) {
                if (_this.customResponse.statusCode === 200 && _this.customResponse.found == false) {
                    console.log('..........invalid........');
                    _this.errorAlert = true;
                    _this.unauthorizeUser = "invalid username or pasword";
                    setTimeout(function () {
                        _this.errorAlert = false;
                    }, 2000);
                }
                else if (_this.customResponse.statusCode === 200) {
                    localStorage.setItem('token', _this.customResponse.access_token);
                    localStorage.setItem('firstName', _this.customResponse.firstName);
                    localStorage.setItem('lastName', _this.customResponse.lastName);
                    localStorage.setItem('username', _this.customResponse.username);
                    localStorage.setItem('userId', _this.customResponse.id);
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.router.navigate(['']);
                }
            }
        })
            .catch(function (error) {
            console.log('--------Error-In-SignUp----------');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"login-section\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3 mt-8\">\n      <div *ngIf=\"successAlert\" class=\"alert alert-info text-center\">\n        {{alertMessage}}\n      </div>\n      <div *ngIf=\"alreadyExistAlert\" class=\"alert alert-info text-center\">\n        {{alertMessage}}\n      </div>\n      <div class=\"card\" style=\"width: 100%;\">\n\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Login</h4>\n            <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && register()\" novalidate>\n\n                        <div class=\"form-group col-md-12 \">\n                          <label for=\"firstName\">First Name</label>\n                          <input type=\"text\" #firstName=\"ngModel\" minlength=\"2\" maxlength=\"50\" pattern=\"[a-zA-Z][a-zA-Z ]+\" class=\"form-control\" name=\"firstName\"\n                            [(ngModel)]='model.firstName' required/>\n                          <div *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\" class=\"alert alert-danger\">\n                            <div [hidden]=\"!firstName.errors.required\">\n                              please enter Fisrt Name\n                            </div>\n                            <div [hidden]=\"!firstName.errors.minlength\">\n                              please enter atleast 2 characters\n                            </div>\n                            <div [hidden]=\"!firstName.errors.pattern\">\n                              Only alphabets are allowed\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12\">\n                          <label>Last Name</label>\n                          <input type=\"text\" #lastName=\"ngModel\" minlength=\"2\"\n                          maxlength=\"50\" pattern=\"[a-zA-Z][a-zA-Z ]+\" class=\"form-control\" name=\"lastName\"\n                            [(ngModel)]=\"model.lastName\" required>\n\n                          <div *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\" class=\"alert alert-danger\">\n                            <div [hidden]=\"!lastName.errors.required\">\n                              please enter Last Name\n                            </div>\n                            <div [hidden]=\"!lastName.errors.minlength\">\n                              please enter atleast 2 characters\n                            </div>\n                            <div [hidden]=\"!lastName.errors.pattern\">\n                              Only alphabets are allowed\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12\">\n                          <label>Email</label>\n                          <input type=\"text\" #username=\"ngModel\" class=\"form-control\" maxlength=\"50\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                            name=\"username\" [(ngModel)]=\"model.username\" required>\n                          <div *ngIf=\"username.errors && (username.dirty || username.touched)\" class=\"alert alert-danger\">\n                            <div [hidden]=\"!username.errors.required\">\n                              please enter an Email\n                            </div>\n                            <div [hidden]=\"!username.errors.pattern\">\n                              Email format should be\n                              <small>\n                                <b>joe@abc.com</b>\n                              </small>\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12\">\n                          <label>password</label>\n                          <input type=\"password\" #password=\"ngModel\" minlength=\"2\" maxlength=\"50\" class=\"form-control\" name=\"password\" value=\"\" [(ngModel)]=\"model.password\"\n                            required>\n                          <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                            <div [hidden]=\"!password.errors.required\">\n                              please enter a passwrod\n                            </div>\n                            <div [hidden]=\"!password.errors.minlength\">\n                              please enter atleast 2 characters\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"text-center\">\n                          <button [disabled]=\"!f.form.valid\" class=\"btn btn-primary\">Signup</button>\n                          <a href [routerLink]=\"['/']\">Login</a>\n                        </div>\n                      </form>\n                    </div>\n          </div>\n\n    </div>\n  </div>\n</div>\n</section>\n\n\n\n\n\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3 mt-8\">\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && register()\" novalidate>\n        <div class=\"form-group col-md-12 \" [ngClass]=\"{'has-error':f.submitted && !username.valid}\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]='model.firstName' #firstName=\"ngModel\" required/>\n          <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n\n        <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':f.submitted &&!username.valid}\">\n          <label>Last Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required>\n          <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n\n        <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':f.submitted &&!username.valid}\"  >\n          <label>Username</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\"  [(ngModel)]=\"model.username\" #username=\"ngModel\" required  ng-reflect-hidden=\"false\" hidden>\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">username is required</div>\n        </div>\n\n        <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':f.submitted &&!pwd.valid}\">\n          <label>password</label>\n          <input type=\"password\" class=\"form-control\" name=\"pwd\" value=\"\" [(ngModel)]=\"model.pwd\" #pwd=\"ngModel\" required>\n          <div *ngIf=\"f.submitted && !pwd.valid\" class=\"help-block\">password is required</div>\n        </div>\n\n        <div class=\"text-center\">\n          <button class=\"btn btn-primary\">Signup</button>\n          <a [routerLink]=\"['/']\">Cancle</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, http, router, el) {
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.el = el;
        this.model = {};
        this.successAlert = false;
        this.alreadyExistAlert = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        console.log('<========Inside register function========>');
        this.userService.registerUser(this.model)
            .then(function (user) {
            _this.serverResponse = user;
            if (_this.serverResponse.statusCode !== 201 && _this.serverResponse.statusCode !== 200) {
                console.log('something went wrong');
            }
            else if (_this.serverResponse.statusCode === 201) {
                console.log(_this.serverResponse.message);
                _this.successAlert = true;
                _this.alertMessage = "successfully created";
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 2000);
            }
            else if (_this.serverResponse.statusCode == 200 && _this.serverResponse.userExist == true) {
                console.log(_this.serverResponse.message);
                _this.alreadyExistAlert = true;
                _this.alertMessage = "User already exist with this email please use another email";
                setTimeout(function () {
                    _this.alreadyExistAlert = false;
                }, 2000);
            }
        })
            .catch(function (error) {
            console.log('--------Error-In-SignUp----------');
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.registerUrl = "http://localhost:8080/register";
        this.loginUrl = "http://localhost:8080/login";
    }
    /*register user */
    UserService.prototype.registerUser = function (user) {
        console.log('-------model--------------');
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.registerUrl, user, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /*register user */
    UserService.prototype.userLogin = function (user) {
        console.log('-------model--------------');
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.loginUrl, user, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /*login user */
    // userLogin(user: any): Observable<any> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.post(this.loginUrl, user, options)
    //         .map(this.extractData)
    //         .catch(this.handleErrorObservable);
    // }
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('*********************');
        console.log(body);
        return body || {};
    };
    UserService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.message || error);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred*********', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map