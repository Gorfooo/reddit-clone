import { BlockData } from '../../../entities/user-entities/user/block-data';
import { UserRepository } from '../../ports/user-repository';
import { IUnblock } from './unblock-interface';

export class Unblock implements IUnblock {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIds: BlockData): Promise<boolean> {
    await this.unblock(userIds);

    return true;
  }

  private async unblock(userIds: BlockData): Promise<void> {
    await this.userRepository.unblock(userIds);
  }
}
