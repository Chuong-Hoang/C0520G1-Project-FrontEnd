import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticByRoomComponent } from './statistic-by-room.component';

describe('StatisticByRoomComponent', () => {
  let component: StatisticByRoomComponent;
  let fixture: ComponentFixture<StatisticByRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticByRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticByRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
