import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data/data.service';
import { InventoryItem } from '../data/inventory-item';

@Component({
  selector: 'inventory-item-detail',
  templateUrl: './inventory-item-detail.component.html',
  styleUrls: ['./inventory-item-detail.component.css']
})
export class InventoryItemDetailComponent implements OnInit {

  pageTitle = 'Item Detail';
  errorMessage = '';
  item: InventoryItem | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getItem(id);
    }
  }

  getItem(id: number): void {
    this.dataService.getItem(id).subscribe({
      next: item => this.item = item,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/items']);
  }

}
