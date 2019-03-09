interface IPerson {
    firstName: string,
    lastName: string,
    salary: number
}
/* Interfaces must have only instance members, declaring a static member will lead to compile time error*/

/*Ineritance : Extending interfaces */
interface IPersonalInfo {
    fullName(person: IPerson): string;
}
interface IJobInfo {
    job(title: string, salary: number): string
}
interface IWorkExp {
    exp(position:string, years: number): string
}
interface IEmployee extends IPersonalInfo, IJobInfo {
    oldCompany(name: string): string;
    newCompany(name: string): string;
}
/*Interface declaration are open-ended and will implicitly merge together if they have the same type name */
interface IEmployee extends IWorkExp {
    totalPoint(points: number): number;
}


function getFullname(person: IPerson){
    return person.firstName + ' ' + person.lastName;
}
var userPerson = {firstName:'Tochukwu', lastName:'Nwachukwu', salary:30000};
document.getElementById('div1').innerText = getFullname(userPerson);
/*duck typing system allows us to pass an object to a function even when the object does not explicitly implement the  
require interface type as long as it contains all the required members */

/*You can use a type alias to simplify  anotations */
type Individual = {
    name: string;
    age: number;
    sex: string;
}
let john: Individual  = {name: 'John', age: 27, sex:'Male'}
function getPersonInfo(individual: Individual){
    let personStr = `Name: ${individual.name} , Age: ${individual.age}, Sex: ${individual.sex}`;
    return personStr;
}
let johnStr = getPersonInfo(john);
document.getElementById('div2').innerText = johnStr;
/* Note that type alias differs from intefaces in two ways: 
* They cannot be extended or implemented and 
* They cannot accept type.
* The differce in their construct is their keyword and the use of the assignment operator (=) in type alias.
*/
