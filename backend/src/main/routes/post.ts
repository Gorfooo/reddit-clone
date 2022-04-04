import express from 'express';
import { validateRegisterPostFields } from './rules/post/post-create';
import { validateUpdatePostFields } from './rules/post/post-update';
import { validateDeletePostFields } from './rules/post/post-delete';
import { validatePostCommentFields } from './rules/post/post-comment';
import { validatePostAnswearFields } from './rules/post/post-answear';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeRegisterPostController } from '../factories/post/register-post';
import { makeUpdatePostController } from '../factories/post/update-post';
import { makeDeletePostController } from '../factories/post/delete-post';
import { makePostCommentController } from '../factories/post/post-comment';
import { makePostAnswearController } from '../factories/post/post-answear';

const postRoutes = express();

postRoutes.use(express.json());
postRoutes.post(
  '/post/create',
  validateRegisterPostFields(),
  adaptRoute(makeRegisterPostController()),
);

postRoutes.post(
  '/post/update',
  validateUpdatePostFields(),
  adaptRoute(makeUpdatePostController()),
);

postRoutes.post(
  '/post/delete',
  validateDeletePostFields(),
  adaptRoute(makeDeletePostController()),
);

postRoutes.post(
  '/post/comment',
  validatePostCommentFields(),
  adaptRoute(makePostCommentController()),
);

postRoutes.post(
  '/post/answear',
  validatePostAnswearFields(),
  adaptRoute(makePostAnswearController()),
);

export default postRoutes;
