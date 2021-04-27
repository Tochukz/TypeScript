/** Method Decorator */
function log(target: any, key: string, descriptor: any) { 
  const originalFunc = descriptor.value;
  descriptor.value = function(...args: any[]) {
    const result = originalFunc.apply(this, args);
    console.log(`Method name: ${key} | Arguments: ${args.join(', ')} | Result ${result}`);

    return result;
  }

  return descriptor;
}

/** Method Decorator Factory */
function info(title: string) {
 return function(target: any, key: string, descriptor: any) {
    const originalFunc = descriptor.value;
    descriptor.value = function(...args: any[]) {
       const result = originalFunc.apply(this, args);
       console.log(`Title: ${title} | Arguments: ${args.join(', ')} | Result ${result}`);

       return result;
    }

    return descriptor;
 }
}

/** Class Decorators */
function injector(target: any) {
  const originalClass = target;

  const construct: any = (...args) => {
    console.log(`New Instance of ${originalClass.name}`);

    const con: any = () => {
      return originalClass.apply(null, args);
    }
    con.prototype = originalClass.prototype;

    return new con();
  }

  construct.prototype = originalClass.prototype;

  return construct;
}

/** Property decorator */
function isValid(target: any, key: string) {
  let value = target[key];

  const getter = () => {
    console.log(`Getter for ${key} returned ${value}`);
    return value;
  }

  const setter = val => {
    console.log(`Setter for ${key} set ${val}`);
    value = val;
  }

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

@injector
class Calculator {
  @isValid
  score: number;

  @log
  square(n: number) {
    return n * n;
  }

  @info('Multiplication')
  multiple(x: number, y: number) {
    return x * y;
  }
}

const calculator = new Calculator(); // New Instance of Calculator
const threeSquare = calculator.square(3);      // Method name: square | Arguments: 3 | Result 9
const fiveSquare = calculator.square(5);       // Method name: square | Arguments: 5 | Result 25
const fiveTimeSix = calculator.multiple(5, 6); // Title: Multiplication | Arguments: 5, 6 | Result 30
calculator.score = 89;  // Setter for score set 89
const newScore = calculator.score; // Getter for score returned 89
console.log('threeSquare', threeSquare); // threeSquare 9
console.log('fiveSquare', fiveSquare)    // fiveSquare 25
console.log('fiveTimeSix', fiveTimeSix); // fiveTimeSix 30
console.log('newScore', newScore); // newScore 89

/**
With method decorator you can choose to observer, modify or replace the original method.
With decorator factory you can make you decorator configurable as it accepts arguments

As with method decorators, you can choose to modify, wrap, or replace the constructor passed in the
class decorator. When replacing the constructor, you must maintain the original prototype as this is not done
automatically.
*/