import { IShippingCostVisitor } from '../../../../types';
import { ProductV } from './ProductV';

export class Books extends ProductV {
  constructor(name: string) {
    super(name);
  }

  public accept(visitor: IShippingCostVisitor): number {
    return visitor.visitBooks(this);
  }
}
