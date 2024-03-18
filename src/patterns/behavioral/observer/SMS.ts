import { IObserver } from '../../../../types';

export class SMS implements IObserver {
  notify(message: string): void {
    console.log(`Send sms: ${message}`);
  }
}
