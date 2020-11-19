import {Asset} from '../../office-asset/model.asset';
import {MeetingRoom} from '../../meeting-room/model/MeetingRoom.class';

export class AssetDetail {
  // tslint:disable-next-line:variable-name
  private _idAssetsDetail: number;
  // tslint:disable-next-line:variable-name
  private _assetQuantity: string;
  // tslint:disable-next-line:variable-name
  private _meetingRoom: MeetingRoom;
  // tslint:disable-next-line:variable-name
  private _asset: Asset;

  constructor(idAssetsDetail: number, assetQuantity: string, meetingRoom: MeetingRoom, asset: Asset) {
    this._idAssetsDetail = idAssetsDetail;
    this._assetQuantity = assetQuantity;
    this._meetingRoom = meetingRoom;
    this._asset = asset;
  }

  get idAssetsDetail(): number {
    return this._idAssetsDetail;
  }

  set idAssetsDetail(value: number) {
    this._idAssetsDetail = value;
  }

  get assetQuantity(): string {
    return this._assetQuantity;
  }

  set assetQuantity(value: string) {
    this._assetQuantity = value;
  }

  get meetingRoom(): MeetingRoom {
    return this._meetingRoom;
  }

  set meetingRoom(value: MeetingRoom) {
    this._meetingRoom = value;
  }

  get asset(): Asset {
    return this._asset;
  }

  set asset(value: Asset) {
    this._asset = value;
  }
}

