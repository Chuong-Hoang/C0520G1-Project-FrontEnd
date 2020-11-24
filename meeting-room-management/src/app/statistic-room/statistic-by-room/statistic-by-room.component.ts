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
      text: 'Biểu đồ thống kê hiệu suất các phòng',
      display: true,
      fontSize: 20,
    }
  };
  public barChartLabels: ng2Chart[] = [
    'Một lần',
    'Hàng ngày',
    'Hàng tuần',
    'Hàng tháng'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];
  public chartColors: Array<any> = [
    {
      // first color
      backgroundColor: 'rgba(61, 255, 36, 0.84)',
      borderColor: 'rgb(0,117,45)'
    },
    {
      // second color
      backgroundColor: 'rgba(219,194,0,0.84)',
      borderColor: 'rgba(14, 117, 0, 1)',
    },
    {
      backgroundColor: 'rgba(255, 162, 87, 0.8)',
      borderColor: 'rgba(163, 73, 0, 1)',
    },
    {
      backgroundColor: 'rgb(255,4,1)',
      borderColor: 'rgba(117, 53, 0, 1)',
    },
    {
      backgroundColor: 'rgba(255,232,10,0.78)',
      borderColor: 'rgba(59,57,219,0.86)',
    },
    {
      backgroundColor: 'rgb(32,255,0)',
      borderColor: 'rgba(60,60,60,0.86)',
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
    this.barChartData = [];
    this.dataChart(this.bookedRoomByRoom);
    this.exportExcel(this.bookedRoomByRoom);
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

  dataChart(arr: BookedRoom[]): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].roomType === 'Một lần') {
        this.barChartData.push({data: [arr[i].effective, 0, 0, 0], label: arr[i].roomName + ' sử dụng: ' + arr[i].totalUse + 'lần  '});
      }
      if (arr[i].roomType === 'Hàng ngày') {
        this.barChartData.push({data: [0, arr[i].effective, 0, 0], label: arr[i].roomName + ' sử dụng:' + arr[i].totalUse + 'lần  '});
      }
      if (arr[i].roomType === 'Hàng tuần') {
        this.barChartData.push({data: [0, 0, arr[i].effective, 0], label: arr[i].roomName + ' sử dụng: ' + arr[i].totalUse + 'lần  '});
      }
      if (arr[i].roomType === 'Hàng tháng') {
        this.barChartData.push({data: [0, 0, 0, arr[i].effective], label: arr[i].roomName + ' sử dụng: ' + arr[i].totalUse + 'lần  '});
      }
    }
  }

}
