function getNumber(house) {
    return house;
}
var ucheHouse = {
    bedrooms: 2,
    bathrooms: 1
};
var tochiMansion = {
    bedrooms: 4,
    bathrooms: 2,
    butlars: 1
};
var rooms = getNumber(ucheHouse).bedrooms;
//Type assertion is used to overide the type.
var butlars = getNumber(tochiMansion).butlars;
console.log(rooms);
console.log(butlars);
var x = 1;
console.log(typeof x);
var y = x;
console.log(typeof y);
/*Type Guards*/
function typeGuardExample(strNum) {
    if (typeof strNum === 'string') {
        var len = strNum.length;
    }
    else {
        var size = strNum.toFixed();
    }
}
/*The standard type guard includes typeof and instanceof statement */
