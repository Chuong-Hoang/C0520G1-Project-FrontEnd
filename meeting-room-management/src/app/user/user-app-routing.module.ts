import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {UserListComponent} from './component/user-list/user-list.component';
import {AuthGuard} from '../office-common/helper/auth.guard';
<<<<<<< HEAD
// import {ReactiveFormsModule, FormsModule} from '@angular/forms';
=======
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa

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
