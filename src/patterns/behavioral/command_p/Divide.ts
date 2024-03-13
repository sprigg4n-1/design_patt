import { ICommandCalc } from './../../../../types/index';
export class Divide implements ICommandCalc {
  constructor(private n1: number, private n2: number) {}

  execute(): number {
    if (this.n2 === 0) {
      console.log(`Can not divide by 0`);
      return NaN;
    } else {
      return this.n1 / this.n2;
    }
  }
}
