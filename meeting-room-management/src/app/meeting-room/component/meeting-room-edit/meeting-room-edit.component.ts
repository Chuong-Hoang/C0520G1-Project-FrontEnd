import { Component, OnInit } from '@angular/core';
import { MeetingRoomService} from '../../service/meeting-room.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AssetsDetailService} from '../../../assets-detail/service/assets-detail.service';
import {AssetDetail} from '../../../assets-detail/model/AssetDetail.class';
import {AssetsDetailDialogChoiceComponent} from '../../../assets-detail/component/assets-detail-dialog-choice/assets-detail-dialog-choice.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-meeting-room-edit',
  templateUrl: './meeting-room-edit.component.html',
  styleUrls: ['./meeting-room-edit.component.css']
})
export class MeetingRoomEditComponent implements OnInit {
  public formEditRoom: FormGroup;
  public roomTypeList;
  public idToFind;
  public meetingRoomName: string;
  public idTemp: number;
  public quantity: number;
  public assetName: string;
  public assetList = [];
  constructor(
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    public meetingRoomService: MeetingRoomService,
    public router: Router,
    public assetsDetailService: AssetsDetailService,
    public activatedRoute: ActivatedRoute,
    private title: Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Meeting Room');
    this.formEditRoom = this.formBuilder.group({
      roomName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zà-ỹÀ-Ỹ_0-9\s]{1,30}$/)]],
      floor: ['', [Validators.required, Validators.pattern(/^([1-9]|[1-5]\d|60)$/)]],
      zone: ['', [Validators.required]],
      capacity: ['10', [Validators.required, Validators.pattern(/^([5-9]|[1-9]\d|100)$/)]],
      roomTypeName: ['', [Validators.required]],
      image: [''],
      assetList: []
    });
    this.meetingRoomService.getAllRoomType().subscribe(data => {
      this.roomTypeList = data;
    });
    this.activatedRoute.params.subscribe(data => {
      this.idToFind = data.id;
      console.log(this.idToFind);
    });
    this.meetingRoomService.getMeetingRoomById(this.idToFind).subscribe(data => {
      this.meetingRoomName = data.roomName;
      this.formEditRoom.patchValue(data);
    }, error => console.log('error'));
    console.log('qua day');
  }
  openDialog(): void {
    this.assetsDetailService.getAllAssetsDetail().subscribe(dataOfAssetsDetail => {
      const dialogRef = this.dialog.open(AssetsDetailDialogChoiceComponent, {
        width: '800px',
        data: {data1: dataOfAssetsDetail, idTemp: this.idTemp, quantity: this.quantity, assetName: this.assetName},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        const asset = new AssetDetail(result.idTemp, result.assetName, result.quantity, this.meetingRoomName);
        this.assetList.push(asset);
      });
    });
  }

  // tslint:disable-next-line:typedef
  edit() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.assetList.length; i++) {
      this.assetsDetailService.createAssetDetail(this.assetList[i]).subscribe(data => console.log('OK'));
    }
    this.meetingRoomService.editMeetingRoom(this.formEditRoom.value, this.idToFind).subscribe(data => {
      this.router.navigateByUrl('meeting-room');
    });
  }
}
