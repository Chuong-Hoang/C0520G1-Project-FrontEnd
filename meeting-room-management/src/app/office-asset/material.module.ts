import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AssetDeleteComponent} from './asset-delete/asset-delete.component';
import {AssetCreateQuantityComponent} from './asset-create-quantity/asset-create-quantity.component';

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
    AssetDeleteComponent,
    AssetCreateQuantityComponent
  ],
})
export class MaterialModule { }
