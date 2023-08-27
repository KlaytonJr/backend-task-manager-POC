import { Response } from 'express';
import HttpStatusCode from './HttpStatusCode';

function ResponseNotFound(res: Response) {
  const status = HttpStatusCode.NOT_FOUND;
  const message = 'Route not founded';
  const error = true;
  const body = {};

  return res.status(status).send({
    status, message, error, body,
  });
}

export default ResponseNotFound;
