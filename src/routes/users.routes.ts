import { Router } from 'express';
import UserController from '../controllers/users.controller';
import UsersMiddleware from '../middlewares/user.middlewares';

const router = Router();

const userController = new UserController();
const usersMiddleware = new UsersMiddleware();

router.post(
  '/users/',
  usersMiddleware.validateUsername,
  usersMiddleware.validateClasse,
  usersMiddleware.validateLevel,
  usersMiddleware.validatePassword,
  userController.create,
);

export default router;