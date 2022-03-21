import { body } from 'express-validator';

export function validateRegisterFields() {
  return [
    body('name').isLength({ min: 3 }).exists(),
    body('email').isEmail().exists(),
    body('birthDate').isDate().exists(),
    body('password').isLength({ min: 6 }).exists(),
    body('passwordConfirmation').isLength({ min: 6 }).exists(),
  ];
}
