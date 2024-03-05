import { IProduct } from '../../../../types';
import { ProductService } from './api_f/ProductService';

export class ProductFacade {
  private ps: ProductService;

  constructor() {
    this.ps = new ProductService();
  }

  public getProducts(): IProduct[] {
    return this.ps.fetchProducts();
  }

  public addProduct(pr: IProduct): void {
    this.ps.addProduct(pr);
  }

  public deleteProduct(prId: number): void {
    this.ps.deleteProduct(prId);
  }
}
