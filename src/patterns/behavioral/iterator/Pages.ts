import { IPageItem, Iterator } from '../../../../types';
import { PagesIterator } from './PagesIterator';

export class Pages {
  private data: IPageItem[];

  constructor(data: IPageItem[]) {
    this.data = data;
  }

  createIterator(): Iterator<IPageItem> {
    return new PagesIterator(this);
  }

  size(): number {
    return this.data.length;
  }

  get(index: number): IPageItem {
    return this.data[index];
  }
}
