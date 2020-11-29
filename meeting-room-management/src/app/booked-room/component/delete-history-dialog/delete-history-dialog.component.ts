import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
// can import them service

@Component({
  selector: 'app-delete-history-dialog',
  templateUrl: './delete-history-dialog.component.html',
  styleUrls: ['./delete-history-dialog.component.css']
})
export class DeleteHistoryDialogComponent implements OnInit {
  public roomName;
  public roomId;
  constructor(
    public dialogRef: MatDialogRef<DeleteHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    // tiem them service
  ) { }

  ngOnInit(): void {
    // this.roomName = this.data.data1.name;
    // this.roomId = this.data.data1.id;
  }

  // tslint:disable-next-line:typedef            xoa dong nay
  deleteBookedRoom() {
    // this.bookedRoomService.deleteBookedRoomById(this.bookedRoomId).subscribe(data =>{
    //   this.dialogRef.close();
    // });
  }
    // qua trang list.ts tiem them  Matdialog va goi ham openDialog().
}
