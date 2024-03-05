import { IFinancialComponent } from '../../../../../types';

export class Stock implements IFinancialComponent {
  private name: string;

  private quantity: number;
  private value: number;

  constructor(name: string, quantity: number, value: number) {
    this.name = name;
    this.value = value;
    this.quantity = quantity;
  }

  getInfo(): string {
    return `${this.name}: ${this.calculateValue()}`;
  }

  calculateValue(): number {
    return this.value * this.quantity;
  }
}
