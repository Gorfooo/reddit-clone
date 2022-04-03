import { ManageModeratorRequestData } from '../../../entities/subreddit-entities/subreddit/manage-moderator-request-data';
import { ManageModeratorRequestResponse } from './manage-moderator-request-response';

export interface IManageModeratorRequest {
  execute: (
    moderatorRequestData: ManageModeratorRequestData,
  ) => Promise<ManageModeratorRequestResponse>;
}
