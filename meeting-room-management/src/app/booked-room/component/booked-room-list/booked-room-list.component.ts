import { Component, OnInit } from '@angular/core';
import {BookedRoomService} from '../../service/booked-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MeetingRoomService} from '../../../meeting-room/service/meeting-room.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-booked-room-list',
  templateUrl: './booked-room-list.component.html',
  styleUrls: ['./booked-room-list.component.css']
})
export class BookedRoomListComponent implements OnInit {
  public bookedRoomList = [];
  public meetingRoomList = [];
  public roomTypeList = [];
  public isHidden = false;
  // tslint:disable-next-line:variable-name
  public booking_message = '';
  public p: number;
  public formBookedRoomSearched: FormGroup;
  public select = '0';
  // tslint:disable-next-line:variable-name
  public size_msg = '';
  public btnHidden = false;

  constructor(
    private bookedRoomService: BookedRoomService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Booked Room');
    this.bookedRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.p = 0;
    this.booking_message = this.activatedRoute.snapshot.queryParamMap.get('booking_message');
    this.formBookedRoomSearched = this.formBuilder.group({
      id: '',
      roomName: '',
      roomType: '',
      startDate: '',
      endDate: '',
      bookedDate: '',
      bookedStatus: ''
    });

    this.bookedRoomService.getAllBookedRooms().subscribe(data => {
      this.p = 0;
      this.bookedRoomList = data;
      this.size_msg = this.bookedRoomList.length + '';
      console.log('bookedRooms: ' + data);
      console.log('init-->size_msg: ' + this.size_msg);
    });
    this.bookedRoomService.getAllMeetingRooms().subscribe(data => {
      this.meetingRoomList = data;
    });
    this.bookedRoomService.getAllRoomTypes().subscribe(data => {
      this.roomTypeList = data;
      // console.log('roomTypes: ' + data);
    });
  }

  findBookedRooms(): void {
    this.p = 0;
    this.bookedRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.bookedRoomService.searchBookedRooms(this.formBookedRoomSearched.value).subscribe(data => {
      this.bookedRoomList = data;
      this.size_msg = this.bookedRoomList.length + '';
      console.log('search-->size_msg: ' + this.size_msg);
      this.router.navigate(['/booked-room-list']);
    });
  }

  hideMsg(): void {
    this.isHidden = true;
    this.router.navigate(['/booked-room-list']);
    // this.booking_message = ''; // -->another way
  }
}
