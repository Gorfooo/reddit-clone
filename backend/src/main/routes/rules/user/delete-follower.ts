import { body } from 'express-validator';

export function validateDeleteFollowerFields() {
  return [
    body('idSeguidor').isNumeric().exists(),
    body('idSeguido')
      .isNumeric()
      .exists()
      .custom((value, { req }) => value !== req.body.idSeguidor),
  ];
}
