import { IShippingCostVisitor } from '../../../../types';
import { ProductV } from './ProductV';

export class Electronics extends ProductV {
  constructor(name: string) {
    super(name);
  }

  public accept(visitor: IShippingCostVisitor): number {
    return visitor.visitElectronics(this);
  }
}
