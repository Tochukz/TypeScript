define("services/user.service", ["require", "exports"], function (require, exports) {
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
define("main", ["require", "exports", "services/user.service"], function (require, exports, user_service_1) {
    "use strict";
    exports.__esModule = true;
    var userService = new user_service_1.UserService();
    var users = userService.getUsers();
    console.log('users', users);
});
