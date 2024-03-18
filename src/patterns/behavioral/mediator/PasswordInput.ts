import { IMediator } from '../../../../types';
import { MedUser } from './MedUser';

export class PasswordInput extends MedUser {
  constructor(mediator: IMediator) {
    super(mediator);
  }
  inputChanged(): void {
    console.log('Password input changed');
    this.mediator.notify(this, 'inputChanged', null);
  }

  clear(): void {
    console.log('Clearing password input');
  }
}
