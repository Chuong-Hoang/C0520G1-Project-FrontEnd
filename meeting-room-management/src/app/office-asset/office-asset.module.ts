// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetDeleteComponent } from './asset-delete/asset-delete.component';
import { AssetCreateComponent } from './asset-create/asset-create.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetCreateQuantityComponent } from './asset-create-quantity/asset-create-quantity.component';
import {RouterModule} from '@angular/router';
import {AssetRoutes} from './asset-routing';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [AssetListComponent, AssetDeleteComponent, AssetCreateComponent, AssetDetailComponent, AssetCreateQuantityComponent],
  exports: [
    AssetListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AssetRoutes),
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class OfficeAssetModule { }
