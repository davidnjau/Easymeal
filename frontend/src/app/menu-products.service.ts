import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu_products } from './menu_products';
import { Beverages } from './beverage';
import { Singlemeals } from './singlemeal';

@Injectable({
  providedIn: 'root'
})
export class MenuProductsService {

  constructor(private _http: HttpClient) { }
  addcombomeal(data: any): Observable<any> {
    return this._http.post('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//menu/add-item', data);
  }
  addSinglemeal(data: any): Observable<any> {
    return this._http.post('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//menu/add-item', data);
  }
  addBeverage(data: any): Observable<any> {
    return this._http.post('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//menu/add-item', data);
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
    //return this._http.get('http://localhost:3000/detailss');
      return this._http.get('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//menus/get-category?page=1&limit=20');

  }
  getSinglemealList(): Observable<any> {
    return this._http.get('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//menus/get-category?page=1&limit=20');
  }
  getBeverageList(): Observable<any> {
    return this._http.get('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//menus/get-category?page=1&limit=20');
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



  getCategory(): Observable<any> {
    return this._http.get('http://localhost:3000/categories');
  }

  deleteCategory(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/categories/${id}`);
  }
    addCategory(data: any): Observable<any> {
      return this._http.post('http://localhost:3000/categories', data);
    }

  updateCategory(data: any): Observable<any> {
      return this._http.post('http://localhost:3000/categories', data);
    }
  
  
  }


