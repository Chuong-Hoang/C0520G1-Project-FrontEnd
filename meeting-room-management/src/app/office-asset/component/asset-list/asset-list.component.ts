import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AssetCreateQuantityComponent} from '../asset-create-quantity/asset-create-quantity.component';
import {AssetServerService} from '../../service/asset-server.service';
import {ActivatedRoute} from '@angular/router';
import {AssetDeleteComponent} from '../asset-delete/asset-delete.component';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  public createMSG = '';
  public editMSG = '';
  public deleteMSG = '';
  public assetList;
  public valueSearch: string;
  p: any;

  constructor(
    private dialog: MatDialog,
    private assetService: AssetServerService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.p = 0;
    this.assetService.getAll().subscribe(data => {
      this.assetList = data;
      console.log(this.assetList);
      this.sendMessage();
    });
  }

  openDialogCreate(id): void {
    this.assetService.getByID(id).subscribe(dataAsset => {
      const dialogRef = this.dialog.open(AssetCreateQuantityComponent, {
        width: '500px',
        height: '400px',
        data: {dataC: dataAsset.idAsset},
        disableClose: true
      });
      console.log('data:' + dataAsset.idAsset);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  openDialogDelete(id): void {
    this.assetService.getByID(id).subscribe(dataAsset => {
      const dialogRef = this.dialog.open(AssetDeleteComponent, {
        height: '300px',
        width: '450px',
        data: {data1: dataAsset},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });

  }

  search(): void {
    this.p = 0;
    this.assetService.searchByNameAsset(this.valueSearch).subscribe(dataSearch => {
      this.assetList = dataSearch;
      console.log(this.valueSearch);
    });
  }

  sendMessage(): void {
    this.createMSG = this.route.snapshot.queryParamMap.get('create_msg');
    this.editMSG = this.route.snapshot.queryParamMap.get('edit_msg');
    this.deleteMSG = this.route.snapshot.queryParamMap.get('delete_msg');

  }
}

