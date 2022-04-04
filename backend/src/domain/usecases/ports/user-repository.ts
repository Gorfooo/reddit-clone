import { BlockData } from '../../entities/user-entities/user/block-data';
import { FollowerData } from '../../entities/user-entities/user/follower-data';
import { MessageData } from '../../entities/user-entities/user/message-data';
import { ReportData } from '../../entities/user-entities/user/report-data';
import { RegisterUserData } from '../../entities/user-entities/user/register-user-data';
import { ManagedId } from './repository';
import { UpdateUserData } from '../../entities/user-entities/user/update-user-data';
import { LoginUserData } from '../../entities/user-entities/user/login-user-data';

export interface UserRepository {
  add: (user: RegisterUserData) => Promise<ManagedId>;
  update: (user: UpdateUserData, id: number) => Promise<ManagedId>;
  findIdenticalEmail: (email: string) => Promise<string | null>;
  findUser: (user: LoginUserData) => Promise<ManagedId>;
  addNewFollower: (userIds: FollowerData) => Promise<void>;
  deleteFollower: (userIds: FollowerData) => Promise<void>;
  block: (userIds: BlockData) => Promise<void>;
  unblock: (userIds: BlockData) => Promise<void>;
  sendMessage: (messageData: MessageData) => Promise<void>;
  readMessage: (userIds: MessageData) => Promise<void>;
  report: (reportData: ReportData) => Promise<void>;
}
