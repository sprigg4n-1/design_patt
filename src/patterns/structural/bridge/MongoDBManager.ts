import { IProduct } from '../../../../types';
import { Manager } from './Manager';

export class MongoDBManager extends Manager {
  addProduct(product: IProduct): void {
    this.db.query(
      `db.products.insert({_id: ${product.id}, name: "${product.name}", price: ${product.price}})`
    );

    console.log(`Product added (MongoDB)`);
  }
  getProduct(productId: number): void {
    this.db.query(`db.products.find({_id: ${productId}})`);
    console.log(`Get product by id (MongoDB)`);
  }
}
