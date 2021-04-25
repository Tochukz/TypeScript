/** Generic Function */
function reverseArray<T>(list: T[]): T[] {
    return list.map((val, i, arry) => arry[arry.length - i - 1]);
}

const reversedLetters = reverseArray<string>(['A', 'B', 'C', 'D']); // [ 'D', 'C', 'B', 'A' ]
const reversedNumbers = reverseArray<number>([1, 2, 3, 4, 5]); // [ 5, 4, 3, 2, 1 ]
// The type argument may be omitted since the combiler can infer the type based on the argument passed to the function.
const reversedAlphabets = reverseArray(['a', 'b', 'c', 'd']); // [ 'd', 'c', 'b', 'a' ]

/** Generic Interfaces */ 
interface ProductService<T, TId> {
  getById(id: TId): T;
  save(model: T): TId;
}

class Book {
  id: number;
}

class BookService implements ProductService<Book, number> {
  constructor(private books: Book[]) {}
  
  getById(id: number): Book {
    return this.books.find(bk => bk.id == id);
  }

  save(book: Book): number {
    this.books.push(book);
    return this.books.length;
  }
}


/** Generic Classes */
class Product<T> {
  constructor(private products: T[]){}

  get all(): T[] {
    return this.products;
  }

  set all(products: T[]) {
    this.products = products;
  }

} 

class Bike {
  id: string;
  price?: number;
}
class BikeService extends Product<Bike> {
  get bikes(): Bike[] {
    return this.all.map(bk => {
        bk.price = Math.floor(Math.random() * 1000);
        return bk;
    });
  }
}

const bikes = [{id: 'ABCDX'}, {id: 'EFGHY'}];
const bikeService = new BikeService(bikes);
const allBikes = bikeService.bikes; // [ { id: 'ABCDX', price: 534 }, { id: 'EFGHY', price: 963 } ]
bikeService.all = [{id: '1234X'}, {id: '5678Y'}];
const newBikes = bikeService.bikes; // [ { id: '1234X', price: 648 }, { id: '5678Y', price: 70 } ]


/** Type Contraints  */
interface IProduct {
 id: number | string;
}
class Product2<T extends IProduct> { // an interface, a class, or type annotation can follow the extends keyword
  constructor(private products: T[]){}

  get all(): T[] {
    return this.products;
  }

  getProduct(id: number): T {
    return this.products.find(p => p.id == id);
  }
}
class Lamp implements IProduct{
  id: number;
  price: number
}
class LampService extends Product2<Lamp> {
  get lamps(): Lamp[] {
    return this.all.map(bk => {
        bk.price = Math.floor(Math.random() * 1000);
        return bk;
    });
  }
}
const lamps = [{id: 189, price: 320}, {id: 1234, price: 234}];
const lampService = new LampService(lamps);
const firstLamp = lampService.getProduct(189); // { id: 189, price: 320 }


console.log(firstLamp);


