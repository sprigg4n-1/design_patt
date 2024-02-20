import { Computer } from './Computer';

export class ComputerBuilder {
  private _cpu: string;

  private _motherboard: string;

  private _ram: string;

  private _power: string;

  private _capacity1: string;

  private _externalGpu: string | undefined = undefined;

  private _capacity2: string | undefined = undefined;

  private _externalWifiCard: string | undefined = undefined;

  private _externalSoundCard: string | undefined = undefined;

  private _externalRGBController: string | undefined = undefined;

  public get cpu(): string {
    return this._cpu;
  }

  public set cpu(value: string) {
    this._cpu = value;
  }
  public get externalGpu(): string | undefined {
    return this._externalGpu;
  }
  public set externalGpu(value: string) {
    this._externalGpu = value;
  }
  public get motherboard(): string {
    return this._motherboard;
  }
  public set motherboard(value: string) {
    this._motherboard = value;
  }
  public get ram(): string {
    return this._ram;
  }
  public set ram(value: string) {
    this._ram = value;
  }
  public get capacity1(): string {
    return this._capacity1;
  }
  public set capacity1(value: string) {
    this._capacity1 = value;
  }
  public get capacity2(): string | undefined {
    return this._capacity2;
  }
  public set capacity2(value: string) {
    this._capacity2 = value;
  }
  public get power(): string {
    return this._power;
  }
  public set power(value: string) {
    this._power = value;
  }
  public get externalWifiCard(): string | undefined {
    return this._externalWifiCard;
  }
  public set externalWifiCard(value: string) {
    this._externalWifiCard = value;
  }
  public get externalSoundCard(): string | undefined {
    return this._externalSoundCard;
  }
  public set externalSoundCard(value: string) {
    this._externalSoundCard = value;
  }
  public get externalRGBController(): string | undefined {
    return this._externalRGBController;
  }
  public set externalRGBController(value: string) {
    this._externalRGBController = value;
  }

  public build(): Computer {
    return new Computer(this);
  }
}
