import { ShoppingCartMemento } from './ShoppingCartMemento';

export class ShoppingCartHistory {
  private _history: ShoppingCartMemento[] = [];

  push(memento: ShoppingCartMemento): void {
    this.history.push(memento);
  }

  pop(): ShoppingCartMemento | undefined {
    return this.history.pop();
  }

  public get history(): ShoppingCartMemento[] {
    return this._history;
  }

  public set history(value: ShoppingCartMemento[]) {
    this._history = value;
  }
}
