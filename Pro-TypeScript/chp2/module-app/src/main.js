(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./services/user.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var user_service_1 = require("./services/user.service");
    var userService = new user_service_1.UserService();
    var users = userService.getUsers();
    console.log('users', users);
});
