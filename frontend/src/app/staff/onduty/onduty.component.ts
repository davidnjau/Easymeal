import { Component, Input } from '@angular/core';
import { Users } from 'src/app/users';
import { StaffComponent } from '../staff.component';
@Component({
  selector: 'app-onduty',
  templateUrl: './onduty.component.html',
  styleUrls: ['./onduty.component.css']
})
export class OndutyComponent {
  @Input() users! :Users;
}
