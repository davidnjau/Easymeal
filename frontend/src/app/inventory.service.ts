import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private _http: HttpClient) {}

  

  //inventory calls;
  getInventoryList(): Observable<any> {
    return this._http.get('http://localhost:3000/inventoryitems');
  }
  updateInventory(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/inventoryitems/${id}`, data);
  }
  addInventory(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/inventoryitems', data);
  }
  deleteInventoryitem(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/inventoryitems/${id}`);
  }

}

