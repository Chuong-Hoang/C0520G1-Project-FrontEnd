import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookedRoomService} from '../../service/booked-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {BookedRoomCancelComponent} from '../booked-room-cancel/booked-room-cancel.component';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {DatePipe} from '@angular/common';
import {BookedRoom} from '../../model/booked-room';

@Component({
  selector: 'app-booked-room-create',
  templateUrl: './booked-room-create.component.html',
  styleUrls: ['./booked-room-create.component.css']
})
export class BookedRoomCreateComponent implements OnInit {
  public formCreate: FormGroup;
  public minDate = new Date();
  public bookedDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
  public maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, this.minDate.getDate());
  public meetingRoomList = [];
  public timeFrameList = [];
  public bookedRoomList = [];
  public bookedStatus = 'Đang sử dụng';
  public bookedUserId = 1;
  public roomName = '';
  public meetingRoomId: any;
  public pipe: DatePipe;
  public inputBookedRoom: BookedRoom;

  // get data transfer from search input fields when having available results <Chương comment>
  public startDateSearch = '';
  public endDateSearch = '';
  public startTimeSearch = '';
  public endTimeSearch = '';
  public idSentFromSearch = '';

  // tslint:disable-next-line:variable-name
  content_msg = 'Vui lòng nhập nội dung cuộc họp';
  // tslint:disable-next-line:variable-name
  endDate_msg = 'Vui lòng nhập ngày hợp lệ';
  // tslint:disable-next-line:variable-name
  startDate_msg = 'Vui lòng nhập ngày hợp lệ';
  // tslint:disable-next-line:variable-name
  meetingRoomId_msg = 'Vui lòng chọn phòng hợp lệ';
  // tslint:disable-next-line:variable-name
  startTimeId_msg = 'Vui lòng nhập giờ hợp lệ';
  // tslint:disable-next-line:variable-name
  endTimeId_msg = 'Vui lòng nhập giờ hợp lệ';

  constructor(
    private formBuilder: FormBuilder,
    private bookedRoomService: BookedRoomService,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.pipe = new DatePipe('en-US');
    this.startDateSearch = this.activatedRoute.snapshot.queryParamMap.get('startDateSearch');
    console.log('init***start-date-input from search: ' + this.pipe.transform(this.startDateSearch, 'yyyy-MM-dd'));
    this.endDateSearch = this.activatedRoute.snapshot.queryParamMap.get('endDateSearch');
    console.log('init***end-date-input from search: ' + this.pipe.transform(this.endDateSearch, 'yyyy-MM-dd'));
    this.startTimeSearch = this.activatedRoute.snapshot.queryParamMap.get('startTimeSearch');
    console.log('init***start time input from search: ' + this.startTimeSearch);
    this.endTimeSearch = this.activatedRoute.snapshot.queryParamMap.get('endTimeSearch');
    console.log('init***end time input from search: ' + this.endTimeSearch);
    this.idSentFromSearch = this.activatedRoute.snapshot.queryParamMap.get('idSentFromSearch');
    console.log('init***id meetingRoom input from search: ' + this.idSentFromSearch);
    console.log('init***booked-date-input from search: ' + this.pipe.transform(this.bookedDate, 'yyyy-MM-dd'));

    // get userId from loggin form
    this.bookedUserId = this.tokenStorageService.getUser().id;

    this.formCreate = this.formBuilder.group({
      id: '',
      bookedUserId: this.bookedUserId,
      bookedStatus: this.bookedStatus,
      meetingRoomId: ['', Validators.required],
      bookedDate: [this.pipe.transform(this.bookedDate, 'yyyy-MM-dd'), Validators.required],
      startDate: [this.pipe.transform(this.startDateSearch, 'yyyy-MM-dd'), Validators.required],
      endDate: [this.pipe.transform(this.endDateSearch, 'yyyy-MM-dd'), Validators.required],
      startTimeId: [this.startTimeSearch, Validators.required],
      endTimeId: [this.endTimeSearch, Validators.required],
      content: ['', Validators.required]
    });
    if (this.idSentFromSearch !== null){
       this.bookedRoomService.getMeetingRoomById(this.idSentFromSearch).subscribe(data => {
          this.roomName = data.roomName;
       });
    }

    this.formCreate.patchValue({
          meetingRoomId: this.idSentFromSearch
          // startDate: this.startDateSearch,
          // endDate: this.endDateSearch,
          // startTimeId: this.startTimeSearch,
          // endTimeId: this.endTimeSearch,
    });
    this.bookedRoomService.getAllMeetingRooms().subscribe(data => {
      this.meetingRoomList = data;
      // console.log('meeting-rooms: ' + data);
    });

    this.bookedRoomService.getAllTimeFrames().subscribe(data => {
      this.timeFrameList = data;
      // console.log('time-frames: ' + data.toString());
    });
  }

  onSubmit(): void {
    console.log('formCreate: ');
    console.log(this.formCreate.value);
    this.inputBookedRoom = Object.assign({}, this.formCreate.value);
    console.log('input-booked-room: ');
    console.log(this.inputBookedRoom);
    this.bookedRoomService.createNewBookedRoom(this.inputBookedRoom).subscribe(data => {
      this.router.navigate(['/booked-room-list'], {queryParams: {booking_message: 'Đăng ký phòng họp thành công!'}});
      }, error => console.log('error happened...'));
  }

  openCancelDialog(meetingRoomId: any): void {
    console.log('Id đăng ký: ' + this.formCreate.value.meetingRoomId);
    this.bookedRoomService.getMeetingRoomById(this.formCreate.value.meetingRoomId).subscribe(dataFromServer => {
    const dialogRef = this.dialog.open(BookedRoomCancelComponent, {
        width: '500px',
        disableClose: true,
        data: {data1: dataFromServer}
      });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.ngOnInit();
      });
    });
  }
}
