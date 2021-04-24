interface House {
  bedrooms: number;
  bathrooms: number;
};
interface Mansion {
  bedrooms: number;
  bathrooms: number;
  butlers: number;
}

class Property {
  constructor(private property: House | Mansion) {
  }

  getProperty(): House | Mansion {
    return this.property;
  }
}

let mansionOptions: Mansion = { 
  bedrooms: 3,
  bathrooms: 2,
  butlers: 1
};
const myMansion = new Property(mansionOptions);
const mansionProperty = myMansion.getProperty();

// const butlersCount  = mansionProperty.butlers; // Error: Property 'butlers' does not exist  on type House | Mansion 
// Using type Assertion. It is similar to casting in other languages.
const butlersCount = (<Mansion>mansionProperty).butlers;

let roomName = 'Master bedroom';
// mansionProperty.bedrooms = roomName; // Error : Type 'string' is not assingable to type 'number'
mansionProperty.bedrooms = <number><any>roomName; // Using forced type assertion 