import {Routes} from '@angular/router';
import {ViewStatisticComponent} from './component/view-statistic/view-statistic.component';
import {AuthGuard} from '../office-common/helper/auth.guard';

export const statisticRoomRoutes: Routes = [
  { path: 'statistic',
    component: ViewStatisticComponent,
    // canActivate: [AuthGuard],
    // data: {roles: ['ROLE_ADMIN']}
  }
];
