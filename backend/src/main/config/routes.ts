import { Router } from 'express';
import userRouter from '../routes/user';
import postRouter from '../routes/post';
import subredditRouter from '../routes/subreddit';

const routes = Router();

routes.use('/', userRouter);
routes.use('/', postRouter);
routes.use('/', subredditRouter);

export default routes;
