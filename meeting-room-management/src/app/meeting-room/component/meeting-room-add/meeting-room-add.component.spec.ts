import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomAddComponent } from './meeting-room-add.component';

describe('MeetingRoomAddComponent', () => {
  let component: MeetingRoomAddComponent;
  let fixture: ComponentFixture<MeetingRoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingRoomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
