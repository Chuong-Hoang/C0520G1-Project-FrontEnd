export class SearchedMeetingRoom {
  // tslint:disable-next-line:variable-name
  private _idRoom: string;
  // tslint:disable-next-line:variable-name
  private _roomName: string;
  // tslint:disable-next-line:variable-name
  private _floor: string;
  // tslint:disable-next-line:variable-name
  private _zone: string;
  // tslint:disable-next-line:variable-name
  private _capacity: string;
  // tslint:disable-next-line:variable-name
  private _roomTypeName: string;
  // tslint:disable-next-line:variable-name
  private _roomStatusName: string;
  // tslint:disable-next-line:variable-name
  private _roomAsset: string;
  // tslint:disable-next-line:variable-name
  private _startDate: string;
  // tslint:disable-next-line:variable-name
  private _endDate: string;
  // tslint:disable-next-line:variable-name
  private _startTime: string;
  // tslint:disable-next-line:variable-name
  private _endTime: string;


  // tslint:disable-next-line:max-line-length
  constructor(idRoom: string, roomName: string, floor: string, zone: string, capacity: string,
              roomTypeName: string, roomStatusName: string, roomAsset: string,
              startDate: string, endDate: string, startTime: string, endTime: string) {
    this._idRoom = idRoom;
    this._roomName = roomName;
    this._floor = floor;
    this._zone = zone;
    this._capacity = capacity;
    this._roomTypeName = roomTypeName;
    this._roomStatusName = roomStatusName;
    this._roomAsset = roomAsset;
    this._startDate = startDate;
    this._endDate = endDate;
    this._startTime = startTime;
    this._endTime = endTime;
  }

  get idRoom(): string {
    return this._idRoom;
  }

  set idRoom(value: string) {
    this._idRoom = value;
  }

  get roomName(): string {
    return this._roomName;
  }

  set roomName(value: string) {
    this._roomName = value;
  }

  get floor(): string {
    return this._floor;
  }

  set floor(value: string) {
    this._floor = value;
  }

  get zone(): string {
    return this._zone;
  }

  set zone(value: string) {
    this._zone = value;
  }

  get capacity(): string {
    return this._capacity;
  }

  set capacity(value: string) {
    this._capacity = value;
  }

  get roomTypeName(): string {
    return this._roomTypeName;
  }

  set roomTypeName(value: string) {
    this._roomTypeName = value;
  }

  get roomStatusName(): string {
    return this._roomStatusName;
  }

  set roomStatusName(value: string) {
    this._roomStatusName = value;
  }

  get roomAsset(): string {
    return this._roomAsset;
  }

  set roomAsset(value: string) {
    this._roomAsset = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get startTime(): string {
    return this._startTime;
  }

  set startTime(value: string) {
    this._startTime = value;
  }

  get endTime(): string {
    return this._endTime;
  }

  set endTime(value: string) {
    this._endTime = value;
  }
}
