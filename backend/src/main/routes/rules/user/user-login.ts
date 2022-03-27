import { body } from 'express-validator';

export function validateLoginFields() {
  return [body('email').isEmail(), body('senha').isLength({ min: 6 })];
}
