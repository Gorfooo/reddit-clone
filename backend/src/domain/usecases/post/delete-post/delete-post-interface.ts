import { DeletePostResponse } from './delete-post-response';

export interface IDeletePost {
  execute: (idPost: number) => Promise<DeletePostResponse>;
}
