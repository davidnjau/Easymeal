//contains the service for the customers and staff

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/staffonduty', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/staffonduty/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/staffonduty');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/staffonduty/${id}`);
  }



  addOffdutyEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/staffoffduty', data);
  }

  updateOffdutyEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/staffoffduty/${id}`, data);
  }

  getOffdutyEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/staffoffduty');
  }

  deleteOffdutyEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/staffoffduty/${id}`);
  }




  getPreorderList(): Observable<any> {
    return this._http.get('http://localhost:3000/customers');
  }
  updatePreorder(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/customers/${id}`, data);
  }
  deletePreorder(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/customers/${id}`);
  }
  addPreorder(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/customers', data);
  }


  

  getLiveorderList(): Observable<any> {
    return this._http.get('http://localhost:3000/live');
  }
  updateLiveorder(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/live/${id}`, data);
  }
  deleteLiveorder(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/live/${id}`);
  }
  addLiveorder(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/live', data);
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





