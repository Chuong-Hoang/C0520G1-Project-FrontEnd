import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomDetailComponent } from './meeting-room-detail.component';

describe('MeetingRoomDetailComponent', () => {
  let component: MeetingRoomDetailComponent;
  let fixture: ComponentFixture<MeetingRoomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingRoomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
