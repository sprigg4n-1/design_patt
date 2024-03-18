import { IMediator } from '../../../../types';
import { MedUser } from './MedUser';

export class LoginBtn extends MedUser {
  constructor(mediator: IMediator) {
    super(mediator);
  }

  click(username: string, password: string): void {
    console.log('Login button clicked');
    this.mediator.notify(this, 'loginClicked', { username, password });
  }
}
