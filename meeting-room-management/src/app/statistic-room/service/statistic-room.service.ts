import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookedRoom} from '../model/BookedRoom.class';
import {DatePipe} from '@angular/common';
import {RoomType} from '../model/RoomType.class';


@Injectable({
  providedIn: 'root'
})

export class StatisticRoomService {
  public API = 'http://localhost:2001/statistic';
  // để đưa dữ qua các component
  public bookedRoomByTime: BookedRoom[] = [];
  public bookedRoomByRoom: BookedRoom[] = [];
  public roomTypeList: RoomType[] = [];
  // params search by time
  public startDate: string;
  public endDate: string;
  // params search by room
  public roomType: string;
  public roomName: string;
  public month: string;
  public year: string;

  constructor(private http: HttpClient,
              private datePipe: DatePipe) {
  }

  getAllRoomName(): Observable<any> {
    return this.http.get<any>(`${this.API}/allRoomName`);
  }

  getAllBookedChart(start: string, end: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('start', start);
    params = params.append('end', end);
    return this.http.get<any>(`${this.API}/allDataChart`, {params});
  }

  getAllBookedRoom(): Observable<any> {
    return this.http.get<any>(`${this.API}/all`);
  }

  getAllRoomType(): Observable<any> {
    return this.http.get<any>(`${this.API}/allRoomType`);
  }

  findSearchByRoom(roomType: string, roomName: string, month: string, year: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('roomType', roomType);
    params = params.append('roomName', roomName);
    params = params.append('month', month);
    params = params.append('year', year);
    // look for es6 object literal to read more;
    console.log(roomName);
    return this.http.get<BookedRoom>(`${this.API}/searchByRoom`, {params});
  }

  findSearchByTime(startDate: string, endDate: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('param1', this.datePipe.transform(startDate, 'yyyy-MM-dd'));
    params = params.append('param2', this.datePipe.transform(endDate, 'yyyy-MM-dd'));
    console.log(this.datePipe.transform(startDate, 'yyyy-MM-dd'));
    console.log(endDate);
    // look for es6 object literal to read more;
    return this.http.get<BookedRoom>(`${this.API}/searchByTime`, {params});
  }
}
