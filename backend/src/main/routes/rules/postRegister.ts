import { body } from 'express-validator';

export function validateRegisterFields() {
  return [
    body(['data']).exists().isObject(),
    body(['metadata']).exists().isObject(),
    body(['metadata.clientId']).exists().isNumeric(),
    body(['metadata.userId']).exists().isNumeric(),
    body(['data.taxInformation.nfe.nfeModel'])
      .exists()
      .withMessage('Informe o modelo da nota!')
      .isString(),
  ];
}
