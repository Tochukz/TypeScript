/** Function type annotation */
function average(a: number, b: number, c: number ): number {
  return +((a + b + c) / 3).toFixed(2);
}

const firstAvg = average(1, 4, 6); // 3.67

const numbers: [number, number, number] = [2, 7, 11];
const secondAvg = average(...numbers); // 6.67


/** Optional Parameters */
function avg(a: number, b: number, c?: number): number {
   let avg = (a + b) / 2
   if (typeof c !== 'undefined') {
    avg = (a+ b + c) / 3
   }
   return +avg.toFixed(2)
}

const thirdAvg = avg(11, 7);     // 9
const fourthAvg = avg(12, 8, 9); // 9.67

/** Default Parameter  */
function concatenate(items: number[], separater = ', ', beginAt = 0, endAt = items.length): string {
    let str = '';
    for (let x = beginAt; x < endAt; x++) {
      str += items[x] + separater;
    }
    return str;
}
const numStr = concatenate([1, 2, 3, 4, 5]);             // 1, 2, 3, 4, 5, 
const numStr1 = concatenate([1, 2, 3, 4, 5], '-', 1, 4); // 2-3-4-

/** Rest Parameter */
function getAverage(...digits: number[]): number {
  const total = digits.reduce((prev, next) => prev + next, 0);
  return +(total/digits.length).toFixed(2);
}
const fifthAvg = getAverage(1, 5, 2, 8); // 4
const sixthAvg = getAverage(1, 5);        // 3

/** Overloads */
function getAvg(a: string, b: string, c: string): number;
function getAvg(a: number, b: number, c: number): number;
function getAvg(a: any, b: any, c: any): number {
    const total = [a, b, c].reduce((prev, next) => prev + parseInt(next), 0);
    return +(total/3).toFixed(2);
}
const seventhAvg = getAvg('1', '2','7'); // 3.33
const eightAvg = getAvg(1, 2, 7);        // 3.33

/**
  A simpler solution would be to use union type of string | number with a single function signature. 
  Union types can probably eliminate most cases for function overloads and the remaining cases can typically be replaced with optional or default parameters.  
*/

/** Specialized Overload Signature */
interface IUser {
  name: string;
  city: string;
}
class Person implements IUser {
  constructor(public name: string, public city: string, public job: string) { }
}
class Dev implements IUser {
  constructor(public name: string, public city: string, public pay: number) { }
}
class User {
  constructor(private user: IUser) {}

  getUser(type: 'person'): Person;
  getUser(type: 'dev'): Dev; 
  getUser(type: string): IUser;  // <- Non-specialized signature
  getUser(type: string): IUser { // <- Implementation signature 
    return this.user;
  }
}

const teacherUser = new User(new Person('John', 'Joburg', 'Teacher'));
const devUser = new User(new Dev('Chucks', 'Cape Town', 65000));
const teacher = teacherUser.getUser('person');
const dev = devUser.getUser('dev');

console.log(teacher instanceof Person); // true
console.log(dev instanceof Dev);        // true
console.log(dev instanceof Person);     // false

/** Function Currying */
const multiply = (a: number) => (b: number) => a * b;
const sixTimes5 = multiply(6)(5); // 30
const eightTimes = multiply(8);   // [Function]
const eightTimes7 = eightTimes(7); // 56
const eightTimes4 = eightTimes(4); // 32

/**
Currying is a process whereby a function with multiple parameter is decomposed into multiple 
functions that each take a single parameter. The resulting chain of functions can be called 
in stages, with the partly applied stage becoming resusable imlementation got the combined 
function and value.
*/
console.log('eightTimes', eightTimes);
console.log('eigthTimes7', eightTimes7);
console.log('eightTimes4', eightTimes4);
