export class BookedRoom {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _bookedDate: string;
  // tslint:disable-next-line:variable-name
  private _startDate: string;
  // tslint:disable-next-line:variable-name
  private _endDate: string;
  // tslint:disable-next-line:variable-name
  private _startTime: string;
  // tslint:disable-next-line:variable-name
  private _endTime: string;
  // tslint:disable-next-line:variable-name
  private _content: string;
  // tslint:disable-next-line:variable-name
  private _bookingUser: string;
  // tslint:disable-next-line:variable-name
  private _meetingRoom: string;
  // tslint:disable-next-line:variable-name
  private _bookingStatus: string;

  // tslint:disable-next-line:max-line-length
  constructor(
    id: number, bookedDate: string, startDate: string, endDate: string, bookingStatus: string,
    startTime: string, endTime: string, content: string, bookingUser: string, meetingRoom: string) {
    this._id = id;
    this._bookedDate = bookedDate;
    this._bookingStatus = bookingStatus;
    this._startDate = startDate;
    this._endDate = endDate;
    this._startTime = startTime;
    this._endTime = endTime;
    this._content = content;
    this._bookingUser = bookingUser;
    this._meetingRoom = meetingRoom;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get bookedDate(): string {
    return this._bookedDate;
  }

  set bookedDate(value: string) {
    this._bookedDate = value;
  }

  get bookingStatus(): string {
    return this._bookingStatus;
  }

  set bookingStatus(value: string) {
    this._bookingStatus = value;
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

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get bookingUser(): string {
    return this._bookingUser;
  }

  set bookingUser(value: string) {
    this._bookingUser = value;
  }

  get meetingRoom(): string {
    return this._meetingRoom;
  }

  set meetingRoom(value: string) {
    this._meetingRoom = value;
  }
}
