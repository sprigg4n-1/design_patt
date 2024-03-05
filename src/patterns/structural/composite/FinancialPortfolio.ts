import { IFinancialComponent } from '../../../../types';

export class FinancialPortfolio implements IFinancialComponent {
  private name: string;

  private holding: IFinancialComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addComponent(comp: IFinancialComponent) {
    this.holding.push(comp);
  }

  calculateValue(): number {
    let sum = 0;
    this.holding.forEach((el) => {
      sum += el.calculateValue();
    });

    return sum;
  }

  getInfo(): string {
    let info = `${this.name}: \n`;

    this.holding.forEach((el, i) => {
      info += `\t${i + 1}. ${el.getInfo()}\n`;
    });

    return info;
  }
}
