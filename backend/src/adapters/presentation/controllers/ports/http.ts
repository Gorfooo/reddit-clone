import { ControllerError } from '../errors/controller-error';

export interface HttpResponse {
  statusCode: number;
  body: {
    errors?: ControllerError | string;
  };
}

export interface HttpRequest {
  body?: {
    data?: any;
  };
}
