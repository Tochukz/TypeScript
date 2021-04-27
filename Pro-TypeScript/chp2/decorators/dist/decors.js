var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** Method Decorator */
function log(target, key, descriptor) {
    var originalFunc = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalFunc.apply(this, args);
        console.log("Method name: " + key + " | Arguments: " + args.join(', ') + " | Result " + result);
        return result;
    };
    return descriptor;
}
/** Method Decorator Factory */
function info(title) {
    return function (target, key, descriptor) {
        var originalFunc = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalFunc.apply(this, args);
            console.log("Title: " + title + " | Arguments: " + args.join(', ') + " | Result " + result);
            return result;
        };
        return descriptor;
    };
}
/** Class Decorators */
function injector(target) {
    var originalClass = target;
    var construct = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("New Instance of " + originalClass.name);
        var con = function () {
            return originalClass.apply(null, args);
        };
        con.prototype = originalClass.prototype;
        return new con();
    };
    construct.prototype = originalClass.prototype;
    return construct;
}
/** Property decorator */
function isValid(target, key) {
    var value = target[key];
    var getter = function () {
        console.log("Getter for " + key + " returned " + value);
        return value;
    };
    var setter = function (val) {
        console.log("Setter for " + key + " set " + val);
        value = val;
    };
    // Replacing the property
    if (delete target[value]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    }
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    Calculator.prototype.multiple = function (x, y) {
        return x * y;
    };
    __decorate([
        isValid
    ], Calculator.prototype, "score", void 0);
    __decorate([
        log
    ], Calculator.prototype, "square", null);
    __decorate([
        info('Multiplication')
    ], Calculator.prototype, "multiple", null);
    Calculator = __decorate([
        injector
    ], Calculator);
    return Calculator;
}());
var calculator = new Calculator(); // New Instance of Calculator
var threeSquare = calculator.square(3); // Method name: square | Arguments: 3 | Result 9
var fiveSquare = calculator.square(5); // Method name: square | Arguments: 5 | Result 25
var fiveTimeSix = calculator.multiple(5, 6); // Title: Multiplication | Arguments: 5, 6 | Result 30
calculator.score = 89; // Setter for score set 89
var newScore = calculator.score; // 
console.log('threeSquare', threeSquare); // threeSquare 9
console.log('fiveSquare', fiveSquare); // fiveSquare 25
console.log('fiveTimeSix', fiveTimeSix); // fiveTimeSix 30
console.log('newScore', newScore); //
/**
With method decorator you can choose to observer, modify or replace the original method.
With decorator factory you can make you decorator configurable as it accepts arguments

As with method decorators, you can choose to modify, wrap, or replace the constructor passed in the
class decorator. When replacing the constructor, you must maintain the original prototype as this is not done
automatically.
*/ 
