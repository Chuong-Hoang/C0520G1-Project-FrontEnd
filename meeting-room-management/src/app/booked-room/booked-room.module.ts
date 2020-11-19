import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedRoomCreateComponent } from './component/booked-room-create/booked-room-create.component';
import { BookedRoomListComponent } from './component/booked-room-list/booked-room-list.component';
import { BookedRoomCancelComponent } from './component/booked-room-cancel/booked-room-cancel.component';
import { BookedRoomSearchComponent } from './component/booked-room-search/booked-room-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    BookedRoomCreateComponent,
    BookedRoomListComponent,
    BookedRoomCancelComponent,
    BookedRoomSearchComponent],
  exports: [
    BookedRoomCreateComponent,
    BookedRoomListComponent,
    BookedRoomSearchComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule
  ]
})
export class BookedRoomModule { }
