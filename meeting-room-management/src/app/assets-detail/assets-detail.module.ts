import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsDetailDialogChoiceComponent } from './component/assets-detail-dialog-choice/assets-detail-dialog-choice.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [AssetsDetailDialogChoiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule
  ]
})
export class AssetsDetailModule { }
