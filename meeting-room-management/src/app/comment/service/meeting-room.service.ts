import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public API = 'http://localhost:8080/meeting-room';

  constructor(public http: HttpClient) {
  }

  getAllMeetingRoom(): Observable<any> {
    return this.http.get(this.API);
  }
}
