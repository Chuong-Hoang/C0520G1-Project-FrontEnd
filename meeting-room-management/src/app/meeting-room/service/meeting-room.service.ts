import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public API_MEETING_ROOM = 'http://localhost:8080/meeting-room';
  public API_ROOM_TYPE = 'http://localhost:8080/room-type';
  public API_ROOM_STATUS = 'http://localhost:8080/room-status';

  constructor(
    public http: HttpClient
  ) { }

  addNewMeetingRoom(meetingRoom): Observable<any> {
    return this.http.post(this.API_MEETING_ROOM, meetingRoom);
  }

  getMeetingRoomById(meetingRoomId): Observable<any> {
    return this.http.get(this.API_MEETING_ROOM + '/' + meetingRoomId);
  }

  editMeetingRoom(meetingRoom, meetingRoomId): Observable<any> {
    return this.http.put(this.API_MEETING_ROOM + '/' + meetingRoomId, meetingRoom);
  }

  getAllMeetingRoom(): Observable<any> {
    return this.http.get(this.API_MEETING_ROOM);
  }

  // tslint:disable-next-line:typedef
  deleteMeetingRoomById(meetingRoomId) {
    return this.http.delete(this.API_MEETING_ROOM + '/' + meetingRoomId);
  }

  getAllRoomType(): Observable<any> {
    return this.http.get(this.API_ROOM_TYPE);
  }

  getAllRoomStatus(): Observable<any> {
      return this.http.get(this.API_ROOM_STATUS);
  }

}