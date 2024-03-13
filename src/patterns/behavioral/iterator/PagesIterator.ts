import { IPageItem, Iterator } from '../../../../types';
import { Pages } from './Pages';

export class PagesIterator implements Iterator<IPageItem> {
  private data: Pages;
  private index: number;

  constructor(data: Pages) {
    this.data = data;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.data.size();
  }

  next(): IPageItem {
    if (!this.hasNext()) {
      console.log(`Last page is ${this.data.size()}`);
      return { title: 'Not Found', subtitle: 'not', rate: 0 };
    } else {
      const item = this.data.get(this.index);
      this.index++;
      return item;
    }
  }
}
