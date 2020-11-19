import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {AssetDeleteComponent} from '../asset-delete/asset-delete.component';
import {AssetCreateQuantityComponent} from '../asset-create-quantity/asset-create-quantity.component';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
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

  // tslint:disable-next-line:typedef
  openDialogDelete() {
    const dialogRef = this.dialog.open(AssetDeleteComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

