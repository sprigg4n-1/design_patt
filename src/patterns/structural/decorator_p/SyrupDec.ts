import { BaseTrink } from './BaseTrink';

export class SyrupDec extends BaseTrink {
  base: BaseTrink;

  constructor(base: BaseTrink) {
    super(base.description + ', Syrup');
    this.base = base;
  }

  cost(): number {
    return this.base.cost() + 0.75;
  }
}
