System.register("services/user.service", [], function (exports_1, context_1) {
    "use strict";
    var UserService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            UserService = /** @class */ (function () {
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
            exports_1("UserService", UserService);
        }
    };
});
System.register("main", ["services/user.service"], function (exports_2, context_2) {
    "use strict";
    var user_service_1, userService, users;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            userService = new user_service_1.UserService();
            users = userService.getUsers();
            console.log('users', users);
        }
    };
});
