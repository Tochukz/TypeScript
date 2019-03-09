interface House{
    bedrooms: number;
    bathrooms: number;
}
interface Mansion{
    bedrooms: number;
    bathrooms: number;
    butlars: number;
}

function getNumber(house: House | Mansion): House | Mansion {
    return house;
}

let ucheHouse: House = {
    bedrooms:2,
    bathrooms:1
}
let tochiMansion: Mansion = {
    bedrooms:4,
    bathrooms:2,
    butlars:1
}
const rooms = getNumber(ucheHouse).bedrooms;
//Type assertion is used to overide the type.
const butlars = (<Mansion>getNumber(tochiMansion)).butlars;
console.log(rooms);
console.log(butlars);

var x = 1;
console.log(typeof x);
var y = <boolean><any>x;
console.log(typeof y);

/*Type Guards*/
function typeGuardExample(strNum: string | number){
    if(typeof strNum === 'string'){
        const len = strNum.length;
    }else{
        const size = strNum.toFixed();
    }
}
/*The standard type guard includes typeof and instanceof statement */
