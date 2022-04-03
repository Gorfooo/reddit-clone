import { body } from 'express-validator';

export function validateManageModeratorRequestFields() {
  return [
    body('idSolicitacaoModerador').isNumeric().exists(),
    body('aceito').isLength({ max: 1 }).isLength({ min: 1 }).exists(),
    body('motivoRecusa').isString().optional(),
  ];
}
