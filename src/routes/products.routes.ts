import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductController();

router.post('/products', productsController.create);
router.get('/products', productsController.getAll);

export default router;
