/*Union type */
let val: boolean | number;
val = true;
val = 5;
/*Using type alias to define union types */
type BoolOrNum = boolean |number;
let returnVal: BoolOrNum;
returnVal = false;
returnVal = 0;
/*Using type alias to define union types of non primitive types*/
type PriColors = {
    red: string;
    yellow: string;
    blue: string;
}
interface SecColors {
    green: string;
    purple: string;
}
type mixColors = PriColors | SecColors;
let myColors: mixColors;
myColors = {red:'#f00', yellow:'#345', blue:'#00f'};
myColors = {green:'#0f0', purple:'#808'};

/*Literal type are like union types but they have a narrow range of allowable values */
/*Defining a String Literal Type */
type Kingdom = 'Animalia' | 'Plantae' | 'Fungi' | 'Protozoa' | 'Chromista' | 'Bakcteria';
let kingdom: Kingdom;
kingdom = 'Animalia';
kingdom = 'Fungi';

/*Defining a Number Literal type*/
type GigSize = 1 | 2 | 4 | 8 | 16 | 32 | 64;
let flashDrive: GigSize;
flashDrive = 16;
flashDrive = 64;
/*Hybrid union/literal type */
type Random = 'Yes' | true | 1;
let random: Random;
random = 'Yes';
random = true;
random = 1;

/*Intersection types combines server types into a single super type 
* Where union type is "either type A or B", intersection type is "both type A and B".
*/
/*Defining an intersection types*/
interface Maths{
    calculate(num: number): number;
}
interface Computer{
    compute(num: number): number;
}
type MathComp = Maths & Computer;
let getAns: MathComp;

/*Arrays*/
interface User{
    name: string;
    city: string;
    age: number;
}
let someusers: User[] = [];
someusers.push({
    name:'Chichi',
    city:'Lagos',
    age: 34

});
someusers.push({
    name:'Uche',
    city:'texas',
    age: 30
})
someusers.push({
    name:'Chukwudi',
    city:'New jessy',
    age:37
});
someusers.push({
    name:'Tochi',
    city:'JHB',
    age:33
});


function sortByAge(a: User, b: User){
    if(b.age > a.age){
        return -1;
    }else if(b.age <a.age){
        return 1;
    }else{
        return 0;
    }
}
var usersByAge = someusers.sort(sortByAge);
var ageStr = '';
usersByAge.forEach(function(user){
    ageStr += ' '+user.age;
});
console.log(ageStr);
var firstPerson = someusers[0].name;//returns string 'Uche'
console.log(firstPerson);

/*A Tuple type uses an array and specify the type of elements based on their position */
let customer: [string, number, string];
customer = ['Kateco', 12, 'Alex'];
customer = ['Reya', 18, 'Alex'];

/*Defining a dictionay */
interface Apartment{
    rooms: number;
    packing: boolean;
}

interface Flat{
    [index: string]: Apartment;
}
let flats: Flat = {};
flats['bachelor'] = {rooms:1, packing:true};
flats['two-rooms'] = {rooms:2, packing:true};
flats['student-accom'] = {rooms:1, packing:false};
console.log(flats['bachelor'].rooms);
console.log(flats['two-rooms'].rooms);
console.log(flats['student-accom'].packing);




