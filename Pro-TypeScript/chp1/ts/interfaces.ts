type Point = [number, number];

class Passenger {}

interface Vehicle {
    new(): Vehicle;
    currenLocation: Point;
    travelTo(point: Point): void;
    addPersenger(passenger: Passenger): void;
    removePerssenger(passenger: Passenger): void;
}

/**
 Just like enumerations, interfaces remain open and all declarations with a common 
 root are merged into a single structure. 
*/