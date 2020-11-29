import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';
import {MessgerAssetComponent} from '../messger-asset/messger-asset.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-asset-delete',
  templateUrl: './asset-delete.component.html',
  styleUrls: ['./asset-delete.component.css']
})
export class AssetDeleteComponent implements OnInit {

  public assetName;
  public assetOfId;
  public idMessage = 3;

  constructor(
    private dialogRef: MatDialogRef<AssetDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private assetServerService: AssetServerService,
    private router: Router,
    private  dialog: MatDialog,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Asset');
    this.assetName = this.data.data1.assetName;
    this.assetOfId = this.data.data1.idAsset;
  }

  delete(): void {
    this.assetServerService.delete(this.assetOfId).subscribe(data => {
      if (data == null){
        this.dialogRef.close();
        this.openDialogMessage();
      }
      }, error => {
      console.log(error);
    });
  }

  openDialogMessage(): void {
    const timeout = 1800;
    const dialogRef = this.dialog.open(MessgerAssetComponent, {
      width: '300px',
      height: '160px',
      data: {dataMessage: this.idMessage},
      disableClose: true
    });
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        dialogRef.close();
      }, timeout);
    });
  }

}
