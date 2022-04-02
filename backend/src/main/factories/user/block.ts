import { BlockController } from '../../../adapters/presentation/controllers/user/block-controller';
import { Block } from '../../../domain/usecases/user/block/block';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeBlockController = (): BlockController => {
  const userRepository = new PostgresUserRepository();
  const blockUseCase = new Block(userRepository);
  const blockController = new BlockController(blockUseCase);
  return blockController;
};
