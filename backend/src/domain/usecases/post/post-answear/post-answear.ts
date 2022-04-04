import { PostAnswearData } from '../../../entities/post-entities/post/post-answear-data';
import { PostRepository } from '../../ports/post-repository';
import { IPostAnswear } from './post-answear-interface';
import { PostAnswearResponse } from './post-answear-response';

export class PostAnswear implements IPostAnswear {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postAnswear: PostAnswearData): Promise<PostAnswearResponse> {
    await this.saveAnswear(postAnswear);

    return true;
  }

  private async saveAnswear(postAnswear: PostAnswearData): Promise<void> {
    await this.postRepository.addAnswear(postAnswear);
  }
}
