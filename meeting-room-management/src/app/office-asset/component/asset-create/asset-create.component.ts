import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';
import {MessgerAssetComponent} from '../messger-asset/messger-asset.component';
import {MatDialog} from '@angular/material/dialog';
import {Title} from '@angular/platform-browser';


// tslint:disable-next-line:typedef
export function checkNameAsset(name = []) {
  return (a: AbstractControl) => {
    console.log(name);
    return (name.includes(a.value) ? {invalidName: true} : null);
  };
}

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent implements OnInit {
  public formCreate: FormGroup;
  public assetList;
  public idMessage = 1;
  public listAssetName = [];

  constructor(
    private formBuilder: FormBuilder,
    private assetServer: AssetServerService,
    private router: Router,
    private  dialog: MatDialog,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Asset');
    this.formCreate = this.formBuilder.group({
      assetName: ['', [Validators.required, checkNameAsset(this.listAssetName), Validators.pattern(/^[A-Z À-Ỹ][a-z à-ỹ]{1,9}(([ ][a-z à-ỹ]{0,9})?)*$/)]],
      usingQuantity: ['0'],
      fixingQuantity: ['0'],
      image: ['', [Validators.required]],
      total: ['', [Validators.required, Validators.pattern('^([1-9][\\d]*)$')]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('^([1-9][\\d]*)$')]]
    });
    this.assetServer.getAll().subscribe(data => {
      this.assetList = data;
      this.getAllAssetName();
    });
  }

  create(): void {
    console.log(this.formCreate.value);
    this.assetServer.create(this.formCreate.value).subscribe(data => {
      if (data == null){
        this.router.navigateByUrl('asset');
        this.openDialogMessage();
      }
    }, error => {
      console.log(error);
    });
  }

  getAllAssetName(): void {
    if (!this.assetList.isEmpty) {
      for (const asset of this.assetList) {
        this.listAssetName.push(asset.assetName);
      }
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
