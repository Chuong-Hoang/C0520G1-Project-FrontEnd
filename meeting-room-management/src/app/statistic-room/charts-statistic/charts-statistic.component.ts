import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Label as ng2Chart } from 'ng2-charts';


@Component({
  selector: 'app-charts-statistic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './charts-statistic.component.html',
  styleUrls: ['./charts-statistic.component.css']
})
export class ChartsStatisticComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Biểu đồ thống kê hiệu suất sử dụng',
      display: true,
      fontSize: 40,
    }
  };
  public barChartLabels: ng2Chart[] = [
    'Khu vực A',
    'Khu vực B',
    'Khu vực C',
    'Khu vực D',
    'Khu vực E',
    'Khu vực F'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Phòng A1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Phòng B1' },
    { data: [34, 38, 40, 19, 5, 27, 7], label: 'Phòng C1' }
  ];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(61, 255, 36, 0.84)',
      borderColor: 'rgb(255,236,18)',
    },
    {
      backgroundColor: 'rgba(59,57,219,0.84)',
      borderColor: 'rgba(14, 117, 0, 1)',
    },
    {
      backgroundColor: 'rgba(255,44,0,0.8)',
      borderColor: 'rgb(255,44,0)',
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }
  onChartClick(event): void {
    console.log(event);
  }


}
