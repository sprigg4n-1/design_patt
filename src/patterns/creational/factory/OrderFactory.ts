import { Drinks } from './Drinks';
import { Lunch } from './Lunch';
import { Dinner } from './Dinner';
import { Breakfast } from './Breakfast';
import { EMenu } from '../../../../types';
import Order from './Order';

export default class OrderFactory {
  public makeOrder(type: EMenu, nummer: number): Order {
    switch (type) {
      case EMenu.Breakfast: {
        return new Breakfast(nummer, 'Breakfast');
      }
      case EMenu.Dinner: {
        return new Dinner(nummer, 'Dinner');
      }
      case EMenu.Lunch: {
        return new Lunch(nummer, 'Lunch');
      }
      case EMenu.Drinks: {
        return new Drinks(nummer, 'Drinks');
      }
    }
  }
}
