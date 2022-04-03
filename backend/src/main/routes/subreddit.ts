import express from 'express';
import { validateRegisterSubredditFields } from './rules/subreddit/subreddit-create';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterSubredditController } from '../factories/subreddit/register-subreddit';

const subredditRoutes = express();

subredditRoutes.use(express.json());
subredditRoutes.post(
  '/subreddit/create',
  validateRegisterSubredditFields(),
  adaptRoute(makeRegisterSubredditController()),
);

export default subredditRoutes;
