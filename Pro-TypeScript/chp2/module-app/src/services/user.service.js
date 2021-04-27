(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.UserService = void 0;
    var UserService = /** @class */ (function () {
        function UserService() {
        }
        UserService.prototype.getUsers = function () {
            return [
                { name: 'Chima' },
                { name: 'Chike' }
            ];
        };
        return UserService;
    }());
    exports.UserService = UserService;
});
