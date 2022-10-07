import connection from '../models/connection';
import { Order } from '../interfaces/orders.interface';
import OrderModel from '../models/orders.model';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getOrder(): Promise<Order[]> {
    const products = await this.model.getOrder();
    return products;
  }

  public async create(userId: number): Promise<number> {
    const result = await this.model.create(userId);
    return result;
  }
}