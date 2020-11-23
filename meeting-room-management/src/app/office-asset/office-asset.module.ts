import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import {AssetRoutes} from './asset-routing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {AssetListComponent} from './component/asset-list/asset-list.component';
import {AssetCreateComponent} from './component/asset-create/asset-create.component';
import {AssetCreateQuantityComponent} from './component/asset-create-quantity/asset-create-quantity.component';
import {AssetDetailComponent} from './component/asset-detail/asset-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AssetDeleteComponent } from './component/asset-delete/asset-delete.component';

@NgModule({
  declarations: [AssetListComponent, AssetCreateComponent, AssetDetailComponent, AssetCreateQuantityComponent, AssetDeleteComponent],
  exports: [
    AssetListComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AssetRoutes),
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        NgxPaginationModule
    ],
  entryComponents: [
    AssetCreateQuantityComponent
  ]
})
export class OfficeAssetModule { }
