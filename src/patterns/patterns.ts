import HotelKey from './creational/singleton/HotelKey';

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
