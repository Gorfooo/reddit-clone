import { body } from 'express-validator';

export function validateSubredditAddRuleFields() {
  return [
    body('idSubreddit').isNumeric().exists(),
    body('descricao').isLength({ min: 6 }).isLength({ max: 150 }).exists(),
  ];
}
