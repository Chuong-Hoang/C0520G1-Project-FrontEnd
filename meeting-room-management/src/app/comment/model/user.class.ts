export class User {
  // tslint:disable-next-line:variable-name
  private _fullName: string;
  // tslint:disable-next-line:typedef
  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    this._fullName = value;
  }
}
