import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

export default class ProductsMiddleware {
  public validateProductsName = async (req: Request, res: Response, next: NextFunction) => {
    const product = req.body;
    const { name } = product;
    
    if (!name) return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
    if (typeof name !== 'string') {
      return res.status(statusCodes.TYPE_ERROR).json({ message: '"name" must be a string' });
    }
    if (name.length < 3) {
      return res.status(statusCodes.TYPE_ERROR)
        .json({ message: '"name" length must be at least 3 characters long' });
    }      
    next();
  };

  public validateProductsAmount = async (req: Request, res: Response, next: NextFunction) => {
    const product = req.body;
    const { amount } = product;
    
    if (!amount) {
      return res.status(statusCodes.BAD_REQUEST)
        .json({ message: '"amount" is required' });
    }
    if (typeof amount !== 'string') {
      return res.status(statusCodes.TYPE_ERROR).json({ message: '"amount" must be a string' });
    }
    if (amount.length < 3) {
      return res.status(statusCodes.TYPE_ERROR)
        .json({ message: '"amount" length must be at least 3 characters long' });
    }      
    next();
  };
}
