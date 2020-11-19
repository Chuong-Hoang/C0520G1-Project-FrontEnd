import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalResultsByRoomComponent } from './statistical-results-by-room.component';

describe('StatisticalResultsByRoomComponent', () => {
  let component: StatisticalResultsByRoomComponent;
  let fixture: ComponentFixture<StatisticalResultsByRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalResultsByRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalResultsByRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
