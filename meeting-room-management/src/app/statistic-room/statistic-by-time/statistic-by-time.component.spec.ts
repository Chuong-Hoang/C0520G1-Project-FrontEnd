import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticByTimeComponent } from './statistic-by-time.component';

describe('StatisticByTimeComponent', () => {
  let component: StatisticByTimeComponent;
  let fixture: ComponentFixture<StatisticByTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticByTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
