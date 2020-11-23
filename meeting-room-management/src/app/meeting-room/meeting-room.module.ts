import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MeetingRoomAppRoutingModule} from './meeting-room-app-routing.module';

@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MeetingRoomAppRoutingModule
  ]
})
export class MeetingRoomModule { }
