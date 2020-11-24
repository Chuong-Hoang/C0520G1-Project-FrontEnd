import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomDeleteComponent } from './booked-room-delete.component';

describe('BookedRoomCancelComponent', () => {
  let component: BookedRoomDeleteComponent;
  let fixture: ComponentFixture<BookedRoomDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedRoomDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedRoomDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
