import { DeleteFollowerResponse } from './delete-follower-response';
import { FollowerData } from '../../../entities/user-entities/user/follower-data';

export interface IDeleteFollower {
  execute: (userIds: FollowerData) => Promise<DeleteFollowerResponse>;
}
