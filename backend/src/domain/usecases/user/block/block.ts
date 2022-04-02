import { BlockData } from '../../../entities/user-entities/user/block-data';
import { UserRepository } from '../../ports/user-repository';
import { IBlock } from './block-interface';

export class Block implements IBlock {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIds: BlockData): Promise<boolean> {
    await this.block(userIds);

    return true;
  }

  private async block(userIds: BlockData): Promise<void> {
    await this.userRepository.block(userIds);
  }
}
