import { PostAnswearData } from '../../domain/entities/post-entities/post/post-answear-data';
import { PostCommentData } from '../../domain/entities/post-entities/post/post-comment-data';
import { RegisterPostData } from '../../domain/entities/post-entities/post/register-post-data';
import { UpdatePostData } from '../../domain/entities/post-entities/post/update-post-data';
import { PostRepository } from '../../domain/usecases/ports/post-repository';
import { ManagedId } from '../../domain/usecases/ports/repository';
import { Tables } from '../database/ports/tables';
import { knexClient } from '../database/postgres/knex/client';

export class PostgresPostRepository implements PostRepository {
  async add(post: RegisterPostData): Promise<ManagedId> {
    const [insertedId] = await knexClient(Tables.Post)
      .insert(post)
      .returning('idPost');

    return { id: insertedId };
  }

  async insertPostTags(idPost: number, tags: number[]): Promise<boolean> {
    const tagsToInsert = tags.map(idTag => ({
      idTag,
      idPost,
    }));

    const [insertedId] = await knexClient(Tables.PostTags)
      .insert(tagsToInsert)
      .returning('idPost');

    if (insertedId) return true;

    return false;
  }

  async update(postData: UpdatePostData, idPost: number): Promise<void> {
    await knexClient(Tables.Post).update(postData).where('idPost', idPost);
  }

  async updatePostTags(idPost: number, tags: number[]): Promise<boolean> {
    await knexClient(Tables.PostTags).where('idPost', idPost).del();

    const tagsToInsert = tags.map(idTag => ({
      idTag,
      idPost,
    }));

    const [insertedId] = await knexClient(Tables.PostTags)
      .insert(tagsToInsert)
      .returning('idPost');

    if (insertedId) return true;

    return false;
  }

  async delete(idPost: number): Promise<void> {
    await knexClient(Tables.Post).where('idPost', idPost).del();
  }

  async deletePostTags(idPost: number): Promise<void> {
    await knexClient(Tables.PostTags).where('idPost', idPost).del();
  }

  async addComment(postComment: PostCommentData): Promise<void> {
    await knexClient(Tables.PostComment).insert(postComment);
  }

  async addAnswear(postAnswear: PostAnswearData): Promise<void> {
    await knexClient(Tables.PostAnswear).insert(postAnswear);
  }
}
