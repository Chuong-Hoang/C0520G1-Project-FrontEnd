import {Routes} from '@angular/router';
import {CommentListComponent} from './comment-list/comment-list.component';
import {CommentCreateComponent} from './comment-create/comment-create.component';
import {CommentHandleComponent} from './comment-handle/comment-handle.component';
import {NotificationComponent} from './notification/notification.component';

export const CommentRoutes: Routes = [
  {
    path: 'comment-list',
    component: CommentListComponent,
  },
  {
    path: 'comment-create',
    component: CommentCreateComponent,
  },
  {
    path: 'comment-handle',
    component: CommentHandleComponent,
  },
  {
    path: 'notification',
    component: NotificationComponent,
  },
];
