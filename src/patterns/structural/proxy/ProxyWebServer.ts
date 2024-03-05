import { IWebPage } from '../../../../types';
import { WebServer } from './WebServer';

export class ProxyWebServer implements IWebPage {
  private realWebServer: WebServer;

  private cashe: object;

  public constructor() {
    this.realWebServer = new WebServer();
    this.cashe = {};
  }

  getPage(url: string): string {
    if (this.cashe.hasOwnProperty(url)) {
      console.log(`Request to cashe url: ${url}`);
      return this.cashe[url];
    } else {
      const pc = this.realWebServer.getPage(url);
      this.cashe[url] = pc;
      console.log(`Request to web-server url ${url}`);
      return pc;
    }
  }
}
