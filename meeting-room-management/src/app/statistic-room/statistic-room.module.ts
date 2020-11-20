import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStatisticComponent } from './view-statistic/view-statistic.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {statisticRoomRoutes} from './statistic-room.routers';
import {MaterialModule} from './material.module';
import { ChartsStatisticComponent } from './charts-statistic/charts-statistic.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ViewStatisticComponent, ViewStatisticComponent, ChartsStatisticComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(statisticRoomRoutes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ChartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class StatisticRoomModule { }
