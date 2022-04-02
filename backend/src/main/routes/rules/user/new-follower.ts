import { body } from 'express-validator';

export function validateNewFollowerFields() {
  return [
    body('idSeguidor').isNumeric().exists(),
    body('idSeguido')
      .isNumeric()
      .exists()
      .custom((value, { req }) => value !== req.body.idSeguidor),
  ];
}
