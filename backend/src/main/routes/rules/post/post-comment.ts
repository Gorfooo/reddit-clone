import { body } from 'express-validator';

export function validatePostCommentFields() {
  return [
    body('idPost').isNumeric().exists(),
    body('idUsuario').isNumeric().exists(),
    body('comentario').exists(),
  ];
}
