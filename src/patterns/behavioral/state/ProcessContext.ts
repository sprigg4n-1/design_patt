import { IProcessState } from '../../../../types';

export class ProcessContext {
  private state: IProcessState;

  constructor(initState: IProcessState) {
    this.state = initState;
  }

  setState(state: IProcessState): void {
    this.state = state;
  }

  startProcess(): void {
    this.state.start();
  }

  pauseProcess(): void {
    this.state.pause();
  }

  resumeProcess(): void {
    this.state.resume();
  }

  stopProcess(): void {
    this.state.stop();
  }
}
