export interface HttpResponse {
  statusCode: number;
  body: {
    errors?: string;
  };
}

export interface HttpRequest {
  data?: any;
}
