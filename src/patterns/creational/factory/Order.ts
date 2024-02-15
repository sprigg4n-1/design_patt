import { EMenu } from './../../../../types/index';

export default abstract class Order {
  public abstract getType();
  public abstract getName();
}
