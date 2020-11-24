import {MeetingRoom} from '../../meeting-room/model/MeetingRoom.class';

export class BookedRoom {
  idBookedRoom: number;
  startDate: string;
  endDate: string;
  content: string;
  meetingRoom: MeetingRoom;
}
