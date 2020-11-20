import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookedRoomService} from '../../service/booked-room.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booked-room-create',
  templateUrl: './booked-room-create.component.html',
  styleUrls: ['./booked-room-create.component.css']
})
export class BookedRoomCreateComponent implements OnInit {
  public formCreate: FormGroup;
  public minDate = new Date();
  public maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, this.minDate.getDate());
  public meetingRoomList = [];
  public timeFrameList = [];
  public bookedRoomList = [];

  constructor(
    private formBuilder: FormBuilder,
    private bookedRoomService: BookedRoomService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      id: '',
      meetingRoom: ['', Validators.required],
      roomType: ['', Validators.required],
      meetingDate: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.bookedRoomService.getAllMeetingRooms().subscribe(data => {
      this.meetingRoomList = data;
      console.log('meeting-rooms: ' + data);
    });

    this.bookedRoomService.getAllTimeFrames().subscribe(data => {
      this.timeFrameList = JSON.parse(data);
      console.log('time-frames: ' + data.toString());
    });
  }

  onSubmit(): void {
    this.bookedRoomService.createNewBookedRoom(this.formCreate.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/booked-room-list'], {queryParams: {booking_message: 'Booking room successfully!'}});
      // this.router.navigateByUrl('booked-room-list');
    });
  }
}
