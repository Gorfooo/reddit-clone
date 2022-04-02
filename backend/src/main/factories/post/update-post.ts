import { UpdatePostController } from '../../../adapters/presentation/controllers/post/update-post-controller';
import { UpdatePost } from '../../../domain/usecases/post/update-post/update-post';
import { PostgresPostRepository } from '../../../external/repositories/post-repository';

export const makeUpdatePostController = (): UpdatePostController => {
  const postRepository = new PostgresPostRepository();
  const updatePostUseCase = new UpdatePost(postRepository);
  const updatePostController = new UpdatePostController(updatePostUseCase);
  return updatePostController;
};
