System.register(['@angular/core', '../services/logService.service', '../../SharedService', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, logService_service_1, SharedService_1, router_1;
    var LogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logService_service_1_1) {
                logService_service_1 = logService_service_1_1;
            },
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LogsComponent = (function () {
                function LogsComponent(logService, router, ss) {
                    this.logService = logService;
                    this.router = router;
                    this.ss = ss;
                    this.checking = false;
                    this.loader = false;
                }
                LogsComponent.prototype.checkin = function (values) {
                    var _this = this;
                    this.loader = true;
                    var current = this;
                    // Variable to hold a reference of addComment/updateComment
                    var logOperation;
                    logOperation = this.logService.CheckIn(values);
                    logOperation.subscribe(function (res) {
                        _this.checking = true;
                        _this.log_id = res.log_id;
                        _this.loader = false;
                    }, function (err) { _this.loader = false; });
                };
                LogsComponent.prototype.checkout = function (values) {
                    var _this = this;
                    this.loader = true;
                    var current = this;
                    // Variable to hold a reference of addComment/updateComment
                    var logOperation;
                    logOperation = this.logService.CheckOut(values, this.log_id);
                    logOperation.subscribe(function (res) {
                        _this.checking = false;
                        _this.loader = false;
                    }, function (err) { _this.loader = false; });
                    this.loadLogs();
                };
                LogsComponent.prototype.logout = function () {
                    var _this = this;
                    this.loader = true;
                    var current = this;
                    this.logService.logout()
                        .subscribe(function (res) {
                        if (res.isLoggedIn == false) {
                            _this.loader = false;
                            localStorage.removeItem('user');
                            current.router.navigate(['']);
                        }
                    }, function (err) { _this.loader = false; });
                };
                LogsComponent.prototype.loadLogs = function () {
                    var _this = this;
                    this.loader = true;
                    // Get all comments
                    this.logService.getLogs()
                        .subscribe(function (res) {
                        _this.logs = res.logs;
                        _this.loader = false;
                    }, function (err) { _this.loader = false; });
                };
                LogsComponent.prototype.ngOnInit = function () {
                    // Load comments
                    this.loadLogs();
                    this.user = this.ss.getUserDetail();
                };
                LogsComponent.prototype.ngOnChanges = function (changes) {
                    // Listen to the 'list'emitted event so as populate the model
                    // with the event payload
                };
                LogsComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        providers: [logService_service_1.LogService],
                        template: "\n    <div class=\"loader\" *ngIf=\"loader\">\n        <img src=\"../../images/loader-img.gif\" alt=\"\" />\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-1\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Dashboard</div>\n\n                    <div class=\"panel-body\">\n                        You are logged in! Welcome <span>{{ user.name }} </span>\n                        <button type=\"submit\" class=\"logout btn btn-primary\"  (click)=\"logout()\">Logout</button>\n                        <hr/>\n                        <table class=\"table\">\n                            <thead>\n                              <tr>\n                                <th>Checkin time</th>\n                                <th>Checkout time</th>\n                                <th>Total time</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let log of logs\">\n                                <td>{{log.checkin}} </td>\n                                <td>{{log.checkout}}</td>\n                                <td>{{log.total_time}}</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                    </div>\n\n                    <button *ngIf=\"checking\" type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"checkout(user?.email)\">Checkout</button>\n                    <button *ngIf=\"!checking\" type=\"submit\" class=\"btn btn-warning btn-block\" (click)=\"checkin(user?.email)\">Checkin</button>\n                </div>\n            </div>\n        </div>\n    </div>\n "
                    }), 
                    __metadata('design:paramtypes', [logService_service_1.LogService, router_1.Router, SharedService_1.SharedService])
                ], LogsComponent);
                return LogsComponent;
            }());
            exports_1("LogsComponent", LogsComponent);
        }
    }
});

//# sourceMappingURL=logs.component.js.map
