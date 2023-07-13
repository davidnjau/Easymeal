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
    this.getTotalorders();
  }

  /*
    this.http.get<any[]>('http://localhost:3000/details').subscribe(data =>{
      console.log(data);
      const val = data.map(v => v.itemValue);
      console.log("values",val);
      
      
      this.totals = this.calculateSum(data, 'itemQuantity');
      console.log("totals",this.totals.toFixed(3));
      

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



/////end of analytics
*/

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
  totalRejected=0; ///error to correct in rejected orders calc

  getLiveorderList() {
    this._empService.getLiveorderList().subscribe({
      next: (res) => {

        let rejected: any ;
        rejected=res.details.filter((item) => item.itemStatus==="Cancelled");
        console.log('these have been rejected: ', rejected);

        this.totalRejected = this.calculateSum(rejected, 'itemQuantity');
        console.log("totalRejected",this.totalRejected);
    

       // console.log('Show orders', res);
        this.dataSource = new MatTableDataSource(res.details);
        console.log('Show orders', res.details);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  calculateSum(rejected:any[], itemQuantity:string):number{
    console.log()
    return rejected.reduce((sum, item) => sum + item[itemQuantity], 0);
  }


  
//nav totals/stats
  totalOrders:any=[];

  getTotalorders(): void {
    this._empService.getTotalorders().subscribe(res => {
        this.totalOrders.push(res);
        console.log(res);
      });
    }
//end of nav totals/stats

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