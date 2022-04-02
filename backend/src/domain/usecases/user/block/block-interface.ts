import { BlockResponse } from './block-response';
import { BlockData } from '../../../entities/user-entities/user/block-data';

export interface IBlock {
  execute: (userIds: BlockData) => Promise<BlockResponse>;
}
