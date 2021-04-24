/* Primitive type annotation */
const amount: number = 18;
const username: string = 'Tochukwu';

/* array type annotation */
const names: string[] = ['Chichi', 'Uche', 'Chukwudi'];

/* Function annotation with parameter type and return type */
let sayHello: (name: string) => string;
sayHello = function(name){
  return 'Hello ' + name;
}

/* Object type annotation (this is not resuable like the inteface or type alias shown below)*/
let person: {
  name: string, 
  city: string, 
  height: number
}
person = {
  name: 'Tochukwu',
  city: 'Cape Town',
  height: 5.9
};

/* Simplifying type annotation using an interface */
interface PersonInterface {
  name: string;
  weight: number;
}
const chucks: PersonInterface = {
  name: "Tochukwu",
  weight: 65
};

/* Simplifying  type annotation using type alias */
type PersonType = {
  name: string,
  langs: number,
};
const tochi: PersonType = {
  name: 'Tochukwu',
  langs: 4
};

/*
When choosing whether to use an interface or a type alias, not that an interface can be used in an extends or implements clause, when defining other 
interfaces and classes. An interface can also accept type arguments, making the interface generic. A type alias can do neither of these.
*/