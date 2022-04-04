import { FollowerData } from '../../../entities/user-entities/user/follower-data';
import { UserRepository } from '../../ports/user-repository';
import { IDeleteFollower } from './delete-follower-interface';
import { DeleteFollowerResponse } from './delete-follower-response';

export class DeleteFollower implements IDeleteFollower {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIds: FollowerData): Promise<DeleteFollowerResponse> {
    await this.deleteFollower(userIds);

    return true;
  }

  private async deleteFollower(userIds: FollowerData): Promise<void> {
    await this.userRepository.deleteFollower(userIds);
  }
}
