import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MeetingRoomDeleteComponent} from '../meeting-room-delete/meeting-room-delete.component';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {MeetingRoom} from '../../model/MeetingRoom';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styleUrls: ['./meeting-room-list.component.css']
})
export class MeetingRoomListComponent implements OnInit {
  private role: string;
  public meetingRoomList = [];
  public roomTypeList;
  public roomStatusList;
  public formSearch: FormGroup;
  public p: number;
  public showAdminBoard = false;
  public showUserBoard = true;
  isLoggedIn = false;

  constructor(
    public meetingRoomService: MeetingRoomService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;

      this.showAdminBoard = this.role.includes('ROLE_ADMIN');
      this.showUserBoard = this.role.includes('ROLE_USER');
    }
    this.meetingRoomList = [];
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomList = data;
    }, error => console.log('error'));
    this.meetingRoomService.getAllRoomStatus().subscribe(data => {
      this.roomStatusList = data;
    });
    this.meetingRoomService.getAllRoomType().subscribe(data => {
      this.roomTypeList = data;
    });
    this.formSearch = this.formBuilder.group({
      roomName: ['', [Validators.pattern('^[a-z0-9]{0,100}$')]],
      floor: ['', [Validators.pattern('[0-9]')]],
      roomTypeName: [''],
      roomStatusName: [''],
      zone: [''],
      capacity: ['', [Validators.pattern('[0-9]')]],
    });
  }

  delete(id: number): void {
    this.meetingRoomService.getMeetingRoomById(id).subscribe(data => {
      const dialogRef = this.dialog.open(MeetingRoomDeleteComponent, {
        width: '500px',
        data: {dataEl: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  search()
    :
    void {
    this.meetingRoomList = [];
    console.log(this.formSearch.value);
    this.meetingRoomService.search(this.formSearch.value).subscribe(data => {
      this.meetingRoomList = data;
      console.log('list : ' + data);
    });
  }
}
