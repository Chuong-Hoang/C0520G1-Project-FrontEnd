import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';

@Component({
  selector: 'app-asset-delete',
  templateUrl: './asset-delete.component.html',
  styleUrls: ['./asset-delete.component.css']
})
export class AssetDeleteComponent implements OnInit {

  public assetName;
  public assetOfId;

  constructor(
    public dialogRef: MatDialogRef<AssetDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public assetServerService: AssetServerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.assetName = this.data.data1.assetName;
    this.assetOfId = this.data.data1.idAsset;
  }

  delete(): void {
    this.assetServerService.delete(this.assetOfId).subscribe(data => {
      this.router.navigate(['asset'], {queryParams: {delete_msg: 'Xóa sản phẩm thành công!', si: true}});
      this.dialogRef.close();
    });
  }

}
