import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

import { InventoryItem } from './inventory-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private itemUrl = 'api/items/items.json';

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getInventory(): Observable<InventoryItem[]> {

    return this.http.get<InventoryItem[]>(this.itemUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
      
  }

  getItem(id: number): Observable<InventoryItem | undefined> {
    return this.getInventory()
      .pipe(
        map((products: InventoryItem[]) => products.find(p => p.inventoryId === id))
      );
  }

  getLocations(): Observable<string[]> {
    return of(['Living Room', 'Master Bedroom', 'Garage', 'Bedroom 2']);
  }

  postInventoryItem(inventoryItem: InventoryItem) : Observable<any> {
    return this.http.post('https://putsreq.com/m0ok4boUW9TMDzZ1PrFr', inventoryItem);
  }

}
