import { IAuthStrategy } from '../../../../types';

export class AuthStrat {
  private strategy: IAuthStrategy;

  constructor(strategy: IAuthStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IAuthStrategy): void {
    this.strategy = strategy;
  }

  auth(data: Object): boolean {
    return this.strategy.auth(data);
  }
}
