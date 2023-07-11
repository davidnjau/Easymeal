import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../users.service';
import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';


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
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      staffname: '',
      department: '',
      position: '',
      joined: '',
      mobile: '',
      action: '',
      imgicon: '',
      status:'',
    });
  }
  //respdata: any;

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
            next: (val: any) => {
              //this._coreService.openSnackBar('Employee details updated!');
              Swal.fire("Employee details updated successfully!", 'success');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
              //Swal.fire('Please Enter valid data)', 'error');
            },
          });
      } else {
        console.log(this.empForm.value);
        
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            //this._coreService.openSnackBar('Employee added successfully');
            Swal.fire("Employee details added successfully!", 'success');
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

  //file selector or image upload
    @Input()
        imgicon = '';
    
  onFileSelected(event){

    const file:File = event.target.files[0];

    if (file) {

        this.imgicon = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post('http://localhost:3000/allEmployees', this.imgicon )}
    }   
        

}
