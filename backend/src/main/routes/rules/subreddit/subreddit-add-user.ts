import { body } from 'express-validator';

export function validateSubredditAddUserFields() {
  return [
    body('idUsuario').isNumeric().exists(),
    body('idSubreddit').isNumeric().exists(),
  ];
}
