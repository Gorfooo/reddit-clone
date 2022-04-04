import { SubredditUserData } from '../../../entities/subreddit-entities/subreddit/subreddit-user-data';
import { SubredditRemoveUserResponse } from './subreddit-remove-user-response';

export interface ISubredditRemoveUser {
  execute: (
    subredditUser: SubredditUserData,
  ) => Promise<SubredditRemoveUserResponse>;
}
