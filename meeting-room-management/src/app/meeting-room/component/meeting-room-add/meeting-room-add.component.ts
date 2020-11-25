<<<<<<< HEAD
// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {MeetingRoomService} from '../../service/meeting-room.service';
// @ts-ignore
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
// @ts-ignore
import {Router} from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { MeetingRoomService} from '../../service/meeting-room.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
import {MatDialog} from '@angular/material/dialog';
import {AssetsDetailDialogChoiceComponent} from '../../../assets-detail/component/assets-detail-dialog-choice/assets-detail-dialog-choice.component';
import {AssetDetail} from '../../../assets-detail/model/AssetDetail.class';
import {AssetsDetailService} from '../../../assets-detail/service/assets-detail.service';

@Component({
  selector: 'app-meeting-room-add',
  templateUrl: './meeting-room-add.component.html',
  styleUrls: ['./meeting-room-add.component.css']
})
export class MeetingRoomAddComponent implements OnInit {

  public roomTypeList;
  public formAddRoom: FormGroup;
  public assetsDetail: AssetDetail;
  fileToUpload: File = null;

  constructor(
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    public meetingRoomService: MeetingRoomService,
    public router: Router,
    public assetsDetailService: AssetsDetailService
  ) {
  }

  ngOnInit(): void {
    this.formAddRoom = this.formBuilder.group({
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
  }

  openDialog(): void {
<<<<<<< HEAD
    // this.assetsDetailService.getAllAssetsDetail().subscribe(dataOfAssetsDetail => {
    const dialogRef = this.dialog.open(AssetsDetailDialogChoiceComponent, {
      width: '800px',
      // data: {data1: dataOfAssetsDetail}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.assetsDetail = result;
    });
    // });
=======
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
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa

  addNewMeetingRoom(): void {
    this.meetingRoomService.addNewMeetingRoom(this.formAddRoom.value).subscribe(data => {
      this.router.navigateByUrl('meeting-room');
    });
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }
}
