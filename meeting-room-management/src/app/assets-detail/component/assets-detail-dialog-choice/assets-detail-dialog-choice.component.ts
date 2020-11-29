import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AssetsDetailService} from '../../service/assets-detail.service';
import {AssetDetail} from '../../model/AssetDetail.class';
import {AssetServerService} from '../../../office-asset/service/asset-server.service';

@Component({
  selector: 'app-assets-detail-dialog-choice',
  templateUrl: './assets-detail-dialog-choice.component.html',
  styleUrls: ['./assets-detail-dialog-choice.component.css']
})
export class AssetsDetailDialogChoiceComponent implements OnInit {
  public assetsDetailsList;
  public idAsset;
  public quantity: number;
  p: any;
  nameOfSearch: string;
  constructor(
    public dialogRef: MatDialogRef<AssetsDetailDialogChoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private assetService: AssetServerService,
  ) { }

  ngOnInit(): void {
    this.assetsDetailsList = this.data.data1;
    this.idAsset = this.data.data1.idAsset;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveAsset(idAsset: any, assetName: any): any {
    this.data.idTemp = idAsset;
    this.data.assetName = assetName;
    this.data.quantity = this.quantity;
    this.dialogRef.close(this.data);
  }
  // tslint:disable-next-line:typedef
  searchByName() {
    this.assetService.searchByNameAsset(this.nameOfSearch).subscribe( listAsset => {
      this.assetsDetailsList = listAsset;
    });
  }
}
