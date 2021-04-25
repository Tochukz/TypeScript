/** Generic Function */
function reverseArray(list) {
    return list.map((val, i, arry) => arry[arry.length - i - 1]);
}
const reversedLetters = reverseArray(['A', 'B', 'C', 'D']); // [ 'D', 'C', 'B', 'A' ]
const reversedNumbers = reverseArray([1, 2, 3, 4, 5]); // [ 5, 4, 3, 2, 1 ]
// The type argument may be omitted since the combiler can infer the type based on the argument passed to the function.
const reversedAlphabets = reverseArray(['a', 'b', 'c', 'd']); // [ 'd', 'c', 'b', 'a' ]
class Book {
}
class BookService {
    constructor(books) {
        this.books = books;
    }
    getById(id) {
        return this.books.find(bk => bk.id == id);
    }
    save(book) {
        this.books.push(book);
        return this.books.length;
    }
}
/** Generic Classes */
class Product {
    constructor(products) {
        this.products = products;
    }
    get all() {
        return this.products;
    }
    set all(products) {
        this.products = products;
    }
}
class Bike {
}
class BikeService extends Product {
    get bikes() {
        return this.all.map(bk => {
            bk.price = Math.floor(Math.random() * 1000);
            return bk;
        });
    }
}
const bikes = [{ id: 'ABCDX' }, { id: 'EFGHY' }];
const bikeService = new BikeService(bikes);
const allBikes = bikeService.bikes; // [ { id: 'ABCDX', price: 534 }, { id: 'EFGHY', price: 963 } ]
bikeService.all = [{ id: '1234X' }, { id: '5678Y' }];
const newBikes = bikeService.bikes; // [ { id: '1234X', price: 648 }, { id: '5678Y', price: 70 } ]
class Product2 {
    constructor(products) {
        this.products = products;
    }
    get all() {
        return this.products;
    }
    getProduct(id) {
        return this.products.find(p => p.id == id);
    }
}
class Lamp {
}
class LampService extends Product2 {
    get lamps() {
        return this.all.map(bk => {
            bk.price = Math.floor(Math.random() * 1000);
            return bk;
        });
    }
}
const lamps = [{ id: 189, price: 320 }, { id: 1234, price: 234 }];
const lampService = new LampService(lamps);
const firstLamp = lampService.getProduct(189);
console.log(firstLamp);
