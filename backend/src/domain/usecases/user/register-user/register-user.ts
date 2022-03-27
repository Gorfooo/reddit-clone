import { UserData } from '../../../entities/user-entities/user/user-data';
import { left, right } from '../../../../shared/Either';
import { CreateRegisterUser } from '../../../entities/user-entities/user/create-user';
import { RegisterUserResponse } from './register-user-response';
import { UserRepository } from '../../ports/user-repository';
import { IRegisterUser } from './register-user-interface';

export class RegisterUser implements IRegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: UserData): Promise<RegisterUserResponse> {
    const userIdOrError = await this.saveUser(userData);

    if (userIdOrError.isLeft()) return left(userIdOrError.value);

    return right({ id: userIdOrError.value.id });
  }

  private async saveUser(userData: UserData): Promise<RegisterUserResponse> {
    const userOrError = await CreateRegisterUser.create(userData);

    if (userOrError.isLeft()) return left(userOrError.value);

    const { id: userId } = await this.userRepository.add({
      nome: userData.nome,
      email: userData.email,
      senha: userData.senha,
      nascimento: userData.nascimento,
    });

    return right({ id: userId });
  }
}
