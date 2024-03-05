import { ILaptopComp } from '../../../../types';
import { LaptopData } from './LaptopData';

export class Laptop implements ILaptopComp {
  private cpu: string;
  private ram: number;
  private capacity: number;
  private type: LaptopData;

  constructor(cpu: string, ram: number, capacity: number, type: LaptopData) {
    this.capacity = capacity;
    this.cpu = cpu;
    this.ram = ram;
    this.type = type;
  }

  use(): void {
    console.log(
      `Laptop: ${this.type.brand} ${this.type.model}\n\t- Cpu: ${this.cpu}\n\t- Capacity: ${this.capacity}\n\t- RAM: ${this.ram}`
    );
  }
}
