System.register(["@angular/router", './login/components/login.component', './log/components/logs.component', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_component_1, logs_component_1, app_component_1;
    var APP_ROUTES, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (logs_component_1_1) {
                logs_component_1 = logs_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            APP_ROUTES = [
                { path: '', component: login_component_1.LoginComponent },
                { path: 'home', component: logs_component_1.LogsComponent, canActivate: [app_component_1.AuthGuard] },
                { path: '**', redirectTo: '/', pathMatch: 'full' },
            ];
            exports_1("routing", routing = [router_1.RouterModule.forRoot(APP_ROUTES)]);
        }
    }
});

//# sourceMappingURL=app.routing.js.map
