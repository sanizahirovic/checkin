System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './components/login.component', '../log/components/logs.component', './services/login.service', '../app.routing'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, login_component_1, logs_component_1, login_service_1, app_routing_1;
    var LoginModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (logs_component_1_1) {
                logs_component_1 = logs_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            LoginModule = (function () {
                function LoginModule() {
                }
                LoginModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            http_1.JsonpModule,
                            app_routing_1.routing,
                        ],
                        declarations: [
                            login_component_1.LoginComponent,
                            logs_component_1.LogsComponent
                        ],
                        providers: [
                            login_service_1.LoginService
                        ],
                        exports: [
                            login_component_1.LoginComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginModule);
                return LoginModule;
            }());
            exports_1("LoginModule", LoginModule);
        }
    }
});

//# sourceMappingURL=login.module.js.map
