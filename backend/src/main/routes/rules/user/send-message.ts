import { body } from 'express-validator';

export function validateSendMessageFields() {
  return [
    body('idLeitor').isNumeric().exists(),
    body('idEscritor').isNumeric().exists(),
    body('dataHora').exists(),
    body('mensagem').exists(),
  ];
}
