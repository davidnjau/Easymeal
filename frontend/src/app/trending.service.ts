import { Injectable } from '@angular/core';
import { Trendingcombo } from './trendingcombo';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _http: HttpClient) {}


  addTrendingcombomeal(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/trendingcombo', data);
  }
  

  

  updateTrendingcombomeal(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/trendingcombo/${id}`, data);
  }
  


  getTrendingcomboList(): Observable<any> {
    return this._http.get('http://localhost:3000/trendingcombo');
  }
  
  /*
  gettotalorders(): Observable<any> {
    return this._http.get('http://localhost:3000/trendingcombo');
  }*/



  deleteTrendingcombomeal(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/trendingcombo/${id}`);
  }
 


  



url = 'http://localhost:3000/trendingcombo';



trendingcomboList : Trendingcombo[] = [];         //display all trendingcombos


getAllTrendingcombo(): Trendingcombo[] {
  return this.trendingcomboList;
}

getTrendingcomboById(id: number): Trendingcombo| undefined {
  return this.trendingcomboList.find(trendingcombo => trendingcombo.id === id);
}



}