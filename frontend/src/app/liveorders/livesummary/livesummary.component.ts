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
  selector: 'app-livesummary',
  templateUrl: './livesummary.component.html',
  styleUrls: ['./livesummary.component.css']
})

export class LivesummaryComponent implements OnInit{
  

  orders: Orderstatus[] = [
    {value: 'Shipped', viewValue: 'Shipped'},
    {value: 'Processing', viewValue: 'Processing'},
    {value: 'Delivered', viewValue: 'Delivered'},
    {value: 'Cancelled', viewValue: 'Cancelled'},
  ];
 
  liveorderForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: UsersService,
    private _dialogRef: MatDialogRef<LivesummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
    this.liveorderForm = this._fb.group({
      name:'',
      itemName:'',
      itemQuantity:'',
      itemValue:'',
      orderDate:'',
      itemStatus:'',
      action:'',
      imgicon: "../assets/user.png",
    });
  }
  
    ngOnInit(): void {
      console.log(this.data)
      this.liveorderForm.patchValue(this.data);
    }
  
  
  /*
    Reactiveform = new FormGroup({
      staffname: new FormControl("", Validators.required),
      mobile: new FormControl("", Validators.required),
      department: new FormControl("", Validators.required),
      position: new FormControl("", Validators.required),
      staffimg: new FormControl("")
    });*/
  
    
    onFormSubmit() {
      if (this.liveorderForm.valid) {
        if (this.data) {
          this._empService.updateLiveorder(this.data.id, this.liveorderForm.value).subscribe({
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
          this._empService.addLiveorder(this.liveorderForm.value).subscribe({
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
