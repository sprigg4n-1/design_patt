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
    this.state.start(this);
  }

  pauseProcess(): void {
    this.state.pause(this);
  }

  resumeProcess(): void {
    this.state.resume(this);
  }

  stopProcess(): void {
    this.state.stop(this);
  }
}
