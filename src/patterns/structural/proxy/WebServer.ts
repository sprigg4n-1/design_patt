import { IWebPage } from '../../../../types';

export class WebServer implements IWebPage {
  getPage(url: string): string {
    return `Page content: ${url}`;
  }
}
