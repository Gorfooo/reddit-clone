import { RegisterNewFollowerResponse } from './register-new-follower-response';
import { FollowerData } from '../../../entities/user-entities/user/follower-data';

export interface IRegisterNewFollower {
  execute: (userIds: FollowerData) => Promise<RegisterNewFollowerResponse>;
}
