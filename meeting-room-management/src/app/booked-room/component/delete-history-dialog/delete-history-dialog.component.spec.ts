import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHistoryDialogComponent } from './delete-history-dialog.component';

describe('DeleteHistoryDialogComponent', () => {
  let component: DeleteHistoryDialogComponent;
  let fixture: ComponentFixture<DeleteHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHistoryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
