import { IFinancialComponent } from '../../../../../types';

export class Cash implements IFinancialComponent {
  private name: string;
  private value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }

  getInfo(): string {
    return `${this.name}: ${this.calculateValue()}`;
  }

  calculateValue(): number {
    return this.value;
  }
}
