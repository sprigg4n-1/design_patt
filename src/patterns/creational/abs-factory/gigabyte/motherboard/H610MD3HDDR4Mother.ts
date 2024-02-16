import { IMotherboard, IMotherboardStats } from '../../../../../../types';

export class H610MD3HDDR4Mother implements IMotherboard {
  stats: IMotherboardStats;

  constructor(stats: IMotherboardStats) {
    this.stats = stats;
  }

  getStats(): void {
    console.log(`Brand: ${this.stats.brand}`);
    console.log(`Chipset: ${this.stats.chipset}`);
    console.log(`Base: ${this.stats.base}`);
    console.log(`RAM: ${this.stats.RAM}`);
  }
}
