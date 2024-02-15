import { EMenu, IMenuNames } from '../../../../types';
import Order from './Order';

export class Breakfast extends Order {
  private menus: IMenuNames = {
    dishes: ['Sandwiches', 'AmericanWaffles', 'FullEnglish'],
  };

  private nummer: number;
  private type: string;

  public constructor(nummer: number, type: string) {
    super();
    this.type = type;
    this._nummer = nummer;
  }

  public getType() {
    console.log(`You choose ${this.type}`);
  }

  public getName() {
    this.nummer === 0
      ? console.log('Wrong order')
      : console.log(
          `Your ordered num ${this.nummer} - ${
            this.menus.dishes[this.nummer - 1]
          }`
        );
  }

  // set

  set _nummer(value: number) {
    value < 1 || value > this.menus.dishes.length
      ? (this.nummer = 0)
      : (this.nummer = value);
  }
}
