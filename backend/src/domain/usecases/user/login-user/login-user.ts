import { UserData } from '../../../entities/user-entities/user/user-data';
import { left, right } from '../../../../shared/Either';
import { CreateLoginUser } from '../../../entities/user-entities/user/login-user';
import { LoginUserResponse } from './login-user-response';
import { UserRepository } from '../../ports/user-repository';
import { ILoginUser } from './login-user-interface';

export class LoginUser implements ILoginUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: UserData): Promise<LoginUserResponse> {
    const userIdOrError = await this.findUser(userData);

    if (userIdOrError.isLeft()) return left(userIdOrError.value);

    return right({ id: userIdOrError.value.id });
  }

  private async findUser(userData: UserData): Promise<LoginUserResponse> {
    const userOrError = await CreateLoginUser.create(userData);

    if (userOrError.isLeft()) return left(userOrError.value);

    const { id: userId } = await this.userRepository.findUser({
      email: userData.email,
      senha: userData.senha,
    });

    return right({ id: userId });
  }
}
