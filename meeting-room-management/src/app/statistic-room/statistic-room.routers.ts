import {Routes} from '@angular/router';
import {ViewStatisticComponent} from './view-statistic/view-statistic.component';
import {StatisticalResultsByRoomComponent} from './statistical-results-by-room/statistical-results-by-room.component';

export const statisticRoomRoutes: Routes = [
  { path: 'statistic',
    component: ViewStatisticComponent}
];
