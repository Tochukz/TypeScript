var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/*Converting a string to a number using the uniary operator (shorthand method)*/
var str = '5';
var num = +str;
var negNum = -str;
console.log(typeof str);
console.log(typeof num);
console.log(typeof negNum);
/*Using && outside a logical context */
var obj = new Object();
obj && console.log('obj Object is set');
var player1 = 'Chima';
var player2 = player1 && 'Ebuka';
console.log(player2);
/*Using the OR operator to coalesce two values. Much like the PHP null coalesce operator (??) */
var user = null;
var username = user || 'guest';
console.log(username);
user = 'truetochukz';
username = user || 'guest';
console.log(username);
/*Array destructuring is unpacking the elements of an array into namesd variables
* It is similar to assigning a list() to numeric array in PHP i.e list($var1, $var2) = ['valX', 'valY].
*/
var shapes = ['triangle', 'circle', 'sqaure', 'trapezuim', 'Parallelogram'];
var s1 = shapes[0], s2 = shapes[1], s3 = shapes[2];
console.log(s2);
//Destructing using rest parameters i.e ...xx
var x1 = shapes[0], x3 = shapes[1], xx = shapes.slice(2);
console.log(xx);
//Rest paramteter in function signature
function getShapes(name) {
    var shapes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        shapes[_i - 1] = arguments[_i];
    }
    var shs = name;
    shapes.forEach(function (elem) {
        shs += ' ' + elem;
    });
    console.log(shs);
}
getShapes('Basic Shapes:', 'Triangle', 'Cirlce', 'Square');
//Variable swapping using destructing
var a = 10, b = 17;
console.log(a, b);
_a = [b, a], a = _a[0], b = _a[1];
console.log(a, b);
//Destructing objects
var things = { gadget: 'Laptop', cutlery: 'Plate', toiletry: 'Tooth paste' };
var gd = things.gadget, ct = things.cutlery, tl = things.toiletry;
console.log(ct);
//Automatically unpack an object by using the same variable name
var gadget = things.gadget, cutlery = things.cutlery, toiletry = things.toiletry;
console.log(toiletry);
//Destructing objects using the rest parameter
//const {gadget, ...others} = things;
//console.log(others);
//Destrcuting with default values
var animals = ['Lion', 'Tiger', 'Elephant', 'Goat'];
var li = animals[0], ti = animals[1], el = animals[2], _b = animals[3], gt = _b === void 0 ? 'Sheep' : _b, _c = animals[4], lm = _c === void 0 ? 'Lama' : _c;
console.log(gt, lm);
//Turple Destructuring
function getAddress() {
    return [38, '8th street', 2092];
}
var _d = getAddress(), $no = _d[0], $street = _d[1], $code = _d[2];
console.log($no, $street, $code);
/*SPREAD OPERATOR
*The spread operator works in the opposite way to destructuring. */
var fish = ['Shark', 'Mackarel', 'Tilapia'];
var meat = ['Goat', 'Cow', 'Sheep'];
var food = fish.concat(meat); //Sort of an array_merge in php.
console.log(food);
//Spread operation with objects
var drinks = { mineral: 'Coke', beverage: 'Milo' };
var soup = { draw: 'Obgono', vegetable: 'Egusi' };
var soup_n_drinks = __assign({}, drinks, soup);
console.log(soup_n_drinks);
//Spread operator in function agument
function add(a, b, c) {
    return a + b + c;
}
var nums = [1, 4, 6];
var _a;
//const total = add(...nums); doesn't seen to work, i  don't know why.
