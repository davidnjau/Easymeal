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

  combomealForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: MenuProductsService,
    private _dialogRef: MatDialogRef<MenudialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
    this.combomealForm = this._fb.group({
      id:'',
      itemUrl:'',
      itemName:'',
      itemValue:'',
      dateAdded:'',
      action:'',
    });
  }
  
    ngOnInit(): void {
      this.combomealForm.patchValue(this.data);
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

