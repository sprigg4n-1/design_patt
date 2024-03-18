import { IProcessState } from '../../../../types';
import { Pause } from './Pause';
import { ProcessContext } from './ProcessContext';
import { Stop } from './Stop';

export class Running implements IProcessState {
  start(context: ProcessContext): void {
    console.log(`Процес вже виконується`);
  }
  pause(context: ProcessContext): void {
    console.log(`Пауза у виконанні процесу...`);
    context.setState(new Pause());
  }
  resume(context: ProcessContext): void {
    console.log(`Продовження виконання процесу...`);
  }
  stop(context: ProcessContext): void {
    console.log(`Зупинка процесу...`);
    context.setState(new Stop());
  }
}
