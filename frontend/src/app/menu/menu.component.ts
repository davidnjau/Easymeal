import { Component, Input} from '@angular/core';
import { Trendingcombo } from '../trendingcombo'; 
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{
 
  @Input() trendingcombo! :Trendingcombo;

}
