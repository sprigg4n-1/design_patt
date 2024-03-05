import { BaseTrink } from './BaseTrink';

export class SugarDec extends BaseTrink {
  base: BaseTrink;

  constructor(base: BaseTrink) {
    super(base.description + ', Sugar');
    this.base = base;
  }

  cost(): number {
    return this.base.cost() + 0.25;
  }
}
