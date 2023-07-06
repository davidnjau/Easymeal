import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Trendingcombo } from 'src/app/trendingcombo';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TrendingService } from 'src/app/trending.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { AddmealdialogComponent } from '../../addmealdialog/addmealdialog.component';

@Component({
  selector: 'app-singlemeal',
  templateUrl: './singlemeal.component.html',
  styleUrls: ['./singlemeal.component.css']
})
export class SinglemealComponent implements OnInit {
  displayedColumns = [
    'id',
    'singlemealphoto',
    'singlemealname',
    'singlemealprice',
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


ngOnInit(): void {
  this.getSinglemealList();
}

openAddEditSMealForm() {
  const dialogRef = this._dialog.open(AddmealdialogComponent,{width:"60%"});
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        console.log(val);
        this.getSinglemealList();
      }
    },
  });
}

getSinglemealList() {
  this._empService.getSinglemealList().subscribe({
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

deleteSinglemeal(id: number) {
  this._empService.deleteSinglemeal(id).subscribe({
    next: (res) => {
      //this._coreService.openSnackBar('Employee deleted!', 'done');
      Swal.fire("Meal deleted successfully!", 'success');
      this.getSinglemealList();
    },
    error: console.log,
  });
}


openEditSForm(data: any) {
  const dialogRef = this._dialog.open(AddmealdialogComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
   next: (val) => {
    console.log('val', val);
      if (val) {
        this.getSinglemealList();
      }
   },
  });
}

}
