import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/login.service';
import statusCodes from '../statusCodes';

const TOKEN_SECRET_KEY = process.env.SECRET || 'secret';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public SignIn = async (req: Request, res: Response) => {
    const user = req.body;
    const token = jwt.sign({ user }, TOKEN_SECRET_KEY);
    await this.loginService.SignIn(user);

    res.status(statusCodes.OK).json({ token });
  };
}