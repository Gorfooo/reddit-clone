import { RegisterNewFollowerController } from '../../../adapters/presentation/controllers/user/register-new-follower-controller';
import { RegisterNewFollower } from '../../../domain/usecases/user/register-new-follower/register-new-follower';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeNewFollowerController = (): RegisterNewFollowerController => {
  const userRepository = new PostgresUserRepository();
  const registerNewFollowerUseCase = new RegisterNewFollower(userRepository);
  const registerNewFollowerController = new RegisterNewFollowerController(
    registerNewFollowerUseCase,
  );
  return registerNewFollowerController;
};
