import { SendMessageResponse } from './send-message-response';
import { MessageData } from '../../../entities/user-entities/user/message-data';

export interface ISendMessage {
  execute: (messageData: MessageData) => Promise<SendMessageResponse>;
}
