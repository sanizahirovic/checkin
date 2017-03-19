System.register(['@angular/core', '@angular/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            LoginService = (function () {
                // Resolve HTTP using the constructor
                function LoginService(http) {
                    this.http = http;
                }
                LoginService.prototype.Login = function (body) {
                    //let bodyString = JSON.stringify(body); // Stringify payload
                    var bodyString = 'email=' + body.email + '&password=' + body.password;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
                    return this.http.post('/login', bodyString, options) // ...using post request
                        .map(function (response) { return response.json(); }) // ...and calling .json() on the response to return data
                        .catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); }); //...errors if any
                };
                LoginService.prototype.setUserData = function (data) { this.userData = data; };
                LoginService.prototype.getUserData = function () { return this.userData; };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});

//# sourceMappingURL=login.service.js.map
