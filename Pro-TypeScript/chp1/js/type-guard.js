var Vessel = /** @class */ (function () {
    function Vessel() {
    }
    Vessel.isArirCraft = function (craft) {
        return 'ascend' in craft;
    };
    Vessel.isSubmarin = function (craft) {
        return 'float' in craft;
    };
    return Vessel;
}());
var Jet = /** @class */ (function () {
    function Jet() {
    }
    Jet.prototype.speed = function () {
    };
    Jet.prototype.ascend = function () {
    };
    return Jet;
}());
var SeaWolf = /** @class */ (function () {
    function SeaWolf() {
    }
    SeaWolf.prototype.speed = function () {
    };
    SeaWolf.prototype.float = function () {
    };
    return SeaWolf;
}());
var myJet = new Jet();
var seaWolf = new SeaWolf();
var isPlane = Vessel.isArirCraft(myJet); // true
var isSubmarin = Vessel.isSubmarin(myJet); // false
var IsRealSubmarin = Vessel.isSubmarin(seaWolf); // true
console.log({ isPlane: isPlane, isSubmarin: isSubmarin, IsRealSubmarin: IsRealSubmarin });
console.log('float' in seaWolf); //
console.log(seaWolf.hasOwnProperty('float')); // 
