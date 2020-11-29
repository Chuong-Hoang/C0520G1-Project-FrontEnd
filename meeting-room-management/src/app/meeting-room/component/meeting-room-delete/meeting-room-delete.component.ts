import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {Router} from '@angular/router';
import {MeetingRoomMessageComponent} from "../meeting-room-message/meeting-room-message.component";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-meeting-room-delete',
  templateUrl: './meeting-room-delete.component.html',
  styleUrls: ['./meeting-room-delete.component.css']
})
export class MeetingRoomDeleteComponent implements OnInit {

  public roomName: string;
  public idMeetingRoom: number;

  constructor(
    public dialogRef: MatDialogRef<MeetingRoomDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public meetingRoomService: MeetingRoomService,
    public dialog: MatDialog,
    public router: Router,
    private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Meeting Room');
    this.roomName = this.data.dataEl.roomName;
    this.idMeetingRoom = this.data.dataEl.idRoom;
    console.log(this.idMeetingRoom);
  }


  delete(): void {
    this.meetingRoomService.deleteMeetingRoomById(this.idMeetingRoom).subscribe(data => {
      if (data == null) {
        this.openMessage();
      }
      this.dialogRef.close();

    }, error => {
      console.log(error)
    });
  }


  openMessage() {
    const dialogRef = this.dialog.open(MeetingRoomMessageComponent, {
      disableClose: true
    });
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        dialogRef.close();
      }, 1800);
    })
  };
}

