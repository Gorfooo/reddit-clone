import { LoginUserData } from '../../../entities/user-entities/user/login-user-data';
import { left, right } from '../../../../shared/Either';
import { LoginUserResponse } from './login-user-response';
import { UserRepository } from '../../ports/user-repository';
import { ILoginUser } from './login-user-interface';
import { UserNotFoundError } from '../../../entities/user-entities/user/errors/user-not-found-error';

export class LoginUser implements ILoginUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: LoginUserData): Promise<LoginUserResponse> {
    const userIdOrError = await this.findUser(userData);

    if (userIdOrError.isLeft()) return left(userIdOrError.value);

    return right({ id: userIdOrError.value.id });
  }

  private async findUser(userData: LoginUserData): Promise<LoginUserResponse> {
    const userIdOrNotFound = await this.userRepository.findUser({
      email: userData.email,
      senha: userData.senha,
    });

    if (!userIdOrNotFound) return left(new UserNotFoundError());

    return right({ id: userIdOrNotFound.id });
  }
}
