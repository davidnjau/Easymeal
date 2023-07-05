import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Trendingcombo } from '../trendingcombo';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MenudialogComponent } from '../menudialog/menudialog.component';
import { TrendingService } from '../trending.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.css']
})
export class MenuhomeComponent implements OnInit  {
 /*
  trendingcomboList : Trendingcombo []=[];
  trendingservice:TrendingService = inject(TrendingService);
  filteredcomboList: Trendingcombo[] = [];
  **/
  displayedColumns = [
    'id',
    'photo',
    'comboname',
    'value',
    'date',
    'action',
    /*'ordernumber',
    'price',
    'singlemealname',
    'singlemealprice',
    'singlemealphoto',
    'beveragename',
    'beverageprice',
    'beveragephoto',*/
    
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
  this.getTrendingcomboList();
}

openAddEditMealForm() {
  const dialogRef = this._dialog.open(MenudialogComponent,{width:"55%"});
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        console.log(val);
        this.getTrendingcomboList();
      }
    },
  });
}

getTrendingcomboList() {
  this._empService.getTrendingcomboList().subscribe({
    next: (res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: console.log,
  });
}


openAddEditSMealForm() {
  const dialogRef = this._dialog.open(MenudialogComponent,{width:"55%"});
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

openAddEditBevForm() {
  const dialogRef = this._dialog.open(MenudialogComponent,{width:"55%"});
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


deleteTrendingcombomeal(id: number) {
  this._empService.deleteTrendingcombomeal(id).subscribe({
    next: (res) => {
      //this._coreService.openSnackBar('Employee deleted!', 'done');
      Swal.fire("Meal deleted successfully!", 'success');
      this.getTrendingcomboList();
    },
    error: console.log,
  });
}
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

openEditForm(data: any) {
  const dialogRef = this._dialog.open(MenudialogComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
   next: (val) => {
    console.log('val', val);
      if (val) {
        this.getTrendingcomboList();
      }
   },
  });
}
openEditSForm(data: any) {
  const dialogRef = this._dialog.open(MenudialogComponent, {
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
openEditBForm(data: any) {
  const dialogRef = this._dialog.open(MenudialogComponent, {
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
