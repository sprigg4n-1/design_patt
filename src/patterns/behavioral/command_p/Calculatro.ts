import { ICommandCalc } from '../../../../types';

export class Calculator {
  compute(com: ICommandCalc): number {
    return com.execute();
  }
}
