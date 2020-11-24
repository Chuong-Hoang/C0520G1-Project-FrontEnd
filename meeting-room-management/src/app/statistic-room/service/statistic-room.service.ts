import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookedRoom} from '../model/booked-room.class';
import {DatePipe} from '@angular/common';
import {RoomType} from '../model/room-type.class';
import {BookedChart} from '../model/booked-chart.class';


@Injectable({
  providedIn: 'root'
})

export class StatisticRoomService {
  public API = 'http://localhost:8080/statistic';
  // để đưa dữ qua các component
  public roomName1 = '';
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

  getAllRoomName(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API}/allRoomName`);
  }

  getAllBookedChart(start: string, end: string): Observable<BookedChart[]> {
    let params = new HttpParams();
    params = params.append('startYear', start);
    params = params.append('endYear', end);
    return this.http.get<BookedChart[]>(`${this.API}/allDataChart`, {params});
  }
  getAllRoomType(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(`${this.API}/allRoomType`);
  }

  findSearchByRoom(roomType: string, roomName: string, month: string, year: string): Observable<BookedRoom[]> {
    let params = new HttpParams();
    params = params.append('roomType', roomType);
    params = params.append('roomName', roomName);
    params = params.append('month', month);
    params = params.append('year', year);
    // look for es6 object literal to read more;
    console.log(roomName);
    return this.http.get<BookedRoom[]>(`${this.API}/searchByRoom`, {params});
  }

  findSearchByTime(startDate: string, endDate: string): Observable<BookedRoom[]> {
    let params = new HttpParams();
    params = params.append('startDate', this.datePipe.transform(startDate, 'yyyy-MM-dd'));
    params = params.append('endDate', this.datePipe.transform(endDate, 'yyyy-MM-dd'));
    console.log(this.datePipe.transform(startDate, 'yyyy-MM-dd'));
    console.log(endDate);
    // look for es6 object literal to read more;
    return this.http.get<BookedRoom[]>(`${this.API}/searchByTime`, {params});
  }
}
