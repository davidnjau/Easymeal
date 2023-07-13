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
    this.getTotalorders();
  }

  

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

  totalOrders:any=[];

  getTotalorders(): void {
    this._emService.getTotalorders().subscribe(res => {
        this.totalOrders= res;
        console.log(res);
      });
    }
 
   /* 
    // analytics (Was actual totals from the orders in live, their prices and totalearnings)
    this.http.get<any[]>('http://localhost:3000/details').subscribe(data =>{
      console.log(data);
      const val = data.map(v => v.value);
      console.log("val",val);
      
      
      this.totals = this.calculateSum(data, 'itemQuantity');
      console.log("totals",this.totals);
    });

    this.http.get<any[]>('http://localhost:3000/details').subscribe(data =>{
      this.productcalc = this.calculateProduct(data, 'itemValue', 'itemQuantity');
    });
  }
  calculateSum(data:any[], itemQuantity:string):number{
    console.log()
    return data.reduce((sum, item) => sum + item[itemQuantity], 0);
  }

  calculateProduct(data:any[], itemValue:string, itemQuantity:string):number{
    return data.reduce((product, item) => product + item[itemValue] * item[itemQuantity], 0);
  }

  // end of analytics 
  */
  
} 