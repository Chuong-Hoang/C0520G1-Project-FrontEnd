import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomCancelComponent } from './booked-room-cancel.component';

describe('BookedRoomCancelComponent', () => {
  let component: BookedRoomCancelComponent;
  let fixture: ComponentFixture<BookedRoomCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedRoomCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedRoomCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
