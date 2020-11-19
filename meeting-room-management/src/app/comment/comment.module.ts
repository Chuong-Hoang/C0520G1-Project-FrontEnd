import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import {CommentRoutes} from './comment-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommentHandleComponent } from './comment-handle/comment-handle.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [CommentListComponent, CommentHandleComponent, CommentCreateComponent, NotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CommentRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CommentModule { }
