import {RoomType} from './RoomType.class';
import {RoomStatus} from './RoomStatus.class';
import {BookedRoom} from '../../booked-room/model/BookedRoom.class';
import {AssetDetail} from '../../assets-detail/model/AssetDetail.class';

export class MeetingRoom {
  // tslint:disable-next-line:variable-name
  private _idRoom: number;
  // tslint:disable-next-line:variable-name
  private _roomName: string;
  // tslint:disable-next-line:variable-name
  private _floor: string;
  // tslint:disable-next-line:variable-name
  private _zone: string;
  // tslint:disable-next-line:variable-name
  private _capacity: string;
  // tslint:disable-next-line:variable-name
  private _image: string;
  // tslint:disable-next-line:variable-name
  private _startDate: string;
  // tslint:disable-next-line:variable-name
  private _endDate: string;
  // tslint:disable-next-line:variable-name
  private _roomType: RoomType;
  // tslint:disable-next-line:variable-name
  private _roomStatus: RoomStatus;

  // tslint:disable-next-line:max-line-length
  constructor(idRoom: number, roomName: string, floor: string, zone: string, capacity: string, image: string, startDate: string, endDate: string, roomType: RoomType, roomStatus: RoomStatus) {
    this._idRoom = idRoom;
    this._roomName = roomName;
    this._floor = floor;
    this._zone = zone;
    this._capacity = capacity;
    this._image = image;
    this._startDate = startDate;
    this._endDate = endDate;
    this._roomType = roomType;
    this._roomStatus = roomStatus;
  }

  get idRoom(): number {
    return this._idRoom;
  }

  set idRoom(value: number) {
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

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
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

  get roomType(): RoomType {
    return this._roomType;
  }

  set roomType(value: RoomType) {
    this._roomType = value;
  }

  get roomStatus(): RoomStatus {
    return this._roomStatus;
  }

  set roomStatus(value: RoomStatus) {
    this._roomStatus = value;
  }
}
