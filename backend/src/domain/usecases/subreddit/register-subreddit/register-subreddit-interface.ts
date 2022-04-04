import { RegisterSubredditData } from '../../../entities/subreddit-entities/subreddit/register-subreddit-data';
import { RegisterSubredditResponse } from './register-subreddit-response';

export interface ISubreddit {
  execute: (
    subreddit: RegisterSubredditData,
  ) => Promise<RegisterSubredditResponse>;
}
