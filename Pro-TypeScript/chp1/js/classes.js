var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MotorVehicle = /** @class */ (function () {
    function MotorVehicle() {
    }
    MotorVehicle.prototype.start = function () {
    };
    MotorVehicle.prototype.accelerate = function () {
    };
    return MotorVehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 20;
        _this.capacity = 30;
        _this.volume = 160;
        return _this;
    }
    Car.prototype.accelarate = function () {
        _super.prototype.accelerate.call(this);
        // Do stuff
    };
    return Car;
}(MotorVehicle));
/** Abstract Classes */
var Logger = /** @class */ (function () {
    function Logger() {
        this.FgBlue = "\x1b[34m";
        this.FgRed = "\x1b[31m";
        this.FgGreen = "\x1b[32m";
        this.FgWhite = "\x1b[37m";
    }
    Logger.prototype.log = function (message, color) {
        if (color === void 0) { color = this.FgGreen; }
        console.log(color, message, this.FgWhite);
    };
    return Logger;
}());
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleLogger.prototype.info = function (message) {
        console.log(this.FgBlue, message);
    };
    ConsoleLogger.prototype.error = function (message) {
        this.log(message, this.FgRed);
    };
    return ConsoleLogger;
}(Logger));
var consoleLogger = new ConsoleLogger();
consoleLogger.log('Inheriting an abstract class method');
consoleLogger.info('Implementing an abstract class abstract method');
consoleLogger.error('Using an abtract class method');
console.log(consoleLogger instanceof ConsoleLogger); // true
console.log(consoleLogger instanceof Logger); // true
console.log('FgBlue' in consoleLogger); // true 
// returns false because the property msg is uninitialized.
console.log('msg' in consoleLogger); // false
console.log(consoleLogger.constructor['name']); // ConsoleLogger
/** Scope */
var ClickCounter = /** @class */ (function () {
    function ClickCounter() {
        var _this = this;
        this.count = 0;
        // This may not be an efficient choice because a duplicate of the function will be created for every instance of this class
        this.registerClickB = function () {
            _this.count++;
            console.log('Click CountB: ', _this.count);
        };
    }
    ClickCounter.prototype.registerClickA = function () {
        this.count++;
        console.log('Click CountA: ', this.count);
    };
    ClickCounter.prototype.registerClickC = function () {
        this.count++;
        console.log('Click CountC: ', this.count);
    };
    return ClickCounter;
}());
var clickCounter = new ClickCounter();
// For Browsers only
if (document && document.getElementById) {
    // This clickCounter object context ('this')  is lost here
    document.getElementById('btnA').onclick = clickCounter.registerClickA; // Click CountA:  NaN
    // This clickCounter object context ('this')  is preserved because the method is a property and arrow function
    document.getElementById('btnB').onclick = clickCounter.registerClickB; // Click CountB:  3
    // This clickCounter object context ('this')  is preserved because we exlicitly bind the method to the instance.
    document.getElementById('btnC').onclick = clickCounter.registerClickC.bind(clickCounter); // Click CountC:  4
    // This clickCounter object context ('this')  is preserved because of the wrapping function
    document.getElementById('btnD').onclick = function () {
        clickCounter.registerClickA(); //Click CountA: 5
    };
}
setTimeout(function () {
    clickCounter.registerClickA(); // Click CountA:  1
    clickCounter.registerClickB(); // Click CountA:  2
}, 1000);
