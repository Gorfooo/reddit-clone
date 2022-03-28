import { body } from 'express-validator';

export function validateRegisterPostFields() {
  return [
    body('idUsuario').isNumeric().exists(),
    body('titulo').isLength({ min: 1 }).exists(),
    body('conteudo').exists(),
    body('tags').isArray().exists(),
  ];
}
