import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import {CommentRoutes} from './comment-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommentHandleComponent } from './component/comment-handle/comment-handle.component';
import { CommentCreateComponent } from './component/comment-create/comment-create.component';
import { NotificationComponent } from './component/notification/notification.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteCommentComponent } from './component/delete-comment/delete-comment.component';
import {MaterialModule} from './material.module';
import { DetailNotificationComponent } from './component/detail-notification/detail-notification.component';
import { FormDirective} from './formDirective';
import { CreateNotificationComponent } from './component/create-notification/create-notification.component';

@NgModule({
  declarations: [CommentListComponent,
    CommentHandleComponent,
    CommentCreateComponent,
    NotificationComponent,
    DeleteCommentComponent,
    DetailNotificationComponent,
    FormDirective,
    CreateNotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CommentRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CommentModule { }
