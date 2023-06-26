import { Component, Input } from '@angular/core';
import { Trendingcombo } from 'src/app/trendingcombo';

@Component({
  selector: 'app-menubeverages',
  templateUrl: './menubeverages.component.html',
  styleUrls: ['./menubeverages.component.css']
})
export class MenubeveragesComponent {
  @Input() trendingcombo! :Trendingcombo;
}
