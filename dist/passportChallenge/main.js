(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rootHeadWrap\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"text-center rootHead\">ROOT</h1>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"factoryDivWrap\">\n        <app-factory></app-factory>\n      </div>\n      <button *ngIf=\"!showAddFactoryForm\" (click)=\"showAddFactoryForm = true\" class=\"btn btn-primary addFactoryBtn\">Add Factory</button>\n      <button *ngIf=\"showAddFactoryForm\" (click)=\"showAddFactoryForm = false\" class=\"btn btn-danger addFactoryBtn\">Cancel</button>\n\n      <app-factory-create *ngIf=\"showAddFactoryForm\"></app-factory-create>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rootHead {\n  color: white; }\n\n.rootHeadWrap {\n  background-color: skyblue;\n  padding: 1rem; }\n\n.factoryDivWrap {\n  border-left-color: black;\n  border-left-style: dashed;\n  border-left-width: 2px;\n  padding-top: 2rem;\n  padding-bottom: 0rem; }\n\n.addFactoryBtn {\n  margin-top: .5rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/general */ "./src/app/services/general.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(generalService) {
        this.generalService = generalService;
        this.showAddFactoryForm = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.showAddFactoryForm$.subscribe(function (data) {
            if (data === true || data === false) {
                _this.showAddFactoryForm = data;
            }
        }, function (err) { return console.log(err); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_general__WEBPACK_IMPORTED_MODULE_1__["GeneralService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_factory_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/factory-api */ "./src/app/services/factory-api.ts");
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/socket */ "./src/app/services/socket.ts");
/* harmony import */ var _services_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/general */ "./src/app/services/general.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _factory_factory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory/factory.component */ "./src/app/factory/factory.component.ts");
/* harmony import */ var _factory_create_factory_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory-create/factory-create.component */ "./src/app/factory-create/factory-create.component.ts");
/* harmony import */ var _factory_update_factory_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factory-update/factory-update.component */ "./src/app/factory-update/factory-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _factory_factory_component__WEBPACK_IMPORTED_MODULE_8__["FactoryComponent"],
                _factory_create_factory_create_component__WEBPACK_IMPORTED_MODULE_9__["FactoryCreateComponent"],
                _factory_update_factory_update_component__WEBPACK_IMPORTED_MODULE_10__["FactoryUpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_services_factory_api__WEBPACK_IMPORTED_MODULE_4__["FactoryApiService"], _services_general__WEBPACK_IMPORTED_MODULE_6__["GeneralService"], _services_socket__WEBPACK_IMPORTED_MODULE_5__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/factory-create/factory-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/factory-create/factory-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card factoryFormCard\">\n  <h5 class=\"text-center\">Create Factory</h5>\n  <form #f=\"ngForm\" (submit)=\"createFactory(f.value)\">\n    <div class=\"form-group\">\n      <label>Factory Title</label>\n      <input (focus)=\"checkFormErr('factoryTitle')\" name=\"factoryTitle\" class=\"form-control\" type=\"text\" ngModel />\n    </div>\n    <div class=\"form-group\">\n      <label>Amount To Generate</label>\n      <select (focus)=\"checkFormErr('childAmount')\" name=\"childAmount\" class=\"form-control\" ngModel required>\n        <option *ngFor=\"let value of valueArr; let i = index\" value=\"{{value}}\" >\n          {{value}}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <label>Min</label>\n          <input (focus)=\"checkFormErr('childMin')\" name=\"childMin\" class=\"form-control\" type=\"number\" [(ngModel)]=\"childMin\" (keyup)=\"checkMinMax()\" />\n        </div>\n        <div class=\"col-6\">\n          <label>Max</label>\n          <input (focus)=\"checkFormErr('childMax')\" name=\"childMax\" class=\"form-control\" type=\"number\" [(ngModel)]=\"childMax\" (keyup)=\"checkMinMax()\" />\n        </div>\n      </div>\n      <div *ngIf=\"minMaxErr != ''\" class=\"alert alert-danger text-center errMsgDiv\">\n        {{minMaxErr}}\n      </div>\n      <div *ngIf=\"formErrMsg != ''\" class=\"alert alert-danger text-center errMsgDiv\">\n        {{formErrMsg}}\n      </div>\n    </div>\n    <div class=\"text-center\">\n      <button [disabled]=\"creatingFactory\" type=\"submit\" class=\"btn btn-dark\">Submit</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/factory-create/factory-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/factory-create/factory-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".factoryFormCard {\n  padding: 1rem;\n  width: 20rem;\n  margin-bottom: 5rem; }\n\n.errMsgDiv {\n  margin-top: 1rem; }\n"

/***/ }),

/***/ "./src/app/factory-create/factory-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/factory-create/factory-create.component.ts ***!
  \************************************************************/
/*! exports provided: FactoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryCreateComponent", function() { return FactoryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_factory_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/factory-api */ "./src/app/services/factory-api.ts");
/* harmony import */ var _services_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general */ "./src/app/services/general.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FactoryCreateComponent = /** @class */ (function () {
    function FactoryCreateComponent(factoryApiService, generalService) {
        this.factoryApiService = factoryApiService;
        this.generalService = generalService;
        this.valueArr = [];
        this.childMin = 0;
        this.childMax = 100;
        this.minMaxErr = "";
        this.childAmountMax = 16;
        this.formErrMsg = "";
        this.creatingFactory = false;
        this.missingTitleMsg = "Please Enter The Factory Title";
        this.missingGenAmtMsg = "Please Select A Generate Amount";
        this.missingMinAmtMsg = "Please Enter A Min Amount";
        this.missingMaxAmtMsg = "Please Enter A Max Amount";
        this.minMaxErrMsg = "The Min amount must be less than or equal to the Max amount.";
    }
    FactoryCreateComponent.prototype.ngOnInit = function () {
        this.setValueArr(this.childAmountMax);
    };
    FactoryCreateComponent.prototype.setValueArr = function (number) {
        for (var i = 0; i < number; i++) {
            this.valueArr.push(i);
        }
    };
    FactoryCreateComponent.prototype.createFactory = function (form) {
        var _this = this;
        this.creatingFactory = true;
        this.formErrMsg = "";
        if (this.minMaxErr === this.minMaxErrMsg) {
            this.creatingFactory = false;
            return;
        }
        if (form.factoryTitle === "") {
            this.creatingFactory = false;
            this.formErrMsg = this.missingTitleMsg;
            return;
        }
        if (form.childAmount === "" || form.childAmount === null) {
            this.creatingFactory = false;
            this.formErrMsg = this.missingGenAmtMsg;
            return;
        }
        if (form.childMin === "" || form.childMin === null) {
            this.creatingFactory = false;
            this.formErrMsg = this.missingMinAmtMsg;
            return;
        }
        if (form.childMax === "" || form.childMax === null) {
            this.creatingFactory = false;
            this.formErrMsg = this.missingMaxAmtMsg;
            return;
        }
        var createFactory = this.factoryApiService.createFactory(form);
        var createFactory$ = createFactory.subscribe(function (data) {
            console.log("SUCCES", data);
            if (data.errMsg) {
                _this.formErrMsg = data.errMsg;
            }
            _this.generalService.showAddFactoryForm$.next(false);
            _this.creatingFactory = false;
        }, function (err) {
            console.log("there was an error creating the factory", err);
            _this.formErrMsg = "There was an error.  Please Try Again.";
            _this.creatingFactory = false;
        });
    };
    FactoryCreateComponent.prototype.checkMinMax = function () {
        this.minMaxErr = "";
        if (this.childMin > this.childMax && this.childMax != null) {
            this.minMaxErr = this.minMaxErrMsg;
        }
    };
    FactoryCreateComponent.prototype.checkFormErr = function (id) {
        if (this.formErrMsg === this.missingTitleMsg && id === "factoryTitle") {
            this.formErrMsg = "";
            return;
        }
        if (this.formErrMsg === this.missingGenAmtMsg && id === "childAmount") {
            this.formErrMsg = "";
            return;
        }
        if (this.formErrMsg === this.missingMinAmtMsg && id === "childMin") {
            this.formErrMsg = "";
            return;
        }
        if (this.formErrMsg === this.missingMaxAmtMsg && id === "childMax") {
            this.formErrMsg = "";
            return;
        }
    };
    FactoryCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factory-create',
            template: __webpack_require__(/*! ./factory-create.component.html */ "./src/app/factory-create/factory-create.component.html"),
            styles: [__webpack_require__(/*! ./factory-create.component.scss */ "./src/app/factory-create/factory-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_factory_api__WEBPACK_IMPORTED_MODULE_1__["FactoryApiService"], _services_general__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
    ], FactoryCreateComponent);
    return FactoryCreateComponent;
}());



/***/ }),

/***/ "./src/app/factory-update/factory-update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/factory-update/factory-update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showDeleteForm\" class=\"card updateCardStyle\">\n  <h5 class=\"text-center\">Update {{factory$?.factoryTitle}}</h5>\n    <div class=\"text-center\">\n      <button class=\"btn btn-sm btn-warning\" (click)=\"cancelUpdate()\">Cancel</button>\n    </div>\n  <form #f=\"ngForm\" (submit)=\"updateFactory(f.value)\">\n    <div class=\"form-group\">\n      <label>Factory Title</label>\n      <input (keyup)=\"sendUpdateInfo()\" (focus)=\"checkFormErr('factoryTitle')\" name=\"factoryTitle\" class=\"form-control\" type=\"text\" [(ngModel)]=\"factoryTitle\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Amount To Generate</label>\n      <select (focus)=\"checkFormErr('childAmount')\" name=\"childAmount\" class=\"form-control\" [(ngModel)]=\"childAmount\" required>\n        <option *ngFor=\"let value of valueArr; let i = index\" value=\"{{value}}\" >\n          {{value}}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <label>Min</label>\n          <input (focus)=\"checkFormErr('childMin')\" name=\"childMin\" class=\"form-control\" type=\"number\" [(ngModel)]=\"childMin\" (keyup)=\"checkMinMax()\" />\n        </div>\n        <div class=\"col-6\">\n          <label>Max</label>\n          <input (focus)=\"checkFormErr('childMax')\" name=\"childMax\" class=\"form-control\" type=\"number\" [(ngModel)]=\"childMax\" (keyup)=\"checkMinMax()\" />\n        </div>\n      </div>\n      <div *ngIf=\"minMaxErr != ''\" class=\"alert alert-danger text-center errMsgDiv\">\n        {{minMaxErr}}\n      </div>\n      <div *ngIf=\"formErrMsg != ''\" class=\"alert alert-danger text-center errMsgDiv\">\n        {{formErrMsg}}\n      </div>\n    </div>\n    <div class=\"text-center\">\n      <button [disabled]=\"updatingFactory\" type=\"submit\" class=\"btn btn-success firstBtn\">Update</button>\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"showDeleteForm = true\">Delete</button>\n    </div>\n  </form>\n</div>\n\n<div *ngIf=\"showDeleteForm\" class=\"card updateCardStyle text-center\">\n  <h3>Are you sure you want to delete {{factoryTitle}}?</h3>\n  <form>\n    <button type=\"button\" class=\"btn btn-danger firstBtn\" (click)=\"deleteFactory()\">Yes, Delete</button>\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"showDeleteForm = false\">No, Go Back</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/factory-update/factory-update.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/factory-update/factory-update.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".updateCardStyle {\n  padding: .5rem;\n  background-color: rgba(38, 84, 79, 0.5);\n  color: blue;\n  margin-top: 2rem; }\n\n.firstBtn {\n  margin-right: .25rem; }\n"

/***/ }),

/***/ "./src/app/factory-update/factory-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/factory-update/factory-update.component.ts ***!
  \************************************************************/
/*! exports provided: FactoryUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryUpdateComponent", function() { return FactoryUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_factory_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/factory-api */ "./src/app/services/factory-api.ts");
/* harmony import */ var _services_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general */ "./src/app/services/general.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FactoryUpdateComponent = /** @class */ (function () {
    function FactoryUpdateComponent(factoryApiService, generalService) {
        this.factoryApiService = factoryApiService;
        this.generalService = generalService;
        this.formErrMsg = "";
        this.minMaxErr = "";
        this.valueArr = [];
        this.childAmountMax = 16;
        this.updatingFactory = false;
        this.showDeleteForm = false;
        this.missingTitleMsg = "Please Enter The Factory Title";
        this.missingGenAmtMsg = "Please Select A Generate Amount";
        this.missingMinAmtMsg = "Please Enter A Min Amount";
        this.missingMaxAmtMsg = "Please Enter A Max Amount";
        this.minMaxErrMsg = "The Min amount must be less than or equal to the Max amount.";
    }
    FactoryUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setValueArr(this.childAmountMax);
        this.factoryApiService.factory$.subscribe(function (data) {
            console.log("update comp data", data);
            _this.factory$ = data;
            _this.childMin = data.minValue;
            _this.childMax = data.maxValue;
            _this.factoryTitle = data.factoryTitle;
            _this.childAmount = data.children.length;
            _this.children = data.children;
            _this.factoryId = data._id;
            _this.startObj = {
                childAmount: data.children.length,
                childMax: data.maxValue,
                childMin: data.minValue,
                factoryTitle: data.factoryTitle
            };
        }, function (err) { return console.log("there was an error getting the update data", err); });
    };
    FactoryUpdateComponent.prototype.setValueArr = function (number) {
        for (var i = 0; i < number; i++) {
            this.valueArr.push(i);
        }
    };
    FactoryUpdateComponent.prototype.checkMinMax = function () {
        this.minMaxErr = "";
        this.sendUpdateInfo();
        if (this.childMin > this.childMax && this.childMax != null) {
            console.log("got here");
            this.minMaxErr = this.minMaxErrMsg;
        }
    };
    FactoryUpdateComponent.prototype.cancelUpdate = function () {
        var updateObj = {
            _id: this.factoryId
        };
        this.factoryApiService.cancelUpdate(updateObj);
    };
    FactoryUpdateComponent.prototype.checkFormErr = function (id) {
        if (this.formErrMsg === this.missingTitleMsg && id === "factoryTitle") {
            this.formErrMsg = "";
            return;
        }
        if (this.formErrMsg === this.missingGenAmtMsg && id === "childAmount") {
            this.formErrMsg = "";
            return;
        }
        if (this.formErrMsg === this.missingMinAmtMsg && id === "childMin") {
            this.formErrMsg = "";
            return;
        }
        if (this.formErrMsg === this.missingMaxAmtMsg && id === "childMax") {
            this.formErrMsg = "";
            return;
        }
    };
    FactoryUpdateComponent.prototype.updateFactory = function (form) {
        var _this = this;
        this.updatingFactory = true;
        this.formErrMsg = "";
        console.log("FORM", form);
        console.log("startObj", this.startObj);
        if (form.childAmount === this.startObj.childAmount && form.childMax === this.startObj.childMax && form.childMin === this.startObj.childMin && form.factoryTitle === this.startObj.factoryTitle) {
            console.log("NOT UPDATING");
            this.cancelUpdate();
            return;
        }
        if (this.minMaxErr === this.minMaxErrMsg) {
            this.updatingFactory = false;
            return;
        }
        if (form.factoryTitle === "") {
            this.updatingFactory = false;
            this.formErrMsg = this.missingTitleMsg;
            return;
        }
        if (form.childAmount === "" || form.childAmount === null) {
            this.updatingFactory = false;
            this.formErrMsg = this.missingGenAmtMsg;
            return;
        }
        if (form.childMin === "" || form.childMin === null) {
            this.updatingFactory = false;
            this.formErrMsg = this.missingMinAmtMsg;
            return;
        }
        if (form.childMax === "" || form.childMax === null) {
            this.updatingFactory = false;
            this.formErrMsg = this.missingMaxAmtMsg;
            return;
        }
        var updateObj = {
            _id: this.factoryId,
            factoryTitle: form.factoryTitle,
            childAmount: form.childAmount,
            minValue: form.childMin,
            maxValue: form.childMax,
            updateChildren: true
        };
        if (form.childAmount === this.startObj.childAmount && form.childMin === this.startObj.childMin && form.childMax === this.startObj.childMax) {
            updateObj.updateChildren = false;
        }
        var updateFactory = this.factoryApiService.updateFactory(updateObj);
        var updateFactory$ = updateFactory.subscribe(function (data) {
            console.log("SUCCES", data);
            if (data.errMsg) {
                _this.formErrMsg = data.errMsg;
                _this.updatingFactory = false;
                return;
            }
            _this.updatingFactory = false;
            _this.cancelUpdate();
        }, function (err) {
            console.log("there was an error creating the factory", err);
            _this.formErrMsg = "There was an error.  Please Try Again.";
            _this.updatingFactory = false;
        });
    };
    FactoryUpdateComponent.prototype.deleteFactory = function () {
        var _this = this;
        var deleteInfoObj = {
            _id: this.factoryId
        };
        this.factoryApiService.deleteFactory(deleteInfoObj)
            .subscribe(function (data) {
            console.log("success deleted!", data);
            _this.cancelUpdate();
        }, function (err) { return console.log("there was an error deleting the factory"); });
    };
    FactoryUpdateComponent.prototype.sendUpdateInfo = function () {
        var updateObj = {
            factoryTitle: this.factoryTitle,
            children: this.children,
            minValue: this.childMin,
            maxValue: this.childMax,
            _id: this.factoryId
        };
        this.generalService.updateInfo$.next(updateObj);
    };
    FactoryUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factory-update',
            template: __webpack_require__(/*! ./factory-update.component.html */ "./src/app/factory-update/factory-update.component.html"),
            styles: [__webpack_require__(/*! ./factory-update.component.scss */ "./src/app/factory-update/factory-update.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_factory_api__WEBPACK_IMPORTED_MODULE_1__["FactoryApiService"], _services_general__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
    ], FactoryUpdateComponent);
    return FactoryUpdateComponent;
}());



/***/ }),

/***/ "./src/app/factory/factory.component.html":
/*!************************************************!*\
  !*** ./src/app/factory/factory.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let factory of factoryArr\">\n  <div *ngIf=\"!factory?.showUpdateForm\" class=\"factoryDiv\" (click)=\"showUpdateFormFunc(factory)\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4>----{{factory?.factoryTitle}}</h4>\n      </div>\n      <div class=\"col text-center\">\n        <h6>Min: {{factory?.minValue}} - Max: {{factory?.maxValue}}</h6>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div *ngFor=\"let child of factory.children\" class=\"childDiv\">\n            <h4 class=\"childHeader\">----{{child}}</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n    <app-factory-update *ngIf=\"factory?.showUpdateForm\"></app-factory-update>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/factory/factory.component.scss":
/*!************************************************!*\
  !*** ./src/app/factory/factory.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".factoryDiv {\n  margin-top: 2rem; }\n  .factoryDiv:hover {\n    cursor: pointer;\n    color: blue;\n    background-color: rgba(38, 84, 79, 0.5);\n    border-top-color: #9da59f;\n    border-top-width: 2px;\n    border-top-style: 2px; }\n  .childDiv {\n  border-left-color: black;\n  border-left-style: dashed;\n  border-left-width: 2px;\n  padding-top: 3rem;\n  padding-bottom: .0rem;\n  margin-left: 2rem;\n  font-size: 2rem; }\n  .childHeader {\n  font-size: 1.5rem;\n  line-height: 0rem; }\n"

/***/ }),

/***/ "./src/app/factory/factory.component.ts":
/*!**********************************************!*\
  !*** ./src/app/factory/factory.component.ts ***!
  \**********************************************/
/*! exports provided: FactoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryComponent", function() { return FactoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/socket */ "./src/app/services/socket.ts");
/* harmony import */ var _services_factory_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/factory-api */ "./src/app/services/factory-api.ts");
/* harmony import */ var _services_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/general */ "./src/app/services/general.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FactoryComponent = /** @class */ (function () {
    function FactoryComponent(socketService, factoryApiService, generalService) {
        this.socketService = socketService;
        this.factoryApiService = factoryApiService;
        this.generalService = generalService;
        this.factoryArr = [];
        this.currentUpdate = false;
    }
    FactoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.getCurrentFactories().subscribe(function (data) {
            for (var i = 0; i < _this.factoryArr.length; i++) {
                console.log("data", data);
                for (var j = 0; j < data.length; j++) {
                    var oldFactoryArr = _this.factoryArr[i];
                    if (oldFactoryArr.showUpdateForm && oldFactoryArr.factoryTitle === data[j].factoryTitle && oldFactoryArr.childAmount === data[j].childAmount && oldFactoryArr.minValue === data[j].minValue && oldFactoryArr.maxValue === data[j].maxValue) {
                        data[j].showUpdateForm = true;
                        _this.factoryArr = data;
                        return;
                    }
                }
            }
            _this.factoryArr = data;
            console.log(data);
        }, function (err) { return console.log("there was an error getting the factories", err); });
        this.generalService.cancelFactoryUpdate$.subscribe(function (info) {
            _this.removeUpdateFormFunc(info);
        }, function (err) { return console.log("there was an error canciling the factory", err); });
    };
    FactoryComponent.prototype.showUpdateFormFunc = function (info) {
        for (var i = 0; i < this.factoryArr.length; i++) {
            this.factoryArr[i].showUpdateForm = false;
        }
        this.currentUpdate = true;
        this.factoryApiService.updateFactoryObs(info);
        info.showUpdateForm = true;
    };
    FactoryComponent.prototype.removeUpdateFormFunc = function (info) {
        for (var i = 0; i < this.factoryArr.length; i++) {
            if (info._id === this.factoryArr[i]._id) {
                this.factoryArr[i].showUpdateForm = false;
            }
        }
    };
    FactoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factory',
            template: __webpack_require__(/*! ./factory.component.html */ "./src/app/factory/factory.component.html"),
            styles: [__webpack_require__(/*! ./factory.component.scss */ "./src/app/factory/factory.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_socket__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _services_factory_api__WEBPACK_IMPORTED_MODULE_2__["FactoryApiService"], _services_general__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]])
    ], FactoryComponent);
    return FactoryComponent;
}());



/***/ }),

/***/ "./src/app/services/factory-api.ts":
/*!*****************************************!*\
  !*** ./src/app/services/factory-api.ts ***!
  \*****************************************/
/*! exports provided: ANONYMOUS_FACTORY, FactoryApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANONYMOUS_FACTORY", function() { return ANONYMOUS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryApiService", function() { return FactoryApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general */ "./src/app/services/general.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ANONYMOUS_FACTORY = {
    _id: undefined,
    factoryTitle: '',
    minValue: 0,
    maxValue: 0,
    children: []
};
var FactoryApiService = /** @class */ (function () {
    function FactoryApiService(http, generalService) {
        this.http = http;
        this.generalService = generalService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](ANONYMOUS_FACTORY);
        this.factory$ = this.subject.asObservable();
    }
    FactoryApiService.prototype.updateFactoryObs = function (info) {
        this.subject.next(info);
    };
    //Create Factory
    FactoryApiService.prototype.createFactory = function (factoryInfo) {
        return this.http.post("/tree/createfactory", factoryInfo);
    };
    //Update Factory
    FactoryApiService.prototype.updateFactory = function (factoryInfo) {
        return this.http.post("/tree/updatefactory", factoryInfo);
    };
    //Delete Factory
    FactoryApiService.prototype.deleteFactory = function (factoryInfo) {
        return this.http.post("/tree/deleteFactory", factoryInfo);
    };
    FactoryApiService.prototype.cancelUpdate = function (info) {
        this.generalService.cancelFactoryUpdate$.next(info);
        this.subject.next(ANONYMOUS_FACTORY);
    };
    FactoryApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _general__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]])
    ], FactoryApiService);
    return FactoryApiService;
}());



/***/ }),

/***/ "./src/app/services/general.ts":
/*!*************************************!*\
  !*** ./src/app/services/general.ts ***!
  \*************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralService = /** @class */ (function () {
    function GeneralService(http) {
        this.http = http;
        this.showAddFactoryForm$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cancelFactoryUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    //Create Factory
    GeneralService.prototype.createFactory = function (goalInfo) {
        return this.http.post("/tree/createFactory", goalInfo);
    };
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/services/socket.ts":
/*!************************************!*\
  !*** ./src/app/services/socket.ts ***!
  \************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService(http) {
        this.http = http;
        var serverUrl = "https://passportchallenge.herokuapp.com/";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(serverUrl);
    }
    SocketService.prototype.closeSocket = function () {
        this.socket.on("disconnect", function () {
            console.log("Disconnected from server");
        });
    };
    SocketService.prototype.getCurrentFactories = function () {
        var _this = this;
        this.socket.emit("getFactories", function (msg) {
            if (msg.errMsg) {
                console.log("THERE WAS AN Error", msg.errMsg);
            }
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on("currentFactoryInfo", function (info) {
                observer.next(info);
            });
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jsand\Documents\Coding\passportChallenge\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map