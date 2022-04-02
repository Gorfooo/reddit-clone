import { body } from 'express-validator';

export function validateUpdateUserFields() {
  return [
    body('idUsuario').isNumeric().exists(),
    body('email').isEmail().optional(),
    body('senha').isLength({ min: 6 }).optional(),
    body('nome').isLength({ min: 3 }).optional(),
    body('sobre').isLength({ min: 1 }).optional(),
    body('avatar').isLength({ min: 1 }).optional(),
    body('banner').isLength({ min: 1 }).optional(),
  ];
}
