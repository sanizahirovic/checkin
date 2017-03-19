"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/components/login.component");
var logs_component_1 = require("./log/components/logs.component");
var app_component_1 = require("./app.component");
var APP_ROUTES = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'home', component: logs_component_1.LogsComponent, canActivate: [app_component_1.AuthGuard] },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
exports.routing = [router_1.RouterModule.forRoot(APP_ROUTES)];
//# sourceMappingURL=app.routing.js.map