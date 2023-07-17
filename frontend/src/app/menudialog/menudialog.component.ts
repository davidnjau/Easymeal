import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuProductsService } from '../menu-products.service';
import { CoreService } from '../core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menudialog',
  templateUrl: './menudialog.component.html',
  styleUrls: ['./menudialog.component.css']
})
export class MenudialogComponent implements OnInit{

  //combomealForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: MenuProductsService,
    private _dialogRef: MatDialogRef<MenudialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
   /* this.combomealForm = this._fb.group({
      id:'',
      itemUrl:'',
      itemName:'',
      itemValue:'',
      dateAdded:'',
      action:'',
    });*/ //same functionality as from line 40
  }
  
    ngOnInit(): void {
      this.combomealForm.patchValue(this.data);
    }
  
  
  
    combomealForm = new FormGroup({
     id: new FormControl(""),
      itemUrl: new FormControl("", Validators.required),
      itemName: new FormControl("", Validators.required),
      itemValue: new FormControl("", Validators.required),
      dateAdded: new FormControl(""),
      action: new FormControl("")
    });
  
    
    onFormSubmit() {
      if (this.combomealForm.valid) {
        if (this.data) {
          this._empService.updatecombomeal(this.data.id, this.combomealForm.value).subscribe({
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
        } else {
          this._empService.addcombomeal(this.combomealForm.value).subscribe({
            next: (value: any) => {
              console.log('valuesss', value.details[1].menuItems);
              
              //this._coreService.openSnackBar('Employee added successfully');
              Swal.fire("Meal details added successfully!", 'success');
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

