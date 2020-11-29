import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookedRoomService {
  public API_BOOKED_ROOM = 'http://localhost:8080/booked-room';
  public API_TIME_FRAME = 'http://localhost:8080/time-frame';
  public API_MEETING_ROOM = 'http://localhost:8080/meeting-room';
  public API_ROOM_TYPE = 'http://localhost:8080/room-type';
  public API_ASSET = 'http://localhost:8080/asset-list';
  public API_BOOKED_ROOM_BY_ID = 'http://localhost:8080/findBookedRoom';
  public BOOKED_MSG = '';
  public roomNameSearched = '';
  public API_BOOKED_ROOM_DELETE = 'http://localhost:8080/edit-booked-room';

  constructor(private http: HttpClient) {
  }

  // get asset List
  getAllAssets(): Observable<any> {
    return this.http.get(this.API_ASSET);
  }

  // get all booked-rooms
  getAllBookedRooms(idUser): Observable<any> {
    return this.http.get(this.API_BOOKED_ROOM + '-list/' + idUser);
  }

  // book new meeting-room
  createNewBookedRoom(ele): Observable<any> {
    console.log('new booked room:');
    console.log(ele);
    console.log(ele.startDate);
    console.log(ele.endDate);
    return this.http.post(this.API_BOOKED_ROOM, ele);
  }

  // find bookedRooms with input fields
  searchBookedRooms(ele): Observable<any> {
    console.log('Service calls search bookedRoom function -->bookedRoomSearch:');
    console.log(ele);
    return this.http.post(this.API_BOOKED_ROOM + '/search', ele);
  }

  // find bookedRoom each by Id
  getBookedRoomById(id): Observable<any> {
    return this.http.get(this.API_BOOKED_ROOM + '/' + id);
  }

  // get MeetingRoom List <--database
  getAllMeetingRooms(): Observable<any> {
    return this.http.get(this.API_MEETING_ROOM);
  }

  // find meetingRoom each by id
  getMeetingRoomById(id): Observable<any> {
    console.log('Id tìm kiếm một meeting-room: ' + id);
    return this.http.get(this.API_MEETING_ROOM + '/' + id);
  }

  // search available meeting rooms
  searchMeetingRooms(ele): Observable<any> {
    console.log('Search Object sent to BE:');
    console.log(ele);
    return this.http.post(this.API_MEETING_ROOM + '-find', ele);
  }

  // delete booked-room (delete booking)
  deleteBookedRoomById(id): Observable<any> {
    return this.http.delete(this.API_BOOKED_ROOM + '/' + id);
  }

  // get TimeFrame List
  getAllTimeFrames(): Observable<any> {
    // console.log('--Looking for time-frames function --')
    return this.http.get(this.API_TIME_FRAME);
  }

  // find TimeFrame each by Id
  getTimeFrameById(id): Observable<any> {
    return this.http.get(this.API_TIME_FRAME + '/' + id);
  }

  // get RoomType List
  getAllRoomTypes(): Observable<any> {
    return this.http.get(this.API_ROOM_TYPE);
  }

  // find booked room by id (Tra <-- functionality)
  getFullBookedRoomById(id): Observable<any> {
    return this.http.get(this.API_BOOKED_ROOM_BY_ID + '/' + id);
  }

  setStatusBookedRoomById(id): Observable<any>{
    return this.http.put(this.API_BOOKED_ROOM_DELETE + '/' + id, null);
  }
}
