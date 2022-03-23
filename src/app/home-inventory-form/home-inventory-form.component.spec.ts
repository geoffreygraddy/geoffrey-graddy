import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInventoryFormComponent } from './home-inventory-form.component';

describe('HomeInventoryFormComponent', () => {
  let component: HomeInventoryFormComponent;
  let fixture: ComponentFixture<HomeInventoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInventoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInventoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
