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

  constructor(
    public dialogRef: MatDialogRef<BookedRoomCancelComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public bookedRoomService: BookedRoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  agreeToCancel(): void {
    this.router.navigate(['/booked-room-list']);
    this.dialogRef.close();
  }
}
