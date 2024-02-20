import { ComputerBuilder } from './ComputerBuilder';

export class Computer {
  private _cpu: string;

  private _ram: string;

  private _capacity1: string;

  private _power: string;

  private _motherboard: string;

  private _externalGpu: string | undefined;

  private _capacity2: string | undefined;

  private _externalWifiCard: string | undefined;

  private _externalSoundCard: string | undefined;

  private _externalRGBController: string | undefined;

  constructor(builder: ComputerBuilder) {
    this._cpu = builder.cpu;
    this._ram = builder.ram;
    this._capacity1 = builder.capacity1;
    this._power = builder.power;
    this._motherboard = builder.motherboard;
    this._externalGpu = builder.externalGpu;
    this._capacity2 = builder.capacity2;
    this._externalWifiCard = builder.externalWifiCard;
    this._externalSoundCard = builder.externalSoundCard;
    this._externalRGBController = builder.externalRGBController;
  }

  public showStats(): void {
    console.log(`CPU:            ${this._cpu}`);
    console.log(`Motherboard:    ${this._motherboard}`);
    console.log(`RAM:            ${this._ram}`);
    console.log(`Capacity1:      ${this._capacity1}`);
    console.log(`Power:          ${this._power}`);
    this._capacity2 && console.log(`Capacity2:      ${this._capacity2}`);
    this._externalGpu && console.log(`External Gpu:   ${this._externalGpu}`);
    this._externalWifiCard &&
      console.log(`Wifu card:      ${this._externalWifiCard}`);
    this._externalSoundCard &&
      console.log(`Sound card:     ${this._externalSoundCard}`);
    this._externalRGBController &&
      console.log(`RGB controller: ${this._externalRGBController}`);
  }
}
