import { Component, inject } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { Users } from '../users';
import { UsersService } from '../users.service';

//import { TrendingcomboComponent } from '../trendingcombo/trendingcombo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  trendingcomboList : Trendingcombo []=[];
  trendingservice:TrendingService = inject(TrendingService);
  filteredusersList: Users[] = [];




  //ordersummary details array-mock (transfered to users.ts service)
   usersList : Users[] = [];
   usersservice:UsersService = inject(UsersService);

  constructor(){
    this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
    this.usersList = this.usersservice.getAllUsers();
  }


 // implementing filterresult event handler function to return the selected itemname
  filterResults(text: string) {
    if (!text) {
      this.filteredusersList = this.usersList;
    }

    this.filteredusersList = this.usersList.filter(
      users => users?.item.toLowerCase().includes(text.toLowerCase())
    );
  }


  
} 