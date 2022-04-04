import { SubredditAddRuleController } from '../../../adapters/presentation/controllers/subreddit/subreddit-add-rule-controller';
import { SubredditAddRule } from '../../../domain/usecases/subreddit/subreddit-add-rule/subreddit-add-rule';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeSubredditAddRuleController =
  (): SubredditAddRuleController => {
    const subredditRepository = new PostgresSubredditRepository();
    const subredditAddRuleUseCase = new SubredditAddRule(subredditRepository);
    const subredditAddRuleController = new SubredditAddRuleController(
      subredditAddRuleUseCase,
    );
    return subredditAddRuleController;
  };
