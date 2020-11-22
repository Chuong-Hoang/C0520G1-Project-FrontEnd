import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {UserListComponent} from './component/user-list/user-list.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

export const UserRoutes: Routes = [
  {path: 'user-list', component: UserListComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserAppRoutingModule {
}
