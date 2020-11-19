import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookedRoom} from "../model/BookedRoom.class";

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

  findSearchByRoom(roomType: string, roomName: string, year: string,month: string): Observable<BookedRoom> {
    return this.http.get<BookedRoom>(`${this.API}/searchByRoom`);
  }
  findSearchByTime(startDate: string, endDate: string): Observable<BookedRoom> {
    const params = {
      param1: startDate,
      param2: endDate
    };
    // look for es6 object literal to read more;
    return this.http.get<BookedRoom>(`${this.API}/searchByTime`,{params})
  }
}
