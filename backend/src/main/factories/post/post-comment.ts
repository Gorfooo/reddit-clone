import { PostCommentController } from '../../../adapters/presentation/controllers/post/post-comment-controller';
import { PostComment } from '../../../domain/usecases/post/post-comment/post-comment';
import { PostgresPostRepository } from '../../../external/repositories/post-repository';

export const makePostCommentController = (): PostCommentController => {
  const postRepository = new PostgresPostRepository();
  const postCommentUseCase = new PostComment(postRepository);
  const postCommentController = new PostCommentController(postCommentUseCase);
  return postCommentController;
};
