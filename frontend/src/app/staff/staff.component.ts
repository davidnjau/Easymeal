import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { UsersService } from '../users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { Users } from '../users'; 
import { Staff } from '../staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  

  displayedColumns = [
    'imgicon',
    'staffname',
    'department',
    'position',
    'joined',
    'mobile',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: UsersService,
    //private _coreService: CoreService
  ) {}


  ////
    usersList : Staff[] = [];
    filteredusersList: Staff[] = [];
  //implementing filterresult event handler function to return the searched staff by department
 filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
  }
  this.filteredusersList = this.usersList.filter(users => users?.staffname.toLowerCase().includes(text.toLowerCase()));
}
////


  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(DialogBodyComponent,{width:"60%", height:"80%"});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        //console.log(res.staffonduty+res.staffoffduty);
        
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  ////
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ////


  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        //this._coreService.openSnackBar('Employee deleted!', 'done');
        Swal.fire("Employee deleted successfully!", 'success');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(DialogBodyComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
     next: (val) => {
      console.log('val', val);
        if (val) {
          this.getEmployeeList();
        }
     },
    });
  }
}













/*
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

 //add staff popup dialog function 
openDialog(){
  this.dialog.open(DialogBodyComponent,{
    width:"55%"
  })
}

//ordersummary details array-mock (transfered to users service)
 usersList : Users[] = [];
 filteredusersList: Users[] = [];
 usersservice:UsersService = inject(UsersService);

 
 constructor(private dialog:MatDialog){ 
  
  this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  
  
    this.usersservice.getAllUsers().then((usersList: Users[]) => {    //method to get from json file
        this.usersList = this.usersList;
        this.filteredusersList = usersList;
    });
    }
 // implementing filterresult event handler function to return the searched staff by department
 filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
  }

 // this.filteredusersList = this.usersList.filter(users => users?.id.toLowerCase().includes(text.toLowerCase()));
  this.filteredusersList = this.usersList.filter(users => users?.staffname.toLowerCase().includes(text.toLowerCase()));
}
}
*/

