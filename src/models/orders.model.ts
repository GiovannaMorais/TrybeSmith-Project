import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../interfaces/orders.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;   
  }

  public async getOrder(): Promise<Order[]> {
    const result = await this.connection.execute(`
    SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) as productsIds
    FROM Trybesmith.Orders as ord
    INNER JOIN Trybesmith.Products as prod
    ON ord.id = prod.orderId
    GROUP BY ord.id
    ORDER BY ord.userId`);
    const [rows] = result;
    return rows as Order[];
  }

  public async create(userId: number) {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?);', [userId]);

    return insertId;
  }
}