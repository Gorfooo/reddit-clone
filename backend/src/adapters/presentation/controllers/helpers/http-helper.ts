import { HttpResponse } from '../ports/http';
import { ServerError } from '../errors/server-error';

const succesMessage = [];

export const badRequest = (error: Error = null): HttpResponse => ({
  statusCode: 400,
  body: { errors: error?.message },
});

export const ok = (data: any = null): HttpResponse => ({
  statusCode: 200,
  body: data ?? succesMessage,
});

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: { errors: new ServerError(reason) },
});
