import express from 'express';
import { validateRegisterPostFields } from './rules/post/post-create';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterPostController } from '../factories/post/register-post';

const postRoutes = express();

postRoutes.use(express.json());
postRoutes.post(
  '/post/create',
  validateRegisterPostFields(),
  adaptRoute(makeRegisterPostController()),
);

export default postRoutes;
