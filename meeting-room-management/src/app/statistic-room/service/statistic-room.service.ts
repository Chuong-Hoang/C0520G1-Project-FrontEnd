import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookedRoom} from '../model/BookedRoom.class';

@Injectable({
  providedIn: 'root'
})

export class StatisticRoomService {
  public API = 'http://localhost:8080/statistic';

  public message: string;
  constructor(private http: HttpClient) {}
  getAllBookedRoom(): Observable<any>{
    return this.http.get<BookedRoom>(this.API);
  }

  findSearchByRoom(roomType: string, roomName: string, year: string, month: string): Observable<BookedRoom> {
    let params = new HttpParams();
    params = params.append('roomType', roomType);
    params = params.append('roomName', roomName);
    params = params.append('year', year);
    params = params.append('month', month);

    // look for es6 object literal to read more;
    return this.http.get<BookedRoom>(`${this.API}/searchByRoom`, {params});
  }

  findSearchByTime(startDate: string, endDate: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('startDate', startDate);
    params = params.append('endDate', endDate);
    // look for es6 object literal to read more;
    return this.http.get<BookedRoom>(`${this.API}/searchByTime`, { params });
  }
}
