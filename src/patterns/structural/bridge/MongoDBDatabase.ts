import { IDatabase } from '../../../../types';

export class MongoDBDatabase implements IDatabase {
  connect(): void {
    console.log(`Connecting to MongoDB database`);
  }
  disconnect(): void {
    console.log(`Disconnecting from MongoDB database`);
  }
  query(query: string): void {
    console.log(`Executing ${query}`);
  }
}
