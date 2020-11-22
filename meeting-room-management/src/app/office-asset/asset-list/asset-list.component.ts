// @ts-ignore
import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {MatDialog} from '@angular/material/dialog';

import {AssetDeleteComponent} from '../asset-delete/asset-delete.component';
import {AssetCreateQuantityComponent} from '../asset-create-quantity/asset-create-quantity.component';
import {AssetServerService} from '../service/asset-server.service';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  public assetList;

  constructor(
    private dialog: MatDialog,  private assetService: AssetServerService
  ) {
  }

  ngOnInit(): void {
    this.assetService.getAll().subscribe(data => {
      this.assetList = data;
      console.log(this.assetList);
      // this.sendMessage();
    });
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(AssetCreateQuantityComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openDialogDelete(): void {
    const dialogRef = this.dialog.open(AssetDeleteComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

