import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStatisticComponent } from './view-statistic/view-statistic.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {statisticRoomRoutes} from './statistic-room.routers';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [ViewStatisticComponent, ViewStatisticComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(statisticRoomRoutes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class StatisticRoomModule { }
