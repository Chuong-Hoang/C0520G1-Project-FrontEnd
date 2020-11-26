import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent implements OnInit {
  public formCreate: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private assetServer: AssetServerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      assetName: ['', [Validators.required, Validators.pattern(/^[A-Z À-Ỹ][a-z à-ỹ]{1,9}(([ ][a-z ạ-ỹ]{0,9})?)*$/)]],
      usingQuantity: ['0'],
      fixingQuantity: ['0'],
      image: ['', [Validators.required]],
      total: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log(this.formCreate.value);
    this.assetServer.create(this.formCreate.value).subscribe(data => {
      this.router.navigate(['asset'], {queryParams: {create_msg: 'Thêm mới thành công!', si: true}});
    });
  }
}
