import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MenuProductsService } from '../menu-products.service';

//import { TrendingcomboComponent } from '../trendingcombo/trendingcombo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = [
     'imgicon',
    //'idno',
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
    private _emService: UsersService,
    private _empService: TrendingService,
    private http:HttpClient,
    //private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getPreorderList();

    this.getTrendingcomboList();
  }

  getPreorderList() {
    this._emService.getPreorderList().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

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



tc: any = [];

getTrendingcomboList(): void {
  this._empService.getTrendingcomboList().subscribe(res => {
      this.tc= res;
      console.log(res);
      
    });
  }



  
} 