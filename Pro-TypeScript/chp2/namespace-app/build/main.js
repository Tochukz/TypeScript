var Models;
(function (Models) {
    var User = /** @class */ (function () {
        function User() {
        }
        User.prototype.all = function () {
            return [
                { name: 'Chima' },
                { name: 'Chike' }
            ];
        };
        return User;
    }());
    Models.User = User;
})(Models || (Models = {}));
var Controllers;
(function (Controllers) {
    var Product = /** @class */ (function () {
        function Product() {
        }
        Product.prototype.all = function () {
            return [
                { id: 1 },
                { id: 2 }
            ];
        };
        return Product;
    }());
    Controllers.Product = Product;
})(Controllers || (Controllers = {}));
var Models;
(function (Models) {
    var Product = /** @class */ (function () {
        function Product() {
        }
        Product.prototype.all = function () {
        };
        return Product;
    }());
    Models.Product = Product;
})(Models || (Models = {}));
/** Nested namespaces */
var HttpModule;
(function (HttpModule) {
    var HttpServices;
    (function (HttpServices) {
        var UserService = /** @class */ (function () {
            function UserService() {
            }
            UserService.getUser = function () {
                return [
                    { name: 'Oleka' },
                    { name: 'Mutiu' }
                ];
            };
            return UserService;
        }());
        HttpServices.UserService = UserService;
    })(HttpServices = HttpModule.HttpServices || (HttpModule.HttpServices = {}));
})(HttpModule || (HttpModule = {}));
var Services;
(function (Services) {
    var Respsitory;
    (function (Respsitory) {
        var HttpUserService = HttpModule.HttpServices.UserService;
        var UserService = /** @class */ (function () {
            function UserService() {
            }
            UserService.prototype.getUser = function () {
                return HttpUserService.getUser().map(function (user) {
                    user['id'] = Math.floor(Math.random() * 20);
                    return user;
                });
            };
            return UserService;
        }());
        Respsitory.UserService = UserService;
        var ProductService = /** @class */ (function () {
            function ProductService() {
            }
            return ProductService;
        }());
    })(Respsitory = Services.Respsitory || (Services.Respsitory = {}));
})(Services || (Services = {}));
///<reference path="models/user.ts" />
///<reference path="controllers/product.ts" />
///<reference path="models/product.ts" />
var userModel = new Models.User();
var productController = new Controllers.Product();
var HttUserService = HttpModule.HttpServices.UserService;
var userService = new Services.Respsitory.UserService();
console.log('All Users', userModel.all());
console.log('All Products', productController.all());
console.log('Http users', HttUserService.getUser());
console.log('User Service', userService.getUser());
/** Namespace / class merging  */
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
(function (Car) {
    var Engine = /** @class */ (function () {
        function Engine() {
        }
        return Engine;
    }());
    Car.Engine = Engine;
    var GearBox = /** @class */ (function () {
        function GearBox() {
        }
        return GearBox;
    }());
    Car.GearBox = GearBox;
})(Car || (Car = {}));
var car = new Car();
var engine = new Car.Engine();
console.log('Car', car.constructor['name']);
console.log('Engine', engine.constructor['name']);
