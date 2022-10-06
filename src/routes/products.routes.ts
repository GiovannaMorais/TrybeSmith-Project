import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import ProductsMiddleware from '../middlewares/product.middlewares';

const router = Router();

const productsController = new ProductController();
const productsMiddleware = new ProductsMiddleware();

router.post(
  '/products',
  productsMiddleware.validateProductsAmount, 
  productsMiddleware.validateProductsName, 
  productsController.create,
);
router.get('/products', productsController.getAll);

export default router;
