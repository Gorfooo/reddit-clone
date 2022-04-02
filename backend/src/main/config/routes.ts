import { Router } from 'express';
import userRouter from '../routes/user';
import postRouter from '../routes/post';

const routes = Router();

routes.use('/', userRouter);
routes.use('/', postRouter);

export default routes;
