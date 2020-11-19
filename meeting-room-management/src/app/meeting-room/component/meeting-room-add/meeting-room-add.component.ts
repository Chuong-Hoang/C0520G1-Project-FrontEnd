// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { MeetingRoomService} from '../../service/meeting-room.service';
// @ts-ignore
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
// @ts-ignore
import { Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-meeting-room-add',
  templateUrl: './meeting-room-add.component.html',
  styleUrls: ['./meeting-room-add.component.css']
})
export class MeetingRoomAddComponent implements OnInit {

  public roomType;
  public roomStatus;
  public formAddRoom: FormGroup;
  public minDate = new Date();
  public maxDate = new Date(2030, 1, 1);

  constructor(
    public formBuilder: FormBuilder,
    public meetingRoomService: MeetingRoomService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // this.formAddRoom = this.formBuilder.group({
    //   idRoom: ['', [Validators.required()]]
    //
    // });
  }

}
