import { Request, Response } from 'express';
import OrderService from '../services/orders.service';
import statusCodes from '../statusCodes';

export default class UserController {
  constructor(private orderService = new OrderService()) { }

  public getOrder = async (_req: Request, res: Response) => {
    const products = await this.orderService.getOrder();
    res.status(statusCodes.OK).json(products);
  };
}