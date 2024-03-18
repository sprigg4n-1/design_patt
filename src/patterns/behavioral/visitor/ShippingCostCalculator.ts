import { IShippingCostVisitor } from '../../../../types';
import { Books } from './Books';
import { Electronics } from './Electronics';

export class ShippingCostCalculator implements IShippingCostVisitor {
  public visitElectronics(electronics: Electronics): number {
    console.log(electronics);
    return 10;
  }

  public visitBooks(books: Books): number {
    console.log(books);
    return 5;
  }
}
