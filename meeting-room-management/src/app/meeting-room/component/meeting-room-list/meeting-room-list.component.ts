import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MeetingRoomDeleteComponent} from '../meeting-room-delete/meeting-room-delete.component';
import {MeetingRoomService} from '../../service/meeting-room.service';
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
  public messageHome: string;
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

    const user = this.tokenStorageService.getUser();
    this.role = user.role;

    this.showAdminBoard = this.role.includes('ROLE_ADMIN');
    this.showUserBoard = this.role.includes('ROLE_USER');

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
      roomName: ['', [Validators.pattern('^[a-zA-Z_0-9]+(([\',. -][a-zA-Z_0-9])?[a-zA-Z_0-9]*)*$')]],
      floor: ['', [Validators.pattern(/^([1-7]\d|[1-9])$/)]],
      roomTypeName: [''],
      roomStatusName: [''],
      zone: [''],
      capacity: ['', [Validators.pattern(/^([1-9][0-9]|[2-9])$/)]],
    });
    this.messageHome = this.sendMessage();
    // tslint:disable-next-line:typedef
    setTimeout(function() {
      this.messageHome = '';
      console.log(this.edited);
    }.bind(this), 3000);
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

  search(): void {
    this.meetingRoomList = [];
    console.log(this.formSearch.value);
    this.meetingRoomService.search(this.formSearch.value).subscribe(data => {
      this.meetingRoomList = data;
      console.log('list : ' + data);
    });
  }

  sendMessage(): string {
    return this.route.snapshot.queryParamMap.get('message');
  }
}
