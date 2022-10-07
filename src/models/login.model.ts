import { Pool, RowDataPacket } from 'mysql2/promise';
import { Login } from '../interfaces/login.interface';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async SignIn(login: Login): Promise <Login> {
    const { username, password } = login;
    const [[result]] = await this.connection.execute<(
    Login & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?', 
      [username, password],
      );
    return result;
  }
}