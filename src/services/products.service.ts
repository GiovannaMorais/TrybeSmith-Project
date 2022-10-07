import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Product from '../interfaces/products.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async update(productsId: number[], orderId: number): Promise<number[] > {
    const productsIds = await Promise.all(productsId.map(async (id) => {
      const productId = await this.model.update(id, orderId);
      return productId;
    }));

    return productsIds;
  }
}

export default ProductService;