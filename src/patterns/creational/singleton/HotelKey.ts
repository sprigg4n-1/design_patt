export default class HotelKey {
  private static _instance: HotelKey;
  private _owner: string;

  private constructor(owner: string) {
    this._owner = owner;
  }

  public static getInstance(owner: string): HotelKey {
    if (!HotelKey._instance) {
      this._instance = new HotelKey(owner);
    }

    return HotelKey._instance;

    // return HotelKey._instance || new HotelKey(owner);
  }

  public openHotel() {
    console.log(`${this._owner} opened hotel`);
  }

  public closeHotel() {
    console.log(`${this._owner} closed hotel`);
  }
}
