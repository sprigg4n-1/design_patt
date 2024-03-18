import { IObserver } from './../../../../types/index';
export class NotificationService {
  private observers: IObserver[] = [];

  addObesrver(observer: IObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    const i = this.observers.indexOf(observer);
    if (i !== -1) {
      this.observers.splice(i, 1);
    }
  }

  sendNotification(message: string): void {
    this.observers.forEach((observer) => {
      observer.notify(message);
    });
  }
}
