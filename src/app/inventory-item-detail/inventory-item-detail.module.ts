import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InventoryItemDetailComponent } from './inventory-item-detail.component';
import { InventoryItemDetailGuard } from './inventory-item-detail.guard'

@NgModule({
  declarations: [
    InventoryItemDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'items/:id',
        canActivate: [InventoryItemDetailGuard],
        component: InventoryItemDetailComponent
      }
    ])
  ]
})
export class InventoryItemDetailModule { }