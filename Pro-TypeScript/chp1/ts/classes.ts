interface IVehicle {
  speed: number;
  start(): void;
  accelarate(speed: number, time: number): void;
}

interface IEngine {
  capacity: number;
  volume: number;
}

class MotorVehicle {
  start() {
    
  }

  accelerate() {

  }
}

class Car extends MotorVehicle implements IVehicle, IEngine {
    speed = 20;
    capacity = 30;
    volume = 160;

    accelarate() {
      super.accelerate();
      // Do stuff
    }
}

/** Abstract Classes */
abstract class Logger {
  public FgBlue = "\x1b[34m";
  protected FgRed = "\x1b[31m"; 
  private FgGreen = "\x1b[32m";
  public FgWhite = "\x1b[37m";

  abstract info(message: string): void;

  log(message: string, color = this.FgGreen): void {
    console.log(color, message, this.FgWhite);
  }
}

class ConsoleLogger extends Logger {
    msg: string;
    info(message: string): void {
      console.log(this.FgBlue, message);
    }

    error(message: string) {
       this.log(message, this.FgRed);     
    }
}

const consoleLogger = new ConsoleLogger();
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
class ClickCounter {
  private count = 0;

  registerClickA() {
    this.count++;
    console.log('Click CountA: ', this.count);
  }

  // This may not be an efficient choice because a duplicate of the function will be created for every instance of this class
  registerClickB = () => {
    this.count++;
    console.log('Click CountB: ', this.count);
  }

  registerClickC() {
    this.count++;
    console.log('Click CountC: ', this.count);
  }
}

const clickCounter = new ClickCounter();
// For Browsers only
if (document && document.getElementById) {
    // This clickCounter object context ('this')  is lost here
    document.getElementById('btnA').onclick = clickCounter.registerClickA // Click CountA:  NaN
    // This clickCounter object context ('this')  is preserved because the method is a property and arrow function
    document.getElementById('btnB').onclick = clickCounter.registerClickB // Click CountB:  3
    // This clickCounter object context ('this')  is preserved because we exlicitly bind the method to the instance.
    document.getElementById('btnC').onclick = clickCounter.registerClickC.bind(clickCounter); // Click CountC:  4
    // This clickCounter object context ('this')  is preserved because of the wrapping function
    document.getElementById('btnD').onclick = function() {
        clickCounter.registerClickA(); //Click CountA: 5
    };
}

setTimeout(() => {
  clickCounter.registerClickA(); // Click CountA:  1
  clickCounter.registerClickB(); // Click CountA:  2
}, 1000);

