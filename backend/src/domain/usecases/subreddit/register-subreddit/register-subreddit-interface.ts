import { SubredditData } from '../../../entities/subreddit-entities/subreddit/subreddit-data';
import { RegisterSubredditResponse } from './register-subreddit-response';

export interface ISubreddit {
  execute: (subreddit: SubredditData) => Promise<RegisterSubredditResponse>;
}
