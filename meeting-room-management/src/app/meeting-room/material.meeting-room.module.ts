import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MeetingRoomDeleteComponent} from './component/meeting-room-delete/meeting-room-delete.component';
import {AssetsDetailDialogChoiceComponent} from '../assets-detail/component/assets-detail-dialog-choice/assets-detail-dialog-choice.component';


@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
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
  entryComponents: [MeetingRoomDeleteComponent, AssetsDetailDialogChoiceComponent]
})

export class MaterialModule {
}
