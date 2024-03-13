import { EUserRequest } from '../../../../types';
import { UserRequestHandler } from './UserRequestHandler';

export class ShowTask extends UserRequestHandler {
  handleRequest(request: EUserRequest): string {
    if (request === EUserRequest.show_task) {
      return `${request} succsesfull`;
    } else if (this.successor) {
      return this.successor.handleRequest(request);
    } else {
      return `${request} failed`;
    }
  }
}
