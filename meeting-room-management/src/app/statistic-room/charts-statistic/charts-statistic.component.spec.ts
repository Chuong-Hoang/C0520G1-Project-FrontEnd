import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsStatisticComponent } from './charts-statistic.component';

describe('ChartsStatisticComponent', () => {
  let component: ChartsStatisticComponent;
  let fixture: ComponentFixture<ChartsStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
