System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Log;
    return {
        setters:[],
        execute: function() {
            /* * * ./app/comments/model/comment.ts * * */
            Log = (function () {
                function Log(checkin, checkout, user_email) {
                    this.checkin = checkin;
                    this.checkout = checkout;
                    this.user_email = user_email;
                }
                return Log;
            }());
            exports_1("Log", Log);
        }
    }
});

//# sourceMappingURL=log.model.js.map
