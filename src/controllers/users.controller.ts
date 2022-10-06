import jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/users.service';

const TOKEN_SECRET_KEY = process.env.SECRET || 'secret';

// const jwtConfig = {
//   expiresIn: '15min',
//   algorithm: 'HS256',
// };

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = jwt.sign({ user }, TOKEN_SECRET_KEY);
    
    await this.userService.create(user);
    res.status(statusCodes.CREATED).json({ token });
  };
}