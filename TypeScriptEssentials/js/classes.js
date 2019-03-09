/*Defining a class */
var PersonalInfo = /** @class */ (function () {
    function PersonalInfo(fname, lname, job) {
        if (job === void 0) { job = 'web programmer'; }
        this.firstName = fname;
        this.lastName = lname;
        this.job = job;
    }
    PersonalInfo.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    PersonalInfo.prototype.getJob = function () {
        return this.job;
    };
    return PersonalInfo;
}());
var person = new PersonalInfo('Uche', 'Nwachukwu');
document.getElementById('div1').innerText = person.getFullName();
document.getElementById('div2').innerText = person.getJob();
var newPerson = new PersonalInfo('Tochi', 'Nwachukwu', 'full stack developer');
document.getElementById('div3').innerText = newPerson.getFullName() + ' ' + newPerson.getJob();
var Student = /** @class */ (function () {
    function Student(firstName, initialMiddle, lastName) {
        this.firstName = firstName;
        this.initialMiddle = initialMiddle;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + initialMiddle + ' ' + lastName;
        /* Using public or private keyword in the constructor signature is a shorthand method of automatically
         * creating properties having the same name as the named arguments
         */
    }
    return Student;
}());
function greet(person) {
    return "Hello " + person.firstName + ' ' + person.lastName;
}
var student = new Student('James', 'F', 'Cordon');
document.getElementById('div4').innerHTML = greet(student);
/*Defining static memebers */
var Feeding = /** @class */ (function () {
    function Feeding() {
    }
    Feeding.prototype.getFood = function () {
        return "Just food";
    };
    Feeding.getDefaultFood = function () {
        var food = Feeding.breakFast + ' ' + Feeding.lunch + ' ' + Feeding.dinner;
        return food;
    };
    Feeding.breakFast = "Sandwich";
    Feeding.lunch = "Oath";
    Feeding.dinner = "Rice";
    return Feeding;
}());
document.getElementById('div5').innerText = Feeding.getDefaultFood();
/*Using the set and get keywords */
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Object.defineProperty(Animals.prototype, "bird", {
        get: function () {
            return this._bird;
        },
        set: function (bird) {
            this._bird = bird;
        },
        enumerable: true,
        configurable: true
    });
    return Animals;
}());
var animals = new Animals();
