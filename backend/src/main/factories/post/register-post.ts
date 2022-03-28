import { RegisterPostController } from '../../../adapters/presentation/controllers/post/register-post-controller';
import { RegisterPost } from '../../../domain/usecases/post/register-post/register-post';
import { PostgresPostRepository } from '../../../external/repositories/post-repository';

export const makeRegisterPostController = (): RegisterPostController => {
  const postRepository = new PostgresPostRepository();
  const registerPostUseCase = new RegisterPost(postRepository);
  const registerPostController = new RegisterPostController(
    registerPostUseCase,
  );
  return registerPostController;
};
