import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const router = Router();

const orderController = new OrderController();

router.get('/orders/', orderController.getOrder);

export default router;