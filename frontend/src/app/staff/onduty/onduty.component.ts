import { Component, Input } from '@angular/core';
import { Users } from 'src/app/users';
import { StaffComponent } from '../staff.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';


@Component({
  selector: 'app-onduty',
  templateUrl: './onduty.component.html',
  styleUrls: ['./onduty.component.css']
})
export class OndutyComponent {
  @Input() users! :Users;


  openDialog(){
    this.dialog.open(DialogBodyComponent,{
      width:"55%"
    })
  }

  constructor(private dialog:MatDialog){}
}
