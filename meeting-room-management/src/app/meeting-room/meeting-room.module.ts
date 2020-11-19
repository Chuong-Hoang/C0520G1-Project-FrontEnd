import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { MeetingRoomAddComponent } from './component/meeting-room-add/meeting-room-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MeetingRoomEditComponent } from './component/meeting-room-edit/meeting-room-edit.component';


@NgModule({
  declarations: [MeetingRoomAddComponent, MeetingRoomEditComponent],
  exports: [
    MeetingRoomAddComponent,
    MeetingRoomEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class MeetingRoomModule { }
