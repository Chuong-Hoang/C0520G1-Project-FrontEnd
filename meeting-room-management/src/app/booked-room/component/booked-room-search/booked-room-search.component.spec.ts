import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomSearchComponent } from './booked-room-search.component';

describe('BookedRoomSearchComponent', () => {
  let component: BookedRoomSearchComponent;
  let fixture: ComponentFixture<BookedRoomSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedRoomSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedRoomSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
