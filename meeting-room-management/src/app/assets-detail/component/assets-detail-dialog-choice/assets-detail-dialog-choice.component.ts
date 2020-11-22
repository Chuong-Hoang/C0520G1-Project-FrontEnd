import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AssetsDetailService} from '../../service/assets-detail.service';
import {AssetDetail} from '../../model/AssetDetail.class';

@Component({
  selector: 'app-assets-detail-dialog-choice',
  templateUrl: './assets-detail-dialog-choice.component.html',
  styleUrls: ['./assets-detail-dialog-choice.component.css']
})
export class AssetsDetailDialogChoiceComponent implements OnInit {
  // bo di AssetDetail[]
  public assetsDetails: AssetDetail[];
  constructor(
    public dialogRef: MatDialogRef<AssetsDetailDialogChoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
) { }

  ngOnInit(): void {
    this.assetsDetails = this.data;
  }

}