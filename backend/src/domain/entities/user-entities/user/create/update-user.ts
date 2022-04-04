import { PostgresUserRepository } from '../../../../../external/repositories/user-repository';
import { Either, left, right } from '../../../../../shared/Either';
import { UpdateUserData } from '../update-user-data';
import { EmailAlreadyRegisteredError } from '../errors/email-already-registered-error';

export class CreateUpdateUser {
  constructor(
    public readonly idUsuario: number,
    public readonly email?: string,
    public readonly senha?: string,
    public readonly nome?: string,
    public readonly sobre?: string,
    public readonly avatar?: string,
    public readonly banner?: string,
  ) {}

  static async create(
    userData: UpdateUserData,
  ): Promise<Either<EmailAlreadyRegisteredError, CreateUpdateUser>> {
    const emailIsAlreadyRegistered = await this.verifyEmailAlreadyRegistered(
      userData,
    );

    if (emailIsAlreadyRegistered.isLeft())
      return left(emailIsAlreadyRegistered.value);

    const userEntity = {
      ...new CreateUpdateUser(
        userData.idUsuario,
        userData.email,
        userData.senha,
        userData.nome,
        userData.sobre,
        userData.avatar,
        userData.banner,
      ),
    };

    return right(userEntity);
  }

  static async verifyEmailAlreadyRegistered(
    userData: UpdateUserData,
  ): Promise<Either<EmailAlreadyRegisteredError, null>> {
    const userRepository = new PostgresUserRepository();

    const emailAlreadyRegistered = await userRepository.findIdenticalEmail(
      userData.email,
    );

    if (emailAlreadyRegistered)
      return left(new EmailAlreadyRegisteredError(userData.email));

    return right(null);
  }
}
