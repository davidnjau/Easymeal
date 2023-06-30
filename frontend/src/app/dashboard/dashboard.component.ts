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


  //ordersummary details array-mock (transfered to users service)
  usersList : Users[] = [];
  filteredusersList: Users[] = [];
  usersservice:UsersService = inject(UsersService);

  //add/edit/delete popup  dialog function 
  constructor(/*private dialog:MatDialog*/){ 
  
  this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  ////

  this.usersservice.getAllUsers().then((usersList: Users[]) => {
      this.usersList = this.usersList;
      this.filteredusersList = usersList;
  });
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