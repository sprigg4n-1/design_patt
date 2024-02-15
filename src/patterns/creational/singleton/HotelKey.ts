export default class HotelKey {
  private static instance: HotelKey;
  private owner: string;

  private constructor(owner: string) {
    this.owner = owner;
  }

  public static getInstance(owner: string): HotelKey {
    if (!HotelKey.instance) {
      this.instance = new HotelKey(owner);
    }

    return HotelKey.instance;

    // return HotelKey.instance || new HotelKey(owner);
  }

  public openHotel() {
    console.log(`${this.owner} opened hotel`);
  }

  public closeHotel() {
    console.log(`${this.owner} closed hotel`);
  }
}
