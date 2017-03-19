"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("../services/login.service");
var router_1 = require("@angular/router");
var SharedService_1 = require("../../SharedService");
var LoginComponent = (function () {
    // Constructor with injected service
    function LoginComponent(loginService, router, ss) {
        this.loginService = loginService;
        this.router = router;
        this.ss = ss;
        this.error = false;
        this.loader = false;
    }
    LoginComponent.prototype.submitLogin = function (values) {
        var _this = this;
        this.loader = true;
        var current = this;
        // Variable to hold a reference of addComment/updateComment
        var loginOperation;
        loginOperation = this.loginService.Login(values);
        loginOperation.subscribe(function (res) {
            if (res.isLoggedIn == true) {
                _this.ss.setUserDetail(res.user);
                _this.loader = false;
                current.router.navigate(['/home']);
            }
            else {
                _this.loader = false;
                _this.error = true;
                _this.message = 'Wrong email or password!';
                _this.password = '';
                _this.email = '';
            }
        }, function (err) { console.log(err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            // logged in so return true
            this.router.navigate(['/home']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "\n    <div class=\"loader\" *ngIf=\"loader\">\n        <img src=\"../images/loader-img.gif\" alt=\"\" />\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Login</div>\n                    <div class=\"panel-body\">\n\n                        <form #form=\"ngForm\" class=\"form-horizontal\" (ngSubmit)=\"submitLogin(form.value)\">\n\n                          <input id=\"token\" type=\"hidden\"  name=\"_token\" value=\"<?php echo csrf_token(); ?>\" >\n                            <div class=\"form-group\">\n                                <label for=\"email\" class=\"col-md-4 control-label\">E-Mail Address</label>\n\n                                <div class=\"col-md-6\">\n                                    <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\">\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\n\n                                <div class=\"col-md-6\">\n                                    <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\n                                </div>\n                            </div>\n\n\n                            <div class=\"form-group\">\n                                <div class=\"col-md-6 col-md-offset-4\">\n                                    <button type=\"submit\" class=\"btn btn-primary\">\n                                        <i class=\"fa fa-btn fa-sign-in\"></i> Login\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n                        <div class=\"alert alert-danger\" *ngIf=\"error\">\n                          <strong>{{message}}</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router,
        SharedService_1.SharedService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map