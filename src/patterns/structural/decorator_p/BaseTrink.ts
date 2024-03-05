import { IBaseTrink } from '../../../../types';

export abstract class BaseTrink implements IBaseTrink {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  printInfo(): string {
    return `${this.description}: ${this.cost()}$`;
  }

  abstract cost(): number;
}
