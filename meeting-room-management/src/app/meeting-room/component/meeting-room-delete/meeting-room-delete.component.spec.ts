import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomDeleteComponent } from './meeting-room-delete.component';

describe('MeetingRoomDeleteComponent', () => {
  let component: MeetingRoomDeleteComponent;
  let fixture: ComponentFixture<MeetingRoomDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingRoomDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
