import { LoginUserController } from '../../adapters/presentation/controllers/auth/login-user-controller';
import { LoginUser } from '../../domain/usecases/user/login-user/login-user';
import { PostgresUserRepository } from '../../external/repositories/user-repository';

export const makeLoginUserController = (): LoginUserController => {
  const userRepository = new PostgresUserRepository();
  const loginUserUseCase = new LoginUser(userRepository);
  const loginUserController = new LoginUserController(loginUserUseCase);
  return loginUserController;
};
