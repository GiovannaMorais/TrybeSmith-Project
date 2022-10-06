import { Login } from '../interfaces/login.interface';
import connection from '../models/connection';
import LoginModel from '../models/login.model';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async SignIn(login: Login): Promise<Login> {
    return this.model.SignIn(login);
  }
}