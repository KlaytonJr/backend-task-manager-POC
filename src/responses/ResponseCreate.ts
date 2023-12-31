import { Response } from 'express';
import HttpStatusCode from './HttpStatusCode';

function ResponseCreate(res: Response, body: any) {
  const status = HttpStatusCode.CREATED;
  const message = 'successfully created';
  const error = false;

  return res.status(status).send({
    status, message, error, body,
  });
}

export default ResponseCreate;
