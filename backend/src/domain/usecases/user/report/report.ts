import { ReportData } from '../../../entities/user-entities/user/report-data';
import { UserRepository } from '../../ports/user-repository';
import { IReport } from './report-interface';

export class Report implements IReport {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(reportData: ReportData): Promise<boolean> {
    await this.report(reportData);

    return true;
  }

  private async report(reportData: ReportData): Promise<void> {
    await this.userRepository.report(reportData);
  }
}
