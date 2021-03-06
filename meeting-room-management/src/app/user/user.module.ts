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
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserDialogComponent } from './component/user-dialog/user-dialog.component';
import {FormDirective} from './formdirective';
import { MessageNotificationComponent } from './component/message-notification/message-notification.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserChangePasswordComponent,
    UserDialogComponent,
    FormDirective,
    MessageNotificationComponent
  ],
  imports: [
    CommonModule,
    UserAppRoutingModule,
    MatDialogModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule {
}
