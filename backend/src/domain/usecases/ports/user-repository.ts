import { BlockData } from '../../entities/user-entities/user/block-data';
import { FollowerData } from '../../entities/user-entities/user/follower-data';
import { MessageData } from '../../entities/user-entities/user/message-data';
import { ReportData } from '../../entities/user-entities/user/report-data';
import { UserData } from '../../entities/user-entities/user/user-data';
import { ManagedId } from './repository';

export interface UserRepository {
  add: (user: UserData) => Promise<ManagedId>;
  update: (user: UserData, id: number) => Promise<ManagedId>;
  findIdenticalEmail: (email: string) => Promise<string | null>;
  findUser: (user: UserData) => Promise<ManagedId>;
  addNewFollower: (userIds: FollowerData) => Promise<void>;
  deleteFollower: (userIds: FollowerData) => Promise<void>;
  block: (userIds: BlockData) => Promise<void>;
  unblock: (userIds: BlockData) => Promise<void>;
  sendMessage: (messageData: MessageData) => Promise<void>;
  readMessage: (userIds: MessageData) => Promise<void>;
  report: (reportData: ReportData) => Promise<void>;
}
