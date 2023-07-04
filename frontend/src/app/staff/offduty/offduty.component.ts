import { Component, Input } from '@angular/core';
import { Users } from 'src/app/users';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';


@Component({
  selector: 'app-offduty',
  templateUrl: './offduty.component.html',
  styleUrls: ['./offduty.component.css']
})
export class OffdutyComponent {
  @Input() users!:Users;
/*

  openDialog(){
    this.dialog.open(DialogBodyComponent,{
      width:"55%"
    })
  }

  constructor(private dialog:MatDialog){}*/
}
