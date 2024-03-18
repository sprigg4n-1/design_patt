import { IMediator } from '../../../../types';

export abstract class MedUser {
  constructor(protected mediator: IMediator) {}
}
