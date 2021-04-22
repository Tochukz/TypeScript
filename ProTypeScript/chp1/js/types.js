/** Enumeration types */
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Bicycle"] = 0] = "Bicycle";
    VehicleType[VehicleType["MotoCycle"] = 1] = "MotoCycle";
    VehicleType[VehicleType["Car"] = 2] = "Car";
    VehicleType[VehicleType["Bus"] = 3] = "Bus";
    VehicleType[VehicleType["Lorry"] = 4] = "Lorry";
})(VehicleType || (VehicleType = {}));
;
var vehicle = VehicleType.Car; // 2
var car = VehicleType[vehicle]; // Car
var CityType;
(function (CityType) {
    CityType[CityType["Lagos"] = 0] = "Lagos";
    CityType[CityType["Abuja"] = 1] = "Abuja";
    CityType[CityType["Kaduna"] = 2] = "Kaduna";
})(CityType || (CityType = {}));
(function (CityType) {
    CityType[CityType["CapeTown"] = 3] = "CapeTown";
    CityType[CityType["Joburg"] = 4] = "Joburg";
})(CityType || (CityType = {}));
var city1 = CityType.Abuja; // 1
var city2 = CityType.Joburg; // 4
var myCity = CityType[CityType.CapeTown]; // CapeTown
var rice = 0 /* Rice */; // 0
/** Union types */
var available;
available = 5;
available = true;
var isAvailable = function (item) {
    return item === true || item > 0;
};
var book = 5;
var battery = true;
var x = 'name';
isAvailable(book);
isAvailable(battery);
var myOs;
myOs = 'Windows';
myOs = 'Linux';
var myRam = 64;
myRam = 128;
myRam = 256;
var isOn = true;
isOn = 'On';
isOn = 'Yes';
var CustomConsole = /** @class */ (function () {
    function CustomConsole() {
    }
    CustomConsole.prototype.read = function (text) {
        this.text = text;
    };
    CustomConsole.prototype.write = function () {
        return this.text;
    };
    return CustomConsole;
}());
var customConsole = new CustomConsole();
customConsole.read('Tochukwu Architech');
var output = customConsole.write();
/** Array Type */
var scores = [1, 2, 3, 4, 5];
var brands;
brands = ['HP', 'Dell', 'Lenovo'];
brands = ['Omo', 'Arial', 'Clean'];
var devs = [];
devs[0] = { name: 'John', city: 'Joburg', pay: 45000 };
devs.push({ name: 'Chucks', city: 'Cape Town', pay: 60000 });
var firstDev = devs[0].name;
/** TUrples */
var user;
user = ['Peter Pan', 27, true];
user = ['John Kelvin', 25.5, false];
var hp = ['HP G56', 1000, 512, true];
var dell = ['Dell Latitude', 500, 256, true];
var homeAppliances = {};
homeAppliances['television'] = { name: 'TV', power: 50 };
homeAppliances['iron'] = { name: 'Pressing Iron', power: 1200 };
homeAppliances['heater'] = { name: 'Heater', power: 2200 };
// Using the Mapped Types
var benze = {
    speed: 220,
    unit: 'km/h'
};
// benze.speed = 250; // Error: Can not assign 'speed' because it is readonly
var cpu = {
    speed: 1.8
};
cpu.speed = 2.3;
cpu.unit = 'Ghz';
var Computer = /** @class */ (function () {
    function Computer(options) {
        this.options = options;
    }
    return Computer;
}());
var compaq = new Computer({ speed: null, unit: null });
var accer = new Computer({ speed: 2.3, unit: 'Ghz' });
var insperionOptions = {};
// const insperion = new Computer(insperionOptions);  // Error: Argument of type Optional<Options> is not assignable to parameter of type Options
