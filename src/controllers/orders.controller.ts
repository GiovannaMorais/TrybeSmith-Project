import { Request, Response } from 'express';
import OrderService from '../services/orders.service';
import statusCodes from '../statusCodes';
import ProductService from '../services/products.service';
import connection from '../models/connection';
import UserModel from '../models/users.model';
// import LoginService from '../services/login.service';

export default class UserController {
  constructor(private orderService = new OrderService()) { }

  public getOrder = async (_req: Request, res: Response) => {
    const products = await this.orderService.getOrder();
    res.status(statusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;

    const { userId } = res.locals;
    console.log('userId', userId);

    const result = new UserModel(connection);

    const id = await result.findByUsername(userId);
    // console.log('id', id[0].id);
    
    const userIDS = id[0].id;
    console.log('userIDS', userIDS);

    const insertId = await this.orderService.create(userIDS as number);
    const productService = new ProductService();
    await productService.update(productsIds, insertId);
    
    return res.status(statusCodes.CREATED).json({ userId: userIDS, productsIds });
  };
}