import express from 'express';
import { validateRegisterSubredditFields } from './rules/subreddit/subreddit-create';
import { validateUpdateSubredditFields } from './rules/subreddit/subreddit-update';
import { validateSubredditAddUserFields } from './rules/subreddit/subreddit-add-user';
import { validateSubredditRemoveUserFields } from './rules/subreddit/subreddit-remove-user';
import { validateSubredditModeratorRequestFields } from './rules/subreddit/subreddit-moderator-request';
import { validateSubredditAddRuleFields } from './rules/subreddit/subreddit-add-rule';
import { validateSubredditRemoveRuleFields } from './rules/subreddit/subreddit-remove-rule';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterSubredditController } from '../factories/subreddit/register-subreddit';
import { makeUpdateSubredditController } from '../factories/subreddit/update-subreddit';
import { makeSubredditAddUserController } from '../factories/subreddit/subreddit-add-user';
import { makeSubredditRemoveUserController } from '../factories/subreddit/subreddit-remove-user';
import { makeSubredditModeratorRequestController } from '../factories/subreddit/subreddit-moderator-request';
import { makeSubredditAddRuleController } from '../factories/subreddit/subreddit-add-rule';
import { makeSubredditRemoveRuleController } from '../factories/subreddit/subreddit-remove-rule';
import { validateManageModeratorRequestFields } from './rules/subreddit/manage-moderator-request';
import { makeManageModeratorRequestController } from '../factories/subreddit/manage-moderator-request';

const subredditRoutes = express();

subredditRoutes.use(express.json());
subredditRoutes.post(
  '/subreddit/create',
  validateRegisterSubredditFields(),
  adaptRoute(makeRegisterSubredditController()),
);

subredditRoutes.post(
  '/subreddit/update',
  validateUpdateSubredditFields(),
  adaptRoute(makeUpdateSubredditController()),
);

subredditRoutes.post(
  '/subreddit/addUser',
  validateSubredditAddUserFields(),
  adaptRoute(makeSubredditAddUserController()),
);

subredditRoutes.post(
  '/subreddit/removeUser',
  validateSubredditRemoveUserFields(),
  adaptRoute(makeSubredditRemoveUserController()),
);

subredditRoutes.post(
  '/subreddit/requestModerator',
  validateSubredditModeratorRequestFields(),
  adaptRoute(makeSubredditModeratorRequestController()),
);

subredditRoutes.post(
  '/subreddit/manageModeratorRequest',
  validateManageModeratorRequestFields(),
  adaptRoute(makeManageModeratorRequestController()),
);

subredditRoutes.post(
  '/subreddit/addRule',
  validateSubredditAddRuleFields(),
  adaptRoute(makeSubredditAddRuleController()),
);

subredditRoutes.post(
  '/subreddit/removeRule',
  validateSubredditRemoveRuleFields(),
  adaptRoute(makeSubredditRemoveRuleController()),
);

export default subredditRoutes;
