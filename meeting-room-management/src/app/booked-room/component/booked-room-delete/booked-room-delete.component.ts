import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookedRoomService } from '../../service/booked-room.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DeleteHistoryDialogComponent} from '../delete-history-dialog/delete-history-dialog.component';

@Component({
  selector: 'app-booked-room-cancel',
  templateUrl: './booked-room-delete.component.html',
  styleUrls: ['./booked-room-delete.component.css']
})
export class BookedRoomDeleteComponent implements OnInit {
  public idToFind;
  public bookedRoom;
  constructor(
    public bookedRoomService: BookedRoomService,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      this.idToFind = data.id;
      this.bookedRoomService.getFullBookedRoomById(this.idToFind).subscribe( data1 => {
        this.bookedRoom = data1;
      });
    });
  }


  openDialogDelete(): void {
    this.bookedRoomService.getFullBookedRoomById(this.idToFind).subscribe( next => {
      const dialogRef = this.dialog.open(DeleteHistoryDialogComponent, {
        width: '500px',
        data: next,
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('delete');
      });
    });
  }
}
