import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InventoryItem } from './inventory-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<string[]> {
    return of(['Living Room', 'Master Bedroom', 'Garage', 'Bedroom 2']);
  }

  postInventoryItem(inventoryItem: InventoryItem) : Observable<any> {
    //return of(inventoryItem);
    return this.http.post('https://putsreq.com/m0ok4boUW9TMDzZ1PrFr', inventoryItem);
  }

}
