import { Computer } from './Computer';

export class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.computer = new Computer();
  }

  public getComputer(): Computer {
    const res = this.computer;
    this.reset();

    return res;
  }

  // sets
  public set cpu(value: string) {
    this.computer.cpu = value;
  }

  public set gpu(value: string) {
    this.computer.gpu = value;
  }

  public set motherboard(value: string) {
    this.computer.motherboard = value;
  }

  public set ram(value: string) {
    this.computer.ram = value;
  }

  public set capacity(value: string) {
    this.computer.capacity = value;
  }

  public set power(value: string) {
    this.computer.power = value;
  }

  public set additional(value: string[]) {
    this.computer.additional = value;
  }
}
