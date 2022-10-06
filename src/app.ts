import express from 'express';
import ProductRoutes from './routes/products.routes';
import UserRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);

export default app;
