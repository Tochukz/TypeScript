
const amount: number = 18;

//array type annotation
const names: string[] = ['Chichi', 'Uche', 'Chukwudi'];

/*Function annotation with parameter type and return type*/
let sayHello: (name: string) => string
sayHello = function(name){
  return name;
}

/*Object type annotation*/
let person: {name: string, city: string, height: number}
person = {
  name: 'Tochukwu',
  city: 'Cape Town',
  height: 5.9
};

/*Simplifying type annotation using an interface*/
interface PersonInterface {
  name: string,
  weight: number,
}
const chucks: PersonInterface = {
  name: "Tochukwu",
  weight: 65
};

/*Simplifying  type annotation using type alias*/
type PersonType = {
  name: string,
  langs: number,
}
const tochi: PersonType = {
  name: 'Tochukwu',
  langs: 4
};
