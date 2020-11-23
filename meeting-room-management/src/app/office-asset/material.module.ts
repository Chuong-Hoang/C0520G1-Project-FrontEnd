import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AssetCreateQuantityComponent} from './component/asset-create-quantity/asset-create-quantity.component';
import {AssetDeleteComponent} from './component/asset-delete/asset-delete.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    AssetCreateQuantityComponent,
    AssetDeleteComponent
  ],
})
export class MaterialModule { }
