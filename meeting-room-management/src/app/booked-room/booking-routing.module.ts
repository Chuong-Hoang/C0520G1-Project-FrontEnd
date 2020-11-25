import {Routes} from '@angular/router';
import {BookedRoomSearchComponent} from './component/booked-room-search/booked-room-search.component';
import {BookedRoomCreateComponent} from './component/booked-room-create/booked-room-create.component';
import {BookedRoomListComponent} from './component/booked-room-list/booked-room-list.component';
import {AuthGuard} from '../office-common/helper/auth.guard';
<<<<<<< HEAD
=======
import {BookedRoomDeleteComponent} from './component/booked-room-delete/booked-room-delete.component';
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa

export const bookingRoomRoute: Routes = [
  { path: 'search-available-room', component: BookedRoomSearchComponent,
    canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}},
  { path: 'book-room', component: BookedRoomCreateComponent,
    canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}},
  { path: 'booked-room-list', component: BookedRoomListComponent,
<<<<<<< HEAD
    canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}}
=======
    canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}},
  { path: 'booked-room-delete/:id', component: BookedRoomDeleteComponent,
    canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}},
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
];
