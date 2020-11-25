import {Asset} from '../../office-asset/model/model.asset';

export class MeetingRoom {
  idRoom: number;
  roomName: string;
  image: string;
  floor: string;
  zone: string;
  roomStatusName: string;
  roomTypeName: string;
  capacity: string;
  asset: Asset;
}
