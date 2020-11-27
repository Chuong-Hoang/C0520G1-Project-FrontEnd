import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookedRoomService} from '../../service/booked-room.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {BookedRoom} from '../../model/booked-room';
import {SearchedMeetingRoom} from '../../model/searched-meeting-room';

export function diffDate(c: AbstractControl): any {
  const c1 = c.value;
  const sDate = Date.parse(c1.startDate);
  const eDate = Date.parse(c1.endDate);
  return (eDate >= sDate) ? null : {datesNotMatch: true};
}
export function diffTime(c: AbstractControl): any {
  const c1 = c.value;
  const sTime = c1.startTime;
  const eTime = c1.endTime;
  return (eTime > sTime) ? null : {timesNotMatch: true};
}

@Component({
  selector: 'app-booked-room-search',
  templateUrl: './booked-room-search.component.html',
  styleUrls: ['./booked-room-search.component.css']
})

export class BookedRoomSearchComponent implements OnInit, OnDestroy {
  public meetingRoomList = [];
  public roomTypeList = [];
  public timeFrameList = [];
  public assetList = [];
  public pipe: DatePipe;
  public searchBookedRoom: SearchedMeetingRoom;
  public p: number;
  public minDate = new Date();
  public maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, this.minDate.getDate());
  // get data input for search if results found <Chương comment>
  public startDateSearch = null;
  public endDateSearch = null;
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
  disableSelect = true;

  constructor(
    private bookedRoomService: BookedRoomService,
    private formBuilder: FormBuilder,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Booked Room');
    this.meetingRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.pipe = new DatePipe('en-US');
    this.p = 0;
    this.formMeetingRoomSearched = this.formBuilder.group({
      zone: '',
      roomTypeName: '',
      dateGroup: this.formBuilder.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }, {validators: diffDate}),
      timeGroup: this.formBuilder.group({
        startTime: ['', [Validators.required]],
        endTime: ['', [Validators.required]]
      }, {validators: diffTime}),
      capacity: ['', [Validators.required, Validators.pattern('^(([1-4][0-9])|[2-9]|(50))$')]],
      roomAsset: this.formBuilder.array([]),
    });
    console.log('Init meeting room:');
    console.log(this.formMeetingRoomSearched.value);

    // this.bookedRoomService.getAllMeetingRooms().subscribe(data => {
    //   this.meetingRoomList = data;
    //   this.size_msg = this.meetingRoomList.length + '';
    //   console.log('meetingRooms ==>: ');
    //   console.log(data);
    // });
    this.bookedRoomService.getAllRoomTypes().subscribe(data => {
      this.roomTypeList = data;
      // console.log('roomTypes: ' + data);
    });
    this.bookedRoomService.getAllTimeFrames().subscribe(data => {
      this.timeFrameList = data;
      // console.log('timeFrames: ' + data);
    });
    this.bookedRoomService.getAllAssets().subscribe(data => {
      this.assetList = data;
      console.log('assetList: ' + data);
    });
  }

  findMeetingRooms(): void {
    console.log('Input form -->meeting room:');
    console.log(this.formMeetingRoomSearched.value);
    this.meetingRoomList = [];
    this.size_msg = 'Rất tiếc, không tìm thấy kết quả nào!';
    this.p = 0;
    console.log('assets in the room: ');
    console.log(this.formMeetingRoomSearched.value.roomAsset);
    this.searchBookedRoom = Object.assign({}, this.formMeetingRoomSearched.value);
    this.searchBookedRoom.startDate = this.pipe.transform(this.formMeetingRoomSearched.value.dateGroup.startDate, 'dd-MM-yyyy');
    this.searchBookedRoom.endDate = this.pipe.transform(this.formMeetingRoomSearched.value.dateGroup.endDate, 'dd-MM-yyyy');
    this.searchBookedRoom.startTime = this.formMeetingRoomSearched.value.timeGroup.startTime;
    this.searchBookedRoom.endTime = this.formMeetingRoomSearched.value.timeGroup.endTime;
    this.searchBookedRoom.roomAsset = this.formMeetingRoomSearched.value.roomAsset.join('-');
    console.log('Search Input object:');
    console.log(this.searchBookedRoom);
    console.log(this.searchBookedRoom.startDate);
    console.log(this.searchBookedRoom.endDate);
    this.bookedRoomService.searchMeetingRooms(this.searchBookedRoom).subscribe(data => {
      this.meetingRoomList = data;
      if (data != null) {
        console.log('meetingRoomList:');
        console.log(data);
        this.size_msg = this.meetingRoomList.length + '';
        this.startDateSearch = this.searchBookedRoom.startDate;
        this.endDateSearch = this.searchBookedRoom.endDate;
        this.startTimeSearch = this.searchBookedRoom.startTime;
        this.endTimeSearch = this.searchBookedRoom.endTime;
      }
      this.router.navigate(['/search-available-room']);
    });
  }

  ngOnDestroy(): void {
    this.router.navigate(['/book-room'], {
      queryParams:
        {
          startDateSearch: this.startDateSearch,
          endDateSearch: this.endDateSearch,
          startTimeSearch: this.startTimeSearch,
          endTimeSearch: this.endTimeSearch,
          idSentFromSearch: this.idSent
        }
    });
  }

  sendId(idSent: number): void {
    this.idSent = idSent;
  }

  onChange(asset: any, isChecked: boolean): void {
    const assetFormArray = this.formMeetingRoomSearched.controls.roomAsset as FormArray;
    if (isChecked) {
      assetFormArray.push(new FormControl(asset));
    } else {
      // tslint:disable-next-line:triple-equals
      const index = assetFormArray.controls.findIndex(x => x.value == asset);
      assetFormArray.removeAt(index);
    }
    console.log('asset--> on change:');
    console.log(this.formMeetingRoomSearched.controls.roomAsset);
  }
}
