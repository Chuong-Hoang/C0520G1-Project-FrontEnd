import {Component, OnInit} from '@angular/core';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-meeting-room-detail',
  templateUrl: './meeting-room-detail.component.html',
  styleUrls: ['./meeting-room-detail.component.css']
})
export class MeetingRoomDetailComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _meetRoomService: MeetingRoomService;
  // tslint:disable-next-line:variable-name
  private _router: Router;
  // tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  private _idMeetingRoom: number;
  // tslint:disable-next-line:variable-name
  public meetingRoom;

  constructor(public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(data => {
        console.log(data);
        this._idMeetingRoom = data.idRoom;
        // tslint:disable-next-line:no-shadowed-variable
        this._meetRoomService.getMeetingRoomById(this._idMeetingRoom).subscribe(data => {
          console.log(data);
          this.meetingRoom = data;
        });
      }
    );
  }
}
