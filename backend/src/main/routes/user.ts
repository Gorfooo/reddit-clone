import express from 'express';
import { validateUpdateFields } from './rules/user/user-update';
import { validateRegisterFields } from './rules/user/user-create';
import { validateLoginFields } from './rules/user/user-login';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterUserController } from '../factories/register-user';
import { makeUpdateUserController } from '../factories/update-user';
import { makeLoginUserController } from '../factories/login-user';

const authRoutes = express();

authRoutes.use(express.json());
authRoutes.post(
  '/user/create',
  validateRegisterFields(),
  adaptRoute(makeRegisterUserController()),
);

authRoutes.post(
  '/user/update',
  validateUpdateFields(),
  adaptRoute(makeUpdateUserController()),
);

authRoutes.post(
  '/user/login',
  validateLoginFields(),
  adaptRoute(makeLoginUserController()),
);

export default authRoutes;
