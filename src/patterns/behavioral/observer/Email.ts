import { IObserver } from '../../../../types';

export class Email implements IObserver {
  notify(message: string): void {
    console.log(`Send email: ${message}`);
  }
}
