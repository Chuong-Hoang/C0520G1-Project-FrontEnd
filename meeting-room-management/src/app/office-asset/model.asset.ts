export class Asset {
  // tslint:disable-next-line:variable-name
  private _id: number;
// tslint:disable-next-line:ban-types variable-name
  private _assetName: String;
  // tslint:disable-next-line:ban-types variable-name
  private _usingQuantity: String;
  // tslint:disable-next-line:ban-types variable-name
  private _fixingQuantity: String;
  // tslint:disable-next-line:ban-types variable-name
  private _image: String;
  // tslint:disable-next-line:ban-types variable-name
  private _total: String;
  // tslint:disable-next-line:ban-types variable-name
  private _description: String;
  // tslint:disable-next-line:ban-types variable-name
  private _price: String;


  // tslint:disable-next-line:ban-types max-line-length
  constructor(id: number, assetName: String, usingQuantity: String, fixingQuantity: String, image: String, total: String, description: String, price: String) {
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
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  // tslint:disable-next-line:ban-types
  get assetName(): String {
    return this._assetName;
  }

  // tslint:disable-next-line:ban-types
  set assetName(value: String) {
    this._assetName = value;
  }

  // tslint:disable-next-line:ban-types
  get usingQuantity(): String {
    return this._usingQuantity;
  }

  // tslint:disable-next-line:ban-types
  set usingQuantity(value: String) {
    this._usingQuantity = value;
  }

  // tslint:disable-next-line:ban-types
  get fixingQuantity(): String {
    return this._fixingQuantity;
  }

  // tslint:disable-next-line:ban-types
  set fixingQuantity(value: String) {
    this._fixingQuantity = value;
  }

  // tslint:disable-next-line:ban-types
  get image(): String {
    return this._image;
  }

  // tslint:disable-next-line:ban-types
  set image(value: String) {
    this._image = value;
  }

  // tslint:disable-next-line:ban-types
  get total(): String {
    return this._total;
  }

  // tslint:disable-next-line:ban-types
  set total(value: String) {
    this._total = value;
  }

  // tslint:disable-next-line:ban-types
  get description(): String {
    return this._description;
  }

  // tslint:disable-next-line:ban-types
  set description(value: String) {
    this._description = value;
  }

  // tslint:disable-next-line:ban-types
  get price(): String {
    return this._price;
  }

  // tslint:disable-next-line:ban-types
  set price(value: String) {
    this._price = value;
  }
}





