import { UpdateSubredditData } from '../../../entities/subreddit-entities/subreddit/update-subreddit-data';
import { UpdateSubredditResponse } from './update-subreddit-response';

export interface IUpdateSubreddit {
  execute: (subreddit: UpdateSubredditData) => Promise<UpdateSubredditResponse>;
}
