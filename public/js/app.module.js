System.register(['@angular/platform-browser', '@angular/core', '@angular/forms', '@angular/http', './app.component', './login/login.module', '@angular/common', './app.routing', './SharedService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_1, core_1, forms_1, http_1, app_component_1, login_module_1, common_1, app_routing_1, SharedService_1, app_component_2;
    var AppModule;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
                app_component_2 = app_component_1_1;
            },
            function (login_module_1_1) {
                login_module_1 = login_module_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
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
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
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
