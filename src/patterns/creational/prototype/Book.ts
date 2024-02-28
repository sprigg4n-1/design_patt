import { IPrototype } from '../../../../types';

export class Book implements IPrototype<Book> {
  private _title: string;

  private _authtor: string;

  private _price: number;

  constructor(title: string, authtor: string, price: number) {
    this.title = title;
    this.authtor = authtor;
    this.price = price;
  }

  doCopy(): Book {
    const clone = Object.create(this);

    return clone;
  }

  // gets and sets
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get authtor(): string {
    return this._authtor;
  }
  public set authtor(value: string) {
    this._authtor = value;
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
}
