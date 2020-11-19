import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalResultsByTimeComponent } from './statistical-results-by-time.component';

describe('StatisticalResultsByTimeComponent', () => {
  let component: StatisticalResultsByTimeComponent;
  let fixture: ComponentFixture<StatisticalResultsByTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalResultsByTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalResultsByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
