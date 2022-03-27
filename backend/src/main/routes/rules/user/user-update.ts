import { body } from 'express-validator';

export function validateUpdateFields() {
  return [
    body('idUsuario').isNumeric().exists(),
    body('email').isEmail(),
    body('senha').isLength({ min: 6 }),
    body('nome').isLength({ min: 3 }),
    body('sobre').isLength({ min: 1 }),
    body('avatar').isLength({ min: 1 }),
    body('banner').isLength({ min: 1 }),
  ];
}
