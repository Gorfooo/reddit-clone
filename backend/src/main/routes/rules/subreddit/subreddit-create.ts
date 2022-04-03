import { body } from 'express-validator';

export function validateRegisterSubredditFields() {
  return [
    body('idUsuarioCriador').isNumeric().exists(),
    body('sobre').optional(),
    body('banner').optional(),
    body('nome').isLength({ min: 3 }).exists(),
  ];
}
