import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetDeleteComponent } from './asset-delete/asset-delete.component';
import { AssetCreateComponent } from './asset-create/asset-create.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetCreateQuantityComponent } from './asset-create-quantity/asset-create-quantity.component';
import {RouterModule} from '@angular/router';
import {AssetRoutes} from './asset-routing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [AssetListComponent, AssetDeleteComponent, AssetCreateComponent, AssetDetailComponent, AssetCreateQuantityComponent],
  exports: [
    AssetListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AssetRoutes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [
    AssetDeleteComponent,
    AssetCreateQuantityComponent
  ]
})
export class OfficeAssetModule { }
