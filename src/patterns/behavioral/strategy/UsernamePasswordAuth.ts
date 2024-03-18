import { IAuthStrategy } from '../../../../types';

export class UsernamePasswordAuth implements IAuthStrategy {
  auth(data: Object): boolean {
    return data['username'] === 'admin' && data['password'] === '123456';
  }
}
