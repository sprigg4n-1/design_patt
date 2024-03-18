import { IShippingCostVisitor } from '../../../../types';

export abstract class ProductV {
  constructor(protected name: string) {}

  public abstract accept(visitor: IShippingCostVisitor): number;
}
