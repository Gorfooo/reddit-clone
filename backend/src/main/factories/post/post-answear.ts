import { PostAnswearController } from '../../../adapters/presentation/controllers/post/post-answear-controller';
import { PostAnswear } from '../../../domain/usecases/post/post-answear/post-answear';
import { PostgresPostRepository } from '../../../external/repositories/post-repository';

export const makePostAnswearController = (): PostAnswearController => {
  const postRepository = new PostgresPostRepository();
  const postAnswearUseCase = new PostAnswear(postRepository);
  const postAnswearController = new PostAnswearController(postAnswearUseCase);
  return postAnswearController;
};
