import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//import { TrendingcomboComponent } from '../trendingcombo/trendingcombo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = [
    /*'imgicon',
    'idno',*/
    'name',
    'item',
    'value',
    'qty',
    'date',
    'status',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: UsersService,
    //private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getPreorderList();
  }

 /* trendingcomboList : Trendingcombo []=[];
  trendingservice:TrendingService = inject(TrendingService);


  //ordersummary details array-mock (transfered to users service)
  usersList : Users[] = [];
  filteredusersList: Users[] = [];
  usersservice:UsersService = inject(UsersService);

  //add/edit/delete popup  dialog function 
  constructor(/*private dialog:MatDialog){ 
  
  this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  ////
  }
  */

  getPreorderList() {
    this._empService.getPreorderList().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

    /////
      trendingcomboList : Trendingcombo[] = [];
      filteredcomboList  : Trendingcombo[] = [];
 // implementing filterresult event handler function to return the selected itemname
  filterResults(text: string) {
    if (!text) {
      this.filteredcomboList = this.trendingcomboList;
    }

    this.filteredcomboList = this.trendingcomboList.filter(
      trendingcombo =>  trendingcombo ?.comboname.toLowerCase().includes(text.toLowerCase())
    );
  }
  /////

  ////
  usersList : Users[] = [];
  filteredusersList: Users[] = [];
  //implementing filterresult event handler function to return the searched staff by department
  filterResultss(text: string) {
    if (!text) {
      this.filteredusersList = this.usersList;
    }
    this.filteredusersList = this.usersList.filter(users => users?.staffname.toLowerCase().includes(text.toLowerCase()));
  }
////



  
} 