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

  constructor(private http: HttpClient) { }

  getAllBookedRooms(): Observable<any>{
    return this.http.get(this.API_BookedRoom);
  }
  createNewBookedRoom(ele): Observable<any>{
    return this.http.post(this.API_BookedRoom, ele);
  }

  getBookedRoomById(id): Observable<any>{
    return this.http.get(this.API_BookedRoom + '/' + id);
  }

  deleteBookedRoomById(id): Observable<any>{
    return this.http.delete(this.API_BookedRoom + '/' + id);
  }

  // get TimeFrame List
  getAllTimeFrame(): Observable<any>{
    return this.http.get(this.API_TimeFrame);
  }

  // get MeetingRoom List
  getMeetingRoomList(): Observable<any>{
    return this.http.get(this.API_MeetingRoom);
  }
}
