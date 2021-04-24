/* Primitive type annotation */
var amount = 18;
var username = 'Tochukwu';
/* array type annotation */
var names = ['Chichi', 'Uche', 'Chukwudi'];
/* Function annotation with parameter type and return type */
var sayHello;
sayHello = function (name) {
    return 'Hello ' + name;
};
/* Object type annotation (this is not resuable like the inteface or type alias shown below)*/
var person;
person = {
    name: 'Tochukwu',
    city: 'Cape Town',
    height: 5.9
};
var chucks = {
    name: "Tochukwu",
    weight: 65
};
var tochi = {
    name: 'Tochukwu',
    langs: 4
};
/*
When choosing whether to use an interface or a type alias, not that an interface can be used in an extends or implements clause, when defining other
interfaces and classes. An interface can also accept type arguments, making the interface generic. A type alias can do neither of these.
*/ 
