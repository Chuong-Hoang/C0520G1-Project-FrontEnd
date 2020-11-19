export class Asset {

  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _assetName: string;
  // tslint:disable-next-line:variable-name
  private _usingQuantity: string;
  // tslint:disable-next-line:variable-name
  private _fixingQuantity: string;
  // tslint:disable-next-line:variable-name
  private _image: string;
  // tslint:disable-next-line:variable-name
  private _total: string;
  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _price: string;


  // tslint:disable-next-line:max-line-length
  constructor(id: number, assetName: string, usingQuantity: string, fixingQuantity: string, image: string, total: string, description: string, price: string) {
    this._id = id;
    this._assetName = assetName;
    this._usingQuantity = usingQuantity;
    this._fixingQuantity = fixingQuantity;
    this._image = image;
    this._total = total;
    this._description = description;
    this._price = price;
  }

  get id(): number {
    return this.id;
  }

  set id(value: number) {
    this._id = value;
  }

  get assetName(): string {
    return this._assetName;
  }

  set assetName(value: string) {
    this._assetName = value;
  }

  get usingQuantity(): string {
    return this._usingQuantity;
  }

  set usingQuantity(value: string) {
    this._usingQuantity = value;
  }

  get fixingQuantity(): string {
    return this._fixingQuantity;
  }

  set fixingQuantity(value: string) {
    this._fixingQuantity = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get total(): string {
    return this._total;
  }

  set total(value: string) {
    this._total = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }
}





