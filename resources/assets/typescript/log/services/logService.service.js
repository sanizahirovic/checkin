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
/* * * ./app/comments/components/comment.service.ts * * */
// Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var SharedService_1 = require("../../SharedService");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var common_1 = require("@angular/common");
var LogService = (function () {
    // Resolve HTTP using the constructor
    function LogService(http, ss, datePipe) {
        this.http = http;
        this.ss = ss;
        this.datePipe = datePipe;
    }
    LogService.prototype.CheckIn = function (email) {
        this.date = new Date();
        this.date = this.datePipe.transform(this.date, 'dd MM yyyy HH:mm:ss');
        console.log(this.date);
        var bodyString = 'user_email=' + email + '&checkin=' + this.date;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post('/checkin', bodyString, options) // ...using post request
            .map(function (response) { return response.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); }); //...errors if any
    };
    LogService.prototype.CheckOut = function (email, log_id) {
        this.date = new Date();
        this.date = this.datePipe.transform(this.date, 'dd MM yyyy HH:mm:ss');
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
    return LogService;
}());
LogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, SharedService_1.SharedService, common_1.DatePipe])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=logService.service.js.map