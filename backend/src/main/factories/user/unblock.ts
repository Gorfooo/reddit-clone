import { UnblockController } from '../../../adapters/presentation/controllers/user/unblock-controller';
import { Unblock } from '../../../domain/usecases/user/unblock/unblock';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeUnblockController = (): UnblockController => {
  const userRepository = new PostgresUserRepository();
  const unblockUseCase = new Unblock(userRepository);
  const unblockController = new UnblockController(unblockUseCase);
  return unblockController;
};
