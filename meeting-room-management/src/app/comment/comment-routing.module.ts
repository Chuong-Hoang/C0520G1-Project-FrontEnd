import {Routes} from '@angular/router';
import {CommentListComponent} from './component/comment-list/comment-list.component';
import {CommentCreateComponent} from './component/comment-create/comment-create.component';
import {CommentHandleComponent} from './component/comment-handle/comment-handle.component';
import {NotificationComponent} from './component/notification/notification.component';
import {AuthGuard} from '../office-common/helper/auth.guard';
import {CreateNotificationComponent} from './component/create-notification/create-notification.component';

export const CommentRoutes: Routes = [
  {
    path: 'comment-list',
    component: CommentListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },
  {
    path: 'comment-create',
    component: CommentCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  },
  {
    path: 'create-notification',
    component: CreateNotificationComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },
  {
    path: 'comment/:idComment',
    component: CommentHandleComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },
  {
    path: 'notification',
    component: NotificationComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}
  },
];
