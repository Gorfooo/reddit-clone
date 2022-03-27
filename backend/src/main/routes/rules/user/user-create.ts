import { body } from 'express-validator';

export function validateRegisterFields() {
  return [
    body('nome').isLength({ min: 3 }).exists(),
    body('email').isEmail().exists(),
    body('nascimento').isDate().exists(),
    body('senha').isLength({ min: 6 }).exists(),
    body('senhaConfirmacao').isLength({ min: 6 }).exists(),
  ];
}
