import { ReadMessageController } from '../../../adapters/presentation/controllers/user/read-message-controller';
import { ReadMessage } from '../../../domain/usecases/user/read-message/read-message';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeReadMessageController = (): ReadMessageController => {
  const userRepository = new PostgresUserRepository();
  const readMessageUseCase = new ReadMessage(userRepository);
  const readMessageController = new ReadMessageController(readMessageUseCase);
  return readMessageController;
};
