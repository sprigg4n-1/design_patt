import { Computer } from './Computer';

export class ComputerBuilder {
  private product: Computer;

  constructor() {
    this.reset();
  }
  public reset(): void {
    this.product = new Computer();
  }
  public getProduct(): Computer {
    const res = this.product;
    this.reset();
    return res;
  }
  // sets
  public set cpu(value: string) {
    this.product.cpu = value;
  }
  public set gpu(value: string) {
    this.product.gpu = value;
  }
  public set motherboard(value: string) {
    this.product.motherboard = value;
  }
  public set ram(value: string) {
    this.product.ram = value;
  }
  public set capacity(value: string) {
    this.product.capacity = value;
  }
  public set power(value: string) {
    this.product.power = value;
  }
  public set additional(value: string[]) {
    this.product.additional = value;
  }
}
