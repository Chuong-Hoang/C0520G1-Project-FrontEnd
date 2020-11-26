import {Component, OnInit} from '@angular/core';
import {BookedRoom} from '../model/BookedRoom.class';
import {StatisticRoomService} from '../service/statistic-room.service';
import {ExcelService} from '../service/excel.service';
import {Label as ng2Chart} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-statistic-by-time',
  templateUrl: './statistic-by-time.component.html',
  styleUrls: ['./statistic-by-time.component.css']
})


export class StatisticByTimeComponent implements OnInit {
  public bookedRoomByTime: BookedRoom[] = [];
  // lấy khoảng thời gian từ service
  public startDate: string;
  public endDate: string;
  // phân trang
  public p: number;
  // biểu đồ
  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Biểu đồ thống kê số lần sử dụng',
      display: true,
      fontSize: 20,
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
    this.bookedRoomByTime = this.statisticRoom.bookedRoomByTime;
    console.log(this.bookedRoomByTime);
    this.startDate = this.statisticRoom.startDate;
    this.endDate = this.statisticRoom.endDate;
    this.barChartData = [];
    this.dataChart(this.bookedRoomByTime);
    this.exportExcel(this.bookedRoomByTime);
  }

  // export excel
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.dataOfFootballers, 'statistic_2020');
  }

  exportExcel(bookedRoomByTime: BookedRoom[]): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < bookedRoomByTime.length; i++) {
      this.dataOfFootballers.push(
        {
          stt: (i + 1),
          startDate: bookedRoomByTime[i].startDate,
          endDate: bookedRoomByTime[i].endDate,
          startTime: bookedRoomByTime[i].startTime,
          endTime: bookedRoomByTime[i].endTime,
          status: bookedRoomByTime[i].bookedStatus,
          bookedDate: bookedRoomByTime[i].bookedDate
        });
    }
  }

  // biểu đồ
  onChartClick(event): void {
    console.log(event);
  }

  dataChart(arr: BookedRoom[]): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      this.barChartData.push({
        data: [arr[i].effective , arr[i].totalUse],
        label: 'Sử dụng: ' + arr[i].totalUse + 'Lần'
      });
    }
  }
}
