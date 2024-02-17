import { CompanyFactory } from './creational/abs-factory/CompanyFactory';
import {
  ECompany,
  EGigabyteMonitors,
  EGigabyteMotherboard,
  EMSIMonitors,
  EMSIMotherboard,
  EMenu,
  IMonitor,
  IMotherboard,
} from '../../types';
import Order from './creational/factory/Order';
import OrderFactory from './creational/factory/OrderFactory';
import HotelKey from './creational/singleton/HotelKey';
import { ComputerShop } from './creational/builder/ComputerShop';
import { ComputerBuilder } from './creational/builder/ComputerBuilder';

import { PCConfiguration } from '../../constants/index';

// singleton
export const SingletonExamp = () => {
  console.log('-------- start singleton --------');

  const k1 = HotelKey.getInstance('Roman');
  k1.openHotel();
  k1.closeHotel();

  console.log('-- Created new instance and give owner name Sasha ');
  const k2 = HotelKey.getInstance('Sasha');
  k2.openHotel();
  k2.closeHotel();

  k1 === k2
    ? console.log('Singleton works, both variables contain the same instance.')
    : console.log('Singleton failed, variables contain different instances.');

  console.log('--------- end singleton ---------');
};

// factory
export const FactoryExm = () => {
  console.log('-------- start factory --------');
  const orderFact = new OrderFactory();

  const break1 = orderFact.makeOrder(EMenu.Breakfast, 1);
  const dinner1 = orderFact.makeOrder(EMenu.Dinner, 2);
  const lunch1 = orderFact.makeOrder(EMenu.Lunch, 3);
  const drinks1 = orderFact.makeOrder(EMenu.Drinks, 3);
  const break4 = orderFact.makeOrder(EMenu.Breakfast, 4);

  const list: Order[] = [];

  list.push(break1, dinner1, lunch1, drinks1, break4);

  list.forEach((order, i) => {
    console.log(`======== order ${i + 1} =======`);
    order.getType();
    order.getName();
    console.log(`========================`);
  });
  console.log('--------- end factory ---------');
};

// abs-factory
export const AbsFactoryExm = () => {
  console.log('-------- start abs-factory --------');
  const compFactory = new CompanyFactory();

  const msiFactory = compFactory.createFactory(ECompany.MSI);
  const gigabyteFactory = compFactory.createFactory(ECompany.Gigabyte);

  const mon1 = msiFactory.createMonitor(EMSIMonitors.MAG271QPXDE);
  const mon2 = msiFactory.createMonitor(EMSIMonitors.MAG321UPXDE);
  const mon3 = gigabyteFactory.createMonitor(EGigabyteMonitors.G34WQC);
  const mon4 = gigabyteFactory.createMonitor(EGigabyteMonitors.S55U);

  const moth1 = msiFactory.createMotherboard(EMSIMotherboard.MEGZ690GODLIKE);
  const moth2 = msiFactory.createMotherboard(EMSIMotherboard.MEGZ790GODLIKEMAX);
  const moth3 = gigabyteFactory.createMotherboard(
    EGigabyteMotherboard.B650MS2H
  );
  const moth4 = gigabyteFactory.createMotherboard(
    EGigabyteMotherboard.H610MD3HDDR4
  );

  const listMon: IMonitor[] = [];
  const listMoth: IMotherboard[] = [];

  listMon.push(mon1, mon2, mon3, mon4);
  listMoth.push(moth1, moth2, moth3, moth4);

  console.log('===== monitors =====');
  listMon.forEach((mon, i) => {
    console.log(`=== ${i + 1} ===`);
    mon.getStats();
  });

  console.log('===== motherboards =====');
  listMoth.forEach((moth, i) => {
    console.log(`=== ${i + 1} ===`);
    moth.getStats();
  });

  console.log('--------- end abs-factory ---------');
};

// builder
export const BuilderExm = () => {
  console.log('-------- start builder --------');
  const compBuilder = new ComputerBuilder();
  const shop = new ComputerShop();

  shop.buildComputer(PCConfiguration[0], compBuilder);

  const comp1 = compBuilder.getComputer();

  comp1.showStats();
  console.log('--------- end builder ---------');
};
