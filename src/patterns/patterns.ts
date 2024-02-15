import { EMenu } from '../../types';
import Order from './creational/factory/Order';
import OrderFactory from './creational/factory/OrderFactory';
import HotelKey from './creational/singleton/HotelKey';

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

  list.push(break1);
  list.push(dinner1);
  list.push(lunch1);
  list.push(drinks1);
  list.push(break4);

  list.forEach((order, i) => {
    console.log(`======== order ${i + 1} =======`);
    order.getType();
    order.getName();
    console.log(`========================`);
  });
  console.log('--------- end factory ---------');
};
