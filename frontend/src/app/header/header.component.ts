import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../users.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private _empService: UsersService,
    //private _coreService: CoreService
  ) {}


  ngOnInit(): void {
   this.getLogindetails();
  }

  openUserLogin() {
    const dialogRef = this._dialog.open(LoginComponent,{width:"50%", height:"60%"});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
          this.getLogindetails();
        }
      },
    });
  }

  getLogindetails() {
    this._empService.getLogindetails().subscribe({
      next: (res) => {
      },
      error: console.log,
    });
  }


}
