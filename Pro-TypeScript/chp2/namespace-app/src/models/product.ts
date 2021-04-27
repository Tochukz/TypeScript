namespace Models {
  export class Product {
    all() {
        
    }
  }
}


/** Nested namespaces */
namespace HttpModule {
  export namespace HttpServices {
    export class UserService {
      static getUser() {
        return [
          {name: 'Oleka'},
          {name: 'Mutiu'}
        ]
      }
    }
  }
}
namespace Services.Respsitory {
  import HttpUserService = HttpModule.HttpServices.UserService;

  export class UserService { // public member
    getUser() {
      return HttpUserService.getUser().map(user => {
        user['id'] = Math.floor(Math.random() * 20);
        return user;
      });
    }
  }
    
  class ProductService { // non-public memeber, only available in this namespace

  }
}

