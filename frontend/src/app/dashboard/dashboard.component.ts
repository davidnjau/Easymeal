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
    'itemName',
    'itemValue',
    'itemQuantity',
    'orderDate',
    'itemStatus',
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

  totals: number = 0;
  productcalc: number = 0;


  ngOnInit(): void {
    this.getLiveorderList();
    this.getTrendingcomboList();

    /* analytics */
    this.http.get<any[]>('http://localhost:3000/users').subscribe(data =>{
      console.log(data);
      const val = data.map(v => v.value);
      console.log("val",val);
      
      
      this.totals = this.calculateSum(data, 'qty');
      console.log("totals",this.totals);
    });

    this.http.get<any[]>('http://localhost:3000/users').subscribe(data =>{
      this.productcalc = this.calculateProduct(data, 'value', 'qty');
    });
  }
  calculateSum(data:any[], qty:string):number{
    console.log()
    return data.reduce((sum, item) => sum + item[qty], 0);
  }

  calculateProduct(data:any[], value:string, qty:string):number{
    return data.reduce((product, item) => product + item[value] * item[qty], 0);
  }

  /* end of analytics */
  

  getLiveorderList() {
    this._emService.getLiveorderList().subscribe({
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