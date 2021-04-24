/** Enumeration types */
enum VehicleType  {
  Bicycle,
  MotoCycle,
  Car, 
  Bus,
  Lorry
};
const vehicle = VehicleType.Car; // 2
const car = VehicleType[vehicle]; // Car

enum CityType  {
  Lagos,
  Abuja,
  Kaduna
}

enum CityType {
  CapeTown = 3,
  Joburg
}
const city1 = CityType.Abuja; // 1
const city2 = CityType.Joburg; // 4
const myCity = CityType[CityType.CapeTown]; // CapeTown

/** Constant enumerations  */
const enum FoodType {
  Rice,
  Beans,
  Break,
  Egg
}

const rice = FoodType.Rice; // 0

/** Union types */
let available: boolean | number;
available = 5;
available = true;

// Type Alias using Union type 
type Avalability = boolean | number;
const isAvailable = (item: Avalability): boolean => {
  return item === true || item > 0;
};

const book = 5;
const battery = true;
const x = 'name';

isAvailable(book);
isAvailable(battery);
// isAvailable(x); // Error: argument type error

/** Literal type */
// String Literal type
type OperatingSystem = 'Windows' | 'Linux' | 'Macintosh'; 
let myOs: OperatingSystem;
myOs = 'Windows';
myOs = 'Linux';
// myOs = 'Mac'; // Error: Type 'Mac' is not assignable to OperatingSystem

// Number Literal type
type RAM = 64 | 128 | 256 | 512;
let myRam: RAM = 64;
myRam = 128;
myRam = 256;
//myRam = 1000; // Error: Type '1000' is not assignable to type Ram

// Hybrid Literal type
type On = true | 'On' | 'Yes';
let isOn: On = true;
isOn = 'On';
isOn = 'Yes';

/** Intersection Type */
interface IRead {
  read(text: string): void;
}

interface IWrite {
  write(): string;
}

type IReadWrite = IRead & IWrite;

class CustomConsole implements IReadWrite {
  text;

  read(text: string) {
    this.text = text;
  }

  write() {
    return this.text;
  }
} 
const customConsole = new CustomConsole();
customConsole.read('Tochukwu Architech');
const output = customConsole.write();

/** Array Type */
const scores: number[] = [1, 2, 3, 4, 5];

let brands: string[];
brands = ['HP', 'Dell', 'Lenovo'];
brands = ['Omo', 'Arial', 'Clean'];

interface Person {
  name: string;
  city: string;
  pay: number;
}

const devs: Person[] = [];
devs[0] = {name: 'John', city: 'Joburg', pay: 45000};
devs.push({name: 'Chucks', city: 'Cape Town', pay: 60000});

const firstDev = devs[0].name;

/** TUrples */
let user: [string, number, boolean];
user = ['Peter Pan', 27, true];
user = ['John Kelvin', 25.5, false];

// Turple using type annotation
type Laptop = [string, number, number, boolean];
const hp: Laptop = ['HP G56', 1000, 512, true];
const dell: Laptop = ['Dell Latitude', 500, 256, true];
/*
Tuples are names after the number of items they define: 
  Pair, Triple Quadruple, Quintuple, Sextuple, Septuble. Tuples larger then seven items are named _n-tuples_ 
*/

/** Dictionaries  */
interface Electronic {
  name: string,
  power: number;
}
interface Electronics {
  [index: string]: Electronic
}
let homeAppliances: Electronics = {};
homeAppliances['television'] = { name: 'TV', power: 50};
homeAppliances['iron'] = {name: 'Pressing Iron', power: 1200};
homeAppliances['heater'] = {name: 'Heater', power: 2200};

/** Mapped Type */
interface Options {
  speed: number;
  unit: string;
}

// Manually creating, readonly, optional and nullable variations of Options type
interface ReadOnlyOptionsX {
  readonly speed: number;
  readonly unit: string;
}
interface OptionalOptionsX {
  speed?: number;
  unit?: string;
}
interface NullableOptionsX {
  spped: number | null;
  unit: string | null;
}

// Using MappedType of creeate, readonly optional and nullablr variations of Options type
type ReadOnly<T> = { readonly[k in keyof T]: T[k]};
type Optional<T> = { [k in keyof T]?: T[k]};
type Nullable<T> = { [k in keyof T]: T[k] | null};

type ReadOnlyOptions = ReadOnly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

// Using the Mapped Types
const benze: ReadOnlyOptions = {
  speed: 220,
  unit: 'km/h'
};
// benze.speed = 250; // Error: Can not assign 'speed' because it is readonly
const cpu: OptionalOptions = {
  speed: 1.8
};
cpu.speed = 2.3;
cpu.unit = 'Ghz';

class Computer {
  constructor(private options: Options) {}
}

const compaq = new Computer({speed: null, unit: null});
const accer = new Computer({speed: 2.3, unit: 'Ghz'});

const insperionOptions: OptionalOptions = {};
// const insperion = new Computer(insperionOptions);  // Error: Argument of type Optional<Options> is not assignable to parameter of type Options
