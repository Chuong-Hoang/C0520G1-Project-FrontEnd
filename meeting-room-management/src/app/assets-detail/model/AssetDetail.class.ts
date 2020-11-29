import {Asset} from '../../office-asset/model/model.asset';
import {MeetingRoom} from '../../meeting-room/model/MeetingRoom';
// import {MeetingRoom} from '../../meeting-room/model/MeetingRoom.class';

export class AssetDetail {
  // tslint:disable-next-line:variable-name
  private _idAsset: number;
  // tslint:disable-next-line:variable-name
  private _assetName: string;
  // tslint:disable-next-line:variable-name
  private _quantity: number;
  // tslint:disable-next-line:variable-name
  private _meetingRoomName: string;


  constructor(idAsset: number, assetName: string, quantity: number, idMeetingRoom: string) {
    this._idAsset = idAsset;
    this._assetName = assetName;
    this._quantity = quantity;
    this._meetingRoomName = idMeetingRoom;
  }

  get idAsset(): number {
    return this._idAsset;
  }

  set idAsset(value: number) {
    this._idAsset = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get meetingRoomName(): string {
    return this._meetingRoomName;
  }

  set meetingRoomName(value: string) {
    this._meetingRoomName = value;
  }


  get assetName(): string {
    return this._assetName;
  }

  set assetName(value: string) {
    this._assetName = value;
  }
}

