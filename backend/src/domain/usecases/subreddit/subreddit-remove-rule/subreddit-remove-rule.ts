import { SubredditRemoveRuleData } from '../../../entities/subreddit-entities/subreddit/subreddit-remove-rule-data';
import { SubredditRepository } from '../../ports/subreddit-repository';
import { ISubredditRemoveRule } from './subreddit-remove-rule-interface';
import { SubredditRemoveRuleResponse } from './subreddit-remove-rule-response';

export class SubredditRemoveRule implements ISubredditRemoveRule {
  constructor(private readonly subredditRepository: SubredditRepository) {}

  async execute(
    subredditRuleData: SubredditRemoveRuleData,
  ): Promise<SubredditRemoveRuleResponse> {
    await this.removeSubredditRule(subredditRuleData);

    return true;
  }

  private async removeSubredditRule(
    subredditRuleData: SubredditRemoveRuleData,
  ): Promise<void> {
    await this.subredditRepository.removeRule(subredditRuleData);
  }
}
