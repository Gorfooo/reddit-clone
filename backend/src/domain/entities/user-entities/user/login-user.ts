import { PostgresUserRepository } from '../../../../external/repositories/user-repository';
import { Either, left, right } from '../../../../shared/Either';
import { UserData } from './user-data';
import { EmailAlreadyRegisteredError } from './errors/email-already-registered-error';

export class CreateLoginUser {
  constructor(public readonly email: string, public readonly senha: string) {}

  static async create(
    userData: UserData,
  ): Promise<Either<EmailAlreadyRegisteredError, CreateLoginUser>> {
    const emailIsAlreadyRegistered = await this.verifyEmailAlreadyRegistered(
      userData,
    );

    if (emailIsAlreadyRegistered.isLeft())
      return left(emailIsAlreadyRegistered.value);

    const userEntity = {
      ...new CreateLoginUser(userData.email, userData.senha),
    };

    return right(userEntity);
  }

  static async verifyEmailAlreadyRegistered(
    userData: UserData,
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
