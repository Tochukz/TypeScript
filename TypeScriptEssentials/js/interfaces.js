function getFullname(person) {
    return person.firstName + ' ' + person.lastName;
}
var userPerson = { firstName: 'Tochukwu', lastName: 'Nwachukwu', salary: 30000 };
document.getElementById('div1').innerText = getFullname(userPerson);
var john = { name: 'John', age: 27, sex: 'Male' };
function getPersonInfo(individual) {
    var personStr = "Name: " + individual.name + " , Age: " + individual.age + ", Sex: " + individual.sex;
    return personStr;
}
var johnStr = getPersonInfo(john);
document.getElementById('div2').innerText = johnStr;
/* Note that type alias differs from intefaces in two ways:
* They cannot be extended or implemented and
* They cannot accept type.
* The differce in their construct is their keyword and the use of the assignment operator (=) in type alias.
*/
