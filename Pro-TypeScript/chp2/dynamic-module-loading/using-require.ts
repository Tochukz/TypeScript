declare function require(module: string): any;

// No code is emitted yet
import UserService from './user.service';

let condition = true;

if (condition) {
  // Code will now be imported
  const Service: typeof UserService = require('./servce')
  const service = new Service();
}


