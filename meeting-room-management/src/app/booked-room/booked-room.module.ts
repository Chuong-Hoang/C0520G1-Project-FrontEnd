import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedRoomDeleteComponent } from './component/booked-room-delete/booked-room-delete.component';
import { DeleteHistoryDialogComponent } from './component/delete-history-dialog/delete-history-dialog.component';
import {RouterModule} from '@angular/router';
import {bookingRoomRoute} from './booking-routing.module';
import {BookedRoomListComponent} from './component/booked-room-list/booked-room-list.component';
import {BookedRoomCreateComponent} from './component/booked-room-create/booked-room-create.component';
import {BookedRoomSearchComponent} from './component/booked-room-search/booked-room-search.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    BookedRoomDeleteComponent,
    BookedRoomListComponent,
    BookedRoomCreateComponent,
    BookedRoomSearchComponent,
    DeleteHistoryDialogComponent
  ],
  exports: [
    BookedRoomDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookingRoomRoute),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class BookedRoomModule { }



