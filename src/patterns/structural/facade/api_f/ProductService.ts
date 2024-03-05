import { IProduct } from '../../../../../types';

export class ProductService {
  private products: IProduct[] = [];

  fetchProducts(): IProduct[] {
    return this.products;
  }

  addProduct(product: IProduct): void {
    this.products.push(product);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((prod) => prod.id !== productId);
  }
}
