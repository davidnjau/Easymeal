import { Component, Input } from '@angular/core';
import { Users } from 'src/app/users';
@Component({
  selector: 'app-onduty',
  templateUrl: './onduty.component.html',
  styleUrls: ['./onduty.component.css']
})
export class OndutyComponent {
  @Input() users! :Users;
}
