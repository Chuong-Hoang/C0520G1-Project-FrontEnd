import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewStatisticComponent} from './component/view-statistic/view-statistic.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {statisticRoomRoutes} from './statistic-room.routers';
import {MaterialModule} from './material.module';
import {ChartsModule} from 'ng2-charts';
import {DatePipe} from '@angular/common';
import {NoContentComponent} from './component/no-content/no-content.component';
import {StatisticByTimeComponent} from './component/statistic-by-time/statistic-by-time.component';
import {StatisticByRoomComponent} from './component/statistic-by-room/statistic-by-room.component';
import {ExcelService} from './service/excel.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  declarations: [ViewStatisticComponent,
    ViewStatisticComponent,
    NoContentComponent,
    StatisticByTimeComponent,
    StatisticByRoomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(statisticRoomRoutes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ChartsModule,
    NgxPaginationModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'vn' },
    DatePipe,
    ExcelService
  ]
})
export class StatisticRoomModule {
}
