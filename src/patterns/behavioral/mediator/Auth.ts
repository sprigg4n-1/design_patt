import { LoginBtn } from './LoginBtn';
import { PasswordInput } from './PasswordInput';
import { UsernameInput } from './UsernameInput';
import { IMediator } from './../../../../types/index';
import { MedUser } from './MedUser';
export class Auth implements IMediator {
  private usernameInput: UsernameInput;
  private passwordInput: PasswordInput;
  private loginInput: LoginBtn;

  constructor() {
    this.usernameInput = new UsernameInput(this);
    this.passwordInput = new PasswordInput(this);
    this.loginInput = new LoginBtn(this);
  }

  notify(sender: MedUser, event: string, data: any): void {
    if (sender instanceof UsernameInput && event === 'inputChanged') {
      this.passwordInput.clear();
    } else if (sender instanceof PasswordInput && event === 'inputChanged') {
      this.usernameInput.clear();
    } else if (sender instanceof LoginBtn && event === 'loginClicked') {
      this.login(data.username, data.password);
    }
  }

  login(username: string, password: string): void {
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  }
}
