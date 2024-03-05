import { BaseTrink } from './BaseTrink';

export class MilkDec extends BaseTrink {
  base: BaseTrink;

  constructor(base: BaseTrink) {
    super(base.description + ', Milk');
    this.base = base;
  }

  cost(): number {
    return this.base.cost() + 0.5;
  }
}
