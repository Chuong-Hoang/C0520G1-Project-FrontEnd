import {Routes} from '@angular/router';
<<<<<<< HEAD
import {ViewStatisticComponent} from './component/view-statistic/view-statistic.component';
=======
import {ViewStatisticComponent} from './view-statistic/view-statistic.component';
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
import {AuthGuard} from '../office-common/helper/auth.guard';

export const statisticRoomRoutes: Routes = [
  { path: 'statistic',
    component: ViewStatisticComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  }
];
