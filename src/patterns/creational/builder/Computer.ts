export class Computer {
  private _cpu: string;

  private _gpu: string;

  private _motherboard: string;

  private _ram: string;

  private _capacity: string;

  private _power: string;

  private _additional: string[];

  public showStats(): void {
    console.log(`CPU:         ${this._cpu}`);
    console.log(`GPU:         ${this._gpu}`);
    console.log(`Motherboard: ${this._motherboard}`);
    console.log(`RAM:         ${this._ram}`);
    console.log(`Capacity:    ${this._capacity}`);
    console.log(`Power:       ${this._power}`);
    this.showAdditional(this._additional.length !== 0);
  }

  private showAdditional(show: boolean): void {
    show && console.log('Adiitional:');
    this._additional.forEach((el, i) => {
      console.log(`\t${i + 1}. ${el}`);
    });
  }

  public set cpu(value: string) {
    this._cpu = value;
  }

  public set gpu(value: string) {
    this._gpu = value;
  }

  public set motherboard(value: string) {
    this._motherboard = value;
  }

  public set ram(value: string) {
    this._ram = value;
  }

  public set capacity(value: string) {
    this._capacity = value;
  }

  public set power(value: string) {
    this._power = value;
  }

  public set additional(value: string[]) {
    this._additional = value;
  }
}
