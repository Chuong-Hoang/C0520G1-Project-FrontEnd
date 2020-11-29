import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';
import {Asset} from '../../model/model.asset';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessgerAssetComponent} from '../messger-asset/messger-asset.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-asset-create-quantity',
  templateUrl: './asset-create-quantity.component.html',
  styleUrls: ['./asset-create-quantity.component.css']
})
export class AssetCreateQuantityComponent implements OnInit {
  public dataId;
  public formEdit: FormGroup;
  public asset = new Asset();
  public idMessage = 2;

  constructor(
    private  dialog: MatDialog,
    private formBuilder: FormBuilder,
    private assetService: AssetServerService,
    private activatedRouter: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<AssetCreateQuantityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Asset');
    this.formEdit = this.formBuilder.group({
      // idAsset: [''],
      assetName: [''],
      usingQuantity: [''],
      fixingQuantity: ['', [Validators.required, Validators.pattern('^([0-9][\\d]*)$')]],
      image: [''],
      total: ['', [Validators.required, Validators.pattern('^([1-9][\\d]*)$')]],
      description: [''],
      price: ['']
    });

    this.dataId = this.data.dataC;
    this.assetService.getByID(this.dataId).subscribe(getData => {
      this.formEdit.patchValue(getData);
    });
  }

  edit(): void {
    if (this.formEdit.valid) {
      this.assetService.edit(this.formEdit.value, this.dataId).subscribe(data => {
          this.dialogRef.close();
          this.openDialogMessage();
      }, error => {
        console.log(error);
      });
    }
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
