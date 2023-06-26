import { Component,Input } from '@angular/core';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-livesummary',
  templateUrl: './livesummary.component.html',
  styleUrls: ['./livesummary.component.css']
})
export class LivesummaryComponent {
  @Input() users! :Users;
}
