///<reference path="models/user.ts" />
///<reference path="controllers/product.ts" />
///<reference path="models/product.ts" />

const userModel = new Models.User();
const productController = new Controllers.Product();
const HttUserService = HttpModule.HttpServices.UserService;
const userService = new Services.Respsitory.UserService();

console.log('All Users', userModel.all());
console.log('All Products', productController.all());
console.log('Http users', HttUserService.getUser());
console.log('User Service', userService.getUser());


/** Namespace / class merging  */
class Car {

}

namespace Car {
  export class Engine {

  }
  export class GearBox {

  }
}
const car = new Car();
const engine = new Car.Engine();
console.log('Car', car.constructor['name']); // Car
console.log('Engine', engine.constructor['name']); // Engine
