import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component'; 
import { UsersService } from 'src/app/users.service'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { Users } from 'src/app/users'; 
import { Staff } from 'src/app/staff';


@Component({
  selector: 'app-offduty',
  templateUrl: './offduty.component.html',
  styleUrls: ['./offduty.component.css']
})
export class OffdutyComponent implements OnInit {
 
  displayedColumns = [
    'imgicon',
    'staffname',
    'department',
    'position',
    'joined',
    'mobile',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: UsersService,
    //private _coreService: CoreService
  ) {}


  ////
    usersList : Staff[] = [];
    filteredusersList: Staff[] = [];
  //implementing filterresult event handler function to return the searched staff by department
 filterResults(text: string) {
  if (!text) {
    this.filteredusersList = this.usersList;
  }
  this.filteredusersList = this.usersList.filter(users => users?.staffname.toLowerCase().includes(text.toLowerCase()));
}
////


  ngOnInit(): void {
    this.getOffdutyEmployeeList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(DialogBodyComponent,{width:"60%", height:"80%"});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
          this.getOffdutyEmployeeList();
        }
      },
    });
  }

  getOffdutyEmployeeList() {
    this._empService.getOffdutyEmployeeList().subscribe({
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


  deleteOffdutyEmployee(id: number) {
    this._empService.deleteOffdutyEmployee(id).subscribe({
      next: (res) => {
        //this._coreService.openSnackBar('Employee deleted!', 'done');
        Swal.fire("Employee deleted successfully!", 'success');
        this.getOffdutyEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(DialogBodyComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
     next: (val) => {
      console.log('val', val);
        if (val) {
          this.getOffdutyEmployeeList();
        }
     },
    });
  }
}
