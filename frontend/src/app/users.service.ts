//contains the service for the customers and staff

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'http://localhost:3000/'
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.baseUrl + 'allEmployees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/allEmployees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/allEmployees');
  }
  getOnDutyEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/allEmployees');
  }
  getAllEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/allEmployees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/allEmployees/${id}`);
  }



  addOffdutyEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/allEmployees', data);
  }

  updateOffdutyEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/allEmployees/${id}`, data);
  }

  getOffdutyEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/allEmployees');
  }

  deleteOffdutyEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/allEmployees/${id}`);
  }


  getPreorderList(): Observable<any> {
    return this._http.get('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//orders/summary?search=xyz');
  }
  updatePreorder(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/details/${id}`, data);
  }
  deletePreorder(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/details/${id}`);
  }
  /*
  addPreorder(data: any): Observable<any> {molpp/land-registration/chief-land-registrar/applications/registration-of-plans/list
    return this._http.post('http://localhost:3000/details', data);
  }*/


  getLiveorderList(): Observable<any> {
   // return this._http.get(this.baseUrl + 'details');
   return this._http.get('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io//orders/summary?search=xyz');
  }
  updateLiveorder(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/details/${id}`, data);
  }
  deleteLiveorder(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/details/${id}`);
  }
  /*addLiveorder(data: any): Observable<any> {
    return this._http.post(this.baseUrl + 'details', data);
  }*/


  getTotalorders(): Observable<any> {
    return this._http.get('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io/stats/api/v1/get-stats?totalOrders=true&liveOrders=false&preOrders=true');
  }
  getTotalpreorders(): Observable<any> {
    return this._http.get('https://7a47fd5a-e15c-4758-ae4b-bccbfc86603f.mock.pstmn.io/stats/api/v1/get-stats?totalOrders=true&liveOrders=false&preOrders=true');
  }


  addLogindetails(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/logdetails', data);
  }
  updateLogindetails(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/logdetails/${id}`, data);
  }

  getLogindetails(): Observable<any> {
    return this._http.get('http://localhost:3000/logdetails');
  }



  
  /*
  url = 'http://localhost:3000/users';

  
  //service function to inject in components (other than staff for now)altered to //use asynchronous code to make a get request over HTTP
  async getAllUsers(): Promise<Users[]> {      
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

    async getUsersById(id:number): Promise<Users| undefined> {
      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? {};
    }*/
}





