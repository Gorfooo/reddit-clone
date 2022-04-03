import { SubredditUserData } from '../../../entities/subreddit-entities/subreddit/subreddit-user-data';
import { SubredditAddUserResponse } from './subreddit-add-user-response';

export interface ISubredditAddUser {
  execute: (
    subredditUser: SubredditUserData,
  ) => Promise<SubredditAddUserResponse>;
}
