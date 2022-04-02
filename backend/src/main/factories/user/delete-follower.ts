import { DeleteFollowerController } from '../../../adapters/presentation/controllers/user/delete-follower-controller';
import { DeleteFollower } from '../../../domain/usecases/user/delete-follower/delete-follower';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeDeleteFollowerController = (): DeleteFollowerController => {
  const userRepository = new PostgresUserRepository();
  const deleteFollowerUseCase = new DeleteFollower(userRepository);
  const deleteFollowerController = new DeleteFollowerController(
    deleteFollowerUseCase,
  );
  return deleteFollowerController;
};
