import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu_products } from './menu_products';

@Injectable({
  providedIn: 'root'
})
export class MenuProductsService {

  constructor(private _http: HttpClient) { }
  addcombomeal(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/menucombomeal', data);
  }
  addSinglemeal(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/singlemeals', data);
  }
  addBeverage(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/beveragess', data);
  }

  

  updatecombomeal(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/menucombomeal/${id}`, data);
  }
  updateSinglemeal(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/singlemeals/${id}`, data);
  }
  updateBeverage(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/beveragess/${id}`, data);
  }



  getcomboList(): Observable<any> {
    return this._http.get('http://localhost:3000/menucombomeal');
  }
  getSinglemealList(): Observable<any> {
    return this._http.get('http://localhost:3000/singlemeals');
  }
  getBeverageList(): Observable<any> {
    return this._http.get('http://localhost:3000/beveragess');
  }
  /*
  gettotalorders(): Observable<any> {
    return this._http.get('http://localhost:3000/trendingcombo');
  }*/



  deletecombomeal(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/menucombomeal/${id}`);
  }
  deleteSinglemeal(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/singlemeals/${id}`);
  }
  deleteBeverage(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/beveragess/${id}`);
  }


}
