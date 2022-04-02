import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { IReport } from '../../../../domain/usecases/user/report/report-interface';

export class ReportController {
  private readonly report: IReport;

  constructor(report: IReport) {
    this.report = report;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const reportData = {
        idMotivo: httpRequest.data.idMotivo,
        idUsuarioDenunciador: httpRequest.data.idUsuarioDenunciador,
        idUsuarioDenunciado: httpRequest.data.idUsuarioDenunciado,
        idPost: httpRequest.data.idPost,
        idSubreddit: httpRequest.data.idSubreddit,
        obs: httpRequest.data.obs,
      };

      const reportResponse: boolean = await this.report.execute(reportData);

      return ok(reportResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
