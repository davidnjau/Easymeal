import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/users.service';
import Swal from 'sweetalert2';

interface Orderstatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-presummary',
  templateUrl: './presummary.component.html',
  styleUrls: ['./presummary.component.css']
})
export class PresummaryComponent implements OnInit{

  
  orders: Orderstatus[] = [
    {value: 'pending', viewValue: 'pending'},
    {value: 'pending', viewValue: 'Pending'},
    {value: 'pending', viewValue: 'pending'},
  ];
 
  preorderForm: FormGroup;
  
  
  constructor(
    private _fb: FormBuilder,
    private _empService: UsersService,
    private _dialogRef: MatDialogRef<PresummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
    this.preorderForm = this._fb.group({
      name:'',
      itemName:'',
      itemQuantity:'',
      itemValue:'',
      orderDate:'',
      itemStatus:'',
      action:'',
      itemUrl: "../assets/user.png",
    });
  }
  
    ngOnInit(): void {
      console.log(this.data)
      this.preorderForm.patchValue(this.data);
    }


    onFormSubmit() {
      if (this.preorderForm.valid) {
        if (this.data) {
          this._empService.updatePreorder(this.data.id, this.preorderForm.value).subscribe({
              next: (val: any) => {
                //this._coreService.openSnackBar('Employee details updated!');
                Swal.fire("Meal details updated successfully!", 'success');
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
                //Swal.fire('Please Enter valid data)', 'error');
              },
            });
        } /*else {
          this._empService.addPreorder(this.preorderForm.value).subscribe({
            next: (value: any) => {
              //this._coreService.openSnackBar('Employee added successfully');
              Swal.fire("Meal details added successfully!", 'success');
              this._dialogRef.close(true);
            },
            
            error: (err: any) => {
              console.error(err);
            // Swal.fire('Please Enter valid data)', 'error');
            },
          });
        }*/
      }
    }
}
