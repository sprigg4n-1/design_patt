export abstract class DatabaseConn {
  abstract connect(): void;

  abstract query(sql: string): any;

  abstract close(): void;

  public execute(sql: string): any {
    this.connect();
    const result = this.query(sql);
    this.close();
    return result;
  }
}
