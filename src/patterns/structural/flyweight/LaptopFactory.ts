import { ILaptopComp } from '../../../../types';
import { Laptop } from './Laptop';
import { LaptopData } from './LaptopData';
export class LaptopFactory {
  private laptops: { [key: string]: ILaptopComp } = {};

  public createLaptop(
    brand: string,
    model: string,
    cpu: string,
    ram: number,
    capacity: number
  ): void {
    const lapDa = new LaptopData(brand, model);
    const key = lapDa.getKey();

    if (!this.laptops[key]) {
      this.laptops[key] = new Laptop(cpu, ram, capacity, lapDa);
    }
  }

  public showLaptops(): void {
    for (const key in this.laptops) {
      this.laptops[key].use();
    }
  }
}
