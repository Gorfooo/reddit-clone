import { body } from 'express-validator';

export function validateBlockFields() {
  return [
    body('idBloqueador').isNumeric().exists(),
    body('idBloqueado')
      .isNumeric()
      .exists()
      .custom((value, { req }) => value !== req.body.idBloqueador),
  ];
}
