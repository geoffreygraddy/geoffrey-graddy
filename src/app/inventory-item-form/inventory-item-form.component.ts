import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataService } from '../data/data.service';
import { InventoryItem } from '../data/inventory-item';

@Component({
  selector: 'inventory-item-form',
  templateUrl: './inventory-item-form.component.html',
  styleUrls: ['./inventory-item-form.component.css']
})
export class InventoryItemFormComponent implements OnInit {

  originalInventoryItem: InventoryItem = {
    name: '',
    inventoryId: 11,
    location: '',
    serialNumber: '',
    amountPaid: 0,
    datePurchased: new Date(),
    notes: '',
    isFlagged: false,
    isArchived: false
  };

  inventoryItem: InventoryItem = { ... this.originalInventoryItem };
  postError = false;
  postErrorMessage = '';
  locations!: Observable<string[]>;
  singleModel = 'Active';
  purchasedDate!: Date;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.locations = this.dataService.getLocations();
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);

    if (form.valid) {
      this.dataService.postInventoryItem(this.inventoryItem).subscribe(
        {
          next: (result) => console.log('success: ', result),
          error: (e) => this.onHttpError(e)
        });
    } else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    }
  }

}
