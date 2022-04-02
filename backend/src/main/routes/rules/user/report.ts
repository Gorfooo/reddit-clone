import { body } from 'express-validator';

export function validateReportFields() {
  return [
    body('idMotivo').isNumeric().exists(),
    body('idUsuarioDenunciador').isNumeric().exists(),
    body('idUsuarioDenunciado').optional().isNumeric(),
    body('idPost').optional().isNumeric(),
    body('idSubreddit').optional().isNumeric(),
    body('obs').optional(),
  ];
}
