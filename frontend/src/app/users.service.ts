import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/users';

  
  //service function to inject in components altered to //use asynchronous code to make a get request over HTTP
  async getAllUsers(): Promise<Users[]> {      
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

    async getUsersById(staffid:number): Promise<Users| undefined> {
      const data = await fetch(`${this.url}/${staffid}`);
      return await data.json() ?? {};
    }
/*
     async Remove(staffid:any) {
      //const data = await delete(this.url);
      //return await data.json() ?? {};
      return this.http.delete(`${this.url}/${staffid}`);
    }

    async Save(inputdata:any){
        //const data = await post(this.url);
        //return await data.json() ?? {};
        return this.http.post(this.url, inputdata)
        .pipe(
          tap(()=>{
        this.RequiredRefresh.next();
          })
        );
      }
      constructor( private http:HttpClient) {}

*/

      /*private _refreshrequired=new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }*/
/*
  getAllUsers(): Observable<Users> {
    return this.http.get<Users>(this.url);
  }
  GetEmployeebystaffid(staffid:any){
    return this.http.get(this.url+'/'+staffid);
  }
  Remove(staffname:any){
    return this.http.delete(this.url+'/'+staffname);
  }
  Save(inputdata:any){
    return this.http.post(this.url,inputdata).pipe(
      tap(()=>{
      this.RequiredRefresh.next();
      })
    );
  }
*/
}

