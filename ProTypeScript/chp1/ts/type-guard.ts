interface AirCraft {
  speed(): void;
  ascend(): void;
}

interface Submarine {
  speed(): void;
  float(): void;
}

class Vessel {
  static isArirCraft(craft: AirCraft | Submarine): craft is AirCraft {
    return 'ascend' in craft; 
  }

  static isSubmarin(craft: AirCraft | Submarine): craft is Submarine {   
    return 'float' in craft;
  }
}

class Jet implements AirCraft {
  speed() {
    
  }
  ascend() {

  }
}

class SeaWolf implements Submarine {
  speed() {

  }
  float() {

  }
}

const myJet = new Jet();
const seaWolf = new SeaWolf();

const isPlane = Vessel.isArirCraft(myJet); // true
const isSubmarin = Vessel.isSubmarin(myJet); // false
const IsRealSubmarin = Vessel.isSubmarin(seaWolf); // true

console.log({isPlane, isSubmarin, IsRealSubmarin});

console.log('float' in seaWolf); //
console.log(seaWolf.hasOwnProperty('float')); // 



