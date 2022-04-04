import { ManageModeratorRequestData } from '../../entities/subreddit-entities/subreddit/manage-moderator-request-data';
import { RegisterSubredditData } from '../../entities/subreddit-entities/subreddit/register-subreddit-data';
import { SubredditAddRuleData } from '../../entities/subreddit-entities/subreddit/subreddit-add-rule-data';
import { SubredditModeratorRequestData } from '../../entities/subreddit-entities/subreddit/subreddit-moderator-request-data';
import { SubredditRemoveRuleData } from '../../entities/subreddit-entities/subreddit/subreddit-remove-rule-data';
import { SubredditUserData } from '../../entities/subreddit-entities/subreddit/subreddit-user-data';
import { UpdateSubredditData } from '../../entities/subreddit-entities/subreddit/update-subreddit-data';
import { ManagedId } from './repository';

export interface SubredditRepository {
  add: (subreddit: RegisterSubredditData) => Promise<ManagedId>;
  update: (subreddit: UpdateSubredditData) => Promise<void>;
  addUser: (subredditUserData: SubredditUserData) => Promise<void>;
  removeUser: (subredditUserData: SubredditUserData) => Promise<void>;
  addModeratorRequest: (
    moderatorRequestData: SubredditModeratorRequestData,
  ) => Promise<void>;
  manageModeratorRequest: (
    moderatorRequestData: ManageModeratorRequestData,
  ) => Promise<void>;
  addRule: (subredditRuleData: SubredditAddRuleData) => Promise<void>;
  removeRule: (subredditRuleData: SubredditRemoveRuleData) => Promise<void>;
}
