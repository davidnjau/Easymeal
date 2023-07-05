import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Trendingcombo } from 'src/app/trendingcombo';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MenudialogComponent } from 'src/app/menudialog/menudialog.component';
import { TrendingService } from 'src/app/trending.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { BeveragedialogComponent } from './beveragedialog/beveragedialog.component';

@Component({
  selector: 'app-menubeverages',
  templateUrl: './menubeverages.component.html',
  styleUrls: ['./menubeverages.component.css']
})
export class MenubeveragesComponent implements OnInit{
  displayedColumns = [
    'id',
    'beveragephoto',
    'beveragename',
    'beverageprice',
    'date',
    'action', 
    
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: TrendingService,
    //private _coreService: CoreService
  ) {}



  ////
  trendingcomboList : Trendingcombo[] = [];
  filteredcomboList: Trendingcombo[] = [];
//implementing filterresult event handler function to return the searched staff by department
filterResults(text: string) {
if (!text) {
  this.filteredcomboList = this.trendingcomboList;
}
this.filteredcomboList = this.trendingcomboList.filter(trendingcombo => trendingcombo?.comboname.toLowerCase().includes(text.toLowerCase()));
}
////


ngOnInit(): void {
  this.getBeverageList();
}



openAddEditBevForm() {
  const dialogRef = this._dialog.open(BeveragedialogComponent,{width:"55%"});
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        console.log(val);
        this.getBeverageList();
      }
    },
  });
}
getBeverageList() {
  this._empService.getBeverageList().subscribe({
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


deleteBeverage(id: number) {
  this._empService.deleteBeverage(id).subscribe({
    next: (res) => {
      //this._coreService.openSnackBar('Employee deleted!', 'done');
      Swal.fire("Meal deleted successfully!", 'success');
      this.getBeverageList();
    },
    error: console.log,
  });
}


openEditBForm(data: any) {
  const dialogRef = this._dialog.open(BeveragedialogComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
   next: (val) => {
    console.log('val', val);
      if (val) {
        this.getBeverageList();
      }
   },
  });
}

}
