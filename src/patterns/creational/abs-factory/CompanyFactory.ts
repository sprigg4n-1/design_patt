import { MSIFactory } from './msi/MSIFactory';
import { GigabyteFactory } from './gigabyte/GigabyteFactory';
import {
  ECompany,
  ICompanyFactory,
  IDeviceFactory,
} from './../../../../types/index';

export class CompanyFactory implements ICompanyFactory {
  public createFactory(type: ECompany): IDeviceFactory {
    switch (type) {
      case ECompany.MSI:
        return new MSIFactory();

      case ECompany.Gigabyte:
        return new GigabyteFactory();
    }
  }
}
