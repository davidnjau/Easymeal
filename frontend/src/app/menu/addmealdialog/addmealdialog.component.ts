import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuProductsService } from 'src/app/menu-products.service';
//import { CoreService } from 'src/app/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmealdialog',
  templateUrl: './addmealdialog.component.html',
  styleUrls: ['./addmealdialog.component.css']
})
export class AddmealdialogComponent implements OnInit {

  //smealForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: MenuProductsService,
    private _dialogRef: MatDialogRef<AddmealdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ) {
    /*this.smealForm = this._fb.group({        //does the same fucntion as line 40 only that this has no validators
      id:'',
      itemUrl:'',
      itemName:'',
      itemValue:'',
      dateAdded:'',
      action:'',
    });*/
  }
  
    ngOnInit(): void {
      this.smealForm.patchValue(this.data);
    }
  
  
  
    smealForm = new FormGroup({
      id: new FormControl(""),
      itemUrl: new FormControl("", Validators.required),
      itemName: new FormControl("", Validators.required),
      itemValue: new FormControl("", Validators.required),
      dateAdded: new FormControl(""),
      action: new FormControl("")
    });
  
    
    onFormSubmit() {
      if (this.smealForm.valid) {
        if (this.data) {
          this._empService.updateSinglemeal(this.data.id, this.smealForm.value).subscribe({
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
          this._empService.addSinglemeal(this.smealForm.value).subscribe({
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

