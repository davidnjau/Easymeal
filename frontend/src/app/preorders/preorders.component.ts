import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PresummaryComponent } from './presummary/presummary.component';
import { UsersService } from '../users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { Users } from '../users'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-preorders',
  templateUrl: './preorders.component.html',
  styleUrls: ['./preorders.component.css']
})
export class PreordersComponent implements OnInit {
  displayedColumns = [
    'imgicon',
    //'idno',
    'name',
    'itemName',
    'itemValue',
    'itemQuantity',
    'orderDate',
    'itemStatus',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: UsersService,
    private http:HttpClient,
    //private _coreService: CoreService
  ) {}




  ngOnInit(): void {
    this.getPreorderList();
    this.getTotalpreorders(); 
  }

  totalPreorders:any=[];

  getTotalpreorders(): void {
    this._empService.getTotalpreorders().subscribe(res => {
        this.totalPreorders= res;
        console.log(res);
      });
    }
  


usersList: Users[] = [];
filteredusersList: Users[] = [];
  //implementing filterresult event handler function to return the searched staff by department
 filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
    }
    this.filteredusersList = this.usersList.filter(users => users?.name.toLowerCase().includes(text.toLowerCase()));
  }
////


  /*openAddEditPreordersForm() {
    const dialogRef = this._dialog.open(LivesummaryComponent,{width:"60%", height:"80%"});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
          this.getEmployeeList();
        }
      },
    });
  }*/

  getPreorderList() {
    this._empService.getPreorderList().subscribe({
      next: (res) => {
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


  deletepreorder(id: number) {
    this._empService.deletePreorder(id).subscribe({
      next: (res) => {
        //this._coreService.openSnackBar('Employee deleted!', 'done');
        Swal.fire("Employee deleted successfully!", 'success');
        this.getPreorderList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(PresummaryComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
     next: (val) => {
      console.log('val', val);
        if (val) {
          this.getPreorderList();
        }
     },
    });
  }


  /*
//////analytics functions
totals: number = 0;
productcalc: number = 0;
/*
    this.http.get<any[]>('http://localhost:3000/details').subscribe(data =>{
      console.log(data);
      const val = data.map(v => v.itemValue);
      console.log("val",val);
      
      this.totals = this.calculateSum(data, 'itemQuantity');
      console.log("totals",this.totals);
      
    });

    this.http.get<any[]>('http://localhost:3000/details').subscribe(data =>{
      this.productcalc = this.calculateProduct(data, 'itemValue', 'itemQuantity');
    });
  }
//sum
  calculateSum(data:any[], itemValue:string):number{
    return data.reduce((sum, item) => sum + item[itemValue], 0);
  }

//product-sum
  calculateProduct(data:any[], itemValue:string, itemQuantity:string):number{
    return data.reduce((product, item) => product + item[itemValue] * item[itemQuantity], 0);
  }

/////end of analytics
*/

}
