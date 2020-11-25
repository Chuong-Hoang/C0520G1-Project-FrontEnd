import {Component, OnInit} from '@angular/core';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MeetingRoom} from '../../model/MeetingRoom';

@Component({
  selector: 'app-meeting-room-detail',
  templateUrl: './meeting-room-detail.component.html',
  styleUrls: ['./meeting-room-detail.component.css']
})
export class MeetingRoomDetailComponent implements OnInit {

  private router: Router;
  private idMeetingRoom: number;
  public meetingRoom: MeetingRoom;

  constructor(public activeRouter: ActivatedRoute, private meetRoomService: MeetingRoomService) {
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(data => {
        console.log(data.id);
        this.idMeetingRoom = data.id;
        this.meetRoomService.getMeetingRoomById(this.idMeetingRoom).subscribe(next => {
          this.meetingRoom = next;
          this.meetingRoom.image = this.meetingRoom.image.substring(11);
        }, error => console.log('error'));
      }
    );
  }
}
