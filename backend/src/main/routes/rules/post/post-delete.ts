import { body } from 'express-validator';

export function validateDeletePostFields() {
  return [body('idPost').isNumeric().exists()];
}
