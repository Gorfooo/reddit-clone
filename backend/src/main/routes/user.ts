import express from 'express';
import { validateRegisterFields } from './rules/user/user-create';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterUserController } from '../factories/register-user';

const authRoutes = express();

authRoutes.use(express.json());
authRoutes.post(
  '/user/create',
  validateRegisterFields(),
  adaptRoute(makeRegisterUserController()),
);

authRoutes.post(
  '/user/update',
  validateRegisterFields(),
  adaptRoute(makeRegisterUserController()),
);

export default authRoutes;
