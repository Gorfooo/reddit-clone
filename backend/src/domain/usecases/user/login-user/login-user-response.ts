import { UserNotFoundError } from '../../../entities/user-entities/user/errors/user-not-found-error';
import { Either } from '../../../../shared/Either';

type id = {
  id: number;
};

export type LoginUserResponse = Either<UserNotFoundError, id>;
