import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import statusCodes from '../statusCodes';

const TOKEN_SECRET_KEY = process.env.SECRET || 'secret';

export default class ValidateToken {
  public authentication = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(statusCodes.UNAUTHORIZED)
        .json({ message: 'Token not found' });
    }

    try {
      const decoded = jwt.verify(token, TOKEN_SECRET_KEY) as JwtPayload;
      res.locals.userName = decoded.user.username;
    
      next();
    } catch (error) {
      return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
    }
  };
}
