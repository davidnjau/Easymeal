import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/users', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/users/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/users');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/users/${id}`);
  }

  //inventory calls;
  getInventoryList(): Observable<any> {
    return this._http.get('http://localhost:3000/users');
  }
  updateInventory(itemid: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/users/${itemid}`, data);
  }
  addInventory(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/users', data);
  }

  
  ////
  url = 'http://localhost:3000/users';

  
  //service function to inject in components (other than staff for now)altered to //use asynchronous code to make a get request over HTTP
  async getAllUsers(): Promise<Users[]> {      
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

    async getUsersById(id:number): Promise<Users| undefined> {
      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? {};
    }
}





