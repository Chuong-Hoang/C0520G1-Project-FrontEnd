import {Component, OnInit} from '@angular/core';
import {BookedRoom} from '../../model/booked-room.class';
import {StatisticRoomService} from '../../service/statistic-room.service';
import {ExcelService} from '../../service/excel.service';
import {Label as ng2Chart} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-statistic-by-room',
  templateUrl: './statistic-by-room.component.html',
  styleUrls: ['./statistic-by-room.component.css']
})
export class StatisticByRoomComponent implements OnInit {
  public effectiveAll = 0;
  public roomName = '';
  public bookedRoomByRoom: BookedRoom[] = [];
  public roomNameList: string[] = [];
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
    this.barChartData = [];
    this.exportExcel(this.bookedRoomByRoom);
    this.totalPerformance(this.bookedRoomByRoom);
    this.roomName = this.statisticRoom.roomName1;
    this.roomNameList = this.statisticRoom.roomNameList;
    this.dataChart();
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

  dataChart(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.roomNameList.length; i++) {
      this.effectiveByRoom(this.roomNameList[i], this.bookedRoomByRoom);
    }
  }

  effectiveByRoom(roomName: string, arr: BookedRoom[]): void {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].roomType === 'Một lần' && roomName === arr[i].roomName && count1 < 1) {
        count1++;
        this.barChartData.push({data: [this.totalEffectiveByRoom(arr[i].roomName) , 0, 0, 0], label: arr[i].roomName});
      }
      if (arr[i].roomType === 'Hàng ngày' && roomName === arr[i].roomName && count2 < 1) {
        count2++;
        this.barChartData.push({data: [0, this.totalEffectiveByRoom(arr[i].roomName) , 0, 0], label: arr[i].roomName});
      }
      if (arr[i].roomType === 'Hàng tuần' && roomName === arr[i].roomName && count3 < 1) {
        count3++;
        this.barChartData.push({data: [0, 0, this.totalEffectiveByRoom(arr[i].roomName) , 0], label: arr[i].roomName});
      }
      if (arr[i].roomType === 'Hàng tháng' && roomName === arr[i].roomName && count4 < 1) {
        count4++;
        this.barChartData.push({data: [0, 0, 0, this.totalEffectiveByRoom(arr[i].roomName) ], label: arr[i].roomName});
      }
    }
  }

  totalEffectiveByRoom(roomName: string): number {
    let effective = 0;
    let count = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.bookedRoomByRoom.length; i++) {
      if ( roomName === this.bookedRoomByRoom[i].roomName){
        count++;
        effective += this.bookedRoomByRoom[i].effective;
      }
    }
    return (effective / count );
  }

  totalPerformance(arr: BookedRoom[]): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      this.effectiveAll += arr[i].effective;
    }
    this.effectiveAll = Math.round((this.effectiveAll) / arr.length);
  }
}

