import { IProcessState } from '../../../../types';

export class Running implements IProcessState {
  start(): void {
    console.log(`The process is already started`);
  }
  pause(): void {
    console.log(`Process pause`);
  }
  resume(): void {
    console.log(`Resuming process`);
  }
  stop(): void {
    console.log(`Stop the process`);
  }
}
