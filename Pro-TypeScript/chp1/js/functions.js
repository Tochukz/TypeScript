/** Function type annotation */
function average(a, b, c) {
    return +((a + b + c) / 3).toFixed(2);
}
var firstAvg = average(1, 4, 6); // 3.67
var numbers = [2, 7, 11];
var secondAvg = average.apply(void 0, numbers); // 6.67
/** Optional Parameters */
function avg(a, b, c) {
    var avg = (a + b) / 2;
    if (typeof c !== 'undefined') {
        avg = (a + b + c) / 3;
    }
    return +avg.toFixed(2);
}
var thirdAvg = avg(11, 7); // 9
var fourthAvg = avg(12, 8, 9); // 9.67
/** Default Parameter  */
function concatenate(items, separater, beginAt, endAt) {
    if (separater === void 0) { separater = ', '; }
    if (beginAt === void 0) { beginAt = 0; }
    if (endAt === void 0) { endAt = items.length; }
    var str = '';
    for (var x = beginAt; x < endAt; x++) {
        str += items[x] + separater;
    }
    return str;
}
var numStr = concatenate([1, 2, 3, 4, 5]); // 1, 2, 3, 4, 5, 
var numStr1 = concatenate([1, 2, 3, 4, 5], '-', 1, 4); // 2-3-4-
/** Rest Parameter */
function getAverage() {
    var digits = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digits[_i] = arguments[_i];
    }
    var total = digits.reduce(function (prev, next) { return prev + next; }, 0);
    return +(total / digits.length).toFixed(2);
}
var fifthAvg = getAverage(1, 5, 2, 8); // 4
var sixthAvg = getAverage(1, 5); // 3
function getAvg(a, b, c) {
    var total = [a, b, c].reduce(function (prev, next) { return prev + parseInt(next); }, 0);
    return +(total / 3).toFixed(2);
}
var seventhAvg = getAvg('1', '2', '7'); // 3.33
var eightAvg = getAvg(1, 2, 7); // 3.33
var Person = /** @class */ (function () {
    function Person(name, city, job) {
        this.name = name;
        this.city = city;
        this.job = job;
    }
    return Person;
}());
var Dev = /** @class */ (function () {
    function Dev(name, city, pay) {
        this.name = name;
        this.city = city;
        this.pay = pay;
    }
    return Dev;
}());
var User = /** @class */ (function () {
    function User(user) {
        this.user = user;
    }
    User.prototype.getUser = function (type) {
        return this.user;
    };
    return User;
}());
var teacherUser = new User(new Person('John', 'Joburg', 'Teacher'));
var devUser = new User(new Dev('Chucks', 'Cape Town', 65000));
var teacher = teacherUser.getUser('person');
var dev = devUser.getUser('dev');
console.log(teacher instanceof Person); // true
console.log(dev instanceof Dev); // true
console.log(dev instanceof Person); // false
/** Function Currying */
var multiply = function (a) { return function (b) { return a * b; }; };
var sixTimes5 = multiply(6)(5); // 30
var eightTimes = multiply(8); // [Function]
var eightTimes7 = eightTimes(7); // 56
var eightTimes4 = eightTimes(4); // 32
/**
Currying is a process whereby a function with multiple parameter is decomposed into multiple
functions that each take a single parameter. The resulting chain of functions can be called
in stages, with the partly applied stage becoming resusable imlementation got the combined
function and value.
*/
console.log('eightTimes', eightTimes);
console.log('eigthTimes7', eightTimes7);
console.log('eightTimes4', eightTimes4);
