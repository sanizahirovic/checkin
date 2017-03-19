"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../typings/browser.d.ts" />
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_module_1 = require("./login/login.module");
var common_1 = require("@angular/common");
var app_routing_1 = require("./app.routing");
var SharedService_1 = require("./SharedService");
var app_component_2 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            login_module_1.LoginModule,
            app_routing_1.routing
        ],
        providers: [SharedService_1.SharedService, common_1.DatePipe, app_component_2.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
/*
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {
  LocationStrategy,
  HashLocationStrategy,
}
from '@angular/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
*/
//# sourceMappingURL=app.module.js.map