import { IAuthStrategy } from '../../../../types';

export class TokenAuth implements IAuthStrategy {
  auth(data: Object): boolean {
    return data['token'] === 'token_123_123_aaa';
  }
}
