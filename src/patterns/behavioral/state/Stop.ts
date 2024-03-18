import { IProcessState } from '../../../../types';
import { ProcessContext } from './ProcessContext';
import { Running } from './Running';

export class Stop implements IProcessState {
  start(context: ProcessContext): void {
    console.log(`Запусе процесу...`);
    context.setState(new Running());
  }
  pause(context: ProcessContext): void {
    console.log(`Процес вже зупинено`);
  }
  resume(context: ProcessContext): void {
    console.log(`Процес вже зупинено, немає потреби у продовженні`);
  }
  stop(context: ProcessContext): void {
    console.log(`Процес вже зупинено`);
  }
}
