import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trendingcombo } from '../trendingcombo';

//import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-trendingcombo',
  templateUrl: './trendingcombo.component.html',
  styleUrls: ['./trendingcombo.component.css']
})

export class TrendingcomboComponent {
  @Input() trendingcombo! :Trendingcombo;

}
