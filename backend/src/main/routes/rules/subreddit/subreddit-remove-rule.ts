import { body } from 'express-validator';

export function validateSubredditRemoveRuleFields() {
  return [body('idRegra').isNumeric().exists()];
}
