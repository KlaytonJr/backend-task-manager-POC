import { NextFunction, Request, Response } from 'express';
import responseRunTimeError from '../responses/ResponseRunTimeError';
import HttpException from '../errors/HttpException';
import HttpStatusCode from '../responses/HttpStatusCode';

function runTimeErrorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const status = error.status || HttpStatusCode.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Not identified error';

  return responseRunTimeError(res, status, message);
}

export default runTimeErrorMiddleware;
