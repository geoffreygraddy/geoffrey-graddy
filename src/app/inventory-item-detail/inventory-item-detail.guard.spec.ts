import { TestBed } from '@angular/core/testing';

import { InventoryItemDetailGuard } from './inventory-item-detail.guard';

describe('ItemDetailGuard', () => {
  let guard: InventoryItemDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InventoryItemDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
