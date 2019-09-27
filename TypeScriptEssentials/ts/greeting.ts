function greeter(person: string){
    return "Hello "+person
}
let pers = "James Bond";
//document.body.innerHTML = greeter(pers);

interface Person {
    firstName: string;
    lastName: string;
}
function greetPerson(person: Person){
    return "Hello, "+person.firstName + ' ' + person.lastName;
    //Best to use a class instead for type hinting since the interface will be removes at compile time. 
}
let person = {firstName:'Jonny', lastName:'Bravo'};
//This implemenets the Person interface without using the 'implements' keyword, i call it implicit implementation
document.body.innerHTML = greetPerson(person);
