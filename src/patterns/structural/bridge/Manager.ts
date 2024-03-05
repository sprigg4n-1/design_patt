import { IDatabase, IProduct } from '../../../../types';

export abstract class Manager {
  protected db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  abstract addProduct(product: IProduct): void;
  abstract getProduct(productId: number): void;
}
