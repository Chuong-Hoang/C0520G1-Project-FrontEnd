import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-statistic',
  templateUrl: './view-statistic.component.html',
  styleUrls: ['./view-statistic.component.css']
})

export class ViewStatisticComponent implements OnInit {
  public cssClass: string = 'e-custom-style';
  public statisticByTime: FormGroup;
  public statisticByRoom: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
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
  onSubmit(): void {
    console.log(this.statisticByTime.value);
  }

  onSubmitByRoom(): void {
    console.log(this.statisticByRoom.value);
  }
}
