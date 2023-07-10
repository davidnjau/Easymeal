import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LivesummaryComponent } from '../liveorders/livesummary/livesummary.component';
import { UsersService } from '../users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { Users } from '../users'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liveorders',
  templateUrl: './liveorders.component.html',
  styleUrls: ['./liveorders.component.css']
})
export class LiveordersComponent implements OnInit{

  displayedColumns = [
    'imgicon',
    //'idno',
    'name',
    'item',
    'value',
    'qty',
    'date',
    'status',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: UsersService,
    private http:HttpClient
    //private _coreService: CoreService
  ) {}
  
////
    usersList : Users[] = [];
    filteredusersList: Users[] = [];
  //implementing filterresult event handler function to return the searched staff by department
 filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
  }
  this.filteredusersList = this.usersList.filter(users => users?.name.toLowerCase().includes(text.toLowerCase()));
}
////


//////analytics functions
totals: number = 0;
productcalc: number = 0;

  ngOnInit(): void {
    this.getLiveorderList();

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

/////end of analytics

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

  getLiveorderList() {
    this._empService.getLiveorderList().subscribe({
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ////


  deleteLiveorder(id: number) {
    this._empService.deleteLiveorder(id).subscribe({
      next: (res) => {
        //this._coreService.openSnackBar('Employee deleted!', 'done');
        Swal.fire("Employee deleted successfully!", 'success');
        this.getLiveorderList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(LivesummaryComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
     next: (val) => {
      console.log('val', val);
        if (val) {
          this.getLiveorderList();
        }
     },
    });
  }
   
}