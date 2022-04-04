import { body } from 'express-validator';

export function validateSubredditRemoveUserFields() {
  return [
    body('idUsuario').isNumeric().exists(),
    body('idSubreddit').isNumeric().exists(),
  ];
}
