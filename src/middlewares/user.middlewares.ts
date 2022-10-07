import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

export default class UsersMiddleware {
  public validateUsername = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;

    if (!username) {
      return res.status(statusCodes.BAD_REQUEST)
        .json({ message: '"username" is required' });
    }
    if (typeof username !== 'string') {
      return res.status(statusCodes.TYPE_ERROR).json({ message: '"username" must be a string' });
    }
    if (username.length < 3) {
      return res.status(statusCodes.TYPE_ERROR)
        .json({ message: '"username" length must be at least 3 characters long' });
    }      
    next();
  };

  public validateClasse = async (req: Request, res: Response, next: NextFunction) => {
    const { classe } = req.body;

    if (!classe) {
      return res.status(statusCodes.BAD_REQUEST)
        .json({ message: '"classe" is required' });
    }
    if (typeof classe !== 'string') {
      return res.status(statusCodes.TYPE_ERROR).json({ message: '"classe" must be a string' });
    }
    if (classe.length < 3) {
      return res.status(statusCodes.TYPE_ERROR)
        .json({ message: '"classe" length must be at least 3 characters long' });
    }      
    next();
  };

  public validateLevel = async (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;
    
    if (level <= 1) {
      return res.status(statusCodes.TYPE_ERROR)
        .json({ message: '"level" must be greater than or equal to 1' });
    }

    if (!level) {
      return res.status(statusCodes.BAD_REQUEST)
        .json({ message: '"level" is required' });
    }
    if (typeof level !== 'number') {
      return res.status(statusCodes.TYPE_ERROR).json({ message: '"level" must be a number' });
    }
    next();
  };

  public validatePassword = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) {
      return res.status(statusCodes.BAD_REQUEST)
        .json({ message: '"password" is required' });
    }
    if (typeof password !== 'string') {
      return res.status(statusCodes.TYPE_ERROR).json({ message: '"password" must be a string' });
    }
    if (password.length < 8) {
      return res.status(statusCodes.TYPE_ERROR)
        .json({ message: '"password" length must be at least 8 characters long' });
    }      
    next();
  };
}