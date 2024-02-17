import { IComputerStats } from '../../../../types';
import { ComputerBuilder } from './ComputerBuilder';

export class ComputerShop {
  public buildComputer(stats: IComputerStats, builder: ComputerBuilder): void {
    builder.cpu = stats.cpu;
    builder.gpu = stats.gpu;
    builder.motherboard = stats.motherboard;
    builder.ram = stats.ram;
    builder.capacity = stats.capacity;
    builder.power = stats.power;
    builder.additional = stats.additional;
  }
}
