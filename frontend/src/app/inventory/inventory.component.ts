import { Component, OnInit, ViewChild,inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { Users } from '../users';
import { UsersService } from '../users.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { InventorydialogComponent } from './inventorydialog/inventorydialog.component';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent  implements OnInit {

  displayedColumns = [
    'itemid',
    'itemname',
    'datein',
    'qtyin',
    'currentqty',
    'qtystatus',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: UsersService,
    //private _coreService: CoreService
  ){
    this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  }
  

  
  ////
    usersList : Users[] = [];
    filteredusersList: Users[] = [];
  //implementing filterresult event handler function to return the searched staff by department
  filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
  }
  this.filteredusersList = this.usersList.filter(users => users?.staffname.toLowerCase().includes(text.toLowerCase()));
  }
  ////

 /////
  ///combodishes summary details array-mock (transfered to trending service)
  trendingcomboList : Trendingcombo []=[];
  trendingservice:TrendingService = inject(TrendingService);
 ////

  ngOnInit(): void {
    this.getInventoryList();
  }

  openAddEditInvForm() {
    const dialogRef = this._dialog.open(InventorydialogComponent,{
      width:"45%"});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
          this.getInventoryList();
        }
      },
    });
  }

  getInventoryList() {
    this._empService.getInventoryList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteInventoryitem(itemid: number) {
    this._empService.deleteEmployee(itemid).subscribe({
      next: (res) => {
        //this._coreService.openSnackBar('Employee deleted!', 'done');
        Swal.fire("Employee deleted successfully!", 'success');
        this.getInventoryList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(InventorydialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
     next: (val) => {
      console.log('val', val);
        if (val) {
          this.getInventoryList();
        }
     },
    });
  }

}