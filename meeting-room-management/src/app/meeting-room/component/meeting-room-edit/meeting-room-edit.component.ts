import { Component, OnInit } from '@angular/core';
import { MeetingRoomService} from '../../service/meeting-room.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-meeting-room-edit',
  templateUrl: './meeting-room-edit.component.html',
  styleUrls: ['./meeting-room-edit.component.css']
})
export class MeetingRoomEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
