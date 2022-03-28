import express from 'express';
import { validateUpdateUserFields } from './rules/user/user-update';
import { validateRegisterUserFields } from './rules/user/user-create';
import { validateLoginFields } from './rules/user/user-login';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterUserController } from '../factories/user/register-user';
import { makeUpdateUserController } from '../factories/user/update-user';
import { makeLoginUserController } from '../factories/user/login-user';

const authRoutes = express();

authRoutes.use(express.json());
authRoutes.post(
  '/user/create',
  validateRegisterUserFields(),
  adaptRoute(makeRegisterUserController()),
);

authRoutes.post(
  '/user/update',
  validateUpdateUserFields(),
  adaptRoute(makeUpdateUserController()),
);

authRoutes.post(
  '/user/login',
  validateLoginFields(),
  adaptRoute(makeLoginUserController()),
);

export default authRoutes;
