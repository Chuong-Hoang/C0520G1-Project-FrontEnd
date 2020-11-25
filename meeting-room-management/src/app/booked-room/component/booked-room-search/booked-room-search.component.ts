import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookedRoomService} from '../../service/booked-room.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booked-room-search',
  templateUrl: './booked-room-search.component.html',
  styleUrls: ['./booked-room-search.component.css']
})
export class BookedRoomSearchComponent implements OnInit, OnDestroy {
  public meetingRoomList = [];
  public roomTypeList = [];
  public timeFrameList = [];
  public p: any;
  public minDate = new Date();
  public maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, this.minDate.getDate());
  // get data input for search if results found <Chương comment>
  public startDateSearch = '';
  public endDateSearch = '';
  public startTimeSearch = '';
  public endTimeSearch = '';
  // tslint:disable-next-line:variable-name
  public booking_message: any;
  public formMeetingRoomSearched: FormGroup;
  // tslint:disable-next-line:variable-name
  public size_msg: string;
  // tslint:disable-next-line:variable-name
  public capacity_msg = 'Số người tham dự phải từ 2 đến 50';
  // tslint:disable-next-line:variable-name
  public startDate_msg = 'Vui lòng nhập ngày hợp lệ';
  // tslint:disable-next-line:variable-name
  public endDate_msg = 'Vui lòng nhập ngày hợp lệ';
  // tslint:disable-next-line:variable-name
  public startTime_msg = 'Vui lòng thời gian hợp lệ';
  // tslint:disable-next-line:variable-name
  public endTime_msg = 'Vui lòng nhập thời gian hợp lệ';
  public idSent: number;

  constructor(
    private bookedRoomService: BookedRoomService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.meetingRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.p = 0;
    this.formMeetingRoomSearched = this.formBuilder.group({
      zone: '',
      roomTypeName: '',
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      capacity: ['', [Validators.required, Validators.pattern('^(([1-4][0-9])|[2-9]|(50))$')]],
    });
    console.log('Init meeting room:');
    console.log(this.formMeetingRoomSearched.value);

    this.bookedRoomService.getAllMeetingRooms().subscribe(data => {
      this.meetingRoomList = data;
      this.size_msg = this.meetingRoomList.length + '';
      console.log('meetingRooms ==>: ');
      console.log(data);
    });
    this.bookedRoomService.getAllRoomTypes().subscribe(data => {
      this.roomTypeList = data;
      // console.log('roomTypes: ' + data);
    });
    this.bookedRoomService.getAllTimeFrames().subscribe(data => {
      this.timeFrameList = data;
      // console.log('timeFrames: ' + data);
    });
  }

  findMeetingRooms(): void {
    console.log('Input -->meeting room:');
    console.log(this.formMeetingRoomSearched.value);
    this.meetingRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.p = 0;
    this.bookedRoomService.searchMeetingRooms(this.formMeetingRoomSearched.value).subscribe(data => {
      this.meetingRoomList = data;
      if (data != null){
        console.log(data);
        this.size_msg = this.meetingRoomList.length + '';
        this.startDateSearch =
          this.formMeetingRoomSearched.value.startDate.getFullYear() + '-' +
          (this.formMeetingRoomSearched.value.startDate.getMonth() + 1) + '-' +
          this.formMeetingRoomSearched.value.startDate.getDate();
        this.endDateSearch =
          this.formMeetingRoomSearched.value.endDate.getFullYear() + '-' +
          (this.formMeetingRoomSearched.value.endDate.getMonth() + 1) + '-' +
          this.formMeetingRoomSearched.value.endDate.getDate();
        this.startTimeSearch = this.formMeetingRoomSearched.value.startTime;
        this.endTimeSearch = this.formMeetingRoomSearched.value.endTime;
      }
      this.router.navigate(['/search-available-room']);
    });
  }
  ngOnDestroy(): void{
    this.router.navigate(['/book-room'], {queryParams:
        {startDateSearch: this.startDateSearch, endDateSearch: this.endDateSearch,
          startTimeSearch: this.startTimeSearch, endTimeSearch: this.endTimeSearch,
          idSentFromSearch: this.idSent
        }
    });
  }

  sendId(idSent: number): void {
    this.idSent = idSent;
  }
}
