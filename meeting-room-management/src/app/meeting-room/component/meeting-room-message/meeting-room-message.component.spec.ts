import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomMessageComponent } from './meeting-room-message.component';

describe('MeetingRoomMessageComponent', () => {
  let component: MeetingRoomMessageComponent;
  let fixture: ComponentFixture<MeetingRoomMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingRoomMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
