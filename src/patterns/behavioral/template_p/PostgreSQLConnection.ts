import { DatabaseConn } from './DatabaseConn';

export class PostgreSQLConnection extends DatabaseConn {
  connect(): void {
    console.log(`Connecting to PostgreSQL ...`);
  }
  query(sql: string) {
    console.log('Executing PostgreSQL  query:', sql);
    return 'PostgreSQL  query result';
  }
  close(): void {
    console.log('Closing PostgreSQL  connection...');
  }
}
