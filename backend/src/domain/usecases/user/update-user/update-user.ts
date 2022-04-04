import { UpdateUserData } from '../../../entities/user-entities/user/update-user-data';
import { left, right } from '../../../../shared/Either';
import { CreateUpdateUser } from '../../../entities/user-entities/user/create/update-user';
import { UpdateUserResponse } from './update-user-response';
import { UserRepository } from '../../ports/user-repository';
import { IUpdateUser } from './update-user-interface';

export class UpdateUser implements IUpdateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: UpdateUserData): Promise<UpdateUserResponse> {
    const userIdOrError = await this.updateUser(userData);

    if (userIdOrError.isLeft()) return left(userIdOrError.value);

    return right({ id: userIdOrError.value.id });
  }

  private async updateUser(
    userData: UpdateUserData,
  ): Promise<UpdateUserResponse> {
    const userOrError = await CreateUpdateUser.create(userData);

    if (userOrError.isLeft()) return left(userOrError.value);

    const { id: userUpdatedId } = await this.userRepository.update(
      {
        email: userData.email,
        senha: userData.senha,
        nome: userData.nome,
        sobre: userData.sobre,
        avatar: userData.avatar,
        banner: userData.banner,
      },
      userData.idUsuario,
    );

    return right({ id: userUpdatedId });
  }
}
