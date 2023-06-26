import { Component,Input } from '@angular/core';
import { Users } from 'src/app/users';


@Component({
  selector: 'app-inventoryitems',
  templateUrl: './inventoryitems.component.html',
  styleUrls: ['./inventoryitems.component.css']
})
export class InventoryitemsComponent {
  @Input() users! :Users;
}
