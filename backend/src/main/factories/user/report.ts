import { ReportController } from '../../../adapters/presentation/controllers/user/report-controller';
import { Report } from '../../../domain/usecases/user/report/report';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeReportController = (): ReportController => {
  const userRepository = new PostgresUserRepository();
  const reportUseCase = new Report(userRepository);
  const reportController = new ReportController(reportUseCase);
  return reportController;
};
