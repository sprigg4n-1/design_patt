// memento
export class ShoppingCartMemento {
  constructor(private items: string[]) {}

  getItems(): string[] {
    return [...this.items];
  }
}
