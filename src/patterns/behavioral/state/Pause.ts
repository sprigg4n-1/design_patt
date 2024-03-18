import { IProcessState } from '../../../../types';

export class Pause implements IProcessState {
  start(): void {
    console.log(`Resuming the process from a pause`);
  }
  pause(): void {
    console.log(`The process is already suspended`);
  }
  resume(): void {
    console.log(`Continuation of the process`);
  }
  stop(): void {
    console.log(`Stopping the process from pause`);
  }
}
