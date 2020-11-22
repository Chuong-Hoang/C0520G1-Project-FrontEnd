export class TimeFrame {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _timeValue: string;

  constructor(id, timeValue) {
    this._id = id;
    this._timeValue = timeValue;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get timeValue(): string {
    return this._timeValue;
  }

  set timeValue(value: string) {
    this._timeValue = value;
  }
}
