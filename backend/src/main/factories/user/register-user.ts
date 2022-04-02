import { RegisterUserController } from '../../../adapters/presentation/controllers/user/register-user-controller';
import { RegisterUser } from '../../../domain/usecases/user/register-user/register-user';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeRegisterUserController = (): RegisterUserController => {
  const userRepository = new PostgresUserRepository();
  const registerUserUseCase = new RegisterUser(userRepository);
  const registerUserController = new RegisterUserController(
    registerUserUseCase,
  );
  return registerUserController;
};
