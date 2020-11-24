import {Routes} from '@angular/router';
import {BookedRoomSearchComponent} from './component/booked-room-search/booked-room-search.component';
import {BookedRoomCreateComponent} from './component/booked-room-create/booked-room-create.component';
import {BookedRoomListComponent} from './component/booked-room-list/booked-room-list.component';
import {BookedRoomDeleteComponent} from './component/booked-room-delete/booked-room-delete.component';

export const bookingRoomRoute: Routes = [
  { path: 'search-available-room', component: BookedRoomSearchComponent},
  { path: 'book-room', component: BookedRoomCreateComponent},
  { path: 'book-room/:id', component: BookedRoomCreateComponent},
  { path: 'booked-room-list', component: BookedRoomListComponent},
  { path: 'booked-room-delete/:id', component: BookedRoomDeleteComponent}
];
