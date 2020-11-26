import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MeetingRoomDeleteComponent} from '../meeting-room-delete/meeting-room-delete.component';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {MeetingRoom} from '../../model/MeetingRoom';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styleUrls: ['./meeting-room-list.component.css']
})
export class MeetingRoomListComponent implements OnInit {
  public meetingRoomList = [];
  public roomTypeList;
  public roomStatusList;
  public formSearch: FormGroup;
  public p: number;

  constructor(
    public meetingRoomService: MeetingRoomService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.meetingRoomList = [];
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomList = data;
      console.log('init: ' + data);
    });
    this.meetingRoomService.getAllRoomStatus().subscribe(data => {
      this.roomStatusList = data;
    });
    this.meetingRoomService.getAllRoomType().subscribe(data => {
      this.roomTypeList = data;
    });
    this.formSearch = this.formBuilder.group({
      roomName: [''],
      floor: [''],
      // roomType: [''],
      // roomStatus: [''],
      zone: [''],
      capacity: ['']
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

  search(): void {
    this.meetingRoomList = [];
    console.log(this.formSearch.value);
    this.meetingRoomService.search(this.formSearch.value).subscribe(data => {
      console.log(this.formSearch.value.roomName);
      console.log(this.formSearch.value.floor);
      console.log(this.formSearch.value.zone);
      console.log(this.formSearch.value.capacity);
      this.meetingRoomList = data;
      console.log('list : ' + data);
    });
  }
}
