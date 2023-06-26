import { Component, Input } from '@angular/core';
import { Trendingcombo } from 'src/app/trendingcombo';

@Component({
  selector: 'app-menusinglemeals',
  templateUrl: './menusinglemeals.component.html',
  styleUrls: ['./menusinglemeals.component.css']
})
export class MenusinglemealsComponent {
  @Input() trendingcombo! :Trendingcombo;
}
