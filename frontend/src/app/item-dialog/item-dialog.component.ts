import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-dialog',
  template: `
    <h2 mat-dialog-title>Add Item</h2>
    <mat-dialog-content>
      <mat-form-field>
        <input matInput [(ngModel)]="data.name" placeholder="Name">
      </mat-form-field>
      <mat-form-field>
        <textarea matInput [(ngModel)]="data.description" placeholder="Description"></textarea>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button (click)="onSave()">Save</button>
    </mat-dialog-actions>
  `
})
export class ItemDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
