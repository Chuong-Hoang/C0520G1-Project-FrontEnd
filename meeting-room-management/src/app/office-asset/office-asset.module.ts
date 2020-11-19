import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetDeleteComponent } from './asset-delete/asset-delete.component';
import { AssetCreateComponent } from './asset-create/asset-create.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetCreateQuantityComponent } from './asset-create-quantity/asset-create-quantity.component';



@NgModule({
  declarations: [AssetListComponent, AssetDeleteComponent, AssetCreateComponent, AssetDetailComponent, AssetCreateQuantityComponent],
  imports: [
    CommonModule
  ]
})
export class OfficeAssetModule { }
