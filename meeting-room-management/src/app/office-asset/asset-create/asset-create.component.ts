import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AssetServerService} from '../service/asset-server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent implements OnInit {
  public formCreate: FormGroup;
  constructor(public formBuilder: FormBuilder,
              public assetServer: AssetServerService,
              public router: Router) { }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      idAsset: [''],
      assetName: [''],
      usingQuantity: ['0'],
      fixingQuantity: ['0'],
      image: [''],
      total: [''],
      description: [''],
      price: ['']
    });
  }

  // tslint:disable-next-line:typedef
  create() {
    console.log(this.formCreate.value);
    this.assetServer.create(this.formCreate.value).subscribe(data => {
      this.router.navigate(['asset'], {queryParams: {create_msg: 'Thêm mới thành công!', si: true}});
      // this.router.navigateByUrl('customer')
    });
  }
}
