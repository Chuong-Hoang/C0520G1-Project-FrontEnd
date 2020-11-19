import {MeetingRoom} from './MeetingRoom.class';

export class RoomStatus {
  // tslint:disable-next-line:variable-name
  private _idRoomStatus: number;
  // tslint:disable-next-line:variable-name
  private _roomStatusName: string;

  constructor(idRoomStatus: number, roomStatusName: string) {
    this._idRoomStatus = idRoomStatus;
    this._roomStatusName = roomStatusName;
  }


  get idRoomStatus(): number {
    return this._idRoomStatus;
  }

  set idRoomStatus(value: number) {
    this._idRoomStatus = value;
  }

  get roomStatusName(): string {
    return this._roomStatusName;
  }

  set roomStatusName(value: string) {
    this._roomStatusName = value;
  }
}
