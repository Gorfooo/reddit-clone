import { EmailAlreadyRegisteredError } from '../../../entities/user-entities/user/errors/email-already-registered-error';
import { Either } from '../../../../shared/Either';

type id = {
  id: number;
};

export type RegisterUserResponse = Either<EmailAlreadyRegisteredError, id>;
