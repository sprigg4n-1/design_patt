import { BaseTrink } from './BaseTrink';

export class Coffee extends BaseTrink {
  constructor() {
    super('Coffee');
  }

  cost(): number {
    return 2;
  }
}
