import { EUserRequest } from '../../../../types';

export abstract class UserRequestHandler {
  protected successor: UserRequestHandler | null = null;

  setSuccessor(successor: UserRequestHandler): UserRequestHandler {
    this.successor = successor;
    return successor;
  }

  abstract handleRequest(request: EUserRequest): string;
}
