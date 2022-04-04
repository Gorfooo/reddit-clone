import { body } from 'express-validator';

export function validateUpdateSubredditFields() {
  return [
    body('idSubreddit').isNumeric().exists(),
    body('sobre').optional(),
    body('banner').optional(),
    body('nome').isLength({ min: 3 }).optional(),
  ];
}
