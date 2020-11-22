import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDetailDialogChoiceComponent } from './assets-detail-dialog-choice.component';

describe('AssetsDetailDialogChoiceComponent', () => {
  let component: AssetsDetailDialogChoiceComponent;
  let fixture: ComponentFixture<AssetsDetailDialogChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDetailDialogChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsDetailDialogChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
