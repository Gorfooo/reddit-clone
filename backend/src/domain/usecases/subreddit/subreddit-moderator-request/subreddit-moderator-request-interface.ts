import { SubredditModeratorRequestData } from '../../../entities/subreddit-entities/subreddit/subreddit-moderator-request-data';
import { SubredditModeratorRequestResponse } from './subreddit-moderator-request-response';

export interface ISubredditModeratorRequest {
  execute: (
    moderatorRequestData: SubredditModeratorRequestData,
  ) => Promise<SubredditModeratorRequestResponse>;
}
