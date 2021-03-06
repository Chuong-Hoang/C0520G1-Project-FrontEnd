import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MeetingRoomAppRoutingModule} from './meeting-room-app-routing.module';
import {MeetingRoomAddComponent} from './component/meeting-room-add/meeting-room-add.component';
import {MeetingRoomEditComponent} from './component/meeting-room-edit/meeting-room-edit.component';
import {MaterialModule} from './material.meeting-room.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [MeetingRoomAddComponent,
    MeetingRoomEditComponent],
  exports: [MeetingRoomAddComponent,
    MeetingRoomEditComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        MeetingRoomAppRoutingModule,
        MaterialModule,
        RouterModule,
    ]
})
export class MeetingRoomModule {
}
