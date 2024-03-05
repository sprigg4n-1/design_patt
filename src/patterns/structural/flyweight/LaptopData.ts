export class LaptopData {
  private _brand: string;

  private _model: string;

  constructor(b: string, m: string) {
    this.brand = b;
    this.model = m;
  }

  getKey(): string {
    return this._brand + this._model;
  }

  equal(an: LaptopData): boolean {
    return an._brand === this._brand && an._model === this._model;
  }

  public get brand(): string {
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }
  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    this._model = value;
  }
}
