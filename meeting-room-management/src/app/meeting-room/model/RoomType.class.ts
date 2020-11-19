import {MeetingRoom} from './MeetingRoom.class';

export class RoomType {
  // tslint:disable-next-line:variable-name
  private _idRoomType: number;
  // tslint:disable-next-line:variable-name
  private _roomTypeName: string;

  constructor(idRoomType: number, roomTypeName: string) {
    this._idRoomType = idRoomType;
    this._roomTypeName = roomTypeName;
  }


  get idRoomType(): number {
    return this._idRoomType;
  }

  set idRoomType(value: number) {
    this._idRoomType = value;
  }

  get roomTypeName(): string {
    return this._roomTypeName;
  }

  set roomTypeName(value: string) {
    this._roomTypeName = value;
  }
}
