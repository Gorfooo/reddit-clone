import { body } from 'express-validator';

export function validateReadMessageFields() {
  return [
    body('idLeitor').isNumeric().exists(),
    body('idEscritor').isNumeric().exists(),
  ];
}
