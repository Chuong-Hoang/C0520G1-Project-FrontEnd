import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BookedRoomService} from '../../service/booked-room.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-history-dialog',
  templateUrl: './delete-history-dialog.component.html',
  styleUrls: ['./delete-history-dialog.component.css']
})
export class DeleteHistoryDialogComponent implements OnInit {
  public roomName;
  public bookedRoomId;
  constructor(
    public dialogRef: MatDialogRef<DeleteHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public bookedRoomService: BookedRoomService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.roomName = this.data.meetingRoomName;
    this.bookedRoomId = this.data.idBookedRoom;
    console.log(this.data);
  }
  deleteBookedRoom(): void {
    this.bookedRoomService.setStatusBookedRoomById(this.bookedRoomId).subscribe(data => {
      this.router.navigate(['/booked-room-list']);
      this.dialogRef.close();
    });
  }
}
