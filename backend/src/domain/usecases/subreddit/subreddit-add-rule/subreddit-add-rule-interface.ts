import { SubredditAddRuleData } from '../../../entities/subreddit-entities/subreddit/subreddit-add-rule-data';
import { SubredditAddRuleResponse } from './subreddit-add-rule-response';

export interface ISubredditAddRule {
  execute: (
    subredditRuleData: SubredditAddRuleData,
  ) => Promise<SubredditAddRuleResponse>;
}
