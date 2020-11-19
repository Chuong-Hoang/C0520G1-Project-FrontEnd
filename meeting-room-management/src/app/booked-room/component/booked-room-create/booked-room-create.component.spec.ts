import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomCreateComponent } from './booked-room-create.component';

describe('BookedRoomCreateComponent', () => {
  let component: BookedRoomCreateComponent;
  let fixture: ComponentFixture<BookedRoomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedRoomCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedRoomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
