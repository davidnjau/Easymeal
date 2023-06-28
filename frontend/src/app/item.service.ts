import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' }
  ];
  private nextId = 4;

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  addItem(item: Item): Observable<void> {
    item.id = this.nextId++;
    this.items.push(item);
    return of(undefined);
  }

  deleteItem(itemId: number): Observable<void> {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
    return of(undefined);
  }
}