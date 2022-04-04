import { body } from 'express-validator';

export function validatePostAnswearFields() {
  return [
    body('idComentario').isNumeric().exists(),
    body('idUsuario').isNumeric().exists(),
    body('resposta').exists(),
  ];
}
