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
  public maxDate = new Date();
  public minDate = new Date(1920, 0, 1);
  public meetingRoomList: any;

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
    this.bookedRoomService.getMeetingRoomList().subscribe(data => {
      this.meetingRoomList = data;
      console.log(data);
    });
  }
  onSubmit(): void {
    this.bookedRoomService.createNewBookedRoom(this.formCreate.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/booked-room-list'], {queryParams: {booking_message: 'Create successfully!'}});
      // this.router.navigateByUrl('booked-room-list');
    });
  }
}
