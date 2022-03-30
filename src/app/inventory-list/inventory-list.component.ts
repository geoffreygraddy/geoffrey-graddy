import { Component, OnDestroy, OnInit } from '@angular/core';

import { InventoryItem } from '../data/inventory-item';
import { DataService } from '../data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit, OnDestroy {

  errorMessage : string = '';
  pageTitle : string = 'Inventory List';
  filteredItems: InventoryItem[] = [];
  sub!: Subscription;
  items : InventoryItem[] = [];


  private _listFilter = '';
  get listFilter() : string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredItems = this.performFilter(value);
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sub = this.dataService.getInventory().subscribe({
      next: items => {
        this.items = items;
        this.filteredItems = this.items;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  performFilter(filterBy: string): InventoryItem[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((item: InventoryItem) =>
      item.name.toLocaleLowerCase().includes(filterBy));
  }

}
