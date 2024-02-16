import { IMonitor, IMonitorStats } from '../../../../../../types';

export class G34WQCMonitor implements IMonitor {
  stats: IMonitorStats;

  constructor(stats: IMonitorStats) {
    this.stats = stats;
  }

  getStats(): void {
    console.log(`Brand: ${this.stats.brand}`);
    console.log(`Size: ${this.stats.size}`);
    console.log(`Resolution: ${this.stats.maxRes}`);
    console.log(`Display type: ${this.stats.disType}`);
    console.log(`Connections: `);
    this.stats.connections.forEach((el) => {
      console.log(`\t${el}`);
    });
  }
}
