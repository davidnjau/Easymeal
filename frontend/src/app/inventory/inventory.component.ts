import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { Users } from '../users';
import { UsersService } from '../users.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { InventorydialogComponent } from './inventorydialog/inventorydialog.component';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  
  //combodishes summary details array-mock (transfered to trending service)
  trendingcomboList : Trendingcombo []=[];
  trendingservice:TrendingService = inject(TrendingService);

  openDialog(){                            //popup method
    this.dialog.open(InventorydialogComponent,{ 
      width:"45%"
    })
  }

  //ordersummary details array-mock (transfered to users service)
  usersList : Users[] = [];
  filteredusersList: Users[] = [];
  usersservice:UsersService = inject(UsersService);


  constructor(private dialog:MatDialog){ 
  
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