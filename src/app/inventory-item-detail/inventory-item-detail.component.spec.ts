import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemDetailComponent } from './inventory-item-detail.component';

describe('ItemDetailComponent', () => {
  let component: InventoryItemDetailComponent;
  let fixture: ComponentFixture<InventoryItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
