import { IDatabase } from '../../../../types';

export class MySQLDatabase implements IDatabase {
  connect(): void {
    console.log(`Connecting to MySQL database`);
  }
  disconnect(): void {
    console.log(`Disconnecting from MySQL database`);
  }
  query(query: string): void {
    console.log(`Executing ${query}`);
  }
}
