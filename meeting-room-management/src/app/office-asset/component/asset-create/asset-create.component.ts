import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';


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
  public listAssetName = [];

  constructor(
    private formBuilder: FormBuilder,
    private assetServer: AssetServerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
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
      this.router.navigate(['asset'], {queryParams: {create_msg: 'Thêm mới thành công!', si: true}});
    });
  }

  getAllAssetName(): void {
    if (!this.assetList.isEmpty) {
      for (const asset of this.assetList) {
        this.listAssetName.push(asset.assetName);
      }
    }
  }
}
