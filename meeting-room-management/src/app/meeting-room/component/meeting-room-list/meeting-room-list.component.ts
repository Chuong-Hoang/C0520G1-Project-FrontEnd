import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {MeetingRoomDeleteComponent} from '../meeting-room-delete/meeting-room-delete.component';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styleUrls: ['./meeting-room-list.component.css']
})
export class MeetingRoomListComponent implements OnInit {
  public meetingRoomList;

  constructor(
    public meetingRoomService: MeetingRoomService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomList = data;
    });
  }

  delete(): void {
    // this.meetingRoomService.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(MeetingRoomDeleteComponent, {
        width: '500px',
        // data: {dataEl: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }
    // );
  // }
}
