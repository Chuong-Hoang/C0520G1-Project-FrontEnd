import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {StatisticRoomService} from '../../service/statistic-room.service';
import {BookedRoom} from '../../model/booked-room.class';
import {RoomType} from '../../model/room-type.class';
import {NoContentComponent} from '../no-content/no-content.component';
import {StatisticByTimeComponent} from '../statistic-by-time/statistic-by-time.component';
import {StatisticByRoomComponent} from '../statistic-by-room/statistic-by-room.component';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label as ng2Chart} from 'ng2-charts/lib/base-chart.directive';
import {BookedChart} from '../../model/booked-chart.class';


@Component({
  selector: 'app-view-statistic',
  templateUrl: './view-statistic.component.html',
  styleUrls: ['./view-statistic.component.css']
})

export class ViewStatisticComponent implements OnInit {
  public statisticByTime: FormGroup;
  public statisticByRoom: FormGroup;
  public bookedRoomByTime: BookedRoom[] = [];
  public bookedRoomByRoom: BookedRoom[] = [];
  public bookedRoomYear: BookedChart[] = [];
  public roomType: RoomType[] = [];
  public roomNames: string[] = [];
  public messageError;
  public messageErrorYear = '';
  public loading = true;
  public loading1 = true;
  public start = '2020';
  public end = '2020';
  public maxDate = new Date();
  public minDate = new Date(2000, 0, 1);
  // biểu đồ
  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Biểu đồ thống kê hiệu suất sử dụng',
      display: true,
      fontSize: 20
    }
  };
  public barChartLabels: ng2Chart[] = [
    'Tháng 01',
    'Tháng 02',
    'Tháng 03',
    'Tháng 04',
    'Tháng 05',
    'Tháng 06',
    'Tháng 07',
    'Tháng 08',
    'Tháng 09',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0.46)',
      borderColor: 'rgba(14, 117, 0, 1)',
    },
    {
      backgroundColor: 'rgba(65,131,219,0.84)',
      borderColor: 'rgba(14, 117, 0, 1)',
    },
    {
      backgroundColor: 'rgba(255, 162, 87, 0.8)',
      borderColor: 'rgba(163, 73, 0, 1)',
    }
  ];

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog,
              private statisticRoom: StatisticRoomService) {
  }


  ngOnInit(): void {
    this.loading = true;
    this.loading1 = true;
    console.log('thống kê theo thời gian');
    this.bookedRoomByTime = [];
    this.statisticByTime = this.fb.group({
      dateGroup: this.fb.group({
        startIn: ['', Validators.required],
        startOut: ['', Validators.required],
      }, {validators: diffDate}),
    });
    console.log('thống kê theo phòng');
    this.statisticByRoom = this.fb.group({
      roomType: [''],
      roomName: [''],
      year: [''],
      month: ['']
    });
    console.log('lấy ra danh sách  loại phòng');
    this.statisticRoom.getAllRoomType().subscribe(data => {
      this.roomType = data;
      this.statisticRoom.roomTypeList = this.roomType;
      console.log(data);
    });
    console.log('lấy ra tất cả các tên phòng');
    this.statisticRoom.getAllRoomName().subscribe(data => {
      this.roomNames = data;
      this.statisticRoom.roomNameList = this.roomNames;
      console.log(data);
    });
    this.statisticRoom.getAllBookedChart(this.start, this.end).subscribe(data => {
      console.log(data);
      this.bookedRoomYear = data;
      console.log('hai1');
      console.log(data);
      console.log(this.bookedRoomYear);
      console.log('hai1');
    }, error => {
      console.log('test');
    }, () => {
      this.barChartData = [];
      this.dataChart(this.bookedRoomYear);
      console.log(this.barChartData);
      console.log(this.bookedRoomYear);
      console.log('test100');
    });
  }

  openDialogNoContent(): void {
    this.statisticRoom.getAllRoomType().subscribe(data => {
      const dialogRef = this.dialog.open(NoContentComponent, {
        width: '500px',
        data: {data1: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  openDialogByTime(): void {
    this.loading = true;
    this.statisticRoom.getAllRoomType().subscribe(data => {
      const dialogRef = this.dialog.open(StatisticByTimeComponent, {
        width: '1000px',
        data: {data1: this.bookedRoomByTime},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  openDialogByRoom(): void {
    this.loading1 = true;
    this.statisticRoom.getAllRoomType().subscribe(data => {
      const dialogRef = this.dialog.open(StatisticByRoomComponent, {
        width: '1000px',
        data: {data1: this.bookedRoomByRoom},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  onSubmitByTime(): void {
    console.log(this.statisticByTime.value);
    this.bookedRoomByTime = [];
    this.loading = false;
    if (this.statisticByTime.valid) {
      // tslint:disable-next-line:max-line-length
      this.statisticRoom.findSearchByTime(this.statisticByTime.value.dateGroup.startIn, this.statisticByTime.value.dateGroup.startOut).subscribe(data => {
          this.statisticRoom.bookedRoomByTime = data;
          this.statisticRoom.startDate = this.statisticByTime.value.dateGroup.startIn;
          this.statisticRoom.endDate = this.statisticByTime.value.dateGroup.startOut;
          if (data == null) {
            this.loading = true;
            this.loading1 = true;
            this.openDialogNoContent();
          } else {
            this.loading = true;
            this.loading1 = true;
            this.openDialogByTime();
          }
          console.log(data);
        }
      );
    }
  }

  onSubmitByRoom(): void {
    this.messageError = '';
    this.bookedRoomByRoom = [];
    // tslint:disable-next-line:max-line-length
    if (this.statisticByRoom.value.roomType === '' && this.statisticByRoom.value.roomName === '' && this.statisticByRoom.value.month === '' && this.statisticByRoom.value.year === '') {
      this.messageError = 'vui lòng chọn ít nhất 1 trường !!';
    } else {
      this.loading1 = false;
      this.messageError = '';
      this.statisticRoom.roomName1 = this.statisticByRoom.value.roomName;
      this.statisticRoom.findSearchByRoom(this.statisticByRoom.value.roomType, this.statisticByRoom.value.roomName
        , this.statisticByRoom.value.month, this.statisticByRoom.value.year).subscribe(data => {
          this.statisticRoom.bookedRoomByRoom = data;
          this.statisticRoom.roomType = this.statisticByRoom.value.roomType;
          this.statisticRoom.month = this.statisticByRoom.value.month;
          this.statisticRoom.year = this.statisticByRoom.value.year;
          this.statisticRoom.roomName = this.statisticByRoom.value.roomName;
          if (data == null) {
            this.loading = true;
            this.loading1 = true;
            this.openDialogNoContent();
          } else {
            this.loading = true;
            this.loading1 = true;
            this.openDialogByRoom();
          }
          console.log(data);
        }
      );
    }
  }

  // biểu đồ
  onChartClick(event): void {
    console.log(event);
  }

  dataChart(arr: BookedChart[]): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      this.barChartData.push({
        data: [arr[i].effectiveMonth1, arr[i].effectiveMonth2, arr[i].effectiveMonth3,
          arr[i].effectiveMonth4, arr[i].effectiveMonth5, arr[i].effectiveMonth6, arr[i].effectiveMonth7, arr[i].effectiveMonth8,
          arr[i].effectiveMonth9, arr[i].effectiveMonth10, arr[i].effectiveMonth11, arr[i].effectiveMonth12], label: arr[i].year
      });
    }
  }

  chartYear(): void {
    if ( this.start > this.end){
      this.messageErrorYear = 'Năm không hợp lệ !';
    }
    this.ngOnInit();
  }
}

export function diffDate(c: AbstractControl): any {
  const c1 = c.value;
  const sDate = Date.parse(c1.startIn);
  const eDate = Date.parse(c1.startOut);
  return (eDate >= sDate) ? null : {
    invalidDateNotMatch: true
  };
}
