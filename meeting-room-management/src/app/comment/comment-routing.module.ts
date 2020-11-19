import {Routes} from '@angular/router';
import {CommentListComponent} from './component/comment-list/comment-list.component';
import {CommentCreateComponent} from './component/comment-create/comment-create.component';
import {CommentHandleComponent} from './component/comment-handle/comment-handle.component';
import {NotificationComponent} from './component/notification/notification.component';

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
