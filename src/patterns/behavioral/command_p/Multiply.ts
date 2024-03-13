import { ICommandCalc } from './../../../../types/index';
export class Multiply implements ICommandCalc {
  constructor(private n1: number, private n2: number) {}

  execute(): number {
    return this.n1 * this.n2;
  }
}
