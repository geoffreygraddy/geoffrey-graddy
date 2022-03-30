import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { InventoryItemFormComponent } from './inventory-item-form.component';

@NgModule({
  declarations: [
    InventoryItemFormComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'add', component: InventoryItemFormComponent }])
  ]
})
export class InventoryItemFormModule { }