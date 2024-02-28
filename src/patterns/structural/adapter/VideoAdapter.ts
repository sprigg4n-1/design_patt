import { DisplayPort } from './DisplayPort';
import { HDMI } from './HDMI';

export class VideoAdapter extends DisplayPort {
  private HDMI: HDMI;

  constructor(hdmi: HDMI) {
    super();
    this.HDMI = hdmi;
  }

  public connectDisP() {
    this.HDMI.connectHDMI();
    console.log('Converted to DisplayPort');
  }
}
