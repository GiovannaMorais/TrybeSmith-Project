import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import LoginMiddleware from '../middlewares/login.middlewares';

const router = Router();

const loginController = new LoginController();
const loginMiddleware = new LoginMiddleware();

router.post('/login', loginMiddleware.validateLogin, loginController.SignIn);

export default router;