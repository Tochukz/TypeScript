/*Union type */
var val;
val = true;
val = 5;
var returnVal;
returnVal = false;
returnVal = 0;
var myColors;
myColors = { red: '#f00', yellow: '#345', blue: '#00f' };
myColors = { green: '#0f0', purple: '#808' };
var kingdom;
kingdom = 'Animalia';
kingdom = 'Fungi';
var flashDrive;
flashDrive = 16;
flashDrive = 64;
var random;
random = 'Yes';
random = true;
random = 1;
var getAns;
var someusers = [];
someusers.push({
    name: 'Chichi',
    city: 'Lagos',
    age: 34
});
someusers.push({
    name: 'Uche',
    city: 'texas',
    age: 30
});
someusers.push({
    name: 'Chukwudi',
    city: 'New jessy',
    age: 37
});
someusers.push({
    name: 'Tochi',
    city: 'JHB',
    age: 33
});
function sortByAge(a, b) {
    if (b.age > a.age) {
        return -1;
    }
    else if (b.age < a.age) {
        return 1;
    }
    else {
        return 0;
    }
}
var usersByAge = someusers.sort(sortByAge);
var ageStr = '';
usersByAge.forEach(function (user) {
    ageStr += ' ' + user.age;
});
console.log(ageStr);
var firstPerson = someusers[0].name; //returns string 'Uche'
console.log(firstPerson);
/*A Tuple type uses an array and specify the type of elements based on their position */
var customer;
customer = ['Kateco', 12, 'Alex'];
customer = ['Reya', 18, 'Alex'];
var flats = {};
flats['bachelor'] = { rooms: 1, packing: true };
flats['two-rooms'] = { rooms: 2, packing: true };
flats['student-accom'] = { rooms: 1, packing: false };
console.log(flats['bachelor'].rooms);
console.log(flats['two-rooms'].rooms);
console.log(flats['student-accom'].packing);
