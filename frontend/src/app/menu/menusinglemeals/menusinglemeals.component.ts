import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuProductsService } from 'src/app/menu-products.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menusinglemeals',
  templateUrl: './menusinglemeals.component.html',
  styleUrls: ['./menusinglemeals.component.css']
})
export class MenusinglemealsComponent implements OnInit{

  categoryForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: MenuProductsService,
    private _dialogRef: MatDialogRef<MenusinglemealsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
    this.categoryForm = this._fb.group({
      categoryName:'',
    });
  }
  
    ngOnInit(): void {
      this.categoryForm.patchValue(this.data);
    }

    
    onFormSubmit() {
      if (this.categoryForm.valid) {
        if (this.data) {
          this._empService.updateCategory(this.data.categoryName, this.categoryForm.value).subscribe({
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
          this._empService.addCategory(this.categoryForm.value).subscribe({
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