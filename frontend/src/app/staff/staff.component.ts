import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { OndutyComponent } from './onduty/onduty.component';
import { OffdutyComponent } from './offduty/offduty.component';
import { RouterModule, Routes } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { ItemComponent } from '../item/item.component'; 
import { ItemService } from '../item.service';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

  //combodishes summary details array-mock (transfered to trending service)
trendingcomboList : Trendingcombo []=[];
trendingservice:TrendingService = inject(TrendingService);

openDialog(){
  this.dialog.open(DialogBodyComponent,{
    width:"55%"
  })
}

//ordersummary details array-mock (transfered to users service)
 usersList : Users[] = [];
 filteredusersList: Users[] = [];
 usersservice:UsersService = inject(UsersService);

  //add/edit/delete popup  dialog function 
 constructor(private dialog:MatDialog){ 
  
  this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  this.usersList = this.usersservice.getAllUsers();
}
 // implementing filterresult event handler function to return the searched staff by department
 filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
  }

 // this.filteredusersList = this.usersList.filter(users => users?.department.toLowerCase().includes(text.toLowerCase()));
  this.filteredusersList = this.usersList.filter(users => users?.staffname.toLowerCase().includes(text.toLowerCase()));
}
}
