import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../item.model'; 
import { ItemService } from '../item.service';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component'; 

@Component({
  selector: 'app-item',
  template: `
    <h1>Items</h1>
    <ul>
      <li *ngFor="let item of items">{{ item.name }}
        <button mat-icon-button (click)="deleteItem(item.id)">
          <mat-icon>delete</mat-icon>
        </button>
      </li>
    </ul>
    <button mat-raised-button color="primary" (click)="openAddDialog()">Add Item</button>
  `
})
export class ItemComponent implements OnInit {
  items: Item[] = [];

  constructor(private dialog: MatDialog, private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '250px',
      data: { name: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addItem(result);
      }
    });
  }

  addItem(item: Item) {
    this.itemService.addItem(item).subscribe(() => {
      this.getItems(); // Refresh the item list
    });
  }

  deleteItem(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(() => {
      this.getItems(); // Refresh the item list
    });
  }
}