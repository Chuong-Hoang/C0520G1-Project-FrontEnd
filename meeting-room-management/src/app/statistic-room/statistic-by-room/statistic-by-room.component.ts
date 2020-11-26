import { Component, OnInit } from '@angular/core';
import {BookedRoom} from '../model/BookedRoom.class';
import {StatisticRoomService} from '../service/statistic-room.service';
import {ExcelService} from '../service/excel.service';
import {Label as ng2Chart} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-statistic-by-room',
  templateUrl: './statistic-by-room.component.html',
  styleUrls: ['./statistic-by-room.component.css']
})
export class StatisticByRoomComponent implements OnInit {

  public bookedRoomByRoom: BookedRoom[] = [];
  // lấy khoảng thời gian từ service
  public startDate: string;
  public endDate: string;
  // biến phân trang
  public p: number;
  // biểu đồ
  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Biểu đồ thống kê số lần sử dụng',
      display: true,
      fontSize: 25,
    }
  };
  public barChartLabels: ng2Chart[] = [
    'Một lần',
    'Hàng tuần',
    'Hàng tháng',
    'Hàng ngày'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(136,59,255,0.84)',
      borderColor: 'rgb(255,236,18)',
    },
    {
      backgroundColor: 'rgba(219,186,144,0.84)',
      borderColor: 'rgb(80,83,117)',
    },
    {
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderColor: 'rgb(32,255,0)',
    }
  ];
  // export excel
  title = 'exportExcelInAngular';
  dataOfFootballers: any = [];

  constructor(private statisticRoom: StatisticRoomService,
              private excelService: ExcelService) {
  }

  ngOnInit(): void {
    this.bookedRoomByRoom = this.statisticRoom.bookedRoomByRoom;
    this.exportExcel(this.bookedRoomByRoom);
    this.dataChart(this.bookedRoomByRoom);
  }
  // export excel
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.dataOfFootballers, 'statistic_2020');
  }
  exportExcel(bookedRoom: BookedRoom[]): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < bookedRoom.length; i++) {
      this.dataOfFootballers.push(
        {
          stt: (i + 1),
          startDate: bookedRoom[i].startDate,
          endDate: bookedRoom[i].endDate,
          startTime: bookedRoom[i].startTime,
          endTime: bookedRoom[i].endTime,
          status: bookedRoom[i].bookedStatus,
          bookedDate: bookedRoom[i].bookedDate
        });
    }
  }
  // phần biểu đồ
  onChartClick(event): void {
    console.log(event);
  }
  dataChart(bookedRoomByTime: BookedRoom[]): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < bookedRoomByTime.length; i++) {
      this.barChartData.push({data: [2], label: bookedRoomByTime[i].roomName});
    }
  }

}
