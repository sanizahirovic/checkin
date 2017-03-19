System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '../../SharedService', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1, SharedService_1, common_1;
    var LogService;
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
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            LogService = (function () {
                // Resolve HTTP using the constructor
                function LogService(http, ss, datePipe) {
                    this.http = http;
                    this.ss = ss;
                    this.datePipe = datePipe;
                }
                LogService.prototype.CheckIn = function (email) {
                    this.date = new Date();
                    this.date = this.datePipe.transform(this.date, 'dd MM yyyy hh:mm:ss');
                    var bodyString = 'user_email=' + email + '&checkin=' + this.date;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
                    return this.http.post('/checkin', bodyString, options) // ...using post request
                        .map(function (response) { return response.json(); }) // ...and calling .json() on the response to return data
                        .catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); }); //...errors if any
                };
                LogService.prototype.CheckOut = function (email, log_id) {
                    this.date = new Date();
                    this.date = this.datePipe.transform(this.date, 'dd MM yyyy hh:mm:ss');
                    var bodyString = 'user_email=' + email + '&checkin=' + this.date + '&log_id=' + log_id;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
                    return this.http.post('/checkout', bodyString, options) // ...using post request
                        .map(function (response) { return response.json(); }) // ...and calling .json() on the response to return data
                        .catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); }); //...errors if any
                };
                LogService.prototype.getLogs = function () {
                    this.user_email = this.ss.getUserDetail();
                    // ...using get request
                    return this.http.get('/logs/' + this.user_email.email)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); });
                };
                LogService.prototype.logout = function () {
                    // ...using get request
                    return this.http.get('/logout')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); });
                };
                LogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, SharedService_1.SharedService, common_1.DatePipe])
                ], LogService);
                return LogService;
            }());
            exports_1("LogService", LogService);
        }
    }
});

//# sourceMappingURL=logService.service.js.map
