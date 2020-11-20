import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {StatisticRoomService} from '../service/statistic-room.service';
import {BookedRoom} from '../model/BookedRoom.class';

@Component({
  selector: 'app-view-statistic',
  templateUrl: './view-statistic.component.html',
  styleUrls: ['./view-statistic.component.css']
})

export class ViewStatisticComponent implements OnInit {
  public statisticByTime: FormGroup;
  public statisticByRoom: FormGroup;
  public startDate: string;
  public endDate: string;
  public bookedRoom: BookedRoom[] = [];
  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog,
              private statisticRoom: StatisticRoomService) {
  }



  ngOnInit(): void {
    this.statisticByTime = this.fb.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });

    this.statisticByRoom = this.fb.group({
      roomType: ['', [Validators.required]],
      roomName: ['', [Validators.required]],
      year: ['', [Validators.required]],
      month: ['', [Validators.required]]
    });
  }
  onSubmitByTime(): void {
    console.log(this.statisticByTime.value);
    if (this.statisticByTime.valid) {
      this.statisticRoom.findSearchByTime(this.startDate, this.endDate).subscribe(data => {
        this.bookedRoom = data;
      });
    }
  }

  onSubmitByRoom(): void {
    console.log(this.statisticByRoom.value);
  }
}
