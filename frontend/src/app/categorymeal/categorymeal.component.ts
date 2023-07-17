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
  selector: 'app-categorymeal',
  templateUrl: './categorymeal.component.html',
  styleUrls: ['./categorymeal.component.css']
})
export class CategorymealComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: MenuProductsService,
    //private _coreService: CoreService
  ) {}

  cats: any = [];

getCategory() {
  this._empService.getCategory().subscribe(res =>{
    this.cats = res;
      /*this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;*/
  });
}
////
openAddCategoryForm() {
  const dialogRef = this._dialog.open(MenusinglemealsComponent,{width:"60%"});
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        console.log(val);
        this.getCategory();
      }
    },
  });
}
  ////
  ngOnInit(): void {
    this.getcomboList();
    this.getCategory();
  
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

openAddEditMealForm() {
  const dialogRef = this._dialog.open(MenudialogComponent,{width:"55%"});
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        //console.log(val);
        this.getcomboList();
      }
    },
  });
}



displayaddedcategory(){

}


}
