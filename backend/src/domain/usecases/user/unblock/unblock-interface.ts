import { UnblockResponse } from './unblock-response';
import { BlockData } from '../../../entities/user-entities/user/block-data';

export interface IUnblock {
  execute: (userIds: BlockData) => Promise<UnblockResponse>;
}
