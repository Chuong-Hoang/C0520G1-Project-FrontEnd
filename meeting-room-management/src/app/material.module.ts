import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatDialogModule,
  BrowserAnimationsModule
],
  providers: [MatDatepickerModule],
  entryComponents: [],
})
export class MaterialModule { }
