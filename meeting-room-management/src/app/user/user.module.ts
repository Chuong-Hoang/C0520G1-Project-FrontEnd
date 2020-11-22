import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './component/user-list/user-list.component';
import {UserCreateComponent} from './component/user-create/user-create.component';
import {UserEditComponent} from './component/user-edit/user-edit.component';
import {UserDeleteComponent} from './component/user-delete/user-delete.component';
import {UserChangePasswordComponent} from './component/user-change-password/user-change-password.component';
import {UserAppRoutingModule} from './user-app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserChangePasswordComponent
  ],
  imports: [
    CommonModule,
    UserAppRoutingModule,
    MatDialogModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ]
})
export class UserModule {
}
