import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookedRoomService {
  // tslint:disable-next-line:variable-name
  public API_BookedRoom = 'http://localhost:8080/booked-room';
  // tslint:disable-next-line:variable-name
  public API_TimeFrame = 'http://localhost:8080/time-frame';
  // tslint:disable-next-line:variable-name
  public API_MeetingRoom = 'http://localhost:8080/meeting-room';
  // tslint:disable-next-line:variable-name
  public API_RoomType = 'http://localhost:8080/room-type';

  constructor(private http: HttpClient) { }

  getAllBookedRooms(): Observable<any>{
    return this.http.get(this.API_BookedRoom);
  }
  createNewBookedRoom(ele): Observable<any>{
    return this.http.post(this.API_BookedRoom, ele);
  }

  searchBookedRooms(ele): Observable<any>{
    return this.http.post(this.API_BookedRoom + '/search', ele);
  }

  getBookedRoomById(id): Observable<any>{
    return this.http.get(this.API_BookedRoom + '/' + id);
  }

  getMeetingRoomById(id): Observable<any>{
    console.log('You are at finding-a-room-function');
    return this.http.get(this.API_MeetingRoom + '/' + id);
  }

  // search meeting rooms
  searchMeetingRooms(ele): Observable<any>{
    return this.http.post(this.API_MeetingRoom + '-find', ele);
  }

  deleteBookedRoomById(id): Observable<any>{
    return this.http.delete(this.API_BookedRoom + '/' + id);
  }

  // get TimeFrame List
  getAllTimeFrames(): Observable<any>{
    return this.http.get(this.API_TimeFrame);
  }

  // get MeetingRoom List
  getAllMeetingRooms(): Observable<any>{
    return this.http.get(this.API_MeetingRoom + '-list');
  }

  // get RoomType List
  getAllRoomTypes(): Observable<any>{
    return this.http.get(this.API_RoomType);
  }
}
