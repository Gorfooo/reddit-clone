import { SubredditRemoveRuleData } from '../../../entities/subreddit-entities/subreddit/subreddit-remove-rule-data';
import { SubredditRemoveRuleResponse } from './subreddit-remove-rule-response';

export interface ISubredditRemoveRule {
  execute: (
    subredditRuleData: SubredditRemoveRuleData,
  ) => Promise<SubredditRemoveRuleResponse>;
}
