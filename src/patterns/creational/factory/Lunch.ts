import { EMenu, IMenuNames } from '../../../../types';
import Order from './Order';

export class Lunch extends Order {
  private _menus: IMenuNames = {
    dishes: ['Burgers', 'FrenchFries', 'Potato'],
  };

  private _type: string;
  private _nummer: number;

  public constructor(nummer: number, type: string) {
    super();
    this._type = type;
    this.nummer = nummer;
  }

  public getType() {
    console.log(`You choose ${this._type}`);
  }

  public getName() {
    this._nummer === 0
      ? console.log('Wrong order')
      : console.log(
          `Your ordered num ${this._nummer} - ${
            this._menus.dishes[this._nummer - 1]
          }`
        );
  }

  // set

  set nummer(value: number) {
    value < 1 || value > this._menus.dishes.length
      ? (this._nummer = 0)
      : (this._nummer = value);
  }
}
