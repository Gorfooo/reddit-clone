export interface IDeletePost {
  execute: (idPost: number) => Promise<boolean>;
}
