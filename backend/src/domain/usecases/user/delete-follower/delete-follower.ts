import { FollowerData } from '../../../entities/user-entities/user/follower-data';
import { UserRepository } from '../../ports/user-repository';
import { IDeleteFollower } from './delete-follower-interface';

export class DeleteFollower implements IDeleteFollower {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIds: FollowerData): Promise<boolean> {
    await this.deleteFollower(userIds);

    return true;
  }

  private async deleteFollower(userIds: FollowerData): Promise<void> {
    await this.userRepository.deleteFollower(userIds);
  }
}
