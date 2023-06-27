import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { OndutyComponent } from './onduty/onduty.component';
import { OffdutyComponent } from './offduty/offduty.component';
import { RouterModule, Routes } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';
//import {MatDialog, MatDialogConfig} from '@angular/material';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

  //combodishes summary details array-mock (transfered to trending service)
trendingcomboList : Trendingcombo []=[];
trendingservice:TrendingService = inject(TrendingService);



//ordersummary details array-mock (transfered to users service)
 usersList : Users[] = [];
 filteredusersList: Users[] = [];

 usersservice:UsersService = inject(UsersService);
 
 constructor(/*private dialog:MatDialog*/){  //popup  dialog function
  /*openDialog(){
    this.dialog.open(DialogBodyComponent,{
      width:"50%"
    })
  }*/

  this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  this.usersList = this.usersservice.getAllUsers();
}
 // implementing filterresult event handler function to return the searched staff by department
 filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
  }

  this.filteredusersList = this.usersList.filter(users => users?.department.toLowerCase().includes(text.toLowerCase()));
}
 

}
