import {Component, OnInit} from '@angular/core';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-meeting-room-detail',
  templateUrl: './meeting-room-detail.component.html',
  styleUrls: ['./meeting-room-detail.component.css']
})
export class MeetingRoomDetailComponent implements OnInit {


  private router: Router;

  private idMeetingRoom: number;
  public meetingRoom;

  constructor(public activeRouter: ActivatedRoute, private meetRoomService: MeetingRoomService) {
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(data => {
        console.log(data.id);
        this.idMeetingRoom = data.id;
        this.meetRoomService.getMeetingRoomById(this.idMeetingRoom).subscribe(next => {
          this.meetingRoom = next;
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
