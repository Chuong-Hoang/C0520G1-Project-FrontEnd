import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHandleComponent } from './comment-handle.component';

describe('CommentHandleComponent', () => {
  let component: CommentHandleComponent;
  let fixture: ComponentFixture<CommentHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentHandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
