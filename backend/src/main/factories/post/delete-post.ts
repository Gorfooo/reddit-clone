import { DeletePostController } from '../../../adapters/presentation/controllers/post/delete-post-controller';
import { DeletePost } from '../../../domain/usecases/post/delete-post/delete-post';
import { PostgresPostRepository } from '../../../external/repositories/post-repository';

export const makeDeletePostController = (): DeletePostController => {
  const postRepository = new PostgresPostRepository();
  const deletePostUseCase = new DeletePost(postRepository);
  const deletePostController = new DeletePostController(deletePostUseCase);
  return deletePostController;
};
