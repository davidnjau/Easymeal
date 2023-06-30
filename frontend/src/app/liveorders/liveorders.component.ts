import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { RestComponent } from '../rest/rest.component';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-liveorders',
  templateUrl: './liveorders.component.html',
  styleUrls: ['./liveorders.component.css']
})
export class LiveordersComponent {

  
  //combodishes summary details array-mock (transfered to trending service)
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