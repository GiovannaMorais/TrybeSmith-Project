import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import ValidateToken from '../middlewares/validateToken';
import OrdersMiddleware from '../middlewares/order.middlewares';

const router = Router();

const orderController = new OrderController();
const validateToken = new ValidateToken();
const orderMiddleware = new OrdersMiddleware();

router.post(
  '/orders/', 
  validateToken.authentication,
  orderMiddleware.validateProductId, 
  orderController.create,
);
router.get('/orders/', orderController.getOrder);

export default router;