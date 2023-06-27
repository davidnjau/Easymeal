import { Component, Input } from '@angular/core';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-offduty',
  templateUrl: './offduty.component.html',
  styleUrls: ['./offduty.component.css']
})
export class OffdutyComponent {
  @Input() users!:Users;
}
