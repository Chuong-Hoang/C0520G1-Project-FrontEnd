import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedRoomCancelComponent } from './component/booked-room-cancel/booked-room-cancel.component';
import { DeleteHistoryDialogComponent } from './component/delete-history-dialog/delete-history-dialog.component';




@NgModule({
    declarations: [BookedRoomCancelComponent, DeleteHistoryDialogComponent],
    exports: [
        BookedRoomCancelComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BookedRoomModule { }
