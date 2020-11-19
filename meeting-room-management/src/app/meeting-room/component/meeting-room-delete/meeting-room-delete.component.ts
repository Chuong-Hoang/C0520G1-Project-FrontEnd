import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MeetingRoomService} from '../../service/meeting-room.service';

@Component({
  selector: 'app-meeting-room-delete',
  templateUrl: './meeting-room-delete.component.html',
  styleUrls: ['./meeting-room-delete.component.css']
})
export class MeetingRoomDeleteComponent implements OnInit {

  public meetingRoomTemp;
  public idMeetingRoomTemp;

  constructor(
    public dialogRef: MatDialogRef<MeetingRoomDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public meetingRoomService: MeetingRoomService) {
  }

  ngOnInit(): void {
    this.meetingRoomTemp = this.data.dataEl;
    this.idMeetingRoomTemp = this.data.dataEl.id;
  }

  // delete() {
  //   this.meetingRoomService.delete(this.idMeetingRoomTemp).subscribe(data => {
  //     this.dialogRef.close();
  //   });
  // }
}
