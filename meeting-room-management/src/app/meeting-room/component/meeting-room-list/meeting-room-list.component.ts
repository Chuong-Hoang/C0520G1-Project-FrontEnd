import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MeetingRoomDeleteComponent} from '../meeting-room-delete/meeting-room-delete.component';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {Title} from '@angular/platform-browser';
import validate = WebAssembly.validate;

export function checkValidMinMaxCapacity(c: AbstractControl): any {
  const c1 = c.value;
  const min = c1.capacity;
  const max = c1.capacityMax;
  return (min < max) ? null : {invalidCapacity: true};
}

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
  public result = '';

  constructor(
    public meetingRoomService: MeetingRoomService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogMessage: MatDialog,
    public router: Router,
    public formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private title: Title,
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Meeting Room');
    const user = this.tokenStorageService.getUser();
    this.role = user.role;
    this.showAdminBoard = this.role.includes('ROLE_ADMIN');
    this.showUserBoard = this.role.includes('ROLE_USER');

    this.meetingRoomList = [];
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomList = data;
      console.log('meeting room list');
      console.log(data);
      if (data == null) {
        this.result = 'Rất tiếc!! không có kết quả nào';
      } else {
        this.result = this.meetingRoomList.length + '';
      }
    }, error => console.log('error'));
    this.meetingRoomService.getAllRoomStatus().subscribe(data => {
      this.roomStatusList = data;
    });
    this.meetingRoomService.getAllRoomType().subscribe(data => {
      this.roomTypeList = data;
    });

    this.formSearch = this.formBuilder.group({
      roomName: ['', [Validators.pattern(/^[a-zA-Zà-ỹÀ-Ỹ_0-9]{1,9}(([ ][a-zA-Zà-ỹÀ-Ỹ_0-9]{0,9})?)*$/), Validators.maxLength(30)]],
      floor: ['', [Validators.min(1),Validators.pattern(/^([1-7]\d|[1-9])$/)]],
      roomTypeName: [''],
      roomStatusName: [''],
      zone: [''],
      capacity: ['', [Validators.pattern(/^([1-4][0-9]|50)$/)]],
      capacityMax: ['', [Validators.pattern(/^([1-4][0-9]|50)$/)]]
    });
    this.messageHome = this.sendMessage();
    // tslint:disable-next-line:typedef
    setTimeout(function () {
      this.messageHome = '';
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
        setTimeout(function () {
          this.messageHome = '';
        }.bind(this), 3000);
        this.search();
      });
    });
  }

  search(): void {
    this.p = 0;
    this.meetingRoomList = [];
    this.result = '';
    console.log(this.formSearch.value);
    this.meetingRoomService.search(this.formSearch.value).subscribe(data => {
      if (data == null) {
        this.result = 'Rất tiếc!! không có kết quả nào';
      } else {
        this.meetingRoomList = data;
        this.result = this.meetingRoomList.length + '';
      }
      console.log('list : ' + data);
    });
  }

  sendMessage(): string {
    return this.route.snapshot.queryParamMap.get('message');
  }

  reset(): void {
    this.formSearch = this.formBuilder.group({
      roomName: ['', [Validators.pattern(/^[a-zA-Zà-ỹÀ-Ỹ_0-9]{1,6}([ ][a-zA-Zà-ỹÀ-Ỹ_0-9]{0,9}){0,24}$/), Validators.maxLength(30)]],
      floor: ['', [Validators.pattern(/^([1-7]\d|[1-9])$/)]],
      roomTypeName: [''],
      roomStatusName: [''],
      zone: [''],
      capacity: ['', [Validators.pattern(/^([1-4][0-9]|50|[2-9])$/)]],
      capacityMax: ['', [Validators.pattern(/^([1-4][0-9]|50|[2-9])$/)]],
    });
    this.ngOnInit();
  }
}
