import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import LoginService from '../services/login.service';

export default class LoginMiddleware {
  constructor(private loginService = new LoginService()) {}

  public validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    const login = req.body;
    const { username, password } = login;
    
    if (!username) { 
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' }); 
    }
    if (!password) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' }); 
    }
    const fieldValid = await this.loginService.SignIn(login);
    
    if (!fieldValid) {
      return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }
    next();
  };
}
