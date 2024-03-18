import { IMediator } from '../../../../types';
import { MedUser } from './MedUser';

export class UsernameInput extends MedUser {
  constructor(mediator: IMediator) {
    super(mediator);
  }

  inputChanged(): void {
    console.log('Username input changed');
    this.mediator.notify(this, 'inputChanged', null);
  }

  clear(): void {
    console.log('Clearing username input');
  }
}
