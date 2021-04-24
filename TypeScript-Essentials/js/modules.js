/**
 * Internal modules represent namespaces that classes, interfaces, enums, variables, code segments and other namespaces
 * can exist inside of.
 */
var people;
(function (people) {
    //workers is a private instance member
    var workers = 'programmer';
    /*work enum has to be exported for out code to compile
     *Any named types that are used in the defination of another member must be made accessible as that member
     *If this requirment in not met compilation willl fail
     */
    var work;
    (function (work) {
        work[work["position"] = 0] = "position";
        work[work["salary"] = 1] = "salary";
    })(work = people.work || (people.work = {}));
    var Worker = /** @class */ (function () {
        function Worker() {
            this.position = work.position;
            this.salary = work.salary;
        }
        Worker.prototype.post = function () {
            return "Full stack Dev";
        };
        Worker.prototype.wages = function () {
            return 35000;
        };
        return Worker;
    }());
    people.Worker = Worker;
})(people || (people = {}));
/* Modules can be merged like enums, so you can seperate your code into multiple files and merge them
 * The downside to this implementation is that it takes away the ability to create interfaces for your modules
 */
/*There are two ways to provide module namespaces in type script */
var AnimalsTerr;
(function (AnimalsTerr) {
    var Reptiles;
    (function (Reptiles) {
        Reptiles.reptile = 'Snake';
    })(Reptiles = AnimalsTerr.Reptiles || (AnimalsTerr.Reptiles = {}));
    var Amphibian;
    (function (Amphibian) {
        Amphibian.amphibian = 'Toad';
    })(Amphibian = AnimalsTerr.Amphibian || (AnimalsTerr.Amphibian = {}));
})(AnimalsTerr || (AnimalsTerr = {}));
var AnimalsAqu;
(function (AnimalsAqu) {
    var Mammals;
    (function (Mammals) {
        Mammals.mammal = 'Monkey';
    })(Mammals = AnimalsAqu.Mammals || (AnimalsAqu.Mammals = {}));
})(AnimalsAqu || (AnimalsAqu = {}));
(function (AnimalsAqu) {
    var Birds;
    (function (Birds) {
        Birds.bird = 'Peagon';
    })(Birds = AnimalsAqu.Birds || (AnimalsAqu.Birds = {}));
})(AnimalsAqu || (AnimalsAqu = {}));
