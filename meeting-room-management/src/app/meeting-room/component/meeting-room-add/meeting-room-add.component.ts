// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {MeetingRoomService} from '../../service/meeting-room.service';
// @ts-ignore
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
// @ts-ignore
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AssetsDetailDialogChoiceComponent} from '../../../assets-detail/component/assets-detail-dialog-choice/assets-detail-dialog-choice.component';
import {AssetDetail} from '../../../assets-detail/model/AssetDetail.class';
import {AssetsDetailService} from '../../../assets-detail/service/assets-detail.service';


// @ts-ignore
@Component({
  selector: 'app-meeting-room-add',
  templateUrl: './meeting-room-add.component.html',
  styleUrls: ['./meeting-room-add.component.css']
})
export class MeetingRoomAddComponent implements OnInit {

  public roomType;
  public roomStatus;
  public formAddRoom: FormGroup;
  public minDate = new Date();
  public maxDate = new Date(2030, 1, 1);
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
      _roomName: ['', [Validators.required]],
      _floor: ['', [Validators.required]],
      _zone: ['', [Validators.required]],
      _capacity: ['', [Validators.required]],
      _roomType: ['', [Validators.required]],
      _image: ['', [Validators.required]],
    });
    this.meetingRoomService.getAllRoomType().subscribe(data => {
      this.roomType = data;
    });
  }

  openDialog(): void {
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

  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }
}
