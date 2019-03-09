/*Converting a string to a number using the uniary operator (shorthand method)*/
let str = '5';
let num = +str;
let negNum = -str;
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
var [s1, s2, s3] = shapes;
console.log(s2);

//Destructing using rest parameters i.e ...xx
var [x1, x3, ...xx] = shapes;
console.log(xx);

//Rest paramteter in function signature
function getShapes(name: string, ...shapes: string[]){
    var shs = name;
    shapes.forEach(function(elem){
        shs += ' '+elem;
    });
    console.log(shs);
}
getShapes('Basic Shapes:', 'Triangle', 'Cirlce', 'Square');

//Variable swapping using destructing
var a=10, b=17;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

//Destructing objects
const things = {gadget:'Laptop', cutlery:'Plate', toiletry:'Tooth paste'};
const {gadget:gd, cutlery:ct, toiletry:tl} = things;
console.log(ct);

//Automatically unpack an object by using the same variable name
const {gadget, cutlery, toiletry} = things;
console.log(toiletry);
//Destructing objects using the rest parameter
//const {gadget, ...others} = things;
//console.log(others);

//Destrcuting with default values
const animals = ['Lion', 'Tiger', 'Elephant', 'Goat'];
const [li, ti, el, gt='Sheep', lm='Lama'] = animals;
console.log(gt, lm);
//Turple Destructuring
function getAddress(): [number, string, number] {
    return [38, '8th street', 2092];
}
const[$no, $street, $code] = getAddress();
console.log($no, $street, $code);

/*SPREAD OPERATOR
*The spread operator works in the opposite way to destructuring. */
let fish = ['Shark', 'Mackarel', 'Tilapia'];
let meat = ['Goat', 'Cow', 'Sheep'];
const food = [...fish, ...meat]; //Sort of an array_merge in php.
console.log(food);
//Spread operation with objects
const drinks = {mineral:'Coke', beverage:'Milo'};
const soup = {draw:'Obgono', vegetable:'Egusi'};
const soup_n_drinks = {...drinks, ...soup};
console.log(soup_n_drinks);
//Spread operator in function agument
function add(a: number, b: number, c: number): number{
    return a+b+c;
}
const nums = [1, 4, 6];
//const total = add(...nums); doesn't seen to work, i  don't know why.


