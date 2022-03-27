import { UpdateUserController } from '../../adapters/presentation/controllers/auth/update-user-controller';
import { UpdateUser } from '../../domain/usecases/user/update-user/update-user';
import { PostgresUserRepository } from '../../external/repositories/user-repository';

export const makeUpdateUserController = (): UpdateUserController => {
  const userRepository = new PostgresUserRepository();
  const updateUserUseCase = new UpdateUser(userRepository);
  const updateUserController = new UpdateUserController(updateUserUseCase);
  return updateUserController;
};
