import { DatabaseConn } from './DatabaseConn';

export class MySQLConnection extends DatabaseConn {
  connect(): void {
    console.log(`Connecting to MySQL...`);
  }
  query(sql: string) {
    console.log('Executing MySQL query:', sql);
    return 'MySQL query result';
  }
  close(): void {
    console.log('Closing MySQL connection...');
  }
}
