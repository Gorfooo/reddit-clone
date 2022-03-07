// import { Router, Request, Response } from 'express';
// import { validateRegisterFields } from './rules/user-create';

// const authRoutes = Router();

// authRoutes.post('/user/create', (request : Request, response: Response): void => {
//   validateRegisterFields()
// });

// authRoutes.get('/auth/login', (request : Request, response: Response): Response => {
//   return response.json("OKK");
// });

// export default authRoutes;

import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(express.json());
app.post(
  '/user/create',
  // username must be an email
  body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  (req: express.Request, res: express.Response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // User.create({
    //   username: req.body.username,
    //   password: req.body.password,
    // }).then(user => res.json(user));
  },
);

export default app;