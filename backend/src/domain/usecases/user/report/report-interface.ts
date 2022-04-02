import { ReportResponse } from './report-response';
import { ReportData } from '../../../entities/user-entities/user/report-data';

export interface IReport {
  execute: (reportData: ReportData) => Promise<ReportResponse>;
}
