import User from '../interfaces/users.interface';
import connection from '../models/connection';
import UserModel from '../models/users.model';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}
