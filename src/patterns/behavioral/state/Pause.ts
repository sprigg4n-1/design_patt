import { IProcessState } from '../../../../types';
import { ProcessContext } from './ProcessContext';
import { Running } from './Running';
import { Stop } from './Stop';

export class Pause implements IProcessState {
  start(context: ProcessContext): void {
    console.log('Продовження виконання процесу з паузи...');
    context.setState(new Running());
  }

  pause(context: ProcessContext): void {
    console.log('Процес вже на паузі.');
  }

  resume(context: ProcessContext): void {
    console.log('Продовження виконання процесу з паузи...');
    context.setState(new Running());
  }

  stop(context: ProcessContext): void {
    console.log('Зупинка процесу з паузи...');
    context.setState(new Stop());
  }
}
