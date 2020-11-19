import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCreateQuantityComponent } from './asset-create-quantity.component';

describe('AssetCreateQuantityComponent', () => {
  let component: AssetCreateQuantityComponent;
  let fixture: ComponentFixture<AssetCreateQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetCreateQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetCreateQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
