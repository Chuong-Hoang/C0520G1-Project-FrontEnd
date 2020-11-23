import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MeetingRoomService} from '../../service/meeting-room.service';

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
    public meetingRoomService: MeetingRoomService) {
  }

  ngOnInit(): void {
    this.roomName = this.data.dataEl.roomName;
    this.idMeetingRoom = this.data.dataEl.idRoom;
    console.log(this.idMeetingRoom);
  }


  delete(): void {
    console.log('abc');
    this.meetingRoomService.deleteMeetingRoomById(this.idMeetingRoom).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
