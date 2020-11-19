import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomListComponent } from './booked-room-list.component';

describe('BookedRoomListComponent', () => {
  let component: BookedRoomListComponent;
  let fixture: ComponentFixture<BookedRoomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedRoomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
