import { body } from 'express-validator';

export function validateUpdatePostFields() {
  return [
    body('idPost').isNumeric().exists(),
    body('titulo'),
    body('conteudo'),
    body('tags').isArray().exists(),
  ];
}
