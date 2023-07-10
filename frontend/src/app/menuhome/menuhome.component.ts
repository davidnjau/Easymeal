import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Menu_products } from '../menu_products';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MenudialogComponent } from '../menudialog/menudialog.component';
import { MenusinglemealsComponent } from '../menu/menusinglemeals/menusinglemeals.component';
import { MenuProductsService } from '../menu-products.service'; 
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
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: MenuProductsService,
    //private _coreService: CoreService
  ) {}



  ////
  trendingcomboList : Menu_products[] = [];
  filteredcomboList: Menu_products[] = [];
//implementing filterresult event handler function to return the searched staff by department
filterResults(text: string) {
if (!text) {
  this.filteredcomboList = this.trendingcomboList;
}
this.filteredcomboList = this.trendingcomboList.filter(trendingcombo => trendingcombo?.comboname.toLowerCase().includes(text.toLowerCase()));
}
////


ngOnInit(): void {
  this.getcomboList();
}
////
openAddEditCategoryForm() {
  const dialogRef = this._dialog.open(MenusinglemealsComponent,{width:"60%"});
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        console.log(val);
        this.getcomboList();
      }
    },
  });
}
////

openAddEditMealForm() {
  const dialogRef = this._dialog.open(MenudialogComponent,{width:"55%"});
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        console.log(val);
        this.getcomboList();
      }
    },
  });
}

getcomboList() {
  this._empService.getcomboList().subscribe({
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


deletecombomeal(id: number) {
  this._empService.deletecombomeal(id).subscribe({
    next: (res) => {
      //this._coreService.openSnackBar('Employee deleted!', 'done');
      Swal.fire("Meal deleted successfully!", 'success');
      this.getcomboList();
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
        this.getcomboList();
      }
   },
  });
}

}
