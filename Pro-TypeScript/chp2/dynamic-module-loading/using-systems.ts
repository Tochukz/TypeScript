declare const System: {
  import(module: string): Promise<any>;
};

// Code not emitted yet.
import UserService from './user.service';

let condition = true;

if (condition) {
  // Code will now be imported
  System.import('./user.service')
        .then((Service: typeof UserService) => {
            const service = new Service();
        });
}