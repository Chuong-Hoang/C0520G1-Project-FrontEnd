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
  private _router: Router;

  // tslint:disable-next-line:variable-name
  private _idMeetingRoom: number;
  public meetingRoom;

  // tslint:disable-next-line:variable-name
  constructor(public activeRouter: ActivatedRoute, private _meetRoomService: MeetingRoomService) {
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(data => {
        console.log(data.id);
        this._idMeetingRoom = data.id;
      // tslint:disable-next-line:no-shadowed-variable
        this._meetRoomService.getMeetingRoomById(this._idMeetingRoom).subscribe(data => {
          console.log(data);
          this.meetingRoom = data;
        }, error => console.log('error'));
      }
    );
  //   const id = this.activeRouter.snapshot.paramMap.get('id');
  //   console.log(id);
  //   this._meetRoomService.getMeetingRoomById(id).subscribe( data => {
  //     console.log(data);
  //     this.meetingRoom = data;
  //   },
  //     error => console.log('error'));
  }
}
