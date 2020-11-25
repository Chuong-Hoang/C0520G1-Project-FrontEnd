import { Component, OnInit } from '@angular/core';
import { MeetingRoomService} from '../../service/meeting-room.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AssetsDetailService} from '../../../assets-detail/service/assets-detail.service';
import {AssetDetail} from '../../../assets-detail/model/AssetDetail.class';
import {AssetsDetailDialogChoiceComponent} from '../../../assets-detail/component/assets-detail-dialog-choice/assets-detail-dialog-choice.component';

@Component({
  selector: 'app-meeting-room-edit',
  templateUrl: './meeting-room-edit.component.html',
  styleUrls: ['./meeting-room-edit.component.css']
})
export class MeetingRoomEditComponent implements OnInit {
  public formEditRoom: FormGroup;
  public roomTypeList;
  public assetsDetail: AssetDetail;
  public idToFind;
  constructor(
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    public meetingRoomService: MeetingRoomService,
    public router: Router,
    public assetsDetailService: AssetsDetailService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.formEditRoom = this.formBuilder.group({
      roomName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1,30}$')]],
      floor: ['', [Validators.required, Validators.pattern('^[0-9]{0,20}$')]],
      zone: ['', [Validators.required]],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]{0,20}$')]],
      roomTypeName: ['', [Validators.required]],
      image: [''],
    });
    this.meetingRoomService.getAllRoomType().subscribe(data => {
      this.roomTypeList = data;
    });
    this.activatedRoute.params.subscribe(data => {
      this.idToFind = data.id;
      this.meetingRoomService.getMeetingRoomById(this.idToFind).subscribe(data1 => {
        this.formEditRoom.patchValue(data1);
      });
    });
  }
  openDialog(): void {
    this.assetsDetailService.getAllAssetsDetail().subscribe(dataOfAssetsDetail => {
      const dialogRef = this.dialog.open(AssetsDetailDialogChoiceComponent, {
        width: '800px',
        data: {data1: dataOfAssetsDetail},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.assetsDetail = result;
      });
    });
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.meetingRoomService.editMeetingRoom(this.formEditRoom.value, this.idToFind).subscribe(data => {
      this.router.navigateByUrl('meeting-room');
    });
  }
}
