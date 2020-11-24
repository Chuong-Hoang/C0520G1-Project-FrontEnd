import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BookedRoomService} from '../../service/booked-room.service';

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
    public bookedRoomService: BookedRoomService
  ) { }

  ngOnInit(): void {
    this.roomName = this.data.data1.name;
    this.bookedRoomId = this.data.data1.id;
  }
  deleteBookedRoom(): void {
    this.bookedRoomService.deleteBookedRoomById(this.bookedRoomId).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
