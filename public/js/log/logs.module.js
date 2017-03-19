System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/http', './components/logs.component', '../app.routing'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, http_1, logs_component_1, app_routing_1;
    var LogModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (logs_component_1_1) {
                logs_component_1 = logs_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            LogModule = (function () {
                function LogModule() {
                }
                LogModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            http_1.JsonpModule,
                            app_routing_1.routing
                        ],
                        declarations: [
                            logs_component_1.LogsComponent
                        ],
                        providers: [],
                        exports: [
                            logs_component_1.LogsComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogModule);
                return LogModule;
            }());
            exports_1("LogModule", LogModule);
        }
    }
});

//# sourceMappingURL=logs.module.js.map
