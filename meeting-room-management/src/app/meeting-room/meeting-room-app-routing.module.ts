import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MeetingRoomListComponent} from './component/meeting-room-list/meeting-room-list.component';
import {MeetingRoomDetailComponent} from './component/meeting-room-detail/meeting-room-detail.component';
import {MeetingRoomDeleteComponent} from './component/meeting-room-delete/meeting-room-delete.component';
import {RouterModule, Routes} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MeetingRoomEditComponent} from './component/meeting-room-edit/meeting-room-edit.component';
import {MeetingRoomAddComponent} from './component/meeting-room-add/meeting-room-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
const routesConfig: Routes = [
  {path: 'meeting-room', component: MeetingRoomListComponent},
  {path: 'meeting-room/:id', component: MeetingRoomDetailComponent},
  {path: 'meeting-room-add', component: MeetingRoomAddComponent},
  {path: 'meeting-room-edit/:id', component: MeetingRoomEditComponent}
];
@NgModule({
  declarations: [
    MeetingRoomListComponent,
    MeetingRoomDetailComponent,
    MeetingRoomDeleteComponent,
    MeetingRoomEditComponent,
    MeetingRoomAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig),
    MatDialogModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class MeetingRoomAppRoutingModule {
}
