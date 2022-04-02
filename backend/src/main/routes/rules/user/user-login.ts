import { body } from 'express-validator';

export function validateLoginFields() {
  return [
    body('email').isEmail().exists(),
    body('senha').isLength({ min: 6 }).exists(),
  ];
}
