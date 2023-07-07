import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { CoreService } from '../core.service';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/users.service';

 //select dropdown interface
interface Quantitystatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inventorydialog',
  templateUrl: './inventorydialog.component.html',
  styleUrls: ['./inventorydialog.component.css']
})
export class InventorydialogComponent implements OnInit{

  //select dropdown array
  orders: Quantitystatus[] = [
    {value: 'Good', viewValue: 'Good'},
    {value: 'Low', viewValue: 'Low'},
  ];
 

  inventoryForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _empService: UsersService,
    private _dialogRef: MatDialogRef<InventorydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _coreService: CoreService
  ){
    this.inventoryForm = this._fb.group({
      itemid: '',
      itemname:'',
      datein: '',
      qtyin:'',
      currentqty:'',
      qtystatus:'',
      action:'',
    });
  }

  ngOnInit(): void {
    this.inventoryForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.inventoryForm.valid) {
      if (this.data) {
        this._empService.updateInventory(this.data.id, this.inventoryForm.value).subscribe({
            next: (val: any) => {
              //this._coreService.openSnackBar('Employee details updated!');
              Swal.fire("inventory details updated successfully!", 'success');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
              //Swal.fire('Please Enter valid data)', 'error');
            },
          });
      } else {
        this._empService.addInventory(this.inventoryForm.value).subscribe({
          next: (value: any) => {
            //this._coreService.openSnackBar('Employee added successfully');
            Swal.fire("Inventory details added successfully!", 'success');
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
