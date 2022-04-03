import { body } from 'express-validator';

export function validateSubredditModeratorRequestFields() {
  return [
    body('idSubreddit').isNumeric().exists(),
    body('idUsuario').isNumeric().exists(),
    body('solicitacao').isString().optional(),
  ];
}
