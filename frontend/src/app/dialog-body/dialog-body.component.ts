import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import * as alertify from 'alertifyjs';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit{
  
  constructor( /*private service: UsersService, public dialogref: MatDialogRef<DialogBodyComponent>,@Inject(MAT_DIALOG_DATA) public data:any*/) { }

  //respdata: any;

  ngOnInit(): void {
  }


  Reactiveform = new FormGroup({
    staffname: new FormControl("", Validators.required),
    mobile: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    position: new FormControl("", Validators.required),
    staffimg: new FormControl("")
  });

  SaveStaff(){
    if (this.Reactiveform.valid) {
      console.log(this.Reactiveform.getRawValue());
     /* this.service.Save(this.Reactiveform.getRawValue()); //.subscribe(result => {
        this.respdata = result;
        if (this.respdata.result == 'pass') {
          //successNotification() {
            Swal.fire("saved successfully.", 'success');
          
          /*
          alertify.success("saved successfully.")///
          this.dialogref.close();
        }
      });*/

    } else {
      Swal.fire('Please Enter valid data)', 'error');
      //alertify.error("Please Enter valid data")
    }
  }

}
