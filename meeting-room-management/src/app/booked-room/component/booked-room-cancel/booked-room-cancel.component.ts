import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {BookedRoomService} from '../../service/booked-room.service';

@Component({
  selector: 'app-booked-room-cancel',
  templateUrl: './booked-room-cancel.component.html',
  styleUrls: ['./booked-room-cancel.component.css']
})
export class BookedRoomCancelComponent implements OnInit {
  public eleId: any;
  public eleName: any;

  constructor(
    public dialogRef: MatDialogRef<BookedRoomCancelComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public bookedRoomService: BookedRoomService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.eleId = this.data.data1.idRoom;
    this.eleName = this.data.data1.roomName;
    console.log('id truyền vào: ' + this.eleId);
    console.log('tên truyền vào: ' + this.eleName);
  }

  agreeToCancel(): void {
    this.router.navigate(['/booked-room-list']);
    this.dialogRef.close();
  }
}
