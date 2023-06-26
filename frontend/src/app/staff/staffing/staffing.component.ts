import { Component,Input } from '@angular/core';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.css']
})
export class StaffingComponent {
  @Input() users! :Users;
}
