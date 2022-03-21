import { Router } from 'express';
import authRouter from '../routes/user';
// import postRouter from '../routes/post';

const routes = Router();

routes.use('/', authRouter);
// routes.use('/', postRouter);

export default routes;
