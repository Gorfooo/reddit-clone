import { Router } from 'express';
import usersRouter from '../routes/post';
import authRouter from '../routes/auth';

const routes = Router();

routes.use('/', usersRouter);
routes.use('/', authRouter);

export default routes;