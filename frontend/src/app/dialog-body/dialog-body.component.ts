import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../users.service';
import { CoreService } from '../core.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit{

  empForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: UsersService,
    private _dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      staffname: '',
      department: '',
      position: '',
      joined: '',
      mobile: '',
      action: '',
    });
  }
  //respdata: any;

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }


/*
  Reactiveform = new FormGroup({
    staffname: new FormControl("", Validators.required),
    mobile: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    position: new FormControl("", Validators.required),
    staffimg: new FormControl("")
  });

  */
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              //this._coreService.openSnackBar('Employee details updated!');
               Swal.fire("Employee details updated successfully!", 'success');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              //console.error(err);
              Swal.fire('Please Enter valid data)', 'error');
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            //this._coreService.openSnackBar('Employee added successfully');
            Swal.fire("Employee details added successfully!", 'success');
            this._dialogRef.close(true);
          },
          
          error: (err: any) => {
           // console.error(err);
           Swal.fire('Please Enter valid data)', 'error');
          },
        });
      }
    }
  }

}
