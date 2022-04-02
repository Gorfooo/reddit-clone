import { ReadMessageResponse } from './read-message-response';
import { MessageData } from '../../../entities/user-entities/user/message-data';

export interface IReadMessage {
  execute: (userIds: MessageData) => Promise<ReadMessageResponse>;
}
