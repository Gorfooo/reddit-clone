import { FollowerData } from '../../../entities/user-entities/user/follower-data';
import { UserRepository } from '../../ports/user-repository';
import { IRegisterNewFollower } from './register-new-follower-interface';

export class RegisterNewFollower implements IRegisterNewFollower {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIds: FollowerData): Promise<boolean> {
    await this.registerNewFollower(userIds);

    return true;
  }

  private async registerNewFollower(userIds: FollowerData): Promise<void> {
    await this.userRepository.addNewFollower(userIds);
  }
}
