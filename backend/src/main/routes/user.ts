import express from 'express';
import { validateUpdateUserFields } from './rules/user/user-update';
import { validateRegisterUserFields } from './rules/user/user-create';
import { validateLoginFields } from './rules/user/user-login';
import { validateNewFollowerFields } from './rules/user/new-follower';
import { validateDeleteFollowerFields } from './rules/user/delete-follower';
import { validateBlockFields } from './rules/user/block-create';
import { validateUnblockFields } from './rules/user/unblock-create';
import { validateSendMessageFields } from './rules/user/send-message';
import { validateReadMessageFields } from './rules/user/read-message';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterUserController } from '../factories/user/register-user';
import { makeUpdateUserController } from '../factories/user/update-user';
import { makeLoginUserController } from '../factories/user/login-user';
import { makeNewFollowerController } from '../factories/user/new-follower';
import { makeDeleteFollowerController } from '../factories/user/delete-follower';
import { makeBlockController } from '../factories/user/block';
import { makeUnblockController } from '../factories/user/unblock';
import { makeSendMessageController } from '../factories/user/send-message';
import { makeReadMessageController } from '../factories/user/read-message';

const userRoutes = express();

userRoutes.use(express.json());
userRoutes.post(
  '/user/create',
  validateRegisterUserFields(),
  adaptRoute(makeRegisterUserController()),
);

userRoutes.post(
  '/user/update',
  validateUpdateUserFields(),
  adaptRoute(makeUpdateUserController()),
);

userRoutes.post(
  '/user/login',
  validateLoginFields(),
  adaptRoute(makeLoginUserController()),
);

userRoutes.post(
  '/user/newfollower',
  validateNewFollowerFields(),
  adaptRoute(makeNewFollowerController()),
);

userRoutes.post(
  '/user/deletefollower',
  validateDeleteFollowerFields(),
  adaptRoute(makeDeleteFollowerController()),
);

userRoutes.post(
  '/user/block',
  validateBlockFields(),
  adaptRoute(makeBlockController()),
);

userRoutes.post(
  '/user/unblock',
  validateUnblockFields(),
  adaptRoute(makeUnblockController()),
);

userRoutes.post(
  '/user/sendmessage',
  validateSendMessageFields(),
  adaptRoute(makeSendMessageController()),
);

userRoutes.post(
  '/user/readmessage',
  validateReadMessageFields(),
  adaptRoute(makeReadMessageController()),
);

export default userRoutes;
