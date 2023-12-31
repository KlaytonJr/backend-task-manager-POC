import HttpStatusCode from '../responses/HttpStatusCode';
import HttpException from './HttpException';

class NoContentException extends HttpException {
  constructor() {
    super(HttpStatusCode.NO_CONTENT, 'Not find any data');
  }
}

export default NoContentException;
