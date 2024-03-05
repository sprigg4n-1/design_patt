import { IProduct } from '../../../../types';
import { Manager } from './Manager';

export class MySQLManager extends Manager {
  addProduct(product: IProduct): void {
    this.db.query(
      `INSERT INTO products VALUES (${product.id}, ${product.name}, ${product.price})`
    );

    console.log(`Product added (MySQL)`);
  }
  getProduct(productId: number): void {
    this.db.query(`SELECT * FROM products WHERE id = ${productId}`);
    console.log(`Get product by id (MySQL)`);
  }
}
