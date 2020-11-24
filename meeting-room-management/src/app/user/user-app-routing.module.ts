import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {UserListComponent} from './component/user-list/user-list.component';
import {AuthGuard} from '../office-common/helper/auth.guard';

export const UserRoutes: Routes = [
  {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_ADMIN'] } }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    MatDialogModule,
  ]
})
export class UserAppRoutingModule {
}
