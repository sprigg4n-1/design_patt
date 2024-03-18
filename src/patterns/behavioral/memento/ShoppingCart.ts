import { ShoppingCartMemento } from './ShoppingCartMemento';

export class ShoppingCart {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  removeItem(item: string): void {
    const i = this.items.indexOf(item);

    if (i !== -1) this.items.splice(i, 1);
  }

  showItems(): void {
    console.log(`Items: ${this.items}`);
  }

  save(): ShoppingCartMemento {
    return new ShoppingCartMemento([...this.items]);
  }

  restore(memento: ShoppingCartMemento): void {
    this.items = memento.getItems();
  }
}
