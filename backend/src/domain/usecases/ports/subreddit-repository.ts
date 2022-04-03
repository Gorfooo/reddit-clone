import { ManageModeratorRequestData } from '../../entities/subreddit-entities/subreddit/manage-moderator-request-data';
import { SubredditData } from '../../entities/subreddit-entities/subreddit/subreddit-data';
import { SubredditUserData } from '../../entities/subreddit-entities/subreddit/subreddit-user-data';
import { ManagedId } from './repository';

export interface SubredditRepository {
  add: (subreddit: SubredditData) => Promise<ManagedId>;
  addUser: (SubredditUserData: SubredditUserData) => Promise<void>;
  manageModeratorRequest: (
    moderatorRequestData: ManageModeratorRequestData,
  ) => Promise<void>;
}
