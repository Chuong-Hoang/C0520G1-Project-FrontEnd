import {Asset} from '../../office-asset/model/model.asset';

export class MeetingRoom {
  private _idRoom: number;
  private _roomName: string;
  private _image: string;
  private _floor: string;
  private _zone: string;
  private _roomStatusName: string;
  private _roomTypeName: string;
  private _capacity: string;
  private _asset: Asset;

  // tslint:disable-next-line:max-line-length
  constructor(idRoom: number, roomName: string, image: string, floor: string, zone: string, roomStatusName: string, roomTypeName: string, capacity: string, asset: Asset) {
    this._idRoom = idRoom;
    this._roomName = roomName;
    this._image = image;
    this._floor = floor;
    this._zone = zone;
    this._roomStatusName = roomStatusName;
    this._roomTypeName = roomTypeName;
    this._capacity = capacity;
    this._asset = asset;
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

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
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

  get roomStatusName(): string {
    return this._roomStatusName;
  }

  set roomStatusName(value: string) {
    this._roomStatusName = value;
  }

  get roomTypeName(): string {
    return this._roomTypeName;
  }

  set roomTypeName(value: string) {
    this._roomTypeName = value;
  }

  get capacity(): string {
    return this._capacity;
  }

  set capacity(value: string) {
    this._capacity = value;
  }

  get asset(): Asset {
    return this._asset;
  }

  set asset(value: Asset) {
    this._asset = value;
  }
}
