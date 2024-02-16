import {
  EMSIMonitors,
  EMSIMotherboard,
  IDeviceFactory,
  IMonitor,
  IMotherboard,
} from '../../../../../types';

import MAG321Monitor from './monitor/MAG321Monitor';
import MEGZ690Monitor from './monitor/MEGZ690Monitor';
import { MEGZ790Mother } from './motherboard/MEGZ790Mother';
import { MEGZ690Mother } from './motherboard/MEGZ690Mother';

import {
  MonMAG321UPXDEstats,
  MonMAG271QPXDEstats,
  MothMEGZ790GODLIKEMAXstats,
  MothMEGZ690GODLIKEstats,
} from '../../../../../constants';

export class MSIFactory implements IDeviceFactory {
  createMonitor(monitor: EMSIMonitors): IMonitor {
    switch (monitor) {
      case EMSIMonitors.MAG321UPXDE:
        return new MAG321Monitor(MonMAG321UPXDEstats);
      case EMSIMonitors.MAG271QPXDE:
        return new MEGZ690Monitor(MonMAG271QPXDEstats);
    }
  }

  createMotherboard(motherboard: EMSIMotherboard): IMotherboard {
    switch (motherboard) {
      case EMSIMotherboard.MEGZ690GODLIKE:
        return new MEGZ690Mother(MothMEGZ690GODLIKEstats);
      case EMSIMotherboard.MEGZ790GODLIKEMAX:
        return new MEGZ790Mother(MothMEGZ790GODLIKEMAXstats);
    }
  }
}
