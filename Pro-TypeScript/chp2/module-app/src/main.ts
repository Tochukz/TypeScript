import { UserService } from './services/user.service';

const userService  = new UserService();
const users = userService.getUsers();

console.log('users', users);