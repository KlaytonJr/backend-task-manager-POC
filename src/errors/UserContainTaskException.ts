import HttpStatusCode from '../responses/HttpStatusCode';
import HttpException from './HttpException';

class UserContainTaskException extends HttpException {
  constructor() {
    super(HttpStatusCode.CONFLICT, 'Impossible exclude, because the user have tasks related.');
  }
}

export default UserContainTaskException;
