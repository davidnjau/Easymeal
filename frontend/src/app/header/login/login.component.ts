import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/users.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  empForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: UsersService,
    private _dialogRef: MatDialogRef<LoginComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      id:'',
      username: '',
      phonenumber: '',
      password: '',
    });
  }
  //respdata: any;

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService.updateLogindetails(this.data.id, this.empForm.value).subscribe({
            next: (val: any) => {
              //this._coreService.openSnackBar('Employee details updated!');
              Swal.fire("Login details updated successfully!", 'success');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
              //Swal.fire('Please Enter valid data)', 'error');
            },
          });
      } else {
        console.log(this.empForm.value);
        
        this._empService.addLogindetails(this.empForm.value).subscribe({
          next: (val: any) => {
            Swal.fire("Login details added successfully!", 'success');
            this._dialogRef.close(true);
          },
          
          error: (err: any) => {
            console.error(err);
          // Swal.fire('Please Enter valid data)', 'error');
          },
        });
    }
  }
  }


}
