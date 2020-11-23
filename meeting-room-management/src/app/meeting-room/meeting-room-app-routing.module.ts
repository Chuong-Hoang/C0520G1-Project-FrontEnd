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
import {AuthGuard} from '../office-common/helper/auth.guard';

const routesConfig: Routes = [
  {path: 'meeting-room', component: MeetingRoomListComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'meeting-room/:id', component: MeetingRoomDetailComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'meeting-room-add', component: MeetingRoomAddComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_ADMIN']}},
  {path: 'meeting-room-edit/:id', component: MeetingRoomEditComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_ADMIN']}}
];

@NgModule({
  declarations: [MeetingRoomListComponent,
    MeetingRoomDetailComponent,
    MeetingRoomDeleteComponent],
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
