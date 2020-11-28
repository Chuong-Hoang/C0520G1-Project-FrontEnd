import {Component, OnInit} from '@angular/core';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MeetingRoom} from '../../model/MeetingRoom';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-meeting-room-detail',
  templateUrl: './meeting-room-detail.component.html',
  styleUrls: ['./meeting-room-detail.component.css']
})
export class MeetingRoomDetailComponent implements OnInit {
  private idMeetingRoom: number;
  public meetingRoom: MeetingRoom;

  constructor(public activeRouter: ActivatedRoute, private meetRoomService: MeetingRoomService,
              private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Meeting Room');
    this.activeRouter.params.subscribe(data => {
        console.log(data.id);
        this.idMeetingRoom = data.id;
        this.meetRoomService.getMeetingRoomById(this.idMeetingRoom).subscribe(next => {
          this.meetingRoom = next;
          next.image = next.image.substring(11);
        }, error => console.log('error'));
      }
    );
  }
}
