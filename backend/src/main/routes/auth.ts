import express, { response } from 'express';
import { validationResult } from 'express-validator';
import { validateRegisterFields } from './rules/user-create';
import { adaptRoute } from '../adapters/express-route-adapter';

const authRoutes = express();

authRoutes.use(express.json());
authRoutes.post(
  '/user/create',
  validateRegisterFields(),
  // adaptRoute()
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      return res.json("ok");
    }
  },
);

export default authRoutes;