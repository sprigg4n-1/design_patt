import {
  EGigabyteMonitors,
  EGigabyteMotherboard,
  IDeviceFactory,
  IMonitor,
  IMotherboard,
} from '../../../../../types';

import { G34WQCMonitor } from './monitor/G34WQCMonitor';
import { H610MD3HDDR4Mother } from './motherboard/H610MD3HDDR4Mother';
import { B650MS2HMother } from './motherboard/B650MS2HMother';
import { S55UMonitor } from './monitor/S55UMonitor';

import {
  MothH610MD3HDDR4stats,
  MothB650MS2Hstats,
  MonS55Ustats,
  MonG34WQCstats,
} from '../../../../../constants';

export class GigabyteFactory implements IDeviceFactory {
  createMonitor(monitor: EGigabyteMonitors): IMonitor {
    switch (monitor) {
      case EGigabyteMonitors.G34WQC:
        return new G34WQCMonitor(MonG34WQCstats);
      case EGigabyteMonitors.S55U:
        return new S55UMonitor(MonS55Ustats);
    }
  }
  createMotherboard(motherboard: EGigabyteMotherboard): IMotherboard {
    switch (motherboard) {
      case EGigabyteMotherboard.B650MS2H:
        return new B650MS2HMother(MothB650MS2Hstats);
      case EGigabyteMotherboard.H610MD3HDDR4:
        return new H610MD3HDDR4Mother(MothH610MD3HDDR4stats);
    }
  }
}
