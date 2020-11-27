import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookedRoomService} from '../../service/booked-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {BookedRoom} from '../../model/booked-room';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-booked-room-list',
  templateUrl: './booked-room-list.component.html',
  styleUrls: ['./booked-room-list.component.css']
})
export class BookedRoomListComponent implements OnInit, OnDestroy {
  public bookedRoomList = [];
  public meetingRoomList = [];
  public roomTypeList = [];
  public isHidden = false;
  // tslint:disable-next-line:variable-name
  public booking_message = '';
  public p: number;
  public pipe: DatePipe;
  public formBookedRoomSearched: FormGroup;
  public select = '0';
  public bookedRoomSearched: BookedRoom;
  // tslint:disable-next-line:variable-name
  public size_msg = '';
  private bookedUserId = 1;

  constructor(
    private bookedRoomService: BookedRoomService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookedRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.pipe = new DatePipe('en-US');
    this.p = 0;
    // this.booking_message = this.activatedRoute.snapshot.queryParamMap.get('booking_message');
    this.booking_message = this.bookedRoomService.BOOKED_MSG;

    // show message and dismiss in 3 seconds
    setTimeout(function(): void {
      this.booking_message = '';
      // this.router.navigate(['booked-room-list']);
    }.bind(this), 3000);

    this.bookedUserId = this.tokenStorageService.getUser().id;
    this.formBookedRoomSearched = this.formBuilder.group({
      id: '',
      meetingRoomName: '',
      bookedUserId: this.bookedUserId,
      roomType: '',
      startDate: '',
      endDate: '',
      bookedDate: '',
      bookedStatus: ''
    });

    this.bookedRoomService.getAllBookedRooms(this.bookedUserId).subscribe(data => {
      this.p = 0;
      this.bookedRoomList = data;
      this.size_msg = this.bookedRoomList.length + '';
      // console.log('bookedRooms: ' + data);
      console.log('init-->size_msg: ' + this.size_msg);
    });
    this.bookedRoomService.getAllMeetingRooms().subscribe(data => {
      this.meetingRoomList = data;
    });
    this.bookedRoomService.getAllRoomTypes().subscribe(data => {
      this.roomTypeList = data;
    });
  }

  // find booked meeting-rooms (booked-rooms)
  findBookedRooms(): void {
    this.p = 0;
    this.bookedRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.bookedRoomSearched = Object.assign({}, this.formBookedRoomSearched.value);
    this.bookedRoomSearched.bookedDate = this.pipe.transform(this.bookedRoomSearched.bookedDate, 'yyyy-MM-dd');
    this.bookedRoomSearched.startDate = this.pipe.transform(this.bookedRoomSearched.startDate, 'yyyy-MM-dd');
    this.bookedRoomSearched.endDate = this.pipe.transform(this.bookedRoomSearched.endDate, 'yyyy-MM-dd');
    console.log('TS -->BookedRoomSearched:');
    console.log(this.bookedRoomSearched);
    this.bookedRoomService.searchBookedRooms(this.bookedRoomSearched).subscribe(data => {
      if (data !== null) {
        this.bookedRoomList = data;
        this.size_msg = this.bookedRoomList.length + '';
        console.log('search-->size_msg: ' + this.size_msg);
      }
      this.router.navigate(['/booked-room-list']);
    });
  }

  ngOnDestroy(): void {
    this.booking_message = '';
  }

  hideMsg(): void {
    this.isHidden = true;
    this.router.navigate(['/booked-room-list']);
    // this.booking_message = ''; // -->another way
  }
}
